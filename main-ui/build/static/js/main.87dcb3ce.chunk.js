(this["webpackJsonpmain-ui"]=this["webpackJsonpmain-ui"]||[]).push([[0],{50:function(e,t,c){},51:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),i=c(20),n=c.n(i),r=(c(50),c(51),c(31),c(15)),j=c(19),l=c.n(j),o=c(14),d=c(17),b=c(11),h=c(9),m=c(26),O=c(1);var x=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){l()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(e){a(e.data)}))}),[]),Object(O.jsxs)("div",{className:"App",children:[Object(O.jsxs)(d.a,{children:[Object(O.jsx)("br",{}),Object(O.jsxs)(b.a,{children:[Object(O.jsx)(h.a,{}),Object(O.jsx)(h.a,{xs:4,children:Object(O.jsx)("h1",{children:"Blog"})}),Object(O.jsxs)(h.a,{className:"col-4 d-flex justify-content-end align-items-center",children:[Object(O.jsx)(m.a,{variant:"outline-secondary",children:"Sign up"})," "]})]}),Object(O.jsx)("hr",{})]}),Object(O.jsx)(d.a,{children:Object(O.jsx)(b.a,{children:Object(O.jsx)("div",{className:"position-sticky",style:{top:"2rem"},children:Object(O.jsx)(h.a,{children:Object(O.jsxs)("div",{className:"nav-scroller py-1 mb-2",children:[Object(O.jsxs)("nav",{className:"nav d-flex justify-content-between",children:[Object(O.jsx)(o.b,{className:"p-2 link-secondary",to:{pathname:"/",fromDashboard:!1},children:Object(O.jsx)("h6",{children:Object(O.jsx)("u",{children:"BlogNews"})})}),c.map((function(e){return Object(O.jsx)(o.b,{className:"p-2 link-secondary",to:{pathname:"/category/".concat(e.id,"/"),fromDashboard:!1},children:Object(O.jsx)("h6",{children:Object(O.jsx)("u",{children:e.name})})})}))]}),Object(O.jsx)("hr",{})]})})})})})]})},u=c(18);var p=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){l()({method:"GET",url:"http://127.0.0.1:8000/api/posts-index/"}).then((function(e){a(e.data)}))}),[]),Object(O.jsxs)(d.a,{children:[Object(O.jsx)(b.a,{children:Object(O.jsxs)(u.a,{className:"text-white rounded bg-dark",children:[Object(O.jsx)(u.a.Header,{children:"Quote"}),Object(O.jsx)(u.a.Body,{children:Object(O.jsxs)("blockquote",{className:"blockquote mb-0",children:[Object(O.jsxs)("p",{children:[" ","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."," "]}),Object(O.jsxs)("footer",{className:"blockquote-footer",children:["Someone famous in ",Object(O.jsx)("cite",{title:"Source Title",children:"Source Title"})]})]})})]})}),Object(O.jsxs)(b.a,{children:[Object(O.jsxs)(h.a,{sm:8,children:[Object(O.jsx)("br",{}),Object(O.jsx)("h3",{className:"pb-4 mb-4 fst-italic border-bottom",children:"Top News"}),Object(O.jsx)("div",{className:"row row-cols-1 row-cols-md-3",children:c.map((function(e){return Object(O.jsx)("div",{className:"col mb-4",children:Object(O.jsxs)("div",{className:"card h-100",children:[Object(O.jsx)("img",{src:e.image,className:"card-img-top",alt:"..."}),Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsx)("h5",{className:"card-title",children:e.title}),Object(O.jsx)("p",{className:"card-text",children:e.description})]}),Object(O.jsx)("div",{className:"card-footer",children:Object(O.jsx)(o.b,{to:{pathname:"/posts/".concat(e.id,"/"),fromDashboard:!1},children:"Read more"})})]})})}))})]}),Object(O.jsxs)(h.a,{sm:4,children:[Object(O.jsx)("br",{}),Object(O.jsx)("div",{className:"position-sticky",style:{top:"2rem"},children:Object(O.jsxs)("div",{className:"p-4 mb-3 bg-light rounded",children:[Object(O.jsx)("h4",{className:"fst-italic",children:"About"}),Object(O.jsx)("p",{className:"mb-0",children:"Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you."})]})})]})]})]})};var f=function(e){var t=e.match,c=Object(s.useState)({}),a=Object(r.a)(c,2),i=a[0],n=a[1],j=Object(s.useState)([]),m=Object(r.a)(j,2),x=m[0],u=m[1],p=t.params.id;return Object(s.useEffect)((function(){l()({method:"GET",url:"http://127.0.0.1:8000/api/category/".concat(p,"/")}).then((function(e){n(e.data),u(e.data.posts)}))}),[p]),Object(O.jsx)(d.a,{fluid:!0,children:Object(O.jsxs)(b.a,{children:[Object(O.jsxs)(h.a,{sm:8,children:[Object(O.jsx)("h3",{className:"pb-4 mb-4 fst-italic border-bottom",children:i.name}),Object(O.jsx)("div",{className:"row row-cols-1 row-cols-md-3",children:x.map((function(e){return Object(O.jsx)("div",{className:"col mb-4",children:Object(O.jsxs)("div",{className:"card h-100",children:[Object(O.jsx)("img",{src:e.image,className:"card-img-top",alt:"..."}),Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsx)("h5",{className:"card-title",children:e.title}),Object(O.jsx)("p",{className:"card-text",children:e.description})]}),Object(O.jsx)("div",{className:"card-footer",children:Object(O.jsx)(b.a,{children:Object(O.jsx)(h.a,{children:Object(O.jsx)(o.b,{to:{pathname:"/posts/".concat(e.id,"/"),fromDashboard:!1},children:"Read more"})})})})]})})}))})]}),Object(O.jsxs)(h.a,{sm:4,children:[Object(O.jsx)("br",{}),Object(O.jsx)("div",{className:"position-sticky",style:{top:"2rem"},children:Object(O.jsxs)("div",{className:"p-4 mb-3 bg-light rounded",children:[Object(O.jsx)("h4",{className:"fst-italic",children:"About"}),Object(O.jsx)("p",{className:"mb-0",children:"Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you."})]})})]})]})})},N=c(23),g=c(42);var v=function(e){var t=e.match,c=Object(s.useState)({}),a=Object(r.a)(c,2),i=a[0],n=a[1],j=t.params.id,m=Object(s.useState)([]),x=Object(r.a)(m,2),p=x[0],f=x[1],v=Object(s.useState)([]),y=Object(r.a)(v,2),k=y[0],w=y[1];return Object(s.useEffect)((function(){l()({method:"GET",url:"http://127.0.0.1:8000/api/blogpost/".concat(j,"/")}).then((function(e){n(e.data),w(e.data.related_posts),f(e.data.images)}))}),[j]),Object(O.jsxs)(d.a,{children:[Object(O.jsxs)(b.a,{children:[Object(O.jsx)(h.a,{children:Object(O.jsx)(g.a,{src:i.image,fluid:!0})}),Object(O.jsx)(h.a,{children:Object(O.jsxs)(u.a,{className:"text-white rounded bg-secondary",children:[Object(O.jsx)(u.a.Header,{children:i.title}),Object(O.jsx)(u.a.Body,{children:Object(O.jsxs)("blockquote",{className:"blockquote mb-0",children:[Object(O.jsx)("p",{children:i.description}),Object(O.jsx)("footer",{className:"blockquote-footer",children:Object(O.jsx)("cite",{title:"Source Title",children:i.pub_date})})]})})]})})]}),Object(O.jsx)("hr",{}),Object(O.jsxs)(b.a,{children:[Object(O.jsxs)(h.a,{sm:8,children:[Object(O.jsx)(u.a,{body:!0,border:"dark",children:i.content}),Object(O.jsx)("br",{}),Object(O.jsx)(b.a,{children:Object(O.jsx)(N.a,{className:"carousel-inner",role:"listbox",style:{width:"100%",height:"600px"},children:p.map((function(e){return Object(O.jsxs)(N.a.Item,{children:[Object(O.jsx)("img",{src:e.image,className:"d-block w-100"}),Object(O.jsx)(N.a.Caption,{children:Object(O.jsx)("p",{children:i.title})})]})}))})})]}),Object(O.jsx)(h.a,{sm:4,children:Object(O.jsxs)("div",{className:"position-sticky",style:{top:"2rem",width:"23rem"},children:[Object(O.jsxs)("div",{className:"p-4 mb-3 bg-light rounded ",style:{width:"23rem"},children:[Object(O.jsx)("h4",{className:"fst-italic",children:"Card Title"}),Object(O.jsx)("p",{className:"mb-0",children:"Some quick example text to build on the card title and make up the bulk of the card's content."})]}),k.map((function(e){return Object(O.jsxs)("div",{className:"p-4 mb-3 bg-light rounded card border-info ",style:{width:"23rem"},children:[Object(O.jsx)("h4",{className:"fst-italic",children:e.title}),Object(O.jsx)("p",{className:"mb-0",children:e.description}),Object(O.jsx)(o.b,{className:"btn btn-outline-info",to:{pathname:"/posts/".concat(e.id,"/"),fromDashboard:!1},children:"Read"})]})}))]})})]})]})},y=c(6);var k=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)(o.a,{children:[Object(O.jsx)(x,{}),Object(O.jsxs)(y.c,{children:[Object(O.jsx)(y.a,{path:"/category/:id/",exact:!0,component:f}),Object(O.jsx)(y.a,{path:"/posts/:id/",exact:!0,component:v}),Object(O.jsx)(y.a,{path:"/",exact:!0,component:p})]})]})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,84)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,n=t.getTTFB;c(e),s(e),a(e),i(e),n(e)}))};n.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(k,{})}),document.getElementById("root")),w()}},[[76,1,2]]]);
//# sourceMappingURL=main.87dcb3ce.chunk.js.map