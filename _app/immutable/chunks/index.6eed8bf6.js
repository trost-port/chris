function g(){}function Q(t,e){for(const n in e)t[n]=e[n];return t}function q(t){return t()}function k(){return Object.create(null)}function b(t){t.forEach(q)}function O(t){return typeof t=="function"}function _t(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let $;function dt(t,e){return $||($=document.createElement("a")),$.href=e,t===$.href}function R(t){return Object.keys(t).length===0}function W(t,...e){if(t==null)return g;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ht(t,e,n){t.$$.on_destroy.push(W(e,n))}function mt(t,e,n,i){if(t){const r=P(t,e,n,i);return t[0](r)}}function P(t,e,n,i){return t[1]&&i?Q(n.ctx.slice(),t[1](i(e))):n.ctx}function pt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],c=Math.max(e.dirty.length,r.length);for(let u=0;u<c;u+=1)l[u]=e.dirty[u]|r[u];return l}return e.dirty|r}return e.dirty}function yt(t,e,n,i,r,l){if(r){const c=P(e,n,i,l);t.p(c,r)}}function gt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const z=typeof window<"u";let xt=z?()=>window.performance.now():()=>Date.now(),B=z?t=>requestAnimationFrame(t):g;const m=new Set;function H(t){m.forEach(e=>{e.c(t)||(m.delete(e),e.f())}),m.size!==0&&B(H)}function bt(t){let e;return m.size===0&&B(H),{promise:new Promise(n=>{m.add(e={c:t,f:n})}),abort(){m.delete(e)}}}let v=!1;function U(){v=!0}function V(){v=!1}function X(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function Y(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let s=0;s<e.length;s++){const a=e[s];a.claim_order!==void 0&&o.push(a)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const s=e[o].claim_order,a=(r>0&&e[n[r]].claim_order<=s?r+1:X(1,r,w=>e[n[w]].claim_order,s))-1;i[o]=n[a]+1;const f=a+1;n[f]=o,r=Math.max(f,r)}const l=[],c=[];let u=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(l.push(e[o-1]);u>=o;u--)c.push(e[u]);u--}for(;u>=0;u--)c.push(e[u]);l.reverse(),c.sort((o,s)=>o.claim_order-s.claim_order);for(let o=0,s=0;o<c.length;o++){for(;s<l.length&&c[o].claim_order>=l[s].claim_order;)s++;const a=s<l.length?l[s]:null;t.insertBefore(c[o],a)}}function Z(t,e){if(v){for(Y(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function wt(t,e,n){v&&!n?Z(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function tt(t){t.parentNode&&t.parentNode.removeChild(t)}function et(t){return document.createElement(t)}function nt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function j(t){return document.createTextNode(t)}function $t(){return j(" ")}function Et(){return j("")}function vt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Nt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function it(t){return Array.from(t.childNodes)}function rt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function L(t,e,n,i,r=!1){rt(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const u=t[c];if(e(u)){const o=n(u);return o===void 0?t.splice(c,1):t[c]=o,r||(t.claim_info.last_index=c),u}}for(let c=t.claim_info.last_index-1;c>=0;c--){const u=t[c];if(e(u)){const o=n(u);return o===void 0?t.splice(c,1):t[c]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,u}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function F(t,e,n,i){return L(t,r=>r.nodeName===e,r=>{const l=[];for(let c=0;c<r.attributes.length;c++){const u=r.attributes[c];n[u.name]||l.push(u.name)}l.forEach(c=>r.removeAttribute(c))},()=>i(e))}function At(t,e,n){return F(t,e,n,et)}function St(t,e,n){return F(t,e,n,nt)}function ct(t,e){return L(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>j(e),!0)}function jt(t){return ct(t," ")}function Ct(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Tt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function kt(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const l=r.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(r)):l===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Dt(t,e){return new t(e)}let x;function y(t){x=t}function G(){if(!x)throw new Error("Function called outside component initialization");return x}function Mt(t){G().$$.on_mount.push(t)}function qt(t){G().$$.after_update.push(t)}const h=[],D=[];let p=[];const M=[],I=Promise.resolve();let A=!1;function J(){A||(A=!0,I.then(K))}function Ot(){return J(),I}function S(t){p.push(t)}const N=new Set;let d=0;function K(){if(d!==0)return;const t=x;do{try{for(;d<h.length;){const e=h[d];d++,y(e),ot(e.$$)}}catch(e){throw h.length=0,d=0,e}for(y(null),h.length=0,d=0;D.length;)D.pop()();for(let e=0;e<p.length;e+=1){const n=p[e];N.has(n)||(N.add(n),n())}p.length=0}while(h.length);for(;M.length;)M.pop()();A=!1,N.clear(),y(t)}function ot(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}function st(t){const e=[],n=[];p.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),p=e}const E=new Set;let _;function Pt(){_={r:0,c:[],p:_}}function zt(){_.r||b(_.c),_=_.p}function ut(t,e){t&&t.i&&(E.delete(t),t.i(e))}function Bt(t,e,n,i){if(t&&t.o){if(E.has(t))return;E.add(t),_.c.push(()=>{E.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Ht(t){t&&t.c()}function Lt(t,e){t&&t.l(e)}function lt(t,e,n,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),i||S(()=>{const c=t.$$.on_mount.map(q).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...c):b(c),t.$$.on_mount=[]}),l.forEach(S)}function ft(t,e){const n=t.$$;n.fragment!==null&&(st(n.after_update),b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function at(t,e){t.$$.dirty[0]===-1&&(h.push(t),J(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ft(t,e,n,i,r,l,c,u=[-1]){const o=x;y(t);const s=t.$$={fragment:null,ctx:[],props:l,update:g,not_equal:r,bound:k(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:k(),dirty:u,skip_bound:!1,root:e.target||o.$$.root};c&&c(s.root);let a=!1;if(s.ctx=n?n(t,e.props||{},(f,w,...C)=>{const T=C.length?C[0]:w;return s.ctx&&r(s.ctx[f],s.ctx[f]=T)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](T),a&&at(t,f)),w}):[],s.update(),a=!0,b(s.before_update),s.fragment=i?i(s.ctx):!1,e.target){if(e.hydrate){U();const f=it(e.target);s.fragment&&s.fragment.l(f),f.forEach(tt)}else s.fragment&&s.fragment.c();e.intro&&ut(t.$$.fragment),lt(t,e.target,e.anchor,e.customElement),V(),K()}y(o)}class Gt{$destroy(){ft(this,1),this.$destroy=g}$on(e,n){if(!O(n))return g;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!R(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{lt as A,ft as B,nt as C,St as D,dt as E,Z as F,g as G,ht as H,mt as I,yt as J,gt as K,pt as L,xt as M,bt as N,vt as O,b as P,kt as Q,Gt as S,$t as a,wt as b,jt as c,Bt as d,Et as e,zt as f,ut as g,tt as h,Ft as i,qt as j,et as k,At as l,it as m,Nt as n,Mt as o,Tt as p,j as q,ct as r,_t as s,Ot as t,Ct as u,Pt as v,D as w,Dt as x,Ht as y,Lt as z};