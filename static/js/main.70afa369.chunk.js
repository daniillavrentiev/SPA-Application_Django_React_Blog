(this["webpackJsonpmain-ui"]=this["webpackJsonpmain-ui"]||[]).push([[0],{33:function(t,e,a){},34:function(t,e,a){},62:function(t,e,a){"use strict";a.r(e);var c=a(0),n=a.n(c),s=a(27),r=a.n(s),i=(a(33),a(34),a(17),a(8)),l=a(10),j=a.n(l),o=a(11),d=a(1);var b=function(){var t=Object(c.useState)([]),e=Object(i.a)(t,2),a=e[0],n=e[1];return Object(c.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(t){n(t.data)}))}),[]),Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("a",{className:"navbar-brand",href:"#",children:"Navbar"}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(d.jsx)("div",{className:"navbar-nav",children:a.map((function(t){return Object(d.jsx)(o.b,{className:"nav-link",to:{pathname:"/category/".concat(t.id,"/"),fromDashboard:!1},children:t.name})}))})})]})})})};var h=function(t){var e=t.match,a=Object(c.useState)({}),n=Object(i.a)(a,2),s=n[0],r=n[1],l=Object(c.useState)([]),o=Object(i.a)(l,2),b=o[0],h=o[1],u=e.params.id;return Object(c.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/category/".concat(u,"/")}).then((function(t){r(t.data),h(t.data.posts)}))}),[u]),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:s.name}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:"row row-cols-1 row-cols-md-2 g-4",children:Object(d.jsx)("div",{className:"col",children:b.map((function(t){return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{src:t.image,className:"card-img-top",alt:t.title}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:t.title}),Object(d.jsx)("p",{className:"card-text",children:t.content})]})]})}))})})]})};a(59);var u=function(t){var e=t.match,a=Object(c.useState)({}),n=Object(i.a)(a,2),s=n[0],r=n[1],l=e.params.id;return Object(c.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/blogpost/".concat(l,"/")}).then((function(t){r(t.data)}))}),[l]),Object(d.jsxs)("div",{children:[Object(d.jsxs)("h1",{children:["Post with id ",s.id]}),Object(d.jsxs)("p",{children:["Title: ",Object(d.jsx)("strong",{children:s.content})]}),Object(d.jsx)("img",{src:s.image,className:"rounded float-start",alt:s.title})]},s.id)},m=a(2);var O=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(b,{}),Object(d.jsxs)(m.c,{children:[Object(d.jsx)(m.a,{path:"/category/:id/",exact:!0,component:h}),Object(d.jsx)(m.a,{path:"/posts/:id/",exact:!0,component:u})]})]})})},v=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,63)).then((function(e){var a=e.getCLS,c=e.getFID,n=e.getFCP,s=e.getLCP,r=e.getTTFB;a(t),c(t),n(t),s(t),r(t)}))};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),v()}},[[62,1,2]]]);
//# sourceMappingURL=main.70afa369.chunk.js.map