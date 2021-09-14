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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return list; });
/* unused harmony export listPool */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mount; });
/* unused harmony export place */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return router; });
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
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redom__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navbar_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidebar_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_page_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_lectures_page_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_schedules_page__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_classes_page__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main__ = __webpack_require__(5);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }










var Root = function Root() {
    _classCallCheck(this, Root);

    this.el = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div#root');
};

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* mount */])(document.body, new Root());

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

var NavContainer = function NavContainer() {
    _classCallCheck(this, NavContainer);

    this.el = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.is-flex', { id: 'nav-container' });
};

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* mount */])(document.getElementById('root'), new NavContainer());
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* mount */])(document.getElementById('nav-container'), new __WEBPACK_IMPORTED_MODULE_1__navbar_js__["a" /* Navbar */]());
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* mount */])(document.getElementById('nav-container'), new __WEBPACK_IMPORTED_MODULE_2__sidebar_js__["a" /* Sidebar */]());

var app = new __WEBPACK_IMPORTED_MODULE_7__main__["a" /* App */]().routes({
    home: __WEBPACK_IMPORTED_MODULE_3__pages_home_page_js__["a" /* HomePage */],
    default: __WEBPACK_IMPORTED_MODULE_3__pages_home_page_js__["a" /* HomePage */],
    lectures: __WEBPACK_IMPORTED_MODULE_4__pages_lectures_page_js__["a" /* LecturesPage */],
    schedules: __WEBPACK_IMPORTED_MODULE_5__pages_schedules_page__["a" /* SchedulesPage */],
    classes: __WEBPACK_IMPORTED_MODULE_6__pages_classes_page__["a" /* ClassesPage */]
}).middlewares([new AuthMiddleware()]).start(document.getElementById('nav-container'));

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
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
            this.app = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["e" /* router */])('div.app', _routes);
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
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* mount */])(appBase, this.app);
            } else {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["b" /* mount */])(document.body, this.app);
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Navbar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redom__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Navbar = function () {
    function Navbar() {
        _classCallCheck(this, Navbar);

        this.dropdownList = [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("a.navbar-item", { href: "#" }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("span.fas fa-user"), "Personal Details"), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("a.navbar-item", { href: "#" }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("span.fas fa-trophy"), "Achivements"), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("a.navbar-item", { href: "#" }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("span.fas fa-question-circle"), "Help"), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('hr.dropdown-divider'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("a.navbar-item", { href: "#" }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("span.fas fa-sign-out-alt"), "Logout")];

        this.navBrand = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("div.navbar-brand", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("a.navbar-item", { href: "#" }, "LOGO"));

        this.navbarDropdown = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("div.navbar-item has-dropdown", { 'data-toggle': true }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.dropdown-trigger', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("a.navbar-link", { href: "#" }, "Teacher"), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("div.navbar-dropdown is-right", this.dropdownList)));

        this.el = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("nav.navbar is-fixed-top", this.navBrand, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("div.navbar-menu", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("div.navbar-end", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("a.navbar-item", { href: "#" }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("span.fas fa-bell")), this.navbarDropdown)));
    }

    _createClass(Navbar, [{
        key: "onmount",
        value: function onmount() {
            var _this = this;

            this.navbarDropdown.onclick = function (evt) {
                evt.preventDefault();
                var dropdownToggled = _this.navbarDropdown.getAttribute('data-toggle');
                dropdownToggled === 'false' ? _this.closeDropdown() : _this.openDropdown();
            };
        }
    }, {
        key: "openDropdown",
        value: function openDropdown() {
            this.navbarDropdown.className = 'navbar-item has-dropdown is-active';
            this.navbarDropdown.setAttribute('data-toggle', false);
        }
    }, {
        key: "closeDropdown",
        value: function closeDropdown() {
            this.navbarDropdown.className = 'navbar-item has-dropdown';
            this.navbarDropdown.setAttribute('data-toggle', true);
        }
    }]);

    return Navbar;
}();

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redom__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var ClassesPage = function () {
    function ClassesPage() {
        _classCallCheck(this, ClassesPage);

        this.el = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('h1', 'Classes Page');
    }

    _createClass(ClassesPage, [{
        key: 'update',
        value: function update(data) {
            console.log('Update function from Classes page');
        }
    }]);

    return ClassesPage;
}();

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redom__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_color_calendar__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_color_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_color_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_color_calendar_dist_css_theme_basic_css__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_color_calendar_dist_css_theme_basic_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_color_calendar_dist_css_theme_basic_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_color_calendar_dist_css_theme_glass_css__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_color_calendar_dist_css_theme_glass_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_color_calendar_dist_css_theme_glass_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







var ClassListItem = function () {
    function ClassListItem() {
        _classCallCheck(this, ClassListItem);

        console.log('Class Item');
        this.timeData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('h6.timeData');
        this.time = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('h6.time');
        this.subject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('h1.subject');
        this.joinBtn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('button.button is-primary', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('span.fas fa-sign-in-alt'));
        this.editClassBtn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('button.button is-primary edit', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('span.fas fa-edit'));
        this.el = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.box.class', this.time, this.timeData, this.subject, this.joinBtn, this.editClassBtn);
    }

    _createClass(ClassListItem, [{
        key: 'update',
        value: function update(data) {
            console.log('Data: ', data);

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["c" /* setAttr */])(this.timeData, {
                textContent: data.timeData
            });

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["c" /* setAttr */])(this.time, {
                textContent: data.setTime
            });

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["c" /* setAttr */])(this.subject, {
                textContent: data.subjectName
            });

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["c" /* setAttr */])(this.joinBtn, {
                href: data.link
            });
        }
    }, {
        key: 'onmount',
        value: function onmount() {
            this.joinBtn.onclick = function (evt) {
                console.log("joined");
            };

            this.editClassBtn.onclick = function (evt) {
                console.log('edited');
            };
        }
    }]);

    return ClassListItem;
}();

var HomePage = function () {
    function HomePage() {
        var _this = this;

        _classCallCheck(this, HomePage);

        this.addClassButton = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('button.button is-primary add', 'Add class');
        this.closeModalButton = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('button.modal-close is-large');
        this.createClassButton = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.control', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('button.button is-primary', 'Add', { type: 'submit' }));

        this.subjectName = '';
        this.setTime = '';
        this.timeData = function () {
            var am = document.getElementById('am');
            var pm = document.getElementById('pm');

            if (am.checked) {
                localStorage.setItem('TIME_DATA', am);
            }

            if (pm.checked) {
                localStorage.setItem('TIME_DATA', pm);
            }
        };

        this.form = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('form', { id: 'addClass' }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('h1.heading', 'Create Class'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.field', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('label.label', 'Subject Name'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.control', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('input.input', {
            type: 'text',
            placeholder: 'subject',
            id: 'subname',
            oninput: function oninput(e) {
                return _this.subjectName = e.target.value;
            }
        }))), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.field', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('label.label', 'Set Time'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.control', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('input.input time', {
            type: 'text',
            placeholder: '00:00',
            id: 'time',
            oninput: function oninput(e) {
                return _this.setTime = e.target.value;
            }
        }))), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.control', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('lable.radio', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('input', {
            type: 'radio',
            name: 'answer',
            id: 'am',
            value: 'AM',
            oninput: function oninput(e) {
                return _this.timeData = e.target.value;
            }
        }), 'AM'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('lable.radio', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('input', {
            type: 'radio',
            name: 'answer',
            id: 'pm',
            value: 'PM',
            oninput: function oninput(e) {
                return _this.timeData = e.target.value;
            }
        }), 'PM')), this.createClassButton);

        this.modal = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.modal', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.modal-background'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.modal-content has-background-white py-5 px-5', this.form), this.closeModalButton);

        this.calendar = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div#color-calendar');
        this.classItems = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["d" /* list */])('ul.menu-list classItems', ClassListItem);
        this.noClasses = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('h1', 'No Classes');
        this.header = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.header', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('h1', 'Your Classes'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.field', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('p.control has-icons-left', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('i.fas fa-search'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('input#searchbar', {
            type: 'text',
            name: 'search',
            placeholder: 'Search..'
        }))));

        this.mainContent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.mainContent', this.calendar, this.classItems, this.noClasses);

        this.renderClasses();

        this.classesContainer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.box.classes-container', this.header, this.addClassButton, this.mainContent);

        this.el = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.columns', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.column', this.classesContainer), this.modal);
    }

    _createClass(HomePage, [{
        key: 'renderClasses',
        value: function renderClasses() {
            var allClassData = JSON.parse(localStorage.getItem('ADDED_CLASS')) || [];

            if (allClassData && allClassData.length) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["c" /* setAttr */])(this.noClasses, {
                    className: 'is-hidden'
                });
            }

            this.classItems.update(allClassData);
        }
    }, {
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
                evt.preventDefault();

                var newClassData = {
                    subjectName: _this2.subjectName,
                    setTime: _this2.setTime,
                    timeData: _this2.timeData
                };

                var existingClasses = JSON.parse(localStorage.getItem('ADDED_CLASS'));

                if (!existingClasses) {
                    existingClasses = [];
                }

                existingClasses.push(newClassData);
                localStorage.setItem('ADDED_CLASS', JSON.stringify(existingClasses));

                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["c" /* setAttr */])(_this2.modal, {
                    className: 'modal'
                });

                _this2.renderClasses();
            };

            this.el.addEventListener('classCreated', function (event) {
                _this2.renderClasses();
            });

            this.calendar = new __WEBPACK_IMPORTED_MODULE_1_color_calendar___default.a({
                id: '#color-calendar',
                primaryColor: 'var(--is-color-primary-high)',
                borderRadius: '5%'
            });
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LecturesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redom__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var LecturesPage = function () {
    function LecturesPage() {
        _classCallCheck(this, LecturesPage);

        this.videoContainer1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.video-container', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('span.fas fa-play'));
        this.videoContainer2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.video-container', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('span.fas fa-play'));
        this.videoContainer3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.video-container', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('span.fas fa-play'));

        this.videoContainer4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.video-container', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('span.fas fa-play'));
        this.videoContainer5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.video-container', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('span.fas fa-play'));
        this.videoContainer6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.video-container', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('span.fas fa-play'));

        this.header = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.header', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('h1', 'Your Recorded Lectures'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.field', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('p.control has-icons-left', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('i.fas fa-search'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('input#searchbar', {
            type: 'text',
            name: 'search',
            placeholder: 'Search..'
        }))));
        this.mainContent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.mainContent', this.videoContainer1, this.videoContainer2, this.videoContainer3, this.videoContainer4, this.videoContainer5, this.videoContainer6);

        this.el = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.box.lectures-container', this.header, this.mainContent);
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redom__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var SchedulesPage = function () {
    function SchedulesPage() {
        _classCallCheck(this, SchedulesPage);

        this.el = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('h1', 'schedules-page');
    }

    _createClass(SchedulesPage, [{
        key: 'update',
        value: function update(data) {
            console.log('Update function from Schedules Page');
        }
    }]);

    return SchedulesPage;
}();

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sidebar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redom__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var SidebarListItem = function () {
    function SidebarListItem() {
        _classCallCheck(this, SidebarListItem);

        this.itemPosition = -1;
        this.icon = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('span');
        this.labelText = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('span');
        this.labelWrapper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('a', this.icon, this.labelText);

        this.el = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('li', this.labelWrapper);
    }

    _createClass(SidebarListItem, [{
        key: 'onmount',
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
        key: 'update',
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
        key: 'clearClasses',
        value: function clearClasses() {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["c" /* setAttr */])(this.labelWrapper, {
                className: ''
            });
        }
    }, {
        key: 'clearNames',
        value: function clearNames() {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["c" /* setAttr */])(this.labelText, {
                className: 'is-hidden'
            });
        }
    }, {
        key: 'showNames',
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
            link: '#schedules'
        }, {
            name: 'Classes',
            icon: 'far fa-window-restore',
            link: '#classes'
        }, {
            name: 'Settings',
            icon: 'fas fa-cog',
            link: '#settings'
        }];

        this.listItems = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["d" /* list */])('ul.menu-list', SidebarListItem);

        this.listItems.update(sidebarListData);

        this.menuWrapper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("div.menu-wrapper", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("aside.menu", this.listItems));

        this.sidebarToggleButon = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('span.fas fa-times', { 'data-toggle': false });

        this.el = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])("div.menu-container", this.sidebarToggleButon, this.menuWrapper);
    }

    _createClass(Sidebar, [{
        key: 'onmount',
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
        key: 'openSidebar',
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
        key: 'closeSidebar',
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * color-calendar
 * v1.0.6
 * by Pawan Kolhe <contact@pawankolhe.com> (https://pawankolhe.com/)
 */

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Calendar=t()}(this,(function(){"use strict";class e{constructor(e={}){var t,a,i,r,n,s,o,l,d,c,h,y,p;if(this.CAL_NAME="color-calendar",this.DAYS_TO_DISPLAY=42,this.weekdayDisplayTypeOptions={short:["S","M","T","W","T","F","S"],"long-lower":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"long-upper":["SUN","MON","TUE","WED","THU","FRI","SAT"]},this.id=null!==(t=e.id)&&void 0!==t?t:"#color-calendar",this.calendarSize=null!==(a=e.calendarSize)&&void 0!==a?a:"large",this.layoutModifiers=null!==(i=e.layoutModifiers)&&void 0!==i?i:[],this.eventsData=null!==(r=e.eventsData)&&void 0!==r?r:[],this.theme=null!==(n=e.theme)&&void 0!==n?n:"basic",this.primaryColor=e.primaryColor,this.headerColor=e.headerColor,this.headerBackgroundColor=e.headerBackgroundColor,this.weekdaysColor=e.weekdaysColor,this.weekdayDisplayType=null!==(s=e.weekdayDisplayType)&&void 0!==s?s:"long-lower",this.monthDisplayType=null!==(o=e.monthDisplayType)&&void 0!==o?o:"long",this.startWeekday=null!==(l=e.startWeekday)&&void 0!==l?l:0,this.fontFamilyHeader=e.fontFamilyHeader,this.fontFamilyWeekdays=e.fontFamilyWeekdays,this.fontFamilyBody=e.fontFamilyBody,this.dropShadow=e.dropShadow,this.border=e.border,this.borderRadius=e.borderRadius,this.disableMonthYearPickers=null!==(d=e.disableMonthYearPickers)&&void 0!==d&&d,this.disableDayClick=null!==(c=e.disableDayClick)&&void 0!==c&&c,this.disableMonthArrowClick=null!==(h=e.disableMonthArrowClick)&&void 0!==h&&h,this.customMonthValues=e.customMonthValues,this.customWeekdayValues=e.customWeekdayValues,this.monthChanged=e.monthChanged,this.dateChanged=e.dateChanged,this.selectedDateClicked=e.selectedDateClicked,this.customWeekdayValues&&7===this.customWeekdayValues.length?this.weekdays=this.customWeekdayValues:this.weekdays=null!==(y=this.weekdayDisplayTypeOptions[this.weekdayDisplayType])&&void 0!==y?y:this.weekdayDisplayTypeOptions.short,this.today=new Date,this.currentDate=new Date,this.pickerType="month",this.eventDayMap={},this.oldSelectedNode=null,this.filteredEventsThisMonth=[],this.daysIn_PrevMonth=[],this.daysIn_CurrentMonth=[],this.daysIn_NextMonth=[],this.firstDay_PrevMonth=0,this.firstDay_CurrentMonth=0,this.firstDay_NextMonth=0,this.numOfDays_PrevMonth=0,this.numOfDays_CurrentMonth=0,this.numOfDays_NextMonth=0,this.yearPickerOffset=0,this.yearPickerOffsetTemporary=0,this.calendar=document.querySelector(this.id),!this.calendar)throw new Error(`[COLOR-CALENDAR] Element with selector '${this.id}' not found`);this.calendar.innerHTML=`\n      <div class="${this.CAL_NAME} ${this.theme} color-calendar--${this.calendarSize}">\n        <div class="calendar__header">\n          <div class="calendar__arrow calendar__arrow-prev"><div class="calendar__arrow-inner"></div></div>\n          <div class="calendar__monthyear">\n            <span class="calendar__month"></span>&nbsp;\n            <span class="calendar__year"></span>\n          </div>\n          <div class="calendar__arrow calendar__arrow-next"><div class="calendar__arrow-inner"></div></div>\n        </div>\n        <div class="calendar__body">\n          <div class="calendar__weekdays"></div>\n          <div class="calendar__days"></div>\n          <div class="calendar__picker">\n            <div class="calendar__picker-month">\n              ${(null!==(p=this.customMonthValues)&&void 0!==p?p:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]).map((e,t)=>`<div class="calendar__picker-month-option" data-value="${t}">${e}</div>`).join("")}\n            </div>\n            <div class="calendar__picker-year">\n              <div class="calendar__picker-year-option" data-value="0"></div>\n              <div class="calendar__picker-year-option" data-value="1"></div>\n              <div class="calendar__picker-year-option" data-value="2"></div>\n              <div class="calendar__picker-year-option" data-value="3"></div>\n              <div class="calendar__picker-year-option" data-value="4"></div>\n              <div class="calendar__picker-year-option" data-value="5"></div>\n              <div class="calendar__picker-year-option" data-value="6"></div>\n              <div class="calendar__picker-year-option" data-value="7"></div>\n              <div class="calendar__picker-year-option" data-value="8"></div>\n              <div class="calendar__picker-year-option" data-value="9"></div>\n              <div class="calendar__picker-year-option" data-value="10"></div>\n              <div class="calendar__picker-year-option" data-value="11"></div>\n              <div class="calendar__picker-year-arrow calendar__picker-year-arrow-left">\n                <div class="chevron-thin chevron-thin-left"></div>\n              </div>\n              <div class="calendar__picker-year-arrow calendar__picker-year-arrow-right">\n                <div class="chevron-thin chevron-thin-right"></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    `,this.calendarRoot=document.querySelector(`${this.id} .${this.CAL_NAME}`),this.calendarHeader=document.querySelector(this.id+" .calendar__header"),this.calendarWeekdays=document.querySelector(this.id+" .calendar__weekdays"),this.calendarDays=document.querySelector(this.id+" .calendar__days"),this.pickerContainer=document.querySelector(this.id+" .calendar__picker"),this.pickerMonthContainer=document.querySelector(this.id+" .calendar__picker-month"),this.pickerYearContainer=document.querySelector(this.id+" .calendar__picker-year"),this.yearPickerChevronLeft=document.querySelector(this.id+" .calendar__picker-year-arrow-left"),this.yearPickerChevronRight=document.querySelector(this.id+" .calendar__picker-year-arrow-right"),this.pickerMonthContainer.children[this.today.getMonth()].classList.add("calendar__picker-month-today"),this.layoutModifiers.forEach(e=>{this.calendarRoot.classList.add(e)}),this.layoutModifiers.includes("month-left-align")&&(this.calendarHeader.innerHTML='\n        <div class="calendar__monthyear">\n          <span class="calendar__month"></span>&nbsp;\n          <span class="calendar__year"></span>\n        </div>\n        <div class="calendar__arrow calendar__arrow-prev"><div class="calendar__arrow-inner"></div></div>\n        <div class="calendar__arrow calendar__arrow-next"><div class="calendar__arrow-inner"></div></div>\n      '),this.monthyearDisplay=document.querySelector(this.id+" .calendar__monthyear"),this.monthDisplay=document.querySelector(this.id+" .calendar__month"),this.yearDisplay=document.querySelector(this.id+" .calendar__year"),this.prevButton=document.querySelector(this.id+" .calendar__arrow-prev .calendar__arrow-inner"),this.nextButton=document.querySelector(this.id+" .calendar__arrow-next .calendar__arrow-inner"),this.togglePicker(!1),this.configureStylePreferences(),this.addEventListeners(),this.reset(new Date)}reset(e){this.currentDate=e||new Date,this.clearCalendarDays(),this.updateMonthYear(),this.updateMonthPickerSelection(this.currentDate.getMonth()),this.generatePickerYears(),this.updateYearPickerSelection(this.currentDate.getFullYear(),4),this.updateYearPickerTodaySelection(),this.generateWeekdays(),this.generateDays(),this.selectDayInitial(!!e),this.renderDays(),this.setOldSelectedNode(),this.dateChanged&&this.dateChanged(this.currentDate,this.getDateEvents(this.currentDate)),this.monthChanged&&this.monthChanged(this.currentDate,this.getMonthEvents())}}return e.prototype.addEventListeners=function(){this.prevButton.addEventListener("click",this.handlePrevMonthButtonClick.bind(this)),this.nextButton.addEventListener("click",this.handleNextMonthButtonClick.bind(this)),this.monthyearDisplay.addEventListener("click",this.handleMonthYearDisplayClick.bind(this)),this.calendarDays.addEventListener("click",this.handleCalendarDayClick.bind(this)),this.pickerMonthContainer.addEventListener("click",this.handleMonthPickerClick.bind(this)),this.pickerYearContainer.addEventListener("click",this.handleYearPickerClick.bind(this)),this.yearPickerChevronLeft.addEventListener("click",this.handleYearChevronLeftClick.bind(this)),this.yearPickerChevronRight.addEventListener("click",this.handleYearChevronRightClick.bind(this))},e.prototype.configureStylePreferences=function(){let e=this.calendarRoot;this.primaryColor&&e.style.setProperty("--cal-color-primary",this.primaryColor),this.fontFamilyHeader&&e.style.setProperty("--cal-font-family-header",this.fontFamilyHeader),this.fontFamilyWeekdays&&e.style.setProperty("--cal-font-family-weekdays",this.fontFamilyWeekdays),this.fontFamilyBody&&e.style.setProperty("--cal-font-family-body",this.fontFamilyBody),this.dropShadow&&e.style.setProperty("--cal-drop-shadow",this.dropShadow),this.border&&e.style.setProperty("--cal-border",this.border),this.borderRadius&&e.style.setProperty("--cal-border-radius",this.borderRadius),this.headerColor&&e.style.setProperty("--cal-header-color",this.headerColor),this.headerBackgroundColor&&e.style.setProperty("--cal-header-background-color",this.headerBackgroundColor),this.weekdaysColor&&e.style.setProperty("--cal-weekdays-color",this.weekdaysColor)},e.prototype.togglePicker=function(e){!0===e?(this.pickerContainer.style.visibility="visible",this.pickerContainer.style.opacity="1","year"===this.pickerType&&this.generatePickerYears(),this.removeYearPickerSelection(),this.updateYearPickerSelection(this.currentDate.getFullYear())):!1===e?(this.pickerContainer.style.visibility="hidden",this.pickerContainer.style.opacity="0",this.monthDisplay&&this.yearDisplay&&(this.monthDisplay.style.opacity="1",this.yearDisplay.style.opacity="1"),this.yearPickerOffsetTemporary=0):"hidden"===this.pickerContainer.style.visibility?(this.pickerContainer.style.visibility="visible",this.pickerContainer.style.opacity="1","year"===this.pickerType&&this.generatePickerYears(),this.removeYearPickerSelection(),this.updateYearPickerSelection(this.currentDate.getFullYear())):(this.pickerContainer.style.visibility="hidden",this.pickerContainer.style.opacity="0",this.monthDisplay&&this.yearDisplay&&(this.monthDisplay.style.opacity="1",this.yearDisplay.style.opacity="1"),this.yearPickerOffsetTemporary=0)},e.prototype.handleMonthPickerClick=function(e){if(!e.target.classList.contains("calendar__picker-month-option"))return;const t=parseInt(e.target.dataset.value,10);this.updateMonthPickerSelection(t),this.updateCurrentDate(0,void 0,t),this.togglePicker(!1)},e.prototype.updateMonthPickerSelection=function(e){e<0?e=11:e%=12,this.removeMonthPickerSelection(),this.pickerMonthContainer.children[e].classList.add("calendar__picker-month-selected")},e.prototype.removeMonthPickerSelection=function(){for(let e=0;e<12;e++)this.pickerMonthContainer.children[e].classList.contains("calendar__picker-month-selected")&&this.pickerMonthContainer.children[e].classList.remove("calendar__picker-month-selected")},e.prototype.handleYearPickerClick=function(e){if(!e.target.classList.contains("calendar__picker-year-option"))return;this.yearPickerOffset+=this.yearPickerOffsetTemporary;const t=parseInt(e.target.innerText),a=parseInt(e.target.dataset.value);this.updateYearPickerSelection(t,a),this.updateCurrentDate(0,void 0,void 0,t),this.togglePicker(!1)},e.prototype.updateYearPickerSelection=function(e,t){if(void 0===t){for(let a=0;a<12;a++){let i=this.pickerYearContainer.children[a];if(parseInt(i.innerHTML)===e&&i.dataset.value){t=parseInt(i.dataset.value);break}}if(void 0===t)return}this.removeYearPickerSelection(),this.pickerYearContainer.children[t].classList.add("calendar__picker-year-selected")},e.prototype.updateYearPickerTodaySelection=function(){parseInt(this.pickerYearContainer.children[4].innerHTML)===this.today.getFullYear()?this.pickerYearContainer.children[4].classList.add("calendar__picker-year-today"):this.pickerYearContainer.children[4].classList.remove("calendar__picker-year-today")},e.prototype.removeYearPickerSelection=function(){for(let e=0;e<12;e++)this.pickerYearContainer.children[e].classList.contains("calendar__picker-year-selected")&&this.pickerYearContainer.children[e].classList.remove("calendar__picker-year-selected")},e.prototype.generatePickerYears=function(){const e=this.today.getFullYear()+this.yearPickerOffset+this.yearPickerOffsetTemporary;let t=0;for(let a=e-4;a<=e+7;a++){this.pickerYearContainer.children[t].innerText=a.toString(),t++}this.updateYearPickerTodaySelection()},e.prototype.handleYearChevronLeftClick=function(){this.yearPickerOffsetTemporary-=12,this.generatePickerYears(),this.removeYearPickerSelection(),this.updateYearPickerSelection(this.currentDate.getFullYear()),this.updateYearPickerTodaySelection()},e.prototype.handleYearChevronRightClick=function(){this.yearPickerOffsetTemporary+=12,this.generatePickerYears(),this.removeYearPickerSelection(),this.updateYearPickerSelection(this.currentDate.getFullYear()),this.updateYearPickerTodaySelection()},e.prototype.setMonthDisplayType=function(e){this.monthDisplayType=e,this.updateMonthYear()},e.prototype.handleMonthYearDisplayClick=function(e){if(!e.target.classList.contains("calendar__month")&&!e.target.classList.contains("calendar__year"))return;if(this.disableMonthYearPickers)return;const t=this.pickerType,a=e.target.classList;a.contains("calendar__month")?(this.pickerType="month",this.monthDisplay.style.opacity="1",this.yearDisplay.style.opacity="0.7",this.pickerMonthContainer.style.display="grid",this.pickerYearContainer.style.display="none"):a.contains("calendar__year")&&(this.pickerType="year",this.monthDisplay.style.opacity="0.7",this.yearDisplay.style.opacity="1",this.pickerMonthContainer.style.display="none",this.pickerYearContainer.style.display="grid"),t===this.pickerType?this.togglePicker():this.togglePicker(!0)},e.prototype.handlePrevMonthButtonClick=function(){if(this.disableMonthArrowClick)return;const e=this.currentDate.getMonth()-1;this.currentDate.getFullYear()<=this.today.getFullYear()+this.yearPickerOffset-4&&e<0&&(this.yearPickerOffset-=12,this.generatePickerYears()),e<0&&this.updateYearPickerSelection(this.currentDate.getFullYear()-1),this.updateMonthPickerSelection(e),this.updateCurrentDate(-1),this.togglePicker(!1)},e.prototype.handleNextMonthButtonClick=function(){if(this.disableMonthArrowClick)return;const e=this.currentDate.getMonth()+1;this.currentDate.getFullYear()>=this.today.getFullYear()+this.yearPickerOffset+7&&e>11&&(this.yearPickerOffset+=12,this.generatePickerYears()),e>11&&this.updateYearPickerSelection(this.currentDate.getFullYear()+1),this.updateMonthPickerSelection(e),this.updateCurrentDate(1),this.togglePicker(!1)},e.prototype.updateMonthYear=function(){this.oldSelectedNode=null,this.customMonthValues?this.monthDisplay.innerHTML=this.customMonthValues[this.currentDate.getMonth()]:this.monthDisplay.innerHTML=new Intl.DateTimeFormat("default",{month:this.monthDisplayType}).format(this.currentDate),this.yearDisplay.innerHTML=this.currentDate.getFullYear().toString()},e.prototype.setWeekdayDisplayType=function(e){var t;this.weekdayDisplayType=e,this.weekdays=null!==(t=this.weekdayDisplayTypeOptions[this.weekdayDisplayType])&&void 0!==t?t:this.weekdayDisplayTypeOptions.short,this.generateWeekdays()},e.prototype.generateWeekdays=function(){let e="";for(let t=0;t<7;t++)e+=`\n      <div class="calendar__weekday">${this.weekdays[(t+this.startWeekday)%7]}</div>\n    `;this.calendarWeekdays.innerHTML=e},e.prototype.setDate=function(e){e&&(e instanceof Date?this.reset(e):this.reset(new Date(e)))},e.prototype.getSelectedDate=function(){return this.currentDate},e.prototype.clearCalendarDays=function(){this.daysIn_PrevMonth=[],this.daysIn_CurrentMonth=[],this.daysIn_NextMonth=[]},e.prototype.updateCalendar=function(e){e&&(this.updateMonthYear(),this.clearCalendarDays(),this.generateDays(),this.selectDayInitial()),this.renderDays(),e&&this.setOldSelectedNode()},e.prototype.setOldSelectedNode=function(){if(!this.oldSelectedNode){let e=void 0;for(let t=1;t<this.calendarDays.childNodes.length;t+=2){let a=this.calendarDays.childNodes[t];if(a.classList&&a.classList.contains("calendar__day-active")&&a.innerText===this.currentDate.getDate().toString()){e=a;break}}e&&(this.oldSelectedNode=[e,parseInt(e.innerText)])}},e.prototype.selectDayInitial=function(e){if(e)this.daysIn_CurrentMonth[this.currentDate.getDate()-1].selected=!0;else{let e=this.today.getMonth()===this.currentDate.getMonth(),t=this.today.getDate()===this.currentDate.getDate();e&&t?this.daysIn_CurrentMonth[this.today.getDate()-1].selected=!0:this.daysIn_CurrentMonth[0].selected=!0}},e.prototype.handleCalendarDayClick=function(e){if(!(e.target.classList.contains("calendar__day-box")||e.target.classList.contains("calendar__day-text")||e.target.classList.contains("calendar__day-box-today")||e.target.classList.contains("calendar__day-bullet")))return;if(this.disableDayClick)return;if(this.oldSelectedNode&&!this.oldSelectedNode[0])return;if(e.target.parentElement.classList.contains("calendar__day-selected"))return void(this.selectedDateClicked&&this.selectedDateClicked(this.currentDate,this.getDateEvents(this.currentDate)));let t,a;t=e.target.parentElement.innerText,a=parseInt(t,10),this.removeOldDaySelection(),t&&(this.updateCurrentDate(0,a),Object.assign(this.daysIn_CurrentMonth[a-1],{selected:!0}),this.rerenderSelectedDay(e.target.parentElement,a,!0))},e.prototype.removeOldDaySelection=function(){this.oldSelectedNode&&(Object.assign(this.daysIn_CurrentMonth[this.oldSelectedNode[1]-1],{selected:!1}),this.rerenderSelectedDay(this.oldSelectedNode[0],this.oldSelectedNode[1]))},e.prototype.updateCurrentDate=function(e,t,a,i){this.currentDate=new Date(i||this.currentDate.getFullYear(),null!=a?a:this.currentDate.getMonth()+e,0===e&&t?t:1),(0!==e||null!=a||i)&&(this.updateCalendar(!0),this.monthChanged&&this.monthChanged(this.currentDate,this.getMonthEvents())),this.dateChanged&&this.dateChanged(this.currentDate,this.getDateEvents(this.currentDate))},e.prototype.generateDays=function(){this.numOfDays_PrevMonth=new Date(this.currentDate.getFullYear(),this.currentDate.getMonth(),0).getDate(),this.firstDay_CurrentMonth=new Date(this.currentDate.getFullYear(),this.currentDate.getMonth(),1).getDay(),this.numOfDays_CurrentMonth=new Date(this.currentDate.getFullYear(),this.currentDate.getMonth()+1,0).getDate();for(let e=0;e<this.numOfDays_CurrentMonth;e++)this.daysIn_CurrentMonth.push({day:e+1,selected:!1})},e.prototype.renderDays=function(){let e=0;const t=this.currentDate.getFullYear(),a=this.currentDate.getMonth();let i;this.filteredEventsThisMonth=this.eventsData.filter(e=>{const i=new Date(e.start);return i.getFullYear()===t&&i.getMonth()===a}),this.eventDayMap={},this.filteredEventsThisMonth.forEach(e=>{const t=new Date(e.start).getDate(),a=new Date(e.end).getDate();for(let e=t;e<=a;e++)this.eventDayMap[e]=!0}),i=this.firstDay_CurrentMonth<this.startWeekday?7+this.firstDay_CurrentMonth-this.startWeekday:this.firstDay_CurrentMonth-this.startWeekday;let r="";for(let t=0;t<i;t++)r+=`\n      <div class="calendar__day calendar__day-other">${this.numOfDays_PrevMonth+1-i+t}</div>\n    `,e++;let n=this.today.getFullYear()===this.currentDate.getFullYear(),s=this.today.getMonth()===this.currentDate.getMonth()&&n;this.daysIn_CurrentMonth.forEach(t=>{let a=s&&t.day===this.today.getDate();r+=`\n      <div class="calendar__day calendar__day-active${a?" calendar__day-today":""}${this.eventDayMap[t.day]?" calendar__day-event":" calendar__day-no-event"}${t.selected?" calendar__day-selected":""}">\n        <span class="calendar__day-text">${t.day}</span>\n        <div class="calendar__day-bullet"></div>\n        <div class="calendar__day-box"></div>\n      </div>\n    `,e++});for(let t=0;t<this.DAYS_TO_DISPLAY-e;t++)r+=`\n      <div class="calendar__day calendar__day-other">${t+1}</div>\n    `;this.calendarDays.innerHTML=r},e.prototype.rerenderSelectedDay=function(e,t,a){let i=e.previousElementSibling,r=this.today.getFullYear()===this.currentDate.getFullYear(),n=this.today.getMonth()===this.currentDate.getMonth()&&r&&t===this.today.getDate(),s=document.createElement("div");s.className+=`calendar__day calendar__day-active${n?" calendar__day-today":""}${this.eventDayMap[t]?" calendar__day-event":" calendar__day-no-event"}${this.daysIn_CurrentMonth[t-1].selected?" calendar__day-selected":""}`,s.innerHTML=`\n    <span class="calendar__day-text">${t}</span>\n    <div class="calendar__day-bullet"></div>\n    <div class="calendar__day-box"></div>\n  `,i?i.parentElement?i.parentElement.insertBefore(s,i.nextSibling):console.log("Previous element does not have parent"):this.calendarDays.insertBefore(s,e),a&&(this.oldSelectedNode=[s,t]),e.remove()},e.prototype.getEventsData=function(){return JSON.parse(JSON.stringify(this.eventsData))},e.prototype.setEventsData=function(e){return this.eventsData=JSON.parse(JSON.stringify(e)),this.setDate(this.currentDate),this.eventsData.length},e.prototype.addEventsData=function(e=[]){const t=this.eventsData.push(...e);return this.setDate(this.currentDate),t},e.prototype.getDateEvents=function(e){return this.filteredEventsThisMonth.filter(t=>{const a=new Date(t.start).getDate(),i=new Date(t.end).getDate();return e.getDate()>=a&&e.getDate()<=i})},e.prototype.getMonthEvents=function(){return this.filteredEventsThisMonth},e}));


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, ".color-calendar {\n  position: relative;\n  display: inline-flex;\n  flex-direction: column;\n  width: auto;\n  height: auto;\n  box-sizing: border-box;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  font-family: var(--cal-font-family-body);\n  font-size: 1rem;\n}\n\n.color-calendar .calendar__header {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(7, minmax(20px, 55px));\n  font-family: var(--cal-font-family-header);\n}\n\n.color-calendar .calendar__monthyear {\n  font-size: 1.5rem;\n  margin: 0 auto;\n  text-align: center;\n  grid-column: 2/span 5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.color-calendar .calendar__monthyear .calendar__month {\n  cursor: pointer;\n}\n.color-calendar .calendar__monthyear .calendar__year {\n  cursor: pointer;\n}\n\n.color-calendar .calendar__arrow {\n  height: 35px;\n  width: 100%;\n  position: relative;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  z-index: 101;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.color-calendar .calendar__arrow-inner {\n  width: 35px;\n  height: 35px;\n  position: relative;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.color-calendar .calendar__arrow-prev {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.color-calendar .calendar__arrow-prev .calendar__arrow-inner::before {\n  margin-left: 0.3em;\n  transform: rotate(-135deg);\n}\n.color-calendar .calendar__arrow-next {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.color-calendar .calendar__arrow-next .calendar__arrow-inner::before {\n  margin-right: 0.3em;\n  transform: rotate(45deg);\n}\n\n.color-calendar .calendar__body {\n  height: auto;\n  overflow: hidden;\n}\n\n.color-calendar .calendar__weekdays {\n  display: grid;\n  grid-template-columns: repeat(7, minmax(20px, 55px));\n  margin-bottom: 5px;\n  font-family: var(--cal-font-family-weekdays);\n}\n.color-calendar .calendar__weekdays .calendar__weekday {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 40px;\n}\n\n.color-calendar .calendar__days {\n  display: grid;\n  grid-template-columns: repeat(7, minmax(20px, 55px));\n  grid-template-rows: repeat(6, minmax(30px, 40px));\n  font-family: var(--cal-font-family-body);\n}\n.color-calendar .calendar__days .calendar__day {\n  position: relative;\n  z-index: 101;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.color-calendar .calendar__days .calendar__day-text {\n  cursor: pointer;\n}\n.color-calendar .calendar__days .calendar__day-box {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: calc(55% + 8px);\n  height: 90%;\n  opacity: 0;\n  z-index: -1;\n  cursor: pointer;\n  transition: opacity 0.3s ease-out;\n  will-change: opacity;\n}\n.color-calendar .calendar__days .calendar__day-event {\n  /* Event Bullet */\n}\n.color-calendar .calendar__days .calendar__day-event .calendar__day-bullet {\n  position: absolute;\n  top: 80%;\n  border-radius: 50%;\n  width: 4px;\n  height: 4px;\n  left: 50%;\n  transform: translateX(-50%);\n  overflow: hidden;\n  cursor: pointer;\n}\n.color-calendar .calendar__days .calendar__day-selected:not(.calendar__day-today) .calendar__day-box {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: calc(55% + 8px);\n  height: 90%;\n  z-index: -1;\n  cursor: pointer;\n}\n\n.color-calendar .calendar__picker {\n  position: absolute;\n  z-index: 201;\n  width: 100%;\n  top: 75px;\n  left: 0;\n  bottom: 0;\n  background-color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.3s ease;\n  font-family: var(--cal-font-family-body);\n}\n.color-calendar .calendar__picker .calendar__picker-month {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  grid-template-rows: repeat(4, minmax(0, 1fr));\n  grid-gap: 1rem 6%;\n  gap: 1rem 6%;\n  margin: 8%;\n  transition: none;\n}\n.color-calendar .calendar__picker .calendar__picker-month-option {\n  position: relative;\n  text-align: center;\n  padding: 15px 0;\n  font-weight: 700;\n  color: #323232;\n  border-radius: var(--cal-border-radius);\n  align-self: center;\n  cursor: pointer;\n}\n.color-calendar .calendar__picker .calendar__picker-month-option::after {\n  content: \"\";\n  width: 100%;\n  height: 50px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: var(--cal-color-primary);\n  border-radius: var(--cal-border-radius);\n  opacity: 0.1;\n  z-index: -1;\n}\n.color-calendar .calendar__picker .calendar__picker-month-option:hover:after {\n  opacity: 0.08;\n}\n.color-calendar .calendar__picker .calendar__picker-month-selected {\n  color: white;\n}\n.color-calendar .calendar__picker .calendar__picker-month-selected::after {\n  opacity: 1;\n}\n.color-calendar .calendar__picker .calendar__picker-month-selected:hover:after {\n  opacity: 0.9;\n}\n.color-calendar .calendar__picker .calendar__picker-year {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  grid-template-rows: repeat(4, minmax(0, 1fr));\n  grid-gap: 1rem 6%;\n  gap: 1rem 6%;\n  margin: 8%;\n  transition: none;\n}\n.color-calendar .calendar__picker .calendar__picker-year-option {\n  position: relative;\n  text-align: center;\n  padding: 15px 0;\n  font-weight: 700;\n  color: #323232;\n  border-radius: var(--cal-border-radius);\n  align-self: center;\n  cursor: pointer;\n}\n.color-calendar .calendar__picker .calendar__picker-year-option::after {\n  content: \"\";\n  width: 100%;\n  height: 50px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: var(--cal-color-primary);\n  border-radius: var(--cal-border-radius);\n  opacity: 0.1;\n  z-index: -1;\n}\n.color-calendar .calendar__picker .calendar__picker-year-option:hover:after {\n  opacity: 0.08;\n}\n.color-calendar .calendar__picker .calendar__picker-year-selected {\n  color: white;\n}\n.color-calendar .calendar__picker .calendar__picker-year-selected::after {\n  opacity: 1;\n}\n.color-calendar .calendar__picker .calendar__picker-year-selected:hover:after {\n  opacity: 0.9;\n}\n.color-calendar .calendar__picker .calendar__picker-year-arrow {\n  position: absolute;\n  opacity: 0.4;\n  border-radius: var(--cal-border-radius);\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.color-calendar .calendar__picker .calendar__picker-year-arrow-left {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-left: 10px;\n  padding-right: 4px;\n}\n.color-calendar .calendar__picker .calendar__picker-year-arrow-right {\n  top: 0;\n  bottom: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 10px;\n}\n.color-calendar .calendar__picker .calendar__picker-year-arrow:hover {\n  opacity: 1;\n  background-color: #f8f8f8;\n}\n\n.chevron-thin-left {\n  display: inline-block;\n  border-right: 2px solid var(--cal-color-primary);\n  border-bottom: 2px solid var(--cal-color-primary);\n  width: 10px;\n  height: 10px;\n  transform: rotate(-225deg);\n}\n.chevron-thin-right {\n  display: inline-block;\n  border-right: 2px solid var(--cal-color-primary);\n  border-bottom: 2px solid var(--cal-color-primary);\n  width: 10px;\n  height: 10px;\n  transform: rotate(-45deg);\n}\n\n.color-calendar.month-left-align .calendar__header .calendar__monthyear {\n  grid-column: 1/span 5;\n  margin: 0;\n  justify-content: flex-start;\n  padding-left: 5%;\n}\n\n.color-calendar.basic {\n  --cal-color-primary: #000000;\n  --cal-font-family-header: \"Work Sans\", sans-serif;\n  --cal-font-family-weekdays: \"Work Sans\", sans-serif;\n  --cal-font-family-body: \"Work Sans\", sans-serif;\n  --cal-drop-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);\n  --cal-border: none;\n  --cal-border-radius: 0.5rem;\n  --cal-header-color: black;\n  --cal-weekdays-color: black;\n  border-radius: var(--cal-border-radius);\n  box-shadow: var(--cal-drop-shadow);\n  color: var(--cal-color-primary);\n  background-color: white;\n  border: var(--cal-border);\n}\n\n.color-calendar.basic .calendar__header {\n  padding: 20px 14px 0px 14px;\n  color: var(--cal-header-color);\n}\n\n.color-calendar.basic .calendar__monthyear {\n  font-weight: 600;\n  color: var(--cal-header-color);\n}\n\n.color-calendar.basic .calendar__arrow-inner {\n  border-radius: 50%;\n}\n.color-calendar.basic .calendar__arrow-inner::before {\n  content: \"\";\n  width: 0.6em;\n  height: 0.6em;\n  position: absolute;\n  border-style: solid;\n  border-width: 0.15em 0.15em 0 0;\n  display: inline-block;\n  transform-origin: center center;\n  transform: rotate(-45deg);\n  border-radius: 1px;\n  color: var(--cal-header-color);\n}\n.color-calendar.basic .calendar__arrow-inner::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  background-color: var(--cal-header-color);\n  opacity: 0;\n  z-index: -1;\n  transition: opacity 0.3s ease;\n  will-change: opacity;\n}\n.color-calendar.basic .calendar__arrow-inner:hover::after {\n  transition: opacity 0.3s ease;\n  opacity: 0.05;\n}\n.color-calendar.basic .calendar__arrow-prev {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.color-calendar.basic .calendar__arrow-prev .calendar__arrow-inner::before {\n  margin-left: 0.3em;\n  transform: rotate(-135deg);\n}\n.color-calendar.basic .calendar__arrow-next {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.color-calendar.basic .calendar__arrow-next .calendar__arrow-inner::before {\n  margin-right: 0.3em;\n  transform: rotate(45deg);\n}\n\n.color-calendar.basic .calendar__body {\n  padding: 14px;\n}\n\n.color-calendar.basic .calendar__weekdays {\n  display: grid;\n  grid-template-columns: repeat(7, minmax(20px, 55px));\n  margin-bottom: 5px;\n}\n.color-calendar.basic .calendar__weekdays .calendar__weekday {\n  font-weight: 500;\n  opacity: 0.6;\n  color: var(--cal-weekdays-color);\n}\n\n.color-calendar.basic .calendar__days .calendar__day-other {\n  color: var(--cal-color-primary);\n  opacity: 0.2;\n}\n.color-calendar.basic .calendar__days .calendar__day {\n  font-weight: 600;\n}\n.color-calendar.basic .calendar__days .calendar__day-today {\n  font-weight: 700;\n  color: var(--cal-color-primary);\n}\n.color-calendar.basic .calendar__days .calendar__day-today .calendar__day-box {\n  border-radius: 0.5rem;\n  background-color: var(--cal-color-primary);\n  opacity: 0.1;\n}\n.color-calendar.basic .calendar__days .calendar__day-text:hover ~ .calendar__day-box {\n  opacity: 0.1;\n}\n.color-calendar.basic .calendar__days .calendar__day-bullet {\n  background-color: var(--cal-color-primary);\n}\n.color-calendar.basic .calendar__days .calendar__day-bullet:hover ~ .calendar__day-box {\n  opacity: 0.1;\n}\n.color-calendar.basic .calendar__days .calendar__day-box {\n  border-radius: 0.5rem;\n  background-color: var(--cal-color-primary);\n  box-shadow: 0 3px 15px -5px var(--cal-color-primary);\n}\n.color-calendar.basic .calendar__days .calendar__day-box:hover {\n  opacity: 0.1;\n}\n.color-calendar.basic .calendar__days .calendar__day-event {\n  font-weight: 700;\n}\n.color-calendar.basic .calendar__days .calendar__day-selected {\n  color: white;\n  font-weight: 700;\n}\n.color-calendar.basic .calendar__days .calendar__day-selected .calendar__day-box {\n  border-radius: 0.5rem;\n  background-color: var(--cal-color-primary);\n  opacity: 1;\n  box-shadow: 0 3px 15px -5px var(--cal-color-primary);\n}\n.color-calendar.basic .calendar__days .calendar__day-selected .calendar__day-text:hover ~ .calendar__day-box {\n  opacity: 1;\n}\n.color-calendar.basic .calendar__days .calendar__day-selected .calendar__day-bullet {\n  background-color: white;\n}\n.color-calendar.basic .calendar__days .calendar__day-selected .calendar__day-bullet:hover ~ .calendar__day-box {\n  opacity: 1;\n}\n\n.color-calendar.basic .calendar__picker {\n  background-color: white;\n  border-radius: var(--cal-border-radius);\n}\n.color-calendar.basic .calendar__picker-month-today {\n  box-shadow: inset 0px 0px 0px 1px var(--cal-color-primary);\n}\n.color-calendar.basic .calendar__picker-year-today {\n  box-shadow: inset 0px 0px 0px 1px var(--cal-color-primary);\n}\n\n.color-calendar.basic.color-calendar--small {\n  font-size: 0.8rem;\n}\n.color-calendar.basic.color-calendar--small .calendar__header {\n  padding: 10px 10px 0 10px;\n  grid-template-columns: repeat(7, minmax(25px, 41px));\n}\n.color-calendar.basic.color-calendar--small .calendar__header .calendar__monthyear {\n  font-size: 1.2rem;\n}\n.color-calendar.basic.color-calendar--small .calendar__header .calendar__arrow-inner, .color-calendar.basic.color-calendar--small .calendar__header .calendar__arrow-inner::after {\n  width: 30px;\n  height: 30px;\n}\n.color-calendar.basic.color-calendar--small .calendar__body {\n  padding: 0 10px 10px 10px;\n}\n.color-calendar.basic.color-calendar--small .calendar__body .calendar__weekdays {\n  grid-template-columns: repeat(7, minmax(25px, 41px));\n  margin-bottom: 0;\n}\n.color-calendar.basic.color-calendar--small .calendar__body .calendar__days {\n  grid-template-columns: repeat(7, minmax(25px, 41px));\n  grid-template-rows: repeat(6, minmax(30px, 35px));\n}\n.color-calendar.basic.color-calendar--small .calendar__body .calendar__picker {\n  top: 55px;\n}\n.color-calendar.basic.color-calendar--small .calendar__body .calendar__picker .calendar__picker-month-option {\n  padding: 10px 0;\n}\n.color-calendar.basic.color-calendar--small .calendar__body .calendar__picker .calendar__picker-month-option::after {\n  height: 40px;\n}\n.color-calendar.basic.color-calendar--small .calendar__body .calendar__picker .calendar__picker-year-option {\n  padding: 10px 0;\n}\n.color-calendar.basic.color-calendar--small .calendar__body .calendar__picker .calendar__picker-year-option::after {\n  height: 40px;\n}", ""]);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, ".color-calendar {\n  position: relative;\n  display: inline-flex;\n  flex-direction: column;\n  width: auto;\n  height: auto;\n  box-sizing: border-box;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  font-family: var(--cal-font-family-body);\n  font-size: 1rem;\n}\n\n.color-calendar .calendar__header {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(7, minmax(20px, 55px));\n  font-family: var(--cal-font-family-header);\n}\n\n.color-calendar .calendar__monthyear {\n  font-size: 1.5rem;\n  margin: 0 auto;\n  text-align: center;\n  grid-column: 2/span 5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.color-calendar .calendar__monthyear .calendar__month {\n  cursor: pointer;\n}\n.color-calendar .calendar__monthyear .calendar__year {\n  cursor: pointer;\n}\n\n.color-calendar .calendar__arrow {\n  height: 35px;\n  width: 100%;\n  position: relative;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  z-index: 101;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.color-calendar .calendar__arrow-inner {\n  width: 35px;\n  height: 35px;\n  position: relative;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.color-calendar .calendar__arrow-prev {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.color-calendar .calendar__arrow-prev .calendar__arrow-inner::before {\n  margin-left: 0.3em;\n  transform: rotate(-135deg);\n}\n.color-calendar .calendar__arrow-next {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.color-calendar .calendar__arrow-next .calendar__arrow-inner::before {\n  margin-right: 0.3em;\n  transform: rotate(45deg);\n}\n\n.color-calendar .calendar__body {\n  height: auto;\n  overflow: hidden;\n}\n\n.color-calendar .calendar__weekdays {\n  display: grid;\n  grid-template-columns: repeat(7, minmax(20px, 55px));\n  margin-bottom: 5px;\n  font-family: var(--cal-font-family-weekdays);\n}\n.color-calendar .calendar__weekdays .calendar__weekday {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 40px;\n}\n\n.color-calendar .calendar__days {\n  display: grid;\n  grid-template-columns: repeat(7, minmax(20px, 55px));\n  grid-template-rows: repeat(6, minmax(30px, 40px));\n  font-family: var(--cal-font-family-body);\n}\n.color-calendar .calendar__days .calendar__day {\n  position: relative;\n  z-index: 101;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.color-calendar .calendar__days .calendar__day-text {\n  cursor: pointer;\n}\n.color-calendar .calendar__days .calendar__day-box {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: calc(55% + 8px);\n  height: 90%;\n  opacity: 0;\n  z-index: -1;\n  cursor: pointer;\n  transition: opacity 0.3s ease-out;\n  will-change: opacity;\n}\n.color-calendar .calendar__days .calendar__day-event {\n  /* Event Bullet */\n}\n.color-calendar .calendar__days .calendar__day-event .calendar__day-bullet {\n  position: absolute;\n  top: 80%;\n  border-radius: 50%;\n  width: 4px;\n  height: 4px;\n  left: 50%;\n  transform: translateX(-50%);\n  overflow: hidden;\n  cursor: pointer;\n}\n.color-calendar .calendar__days .calendar__day-selected:not(.calendar__day-today) .calendar__day-box {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: calc(55% + 8px);\n  height: 90%;\n  z-index: -1;\n  cursor: pointer;\n}\n\n.color-calendar .calendar__picker {\n  position: absolute;\n  z-index: 201;\n  width: 100%;\n  top: 75px;\n  left: 0;\n  bottom: 0;\n  background-color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.3s ease;\n  font-family: var(--cal-font-family-body);\n}\n.color-calendar .calendar__picker .calendar__picker-month {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  grid-template-rows: repeat(4, minmax(0, 1fr));\n  grid-gap: 1rem 6%;\n  gap: 1rem 6%;\n  margin: 8%;\n  transition: none;\n}\n.color-calendar .calendar__picker .calendar__picker-month-option {\n  position: relative;\n  text-align: center;\n  padding: 15px 0;\n  font-weight: 700;\n  color: #323232;\n  border-radius: var(--cal-border-radius);\n  align-self: center;\n  cursor: pointer;\n}\n.color-calendar .calendar__picker .calendar__picker-month-option::after {\n  content: \"\";\n  width: 100%;\n  height: 50px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: var(--cal-color-primary);\n  border-radius: var(--cal-border-radius);\n  opacity: 0.1;\n  z-index: -1;\n}\n.color-calendar .calendar__picker .calendar__picker-month-option:hover:after {\n  opacity: 0.08;\n}\n.color-calendar .calendar__picker .calendar__picker-month-selected {\n  color: white;\n}\n.color-calendar .calendar__picker .calendar__picker-month-selected::after {\n  opacity: 1;\n}\n.color-calendar .calendar__picker .calendar__picker-month-selected:hover:after {\n  opacity: 0.9;\n}\n.color-calendar .calendar__picker .calendar__picker-year {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  grid-template-rows: repeat(4, minmax(0, 1fr));\n  grid-gap: 1rem 6%;\n  gap: 1rem 6%;\n  margin: 8%;\n  transition: none;\n}\n.color-calendar .calendar__picker .calendar__picker-year-option {\n  position: relative;\n  text-align: center;\n  padding: 15px 0;\n  font-weight: 700;\n  color: #323232;\n  border-radius: var(--cal-border-radius);\n  align-self: center;\n  cursor: pointer;\n}\n.color-calendar .calendar__picker .calendar__picker-year-option::after {\n  content: \"\";\n  width: 100%;\n  height: 50px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: var(--cal-color-primary);\n  border-radius: var(--cal-border-radius);\n  opacity: 0.1;\n  z-index: -1;\n}\n.color-calendar .calendar__picker .calendar__picker-year-option:hover:after {\n  opacity: 0.08;\n}\n.color-calendar .calendar__picker .calendar__picker-year-selected {\n  color: white;\n}\n.color-calendar .calendar__picker .calendar__picker-year-selected::after {\n  opacity: 1;\n}\n.color-calendar .calendar__picker .calendar__picker-year-selected:hover:after {\n  opacity: 0.9;\n}\n.color-calendar .calendar__picker .calendar__picker-year-arrow {\n  position: absolute;\n  opacity: 0.4;\n  border-radius: var(--cal-border-radius);\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.color-calendar .calendar__picker .calendar__picker-year-arrow-left {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-left: 10px;\n  padding-right: 4px;\n}\n.color-calendar .calendar__picker .calendar__picker-year-arrow-right {\n  top: 0;\n  bottom: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 10px;\n}\n.color-calendar .calendar__picker .calendar__picker-year-arrow:hover {\n  opacity: 1;\n  background-color: #f8f8f8;\n}\n\n.chevron-thin-left {\n  display: inline-block;\n  border-right: 2px solid var(--cal-color-primary);\n  border-bottom: 2px solid var(--cal-color-primary);\n  width: 10px;\n  height: 10px;\n  transform: rotate(-225deg);\n}\n.chevron-thin-right {\n  display: inline-block;\n  border-right: 2px solid var(--cal-color-primary);\n  border-bottom: 2px solid var(--cal-color-primary);\n  width: 10px;\n  height: 10px;\n  transform: rotate(-45deg);\n}\n\n.color-calendar.month-left-align .calendar__header .calendar__monthyear {\n  grid-column: 1/span 5;\n  margin: 0;\n  justify-content: flex-start;\n  padding-left: 5%;\n}\n\n.color-calendar.glass {\n  --cal-color-primary: #EC407A;\n  --cal-font-family-header: \"Open Sans\", sans-serif;\n  --cal-font-family-weekdays: \"Open Sans\", sans-serif;\n  --cal-font-family-body: \"Open Sans\", sans-serif;\n  --cal-drop-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);\n  --cal-border: none;\n  --cal-border-radius: 0.5rem;\n  --cal-header-color: white;\n  --cal-header-background-color: rgba(0, 0, 0, 0.3);\n  border-radius: var(--cal-border-radius);\n  box-shadow: var(--cal-drop-shadow);\n  color: #323232;\n  background-color: var(--cal-header-background-color);\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  border: var(--cal-border);\n}\n\n.color-calendar.glass .calendar__header {\n  padding: 20px 14px 20px 14px;\n  color: var(--cal-header-color);\n}\n\n.color-calendar.glass .calendar__monthyear {\n  font-weight: 700;\n  color: var(--cal-header-color);\n}\n\n.color-calendar.glass .calendar__arrow-inner {\n  border-radius: 50%;\n}\n.color-calendar.glass .calendar__arrow-inner::before {\n  content: \"\";\n  width: 0.5em;\n  height: 0.5em;\n  position: absolute;\n  border-style: solid;\n  border-width: 0.17em 0.17em 0 0;\n  display: inline-block;\n  transform-origin: center center;\n  transform: rotate(-45deg);\n  border-radius: 2px;\n  color: var(--cal-header-color);\n}\n.color-calendar.glass .calendar__arrow-inner::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  background-color: var(--cal-header-color);\n  opacity: 0.12;\n  z-index: -1;\n  transition: opacity 0.3s ease;\n}\n.color-calendar.glass .calendar__arrow-inner:hover::after {\n  transition: opacity 0.3s ease;\n  opacity: 0.25;\n}\n.color-calendar.glass .calendar__arrow-prev {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.color-calendar.glass .calendar__arrow-prev .calendar__arrow-inner::before {\n  margin-left: 0.25em;\n  transform: rotate(-135deg);\n}\n.color-calendar.glass .calendar__arrow-next {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.color-calendar.glass .calendar__arrow-next .calendar__arrow-inner::before {\n  margin-right: 0.25em;\n  transform: rotate(45deg);\n}\n\n.color-calendar.glass .calendar__body {\n  padding: 18px 14px;\n  border-radius: var(--cal-border-radius);\n  background-color: white;\n}\n\n.color-calendar.glass .calendar__weekdays {\n  display: grid;\n  grid-template-columns: repeat(7, minmax(20px, 55px));\n  margin-bottom: 5px;\n}\n.color-calendar.glass .calendar__weekdays .calendar__weekday {\n  font-weight: 700;\n  opacity: 0.5;\n}\n\n.color-calendar.glass .calendar__days .calendar__day-other {\n  color: #323232;\n  opacity: 0.2;\n}\n.color-calendar.glass .calendar__days .calendar__day {\n  font-weight: 600;\n}\n.color-calendar.glass .calendar__days .calendar__day-today {\n  font-weight: 700;\n  color: var(--cal-color-primary);\n}\n.color-calendar.glass .calendar__days .calendar__day-today .calendar__day-box {\n  border-radius: 0.5rem;\n  background-color: var(--cal-color-primary);\n  opacity: 0.1;\n}\n.color-calendar.glass .calendar__days .calendar__day-text:hover ~ .calendar__day-box {\n  opacity: 0.1;\n}\n.color-calendar.glass .calendar__days .calendar__day-bullet {\n  background-color: var(--cal-color-primary);\n}\n.color-calendar.glass .calendar__days .calendar__day-bullet:hover ~ .calendar__day-box {\n  opacity: 0.1;\n}\n.color-calendar.glass .calendar__days .calendar__day-box {\n  border-radius: 0.5rem;\n  background-color: var(--cal-color-primary);\n  box-shadow: 0 3px 15px -5px var(--cal-color-primary);\n}\n.color-calendar.glass .calendar__days .calendar__day-box:hover {\n  opacity: 0.1;\n}\n.color-calendar.glass .calendar__days .calendar__day-event {\n  font-weight: 700;\n}\n.color-calendar.glass .calendar__days .calendar__day-selected {\n  color: white;\n  font-weight: 700;\n}\n.color-calendar.glass .calendar__days .calendar__day-selected .calendar__day-box {\n  border-radius: 0.5rem;\n  background-color: var(--cal-color-primary);\n  opacity: 1;\n  box-shadow: 0 3px 15px -5px var(--cal-color-primary);\n}\n.color-calendar.glass .calendar__days .calendar__day-selected .calendar__day-text:hover ~ .calendar__day-box {\n  opacity: 1;\n}\n.color-calendar.glass .calendar__days .calendar__day-selected .calendar__day-bullet {\n  background-color: white;\n}\n.color-calendar.glass .calendar__days .calendar__day-selected .calendar__day-bullet:hover ~ .calendar__day-box {\n  opacity: 1;\n}\n\n.color-calendar.glass .calendar__picker {\n  background-color: white;\n  border-radius: var(--cal-border-radius);\n}\n.color-calendar.glass .calendar__picker-month-today {\n  box-shadow: inset 0px 0px 0px 1px var(--cal-color-primary);\n}\n.color-calendar.glass .calendar__picker-year-today {\n  box-shadow: inset 0px 0px 0px 1px var(--cal-color-primary);\n}\n\n.color-calendar.glass.color-calendar--small {\n  font-size: 0.8rem;\n}\n.color-calendar.glass.color-calendar--small .calendar__header {\n  padding: 10px 10px;\n  grid-template-columns: repeat(7, minmax(25px, 41px));\n}\n.color-calendar.glass.color-calendar--small .calendar__header .calendar__monthyear {\n  font-size: 1.2rem;\n}\n.color-calendar.glass.color-calendar--small .calendar__header .calendar__arrow-inner, .color-calendar.glass.color-calendar--small .calendar__header .calendar__arrow-inner::after {\n  width: 30px;\n  height: 30px;\n}\n.color-calendar.glass.color-calendar--small .calendar__body {\n  padding: 10px 10px;\n}\n.color-calendar.glass.color-calendar--small .calendar__body .calendar__weekdays {\n  grid-template-columns: repeat(7, minmax(25px, 41px));\n  margin-bottom: 0;\n}\n.color-calendar.glass.color-calendar--small .calendar__body .calendar__days {\n  grid-template-columns: repeat(7, minmax(25px, 41px));\n  grid-template-rows: repeat(6, minmax(30px, 35px));\n}\n.color-calendar.glass.color-calendar--small .calendar__body .calendar__picker {\n  top: 55px;\n}\n.color-calendar.glass.color-calendar--small .calendar__body .calendar__picker .calendar__picker-month-option {\n  padding: 10px 0;\n}\n.color-calendar.glass.color-calendar--small .calendar__body .calendar__picker .calendar__picker-month-option::after {\n  height: 40px;\n}\n.color-calendar.glass.color-calendar--small .calendar__body .calendar__picker .calendar__picker-year-option {\n  padding: 10px 0;\n}\n.color-calendar.glass.color-calendar--small .calendar__body .calendar__picker .calendar__picker-year-option::after {\n  height: 40px;\n}", ""]);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(13);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../css-loader/index.js!./theme-basic.css", function() {
			var newContent = require("!!../../../css-loader/index.js!./theme-basic.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(14);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../css-loader/index.js!./theme-glass.css", function() {
			var newContent = require("!!../../../css-loader/index.js!./theme-glass.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
module.exports = __webpack_require__(4);


/***/ })
/******/ ]);