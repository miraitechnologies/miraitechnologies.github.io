import{S as Z,i as ee,s as te,C as le,D as se,k as _,a as A,l as p,m as w,h as u,c as C,n as r,E as X,b as S,F as i,G as W,H as ae,I as oe,J as re,f as ie,t as ce,K as ne,L as ue,q as fe,r as he,B as de}from"../../chunks/index-9ea653f6.js";const{window:U}=ue;function Y(s,l,a){const n=s.slice();return n[5]=l[a],n}function Q(s){let l,a,n=s[5].text+"",f,c,m,E;return{c(){l=_("li"),a=_("a"),f=fe(n),c=A(),this.h()},l(g){l=p(g,"LI",{});var v=w(l);a=p(v,"A",{class:!0,href:!0});var b=w(a);f=he(b,n),b.forEach(u),c=C(v),v.forEach(u),this.h()},h(){r(a,"class","block uppercase font-bold opacity-60 hover:opacity-100 transition-opacity duration-300"),r(a,"href","#"+s[5].anchor)},m(g,v){S(g,l,v),i(l,a),i(a,f),i(l,c),m||(E=W(a,"click",pe),m=!0)},p:de,d(g){g&&u(l),m=!1,E()}}}function _e(s){let l=!1,a=()=>{l=!1},n,f,c,m,E,g,v,b,V,y,I,j,H,k,F,B,x,T,q,D,M,J;le(s[4]);let L=s[1],o=[];for(let e=0;e<L.length;e+=1)o[e]=Q(Y(s,L,e));const O=s[3].default,h=se(O,s,s[2],null);return{c(){f=_("header"),c=_("nav"),m=_("div"),g=A(),v=_("div"),b=_("div"),V=_("div"),y=_("div"),I=_("img"),H=A(),k=_("img"),B=A(),x=_("div"),T=_("ul");for(let e=0;e<o.length;e+=1)o[e].c();q=A(),h&&h.c(),this.h()},l(e){f=p(e,"HEADER",{});var d=w(f);c=p(d,"NAV",{class:!0});var t=w(c);m=p(t,"DIV",{class:!0}),w(m).forEach(u),g=C(t),v=p(t,"DIV",{class:!0});var $=w(v);b=p($,"DIV",{class:!0});var z=w(b);V=p(z,"DIV",{});var K=w(V);y=p(K,"DIV",{class:!0});var G=w(y);I=p(G,"IMG",{src:!0,class:!0,alt:!0}),H=C(G),k=p(G,"IMG",{src:!0,class:!0,alt:!0}),G.forEach(u),K.forEach(u),B=C(z),x=p(z,"DIV",{class:!0});var N=w(x);T=p(N,"UL",{class:!0});var P=w(T);for(let R=0;R<o.length;R+=1)o[R].l(P);P.forEach(u),N.forEach(u),z.forEach(u),$.forEach(u),t.forEach(u),d.forEach(u),q=C(e),h&&h.l(e),this.h()},h(){r(m,"class",E="absolute top-0 bottom-0 left-0 right-0 w-full bg-[#081336]/30 backdrop-blur-lg -z-10 transition-opacity duration-300 "+(s[0]>0?"opacity-100":"opacity-0")),X(I.src,j="/images/logo.svg")||r(I,"src",j),r(I,"class","h-8 lg:h-10"),r(I,"alt","Logo"),X(k.src,F="/images/logo_text.svg")||r(k,"src",F),r(k,"class","h-6 lg:h-8 ml-2"),r(k,"alt","Logo Text"),r(y,"class","h-8 lg:h-10 flex flex-row items-center"),r(T,"class","list-none flex flex-row gap-10"),r(x,"class","hidden lg:block"),r(b,"class","flex justify-between items-center h-14 lg:h-20"),r(v,"class","container mx-auto px-5 relative"),r(c,"class","fixed w-full z-40 top-0 left-0 right-0")},m(e,d){S(e,f,d),i(f,c),i(c,m),i(c,g),i(c,v),i(v,b),i(b,V),i(V,y),i(y,I),i(y,H),i(y,k),i(b,B),i(b,x),i(x,T);for(let t=0;t<o.length;t+=1)o[t].m(T,null);S(e,q,d),h&&h.m(e,d),D=!0,M||(J=W(U,"scroll",()=>{l=!0,clearTimeout(n),n=setTimeout(a,100),s[4]()}),M=!0)},p(e,[d]){if(d&1&&!l&&(l=!0,clearTimeout(n),scrollTo(U.pageXOffset,e[0]),n=setTimeout(a,100)),(!D||d&1&&E!==(E="absolute top-0 bottom-0 left-0 right-0 w-full bg-[#081336]/30 backdrop-blur-lg -z-10 transition-opacity duration-300 "+(e[0]>0?"opacity-100":"opacity-0")))&&r(m,"class",E),d&2){L=e[1];let t;for(t=0;t<L.length;t+=1){const $=Y(e,L,t);o[t]?o[t].p($,d):(o[t]=Q($),o[t].c(),o[t].m(T,null))}for(;t<o.length;t+=1)o[t].d(1);o.length=L.length}h&&h.p&&(!D||d&4)&&ae(h,O,e,e[2],D?re(O,e[2],d,null):oe(e[2]),null)},i(e){D||(ie(h,e),D=!0)},o(e){ce(h,e),D=!1},d(e){e&&u(f),ne(o,e),e&&u(q),h&&h.d(e),M=!1,J()}}}function pe(s){s.preventDefault();const l=s.currentTarget,a=new URL(l.href).hash.replace("#",""),n=document.getElementById(a);window.scrollTo({top:n.offsetTop,behavior:"smooth"})}function me(s,l,a){let{$$slots:n={},$$scope:f}=l,c=0;const m=[{text:"Home",anchor:"hero-section"},{text:"About",anchor:"about-section"},{text:"Team",anchor:"team-section"},{text:"Partners",anchor:"partner-section"},{text:"Contact",anchor:"contact-section"}];function E(){a(0,c=U.pageYOffset)}return s.$$set=g=>{"$$scope"in g&&a(2,f=g.$$scope)},[c,m,f,n,E]}class ve extends Z{constructor(l){super(),ee(this,l,me,_e,te,{})}}export{ve as default};
