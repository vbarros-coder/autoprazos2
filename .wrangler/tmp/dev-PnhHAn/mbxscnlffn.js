var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// .wrangler/tmp/pages-Q8Hee2/bundledWorker-0.5106296410988481.mjs
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
var kt = Object.defineProperty;
var Ue = /* @__PURE__ */ __name2((e) => {
  throw TypeError(e);
}, "Ue");
var At = /* @__PURE__ */ __name2((e, t, r) => t in e ? kt(e, t, { enumerable: true, configurable: true, writable: true, value: r }) : e[t] = r, "At");
var u = /* @__PURE__ */ __name2((e, t, r) => At(e, typeof t != "symbol" ? t + "" : t, r), "u");
var He = /* @__PURE__ */ __name2((e, t, r) => t.has(e) || Ue("Cannot " + r), "He");
var o = /* @__PURE__ */ __name2((e, t, r) => (He(e, t, "read from private field"), r ? r.call(e) : t.get(e)), "o");
var x = /* @__PURE__ */ __name2((e, t, r) => t.has(e) ? Ue("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), "x");
var p = /* @__PURE__ */ __name2((e, t, r, s) => (He(e, t, "write to private field"), s ? s.call(e, r) : t.set(e, r), r), "p");
var m = /* @__PURE__ */ __name2((e, t, r) => (He(e, t, "access private method"), r), "m");
var Ge = /* @__PURE__ */ __name2((e, t, r, s) => ({ set _(a) {
  p(e, t, a, r);
}, get _() {
  return o(e, t, s);
} }), "Ge");
var Ke = /* @__PURE__ */ __name2((e, t, r) => (s, a) => {
  let i = -1;
  return n(0);
  async function n(c) {
    if (c <= i) throw new Error("next() called multiple times");
    i = c;
    let l, d = false, f;
    if (e[c] ? (f = e[c][0][0], s.req.routeIndex = c) : f = c === e.length && a || void 0, f) try {
      l = await f(s, () => n(c + 1));
    } catch (h) {
      if (h instanceof Error && t) s.error = h, l = await t(h, s), d = true;
      else throw h;
    }
    else s.finalized === false && r && (l = await r(s));
    return l && (s.finalized === false || d) && (s.res = l), s;
  }
  __name(n, "n");
  __name2(n, "n");
}, "Ke");
var Rt = /* @__PURE__ */ Symbol();
var jt = /* @__PURE__ */ __name2(async (e, t = /* @__PURE__ */ Object.create(null)) => {
  const { all: r = false, dot: s = false } = t, i = (e instanceof ct ? e.raw.headers : e.headers).get("Content-Type");
  return i != null && i.startsWith("multipart/form-data") || i != null && i.startsWith("application/x-www-form-urlencoded") ? Ot(e, { all: r, dot: s }) : {};
}, "jt");
async function Ot(e, t) {
  const r = await e.formData();
  return r ? St(r, t) : {};
}
__name(Ot, "Ot");
__name2(Ot, "Ot");
function St(e, t) {
  const r = /* @__PURE__ */ Object.create(null);
  return e.forEach((s, a) => {
    t.all || a.endsWith("[]") ? Ct(r, a, s) : r[a] = s;
  }), t.dot && Object.entries(r).forEach(([s, a]) => {
    s.includes(".") && (Pt(r, s, a), delete r[s]);
  }), r;
}
__name(St, "St");
__name2(St, "St");
var Ct = /* @__PURE__ */ __name2((e, t, r) => {
  e[t] !== void 0 ? Array.isArray(e[t]) ? e[t].push(r) : e[t] = [e[t], r] : t.endsWith("[]") ? e[t] = [r] : e[t] = r;
}, "Ct");
var Pt = /* @__PURE__ */ __name2((e, t, r) => {
  if (/(?:^|\.)__proto__\./.test(t)) return;
  let s = e;
  const a = t.split(".");
  a.forEach((i, n) => {
    n === a.length - 1 ? s[i] = r : ((!s[i] || typeof s[i] != "object" || Array.isArray(s[i]) || s[i] instanceof File) && (s[i] = /* @__PURE__ */ Object.create(null)), s = s[i]);
  });
}, "Pt");
var st = /* @__PURE__ */ __name2((e) => {
  const t = e.split("/");
  return t[0] === "" && t.shift(), t;
}, "st");
var Tt = /* @__PURE__ */ __name2((e) => {
  const { groups: t, path: r } = Nt(e), s = st(r);
  return _t(s, t);
}, "Tt");
var Nt = /* @__PURE__ */ __name2((e) => {
  const t = [];
  return e = e.replace(/\{[^}]+\}/g, (r, s) => {
    const a = `@${s}`;
    return t.push([a, r]), a;
  }), { groups: t, path: e };
}, "Nt");
var _t = /* @__PURE__ */ __name2((e, t) => {
  for (let r = t.length - 1; r >= 0; r--) {
    const [s] = t[r];
    for (let a = e.length - 1; a >= 0; a--) if (e[a].includes(s)) {
      e[a] = e[a].replace(s, t[r][1]);
      break;
    }
  }
  return e;
}, "_t");
var Se = {};
var zt = /* @__PURE__ */ __name2((e, t) => {
  if (e === "*") return "*";
  const r = e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (r) {
    const s = `${e}#${t}`;
    return Se[s] || (r[2] ? Se[s] = t && t[0] !== ":" && t[0] !== "*" ? [s, r[1], new RegExp(`^${r[2]}(?=/${t})`)] : [e, r[1], new RegExp(`^${r[2]}$`)] : Se[s] = [e, r[1], true]), Se[s];
  }
  return null;
}, "zt");
var Le = /* @__PURE__ */ __name2((e, t) => {
  try {
    return t(e);
  } catch {
    return e.replace(/(?:%[0-9A-Fa-f]{2})+/g, (r) => {
      try {
        return t(r);
      } catch {
        return r;
      }
    });
  }
}, "Le");
var at = /* @__PURE__ */ __name2((e) => Le(e, decodeURI), "at");
var it = /* @__PURE__ */ __name2((e) => {
  const t = e.url, r = t.indexOf("/", t.indexOf(":") + 4);
  let s = r;
  for (; s < t.length; s++) {
    const a = t.charCodeAt(s);
    if (a === 37) {
      const i = t.indexOf("?", s), n = t.indexOf("#", s), c = i === -1 ? n === -1 ? void 0 : n : n === -1 ? i : Math.min(i, n), l = t.slice(r, c);
      return at(l.includes("%25") ? l.replace(/%25/g, "%2525") : l);
    } else if (a === 63 || a === 35) break;
  }
  return t.slice(r, s);
}, "it");
var Dt = /* @__PURE__ */ __name2((e) => {
  const t = it(e);
  return t.length > 1 && t.at(-1) === "/" ? t.slice(0, -1) : t;
}, "Dt");
var ae = /* @__PURE__ */ __name2((e, t, ...r) => (r.length && (t = ae(t, ...r)), `${(e == null ? void 0 : e[0]) === "/" ? "" : "/"}${e}${t === "/" ? "" : `${(e == null ? void 0 : e.at(-1)) === "/" ? "" : "/"}${(t == null ? void 0 : t[0]) === "/" ? t.slice(1) : t}`}`), "ae");
var nt = /* @__PURE__ */ __name2((e) => {
  if (e.charCodeAt(e.length - 1) !== 63 || !e.includes(":")) return null;
  const t = e.split("/"), r = [];
  let s = "";
  return t.forEach((a) => {
    if (a !== "" && !/\:/.test(a)) s += "/" + a;
    else if (/\:/.test(a)) if (/\?/.test(a)) {
      r.length === 0 && s === "" ? r.push("/") : r.push(s);
      const i = a.replace("?", "");
      s += "/" + i, r.push(s);
    } else s += "/" + a;
  }), r.filter((a, i, n) => n.indexOf(a) === i);
}, "nt");
var Fe = /* @__PURE__ */ __name2((e) => /[%+]/.test(e) ? (e.indexOf("+") !== -1 && (e = e.replace(/\+/g, " ")), e.indexOf("%") !== -1 ? Le(e, lt) : e) : e, "Fe");
var ot = /* @__PURE__ */ __name2((e, t, r) => {
  let s;
  if (!r && t && !/[%+]/.test(t)) {
    let n = e.indexOf("?", 8);
    if (n === -1) return;
    for (e.startsWith(t, n + 1) || (n = e.indexOf(`&${t}`, n + 1)); n !== -1; ) {
      const c = e.charCodeAt(n + t.length + 1);
      if (c === 61) {
        const l = n + t.length + 2, d = e.indexOf("&", l);
        return Fe(e.slice(l, d === -1 ? void 0 : d));
      } else if (c == 38 || isNaN(c)) return "";
      n = e.indexOf(`&${t}`, n + 1);
    }
    if (s = /[%+]/.test(e), !s) return;
  }
  const a = {};
  s ?? (s = /[%+]/.test(e));
  let i = e.indexOf("?", 8);
  for (; i !== -1; ) {
    const n = e.indexOf("&", i + 1);
    let c = e.indexOf("=", i);
    c > n && n !== -1 && (c = -1);
    let l = e.slice(i + 1, c === -1 ? n === -1 ? void 0 : n : c);
    if (s && (l = Fe(l)), i = n, l === "") continue;
    let d;
    c === -1 ? d = "" : (d = e.slice(c + 1, n === -1 ? void 0 : n), s && (d = Fe(d))), r ? (a[l] && Array.isArray(a[l]) || (a[l] = []), a[l].push(d)) : a[l] ?? (a[l] = d);
  }
  return t ? a[t] : a;
}, "ot");
var It = ot;
var Ht = /* @__PURE__ */ __name2((e, t) => ot(e, t, true), "Ht");
var lt = decodeURIComponent;
var Ve = /* @__PURE__ */ __name2((e) => Le(e, lt), "Ve");
var oe;
var S;
var $;
var dt;
var ft;
var Me;
var L;
var Xe;
var ct = (Xe = class {
  static {
    __name(this, "Xe");
  }
  static {
    __name2(this, "Xe");
  }
  constructor(e, t = "/", r = [[]]) {
    x(this, $);
    u(this, "raw");
    x(this, oe);
    x(this, S);
    u(this, "routeIndex", 0);
    u(this, "path");
    u(this, "bodyCache", {});
    x(this, L, (e2) => {
      const { bodyCache: t2, raw: r2 } = this, s = t2[e2];
      if (s) return s;
      const a = Object.keys(t2)[0];
      return a ? t2[a].then((i) => (a === "json" && (i = JSON.stringify(i)), new Response(i)[e2]())) : t2[e2] = r2[e2]();
    });
    this.raw = e, this.path = t, p(this, S, r), p(this, oe, {});
  }
  param(e) {
    return e ? m(this, $, dt).call(this, e) : m(this, $, ft).call(this);
  }
  query(e) {
    return It(this.url, e);
  }
  queries(e) {
    return Ht(this.url, e);
  }
  header(e) {
    if (e) return this.raw.headers.get(e) ?? void 0;
    const t = {};
    return this.raw.headers.forEach((r, s) => {
      t[s] = r;
    }), t;
  }
  async parseBody(e) {
    return jt(this, e);
  }
  json() {
    return o(this, L).call(this, "text").then((e) => JSON.parse(e));
  }
  text() {
    return o(this, L).call(this, "text");
  }
  arrayBuffer() {
    return o(this, L).call(this, "arrayBuffer");
  }
  blob() {
    return o(this, L).call(this, "blob");
  }
  formData() {
    return o(this, L).call(this, "formData");
  }
  addValidatedData(e, t) {
    o(this, oe)[e] = t;
  }
  valid(e) {
    return o(this, oe)[e];
  }
  get url() {
    return this.raw.url;
  }
  get method() {
    return this.raw.method;
  }
  get [Rt]() {
    return o(this, S);
  }
  get matchedRoutes() {
    return o(this, S)[0].map(([[, e]]) => e);
  }
  get routePath() {
    return o(this, S)[0].map(([[, e]]) => e)[this.routeIndex].path;
  }
}, oe = /* @__PURE__ */ new WeakMap(), S = /* @__PURE__ */ new WeakMap(), $ = /* @__PURE__ */ new WeakSet(), dt = /* @__PURE__ */ __name2(function(e) {
  const t = o(this, S)[0][this.routeIndex][1][e], r = m(this, $, Me).call(this, t);
  return r && /\%/.test(r) ? Ve(r) : r;
}, "dt"), ft = /* @__PURE__ */ __name2(function() {
  const e = {}, t = Object.keys(o(this, S)[0][this.routeIndex][1]);
  for (const r of t) {
    const s = m(this, $, Me).call(this, o(this, S)[0][this.routeIndex][1][r]);
    s !== void 0 && (e[r] = /\%/.test(s) ? Ve(s) : s);
  }
  return e;
}, "ft"), Me = /* @__PURE__ */ __name2(function(e) {
  return o(this, S)[1] ? o(this, S)[1][e] : e;
}, "Me"), L = /* @__PURE__ */ new WeakMap(), Xe);
var Ft = { Stringify: 1 };
var ht = /* @__PURE__ */ __name2(async (e, t, r, s, a) => {
  typeof e == "object" && !(e instanceof String) && (e instanceof Promise || (e = e.toString()), e instanceof Promise && (e = await e));
  const i = e.callbacks;
  return i != null && i.length ? (a ? a[0] += e : a = [e], Promise.all(i.map((c) => c({ phase: t, buffer: a, context: s }))).then((c) => Promise.all(c.filter(Boolean).map((l) => ht(l, t, false, s, a))).then(() => a[0]))) : Promise.resolve(e);
}, "ht");
var $t = "text/plain; charset=UTF-8";
var $e = /* @__PURE__ */ __name2((e, t) => ({ "Content-Type": e, ...t }), "$e");
var me = /* @__PURE__ */ __name2((e, t) => new Response(e, t), "me");
var ye;
var Ee;
var D;
var le;
var I;
var j;
var ke;
var ce;
var de;
var Y;
var Ae;
var Re;
var B;
var ie;
var Qe;
var Mt = (Qe = class {
  static {
    __name(this, "Qe");
  }
  static {
    __name2(this, "Qe");
  }
  constructor(e, t) {
    x(this, B);
    x(this, ye);
    x(this, Ee);
    u(this, "env", {});
    x(this, D);
    u(this, "finalized", false);
    u(this, "error");
    x(this, le);
    x(this, I);
    x(this, j);
    x(this, ke);
    x(this, ce);
    x(this, de);
    x(this, Y);
    x(this, Ae);
    x(this, Re);
    u(this, "render", (...e2) => (o(this, ce) ?? p(this, ce, (t2) => this.html(t2)), o(this, ce).call(this, ...e2)));
    u(this, "setLayout", (e2) => p(this, ke, e2));
    u(this, "getLayout", () => o(this, ke));
    u(this, "setRenderer", (e2) => {
      p(this, ce, e2);
    });
    u(this, "header", (e2, t2, r) => {
      this.finalized && p(this, j, me(o(this, j).body, o(this, j)));
      const s = o(this, j) ? o(this, j).headers : o(this, Y) ?? p(this, Y, new Headers());
      t2 === void 0 ? s.delete(e2) : r != null && r.append ? s.append(e2, t2) : s.set(e2, t2);
    });
    u(this, "status", (e2) => {
      p(this, le, e2);
    });
    u(this, "set", (e2, t2) => {
      o(this, D) ?? p(this, D, /* @__PURE__ */ new Map()), o(this, D).set(e2, t2);
    });
    u(this, "get", (e2) => o(this, D) ? o(this, D).get(e2) : void 0);
    u(this, "newResponse", (...e2) => m(this, B, ie).call(this, ...e2));
    u(this, "body", (e2, t2, r) => m(this, B, ie).call(this, e2, t2, r));
    u(this, "text", (e2, t2, r) => !o(this, Y) && !o(this, le) && !t2 && !r && !this.finalized ? new Response(e2) : m(this, B, ie).call(this, e2, t2, $e($t, r)));
    u(this, "json", (e2, t2, r) => m(this, B, ie).call(this, JSON.stringify(e2), t2, $e("application/json", r)));
    u(this, "html", (e2, t2, r) => {
      const s = /* @__PURE__ */ __name2((a) => m(this, B, ie).call(this, a, t2, $e("text/html; charset=UTF-8", r)), "s");
      return typeof e2 == "object" ? ht(e2, Ft.Stringify, false, {}).then(s) : s(e2);
    });
    u(this, "redirect", (e2, t2) => {
      const r = String(e2);
      return this.header("Location", /[^\x00-\xFF]/.test(r) ? encodeURI(r) : r), this.newResponse(null, t2 ?? 302);
    });
    u(this, "notFound", () => (o(this, de) ?? p(this, de, () => me()), o(this, de).call(this, this)));
    p(this, ye, e), t && (p(this, I, t.executionCtx), this.env = t.env, p(this, de, t.notFoundHandler), p(this, Re, t.path), p(this, Ae, t.matchResult));
  }
  get req() {
    return o(this, Ee) ?? p(this, Ee, new ct(o(this, ye), o(this, Re), o(this, Ae))), o(this, Ee);
  }
  get event() {
    if (o(this, I) && "respondWith" in o(this, I)) return o(this, I);
    throw Error("This context has no FetchEvent");
  }
  get executionCtx() {
    if (o(this, I)) return o(this, I);
    throw Error("This context has no ExecutionContext");
  }
  get res() {
    return o(this, j) || p(this, j, me(null, { headers: o(this, Y) ?? p(this, Y, new Headers()) }));
  }
  set res(e) {
    if (o(this, j) && e) {
      e = me(e.body, e);
      for (const [t, r] of o(this, j).headers.entries()) if (t !== "content-type") if (t === "set-cookie") {
        const s = o(this, j).headers.getSetCookie();
        e.headers.delete("set-cookie");
        for (const a of s) e.headers.append("set-cookie", a);
      } else e.headers.set(t, r);
    }
    p(this, j, e), this.finalized = true;
  }
  get var() {
    return o(this, D) ? Object.fromEntries(o(this, D)) : {};
  }
}, ye = /* @__PURE__ */ new WeakMap(), Ee = /* @__PURE__ */ new WeakMap(), D = /* @__PURE__ */ new WeakMap(), le = /* @__PURE__ */ new WeakMap(), I = /* @__PURE__ */ new WeakMap(), j = /* @__PURE__ */ new WeakMap(), ke = /* @__PURE__ */ new WeakMap(), ce = /* @__PURE__ */ new WeakMap(), de = /* @__PURE__ */ new WeakMap(), Y = /* @__PURE__ */ new WeakMap(), Ae = /* @__PURE__ */ new WeakMap(), Re = /* @__PURE__ */ new WeakMap(), B = /* @__PURE__ */ new WeakSet(), ie = /* @__PURE__ */ __name2(function(e, t, r) {
  const s = o(this, j) ? new Headers(o(this, j).headers) : o(this, Y) ?? new Headers();
  if (typeof t == "object" && "headers" in t) {
    const i = t.headers instanceof Headers ? t.headers : new Headers(t.headers);
    for (const [n, c] of i) n.toLowerCase() === "set-cookie" ? s.append(n, c) : s.set(n, c);
  }
  if (r) for (const [i, n] of Object.entries(r)) if (typeof n == "string") s.set(i, n);
  else {
    s.delete(i);
    for (const c of n) s.append(i, c);
  }
  const a = typeof t == "number" ? t : (t == null ? void 0 : t.status) ?? o(this, le);
  return me(e, { status: a, headers: s });
}, "ie"), Qe);
var y = "ALL";
var Lt = "all";
var Bt = ["get", "post", "put", "delete", "options", "patch"];
var pt = "Can not add a route since the matcher is already built.";
var ut = class extends Error {
  static {
    __name(this, "ut");
  }
  static {
    __name2(this, "ut");
  }
};
var qt = "__COMPOSED_HANDLER";
var Ut = /* @__PURE__ */ __name2((e) => e.text("404 Not Found", 404), "Ut");
var We = /* @__PURE__ */ __name2((e, t) => {
  if ("getResponse" in e) {
    const r = e.getResponse();
    return t.newResponse(r.body, r);
  }
  return console.error(e), t.text("Internal Server Error", 500);
}, "We");
var P;
var E;
var gt;
var T;
var V;
var Ce;
var Pe;
var fe;
var Gt = (fe = class {
  static {
    __name(this, "fe");
  }
  static {
    __name2(this, "fe");
  }
  constructor(t = {}) {
    x(this, E);
    u(this, "get");
    u(this, "post");
    u(this, "put");
    u(this, "delete");
    u(this, "options");
    u(this, "patch");
    u(this, "all");
    u(this, "on");
    u(this, "use");
    u(this, "router");
    u(this, "getPath");
    u(this, "_basePath", "/");
    x(this, P, "/");
    u(this, "routes", []);
    x(this, T, Ut);
    u(this, "errorHandler", We);
    u(this, "onError", (t2) => (this.errorHandler = t2, this));
    u(this, "notFound", (t2) => (p(this, T, t2), this));
    u(this, "fetch", (t2, ...r) => m(this, E, Pe).call(this, t2, r[1], r[0], t2.method));
    u(this, "request", (t2, r, s2, a2) => t2 instanceof Request ? this.fetch(r ? new Request(t2, r) : t2, s2, a2) : (t2 = t2.toString(), this.fetch(new Request(/^https?:\/\//.test(t2) ? t2 : `http://localhost${ae("/", t2)}`, r), s2, a2)));
    u(this, "fire", () => {
      addEventListener("fetch", (t2) => {
        t2.respondWith(m(this, E, Pe).call(this, t2.request, t2, void 0, t2.request.method));
      });
    });
    [...Bt, Lt].forEach((i) => {
      this[i] = (n, ...c) => (typeof n == "string" ? p(this, P, n) : m(this, E, V).call(this, i, o(this, P), n), c.forEach((l) => {
        m(this, E, V).call(this, i, o(this, P), l);
      }), this);
    }), this.on = (i, n, ...c) => {
      for (const l of [n].flat()) {
        p(this, P, l);
        for (const d of [i].flat()) c.map((f) => {
          m(this, E, V).call(this, d.toUpperCase(), o(this, P), f);
        });
      }
      return this;
    }, this.use = (i, ...n) => (typeof i == "string" ? p(this, P, i) : (p(this, P, "*"), n.unshift(i)), n.forEach((c) => {
      m(this, E, V).call(this, y, o(this, P), c);
    }), this);
    const { strict: s, ...a } = t;
    Object.assign(this, a), this.getPath = s ?? true ? t.getPath ?? it : Dt;
  }
  route(t, r) {
    const s = this.basePath(t);
    return r.routes.map((a) => {
      var n;
      let i;
      r.errorHandler === We ? i = a.handler : (i = /* @__PURE__ */ __name2(async (c, l) => (await Ke([], r.errorHandler)(c, () => a.handler(c, l))).res, "i"), i[qt] = a.handler), m(n = s, E, V).call(n, a.method, a.path, i);
    }), this;
  }
  basePath(t) {
    const r = m(this, E, gt).call(this);
    return r._basePath = ae(this._basePath, t), r;
  }
  mount(t, r, s) {
    let a, i;
    s && (typeof s == "function" ? i = s : (i = s.optionHandler, s.replaceRequest === false ? a = /* @__PURE__ */ __name2((l) => l, "a") : a = s.replaceRequest));
    const n = i ? (l) => {
      const d = i(l);
      return Array.isArray(d) ? d : [d];
    } : (l) => {
      let d;
      try {
        d = l.executionCtx;
      } catch {
      }
      return [l.env, d];
    };
    a || (a = (() => {
      const l = ae(this._basePath, t), d = l === "/" ? 0 : l.length;
      return (f) => {
        const h = new URL(f.url);
        return h.pathname = h.pathname.slice(d) || "/", new Request(h, f);
      };
    })());
    const c = /* @__PURE__ */ __name2(async (l, d) => {
      const f = await r(a(l.req.raw), ...n(l));
      if (f) return f;
      await d();
    }, "c");
    return m(this, E, V).call(this, y, ae(t, "*"), c), this;
  }
}, P = /* @__PURE__ */ new WeakMap(), E = /* @__PURE__ */ new WeakSet(), gt = /* @__PURE__ */ __name2(function() {
  const t = new fe({ router: this.router, getPath: this.getPath });
  return t.errorHandler = this.errorHandler, p(t, T, o(this, T)), t.routes = this.routes, t;
}, "gt"), T = /* @__PURE__ */ new WeakMap(), V = /* @__PURE__ */ __name2(function(t, r, s) {
  t = t.toUpperCase(), r = ae(this._basePath, r);
  const a = { basePath: this._basePath, path: r, method: t, handler: s };
  this.router.add(t, r, [s, a]), this.routes.push(a);
}, "V"), Ce = /* @__PURE__ */ __name2(function(t, r) {
  if (t instanceof Error) return this.errorHandler(t, r);
  throw t;
}, "Ce"), Pe = /* @__PURE__ */ __name2(function(t, r, s, a) {
  if (a === "HEAD") return (async () => new Response(null, await m(this, E, Pe).call(this, t, r, s, "GET")))();
  const i = this.getPath(t, { env: s }), n = this.router.match(a, i), c = new Mt(t, { path: i, matchResult: n, env: s, executionCtx: r, notFoundHandler: o(this, T) });
  if (n[0].length === 1) {
    let d;
    try {
      d = n[0][0][0][0](c, async () => {
        c.res = await o(this, T).call(this, c);
      });
    } catch (f) {
      return m(this, E, Ce).call(this, f, c);
    }
    return d instanceof Promise ? d.then((f) => f || (c.finalized ? c.res : o(this, T).call(this, c))).catch((f) => m(this, E, Ce).call(this, f, c)) : d ?? o(this, T).call(this, c);
  }
  const l = Ke(n[0], this.errorHandler, o(this, T));
  return (async () => {
    try {
      const d = await l(c);
      if (!d.finalized) throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");
      return d.res;
    } catch (d) {
      return m(this, E, Ce).call(this, d, c);
    }
  })();
}, "Pe"), fe);
var xt = [];
function Kt(e, t) {
  const r = this.buildAllMatchers(), s = /* @__PURE__ */ __name2(((a, i) => {
    const n = r[a] || r[y], c = n[2][i];
    if (c) return c;
    const l = i.match(n[0]);
    if (!l) return [[], xt];
    const d = l.indexOf("", 1);
    return [n[1][d], l];
  }), "s");
  return this.match = s, s(e, t);
}
__name(Kt, "Kt");
__name2(Kt, "Kt");
var Ne = "[^/]+";
var be = ".*";
var we = "(?:|/.*)";
var ne = /* @__PURE__ */ Symbol();
var Vt = new Set(".\\+*[^]$()");
function Wt(e, t) {
  return e.length === 1 ? t.length === 1 ? e < t ? -1 : 1 : -1 : t.length === 1 || e === be || e === we ? 1 : t === be || t === we ? -1 : e === Ne ? 1 : t === Ne ? -1 : e.length === t.length ? e < t ? -1 : 1 : t.length - e.length;
}
__name(Wt, "Wt");
__name2(Wt, "Wt");
var J;
var X;
var N;
var ee;
var Yt = (ee = class {
  static {
    __name(this, "ee");
  }
  static {
    __name2(this, "ee");
  }
  constructor() {
    x(this, J);
    x(this, X);
    x(this, N, /* @__PURE__ */ Object.create(null));
  }
  insert(t, r, s, a, i) {
    if (t.length === 0) {
      if (o(this, J) !== void 0) throw ne;
      if (i) return;
      p(this, J, r);
      return;
    }
    const [n, ...c] = t, l = n === "*" ? c.length === 0 ? ["", "", be] : ["", "", Ne] : n === "/*" ? ["", "", we] : n.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let d;
    if (l) {
      const f = l[1];
      let h = l[2] || Ne;
      if (f && l[2] && (h === ".*" || (h = h.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:"), /\((?!\?:)/.test(h)))) throw ne;
      if (d = o(this, N)[h], !d) {
        if (Object.keys(o(this, N)).some((g) => g !== be && g !== we)) throw ne;
        if (i) return;
        d = o(this, N)[h] = new ee(), f !== "" && p(d, X, a.varIndex++);
      }
      !i && f !== "" && s.push([f, o(d, X)]);
    } else if (d = o(this, N)[n], !d) {
      if (Object.keys(o(this, N)).some((f) => f.length > 1 && f !== be && f !== we)) throw ne;
      if (i) return;
      d = o(this, N)[n] = new ee();
    }
    d.insert(c, r, s, a, i);
  }
  buildRegExpStr() {
    const r = Object.keys(o(this, N)).sort(Wt).map((s) => {
      const a = o(this, N)[s];
      return (typeof o(a, X) == "number" ? `(${s})@${o(a, X)}` : Vt.has(s) ? `\\${s}` : s) + a.buildRegExpStr();
    });
    return typeof o(this, J) == "number" && r.unshift(`#${o(this, J)}`), r.length === 0 ? "" : r.length === 1 ? r[0] : "(?:" + r.join("|") + ")";
  }
}, J = /* @__PURE__ */ new WeakMap(), X = /* @__PURE__ */ new WeakMap(), N = /* @__PURE__ */ new WeakMap(), ee);
var _e;
var je;
var Ze;
var Jt = (Ze = class {
  static {
    __name(this, "Ze");
  }
  static {
    __name2(this, "Ze");
  }
  constructor() {
    x(this, _e, { varIndex: 0 });
    x(this, je, new Yt());
  }
  insert(e, t, r) {
    const s = [], a = [];
    for (let n = 0; ; ) {
      let c = false;
      if (e = e.replace(/\{[^}]+\}/g, (l) => {
        const d = `@\\${n}`;
        return a[n] = [d, l], n++, c = true, d;
      }), !c) break;
    }
    const i = e.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let n = a.length - 1; n >= 0; n--) {
      const [c] = a[n];
      for (let l = i.length - 1; l >= 0; l--) if (i[l].indexOf(c) !== -1) {
        i[l] = i[l].replace(c, a[n][1]);
        break;
      }
    }
    return o(this, je).insert(i, t, s, o(this, _e), r), s;
  }
  buildRegExp() {
    let e = o(this, je).buildRegExpStr();
    if (e === "") return [/^$/, [], []];
    let t = 0;
    const r = [], s = [];
    return e = e.replace(/#(\d+)|@(\d+)|\.\*\$/g, (a, i, n) => i !== void 0 ? (r[++t] = Number(i), "$()") : (n !== void 0 && (s[Number(n)] = ++t), "")), [new RegExp(`^${e}`), r, s];
  }
}, _e = /* @__PURE__ */ new WeakMap(), je = /* @__PURE__ */ new WeakMap(), Ze);
var Xt = [/^$/, [], /* @__PURE__ */ Object.create(null)];
var Te = /* @__PURE__ */ Object.create(null);
function mt(e) {
  return Te[e] ?? (Te[e] = new RegExp(e === "*" ? "" : `^${e.replace(/\/\*$|([.\\+*[^\]$()])/g, (t, r) => r ? `\\${r}` : "(?:|/.*)")}$`));
}
__name(mt, "mt");
__name2(mt, "mt");
function Qt() {
  Te = /* @__PURE__ */ Object.create(null);
}
__name(Qt, "Qt");
__name2(Qt, "Qt");
function Zt(e) {
  var d;
  const t = new Jt(), r = [];
  if (e.length === 0) return Xt;
  const s = e.map((f) => [!/\*|\/:/.test(f[0]), ...f]).sort(([f, h], [g, v]) => f ? 1 : g ? -1 : h.length - v.length), a = /* @__PURE__ */ Object.create(null);
  for (let f = 0, h = -1, g = s.length; f < g; f++) {
    const [v, b, C] = s[f];
    v ? a[b] = [C.map(([O]) => [O, /* @__PURE__ */ Object.create(null)]), xt] : h++;
    let k;
    try {
      k = t.insert(b, h, v);
    } catch (O) {
      throw O === ne ? new ut(b) : O;
    }
    v || (r[h] = C.map(([O, w]) => {
      const _ = /* @__PURE__ */ Object.create(null);
      for (w -= 1; w >= 0; w--) {
        const [ue, De] = k[w];
        _[ue] = De;
      }
      return [O, _];
    }));
  }
  const [i, n, c] = t.buildRegExp();
  for (let f = 0, h = r.length; f < h; f++) for (let g = 0, v = r[f].length; g < v; g++) {
    const b = (d = r[f][g]) == null ? void 0 : d[1];
    if (!b) continue;
    const C = Object.keys(b);
    for (let k = 0, O = C.length; k < O; k++) b[C[k]] = c[b[C[k]]];
  }
  const l = [];
  for (const f in n) l[f] = r[n[f]];
  return [i, l, a];
}
__name(Zt, "Zt");
__name2(Zt, "Zt");
function se(e, t) {
  if (e) {
    for (const r of Object.keys(e).sort((s, a) => a.length - s.length)) if (mt(r).test(t)) return [...e[r]];
  }
}
__name(se, "se");
__name2(se, "se");
var q;
var U;
var ze;
var vt;
var et;
var er = (et = class {
  static {
    __name(this, "et");
  }
  static {
    __name2(this, "et");
  }
  constructor() {
    x(this, ze);
    u(this, "name", "RegExpRouter");
    x(this, q);
    x(this, U);
    u(this, "match", Kt);
    p(this, q, { [y]: /* @__PURE__ */ Object.create(null) }), p(this, U, { [y]: /* @__PURE__ */ Object.create(null) });
  }
  add(e, t, r) {
    var c;
    const s = o(this, q), a = o(this, U);
    if (!s || !a) throw new Error(pt);
    s[e] || [s, a].forEach((l) => {
      l[e] = /* @__PURE__ */ Object.create(null), Object.keys(l[y]).forEach((d) => {
        l[e][d] = [...l[y][d]];
      });
    }), t === "/*" && (t = "*");
    const i = (t.match(/\/:/g) || []).length;
    if (/\*$/.test(t)) {
      const l = mt(t);
      e === y ? Object.keys(s).forEach((d) => {
        var f;
        (f = s[d])[t] || (f[t] = se(s[d], t) || se(s[y], t) || []);
      }) : (c = s[e])[t] || (c[t] = se(s[e], t) || se(s[y], t) || []), Object.keys(s).forEach((d) => {
        (e === y || e === d) && Object.keys(s[d]).forEach((f) => {
          l.test(f) && s[d][f].push([r, i]);
        });
      }), Object.keys(a).forEach((d) => {
        (e === y || e === d) && Object.keys(a[d]).forEach((f) => l.test(f) && a[d][f].push([r, i]));
      });
      return;
    }
    const n = nt(t) || [t];
    for (let l = 0, d = n.length; l < d; l++) {
      const f = n[l];
      Object.keys(a).forEach((h) => {
        var g;
        (e === y || e === h) && ((g = a[h])[f] || (g[f] = [...se(s[h], f) || se(s[y], f) || []]), a[h][f].push([r, i - d + l + 1]));
      });
    }
  }
  buildAllMatchers() {
    const e = /* @__PURE__ */ Object.create(null);
    return Object.keys(o(this, U)).concat(Object.keys(o(this, q))).forEach((t) => {
      e[t] || (e[t] = m(this, ze, vt).call(this, t));
    }), p(this, q, p(this, U, void 0)), Qt(), e;
  }
}, q = /* @__PURE__ */ new WeakMap(), U = /* @__PURE__ */ new WeakMap(), ze = /* @__PURE__ */ new WeakSet(), vt = /* @__PURE__ */ __name2(function(e) {
  const t = [];
  let r = e === y;
  return [o(this, q), o(this, U)].forEach((s) => {
    const a = s[e] ? Object.keys(s[e]).map((i) => [i, s[e][i]]) : [];
    a.length !== 0 ? (r || (r = true), t.push(...a)) : e !== y && t.push(...Object.keys(s[y]).map((i) => [i, s[y][i]]));
  }), r ? Zt(t) : null;
}, "vt"), et);
var G;
var H;
var tt;
var tr = (tt = class {
  static {
    __name(this, "tt");
  }
  static {
    __name2(this, "tt");
  }
  constructor(e) {
    u(this, "name", "SmartRouter");
    x(this, G, []);
    x(this, H, []);
    p(this, G, e.routers);
  }
  add(e, t, r) {
    if (!o(this, H)) throw new Error(pt);
    o(this, H).push([e, t, r]);
  }
  match(e, t) {
    if (!o(this, H)) throw new Error("Fatal error");
    const r = o(this, G), s = o(this, H), a = r.length;
    let i = 0, n;
    for (; i < a; i++) {
      const c = r[i];
      try {
        for (let l = 0, d = s.length; l < d; l++) c.add(...s[l]);
        n = c.match(e, t);
      } catch (l) {
        if (l instanceof ut) continue;
        throw l;
      }
      this.match = c.match.bind(c), p(this, G, [c]), p(this, H, void 0);
      break;
    }
    if (i === a) throw new Error("Fatal error");
    return this.name = `SmartRouter + ${this.activeRouter.name}`, n;
  }
  get activeRouter() {
    if (o(this, H) || o(this, G).length !== 1) throw new Error("No active router has been determined yet.");
    return o(this, G)[0];
  }
}, G = /* @__PURE__ */ new WeakMap(), H = /* @__PURE__ */ new WeakMap(), tt);
var ve = /* @__PURE__ */ Object.create(null);
var rr = /* @__PURE__ */ __name2((e) => {
  for (const t in e) return true;
  return false;
}, "rr");
var K;
var R;
var Q;
var he;
var A;
var F;
var W;
var pe;
var sr = (pe = class {
  static {
    __name(this, "pe");
  }
  static {
    __name2(this, "pe");
  }
  constructor(t, r, s) {
    x(this, F);
    x(this, K);
    x(this, R);
    x(this, Q);
    x(this, he, 0);
    x(this, A, ve);
    if (p(this, R, s || /* @__PURE__ */ Object.create(null)), p(this, K, []), t && r) {
      const a = /* @__PURE__ */ Object.create(null);
      a[t] = { handler: r, possibleKeys: [], score: 0 }, p(this, K, [a]);
    }
    p(this, Q, []);
  }
  insert(t, r, s) {
    p(this, he, ++Ge(this, he)._);
    let a = this;
    const i = Tt(r), n = [];
    for (let c = 0, l = i.length; c < l; c++) {
      const d = i[c], f = i[c + 1], h = zt(d, f), g = Array.isArray(h) ? h[0] : d;
      if (g in o(a, R)) {
        a = o(a, R)[g], h && n.push(h[1]);
        continue;
      }
      o(a, R)[g] = new pe(), h && (o(a, Q).push(h), n.push(h[1])), a = o(a, R)[g];
    }
    return o(a, K).push({ [t]: { handler: s, possibleKeys: n.filter((c, l, d) => d.indexOf(c) === l), score: o(this, he) } }), a;
  }
  search(t, r) {
    var f;
    const s = [];
    p(this, A, ve);
    let i = [this];
    const n = st(r), c = [], l = n.length;
    let d = null;
    for (let h = 0; h < l; h++) {
      const g = n[h], v = h === l - 1, b = [];
      for (let k = 0, O = i.length; k < O; k++) {
        const w = i[k], _ = o(w, R)[g];
        _ && (p(_, A, o(w, A)), v ? (o(_, R)["*"] && m(this, F, W).call(this, s, o(_, R)["*"], t, o(w, A)), m(this, F, W).call(this, s, _, t, o(w, A))) : b.push(_));
        for (let ue = 0, De = o(w, Q).length; ue < De; ue++) {
          const Be = o(w, Q)[ue], M = o(w, A) === ve ? {} : { ...o(w, A) };
          if (Be === "*") {
            const te = o(w, R)["*"];
            te && (m(this, F, W).call(this, s, te, t, o(w, A)), p(te, A, M), b.push(te));
            continue;
          }
          const [Et, qe, ge] = Be;
          if (!g && !(ge instanceof RegExp)) continue;
          const z = o(w, R)[Et];
          if (ge instanceof RegExp) {
            if (d === null) {
              d = new Array(l);
              let re = r[0] === "/" ? 1 : 0;
              for (let xe = 0; xe < l; xe++) d[xe] = re, re += n[xe].length + 1;
            }
            const te = r.substring(d[h]), Ie = ge.exec(te);
            if (Ie) {
              if (M[qe] = Ie[0], m(this, F, W).call(this, s, z, t, o(w, A), M), rr(o(z, R))) {
                p(z, A, M);
                const re = ((f = Ie[0].match(/\//)) == null ? void 0 : f.length) ?? 0;
                (c[re] || (c[re] = [])).push(z);
              }
              continue;
            }
          }
          (ge === true || ge.test(g)) && (M[qe] = g, v ? (m(this, F, W).call(this, s, z, t, M, o(w, A)), o(z, R)["*"] && m(this, F, W).call(this, s, o(z, R)["*"], t, M, o(w, A))) : (p(z, A, M), b.push(z)));
        }
      }
      const C = c.shift();
      i = C ? b.concat(C) : b;
    }
    return s.length > 1 && s.sort((h, g) => h.score - g.score), [s.map(({ handler: h, params: g }) => [h, g])];
  }
}, K = /* @__PURE__ */ new WeakMap(), R = /* @__PURE__ */ new WeakMap(), Q = /* @__PURE__ */ new WeakMap(), he = /* @__PURE__ */ new WeakMap(), A = /* @__PURE__ */ new WeakMap(), F = /* @__PURE__ */ new WeakSet(), W = /* @__PURE__ */ __name2(function(t, r, s, a, i) {
  for (let n = 0, c = o(r, K).length; n < c; n++) {
    const l = o(r, K)[n], d = l[s] || l[y], f = {};
    if (d !== void 0 && (d.params = /* @__PURE__ */ Object.create(null), t.push(d), a !== ve || i && i !== ve)) for (let h = 0, g = d.possibleKeys.length; h < g; h++) {
      const v = d.possibleKeys[h], b = f[d.score];
      d.params[v] = i != null && i[v] && !b ? i[v] : a[v] ?? (i == null ? void 0 : i[v]), f[d.score] = true;
    }
  }
}, "W"), pe);
var Z;
var rt;
var ar = (rt = class {
  static {
    __name(this, "rt");
  }
  static {
    __name2(this, "rt");
  }
  constructor() {
    u(this, "name", "TrieRouter");
    x(this, Z);
    p(this, Z, new sr());
  }
  add(e, t, r) {
    const s = nt(t);
    if (s) {
      for (let a = 0, i = s.length; a < i; a++) o(this, Z).insert(e, s[a], r);
      return;
    }
    o(this, Z).insert(e, t, r);
  }
  match(e, t) {
    return o(this, Z).search(e, t);
  }
}, Z = /* @__PURE__ */ new WeakMap(), rt);
var bt = class extends Gt {
  static {
    __name(this, "bt");
  }
  static {
    __name2(this, "bt");
  }
  constructor(e = {}) {
    super(e), this.router = e.router ?? new tr({ routers: [new er(), new ar()] });
  }
};
var ir = /^\s*(?:text\/(?!event-stream(?:[;\s]|$))[^;\s]+|application\/(?:javascript|json|xml|xml-dtd|ecmascript|dart|postscript|rtf|tar|toml|vnd\.dart|vnd\.ms-fontobject|vnd\.ms-opentype|wasm|x-httpd-php|x-javascript|x-ns-proxy-autoconfig|x-sh|x-tar|x-virtualbox-hdd|x-virtualbox-ova|x-virtualbox-ovf|x-virtualbox-vbox|x-virtualbox-vdi|x-virtualbox-vhd|x-virtualbox-vmdk|x-www-form-urlencoded)|font\/(?:otf|ttf)|image\/(?:bmp|vnd\.adobe\.photoshop|vnd\.microsoft\.icon|vnd\.ms-dds|x-icon|x-ms-bmp)|message\/rfc822|model\/gltf-binary|x-shader\/x-fragment|x-shader\/x-vertex|[^;\s]+?\+(?:json|text|xml|yaml))(?:[;\s]|$)/i;
var Ye = /* @__PURE__ */ __name2((e, t = or) => {
  const r = /\.([a-zA-Z0-9]+?)$/, s = e.match(r);
  if (!s) return;
  let a = t[s[1].toLowerCase()];
  return a && a.startsWith("text") && (a += "; charset=utf-8"), a;
}, "Ye");
var nr = { aac: "audio/aac", avi: "video/x-msvideo", avif: "image/avif", av1: "video/av1", bin: "application/octet-stream", bmp: "image/bmp", css: "text/css", csv: "text/csv", eot: "application/vnd.ms-fontobject", epub: "application/epub+zip", gif: "image/gif", gz: "application/gzip", htm: "text/html", html: "text/html", ico: "image/x-icon", ics: "text/calendar", jpeg: "image/jpeg", jpg: "image/jpeg", js: "text/javascript", json: "application/json", jsonld: "application/ld+json", map: "application/json", mid: "audio/x-midi", midi: "audio/x-midi", mjs: "text/javascript", mp3: "audio/mpeg", mp4: "video/mp4", mpeg: "video/mpeg", oga: "audio/ogg", ogv: "video/ogg", ogx: "application/ogg", opus: "audio/opus", otf: "font/otf", pdf: "application/pdf", png: "image/png", rtf: "application/rtf", svg: "image/svg+xml", tif: "image/tiff", tiff: "image/tiff", ts: "video/mp2t", ttf: "font/ttf", txt: "text/plain", wasm: "application/wasm", webm: "video/webm", weba: "audio/webm", webmanifest: "application/manifest+json", webp: "image/webp", woff: "font/woff", woff2: "font/woff2", xhtml: "application/xhtml+xml", xml: "application/xml", zip: "application/zip", "3gp": "video/3gpp", "3g2": "video/3gpp2", gltf: "model/gltf+json", glb: "model/gltf-binary" };
var or = nr;
var lr = /* @__PURE__ */ __name2((...e) => {
  let t = e.filter((a) => a !== "").join("/");
  t = t.replace(new RegExp("(?<=\\/)\\/+", "g"), "");
  const r = t.split("/"), s = [];
  for (const a of r) a === ".." && s.length > 0 && s.at(-1) !== ".." ? s.pop() : a !== "." && s.push(a);
  return s.join("/") || ".";
}, "lr");
var wt = { br: ".br", zstd: ".zst", gzip: ".gz" };
var cr = Object.keys(wt);
var dr = "index.html";
var fr = /* @__PURE__ */ __name2((e) => {
  const t = e.root ?? "./", r = e.path, s = e.join ?? lr;
  return async (a, i) => {
    var f, h, g, v;
    if (a.finalized) return i();
    let n;
    if (e.path) n = e.path;
    else try {
      if (n = at(a.req.path), /(?:^|[\/\\])\.\.(?:$|[\/\\])/.test(n)) throw new Error();
    } catch {
      return await ((f = e.onNotFound) == null ? void 0 : f.call(e, a.req.path, a)), i();
    }
    let c = s(t, !r && e.rewriteRequestPath ? e.rewriteRequestPath(n) : n);
    e.isDir && await e.isDir(c) && (c = s(c, dr));
    const l = e.getContent;
    let d = await l(c, a);
    if (d instanceof Response) return a.newResponse(d.body, d);
    if (d) {
      const b = e.mimes && Ye(c, e.mimes) || Ye(c);
      if (a.header("Content-Type", b || "application/octet-stream"), e.precompressed && (!b || ir.test(b))) {
        const C = new Set((h = a.req.header("Accept-Encoding")) == null ? void 0 : h.split(",").map((k) => k.trim()));
        for (const k of cr) {
          if (!C.has(k)) continue;
          const O = await l(c + wt[k], a);
          if (O) {
            d = O, a.header("Content-Encoding", k), a.header("Vary", "Accept-Encoding", { append: true });
            break;
          }
        }
      }
      return await ((g = e.onFound) == null ? void 0 : g.call(e, c, a)), a.body(d);
    }
    await ((v = e.onNotFound) == null ? void 0 : v.call(e, c, a)), await i();
  };
}, "fr");
var hr = /* @__PURE__ */ __name2(async (e, t) => {
  let r;
  t && t.manifest ? typeof t.manifest == "string" ? r = JSON.parse(t.manifest) : r = t.manifest : typeof __STATIC_CONTENT_MANIFEST == "string" ? r = JSON.parse(__STATIC_CONTENT_MANIFEST) : r = __STATIC_CONTENT_MANIFEST;
  let s;
  t && t.namespace ? s = t.namespace : s = __STATIC_CONTENT;
  const a = r[e];
  if (!a) return null;
  const i = await s.get(a, { type: "stream" });
  return i || null;
}, "hr");
var pr = /* @__PURE__ */ __name2((e) => async function(r, s) {
  return fr({ ...e, getContent: /* @__PURE__ */ __name2(async (i) => hr(i, { manifest: e.manifest, namespace: e.namespace ? e.namespace : r.env ? r.env.__STATIC_CONTENT : void 0 }), "getContent") })(r, s);
}, "pr");
var ur = /* @__PURE__ */ __name2((e) => pr(e), "ur");
var gr = /* @__PURE__ */ __name2((e) => {
  const r = { ...{ origin: "*", allowMethods: ["GET", "HEAD", "PUT", "POST", "DELETE", "PATCH"], allowHeaders: [], exposeHeaders: [] }, ...e }, s = ((i) => typeof i == "string" ? i === "*" ? r.credentials ? (n) => n || null : () => i : (n) => i === n ? n : null : typeof i == "function" ? i : (n) => i.includes(n) ? n : null)(r.origin), a = ((i) => typeof i == "function" ? i : Array.isArray(i) ? () => i : () => [])(r.allowMethods);
  return async function(n, c) {
    var f;
    function l(h, g) {
      n.res.headers.set(h, g);
    }
    __name(l, "l");
    __name2(l, "l");
    const d = await s(n.req.header("origin") || "", n);
    if (d && l("Access-Control-Allow-Origin", d), r.credentials && l("Access-Control-Allow-Credentials", "true"), (f = r.exposeHeaders) != null && f.length && l("Access-Control-Expose-Headers", r.exposeHeaders.join(",")), n.req.method === "OPTIONS") {
      (r.origin !== "*" || r.credentials) && l("Vary", "Origin"), r.maxAge != null && l("Access-Control-Max-Age", r.maxAge.toString());
      const h = await a(n.req.header("origin") || "", n);
      h.length && l("Access-Control-Allow-Methods", h.join(","));
      let g = r.allowHeaders;
      if (!(g != null && g.length)) {
        const v = n.req.header("Access-Control-Request-Headers");
        v && (g = v.split(/\s*,\s*/));
      }
      return g != null && g.length && (l("Access-Control-Allow-Headers", g.join(",")), n.res.headers.append("Vary", "Access-Control-Request-Headers")), n.res.headers.delete("Content-Length"), n.res.headers.delete("Content-Type"), new Response(null, { headers: n.res.headers, status: 204, statusText: "No Content" });
    }
    await c(), (r.origin !== "*" || r.credentials) && n.header("Vary", "Origin", { append: true });
  };
}, "gr");
var Oe = new bt();
Oe.use("/api/*", gr());
Oe.use("/static/*", ur({ root: "./public" }));
Oe.get("/api/sinistros", (e) => e.redirect("/static/sinistros_data.json"));
Oe.get("/", (e) => e.html(xr));
var xr = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>NIE \u2014 Controle de Prazos Regulat\xF3rios | Addvalora Brasil</title>
  <script src="https://cdn.tailwindcss.com"><\/script>
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='%23003B5C'/><line x1='16' y1='4' x2='16' y2='28' stroke='%23EF8200' stroke-width='3'/><line x1='4' y1='16' x2='28' y2='16' stroke='%23EF8200' stroke-width='3'/></svg>"/>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css"/>
  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"><\/script>
  <script src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js"><\/script>
  <style>
    :root {
      --adv-orange: #EF8200;
      --adv-blue: #003B5C;
      --adv-blue-light: #005A8E;
      --adv-orange-light: #FFAA44;
      --adv-gray: #5B6770;
      --adv-green: #28a745;
      --adv-red: #DA291C;
      --adv-yellow: #f59e0b;
      --adv-purple: #7c3aed;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Arial, sans-serif; background: #F4F6F9; color: #1a2533; min-height: 100vh; }

    /* HEADER */
    .header {
      background: linear-gradient(135deg, var(--adv-blue) 0%, #005A8E 100%);
      padding: 0; box-shadow: 0 4px 20px rgba(0,59,92,0.3);
      position: sticky; top: 0; z-index: 100;
    }
    .header-inner {
      display: flex; align-items: center; justify-content: space-between;
      padding: 14px 32px; max-width: 1700px; margin: 0 auto;
    }
    .header-brand { display: flex; align-items: center; gap: 18px; }
    .header-title h1 { font-size: 1.4rem; font-weight: 700; color: #fff; letter-spacing: 0.04em; }
    .header-title p { font-size: 0.78rem; color: rgba(255,255,255,0.75); letter-spacing: 0.08em; text-transform: uppercase; margin-top: 2px; }
    .header-right { display: flex; align-items: center; gap: 16px; }
    .live-clock { text-align: right; color: #fff; }
    .live-clock .clock-time { font-size: 1.5rem; font-weight: 700; color: var(--adv-orange); }
    .live-clock .clock-date { font-size: 0.72rem; color: rgba(255,255,255,0.7); text-transform: uppercase; letter-spacing: 0.06em; }
    .addvalora-badge {
      background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.2);
      border-radius: 8px; padding: 6px 14px; color: #fff;
      font-size: 0.75rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase;
    }
    .addvalora-badge span { color: var(--adv-orange); }

    .main { max-width: 1700px; margin: 0 auto; padding: 24px 20px; }

    /* UPLOAD BANNER */
    .upload-banner {
      background: linear-gradient(135deg, var(--adv-blue) 0%, #004f7a 100%);
      border-radius: 16px; padding: 18px 24px;
      display: flex; align-items: center; gap: 18px;
      margin-bottom: 24px; box-shadow: 0 4px 20px rgba(0,59,92,0.18);
      flex-wrap: wrap;
    }
    .upload-icon {
      width: 50px; height: 50px; background: var(--adv-orange);
      border-radius: 12px; display: flex; align-items: center; justify-content: center;
      font-size: 1.3rem; color: #fff; flex-shrink: 0;
    }
    .upload-info { flex: 1; min-width: 200px; }
    .upload-info h3 { color: #fff; font-size: 0.95rem; font-weight: 700; margin-bottom: 3px; }
    .upload-info p { color: rgba(255,255,255,0.7); font-size: 0.78rem; }
    .upload-btn {
      background: var(--adv-orange); color: #fff; border: none;
      border-radius: 10px; padding: 10px 20px; font-size: 0.85rem; font-weight: 700;
      cursor: pointer; display: flex; align-items: center; gap: 8px;
      transition: all 0.2s; white-space: nowrap; flex-shrink: 0;
    }
    .upload-btn:hover { background: #d97400; transform: translateY(-1px); }
    .upload-status {
      color: rgba(255,255,255,0.85); font-size: 0.78rem;
      display: flex; align-items: center; gap: 6px;
    }
    #file-input { display: none; }

    /* SYNC BAR */
    .sync-bar {
      background: linear-gradient(135deg, #1a3d1f 0%, #166534 100%);
      border-radius: 12px; padding: 12px 20px;
      display: none; align-items: center; gap: 14px;
      margin-bottom: 20px; box-shadow: 0 4px 15px rgba(22,101,52,0.2);
      flex-wrap: wrap;
    }
    .sync-bar.show { display: flex; }
    .sync-bar h4 { color: #fff; font-size: 0.88rem; font-weight: 700; flex: 1; }
    .sync-progress { background: rgba(255,255,255,0.2); border-radius: 4px; height: 6px; width: 150px; overflow: hidden; }
    .sync-fill { height: 100%; background: #4ade80; transition: width 0.4s; }
    .btn-sync {
      background: #16a34a; color: #fff; border: none; border-radius: 8px;
      padding: 8px 16px; font-size: 0.8rem; font-weight: 700; cursor: pointer;
      display: flex; align-items: center; gap: 6px;
    }
    .btn-sync:hover { background: #15803d; }
    .gas-input {
      background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
      border-radius: 8px; padding: 6px 12px; color: #fff; font-size: 0.75rem;
      width: 250px; outline: none;
    }

    /* KPI GRID */
    .kpi-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
      gap: 14px; margin-bottom: 24px;
    }
    .kpi-card {
      background: #fff; border-radius: 14px; padding: 18px 20px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.07);
      display: flex; align-items: center; gap: 14px;
      border-left: 4px solid transparent;
      transition: transform 0.2s, box-shadow 0.2s;
      cursor: pointer; user-select: none;
      position: relative; overflow: hidden;
    }
    .kpi-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.14); }
    .kpi-card.active-filter { box-shadow: 0 0 0 3px rgba(0,0,0,0.25) inset, 0 8px 24px rgba(0,0,0,0.14); }
    .kpi-card.blue { border-left-color: var(--adv-blue); }
    .kpi-card.blue .kpi-icon { background: var(--adv-blue); }
    .kpi-card.orange { border-left-color: var(--adv-orange); }
    .kpi-card.orange .kpi-icon { background: var(--adv-orange); }
    .kpi-card.red { border-left-color: var(--adv-red); }
    .kpi-card.red .kpi-icon { background: var(--adv-red); }
    .kpi-card.green { border-left-color: var(--adv-green); }
    .kpi-card.green .kpi-icon { background: var(--adv-green); }
    .kpi-card.yellow { border-left-color: var(--adv-yellow); }
    .kpi-card.yellow .kpi-icon { background: var(--adv-yellow); }
    .kpi-card.purple { border-left-color: var(--adv-purple); }
    .kpi-card.purple .kpi-icon { background: var(--adv-purple); }
    .kpi-card.gray { border-left-color: #6b7280; }
    .kpi-card.gray .kpi-icon { background: #6b7280; }
    .kpi-icon {
      width: 46px; height: 46px; border-radius: 12px;
      display: flex; align-items: center; justify-content: center;
      color: #fff; font-size: 1.15rem; flex-shrink: 0;
    }
    .kpi-info h3 { font-size: 1.7rem; font-weight: 800; line-height: 1; margin-bottom: 3px; color: #1a2533; }
    .kpi-info p { font-size: 0.7rem; color: var(--adv-gray); font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }

    /* TABLE SECTION */
    .table-section {
      background: #fff; border-radius: 14px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.07); overflow: hidden;
    }
    .table-header {
      padding: 16px 22px; display: flex; align-items: center; justify-content: space-between;
      border-bottom: 2px solid #f0f2f5; flex-wrap: wrap; gap: 10px;
    }
    .table-header h2 {
      font-size: 0.95rem; font-weight: 700; color: var(--adv-blue);
      display: flex; align-items: center; gap: 10px;
    }
    .table-controls { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
    .search-box { position: relative; }
    .search-box input {
      border: 1.5px solid #e2e8f0; border-radius: 8px;
      padding: 7px 10px 7px 32px; font-size: 0.8rem; width: 200px; outline: none;
    }
    .search-box i { position: absolute; left: 10px; top: 50%; transform: translateY(-50%); color: #aaa; font-size: 0.78rem; }
    .filter-select {
      border: 1.5px solid #e2e8f0; border-radius: 8px; padding: 7px 10px;
      font-size: 0.8rem; outline: none; background: #fff;
    }
    .btn-export {
      background: var(--adv-blue); color: #fff; border: none; border-radius: 8px;
      padding: 7px 14px; font-size: 0.8rem; font-weight: 600; cursor: pointer;
      display: flex; align-items: center; gap: 6px;
    }
    .table-wrapper { overflow-x: auto; }
    table { width: 100%; border-collapse: collapse; font-size: 0.78rem; }
    thead th {
      background: var(--adv-blue); color: #fff; padding: 11px 12px;
      text-align: left; font-weight: 700; font-size: 0.68rem;
      text-transform: uppercase; letter-spacing: 0.06em;
      white-space: nowrap; cursor: pointer;
      user-select: none;
    }
    thead th:hover { background: #004f7a; }
    thead th.mgmt { background: #166534; } /* Verde para colunas de gest\xE3o */
    thead th.mgmt:hover { background: #14532d; }
    tbody tr { border-bottom: 1px solid #f0f2f5; transition: background 0.15s; }
    tbody tr:hover { background: #f8faff; }
    tbody td { padding: 9px 12px; vertical-align: middle; }

    /* MODAL */
    .modal-overlay {
      display: none; position: fixed; inset: 0;
      background: rgba(0,0,0,0.55); z-index: 1000;
      align-items: center; justify-content: center; padding: 20px;
    }
    .modal-overlay.show { display: flex; }
    .modal {
      background: #fff; border-radius: 18px;
      max-width: 820px; width: 100%; max-height: 90vh; overflow-y: auto;
    }
    .modal-header {
      background: linear-gradient(135deg, var(--adv-blue), #005A8E);
      padding: 18px 24px; border-radius: 18px 18px 0 0;
      display: flex; align-items: center; justify-content: space-between; color: #fff;
    }
    .modal-header h2 { font-size: 1rem; font-weight: 700; }
    .modal-close { background: none; border: none; color: #fff; font-size: 1.2rem; cursor: pointer; padding: 4px 8px; }
    .modal-body { padding: 22px 24px; }

    /* FOOTER */
    .footer { text-align: center; padding: 18px; color: var(--adv-gray); font-size: 0.72rem; border-top: 1px solid #e2e8f0; margin-top: 20px; }
  </style>
</head>
<body>

<header class="header">
  <div class="header-inner">
    <div class="header-brand">
      <img src="/static/addvalora-logo.png" alt="Addvalora" class="h-10 w-auto rounded-lg mr-4"/>
      <div class="header-title">
        <h1>NIE \u2014 Controle de Prazos Regulat\xF3rios</h1>
        <p>Dashboard de Monitoramento \xB7 Addvalora Brasil</p>
      </div>
    </div>
    <div class="header-right">
      <div class="addvalora-badge">NIE <span>Dashboard</span></div>
      <div class="live-clock">
        <div class="clock-time" id="clock-t">00:00:00</div>
        <div class="clock-date" id="clock-d">--/--/----</div>
      </div>
    </div>
  </div>
</header>

<main class="main">

  <!-- UPLOAD BANNER -->
  <div class="upload-banner">
    <div class="upload-icon"><i class="fas fa-file-excel"></i></div>
    <div class="upload-info">
      <h3>Importar Planilha Baruc / Controle</h3>
      <p>O sistema detecta automaticamente o formato e calcula os prazos regulat\xF3rios.</p>
    </div>
    <div class="upload-status" id="data-tag">
      <i class="fas fa-info-circle"></i> Aguardando importa\xE7\xE3o...
    </div>
    <button class="upload-btn" onclick="document.getElementById('file-input').click()">
      <i class="fas fa-upload"></i> Selecionar Arquivo
    </button>
    <input type="file" id="file-input" accept=".xlsx,.xls" onchange="handleUpload(event)" />
  </div>

  <!-- SYNC BAR -->
  <div class="sync-bar" id="sync-bar">
    <div class="flex items-center gap-4 flex-1">
      <div class="bg-green-600 w-10 h-10 rounded-lg flex items-center justify-center text-white">
        <i class="fab fa-google"></i>
      </div>
      <div>
        <h4>Sincronizar com Google Sheets</h4>
        <p id="sync-status" class="text-white/70 text-xs">Pronto para enviar registros</p>
      </div>
    </div>
    <div class="flex items-center gap-4">
      <input type="text" id="gas-url" class="gas-input" placeholder="URL do WebApp Apps Script..."/>
      <div class="sync-progress"><div class="sync-fill" id="sync-fill" style="width:0%"></div></div>
      <button class="btn-sync" id="btn-sync" onclick="syncGoogleSheets()">
        <i class="fas fa-sync-alt"></i> Sincronizar
      </button>
    </div>
  </div>

  <!-- KPI GRID -->
  <div class="kpi-grid" id="kpi-grid">
    <div class="col-span-full flex flex-col items-center py-12 text-gray-400">
      <i class="fas fa-inbox text-5xl mb-4 opacity-20"></i>
      <p>Importe uma planilha para visualizar os indicadores</p>
    </div>
  </div>

  <!-- TABLE SECTION -->
  <div class="table-section">
    <div class="table-header">
      <h2><i class="fas fa-list text-orange-500"></i> Processos em Aberto</h2>
      <div class="table-controls">
        <div class="search-box">
          <i class="fas fa-search"></i>
          <input type="text" id="srch" placeholder="Buscar processo..." oninput="applyF()" />
        </div>
        <select class="filter-select" id="f-reg" onchange="applyF()">
          <option value="">Todos os Reguladores</option>
        </select>
        <select class="filter-select" id="f-status" onchange="applyF()">
          <option value="">Todos os Status</option>
        </select>
        <button class="btn-export" onclick="exportCSV()">
          <i class="fas fa-download"></i> Exportar CSV
        </button>
      </div>
    </div>
    <div class="table-wrapper">
      <table id="main-tbl">
        <thead>
          <tr>
            <th onclick="sortBy('addvalora')">Ref. Addvalora</th>
            <th onclick="sortBy('segurado')">Segurado</th>
            <th onclick="sortBy('regulador')">Regulador</th>
            <th onclick="sortBy('seguradora')">Seguradora</th>
            <th onclick="sortBy('status')">Status</th>
            <th onclick="sortBy('data_entrada')">Entrada</th>
            <th onclick="sortBy('prazo_d2')" class="mgmt"><i class="fas fa-calendar-check mr-1"></i> Prazo Prelim.</th>
            <th onclick="sortBy('prazo_90d')" class="mgmt"><i class="fas fa-clock mr-1"></i> Ciclo 90d</th>
            <th onclick="sortBy('_diasAbertos')" class="mgmt"><i class="fas fa-hourglass-half mr-1"></i> Dias Aberto</th>
            <th>Situa\xE7\xE3o</th>
            <th>A\xE7\xF5es</th>
          </tr>
        </thead>
        <tbody id="tbl-body"></tbody>
      </table>
    </div>
    <div class="pagination flex justify-between items-center p-4 border-t" id="pg"></div>
  </div>

</main>

<footer class="footer">
  Addvalora Brasil \xB7 NIE \u2013 N\xFAcleo de Intelig\xEAncia Estrat\xE9gica \xB7 Dashboard v2.0
</footer>

<!-- MODAL -->
<div class="modal-overlay" id="modal-ov" onclick="if(event.target===this)closeM()">
  <div class="modal">
    <div class="modal-header">
      <h2 id="m-title">Detalhes do Processo</h2>
      <button class="modal-close" onclick="closeM()"><i class="fas fa-times"></i></button>
    </div>
    <div class="modal-body" id="m-body"></div>
  </div>
</div>

<div class="toast-c fixed bottom-6 right-6 z-50 flex flex-col gap-2" id="toast-c"></div>

<script type="module" src="/static/app.js"><\/script>
</body>
</html>`;
var Je = new bt();
var mr = Object.assign({ "/src/index.tsx": Oe });
var yt = false;
for (const [, e] of Object.entries(mr)) e && (Je.route("/", e), Je.notFound(e.notFoundHandler), yt = true);
if (!yt) throw new Error("Can't import modules from ['/src/index.tsx','/app/server.ts']");
var drainBody = /* @__PURE__ */ __name2(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
__name2(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name2(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = Je;
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
__name2(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
__name2(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");
__name2(__facade_invoke__, "__facade_invoke__");
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  static {
    __name(this, "___Facade_ScheduledController__");
  }
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name2(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name2(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name2(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
__name2(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name2((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name2((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
__name2(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;

// node_modules/wrangler/templates/pages-dev-util.ts
function isRoutingRuleMatch(pathname, routingRule) {
  if (!pathname) {
    throw new Error("Pathname is undefined.");
  }
  if (!routingRule) {
    throw new Error("Routing rule is undefined.");
  }
  const ruleRegExp = transformRoutingRuleToRegExp(routingRule);
  return pathname.match(ruleRegExp) !== null;
}
__name(isRoutingRuleMatch, "isRoutingRuleMatch");
function transformRoutingRuleToRegExp(rule) {
  let transformedRule;
  if (rule === "/" || rule === "/*") {
    transformedRule = rule;
  } else if (rule.endsWith("/*")) {
    transformedRule = `${rule.substring(0, rule.length - 2)}(/*)?`;
  } else if (rule.endsWith("/")) {
    transformedRule = `${rule.substring(0, rule.length - 1)}(/)?`;
  } else if (rule.endsWith("*")) {
    transformedRule = rule;
  } else {
    transformedRule = `${rule}(/)?`;
  }
  transformedRule = `^${transformedRule.replaceAll(/\./g, "\\.").replaceAll(/\*/g, ".*")}$`;
  return new RegExp(transformedRule);
}
__name(transformRoutingRuleToRegExp, "transformRoutingRuleToRegExp");

// .wrangler/tmp/pages-Q8Hee2/mbxscnlffn.js
var define_ROUTES_default = { version: 1, include: ["/*"], exclude: ["/assets/*", "/index.html", "/static/*"] };
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        const workerAsHandler = middleware_loader_entry_default;
        if (workerAsHandler.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return workerAsHandler.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody2 = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default2 = drainBody2;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError2(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError2(e.cause)
  };
}
__name(reduceError2, "reduceError");
var jsonError2 = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError2(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default2 = jsonError2;

// .wrangler/tmp/bundle-89XRxj/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__2 = [
  middleware_ensure_req_body_drained_default2,
  middleware_miniflare3_json_error_default2
];
var middleware_insertion_facade_default2 = pages_dev_pipeline_default;

// node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__2 = [];
function __facade_register__2(...args) {
  __facade_middleware__2.push(...args.flat());
}
__name(__facade_register__2, "__facade_register__");
function __facade_invokeChain__2(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__2(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__2, "__facade_invokeChain__");
function __facade_invoke__2(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__2(request, env, ctx, dispatch, [
    ...__facade_middleware__2,
    finalMiddleware
  ]);
}
__name(__facade_invoke__2, "__facade_invoke__");

// .wrangler/tmp/bundle-89XRxj/middleware-loader.entry.ts
var __Facade_ScheduledController__2 = class ___Facade_ScheduledController__2 {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__2)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler2(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__2 === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__2.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__2) {
    __facade_register__2(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__2(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__2(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler2, "wrapExportedHandler");
function wrapWorkerEntrypoint2(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__2 === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__2.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__2) {
    __facade_register__2(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__2(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__2(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint2, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY2;
if (typeof middleware_insertion_facade_default2 === "object") {
  WRAPPED_ENTRY2 = wrapExportedHandler2(middleware_insertion_facade_default2);
} else if (typeof middleware_insertion_facade_default2 === "function") {
  WRAPPED_ENTRY2 = wrapWorkerEntrypoint2(middleware_insertion_facade_default2);
}
var middleware_loader_entry_default2 = WRAPPED_ENTRY2;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__2 as __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default2 as default
};
//# sourceMappingURL=mbxscnlffn.js.map
