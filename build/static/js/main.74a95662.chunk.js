(this["webpackJsonphooks-modal-experiment"]=this["webpackJsonphooks-modal-experiment"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(4),u=n.n(o),s=(n(9),n(3)),a=function(e){if(!e)return"";var t=e.charAt(0).toUpperCase();return 1===e.length?t:t+e.substring(1)},i=(n(10),n(0)),d=[{type:"secondary",content:"CTA Button 1"},{type:"primary",content:"Close Modal"}],l=function(e,t){return function(n){return Object(i.jsx)("button",{className:n.type,ref:t["".concat(n.type,"Button")],onClick:e["on".concat(a(n.type),"Click")],children:n.content},n.type)}},f=r.a.forwardRef((function(e,t){var n={secondaryButton:Object(c.useRef)(),primaryButton:Object(c.useRef)()};return Object(c.useImperativeHandle)(t,(function(){return{focus:function(){n.secondaryButton.current.focus()},get secondaryButton(){return n.secondaryButton.current},get primaryButton(){return n.primaryButton.current}}})),Object(i.jsxs)(i.Fragment,{children:[e.open&&Object(i.jsx)("div",{className:"overlay",onClick:e.onClickOutsideModal}),Object(i.jsxs)("dialog",{open:e.open,children:[Object(i.jsx)("h1",{children:"Modal Header"}),Object(i.jsx)("section",{children:Array.from({length:40},(function(e,t){return Object(i.jsx)("p",{children:"Content"},t)}))}),Object(i.jsx)("footer",{children:d.map(l(e,n))})]},"modal")]})})),j=(n(12),r.a.forwardRef((function(e,t){return Object(i.jsxs)("div",{className:"pageContainer",children:[Object(i.jsx)("button",{onClick:e.openModal,ref:t,className:"primary",children:"CSS Test Modal"}),Object(i.jsx)("p",{className:"needToScroll",children:Object(i.jsx)("b",{children:"Scroll to see me"})})]})}))),b=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),n=Object(c.useState)(),r=Object(s.a)(n,2),o=r[0],u=r[1],a=Object(c.useState)(),d=Object(s.a)(a,2),l=d[0],b=d[1],m=function(){return u(!1)},p=function(e){9===e.keyCode&&(e.shiftKey?t.current.secondaryButton===document.activeElement&&b(t.current.primaryButton):t.current.primaryButton===document.activeElement&&b(t.current.secondaryButton))};return Object(c.useEffect)((function(){return o?(document.addEventListener("keydown",p),document.body.classList.add("openModal"),t.current.focus()):!1===o&&(document.body.classList.remove("openModal"),e.current.focus()),function(){return document.removeEventListener("keydown",p)}}),[o]),Object(c.useEffect)((function(){l&&(l.focus(),b())}),[l]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(f,{onClickOutsideModal:m,onPrimaryClick:m,open:o,ref:t}),Object(i.jsx)(j,{openModal:function(){return u(!0)},closeModal:!0,ref:e})]})},m=(n(13),n(14),function(){return Object(i.jsx)(b,{})});u.a.render(Object(i.jsx)(m,{}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.74a95662.chunk.js.map