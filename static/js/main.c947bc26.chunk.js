(this.webpackJsonpdocs=this.webpackJsonpdocs||[]).push([[0],{125:function(e,n,t){},129:function(e,n,t){"use strict";t.r(n);var a=t(12),r=t(2),i=t.n(r),o=t(104),s=t.n(o),c=t(96),l=t(138),h=t(137),d=t(110),p=t(139),u=t(109),j=t(105),g=t(99),m=t(108),b=t.p+"static/media/logo.db5d4e82.svg",v={fontFamily:"Consolas, monospace, sans-serif",fontSize:11,height:"100%",resize:"none",width:"100%"},O=function(e){var n=e.isValid,t=e.value,r=e.onChange;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("textarea",{className:n?"form-control":"form-control is-invalid",style:v,value:t,onChange:function(e){var n=e.target.value;r(n)}})})},f=function(e){var n=e.isValid,t=e.onChange,r=e.value;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("textarea",{value:r,className:n?"form-control":"form-control is-invalid",style:v,onChange:function(e){var n=e.target.value;t(n)}})})},x=(t(125),function(){var e,n,t,i=localStorage.getItem("graphql-to-openapi:schemaString"),o=localStorage.getItem("graphql-to-openapi:inputQuery"),s=Object(r.useState)(null!==i&&void 0!==i?i:'type Query {\n  query: Query\n\n  """\n  An array of strings\n  """\n  arrayOfStrings(\n    input: String!,\n    otherInput: String!\n  ): [String!]!\n}'),x=Object(c.a)(s,2),y=x[0],w=x[1],S=Object(r.useState)(null!==o&&void 0!==o?o:"query scalarQuery (\n  $input: String!,\n  $otherInput: String!\n) {\n  arrayOfStrings(input: $input, otherInput: $otherInput)\n}"),N=Object(c.a)(S,2),A=N[0],k=N[1],q=Object(r.useState)(!0),Q=Object(c.a)(q,2),C=Q[0],L=Q[1];Object(r.useEffect)((function(){localStorage.setItem("graphql-to-openapi:schemaString",y)}),[y]),Object(r.useEffect)((function(){localStorage.setItem("graphql-to-openapi:inputQuery",A)}),[A]);try{var I=Object(j.graphqlToOpenApi)({schemaString:y,inputQuery:A,onUnknownScalar:function(){return{type:"string"}}});e=I.openApiSchema,n=I.schemaError,t=I.queryErrors}catch(G){n=G}var W=!n&&!t,E="";return e&&C?E=Object(m.stringify)(JSON.parse(JSON.stringify(e))):e&&(E=JSON.stringify(e,null,2)),Object(a.jsx)("div",{className:"GraphQLToOpenApiDocs",children:Object(a.jsxs)("div",{className:"container-fluid",children:[Object(a.jsxs)("header",{className:"GraphQLToOpenApiDocs-header",children:[Object(a.jsx)("img",{height:50,src:b,className:"GraphQLToOpenApiDocs-logo",alt:"logo"}),Object(a.jsx)("a",{className:"float-right",href:"https://npmjs.com/graphql-to-openapi",children:Object(a.jsx)("img",{alt:"npm link",src:"https://img.shields.io/npm/v/graphql-to-openapi.svg"})})]}),Object(a.jsxs)("div",{style:{height:"calc(50vh - 100px)"},className:"row",children:[Object(a.jsx)("div",{className:"col",children:Object(a.jsxs)(l.a.Group,{style:{height:"100%"},children:[Object(a.jsx)(l.a.Label,{children:"GraphQL Schema"}),Object(a.jsx)(O,{isValid:!n,onChange:w,value:y})]})}),Object(a.jsx)("div",{className:"col",children:Object(a.jsxs)(l.a.Group,{style:{height:"100%"},children:[Object(a.jsx)(l.a.Label,{children:"GraphQL Query"}),Object(a.jsx)(f,{isValid:!t,onChange:k,value:A})]})})]}),Object(a.jsx)("p",{children:"\xa0"}),Object(a.jsx)("div",{className:"row",style:{height:"calc(50vh - 50px)"},children:Object(a.jsxs)("div",{className:"col",children:[Object(a.jsxs)("div",{className:"row",style:{marginBottom:5},children:[Object(a.jsxs)(h.a,{size:"sm",className:"col",children:[Object(a.jsx)(h.a.Prepend,{children:Object(a.jsx)(d.a,{disabled:!0,variant:"link",children:"OpenAPI Schema"})}),Object(a.jsxs)(p.a,{name:"outputType",type:"radio",size:"sm",value:C,onChange:L,children:[Object(a.jsx)(u.a,{value:!0,children:"YAML"}),Object(a.jsx)(u.a,{value:!1,children:"JSON"})]})]}),W?Object(a.jsx)("span",{className:"col",style:{textAlign:"right"},children:Object(a.jsx)(g.b,{icon:g.a})}):Object(a.jsxs)("span",{className:"col",style:{textAlign:"right"},children:[Object(a.jsx)("span",{className:"spinner-grow",style:{width:"1em",height:"1em"},children:Object(a.jsx)("span",{className:"sr-only",children:"Loading..."})})," ","Waiting for valid schema and query..."]})]}),e?Object(a.jsx)("textarea",{className:"form-control",readOnly:!0,style:v,value:E}):Object(a.jsx)("textarea",{readOnly:!0,disabled:!0,style:v,className:"form-control",placeholder:"Please supply a schema and query above"})]})})]})})}),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(127);s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/graphql-to-openapi",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/graphql-to-openapi","/service-worker.js");y?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):w(n,e)}))}}()}},[[129,1,2]]]);
//# sourceMappingURL=main.c947bc26.chunk.js.map