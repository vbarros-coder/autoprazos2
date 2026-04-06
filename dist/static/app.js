// ─────────────────────────────────────────────────────────────────────────────
// NIE — Dashboard Logic v2.0
// ─────────────────────────────────────────────────────────────────────────────

let allData = [];
let filteredData = [];
let activeKPIFilter = null;
let currentSort = { field: '_urg', dir: 'asc' };
let currentPage = 1;
const rowsPerPage = 15;

// ─────────────────────────────────────────────────────────────────────────────
// INICIALIZAÇÃO
// ─────────────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  updateClock();
  setInterval(updateClock, 1000);
  
  // Tentar carregar URL do GAS do localStorage
  const savedUrl = localStorage.getItem('gas-url');
  if (savedUrl) document.getElementById('gas-url').value = savedUrl;

  // Iniciar com KPIs zerados e tabela vazia
  renderKPIs();
  renderTable();
});

function updateClock() {
  const now = new Date();
  const t = document.getElementById('clock-t');
  const d = document.getElementById('clock-d');
  if (t) t.textContent = now.toLocaleTimeString('pt-BR');
  if (d) d.textContent = now.toLocaleDateString('pt-BR', { weekday: 'short', day: '2-digit', month: '2-digit', year: 'numeric' });
}

// ─────────────────────────────────────────────────────────────────────────────
// PARSING & UPLOAD
// ─────────────────────────────────────────────────────────────────────────────

window.handleUpload = function(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    const data = new Uint8Array(e.target.result);
    const workbook = XLSX.read(data, { type: 'array', cellDates: true });
    
    let parsed = [];
    let source = '';

    // Tentar identificar o formato pela aba ou conteúdo
    if (workbook.SheetNames.includes('Sinistros')) {
      parsed = parseControlePrazos(workbook.Sheets['Sinistros']);
      source = 'Controle de Prazos (Aba Sinistros)';
    } else if (workbook.SheetNames.includes('Baruc')) {
      parsed = parseBaruc(workbook.Sheets['Baruc']);
      source = 'Exportação Baruc (Aba Baruc)';
    } else {
      // Fallback: Tenta a primeira aba e detecta pelo cabeçalho
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      const rows = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });
      const headers = (rows[0] || []).map(h => String(h || '').toLowerCase());
      
      if (headers.some(h => h.includes('ref. expediente') || h.includes('addvalora'))) {
        parsed = parseBaruc(firstSheet);
        source = 'Detectado: Formato Baruc';
      } else {
        parsed = parseControlePrazos(firstSheet);
        source = 'Detectado: Formato Controle';
      }
    }

    if (parsed.length > 0) {
      allData = parsed;
      document.getElementById('data-tag').innerHTML = `<i class="fas fa-check-circle text-green-500"></i> ${parsed.length} processos · ${source}`;
      
      // Mostrar barra de sincronização se houver dados
      document.getElementById('sync-bar').classList.add('show');
      document.getElementById('sync-status').textContent = `Pronto para sincronizar ${parsed.length} registros`;

      fillFilters();
      applyF();
      showToast(`Sucesso! ${parsed.length} registros carregados.`, 'ok');
    } else {
      showToast('Nenhum dado válido encontrado na planilha.', 'err');
    }
  };
  reader.readAsArrayBuffer(file);
};

// Parser para o formato "Controle de Prazos" (Planilha oficial NIE)
function parseControlePrazos(ws) {
  const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: null });
  const result = [];
  const today = new Date();
  today.setHours(0,0,0,0);

  // Geralmente começa na linha 3 (index 2)
  for (let i = 2; i < rows.length; i++) {
    const r = rows[i];
    const addvalora = r[3]; // Col D
    if (!addvalora) continue;

    const dataEntrada = toDate(r[10]); // Col K
    const dataVistoria = toDate(r[11]); // Col L
    const prazoD2 = toDate(r[13]); // Col N
    const dataEnvioPrelim = toDate(r[16]); // Col Q

    const diasAbertos = dataEntrada ? Math.floor((today - dataEntrada) / 86400000) : null;
    const urg = calcUrgencia(r[0], prazoD2, today, dataEntrada);
    
    // Cálculo Ciclo 90 dias
    let prazo90 = null;
    if (dataEntrada) {
      prazo90 = new Date(dataEntrada);
      prazo90.setDate(prazo90.getDate() + 90);
    }

    result.push({
      addvalora: String(addvalora).trim(),
      segurado: norm(r[8]),
      regulador: norm(r[4]),
      seguradora: norm(r[6]),
      corretora: norm(r[7]),
      escritorio: norm(r[2]),
      refCia: norm(r[5]),
      status: norm(r[1]),
      situacao: norm(r[0]),
      data_sinistro: toDate(r[9]),
      data_entrada: dataEntrada,
      data_vistoria: dataVistoria,
      prazo_d2: prazoD2,
      prazo_90d: prazo90,
      data_envio_prelim: dataEnvioPrelim,
      data_ultimo_doc: toDate(r[20]) || toDate(r[21]), // Tenta Col U ou V
      status_prelim: norm(r[18]),
      prorrogacao: norm(r[26]),
      _diasAbertos: diasAbertos,
      _urg: urg
    });
  }
  return result;
}

// Parser para o formato "Baruc" (Exportação bruta)
function parseBaruc(ws) {
  const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: null });
  const result = [];
  const today = new Date();
  today.setHours(0,0,0,0);

  if (rows.length < 2) return [];
  const hdrs = (rows[0] || []).map(h => String(h || '').toLowerCase());
  
  const col = (name) => hdrs.findIndex(h => h.includes(name.toLowerCase()));
  const iRef = col('ref. expediente') >= 0 ? col('ref. expediente') : col('addvalora');
  const iSegurado = col('segurado');
  const iRegulador = col('regulador');
  const iStatus = col('status do proc');
  const iSit = col('situação');
  const iCia = col('seguradora');
  const iEntrada = col('data da entrada');
  const iVistoria = col('data da vistoria');
  const iRefCia = col('ref. cia.');
  const iCorretora = col('corretora');
  const iEscritorio = col('escritório');
  const iDataSinistro = col('data do sinistro');
  const iRelPrelim = col('relatorio preliminar');
  const iUltimoDoc = col('último doc') >= 0 ? col('último doc') : col('ultimo doc');

  for (let i = 1; i < rows.length; i++) {
    const r = rows[i];
    if (!r[iRef]) continue;

    const entrada = toDate(r[iEntrada]);
    const vistoria = toDate(r[iVistoria]);
    let prazo = null;
    if (vistoria) {
      prazo = new Date(vistoria);
      prazo.setDate(prazo.getDate() + 2); // Simplificado para D+2
    }

    const diasAbertos = entrada ? Math.floor((today - entrada) / 86400000) : null;
    const urg = calcUrgencia(r[iSit], prazo, today, entrada);

    // Cálculo Ciclo 90 dias
    let prazo90 = null;
    if (entrada) {
      prazo90 = new Date(entrada);
      prazo90.setDate(prazo90.getDate() + 90);
    }

    result.push({
      addvalora: String(r[iRef]).trim(),
      segurado: norm(r[iSegurado]),
      regulador: norm(r[iRegulador]),
      seguradora: norm(r[iCia]),
      corretora: norm(r[iCorretora]),
      escritorio: norm(r[iEscritorio]),
      refCia: norm(r[iRefCia]),
      status: norm(r[iStatus]),
      situacao: norm(r[iSit]),
      data_sinistro: toDate(r[iDataSinistro]),
      data_entrada: entrada,
      data_vistoria: vistoria,
      prazo_d2: prazo,
      prazo_90d: prazo90,
      data_envio_prelim: toDate(r[iRelPrelim]),
      data_ultimo_doc: toDate(r[iUltimoDoc]),
      _diasAbertos: diasAbertos,
      _urg: urg
    });
  }
  return result;
}

function toDate(v) {
  if (!v) return null;
  if (v instanceof Date) return v;
  const d = new Date(v);
  return isNaN(d) ? null : d;
}

// Normalização de strings (remove "nãohá", limpa espaços, etc)
function norm(str) {
  if (!str) return '—';
  const s = String(str).trim();
  const lower = s.toLowerCase().replace(/\s/g, '');
  if (lower === 'nãohá' || lower === 'nãohá' || lower === 'naoha' || lower === 'nãoha' || lower === 'nãoha') return '—';
  return s;
}

function calcUrgencia(situacao, prazo, today, entrada) {
  const sit = String(situacao || '').toLowerCase();
  if (sit.includes('encerrad') || sit.includes('fechad')) return 'encerrado';
  
  const order = { 'critico': 3, 'alerta': 2, 'atencao': 1, 'ok': 0, 'encerrado': -1 };
  let urgD2 = 'ok';
  let urg90 = 'ok';

  // Regra 1: Prazo D+2
  if (prazo) {
    const diff = Math.floor((prazo - today) / 86400000);
    if (diff < 0) urgD2 = 'critico';
    else if (diff <= 3) urgD2 = 'alerta';
    else if (diff <= 7) urgD2 = 'atencao';
  }

  // Regra 2: Ciclo 90 dias
  if (entrada) {
    const p90 = new Date(entrada);
    p90.setDate(p90.getDate() + 90);
    const diff90 = Math.floor((p90 - today) / 86400000);
    
    if (diff90 < 0) urg90 = 'critico';
    else if (diff90 <= 5) urg90 = 'alerta';
    else if (diff90 <= 15) urg90 = 'atencao';
  }

  // Retorna o mais urgente entre os dois critérios
  return order[urg90] > order[urgD2] ? urg90 : urgD2;
}

// ─────────────────────────────────────────────────────────────────────────────
// FILTROS & UI
// ─────────────────────────────────────────────────────────────────────────────

function fillFilters() {
  const regs = [...new Set(allData.map(d => d.regulador))].sort();
  const fReg = document.getElementById('f-reg');
  fReg.innerHTML = '<option value="">Todos os Reguladores</option>' + 
    regs.map(r => `<option value="${r}">${r}</option>`).join('');

  const stats = [...new Set(allData.map(d => d.status))].sort();
  const fStat = document.getElementById('f-status');
  fStat.innerHTML = '<option value="">Todos os Status</option>' + 
    stats.map(s => `<option value="${s}">${s}</option>`).join('');
}

window.applyF = function() {
  const term = document.getElementById('srch').value.toLowerCase();
  const reg = document.getElementById('f-reg').value;
  const stat = document.getElementById('f-status').value;

  filteredData = allData.filter(d => {
    if (activeKPIFilter && d._urg !== activeKPIFilter) return false;
    if (reg && d.regulador !== reg) return false;
    if (stat && d.status !== stat) return false;
    if (term) {
      const hay = `${d.addvalora} ${d.segurado} ${d.regulador} ${d.seguradora}`.toLowerCase();
      if (!hay.includes(term)) return false;
    }
    return true;
  });

  currentPage = 1;
  renderKPIs();
  renderTable();
};

window.setKPIFilter = function(urg) {
  if (activeKPIFilter === urg) activeKPIFilter = null;
  else activeKPIFilter = urg;
  applyF();
};

function renderKPIs() {
  const crit = allData.filter(d => d._urg === 'critico').length;
  const alrt = allData.filter(d => d._urg === 'alerta').length;
  const aten = allData.filter(d => d._urg === 'atencao').length;
  const ok   = allData.filter(d => d._urg === 'ok').length;
  const enc  = allData.filter(d => d._urg === 'encerrado').length;

  const grid = document.getElementById('kpi-grid');
  
  if (allData.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full flex flex-col items-center py-12 text-gray-400">
        <i class="fas fa-inbox text-5xl mb-4 opacity-20"></i>
        <p>Importe uma planilha para visualizar os indicadores</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = `
    <div class="kpi-card red ${activeKPIFilter === 'critico' ? 'active-filter' : ''}" onclick="setKPIFilter('critico')">
      <div class="kpi-icon"><i class="fas fa-fire"></i></div>
      <div class="kpi-info"><h3>${crit}</h3><p>Críticos</p></div>
    </div>
    <div class="kpi-card yellow ${activeKPIFilter === 'alerta' ? 'active-filter' : ''}" onclick="setKPIFilter('alerta')">
      <div class="kpi-icon"><i class="fas fa-exclamation-triangle"></i></div>
      <div class="kpi-info"><h3>${alrt}</h3><p>Em Alerta</p></div>
    </div>
    <div class="kpi-card orange ${activeKPIFilter === 'atencao' ? 'active-filter' : ''}" onclick="setKPIFilter('atencao')">
      <div class="kpi-icon"><i class="fas fa-eye"></i></div>
      <div class="kpi-info"><h3>${aten}</h3><p>Atenção</p></div>
    </div>
    <div class="kpi-card green ${activeKPIFilter === 'ok' ? 'active-filter' : ''}" onclick="setKPIFilter('ok')">
      <div class="kpi-icon"><i class="fas fa-check-circle"></i></div>
      <div class="kpi-info"><h3>${ok}</h3><p>No Prazo</p></div>
    </div>
    <div class="kpi-card gray ${activeKPIFilter === 'encerrado' ? 'active-filter' : ''}" onclick="setKPIFilter('encerrado')">
      <div class="kpi-icon"><i class="fas fa-archive"></i></div>
      <div class="kpi-info"><h3>${enc}</h3><p>Encerrados</p></div>
    </div>
  `;
}

function renderTable() {
  const tbody = document.getElementById('tbl-body');
  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const page = filteredData.slice(start, end);

  if (page.length === 0) {
    tbody.innerHTML = '<tr><td colspan="10" class="p-8 text-center text-gray-400">Nenhum processo encontrado.</td></tr>';
    return;
  }

  tbody.innerHTML = page.map(d => {
    const urgMap = {
      critico: '<span class="px-2 py-1 rounded-full bg-red-100 text-red-800 text-[10px] font-bold">CRÍTICO</span>',
      alerta: '<span class="px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 text-[10px] font-bold">ALERTA</span>',
      atencao: '<span class="px-2 py-1 rounded-full bg-orange-100 text-orange-800 text-[10px] font-bold">ATENÇÃO</span>',
      ok: '<span class="px-2 py-1 rounded-full bg-green-100 text-green-800 text-[10px] font-bold">OK</span>',
      encerrado: '<span class="px-2 py-1 rounded-full bg-gray-100 text-gray-800 text-[10px] font-bold">FECHADO</span>'
    };

    return `
      <tr>
        <td class="font-bold text-blue-900">${d.addvalora}</td>
        <td title="${d.segurado}">${d.segurado.substring(0,25)}${d.segurado.length>25?'...':''}</td>
        <td>${d.regulador}</td>
        <td>${d.seguradora}</td>
        <td><span class="text-[11px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-100">${d.status}</span></td>
        <td>${d.data_entrada ? d.data_entrada.toLocaleDateString('pt-BR') : '—'}</td>
        <td class="font-semibold bg-green-50/50 border-x border-green-100">${d.prazo_d2 ? d.prazo_d2.toLocaleDateString('pt-BR') : '—'}</td>
        <td class="font-semibold bg-green-50/50 border-x border-green-100">${d.prazo_90d ? d.prazo_90d.toLocaleDateString('pt-BR') : '—'}</td>
        <td class="font-bold bg-green-50/50 border-x border-green-100 ${d._diasAbertos > 60 ? 'text-red-600' : 'text-green-700'}">${d._diasAbertos || 0}d</td>
        <td>${urgMap[d._urg]}</td>
        <td>
          <button onclick="viewDetail('${d.addvalora}')" class="text-blue-600 hover:text-blue-800"><i class="fas fa-eye"></i></button>
        </td>
      </tr>
    `;
  }).join('');

  renderPagination();
}

function renderPagination() {
  const pg = document.getElementById('pg');
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  
  pg.innerHTML = `
    <div class="text-gray-500 text-xs">Mostrando ${filteredData.length} de ${allData.length} processos</div>
    <div class="flex gap-1">
      <button onclick="changePage(${currentPage-1})" ${currentPage===1?'disabled':''} class="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-30">Anterior</button>
      <span class="px-3 py-1 bg-blue-900 text-white rounded text-xs flex items-center">${currentPage} / ${totalPages || 1}</span>
      <button onclick="changePage(${currentPage+1})" ${currentPage>=totalPages?'disabled':''} class="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-30">Próximo</button>
    </div>
  `;
}

window.changePage = function(p) {
  currentPage = p;
  renderTable();
};

window.sortBy = function(field) {
  if (currentSort.field === field) currentSort.dir = currentSort.dir === 'asc' ? 'desc' : 'asc';
  else { currentSort.field = field; currentSort.dir = 'asc'; }

  allData.sort((a,b) => {
    let va = a[field], vb = b[field];
    if (va instanceof Date) return currentSort.dir === 'asc' ? va - vb : vb - va;
    if (typeof va === 'string') return currentSort.dir === 'asc' ? va.localeCompare(vb) : vb.localeCompare(va);
    return currentSort.dir === 'asc' ? va - vb : vb - va;
  });
  applyF();
};

// ─────────────────────────────────────────────────────────────────────────────
// SINCRONIZAÇÃO GOOGLE SHEETS
// ─────────────────────────────────────────────────────────────────────────────

window.syncSingle = async function(ref) {
  const d = allData.find(x => x.addvalora === ref);
  if (!d) return;

  const url = document.getElementById('gas-url').value.trim();
  if (!url) {
    showToast('Informe a URL do Google Apps Script', 'err');
    return;
  }

  try {
    showToast(`Sincronizando processo ${ref}...`, 'wrn');
    await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify([d])
    });
    showToast(`Processo ${ref} sincronizado!`, 'ok');
  } catch (err) {
    console.error(err);
    showToast('Erro ao sincronizar processo individual.', 'err');
  }
};

window.syncGoogleSheets = async function() {
  const url = document.getElementById('gas-url').value.trim();
  if (!url) {
    showToast('Informe a URL do Google Apps Script', 'err');
    return;
  }
  localStorage.setItem('gas-url', url);

  const btn = document.getElementById('btn-sync');
  const fill = document.getElementById('sync-fill');
  btn.disabled = true;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';

  // Enviar em lotes de 50 para evitar timeout
  const batchSize = 50;
  const total = allData.length;
  let successCount = 0;

  try {
    for (let i = 0; i < total; i += batchSize) {
      const batch = allData.slice(i, i + batchSize);
      const response = await fetch(url, {
        method: 'POST',
        mode: 'no-cors', // Necessário para GAS WebApp
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(batch)
      });
      
      successCount += batch.length;
      const pct = Math.round((successCount / total) * 100);
      fill.style.width = `${pct}%`;
      document.getElementById('sync-status').textContent = `Enviando... ${pct}%`;
    }

    showToast(`Sucesso! ${total} registros sincronizados.`, 'ok');
    document.getElementById('sync-status').textContent = 'Sincronização concluída com sucesso!';
  } catch (err) {
    console.error(err);
    showToast('Erro na sincronização. Verifique a URL.', 'err');
    document.getElementById('sync-status').textContent = 'Erro ao sincronizar.';
  } finally {
    btn.disabled = false;
    btn.innerHTML = '<i class="fas fa-sync-alt"></i> Sincronizar';
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// MODAL & DETALHES
// ─────────────────────────────────────────────────────────────────────────────

window.viewDetail = function(ref) {
  const d = allData.find(x => x.addvalora === ref);
  if (!d) return;

  const mTitle = document.getElementById('m-title');
  const mBody = document.getElementById('m-body');
  
  mTitle.textContent = `Processo: ${d.addvalora}`;
  
  const fmt = (date) => date ? date.toLocaleDateString('pt-BR') : '—';
  const fmtISO = (date) => {
    if (!date) return '';
    try {
      const d = new Date(date);
      return d.toISOString().split('T')[0];
    } catch(e) { return ''; }
  };

  mBody.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
      <div class="bg-gray-50 p-2 rounded border border-gray-100">
        <label class="block text-[9px] font-bold text-gray-400 uppercase tracking-wider">Segurado</label>
        <div class="font-semibold text-gray-800">${d.segurado}</div>
      </div>
      <div class="bg-gray-50 p-2 rounded border border-gray-100">
        <label class="block text-[9px] font-bold text-gray-400 uppercase tracking-wider">Regulador</label>
        <div class="font-semibold text-gray-800">${d.regulador}</div>
      </div>
      <div class="bg-gray-50 p-2 rounded border border-gray-100">
        <label class="block text-[9px] font-bold text-gray-400 uppercase tracking-wider">Seguradora</label>
        <div class="font-semibold text-gray-800">${d.seguradora}</div>
      </div>
      <div class="bg-gray-50 p-2 rounded border border-gray-100">
        <label class="block text-[9px] font-bold text-gray-400 uppercase tracking-wider">Corretora</label>
        <div class="font-semibold text-gray-800">${d.corretora || '—'}</div>
      </div>
      <div class="bg-gray-50 p-2 rounded border border-gray-100">
        <label class="block text-[9px] font-bold text-gray-400 uppercase tracking-wider">Escritório</label>
        <div class="font-semibold text-gray-800">${d.escritorio || '—'}</div>
      </div>
      <div class="bg-gray-50 p-2 rounded border border-gray-100">
        <label class="block text-[9px] font-bold text-gray-400 uppercase tracking-wider">Ref. Companhia</label>
        <div class="font-semibold text-gray-800">${d.refCia || '—'}</div>
      </div>
      
      <div class="col-span-full border-t border-gray-200 my-1 pt-2">
        <h4 class="text-[10px] font-bold text-blue-900 uppercase tracking-widest mb-2">Status e Prazos</h4>
      </div>

      <div class="bg-blue-50/50 p-2 rounded border border-blue-100">
        <label class="block text-[9px] font-bold text-blue-400 uppercase tracking-wider">Situação</label>
        <div class="font-semibold text-blue-900">${d.situacao}</div>
      </div>
      <div class="bg-blue-50/50 p-2 rounded border border-blue-100">
        <label class="block text-[9px] font-bold text-blue-400 uppercase tracking-wider">Status do Processo</label>
        <div class="font-semibold text-blue-900">${d.status}</div>
      </div>
      <div class="bg-blue-50/50 p-2 rounded border border-blue-100">
        <label class="block text-[9px] font-bold text-blue-400 uppercase tracking-wider">Dias em Aberto</label>
        <div class="font-bold text-blue-900 text-lg">${d._diasAbertos || 0} dias</div>
      </div>

      <div class="bg-white p-2 rounded border border-gray-100">
        <label class="block text-[9px] font-bold text-gray-400 uppercase tracking-wider">Data Sinistro</label>
        <div class="font-medium">${fmt(d.data_sinistro)}</div>
      </div>
      <div class="bg-white p-2 rounded border border-gray-100">
        <label class="block text-[9px] font-bold text-gray-400 uppercase tracking-wider">Data Entrada</label>
        <div class="font-medium">${fmt(d.data_entrada)}</div>
      </div>
      <div class="bg-white p-2 rounded border border-gray-100">
        <label class="block text-[9px] font-bold text-gray-400 uppercase tracking-wider">Data Vistoria</label>
        <div class="font-medium">${fmt(d.data_vistoria)}</div>
      </div>

      <div class="bg-blue-100/50 p-3 rounded border border-blue-200 col-span-1 md:col-span-2 lg:col-span-1">
        <label class="block text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-2">
          <i class="fas fa-edit mr-1"></i> Último Documento
        </label>
        <input type="date" id="edit-last-doc" value="${fmtISO(d.data_ultimo_doc)}" 
          class="w-full bg-white border border-blue-300 rounded px-2 py-1 text-sm font-semibold text-blue-900 outline-none focus:ring-2 focus:ring-blue-400"
          onchange="updateLastDoc('${d.addvalora}', this.value)"/>
        <p class="text-[9px] text-blue-500 mt-1 italic">* Edição manual habilitada</p>
      </div>

      <div class="bg-orange-50/50 p-2 rounded border border-orange-100">
        <label class="block text-[9px] font-bold text-orange-400 uppercase tracking-wider">Prazo Preliminar (D+2)</label>
        <div class="font-bold text-orange-700">${fmt(d.prazo_d2)}</div>
      </div>
      <div class="bg-green-50/50 p-2 rounded border border-green-100">
        <label class="block text-[9px] font-bold text-green-600 uppercase tracking-wider">Ciclo Regulatório (90 dias)</label>
        <div class="font-bold text-green-700">${fmt(d.prazo_90d)}</div>
      </div>
      <div class="bg-orange-50/50 p-2 rounded border border-orange-100">
        <label class="block text-[9px] font-bold text-orange-400 uppercase tracking-wider">Envio Preliminar</label>
        <div class="font-semibold text-orange-700">${fmt(d.data_envio_prelim)}</div>
      </div>
      <div class="bg-orange-50/50 p-2 rounded border border-orange-100">
        <label class="block text-[9px] font-bold text-orange-400 uppercase tracking-wider">Status Preliminar</label>
        <div class="font-semibold text-orange-700">${d.status_prelim || '—'}</div>
      </div>

      ${d.prorrogacao && d.prorrogacao !== '—' ? `
      <div class="col-span-full bg-yellow-50 p-3 rounded border border-yellow-200 mt-2">
        <label class="block text-[9px] font-bold text-yellow-600 uppercase tracking-wider">Informações de Prorrogação</label>
        <div class="text-yellow-900 font-medium">${d.prorrogacao}</div>
      </div>
      ` : ''}
    </div>
    <div class="mt-6 flex justify-end gap-3">
      <button onclick="closeM()" class="bg-gray-200 text-gray-700 px-6 py-2 rounded font-bold hover:bg-gray-300 transition-colors">Fechar</button>
      <button onclick="syncSingle('${d.addvalora}')" class="bg-blue-900 text-white px-6 py-2 rounded font-bold hover:bg-blue-800 transition-colors">
        <i class="fas fa-sync-alt mr-2"></i> Sincronizar Agora
      </button>
    </div>
  `;
  
  document.getElementById('modal-ov').classList.add('show');
};

window.updateLastDoc = function(ref, newValue) {
  const d = allData.find(x => x.addvalora === ref);
  if (d) {
    d.data_ultimo_doc = newValue ? new Date(newValue + 'T12:00:00') : null;
    showToast(`Data do último documento atualizada para ${ref}`, 'ok');
    applyF(); // Atualiza a tabela se necessário
  }
};

window.closeM = function() {
  document.getElementById('modal-ov').classList.remove('show');
};

// ─────────────────────────────────────────────────────────────────────────────
// TOASTS & EXPORT
// ─────────────────────────────────────────────────────────────────────────────

function showToast(msg, type) {
  const container = document.getElementById('toast-c');
  const toast = document.createElement('div');
  const colors = {
    ok: 'bg-green-600',
    err: 'bg-red-600',
    wrn: 'bg-orange-600'
  };
  toast.className = `${colors[type]} text-white px-4 py-3 rounded-lg shadow-xl flex items-center gap-3 animate-bounce-in`;
  toast.innerHTML = `<i class="fas ${type==='ok'?'fa-check-circle':'fa-exclamation-circle'}"></i> <span>${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}

window.exportCSV = function() {
  if (filteredData.length === 0) return;
  const headers = ['Addvalora', 'Segurado', 'Regulador', 'Seguradora', 'Status', 'Entrada', 'Prazo', 'Dias'];
  const rows = filteredData.map(d => [
    d.addvalora, d.segurado, d.regulador, d.seguradora, d.status,
    d.data_entrada ? d.data_entrada.toLocaleDateString('pt-BR') : '',
    d.prazo_d2 ? d.prazo_d2.toLocaleDateString('pt-BR') : '',
    d._diasAbertos
  ]);
  
  let csv = headers.join(';') + '\n';
  rows.forEach(r => csv += r.join(';') + '\n');
  
  const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `NIE_Dashboard_${new Date().toLocaleDateString()}.csv`;
  link.click();
};
