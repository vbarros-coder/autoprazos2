# NIE — Dashboard de Prazos Regulatórios

Dashboard para monitoramento de prazos regulatórios da Addvalora Brasil.

## 📁 Estrutura do Projeto

- `src/index.tsx`: Ponto de entrada da aplicação (Hono App).
- `public/`: Arquivos estáticos (imagens, scripts frontend, dados JSON).
- `docs/`: Documentação e scripts auxiliares.
  - `docs/exemplos/`: Planilhas de exemplo para teste.
  - `docs/NIE_AppScript.gs`: Código para o Google Apps Script (Sincronização).
- `dist/`: Pasta gerada após o build.

## 🚀 Comandos

### Instalação
```bash
npm install
```

### Desenvolvimento Local
```bash
npm run dev
```

### Visualização de Produção
```bash
npm run build
npm run preview
```

### Deploy (Cloudflare Pages)
```bash
npm run deploy
```

## ⚙️ Sincronização com Google Sheets

1. No Google Sheets, vá em **Extensões** > **Apps Script**.
2. Copie o conteúdo de `docs/NIE_AppScript.gs`.
3. Publique como **App da Web** (Acesso: Qualquer pessoa).
4. Use a URL gerada no campo de sincronização do Dashboard.
