(this.webpackJsonpmy_aap=this.webpackJsonpmy_aap||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(4),l=c.n(s),o=(c(9),c(2)),r=(c(10),c(0));function i(e){return Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode," "),children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(r.jsxs)("div",{className:"form-check form-switch my-2 text-".concat("light"===e.mode?"dark":"light"),children:[Object(r.jsx)("input",{className:"form-check-input ",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(r.jsxs)("label",{className:"form-check-label ",htmlFor:"flexSwitchCheckDefault",children:["Enable","light"===e.mode?" Dark ":" Light ","mode"]})]})]})]})})}function b(e){var t=Object(a.useState)(""),c=Object(o.a)(t,2),n=c[0],s=c[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"container ",style:{color:"dark"===e.mode?"white":"black"},children:[Object(r.jsx)("h2",{children:e.heading}),Object(r.jsx)("div",{className:"mb-2",children:Object(r.jsx)("textarea",{className:"form-control",value:n,onChange:function(e){console.log("On change"),s(e.target.value)},style:{backgroundColor:"dark"===e.mode?"gray":"white",color:"dark"===e.mode?"grey":"black"},id:"myBox",rows:"8"})}),Object(r.jsx)("button",{disabled:0===n.length,type:"button",className:"btn btn-outline-success mx-1 my-1",onClick:function(){console.log("Uppercase was clicked"+n);var t=n.toUpperCase();s(t),e.showAlert("Converted to UpeerCase","success")},children:"Convert to Uppercase"}),Object(r.jsx)("button",{disabled:0===n.length,type:"button",className:"btn btn-outline-success mx-1 my-1",onClick:function(){console.log("Lowercase was clicked"+n);var t=n.toLowerCase();s(t),e.showAlert("Converted to LowerCase","success")},children:"Convert to Lowercase"}),Object(r.jsx)("button",{disabled:0===n.length,type:"button",className:"btn btn-outline-success mx-1 my-1",onClick:function(){s(""),e.showAlert("Text Cleared","success")},children:"Clear"}),Object(r.jsx)("button",{disabled:0===n.length,type:"button",className:"btn btn-outline-success mx-1 my-1",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Text Cpoied","success")},children:"CopyText"}),Object(r.jsx)("button",{disabled:0===n.length,type:"button",className:"btn btn-outline-success mx-1 my-1",onClick:function(){var e=n.split(/[ ]+/);s(e.join(" "))},children:"Remove Extra Spaces"})]}),Object(r.jsxs)("div",{className:"container my-2",style:{color:"dark"===e.mode?"white":"black"},children:[Object(r.jsx)("h3",{children:"Your text Summry"}),Object(r.jsxs)("p",{children:[n.split(/\s+/).filter((function(e){return 0!==e.length})).length," words and ",n.length," characters "]}),Object(r.jsx)("h4",{children:"Preview"}),Object(r.jsx)("p",{children:n})]})]})}var d=function(e){return Object(r.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(r.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(r.jsx)("strong",{children:e.alert.type}),"  :",e.alert.msg]})})};var u=function(){var e=Object(a.useState)("light"),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(null),l=Object(o.a)(s,2),u=l[0],h=l[1],j=function(e,t){h({msg:e,type:t}),setTimeout((function(){h(null)}),2e3)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i,{title:"TextTransform",aboutText:"AboutUs",mode:c,toggleMode:function(){"light"===c?(n("dark"),document.body.style.backgroundColor="grey",j("Dark mode has been Enabled","success")):(n("light"),document.body.style.backgroundColor="white",j("Light mode has been Enabled","success"))}}),Object(r.jsx)(d,{alert:u}),Object(r.jsx)("div",{className:"container my-3  ",children:Object(r.jsx)(b,{heading:"TextTransform -Word Counter,Character Counter,Uppercase to Lowercase, Lowercase to Uppercase",showAlert:j})})]})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,l=t.getTTFB;c(e),a(e),n(e),s(e),l(e)}))};l.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(u,{})}),document.getElementById("root")),h()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.a504a594.chunk.js.map