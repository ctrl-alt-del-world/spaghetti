
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/site/_includes/scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/klaviyo-subscribe/dist/klaviyo-subscribe.es.js":
/*!*********************************************************************!*\
  !*** ./node_modules/klaviyo-subscribe/dist/klaviyo-subscribe.es.js ***!
  \*********************************************************************/
/*! exports provided: subscribe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return e; });
function e(e,t,n){void 0===n&&(n={});var r=Object.assign({},n,{g:e,email:t}),s=Object.keys(r).reduce(function(e,t){return e.append(t,r[t]),e},new URLSearchParams);return fetch("https://manage.kmail-lists.com/ajax/subscriptions/subscribe",{method:"POST",headers:{"Access-Control-Allow-Headers":"*","Content-Type":"application/x-www-form-urlencoded; charset=utf-8"},body:s}).then(function(e){return e.json()})}
//# sourceMappingURL=klaviyo-subscribe.es.js.map


/***/ }),

/***/ "./node_modules/operator/dist/operator.es.js":
/*!***************************************************!*\
  !*** ./node_modules/operator/dist/operator.es.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function t(t,n){for(var e=0,r=t.length;e<r;e++)if(!n(t[e],e,t))return!1;return!0}const n="/",e=0,r=1,a=2,o=3,i=47,c=58,u=42,l=63;function s(t){if(t===n)return t;t.charCodeAt(0)===i&&(t=t.substring(1));var e=t.length-1;return t.charCodeAt(e)===i?t.substring(0,e):t}function f(t){return(t=s(t))===n?[n]:t.split(n)}function h(t,a,o){return a.val===(o=t[o])&&a.type===e||(o===n?a.type>r:a.type!==e&&(o||"").endsWith(a.end))}function d(t){if(t===n)return[{old:t,type:e,val:t,end:""}];for(var f,h,d,p,g=s(t),v=-1,m=0,y=g.length,b=[];++v<y;)if((f=g.charCodeAt(v))!==c)if(f!==u){for(m=v;v<y&&g.charCodeAt(v)!==i;)++v;b.push({old:t,type:e,val:g.substring(m,v),end:""}),g=g.substring(v),y-=v,v=m=0}else b.push({old:t,type:a,val:g.substring(v),end:""});else{for(m=v+1,d=r,h=0,p="";v<y&&g.charCodeAt(v)!==i;)(f=g.charCodeAt(v))===l?(h=v,d=o):46===f&&0===p.length&&(p=g.substring(h=v)),v++;b.push({old:t,type:d,val:g.substring(m,h||v),end:p}),g=g.substring(v),y-=v,v=0}return b}function p(t,e){for(var r,a,i=0,c=f(t),u={};i<e.length;i++)a=e[i],(r=c[i])!==n&&void 0!==r&&a.type|2===o&&(u[a.val]=r.replace(a.end,""));return u}var g=new Map;function v(t){return t.replace(window.location.origin,"")}function m(n,e){var r="",i="",c=n.split(/#|\?/),u=c[0],l=c.slice(1);u=(u=u.replace(/\/$/g,""))||"/";for(var s=0;s<l.length;s++){var d=n.split(l[s])[0];"?"===d[d.length-1]&&(i=l[s]),"#"===d[d.length-1]&&(r=l[s])}var g=function(n,e){for(var r,i,c=0,u=f(n),l=u.length,s=h.bind(h,u);c<e.length;c++)if(((i=(r=e[c]).length)===l||i<l&&r[i-1].type===a||i>l&&r[i-1].type===o)&&t(r,s))return r;return[]}(u,e.map(function(t){return t.matcher})),v=e.filter(function(t){return t.path===g[0].old})[0];return g[0]?Object.assign({},v,{params:p(u,g),hash:r,search:i,pathname:u,location:n}):null}/* harmony default export */ __webpack_exports__["default"] = (function(t,n){void 0===n&&(n=["*"]);var e,r=document.querySelector(t),a=[],o={};n=n.concat(n.indexOf("*")<0?"*":[]).reduce(function(t,n){return"function"==typeof n?(a.push(n),t):t.concat(n)},[]).map(function(t){return t.path?Object.assign({},t,{matcher:d(t.path)}):{path:t,matcher:d(t)}}),"scrollRestoration"in history&&(history.scrollRestoration="manual");var i=m(v(window.location.href),n),c=Object.assign({title:document.title},i);function u(t){return o[t]?o[t].map(function(t){return t(c)}):[]}function l(t,n,e,o){c.title=t.title,Promise.all(a.concat(e.handler||[]).map(function(t){return t(c)})).then(function(){window.scrollTo(0,0),requestAnimationFrame(function(){r.innerHTML=n,u("after"),e.hash&&u("hash")})})}function s(n,e,r){if(!e)return window.location.href=n;fetch(n,{credentials:"include"}).then(function(t){return t.text()}).then(function(a){var o=(new window.DOMParser).parseFromString(a,"text/html"),i=[o,o.querySelector(t).innerHTML];g.set(n,i),r&&r(i[0],i[1],e)})}function f(t,n,r){e=function(){var e=g.get(t);e&&!1!==n.cache?l(e[0],e[1],n):s(t,n,l)},Object.assign(c,n),Promise.all(u("before")).then(e)}function h(t){var e=v(t);return[e,m(e,n)]}return document.body.addEventListener("click",function(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||t.defaultPrevented)){for(var n=t.target;n&&(!n.href||"A"!==n.nodeName);)n=n.parentNode;if(!n)return t;var e=h(n.href),r=e[0],a=e[1];return a.ignore?t:c.pathname===a.pathname&&a.hash?(t.preventDefault(),Object.assign(c,a),u("hash"),t):window.location.origin!==n.origin||n.hasAttribute("download")||"_blank"===n.target||/^(?:mailto|tel):/.test(n.href)||n.classList.contains("no-ajax")?t:(t.preventDefault(),c.location!==r&&f(r,a),u("navigate"),!1)}}),window.addEventListener("popstate",function(t){if(t.target.location.pathname!==c.pathname)return f.apply(void 0,h(t.target.location.href).concat([!0])),!1}),{get state(){return c},go:function(t){e=null,f.apply(void 0,h(t).concat([!1]))},load:function(t,n){return s.apply(void 0,h(t).concat([n]))},on:function(t,n){return o[t]=o[t]?o[t].concat(n):[n],function(){return o[t].slice(o[t].indexOf(n),1)}}}});
//# sourceMappingURL=operator.es.js.map


/***/ }),

/***/ "./node_modules/picoapp/dist/picoapp.es.js":
/*!*************************************************!*\
  !*** ./node_modules/picoapp/dist/picoapp.es.js ***!
  \*************************************************/
/*! exports provided: component, picoapp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "component", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "picoapp", function() { return c; });
var n=function(n){if("object"!=typeof(t=n)||Array.isArray(t))throw"state should be an object";var t},t=function(n,t,r){return(e=n,e.reduce(function(n,t,r){return n.indexOf(t)>-1?n:n.concat(t)},[])).reduce(function(n,r){return n.concat(t[r]||[])},[]).map(function(n){return n(r)});var e};function r(r){void 0===r&&(r={});var e={};return{getState:function(){return Object.assign({},r)},hydrate:function(o){return n(o),Object.assign(r,o),function(){var n=["*"].concat(Object.keys(o));t(n,e,r)}},on:function(n,t){return(n=[].concat(n)).map(function(n){return e[n]=(e[n]||[]).concat(t)}),function(){return n.map(function(n){return e[n].splice(e[n].indexOf(t),1)})}},emit:function(o,u){var c=("*"===o?[]:["*"]).concat(o);(u="function"==typeof u?u(r):u)&&(n(u),Object.assign(r,u),c=c.concat(Object.keys(u))),t(c,e,r)}}}r();var e=function(n){return"object"==typeof n&&!Array.isArray(n)},o=function(n){return"function"==typeof n};function u(n){return function(t,r){var e=[];return{subs:e,unmount:n(t,Object.assign({},r,{on:function(n,t){var o=r.on(n,t);return e.push(o),o}})),node:t}}}function c(n,t,u){void 0===n&&(n={}),void 0===t&&(t={}),void 0===u&&(u=[]);var c=r(t),i=[];return{on:c.on,emit:c.emit,getState:function(){return c.getState()},add:function(t){if(!e(t))throw"components should be an object";Object.assign(n,t)},use:function(n){if(!o(n))throw"plugins should be a function";u.push(n)},hydrate:function(n){return c.hydrate(n)},mount:function(t){void 0===t&&(t="data-component"),t=[].concat(t);for(var r=0;r<t.length;r++){for(var a=t[r],f=[].slice.call(document.querySelectorAll("["+a+"]")),s=function(){for(var t=f.pop(),r=t.getAttribute(a).split(/\s/),s=0;s<r.length;s++){var v=n[r[s]];if(v){t.removeAttribute(a);try{var d=u.reduce(function(n,r){var o=r(t,c);return e(o)?Object.assign(n,o):n},{}),m=v(t,Object.assign({},d,c));o(m.unmount)&&i.push(m)}catch(n){console.error(n),c.emit("error",{error:n}),c.hydrate({error:void 0})}}}};f.length;)s();c.emit("mount")}},unmount:function(){for(var n=i.length-1;n>-1;n--){var t=i[n],r=t.subs;(0,t.unmount)(t.node),r.map(function(n){return n()}),i.splice(n,1)}c.emit("unmount")}}}
//# sourceMappingURL=picoapp.es.js.map


/***/ }),

/***/ "./node_modules/srraf/dist/srraf.es.js":
/*!*********************************************!*\
  !*** ./node_modules/srraf/dist/srraf.es.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var n,e,t,i,r,o,f,p,u,w=[];function a(n,d){return e=window.pageXOffset,i=window.pageYOffset,o=window.innerHeight,p=window.innerWidth,t||(t=e),r||(r=i),u||(u=p),f||(f=o),(d||i!==r||e!==t||o!==f||p!==u)&&(!function(n){for(var a=0;a<w.length;a++)w[a]({x:e,y:i,px:t,py:r,vh:o,pvh:f,vw:p,pvw:u},n)}(n),t=e,r=i,f=o,u=p),requestAnimationFrame(a)}/* harmony default export */ __webpack_exports__["default"] = (function(e){return w.indexOf(e)<0&&w.push(e),n=n||a(performance.now()),{update:function(){return a(performance.now(),!0),this},destroy:function(){w.splice(w.indexOf(e),1)}}});
//# sourceMappingURL=srraf.es.js.map


/***/ }),

/***/ "./node_modules/vsbl/dist/vsbl.es.js":
/*!*******************************************!*\
  !*** ./node_modules/vsbl/dist/vsbl.es.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var srraf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! srraf */ "./node_modules/srraf/dist/srraf.es.js");
/* harmony default export */ __webpack_exports__["default"] = (function(r,o){return void 0===o&&(o={}),function(e,n){var a=!1,i=parseFloat(r.getAttribute("data-threshold")||o.threshold||0);return Object(srraf__WEBPACK_IMPORTED_MODULE_0__["default"])(function(){for(var t=[],o=arguments.length;o--;)t[o]=arguments[o];var d=t[0],h=d.y,l=d.vh,p=r.getBoundingClientRect(),u=p.top+h,f=i>=.5?i:i*l,v=u+p.height-f>=h&&u+f<=h+l;v&&!a?(a=!0,e&&e.apply(void 0,t)):!v&&a&&(a=!1,n&&n.apply(void 0,t))})}});
//# sourceMappingURL=vsbl.es.js.map


/***/ }),

/***/ "./src/site/_includes/scripts/app.js":
/*!*******************************************!*\
  !*** ./src/site/_includes/scripts/app.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var _lib_image_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/image.js */ "./src/site/_includes/scripts/lib/image.js");
/* harmony import */ var _lib_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/theme.js */ "./src/site/_includes/scripts/lib/theme.js");
/* harmony import */ var _lib_form_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/form.js */ "./src/site/_includes/scripts/lib/form.js");




var state = {
  menuOpen: false
};
var components = {
  image: _lib_image_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  theme: _lib_theme_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  form: _lib_form_js__WEBPACK_IMPORTED_MODULE_3__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(picoapp__WEBPACK_IMPORTED_MODULE_0__["picoapp"])(components, state));

/***/ }),

/***/ "./src/site/_includes/scripts/index.js":
/*!*********************************************!*\
  !*** ./src/site/_includes/scripts/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ "./src/site/_includes/scripts/app.js");
/* harmony import */ var operator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! operator */ "./node_modules/operator/dist/operator.es.js");


var router = Object(operator__WEBPACK_IMPORTED_MODULE_1__["default"])('#root');
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('🍝 Built by Kevin Green');
  _app_js__WEBPACK_IMPORTED_MODULE_0__["default"].mount();
  window.__app = _app_js__WEBPACK_IMPORTED_MODULE_0__["default"];
});
router.on('after', function (_ref) {
  var location = _ref.location;
  var title = document.querySelector('.js-title');
  var pageTitle = "";

  if (title) {
    pageTitle = "".concat(title.getAttribute('data-title'), " | ");
  }

  document.title = pageTitle + "Spaghetti Directory";
  window.history.pushState({}, '', location);
  _app_js__WEBPACK_IMPORTED_MODULE_0__["default"].mount();
});

/***/ }),

/***/ "./src/site/_includes/scripts/lib/form.js":
/*!************************************************!*\
  !*** ./src/site/_includes/scripts/lib/form.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var klaviyo_subscribe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! klaviyo-subscribe */ "./node_modules/klaviyo-subscribe/dist/klaviyo-subscribe.es.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(picoapp__WEBPACK_IMPORTED_MODULE_0__["component"])(function (node) {
  var form = node.querySelector('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var success = node.querySelector('.js-spaghetti');
    var email = form.elements.email;
    console.log(email.value);
    Object(klaviyo_subscribe__WEBPACK_IMPORTED_MODULE_1__["subscribe"])("Yf9WmD", email.value, {}).then(function (response) {
      form.reset();
      form.classList.add('hidden');
      success.classList.remove('hidden');
      console.log('response', response);
    });
  });
}));

/***/ }),

/***/ "./src/site/_includes/scripts/lib/image.js":
/*!*************************************************!*\
  !*** ./src/site/_includes/scripts/lib/image.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var vsbl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vsbl */ "./node_modules/vsbl/dist/vsbl.es.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(picoapp__WEBPACK_IMPORTED_MODULE_0__["component"])(function (node) {
  node.onload = function (e) {
    return node.classList.add('is-loaded');
  };

  if (/.png/.test(node.getAttribute('data-src'))) {
    node.parentNode.classList.add('transparent');
  }

  node.src = node.getAttribute('data-src');
  var vs = Object(vsbl__WEBPACK_IMPORTED_MODULE_1__["default"])(node)(function () {
    node.classList.add('is-visible');
  });
  vs.update();
}));

/***/ }),

/***/ "./src/site/_includes/scripts/lib/theme.js":
/*!*************************************************!*\
  !*** ./src/site/_includes/scripts/lib/theme.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(picoapp__WEBPACK_IMPORTED_MODULE_0__["component"])(function (node) {
  var buttons = node.querySelectorAll('.js-color');
  var colors = node.querySelector('.js-toggle-colors');
  var close = node.querySelector('.js-toggle-close');
  var styles = document.querySelector('.js-switch');
  var inputLite = node.querySelector('.js-lite');
  var inputDark = node.querySelector('.js-dark');
  inputLite.addEventListener('input', function () {
    handleColorCSS();
  });
  inputDark.addEventListener('input', function () {
    handleColorCSS();
  });
  close.addEventListener('click', function () {
    colors.classList.remove('show');
  });
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      buttons.forEach(function (b) {
        b.classList.remove('active');
      });
      button.classList.add('active');
      var dark = button.dataset.background;
      var lite = button.dataset.color;
      inputLite.value = dark;
      inputDark.value = lite;
      handleColorCSS();
      colors.classList.add('show');
    });
  });

  var handleColorCSS = function handleColorCSS() {
    var newStyle = "\n      body {\n        background-color: ".concat(inputLite.value, ";\n        color: ").concat(inputDark.value, ";\n      }\n      .footer--text {\n        color: ").concat(inputDark.value, ";\n      }\n      .footer__shape {\n        stroke: ").concat(inputDark.value, ";\n      }\n\n      .footer__download:hover .footer--text {\n        color: ").concat(inputLite.value, ";\n      }\n      .footer__download:hover .footer__shape {\n        stroke: ").concat(inputLite.value, ";\n        color: ").concat(inputDark.value, ";\n      }\n      body button {\n        color: ").concat(inputDark.value, ";\n        border-color: ").concat(inputDark.value, ";\n      }\n      .toggle__colors-close {\n        color: ").concat(inputLite.value, ";\n      }\n      .project__single-blend {\n        background-color: ").concat(inputDark.value, ";\n      }\n      .alt {\n        background-color: ").concat(inputDark.value, ";\n        color: ").concat(inputLite.value, ";\n      }\n      .projects--single_image {\n        background-color: ").concat(inputDark.value, ";\n      }\n      .footer .newsletter button:hover span {\n        color: ").concat(inputDark.value, ";\n      }\n    ");
    styles.innerHTML = newStyle;
  };
}));

/***/ })

/******/ });
//# sourceMappingURL=index.js.map