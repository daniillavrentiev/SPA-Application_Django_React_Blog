(this["webpackJsonpmain-ui"]=this["webpackJsonpmain-ui"]||[]).push([[0],{55:function(e,t,c){},56:function(e,t,c){},84:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(23),j=c.n(s),i=(c(55),c(56),c(39),c(14)),r=c(21),d=c.n(r),l=c(26),b=c(24),h=c(15),o=c(49),O=c(38),x=c(37),m=c(2);var u=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(e){n(e.data)}))}),[]),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)(l.a,{children:[Object(m.jsx)("br",{}),Object(m.jsxs)(b.a,{children:[Object(m.jsx)(h.a,{}),Object(m.jsx)(h.a,{xs:4,children:Object(m.jsx)("h1",{children:"Blog"})}),Object(m.jsxs)(h.a,{className:"col-4 d-flex justify-content-end align-items-center",children:[Object(m.jsx)(o.a,{variant:"outline-secondary",children:"Sign up"})," "]})]}),Object(m.jsx)("hr",{})]}),Object(m.jsx)(l.a,{children:Object(m.jsx)(b.a,{children:Object(m.jsxs)(O.a,{bg:"light",variant:"light",children:[Object(m.jsx)(O.a.Brand,{href:"#home",children:"Navbar"}),Object(m.jsx)(x.a,{className:"nav d-flex justify-content-between",children:Object(m.jsx)(b.a,{children:c.map((function(e){return Object(m.jsx)(h.a,{className:"p-2 link-secondary",children:Object(m.jsx)(x.a.Link,{to:{pathname:"/category/".concat(e.id,"/"),fromDashboard:!1},children:e.name})})}))})})]})})})]})},p=c(25);var f=function(e){var t=e.match,c=Object(a.useState)({}),n=Object(i.a)(c,2),s=n[0],j=n[1],r=Object(a.useState)([]),l=Object(i.a)(r,2),b=l[0],h=l[1],o=t.params.id;return Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/category/".concat(o,"/")}).then((function(e){j(e.data),h(e.data.posts)}))}),[o]),Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:s.name}),Object(m.jsx)("hr",{}),Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row g-2",children:b.map((function(e){return Object(m.jsx)("div",{className:"col-6",children:Object(m.jsx)("div",{className:"card mb-3",style:{"max-width":"540px"},children:Object(m.jsxs)("div",{className:"row g-0",children:[Object(m.jsx)("div",{className:"col-md-4",children:Object(m.jsx)("img",{className:"card-img-top",src:e.image,alt:e.title})}),Object(m.jsx)("div",{className:"col-md-8",children:Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("h5",{className:"card-title",children:e.title}),Object(m.jsx)("p",{className:"card-text",children:e.content}),Object(m.jsx)("p",{className:"card-text",children:Object(m.jsx)("small",{className:"text-muted",children:e.pub_date})}),Object(m.jsx)(p.b,{className:"nav-link",to:{pathname:"/posts/".concat(e.id,"/"),fromDashboard:!1},children:"Learn more"})]})})]})})})}))})})]})},g=c(31);var v=function(e){var t=e.match,c=Object(a.useState)({}),n=Object(i.a)(c,2),s=n[0],j=n[1],r=t.params.id,o=Object(a.useState)([]),O=Object(i.a)(o,2),x=O[0],u=O[1];return Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/blogpost/".concat(r,"/")}).then((function(e){j(e.data),u(e.data.images)}))}),[r]),Object(m.jsx)(l.a,{children:Object(m.jsxs)(b.a,{children:[Object(m.jsx)("hr",{}),Object(m.jsx)(h.a,{md:6,children:Object(m.jsx)(g.a,{fade:!0,children:x.map((function(e){return Object(m.jsxs)(g.a.Item,{children:[Object(m.jsx)("img",{src:e.image,className:"d-block w-100"}),Object(m.jsx)(g.a.Caption,{children:Object(m.jsx)("p",{children:s.title})})]})}))})}),Object(m.jsx)(h.a,{md:{span:0,offset:0},children:Object(m.jsx)("h4",{children:s.content})})]})})},N=c(7);var y=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)(p.a,{children:[Object(m.jsx)(u,{}),Object(m.jsxs)(N.c,{children:[Object(m.jsx)(N.a,{path:"/category/:id/",exact:!0,component:f}),Object(m.jsx)(N.a,{path:"/posts/:id/",exact:!0,component:v})]})]})})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,86)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,j=t.getTTFB;c(e),a(e),n(e),s(e),j(e)}))};j.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root")),S()}},[[84,1,2]]]);
//# sourceMappingURL=main.2a5404cc.chunk.js.map