function m(){}function R(t,n){for(const e in n)t[e]=n[e];return t}function L(t){return t()}function C(){return Object.create(null)}function y(t){t.forEach(L)}function S(t){return typeof t=="function"}function ut(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let x;function lt(t,n){return x||(x=document.createElement("a")),x.href=n,t===x.href}function W(t){return Object.keys(t).length===0}function G(t,...n){if(t==null)return m;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ft(t,n,e){t.$$.on_destroy.push(G(n,e))}function at(t,n,e,i){if(t){const r=q(t,n,e,i);return t[0](r)}}function q(t,n,e,i){return t[1]&&i?R(e.ctx.slice(),t[1](i(n))):e.ctx}function dt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],c=Math.max(n.dirty.length,r.length);for(let s=0;s<c;s+=1)l[s]=n.dirty[s]|r[s];return l}return n.dirty|r}return n.dirty}function _t(t,n,e,i,r,l){if(r){const c=q(n,e,i,l);t.p(c,r)}}function ht(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function mt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function pt(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}function yt(t){return t&&S(t.destroy)?t.destroy:m}let E=!1;function I(){E=!0}function J(){E=!1}function K(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let u=0;u<n.length;u++){const a=n[u];a.claim_order!==void 0&&o.push(a)}n=o}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let o=0;o<n.length;o++){const u=n[o].claim_order,a=(r>0&&n[e[r]].claim_order<=u?r+1:K(1,r,g=>n[e[g]].claim_order,u))-1;i[o]=e[a]+1;const f=a+1;e[f]=o,r=Math.max(f,r)}const l=[],c=[];let s=n.length-1;for(let o=e[r]+1;o!=0;o=i[o-1]){for(l.push(n[o-1]);s>=o;s--)c.push(n[s]);s--}for(;s>=0;s--)c.push(n[s]);l.reverse(),c.sort((o,u)=>o.claim_order-u.claim_order);for(let o=0,u=0;o<c.length;o++){for(;u<l.length&&c[o].claim_order>=l[u].claim_order;)u++;const a=u<l.length?l[u]:null;t.insertBefore(c[o],a)}}function U(t,n){if(E){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function gt(t,n,e){E&&!e?U(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function xt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function T(t){return document.createTextNode(t)}function bt(){return T(" ")}function $t(){return T("")}function wt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function Z(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Et(t,n){for(const e in n)Z(t,e,n[e])}function tt(t){return Array.from(t.childNodes)}function nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function B(t,n,e,i,r=!1){nt(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(n(s)){const o=e(s);return o===void 0?t.splice(c,1):t[c]=o,r||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(n(s)){const o=e(s);return o===void 0?t.splice(c,1):t[c]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function H(t,n,e,i){return B(t,r=>r.nodeName===n,r=>{const l=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];e[s.name]||l.push(s.name)}l.forEach(c=>r.removeAttribute(c))},()=>i(n))}function vt(t,n,e){return H(t,n,e,X)}function Nt(t,n,e){return H(t,n,e,Y)}function et(t,n){return B(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>T(n),!0)}function At(t){return et(t," ")}function St(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function Tt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function kt(t,n,e){t.classList[e?"add":"remove"](n)}function jt(t,n){const e=[];let i=0;for(const r of n.childNodes)if(r.nodeType===8){const l=r.textContent.trim();l===`HEAD_${t}_END`?(i-=1,e.push(r)):l===`HEAD_${t}_START`&&(i+=1,e.push(r))}else i>0&&e.push(r);return e}function Ct(t,n){return new t(n)}let p;function h(t){p=t}function O(){if(!p)throw new Error("Function called outside component initialization");return p}function Mt(t){O().$$.on_mount.push(t)}function Dt(t){O().$$.after_update.push(t)}const _=[],M=[],$=[],D=[],P=Promise.resolve();let N=!1;function z(){N||(N=!0,P.then(F))}function Lt(){return z(),P}function A(t){$.push(t)}const v=new Set;let b=0;function F(){const t=p;do{for(;b<_.length;){const n=_[b];b++,h(n),it(n.$$)}for(h(null),_.length=0,b=0;M.length;)M.pop()();for(let n=0;n<$.length;n+=1){const e=$[n];v.has(e)||(v.add(e),e())}$.length=0}while(_.length);for(;D.length;)D.pop()();N=!1,v.clear(),h(t)}function it(t){if(t.fragment!==null){t.update(),y(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const w=new Set;let d;function qt(){d={r:0,c:[],p:d}}function Bt(){d.r||y(d.c),d=d.p}function rt(t,n){t&&t.i&&(w.delete(t),t.i(n))}function Ht(t,n,e,i){if(t&&t.o){if(w.has(t))return;w.add(t),d.c.push(()=>{w.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}const Ot=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Pt(t,n){const e={},i={},r={$$scope:1};let l=t.length;for(;l--;){const c=t[l],s=n[l];if(s){for(const o in c)o in s||(i[o]=1);for(const o in s)r[o]||(e[o]=s[o],r[o]=1);t[l]=s}else for(const o in c)r[o]=1}for(const c in i)c in e||(e[c]=void 0);return e}function zt(t){t&&t.c()}function Ft(t,n){t&&t.l(n)}function ot(t,n,e,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(n,e),i||A(()=>{const c=t.$$.on_mount.map(L).filter(S);t.$$.on_destroy?t.$$.on_destroy.push(...c):y(c),t.$$.on_mount=[]}),l.forEach(A)}function ct(t,n){const e=t.$$;e.fragment!==null&&(y(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function st(t,n){t.$$.dirty[0]===-1&&(_.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Rt(t,n,e,i,r,l,c,s=[-1]){const o=p;h(t);const u=t.$$={fragment:null,ctx:[],props:l,update:m,not_equal:r,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(o?o.$$.context:[])),callbacks:C(),dirty:s,skip_bound:!1,root:n.target||o.$$.root};c&&c(u.root);let a=!1;if(u.ctx=e?e(t,n.props||{},(f,g,...k)=>{const j=k.length?k[0]:g;return u.ctx&&r(u.ctx[f],u.ctx[f]=j)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](j),a&&st(t,f)),g}):[],u.update(),a=!0,y(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){I();const f=tt(n.target);u.fragment&&u.fragment.l(f),f.forEach(V)}else u.fragment&&u.fragment.c();n.intro&&rt(t.$$.fragment),ot(t,n.target,n.anchor,n.customElement),J(),F()}h(o)}class Wt{$destroy(){ct(this,1),this.$destroy=m}$on(n,e){if(!S(e))return m;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!W(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Lt as A,m as B,A as C,at as D,lt as E,U as F,wt as G,_t as H,ht as I,dt as J,xt as K,Ot as L,ft as M,Y as N,Nt as O,kt as P,yt as Q,y as R,Wt as S,R as T,Et as U,Pt as V,pt as W,mt as X,jt as Y,bt as a,gt as b,At as c,Bt as d,$t as e,rt as f,qt as g,V as h,Rt as i,Dt as j,X as k,vt as l,tt as m,Z as n,Mt as o,Tt as p,T as q,et as r,ut as s,Ht as t,St as u,Ct as v,zt as w,Ft as x,ot as y,ct as z};
