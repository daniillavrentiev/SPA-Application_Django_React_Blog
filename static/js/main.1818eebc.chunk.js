(this["webpackJsonpmain-ui"]=this["webpackJsonpmain-ui"]||[]).push([[0],{33:function(e,t,a){},34:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(27),i=a.n(s),r=(a(33),a(34),a(17),a(8)),l=a(10),d=a.n(l),j=a(11),o=a(1);var b=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(e){n(e.data)}))}),[]),Object(o.jsx)("div",{className:"App",children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:"Navbar"}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(o.jsx)("div",{className:"navbar-nav",children:a.map((function(e){return Object(o.jsx)(j.b,{className:"nav-link",to:{pathname:"/category/".concat(e.id,"/"),fromDashboard:!1},children:e.name})}))})})]})})})};var h=function(e){var t=e.match,a=Object(c.useState)({}),n=Object(r.a)(a,2),s=n[0],i=n[1],l=Object(c.useState)([]),b=Object(r.a)(l,2),h=b[0],m=b[1],O=t.params.id;return Object(c.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/category/".concat(O,"/")}).then((function(e){i(e.data),m(e.data.posts)}))}),[O]),Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:s.name}),Object(o.jsx)("hr",{}),Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row g-2",children:h.map((function(e){return Object(o.jsx)("div",{className:"col-6",children:Object(o.jsx)("div",{className:"card mb-3",style:{"max-width":"540px"},children:Object(o.jsxs)("div",{className:"row g-0",children:[Object(o.jsx)("div",{className:"col-md-4",children:Object(o.jsx)("img",{className:"card-img-top",src:e.image,alt:e.title})}),Object(o.jsx)("div",{className:"col-md-8",children:Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("h5",{className:"card-title",children:e.title}),Object(o.jsx)("p",{className:"card-text",children:e.content}),Object(o.jsx)("p",{className:"card-text",children:Object(o.jsx)("small",{className:"text-muted",children:e.pub_date})}),Object(o.jsx)(j.b,{className:"nav-link",to:{pathname:"/posts/".concat(e.id,"/"),fromDashboard:!1},children:"Learn more"})]})})]})})})}))})})]})};var m=function(e){var t=e.match,a=Object(c.useState)({}),n=Object(r.a)(a,2),s=n[0],i=n[1],l=t.params.id;return Object(c.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/blogpost/".concat(l,"/")}).then((function(e){i(e.data)}))}),[l]),Object(o.jsxs)("div",{children:[Object(o.jsxs)("h1",{children:["Post with id ",s.id]}),Object(o.jsxs)("p",{children:["Title: ",Object(o.jsx)("strong",{children:s.content})]}),s.images.map((function(e){return Object(o.jsx)("img",{src:e.image,className:"rounded float-start",alt:s.title})}))]},s.id)},O=a(2);var u=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(j.a,{children:[Object(o.jsx)(b,{}),Object(o.jsxs)(O.c,{children:[Object(o.jsx)(O.a,{path:"/category/:id/",exact:!0,component:h}),Object(o.jsx)(O.a,{path:"/posts/:id/",exact:!0,component:m})]})]})})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,60)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root")),x()}},[[59,1,2]]]);
//# sourceMappingURL=main.1818eebc.chunk.js.map