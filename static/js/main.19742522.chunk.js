(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var a,s=c(6),n=c.n(s),l=c(4),r=c(2),i=c(3),o=c.n(i),d=c(1),j=(c(12),c(13),c(0)),u=function(e){var t=e.todos,c=e.selectedTodo,a=e.selectTodo;return Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){var t=e.id,s=e.title,n=e.completed;return Object(j.jsxs)("tr",{"data-cy":"todo",className:c&&t===c.id?"has-background-info-light":"",children:[Object(j.jsx)("td",{className:"is-vcentered",children:t}),n?Object(j.jsx)("td",{className:"is-vcentered",children:Object(j.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(j.jsx)("i",{className:"fas fa-check"})})}):Object(j.jsx)("td",{className:"is-vcentered"}),Object(j.jsx)("td",{className:"is-vcentered is-expanded",children:Object(j.jsx)("p",{className:n?"has-text-success":"has-text-danger",children:s})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return a(e)},children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:c&&t!==c.id||!c?"far fa-eye":"far fa-eye-slash"})})})})]},t)}))})]})};!function(e){e.all="all",e.active="active",e.completed="completed"}(a||(a={}));var b=function(e){var t=e.selectParametr,c=e.handleSelect,s=e.query,n=e.handleSearch,l=e.cleanSearch;return Object(j.jsxs)("form",{className:"field has-addons",children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",children:Object(j.jsxs)("select",{value:t,"data-cy":"statusSelect",onChange:c,children:[Object(j.jsx)("option",{value:a.all,children:"All"}),Object(j.jsx)("option",{value:a.active,children:"Active"}),Object(j.jsx)("option",{value:a.completed,children:"Completed"})]})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:s,onChange:n}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),s.length>0&&Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(j.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete","aria-label":"Mute volume",onClick:l})})]})]})},h=(c(15),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})});function m(e){var t,c="".concat("https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e,".json");return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var O=function(e){return m("/users/".concat(e))},x=function(e){var t=e.selectedTodo,c=e.deleteSelectedTodo,a=Object(d.useState)(!1),s=Object(r.a)(a,2),n=s[0],i=s[1],u=Object(d.useState)(null),b=Object(r.a)(u,2),m=b[0],x=b[1],f=t.id,v=t.title,p=t.completed,N=t.userId,y=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.prev=1,e.next=4,O(N);case 4:t=e.sent,x(t),i(!1),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),new Error("error");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){y()}),[]),Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),n?Object(j.jsx)(h,{}):Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(f)}),Object(j.jsx)("button",{type:"button","aria-label":"Mute volume",className:"delete","data-cy":"modal-close",onClick:function(){return c()}})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:v}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[p?Object(j.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(j.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",m&&Object(j.jsx)("a",{href:"mailto:".concat(null===m||void 0===m?void 0:m.email),children:null===m||void 0===m?void 0:m.name})]})]})]})]})},f=function(){var e=Object(d.useState)(!1),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(d.useState)([]),i=Object(r.a)(n,2),O=i[0],f=i[1],v=Object(d.useState)(null),p=Object(r.a)(v,2),N=p[0],y=p[1],g=Object(d.useState)(a.all),S=Object(r.a)(g,2),k=S[0],w=S[1],T=Object(d.useState)([]),C=Object(r.a)(T,2),E=C[0],_=C[1],L=Object(d.useState)(""),P=Object(r.a)(L,2),B=P[0],I=P[1],q=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.prev=1,e.next=4,m("/todos");case 4:t=e.sent,f(t),s(!1),_(t),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(1),new Error("error");case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}();Object(d.useEffect)((function(){q()}),[]);Object(d.useEffect)((function(){var e=E.filter((function(e){return e.title.toLowerCase().includes(B.toLowerCase())})).filter((function(e){switch(k){case a.active:return!e.completed;case a.completed:return e.completed;default:return e}}));f(e)}),[k,B,E]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(b,{handleSelect:function(e){var t=e.target.value;w(t)},selectParametr:k,query:B,handleSearch:function(e){var t=e.target.value;I(t)},cleanSearch:function(){I("")}})}),Object(j.jsxs)("div",{className:"block",children:[c&&Object(j.jsx)(h,{}),(!c||0!==O.length)&&Object(j.jsx)(u,{todos:O,selectedTodo:N,selectTodo:function(e){y(e)}})]})]})})}),N&&Object(j.jsx)(x,{selectedTodo:N,deleteSelectedTodo:function(){y(null)}})]})};n.a.render(Object(j.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.19742522.chunk.js.map