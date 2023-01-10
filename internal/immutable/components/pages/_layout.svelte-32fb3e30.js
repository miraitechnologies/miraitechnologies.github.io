import{S as le,i as ae,s as se,C as oe,D as re,k as f,a as C,l as h,m as b,h as n,c as q,n as o,E as W,b as U,F as r,G as j,H as ce,I as ie,J as ne,f as ue,t as fe,K as he,L as de,M as _e,q as pe,r as me,B as ge}from"../../chunks/index-e3ddf0f3.js";const{window:F}=_e;function Z(a,l,s){const u=a.slice();return u[5]=l[s],u}function ee(a){let l,s,u=a[5].text+"",d,i,m,w;return{c(){l=f("li"),s=f("a"),d=pe(u),i=C(),this.h()},l(g){l=h(g,"LI",{});var v=b(l);s=h(v,"A",{class:!0,href:!0});var E=b(s);d=me(E,u),E.forEach(n),i=q(v),v.forEach(n),this.h()},h(){o(s,"class","block uppercase font-bold opacity-60 hover:opacity-100 transition-opacity duration-300"),o(s,"href","#"+a[5].anchor)},m(g,v){U(g,l,v),r(l,s),r(s,d),r(l,i),m||(w=j(s,"click",te),m=!0)},p:ge,d(g){g&&n(l),m=!1,w()}}}function ve(a){let l=!1,s=()=>{l=!1},u,d,i,m,w,g,v,E,A,y,k,I,J,M,T,K,B,L,D,z,x,O,N;oe(a[4]);let V=a[1],c=[];for(let e=0;e<V.length;e+=1)c[e]=ee(Z(a,V,e));const R=a[3].default,_=re(R,a,a[2],null);return{c(){d=f("header"),i=f("nav"),m=f("div"),g=C(),v=f("div"),E=f("div"),A=f("div"),y=f("a"),k=f("div"),I=f("img"),M=C(),T=f("img"),B=C(),L=f("div"),D=f("ul");for(let e=0;e<c.length;e+=1)c[e].c();z=C(),_&&_.c(),this.h()},l(e){d=h(e,"HEADER",{});var p=b(d);i=h(p,"NAV",{class:!0});var t=b(i);m=h(t,"DIV",{class:!0}),b(m).forEach(n),g=q(t),v=h(t,"DIV",{class:!0});var $=b(v);E=h($,"DIV",{class:!0});var G=b(E);A=h(G,"DIV",{});var P=b(A);y=h(P,"A",{href:!0});var X=b(y);k=h(X,"DIV",{class:!0});var H=b(k);I=h(H,"IMG",{src:!0,class:!0,alt:!0}),M=q(H),T=h(H,"IMG",{src:!0,class:!0,alt:!0}),H.forEach(n),X.forEach(n),P.forEach(n),B=q(G),L=h(G,"DIV",{class:!0});var Y=b(L);D=h(Y,"UL",{class:!0});var Q=b(D);for(let S=0;S<c.length;S+=1)c[S].l(Q);Q.forEach(n),Y.forEach(n),G.forEach(n),$.forEach(n),t.forEach(n),p.forEach(n),z=q(e),_&&_.l(e),this.h()},h(){o(m,"class",w="absolute top-0 bottom-0 left-0 right-0 w-full bg-[#081336]/30 backdrop-blur-lg -z-10 transition-opacity duration-300 "+(a[0]>0?"opacity-100":"opacity-0")),W(I.src,J="/images/logo.svg")||o(I,"src",J),o(I,"class","h-8 lg:h-10"),o(I,"alt","Logo"),W(T.src,K="/images/logo_text.svg")||o(T,"src",K),o(T,"class","h-6 lg:h-8 ml-2"),o(T,"alt","Logo Text"),o(k,"class","h-8 lg:h-10 flex flex-row items-center"),o(y,"href","#hero-section"),o(D,"class","list-none flex flex-row gap-10"),o(L,"class","hidden lg:block"),o(E,"class","flex justify-between items-center h-14 lg:h-24"),o(v,"class","container mx-auto px-5 relative"),o(i,"class","fixed w-full z-40 top-0 left-0 right-0")},m(e,p){U(e,d,p),r(d,i),r(i,m),r(i,g),r(i,v),r(v,E),r(E,A),r(A,y),r(y,k),r(k,I),r(k,M),r(k,T),r(E,B),r(E,L),r(L,D);for(let t=0;t<c.length;t+=1)c[t].m(D,null);U(e,z,p),_&&_.m(e,p),x=!0,O||(N=[j(F,"scroll",()=>{l=!0,clearTimeout(u),u=setTimeout(s,100),a[4]()}),j(y,"click",te)],O=!0)},p(e,[p]){if(p&1&&!l&&(l=!0,clearTimeout(u),scrollTo(F.pageXOffset,e[0]),u=setTimeout(s,100)),(!x||p&1&&w!==(w="absolute top-0 bottom-0 left-0 right-0 w-full bg-[#081336]/30 backdrop-blur-lg -z-10 transition-opacity duration-300 "+(e[0]>0?"opacity-100":"opacity-0")))&&o(m,"class",w),p&2){V=e[1];let t;for(t=0;t<V.length;t+=1){const $=Z(e,V,t);c[t]?c[t].p($,p):(c[t]=ee($),c[t].c(),c[t].m(D,null))}for(;t<c.length;t+=1)c[t].d(1);c.length=V.length}_&&_.p&&(!x||p&4)&&ce(_,R,e,e[2],x?ne(R,e[2],p,null):ie(e[2]),null)},i(e){x||(ue(_,e),x=!0)},o(e){fe(_,e),x=!1},d(e){e&&n(d),he(c,e),e&&n(z),_&&_.d(e),O=!1,de(N)}}}function te(a){a.preventDefault();const l=a.currentTarget,s=new URL(l.href).hash.replace("#",""),u=document.getElementById(s);window.scrollTo({top:u.offsetTop,behavior:"smooth"})}function be(a,l,s){let{$$slots:u={},$$scope:d}=l,i=0;const m=[{text:"Home",anchor:"hero-section"},{text:"About",anchor:"about-section"},{text:"Team",anchor:"team-section"},{text:"Partners",anchor:"partner-section"},{text:"Contact",anchor:"contact-section"}];function w(){s(0,i=F.pageYOffset)}return a.$$set=g=>{"$$scope"in g&&s(2,d=g.$$scope)},[i,m,d,u,w]}class we extends le{constructor(l){super(),ae(this,l,be,ve,se,{})}}export{we as default};
