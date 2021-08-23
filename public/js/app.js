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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return el; });
/* unused harmony export h */
/* unused harmony export html */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return list; });
/* unused harmony export listPool */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mount; });
/* unused harmony export place */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return router; });
/* unused harmony export s */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setAttr; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redom__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navbar_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidebar_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_page_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_lectures_page_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }








__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* mount */])(document.body, new __WEBPACK_IMPORTED_MODULE_2__sidebar_js__["a" /* Sidebar */]());
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* mount */])(document.body, new __WEBPACK_IMPORTED_MODULE_1__navbar_js__["a" /* Navbar */]());

var AuthMiddleware = function () {
    function AuthMiddleware() {
        _classCallCheck(this, AuthMiddleware);
    }

    _createClass(AuthMiddleware, [{
        key: 'exec',
        value: function exec(currentView, nextView, params) {
            console.log('From custom Middleware');
        }
    }]);

    return AuthMiddleware;
}();

var app = new __WEBPACK_IMPORTED_MODULE_5__main__["a" /* App */]().routes({
    home: __WEBPACK_IMPORTED_MODULE_3__pages_home_page_js__["a" /* HomePage */],
    default: __WEBPACK_IMPORTED_MODULE_3__pages_home_page_js__["a" /* HomePage */],
    lectures: __WEBPACK_IMPORTED_MODULE_4__pages_lectures_page_js__["a" /* LecturesPage */]
}).middlewares([new AuthMiddleware()]).start();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* unused harmony export goto */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redom__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var App = function () {
    function App() {
        _classCallCheck(this, App);

        this.middlewareList = [];
    }

    /**
     *
     * @param {type} routes the dictionary of views and names to redirect by
     * @param {type} defaultRoute the default route, if found. otherwise, the route 'default' is used
     * @returns {App}
     */


    _createClass(App, [{
        key: 'routes',
        value: function routes(_routes, defaultRoute) {
            this.app = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["d" /* router */])('div.app', _routes);
            this.defaultRoute = defaultRoute ? defaultRoute : 'default';
            this.currentView = this.defaultRoute;

            return this;
        }

        /**
         *
         * @param {type} middlewares a list of functions to execute in order before routing.
         *  If a middleware returns a name of a view differnt than the current target, then the following
         *  middlewares will not be called and a redirect to the returned view is done.
         * @returns {App}
         */

    }, {
        key: 'middlewares',
        value: function middlewares(_middlewares) {
            if (_middlewares) {
                this.middlewareList = _middlewares;
            }

            return this;
        }

        /**
         * Starts the Application at this base element on the dom. If no base element is provided, then the
         * <body> is the base element
         * @param {type} appBase the base element to use
         * @returns {App}
         */

    }, {
        key: 'start',
        value: function start(appBase) {
            var _this = this;

            if (appBase) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* mount */])(appBase, this.app);
            } else {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* mount */])(document.body, this.app);
            }

            window.onhashchange = function (e) {
                _this._doRoute();
            };

            window.onload = function (e) {
                _this._doRoute();
            };

            return this;
        }

        /**
         * Routes to the new view. If it is the same as the current view, middleware execution is
         * skipped. Otherwise, middlewares are executed.
         * @returns {undefined}
         */

    }, {
        key: '_doRoute',
        value: function _doRoute() {
            var routeUrl = window.location.hash.substr(1).split('/');
            var view = routeUrl[0];
            var paramString = window.location.hash.substr(1 + view.length);
            var params = routeUrl.splice(1, routeUrl.length).filter(function (param) {
                return param.length > 0;
            });

            if (this.app.Views[view]) {
                if (view !== this.currentView) {
                    var result = this._execMiddleware(this.currentView, view, params);
                    if (result && result) {
                        goto(result, params);
                    } else {
                        this.currentView = view;
                        this.app.update(view, params);
                    }
                } else {
                    this.currentView = view;
                    this.app.update(view, params);
                }
            } else {
                window.location.hash = this.defaultRoute + paramString;
            }
        }

        /**
         * Executes middlewares. if a middleware returns the name of the view other
         * than the current view, then the following middlewares will not be executed
         * and a redirect to the returned view is done
         * @param {type} currentView
         * @param {type} newView
         * @param {type} params
         * @returns {Boolean}
         */

    }, {
        key: '_execMiddleware',
        value: function _execMiddleware(currentView, newView, params) {
            if (this.middlewareList.length > 0) {
                var i = 0;
                for (i in this.middlewareList) {
                    var result = this.middlewareList[i].exec(currentView, newView, params);
                    if (result && result != newView) {
                        return result;
                    }
                }
            }
        }
    }]);

    return App;
}();




var goto = function goto(view, params) {
    var paramString = '';

    if (params && params.length > 0) {
        params.map(function (param) {
            paramString = paramString.concat('/').concat(param);
        });
    }

    window.location.hash = view + paramString;
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Navbar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redom__ = __webpack_require__(0);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Navbar = function Navbar() {
    _classCallCheck(this, Navbar);

    this.dropdownList = [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])("a.navbar-item", { href: "#" }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])("span.fas fa-user"), "Personal Details"), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])("a.navbar-item", { href: "#" }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])("span.fas fa-trophy"), "Achivements"), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])("a.navbar-item", { href: "#" }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])("span.fas fa-question-circle"), "Help"), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])("a.navbar-item", { href: "#" }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])("span.fas fa-sign-out-alt"), "Logout")];

    this.navBrand = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])("div.navbar-brand", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])("a.navbar-item", { href: "#" }, "LOGO"));

    this.el = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])("nav.navbar is-fixed-top", this.navBrand, { style: "left: 17rem;" }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])("div.navbar-menu", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])("div.navbar-end", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])("a.navbar-item", { href: "#" }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])("span.fas fa-bell")), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])("div.navbar-item has-dropdown is-hoverable", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])("a.navbar-link", { href: "#" }, "Teacher"), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])("div.navbar-dropdown is-right", this.dropdownList)))));
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redom__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var HomePage = function () {
    function HomePage() {
        var _this = this;

        _classCallCheck(this, HomePage);

        this.addClassButton = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])('button.button is-primary', 'Add class');

        this.closeModalButton = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])('button.modal-close is-large');

        this.createClassButton = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])('div.control', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])('button.button is-primary', 'Add', { type: 'submit' }));

        this.subjectName = '';
        this.setTime = '';
        this.timeData = function () {
            var am = document.getElementById('am');
            var pm = document.getElementById('pm');
            if (am.checked == true) {
                localStorage.setItem('TIME_DATA', am);
            } else if (pm.checked == true) {
                localStorage.setItem('TIME_DATA', pm);
            } else {
                console.log('no time data selected');
            }
        };

        this.form = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])('form', { id: 'addClass' }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])('h1.heading', 'Create Class'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])('div.field', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])('label.label', 'Subject Name'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])('div.control', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])('input.input', { type: 'text', placeholder: 'subject', id: 'subname', oninput: function oninput(e) {
                return _this.subjectName = e.target.value;
            } }))), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])('div.field', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])('label.label', 'Set Time'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])('div.control', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])('input.input', { type: 'text', placeholder: '00:00', id: 'time', oninput: function oninput(e) {
                return _this.setTime = e.target.value;
            } }))), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])('div.control', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])('lable.radio', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])('input', { type: 'radio', name: 'answer', id: 'am', value: 'AM', oninput: function oninput(e) {
                return _this.timeData = e.target.value;
            } }), 'AM'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])('lable.radio', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])('input', { type: 'radio', name: 'answer', id: 'pm', value: 'PM', oninput: function oninput(e) {
                return _this.timeData = e.target.value;
            } }), 'PM')), this.createClassButton);

        this.modal = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])('div.modal', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])('div.modal-background'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])('div.modal-content has-background-white py-5 px-5', this.form), this.closeModalButton);

        this.class = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])('div.box.class', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])('h6.day', 'Today'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])('h6.time', '10:30 AM'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])('h1.class-name', 'English'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])('button.button is-primary', 'Join'));

        this.classContainer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])('div.box.classes-container', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])('h1', 'Your Classes'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])('input#searchbar', { type: 'text', name: 'search', placeholder: 'Search..' }), this.class, this.addClassButton);

        this.el = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])('div.columns is-variable is-3', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])('div.column is-9 is-offset-2-desktop is-8-tablet is-offset-3-tablet is-12-mobile', this.classContainer), this.modal);
    }

    _createClass(HomePage, [{
        key: 'onmount',
        value: function onmount() {
            var _this2 = this;

            this.addClassButton.onclick = function (evt) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["c" /* setAttr */])(_this2.modal, {
                    className: 'modal is-active'
                });
            };

            this.closeModalButton.onclick = function (evt) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["c" /* setAttr */])(_this2.modal, {
                    className: 'modal'
                });
            };

            this.createClassButton.onclick = function (evt) {
                var classData = {
                    subjectName: _this2.subjectName,
                    setTime: _this2.setTime,
                    timeData: _this2.timeData
                };
                localStorage.setItem('ADDED_CLASS', JSON.stringify(classData));
            };
        }
    }, {
        key: 'update',
        value: function update(data) {
            console.log('Update function from home page');
        }
    }]);

    return HomePage;
}();

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LecturesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redom__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var LecturesPage = function () {
    function LecturesPage() {
        _classCallCheck(this, LecturesPage);

        this.el = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])('h1', 'Lectures Page');
    }

    _createClass(LecturesPage, [{
        key: 'update',
        value: function update(data) {
            console.log('Update function from lectures page');
        }
    }]);

    return LecturesPage;
}();

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sidebar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redom__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navbar__ = __webpack_require__(4);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var SidebarListItem = function () {
    function SidebarListItem() {
        _classCallCheck(this, SidebarListItem);

        this.itemPosition = -1;
        this.icon = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])('span');
        this.labelText = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])('span');
        this.labelWrapper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])('a', this.icon, this.labelText);

        this.el = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])('li', this.labelWrapper);
    }

    _createClass(SidebarListItem, [{
        key: "onmount",
        value: function onmount() {
            var _this = this;

            var itemClicked = new CustomEvent('sidebar:itemClicked', {
                bubbles: true,
                detail: {
                    itemPosition: this.itemPosition
                }
            });

            this.labelWrapper.onclick = function (evt) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["c" /* setAttr */])(_this.labelWrapper, {
                    className: 'is-active'
                });

                _this.labelWrapper.dispatchEvent(itemClicked);
            };
        }
    }, {
        key: "update",
        value: function update(data, index) {
            this.itemPosition = index;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["c" /* setAttr */])(this.icon, {
                className: data.icon
            });

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["c" /* setAttr */])(this.labelText, {
                textContent: data.name
            });

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["c" /* setAttr */])(this.labelWrapper, {
                href: data.link
            });
        }
    }, {
        key: "clearClasses",
        value: function clearClasses() {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["c" /* setAttr */])(this.labelWrapper, {
                className: ''
            });
        }
    }, {
        key: "clearNames",
        value: function clearNames() {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["c" /* setAttr */])(this.labelText, {
                className: 'is-hidden'
            });
        }
    }, {
        key: "showNames",
        value: function showNames() {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["c" /* setAttr */])(this.labelText, {
                className: 'is-block'
            });
        }
    }]);

    return SidebarListItem;
}();

var Sidebar = function () {
    function Sidebar() {
        _classCallCheck(this, Sidebar);

        var sidebarListData = [{
            name: 'Home',
            icon: 'fas fa-clipboard-list',
            link: '#home'
        }, {
            name: 'Lectures',
            icon: 'fas fa-chalkboard-teacher',
            link: '#lectures'
        }, {
            name: 'Schedules',
            icon: 'fas fa-calendar',
            link: '#home'
        }, {
            name: 'Notes',
            icon: 'fas fa-pen-square',
            link: '#lectures'
        }, {
            name: 'Settings',
            icon: 'fas fa-cog',
            link: '#lectures'
        }];

        this.listItems = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["e" /* list */])('ul.menu-list', SidebarListItem);

        this.listItems.update(sidebarListData);

        this.menuWrapper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])("div.menu-wrapper", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])("aside.menu", this.listItems));

        this.sidebarToggleButon = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])('span.fas fa-times', { 'data-toggle': false });

        this.el = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* el */])("div.menu-container", this.sidebarToggleButon, this.menuWrapper);
    }

    _createClass(Sidebar, [{
        key: "onmount",
        value: function onmount() {
            var _this2 = this;

            this.sidebarToggleButon.onclick = function (evt) {
                var sidebarToggled = _this2.sidebarToggleButon.getAttribute('data-toggle');

                if (sidebarToggled === 'false') {
                    _this2.closeSidebar();
                } else {
                    _this2.openSidebar();
                }
            };

            this.el.addEventListener('sidebar:itemClicked', function (event) {
                _this2.listItems.views.filter(function (view) {
                    return view.itemPosition != event.detail.itemPosition;
                }).forEach(function (element) {
                    return element.clearClasses();
                });
            }, false);
        }
    }, {
        key: "openSidebar",
        value: function openSidebar() {
            this.sidebarToggleButon.className = 'fas fa-times';
            this.listItems.views.forEach(function (labelText) {
                return labelText.showNames();
            });
            this.el.style.width = '';
            this.el.style.transition = '0.5s';
            this.sidebarToggleButon.setAttribute('data-toggle', false);
        }
    }, {
        key: "closeSidebar",
        value: function closeSidebar() {
            this.sidebarToggleButon.className = 'fas fa-bars';
            this.listItems.views.forEach(function (labelText) {
                return labelText.clearNames();
            });
            this.el.style.width = '5rem';
            this.el.style.transition = '0.5s';
            this.sidebarToggleButon.setAttribute('data-toggle', true);
        }
    }]);

    return Sidebar;
}();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ })
/******/ ]);