(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([t.id,"*,*::before,*::after {\n    margin: 0;\n    box-sizing: border-box;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100vw;\n    height: 100vh;\n}\n\n.container {\n    display: flex;\n    width: 500px;\n    height: 500px;\n    background-color: black;\n    border: solid 4px black;\n    gap: 7px;\n}\n\n.container .row {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 7px;\n    height: 100%;\n    width: 5px;\n}\n\n.row .box {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-weight: bold;\n    background-color: white;\n    width: 100%;\n    height: 100%;\n    position: relative;\n}\n\n.row .box:hover {\n    background-color: rgb(188, 213, 224);\n}\n\n.modal {\n    text-align: center;\n    background-color: white;\n    padding: 15px;\n    position: absolute;\n    left: -120px;\n    top: 50px;\n    border: solid 2px black;\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n    z-index: 1;\n}\n\n#knight {\n    width: 40px;\n}\n\n.results-grid {\n    display: flex;\n    width: 300px;\n    height: 300px;\n    background-color: black;\n    border: solid 4px black;\n    position: absolute;\n    /* visibility: hidden; */\n}\n\n/* .results-grid.visible {\n    visibility: visible;\n} */",""]);const s=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},a=[],s=0;s<t.length;s++){var c=t[s],l=r.base?c[0]+r.base:c[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=n(u),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(h);else{var f=o(h,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var s=n(i[a]);e[s].references--}for(var c=r(t,o),l=0;l<i.length;l++){var d=n(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.nc=void 0;var r={};(()=>{n.d(r,{O:()=>b});var t=n(379),e=n.n(t),o=n(795),i=n.n(o),a=n(569),s=n.n(a),c=n(565),l=n.n(c),d=n(216),u=n.n(d),p=n(589),h=n.n(p),f=n(426),v={};v.styleTagTransform=h(),v.setAttributes=l(),v.insert=s().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=u(),e()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;const m=n.p+"knight.svg";class x{constructor(t){this.size=t}createGrid(t=!1){const e=document.createElement("div");e.className=t?"results-grid":"container",document.body.append(e);for(let n=0;n<this.size;n++){const r=document.createElement("div");r.className="row",e.append(r),r.dataset.x=n;for(let n=0;n<this.size;n++){const o=document.createElement("div");o.className="box",r.append(o),o.dataset.y=n,t||this.displayKnightMovesOnClick(o,r,e)}}}createResultGrid(){}displayKnightMovesOnClick(t,e,n){t.addEventListener("click",(()=>{if("true"===n.dataset.pathFinished)return;const r=`${e.dataset.x},${t.dataset.y}`;this.displayKnightOnGrid(m,t);const o=b(r,t);o&&this.displayResult(o),this.coordinateModal(t,r,n)}))}coordinateModal(t,e,n){const r=document.createElement("div");r.className="modal","start"===t.dataset.position?r.textContent=`Start: ${e}`:(r.textContent=`Destination: ${e}`,n.dataset.pathFinished="true"),t.append(r)}displayResult(t){const e=document.createElement("div"),n=document.createElement("p"),r=document.createElement("p");n.textContent=`You made it in ${t.length-1} moves.`;for(let e of t)r.textContent+=` [${e}] =>`;const o=r.textContent.substring(0,r.textContent.length-2);r.textContent=o,console.log(t),document.body.append(e),e.append(n,r),this.renderResultsButton(e)}displayKnightOnGrid(t,e){const n=new Image;n.src=t,n.id="knight",e.appendChild(n)}renderResultsButton(t){const e=document.createElement("button");e.className="results-button",e.textContent="See moves",e.addEventListener("click",(()=>{this.visualResultModal()})),t.appendChild(e)}visualResultModal(){const t=new x(this.size);document.querySelector(".results-grid").classList.add("visible"),t.createGrid(!0)}}const g=[[-1,-2],[-2,-1],[-2,1],[-1,2],[1,2],[2,1],[2,-1],[1,-2]],y=(t,e)=>{const n=[];for(;t[e];)n.push(e),e=t[e];return n.push(e),n.reverse()},b=(t,e)=>null===w.x&&null===w.y?(w.x=+t[0],w.y=+t[2],void(e.dataset.position="start")):(C.x=+t[0],C.y=+t[2],e.dataset.position="end",((t,e)=>{const n=[t],r=new Set,o={};for(;n.length>0;){const t=n.shift(),i=`${t.x},${t.y}`;if(0===Object.keys(o).length&&(o[i]=null),r.add(i),t.x===e.x&&t.y===e.y)return y(o,i);for(let e of g){const a={x:t.x+e[0],y:t.y+e[1]},s=`${a.x},${a.y}`;a.x>=0&&a.x<8&&a.y>=0&&a.y<8&&(r.has(s)||(o[s]=i,n.push(a)))}}})(w,C)),w={x:null,y:null},C={x:null,y:null};new x(8).createGrid()})()})();