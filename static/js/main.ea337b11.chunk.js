(this["webpackJsonpmain-ui"]=this["webpackJsonpmain-ui"]||[]).push([[0],{33:function(t,a,e){},34:function(t,a,e){},59:function(t,a,e){"use strict";e.r(a);var c=e(0),n=e.n(c),s=e(27),r=e.n(s),i=(e(33),e(34),e(17),e(8)),d=e(10),l=e.n(d),o=e(11),j=e(1);var b=function(){var t=Object(c.useState)([]),a=Object(i.a)(t,2),e=a[0],n=a[1];return Object(c.useEffect)((function(){l()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(t){n(t.data)}))}),[]),Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)("a",{className:"navbar-brand",href:"#",children:"Navbar"}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(j.jsx)("div",{className:"navbar-nav",children:e.map((function(t){return Object(j.jsx)(o.b,{className:"nav-link",to:{pathname:"/category/".concat(t.id,"/"),fromDashboard:!1},children:t.name})}))})})]})})})};var h=function(t){var a=t.match,e=Object(c.useState)({}),n=Object(i.a)(e,2),s=n[0],r=n[1],d=Object(c.useState)([]),b=Object(i.a)(d,2),h=b[0],m=b[1],u=a.params.id;return Object(c.useEffect)((function(){l()({method:"GET",url:"http://127.0.0.1:8000/api/category/".concat(u,"/")}).then((function(t){r(t.data),m(t.data.posts)}))}),[u]),Object(j.jsxs)("div",{children:["Category with id ",s.id,Object(j.jsxs)("p",{children:["Category: ",s.name]}),Object(j.jsx)("hr",{}),Object(j.jsx)("div",{class:"row",children:h.map((function(t){return Object(j.jsxs)("div",{className:"col-md-4",children:[Object(j.jsx)("h5",{className:"card-title",children:t.title}),Object(j.jsx)("p",{className:"card-text",children:t.content}),Object(j.jsx)(o.b,{to:{pathname:"/posts/".concat(t.id),fromDashboard:!1},children:"\u0414\u0435\u0442\u0430\u043b\u0438"})]},t.id)}))})]})};var m=function(t){var a=t.match,e=Object(c.useState)({}),n=Object(i.a)(e,2),s=n[0],r=n[1],d=a.params.id;return Object(c.useEffect)((function(){l()({method:"GET",url:"http://127.0.0.1:8000/api/blogpost/".concat(d,"/")}).then((function(t){r(t.data)}))}),[d]),Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"card",style:"width: 18rem;",children:[Object(j.jsx)("img",{src:s.image,className:"card-img-top",alt:s.title},s.id),Object(j.jsx)("div",{className:"card-body",children:Object(j.jsx)("p",{className:"card-text",children:s.content})})]})})},u=e(2);var O=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(o.a,{children:[Object(j.jsx)(b,{}),Object(j.jsxs)(u.c,{children:[Object(j.jsx)(u.a,{path:"/category/:id/",exact:!0,component:h}),Object(j.jsx)(u.a,{path:"/posts/:id/",exact:!0,component:m})]})]})})},p=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,60)).then((function(a){var e=a.getCLS,c=a.getFID,n=a.getFCP,s=a.getLCP,r=a.getTTFB;e(t),c(t),n(t),s(t),r(t)}))};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),p()}},[[59,1,2]]]);
//# sourceMappingURL=main.ea337b11.chunk.js.map