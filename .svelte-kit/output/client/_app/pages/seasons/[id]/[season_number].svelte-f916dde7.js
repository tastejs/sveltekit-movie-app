import{S as P,i as ee,s as T,e as v,t as j,k as D,l as K,c as b,a as k,g as A,d as _,n as $,b as h,f as H,D as f,O as te,h as z,K as oe,H as F,N as re,j as ce,m as fe,o as ue,x as J,u as Q,v as _e,w as de,L as he,r as me}from"../../../chunks/vendor-8fe9a59e.js";import{A as pe}from"../../../chunks/store-892411d9.js";import{p as ve}from"../../../chunks/stores-d4b77a7d.js";function se(r,s,a){const e=r.slice();return e[2]=s[a],e}function ae(r){let s,a,e,t,n=r[0].episodes,i=[];for(let l=0;l<n.length;l+=1)i[l]=ne(se(r,n,l));return{c(){s=v("h4"),a=j("Season Information"),e=D();for(let l=0;l<i.length;l+=1)i[l].c();t=K(),this.h()},l(l){s=b(l,"H4",{class:!0});var c=k(s);a=A(c,"Season Information"),c.forEach(_),e=$(l);for(let o=0;o<i.length;o+=1)i[o].l(l);t=K(),this.h()},h(){h(s,"class","pb-8")},m(l,c){H(l,s,c),f(s,a),H(l,e,c);for(let o=0;o<i.length;o+=1)i[o].m(l,c);H(l,t,c)},p(l,c){if(c&3){n=l[0].episodes;let o;for(o=0;o<n.length;o+=1){const u=se(l,n,o);i[o]?i[o].p(u,c):(i[o]=ne(u),i[o].c(),i[o].m(t.parentNode,t))}for(;o<i.length;o+=1)i[o].d(1);i.length=n.length}},d(l){l&&_(s),l&&_(e),oe(i,l),l&&_(t)}}}function ne(r){let s,a,e,t,n,i,l,c,o=r[2].name+"",u,m,g,N,y,I,p=r[2].air_date+"",E,M,O,U,B,S,V=r[2].overview+"",q,C,L;return{c(){s=v("div"),a=v("a"),e=v("div"),t=v("img"),i=D(),l=v("div"),c=v("h4"),u=j(o),m=D(),g=v("hr"),N=D(),y=v("h6"),I=j("Air Date: "),E=j(p),M=D(),O=v("h6"),U=j("Overview:"),B=D(),S=v("h6"),q=j(V),L=D(),this.h()},l(d){s=b(d,"DIV",{class:!0});var x=k(s);a=b(x,"A",{href:!0,class:!0});var G=k(a);e=b(G,"DIV",{class:!0});var W=k(e);t=b(W,"IMG",{class:!0,src:!0,alt:!0}),W.forEach(_),i=$(G),l=b(G,"DIV",{class:!0});var w=k(l);c=b(w,"H4",{});var X=k(c);u=A(X,o),X.forEach(_),m=$(w),g=b(w,"HR",{}),N=$(w),y=b(w,"H6",{});var R=k(y);I=A(R,"Air Date: "),E=A(R,p),R.forEach(_),M=$(w),O=b(w,"H6",{});var Y=k(O);U=A(Y,"Overview:"),Y.forEach(_),B=$(w),S=b(w,"H6",{class:!0});var Z=k(S);q=A(Z,V),Z.forEach(_),w.forEach(_),G.forEach(_),L=$(x),x.forEach(_),this.h()},h(){h(t,"class","flex xl:w-80 xl:h-44 items-start"),te(t.src,n=r[2].still_path?le+r[2].still_path:"/default.jpg")||h(t,"src",n),h(t,"alt","episode"),h(e,"class","flex mx-auto max-h-full max-w-full xl:m-0 xl:flex-none xl:w-80 xl:h-44 xl:items-start"),h(S,"class","flex-1 pr-8 text-skin-muted mb-4"),h(l,"class","ml-2 block"),h(a,"href",C=`/episode/${r[1]}/${r[0].season_number}/${r[2].episode_number}`),h(a,"class","flex flex-col xl:flex-row text-skin-base xl:rounded-lg"),h(s,"class","flex flex-col xl:flex-row pb-4")},m(d,x){H(d,s,x),f(s,a),f(a,e),f(e,t),f(a,i),f(a,l),f(l,c),f(c,u),f(l,m),f(l,g),f(l,N),f(l,y),f(y,I),f(y,E),f(l,M),f(l,O),f(O,U),f(l,B),f(l,S),f(S,q),f(s,L)},p(d,x){x&1&&!te(t.src,n=d[2].still_path?le+d[2].still_path:"/default.jpg")&&h(t,"src",n),x&1&&o!==(o=d[2].name+"")&&z(u,o),x&1&&p!==(p=d[2].air_date+"")&&z(E,p),x&1&&V!==(V=d[2].overview+"")&&z(q,V),x&3&&C!==(C=`/episode/${d[1]}/${d[0].season_number}/${d[2].episode_number}`)&&h(a,"href",C)},d(d){d&&_(s)}}}function be(r){let s,a,e=r[0].id&&ae(r);return{c(){s=v("section"),a=v("div"),e&&e.c(),this.h()},l(t){s=b(t,"SECTION",{id:!0});var n=k(s);a=b(n,"DIV",{class:!0});var i=k(a);e&&e.l(i),i.forEach(_),n.forEach(_),this.h()},h(){h(a,"class","max-w-7xl mx-auto text-skin-base xl:mt-5 xl:mb-10 bg-skin-secondary xl:pl-5 pt-1 xl:rounded-2xl"),h(s,"id","season")},m(t,n){H(t,s,n),f(s,a),e&&e.m(a,null)},p(t,[n]){t[0].id?e?e.p(t,n):(e=ae(t),e.c(),e.m(a,null)):e&&(e.d(1),e=null)},i:F,o:F,d(t){t&&_(s),e&&e.d()}}}const le="https://image.tmdb.org/t/p/w500/";function xe(r,s,a){let{season_details:e}=s,{movie_id:t}=s;return r.$$set=n=>{"season_details"in n&&a(0,e=n.season_details),"movie_id"in n&&a(1,t=n.movie_id)},[e,t]}class ke extends P{constructor(s){super();ee(this,s,xe,be,T,{season_details:0,movie_id:1})}}function ie(r){let s,a;return s=new ke({props:{season_details:r[0],movie_id:r[2]}}),{c(){ce(s.$$.fragment)},l(e){fe(s.$$.fragment,e)},m(e,t){ue(s,e,t),a=!0},p(e,t){const n={};t&1&&(n.season_details=e[0]),s.$set(n)},i(e){a||(J(s.$$.fragment,e),a=!0)},o(e){Q(s.$$.fragment,e),a=!1},d(e){_e(s,e)}}}function we(r){let s=r[1].params.season_number,a,e,t=ie(r);return{c(){t.c(),a=K()},l(n){t.l(n),a=K()},m(n,i){t.m(n,i),H(n,a,i),e=!0},p(n,[i]){i&2&&T(s,s=n[1].params.season_number)?(me(),Q(t,1,1,F),de(),t=ie(n),t.c(),J(t),t.m(a.parentNode,a)):t.p(n,i)},i(n){e||(J(t),e=!0)},o(n){Q(t),e=!1},d(n){n&&_(a),t.d(n)}}}var ge=function(r,s,a,e){function t(n){return n instanceof a?n:new a(function(i){i(n)})}return new(a||(a=Promise))(function(n,i){function l(u){try{o(e.next(u))}catch(m){i(m)}}function c(u){try{o(e.throw(u))}catch(m){i(m)}}function o(u){u.done?n(u.value):t(u.value).then(l,c)}o((e=e.apply(r,s||[])).next())})};function $e({page:r}){return ge(this,void 0,void 0,function*(){let s=`https://api.themoviedb.org/3/tv/${r.params.id}/season/${r.params.season_number}?api_key=${re(pe)}&language=en-US`;return{props:{season_details:yield fetch(s).then(e=>e.json())}}})}function ye(r,s,a){let e;he(r,ve,i=>a(1,e=i)),this&&this.__awaiter;let{season_details:t}=s,n=e.params.id;return console.log("Season Details",t),r.$$set=i=>{"season_details"in i&&a(0,t=i.season_details)},[t,e,n]}class Se extends P{constructor(s){super();ee(this,s,ye,we,T,{season_details:0})}}export{Se as default,$e as load};