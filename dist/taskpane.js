(()=>{"use strict";var e={9796:(e,t,r)=>{e.exports=r.p+"assets/icon-16.png"},9921:(e,t,r)=>{e.exports=r.p+"assets/icon-32.png"},3119:(e,t,r)=>{e.exports=r.p+"assets/icon-64.png"},4486:(e,t,r)=>{e.exports=r.p+"assets/icon-80.png"}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var c=t[n]={exports:{}};return e[n](c,c.exports,r),c.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{function e(e,t,r,n,o,c,i){try{var s=e[c](i),a=s.value}catch(e){return void r(e)}s.done?t(a):Promise.resolve(a).then(n,o)}function t(t){return function(){var r=this,n=arguments;return new Promise((function(o,c){var i=t.apply(r,n);function s(t){e(i,o,c,s,a,"next",t)}function a(t){e(i,o,c,s,a,"throw",t)}s(void 0)}))}}function n(){return o.apply(this,arguments)}function o(){return o=t(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Excel.run(function(){var e=t(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=t.workbook.getSelectedRange()).load("address"),r.format.fill.color="yellow",e.next=5,t.sync();case 5:console.log("The range address was ".concat(r.address,"."));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])}))),o.apply(this,arguments)}r(9796),r(9921),r(3119),r(4486),Office.initialize=function(){document.getElementById("sideload-msg").style.display="none",document.getElementById("app-body").style.display="flex",document.getElementById("run").onclick=n}})()})();
//# sourceMappingURL=taskpane.js.map