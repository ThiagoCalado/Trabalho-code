(()=>{"use strict";var n={974:(n,r,e)=>{e.d(r,{Z:()=>c});var t=e(537),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200&display=swap);"]),a.push([n.id,":root {\n    --main-color:#8217da;\n}\n\n*{\n    box-sizing: border-box;\n    outline: 0;\n}\nbody{\n    margin: 0;\n    padding: 0;\n    background: #8217da;\n    font-family: 'Josefin Sans', sans-serif;\n    font-size: 1.3rem;\n    line-height: 1.5rem;\n}\n\n.container {\n    max-width: 640px;\n    margin: 50px auto;\n    background: #fff;\n    padding: 1.5rem;\n    /*border: solid #df0808 3px;*/\n    border-radius: 1.2rem;\n}\n\nform input, form label, form button {\n    display: block;\n    width: 100%;\n    margin-bottom: .5rem;\n\n}\n\nform input{\n    font-size: 1rem;\n    height: 2rem;\n    padding: .2rem;\n}\n\nform input:focus{\n    outline: 1px solid #3521e0;\n}\n\nform button{\n    border: none;\n    background: #7970ca;\n    color: aliceblue;\n    font-size: 1.8rem;\n    font-weight: 200;\n    height: 3rem;\n    margin-top: 2.5rem;\n    cursor: pointer;\n}\n\nform button:hover{\n    background: red;\n}","",{version:3,sources:["webpack://./src/assets/css/styles.css"],names:[],mappings:"AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,sBAAsB;IACtB,UAAU;AACd;AACA;IACI,SAAS;IACT,UAAU;IACV,mBAAmB;IACnB,uCAAuC;IACvC,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,eAAe;IACf,6BAA6B;IAC7B,qBAAqB;AACzB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,oBAAoB;;AAExB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200&display=swap');\r\n\r\n:root {\r\n    --main-color:#8217da;\r\n}\r\n\r\n*{\r\n    box-sizing: border-box;\r\n    outline: 0;\r\n}\r\nbody{\r\n    margin: 0;\r\n    padding: 0;\r\n    background: #8217da;\r\n    font-family: 'Josefin Sans', sans-serif;\r\n    font-size: 1.3rem;\r\n    line-height: 1.5rem;\r\n}\r\n\r\n.container {\r\n    max-width: 640px;\r\n    margin: 50px auto;\r\n    background: #fff;\r\n    padding: 1.5rem;\r\n    /*border: solid #df0808 3px;*/\r\n    border-radius: 1.2rem;\r\n}\r\n\r\nform input, form label, form button {\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: .5rem;\r\n\r\n}\r\n\r\nform input{\r\n    font-size: 1rem;\r\n    height: 2rem;\r\n    padding: .2rem;\r\n}\r\n\r\nform input:focus{\r\n    outline: 1px solid #3521e0;\r\n}\r\n\r\nform button{\r\n    border: none;\r\n    background: #7970ca;\r\n    color: aliceblue;\r\n    font-size: 1.8rem;\r\n    font-weight: 200;\r\n    height: 3rem;\r\n    margin-top: 2.5rem;\r\n    cursor: pointer;\r\n}\r\n\r\nform button:hover{\r\n    background: red;\r\n}"],sourceRoot:""}]);const c=a},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(a[u]=!0)}for(var s=0;s<n.length;s++){var f=[].concat(n[s]);t&&a[f[0]]||(void 0!==i&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=i),e&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=e):f[2]=e),o&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=o):f[4]="".concat(o)),r.push(f))}},r}},537:n=>{n.exports=function(n){var r=n[1],e=n[3];if(!e)return r;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),i="/*# ".concat(o," */");return[r].concat([i]).join("\n")}return[r].join("\n")}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],c=0;c<n.length;c++){var u=n[c],s=t.base?u[0]+t.base:u[0],f=i[s]||0,l="".concat(s," ").concat(f);i[s]=f+1;var p=e(l),m={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)r[p].references++,r[p].updater(m);else{var d=o(m,t);t.byIndex=c,r.splice(c,0,{identifier:l,updater:d,references:1})}a.push(l)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=e(i[a]);r[c].references--}for(var u=t(n,o),s=0;s<i.length;s++){var f=e(i[s]);0===r[f].references&&(r[f].updater(),r.splice(f,1))}i=u}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0,(()=>{function n(r){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n(r)}function r(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,t=new Array(r);e<r;e++)t[e]=n[e];return t}function t(r,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,(void 0,i=function(r,e){if("object"!==n(r)||null===r)return r;var t=r[Symbol.toPrimitive];if(void 0!==t){var o=t.call(r,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var o=function(){function n(r){!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n),Object.defineProperty(this,"cpfLimpo",{writable:!1,enumerable:!0,configurable:!1,value:r.replace(/\D+/g,"")})}var e,o,i;return e=n,i=[{key:"geraDigito",value:function(n){var e,t=0,o=n.length+1,i=function(n,e){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=function(n,e){if(n){if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}}(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var o=0,i=function(){};return{s:i,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return c=n.done,n},e:function(n){u=!0,a=n},f:function(){try{c||null==t.return||t.return()}finally{if(u)throw a}}}}(n);try{for(i.s();!(e=i.n()).done;){var a=e.value;t+=o*Number(a),o--}}catch(n){i.e(n)}finally{i.f()}var c=11-t%11;return c<=9?String(c):"0"}}],(o=[{key:"sequencia",value:function(){return this.cpfLimpo.charAt(0).repeat(11)===this.cpfLimpo}},{key:"geraNovoCpf",value:function(){var r=this.cpfLimpo.slice(0,-2),e=n.geraDigito(r),t=n.geraDigito(r+e);this.geraNovoCpf=r+e+t}},{key:"valida",value:function(){return!!this.cpfLimpo&&"string"==typeof this.cpfLimpo&&11===this.cpfLimpo.length&&!this.sequencia()&&(this.geraNovoCpf(),this.geraNovoCpf==this.cpfLimpo)}}])&&t(e.prototype,o),i&&t(e,i),Object.defineProperty(e,"prototype",{writable:!1}),n}();function i(n){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},i(n)}function a(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,(void 0,o=function(n,r){if("object"!==i(n)||null===n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var t=e.call(n,"string");if("object"!==i(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(t.key),"symbol"===i(o)?o:String(o)),t)}var o}new o("999.999.999-99").valida()?console.log("cpf valido"):console.log("cpf invalido");var c,u=function(){function n(){!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n)}var r,e;return r=n,e=[{key:"rand",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e8,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:999999999;return String(Math.floor(Math.random()*(r-n)+n))}},{key:"formatado",value:function(n){return n.slice(0,3)+"."+n.slice(3,6)+"."+n.slice(6,9)+"-"+n.slice(9,11)}},{key:"geraNovoCpf",value:function(){var n=this.rand(),r=o.geraDigito(n),e=n+r+o.geraDigito(n+r);return this.formatado(e)}}],e&&a(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),n}(),s=e(379),f=e.n(s),l=e(795),p=e.n(l),m=e(569),d=e.n(m),A=e(565),v=e.n(A),y=e(216),g=e.n(y),b=e(589),h=e.n(b),C=e(974),B={};B.styleTagTransform=h(),B.setAttributes=v(),B.insert=d().bind(null,"head"),B.domAPI=p(),B.insertStyleElement=g(),f()(C.Z,B),C.Z&&C.Z.locals&&C.Z.locals,c=new u,document.querySelector(".cpf-gerado").innerHTML=c.geraNovoCpf()})()})();
//# sourceMappingURL=bundle.js.map