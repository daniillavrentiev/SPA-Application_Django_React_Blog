(this["webpackJsonpmain-ui"]=this["webpackJsonpmain-ui"]||[]).push([[0],{40:function(e,t,a){},41:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(15),i=a.n(s),r=(a(40),a(41),a(22),a(12)),j=a(13),l=a.n(j),d=a(14),b=a(1);var o=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){l()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(e){n(e.data)}))}),[]),Object(b.jsx)("div",{className:"App",children:Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)("a",{className:"navbar-brand",href:"#",children:"Navbar"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(b.jsx)("div",{className:"navbar-nav",children:a.map((function(e){return Object(b.jsx)(d.b,{className:"nav-link",to:{pathname:"/category/".concat(e.id,"/"),fromDashboard:!1},children:e.name})}))})})]})})})};var h=function(e){var t=e.match,a=Object(c.useState)({}),n=Object(r.a)(a,2),s=n[0],i=n[1],j=Object(c.useState)([]),o=Object(r.a)(j,2),h=o[0],m=o[1],O=t.params.id;return Object(c.useEffect)((function(){l()({method:"GET",url:"http://127.0.0.1:8000/api/category/".concat(O,"/")}).then((function(e){i(e.data),m(e.data.posts)}))}),[O]),Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:s.name}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row g-2",children:h.map((function(e){return Object(b.jsx)("div",{className:"col-6",children:Object(b.jsx)("div",{className:"card mb-3",style:{"max-width":"540px"},children:Object(b.jsxs)("div",{className:"row g-0",children:[Object(b.jsx)("div",{className:"col-md-4",children:Object(b.jsx)("img",{className:"card-img-top",src:e.image,alt:e.title})}),Object(b.jsx)("div",{className:"col-md-8",children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h5",{className:"card-title",children:e.title}),Object(b.jsx)("p",{className:"card-text",children:e.content}),Object(b.jsx)("p",{className:"card-text",children:Object(b.jsx)("small",{className:"text-muted",children:e.pub_date})}),Object(b.jsx)(d.b,{className:"nav-link",to:{pathname:"/posts/".concat(e.id,"/"),fromDashboard:!1},children:"Learn more"})]})})]})})})}))})})]})},m=a(16),O=a(35),x=a(33),u=a(34);var p=function(e){var t=e.match,a=Object(c.useState)({}),n=Object(r.a)(a,2),s=n[0],i=n[1],j=t.params.id,d=Object(c.useState)([]),o=Object(r.a)(d,2),h=o[0],p=o[1];return Object(c.useEffect)((function(){l()({method:"GET",url:"http://127.0.0.1:8000/api/blogpost/".concat(j,"/")}).then((function(e){i(e.data),p(e.data.images)}))}),[j]),Object(b.jsx)(x.a,{children:Object(b.jsx)(u.a,{children:Object(b.jsxs)("div",{children:[Object(b.jsxs)("h1",{children:["Post with id ",s.id]}),Object(b.jsxs)("p",{children:["Title: ",Object(b.jsx)("strong",{children:s.content})]}),Object(b.jsx)("hr",{}),Object(b.jsx)(O.a,{md:{span:8,offset:2},children:Object(b.jsx)(m.a,{fade:!0,children:h.map((function(e){return Object(b.jsxs)(m.a.Item,{children:[Object(b.jsx)("img",{src:e.image,className:"d-block w-100"}),Object(b.jsx)(m.a.Caption,{children:Object(b.jsx)("p",{children:s.title})})]})}))})})]},s.id)})})},v=a(5);var g=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(d.a,{children:[Object(b.jsx)(o,{}),Object(b.jsxs)(v.c,{children:[Object(b.jsx)(v.a,{path:"/category/:id/",exact:!0,component:h}),Object(b.jsx)(v.a,{path:"/posts/:id/",exact:!0,component:p})]})]})})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,68)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),f()}},[[66,1,2]]]);
//# sourceMappingURL=main.4773a682.chunk.js.map