(this["webpackJsonpability-test"]=this["webpackJsonpability-test"]||[]).push([[0],{16:function(e,t,r){},35:function(e,t,r){},36:function(e,t,r){},37:function(e,t,r){},38:function(e,t,r){},39:function(e,t,r){},40:function(e,t,r){},41:function(e,t,r){},42:function(e,t,r){},43:function(e,t,r){"use strict";r.r(t);var s=r(1),c=r.n(s),n=r(22),a=r.n(n),o=r(3),i=r(9),l=r(0),j=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(i.b,{to:"/TestOneDisplay1",children:" 1 "}),Object(l.jsx)(i.b,{to:"/TestOneDisplay2",children:" 2 "}),Object(l.jsx)(i.b,{to:"/TestOneDisplay3",children:" 3 "}),Object(l.jsx)(i.b,{to:"/TestOneDisplay4",children:" 4 "}),Object(l.jsx)(i.b,{to:"/TestTwoDisplay",children:" 5 "})]})},u=r(7),p=r(10),d=r(2),b=(r(35),function(e){var t,r=e.arr,c=Object(s.useState)([]),n=Object(d.a)(c,2),a=n[0],o=(n[1],Object(u.a)(r));try{for(o.s();!(t=o.n()).done;){t.value?a.push(Object(l.jsx)("div",{className:"box box-black"})):a.push(Object(l.jsx)("div",{className:"box box-white"}))}}catch(i){o.e(i)}finally{o.f()}return Object(l.jsx)("div",{className:"box-wrapper",children:a})}),f=r(11),O=.3,h=.5,y=.5;function v(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}function x(){return 0===Math.round(Math.random())}r(36);var w=function(e){for(var t,r=e.firstArr,s=e.secondArr,n=e.userReply,a=e.setDisplayResult,o=e.setMakeArr,i=c.a.useRef(null),j=function(e){console.log("A key was pressed",e.keyCode),38===e.keyCode&&i.current.click()},u=!0,p=0;p<16;p++)s[p]&&!r[p]&&(u=!1);return t=u===n?Object(l.jsx)("p",{className:"green",children:"\ub9de\uc558\uc2b5\ub2c8\ub2e4!"}):Object(l.jsx)("p",{className:"red",children:"\ud2c0\ub838\uc2b5\ub2c8\ub2e4."}),c.a.useEffect((function(){return window.addEventListener("keydown",j),function(){window.removeEventListener("keydown",j)}}),[]),Object(l.jsx)("div",{className:"result-wrapper",children:Object(l.jsxs)("div",{children:[Object(l.jsx)(b,{arr:r}),Object(l.jsx)("span",{children:"\u2194"}),Object(l.jsx)(b,{arr:s}),Object(l.jsx)("br",{}),t,Object(l.jsx)("button",{onClick:function(){o(!0),a(!1)},className:"result-button",ref:i,children:"\uc7ac\uc2dc\ub3c4\u2191"})]})})},m=(r(37),function(e){var t=e.firstArr,r=e.secondArr;return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"grid-wrapper grid-wrapper-first",children:Object(l.jsx)(b,{arr:t})}),Object(l.jsx)("div",{className:"grid-wrapper grid-wrapper-second",children:Object(l.jsx)(b,{arr:r})})]})}),g=(r(16),function(){var e=c.a.useState(!1),t=Object(d.a)(e,2),r=t[0],s=t[1],n=c.a.useState([]),a=Object(d.a)(n,2),o=a[0],i=a[1],j=c.a.useState([]),b=Object(d.a)(j,2),h=b[0],g=b[1],k=c.a.useState(!1),N=Object(d.a)(k,2),A=N[0],S=N[1],C=c.a.useState(!0),E=Object(d.a)(C,2),R=E[0],D=E[1],M=c.a.useRef(null),L=c.a.useRef(null),T=function(e){console.log("A key was pressed",e.keyCode),37===e.keyCode?M.current.click():39===e.keyCode&&L.current.click()};if(R){for(var Y=[],q=[],J=x(),B=[],I=0;I<16;I++)Y.push(x()),q.push(0),Y[I]&&B.push(I);if(console.log(J?"yes":"no"),!J)for(var z=0;z<10;z++)B.push(v(0,15));var F=v(3,5);for(console.log(F);B.length>F;)x()?B.pop():B=[B[B.length-1]].concat(Object(p.a)(B.slice(0,-1)));var G,H=Object(u.a)(B);try{for(H.s();!(G=H.n()).done;){q[G.value]=!0}}catch(K){H.e(K)}finally{H.f()}i(Y),g(q),D(!1)}return c.a.useEffect((function(){if(!A)return window.addEventListener("keydown",T),f.a.timeline().set(".cross-wrapper",{opacity:1}).set(".cross-wrapper",{opacity:0},"+=".concat(y)).set(".grid-wrapper-first",{opacity:1}).set(".grid-wrapper-first",{opacity:0},"+=".concat(O)).set(".grid-wrapper-second",{opacity:1},"+=".concat(.3)).set(".grid-wrapper-second",{opacity:0},"+=".concat(O)).set(".button-wrapper",{opacity:1}),function(){window.removeEventListener("keydown",T)}}),[A]),A?Object(l.jsx)(w,{firstArr:o,secondArr:h,userReply:r,setDisplayResult:S,setMakeArr:D}):Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"cross-wrapper",children:Object(l.jsx)("div",{className:"cross",children:" "})}),Object(l.jsx)(m,{firstArr:o,secondArr:h}),Object(l.jsxs)("div",{className:"button-wrapper",children:[Object(l.jsxs)("button",{className:"button button-yes",onClick:function(){s(!0),S(!0)},ref:M,children:["YES",Object(l.jsx)("br",{}),"\u2190"]}),Object(l.jsxs)("button",{className:"button button-no",onClick:function(){s(!1),S(!0)},ref:L,children:["NO",Object(l.jsx)("br",{}),"\u2192"]})]})]})}),k=function(){var e=c.a.useState(!1),t=Object(d.a)(e,2),r=t[0],s=t[1],n=c.a.useState([]),a=Object(d.a)(n,2),o=a[0],i=a[1],j=c.a.useState([]),b=Object(d.a)(j,2),O=b[0],g=b[1],k=c.a.useState(!1),N=Object(d.a)(k,2),A=N[0],S=N[1],C=c.a.useState(!0),E=Object(d.a)(C,2),R=E[0],D=E[1],M=c.a.useRef(null),L=c.a.useRef(null),T=function(e){console.log("A key was pressed",e.keyCode),37===e.keyCode?M.current.click():39===e.keyCode&&L.current.click()};if(R){for(var Y=[],q=[],J=x(),B=[],I=0;I<16;I++)Y.push(x()),q.push(0),Y[I]&&B.push(I);if(console.log(J?"yes":"no"),!J)for(var z=0;z<10;z++)B.push(v(0,15));var F=v(3,5);for(console.log(F);B.length>F;)x()?B.pop():B=[B[B.length-1]].concat(Object(p.a)(B.slice(0,-1)));var G,H=Object(u.a)(B);try{for(H.s();!(G=H.n()).done;){q[G.value]=!0}}catch(K){H.e(K)}finally{H.f()}i(Y),g(q),D(!1)}return c.a.useEffect((function(){if(!A)return window.addEventListener("keydown",T),f.a.timeline().set(".cross-wrapper",{opacity:1}).set(".cross-wrapper",{opacity:0},"+=".concat(y)).set(".grid-wrapper-first",{opacity:1}).set(".grid-wrapper-first",{opacity:0},"+=".concat(h)).set(".grid-wrapper-second",{opacity:1},"+=".concat(.5)).set(".grid-wrapper-second",{opacity:0},"+=".concat(h)).set(".button-wrapper",{opacity:1}),function(){window.removeEventListener("keydown",T)}}),[A]),A?Object(l.jsx)(w,{firstArr:o,secondArr:O,userReply:r,setDisplayResult:S,setMakeArr:D}):Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"cross-wrapper",children:Object(l.jsx)("div",{className:"cross",children:" "})}),Object(l.jsx)(m,{firstArr:o,secondArr:O}),Object(l.jsxs)("div",{className:"button-wrapper",children:[Object(l.jsxs)("button",{className:"button button-yes",onClick:function(){s(!0),S(!0)},ref:M,children:["YES",Object(l.jsx)("br",{}),"\u2190"]}),Object(l.jsxs)("button",{className:"button button-no",onClick:function(){s(!1),S(!0)},ref:L,children:["NO",Object(l.jsx)("br",{}),"\u2192"]})]})]})},N=(r(38),function(e){var t,r=e.arr,c=Object(s.useState)([]),n=Object(d.a)(c,2),a=n[0],o=(n[1],Object(u.a)(r));try{for(o.s();!(t=o.n()).done;){t.value?a.push(Object(l.jsx)("div",{className:"box box-black"})):a.push(Object(l.jsx)("div",{className:"box box-white"}))}}catch(i){o.e(i)}finally{o.f()}return Object(l.jsx)("div",{className:"box-wrapper",children:a})}),A=(r(39),function(e){var t=e.firstArr,r=e.secondArr;return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"grid-wrapper grid-wrapper-first",children:Object(l.jsx)(N,{arr:t})}),Object(l.jsx)("div",{className:"grid-wrapper grid-wrapper-second",children:Object(l.jsx)(N,{arr:r})})]})}),S=function(){var e=c.a.useState(!1),t=Object(d.a)(e,2),r=t[0],s=t[1],n=c.a.useState([]),a=Object(d.a)(n,2),o=a[0],i=a[1],j=c.a.useState([]),b=Object(d.a)(j,2),h=b[0],m=b[1],g=c.a.useState(!1),k=Object(d.a)(g,2),N=k[0],S=k[1],C=c.a.useState(!0),E=Object(d.a)(C,2),R=E[0],D=E[1],M=c.a.useRef(null),L=c.a.useRef(null),T=function(e){console.log("A key was pressed",e.keyCode),37===e.keyCode?M.current.click():39===e.keyCode&&L.current.click()};if(R){for(var Y=[],q=[],J=x(),B=[],I=0;I<16;I++)Y.push(x()),q.push(0),Y[I]&&B.push(I);if(console.log(J?"yes":"no"),!J)for(var z=0;z<10;z++)B.push(v(0,15));var F=v(3,5);for(console.log(F);B.length>F;)x()?B.pop():B=[B[B.length-1]].concat(Object(p.a)(B.slice(0,-1)));var G,H=Object(u.a)(B);try{for(H.s();!(G=H.n()).done;){q[G.value]=!0}}catch(K){H.e(K)}finally{H.f()}i(Y),m(q),D(!1)}return c.a.useEffect((function(){if(!N)return window.addEventListener("keydown",T),f.a.timeline().set(".cross-wrapper",{opacity:1}).set(".cross-wrapper",{opacity:0},"+=".concat(y)).set(".grid-wrapper-first",{opacity:1}).set(".grid-wrapper-first",{opacity:0},"+=".concat(O)).set(".grid-wrapper-second",{opacity:1},"+=".concat(.3)).set(".grid-wrapper-second",{opacity:0},"+=".concat(O)).set(".button-wrapper",{opacity:1}),function(){window.removeEventListener("keydown",T)}}),[N]),N?Object(l.jsx)(w,{firstArr:o,secondArr:h,userReply:r,setDisplayResult:S,setMakeArr:D}):Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"cross-wrapper",children:Object(l.jsx)("div",{className:"cross",children:" "})}),Object(l.jsx)(A,{firstArr:o,secondArr:h}),Object(l.jsxs)("div",{className:"button-wrapper",children:[Object(l.jsxs)("button",{className:"button button-yes",onClick:function(){s(!0),S(!0)},ref:M,children:["YES",Object(l.jsx)("br",{}),"\u2190"]}),Object(l.jsxs)("button",{className:"button button-no",onClick:function(){s(!1),S(!0)},ref:L,children:["NO",Object(l.jsx)("br",{}),"\u2192"]})]})]})},C=function(){var e=c.a.useState(!1),t=Object(d.a)(e,2),r=t[0],s=t[1],n=c.a.useState([]),a=Object(d.a)(n,2),o=a[0],i=a[1],j=c.a.useState([]),b=Object(d.a)(j,2),O=b[0],m=b[1],g=c.a.useState(!1),k=Object(d.a)(g,2),N=k[0],S=k[1],C=c.a.useState(!0),E=Object(d.a)(C,2),R=E[0],D=E[1],M=c.a.useRef(null),L=c.a.useRef(null),T=function(e){console.log("A key was pressed",e.keyCode),37===e.keyCode?M.current.click():39===e.keyCode&&L.current.click()};if(R){for(var Y=[],q=[],J=x(),B=[],I=0;I<16;I++)Y.push(x()),q.push(0),Y[I]&&B.push(I);if(console.log(J?"yes":"no"),!J)for(var z=0;z<10;z++)B.push(v(0,15));var F=v(3,5);for(console.log(F);B.length>F;)x()?B.pop():B=[B[B.length-1]].concat(Object(p.a)(B.slice(0,-1)));var G,H=Object(u.a)(B);try{for(H.s();!(G=H.n()).done;){q[G.value]=!0}}catch(K){H.e(K)}finally{H.f()}i(Y),m(q),D(!1)}return c.a.useEffect((function(){if(!N)return window.addEventListener("keydown",T),f.a.timeline().set(".cross-wrapper",{opacity:1}).set(".cross-wrapper",{opacity:0},"+=".concat(y)).set(".grid-wrapper-first",{opacity:1}).set(".grid-wrapper-first",{opacity:0},"+=".concat(h)).set(".grid-wrapper-second",{opacity:1},"+=".concat(.5)).set(".grid-wrapper-second",{opacity:0},"+=".concat(h)).set(".button-wrapper",{opacity:1}),function(){window.removeEventListener("keydown",T)}}),[N]),N?Object(l.jsx)(w,{firstArr:o,secondArr:O,userReply:r,setDisplayResult:S,setMakeArr:D}):Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"cross-wrapper",children:Object(l.jsx)("div",{className:"cross",children:" "})}),Object(l.jsx)(A,{firstArr:o,secondArr:O}),Object(l.jsxs)("div",{className:"button-wrapper",children:[Object(l.jsxs)("button",{className:"button button-yes",onClick:function(){s(!0),S(!0)},ref:M,children:["YES",Object(l.jsx)("br",{}),"\u2190"]}),Object(l.jsxs)("button",{className:"button button-no",onClick:function(){s(!1),S(!0)},ref:L,children:["NO",Object(l.jsx)("br",{}),"\u2192"]})]})]})},E=(r(40),function(e){var t=e.arr,r=[];console.log(t);for(var s=0;s<5;s++){var c="img-wrapper"+(4==s?"":" right");r.push(Object(l.jsxs)("div",{className:c,children:[Object(l.jsx)("img",{src:"./img/".concat(t[2*s],".png"),className:"img-map"}),Object(l.jsx)("img",{src:"./img/".concat(t[2*s+1],".png"),className:"img-map"}),Object(l.jsx)("p",{className:"text-number",children:2*s+1})]}))}return Object(l.jsx)("div",{className:"key-wrapper",children:Object(l.jsx)("div",{className:"key",children:r})})}),R=(r(41),function(e){for(var t=e.imgArr,r=void 0===t?[]:t,s=e.ansArr,c=void 0===s?[]:s,n=e.inputArr,a=void 0===n?[]:n,o=[],i=!0,j=0;j<20;j++){var u="";-1==a[j]?(u=i?"black":"gray",i=!1):u=c[j]==a[j]?"green":"red",o.push(Object(l.jsx)("div",{className:u+" img-query",children:Object(l.jsx)("img",{src:"./img/".concat(r[j],".png"),className:"img-key-query"})}))}return Object(l.jsx)("div",{className:"query-container",children:o})});var D=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),r=t[0],c=t[1],n=Object(s.useState)([]),a=Object(d.a)(n,2),o=a[0],i=a[1],j=Object(s.useState)([]),u=Object(d.a)(j,2),p=u[0],b=u[1],f=Object(s.useState)([]),O=Object(d.a)(f,2),h=O[0],y=O[1],x=Object(s.useState)(new Array(10)),w=Object(d.a)(x,2),m=(w[0],w[1]),g=Object(s.useState)(-1),k=Object(d.a)(g,2),N=k[0],A=k[1],S=Object(s.useState)(!0),C=Object(d.a)(S,2),D=C[0],M=C[1],L=function(e){console.log("A key was pressed",e.keyCode);var t=p.slice();t[N]=e.keyCode-48,b(t),20===N?(M(!0),A(-1)):A(N+1)};return Object(s.useEffect)((function(){if(window.addEventListener("keydown",L),D){M(!1);for(var e=[],t=[],r=[],s=[],n=0;n<10;n++)e.push(n);!function(e){for(var t=e.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),s=[e[r],e[t]];e[t]=s[0],e[r]=s[1]}}(e);for(var a=new Array(10),o=0;o<5;o++){var l=2*o+1;a[e[2*o]]=l,a[e[2*o+1]]=l}for(var j=0;j<20;j++)t.push(v(0,9)),r.push(a[t[j]]),s.push(-1);c(e),i(t),m(a),y(r),b(s),A(0)}return function(){window.removeEventListener("keydown",L)}}),[N]),console.log("render",h,p),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(E,{arr:r}),Object(l.jsx)(R,{imgArr:o,ansArr:h,inputArr:p})]})};var M=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",component:j}),Object(l.jsx)(o.a,{path:"/TestOneDisplay1",component:g}),Object(l.jsx)(o.a,{path:"/TestOneDisplay2",component:k}),Object(l.jsx)(o.a,{path:"/TestOneDisplay3",component:S}),Object(l.jsx)(o.a,{path:"/TestOneDisplay4",component:C}),Object(l.jsx)(o.a,{path:"/TestTwoDisplay",component:D})]})};r(42);a.a.render(Object(l.jsx)(i.a,{children:Object(l.jsx)(M,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.029e8f18.chunk.js.map