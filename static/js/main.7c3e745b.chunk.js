(this["webpackJsonpuscis-case-statistics"]=this["webpackJsonpuscis-case-statistics"]||[]).push([[0],{196:function(e,t,a){e.exports=a(382)},382:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(24),o=a.n(l),c=a(163),u=a(97),i=a.n(u),s=a(151),m=a(30),d=a(152),p=a.n(d),f=a(73),v=a(153),h=a.n(v),E=a(29),b=a(406),y=a(410),g=a(413),S=a(412),j=a(408),w=a(411),A=a(409);function O(e){var t;return null!==(t=f.a.Map.of("Case Was Received","#999900","Case Was Approved","#00FF00").get(e))&&void 0!==t?t:(new p.a).hex(e)}var x=function(){var e,t,a,l,o=Object(n.useState)("I-129"),u=Object(m.a)(o,2),d=u[0],p=u[1],v=Object(n.useState)("WAC"),x=Object(m.a)(v,2),k=x[0],I=x[1],C=Object(n.useState)(null),D=Object(m.a)(C,2),L=D[0],W=D[1],N=Object(n.useState)({}),Q=Object(m.a)(N,2),F=Q[0],U=Q[1];Object(n.useEffect)((function(){Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=U,e.next=3,fetch("https://raw.githubusercontent.com/vicdus/uscis-case-statistics/master/src/data.json");case 3:return e.next=5,e.sent.json();case 5:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 7:case"end":return e.stop()}}),e)})))()}),[]);var B=f.a.List(Object.entries(F).map((function(e){var t=Object(m.a)(e,2),a=t[0],n=t[1],r=a.split("|"),l=Object(m.a)(r,7);return{center:l[0],year:l[1],day:l[2],code:l[3],form:l[4],status:l[5],updateDay:l[6],count:n}}))),K=B.filter((function(e){return e.form===d&&e.center===k})),M=K.map((function(e){return Number.parseInt(e.updateDay)})).toSet().toList().sort(),H=K.map((function(e){return Number.parseInt(e.count)})).toSet().toList().sort(),J=K.map((function(e){return Number.parseInt(e.updateDay)})).max(),R=K.filter((function(e){var t;return e.updateDay===(null===(t=null!==L&&void 0!==L?L:J)||void 0===t?void 0:t.toString())})),G=B.map((function(e){return e.form})).toSet(),T=B.map((function(e){return e.center})).toSet(),V=R.map((function(e){return e.status})).toSet(),$=K.map((function(e){return Number.parseInt(e.day)})).toSet().toList().sort(),q=R.groupBy((function(e){return e.day})).map((function(e,t){return Object(c.a)({day:t},e.reduce((function(e,t){return e.set(t.status,t.count)}),f.a.Map()).toObject())})).toList().sort((function(e,t){return Number.parseInt(e.day)-Number.parseInt(t.day)})).toArray(),z=$.map((function(e){var t;return null!==(t=q.find((function(t){return t.day===e.toString()})))&&void 0!==t?t:{day:e}})).toArray(),P=r.a.createElement(E.c,{width:1440,height:810,data:z},r.a.createElement(E.a,{strokeDasharray:"3 3"}),r.a.createElement(E.e,{dataKey:"day"}),r.a.createElement(E.f,{type:"number",height:810,domain:[0,null!==(e=H.max())&&void 0!==e?e:1]}),r.a.createElement(E.d,{offset:100,itemSorter:function(e){var t;return-e.payload[h()(null===(t=e.dataKey)||void 0===t?void 0:t.toString())]}}),V.toArray().map((function(e,t){return r.a.createElement(E.b,{key:t,type:"linear",isAnimationActive:!1,dataKey:e,stroke:O(e)})}))),X=r.a.createElement("div",null,r.a.createElement("h1",null,"USCIS case progress tracker"),r.a.createElement("h2",null,"Current Form: ",d,", location: ",k,", Last Update for this form and location:"," ",new Date(1970,0,null!==J&&void 0!==J?J:1).toDateString()),r.a.createElement("h3",null,"Help needed for UI and clawer"),r.a.createElement("p",null,"GitHub project: https://github.com/vicdus/uscis-case-statistics/")),Y=M.max()?r.a.createElement(b.a,{item:!0,xs:8},r.a.createElement(A.a,{style:{marginLeft:"128px",marginRight:"128px"},defaultValue:null!==(t=M.max())&&void 0!==t?t:1,onChange:function(e,t){return W(t.toString())},"aria-labelledby":"discrete-slider",valueLabelDisplay:"off",step:1,marks:M.map((function(e){return{value:e,label:new Date(1970,0,e+1).toDateString()}})).toArray(),min:null!==(a=M.min())&&void 0!==a?a:0,max:null!==(l=M.max())&&void 0!==l?l:1})):null,Z=r.a.createElement("div",null,r.a.createElement("h3",null,"Q and A"),r.a.createElement("h4",null,"Q: \u600e\u4e48\u7528\uff1f"),r.a.createElement("p",null,"A: \u6a2a\u5750\u6807\u662f\u53f7\u6bb5\uff0c\u7eb5\u5750\u6807\u662f\u72b6\u6001\u5bf9\u5e94\u7684\u6570\u91cf\u3002"),r.a.createElement("h4",null,"Q: \u4f60\u662f\u8c01\uff1f"),r.a.createElement("p",null,"A: \u6211\u4eca\u5e74\u62bd\u4e2d\u4e86h1b, \u5728\u7b49approve"),r.a.createElement("h4",null,"Q: \u6570\u636e\u6765\u6e90\uff1f"),r.a.createElement("p",null,"A: \u679a\u4e3e\u53f7\u6bb5\u4e0b\u6240\u6709\u53ef\u80fd\u7684case number\u5e76\u722c\u53d6USCIS, \u4fdd\u5b58\u6210\u6587\u4ef6"),r.a.createElement("h4",null,"Q: \u6ca1\u6709\u6211\u7684\u53f7\u6bb5\u7684\u6570\u636e\uff1f"),r.a.createElement("p",null,"A: \u53ef\u80fd\u9700\u8981\u5730\u91cc\u5927\u5bb6\u4e00\u8d77\u6765\u722c\u5e76\u66f4\u65b0\uff0c\u7a0d\u540e\u653e\u51fa\u6b65\u9aa4"),r.a.createElement("h4",null,"Q: \u4e3a\u4ec0\u4e48\u662f\u6587\u4ef6\uff1f\u4e3a\u4ec0\u4e48\u4e0d\u7528\u6570\u636e\u5e93\uff1f"),r.a.createElement("p",null,"A: \u7a77\u3001\u61d2")),_=r.a.createElement(y.a,{fullWidth:!0,component:"fieldset"},r.a.createElement(S.a,{component:"legend"},"Form Type"),r.a.createElement(w.a,{"aria-label":"form",name:"form",value:d,onChange:function(e){return p(e.target.value)}},G.toArray().map((function(e,t){return r.a.createElement(g.a,{key:t,value:e,control:r.a.createElement(j.a,null),label:e})})))),ee=r.a.createElement(y.a,{fullWidth:!0,component:"fieldset"},r.a.createElement(S.a,{component:"legend"},"Center"),r.a.createElement(w.a,{"aria-label":"form",name:"form",value:k,onChange:function(e){return I(e.target.value)}},T.toArray().map((function(e,t){return r.a.createElement(g.a,{key:t,value:e,control:r.a.createElement(j.a,null),label:e})}))));return r.a.createElement("div",null,X,Y,P,_,ee,Z)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[196,1,2]]]);
//# sourceMappingURL=main.7c3e745b.chunk.js.map