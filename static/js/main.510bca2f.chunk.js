(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{173:function(n,e,t){n.exports=t(356)},178:function(n,e,t){},356:function(n,e,t){"use strict";t.r(e);var a=t(1),r=t.n(a),o=t(44),i=t.n(o),c=(t(178),t(61)),l=t(107),u=t.n(l),s=(t(225),{apiKey:"AIzaSyDCau-Alxu0p7p-rekxrqfPi-L4rLPcqS8",authDomain:"sanndbox-firebase-voting.firebaseapp.com",databaseURL:"https://sanndbox-firebase-voting.firebaseio.com",projectId:"sanndbox-firebase-voting",storageBucket:"sanndbox-firebase-voting.appspot.com",messagingSenderId:"868284345723"});u.a.initializeApp(s);var d=u.a.database(),f=d.ref("/data"),m=function(){return f.set({})},v=t(359),p=t(357),b=t(355),g=t(29),h=t(30),w=["#8884d8","#84d888","#d88488","#61dafb"];function E(){var n=Object(g.a)(["\n  display: inline-block;\n  padding: 0.5em 1em;\n  text-decoration: none;\n  background: ",";\n  color: ",";\n  border-radius: 3px;\n  outline: none;\n  border: none;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return E=function(){return n},n}var x=h.a.button(E(),function(n){return n.color},"#282c34");function y(){var n=Object(g.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  flex-wrap: wrap;\n"]);return y=function(){return n},n}function k(){var n=Object(g.a)(["\n  width: 100vw;\n  background-color: ",";\n  min-height: 100vh;\n  font-size: calc(10px + 2vmin);\n  color: ",";\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n"]);return k=function(){return n},n}function j(){var n=Object(g.a)(["\n  margin: 0;\n  width: 220px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n"]);return j=function(){return n},n}function O(){var n=Object(g.a)(["\n  text-align: left;\n"]);return O=function(){return n},n}function A(){var n=Object(g.a)(["\n  margin: calc(10px + 2vmin);\n"]);return A=function(){return n},n}var S=h.a.dl(A()),R=h.a.dt(O()),W=h.a.dd(j()),C=h.a.div(k(),"#282c34","#fff"),L=h.a.div(y()),N=[{id:0,name:"\u53f0\u5357\u62c5\u4ed4\u9eba"},{id:1,name:"\u9b6f\u8089\u98ef"},{id:2,name:"\u8671\u76ee\u9b5a\u7ca5"},{id:3,name:"\u6392\u9aa8\u98ef"}],I=function(){var n=function(){var n=Object(a.useState)({}),e=Object(c.a)(n,2),t=e[0],r=e[1],o=Object(a.useState)(!1),i=Object(c.a)(o,2),l=i[0],u=i[1];return Object(a.useEffect)(function(){f.once("value").then(function(n){r(n.toJSON()||{}),u(!0)}),f.on("value",function(n){return setTimeout(function(){return r(n.val()||{},300)})})},[]),[{data:t,isReady:l},function(n){var e=d.ref("/data/".concat(n));e.once("value").then(function(n){var t=(parseInt(n.toJSON(),10)||0)+1;e.set(t)})}]}(),e=Object(c.a)(n,2),t=e[0],o=t.data,i=t.isReady,l=e[1];if(!i)return r.a.createElement("main",{className:"App"},r.a.createElement(C,null,"loading..."," "));var u=N.map(function(n){var e=n.id;return{id:e,name:n.name,value:o[e]}});return r.a.createElement("main",{className:"App"},r.a.createElement(C,null,r.a.createElement("header",null,r.a.createElement("h1",null,r.a.createElement("small",null,"\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u6295\u7968\u3067\u6c7a\u3081\u308b"),r.a.createElement("br",null),"\u6700\u5f37\u53f0\u6e7e\u6599\u7406\u6c7a\u5b9a\u6226"),r.a.createElement("p",null,"GitHub: ",r.a.createElement("a",{href:"https://github.com/kamataryo/sandbox-firebase-voting",target:"_blank"},"kamataryo/sandbox-firebase-voting"))),r.a.createElement(L,null,r.a.createElement("div",null,N.map(function(n,e){var t=n.id,a=n.name;return r.a.createElement(S,{key:t},r.a.createElement(R,null,a),r.a.createElement(W,null,r.a.createElement("span",null,"\u73fe\u5728 ".concat(o[t]||0,"\u7968")),r.a.createElement(x,{color:w[e%w.length],onClick:function(){return l(t)}},"+1")))})),r.a.createElement("div",null,r.a.createElement(v.a,{width:210,height:210},r.a.createElement(p.a,{animationDuration:200,data:u,dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",innerRadius:60,outerRadius:100,fill:"#8884d8",labelLine:!1},u.map(function(n,e){var t=n.id;return r.a.createElement(b.a,{key:t,fill:w[e%w.length]})}))))),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("button",{onClick:m},"\u5168\u3066\u3092\u7121\u306b\u5e30\u3059")))))},J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(n,e){navigator.serviceWorker.register(n).then(function(n){n.onupdatefound=function(){var t=n.installing;null!==t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}}).catch(function(n){console.error("Error during service worker registration:",n)})}i.a.render(r.a.createElement(I,null),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/sandbox-firebase-voting",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/sandbox-firebase-voting","/service-worker.js");J?(function(n,e){fetch(n).then(function(t){var a=t.headers.get("content-type");404===t.status||null!==a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(n){n.unregister().then(function(){window.location.reload()})}):P(n,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e,n),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):P(e,n)})}}()}},[[173,2,1]]]);
//# sourceMappingURL=main.510bca2f.chunk.js.map