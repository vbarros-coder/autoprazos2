var kt=Object.defineProperty;var Ue=e=>{throw TypeError(e)};var At=(e,t,r)=>t in e?kt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var u=(e,t,r)=>At(e,typeof t!="symbol"?t+"":t,r),He=(e,t,r)=>t.has(e)||Ue("Cannot "+r);var o=(e,t,r)=>(He(e,t,"read from private field"),r?r.call(e):t.get(e)),x=(e,t,r)=>t.has(e)?Ue("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),p=(e,t,r,s)=>(He(e,t,"write to private field"),s?s.call(e,r):t.set(e,r),r),m=(e,t,r)=>(He(e,t,"access private method"),r);var Ge=(e,t,r,s)=>({set _(a){p(e,t,a,r)},get _(){return o(e,t,s)}});var Ke=(e,t,r)=>(s,a)=>{let i=-1;return n(0);async function n(c){if(c<=i)throw new Error("next() called multiple times");i=c;let l,d=!1,f;if(e[c]?(f=e[c][0][0],s.req.routeIndex=c):f=c===e.length&&a||void 0,f)try{l=await f(s,()=>n(c+1))}catch(h){if(h instanceof Error&&t)s.error=h,l=await t(h,s),d=!0;else throw h}else s.finalized===!1&&r&&(l=await r(s));return l&&(s.finalized===!1||d)&&(s.res=l),s}},Rt=Symbol(),jt=async(e,t=Object.create(null))=>{const{all:r=!1,dot:s=!1}=t,i=(e instanceof ct?e.raw.headers:e.headers).get("Content-Type");return i!=null&&i.startsWith("multipart/form-data")||i!=null&&i.startsWith("application/x-www-form-urlencoded")?Ot(e,{all:r,dot:s}):{}};async function Ot(e,t){const r=await e.formData();return r?St(r,t):{}}function St(e,t){const r=Object.create(null);return e.forEach((s,a)=>{t.all||a.endsWith("[]")?Ct(r,a,s):r[a]=s}),t.dot&&Object.entries(r).forEach(([s,a])=>{s.includes(".")&&(Pt(r,s,a),delete r[s])}),r}var Ct=(e,t,r)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(r):e[t]=[e[t],r]:t.endsWith("[]")?e[t]=[r]:e[t]=r},Pt=(e,t,r)=>{if(/(?:^|\.)__proto__\./.test(t))return;let s=e;const a=t.split(".");a.forEach((i,n)=>{n===a.length-1?s[i]=r:((!s[i]||typeof s[i]!="object"||Array.isArray(s[i])||s[i]instanceof File)&&(s[i]=Object.create(null)),s=s[i])})},st=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},Tt=e=>{const{groups:t,path:r}=Nt(e),s=st(r);return _t(s,t)},Nt=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(r,s)=>{const a=`@${s}`;return t.push([a,r]),a}),{groups:t,path:e}},_t=(e,t)=>{for(let r=t.length-1;r>=0;r--){const[s]=t[r];for(let a=e.length-1;a>=0;a--)if(e[a].includes(s)){e[a]=e[a].replace(s,t[r][1]);break}}return e},Se={},zt=(e,t)=>{if(e==="*")return"*";const r=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(r){const s=`${e}#${t}`;return Se[s]||(r[2]?Se[s]=t&&t[0]!==":"&&t[0]!=="*"?[s,r[1],new RegExp(`^${r[2]}(?=/${t})`)]:[e,r[1],new RegExp(`^${r[2]}$`)]:Se[s]=[e,r[1],!0]),Se[s]}return null},Le=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,r=>{try{return t(r)}catch{return r}})}},at=e=>Le(e,decodeURI),it=e=>{const t=e.url,r=t.indexOf("/",t.indexOf(":")+4);let s=r;for(;s<t.length;s++){const a=t.charCodeAt(s);if(a===37){const i=t.indexOf("?",s),n=t.indexOf("#",s),c=i===-1?n===-1?void 0:n:n===-1?i:Math.min(i,n),l=t.slice(r,c);return at(l.includes("%25")?l.replace(/%25/g,"%2525"):l)}else if(a===63||a===35)break}return t.slice(r,s)},Dt=e=>{const t=it(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},ae=(e,t,...r)=>(r.length&&(t=ae(t,...r)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),nt=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),r=[];let s="";return t.forEach(a=>{if(a!==""&&!/\:/.test(a))s+="/"+a;else if(/\:/.test(a))if(/\?/.test(a)){r.length===0&&s===""?r.push("/"):r.push(s);const i=a.replace("?","");s+="/"+i,r.push(s)}else s+="/"+a}),r.filter((a,i,n)=>n.indexOf(a)===i)},Fe=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Le(e,lt):e):e,ot=(e,t,r)=>{let s;if(!r&&t&&!/[%+]/.test(t)){let n=e.indexOf("?",8);if(n===-1)return;for(e.startsWith(t,n+1)||(n=e.indexOf(`&${t}`,n+1));n!==-1;){const c=e.charCodeAt(n+t.length+1);if(c===61){const l=n+t.length+2,d=e.indexOf("&",l);return Fe(e.slice(l,d===-1?void 0:d))}else if(c==38||isNaN(c))return"";n=e.indexOf(`&${t}`,n+1)}if(s=/[%+]/.test(e),!s)return}const a={};s??(s=/[%+]/.test(e));let i=e.indexOf("?",8);for(;i!==-1;){const n=e.indexOf("&",i+1);let c=e.indexOf("=",i);c>n&&n!==-1&&(c=-1);let l=e.slice(i+1,c===-1?n===-1?void 0:n:c);if(s&&(l=Fe(l)),i=n,l==="")continue;let d;c===-1?d="":(d=e.slice(c+1,n===-1?void 0:n),s&&(d=Fe(d))),r?(a[l]&&Array.isArray(a[l])||(a[l]=[]),a[l].push(d)):a[l]??(a[l]=d)}return t?a[t]:a},It=ot,Ht=(e,t)=>ot(e,t,!0),lt=decodeURIComponent,We=e=>Le(e,lt),oe,S,$,dt,ft,Me,L,Je,ct=(Je=class{constructor(e,t="/",r=[[]]){x(this,$);u(this,"raw");x(this,oe);x(this,S);u(this,"routeIndex",0);u(this,"path");u(this,"bodyCache",{});x(this,L,e=>{const{bodyCache:t,raw:r}=this,s=t[e];if(s)return s;const a=Object.keys(t)[0];return a?t[a].then(i=>(a==="json"&&(i=JSON.stringify(i)),new Response(i)[e]())):t[e]=r[e]()});this.raw=e,this.path=t,p(this,S,r),p(this,oe,{})}param(e){return e?m(this,$,dt).call(this,e):m(this,$,ft).call(this)}query(e){return It(this.url,e)}queries(e){return Ht(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((r,s)=>{t[s]=r}),t}async parseBody(e){return jt(this,e)}json(){return o(this,L).call(this,"text").then(e=>JSON.parse(e))}text(){return o(this,L).call(this,"text")}arrayBuffer(){return o(this,L).call(this,"arrayBuffer")}blob(){return o(this,L).call(this,"blob")}formData(){return o(this,L).call(this,"formData")}addValidatedData(e,t){o(this,oe)[e]=t}valid(e){return o(this,oe)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[Rt](){return o(this,S)}get matchedRoutes(){return o(this,S)[0].map(([[,e]])=>e)}get routePath(){return o(this,S)[0].map(([[,e]])=>e)[this.routeIndex].path}},oe=new WeakMap,S=new WeakMap,$=new WeakSet,dt=function(e){const t=o(this,S)[0][this.routeIndex][1][e],r=m(this,$,Me).call(this,t);return r&&/\%/.test(r)?We(r):r},ft=function(){const e={},t=Object.keys(o(this,S)[0][this.routeIndex][1]);for(const r of t){const s=m(this,$,Me).call(this,o(this,S)[0][this.routeIndex][1][r]);s!==void 0&&(e[r]=/\%/.test(s)?We(s):s)}return e},Me=function(e){return o(this,S)[1]?o(this,S)[1][e]:e},L=new WeakMap,Je),Ft={Stringify:1},ht=async(e,t,r,s,a)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const i=e.callbacks;return i!=null&&i.length?(a?a[0]+=e:a=[e],Promise.all(i.map(c=>c({phase:t,buffer:a,context:s}))).then(c=>Promise.all(c.filter(Boolean).map(l=>ht(l,t,!1,s,a))).then(()=>a[0]))):Promise.resolve(e)},$t="text/plain; charset=UTF-8",$e=(e,t)=>({"Content-Type":e,...t}),me=(e,t)=>new Response(e,t),ye,Ee,D,le,I,j,ke,ce,de,Y,Ae,Re,B,ie,Qe,Mt=(Qe=class{constructor(e,t){x(this,B);x(this,ye);x(this,Ee);u(this,"env",{});x(this,D);u(this,"finalized",!1);u(this,"error");x(this,le);x(this,I);x(this,j);x(this,ke);x(this,ce);x(this,de);x(this,Y);x(this,Ae);x(this,Re);u(this,"render",(...e)=>(o(this,ce)??p(this,ce,t=>this.html(t)),o(this,ce).call(this,...e)));u(this,"setLayout",e=>p(this,ke,e));u(this,"getLayout",()=>o(this,ke));u(this,"setRenderer",e=>{p(this,ce,e)});u(this,"header",(e,t,r)=>{this.finalized&&p(this,j,me(o(this,j).body,o(this,j)));const s=o(this,j)?o(this,j).headers:o(this,Y)??p(this,Y,new Headers);t===void 0?s.delete(e):r!=null&&r.append?s.append(e,t):s.set(e,t)});u(this,"status",e=>{p(this,le,e)});u(this,"set",(e,t)=>{o(this,D)??p(this,D,new Map),o(this,D).set(e,t)});u(this,"get",e=>o(this,D)?o(this,D).get(e):void 0);u(this,"newResponse",(...e)=>m(this,B,ie).call(this,...e));u(this,"body",(e,t,r)=>m(this,B,ie).call(this,e,t,r));u(this,"text",(e,t,r)=>!o(this,Y)&&!o(this,le)&&!t&&!r&&!this.finalized?new Response(e):m(this,B,ie).call(this,e,t,$e($t,r)));u(this,"json",(e,t,r)=>m(this,B,ie).call(this,JSON.stringify(e),t,$e("application/json",r)));u(this,"html",(e,t,r)=>{const s=a=>m(this,B,ie).call(this,a,t,$e("text/html; charset=UTF-8",r));return typeof e=="object"?ht(e,Ft.Stringify,!1,{}).then(s):s(e)});u(this,"redirect",(e,t)=>{const r=String(e);return this.header("Location",/[^\x00-\xFF]/.test(r)?encodeURI(r):r),this.newResponse(null,t??302)});u(this,"notFound",()=>(o(this,de)??p(this,de,()=>me()),o(this,de).call(this,this)));p(this,ye,e),t&&(p(this,I,t.executionCtx),this.env=t.env,p(this,de,t.notFoundHandler),p(this,Re,t.path),p(this,Ae,t.matchResult))}get req(){return o(this,Ee)??p(this,Ee,new ct(o(this,ye),o(this,Re),o(this,Ae))),o(this,Ee)}get event(){if(o(this,I)&&"respondWith"in o(this,I))return o(this,I);throw Error("This context has no FetchEvent")}get executionCtx(){if(o(this,I))return o(this,I);throw Error("This context has no ExecutionContext")}get res(){return o(this,j)||p(this,j,me(null,{headers:o(this,Y)??p(this,Y,new Headers)}))}set res(e){if(o(this,j)&&e){e=me(e.body,e);for(const[t,r]of o(this,j).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const s=o(this,j).headers.getSetCookie();e.headers.delete("set-cookie");for(const a of s)e.headers.append("set-cookie",a)}else e.headers.set(t,r)}p(this,j,e),this.finalized=!0}get var(){return o(this,D)?Object.fromEntries(o(this,D)):{}}},ye=new WeakMap,Ee=new WeakMap,D=new WeakMap,le=new WeakMap,I=new WeakMap,j=new WeakMap,ke=new WeakMap,ce=new WeakMap,de=new WeakMap,Y=new WeakMap,Ae=new WeakMap,Re=new WeakMap,B=new WeakSet,ie=function(e,t,r){const s=o(this,j)?new Headers(o(this,j).headers):o(this,Y)??new Headers;if(typeof t=="object"&&"headers"in t){const i=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[n,c]of i)n.toLowerCase()==="set-cookie"?s.append(n,c):s.set(n,c)}if(r)for(const[i,n]of Object.entries(r))if(typeof n=="string")s.set(i,n);else{s.delete(i);for(const c of n)s.append(i,c)}const a=typeof t=="number"?t:(t==null?void 0:t.status)??o(this,le);return me(e,{status:a,headers:s})},Qe),y="ALL",Lt="all",Bt=["get","post","put","delete","options","patch"],pt="Can not add a route since the matcher is already built.",ut=class extends Error{},qt="__COMPOSED_HANDLER",Ut=e=>e.text("404 Not Found",404),Ve=(e,t)=>{if("getResponse"in e){const r=e.getResponse();return t.newResponse(r.body,r)}return console.error(e),t.text("Internal Server Error",500)},P,E,gt,T,W,Ce,Pe,fe,Gt=(fe=class{constructor(t={}){x(this,E);u(this,"get");u(this,"post");u(this,"put");u(this,"delete");u(this,"options");u(this,"patch");u(this,"all");u(this,"on");u(this,"use");u(this,"router");u(this,"getPath");u(this,"_basePath","/");x(this,P,"/");u(this,"routes",[]);x(this,T,Ut);u(this,"errorHandler",Ve);u(this,"onError",t=>(this.errorHandler=t,this));u(this,"notFound",t=>(p(this,T,t),this));u(this,"fetch",(t,...r)=>m(this,E,Pe).call(this,t,r[1],r[0],t.method));u(this,"request",(t,r,s,a)=>t instanceof Request?this.fetch(r?new Request(t,r):t,s,a):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${ae("/",t)}`,r),s,a)));u(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(m(this,E,Pe).call(this,t.request,t,void 0,t.request.method))})});[...Bt,Lt].forEach(i=>{this[i]=(n,...c)=>(typeof n=="string"?p(this,P,n):m(this,E,W).call(this,i,o(this,P),n),c.forEach(l=>{m(this,E,W).call(this,i,o(this,P),l)}),this)}),this.on=(i,n,...c)=>{for(const l of[n].flat()){p(this,P,l);for(const d of[i].flat())c.map(f=>{m(this,E,W).call(this,d.toUpperCase(),o(this,P),f)})}return this},this.use=(i,...n)=>(typeof i=="string"?p(this,P,i):(p(this,P,"*"),n.unshift(i)),n.forEach(c=>{m(this,E,W).call(this,y,o(this,P),c)}),this);const{strict:s,...a}=t;Object.assign(this,a),this.getPath=s??!0?t.getPath??it:Dt}route(t,r){const s=this.basePath(t);return r.routes.map(a=>{var n;let i;r.errorHandler===Ve?i=a.handler:(i=async(c,l)=>(await Ke([],r.errorHandler)(c,()=>a.handler(c,l))).res,i[qt]=a.handler),m(n=s,E,W).call(n,a.method,a.path,i)}),this}basePath(t){const r=m(this,E,gt).call(this);return r._basePath=ae(this._basePath,t),r}mount(t,r,s){let a,i;s&&(typeof s=="function"?i=s:(i=s.optionHandler,s.replaceRequest===!1?a=l=>l:a=s.replaceRequest));const n=i?l=>{const d=i(l);return Array.isArray(d)?d:[d]}:l=>{let d;try{d=l.executionCtx}catch{}return[l.env,d]};a||(a=(()=>{const l=ae(this._basePath,t),d=l==="/"?0:l.length;return f=>{const h=new URL(f.url);return h.pathname=h.pathname.slice(d)||"/",new Request(h,f)}})());const c=async(l,d)=>{const f=await r(a(l.req.raw),...n(l));if(f)return f;await d()};return m(this,E,W).call(this,y,ae(t,"*"),c),this}},P=new WeakMap,E=new WeakSet,gt=function(){const t=new fe({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,p(t,T,o(this,T)),t.routes=this.routes,t},T=new WeakMap,W=function(t,r,s){t=t.toUpperCase(),r=ae(this._basePath,r);const a={basePath:this._basePath,path:r,method:t,handler:s};this.router.add(t,r,[s,a]),this.routes.push(a)},Ce=function(t,r){if(t instanceof Error)return this.errorHandler(t,r);throw t},Pe=function(t,r,s,a){if(a==="HEAD")return(async()=>new Response(null,await m(this,E,Pe).call(this,t,r,s,"GET")))();const i=this.getPath(t,{env:s}),n=this.router.match(a,i),c=new Mt(t,{path:i,matchResult:n,env:s,executionCtx:r,notFoundHandler:o(this,T)});if(n[0].length===1){let d;try{d=n[0][0][0][0](c,async()=>{c.res=await o(this,T).call(this,c)})}catch(f){return m(this,E,Ce).call(this,f,c)}return d instanceof Promise?d.then(f=>f||(c.finalized?c.res:o(this,T).call(this,c))).catch(f=>m(this,E,Ce).call(this,f,c)):d??o(this,T).call(this,c)}const l=Ke(n[0],this.errorHandler,o(this,T));return(async()=>{try{const d=await l(c);if(!d.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return d.res}catch(d){return m(this,E,Ce).call(this,d,c)}})()},fe),xt=[];function Kt(e,t){const r=this.buildAllMatchers(),s=((a,i)=>{const n=r[a]||r[y],c=n[2][i];if(c)return c;const l=i.match(n[0]);if(!l)return[[],xt];const d=l.indexOf("",1);return[n[1][d],l]});return this.match=s,s(e,t)}var Ne="[^/]+",be=".*",we="(?:|/.*)",ne=Symbol(),Wt=new Set(".\\+*[^]$()");function Vt(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===be||e===we?1:t===be||t===we?-1:e===Ne?1:t===Ne?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var X,J,N,ee,Yt=(ee=class{constructor(){x(this,X);x(this,J);x(this,N,Object.create(null))}insert(t,r,s,a,i){if(t.length===0){if(o(this,X)!==void 0)throw ne;if(i)return;p(this,X,r);return}const[n,...c]=t,l=n==="*"?c.length===0?["","",be]:["","",Ne]:n==="/*"?["","",we]:n.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let d;if(l){const f=l[1];let h=l[2]||Ne;if(f&&l[2]&&(h===".*"||(h=h.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(h))))throw ne;if(d=o(this,N)[h],!d){if(Object.keys(o(this,N)).some(g=>g!==be&&g!==we))throw ne;if(i)return;d=o(this,N)[h]=new ee,f!==""&&p(d,J,a.varIndex++)}!i&&f!==""&&s.push([f,o(d,J)])}else if(d=o(this,N)[n],!d){if(Object.keys(o(this,N)).some(f=>f.length>1&&f!==be&&f!==we))throw ne;if(i)return;d=o(this,N)[n]=new ee}d.insert(c,r,s,a,i)}buildRegExpStr(){const r=Object.keys(o(this,N)).sort(Vt).map(s=>{const a=o(this,N)[s];return(typeof o(a,J)=="number"?`(${s})@${o(a,J)}`:Wt.has(s)?`\\${s}`:s)+a.buildRegExpStr()});return typeof o(this,X)=="number"&&r.unshift(`#${o(this,X)}`),r.length===0?"":r.length===1?r[0]:"(?:"+r.join("|")+")"}},X=new WeakMap,J=new WeakMap,N=new WeakMap,ee),_e,je,Ze,Xt=(Ze=class{constructor(){x(this,_e,{varIndex:0});x(this,je,new Yt)}insert(e,t,r){const s=[],a=[];for(let n=0;;){let c=!1;if(e=e.replace(/\{[^}]+\}/g,l=>{const d=`@\\${n}`;return a[n]=[d,l],n++,c=!0,d}),!c)break}const i=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let n=a.length-1;n>=0;n--){const[c]=a[n];for(let l=i.length-1;l>=0;l--)if(i[l].indexOf(c)!==-1){i[l]=i[l].replace(c,a[n][1]);break}}return o(this,je).insert(i,t,s,o(this,_e),r),s}buildRegExp(){let e=o(this,je).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const r=[],s=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(a,i,n)=>i!==void 0?(r[++t]=Number(i),"$()"):(n!==void 0&&(s[Number(n)]=++t),"")),[new RegExp(`^${e}`),r,s]}},_e=new WeakMap,je=new WeakMap,Ze),Jt=[/^$/,[],Object.create(null)],Te=Object.create(null);function mt(e){return Te[e]??(Te[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,r)=>r?`\\${r}`:"(?:|/.*)")}$`))}function Qt(){Te=Object.create(null)}function Zt(e){var d;const t=new Xt,r=[];if(e.length===0)return Jt;const s=e.map(f=>[!/\*|\/:/.test(f[0]),...f]).sort(([f,h],[g,v])=>f?1:g?-1:h.length-v.length),a=Object.create(null);for(let f=0,h=-1,g=s.length;f<g;f++){const[v,b,C]=s[f];v?a[b]=[C.map(([O])=>[O,Object.create(null)]),xt]:h++;let k;try{k=t.insert(b,h,v)}catch(O){throw O===ne?new ut(b):O}v||(r[h]=C.map(([O,w])=>{const _=Object.create(null);for(w-=1;w>=0;w--){const[ue,De]=k[w];_[ue]=De}return[O,_]}))}const[i,n,c]=t.buildRegExp();for(let f=0,h=r.length;f<h;f++)for(let g=0,v=r[f].length;g<v;g++){const b=(d=r[f][g])==null?void 0:d[1];if(!b)continue;const C=Object.keys(b);for(let k=0,O=C.length;k<O;k++)b[C[k]]=c[b[C[k]]]}const l=[];for(const f in n)l[f]=r[n[f]];return[i,l,a]}function se(e,t){if(e){for(const r of Object.keys(e).sort((s,a)=>a.length-s.length))if(mt(r).test(t))return[...e[r]]}}var q,U,ze,vt,et,er=(et=class{constructor(){x(this,ze);u(this,"name","RegExpRouter");x(this,q);x(this,U);u(this,"match",Kt);p(this,q,{[y]:Object.create(null)}),p(this,U,{[y]:Object.create(null)})}add(e,t,r){var c;const s=o(this,q),a=o(this,U);if(!s||!a)throw new Error(pt);s[e]||[s,a].forEach(l=>{l[e]=Object.create(null),Object.keys(l[y]).forEach(d=>{l[e][d]=[...l[y][d]]})}),t==="/*"&&(t="*");const i=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const l=mt(t);e===y?Object.keys(s).forEach(d=>{var f;(f=s[d])[t]||(f[t]=se(s[d],t)||se(s[y],t)||[])}):(c=s[e])[t]||(c[t]=se(s[e],t)||se(s[y],t)||[]),Object.keys(s).forEach(d=>{(e===y||e===d)&&Object.keys(s[d]).forEach(f=>{l.test(f)&&s[d][f].push([r,i])})}),Object.keys(a).forEach(d=>{(e===y||e===d)&&Object.keys(a[d]).forEach(f=>l.test(f)&&a[d][f].push([r,i]))});return}const n=nt(t)||[t];for(let l=0,d=n.length;l<d;l++){const f=n[l];Object.keys(a).forEach(h=>{var g;(e===y||e===h)&&((g=a[h])[f]||(g[f]=[...se(s[h],f)||se(s[y],f)||[]]),a[h][f].push([r,i-d+l+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(o(this,U)).concat(Object.keys(o(this,q))).forEach(t=>{e[t]||(e[t]=m(this,ze,vt).call(this,t))}),p(this,q,p(this,U,void 0)),Qt(),e}},q=new WeakMap,U=new WeakMap,ze=new WeakSet,vt=function(e){const t=[];let r=e===y;return[o(this,q),o(this,U)].forEach(s=>{const a=s[e]?Object.keys(s[e]).map(i=>[i,s[e][i]]):[];a.length!==0?(r||(r=!0),t.push(...a)):e!==y&&t.push(...Object.keys(s[y]).map(i=>[i,s[y][i]]))}),r?Zt(t):null},et),G,H,tt,tr=(tt=class{constructor(e){u(this,"name","SmartRouter");x(this,G,[]);x(this,H,[]);p(this,G,e.routers)}add(e,t,r){if(!o(this,H))throw new Error(pt);o(this,H).push([e,t,r])}match(e,t){if(!o(this,H))throw new Error("Fatal error");const r=o(this,G),s=o(this,H),a=r.length;let i=0,n;for(;i<a;i++){const c=r[i];try{for(let l=0,d=s.length;l<d;l++)c.add(...s[l]);n=c.match(e,t)}catch(l){if(l instanceof ut)continue;throw l}this.match=c.match.bind(c),p(this,G,[c]),p(this,H,void 0);break}if(i===a)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,n}get activeRouter(){if(o(this,H)||o(this,G).length!==1)throw new Error("No active router has been determined yet.");return o(this,G)[0]}},G=new WeakMap,H=new WeakMap,tt),ve=Object.create(null),rr=e=>{for(const t in e)return!0;return!1},K,R,Q,he,A,F,V,pe,sr=(pe=class{constructor(t,r,s){x(this,F);x(this,K);x(this,R);x(this,Q);x(this,he,0);x(this,A,ve);if(p(this,R,s||Object.create(null)),p(this,K,[]),t&&r){const a=Object.create(null);a[t]={handler:r,possibleKeys:[],score:0},p(this,K,[a])}p(this,Q,[])}insert(t,r,s){p(this,he,++Ge(this,he)._);let a=this;const i=Tt(r),n=[];for(let c=0,l=i.length;c<l;c++){const d=i[c],f=i[c+1],h=zt(d,f),g=Array.isArray(h)?h[0]:d;if(g in o(a,R)){a=o(a,R)[g],h&&n.push(h[1]);continue}o(a,R)[g]=new pe,h&&(o(a,Q).push(h),n.push(h[1])),a=o(a,R)[g]}return o(a,K).push({[t]:{handler:s,possibleKeys:n.filter((c,l,d)=>d.indexOf(c)===l),score:o(this,he)}}),a}search(t,r){var f;const s=[];p(this,A,ve);let i=[this];const n=st(r),c=[],l=n.length;let d=null;for(let h=0;h<l;h++){const g=n[h],v=h===l-1,b=[];for(let k=0,O=i.length;k<O;k++){const w=i[k],_=o(w,R)[g];_&&(p(_,A,o(w,A)),v?(o(_,R)["*"]&&m(this,F,V).call(this,s,o(_,R)["*"],t,o(w,A)),m(this,F,V).call(this,s,_,t,o(w,A))):b.push(_));for(let ue=0,De=o(w,Q).length;ue<De;ue++){const Be=o(w,Q)[ue],M=o(w,A)===ve?{}:{...o(w,A)};if(Be==="*"){const te=o(w,R)["*"];te&&(m(this,F,V).call(this,s,te,t,o(w,A)),p(te,A,M),b.push(te));continue}const[Et,qe,ge]=Be;if(!g&&!(ge instanceof RegExp))continue;const z=o(w,R)[Et];if(ge instanceof RegExp){if(d===null){d=new Array(l);let re=r[0]==="/"?1:0;for(let xe=0;xe<l;xe++)d[xe]=re,re+=n[xe].length+1}const te=r.substring(d[h]),Ie=ge.exec(te);if(Ie){if(M[qe]=Ie[0],m(this,F,V).call(this,s,z,t,o(w,A),M),rr(o(z,R))){p(z,A,M);const re=((f=Ie[0].match(/\//))==null?void 0:f.length)??0;(c[re]||(c[re]=[])).push(z)}continue}}(ge===!0||ge.test(g))&&(M[qe]=g,v?(m(this,F,V).call(this,s,z,t,M,o(w,A)),o(z,R)["*"]&&m(this,F,V).call(this,s,o(z,R)["*"],t,M,o(w,A))):(p(z,A,M),b.push(z)))}}const C=c.shift();i=C?b.concat(C):b}return s.length>1&&s.sort((h,g)=>h.score-g.score),[s.map(({handler:h,params:g})=>[h,g])]}},K=new WeakMap,R=new WeakMap,Q=new WeakMap,he=new WeakMap,A=new WeakMap,F=new WeakSet,V=function(t,r,s,a,i){for(let n=0,c=o(r,K).length;n<c;n++){const l=o(r,K)[n],d=l[s]||l[y],f={};if(d!==void 0&&(d.params=Object.create(null),t.push(d),a!==ve||i&&i!==ve))for(let h=0,g=d.possibleKeys.length;h<g;h++){const v=d.possibleKeys[h],b=f[d.score];d.params[v]=i!=null&&i[v]&&!b?i[v]:a[v]??(i==null?void 0:i[v]),f[d.score]=!0}}},pe),Z,rt,ar=(rt=class{constructor(){u(this,"name","TrieRouter");x(this,Z);p(this,Z,new sr)}add(e,t,r){const s=nt(t);if(s){for(let a=0,i=s.length;a<i;a++)o(this,Z).insert(e,s[a],r);return}o(this,Z).insert(e,t,r)}match(e,t){return o(this,Z).search(e,t)}},Z=new WeakMap,rt),bt=class extends Gt{constructor(e={}){super(e),this.router=e.router??new tr({routers:[new er,new ar]})}},ir=/^\s*(?:text\/(?!event-stream(?:[;\s]|$))[^;\s]+|application\/(?:javascript|json|xml|xml-dtd|ecmascript|dart|postscript|rtf|tar|toml|vnd\.dart|vnd\.ms-fontobject|vnd\.ms-opentype|wasm|x-httpd-php|x-javascript|x-ns-proxy-autoconfig|x-sh|x-tar|x-virtualbox-hdd|x-virtualbox-ova|x-virtualbox-ovf|x-virtualbox-vbox|x-virtualbox-vdi|x-virtualbox-vhd|x-virtualbox-vmdk|x-www-form-urlencoded)|font\/(?:otf|ttf)|image\/(?:bmp|vnd\.adobe\.photoshop|vnd\.microsoft\.icon|vnd\.ms-dds|x-icon|x-ms-bmp)|message\/rfc822|model\/gltf-binary|x-shader\/x-fragment|x-shader\/x-vertex|[^;\s]+?\+(?:json|text|xml|yaml))(?:[;\s]|$)/i,Ye=(e,t=or)=>{const r=/\.([a-zA-Z0-9]+?)$/,s=e.match(r);if(!s)return;let a=t[s[1].toLowerCase()];return a&&a.startsWith("text")&&(a+="; charset=utf-8"),a},nr={aac:"audio/aac",avi:"video/x-msvideo",avif:"image/avif",av1:"video/av1",bin:"application/octet-stream",bmp:"image/bmp",css:"text/css",csv:"text/csv",eot:"application/vnd.ms-fontobject",epub:"application/epub+zip",gif:"image/gif",gz:"application/gzip",htm:"text/html",html:"text/html",ico:"image/x-icon",ics:"text/calendar",jpeg:"image/jpeg",jpg:"image/jpeg",js:"text/javascript",json:"application/json",jsonld:"application/ld+json",map:"application/json",mid:"audio/x-midi",midi:"audio/x-midi",mjs:"text/javascript",mp3:"audio/mpeg",mp4:"video/mp4",mpeg:"video/mpeg",oga:"audio/ogg",ogv:"video/ogg",ogx:"application/ogg",opus:"audio/opus",otf:"font/otf",pdf:"application/pdf",png:"image/png",rtf:"application/rtf",svg:"image/svg+xml",tif:"image/tiff",tiff:"image/tiff",ts:"video/mp2t",ttf:"font/ttf",txt:"text/plain",wasm:"application/wasm",webm:"video/webm",weba:"audio/webm",webmanifest:"application/manifest+json",webp:"image/webp",woff:"font/woff",woff2:"font/woff2",xhtml:"application/xhtml+xml",xml:"application/xml",zip:"application/zip","3gp":"video/3gpp","3g2":"video/3gpp2",gltf:"model/gltf+json",glb:"model/gltf-binary"},or=nr,lr=(...e)=>{let t=e.filter(a=>a!=="").join("/");t=t.replace(new RegExp("(?<=\\/)\\/+","g"),"");const r=t.split("/"),s=[];for(const a of r)a===".."&&s.length>0&&s.at(-1)!==".."?s.pop():a!=="."&&s.push(a);return s.join("/")||"."},wt={br:".br",zstd:".zst",gzip:".gz"},cr=Object.keys(wt),dr="index.html",fr=e=>{const t=e.root??"./",r=e.path,s=e.join??lr;return async(a,i)=>{var f,h,g,v;if(a.finalized)return i();let n;if(e.path)n=e.path;else try{if(n=at(a.req.path),/(?:^|[\/\\])\.\.(?:$|[\/\\])/.test(n))throw new Error}catch{return await((f=e.onNotFound)==null?void 0:f.call(e,a.req.path,a)),i()}let c=s(t,!r&&e.rewriteRequestPath?e.rewriteRequestPath(n):n);e.isDir&&await e.isDir(c)&&(c=s(c,dr));const l=e.getContent;let d=await l(c,a);if(d instanceof Response)return a.newResponse(d.body,d);if(d){const b=e.mimes&&Ye(c,e.mimes)||Ye(c);if(a.header("Content-Type",b||"application/octet-stream"),e.precompressed&&(!b||ir.test(b))){const C=new Set((h=a.req.header("Accept-Encoding"))==null?void 0:h.split(",").map(k=>k.trim()));for(const k of cr){if(!C.has(k))continue;const O=await l(c+wt[k],a);if(O){d=O,a.header("Content-Encoding",k),a.header("Vary","Accept-Encoding",{append:!0});break}}}return await((g=e.onFound)==null?void 0:g.call(e,c,a)),a.body(d)}await((v=e.onNotFound)==null?void 0:v.call(e,c,a)),await i()}},hr=async(e,t)=>{let r;t&&t.manifest?typeof t.manifest=="string"?r=JSON.parse(t.manifest):r=t.manifest:typeof __STATIC_CONTENT_MANIFEST=="string"?r=JSON.parse(__STATIC_CONTENT_MANIFEST):r=__STATIC_CONTENT_MANIFEST;let s;t&&t.namespace?s=t.namespace:s=__STATIC_CONTENT;const a=r[e];if(!a)return null;const i=await s.get(a,{type:"stream"});return i||null},pr=e=>async function(r,s){return fr({...e,getContent:async i=>hr(i,{manifest:e.manifest,namespace:e.namespace?e.namespace:r.env?r.env.__STATIC_CONTENT:void 0})})(r,s)},ur=e=>pr(e),gr=e=>{const r={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},s=(i=>typeof i=="string"?i==="*"?r.credentials?n=>n||null:()=>i:n=>i===n?n:null:typeof i=="function"?i:n=>i.includes(n)?n:null)(r.origin),a=(i=>typeof i=="function"?i:Array.isArray(i)?()=>i:()=>[])(r.allowMethods);return async function(n,c){var f;function l(h,g){n.res.headers.set(h,g)}const d=await s(n.req.header("origin")||"",n);if(d&&l("Access-Control-Allow-Origin",d),r.credentials&&l("Access-Control-Allow-Credentials","true"),(f=r.exposeHeaders)!=null&&f.length&&l("Access-Control-Expose-Headers",r.exposeHeaders.join(",")),n.req.method==="OPTIONS"){(r.origin!=="*"||r.credentials)&&l("Vary","Origin"),r.maxAge!=null&&l("Access-Control-Max-Age",r.maxAge.toString());const h=await a(n.req.header("origin")||"",n);h.length&&l("Access-Control-Allow-Methods",h.join(","));let g=r.allowHeaders;if(!(g!=null&&g.length)){const v=n.req.header("Access-Control-Request-Headers");v&&(g=v.split(/\s*,\s*/))}return g!=null&&g.length&&(l("Access-Control-Allow-Headers",g.join(",")),n.res.headers.append("Vary","Access-Control-Request-Headers")),n.res.headers.delete("Content-Length"),n.res.headers.delete("Content-Type"),new Response(null,{headers:n.res.headers,status:204,statusText:"No Content"})}await c(),(r.origin!=="*"||r.credentials)&&n.header("Vary","Origin",{append:!0})}};const Oe=new bt;Oe.use("/api/*",gr());Oe.use("/static/*",ur({root:"./public"}));Oe.get("/api/sinistros",e=>e.redirect("/static/sinistros_data.json"));Oe.get("/",e=>e.html(xr));const xr=`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>NIE — Controle de Prazos Regulatórios | Addvalora Brasil</title>
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
    thead th.mgmt { background: #166534; } /* Verde para colunas de gestão */
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
        <h1>NIE — Controle de Prazos Regulatórios</h1>
        <p>Dashboard de Monitoramento · Addvalora Brasil</p>
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
      <p>O sistema detecta automaticamente o formato e calcula os prazos regulatórios.</p>
    </div>
    <div class="upload-status" id="data-tag">
      <i class="fas fa-info-circle"></i> Aguardando importação...
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

  <!-- TABS -->
  <div class="flex border-b border-gray-200 mb-4 gap-6">
    <button id="tab-geral" class="pb-2 px-4 border-b-2 border-blue-900 font-bold text-blue-900 text-sm" onclick="setTab('geral')">
      <i class="fas fa-th-list mr-2"></i>Geral
    </button>
    <button id="tab-faturamento" class="pb-2 px-4 border-b-2 border-transparent text-gray-500 hover:text-blue-900 font-bold text-sm" onclick="setTab('faturamento')">
      <i class="fas fa-file-invoice-dollar mr-2"></i>Faturamento
    </button>
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
        <button class="btn-export" onclick="exportXLSX()">
          <i class="fas fa-file-excel"></i> Exportar Planilha
        </button>
        <button onclick="clearStorage()" title="Apagar todos os dados salvos" style="background:#fee2e2;color:#b91c1c;border:none;border-radius:8px;padding:7px 14px;font-size:0.8rem;font-weight:600;cursor:pointer;display:flex;align-items:center;gap:6px;">
          <i class="fas fa-trash"></i> Limpar Dados
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
            <th>Situação</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody id="tbl-body"></tbody>
      </table>
    </div>
    <div class="pagination flex justify-between items-center p-4 border-t" id="pg"></div>
  </div>

</main>

<footer class="footer">
  Addvalora Brasil · NIE – Núcleo de Inteligência Estratégica · Dashboard v2.0
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
</html>`,Xe=new bt,mr=Object.assign({"/src/index.tsx":Oe});let yt=!1;for(const[,e]of Object.entries(mr))e&&(Xe.route("/",e),Xe.notFound(e.notFoundHandler),yt=!0);if(!yt)throw new Error("Can't import modules from ['/src/index.tsx','/app/server.ts']");export{Xe as default};
