(this["webpackJsonpfont-app"]=this["webpackJsonpfont-app"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(5),i=n.n(a),r=(n(10),n(3)),o=n(2),l=(n(11),n(0));function u(e){var t=e.navlinks,n=e.className;return Object(l.jsx)("nav",{role:"navigation",className:Object(o.a)(n),children:Object(l.jsxs)("div",{className:"togglemenu",children:[Object(l.jsx)("input",{type:"checkbox"}),Object(l.jsx)("span",{children:"Menu"}),Object(l.jsx)("div",{className:"backdropmenu",children:t&&t.map((function(e,t){return Object(l.jsx)("a",{href:e.href,children:e.name},t)}))})]})})}var j=Object(c.memo)(u),m=(n(13),[{name:"Item1",href:"/#!"},{name:"Item2",href:"/#!"},{name:"Item3",href:"/#!"}]);function b(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],s=t[1],a=function(){var e=window.pageYOffset>0;s(e)};return Object(c.useEffect)((function(){return window.addEventListener("scroll",a),function(){return window.removeEventListener("scroll",a)}})),Object(l.jsxs)("header",{className:Object(o.a)("header",n&&"header__sticky"),children:[Object(l.jsx)("p",{children:"Sticky header"}),Object(l.jsx)(j,{navlinks:m,className:"header__nav--mobile"}),Object(l.jsx)("nav",{className:"header__nav--desktop",children:m&&m.map((function(e,t){return Object(l.jsx)("a",{className:"header__nav--item",href:e.href,children:e.name},t)}))})]})}var d=Object(c.memo)(b);n(14);function h(){return Object(l.jsx)("footer",{className:"footer",children:"Footer always at the bottom"})}var O=Object(c.memo)(h);n(15);function f(){return Object(l.jsx)("section",{className:"hero",children:Object(l.jsx)("h1",{className:"hero__title",children:"Centered text"})})}var x=Object(c.memo)(f);n(16);function p(e){var t=e.children,n=e.className;return Object(l.jsx)("div",{className:Object(o.a)("box",n),children:t})}var v=Object(c.memo)(p),N=(n(17),[{name:"Title 1",href:"/#!",desc:"Nullam lectus ipsum, dapibus a velit vel. Suspendisse condimentum, in suscipit odio purus sed augue."},{name:"Title 2",href:"/#!",desc:"Nullam lectus ipsum, dapibus a velit vel. Suspendisse condimentum, in suscipit odio purus sed augue."},{name:"Title 3",href:"/#!",desc:"Nullam lectus ipsum, dapibus a velit vel. Suspendisse condimentum, in suscipit odio purus sed augue."},{name:"Title 4",href:"/#!",desc:"Nullam lectus ipsum, dapibus a velit vel. Suspendisse condimentum, in suscipit odio purus sed augue."}]);function _(){return Object(l.jsx)("section",{className:"box1",children:N.map((function(e,t){return Object(l.jsxs)(v,{className:"box1__element",children:[Object(l.jsx)("h5",{className:"box1__title",children:e.name}),Object(l.jsx)("a",{href:e.href,className:"box1__link",children:"link\u203a"}),Object(l.jsx)("div",{className:"box1__image"}),Object(l.jsx)("p",{className:"box1__desc",children:e.desc})]},t)}))})}var g=Object(c.memo)(_),S=(n(18),[{name:"Title 5"},{name:"Title 6"}]);function k(){return Object(l.jsx)("section",{className:"box2",children:S.map((function(e,t){return Object(l.jsxs)(v,{className:"box2__element",children:[Object(l.jsx)("div",{className:"box2__image"}),Object(l.jsx)("h5",{className:"box2__title",children:e.name})]},t)}))})}var w=Object(c.memo)(k);n(19);function T(){var e=document.documentElement.style,t=window.localStorage,n=JSON.parse(t.getItem("FS"))||100,s=Object(c.useState)(n),a=Object(r.a)(s,2),i=a[0],o=a[1],u=Object(c.useState)(!0),j=Object(r.a)(u,2),m=j[0],b=j[1],d=Object(c.useState)(!1),h=Object(r.a)(d,2),O=h[0],f=h[1];return Object(c.useEffect)((function(){e.fontSize="".concat(i,"%"),t.setItem("FS",i)})),m?Object(l.jsxs)("section",{className:"font-changer",children:[Object(l.jsx)("button",{onClick:function(){b(!1)},className:"close__btn"}),O&&Object(l.jsx)("p",{className:"font-changer__limit",children:"osi\u0105gni\u0119to limit"}),Object(l.jsx)("p",{children:"Font size: "}),Object(l.jsxs)("p",{children:[i,"%"]}),Object(l.jsx)("button",{onClick:function(){i>75?(o(i-5),f(!1)):(f(!0),setTimeout((function(){f(!1)}),5e3))},className:"font-changer__btn",children:"-"}),Object(l.jsx)("button",{onClick:function(){i<125?(o(i+5),f(!1)):(f(!0),setTimeout((function(){f(!1)}),5e3))},className:"font-changer__btn",children:"+"})]}):null}var F=Object(c.memo)(T);n(20);var C=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d,{}),Object(l.jsxs)("main",{className:"main",children:[Object(l.jsx)(x,{}),Object(l.jsx)(g,{}),Object(l.jsx)(w,{}),Object(l.jsx)(F,{})]}),Object(l.jsx)(O,{})]})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(C,{})}),document.getElementById("root")),I()}],[[21,1,2]]]);
//# sourceMappingURL=main.5f0bd518.chunk.js.map