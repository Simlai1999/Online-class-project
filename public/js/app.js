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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export List */
/* unused harmony export ListPool */
/* unused harmony export Place */
/* unused harmony export Router */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return el; });
/* unused harmony export h */
/* unused harmony export html */
/* unused harmony export list */
/* unused harmony export listPool */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mount; });
/* unused harmony export place */
/* unused harmony export router */
/* unused harmony export s */
/* unused harmony export setAttr */
/* unused harmony export setChildren */
/* unused harmony export setData */
/* unused harmony export setStyle */
/* unused harmony export setXlink */
/* unused harmony export svg */
/* unused harmony export text */
/* unused harmony export unmount */
function parseQuery (query) {
  var chunks = query.split(/([#.])/);
  var tagName = '';
  var id = '';
  var classNames = [];

  for (var i = 0; i < chunks.length; i++) {
    var chunk = chunks[i];
    if (chunk === '#') {
      id = chunks[++i];
    } else if (chunk === '.') {
      classNames.push(chunks[++i]);
    } else if (chunk.length) {
      tagName = chunk;
    }
  }

  return {
    tag: tagName || 'div',
    id: id,
    className: classNames.join(' ')
  };
}

function createElement (query, ns) {
  var ref = parseQuery(query);
  var tag = ref.tag;
  var id = ref.id;
  var className = ref.className;
  var element = ns ? document.createElementNS(ns, tag) : document.createElement(tag);

  if (id) {
    element.id = id;
  }

  if (className) {
    if (ns) {
      element.setAttribute('class', className);
    } else {
      element.className = className;
    }
  }

  return element;
}

function unmount (parent, child) {
  var parentEl = getEl(parent);
  var childEl = getEl(child);

  if (child === childEl && childEl.__redom_view) {
    // try to look up the view if not provided
    child = childEl.__redom_view;
  }

  if (childEl.parentNode) {
    doUnmount(child, childEl, parentEl);

    parentEl.removeChild(childEl);
  }

  return child;
}

function doUnmount (child, childEl, parentEl) {
  var hooks = childEl.__redom_lifecycle;

  if (hooksAreEmpty(hooks)) {
    childEl.__redom_lifecycle = {};
    return;
  }

  var traverse = parentEl;

  if (childEl.__redom_mounted) {
    trigger(childEl, 'onunmount');
  }

  while (traverse) {
    var parentHooks = traverse.__redom_lifecycle || {};

    for (var hook in hooks) {
      if (parentHooks[hook]) {
        parentHooks[hook] -= hooks[hook];
      }
    }

    if (hooksAreEmpty(parentHooks)) {
      traverse.__redom_lifecycle = null;
    }

    traverse = traverse.parentNode;
  }
}

function hooksAreEmpty (hooks) {
  if (hooks == null) {
    return true;
  }
  for (var key in hooks) {
    if (hooks[key]) {
      return false;
    }
  }
  return true;
}

/* global Node, ShadowRoot */

var hookNames = ['onmount', 'onremount', 'onunmount'];
var shadowRootAvailable = typeof window !== 'undefined' && 'ShadowRoot' in window;

function mount (parent, child, before, replace) {
  var parentEl = getEl(parent);
  var childEl = getEl(child);

  if (child === childEl && childEl.__redom_view) {
    // try to look up the view if not provided
    child = childEl.__redom_view;
  }

  if (child !== childEl) {
    childEl.__redom_view = child;
  }

  var wasMounted = childEl.__redom_mounted;
  var oldParent = childEl.parentNode;

  if (wasMounted && (oldParent !== parentEl)) {
    doUnmount(child, childEl, oldParent);
  }

  if (before != null) {
    if (replace) {
      parentEl.replaceChild(childEl, getEl(before));
    } else {
      parentEl.insertBefore(childEl, getEl(before));
    }
  } else {
    parentEl.appendChild(childEl);
  }

  doMount(child, childEl, parentEl, oldParent);

  return child;
}

function trigger (el, eventName) {
  if (eventName === 'onmount' || eventName === 'onremount') {
    el.__redom_mounted = true;
  } else if (eventName === 'onunmount') {
    el.__redom_mounted = false;
  }

  var hooks = el.__redom_lifecycle;

  if (!hooks) {
    return;
  }

  var view = el.__redom_view;
  var hookCount = 0;

  view && view[eventName] && view[eventName]();

  for (var hook in hooks) {
    if (hook) {
      hookCount++;
    }
  }

  if (hookCount) {
    var traverse = el.firstChild;

    while (traverse) {
      var next = traverse.nextSibling;

      trigger(traverse, eventName);

      traverse = next;
    }
  }
}

function doMount (child, childEl, parentEl, oldParent) {
  var hooks = childEl.__redom_lifecycle || (childEl.__redom_lifecycle = {});
  var remount = (parentEl === oldParent);
  var hooksFound = false;

  for (var i = 0, list = hookNames; i < list.length; i += 1) {
    var hookName = list[i];

    if (!remount) { // if already mounted, skip this phase
      if (child !== childEl) { // only Views can have lifecycle events
        if (hookName in child) {
          hooks[hookName] = (hooks[hookName] || 0) + 1;
        }
      }
    }
    if (hooks[hookName]) {
      hooksFound = true;
    }
  }

  if (!hooksFound) {
    childEl.__redom_lifecycle = {};
    return;
  }

  var traverse = parentEl;
  var triggered = false;

  if (remount || (traverse && traverse.__redom_mounted)) {
    trigger(childEl, remount ? 'onremount' : 'onmount');
    triggered = true;
  }

  while (traverse) {
    var parent = traverse.parentNode;
    var parentHooks = traverse.__redom_lifecycle || (traverse.__redom_lifecycle = {});

    for (var hook in hooks) {
      parentHooks[hook] = (parentHooks[hook] || 0) + hooks[hook];
    }

    if (triggered) {
      break;
    } else {
      if (traverse.nodeType === Node.DOCUMENT_NODE ||
        (shadowRootAvailable && (traverse instanceof ShadowRoot)) ||
        (parent && parent.__redom_mounted)
      ) {
        trigger(traverse, remount ? 'onremount' : 'onmount');
        triggered = true;
      }
      traverse = parent;
    }
  }
}

function setStyle (view, arg1, arg2) {
  var el = getEl(view);

  if (typeof arg1 === 'object') {
    for (var key in arg1) {
      setStyleValue(el, key, arg1[key]);
    }
  } else {
    setStyleValue(el, arg1, arg2);
  }
}

function setStyleValue (el, key, value) {
  if (value == null) {
    el.style[key] = '';
  } else {
    el.style[key] = value;
  }
}

/* global SVGElement */

var xlinkns = 'http://www.w3.org/1999/xlink';

function setAttr (view, arg1, arg2) {
  setAttrInternal(view, arg1, arg2);
}

function setAttrInternal (view, arg1, arg2, initial) {
  var el = getEl(view);

  var isObj = typeof arg1 === 'object';

  if (isObj) {
    for (var key in arg1) {
      setAttrInternal(el, key, arg1[key], initial);
    }
  } else {
    var isSVG = el instanceof SVGElement;
    var isFunc = typeof arg2 === 'function';

    if (arg1 === 'style' && typeof arg2 === 'object') {
      setStyle(el, arg2);
    } else if (isSVG && isFunc) {
      el[arg1] = arg2;
    } else if (arg1 === 'dataset') {
      setData(el, arg2);
    } else if (!isSVG && (arg1 in el || isFunc) && (arg1 !== 'list')) {
      el[arg1] = arg2;
    } else {
      if (isSVG && (arg1 === 'xlink')) {
        setXlink(el, arg2);
        return;
      }
      if (initial && arg1 === 'class') {
        arg2 = el.className + ' ' + arg2;
      }
      if (arg2 == null) {
        el.removeAttribute(arg1);
      } else {
        el.setAttribute(arg1, arg2);
      }
    }
  }
}

function setXlink (el, arg1, arg2) {
  if (typeof arg1 === 'object') {
    for (var key in arg1) {
      setXlink(el, key, arg1[key]);
    }
  } else {
    if (arg2 != null) {
      el.setAttributeNS(xlinkns, arg1, arg2);
    } else {
      el.removeAttributeNS(xlinkns, arg1, arg2);
    }
  }
}

function setData (el, arg1, arg2) {
  if (typeof arg1 === 'object') {
    for (var key in arg1) {
      setData(el, key, arg1[key]);
    }
  } else {
    if (arg2 != null) {
      el.dataset[arg1] = arg2;
    } else {
      delete el.dataset[arg1];
    }
  }
}

function text (str) {
  return document.createTextNode((str != null) ? str : '');
}

function parseArgumentsInternal (element, args, initial) {
  for (var i = 0, list = args; i < list.length; i += 1) {
    var arg = list[i];

    if (arg !== 0 && !arg) {
      continue;
    }

    var type = typeof arg;

    if (type === 'function') {
      arg(element);
    } else if (type === 'string' || type === 'number') {
      element.appendChild(text(arg));
    } else if (isNode(getEl(arg))) {
      mount(element, arg);
    } else if (arg.length) {
      parseArgumentsInternal(element, arg, initial);
    } else if (type === 'object') {
      setAttrInternal(element, arg, null, initial);
    }
  }
}

function ensureEl (parent) {
  return typeof parent === 'string' ? html(parent) : getEl(parent);
}

function getEl (parent) {
  return (parent.nodeType && parent) || (!parent.el && parent) || getEl(parent.el);
}

function isNode (arg) {
  return arg && arg.nodeType;
}

var htmlCache = {};

function html (query) {
  var args = [], len = arguments.length - 1;
  while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

  var element;

  var type = typeof query;

  if (type === 'string') {
    element = memoizeHTML(query).cloneNode(false);
  } else if (isNode(query)) {
    element = query.cloneNode(false);
  } else if (type === 'function') {
    var Query = query;
    element = new (Function.prototype.bind.apply( Query, [ null ].concat( args) ));
  } else {
    throw new Error('At least one argument required');
  }

  parseArgumentsInternal(getEl(element), args, true);

  return element;
}

var el = html;
var h = html;

html.extend = function extendHtml (query) {
  var args = [], len = arguments.length - 1;
  while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

  var clone = memoizeHTML(query);

  return html.bind.apply(html, [ this, clone ].concat( args ));
};

function memoizeHTML (query) {
  return htmlCache[query] || (htmlCache[query] = createElement(query));
}

function setChildren (parent) {
  var children = [], len = arguments.length - 1;
  while ( len-- > 0 ) children[ len ] = arguments[ len + 1 ];

  var parentEl = getEl(parent);
  var current = traverse(parent, children, parentEl.firstChild);

  while (current) {
    var next = current.nextSibling;

    unmount(parent, current);

    current = next;
  }
}

function traverse (parent, children, _current) {
  var current = _current;

  var childEls = new Array(children.length);

  for (var i = 0; i < children.length; i++) {
    childEls[i] = children[i] && getEl(children[i]);
  }

  for (var i$1 = 0; i$1 < children.length; i$1++) {
    var child = children[i$1];

    if (!child) {
      continue;
    }

    var childEl = childEls[i$1];

    if (childEl === current) {
      current = current.nextSibling;
      continue;
    }

    if (isNode(childEl)) {
      var next = current && current.nextSibling;
      var exists = child.__redom_index != null;
      var replace = exists && next === childEls[i$1 + 1];

      mount(parent, child, current, replace);

      if (replace) {
        current = next;
      }

      continue;
    }

    if (child.length != null) {
      current = traverse(parent, child, current);
    }
  }

  return current;
}

function listPool (View, key, initData) {
  return new ListPool(View, key, initData);
}

var ListPool = function ListPool (View, key, initData) {
  this.View = View;
  this.initData = initData;
  this.oldLookup = {};
  this.lookup = {};
  this.oldViews = [];
  this.views = [];

  if (key != null) {
    this.key = typeof key === 'function' ? key : propKey(key);
  }
};

ListPool.prototype.update = function update (data, context) {
  var ref = this;
    var View = ref.View;
    var key = ref.key;
    var initData = ref.initData;
  var keySet = key != null;

  var oldLookup = this.lookup;
  var newLookup = {};

  var newViews = new Array(data.length);
  var oldViews = this.views;

  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    var view = (void 0);

    if (keySet) {
      var id = key(item);

      view = oldLookup[id] || new View(initData, item, i, data);
      newLookup[id] = view;
      view.__redom_id = id;
    } else {
      view = oldViews[i] || new View(initData, item, i, data);
    }
    view.update && view.update(item, i, data, context);

    var el = getEl(view.el);

    el.__redom_view = view;
    newViews[i] = view;
  }

  this.oldViews = oldViews;
  this.views = newViews;

  this.oldLookup = oldLookup;
  this.lookup = newLookup;
};

function propKey (key) {
  return function (item) {
    return item[key];
  };
}

function list (parent, View, key, initData) {
  return new List(parent, View, key, initData);
}

var List = function List (parent, View, key, initData) {
  this.View = View;
  this.initData = initData;
  this.views = [];
  this.pool = new ListPool(View, key, initData);
  this.el = ensureEl(parent);
  this.keySet = key != null;
};

List.prototype.update = function update (data, context) {
    if ( data === void 0 ) data = [];

  var ref = this;
    var keySet = ref.keySet;
  var oldViews = this.views;

  this.pool.update(data, context);

  var ref$1 = this.pool;
    var views = ref$1.views;
    var lookup = ref$1.lookup;

  if (keySet) {
    for (var i = 0; i < oldViews.length; i++) {
      var oldView = oldViews[i];
      var id = oldView.__redom_id;

      if (lookup[id] == null) {
        oldView.__redom_index = null;
        unmount(this, oldView);
      }
    }
  }

  for (var i$1 = 0; i$1 < views.length; i$1++) {
    var view = views[i$1];

    view.__redom_index = i$1;
  }

  setChildren(this, views);

  if (keySet) {
    this.lookup = lookup;
  }
  this.views = views;
};

List.extend = function extendList (parent, View, key, initData) {
  return List.bind(List, parent, View, key, initData);
};

list.extend = List.extend;

/* global Node */

function place (View, initData) {
  return new Place(View, initData);
}

var Place = function Place (View, initData) {
  this.el = text('');
  this.visible = false;
  this.view = null;
  this._placeholder = this.el;

  if (View instanceof Node) {
    this._el = View;
  } else if (View.el instanceof Node) {
    this._el = View;
    this.view = View;
  } else {
    this._View = View;
  }

  this._initData = initData;
};

Place.prototype.update = function update (visible, data) {
  var placeholder = this._placeholder;
  var parentNode = this.el.parentNode;

  if (visible) {
    if (!this.visible) {
      if (this._el) {
        mount(parentNode, this._el, placeholder);
        unmount(parentNode, placeholder);

        this.el = getEl(this._el);
        this.visible = visible;
      } else {
        var View = this._View;
        var view = new View(this._initData);

        this.el = getEl(view);
        this.view = view;

        mount(parentNode, view, placeholder);
        unmount(parentNode, placeholder);
      }
    }
    this.view && this.view.update && this.view.update(data);
  } else {
    if (this.visible) {
      if (this._el) {
        mount(parentNode, placeholder, this._el);
        unmount(parentNode, this._el);

        this.el = placeholder;
        this.visible = visible;

        return;
      }
      mount(parentNode, placeholder, this.view);
      unmount(parentNode, this.view);

      this.el = placeholder;
      this.view = null;
    }
  }
  this.visible = visible;
};

/* global Node */

function router (parent, Views, initData) {
  return new Router(parent, Views, initData);
}

var Router = function Router (parent, Views, initData) {
  this.el = ensureEl(parent);
  this.Views = Views;
  this.initData = initData;
};

Router.prototype.update = function update (route, data) {
  if (route !== this.route) {
    var Views = this.Views;
    var View = Views[route];

    this.route = route;

    if (View && (View instanceof Node || View.el instanceof Node)) {
      this.view = View;
    } else {
      this.view = View && new View(this.initData, data);
    }

    setChildren(this.el, [this.view]);
  }
  this.view && this.view.update && this.view.update(data, route);
};

var ns = 'http://www.w3.org/2000/svg';

var svgCache = {};

function svg (query) {
  var args = [], len = arguments.length - 1;
  while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

  var element;

  var type = typeof query;

  if (type === 'string') {
    element = memoizeSVG(query).cloneNode(false);
  } else if (isNode(query)) {
    element = query.cloneNode(false);
  } else if (type === 'function') {
    var Query = query;
    element = new (Function.prototype.bind.apply( Query, [ null ].concat( args) ));
  } else {
    throw new Error('At least one argument required');
  }

  parseArgumentsInternal(getEl(element), args, true);

  return element;
}

var s = svg;

svg.extend = function extendSvg (query) {
  var clone = memoizeSVG(query);

  return svg.bind(this, clone);
};

svg.ns = ns;

function memoizeSVG (query) {
  return svgCache[query] || (svgCache[query] = createElement(query, ns));
}




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_redom_dist_redom_min_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_redom_dist_redom_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_redom_dist_redom_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navbar_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidebar_js__ = __webpack_require__(4);




/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Navbar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redom__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Navbar = function () {
    function Navbar() {
        _classCallCheck(this, Navbar);

        console.log("one");
        this.el = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("nav.navbar is-fixed-top", { style: "left: 15rem;" }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("div.navbar-brand", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("a.navbar-item", { href: "#" }, "LOGO")), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("div.navbar-menu", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("div.navbar-end", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("a.navbar-item", { href: "#" }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("span.fas fa-bell")), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("div.navbar-item has-dropdown is-hoverable", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("a.navbar-link", { href: "#" }, "Student"), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("div.navbar-dropdown is-right", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("a.navbar-item", { href: "#" }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("span.fas fa-user"), "Personal Details"), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("a.navbar-item", { href: "#" }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("span.fas fa-trophy"), "Achivements"), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("a.navbar-item", { href: "#" }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("span.fas fa-question-circle"), "Help"), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("a.navbar-item", { href: "#" }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("span.fas fa-sign-out-alt"), "Logout"))))));
    }

    _createClass(Navbar, [{
        key: "onmount",
        value: function onmount() {
            console.log("Two");
        }
    }]);

    return Navbar;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* mount */])(document.body, new Navbar());

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Sidebar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redom__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Sidebar = function () {
    function Sidebar() {
        _classCallCheck(this, Sidebar);

        this.listItems = [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("a", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("span.fas fa-clipboard-list"), "Home"), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("a", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("span.fas fa-chalkboard-teacher"), "Lectures"), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("a", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("span.fas fa-calendar"), "Schedules"), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("a", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("span.fas fa-pen-square"), "Notes"), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("a", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("span.fas fa-cog"), "Settings")];

        this.menuWrapper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("div.menu-wrapper", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("aside.menu", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("ul.menu-list", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("li", this.listItems))));

        this.closeButton = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("span.fas fa-times");

        this.el = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("div.menu-container", this.closeButton, this.menuWrapper);
    }

    _createClass(Sidebar, [{
        key: "onmount",
        value: function onmount() {
            this.closeButton.onclick = function (evt) {
                console.log("hello");
            };

            var self = this;

            this.listItems.forEach(function (element) {
                element.onclick = function (evt) {

                    self.listItems.forEach(function (ele) {
                        ele.className = '';
                    });

                    element.className = 'is-active';
                };
            });
        }
    }]);

    return Sidebar;
}();

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* mount */])(document.body, new Sidebar());

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).redom={})}(this,(function(e){"use strict";function t(e,t){var i=function(e){for(var t=e.split(/([#.])/),i="",n="",o=[],r=0;r<t.length;r++){var l=t[r];"#"===l?n=t[++r]:"."===l?o.push(t[++r]):l.length&&(i=l)}return{tag:i||"div",id:n,className:o.join(" ")}}(e),n=i.tag,o=i.id,r=i.className,l=t?document.createElementNS(t,n):document.createElement(n);return o&&(l.id=o),r&&(t?l.setAttribute("class",r):l.className=r),l}function i(e,t){var i=m(e),o=m(t);return t===o&&o.__redom_view&&(t=o.__redom_view),o.parentNode&&(n(t,o,i),i.removeChild(o)),t}function n(e,t,i){var n=t.__redom_lifecycle;if(o(n))t.__redom_lifecycle={};else{var r=i;for(t.__redom_mounted&&u(t,"onunmount");r;){var l=r.__redom_lifecycle||{};for(var s in n)l[s]&&(l[s]-=n[s]);o(l)&&(r.__redom_lifecycle=null),r=r.parentNode}}}function o(e){if(null==e)return!0;for(var t in e)if(e[t])return!1;return!0}var r=["onmount","onremount","onunmount"],l="undefined"!=typeof window&&"ShadowRoot"in window;function s(e,t,i,o){var s=m(e),a=m(t);t===a&&a.__redom_view&&(t=a.__redom_view),t!==a&&(a.__redom_view=t);var f=a.__redom_mounted,d=a.parentNode;return f&&d!==s&&n(0,a,d),null!=i?o?s.replaceChild(a,m(i)):s.insertBefore(a,m(i)):s.appendChild(a),function(e,t,i,n){for(var o=t.__redom_lifecycle||(t.__redom_lifecycle={}),s=i===n,a=!1,f=0,d=r;f<d.length;f+=1){var h=d[f];s||e!==t&&h in e&&(o[h]=(o[h]||0)+1),o[h]&&(a=!0)}if(!a)return void(t.__redom_lifecycle={});var v=i,c=!1;(s||v&&v.__redom_mounted)&&(u(t,s?"onremount":"onmount"),c=!0);for(;v;){var _=v.parentNode,p=v.__redom_lifecycle||(v.__redom_lifecycle={});for(var w in o)p[w]=(p[w]||0)+o[w];if(c)break;(v.nodeType===Node.DOCUMENT_NODE||l&&v instanceof ShadowRoot||_&&_.__redom_mounted)&&(u(v,s?"onremount":"onmount"),c=!0),v=_}}(t,a,s,d),t}function u(e,t){"onmount"===t||"onremount"===t?e.__redom_mounted=!0:"onunmount"===t&&(e.__redom_mounted=!1);var i=e.__redom_lifecycle;if(i){var n=e.__redom_view,o=0;for(var r in n&&n[t]&&n[t](),i)r&&o++;if(o)for(var l=e.firstChild;l;){var s=l.nextSibling;u(l,t),l=s}}}function a(e,t,i){var n=m(e);if("object"==typeof t)for(var o in t)f(n,o,t[o]);else f(n,t,i)}function f(e,t,i){e.style[t]=null==i?"":i}var d="http://www.w3.org/1999/xlink";function h(e,t,i,n){var o=m(e);if("object"==typeof t)for(var r in t)h(o,r,t[r],n);else{var l=o instanceof SVGElement,s="function"==typeof i;if("style"===t&&"object"==typeof i)a(o,i);else if(l&&s)o[t]=i;else if("dataset"===t)c(o,i);else if(l||!(t in o)&&!s||"list"===t){if(l&&"xlink"===t)return void v(o,i);n&&"class"===t&&(i=o.className+" "+i),null==i?o.removeAttribute(t):o.setAttribute(t,i)}else o[t]=i}}function v(e,t,i){if("object"==typeof t)for(var n in t)v(e,n,t[n]);else null!=i?e.setAttributeNS(d,t,i):e.removeAttributeNS(d,t,i)}function c(e,t,i){if("object"==typeof t)for(var n in t)c(e,n,t[n]);else null!=i?e.dataset[t]=i:delete e.dataset[t]}function _(e){return document.createTextNode(null!=e?e:"")}function p(e,t,i){for(var n=0,o=t;n<o.length;n+=1){var r=o[n];if(0===r||r){var l=typeof r;"function"===l?r(e):"string"===l||"number"===l?e.appendChild(_(r)):y(m(r))?s(e,r):r.length?p(e,r,i):"object"===l&&h(e,r,null,i)}}}function w(e){return"string"==typeof e?b(e):m(e)}function m(e){return e.nodeType&&e||!e.el&&e||m(e.el)}function y(e){return e&&e.nodeType}var g={};function b(e){for(var t,i=[],n=arguments.length-1;n-- >0;)i[n]=arguments[n+1];var o=typeof e;if("string"===o)t=k(e).cloneNode(!1);else if(y(e))t=e.cloneNode(!1);else{if("function"!==o)throw new Error("At least one argument required");var r=e;t=new(Function.prototype.bind.apply(r,[null].concat(i)))}return p(m(t),i,!0),t}var N=b,x=b;function k(e){return g[e]||(g[e]=t(e))}function S(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];for(var o=m(e),r=A(e,t,o.firstChild);r;){var l=r.nextSibling;i(e,r),r=l}}function A(e,t,i){for(var n=i,o=new Array(t.length),r=0;r<t.length;r++)o[r]=t[r]&&m(t[r]);for(var l=0;l<t.length;l++){var u=t[l];if(u){var a=o[l];if(a!==n)if(y(a)){var f=n&&n.nextSibling,d=null!=u.__redom_index&&f===o[l+1];s(e,u,n,d),d&&(n=f)}else null!=u.length&&(n=A(e,u,n));else n=n.nextSibling}}return n}b.extend=function(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];var n=k(e);return b.bind.apply(b,[this,n].concat(t))};var D=function(e,t,i){this.View=e,this.initData=i,this.oldLookup={},this.lookup={},this.oldViews=[],this.views=[],null!=t&&(this.key="function"==typeof t?t:function(e){return function(t){return t[e]}}(t))};function V(e,t,i,n){return new j(e,t,i,n)}D.prototype.update=function(e,t){for(var i=this.View,n=this.key,o=this.initData,r=null!=n,l=this.lookup,s={},u=new Array(e.length),a=this.views,f=0;f<e.length;f++){var d=e[f],h=void 0;if(r){var v=n(d);h=l[v]||new i(o,d,f,e),s[v]=h,h.__redom_id=v}else h=a[f]||new i(o,d,f,e);h.update&&h.update(d,f,e,t),m(h.el).__redom_view=h,u[f]=h}this.oldViews=a,this.views=u,this.oldLookup=l,this.lookup=s};var j=function(e,t,i,n){this.View=t,this.initData=n,this.views=[],this.pool=new D(t,i,n),this.el=w(e),this.keySet=null!=i};j.prototype.update=function(e,t){void 0===e&&(e=[]);var n=this.keySet,o=this.views;this.pool.update(e,t);var r=this.pool,l=r.views,s=r.lookup;if(n)for(var u=0;u<o.length;u++){var a=o[u];null==s[a.__redom_id]&&(a.__redom_index=null,i(this,a))}for(var f=0;f<l.length;f++){l[f].__redom_index=f}S(this,l),n&&(this.lookup=s),this.views=l},j.extend=function(e,t,i,n){return j.bind(j,e,t,i,n)},V.extend=j.extend;var C=function(e,t){this.el=_(""),this.visible=!1,this.view=null,this._placeholder=this.el,e instanceof Node?this._el=e:e.el instanceof Node?(this._el=e,this.view=e):this._View=e,this._initData=t};C.prototype.update=function(e,t){var n=this._placeholder,o=this.el.parentNode;if(e){if(!this.visible)if(this._el)s(o,this._el,n),i(o,n),this.el=m(this._el),this.visible=e;else{var r=new(0,this._View)(this._initData);this.el=m(r),this.view=r,s(o,r,n),i(o,n)}this.view&&this.view.update&&this.view.update(t)}else if(this.visible){if(this._el)return s(o,n,this._el),i(o,this._el),this.el=n,void(this.visible=e);s(o,n,this.view),i(o,this.view),this.el=n,this.view=null}this.visible=e};var E=function(e,t,i){this.el=w(e),this.Views=t,this.initData=i};E.prototype.update=function(e,t){if(e!==this.route){var i=this.Views[e];this.route=e,i&&(i instanceof Node||i.el instanceof Node)?this.view=i:this.view=i&&new i(this.initData,t),S(this.el,[this.view])}this.view&&this.view.update&&this.view.update(t,e)};var T="http://www.w3.org/2000/svg",L={};function P(e){for(var t,i=[],n=arguments.length-1;n-- >0;)i[n]=arguments[n+1];var o=typeof e;if("string"===o)t=R(e).cloneNode(!1);else if(y(e))t=e.cloneNode(!1);else{if("function"!==o)throw new Error("At least one argument required");var r=e;t=new(Function.prototype.bind.apply(r,[null].concat(i)))}return p(m(t),i,!0),t}var O=P;function R(e){return L[e]||(L[e]=t(e,T))}P.extend=function(e){var t=R(e);return P.bind(this,t)},P.ns=T,e.List=j,e.ListPool=D,e.Place=C,e.Router=E,e.el=N,e.h=x,e.html=b,e.list=V,e.listPool=function(e,t,i){return new D(e,t,i)},e.mount=s,e.place=function(e,t){return new C(e,t)},e.router=function(e,t,i){return new E(e,t,i)},e.s=O,e.setAttr=function(e,t,i){h(e,t,i)},e.setChildren=S,e.setData=c,e.setStyle=a,e.setXlink=v,e.svg=P,e.text=_,e.unmount=i,Object.defineProperty(e,"__esModule",{value:!0})}));

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ })
/******/ ]);