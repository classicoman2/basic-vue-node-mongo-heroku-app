(function(e){function t(t){for(var o,u,a=t[0],i=t[1],l=t[2],f=0,b=[];f<a.length;f++)u=a[f],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&b.push(r[u][0]),r[u]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);s&&s(t);while(b.length)b.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,u=1;u<n.length;u++){var i=n[u];0!==r[i]&&(o=!1)}o&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},c=[];function u(e){return a.p+"js/"+({about:"about"}[e]||e)+"."+{about:"38fa4c43"}[e]+".js"}function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.src=u(e);var l=new Error;c=function(t){i.onerror=i.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",l.name="ChunkLoadError",l.type=o,l.request=c,n[1](l)}r[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(t)},a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var s=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0c9c":function(e,t,n){},1747:function(e,t,n){"use strict";n("0c9c")},3785:function(e,t,n){"use strict";n("4570")},4570:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r={id:"nav"},c=Object(o["e"])("Home"),u=Object(o["e"])(" | "),a=Object(o["e"])("About");function i(e,t){var n=Object(o["v"])("router-link"),i=Object(o["v"])("router-view");return Object(o["o"])(),Object(o["d"])(o["a"],null,[Object(o["f"])("div",r,[Object(o["f"])(n,{to:"/"},{default:Object(o["A"])((function(){return[c]})),_:1}),u,Object(o["f"])(n,{to:"/about"},{default:Object(o["A"])((function(){return[a]})),_:1})]),Object(o["f"])(i)],64)}n("3785");const l={};l.render=i;var f=l,s=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),b=n("cf05"),d=n.n(b),p={class:"home"},O=Object(o["f"])("img",{alt:"Vue logo",src:d.a},null,-1);function j(e,t,n,r,c,u){var a=Object(o["v"])("Roster");return Object(o["o"])(),Object(o["d"])("div",p,[O,Object(o["f"])(a)])}n("b0c0");var v=Object(o["B"])("data-v-600b5262");Object(o["r"])("data-v-600b5262");var h=Object(o["f"])("h1",null,"The Roster",-1);Object(o["p"])();var m=v((function(e,t,n,r,c,u){return Object(o["o"])(),Object(o["d"])("main",null,[h,Object(o["f"])("ul",null,[(Object(o["o"])(!0),Object(o["d"])(o["a"],null,Object(o["u"])(c.cyclists,(function(e){return Object(o["o"])(),Object(o["d"])("li",{key:e.id},Object(o["x"])(e.name)+", "+Object(o["x"])(e.age)+" years ",1)})),128))])])})),y={data:function(){return{cyclists:[]}},mounted:function(){var e=this;console.info(Object({NODE_ENV:"production",BASE_URL:"/"}).NODE_BASE);var t="local"==Object({NODE_ENV:"production",BASE_URL:"/"}).NODE_BASE?"http://localhost:5000":window.location.href;console.log(t),fetch(t+"/roster").then((function(e){return e.json()})).then((function(t){console.log(t[0].name),e.cyclists=t}))}};n("1747");y.render=m,y.__scopeId="data-v-600b5262";var g=y,w={name:"Home",components:{Roster:g}};w.render=j;var _=w,E=[{path:"/",name:"Home",component:_},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],x=Object(s["a"])({history:Object(s["b"])(),routes:E}),A=x;Object(o["c"])(f).use(A).mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.792ff007.js.map