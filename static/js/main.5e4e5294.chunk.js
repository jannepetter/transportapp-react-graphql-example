(this.webpackJsonptransportapp=this.webpackJsonptransportapp||[]).push([[0],{28:function(e,t,n){e.exports=n(47)},33:function(e,t,n){},42:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),c=n(21),l=n.n(c),o=n(10),i=n(12),u=(n(33),n(18)),s=n.n(u),m=(n(42),n(14)),d=n(15),p=n.n(d);function g(){var e=Object(m.a)(["\nquery route($id:String!){\n  route(id:$id){\n    trips {\n      stoptimes {\n        stop{\n          name\n          platformCode\n        }\n        scheduledArrival\n        scheduledDeparture\n        arrivalDelay\n      }\n    }\n  }\n}\n"]);return g=function(){return e},e}var f=p()(g()),v=function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],l=n[1],u=Object(o.a)(f,{variables:{id:e.route.gtfsId}}),m=function(){l(!c)};if(!c||u.loading)return r.a.createElement("div",null,r.a.createElement("span",{onClick:m},"".concat(e.route.longName," ").concat(e.route.shortName)),r.a.createElement("br",null));var d,p=u.data.route.trips,g=function(e){var t=String(Math.floor(e/3600)%24),n=String(e%3600/60);return 1===t.length&&(t="0"+t),1===n.length&&(n="0"+n),"".concat(t,":").concat(n)},v=function(e){var t=e.substring(0,1).toUpperCase(),n=e.substring(1).toLowerCase();return t.concat(n)},h=function(e,t){return"first"===t?"".concat(v(e.stop.name)," \t leaving ").concat(g(e.scheduledDeparture)):"last"===t?"".concat(v(e.stop.name)," \t arrives ").concat(g(e.scheduledArrival)):"".concat(v(e.stop.name)," \t arrives ").concat(g(e.scheduledArrival),", leaves ").concat(g(e.scheduledDeparture)," ")};return r.a.createElement("div",{className:"canvas"},r.a.createElement("span",{onClick:m},"".concat(e.route.longName," ").concat(e.route.shortName)),r.a.createElement("br",null),(d=p,r.a.createElement("div",null,d.map((function(e){return function(e){return r.a.createElement("div",{className:"stoplist",key:s.a.generate()},r.a.createElement("li",{className:"listItem"},h(e[0],"first")),e.slice(1,e.length-1).map((function(e){return r.a.createElement("li",{className:"listItem",key:s.a.generate()},h(e))})),r.a.createElement("li",{className:"listItem"},h(e[e.length-1],"last")),r.a.createElement("br",null))}(e.stoptimes)})))))},h=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],l=n[1],o=Object(a.useState)(""),u=Object(i.a)(o,2),s=u[0],m=u[1],d=[];if(e.agency.loading)return r.a.createElement("div",null,"loading");var p=e.agency.data.agency.routes;if(c.length>3&&s.length>3){var g=c.trim().concat(" - ".concat(s.trim()));d=p.filter((function(e){return e.longName.toLowerCase().includes(g.toLowerCase())}))}return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("input",{className:"headerInput",onChange:function(e){return l(e.target.value)},placeholder:"starting point"}),r.a.createElement("span",null,"to"),r.a.createElement("input",{className:"headerInput",onChange:function(e){return m(e.target.value)},placeholder:"destination"})),d.map((function(e){return r.a.createElement(v,{key:e.gtfsId,route:e})})))};function E(){var e=Object(m.a)(['\t\n{\n  agency(id:"MATKA:VR") {\n    routes{\n      gtfsId\n      longName\n      shortName\n    }\n  }\n}\n']);return E=function(){return e},e}var b=p()(E()),N=function(){var e=Object(o.a)(b);return r.a.createElement("div",null,r.a.createElement(h,{agency:e}))},j=n(6),y=n(9),O=n(26),C=n(27),I=Object(C.a)({uri:"https://api.digitransit.fi/routing/v1/routers/finland/index/graphql"}),k=new y.a({link:I,cache:new O.a});l.a.render(r.a.createElement(j.a,{client:k},r.a.createElement(N,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.5e4e5294.chunk.js.map