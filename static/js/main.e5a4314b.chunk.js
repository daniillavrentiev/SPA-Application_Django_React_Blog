(this["webpackJsonpmain-ui"]=this["webpackJsonpmain-ui"]||[]).push([[0],{33:function(t,e,a){},34:function(t,e,a){},59:function(t,e,a){"use strict";a.r(e);var c=a(0),n=a.n(c),s=a(27),i=a.n(s),r=(a(33),a(34),a(17),a(8)),o=a(10),j=a.n(o),l=a(11),b=a(1);var d=function(){var t=Object(c.useState)([]),e=Object(r.a)(t,2),a=e[0],n=e[1];return Object(c.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(t){n(t.data)}))}),[]),Object(b.jsx)("div",{className:"App",children:Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)("a",{className:"navbar-brand",href:"#",children:"Navbar"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(b.jsx)("div",{className:"navbar-nav",children:a.map((function(t){return Object(b.jsx)(l.b,{className:"nav-link",to:{pathname:"/category/".concat(t.id,"/"),fromDashboard:!1},children:t.name})}))})})]})})})};var h=function(t){var e=t.match,a=Object(c.useState)({}),n=Object(r.a)(a,2),s=n[0],i=n[1],o=Object(c.useState)([]),d=Object(r.a)(o,2),h=d[0],p=d[1],u=e.params.id;return Object(c.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/category/".concat(u,"/")}).then((function(t){i(t.data),p(t.data.posts)}))}),[u]),Object(b.jsxs)("div",{children:["Category with id ",s.id,Object(b.jsxs)("p",{children:["Category: ",s.name]}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{class:"row",children:h.map((function(t){return Object(b.jsxs)("div",{className:"col-md-4",children:[Object(b.jsx)("h5",{className:"card-title",children:t.title}),Object(b.jsx)("p",{className:"card-text",children:t.content}),Object(b.jsx)(l.b,{to:{pathname:"/posts/".concat(t.id),fromDashboard:!1},children:"\u0414\u0435\u0442\u0430\u043b\u0438"})]},t.id)}))})]})};var p=function(t){var e=t.match,a=Object(c.useState)({}),n=Object(r.a)(a,2),s=n[0],i=n[1],o=e.params.id;return Object(c.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/blogpost/".concat(o,"/")}).then((function(t){i(t.data)}))}),[o]),Object(b.jsxs)("div",{children:["Post with id ",s.id,Object(b.jsxs)("p",{children:["Title: ",Object(b.jsx)("strong",{children:s.content})]}),Object(b.jsx)("img",{src:"http://127.0.0.1:8000/images/{this.props.post.image}",alt:"hello image",height:"200"})]})},u=a(2);var O=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(l.a,{children:[Object(b.jsx)(d,{}),Object(b.jsxs)(u.c,{children:[Object(b.jsx)(u.a,{path:"/category/:id/",exact:!0,component:h}),Object(b.jsx)(u.a,{path:"/posts/:id/",exact:!0,component:p})]})]})})},m=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,60)).then((function(e){var a=e.getCLS,c=e.getFID,n=e.getFCP,s=e.getLCP,i=e.getTTFB;a(t),c(t),n(t),s(t),i(t)}))};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),m()}},[[59,1,2]]]);
//# sourceMappingURL=main.e5a4314b.chunk.js.map