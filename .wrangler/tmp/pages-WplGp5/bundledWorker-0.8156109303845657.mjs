var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// _worker.js
var yt = Object.defineProperty;
var qe = /* @__PURE__ */ __name((e) => {
  throw TypeError(e);
}, "qe");
var wt = /* @__PURE__ */ __name((e, t, r) => t in e ? yt(e, t, { enumerable: true, configurable: true, writable: true, value: r }) : e[t] = r, "wt");
var p = /* @__PURE__ */ __name((e, t, r) => wt(e, typeof t != "symbol" ? t + "" : t, r), "p");
var _e = /* @__PURE__ */ __name((e, t, r) => t.has(e) || qe("Cannot " + r), "_e");
var a = /* @__PURE__ */ __name((e, t, r) => (_e(e, t, "read from private field"), r ? r.call(e) : t.get(e)), "a");
var x = /* @__PURE__ */ __name((e, t, r) => t.has(e) ? qe("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), "x");
var u = /* @__PURE__ */ __name((e, t, r, s) => (_e(e, t, "write to private field"), s ? s.call(e, r) : t.set(e, r), r), "u");
var v = /* @__PURE__ */ __name((e, t, r) => (_e(e, t, "access private method"), r), "v");
var We = /* @__PURE__ */ __name((e, t, r, s) => ({ set _(n) {
  u(e, t, n, r);
}, get _() {
  return a(e, t, s);
} }), "We");
var Ke = /* @__PURE__ */ __name((e, t, r) => (s, n) => {
  let i = -1;
  return o(0);
  async function o(d) {
    if (d <= i) throw new Error("next() called multiple times");
    i = d;
    let l, c = false, h;
    if (e[d] ? (h = e[d][0][0], s.req.routeIndex = d) : h = d === e.length && n || void 0, h) try {
      l = await h(s, () => o(d + 1));
    } catch (f) {
      if (f instanceof Error && t) s.error = f, l = await t(f, s), c = true;
      else throw f;
    }
    else s.finalized === false && r && (l = await r(s));
    return l && (s.finalized === false || c) && (s.res = l), s;
  }
  __name(o, "o");
}, "Ke");
var kt = /* @__PURE__ */ Symbol();
var Et = /* @__PURE__ */ __name(async (e, t = /* @__PURE__ */ Object.create(null)) => {
  const { all: r = false, dot: s = false } = t, i = (e instanceof ot ? e.raw.headers : e.headers).get("Content-Type");
  return i != null && i.startsWith("multipart/form-data") || i != null && i.startsWith("application/x-www-form-urlencoded") ? Rt(e, { all: r, dot: s }) : {};
}, "Et");
async function Rt(e, t) {
  const r = await e.formData();
  return r ? At(r, t) : {};
}
__name(Rt, "Rt");
function At(e, t) {
  const r = /* @__PURE__ */ Object.create(null);
  return e.forEach((s, n) => {
    t.all || n.endsWith("[]") ? Ot(r, n, s) : r[n] = s;
  }), t.dot && Object.entries(r).forEach(([s, n]) => {
    s.includes(".") && (jt(r, s, n), delete r[s]);
  }), r;
}
__name(At, "At");
var Ot = /* @__PURE__ */ __name((e, t, r) => {
  e[t] !== void 0 ? Array.isArray(e[t]) ? e[t].push(r) : e[t] = [e[t], r] : t.endsWith("[]") ? e[t] = [r] : e[t] = r;
}, "Ot");
var jt = /* @__PURE__ */ __name((e, t, r) => {
  if (/(?:^|\.)__proto__\./.test(t)) return;
  let s = e;
  const n = t.split(".");
  n.forEach((i, o) => {
    o === n.length - 1 ? s[i] = r : ((!s[i] || typeof s[i] != "object" || Array.isArray(s[i]) || s[i] instanceof File) && (s[i] = /* @__PURE__ */ Object.create(null)), s = s[i]);
  });
}, "jt");
var rt = /* @__PURE__ */ __name((e) => {
  const t = e.split("/");
  return t[0] === "" && t.shift(), t;
}, "rt");
var Pt = /* @__PURE__ */ __name((e) => {
  const { groups: t, path: r } = St(e), s = rt(r);
  return Ct(s, t);
}, "Pt");
var St = /* @__PURE__ */ __name((e) => {
  const t = [];
  return e = e.replace(/\{[^}]+\}/g, (r, s) => {
    const n = `@${s}`;
    return t.push([n, r]), n;
  }), { groups: t, path: e };
}, "St");
var Ct = /* @__PURE__ */ __name((e, t) => {
  for (let r = t.length - 1; r >= 0; r--) {
    const [s] = t[r];
    for (let n = e.length - 1; n >= 0; n--) if (e[n].includes(s)) {
      e[n] = e[n].replace(s, t[r][1]);
      break;
    }
  }
  return e;
}, "Ct");
var je = {};
var Ht = /* @__PURE__ */ __name((e, t) => {
  if (e === "*") return "*";
  const r = e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (r) {
    const s = `${e}#${t}`;
    return je[s] || (r[2] ? je[s] = t && t[0] !== ":" && t[0] !== "*" ? [s, r[1], new RegExp(`^${r[2]}(?=/${t})`)] : [e, r[1], new RegExp(`^${r[2]}$`)] : je[s] = [e, r[1], true]), je[s];
  }
  return null;
}, "Ht");
var Be = /* @__PURE__ */ __name((e, t) => {
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
}, "Be");
var Dt = /* @__PURE__ */ __name((e) => Be(e, decodeURI), "Dt");
var st = /* @__PURE__ */ __name((e) => {
  const t = e.url, r = t.indexOf("/", t.indexOf(":") + 4);
  let s = r;
  for (; s < t.length; s++) {
    const n = t.charCodeAt(s);
    if (n === 37) {
      const i = t.indexOf("?", s), o = t.indexOf("#", s), d = i === -1 ? o === -1 ? void 0 : o : o === -1 ? i : Math.min(i, o), l = t.slice(r, d);
      return Dt(l.includes("%25") ? l.replace(/%25/g, "%2525") : l);
    } else if (n === 63 || n === 35) break;
  }
  return t.slice(r, s);
}, "st");
var zt = /* @__PURE__ */ __name((e) => {
  const t = st(e);
  return t.length > 1 && t.at(-1) === "/" ? t.slice(0, -1) : t;
}, "zt");
var ne = /* @__PURE__ */ __name((e, t, ...r) => (r.length && (t = ne(t, ...r)), `${(e == null ? void 0 : e[0]) === "/" ? "" : "/"}${e}${t === "/" ? "" : `${(e == null ? void 0 : e.at(-1)) === "/" ? "" : "/"}${(t == null ? void 0 : t[0]) === "/" ? t.slice(1) : t}`}`), "ne");
var nt = /* @__PURE__ */ __name((e) => {
  if (e.charCodeAt(e.length - 1) !== 63 || !e.includes(":")) return null;
  const t = e.split("/"), r = [];
  let s = "";
  return t.forEach((n) => {
    if (n !== "" && !/\:/.test(n)) s += "/" + n;
    else if (/\:/.test(n)) if (/\?/.test(n)) {
      r.length === 0 && s === "" ? r.push("/") : r.push(s);
      const i = n.replace("?", "");
      s += "/" + i, r.push(s);
    } else s += "/" + n;
  }), r.filter((n, i, o) => o.indexOf(n) === i);
}, "nt");
var $e = /* @__PURE__ */ __name((e) => /[%+]/.test(e) ? (e.indexOf("+") !== -1 && (e = e.replace(/\+/g, " ")), e.indexOf("%") !== -1 ? Be(e, at) : e) : e, "$e");
var it = /* @__PURE__ */ __name((e, t, r) => {
  let s;
  if (!r && t && !/[%+]/.test(t)) {
    let o = e.indexOf("?", 8);
    if (o === -1) return;
    for (e.startsWith(t, o + 1) || (o = e.indexOf(`&${t}`, o + 1)); o !== -1; ) {
      const d = e.charCodeAt(o + t.length + 1);
      if (d === 61) {
        const l = o + t.length + 2, c = e.indexOf("&", l);
        return $e(e.slice(l, c === -1 ? void 0 : c));
      } else if (d == 38 || isNaN(d)) return "";
      o = e.indexOf(`&${t}`, o + 1);
    }
    if (s = /[%+]/.test(e), !s) return;
  }
  const n = {};
  s ?? (s = /[%+]/.test(e));
  let i = e.indexOf("?", 8);
  for (; i !== -1; ) {
    const o = e.indexOf("&", i + 1);
    let d = e.indexOf("=", i);
    d > o && o !== -1 && (d = -1);
    let l = e.slice(i + 1, d === -1 ? o === -1 ? void 0 : o : d);
    if (s && (l = $e(l)), i = o, l === "") continue;
    let c;
    d === -1 ? c = "" : (c = e.slice(d + 1, o === -1 ? void 0 : o), s && (c = $e(c))), r ? (n[l] && Array.isArray(n[l]) || (n[l] = []), n[l].push(c)) : n[l] ?? (n[l] = c);
  }
  return t ? n[t] : n;
}, "it");
var It = it;
var Nt = /* @__PURE__ */ __name((e, t) => it(e, t, true), "Nt");
var at = decodeURIComponent;
var Ve = /* @__PURE__ */ __name((e) => Be(e, at), "Ve");
var oe;
var O;
var F;
var lt;
var ct;
var Le;
var B;
var Xe;
var ot = (Xe = class {
  static {
    __name(this, "Xe");
  }
  constructor(e, t = "/", r = [[]]) {
    x(this, F);
    p(this, "raw");
    x(this, oe);
    x(this, O);
    p(this, "routeIndex", 0);
    p(this, "path");
    p(this, "bodyCache", {});
    x(this, B, (e2) => {
      const { bodyCache: t2, raw: r2 } = this, s = t2[e2];
      if (s) return s;
      const n = Object.keys(t2)[0];
      return n ? t2[n].then((i) => (n === "json" && (i = JSON.stringify(i)), new Response(i)[e2]())) : t2[e2] = r2[e2]();
    });
    this.raw = e, this.path = t, u(this, O, r), u(this, oe, {});
  }
  param(e) {
    return e ? v(this, F, lt).call(this, e) : v(this, F, ct).call(this);
  }
  query(e) {
    return It(this.url, e);
  }
  queries(e) {
    return Nt(this.url, e);
  }
  header(e) {
    if (e) return this.raw.headers.get(e) ?? void 0;
    const t = {};
    return this.raw.headers.forEach((r, s) => {
      t[s] = r;
    }), t;
  }
  async parseBody(e) {
    return Et(this, e);
  }
  json() {
    return a(this, B).call(this, "text").then((e) => JSON.parse(e));
  }
  text() {
    return a(this, B).call(this, "text");
  }
  arrayBuffer() {
    return a(this, B).call(this, "arrayBuffer");
  }
  blob() {
    return a(this, B).call(this, "blob");
  }
  formData() {
    return a(this, B).call(this, "formData");
  }
  addValidatedData(e, t) {
    a(this, oe)[e] = t;
  }
  valid(e) {
    return a(this, oe)[e];
  }
  get url() {
    return this.raw.url;
  }
  get method() {
    return this.raw.method;
  }
  get [kt]() {
    return a(this, O);
  }
  get matchedRoutes() {
    return a(this, O)[0].map(([[, e]]) => e);
  }
  get routePath() {
    return a(this, O)[0].map(([[, e]]) => e)[this.routeIndex].path;
  }
}, oe = /* @__PURE__ */ new WeakMap(), O = /* @__PURE__ */ new WeakMap(), F = /* @__PURE__ */ new WeakSet(), lt = /* @__PURE__ */ __name(function(e) {
  const t = a(this, O)[0][this.routeIndex][1][e], r = v(this, F, Le).call(this, t);
  return r && /\%/.test(r) ? Ve(r) : r;
}, "lt"), ct = /* @__PURE__ */ __name(function() {
  const e = {}, t = Object.keys(a(this, O)[0][this.routeIndex][1]);
  for (const r of t) {
    const s = v(this, F, Le).call(this, a(this, O)[0][this.routeIndex][1][r]);
    s !== void 0 && (e[r] = /\%/.test(s) ? Ve(s) : s);
  }
  return e;
}, "ct"), Le = /* @__PURE__ */ __name(function(e) {
  return a(this, O)[1] ? a(this, O)[1][e] : e;
}, "Le"), B = /* @__PURE__ */ new WeakMap(), Xe);
var Tt = { Stringify: 1 };
var dt = /* @__PURE__ */ __name(async (e, t, r, s, n) => {
  typeof e == "object" && !(e instanceof String) && (e instanceof Promise || (e = e.toString()), e instanceof Promise && (e = await e));
  const i = e.callbacks;
  return i != null && i.length ? (n ? n[0] += e : n = [e], Promise.all(i.map((d) => d({ phase: t, buffer: n, context: s }))).then((d) => Promise.all(d.filter(Boolean).map((l) => dt(l, t, false, s, n))).then(() => n[0]))) : Promise.resolve(e);
}, "dt");
var _t = "text/plain; charset=UTF-8";
var Fe = /* @__PURE__ */ __name((e, t) => ({ "Content-Type": e, ...t }), "Fe");
var ve = /* @__PURE__ */ __name((e, t) => new Response(e, t), "ve");
var we;
var ke;
var N;
var le;
var T;
var A;
var Ee;
var ce;
var de;
var Y;
var Re;
var Ae;
var M;
var ie;
var Je;
var $t = (Je = class {
  static {
    __name(this, "Je");
  }
  constructor(e, t) {
    x(this, M);
    x(this, we);
    x(this, ke);
    p(this, "env", {});
    x(this, N);
    p(this, "finalized", false);
    p(this, "error");
    x(this, le);
    x(this, T);
    x(this, A);
    x(this, Ee);
    x(this, ce);
    x(this, de);
    x(this, Y);
    x(this, Re);
    x(this, Ae);
    p(this, "render", (...e2) => (a(this, ce) ?? u(this, ce, (t2) => this.html(t2)), a(this, ce).call(this, ...e2)));
    p(this, "setLayout", (e2) => u(this, Ee, e2));
    p(this, "getLayout", () => a(this, Ee));
    p(this, "setRenderer", (e2) => {
      u(this, ce, e2);
    });
    p(this, "header", (e2, t2, r) => {
      this.finalized && u(this, A, ve(a(this, A).body, a(this, A)));
      const s = a(this, A) ? a(this, A).headers : a(this, Y) ?? u(this, Y, new Headers());
      t2 === void 0 ? s.delete(e2) : r != null && r.append ? s.append(e2, t2) : s.set(e2, t2);
    });
    p(this, "status", (e2) => {
      u(this, le, e2);
    });
    p(this, "set", (e2, t2) => {
      a(this, N) ?? u(this, N, /* @__PURE__ */ new Map()), a(this, N).set(e2, t2);
    });
    p(this, "get", (e2) => a(this, N) ? a(this, N).get(e2) : void 0);
    p(this, "newResponse", (...e2) => v(this, M, ie).call(this, ...e2));
    p(this, "body", (e2, t2, r) => v(this, M, ie).call(this, e2, t2, r));
    p(this, "text", (e2, t2, r) => !a(this, Y) && !a(this, le) && !t2 && !r && !this.finalized ? new Response(e2) : v(this, M, ie).call(this, e2, t2, Fe(_t, r)));
    p(this, "json", (e2, t2, r) => v(this, M, ie).call(this, JSON.stringify(e2), t2, Fe("application/json", r)));
    p(this, "html", (e2, t2, r) => {
      const s = /* @__PURE__ */ __name((n) => v(this, M, ie).call(this, n, t2, Fe("text/html; charset=UTF-8", r)), "s");
      return typeof e2 == "object" ? dt(e2, Tt.Stringify, false, {}).then(s) : s(e2);
    });
    p(this, "redirect", (e2, t2) => {
      const r = String(e2);
      return this.header("Location", /[^\x00-\xFF]/.test(r) ? encodeURI(r) : r), this.newResponse(null, t2 ?? 302);
    });
    p(this, "notFound", () => (a(this, de) ?? u(this, de, () => ve()), a(this, de).call(this, this)));
    u(this, we, e), t && (u(this, T, t.executionCtx), this.env = t.env, u(this, de, t.notFoundHandler), u(this, Ae, t.path), u(this, Re, t.matchResult));
  }
  get req() {
    return a(this, ke) ?? u(this, ke, new ot(a(this, we), a(this, Ae), a(this, Re))), a(this, ke);
  }
  get event() {
    if (a(this, T) && "respondWith" in a(this, T)) return a(this, T);
    throw Error("This context has no FetchEvent");
  }
  get executionCtx() {
    if (a(this, T)) return a(this, T);
    throw Error("This context has no ExecutionContext");
  }
  get res() {
    return a(this, A) || u(this, A, ve(null, { headers: a(this, Y) ?? u(this, Y, new Headers()) }));
  }
  set res(e) {
    if (a(this, A) && e) {
      e = ve(e.body, e);
      for (const [t, r] of a(this, A).headers.entries()) if (t !== "content-type") if (t === "set-cookie") {
        const s = a(this, A).headers.getSetCookie();
        e.headers.delete("set-cookie");
        for (const n of s) e.headers.append("set-cookie", n);
      } else e.headers.set(t, r);
    }
    u(this, A, e), this.finalized = true;
  }
  get var() {
    return a(this, N) ? Object.fromEntries(a(this, N)) : {};
  }
}, we = /* @__PURE__ */ new WeakMap(), ke = /* @__PURE__ */ new WeakMap(), N = /* @__PURE__ */ new WeakMap(), le = /* @__PURE__ */ new WeakMap(), T = /* @__PURE__ */ new WeakMap(), A = /* @__PURE__ */ new WeakMap(), Ee = /* @__PURE__ */ new WeakMap(), ce = /* @__PURE__ */ new WeakMap(), de = /* @__PURE__ */ new WeakMap(), Y = /* @__PURE__ */ new WeakMap(), Re = /* @__PURE__ */ new WeakMap(), Ae = /* @__PURE__ */ new WeakMap(), M = /* @__PURE__ */ new WeakSet(), ie = /* @__PURE__ */ __name(function(e, t, r) {
  const s = a(this, A) ? new Headers(a(this, A).headers) : a(this, Y) ?? new Headers();
  if (typeof t == "object" && "headers" in t) {
    const i = t.headers instanceof Headers ? t.headers : new Headers(t.headers);
    for (const [o, d] of i) o.toLowerCase() === "set-cookie" ? s.append(o, d) : s.set(o, d);
  }
  if (r) for (const [i, o] of Object.entries(r)) if (typeof o == "string") s.set(i, o);
  else {
    s.delete(i);
    for (const d of o) s.append(i, d);
  }
  const n = typeof t == "number" ? t : (t == null ? void 0 : t.status) ?? a(this, le);
  return ve(e, { status: n, headers: s });
}, "ie"), Je);
var y = "ALL";
var Ft = "all";
var Lt = ["get", "post", "put", "delete", "options", "patch"];
var ht = "Can not add a route since the matcher is already built.";
var ft = class extends Error {
  static {
    __name(this, "ft");
  }
};
var Bt = "__COMPOSED_HANDLER";
var Mt = /* @__PURE__ */ __name((e) => e.text("404 Not Found", 404), "Mt");
var Ge = /* @__PURE__ */ __name((e, t) => {
  if ("getResponse" in e) {
    const r = e.getResponse();
    return t.newResponse(r.body, r);
  }
  return console.error(e), t.text("Internal Server Error", 500);
}, "Ge");
var P;
var w;
var ut;
var S;
var V;
var Pe;
var Se;
var he;
var Ut = (he = class {
  static {
    __name(this, "he");
  }
  constructor(t = {}) {
    x(this, w);
    p(this, "get");
    p(this, "post");
    p(this, "put");
    p(this, "delete");
    p(this, "options");
    p(this, "patch");
    p(this, "all");
    p(this, "on");
    p(this, "use");
    p(this, "router");
    p(this, "getPath");
    p(this, "_basePath", "/");
    x(this, P, "/");
    p(this, "routes", []);
    x(this, S, Mt);
    p(this, "errorHandler", Ge);
    p(this, "onError", (t2) => (this.errorHandler = t2, this));
    p(this, "notFound", (t2) => (u(this, S, t2), this));
    p(this, "fetch", (t2, ...r) => v(this, w, Se).call(this, t2, r[1], r[0], t2.method));
    p(this, "request", (t2, r, s2, n2) => t2 instanceof Request ? this.fetch(r ? new Request(t2, r) : t2, s2, n2) : (t2 = t2.toString(), this.fetch(new Request(/^https?:\/\//.test(t2) ? t2 : `http://localhost${ne("/", t2)}`, r), s2, n2)));
    p(this, "fire", () => {
      addEventListener("fetch", (t2) => {
        t2.respondWith(v(this, w, Se).call(this, t2.request, t2, void 0, t2.request.method));
      });
    });
    [...Lt, Ft].forEach((i) => {
      this[i] = (o, ...d) => (typeof o == "string" ? u(this, P, o) : v(this, w, V).call(this, i, a(this, P), o), d.forEach((l) => {
        v(this, w, V).call(this, i, a(this, P), l);
      }), this);
    }), this.on = (i, o, ...d) => {
      for (const l of [o].flat()) {
        u(this, P, l);
        for (const c of [i].flat()) d.map((h) => {
          v(this, w, V).call(this, c.toUpperCase(), a(this, P), h);
        });
      }
      return this;
    }, this.use = (i, ...o) => (typeof i == "string" ? u(this, P, i) : (u(this, P, "*"), o.unshift(i)), o.forEach((d) => {
      v(this, w, V).call(this, y, a(this, P), d);
    }), this);
    const { strict: s, ...n } = t;
    Object.assign(this, n), this.getPath = s ?? true ? t.getPath ?? st : zt;
  }
  route(t, r) {
    const s = this.basePath(t);
    return r.routes.map((n) => {
      var o;
      let i;
      r.errorHandler === Ge ? i = n.handler : (i = /* @__PURE__ */ __name(async (d, l) => (await Ke([], r.errorHandler)(d, () => n.handler(d, l))).res, "i"), i[Bt] = n.handler), v(o = s, w, V).call(o, n.method, n.path, i);
    }), this;
  }
  basePath(t) {
    const r = v(this, w, ut).call(this);
    return r._basePath = ne(this._basePath, t), r;
  }
  mount(t, r, s) {
    let n, i;
    s && (typeof s == "function" ? i = s : (i = s.optionHandler, s.replaceRequest === false ? n = /* @__PURE__ */ __name((l) => l, "n") : n = s.replaceRequest));
    const o = i ? (l) => {
      const c = i(l);
      return Array.isArray(c) ? c : [c];
    } : (l) => {
      let c;
      try {
        c = l.executionCtx;
      } catch {
      }
      return [l.env, c];
    };
    n || (n = (() => {
      const l = ne(this._basePath, t), c = l === "/" ? 0 : l.length;
      return (h) => {
        const f = new URL(h.url);
        return f.pathname = f.pathname.slice(c) || "/", new Request(f, h);
      };
    })());
    const d = /* @__PURE__ */ __name(async (l, c) => {
      const h = await r(n(l.req.raw), ...o(l));
      if (h) return h;
      await c();
    }, "d");
    return v(this, w, V).call(this, y, ne(t, "*"), d), this;
  }
}, P = /* @__PURE__ */ new WeakMap(), w = /* @__PURE__ */ new WeakSet(), ut = /* @__PURE__ */ __name(function() {
  const t = new he({ router: this.router, getPath: this.getPath });
  return t.errorHandler = this.errorHandler, u(t, S, a(this, S)), t.routes = this.routes, t;
}, "ut"), S = /* @__PURE__ */ new WeakMap(), V = /* @__PURE__ */ __name(function(t, r, s) {
  t = t.toUpperCase(), r = ne(this._basePath, r);
  const n = { basePath: this._basePath, path: r, method: t, handler: s };
  this.router.add(t, r, [s, n]), this.routes.push(n);
}, "V"), Pe = /* @__PURE__ */ __name(function(t, r) {
  if (t instanceof Error) return this.errorHandler(t, r);
  throw t;
}, "Pe"), Se = /* @__PURE__ */ __name(function(t, r, s, n) {
  if (n === "HEAD") return (async () => new Response(null, await v(this, w, Se).call(this, t, r, s, "GET")))();
  const i = this.getPath(t, { env: s }), o = this.router.match(n, i), d = new $t(t, { path: i, matchResult: o, env: s, executionCtx: r, notFoundHandler: a(this, S) });
  if (o[0].length === 1) {
    let c;
    try {
      c = o[0][0][0][0](d, async () => {
        d.res = await a(this, S).call(this, d);
      });
    } catch (h) {
      return v(this, w, Pe).call(this, h, d);
    }
    return c instanceof Promise ? c.then((h) => h || (d.finalized ? d.res : a(this, S).call(this, d))).catch((h) => v(this, w, Pe).call(this, h, d)) : c ?? a(this, S).call(this, d);
  }
  const l = Ke(o[0], this.errorHandler, a(this, S));
  return (async () => {
    try {
      const c = await l(d);
      if (!c.finalized) throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");
      return c.res;
    } catch (c) {
      return v(this, w, Pe).call(this, c, d);
    }
  })();
}, "Se"), he);
var pt = [];
function qt(e, t) {
  const r = this.buildAllMatchers(), s = /* @__PURE__ */ __name(((n, i) => {
    const o = r[n] || r[y], d = o[2][i];
    if (d) return d;
    const l = i.match(o[0]);
    if (!l) return [[], pt];
    const c = l.indexOf("", 1);
    return [o[1][c], l];
  }), "s");
  return this.match = s, s(e, t);
}
__name(qt, "qt");
var He = "[^/]+";
var me = ".*";
var ye = "(?:|/.*)";
var ae = /* @__PURE__ */ Symbol();
var Wt = new Set(".\\+*[^]$()");
function Kt(e, t) {
  return e.length === 1 ? t.length === 1 ? e < t ? -1 : 1 : -1 : t.length === 1 || e === me || e === ye ? 1 : t === me || t === ye ? -1 : e === He ? 1 : t === He ? -1 : e.length === t.length ? e < t ? -1 : 1 : t.length - e.length;
}
__name(Kt, "Kt");
var X;
var J;
var C;
var ee;
var Vt = (ee = class {
  static {
    __name(this, "ee");
  }
  constructor() {
    x(this, X);
    x(this, J);
    x(this, C, /* @__PURE__ */ Object.create(null));
  }
  insert(t, r, s, n, i) {
    if (t.length === 0) {
      if (a(this, X) !== void 0) throw ae;
      if (i) return;
      u(this, X, r);
      return;
    }
    const [o, ...d] = t, l = o === "*" ? d.length === 0 ? ["", "", me] : ["", "", He] : o === "/*" ? ["", "", ye] : o.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let c;
    if (l) {
      const h = l[1];
      let f = l[2] || He;
      if (h && l[2] && (f === ".*" || (f = f.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:"), /\((?!\?:)/.test(f)))) throw ae;
      if (c = a(this, C)[f], !c) {
        if (Object.keys(a(this, C)).some((g) => g !== me && g !== ye)) throw ae;
        if (i) return;
        c = a(this, C)[f] = new ee(), h !== "" && u(c, J, n.varIndex++);
      }
      !i && h !== "" && s.push([h, a(c, J)]);
    } else if (c = a(this, C)[o], !c) {
      if (Object.keys(a(this, C)).some((h) => h.length > 1 && h !== me && h !== ye)) throw ae;
      if (i) return;
      c = a(this, C)[o] = new ee();
    }
    c.insert(d, r, s, n, i);
  }
  buildRegExpStr() {
    const r = Object.keys(a(this, C)).sort(Kt).map((s) => {
      const n = a(this, C)[s];
      return (typeof a(n, J) == "number" ? `(${s})@${a(n, J)}` : Wt.has(s) ? `\\${s}` : s) + n.buildRegExpStr();
    });
    return typeof a(this, X) == "number" && r.unshift(`#${a(this, X)}`), r.length === 0 ? "" : r.length === 1 ? r[0] : "(?:" + r.join("|") + ")";
  }
}, X = /* @__PURE__ */ new WeakMap(), J = /* @__PURE__ */ new WeakMap(), C = /* @__PURE__ */ new WeakMap(), ee);
var De;
var Oe;
var Qe;
var Gt = (Qe = class {
  static {
    __name(this, "Qe");
  }
  constructor() {
    x(this, De, { varIndex: 0 });
    x(this, Oe, new Vt());
  }
  insert(e, t, r) {
    const s = [], n = [];
    for (let o = 0; ; ) {
      let d = false;
      if (e = e.replace(/\{[^}]+\}/g, (l) => {
        const c = `@\\${o}`;
        return n[o] = [c, l], o++, d = true, c;
      }), !d) break;
    }
    const i = e.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let o = n.length - 1; o >= 0; o--) {
      const [d] = n[o];
      for (let l = i.length - 1; l >= 0; l--) if (i[l].indexOf(d) !== -1) {
        i[l] = i[l].replace(d, n[o][1]);
        break;
      }
    }
    return a(this, Oe).insert(i, t, s, a(this, De), r), s;
  }
  buildRegExp() {
    let e = a(this, Oe).buildRegExpStr();
    if (e === "") return [/^$/, [], []];
    let t = 0;
    const r = [], s = [];
    return e = e.replace(/#(\d+)|@(\d+)|\.\*\$/g, (n, i, o) => i !== void 0 ? (r[++t] = Number(i), "$()") : (o !== void 0 && (s[Number(o)] = ++t), "")), [new RegExp(`^${e}`), r, s];
  }
}, De = /* @__PURE__ */ new WeakMap(), Oe = /* @__PURE__ */ new WeakMap(), Qe);
var Yt = [/^$/, [], /* @__PURE__ */ Object.create(null)];
var Ce = /* @__PURE__ */ Object.create(null);
function gt(e) {
  return Ce[e] ?? (Ce[e] = new RegExp(e === "*" ? "" : `^${e.replace(/\/\*$|([.\\+*[^\]$()])/g, (t, r) => r ? `\\${r}` : "(?:|/.*)")}$`));
}
__name(gt, "gt");
function Xt() {
  Ce = /* @__PURE__ */ Object.create(null);
}
__name(Xt, "Xt");
function Jt(e) {
  var c;
  const t = new Gt(), r = [];
  if (e.length === 0) return Yt;
  const s = e.map((h) => [!/\*|\/:/.test(h[0]), ...h]).sort(([h, f], [g, b]) => h ? 1 : g ? -1 : f.length - b.length), n = /* @__PURE__ */ Object.create(null);
  for (let h = 0, f = -1, g = s.length; h < g; h++) {
    const [b, E, D] = s[h];
    b ? n[E] = [D.map(([H]) => [H, /* @__PURE__ */ Object.create(null)]), pt] : f++;
    let j;
    try {
      j = t.insert(E, f, b);
    } catch (H) {
      throw H === ae ? new ft(E) : H;
    }
    b || (r[f] = D.map(([H, m]) => {
      const z = /* @__PURE__ */ Object.create(null);
      for (m -= 1; m >= 0; m--) {
        const [pe, Ne] = j[m];
        z[pe] = Ne;
      }
      return [H, z];
    }));
  }
  const [i, o, d] = t.buildRegExp();
  for (let h = 0, f = r.length; h < f; h++) for (let g = 0, b = r[h].length; g < b; g++) {
    const E = (c = r[h][g]) == null ? void 0 : c[1];
    if (!E) continue;
    const D = Object.keys(E);
    for (let j = 0, H = D.length; j < H; j++) E[D[j]] = d[E[D[j]]];
  }
  const l = [];
  for (const h in o) l[h] = r[o[h]];
  return [i, l, n];
}
__name(Jt, "Jt");
function se(e, t) {
  if (e) {
    for (const r of Object.keys(e).sort((s, n) => n.length - s.length)) if (gt(r).test(t)) return [...e[r]];
  }
}
__name(se, "se");
var U;
var q;
var ze;
var xt;
var Ze;
var Qt = (Ze = class {
  static {
    __name(this, "Ze");
  }
  constructor() {
    x(this, ze);
    p(this, "name", "RegExpRouter");
    x(this, U);
    x(this, q);
    p(this, "match", qt);
    u(this, U, { [y]: /* @__PURE__ */ Object.create(null) }), u(this, q, { [y]: /* @__PURE__ */ Object.create(null) });
  }
  add(e, t, r) {
    var d;
    const s = a(this, U), n = a(this, q);
    if (!s || !n) throw new Error(ht);
    s[e] || [s, n].forEach((l) => {
      l[e] = /* @__PURE__ */ Object.create(null), Object.keys(l[y]).forEach((c) => {
        l[e][c] = [...l[y][c]];
      });
    }), t === "/*" && (t = "*");
    const i = (t.match(/\/:/g) || []).length;
    if (/\*$/.test(t)) {
      const l = gt(t);
      e === y ? Object.keys(s).forEach((c) => {
        var h;
        (h = s[c])[t] || (h[t] = se(s[c], t) || se(s[y], t) || []);
      }) : (d = s[e])[t] || (d[t] = se(s[e], t) || se(s[y], t) || []), Object.keys(s).forEach((c) => {
        (e === y || e === c) && Object.keys(s[c]).forEach((h) => {
          l.test(h) && s[c][h].push([r, i]);
        });
      }), Object.keys(n).forEach((c) => {
        (e === y || e === c) && Object.keys(n[c]).forEach((h) => l.test(h) && n[c][h].push([r, i]));
      });
      return;
    }
    const o = nt(t) || [t];
    for (let l = 0, c = o.length; l < c; l++) {
      const h = o[l];
      Object.keys(n).forEach((f) => {
        var g;
        (e === y || e === f) && ((g = n[f])[h] || (g[h] = [...se(s[f], h) || se(s[y], h) || []]), n[f][h].push([r, i - c + l + 1]));
      });
    }
  }
  buildAllMatchers() {
    const e = /* @__PURE__ */ Object.create(null);
    return Object.keys(a(this, q)).concat(Object.keys(a(this, U))).forEach((t) => {
      e[t] || (e[t] = v(this, ze, xt).call(this, t));
    }), u(this, U, u(this, q, void 0)), Xt(), e;
  }
}, U = /* @__PURE__ */ new WeakMap(), q = /* @__PURE__ */ new WeakMap(), ze = /* @__PURE__ */ new WeakSet(), xt = /* @__PURE__ */ __name(function(e) {
  const t = [];
  let r = e === y;
  return [a(this, U), a(this, q)].forEach((s) => {
    const n = s[e] ? Object.keys(s[e]).map((i) => [i, s[e][i]]) : [];
    n.length !== 0 ? (r || (r = true), t.push(...n)) : e !== y && t.push(...Object.keys(s[y]).map((i) => [i, s[y][i]]));
  }), r ? Jt(t) : null;
}, "xt"), Ze);
var W;
var _;
var et;
var Zt = (et = class {
  static {
    __name(this, "et");
  }
  constructor(e) {
    p(this, "name", "SmartRouter");
    x(this, W, []);
    x(this, _, []);
    u(this, W, e.routers);
  }
  add(e, t, r) {
    if (!a(this, _)) throw new Error(ht);
    a(this, _).push([e, t, r]);
  }
  match(e, t) {
    if (!a(this, _)) throw new Error("Fatal error");
    const r = a(this, W), s = a(this, _), n = r.length;
    let i = 0, o;
    for (; i < n; i++) {
      const d = r[i];
      try {
        for (let l = 0, c = s.length; l < c; l++) d.add(...s[l]);
        o = d.match(e, t);
      } catch (l) {
        if (l instanceof ft) continue;
        throw l;
      }
      this.match = d.match.bind(d), u(this, W, [d]), u(this, _, void 0);
      break;
    }
    if (i === n) throw new Error("Fatal error");
    return this.name = `SmartRouter + ${this.activeRouter.name}`, o;
  }
  get activeRouter() {
    if (a(this, _) || a(this, W).length !== 1) throw new Error("No active router has been determined yet.");
    return a(this, W)[0];
  }
}, W = /* @__PURE__ */ new WeakMap(), _ = /* @__PURE__ */ new WeakMap(), et);
var be = /* @__PURE__ */ Object.create(null);
var er = /* @__PURE__ */ __name((e) => {
  for (const t in e) return true;
  return false;
}, "er");
var K;
var R;
var Q;
var fe;
var k;
var $;
var G;
var ue;
var tr = (ue = class {
  static {
    __name(this, "ue");
  }
  constructor(t, r, s) {
    x(this, $);
    x(this, K);
    x(this, R);
    x(this, Q);
    x(this, fe, 0);
    x(this, k, be);
    if (u(this, R, s || /* @__PURE__ */ Object.create(null)), u(this, K, []), t && r) {
      const n = /* @__PURE__ */ Object.create(null);
      n[t] = { handler: r, possibleKeys: [], score: 0 }, u(this, K, [n]);
    }
    u(this, Q, []);
  }
  insert(t, r, s) {
    u(this, fe, ++We(this, fe)._);
    let n = this;
    const i = Pt(r), o = [];
    for (let d = 0, l = i.length; d < l; d++) {
      const c = i[d], h = i[d + 1], f = Ht(c, h), g = Array.isArray(f) ? f[0] : c;
      if (g in a(n, R)) {
        n = a(n, R)[g], f && o.push(f[1]);
        continue;
      }
      a(n, R)[g] = new ue(), f && (a(n, Q).push(f), o.push(f[1])), n = a(n, R)[g];
    }
    return a(n, K).push({ [t]: { handler: s, possibleKeys: o.filter((d, l, c) => c.indexOf(d) === l), score: a(this, fe) } }), n;
  }
  search(t, r) {
    var h;
    const s = [];
    u(this, k, be);
    let i = [this];
    const o = rt(r), d = [], l = o.length;
    let c = null;
    for (let f = 0; f < l; f++) {
      const g = o[f], b = f === l - 1, E = [];
      for (let j = 0, H = i.length; j < H; j++) {
        const m = i[j], z = a(m, R)[g];
        z && (u(z, k, a(m, k)), b ? (a(z, R)["*"] && v(this, $, G).call(this, s, a(z, R)["*"], t, a(m, k)), v(this, $, G).call(this, s, z, t, a(m, k))) : E.push(z));
        for (let pe = 0, Ne = a(m, Q).length; pe < Ne; pe++) {
          const Me = a(m, Q)[pe], L = a(m, k) === be ? {} : { ...a(m, k) };
          if (Me === "*") {
            const te = a(m, R)["*"];
            te && (v(this, $, G).call(this, s, te, t, a(m, k)), u(te, k, L), E.push(te));
            continue;
          }
          const [mt, Ue, ge] = Me;
          if (!g && !(ge instanceof RegExp)) continue;
          const I = a(m, R)[mt];
          if (ge instanceof RegExp) {
            if (c === null) {
              c = new Array(l);
              let re = r[0] === "/" ? 1 : 0;
              for (let xe = 0; xe < l; xe++) c[xe] = re, re += o[xe].length + 1;
            }
            const te = r.substring(c[f]), Te = ge.exec(te);
            if (Te) {
              if (L[Ue] = Te[0], v(this, $, G).call(this, s, I, t, a(m, k), L), er(a(I, R))) {
                u(I, k, L);
                const re = ((h = Te[0].match(/\//)) == null ? void 0 : h.length) ?? 0;
                (d[re] || (d[re] = [])).push(I);
              }
              continue;
            }
          }
          (ge === true || ge.test(g)) && (L[Ue] = g, b ? (v(this, $, G).call(this, s, I, t, L, a(m, k)), a(I, R)["*"] && v(this, $, G).call(this, s, a(I, R)["*"], t, L, a(m, k))) : (u(I, k, L), E.push(I)));
        }
      }
      const D = d.shift();
      i = D ? E.concat(D) : E;
    }
    return s.length > 1 && s.sort((f, g) => f.score - g.score), [s.map(({ handler: f, params: g }) => [f, g])];
  }
}, K = /* @__PURE__ */ new WeakMap(), R = /* @__PURE__ */ new WeakMap(), Q = /* @__PURE__ */ new WeakMap(), fe = /* @__PURE__ */ new WeakMap(), k = /* @__PURE__ */ new WeakMap(), $ = /* @__PURE__ */ new WeakSet(), G = /* @__PURE__ */ __name(function(t, r, s, n, i) {
  for (let o = 0, d = a(r, K).length; o < d; o++) {
    const l = a(r, K)[o], c = l[s] || l[y], h = {};
    if (c !== void 0 && (c.params = /* @__PURE__ */ Object.create(null), t.push(c), n !== be || i && i !== be)) for (let f = 0, g = c.possibleKeys.length; f < g; f++) {
      const b = c.possibleKeys[f], E = h[c.score];
      c.params[b] = i != null && i[b] && !E ? i[b] : n[b] ?? (i == null ? void 0 : i[b]), h[c.score] = true;
    }
  }
}, "G"), ue);
var Z;
var tt;
var rr = (tt = class {
  static {
    __name(this, "tt");
  }
  constructor() {
    p(this, "name", "TrieRouter");
    x(this, Z);
    u(this, Z, new tr());
  }
  add(e, t, r) {
    const s = nt(t);
    if (s) {
      for (let n = 0, i = s.length; n < i; n++) a(this, Z).insert(e, s[n], r);
      return;
    }
    a(this, Z).insert(e, t, r);
  }
  match(e, t) {
    return a(this, Z).search(e, t);
  }
}, Z = /* @__PURE__ */ new WeakMap(), tt);
var vt = class extends Ut {
  static {
    __name(this, "vt");
  }
  constructor(e = {}) {
    super(e), this.router = e.router ?? new Zt({ routers: [new Qt(), new rr()] });
  }
};
var sr = /* @__PURE__ */ __name((e) => {
  const r = { ...{ origin: "*", allowMethods: ["GET", "HEAD", "PUT", "POST", "DELETE", "PATCH"], allowHeaders: [], exposeHeaders: [] }, ...e }, s = ((i) => typeof i == "string" ? i === "*" ? r.credentials ? (o) => o || null : () => i : (o) => i === o ? o : null : typeof i == "function" ? i : (o) => i.includes(o) ? o : null)(r.origin), n = ((i) => typeof i == "function" ? i : Array.isArray(i) ? () => i : () => [])(r.allowMethods);
  return async function(o, d) {
    var h;
    function l(f, g) {
      o.res.headers.set(f, g);
    }
    __name(l, "l");
    const c = await s(o.req.header("origin") || "", o);
    if (c && l("Access-Control-Allow-Origin", c), r.credentials && l("Access-Control-Allow-Credentials", "true"), (h = r.exposeHeaders) != null && h.length && l("Access-Control-Expose-Headers", r.exposeHeaders.join(",")), o.req.method === "OPTIONS") {
      (r.origin !== "*" || r.credentials) && l("Vary", "Origin"), r.maxAge != null && l("Access-Control-Max-Age", r.maxAge.toString());
      const f = await n(o.req.header("origin") || "", o);
      f.length && l("Access-Control-Allow-Methods", f.join(","));
      let g = r.allowHeaders;
      if (!(g != null && g.length)) {
        const b = o.req.header("Access-Control-Request-Headers");
        b && (g = b.split(/\s*,\s*/));
      }
      return g != null && g.length && (l("Access-Control-Allow-Headers", g.join(",")), o.res.headers.append("Vary", "Access-Control-Request-Headers")), o.res.headers.delete("Content-Length"), o.res.headers.delete("Content-Type"), new Response(null, { headers: o.res.headers, status: 204, statusText: "No Content" });
    }
    await d(), (r.origin !== "*" || r.credentials) && o.header("Vary", "Origin", { append: true });
  };
}, "sr");
var Ie = new vt();
Ie.use("/api/*", sr());
Ie.get("/api/sinistros", (e) => e.redirect("/sinistros_data.json"));
Ie.get("/", (e) => e.html(nr));
var nr = `<!DOCTYPE html>
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
      <img src="/addvalora-logo.png" alt="Addvalora" class="h-10 w-auto rounded-lg mr-4"/>
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

<script type="module" src="/app.js"><\/script>
</body>
</html>`;
var Ye = new vt();
var ir = Object.assign({ "/src/index.tsx": Ie });
var bt = false;
for (const [, e] of Object.entries(ir)) e && (Ye.route("/", e), Ye.notFound(e.notFoundHandler), bt = true);
if (!bt) throw new Error("Can't import modules from ['/src/index.tsx','/app/server.ts']");

// ../node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
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

// ../node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
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

// ../.wrangler/tmp/bundle-MMUQii/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = Ye;

// ../node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
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
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// ../.wrangler/tmp/bundle-MMUQii/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
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
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
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
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=bundledWorker-0.8156109303845657.mjs.map
