(this["webpackJsonpmain-ui"]=this["webpackJsonpmain-ui"]||[]).push([[0],{13:function(t,e,a){"use strict";a.r(e);var n=a(8),c=a(0),r=a(10),s=a.n(r),i=a(11),o=a(1);e.default=function(t){var e=t.match,r=Object(c.useState)({}),l=Object(n.a)(r,2),d=l[0],j=l[1],b=Object(c.useState)([]),u=Object(n.a)(b,2),h=u[0],O=u[1],v=e.params.id;return Object(c.useEffect)((function(){s()({method:"GET",url:"http://127.0.0.1:8000/api/category/".concat(v,"/")}).then((function(t){j(t.data),O(t.data.posts)}))}),[v]),Object(o.jsxs)("div",{children:["Category with id ",d.id,Object(o.jsxs)("p",{children:["Category: ",d.name]}),Object(o.jsx)("hr",{}),Object(o.jsx)("div",{class:"row",children:h.map((function(t){return Object(o.jsxs)("div",{className:"col-md-4",children:[Object(o.jsx)("h5",{className:"card-title",children:t.title}),Object(o.jsx)("img",{src:a(60)("".concat(t.image)),alt:t.title}),Object(o.jsx)("p",{className:"card-text",children:t.content}),Object(o.jsx)(i.b,{to:{pathname:"/posts/".concat(t.id),fromDashboard:!1},children:"\u0414\u0435\u0442\u0430\u043b\u0438"})]},t.id)}))})]})}},34:function(t,e,a){},35:function(t,e,a){},60:function(t,e,a){var n={"./CategoryDetail":13,"./CategoryDetail.js":13};function c(t){var e=r(t);return a(e)}function r(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}c.keys=function(){return Object.keys(n)},c.resolve=r,t.exports=c,c.id=60},61:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=a(28),s=a.n(r),i=(a(34),a(35),a(18),a(8)),o=a(10),l=a.n(o),d=a(11),j=a(1);var b=function(){var t=Object(n.useState)([]),e=Object(i.a)(t,2),a=e[0],c=e[1];return Object(n.useEffect)((function(){l()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(t){c(t.data)}))}),[]),Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)("a",{className:"navbar-brand",href:"#",children:"Navbar"}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(j.jsx)("div",{className:"navbar-nav",children:a.map((function(t){return Object(j.jsx)(d.b,{className:"nav-link",to:{pathname:"/category/".concat(t.id,"/"),fromDashboard:!1},children:t.name})}))})})]})})})},u=a(13);var h=function(t){var e=t.match,a=Object(n.useState)({}),c=Object(i.a)(a,2),r=c[0],s=c[1],o=e.params.id;return Object(n.useEffect)((function(){l()({method:"GET",url:"http://127.0.0.1:8000/api/blogpost/".concat(o,"/")}).then((function(t){s(t.data)}))}),[o]),Object(j.jsxs)("div",{children:["Post with id ",r.id,Object(j.jsxs)("p",{children:["Title: ",Object(j.jsx)("strong",{children:r.title})]})]})},O=a(2);var v=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(d.a,{children:[Object(j.jsx)(b,{}),Object(j.jsxs)(O.c,{children:[Object(j.jsx)(O.a,{path:"/category/:id/",exact:!0,component:u.default}),Object(j.jsx)(O.a,{path:"/posts/:id/",exact:!0,component:h})]})]})})},p=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,62)).then((function(e){var a=e.getCLS,n=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;a(t),n(t),c(t),r(t),s(t)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),p()}},[[61,1,2]]]);
//# sourceMappingURL=main.f3522a4e.chunk.js.map