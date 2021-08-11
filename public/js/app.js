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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_redom_dist_redom_min_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_redom_dist_redom_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_redom_dist_redom_min_js__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import redom from "https://redom.js.org/redom.es.min.js";

console.log(__WEBPACK_IMPORTED_MODULE_0__node_modules_redom_dist_redom_min_js__);
var el = __WEBPACK_IMPORTED_MODULE_0__node_modules_redom_dist_redom_min_js__["el"],
    mount = __WEBPACK_IMPORTED_MODULE_0__node_modules_redom_dist_redom_min_js__["mount"];

console.log(mount);

var Hello = function () {
  function Hello() {
    _classCallCheck(this, Hello);

    this.el = el("h1");
  }

  _createClass(Hello, [{
    key: "update",
    value: function update(data) {
      this.el.textContent = "Hello " + data + "!";
    }
  }]);

  return Hello;
}();

var hello = new Hello();

hello.update("RE:DOM!");

mount(document.body, hello);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).redom={})}(this,(function(e){"use strict";function t(e,t){var i=function(e){for(var t=e.split(/([#.])/),i="",n="",o=[],r=0;r<t.length;r++){var l=t[r];"#"===l?n=t[++r]:"."===l?o.push(t[++r]):l.length&&(i=l)}return{tag:i||"div",id:n,className:o.join(" ")}}(e),n=i.tag,o=i.id,r=i.className,l=t?document.createElementNS(t,n):document.createElement(n);return o&&(l.id=o),r&&(t?l.setAttribute("class",r):l.className=r),l}function i(e,t){var i=m(e),o=m(t);return t===o&&o.__redom_view&&(t=o.__redom_view),o.parentNode&&(n(t,o,i),i.removeChild(o)),t}function n(e,t,i){var n=t.__redom_lifecycle;if(o(n))t.__redom_lifecycle={};else{var r=i;for(t.__redom_mounted&&u(t,"onunmount");r;){var l=r.__redom_lifecycle||{};for(var s in n)l[s]&&(l[s]-=n[s]);o(l)&&(r.__redom_lifecycle=null),r=r.parentNode}}}function o(e){if(null==e)return!0;for(var t in e)if(e[t])return!1;return!0}var r=["onmount","onremount","onunmount"],l="undefined"!=typeof window&&"ShadowRoot"in window;function s(e,t,i,o){var s=m(e),a=m(t);t===a&&a.__redom_view&&(t=a.__redom_view),t!==a&&(a.__redom_view=t);var f=a.__redom_mounted,d=a.parentNode;return f&&d!==s&&n(0,a,d),null!=i?o?s.replaceChild(a,m(i)):s.insertBefore(a,m(i)):s.appendChild(a),function(e,t,i,n){for(var o=t.__redom_lifecycle||(t.__redom_lifecycle={}),s=i===n,a=!1,f=0,d=r;f<d.length;f+=1){var h=d[f];s||e!==t&&h in e&&(o[h]=(o[h]||0)+1),o[h]&&(a=!0)}if(!a)return void(t.__redom_lifecycle={});var v=i,c=!1;(s||v&&v.__redom_mounted)&&(u(t,s?"onremount":"onmount"),c=!0);for(;v;){var _=v.parentNode,p=v.__redom_lifecycle||(v.__redom_lifecycle={});for(var w in o)p[w]=(p[w]||0)+o[w];if(c)break;(v.nodeType===Node.DOCUMENT_NODE||l&&v instanceof ShadowRoot||_&&_.__redom_mounted)&&(u(v,s?"onremount":"onmount"),c=!0),v=_}}(t,a,s,d),t}function u(e,t){"onmount"===t||"onremount"===t?e.__redom_mounted=!0:"onunmount"===t&&(e.__redom_mounted=!1);var i=e.__redom_lifecycle;if(i){var n=e.__redom_view,o=0;for(var r in n&&n[t]&&n[t](),i)r&&o++;if(o)for(var l=e.firstChild;l;){var s=l.nextSibling;u(l,t),l=s}}}function a(e,t,i){var n=m(e);if("object"==typeof t)for(var o in t)f(n,o,t[o]);else f(n,t,i)}function f(e,t,i){e.style[t]=null==i?"":i}var d="http://www.w3.org/1999/xlink";function h(e,t,i,n){var o=m(e);if("object"==typeof t)for(var r in t)h(o,r,t[r],n);else{var l=o instanceof SVGElement,s="function"==typeof i;if("style"===t&&"object"==typeof i)a(o,i);else if(l&&s)o[t]=i;else if("dataset"===t)c(o,i);else if(l||!(t in o)&&!s||"list"===t){if(l&&"xlink"===t)return void v(o,i);n&&"class"===t&&(i=o.className+" "+i),null==i?o.removeAttribute(t):o.setAttribute(t,i)}else o[t]=i}}function v(e,t,i){if("object"==typeof t)for(var n in t)v(e,n,t[n]);else null!=i?e.setAttributeNS(d,t,i):e.removeAttributeNS(d,t,i)}function c(e,t,i){if("object"==typeof t)for(var n in t)c(e,n,t[n]);else null!=i?e.dataset[t]=i:delete e.dataset[t]}function _(e){return document.createTextNode(null!=e?e:"")}function p(e,t,i){for(var n=0,o=t;n<o.length;n+=1){var r=o[n];if(0===r||r){var l=typeof r;"function"===l?r(e):"string"===l||"number"===l?e.appendChild(_(r)):y(m(r))?s(e,r):r.length?p(e,r,i):"object"===l&&h(e,r,null,i)}}}function w(e){return"string"==typeof e?b(e):m(e)}function m(e){return e.nodeType&&e||!e.el&&e||m(e.el)}function y(e){return e&&e.nodeType}var g={};function b(e){for(var t,i=[],n=arguments.length-1;n-- >0;)i[n]=arguments[n+1];var o=typeof e;if("string"===o)t=k(e).cloneNode(!1);else if(y(e))t=e.cloneNode(!1);else{if("function"!==o)throw new Error("At least one argument required");var r=e;t=new(Function.prototype.bind.apply(r,[null].concat(i)))}return p(m(t),i,!0),t}var N=b,x=b;function k(e){return g[e]||(g[e]=t(e))}function S(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];for(var o=m(e),r=A(e,t,o.firstChild);r;){var l=r.nextSibling;i(e,r),r=l}}function A(e,t,i){for(var n=i,o=new Array(t.length),r=0;r<t.length;r++)o[r]=t[r]&&m(t[r]);for(var l=0;l<t.length;l++){var u=t[l];if(u){var a=o[l];if(a!==n)if(y(a)){var f=n&&n.nextSibling,d=null!=u.__redom_index&&f===o[l+1];s(e,u,n,d),d&&(n=f)}else null!=u.length&&(n=A(e,u,n));else n=n.nextSibling}}return n}b.extend=function(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];var n=k(e);return b.bind.apply(b,[this,n].concat(t))};var D=function(e,t,i){this.View=e,this.initData=i,this.oldLookup={},this.lookup={},this.oldViews=[],this.views=[],null!=t&&(this.key="function"==typeof t?t:function(e){return function(t){return t[e]}}(t))};function V(e,t,i,n){return new j(e,t,i,n)}D.prototype.update=function(e,t){for(var i=this.View,n=this.key,o=this.initData,r=null!=n,l=this.lookup,s={},u=new Array(e.length),a=this.views,f=0;f<e.length;f++){var d=e[f],h=void 0;if(r){var v=n(d);h=l[v]||new i(o,d,f,e),s[v]=h,h.__redom_id=v}else h=a[f]||new i(o,d,f,e);h.update&&h.update(d,f,e,t),m(h.el).__redom_view=h,u[f]=h}this.oldViews=a,this.views=u,this.oldLookup=l,this.lookup=s};var j=function(e,t,i,n){this.View=t,this.initData=n,this.views=[],this.pool=new D(t,i,n),this.el=w(e),this.keySet=null!=i};j.prototype.update=function(e,t){void 0===e&&(e=[]);var n=this.keySet,o=this.views;this.pool.update(e,t);var r=this.pool,l=r.views,s=r.lookup;if(n)for(var u=0;u<o.length;u++){var a=o[u];null==s[a.__redom_id]&&(a.__redom_index=null,i(this,a))}for(var f=0;f<l.length;f++){l[f].__redom_index=f}S(this,l),n&&(this.lookup=s),this.views=l},j.extend=function(e,t,i,n){return j.bind(j,e,t,i,n)},V.extend=j.extend;var C=function(e,t){this.el=_(""),this.visible=!1,this.view=null,this._placeholder=this.el,e instanceof Node?this._el=e:e.el instanceof Node?(this._el=e,this.view=e):this._View=e,this._initData=t};C.prototype.update=function(e,t){var n=this._placeholder,o=this.el.parentNode;if(e){if(!this.visible)if(this._el)s(o,this._el,n),i(o,n),this.el=m(this._el),this.visible=e;else{var r=new(0,this._View)(this._initData);this.el=m(r),this.view=r,s(o,r,n),i(o,n)}this.view&&this.view.update&&this.view.update(t)}else if(this.visible){if(this._el)return s(o,n,this._el),i(o,this._el),this.el=n,void(this.visible=e);s(o,n,this.view),i(o,this.view),this.el=n,this.view=null}this.visible=e};var E=function(e,t,i){this.el=w(e),this.Views=t,this.initData=i};E.prototype.update=function(e,t){if(e!==this.route){var i=this.Views[e];this.route=e,i&&(i instanceof Node||i.el instanceof Node)?this.view=i:this.view=i&&new i(this.initData,t),S(this.el,[this.view])}this.view&&this.view.update&&this.view.update(t,e)};var T="http://www.w3.org/2000/svg",L={};function P(e){for(var t,i=[],n=arguments.length-1;n-- >0;)i[n]=arguments[n+1];var o=typeof e;if("string"===o)t=R(e).cloneNode(!1);else if(y(e))t=e.cloneNode(!1);else{if("function"!==o)throw new Error("At least one argument required");var r=e;t=new(Function.prototype.bind.apply(r,[null].concat(i)))}return p(m(t),i,!0),t}var O=P;function R(e){return L[e]||(L[e]=t(e,T))}P.extend=function(e){var t=R(e);return P.bind(this,t)},P.ns=T,e.List=j,e.ListPool=D,e.Place=C,e.Router=E,e.el=N,e.h=x,e.html=b,e.list=V,e.listPool=function(e,t,i){return new D(e,t,i)},e.mount=s,e.place=function(e,t){return new C(e,t)},e.router=function(e,t,i){return new E(e,t,i)},e.s=O,e.setAttr=function(e,t,i){h(e,t,i)},e.setChildren=S,e.setData=c,e.setStyle=a,e.setXlink=v,e.svg=P,e.text=_,e.unmount=i,Object.defineProperty(e,"__esModule",{value:!0})}));

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);