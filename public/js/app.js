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
/******/ 	return __webpack_require__(__webpack_require__.s = 282);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = requiredArgs;
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toDate;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__(0);

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toInteger;
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return daysInWeek; });
/* unused harmony export maxTime */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return millisecondsInMinute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return millisecondsInHour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return millisecondsInSecond; });
/* unused harmony export minTime */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return minutesInHour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return monthsInQuarter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return monthsInYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return quartersInYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return secondsInHour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return secondsInMinute; });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isValid;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * var result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  return !isNaN(date);
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getTimezoneOffsetInMilliseconds;
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addDays;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  var amount = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = nextDay;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addDays_index_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getDay_index_js__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);



/**
 * @name nextDay
 * @category Weekday Helpers
 * @summary When is the next day of the week?
 *
 * @description
 * When is the next day of the week? 0-6 the day of the week, 0 represents Sunday.
 *
 * @param {Date | number} date - the date to check
 * @param {Day} day - day of the week
 * @returns {Date} - the date is the next day of week
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // When is the next Monday after Mar, 20, 2020?
 * const result = nextDay(new Date(2020, 2, 20), 1)
 * //=> Mon Mar 23 2020 00:00:00
 *
 * @example
 * // When is the next Tuesday after Mar, 21, 2020?
 * const result = nextDay(new Date(2020, 2, 21), 2)
 * //=> Tue Mar 24 2020 00:00:00
 */

function nextDay(date, day) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var delta = day - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getDay_index_js__["a" /* default */])(date);
  if (delta <= 0) delta += 7;
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__addDays_index_js__["a" /* default */])(date, delta);
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = startOfWeek;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);



/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, dirtyOptions) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_toInteger_index_js__["a" /* default */])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_toInteger_index_js__["a" /* default */])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compareAsc;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateLeft = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateLeft);
  var dateRight = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = differenceInCalendarDays;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_getTimezoneOffsetInMilliseconds_index_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__startOfDay_index_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);



var MILLISECONDS_IN_DAY = 86400000;
/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */

function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var startOfDayLeft = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__startOfDay_index_js__["a" /* default */])(dirtyDateLeft);
  var startOfDayRight = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__startOfDay_index_js__["a" /* default */])(dirtyDateRight);
  var timestampLeft = startOfDayLeft.getTime() - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_getTimezoneOffsetInMilliseconds_index_js__["a" /* default */])(startOfDayLeft);
  var timestampRight = startOfDayRight.getTime() - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_getTimezoneOffsetInMilliseconds_index_js__["a" /* default */])(startOfDayRight); // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)

  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = startOfISOWeek;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__startOfWeek_index_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of an ISO week
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * var result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfISOWeek(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__startOfWeek_index_js__["a" /* default */])(dirtyDate, {
    weekStartsOn: 1
  });
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addLeadingZeros;
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getISOWeekYear;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__startOfISOWeek_index_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);



/**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `getISOYear` to `getISOWeekYear`.
 *   "ISO week year" is short for [ISO week-numbering year](https://en.wikipedia.org/wiki/ISO_week_date).
 *   This change makes the name consistent with
 *   locale-dependent week-numbering year helpers, e.g., `getWeekYear`.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the ISO week-numbering year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */

function getISOWeekYear(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var year = date.getFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  var startOfNextYear = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__startOfISOWeek_index_js__["a" /* default */])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  var startOfThisYear = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__startOfISOWeek_index_js__["a" /* default */])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_formatDistance_index_js__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_formatLong_index_js__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_formatRelative_index_js__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_localize_index_js__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_match_index_js__ = __webpack_require__(226);





/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */

var locale = {
  code: 'en-US',
  formatDistance: __WEBPACK_IMPORTED_MODULE_0__lib_formatDistance_index_js__["a" /* default */],
  formatLong: __WEBPACK_IMPORTED_MODULE_1__lib_formatLong_index_js__["a" /* default */],
  formatRelative: __WEBPACK_IMPORTED_MODULE_2__lib_formatRelative_index_js__["a" /* default */],
  localize: __WEBPACK_IMPORTED_MODULE_3__lib_localize_index_js__["a" /* default */],
  match: __WEBPACK_IMPORTED_MODULE_4__lib_match_index_js__["a" /* default */],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ __webpack_exports__["a"] = (locale);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addMilliseconds;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var timestamp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate).getTime();
  var amount = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addMonths;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);



/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */

function addMonths(dirtyDate, dirtyAmount) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  var amount = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  var dayOfMonth = date.getDate(); // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.

  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();

  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isSameDay;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__startOfDay_index_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day?
 *
 * @description
 * Are the given dates in the same day?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateLeftStartOfDay = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__startOfDay_index_js__["a" /* default */])(dirtyDateLeft);
  var dateRightStartOfDay = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__startOfDay_index_js__["a" /* default */])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = startOfISOWeekYear;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getISOWeekYear_index_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__startOfISOWeek_index_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);



/**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of an ISO week-numbering year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */

function startOfISOWeekYear(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var year = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getISOWeekYear_index_js__["a" /* default */])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__startOfISOWeek_index_js__["a" /* default */])(fourthOfJanuary);
  return date;
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = subMilliseconds;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addMilliseconds_index_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var amount = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__addMilliseconds_index_js__["a" /* default */])(dirtyDate, -amount);
}

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = startOfUTCISOWeek;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__requiredArgs_index_js__ = __webpack_require__(0);

 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeek(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__requiredArgs_index_js__["a" /* default */])(1, arguments);
  var weekStartsOn = 1;
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = startOfUTCWeek;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__requiredArgs_index_js__ = __webpack_require__(0);


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeek(dirtyDate, dirtyOptions) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__requiredArgs_index_js__["a" /* default */])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toInteger_index_js__["a" /* default */])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toInteger_index_js__["a" /* default */])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addWeeks;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addDays_index_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);



/**
 * @name addWeeks
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of week to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the weeks added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * const result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */

function addWeeks(dirtyDate, dirtyAmount) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var amount = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);
  var days = amount * 7;
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__addDays_index_js__["a" /* default */])(dirtyDate, days);
}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = differenceInMilliseconds;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * const result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */

function differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateLeft = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateLeft);
  var dateRight = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateRight);
  return dateLeft.getTime() - dateRight.getTime();
}

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = differenceInMonths;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__differenceInCalendarMonths_index_js__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compareAsc_index_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__isLastDayOfMonth_index_js__ = __webpack_require__(81);





/**
 * @name differenceInMonths
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
 * //=> 7
 */

function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateLeft = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateLeft);
  var dateRight = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateRight);
  var sign = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__compareAsc_index_js__["a" /* default */])(dateLeft, dateRight);
  var difference = Math.abs(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__differenceInCalendarMonths_index_js__["a" /* default */])(dateLeft, dateRight));
  var result; // Check for the difference of less than month

  if (difference < 1) {
    result = 0;
  } else {
    if (dateLeft.getMonth() === 1 && dateLeft.getDate() > 27) {
      // This will check if the date is end of Feb and assign a higher end of month date
      // to compare it with Jan
      dateLeft.setDate(30);
    }

    dateLeft.setMonth(dateLeft.getMonth() - sign * difference); // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
    // If so, result must be decreased by 1 in absolute value

    var isLastMonthNotFull = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__compareAsc_index_js__["a" /* default */])(dateLeft, dateRight) === -sign; // Check for cases of one full calendar month

    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__isLastDayOfMonth_index_js__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateLeft)) && difference === 1 && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__compareAsc_index_js__["a" /* default */])(dirtyDateLeft, dateRight) === 1) {
      isLastMonthNotFull = false;
    }

    result = sign * (difference - Number(isLastMonthNotFull));
  } // Prevent negative zero


  return result === 0 ? 0 : result;
}

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isWeekend;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name isWeekend
 * @category Weekday Helpers
 * @summary Does the given date fall on a weekend?
 *
 * @description
 * Does the given date fall on a weekend?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date falls on a weekend
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Does 5 October 2014 fall on a weekend?
 * const result = isWeekend(new Date(2014, 9, 5))
 * //=> true
 */

function isWeekend(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var day = date.getDay();
  return day === 0 || day === 6;
}

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = startOfDay;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = startOfMonth;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name startOfMonth
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * const result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfMonth(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getUTCWeekYear;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__startOfUTCWeek_index_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__requiredArgs_index_js__ = __webpack_require__(0);



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeekYear(dirtyDate, dirtyOptions) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate, dirtyOptions);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toInteger_index_js__["a" /* default */])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toInteger_index_js__["a" /* default */])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__startOfUTCWeek_index_js__["a" /* default */])(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__startOfUTCWeek_index_js__["a" /* default */])(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addHours;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addMilliseconds_index_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);



var MILLISECONDS_IN_HOUR = 3600000;
/**
 * @name addHours
 * @category Hour Helpers
 * @summary Add the specified number of hours to the given date.
 *
 * @description
 * Add the specified number of hours to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of hours to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the hours added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 2 hours to 10 July 2014 23:00:00:
 * const result = addHours(new Date(2014, 6, 10, 23, 0), 2)
 * //=> Fri Jul 11 2014 01:00:00
 */

function addHours(dirtyDate, dirtyAmount) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var amount = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__addMilliseconds_index_js__["a" /* default */])(dirtyDate, amount * MILLISECONDS_IN_HOUR);
}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addMinutes;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addMilliseconds_index_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);



var MILLISECONDS_IN_MINUTE = 60000;
/**
 * @name addMinutes
 * @category Minute Helpers
 * @summary Add the specified number of minutes to the given date.
 *
 * @description
 * Add the specified number of minutes to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of minutes to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the minutes added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 30 minutes to 10 July 2014 12:00:00:
 * const result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 12:30:00
 */

function addMinutes(dirtyDate, dirtyAmount) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var amount = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__addMilliseconds_index_js__["a" /* default */])(dirtyDate, amount * MILLISECONDS_IN_MINUTE);
}

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addQuarters;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addMonths_index_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);



/**
 * @name addQuarters
 * @category Quarter Helpers
 * @summary Add the specified number of year quarters to the given date.
 *
 * @description
 * Add the specified number of year quarters to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of quarters to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the quarters added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 1 quarter to 1 September 2014:
 * const result = addQuarters(new Date(2014, 8, 1), 1)
 * //=> Mon Dec 01 2014 00:00:00
 */

function addQuarters(dirtyDate, dirtyAmount) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var amount = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);
  var months = amount * 3;
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__addMonths_index_js__["a" /* default */])(dirtyDate, months);
}

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = differenceInDays;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__differenceInCalendarDays_index_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);


 // Like `compareAsc` but uses local time not UTC, which is needed
// for accurate equality comparisons of UTC timestamps that end up
// having the same representation in local time, e.g. one hour before
// DST ends vs. the instant that DST ends.

function compareLocalAsc(dateLeft, dateRight) {
  var diff = dateLeft.getFullYear() - dateRight.getFullYear() || dateLeft.getMonth() - dateRight.getMonth() || dateLeft.getDate() - dateRight.getDate() || dateLeft.getHours() - dateRight.getHours() || dateLeft.getMinutes() - dateRight.getMinutes() || dateLeft.getSeconds() - dateRight.getSeconds() || dateLeft.getMilliseconds() - dateRight.getMilliseconds();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}
/**
 * @name differenceInDays
 * @category Day Helpers
 * @summary Get the number of full days between the given dates.
 *
 * @description
 * Get the number of full day periods between two dates. Fractional days are
 * truncated towards zero.
 *
 * One "full day" is the distance between a local time in one day to the same
 * local time on the next or previous day. A full day can sometimes be less than
 * or more than 24 hours if a daylight savings change happens between two dates.
 *
 * To ignore DST and only measure exact 24-hour periods, use this instead:
 * `Math.floor(differenceInHours(dateLeft, dateRight)/24)|0`.
 *
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full days according to the local timezone
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 365
 * // How many full days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 0
 * // How many full days are between
 * // 1 March 2020 0:00 and 1 June 2020 0:00 ?
 * // Note: because local time is used, the
 * // result will always be 92 days, even in
 * // time zones where DST starts and the
 * // period has only 92*24-1 hours.
 * const result = differenceInDays(
 *   new Date(2020, 5, 1),
 *   new Date(2020, 2, 1)
 * )
//=> 92
 */


function differenceInDays(dirtyDateLeft, dirtyDateRight) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateLeft = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateLeft);
  var dateRight = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateRight);
  var sign = compareLocalAsc(dateLeft, dateRight);
  var difference = Math.abs(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__differenceInCalendarDays_index_js__["a" /* default */])(dateLeft, dateRight));
  dateLeft.setDate(dateLeft.getDate() - sign * difference); // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
  // If so, result must be decreased by 1 in absolute value

  var isLastDayNotFull = Number(compareLocalAsc(dateLeft, dateRight) === -sign);
  var result = sign * (difference - isLastDayNotFull); // Prevent negative zero

  return result === 0 ? 0 : result;
}

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = differenceInSeconds;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__differenceInMilliseconds_index_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of seconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * const result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */

function differenceInSeconds(dirtyDateLeft, dirtyDateRight) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var diff = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__differenceInMilliseconds_index_js__["a" /* default */])(dirtyDateLeft, dirtyDateRight) / 1000;
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
}

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = eachWeekendOfInterval;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__eachDayOfInterval_index_js__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isSunday_index_js__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isWeekend_index_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__(0);




/**
 * @name eachWeekendOfInterval
 * @category Interval Helpers
 * @summary List all the Saturdays and Sundays in the given date interval.
 *
 * @description
 * Get all the Saturdays and Sundays in the given date interval.
 *
 * @param {Interval} interval - the given interval. See [Interval]{@link https://date-fns.org/docs/Interval}
 * @returns {Date[]} an array containing all the Saturdays and Sundays
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Lists all Saturdays and Sundays in the given date interval
 * const result = eachWeekendOfInterval({
 *   start: new Date(2018, 8, 17),
 *   end: new Date(2018, 8, 30)
 * })
 * //=> [
 * //   Sat Sep 22 2018 00:00:00,
 * //   Sun Sep 23 2018 00:00:00,
 * //   Sat Sep 29 2018 00:00:00,
 * //   Sun Sep 30 2018 00:00:00
 * // ]
 */

function eachWeekendOfInterval(interval) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var dateInterval = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__eachDayOfInterval_index_js__["a" /* default */])(interval);
  var weekends = [];
  var index = 0;

  while (index < dateInterval.length) {
    var date = dateInterval[index++];

    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isWeekend_index_js__["a" /* default */])(date)) {
      weekends.push(date);
      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isSunday_index_js__["a" /* default */])(date)) index = index + 5;
    }
  }

  return weekends;
}

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = endOfDay;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */

function endOfDay(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = endOfMonth;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */

function endOfMonth(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getDay;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name getDay
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {0|1|2|3|4|5|6} the day of week, 0 represents Sunday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * const result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */

function getDay(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var day = date.getDay();
  return day;
}

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isSameWeek;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__startOfWeek_index_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);



/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week?
 *
 * @description
 * Are the given dates in the same week?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateLeftStartOfWeek = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__startOfWeek_index_js__["a" /* default */])(dirtyDateLeft, dirtyOptions);
  var dateRightStartOfWeek = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__startOfWeek_index_js__["a" /* default */])(dirtyDateRight, dirtyOptions);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isSunday;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name isSunday
 * @category Weekday Helpers
 * @summary Is the given date Sunday?
 *
 * @description
 * Is the given date Sunday?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is Sunday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 21 September 2014 Sunday?
 * var result = isSunday(new Date(2014, 8, 21))
 * //=> true
 */

function isSunday(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate).getDay() === 0;
}

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setMonth;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getDaysInMonth_index_js__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__(0);




/**
 * @name setMonth
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} month - the month of the new date
 * @returns {Date} the new date with the month set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set February to 1 September 2014:
 * const result = setMonth(new Date(2014, 8, 1), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */

function setMonth(dirtyDate, dirtyMonth) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  var month = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyMonth);
  var year = date.getFullYear();
  var day = date.getDate();
  var dateWithDesiredMonth = new Date(0);
  dateWithDesiredMonth.setFullYear(year, month, 15);
  dateWithDesiredMonth.setHours(0, 0, 0, 0);
  var daysInMonth = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__getDaysInMonth_index_js__["a" /* default */])(dateWithDesiredMonth); // Set the last day of the new month
  // if the original date was the last day of the longer month

  date.setMonth(month, Math.min(day, daysInMonth));
  return date;
}

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = startOfMinute;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name startOfMinute
 * @category Minute Helpers
 * @summary Return the start of a minute for the given date.
 *
 * @description
 * Return the start of a minute for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a minute
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a minute for 1 December 2014 22:15:45.400:
 * const result = startOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:00
 */

function startOfMinute(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  date.setSeconds(0, 0);
  return date;
}

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = startOfQuarter;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name startOfQuarter
 * @category Quarter Helpers
 * @summary Return the start of a year quarter for the given date.
 *
 * @description
 * Return the start of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a quarter
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a quarter for 2 September 2014 11:55:00:
 * const result = startOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Jul 01 2014 00:00:00
 */

function startOfQuarter(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var currentMonth = date.getMonth();
  var month = currentMonth - currentMonth % 3;
  date.setMonth(month, 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = startOfWeekYear;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getWeekYear_index_js__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__startOfWeek_index_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__(0);




/**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @returns {Date} the start of a week-numbering year
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * var result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * var result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */

function startOfWeekYear(dirtyDate, dirtyOptions) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__["a" /* default */])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__["a" /* default */])(options.firstWeekContainsDate);
  var year = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getWeekYear_index_js__["a" /* default */])(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__startOfWeek_index_js__["a" /* default */])(firstWeek, dirtyOptions);
  return date;
}

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = startOfYear;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */

function startOfYear(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var cleanDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var date = new Date(0);
  date.setFullYear(cleanDate.getFullYear(), 0, 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = subDays;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addDays_index_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);



/**
 * @name subDays
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the days subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * const result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */

function subDays(dirtyDate, dirtyAmount) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var amount = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__addDays_index_js__["a" /* default */])(dirtyDate, -amount);
}

/***/ }),
/* 47 */
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
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = assign;
function assign(target, dirtyObject) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }

  dirtyObject = dirtyObject || {};

  for (var property in dirtyObject) {
    if (Object.prototype.hasOwnProperty.call(dirtyObject, property)) {
      target[property] = dirtyObject[property];
    }
  }

  return target;
}

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cloneObject;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assign_index_js__ = __webpack_require__(48);

function cloneObject(dirtyObject) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__assign_index_js__["a" /* default */])({}, dirtyObject);
}

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addLeadingZeros_index_js__ = __webpack_require__(13);

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__addLeadingZeros_index_js__["a" /* default */])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__addLeadingZeros_index_js__["a" /* default */])(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__addLeadingZeros_index_js__["a" /* default */])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__addLeadingZeros_index_js__["a" /* default */])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__addLeadingZeros_index_js__["a" /* default */])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__addLeadingZeros_index_js__["a" /* default */])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__addLeadingZeros_index_js__["a" /* default */])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__addLeadingZeros_index_js__["a" /* default */])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ __webpack_exports__["a"] = (formatters);

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
}

function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
}

function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/);
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ __webpack_exports__["a"] = (longFormatters);

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getUTCISOWeek;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__startOfUTCISOWeek_index_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__startOfUTCISOWeekYear_index_js__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__requiredArgs_index_js__ = __webpack_require__(0);




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeek(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var diff = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__startOfUTCISOWeek_index_js__["a" /* default */])(date).getTime() - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__startOfUTCISOWeekYear_index_js__["a" /* default */])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getUTCISOWeekYear;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__startOfUTCISOWeek_index_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__requiredArgs_index_js__ = __webpack_require__(0);


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeekYear(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__startOfUTCISOWeek_index_js__["a" /* default */])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__startOfUTCISOWeek_index_js__["a" /* default */])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getUTCWeek;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__startOfUTCWeek_index_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__startOfUTCWeekYear_index_js__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__requiredArgs_index_js__ = __webpack_require__(0);




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeek(dirtyDate, options) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var diff = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__startOfUTCWeek_index_js__["a" /* default */])(date, options).getTime() - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__startOfUTCWeekYear_index_js__["a" /* default */])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = isProtectedDayOfYearToken;
/* harmony export (immutable) */ __webpack_exports__["a"] = isProtectedWeekYearToken;
/* harmony export (immutable) */ __webpack_exports__["b"] = throwProtectedError;
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  }
}

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addBusinessDays;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isWeekend_index_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__isSunday_index_js__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__isSaturday_index_js__ = __webpack_require__(90);






/**
 * @name addBusinessDays
 * @category Day Helpers
 * @summary Add the specified number of business days (mon - fri) to the given date.
 *
 * @description
 * Add the specified number of business days (mon - fri) to the given date, ignoring weekends.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of business days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the business days added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 10 business days to 1 September 2014:
 * const result = addBusinessDays(new Date(2014, 8, 1), 10)
 * //=> Mon Sep 15 2014 00:00:00 (skipped weekend days)
 */

function addBusinessDays(dirtyDate, dirtyAmount) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  var startedOnWeekend = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isWeekend_index_js__["a" /* default */])(date);
  var amount = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);
  if (isNaN(amount)) return new Date(NaN);
  var hours = date.getHours();
  var sign = amount < 0 ? -1 : 1;
  var fullWeeks = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__["a" /* default */])(amount / 5);
  date.setDate(date.getDate() + fullWeeks * 7); // Get remaining days not part of a full week

  var restDays = Math.abs(amount % 5); // Loops over remaining days

  while (restDays > 0) {
    date.setDate(date.getDate() + sign);
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isWeekend_index_js__["a" /* default */])(date)) restDays -= 1;
  } // If the date is a weekend day and we reduce a dividable of
  // 5 from it, we land on a weekend date.
  // To counter this, we add days accordingly to land on the next business day


  if (startedOnWeekend && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isWeekend_index_js__["a" /* default */])(date) && amount !== 0) {
    // If we're reducing days, we want to add days until we land on a weekday
    // If we're adding days we want to reduce days until we land on a weekday
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__isSaturday_index_js__["a" /* default */])(date)) date.setDate(date.getDate() + (sign < 0 ? 2 : -1));
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__isSunday_index_js__["a" /* default */])(date)) date.setDate(date.getDate() + (sign < 0 ? 1 : -2));
  } // Restore hours to avoid DST lag


  date.setHours(hours);
  return date;
}

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addISOWeekYears;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getISOWeekYear_index_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setISOWeekYear_index_js__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__(0);




/**
 * @name addISOWeekYears
 * @category ISO Week-Numbering Year Helpers
 * @summary Add the specified number of ISO week-numbering years to the given date.
 *
 * @description
 * Add the specified number of ISO week-numbering years to the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `addISOYears` to `addISOWeekYears`.
 *   "ISO week year" is short for [ISO week-numbering year](https://en.wikipedia.org/wiki/ISO_week_date).
 *   This change makes the name consistent with
 *   locale-dependent week-numbering year helpers, e.g., `addWeekYears`.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of ISO week-numbering years to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the ISO week-numbering years added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 ISO week-numbering years to 2 July 2010:
 * const result = addISOWeekYears(new Date(2010, 6, 2), 5)
 * //=> Fri Jun 26 2015 00:00:00
 */

function addISOWeekYears(dirtyDate, dirtyAmount) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var amount = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__setISOWeekYear_index_js__["a" /* default */])(dirtyDate, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getISOWeekYear_index_js__["a" /* default */])(dirtyDate) + amount);
}

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addSeconds;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addMilliseconds_index_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);



/**
 * @name addSeconds
 * @category Second Helpers
 * @summary Add the specified number of seconds to the given date.
 *
 * @description
 * Add the specified number of seconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of seconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the seconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 30 seconds to 10 July 2014 12:45:00:
 * const result = addSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
 * //=> Thu Jul 10 2014 12:45:30
 */

function addSeconds(dirtyDate, dirtyAmount) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var amount = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__addMilliseconds_index_js__["a" /* default */])(dirtyDate, amount * 1000);
}

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addYears;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addMonths_index_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);



/**
 * @name addYears
 * @category Year Helpers
 * @summary Add the specified number of years to the given date.
 *
 * @description
 * Add the specified number of years to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of years to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the years added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 years to 1 September 2014:
 * const result = addYears(new Date(2014, 8, 1), 5)
 * //=> Sun Sep 01 2019 00:00:00
 */

function addYears(dirtyDate, dirtyAmount) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var amount = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__addMonths_index_js__["a" /* default */])(dirtyDate, amount * 12);
}

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = differenceInCalendarISOWeekYears;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getISOWeekYear_index_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name differenceInCalendarISOWeekYears
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of calendar ISO week-numbering years between the given dates.
 *
 * @description
 * Get the number of calendar ISO week-numbering years between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `differenceInCalendarISOYears` to `differenceInCalendarISOWeekYears`.
 *   "ISO week year" is short for [ISO week-numbering year](https://en.wikipedia.org/wiki/ISO_week_date).
 *   This change makes the name consistent with
 *   locale-dependent week-numbering year helpers, e.g., `addWeekYears`.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar ISO week-numbering years
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar ISO week-numbering years are 1 January 2010 and 1 January 2012?
 * const result = differenceInCalendarISOWeekYears(
 *   new Date(2012, 0, 1),
 *   new Date(2010, 0, 1)
 * )
 * //=> 2
 */

function differenceInCalendarISOWeekYears(dirtyDateLeft, dirtyDateRight) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getISOWeekYear_index_js__["a" /* default */])(dirtyDateLeft) - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getISOWeekYear_index_js__["a" /* default */])(dirtyDateRight);
}

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = differenceInCalendarMonths;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */

function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateLeft = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateLeft);
  var dateRight = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateRight);
  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
  var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
  return yearDiff * 12 + monthDiff;
}

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = differenceInCalendarWeeks;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__startOfWeek_index_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_getTimezoneOffsetInMilliseconds_index_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);



var MILLISECONDS_IN_WEEK = 604800000;
/**
 * @name differenceInCalendarWeeks
 * @category Week Helpers
 * @summary Get the number of calendar weeks between the given dates.
 *
 * @description
 * Get the number of calendar weeks between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Number} the number of calendar weeks
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // How many calendar weeks are between 5 July 2014 and 20 July 2014?
 * const result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5)
 * )
 * //=> 3
 *
 * @example
 * // If the week starts on Monday,
 * // how many calendar weeks are between 5 July 2014 and 20 July 2014?
 * const result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5),
 *   { weekStartsOn: 1 }
 * )
 * //=> 2
 */

function differenceInCalendarWeeks(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var startOfWeekLeft = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__startOfWeek_index_js__["a" /* default */])(dirtyDateLeft, dirtyOptions);
  var startOfWeekRight = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__startOfWeek_index_js__["a" /* default */])(dirtyDateRight, dirtyOptions);
  var timestampLeft = startOfWeekLeft.getTime() - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_getTimezoneOffsetInMilliseconds_index_js__["a" /* default */])(startOfWeekLeft);
  var timestampRight = startOfWeekRight.getTime() - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_getTimezoneOffsetInMilliseconds_index_js__["a" /* default */])(startOfWeekRight); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK);
}

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = differenceInCalendarYears;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name differenceInCalendarYears
 * @category Year Helpers
 * @summary Get the number of calendar years between the given dates.
 *
 * @description
 * Get the number of calendar years between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar years
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar years are between 31 December 2013 and 11 February 2015?
 * const result = differenceInCalendarYears(
 *   new Date(2015, 1, 11),
 *   new Date(2013, 11, 31)
 * )
 * //=> 2
 */

function differenceInCalendarYears(dirtyDateLeft, dirtyDateRight) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateLeft = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateLeft);
  var dateRight = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateRight);
  return dateLeft.getFullYear() - dateRight.getFullYear();
}

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = differenceInHours;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__differenceInMilliseconds_index_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


var MILLISECONDS_IN_HOUR = 3600000;
/**
 * @name differenceInHours
 * @category Hour Helpers
 * @summary Get the number of hours between the given dates.
 *
 * @description
 * Get the number of hours between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of hours
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
 * var result = differenceInHours(
 *   new Date(2014, 6, 2, 19, 0),
 *   new Date(2014, 6, 2, 6, 50)
 * )
 * //=> 12
 */

function differenceInHours(dirtyDateLeft, dirtyDateRight) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var diff = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__differenceInMilliseconds_index_js__["a" /* default */])(dirtyDateLeft, dirtyDateRight) / MILLISECONDS_IN_HOUR;
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
}

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = differenceInMinutes;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__differenceInMilliseconds_index_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


var MILLISECONDS_IN_MINUTE = 60000;
/**
 * @name differenceInMinutes
 * @category Minute Helpers
 * @summary Get the number of minutes between the given dates.
 *
 * @description
 * Get the signed number of full (rounded towards 0) minutes between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of minutes
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many minutes are between 2 July 2014 12:07:59 and 2 July 2014 12:20:00?
 * var result = differenceInMinutes(
 *   new Date(2014, 6, 2, 12, 20, 0),
 *   new Date(2014, 6, 2, 12, 7, 59)
 * )
 * //=> 12
 *
 * @example
 * // How many minutes are from 10:01:59 to 10:00:00
 * var result = differenceInMinutes(
 *   new Date(2000, 0, 1, 10, 0, 0),
 *   new Date(2000, 0, 1, 10, 1, 59)
 * )
 * //=> -1
 */

function differenceInMinutes(dirtyDateLeft, dirtyDateRight) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var diff = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__differenceInMilliseconds_index_js__["a" /* default */])(dirtyDateLeft, dirtyDateRight) / MILLISECONDS_IN_MINUTE;
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
}

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = differenceInYears;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__differenceInCalendarYears_index_js__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compareAsc_index_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__(0);




/**
 * @name differenceInYears
 * @category Year Helpers
 * @summary Get the number of full years between the given dates.
 *
 * @description
 * Get the number of full years between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full years
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full years are between 31 December 2013 and 11 February 2015?
 * const result = differenceInYears(new Date(2015, 1, 11), new Date(2013, 11, 31))
 * //=> 1
 */

function differenceInYears(dirtyDateLeft, dirtyDateRight) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateLeft = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateLeft);
  var dateRight = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateRight);
  var sign = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__compareAsc_index_js__["a" /* default */])(dateLeft, dateRight);
  var difference = Math.abs(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__differenceInCalendarYears_index_js__["a" /* default */])(dateLeft, dateRight)); // Set both dates to a valid leap year for accurate comparison when dealing
  // with leap days

  dateLeft.setFullYear(1584);
  dateRight.setFullYear(1584); // Math.abs(diff in full years - diff in calendar years) === 1 if last calendar year is not full
  // If so, result must be decreased by 1 in absolute value

  var isLastYearNotFull = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__compareAsc_index_js__["a" /* default */])(dateLeft, dateRight) === -sign;
  var result = sign * (difference - Number(isLastYearNotFull)); // Prevent negative zero

  return result === 0 ? 0 : result;
}

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = eachDayOfInterval;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name eachDayOfInterval
 * @category Interval Helpers
 * @summary Return the array of dates within the specified time interval.
 *
 * @description
 * Return the array of dates within the specified time interval.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `eachDay` to `eachDayOfInterval`.
 *   This change was made to mirror the use of the word "interval" in standard ISO 8601:2004 terminology:
 *
 *   ```
 *   2.1.3
 *   time interval
 *   part of the time axis limited by two instants
 *   ```
 *
 *   Also, this function now accepts an object with `start` and `end` properties
 *   instead of two arguments as an interval.
 *   This function now throws `RangeError` if the start of the interval is after its end
 *   or if any date in the interval is `Invalid Date`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   eachDay(new Date(2014, 0, 10), new Date(2014, 0, 20))
 *
 *   // v2.0.0 onward
 *
 *   eachDayOfInterval(
 *     { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) }
 *   )
 *   ```
 *
 * @param {Interval} interval - the interval. See [Interval]{@link https://date-fns.org/docs/Interval}
 * @param {Object} [options] - an object with options.
 * @param {Number} [options.step=1] - the step to increment by. The value should be more than 1.
 * @returns {Date[]} the array with starts of days from the day of the interval start to the day of the interval end
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.step` must be a number greater than 1
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each day between 6 October 2014 and 10 October 2014:
 * const result = eachDayOfInterval({
 *   start: new Date(2014, 9, 6),
 *   end: new Date(2014, 9, 10)
 * })
 * //=> [
 * //   Mon Oct 06 2014 00:00:00,
 * //   Tue Oct 07 2014 00:00:00,
 * //   Wed Oct 08 2014 00:00:00,
 * //   Thu Oct 09 2014 00:00:00,
 * //   Fri Oct 10 2014 00:00:00
 * // ]
 */

function eachDayOfInterval(dirtyInterval, options) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var interval = dirtyInterval || {};
  var startDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(interval.start);
  var endDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(interval.end);
  var endTime = endDate.getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(startDate.getTime() <= endTime)) {
    throw new RangeError('Invalid interval');
  }

  var dates = [];
  var currentDate = startDate;
  currentDate.setHours(0, 0, 0, 0);
  var step = options && 'step' in options ? Number(options.step) : 1;
  if (step < 1 || isNaN(step)) throw new RangeError('`options.step` must be a number greater than 1');

  while (currentDate.getTime() <= endTime) {
    dates.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(currentDate));
    currentDate.setDate(currentDate.getDate() + step);
    currentDate.setHours(0, 0, 0, 0);
  }

  return dates;
}

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = endOfWeek;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);




/**
 * @name endOfWeek
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the end of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 23:59:59.999
 */
function endOfWeek(dirtyDate, dirtyOptions) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_toInteger_index_js__["a" /* default */])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_toInteger_index_js__["a" /* default */])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  date.setDate(date.getDate() + diff);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = endOfYear;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name endOfYear
 * @category Year Helpers
 * @summary Return the end of a year for the given date.
 *
 * @description
 * Return the end of a year for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a year for 2 September 2014 11:55:00:
 * var result = endOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Dec 31 2014 23:59:59.999
 */

function endOfYear(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var year = date.getFullYear();
  date.setFullYear(year + 1, 0, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = format;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isValid_index_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__locale_en_US_index_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subMilliseconds_index_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_format_formatters_index_js__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_format_longFormatters_index_js__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_getTimezoneOffsetInMilliseconds_index_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_protectedTokens_index_js__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lib_requiredArgs_index_js__ = __webpack_require__(0);









 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 9. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale = options.locale || __WEBPACK_IMPORTED_MODULE_1__locale_en_US_index_js__["a" /* default */];
  var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__lib_toInteger_index_js__["a" /* default */])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__lib_toInteger_index_js__["a" /* default */])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__lib_toInteger_index_js__["a" /* default */])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__lib_toInteger_index_js__["a" /* default */])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__toDate_index_js__["a" /* default */])(dirtyDate);

  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isValid_index_js__["a" /* default */])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_getTimezoneOffsetInMilliseconds_index_js__["a" /* default */])(originalDate);
  var utcDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__subMilliseconds_index_js__["a" /* default */])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = __WEBPACK_IMPORTED_MODULE_5__lib_format_longFormatters_index_js__["a" /* default */][firstCharacter];
      return longFormatter(substring, locale.formatLong, formatterOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = __WEBPACK_IMPORTED_MODULE_4__lib_format_formatters_index_js__["a" /* default */][firstCharacter];

    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__lib_protectedTokens_index_js__["a" /* isProtectedWeekYearToken */])(substring)) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__lib_protectedTokens_index_js__["b" /* throwProtectedError */])(substring, dirtyFormatStr, dirtyDate);
      }

      if (!options.useAdditionalDayOfYearTokens && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__lib_protectedTokens_index_js__["c" /* isProtectedDayOfYearToken */])(substring)) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__lib_protectedTokens_index_js__["b" /* throwProtectedError */])(substring, dirtyFormatStr, dirtyDate);
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatDistance;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compareAsc_index_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__differenceInMonths_index_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__differenceInSeconds_index_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__locale_en_US_index_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_cloneObject_index_js__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_getTimezoneOffsetInMilliseconds_index_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_requiredArgs_index_js__ = __webpack_require__(0);








var MINUTES_IN_DAY = 1440;
var MINUTES_IN_ALMOST_TWO_DAYS = 2520;
var MINUTES_IN_MONTH = 43200;
var MINUTES_IN_TWO_MONTHS = 86400;
/**
 * @name formatDistance
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `distanceInWords ` to `formatDistance`
 *   to make its name consistent with `format` and `formatRelative`.
 *
 * - The order of arguments is swapped to make the function
 *   consistent with `differenceIn...` functions.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   distanceInWords(
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     new Date(1986, 3, 4, 11, 32, 0),
 *     { addSuffix: true }
 *   ) //=> 'in about 1 hour'
 *
 *   // v2.0.0 onward
 *
 *   formatDistance(
 *     new Date(1986, 3, 4, 11, 32, 0),
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     { addSuffix: true }
 *   ) //=> 'in about 1 hour'
 *   ```
 *
 * @param {Date|Number} date - the date
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * const result = formatDistance(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   { includeSeconds: true }
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * const result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> 'pli ol 1 jaro'
 */

function formatDistance(dirtyDate, dirtyBaseDate) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var locale = options.locale || __WEBPACK_IMPORTED_MODULE_3__locale_en_US_index_js__["a" /* default */];

  if (!locale.formatDistance) {
    throw new RangeError('locale must contain formatDistance property');
  }

  var comparison = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__compareAsc_index_js__["a" /* default */])(dirtyDate, dirtyBaseDate);

  if (isNaN(comparison)) {
    throw new RangeError('Invalid time value');
  }

  var localizeOptions = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__lib_cloneObject_index_js__["a" /* default */])(options);
  localizeOptions.addSuffix = Boolean(options.addSuffix);
  localizeOptions.comparison = comparison;
  var dateLeft;
  var dateRight;

  if (comparison > 0) {
    dateLeft = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__toDate_index_js__["a" /* default */])(dirtyBaseDate);
    dateRight = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__toDate_index_js__["a" /* default */])(dirtyDate);
  } else {
    dateLeft = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__toDate_index_js__["a" /* default */])(dirtyDate);
    dateRight = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__toDate_index_js__["a" /* default */])(dirtyBaseDate);
  }

  var seconds = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__differenceInSeconds_index_js__["a" /* default */])(dateRight, dateLeft);
  var offsetInSeconds = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_getTimezoneOffsetInMilliseconds_index_js__["a" /* default */])(dateRight) - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_getTimezoneOffsetInMilliseconds_index_js__["a" /* default */])(dateLeft)) / 1000;
  var minutes = Math.round((seconds - offsetInSeconds) / 60);
  var months; // 0 up to 2 mins

  if (minutes < 2) {
    if (options.includeSeconds) {
      if (seconds < 5) {
        return locale.formatDistance('lessThanXSeconds', 5, localizeOptions);
      } else if (seconds < 10) {
        return locale.formatDistance('lessThanXSeconds', 10, localizeOptions);
      } else if (seconds < 20) {
        return locale.formatDistance('lessThanXSeconds', 20, localizeOptions);
      } else if (seconds < 40) {
        return locale.formatDistance('halfAMinute', null, localizeOptions);
      } else if (seconds < 60) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', 1, localizeOptions);
      }
    } else {
      if (minutes === 0) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', minutes, localizeOptions);
      }
    } // 2 mins up to 0.75 hrs

  } else if (minutes < 45) {
    return locale.formatDistance('xMinutes', minutes, localizeOptions); // 0.75 hrs up to 1.5 hrs
  } else if (minutes < 90) {
    return locale.formatDistance('aboutXHours', 1, localizeOptions); // 1.5 hrs up to 24 hrs
  } else if (minutes < MINUTES_IN_DAY) {
    var hours = Math.round(minutes / 60);
    return locale.formatDistance('aboutXHours', hours, localizeOptions); // 1 day up to 1.75 days
  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
    return locale.formatDistance('xDays', 1, localizeOptions); // 1.75 days up to 30 days
  } else if (minutes < MINUTES_IN_MONTH) {
    var days = Math.round(minutes / MINUTES_IN_DAY);
    return locale.formatDistance('xDays', days, localizeOptions); // 1 month up to 2 months
  } else if (minutes < MINUTES_IN_TWO_MONTHS) {
    months = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('aboutXMonths', months, localizeOptions);
  }

  months = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__differenceInMonths_index_js__["a" /* default */])(dateRight, dateLeft); // 2 months up to 12 months

  if (months < 12) {
    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('xMonths', nearestMonth, localizeOptions); // 1 year up to max Date
  } else {
    var monthsSinceStartOfYear = months % 12;
    var years = Math.floor(months / 12); // N years up to 1 years 3 months

    if (monthsSinceStartOfYear < 3) {
      return locale.formatDistance('aboutXYears', years, localizeOptions); // N years 3 months up to N years 9 months
    } else if (monthsSinceStartOfYear < 9) {
      return locale.formatDistance('overXYears', years, localizeOptions); // N years 9 months up to N year 12 months
    } else {
      return locale.formatDistance('almostXYears', years + 1, localizeOptions);
    }
  }
}

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatDistanceStrict;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_getTimezoneOffsetInMilliseconds_index_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__compareAsc_index_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_cloneObject_index_js__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__locale_en_US_index_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_requiredArgs_index_js__ = __webpack_require__(0);






var MILLISECONDS_IN_MINUTE = 1000 * 60;
var MINUTES_IN_DAY = 60 * 24;
var MINUTES_IN_MONTH = MINUTES_IN_DAY * 30;
var MINUTES_IN_YEAR = MINUTES_IN_DAY * 365;
/**
 * @name formatDistanceStrict
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words, using strict units.
 * This is like `formatDistance`, but does not use helpers like 'almost', 'over',
 * 'less than' and the like.
 *
 * | Distance between dates | Result              |
 * |------------------------|---------------------|
 * | 0 ... 59 secs          | [0..59] seconds     |
 * | 1 ... 59 mins          | [1..59] minutes     |
 * | 1 ... 23 hrs           | [1..23] hours       |
 * | 1 ... 29 days          | [1..29] days        |
 * | 1 ... 11 months        | [1..11] months      |
 * | 1 ... N years          | [1..N]  years       |
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `distanceInWordsStrict` to `formatDistanceStrict`
 *   to make its name consistent with `format` and `formatRelative`.
 *
 * - The order of arguments is swapped to make the function
 *   consistent with `differenceIn...` functions.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   distanceInWordsStrict(
 *     new Date(2015, 0, 2),
 *     new Date(2014, 6, 2)
 *   ) //=> '6 months'
 *
 *   // v2.0.0 onward
 *
 *   formatDistanceStrict(
 *     new Date(2014, 6, 2),
 *     new Date(2015, 0, 2)
 *   ) //=> '6 months'
 *   ```
 *
 * - `partialMethod` option is renamed to `roundingMethod`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   distanceInWordsStrict(
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     new Date(1986, 3, 4, 10, 33, 1),
 *     { partialMethod: 'ceil' }
 *   ) //=> '2 minutes'
 *
 *   // v2.0.0 onward
 *
 *   formatDistanceStrict(
 *     new Date(1986, 3, 4, 10, 33, 1),
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     { roundingMethod: 'ceil' }
 *   ) //=> '2 minutes'
 *   ```
 *
 * - If `roundingMethod` is not specified, it now defaults to `round` instead of `floor`.
 *
 * - `unit` option now accepts one of the strings:
 *   'second', 'minute', 'hour', 'day', 'month' or 'year' instead of 's', 'm', 'h', 'd', 'M' or 'Y'
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   distanceInWordsStrict(
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     new Date(1986, 3, 4, 10, 33, 1),
 *     { unit: 'm' }
 *   )
 *
 *   // v2.0.0 onward
 *
 *   formatDistanceStrict(
 *     new Date(1986, 3, 4, 10, 33, 1),
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     { unit: 'minute' }
 *   )
 *   ```
 *
 * @param {Date|Number} date - the date
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {'second'|'minute'|'hour'|'day'|'month'|'year'} [options.unit] - if specified, will force a unit
 * @param {'floor'|'ceil'|'round'} [options.roundingMethod='round'] - which way to round partial units
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.roundingMethod` must be 'floor', 'ceil' or 'round'
 * @throws {RangeError} `options.unit` must be 'second', 'minute', 'hour', 'day', 'month' or 'year'
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * const result = formatDistanceStrict(new Date(2014, 6, 2), new Date(2015, 0, 2))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00?
 * const result = formatDistanceStrict(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0)
 * )
 * //=> '15 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * const result = formatDistanceStrict(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> '1 year ago'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, in minutes?
 * const result = formatDistanceStrict(new Date(2016, 0, 1), new Date(2015, 0, 1), {
 *   unit: 'minute'
 * })
 * //=> '525600 minutes'
 *
 * @example
 * // What is the distance from 1 January 2015
 * // to 28 January 2015, in months, rounded up?
 * const result = formatDistanceStrict(new Date(2015, 0, 28), new Date(2015, 0, 1), {
 *   unit: 'month',
 *   roundingMethod: 'ceil'
 * })
 * //=> '1 month'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = formatDistanceStrict(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> '1 jaro'
 */

function formatDistanceStrict(dirtyDate, dirtyBaseDate) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var locale = options.locale || __WEBPACK_IMPORTED_MODULE_4__locale_en_US_index_js__["a" /* default */];

  if (!locale.formatDistance) {
    throw new RangeError('locale must contain localize.formatDistance property');
  }

  var comparison = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__compareAsc_index_js__["a" /* default */])(dirtyDate, dirtyBaseDate);

  if (isNaN(comparison)) {
    throw new RangeError('Invalid time value');
  }

  var localizeOptions = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_cloneObject_index_js__["a" /* default */])(options);
  localizeOptions.addSuffix = Boolean(options.addSuffix);
  localizeOptions.comparison = comparison;
  var dateLeft;
  var dateRight;

  if (comparison > 0) {
    dateLeft = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__toDate_index_js__["a" /* default */])(dirtyBaseDate);
    dateRight = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__toDate_index_js__["a" /* default */])(dirtyDate);
  } else {
    dateLeft = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__toDate_index_js__["a" /* default */])(dirtyDate);
    dateRight = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__toDate_index_js__["a" /* default */])(dirtyBaseDate);
  }

  var roundingMethod = options.roundingMethod == null ? 'round' : String(options.roundingMethod);
  var roundingMethodFn;

  if (roundingMethod === 'floor') {
    roundingMethodFn = Math.floor;
  } else if (roundingMethod === 'ceil') {
    roundingMethodFn = Math.ceil;
  } else if (roundingMethod === 'round') {
    roundingMethodFn = Math.round;
  } else {
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  }

  var milliseconds = dateRight.getTime() - dateLeft.getTime();
  var minutes = milliseconds / MILLISECONDS_IN_MINUTE;
  var timezoneOffset = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_getTimezoneOffsetInMilliseconds_index_js__["a" /* default */])(dateRight) - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_getTimezoneOffsetInMilliseconds_index_js__["a" /* default */])(dateLeft); // Use DST-normalized difference in minutes for years, months and days;
  // use regular difference in minutes for hours, minutes and seconds.

  var dstNormalizedMinutes = (milliseconds - timezoneOffset) / MILLISECONDS_IN_MINUTE;
  var unit;

  if (options.unit == null) {
    if (minutes < 1) {
      unit = 'second';
    } else if (minutes < 60) {
      unit = 'minute';
    } else if (minutes < MINUTES_IN_DAY) {
      unit = 'hour';
    } else if (dstNormalizedMinutes < MINUTES_IN_MONTH) {
      unit = 'day';
    } else if (dstNormalizedMinutes < MINUTES_IN_YEAR) {
      unit = 'month';
    } else {
      unit = 'year';
    }
  } else {
    unit = String(options.unit);
  } // 0 up to 60 seconds


  if (unit === 'second') {
    var seconds = roundingMethodFn(milliseconds / 1000);
    return locale.formatDistance('xSeconds', seconds, localizeOptions); // 1 up to 60 mins
  } else if (unit === 'minute') {
    var roundedMinutes = roundingMethodFn(minutes);
    return locale.formatDistance('xMinutes', roundedMinutes, localizeOptions); // 1 up to 24 hours
  } else if (unit === 'hour') {
    var hours = roundingMethodFn(minutes / 60);
    return locale.formatDistance('xHours', hours, localizeOptions); // 1 up to 30 days
  } else if (unit === 'day') {
    var days = roundingMethodFn(dstNormalizedMinutes / MINUTES_IN_DAY);
    return locale.formatDistance('xDays', days, localizeOptions); // 1 up to 12 months
  } else if (unit === 'month') {
    var months = roundingMethodFn(dstNormalizedMinutes / MINUTES_IN_MONTH);
    return months === 12 && options.unit !== 'month' ? locale.formatDistance('xYears', 1, localizeOptions) : locale.formatDistance('xMonths', months, localizeOptions); // 1 year up to max Date
  } else if (unit === 'year') {
    var years = roundingMethodFn(dstNormalizedMinutes / MINUTES_IN_YEAR);
    return locale.formatDistance('xYears', years, localizeOptions);
  }

  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getDate;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name getDate
 * @category Day Helpers
 * @summary Get the day of the month of the given date.
 *
 * @description
 * Get the day of the month of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the day of month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the month is 29 February 2012?
 * const result = getDate(new Date(2012, 1, 29))
 * //=> 29
 */

function getDate(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var dayOfMonth = date.getDate();
  return dayOfMonth;
}

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getDaysInMonth;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name getDaysInMonth
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the number of days in a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // How many days are in February 2000?
 * const result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */

function getDaysInMonth(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var year = date.getFullYear();
  var monthIndex = date.getMonth();
  var lastDayOfMonth = new Date(0);
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
  lastDayOfMonth.setHours(0, 0, 0, 0);
  return lastDayOfMonth.getDate();
}

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getISODay;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name getISODay
 * @category Weekday Helpers
 * @summary Get the day of the ISO week of the given date.
 *
 * @description
 * Get the day of the ISO week of the given date,
 * which is 7 for Sunday, 1 for Monday etc.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the day of ISO week
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the ISO week is 26 February 2012?
 * const result = getISODay(new Date(2012, 1, 26))
 * //=> 7
 */

function getISODay(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var day = date.getDay();

  if (day === 0) {
    day = 7;
  }

  return day;
}

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getISOWeek;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__startOfISOWeek_index_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__startOfISOWeekYear_index_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__(0);




var MILLISECONDS_IN_WEEK = 604800000;
/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the ISO week
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */

function getISOWeek(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var diff = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__startOfISOWeek_index_js__["a" /* default */])(date).getTime() - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__startOfISOWeekYear_index_js__["a" /* default */])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getQuarter;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name getQuarter
 * @category Quarter Helpers
 * @summary Get the year quarter of the given date.
 *
 * @description
 * Get the year quarter of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the quarter
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which quarter is 2 July 2014?
 * const result = getQuarter(new Date(2014, 6, 2))
 * //=> 3
 */

function getQuarter(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var quarter = Math.floor(date.getMonth() / 3) + 1;
  return quarter;
}

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getTime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name getTime
 * @category Timestamp Helpers
 * @summary Get the milliseconds timestamp of the given date.
 *
 * @description
 * Get the milliseconds timestamp of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the timestamp
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the timestamp of 29 February 2012 11:45:05.123:
 * const result = getTime(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 1330515905123
 */

function getTime(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var timestamp = date.getTime();
  return timestamp;
}

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getWeek;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__startOfWeek_index_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__startOfWeekYear_index_js__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__(0);




var MILLISECONDS_IN_WEEK = 604800000;
/**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @returns {Number} the week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getISOWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */

function getWeek(dirtyDate, options) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__toDate_index_js__["a" /* default */])(dirtyDate);
  var diff = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__startOfWeek_index_js__["a" /* default */])(date, options).getTime() - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__startOfWeekYear_index_js__["a" /* default */])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getWeekYear;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__startOfWeek_index_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__(0);





/**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @returns {Number} the local week-numbering year
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */
function getWeekYear(dirtyDate, options) {
  var _options$locale, _options$locale$optio;

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  var year = date.getFullYear();
  var localeFirstWeekContainsDate = options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__["a" /* default */])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = (options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) == null ? defaultFirstWeekContainsDate : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__["a" /* default */])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  var startOfNextYear = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__startOfWeek_index_js__["a" /* default */])(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  var startOfThisYear = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__startOfWeek_index_js__["a" /* default */])(firstWeekOfThisYear, options);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isLastDayOfMonth;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__endOfDay_index_js__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__endOfMonth_index_js__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__(0);




/**
 * @name isLastDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is the last day of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * var result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */

function isLastDayOfMonth(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__endOfDay_index_js__["a" /* default */])(date).getTime() === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__endOfMonth_index_js__["a" /* default */])(date).getTime();
}

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isLeapYear;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name isLeapYear
 * @category Year Helpers
 * @summary Is the given date in the leap year?
 *
 * @description
 * Is the given date in the leap year?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in the leap year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 1 September 2012 in the leap year?
 * var result = isLeapYear(new Date(2012, 8, 1))
 * //=> true
 */

function isLeapYear(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var year = date.getFullYear();
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isSameHour;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__startOfHour_index_js__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name isSameHour
 * @category Hour Helpers
 * @summary Are the given dates in the same hour?
 *
 * @description
 * Are the given dates in the same hour?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same hour
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 2014 06:00:00 and 4 September 06:30:00 in the same hour?
 * var result = isSameHour(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 6, 30))
 * //=> true
 */

function isSameHour(dirtyDateLeft, dirtyDateRight) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateLeftStartOfHour = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__startOfHour_index_js__["a" /* default */])(dirtyDateLeft);
  var dateRightStartOfHour = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__startOfHour_index_js__["a" /* default */])(dirtyDateRight);
  return dateLeftStartOfHour.getTime() === dateRightStartOfHour.getTime();
}

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isSameISOWeek;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isSameWeek_index_js__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name isSameISOWeek
 * @category ISO Week Helpers
 * @summary Are the given dates in the same ISO week?
 *
 * @description
 * Are the given dates in the same ISO week?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same ISO week
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 1 September 2014 and 7 September 2014 in the same ISO week?
 * var result = isSameISOWeek(new Date(2014, 8, 1), new Date(2014, 8, 7))
 * //=> true
 */

function isSameISOWeek(dirtyDateLeft, dirtyDateRight) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isSameWeek_index_js__["a" /* default */])(dirtyDateLeft, dirtyDateRight, {
    weekStartsOn: 1
  });
}

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isSameMinute;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__startOfMinute_index_js__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name isSameMinute
 * @category Minute Helpers
 * @summary Are the given dates in the same minute?
 *
 * @description
 * Are the given dates in the same minute?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same minute
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 2014 06:30:00 and 4 September 2014 06:30:15
 * // in the same minute?
 * var result = isSameMinute(
 *   new Date(2014, 8, 4, 6, 30),
 *   new Date(2014, 8, 4, 6, 30, 15)
 * )
 * //=> true
 */

function isSameMinute(dirtyDateLeft, dirtyDateRight) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateLeftStartOfMinute = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__startOfMinute_index_js__["a" /* default */])(dirtyDateLeft);
  var dateRightStartOfMinute = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__startOfMinute_index_js__["a" /* default */])(dirtyDateRight);
  return dateLeftStartOfMinute.getTime() === dateRightStartOfMinute.getTime();
}

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isSameMonth;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name isSameMonth
 * @category Month Helpers
 * @summary Are the given dates in the same month?
 *
 * @description
 * Are the given dates in the same month?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same month
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * var result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 */

function isSameMonth(dirtyDateLeft, dirtyDateRight) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateLeft = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateLeft);
  var dateRight = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateRight);
  return dateLeft.getFullYear() === dateRight.getFullYear() && dateLeft.getMonth() === dateRight.getMonth();
}

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isSameQuarter;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__startOfQuarter_index_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name isSameQuarter
 * @category Quarter Helpers
 * @summary Are the given dates in the same year quarter?
 *
 * @description
 * Are the given dates in the same year quarter?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same quarter
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 1 January 2014 and 8 March 2014 in the same quarter?
 * var result = isSameQuarter(new Date(2014, 0, 1), new Date(2014, 2, 8))
 * //=> true
 */

function isSameQuarter(dirtyDateLeft, dirtyDateRight) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateLeftStartOfQuarter = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__startOfQuarter_index_js__["a" /* default */])(dirtyDateLeft);
  var dateRightStartOfQuarter = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__startOfQuarter_index_js__["a" /* default */])(dirtyDateRight);
  return dateLeftStartOfQuarter.getTime() === dateRightStartOfQuarter.getTime();
}

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isSameSecond;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__startOfSecond_index_js__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name isSameSecond
 * @category Second Helpers
 * @summary Are the given dates in the same second?
 *
 * @description
 * Are the given dates in the same second?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same second
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 2014 06:30:15.000 and 4 September 2014 06:30.15.500
 * // in the same second?
 * var result = isSameSecond(
 *   new Date(2014, 8, 4, 6, 30, 15),
 *   new Date(2014, 8, 4, 6, 30, 15, 500)
 * )
 * //=> true
 */

function isSameSecond(dirtyDateLeft, dirtyDateRight) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateLeftStartOfSecond = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__startOfSecond_index_js__["a" /* default */])(dirtyDateLeft);
  var dateRightStartOfSecond = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__startOfSecond_index_js__["a" /* default */])(dirtyDateRight);
  return dateLeftStartOfSecond.getTime() === dateRightStartOfSecond.getTime();
}

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isSameYear;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name isSameYear
 * @category Year Helpers
 * @summary Are the given dates in the same year?
 *
 * @description
 * Are the given dates in the same year?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same year
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same year?
 * var result = isSameYear(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 */

function isSameYear(dirtyDateLeft, dirtyDateRight) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateLeft = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateLeft);
  var dateRight = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateRight);
  return dateLeft.getFullYear() === dateRight.getFullYear();
}

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isSaturday;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name isSaturday
 * @category Weekday Helpers
 * @summary Is the given date Saturday?
 *
 * @description
 * Is the given date Saturday?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is Saturday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 27 September 2014 Saturday?
 * var result = isSaturday(new Date(2014, 8, 27))
 * //=> true
 */

function isSaturday(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate).getDay() === 6;
}

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = lastDayOfMonth;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name lastDayOfMonth
 * @category Month Helpers
 * @summary Return the last day of a month for the given date.
 *
 * @description
 * Return the last day of a month for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the last day of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The last day of a month for 2 September 2014 11:55:00:
 * var result = lastDayOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 00:00:00
 */

function lastDayOfMonth(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = lastDayOfWeek;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);




/**
 * @name lastDayOfWeek
 * @category Week Helpers
 * @summary Return the last day of a week for the given date.
 *
 * @description
 * Return the last day of a week for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the last day of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The last day of a week for 2 September 2014 11:55:00:
 * var result = lastDayOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the last day of the week for 2 September 2014 11:55:00:
 * var result = lastDayOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 00:00:00
 */
function lastDayOfWeek(dirtyDate, dirtyOptions) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_toInteger_index_js__["a" /* default */])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_toInteger_index_js__["a" /* default */])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6');
  }

  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + diff);
  return date;
}

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = max;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name max
 * @category Common Helpers
 * @summary Return the latest of the given dates.
 *
 * @description
 * Return the latest of the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - `max` function now accepts an array of dates rather than spread arguments.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   var date1 = new Date(1989, 6, 10)
 *   var date2 = new Date(1987, 1, 11)
 *   var maxDate = max(date1, date2)
 *
 *   // v2.0.0 onward:
 *   var dates = [new Date(1989, 6, 10), new Date(1987, 1, 11)]
 *   var maxDate = max(dates)
 *   ```
 *
 * @param {Date[]|Number[]} datesArray - the dates to compare
 * @returns {Date} the latest of the dates
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which of these dates is the latest?
 * var result = max([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Sun Jul 02 1995 00:00:00
 */

function max(dirtyDatesArray) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var datesArray; // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method

  if (dirtyDatesArray && typeof dirtyDatesArray.forEach === 'function') {
    datesArray = dirtyDatesArray; // If `dirtyDatesArray` is Array-like Object, convert to Array.
  } else if (typeof dirtyDatesArray === 'object' && dirtyDatesArray !== null) {
    datesArray = Array.prototype.slice.call(dirtyDatesArray);
  } else {
    // `dirtyDatesArray` is non-iterable, return Invalid Date
    return new Date(NaN);
  }

  var result;
  datesArray.forEach(function (dirtyDate) {
    var currentDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);

    if (result === undefined || result < currentDate || isNaN(Number(currentDate))) {
      result = currentDate;
    }
  });
  return result || new Date(NaN);
}

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = min;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name min
 * @category Common Helpers
 * @summary Returns the earliest of the given dates.
 *
 * @description
 * Returns the earliest of the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - `min` function now accepts an array of dates rather than spread arguments.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   const date1 = new Date(1989, 6, 10)
 *   const date2 = new Date(1987, 1, 11)
 *   const minDate = min(date1, date2)
 *
 *   // v2.0.0 onward:
 *   const dates = [new Date(1989, 6, 10), new Date(1987, 1, 11)]
 *   const minDate = min(dates)
 *   ```
 *
 * @param {Date[]|Number[]} datesArray - the dates to compare
 * @returns {Date} - the earliest of the dates
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which of these dates is the earliest?
 * const result = min([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Wed Feb 11 1987 00:00:00
 */

function min(dirtyDatesArray) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var datesArray; // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method

  if (dirtyDatesArray && typeof dirtyDatesArray.forEach === 'function') {
    datesArray = dirtyDatesArray; // If `dirtyDatesArray` is Array-like Object, convert to Array.
  } else if (typeof dirtyDatesArray === 'object' && dirtyDatesArray !== null) {
    datesArray = Array.prototype.slice.call(dirtyDatesArray);
  } else {
    // `dirtyDatesArray` is non-iterable, return Invalid Date
    return new Date(NaN);
  }

  var result;
  datesArray.forEach(function (dirtyDate) {
    var currentDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);

    if (result === undefined || result > currentDate || isNaN(currentDate.getDate())) {
      result = currentDate;
    }
  });
  return result || new Date(NaN);
}

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = parse;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__locale_en_US_index_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__subMilliseconds_index_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_assign_index_js__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_format_longFormatters_index_js__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_getTimezoneOffsetInMilliseconds_index_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_protectedTokens_index_js__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_parsers_index_js__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lib_requiredArgs_index_js__ = __webpack_require__(0);










var TIMEZONE_UNIT_PRIORITY = 10; // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var notWhitespaceRegExp = /\S/;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name parse
 * @category Common Helpers
 * @summary Parse the date.
 *
 * @description
 * Return the date parsed from string using the given format string.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters in the format string wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the format string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 5 below the table).
 *
 * Not all tokens are compatible. Combinations that don't make sense or could lead to bugs are prohibited
 * and will throw `RangeError`. For example usage of 24-hour format token with AM/PM token will throw an exception:
 *
 * ```javascript
 * parse('23 AM', 'HH a', new Date())
 * //=> RangeError: The format string mustn't contain `HH` and `a` at the same time
 * ```
 *
 * See the compatibility table: https://docs.google.com/spreadsheets/d/e/2PACX-1vQOPU3xUhplll6dyoMmVUXHKl_8CRDs6_ueLmex3SoqwhuolkuN3O05l4rqx5h1dKX8eb46Ul-CCSrq/pubhtml?gid=0&single=true
 *
 * Accepted format string patterns:
 * | Unit                            |Prior| Pattern | Result examples                   | Notes |
 * |---------------------------------|-----|---------|-----------------------------------|-------|
 * | Era                             | 140 | G..GGG  | AD, BC                            |       |
 * |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 |     | GGGGG   | A, B                              |       |
 * | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
 * |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
 * |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
 * |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
 * |                                 |     | yyyyy   | ...                               | 2,4   |
 * | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
 * |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
 * |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
 * |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
 * |                                 |     | YYYYY   | ...                               | 2,4   |
 * | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
 * |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
 * |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
 * |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
 * |                                 |     | RRRRR   | ...                               | 2,4,5 |
 * | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
 * |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
 * |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
 * |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
 * |                                 |     | uuuuu   | ...                               | 2,4   |
 * | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
 * |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | QQ      | 01, 02, 03, 04                    |       |
 * |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
 * |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | qq      | 01, 02, 03, 04                    |       |
 * |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
 * | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
 * |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | MM      | 01, 02, ..., 12                   |       |
 * |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | MMMM    | January, February, ..., December  | 2     |
 * |                                 |     | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
 * |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | LL      | 01, 02, ..., 12                   |       |
 * |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | LLLL    | January, February, ..., December  | 2     |
 * |                                 |     | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
 * |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
 * |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | II      | 01, 02, ..., 53                   | 5     |
 * | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
 * |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
 * |                                 |     | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
 * |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
 * |                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
 * |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 |     | DDDD    | ...                               | 2     |
 * | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
 * |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
 * |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
 * |                                 |     | iii     | Mon, Tue, Wed, ..., Sun           | 5     |
 * |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
 * |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
 * |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 5     |
 * | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | ee      | 02, 03, ..., 01                   |       |
 * |                                 |     | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | cc      | 02, 03, ..., 01                   |       |
 * |                                 |     | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
 * |                                 |     | aaaa    | a.m., p.m.                        | 2     |
 * |                                 |     | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 |     | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
 * |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 |     | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
 * |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
 * |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
 * |                                 |     | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
 * |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
 * |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | mm      | 00, 01, ..., 59                   |       |
 * | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
 * |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | ss      | 00, 01, ..., 59                   |       |
 * | Seconds timestamp               |  40 | t       | 512969520                         |       |
 * |                                 |     | tt      | ...                               | 2     |
 * | Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
 * |                                 |     | SS      | 00, 01, ..., 99                   |       |
 * |                                 |     | SSS     | 000, 0001, ..., 999               |       |
 * |                                 |     | SSSS    | ...                               | 2     |
 * | Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
 * |                                 |     | TT      | ...                               | 2     |
 * | Timezone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
 * |                                 |     | XX      | -0800, +0530, Z                   |       |
 * |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
 * |                                 |     | xx      | -0800, +0530, +0000               |       |
 * |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
 * |                                 |     | PP      | May 29, 1453                      |       |
 * |                                 |     | PPP     | May 29th, 1453                    |       |
 * |                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
 * | Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
 * |                                 |     | pp      | 12:00:00 AM                       |       |
 * | Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
 * |                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
 * |                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
 * |                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular.
 *    In `format` function, they will produce different result:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 *    `parse` will try to match both formatting and stand-alone units interchangably.
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table:
 *    - for numerical units (`yyyyyyyy`) `parse` will try to match a number
 *      as wide as the sequence
 *    - for text units (`MMMMMMMM`) `parse` will try to match the widest variation of the unit.
 *      These variations are marked with "2" in the last column of the table.
 *
 * 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 4. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` will try to guess the century of two digit year by proximity with `referenceDate`:
 *
 *    `parse('50', 'yy', new Date(2018, 0, 1)) //=> Sat Jan 01 2050 00:00:00`
 *
 *    `parse('75', 'yy', new Date(2018, 0, 1)) //=> Wed Jan 01 1975 00:00:00`
 *
 *    while `uu` will just assign the year as is:
 *
 *    `parse('50', 'uu', new Date(2018, 0, 1)) //=> Sat Jan 01 0050 00:00:00`
 *
 *    `parse('75', 'uu', new Date(2018, 0, 1)) //=> Tue Jan 01 0075 00:00:00`
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [setISOWeekYear]{@link https://date-fns.org/docs/setISOWeekYear}
 *    and [setWeekYear]{@link https://date-fns.org/docs/setWeekYear}).
 *
 * 5. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 7. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
 *    on the given locale.
 *
 *    using `en-US` locale: `P` => `MM/dd/yyyy`
 *    using `en-US` locale: `p` => `hh:mm a`
 *    using `pt-BR` locale: `P` => `dd/MM/yyyy`
 *    using `pt-BR` locale: `p` => `HH:mm`
 *
 * Values will be assigned to the date in the descending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
 * the values will be taken from 3rd argument `referenceDate` which works as a context of parsing.
 *
 * `referenceDate` must be passed for correct work of the function.
 * If you're not sure which `referenceDate` to supply, create a new instance of Date:
 * `parse('02/11/2014', 'MM/dd/yyyy', new Date())`
 * In this case parsing will be done in the context of the current date.
 * If `referenceDate` is `Invalid Date` or a value not convertible to valid `Date`,
 * then `Invalid Date` will be returned.
 *
 * The result may vary by locale.
 *
 * If `formatString` matches with `dateString` but does not provides tokens, `referenceDate` will be returned.
 *
 * If parsing failed, `Invalid Date` will be returned.
 * Invalid Date is a Date, whose time value is NaN.
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Old `parse` was renamed to `toDate`.
 *   Now `parse` is a new function which parses a string using a provided format.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward (toDate no longer accepts a string)
 *   toDate(1392098430000) // Unix to timestamp
 *   toDate(new Date(2014, 1, 11, 11, 30, 30)) // Cloning the date
 *   parse('2016-01-01', 'yyyy-MM-dd', new Date())
 *   ```
 *
 * @param {String} dateString - the string to parse
 * @param {String} formatString - the string of tokens
 * @param {Date|Number} referenceDate - defines values missing from the parsed dateString
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {Date} the parsed date
 * @throws {TypeError} 3 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} `options.locale` must contain `match` property
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Parse 11 February 2014 from middle-endian format:
 * var result = parse('02/11/2014', 'MM/dd/yyyy', new Date())
 * //=> Tue Feb 11 2014 00:00:00
 *
 * @example
 * // Parse 28th of February in Esperanto locale in the context of 2010 year:
 * import eo from 'date-fns/locale/eo'
 * var result = parse('28-a de februaro', "do 'de' MMMM", new Date(2010, 0, 1), {
 *   locale: eo
 * })
 * //=> Sun Feb 28 2010 00:00:00
 */

function parse(dirtyDateString, dirtyFormatString, dirtyReferenceDate, dirtyOptions) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__lib_requiredArgs_index_js__["a" /* default */])(3, arguments);
  var dateString = String(dirtyDateString);
  var formatString = String(dirtyFormatString);
  var options = dirtyOptions || {};
  var locale = options.locale || __WEBPACK_IMPORTED_MODULE_0__locale_en_US_index_js__["a" /* default */];

  if (!locale.match) {
    throw new RangeError('locale must contain match property');
  }

  var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__lib_toInteger_index_js__["a" /* default */])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__lib_toInteger_index_js__["a" /* default */])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__lib_toInteger_index_js__["a" /* default */])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__lib_toInteger_index_js__["a" /* default */])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (formatString === '') {
    if (dateString === '') {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__toDate_index_js__["a" /* default */])(dirtyReferenceDate);
    } else {
      return new Date(NaN);
    }
  }

  var subFnOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale
  }; // If timezone isn't specified, it will be set to the system timezone

  var setters = [{
    priority: TIMEZONE_UNIT_PRIORITY,
    subPriority: -1,
    set: dateToSystemTimezone,
    index: 0
  }];
  var i;
  var tokens = formatString.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = __WEBPACK_IMPORTED_MODULE_4__lib_format_longFormatters_index_js__["a" /* default */][firstCharacter];
      return longFormatter(substring, locale.formatLong, subFnOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp);
  var usedTokens = [];

  for (i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (!options.useAdditionalWeekYearTokens && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_protectedTokens_index_js__["a" /* isProtectedWeekYearToken */])(token)) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_protectedTokens_index_js__["b" /* throwProtectedError */])(token, formatString, dirtyDateString);
    }

    if (!options.useAdditionalDayOfYearTokens && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_protectedTokens_index_js__["c" /* isProtectedDayOfYearToken */])(token)) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_protectedTokens_index_js__["b" /* throwProtectedError */])(token, formatString, dirtyDateString);
    }

    var firstCharacter = token[0];
    var parser = __WEBPACK_IMPORTED_MODULE_8__lib_parsers_index_js__["a" /* default */][firstCharacter];

    if (parser) {
      var incompatibleTokens = parser.incompatibleTokens;

      if (Array.isArray(incompatibleTokens)) {
        var incompatibleToken = void 0;

        for (var _i = 0; _i < usedTokens.length; _i++) {
          var usedToken = usedTokens[_i].token;

          if (incompatibleTokens.indexOf(usedToken) !== -1 || usedToken === firstCharacter) {
            incompatibleToken = usedTokens[_i];
            break;
          }
        }

        if (incompatibleToken) {
          throw new RangeError("The format string mustn't contain `".concat(incompatibleToken.fullToken, "` and `").concat(token, "` at the same time"));
        }
      } else if (parser.incompatibleTokens === '*' && usedTokens.length) {
        throw new RangeError("The format string mustn't contain `".concat(token, "` and any other token at the same time"));
      }

      usedTokens.push({
        token: firstCharacter,
        fullToken: token
      });
      var parseResult = parser.parse(dateString, token, locale.match, subFnOptions);

      if (!parseResult) {
        return new Date(NaN);
      }

      setters.push({
        priority: parser.priority,
        subPriority: parser.subPriority || 0,
        set: parser.set,
        validate: parser.validate,
        value: parseResult.value,
        index: setters.length
      });
      dateString = parseResult.rest;
    } else {
      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
      } // Replace two single quote characters with one single quote character


      if (token === "''") {
        token = "'";
      } else if (firstCharacter === "'") {
        token = cleanEscapedString(token);
      } // Cut token from string, or, if string doesn't match the token, return Invalid Date


      if (dateString.indexOf(token) === 0) {
        dateString = dateString.slice(token.length);
      } else {
        return new Date(NaN);
      }
    }
  } // Check if the remaining input contains something other than whitespace


  if (dateString.length > 0 && notWhitespaceRegExp.test(dateString)) {
    return new Date(NaN);
  }

  var uniquePrioritySetters = setters.map(function (setter) {
    return setter.priority;
  }).sort(function (a, b) {
    return b - a;
  }).filter(function (priority, index, array) {
    return array.indexOf(priority) === index;
  }).map(function (priority) {
    return setters.filter(function (setter) {
      return setter.priority === priority;
    }).sort(function (a, b) {
      return b.subPriority - a.subPriority;
    });
  }).map(function (setterArray) {
    return setterArray[0];
  });
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__toDate_index_js__["a" /* default */])(dirtyReferenceDate);

  if (isNaN(date)) {
    return new Date(NaN);
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/37


  var utcDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__subMilliseconds_index_js__["a" /* default */])(date, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__lib_getTimezoneOffsetInMilliseconds_index_js__["a" /* default */])(date));
  var flags = {};

  for (i = 0; i < uniquePrioritySetters.length; i++) {
    var setter = uniquePrioritySetters[i];

    if (setter.validate && !setter.validate(utcDate, setter.value, subFnOptions)) {
      return new Date(NaN);
    }

    var result = setter.set(utcDate, flags, setter.value, subFnOptions); // Result is tuple (date, flags)

    if (result[0]) {
      utcDate = result[0];
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_assign_index_js__["a" /* default */])(flags, result[1]); // Result is date
    } else {
      utcDate = result;
    }
  }

  return utcDate;
}

function dateToSystemTimezone(date, flags) {
  if (flags.timestampIsSet) {
    return date;
  }

  var convertedDate = new Date(0);
  convertedDate.setFullYear(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  convertedDate.setHours(date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
  return convertedDate;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setISOWeekYear;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__startOfISOWeekYear_index_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__differenceInCalendarDays_index_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_requiredArgs_index_js__ = __webpack_require__(0);





/**
 * @name setISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Set the ISO week-numbering year to the given date.
 *
 * @description
 * Set the ISO week-numbering year to the given date,
 * saving the week number and the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `setISOYear` to `setISOWeekYear`.
 *   "ISO week year" is short for [ISO week-numbering year](https://en.wikipedia.org/wiki/ISO_week_date).
 *   This change makes the name consistent with
 *   locale-dependent week-numbering year helpers, e.g., `setWeekYear`.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} isoWeekYear - the ISO week-numbering year of the new date
 * @returns {Date} the new date with the ISO week-numbering year set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set ISO week-numbering year 2007 to 29 December 2008:
 * const result = setISOWeekYear(new Date(2008, 11, 29), 2007)
 * //=> Mon Jan 01 2007 00:00:00
 */

function setISOWeekYear(dirtyDate, dirtyISOWeekYear) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  var isoWeekYear = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyISOWeekYear);
  var diff = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__differenceInCalendarDays_index_js__["a" /* default */])(date, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__startOfISOWeekYear_index_js__["a" /* default */])(date));
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setFullYear(isoWeekYear, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__startOfISOWeekYear_index_js__["a" /* default */])(fourthOfJanuary);
  date.setDate(date.getDate() + diff);
  return date;
}

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = startOfHour;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name startOfHour
 * @category Hour Helpers
 * @summary Return the start of an hour for the given date.
 *
 * @description
 * Return the start of an hour for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of an hour
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of an hour for 2 September 2014 11:55:00:
 * const result = startOfHour(new Date(2014, 8, 2, 11, 55))
 * //=> Tue Sep 02 2014 11:00:00
 */

function startOfHour(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  date.setMinutes(0, 0, 0);
  return date;
}

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = startOfSecond;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name startOfSecond
 * @category Second Helpers
 * @summary Return the start of a second for the given date.
 *
 * @description
 * Return the start of a second for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a second
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a second for 1 December 2014 22:15:45.400:
 * const result = startOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:45.000
 */

function startOfSecond(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  date.setMilliseconds(0);
  return date;
}

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sub;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__subDays_index_js__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__subMonths_index_js__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_toInteger_index_js__ = __webpack_require__(2);





/**
 * @name sub
 * @category Common Helpers
 * @summary Subtract the specified years, months, weeks, days, hours, minutes and seconds from the given date.
 *
 * @description
 * Subtract the specified years, months, weeks, days, hours, minutes and seconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Duration} duration - the object with years, months, weeks, days, hours, minutes and seconds to be subtracted
 *
 * | Key     | Description                        |
 * |---------|------------------------------------|
 * | years   | Amount of years to be subtracted   |
 * | months  | Amount of months to be subtracted  |
 * | weeks   | Amount of weeks to be subtracted   |
 * | days    | Amount of days to be subtracted    |
 * | hours   | Amount of hours to be subtracted   |
 * | minutes | Amount of minutes to be subtracted |
 * | seconds | Amount of seconds to be subtracted |
 *
 * All values default to 0
 *
 * @returns {Date} the new date with the seconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract the following duration from 15 June 2017 15:29:20
 * const result = sub(new Date(2017, 5, 15, 15, 29, 20), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30
 * })
 * //=> Mon Sep 1 2014 10:19:50
 */

function sub(dirtyDate, duration) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  if (!duration || typeof duration !== 'object') return new Date(NaN);
  var years = duration.years ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_toInteger_index_js__["a" /* default */])(duration.years) : 0;
  var months = duration.months ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_toInteger_index_js__["a" /* default */])(duration.months) : 0;
  var weeks = duration.weeks ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_toInteger_index_js__["a" /* default */])(duration.weeks) : 0;
  var days = duration.days ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_toInteger_index_js__["a" /* default */])(duration.days) : 0;
  var hours = duration.hours ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_toInteger_index_js__["a" /* default */])(duration.hours) : 0;
  var minutes = duration.minutes ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_toInteger_index_js__["a" /* default */])(duration.minutes) : 0;
  var seconds = duration.seconds ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_toInteger_index_js__["a" /* default */])(duration.seconds) : 0; // Subtract years and months

  var dateWithoutMonths = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__subMonths_index_js__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__toDate_index_js__["a" /* default */])(dirtyDate), months + years * 12); // Subtract weeks and days

  var dateWithoutDays = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__subDays_index_js__["a" /* default */])(dateWithoutMonths, days + weeks * 7); // Subtract hours, minutes and seconds

  var minutestoSub = minutes + hours * 60;
  var secondstoSub = seconds + minutestoSub * 60;
  var mstoSub = secondstoSub * 1000;
  var finalDate = new Date(dateWithoutDays.getTime() - mstoSub);
  return finalDate;
}

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = subISOWeekYears;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addISOWeekYears_index_js__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);



/**
 * @name subISOWeekYears
 * @category ISO Week-Numbering Year Helpers
 * @summary Subtract the specified number of ISO week-numbering years from the given date.
 *
 * @description
 * Subtract the specified number of ISO week-numbering years from the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `subISOYears` to `subISOWeekYears`.
 *   "ISO week year" is short for [ISO week-numbering year](https://en.wikipedia.org/wiki/ISO_week_date).
 *   This change makes the name consistent with
 *   locale-dependent week-numbering year helpers, e.g., `setWeekYear`.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of ISO week-numbering years to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the ISO week-numbering years subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 5 ISO week-numbering years from 1 September 2014:
 * const result = subISOWeekYears(new Date(2014, 8, 1), 5)
 * //=> Mon Aug 31 2009 00:00:00
 */

function subISOWeekYears(dirtyDate, dirtyAmount) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var amount = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__addISOWeekYears_index_js__["a" /* default */])(dirtyDate, -amount);
}

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = subMonths;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addMonths_index_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);



/**
 * @name subMonths
 * @category Month Helpers
 * @summary Subtract the specified number of months from the given date.
 *
 * @description
 * Subtract the specified number of months from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 5 months from 1 February 2015:
 * const result = subMonths(new Date(2015, 1, 1), 5)
 * //=> Mon Sep 01 2014 00:00:00
 */

function subMonths(dirtyDate, dirtyAmount) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var amount = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__addMonths_index_js__["a" /* default */])(dirtyDate, -amount);
}

/***/ }),
/* 102 */
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
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navbar_js__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidebar_js__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_page_js__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_lectures_page_js__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_schedules_page__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_classes_page__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_settings_page__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__main__ = __webpack_require__(105);
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

var app = new __WEBPACK_IMPORTED_MODULE_8__main__["a" /* App */]().routes({
    home: __WEBPACK_IMPORTED_MODULE_3__pages_home_page_js__["a" /* HomePage */],
    default: __WEBPACK_IMPORTED_MODULE_3__pages_home_page_js__["a" /* HomePage */],
    lectures: __WEBPACK_IMPORTED_MODULE_4__pages_lectures_page_js__["a" /* LecturesPage */],
    schedules: __WEBPACK_IMPORTED_MODULE_5__pages_schedules_page__["a" /* SchedulesPage */],
    classes: __WEBPACK_IMPORTED_MODULE_6__pages_classes_page__["a" /* ClassesPage */],
    settings: __WEBPACK_IMPORTED_MODULE_7__pages_settings_page__["a" /* SettingsPage */]
}).middlewares([new AuthMiddleware()]).start(document.getElementById('nav-container'));

/***/ }),
/* 104 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* unused harmony export goto */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redom__ = __webpack_require__(7);
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
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Navbar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redom__ = __webpack_require__(7);
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
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redom__ = __webpack_require__(7);
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
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_color_calendar__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_color_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_color_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_color_calendar_dist_css_theme_basic_css__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_color_calendar_dist_css_theme_basic_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_color_calendar_dist_css_theme_basic_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_color_calendar_dist_css_theme_glass_css__ = __webpack_require__(281);
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
        this.classDescription = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('h1.classDescription');
        this.joinBtn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('button.button is-primary', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('span.fas fa-sign-in-alt'));
        this.editClassBtn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('button.button is-primary edit', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('span.fas fa-edit'));
        this.el = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.box.class', this.time, this.timeData, this.subject, this.joinBtn, this.editClassBtn, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('hr.divider'), this.classDescription);
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

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["c" /* setAttr */])(this.classDescription, {
                textContent: data.classDescription
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
        this.classDescription = '';

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
        }), 'PM')), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.field', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('label.label', 'Class Description'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.control', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('input.input', {
            type: 'text',
            placeholder: 'Description',
            id: 'classDescription',
            oninput: function oninput(e) {
                return _this.classDescription = e.target.value;
            }
        }))), this.createClassButton);

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
                    timeData: _this2.timeData,
                    classDescription: _this2.classDescription
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
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LecturesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redom__ = __webpack_require__(7);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var LecturesPage = function () {
    function LecturesPage() {
        _classCallCheck(this, LecturesPage);

        this.videoDescription = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.description', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('h6.subject', 'English'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('h6.time', '10:30 AM'));
        this.videoContainer1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.video-container video-container1', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('span.fas fa-play'));

        this.videoContainer2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.video-container video-container2', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('span.fas fa-play'));
        this.videoContainer3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.video-container video-container3', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('span.fas fa-play'));

        this.videoContainer4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.video-container video-container4', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('span.fas fa-play'));
        this.videoContainer5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.video-container video-container5', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('span.fas fa-play'));
        this.videoContainer6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.video-container video-container6', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('span.fas fa-play'));

        this.header = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.header', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('h1', 'Your Recorded Lectures'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.field', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('p.control has-icons-left', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('i.fas fa-search'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('input#searchbar', {
            type: 'text',
            name: 'search',
            placeholder: 'Search..'
        }))));
        this.mainContent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.mainContent', this.videoContainer1, this.videoDescription, this.videoContainer2, this.videoContainer3, this.videoContainer4, this.videoContainer5, this.videoContainer6);

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
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns__ = __webpack_require__(182);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var SchedulesPage = function () {
    function SchedulesPage() {
        _classCallCheck(this, SchedulesPage);

        var date = new Date();
        var daysInCurrentWeek = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["a" /* eachDayOfInterval */])({ start: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["b" /* startOfWeek */])(date), end: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["c" /* endOfWeek */])(date) });
        // console.log(daysInCurrentWeek);

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = daysInCurrentWeek[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var day = _step.value;
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        this.dayNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.names', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.weekdays', 'Sunday'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.weekdays', 'Monday'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.weekdays', 'Tuesday'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.weekdays', 'Wednesday'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.weekdays', 'Thursday'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.weekdays', 'Friday'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.weekdays', 'Saturday'));
        // this.dates = el('div.dates', this.date);

        this.calender = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.calender', this.dayNames, this.dates, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('hr.divider'));

        this.el = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.box', this.calender);
    }

    _createClass(SchedulesPage, [{
        key: "update",
        value: function update(data) {
            console.log("Update function from Schedules Page");
        }
    }]);

    return SchedulesPage;
}();

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redom__ = __webpack_require__(7);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var SettingsPage = function () {
    function SettingsPage() {
        var _this = this;

        _classCallCheck(this, SettingsPage);

        this.saveBtn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('button.button is-primary save', 'Save');

        this.uploadPicture = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.wrapper', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('form', { id: 'uploadPic' }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('input.file-input', {
            type: 'file',
            name: 'file',
            hidden: true
        }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('i.fas fa-cloud-upload-alt'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('p.text', 'Browse file to upload')));

        this.form = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('form', { id: 'Profile' }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('h1.heading', 'Profile Settings', this.saveBtn), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.container', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.field name', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('label.label', 'Name'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.control', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('input.input', {
            type: 'text',
            placeholder: 'name',
            id: 'subname',
            oninput: function oninput(e) {
                return _this.Name = e.target.value;
            }
        }))), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.field email', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('label.label', 'Email Adress'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.control', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('input.input email', {
            type: 'text',
            placeholder: 'example@email.com',
            id: 'time',
            oninput: function oninput(e) {
                return _this.email = e.target.value;
            }
        }))), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.field teacherId', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('label.label', "Teacher's ID"), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.control', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('input.input', {
            type: 'text',
            placeholder: '1234',
            id: 'teacherId',
            oninput: function oninput(e) {
                return _this.teacherId = e.target.value;
            }
        }))), this.uploadPicture));

        this.uploadedArea = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('section.uploaded-area');

        this.el = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redom__["a" /* el */])('div.box.settings-container', this.form, this.uploadedArea);
    }

    _createClass(SettingsPage, [{
        key: 'update',
        value: function update(data) {
            console.log('Update function from Settings page');
        }
    }]);

    return SettingsPage;
}();

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sidebar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redom__ = __webpack_require__(7);
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
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * color-calendar
 * v1.0.6
 * by Pawan Kolhe <contact@pawankolhe.com> (https://pawankolhe.com/)
 */

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Calendar=t()}(this,(function(){"use strict";class e{constructor(e={}){var t,a,i,r,n,s,o,l,d,c,h,y,p;if(this.CAL_NAME="color-calendar",this.DAYS_TO_DISPLAY=42,this.weekdayDisplayTypeOptions={short:["S","M","T","W","T","F","S"],"long-lower":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"long-upper":["SUN","MON","TUE","WED","THU","FRI","SAT"]},this.id=null!==(t=e.id)&&void 0!==t?t:"#color-calendar",this.calendarSize=null!==(a=e.calendarSize)&&void 0!==a?a:"large",this.layoutModifiers=null!==(i=e.layoutModifiers)&&void 0!==i?i:[],this.eventsData=null!==(r=e.eventsData)&&void 0!==r?r:[],this.theme=null!==(n=e.theme)&&void 0!==n?n:"basic",this.primaryColor=e.primaryColor,this.headerColor=e.headerColor,this.headerBackgroundColor=e.headerBackgroundColor,this.weekdaysColor=e.weekdaysColor,this.weekdayDisplayType=null!==(s=e.weekdayDisplayType)&&void 0!==s?s:"long-lower",this.monthDisplayType=null!==(o=e.monthDisplayType)&&void 0!==o?o:"long",this.startWeekday=null!==(l=e.startWeekday)&&void 0!==l?l:0,this.fontFamilyHeader=e.fontFamilyHeader,this.fontFamilyWeekdays=e.fontFamilyWeekdays,this.fontFamilyBody=e.fontFamilyBody,this.dropShadow=e.dropShadow,this.border=e.border,this.borderRadius=e.borderRadius,this.disableMonthYearPickers=null!==(d=e.disableMonthYearPickers)&&void 0!==d&&d,this.disableDayClick=null!==(c=e.disableDayClick)&&void 0!==c&&c,this.disableMonthArrowClick=null!==(h=e.disableMonthArrowClick)&&void 0!==h&&h,this.customMonthValues=e.customMonthValues,this.customWeekdayValues=e.customWeekdayValues,this.monthChanged=e.monthChanged,this.dateChanged=e.dateChanged,this.selectedDateClicked=e.selectedDateClicked,this.customWeekdayValues&&7===this.customWeekdayValues.length?this.weekdays=this.customWeekdayValues:this.weekdays=null!==(y=this.weekdayDisplayTypeOptions[this.weekdayDisplayType])&&void 0!==y?y:this.weekdayDisplayTypeOptions.short,this.today=new Date,this.currentDate=new Date,this.pickerType="month",this.eventDayMap={},this.oldSelectedNode=null,this.filteredEventsThisMonth=[],this.daysIn_PrevMonth=[],this.daysIn_CurrentMonth=[],this.daysIn_NextMonth=[],this.firstDay_PrevMonth=0,this.firstDay_CurrentMonth=0,this.firstDay_NextMonth=0,this.numOfDays_PrevMonth=0,this.numOfDays_CurrentMonth=0,this.numOfDays_NextMonth=0,this.yearPickerOffset=0,this.yearPickerOffsetTemporary=0,this.calendar=document.querySelector(this.id),!this.calendar)throw new Error(`[COLOR-CALENDAR] Element with selector '${this.id}' not found`);this.calendar.innerHTML=`\n      <div class="${this.CAL_NAME} ${this.theme} color-calendar--${this.calendarSize}">\n        <div class="calendar__header">\n          <div class="calendar__arrow calendar__arrow-prev"><div class="calendar__arrow-inner"></div></div>\n          <div class="calendar__monthyear">\n            <span class="calendar__month"></span>&nbsp;\n            <span class="calendar__year"></span>\n          </div>\n          <div class="calendar__arrow calendar__arrow-next"><div class="calendar__arrow-inner"></div></div>\n        </div>\n        <div class="calendar__body">\n          <div class="calendar__weekdays"></div>\n          <div class="calendar__days"></div>\n          <div class="calendar__picker">\n            <div class="calendar__picker-month">\n              ${(null!==(p=this.customMonthValues)&&void 0!==p?p:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]).map((e,t)=>`<div class="calendar__picker-month-option" data-value="${t}">${e}</div>`).join("")}\n            </div>\n            <div class="calendar__picker-year">\n              <div class="calendar__picker-year-option" data-value="0"></div>\n              <div class="calendar__picker-year-option" data-value="1"></div>\n              <div class="calendar__picker-year-option" data-value="2"></div>\n              <div class="calendar__picker-year-option" data-value="3"></div>\n              <div class="calendar__picker-year-option" data-value="4"></div>\n              <div class="calendar__picker-year-option" data-value="5"></div>\n              <div class="calendar__picker-year-option" data-value="6"></div>\n              <div class="calendar__picker-year-option" data-value="7"></div>\n              <div class="calendar__picker-year-option" data-value="8"></div>\n              <div class="calendar__picker-year-option" data-value="9"></div>\n              <div class="calendar__picker-year-option" data-value="10"></div>\n              <div class="calendar__picker-year-option" data-value="11"></div>\n              <div class="calendar__picker-year-arrow calendar__picker-year-arrow-left">\n                <div class="chevron-thin chevron-thin-left"></div>\n              </div>\n              <div class="calendar__picker-year-arrow calendar__picker-year-arrow-right">\n                <div class="chevron-thin chevron-thin-right"></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    `,this.calendarRoot=document.querySelector(`${this.id} .${this.CAL_NAME}`),this.calendarHeader=document.querySelector(this.id+" .calendar__header"),this.calendarWeekdays=document.querySelector(this.id+" .calendar__weekdays"),this.calendarDays=document.querySelector(this.id+" .calendar__days"),this.pickerContainer=document.querySelector(this.id+" .calendar__picker"),this.pickerMonthContainer=document.querySelector(this.id+" .calendar__picker-month"),this.pickerYearContainer=document.querySelector(this.id+" .calendar__picker-year"),this.yearPickerChevronLeft=document.querySelector(this.id+" .calendar__picker-year-arrow-left"),this.yearPickerChevronRight=document.querySelector(this.id+" .calendar__picker-year-arrow-right"),this.pickerMonthContainer.children[this.today.getMonth()].classList.add("calendar__picker-month-today"),this.layoutModifiers.forEach(e=>{this.calendarRoot.classList.add(e)}),this.layoutModifiers.includes("month-left-align")&&(this.calendarHeader.innerHTML='\n        <div class="calendar__monthyear">\n          <span class="calendar__month"></span>&nbsp;\n          <span class="calendar__year"></span>\n        </div>\n        <div class="calendar__arrow calendar__arrow-prev"><div class="calendar__arrow-inner"></div></div>\n        <div class="calendar__arrow calendar__arrow-next"><div class="calendar__arrow-inner"></div></div>\n      '),this.monthyearDisplay=document.querySelector(this.id+" .calendar__monthyear"),this.monthDisplay=document.querySelector(this.id+" .calendar__month"),this.yearDisplay=document.querySelector(this.id+" .calendar__year"),this.prevButton=document.querySelector(this.id+" .calendar__arrow-prev .calendar__arrow-inner"),this.nextButton=document.querySelector(this.id+" .calendar__arrow-next .calendar__arrow-inner"),this.togglePicker(!1),this.configureStylePreferences(),this.addEventListeners(),this.reset(new Date)}reset(e){this.currentDate=e||new Date,this.clearCalendarDays(),this.updateMonthYear(),this.updateMonthPickerSelection(this.currentDate.getMonth()),this.generatePickerYears(),this.updateYearPickerSelection(this.currentDate.getFullYear(),4),this.updateYearPickerTodaySelection(),this.generateWeekdays(),this.generateDays(),this.selectDayInitial(!!e),this.renderDays(),this.setOldSelectedNode(),this.dateChanged&&this.dateChanged(this.currentDate,this.getDateEvents(this.currentDate)),this.monthChanged&&this.monthChanged(this.currentDate,this.getMonthEvents())}}return e.prototype.addEventListeners=function(){this.prevButton.addEventListener("click",this.handlePrevMonthButtonClick.bind(this)),this.nextButton.addEventListener("click",this.handleNextMonthButtonClick.bind(this)),this.monthyearDisplay.addEventListener("click",this.handleMonthYearDisplayClick.bind(this)),this.calendarDays.addEventListener("click",this.handleCalendarDayClick.bind(this)),this.pickerMonthContainer.addEventListener("click",this.handleMonthPickerClick.bind(this)),this.pickerYearContainer.addEventListener("click",this.handleYearPickerClick.bind(this)),this.yearPickerChevronLeft.addEventListener("click",this.handleYearChevronLeftClick.bind(this)),this.yearPickerChevronRight.addEventListener("click",this.handleYearChevronRightClick.bind(this))},e.prototype.configureStylePreferences=function(){let e=this.calendarRoot;this.primaryColor&&e.style.setProperty("--cal-color-primary",this.primaryColor),this.fontFamilyHeader&&e.style.setProperty("--cal-font-family-header",this.fontFamilyHeader),this.fontFamilyWeekdays&&e.style.setProperty("--cal-font-family-weekdays",this.fontFamilyWeekdays),this.fontFamilyBody&&e.style.setProperty("--cal-font-family-body",this.fontFamilyBody),this.dropShadow&&e.style.setProperty("--cal-drop-shadow",this.dropShadow),this.border&&e.style.setProperty("--cal-border",this.border),this.borderRadius&&e.style.setProperty("--cal-border-radius",this.borderRadius),this.headerColor&&e.style.setProperty("--cal-header-color",this.headerColor),this.headerBackgroundColor&&e.style.setProperty("--cal-header-background-color",this.headerBackgroundColor),this.weekdaysColor&&e.style.setProperty("--cal-weekdays-color",this.weekdaysColor)},e.prototype.togglePicker=function(e){!0===e?(this.pickerContainer.style.visibility="visible",this.pickerContainer.style.opacity="1","year"===this.pickerType&&this.generatePickerYears(),this.removeYearPickerSelection(),this.updateYearPickerSelection(this.currentDate.getFullYear())):!1===e?(this.pickerContainer.style.visibility="hidden",this.pickerContainer.style.opacity="0",this.monthDisplay&&this.yearDisplay&&(this.monthDisplay.style.opacity="1",this.yearDisplay.style.opacity="1"),this.yearPickerOffsetTemporary=0):"hidden"===this.pickerContainer.style.visibility?(this.pickerContainer.style.visibility="visible",this.pickerContainer.style.opacity="1","year"===this.pickerType&&this.generatePickerYears(),this.removeYearPickerSelection(),this.updateYearPickerSelection(this.currentDate.getFullYear())):(this.pickerContainer.style.visibility="hidden",this.pickerContainer.style.opacity="0",this.monthDisplay&&this.yearDisplay&&(this.monthDisplay.style.opacity="1",this.yearDisplay.style.opacity="1"),this.yearPickerOffsetTemporary=0)},e.prototype.handleMonthPickerClick=function(e){if(!e.target.classList.contains("calendar__picker-month-option"))return;const t=parseInt(e.target.dataset.value,10);this.updateMonthPickerSelection(t),this.updateCurrentDate(0,void 0,t),this.togglePicker(!1)},e.prototype.updateMonthPickerSelection=function(e){e<0?e=11:e%=12,this.removeMonthPickerSelection(),this.pickerMonthContainer.children[e].classList.add("calendar__picker-month-selected")},e.prototype.removeMonthPickerSelection=function(){for(let e=0;e<12;e++)this.pickerMonthContainer.children[e].classList.contains("calendar__picker-month-selected")&&this.pickerMonthContainer.children[e].classList.remove("calendar__picker-month-selected")},e.prototype.handleYearPickerClick=function(e){if(!e.target.classList.contains("calendar__picker-year-option"))return;this.yearPickerOffset+=this.yearPickerOffsetTemporary;const t=parseInt(e.target.innerText),a=parseInt(e.target.dataset.value);this.updateYearPickerSelection(t,a),this.updateCurrentDate(0,void 0,void 0,t),this.togglePicker(!1)},e.prototype.updateYearPickerSelection=function(e,t){if(void 0===t){for(let a=0;a<12;a++){let i=this.pickerYearContainer.children[a];if(parseInt(i.innerHTML)===e&&i.dataset.value){t=parseInt(i.dataset.value);break}}if(void 0===t)return}this.removeYearPickerSelection(),this.pickerYearContainer.children[t].classList.add("calendar__picker-year-selected")},e.prototype.updateYearPickerTodaySelection=function(){parseInt(this.pickerYearContainer.children[4].innerHTML)===this.today.getFullYear()?this.pickerYearContainer.children[4].classList.add("calendar__picker-year-today"):this.pickerYearContainer.children[4].classList.remove("calendar__picker-year-today")},e.prototype.removeYearPickerSelection=function(){for(let e=0;e<12;e++)this.pickerYearContainer.children[e].classList.contains("calendar__picker-year-selected")&&this.pickerYearContainer.children[e].classList.remove("calendar__picker-year-selected")},e.prototype.generatePickerYears=function(){const e=this.today.getFullYear()+this.yearPickerOffset+this.yearPickerOffsetTemporary;let t=0;for(let a=e-4;a<=e+7;a++){this.pickerYearContainer.children[t].innerText=a.toString(),t++}this.updateYearPickerTodaySelection()},e.prototype.handleYearChevronLeftClick=function(){this.yearPickerOffsetTemporary-=12,this.generatePickerYears(),this.removeYearPickerSelection(),this.updateYearPickerSelection(this.currentDate.getFullYear()),this.updateYearPickerTodaySelection()},e.prototype.handleYearChevronRightClick=function(){this.yearPickerOffsetTemporary+=12,this.generatePickerYears(),this.removeYearPickerSelection(),this.updateYearPickerSelection(this.currentDate.getFullYear()),this.updateYearPickerTodaySelection()},e.prototype.setMonthDisplayType=function(e){this.monthDisplayType=e,this.updateMonthYear()},e.prototype.handleMonthYearDisplayClick=function(e){if(!e.target.classList.contains("calendar__month")&&!e.target.classList.contains("calendar__year"))return;if(this.disableMonthYearPickers)return;const t=this.pickerType,a=e.target.classList;a.contains("calendar__month")?(this.pickerType="month",this.monthDisplay.style.opacity="1",this.yearDisplay.style.opacity="0.7",this.pickerMonthContainer.style.display="grid",this.pickerYearContainer.style.display="none"):a.contains("calendar__year")&&(this.pickerType="year",this.monthDisplay.style.opacity="0.7",this.yearDisplay.style.opacity="1",this.pickerMonthContainer.style.display="none",this.pickerYearContainer.style.display="grid"),t===this.pickerType?this.togglePicker():this.togglePicker(!0)},e.prototype.handlePrevMonthButtonClick=function(){if(this.disableMonthArrowClick)return;const e=this.currentDate.getMonth()-1;this.currentDate.getFullYear()<=this.today.getFullYear()+this.yearPickerOffset-4&&e<0&&(this.yearPickerOffset-=12,this.generatePickerYears()),e<0&&this.updateYearPickerSelection(this.currentDate.getFullYear()-1),this.updateMonthPickerSelection(e),this.updateCurrentDate(-1),this.togglePicker(!1)},e.prototype.handleNextMonthButtonClick=function(){if(this.disableMonthArrowClick)return;const e=this.currentDate.getMonth()+1;this.currentDate.getFullYear()>=this.today.getFullYear()+this.yearPickerOffset+7&&e>11&&(this.yearPickerOffset+=12,this.generatePickerYears()),e>11&&this.updateYearPickerSelection(this.currentDate.getFullYear()+1),this.updateMonthPickerSelection(e),this.updateCurrentDate(1),this.togglePicker(!1)},e.prototype.updateMonthYear=function(){this.oldSelectedNode=null,this.customMonthValues?this.monthDisplay.innerHTML=this.customMonthValues[this.currentDate.getMonth()]:this.monthDisplay.innerHTML=new Intl.DateTimeFormat("default",{month:this.monthDisplayType}).format(this.currentDate),this.yearDisplay.innerHTML=this.currentDate.getFullYear().toString()},e.prototype.setWeekdayDisplayType=function(e){var t;this.weekdayDisplayType=e,this.weekdays=null!==(t=this.weekdayDisplayTypeOptions[this.weekdayDisplayType])&&void 0!==t?t:this.weekdayDisplayTypeOptions.short,this.generateWeekdays()},e.prototype.generateWeekdays=function(){let e="";for(let t=0;t<7;t++)e+=`\n      <div class="calendar__weekday">${this.weekdays[(t+this.startWeekday)%7]}</div>\n    `;this.calendarWeekdays.innerHTML=e},e.prototype.setDate=function(e){e&&(e instanceof Date?this.reset(e):this.reset(new Date(e)))},e.prototype.getSelectedDate=function(){return this.currentDate},e.prototype.clearCalendarDays=function(){this.daysIn_PrevMonth=[],this.daysIn_CurrentMonth=[],this.daysIn_NextMonth=[]},e.prototype.updateCalendar=function(e){e&&(this.updateMonthYear(),this.clearCalendarDays(),this.generateDays(),this.selectDayInitial()),this.renderDays(),e&&this.setOldSelectedNode()},e.prototype.setOldSelectedNode=function(){if(!this.oldSelectedNode){let e=void 0;for(let t=1;t<this.calendarDays.childNodes.length;t+=2){let a=this.calendarDays.childNodes[t];if(a.classList&&a.classList.contains("calendar__day-active")&&a.innerText===this.currentDate.getDate().toString()){e=a;break}}e&&(this.oldSelectedNode=[e,parseInt(e.innerText)])}},e.prototype.selectDayInitial=function(e){if(e)this.daysIn_CurrentMonth[this.currentDate.getDate()-1].selected=!0;else{let e=this.today.getMonth()===this.currentDate.getMonth(),t=this.today.getDate()===this.currentDate.getDate();e&&t?this.daysIn_CurrentMonth[this.today.getDate()-1].selected=!0:this.daysIn_CurrentMonth[0].selected=!0}},e.prototype.handleCalendarDayClick=function(e){if(!(e.target.classList.contains("calendar__day-box")||e.target.classList.contains("calendar__day-text")||e.target.classList.contains("calendar__day-box-today")||e.target.classList.contains("calendar__day-bullet")))return;if(this.disableDayClick)return;if(this.oldSelectedNode&&!this.oldSelectedNode[0])return;if(e.target.parentElement.classList.contains("calendar__day-selected"))return void(this.selectedDateClicked&&this.selectedDateClicked(this.currentDate,this.getDateEvents(this.currentDate)));let t,a;t=e.target.parentElement.innerText,a=parseInt(t,10),this.removeOldDaySelection(),t&&(this.updateCurrentDate(0,a),Object.assign(this.daysIn_CurrentMonth[a-1],{selected:!0}),this.rerenderSelectedDay(e.target.parentElement,a,!0))},e.prototype.removeOldDaySelection=function(){this.oldSelectedNode&&(Object.assign(this.daysIn_CurrentMonth[this.oldSelectedNode[1]-1],{selected:!1}),this.rerenderSelectedDay(this.oldSelectedNode[0],this.oldSelectedNode[1]))},e.prototype.updateCurrentDate=function(e,t,a,i){this.currentDate=new Date(i||this.currentDate.getFullYear(),null!=a?a:this.currentDate.getMonth()+e,0===e&&t?t:1),(0!==e||null!=a||i)&&(this.updateCalendar(!0),this.monthChanged&&this.monthChanged(this.currentDate,this.getMonthEvents())),this.dateChanged&&this.dateChanged(this.currentDate,this.getDateEvents(this.currentDate))},e.prototype.generateDays=function(){this.numOfDays_PrevMonth=new Date(this.currentDate.getFullYear(),this.currentDate.getMonth(),0).getDate(),this.firstDay_CurrentMonth=new Date(this.currentDate.getFullYear(),this.currentDate.getMonth(),1).getDay(),this.numOfDays_CurrentMonth=new Date(this.currentDate.getFullYear(),this.currentDate.getMonth()+1,0).getDate();for(let e=0;e<this.numOfDays_CurrentMonth;e++)this.daysIn_CurrentMonth.push({day:e+1,selected:!1})},e.prototype.renderDays=function(){let e=0;const t=this.currentDate.getFullYear(),a=this.currentDate.getMonth();let i;this.filteredEventsThisMonth=this.eventsData.filter(e=>{const i=new Date(e.start);return i.getFullYear()===t&&i.getMonth()===a}),this.eventDayMap={},this.filteredEventsThisMonth.forEach(e=>{const t=new Date(e.start).getDate(),a=new Date(e.end).getDate();for(let e=t;e<=a;e++)this.eventDayMap[e]=!0}),i=this.firstDay_CurrentMonth<this.startWeekday?7+this.firstDay_CurrentMonth-this.startWeekday:this.firstDay_CurrentMonth-this.startWeekday;let r="";for(let t=0;t<i;t++)r+=`\n      <div class="calendar__day calendar__day-other">${this.numOfDays_PrevMonth+1-i+t}</div>\n    `,e++;let n=this.today.getFullYear()===this.currentDate.getFullYear(),s=this.today.getMonth()===this.currentDate.getMonth()&&n;this.daysIn_CurrentMonth.forEach(t=>{let a=s&&t.day===this.today.getDate();r+=`\n      <div class="calendar__day calendar__day-active${a?" calendar__day-today":""}${this.eventDayMap[t.day]?" calendar__day-event":" calendar__day-no-event"}${t.selected?" calendar__day-selected":""}">\n        <span class="calendar__day-text">${t.day}</span>\n        <div class="calendar__day-bullet"></div>\n        <div class="calendar__day-box"></div>\n      </div>\n    `,e++});for(let t=0;t<this.DAYS_TO_DISPLAY-e;t++)r+=`\n      <div class="calendar__day calendar__day-other">${t+1}</div>\n    `;this.calendarDays.innerHTML=r},e.prototype.rerenderSelectedDay=function(e,t,a){let i=e.previousElementSibling,r=this.today.getFullYear()===this.currentDate.getFullYear(),n=this.today.getMonth()===this.currentDate.getMonth()&&r&&t===this.today.getDate(),s=document.createElement("div");s.className+=`calendar__day calendar__day-active${n?" calendar__day-today":""}${this.eventDayMap[t]?" calendar__day-event":" calendar__day-no-event"}${this.daysIn_CurrentMonth[t-1].selected?" calendar__day-selected":""}`,s.innerHTML=`\n    <span class="calendar__day-text">${t}</span>\n    <div class="calendar__day-bullet"></div>\n    <div class="calendar__day-box"></div>\n  `,i?i.parentElement?i.parentElement.insertBefore(s,i.nextSibling):console.log("Previous element does not have parent"):this.calendarDays.insertBefore(s,e),a&&(this.oldSelectedNode=[s,t]),e.remove()},e.prototype.getEventsData=function(){return JSON.parse(JSON.stringify(this.eventsData))},e.prototype.setEventsData=function(e){return this.eventsData=JSON.parse(JSON.stringify(e)),this.setDate(this.currentDate),this.eventsData.length},e.prototype.addEventsData=function(e=[]){const t=this.eventsData.push(...e);return this.setDate(this.currentDate),t},e.prototype.getDateEvents=function(e){return this.filteredEventsThisMonth.filter(t=>{const a=new Date(t.start).getDate(),i=new Date(t.end).getDate();return e.getDate()>=a&&e.getDate()<=i})},e.prototype.getMonthEvents=function(){return this.filteredEventsThisMonth},e}));


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)();
exports.push([module.i, ".color-calendar {\n  position: relative;\n  display: inline-flex;\n  flex-direction: column;\n  width: auto;\n  height: auto;\n  box-sizing: border-box;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  font-family: var(--cal-font-family-body);\n  font-size: 1rem;\n}\n\n.color-calendar .calendar__header {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(7, minmax(20px, 55px));\n  font-family: var(--cal-font-family-header);\n}\n\n.color-calendar .calendar__monthyear {\n  font-size: 1.5rem;\n  margin: 0 auto;\n  text-align: center;\n  grid-column: 2/span 5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.color-calendar .calendar__monthyear .calendar__month {\n  cursor: pointer;\n}\n.color-calendar .calendar__monthyear .calendar__year {\n  cursor: pointer;\n}\n\n.color-calendar .calendar__arrow {\n  height: 35px;\n  width: 100%;\n  position: relative;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  z-index: 101;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.color-calendar .calendar__arrow-inner {\n  width: 35px;\n  height: 35px;\n  position: relative;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.color-calendar .calendar__arrow-prev {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.color-calendar .calendar__arrow-prev .calendar__arrow-inner::before {\n  margin-left: 0.3em;\n  transform: rotate(-135deg);\n}\n.color-calendar .calendar__arrow-next {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.color-calendar .calendar__arrow-next .calendar__arrow-inner::before {\n  margin-right: 0.3em;\n  transform: rotate(45deg);\n}\n\n.color-calendar .calendar__body {\n  height: auto;\n  overflow: hidden;\n}\n\n.color-calendar .calendar__weekdays {\n  display: grid;\n  grid-template-columns: repeat(7, minmax(20px, 55px));\n  margin-bottom: 5px;\n  font-family: var(--cal-font-family-weekdays);\n}\n.color-calendar .calendar__weekdays .calendar__weekday {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 40px;\n}\n\n.color-calendar .calendar__days {\n  display: grid;\n  grid-template-columns: repeat(7, minmax(20px, 55px));\n  grid-template-rows: repeat(6, minmax(30px, 40px));\n  font-family: var(--cal-font-family-body);\n}\n.color-calendar .calendar__days .calendar__day {\n  position: relative;\n  z-index: 101;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.color-calendar .calendar__days .calendar__day-text {\n  cursor: pointer;\n}\n.color-calendar .calendar__days .calendar__day-box {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: calc(55% + 8px);\n  height: 90%;\n  opacity: 0;\n  z-index: -1;\n  cursor: pointer;\n  transition: opacity 0.3s ease-out;\n  will-change: opacity;\n}\n.color-calendar .calendar__days .calendar__day-event {\n  /* Event Bullet */\n}\n.color-calendar .calendar__days .calendar__day-event .calendar__day-bullet {\n  position: absolute;\n  top: 80%;\n  border-radius: 50%;\n  width: 4px;\n  height: 4px;\n  left: 50%;\n  transform: translateX(-50%);\n  overflow: hidden;\n  cursor: pointer;\n}\n.color-calendar .calendar__days .calendar__day-selected:not(.calendar__day-today) .calendar__day-box {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: calc(55% + 8px);\n  height: 90%;\n  z-index: -1;\n  cursor: pointer;\n}\n\n.color-calendar .calendar__picker {\n  position: absolute;\n  z-index: 201;\n  width: 100%;\n  top: 75px;\n  left: 0;\n  bottom: 0;\n  background-color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.3s ease;\n  font-family: var(--cal-font-family-body);\n}\n.color-calendar .calendar__picker .calendar__picker-month {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  grid-template-rows: repeat(4, minmax(0, 1fr));\n  grid-gap: 1rem 6%;\n  gap: 1rem 6%;\n  margin: 8%;\n  transition: none;\n}\n.color-calendar .calendar__picker .calendar__picker-month-option {\n  position: relative;\n  text-align: center;\n  padding: 15px 0;\n  font-weight: 700;\n  color: #323232;\n  border-radius: var(--cal-border-radius);\n  align-self: center;\n  cursor: pointer;\n}\n.color-calendar .calendar__picker .calendar__picker-month-option::after {\n  content: \"\";\n  width: 100%;\n  height: 50px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: var(--cal-color-primary);\n  border-radius: var(--cal-border-radius);\n  opacity: 0.1;\n  z-index: -1;\n}\n.color-calendar .calendar__picker .calendar__picker-month-option:hover:after {\n  opacity: 0.08;\n}\n.color-calendar .calendar__picker .calendar__picker-month-selected {\n  color: white;\n}\n.color-calendar .calendar__picker .calendar__picker-month-selected::after {\n  opacity: 1;\n}\n.color-calendar .calendar__picker .calendar__picker-month-selected:hover:after {\n  opacity: 0.9;\n}\n.color-calendar .calendar__picker .calendar__picker-year {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  grid-template-rows: repeat(4, minmax(0, 1fr));\n  grid-gap: 1rem 6%;\n  gap: 1rem 6%;\n  margin: 8%;\n  transition: none;\n}\n.color-calendar .calendar__picker .calendar__picker-year-option {\n  position: relative;\n  text-align: center;\n  padding: 15px 0;\n  font-weight: 700;\n  color: #323232;\n  border-radius: var(--cal-border-radius);\n  align-self: center;\n  cursor: pointer;\n}\n.color-calendar .calendar__picker .calendar__picker-year-option::after {\n  content: \"\";\n  width: 100%;\n  height: 50px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: var(--cal-color-primary);\n  border-radius: var(--cal-border-radius);\n  opacity: 0.1;\n  z-index: -1;\n}\n.color-calendar .calendar__picker .calendar__picker-year-option:hover:after {\n  opacity: 0.08;\n}\n.color-calendar .calendar__picker .calendar__picker-year-selected {\n  color: white;\n}\n.color-calendar .calendar__picker .calendar__picker-year-selected::after {\n  opacity: 1;\n}\n.color-calendar .calendar__picker .calendar__picker-year-selected:hover:after {\n  opacity: 0.9;\n}\n.color-calendar .calendar__picker .calendar__picker-year-arrow {\n  position: absolute;\n  opacity: 0.4;\n  border-radius: var(--cal-border-radius);\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.color-calendar .calendar__picker .calendar__picker-year-arrow-left {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-left: 10px;\n  padding-right: 4px;\n}\n.color-calendar .calendar__picker .calendar__picker-year-arrow-right {\n  top: 0;\n  bottom: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 10px;\n}\n.color-calendar .calendar__picker .calendar__picker-year-arrow:hover {\n  opacity: 1;\n  background-color: #f8f8f8;\n}\n\n.chevron-thin-left {\n  display: inline-block;\n  border-right: 2px solid var(--cal-color-primary);\n  border-bottom: 2px solid var(--cal-color-primary);\n  width: 10px;\n  height: 10px;\n  transform: rotate(-225deg);\n}\n.chevron-thin-right {\n  display: inline-block;\n  border-right: 2px solid var(--cal-color-primary);\n  border-bottom: 2px solid var(--cal-color-primary);\n  width: 10px;\n  height: 10px;\n  transform: rotate(-45deg);\n}\n\n.color-calendar.month-left-align .calendar__header .calendar__monthyear {\n  grid-column: 1/span 5;\n  margin: 0;\n  justify-content: flex-start;\n  padding-left: 5%;\n}\n\n.color-calendar.basic {\n  --cal-color-primary: #000000;\n  --cal-font-family-header: \"Work Sans\", sans-serif;\n  --cal-font-family-weekdays: \"Work Sans\", sans-serif;\n  --cal-font-family-body: \"Work Sans\", sans-serif;\n  --cal-drop-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);\n  --cal-border: none;\n  --cal-border-radius: 0.5rem;\n  --cal-header-color: black;\n  --cal-weekdays-color: black;\n  border-radius: var(--cal-border-radius);\n  box-shadow: var(--cal-drop-shadow);\n  color: var(--cal-color-primary);\n  background-color: white;\n  border: var(--cal-border);\n}\n\n.color-calendar.basic .calendar__header {\n  padding: 20px 14px 0px 14px;\n  color: var(--cal-header-color);\n}\n\n.color-calendar.basic .calendar__monthyear {\n  font-weight: 600;\n  color: var(--cal-header-color);\n}\n\n.color-calendar.basic .calendar__arrow-inner {\n  border-radius: 50%;\n}\n.color-calendar.basic .calendar__arrow-inner::before {\n  content: \"\";\n  width: 0.6em;\n  height: 0.6em;\n  position: absolute;\n  border-style: solid;\n  border-width: 0.15em 0.15em 0 0;\n  display: inline-block;\n  transform-origin: center center;\n  transform: rotate(-45deg);\n  border-radius: 1px;\n  color: var(--cal-header-color);\n}\n.color-calendar.basic .calendar__arrow-inner::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  background-color: var(--cal-header-color);\n  opacity: 0;\n  z-index: -1;\n  transition: opacity 0.3s ease;\n  will-change: opacity;\n}\n.color-calendar.basic .calendar__arrow-inner:hover::after {\n  transition: opacity 0.3s ease;\n  opacity: 0.05;\n}\n.color-calendar.basic .calendar__arrow-prev {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.color-calendar.basic .calendar__arrow-prev .calendar__arrow-inner::before {\n  margin-left: 0.3em;\n  transform: rotate(-135deg);\n}\n.color-calendar.basic .calendar__arrow-next {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.color-calendar.basic .calendar__arrow-next .calendar__arrow-inner::before {\n  margin-right: 0.3em;\n  transform: rotate(45deg);\n}\n\n.color-calendar.basic .calendar__body {\n  padding: 14px;\n}\n\n.color-calendar.basic .calendar__weekdays {\n  display: grid;\n  grid-template-columns: repeat(7, minmax(20px, 55px));\n  margin-bottom: 5px;\n}\n.color-calendar.basic .calendar__weekdays .calendar__weekday {\n  font-weight: 500;\n  opacity: 0.6;\n  color: var(--cal-weekdays-color);\n}\n\n.color-calendar.basic .calendar__days .calendar__day-other {\n  color: var(--cal-color-primary);\n  opacity: 0.2;\n}\n.color-calendar.basic .calendar__days .calendar__day {\n  font-weight: 600;\n}\n.color-calendar.basic .calendar__days .calendar__day-today {\n  font-weight: 700;\n  color: var(--cal-color-primary);\n}\n.color-calendar.basic .calendar__days .calendar__day-today .calendar__day-box {\n  border-radius: 0.5rem;\n  background-color: var(--cal-color-primary);\n  opacity: 0.1;\n}\n.color-calendar.basic .calendar__days .calendar__day-text:hover ~ .calendar__day-box {\n  opacity: 0.1;\n}\n.color-calendar.basic .calendar__days .calendar__day-bullet {\n  background-color: var(--cal-color-primary);\n}\n.color-calendar.basic .calendar__days .calendar__day-bullet:hover ~ .calendar__day-box {\n  opacity: 0.1;\n}\n.color-calendar.basic .calendar__days .calendar__day-box {\n  border-radius: 0.5rem;\n  background-color: var(--cal-color-primary);\n  box-shadow: 0 3px 15px -5px var(--cal-color-primary);\n}\n.color-calendar.basic .calendar__days .calendar__day-box:hover {\n  opacity: 0.1;\n}\n.color-calendar.basic .calendar__days .calendar__day-event {\n  font-weight: 700;\n}\n.color-calendar.basic .calendar__days .calendar__day-selected {\n  color: white;\n  font-weight: 700;\n}\n.color-calendar.basic .calendar__days .calendar__day-selected .calendar__day-box {\n  border-radius: 0.5rem;\n  background-color: var(--cal-color-primary);\n  opacity: 1;\n  box-shadow: 0 3px 15px -5px var(--cal-color-primary);\n}\n.color-calendar.basic .calendar__days .calendar__day-selected .calendar__day-text:hover ~ .calendar__day-box {\n  opacity: 1;\n}\n.color-calendar.basic .calendar__days .calendar__day-selected .calendar__day-bullet {\n  background-color: white;\n}\n.color-calendar.basic .calendar__days .calendar__day-selected .calendar__day-bullet:hover ~ .calendar__day-box {\n  opacity: 1;\n}\n\n.color-calendar.basic .calendar__picker {\n  background-color: white;\n  border-radius: var(--cal-border-radius);\n}\n.color-calendar.basic .calendar__picker-month-today {\n  box-shadow: inset 0px 0px 0px 1px var(--cal-color-primary);\n}\n.color-calendar.basic .calendar__picker-year-today {\n  box-shadow: inset 0px 0px 0px 1px var(--cal-color-primary);\n}\n\n.color-calendar.basic.color-calendar--small {\n  font-size: 0.8rem;\n}\n.color-calendar.basic.color-calendar--small .calendar__header {\n  padding: 10px 10px 0 10px;\n  grid-template-columns: repeat(7, minmax(25px, 41px));\n}\n.color-calendar.basic.color-calendar--small .calendar__header .calendar__monthyear {\n  font-size: 1.2rem;\n}\n.color-calendar.basic.color-calendar--small .calendar__header .calendar__arrow-inner, .color-calendar.basic.color-calendar--small .calendar__header .calendar__arrow-inner::after {\n  width: 30px;\n  height: 30px;\n}\n.color-calendar.basic.color-calendar--small .calendar__body {\n  padding: 0 10px 10px 10px;\n}\n.color-calendar.basic.color-calendar--small .calendar__body .calendar__weekdays {\n  grid-template-columns: repeat(7, minmax(25px, 41px));\n  margin-bottom: 0;\n}\n.color-calendar.basic.color-calendar--small .calendar__body .calendar__days {\n  grid-template-columns: repeat(7, minmax(25px, 41px));\n  grid-template-rows: repeat(6, minmax(30px, 35px));\n}\n.color-calendar.basic.color-calendar--small .calendar__body .calendar__picker {\n  top: 55px;\n}\n.color-calendar.basic.color-calendar--small .calendar__body .calendar__picker .calendar__picker-month-option {\n  padding: 10px 0;\n}\n.color-calendar.basic.color-calendar--small .calendar__body .calendar__picker .calendar__picker-month-option::after {\n  height: 40px;\n}\n.color-calendar.basic.color-calendar--small .calendar__body .calendar__picker .calendar__picker-year-option {\n  padding: 10px 0;\n}\n.color-calendar.basic.color-calendar--small .calendar__body .calendar__picker .calendar__picker-year-option::after {\n  height: 40px;\n}", ""]);

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)();
exports.push([module.i, ".color-calendar {\n  position: relative;\n  display: inline-flex;\n  flex-direction: column;\n  width: auto;\n  height: auto;\n  box-sizing: border-box;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  font-family: var(--cal-font-family-body);\n  font-size: 1rem;\n}\n\n.color-calendar .calendar__header {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(7, minmax(20px, 55px));\n  font-family: var(--cal-font-family-header);\n}\n\n.color-calendar .calendar__monthyear {\n  font-size: 1.5rem;\n  margin: 0 auto;\n  text-align: center;\n  grid-column: 2/span 5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.color-calendar .calendar__monthyear .calendar__month {\n  cursor: pointer;\n}\n.color-calendar .calendar__monthyear .calendar__year {\n  cursor: pointer;\n}\n\n.color-calendar .calendar__arrow {\n  height: 35px;\n  width: 100%;\n  position: relative;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  z-index: 101;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.color-calendar .calendar__arrow-inner {\n  width: 35px;\n  height: 35px;\n  position: relative;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.color-calendar .calendar__arrow-prev {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.color-calendar .calendar__arrow-prev .calendar__arrow-inner::before {\n  margin-left: 0.3em;\n  transform: rotate(-135deg);\n}\n.color-calendar .calendar__arrow-next {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.color-calendar .calendar__arrow-next .calendar__arrow-inner::before {\n  margin-right: 0.3em;\n  transform: rotate(45deg);\n}\n\n.color-calendar .calendar__body {\n  height: auto;\n  overflow: hidden;\n}\n\n.color-calendar .calendar__weekdays {\n  display: grid;\n  grid-template-columns: repeat(7, minmax(20px, 55px));\n  margin-bottom: 5px;\n  font-family: var(--cal-font-family-weekdays);\n}\n.color-calendar .calendar__weekdays .calendar__weekday {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 40px;\n}\n\n.color-calendar .calendar__days {\n  display: grid;\n  grid-template-columns: repeat(7, minmax(20px, 55px));\n  grid-template-rows: repeat(6, minmax(30px, 40px));\n  font-family: var(--cal-font-family-body);\n}\n.color-calendar .calendar__days .calendar__day {\n  position: relative;\n  z-index: 101;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.color-calendar .calendar__days .calendar__day-text {\n  cursor: pointer;\n}\n.color-calendar .calendar__days .calendar__day-box {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: calc(55% + 8px);\n  height: 90%;\n  opacity: 0;\n  z-index: -1;\n  cursor: pointer;\n  transition: opacity 0.3s ease-out;\n  will-change: opacity;\n}\n.color-calendar .calendar__days .calendar__day-event {\n  /* Event Bullet */\n}\n.color-calendar .calendar__days .calendar__day-event .calendar__day-bullet {\n  position: absolute;\n  top: 80%;\n  border-radius: 50%;\n  width: 4px;\n  height: 4px;\n  left: 50%;\n  transform: translateX(-50%);\n  overflow: hidden;\n  cursor: pointer;\n}\n.color-calendar .calendar__days .calendar__day-selected:not(.calendar__day-today) .calendar__day-box {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: calc(55% + 8px);\n  height: 90%;\n  z-index: -1;\n  cursor: pointer;\n}\n\n.color-calendar .calendar__picker {\n  position: absolute;\n  z-index: 201;\n  width: 100%;\n  top: 75px;\n  left: 0;\n  bottom: 0;\n  background-color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.3s ease;\n  font-family: var(--cal-font-family-body);\n}\n.color-calendar .calendar__picker .calendar__picker-month {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  grid-template-rows: repeat(4, minmax(0, 1fr));\n  grid-gap: 1rem 6%;\n  gap: 1rem 6%;\n  margin: 8%;\n  transition: none;\n}\n.color-calendar .calendar__picker .calendar__picker-month-option {\n  position: relative;\n  text-align: center;\n  padding: 15px 0;\n  font-weight: 700;\n  color: #323232;\n  border-radius: var(--cal-border-radius);\n  align-self: center;\n  cursor: pointer;\n}\n.color-calendar .calendar__picker .calendar__picker-month-option::after {\n  content: \"\";\n  width: 100%;\n  height: 50px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: var(--cal-color-primary);\n  border-radius: var(--cal-border-radius);\n  opacity: 0.1;\n  z-index: -1;\n}\n.color-calendar .calendar__picker .calendar__picker-month-option:hover:after {\n  opacity: 0.08;\n}\n.color-calendar .calendar__picker .calendar__picker-month-selected {\n  color: white;\n}\n.color-calendar .calendar__picker .calendar__picker-month-selected::after {\n  opacity: 1;\n}\n.color-calendar .calendar__picker .calendar__picker-month-selected:hover:after {\n  opacity: 0.9;\n}\n.color-calendar .calendar__picker .calendar__picker-year {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  grid-template-rows: repeat(4, minmax(0, 1fr));\n  grid-gap: 1rem 6%;\n  gap: 1rem 6%;\n  margin: 8%;\n  transition: none;\n}\n.color-calendar .calendar__picker .calendar__picker-year-option {\n  position: relative;\n  text-align: center;\n  padding: 15px 0;\n  font-weight: 700;\n  color: #323232;\n  border-radius: var(--cal-border-radius);\n  align-self: center;\n  cursor: pointer;\n}\n.color-calendar .calendar__picker .calendar__picker-year-option::after {\n  content: \"\";\n  width: 100%;\n  height: 50px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: var(--cal-color-primary);\n  border-radius: var(--cal-border-radius);\n  opacity: 0.1;\n  z-index: -1;\n}\n.color-calendar .calendar__picker .calendar__picker-year-option:hover:after {\n  opacity: 0.08;\n}\n.color-calendar .calendar__picker .calendar__picker-year-selected {\n  color: white;\n}\n.color-calendar .calendar__picker .calendar__picker-year-selected::after {\n  opacity: 1;\n}\n.color-calendar .calendar__picker .calendar__picker-year-selected:hover:after {\n  opacity: 0.9;\n}\n.color-calendar .calendar__picker .calendar__picker-year-arrow {\n  position: absolute;\n  opacity: 0.4;\n  border-radius: var(--cal-border-radius);\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.color-calendar .calendar__picker .calendar__picker-year-arrow-left {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-left: 10px;\n  padding-right: 4px;\n}\n.color-calendar .calendar__picker .calendar__picker-year-arrow-right {\n  top: 0;\n  bottom: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 10px;\n}\n.color-calendar .calendar__picker .calendar__picker-year-arrow:hover {\n  opacity: 1;\n  background-color: #f8f8f8;\n}\n\n.chevron-thin-left {\n  display: inline-block;\n  border-right: 2px solid var(--cal-color-primary);\n  border-bottom: 2px solid var(--cal-color-primary);\n  width: 10px;\n  height: 10px;\n  transform: rotate(-225deg);\n}\n.chevron-thin-right {\n  display: inline-block;\n  border-right: 2px solid var(--cal-color-primary);\n  border-bottom: 2px solid var(--cal-color-primary);\n  width: 10px;\n  height: 10px;\n  transform: rotate(-45deg);\n}\n\n.color-calendar.month-left-align .calendar__header .calendar__monthyear {\n  grid-column: 1/span 5;\n  margin: 0;\n  justify-content: flex-start;\n  padding-left: 5%;\n}\n\n.color-calendar.glass {\n  --cal-color-primary: #EC407A;\n  --cal-font-family-header: \"Open Sans\", sans-serif;\n  --cal-font-family-weekdays: \"Open Sans\", sans-serif;\n  --cal-font-family-body: \"Open Sans\", sans-serif;\n  --cal-drop-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);\n  --cal-border: none;\n  --cal-border-radius: 0.5rem;\n  --cal-header-color: white;\n  --cal-header-background-color: rgba(0, 0, 0, 0.3);\n  border-radius: var(--cal-border-radius);\n  box-shadow: var(--cal-drop-shadow);\n  color: #323232;\n  background-color: var(--cal-header-background-color);\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  border: var(--cal-border);\n}\n\n.color-calendar.glass .calendar__header {\n  padding: 20px 14px 20px 14px;\n  color: var(--cal-header-color);\n}\n\n.color-calendar.glass .calendar__monthyear {\n  font-weight: 700;\n  color: var(--cal-header-color);\n}\n\n.color-calendar.glass .calendar__arrow-inner {\n  border-radius: 50%;\n}\n.color-calendar.glass .calendar__arrow-inner::before {\n  content: \"\";\n  width: 0.5em;\n  height: 0.5em;\n  position: absolute;\n  border-style: solid;\n  border-width: 0.17em 0.17em 0 0;\n  display: inline-block;\n  transform-origin: center center;\n  transform: rotate(-45deg);\n  border-radius: 2px;\n  color: var(--cal-header-color);\n}\n.color-calendar.glass .calendar__arrow-inner::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  background-color: var(--cal-header-color);\n  opacity: 0.12;\n  z-index: -1;\n  transition: opacity 0.3s ease;\n}\n.color-calendar.glass .calendar__arrow-inner:hover::after {\n  transition: opacity 0.3s ease;\n  opacity: 0.25;\n}\n.color-calendar.glass .calendar__arrow-prev {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.color-calendar.glass .calendar__arrow-prev .calendar__arrow-inner::before {\n  margin-left: 0.25em;\n  transform: rotate(-135deg);\n}\n.color-calendar.glass .calendar__arrow-next {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.color-calendar.glass .calendar__arrow-next .calendar__arrow-inner::before {\n  margin-right: 0.25em;\n  transform: rotate(45deg);\n}\n\n.color-calendar.glass .calendar__body {\n  padding: 18px 14px;\n  border-radius: var(--cal-border-radius);\n  background-color: white;\n}\n\n.color-calendar.glass .calendar__weekdays {\n  display: grid;\n  grid-template-columns: repeat(7, minmax(20px, 55px));\n  margin-bottom: 5px;\n}\n.color-calendar.glass .calendar__weekdays .calendar__weekday {\n  font-weight: 700;\n  opacity: 0.5;\n}\n\n.color-calendar.glass .calendar__days .calendar__day-other {\n  color: #323232;\n  opacity: 0.2;\n}\n.color-calendar.glass .calendar__days .calendar__day {\n  font-weight: 600;\n}\n.color-calendar.glass .calendar__days .calendar__day-today {\n  font-weight: 700;\n  color: var(--cal-color-primary);\n}\n.color-calendar.glass .calendar__days .calendar__day-today .calendar__day-box {\n  border-radius: 0.5rem;\n  background-color: var(--cal-color-primary);\n  opacity: 0.1;\n}\n.color-calendar.glass .calendar__days .calendar__day-text:hover ~ .calendar__day-box {\n  opacity: 0.1;\n}\n.color-calendar.glass .calendar__days .calendar__day-bullet {\n  background-color: var(--cal-color-primary);\n}\n.color-calendar.glass .calendar__days .calendar__day-bullet:hover ~ .calendar__day-box {\n  opacity: 0.1;\n}\n.color-calendar.glass .calendar__days .calendar__day-box {\n  border-radius: 0.5rem;\n  background-color: var(--cal-color-primary);\n  box-shadow: 0 3px 15px -5px var(--cal-color-primary);\n}\n.color-calendar.glass .calendar__days .calendar__day-box:hover {\n  opacity: 0.1;\n}\n.color-calendar.glass .calendar__days .calendar__day-event {\n  font-weight: 700;\n}\n.color-calendar.glass .calendar__days .calendar__day-selected {\n  color: white;\n  font-weight: 700;\n}\n.color-calendar.glass .calendar__days .calendar__day-selected .calendar__day-box {\n  border-radius: 0.5rem;\n  background-color: var(--cal-color-primary);\n  opacity: 1;\n  box-shadow: 0 3px 15px -5px var(--cal-color-primary);\n}\n.color-calendar.glass .calendar__days .calendar__day-selected .calendar__day-text:hover ~ .calendar__day-box {\n  opacity: 1;\n}\n.color-calendar.glass .calendar__days .calendar__day-selected .calendar__day-bullet {\n  background-color: white;\n}\n.color-calendar.glass .calendar__days .calendar__day-selected .calendar__day-bullet:hover ~ .calendar__day-box {\n  opacity: 1;\n}\n\n.color-calendar.glass .calendar__picker {\n  background-color: white;\n  border-radius: var(--cal-border-radius);\n}\n.color-calendar.glass .calendar__picker-month-today {\n  box-shadow: inset 0px 0px 0px 1px var(--cal-color-primary);\n}\n.color-calendar.glass .calendar__picker-year-today {\n  box-shadow: inset 0px 0px 0px 1px var(--cal-color-primary);\n}\n\n.color-calendar.glass.color-calendar--small {\n  font-size: 0.8rem;\n}\n.color-calendar.glass.color-calendar--small .calendar__header {\n  padding: 10px 10px;\n  grid-template-columns: repeat(7, minmax(25px, 41px));\n}\n.color-calendar.glass.color-calendar--small .calendar__header .calendar__monthyear {\n  font-size: 1.2rem;\n}\n.color-calendar.glass.color-calendar--small .calendar__header .calendar__arrow-inner, .color-calendar.glass.color-calendar--small .calendar__header .calendar__arrow-inner::after {\n  width: 30px;\n  height: 30px;\n}\n.color-calendar.glass.color-calendar--small .calendar__body {\n  padding: 10px 10px;\n}\n.color-calendar.glass.color-calendar--small .calendar__body .calendar__weekdays {\n  grid-template-columns: repeat(7, minmax(25px, 41px));\n  margin-bottom: 0;\n}\n.color-calendar.glass.color-calendar--small .calendar__body .calendar__days {\n  grid-template-columns: repeat(7, minmax(25px, 41px));\n  grid-template-rows: repeat(6, minmax(30px, 35px));\n}\n.color-calendar.glass.color-calendar--small .calendar__body .calendar__picker {\n  top: 55px;\n}\n.color-calendar.glass.color-calendar--small .calendar__body .calendar__picker .calendar__picker-month-option {\n  padding: 10px 0;\n}\n.color-calendar.glass.color-calendar--small .calendar__body .calendar__picker .calendar__picker-month-option::after {\n  height: 40px;\n}\n.color-calendar.glass.color-calendar--small .calendar__body .calendar__picker .calendar__picker-year-option {\n  padding: 10px 0;\n}\n.color-calendar.glass.color-calendar--small .calendar__body .calendar__picker .calendar__picker-year-option::after {\n  height: 40px;\n}", ""]);

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lightFormatters_index_js__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_getUTCDayOfYear_index_js__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_getUTCISOWeek_index_js__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_getUTCISOWeekYear_index_js__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_getUTCWeek_index_js__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_getUTCWeekYear_index_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__addLeadingZeros_index_js__ = __webpack_require__(13);







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return __WEBPACK_IMPORTED_MODULE_0__lightFormatters_index_js__["a" /* default */].y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__lib_getUTCWeekYear_index_js__["a" /* default */])(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__addLeadingZeros_index_js__["a" /* default */])(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__addLeadingZeros_index_js__["a" /* default */])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_getUTCISOWeekYear_index_js__["a" /* default */])(date); // Padding

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__addLeadingZeros_index_js__["a" /* default */])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__addLeadingZeros_index_js__["a" /* default */])(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__addLeadingZeros_index_js__["a" /* default */])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__addLeadingZeros_index_js__["a" /* default */])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return __WEBPACK_IMPORTED_MODULE_0__lightFormatters_index_js__["a" /* default */].M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__addLeadingZeros_index_js__["a" /* default */])(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_getUTCWeek_index_js__["a" /* default */])(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__addLeadingZeros_index_js__["a" /* default */])(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_getUTCISOWeek_index_js__["a" /* default */])(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__addLeadingZeros_index_js__["a" /* default */])(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return __WEBPACK_IMPORTED_MODULE_0__lightFormatters_index_js__["a" /* default */].d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_getUTCDayOfYear_index_js__["a" /* default */])(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__addLeadingZeros_index_js__["a" /* default */])(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__addLeadingZeros_index_js__["a" /* default */])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__addLeadingZeros_index_js__["a" /* default */])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__addLeadingZeros_index_js__["a" /* default */])(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return __WEBPACK_IMPORTED_MODULE_0__lightFormatters_index_js__["a" /* default */].h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return __WEBPACK_IMPORTED_MODULE_0__lightFormatters_index_js__["a" /* default */].H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__addLeadingZeros_index_js__["a" /* default */])(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__addLeadingZeros_index_js__["a" /* default */])(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return __WEBPACK_IMPORTED_MODULE_0__lightFormatters_index_js__["a" /* default */].m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return __WEBPACK_IMPORTED_MODULE_0__lightFormatters_index_js__["a" /* default */].s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return __WEBPACK_IMPORTED_MODULE_0__lightFormatters_index_js__["a" /* default */].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__addLeadingZeros_index_js__["a" /* default */])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__addLeadingZeros_index_js__["a" /* default */])(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__addLeadingZeros_index_js__["a" /* default */])(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__addLeadingZeros_index_js__["a" /* default */])(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__addLeadingZeros_index_js__["a" /* default */])(Math.floor(absOffset / 60), 2);
  var minutes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__addLeadingZeros_index_js__["a" /* default */])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ __webpack_exports__["a"] = (formatters);

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getUTCDayOfYear;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__requiredArgs_index_js__ = __webpack_require__(0);


var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCDayOfYear(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setUTCDay;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__requiredArgs_index_js__ = __webpack_require__(0);


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCDay(dirtyDate, dirtyDay, dirtyOptions) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__requiredArgs_index_js__["a" /* default */])(2, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toInteger_index_js__["a" /* default */])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toInteger_index_js__["a" /* default */])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  var day = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toInteger_index_js__["a" /* default */])(dirtyDay);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setUTCISODay;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__requiredArgs_index_js__ = __webpack_require__(0);


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCISODay(dirtyDate, dirtyDay) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__requiredArgs_index_js__["a" /* default */])(2, arguments);
  var day = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toInteger_index_js__["a" /* default */])(dirtyDay);

  if (day % 7 === 0) {
    day = day - 7;
  }

  var weekStartsOn = 1;
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setUTCISOWeek;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getUTCISOWeek_index_js__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__requiredArgs_index_js__ = __webpack_require__(0);



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCISOWeek(dirtyDate, dirtyISOWeek) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__requiredArgs_index_js__["a" /* default */])(2, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  var isoWeek = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toInteger_index_js__["a" /* default */])(dirtyISOWeek);
  var diff = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__getUTCISOWeek_index_js__["a" /* default */])(date) - isoWeek;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setUTCWeek;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getUTCWeek_index_js__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__requiredArgs_index_js__ = __webpack_require__(0);



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCWeek(dirtyDate, dirtyWeek, options) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__requiredArgs_index_js__["a" /* default */])(2, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  var week = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toInteger_index_js__["a" /* default */])(dirtyWeek);
  var diff = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__getUTCWeek_index_js__["a" /* default */])(date, options) - week;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = startOfUTCISOWeekYear;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getUTCISOWeekYear_index_js__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__startOfUTCISOWeek_index_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__requiredArgs_index_js__ = __webpack_require__(0);


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeekYear(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__requiredArgs_index_js__["a" /* default */])(1, arguments);
  var year = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getUTCISOWeekYear_index_js__["a" /* default */])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__startOfUTCISOWeek_index_js__["a" /* default */])(fourthOfJanuary);
  return date;
}

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = startOfUTCWeekYear;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getUTCWeekYear_index_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__startOfUTCWeek_index_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__requiredArgs_index_js__ = __webpack_require__(0);



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__requiredArgs_index_js__["a" /* default */])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toInteger_index_js__["a" /* default */])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toInteger_index_js__["a" /* default */])(options.firstWeekContainsDate);
  var year = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getUTCWeekYear_index_js__["a" /* default */])(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__startOfUTCWeek_index_js__["a" /* default */])(firstWeek, dirtyOptions);
  return date;
}

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addDays_index_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addMonths_index_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_toInteger_index_js__ = __webpack_require__(2);






/**
 * @name add
 * @category Common Helpers
 * @summary Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @description
 * Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Duration} duration - the object with years, months, weeks, days, hours, minutes and seconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 *
 * | Key            | Description                        |
 * |----------------|------------------------------------|
 * | years          | Amount of years to be added        |
 * | months         | Amount of months to be added       |
 * | weeks          | Amount of weeks to be added        |
 * | days           | Amount of days to be added         |
 * | hours          | Amount of hours to be added        |
 * | minutes        | Amount of minutes to be added      |
 * | seconds        | Amount of seconds to be added      |
 *
 * All values default to 0
 *
 * @returns {Date} the new date with the seconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add the following duration to 1 September 2014, 10:19:50
 * const result = add(new Date(2014, 8, 1, 10, 19, 50), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30,
 * })
 * //=> Thu Jun 15 2017 15:29:20
 */
function add(dirtyDate, duration) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  if (!duration || typeof duration !== 'object') return new Date(NaN);
  var years = duration.years ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_toInteger_index_js__["a" /* default */])(duration.years) : 0;
  var months = duration.months ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_toInteger_index_js__["a" /* default */])(duration.months) : 0;
  var weeks = duration.weeks ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_toInteger_index_js__["a" /* default */])(duration.weeks) : 0;
  var days = duration.days ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_toInteger_index_js__["a" /* default */])(duration.days) : 0;
  var hours = duration.hours ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_toInteger_index_js__["a" /* default */])(duration.hours) : 0;
  var minutes = duration.minutes ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_toInteger_index_js__["a" /* default */])(duration.minutes) : 0;
  var seconds = duration.seconds ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_toInteger_index_js__["a" /* default */])(duration.seconds) : 0; // Add years and months

  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__toDate_index_js__["a" /* default */])(dirtyDate);
  var dateWithMonths = months || years ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__addMonths_index_js__["a" /* default */])(date, months + years * 12) : date; // Add weeks and days

  var dateWithDays = days || weeks ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__addDays_index_js__["a" /* default */])(dateWithMonths, days + weeks * 7) : dateWithMonths; // Add days, hours, minutes and seconds

  var minutesToAdd = minutes + hours * 60;
  var secondsToAdd = seconds + minutesToAdd * 60;
  var msToAdd = secondsToAdd * 1000;
  var finalDate = new Date(dateWithDays.getTime() + msToAdd);
  return finalDate;
}

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name areIntervalsOverlapping
 * @category Interval Helpers
 * @summary Is the given time interval overlapping with another time interval?
 *
 * @description
 * Is the given time interval overlapping with another time interval? Adjacent intervals do not count as overlapping.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `areRangesOverlapping` to `areIntervalsOverlapping`.
 *   This change was made to mirror the use of the word "interval" in standard ISO 8601:2004 terminology:
 *
 *   ```
 *   2.1.3
 *   time interval
 *   part of the time axis limited by two instants
 *   ```
 *
 *   Also, this function now accepts an object with `start` and `end` properties
 *   instead of two arguments as an interval.
 *   This function now throws `RangeError` if the start of the interval is after its end
 *   or if any date in the interval is `Invalid Date`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   areRangesOverlapping(
 *     new Date(2014, 0, 10), new Date(2014, 0, 20),
 *     new Date(2014, 0, 17), new Date(2014, 0, 21)
 *   )
 *
 *   // v2.0.0 onward
 *
 *   areIntervalsOverlapping(
 *     { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *     { start: new Date(2014, 0, 17), end: new Date(2014, 0, 21) }
 *   )
 *   ```
 *
 * @param {Interval} intervalLeft - the first interval to compare. See [Interval]{@link https://date-fns.org/docs/Interval}
 * @param {Interval} intervalRight - the second interval to compare. See [Interval]{@link https://date-fns.org/docs/Interval}
 * @param {Object} [options] - the object with options
 * @param {Boolean} [options.inclusive=false] - whether the comparison is inclusive or not
 * @returns {Boolean} whether the time intervals are overlapping
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // For overlapping time intervals:
 * areIntervalsOverlapping(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 17), end: new Date(2014, 0, 21) }
 * )
 * //=> true
 *
 * @example
 * // For non-overlapping time intervals:
 * areIntervalsOverlapping(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 21), end: new Date(2014, 0, 22) }
 * )
 * //=> false
 *
 * @example
 * // For adjacent time intervals:
 * areIntervalsOverlapping(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 20), end: new Date(2014, 0, 30) }
 * )
 * //=> false
 *
 * @example
 * // Using the inclusive option:
 * areIntervalsOverlapping(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 20), end: new Date(2014, 0, 24) }
 * )
 * //=> false
 * areIntervalsOverlapping(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 20), end: new Date(2014, 0, 24) },
 *   { inclusive: true }
 * )
 * //=> true
 */

function areIntervalsOverlapping(dirtyIntervalLeft, dirtyIntervalRight) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    inclusive: false
  };
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var intervalLeft = dirtyIntervalLeft || {};
  var intervalRight = dirtyIntervalRight || {};
  var leftStartTime = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(intervalLeft.start).getTime();
  var leftEndTime = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(intervalLeft.end).getTime();
  var rightStartTime = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(intervalRight.start).getTime();
  var rightEndTime = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(intervalRight.end).getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(leftStartTime <= leftEndTime && rightStartTime <= rightEndTime)) {
    throw new RangeError('Invalid interval');
  }

  if (options.inclusive) {
    return leftStartTime <= rightEndTime && rightStartTime <= leftEndTime;
  }

  return leftStartTime < rightEndTime && rightStartTime < leftEndTime;
}

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__max_index_js__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__min_index_js__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);



/**
 * @name clamp
 * @category Interval Helpers
 * @summary Return a date bounded by the start and the end of the given interval
 *
 * @description
 * Clamps a date to the lower bound with the start of the interval and the upper
 * bound with the end of the interval.
 *
 * - When the date is less than the start of the interval, the start is returned.
 * - When the date is greater than the end of the interval, the end is returned.
 * - Otherwise the date is returned.
 *
 * @example
 * // What is Mar, 21, 2021 bounded to an interval starting at Mar, 22, 2021 and ending at Apr, 01, 2021
 * const result = clamp(new Date(2021, 2, 21), {
 *   start: new Date(2021, 2, 22),
 *   end: new Date(2021, 3, 1),
 * })
 * //=> Mon Mar 22 2021 00:00:00
 *
 * @param {Date | Number} date - the date to be bounded
 * @param {Interval} interval - the interval to bound to
 * @returns {Date} the date bounded by the start and the end of the interval
 * @throws {TypeError} 2 arguments required
 */

function clamp(date, _ref) {
  var start = _ref.start,
      end = _ref.end;
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__min_index_js__["a" /* default */])([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__max_index_js__["a" /* default */])([date, start]), end]);
}

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name closestIndexTo
 * @category Common Helpers
 * @summary Return an index of the closest date from the array comparing to the given date.
 *
 * @description
 * Return an index of the closest date from the array comparing to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now, `closestIndexTo` doesn't throw an exception
 *   when the second argument is not an array, and returns Invalid Date instead.
 *
 * @param {Date|Number} dateToCompare - the date to compare with
 * @param {Date[]|Number[]} datesArray - the array to search
 * @returns {Number} an index of the date closest to the given date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Which date is closer to 6 September 2015?
 * var dateToCompare = new Date(2015, 8, 6)
 * var datesArray = [
 *   new Date(2015, 0, 1),
 *   new Date(2016, 0, 1),
 *   new Date(2017, 0, 1)
 * ]
 * var result = closestIndexTo(dateToCompare, datesArray)
 * //=> 1
 */

function closestIndexTo(dirtyDateToCompare, dirtyDatesArray) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateToCompare = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateToCompare);

  if (isNaN(dateToCompare)) {
    return NaN;
  }

  var timeToCompare = dateToCompare.getTime();
  var datesArray; // `dirtyDatesArray` is undefined or null

  if (dirtyDatesArray == null) {
    datesArray = []; // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method
  } else if (typeof dirtyDatesArray.forEach === 'function') {
    datesArray = dirtyDatesArray; // If `dirtyDatesArray` is Array-like Object, convert to Array. Otherwise, make it empty Array
  } else {
    datesArray = Array.prototype.slice.call(dirtyDatesArray);
  }

  var result;
  var minDistance;
  datesArray.forEach(function (dirtyDate, index) {
    var currentDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);

    if (isNaN(currentDate)) {
      result = NaN;
      minDistance = NaN;
      return;
    }

    var distance = Math.abs(timeToCompare - currentDate.getTime());

    if (result == null || distance < minDistance) {
      result = index;
      minDistance = distance;
    }
  });
  return result;
}

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name closestTo
 * @category Common Helpers
 * @summary Return a date from the array closest to the given date.
 *
 * @description
 * Return a date from the array closest to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now, `closestTo` doesn't throw an exception
 *   when the second argument is not an array, and returns Invalid Date instead.
 *
 * @param {Date|Number} dateToCompare - the date to compare with
 * @param {Date[]|Number[]} datesArray - the array to search
 * @returns {Date} the date from the array closest to the given date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Which date is closer to 6 September 2015: 1 January 2000 or 1 January 2030?
 * var dateToCompare = new Date(2015, 8, 6)
 * var result = closestTo(dateToCompare, [
 *   new Date(2000, 0, 1),
 *   new Date(2030, 0, 1)
 * ])
 * //=> Tue Jan 01 2030 00:00:00
 */

function closestTo(dirtyDateToCompare, dirtyDatesArray) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateToCompare = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateToCompare);

  if (isNaN(dateToCompare)) {
    return new Date(NaN);
  }

  var timeToCompare = dateToCompare.getTime();
  var datesArray; // `dirtyDatesArray` is undefined or null

  if (dirtyDatesArray == null) {
    datesArray = []; // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method
  } else if (typeof dirtyDatesArray.forEach === 'function') {
    datesArray = dirtyDatesArray; // If `dirtyDatesArray` is Array-like Object, convert to Array. Otherwise, make it empty Array
  } else {
    datesArray = Array.prototype.slice.call(dirtyDatesArray);
  }

  var result;
  var minDistance;
  datesArray.forEach(function (dirtyDate) {
    var currentDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);

    if (isNaN(currentDate)) {
      result = new Date(NaN);
      minDistance = NaN;
      return;
    }

    var distance = Math.abs(timeToCompare - currentDate.getTime());

    if (result == null || distance < minDistance) {
      result = currentDate;
      minDistance = distance;
    }
  });
  return result;
}

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name compareDesc
 * @category Common Helpers
 * @summary Compare the two dates reverse chronologically and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return -1 if the first date is after the second,
 * 1 if the first date is before the second or 0 if dates are equal.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989 reverse chronologically:
 * const result = compareDesc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> 1
 *
 * @example
 * // Sort the array of dates in reverse chronological order:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareDesc)
 * //=> [
 * //   Sun Jul 02 1995 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Wed Feb 11 1987 00:00:00
 * // ]
 */

function compareDesc(dirtyDateLeft, dirtyDateRight) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateLeft = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateLeft);
  var dateRight = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff > 0) {
    return -1;
  } else if (diff < 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index_js__ = __webpack_require__(3);


/**
 * @name daysToWeeks
 * @category Conversion Helpers
 * @summary Convert days to weeks.
 *
 * @description
 * Convert a number of days to a full number of weeks.
 *
 * @param {number} days - number of days to be converted
 *
 * @returns {number} the number of days converted in weeks
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 14 days to weeks:
 * const result = daysToWeeks(14)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = daysToWeeks(13)
 * //=> 1
 */

function daysToWeeks(days) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var weeks = days / __WEBPACK_IMPORTED_MODULE_1__constants_index_js__["c" /* daysInWeek */];
  return Math.floor(weeks);
}

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isValid_index_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isWeekend_index_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__differenceInCalendarDays_index_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addDays_index_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__isSameDay_index_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_requiredArgs_index_js__ = __webpack_require__(0);








/**
 * @name differenceInBusinessDays
 * @category Day Helpers
 * @summary Get the number of business days between the given dates.
 *
 * @description
 * Get the number of business day periods between the given dates.
 * Business days being days that arent in the weekend.
 * Like `differenceInCalendarDays`, the function removes the times from
 * the dates before calculating the difference.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of business days
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many business days are between
 * // 10 January 2014 and 20 July 2014?
 * var result = differenceInBusinessDays(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 0, 10)
 * )
 * //=> 136
 */

function differenceInBusinessDays(dirtyDateLeft, dirtyDateRight) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateLeft = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__toDate_index_js__["a" /* default */])(dirtyDateLeft);
  var dateRight = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__toDate_index_js__["a" /* default */])(dirtyDateRight);
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isValid_index_js__["a" /* default */])(dateLeft) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isValid_index_js__["a" /* default */])(dateRight)) return NaN;
  var calendarDifference = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__differenceInCalendarDays_index_js__["a" /* default */])(dateLeft, dateRight);
  var sign = calendarDifference < 0 ? -1 : 1;
  var weeks = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_toInteger_index_js__["a" /* default */])(calendarDifference / 7);
  var result = weeks * 5;
  dateRight = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__addDays_index_js__["a" /* default */])(dateRight, weeks * 7); // the loop below will run at most 6 times to account for the remaining days that don't makeup a full week

  while (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__isSameDay_index_js__["a" /* default */])(dateLeft, dateRight)) {
    // sign is used to account for both negative and positive differences
    result += __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isWeekend_index_js__["a" /* default */])(dateRight) ? 0 : sign;
    dateRight = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__addDays_index_js__["a" /* default */])(dateRight, sign);
  }

  return result === 0 ? 0 : result;
}

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_getTimezoneOffsetInMilliseconds_index_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__startOfISOWeek_index_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);



var MILLISECONDS_IN_WEEK = 604800000;
/**
 * @name differenceInCalendarISOWeeks
 * @category ISO Week Helpers
 * @summary Get the number of calendar ISO weeks between the given dates.
 *
 * @description
 * Get the number of calendar ISO weeks between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar ISO weeks
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar ISO weeks are between 6 July 2014 and 21 July 2014?
 * const result = differenceInCalendarISOWeeks(
 *   new Date(2014, 6, 21),
 *   new Date(2014, 6, 6)
 * )
 * //=> 3
 */

function differenceInCalendarISOWeeks(dirtyDateLeft, dirtyDateRight) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var startOfISOWeekLeft = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__startOfISOWeek_index_js__["a" /* default */])(dirtyDateLeft);
  var startOfISOWeekRight = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__startOfISOWeek_index_js__["a" /* default */])(dirtyDateRight);
  var timestampLeft = startOfISOWeekLeft.getTime() - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_getTimezoneOffsetInMilliseconds_index_js__["a" /* default */])(startOfISOWeekLeft);
  var timestampRight = startOfISOWeekRight.getTime() - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_getTimezoneOffsetInMilliseconds_index_js__["a" /* default */])(startOfISOWeekRight); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK);
}

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getQuarter_index_js__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);



/**
 * @name differenceInCalendarQuarters
 * @category Quarter Helpers
 * @summary Get the number of calendar quarters between the given dates.
 *
 * @description
 * Get the number of calendar quarters between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar quarters
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar quarters are between 31 December 2013 and 2 July 2014?
 * var result = differenceInCalendarQuarters(
 *   new Date(2014, 6, 2),
 *   new Date(2013, 11, 31)
 * )
 * //=> 3
 */

function differenceInCalendarQuarters(dirtyDateLeft, dirtyDateRight) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateLeft = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDateLeft);
  var dateRight = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDateRight);
  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
  var quarterDiff = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getQuarter_index_js__["a" /* default */])(dateLeft) - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getQuarter_index_js__["a" /* default */])(dateRight);
  return yearDiff * 4 + quarterDiff;
}

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__differenceInCalendarISOWeekYears_index_js__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compareAsc_index_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__subISOWeekYears_index_js__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_requiredArgs_index_js__ = __webpack_require__(0);





/**
 * @name differenceInISOWeekYears
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of full ISO week-numbering years between the given dates.
 *
 * @description
 * Get the number of full ISO week-numbering years between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `differenceInISOYears` to `differenceInISOWeekYears`.
 *   "ISO week year" is short for [ISO week-numbering year](https://en.wikipedia.org/wiki/ISO_week_date).
 *   This change makes the name consistent with
 *   locale-dependent week-numbering year helpers, e.g., `addWeekYears`.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full ISO week-numbering years
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full ISO week-numbering years are between 1 January 2010 and 1 January 2012?
 * var result = differenceInISOWeekYears(
 *   new Date(2012, 0, 1),
 *   new Date(2010, 0, 1)
 * )
 * //=> 1
 */

function differenceInISOWeekYears(dirtyDateLeft, dirtyDateRight) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateLeft = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateLeft);
  var dateRight = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateRight);
  var sign = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__compareAsc_index_js__["a" /* default */])(dateLeft, dateRight);
  var difference = Math.abs(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__differenceInCalendarISOWeekYears_index_js__["a" /* default */])(dateLeft, dateRight));
  dateLeft = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__subISOWeekYears_index_js__["a" /* default */])(dateLeft, sign * difference); // Math.abs(diff in full ISO years - diff in calendar ISO years) === 1
  // if last calendar ISO year is not full
  // If so, result must be decreased by 1 in absolute value

  var isLastISOWeekYearNotFull = Number(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__compareAsc_index_js__["a" /* default */])(dateLeft, dateRight) === -sign);
  var result = sign * (difference - isLastISOWeekYearNotFull); // Prevent negative zero

  return result === 0 ? 0 : result;
}

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__differenceInMonths_index_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name differenceInQuarters
 * @category Quarter Helpers
 * @summary Get the number of full quarters between the given dates.
 *
 * @description
 * Get the number of full quarters between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full quarters
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full quarters are between 31 December 2013 and 2 July 2014?
 * var result = differenceInQuarters(new Date(2014, 6, 2), new Date(2013, 11, 31))
 * //=> 2
 */

function differenceInQuarters(dirtyDateLeft, dirtyDateRight) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var diff = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__differenceInMonths_index_js__["a" /* default */])(dirtyDateLeft, dirtyDateRight) / 3;
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
}

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__differenceInDays_index_js__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name differenceInWeeks
 * @category Week Helpers
 * @summary Get the number of full weeks between the given dates.
 *
 * @description
 * Get the number of full weeks between two dates. Fractional weeks are
 * truncated towards zero.
 *
 * One "full week" is the distance between a local time in one day to the same
 * local time 7 days earlier or later. A full week can sometimes be less than
 * or more than 7*24 hours if a daylight savings change happens between two dates.
 *
 * To ignore DST and only measure exact 7*24-hour periods, use this instead:
 * `Math.floor(differenceInHours(dateLeft, dateRight)/(7*24))|0`.
 *
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full weeks
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full weeks are between 5 July 2014 and 20 July 2014?
 * const result = differenceInWeeks(new Date(2014, 6, 20), new Date(2014, 6, 5))
 * //=> 2
 *
 * // How many full weeks are between
 * // 1 March 2020 0:00 and 6 June 2020 0:00 ?
 * // Note: because local time is used, the
 * // result will always be 8 weeks (54 days),
 * // even if DST starts and the period has
 * // only 54*24-1 hours.
 * const result = differenceInWeeks(
 *   new Date(2020, 5, 1),
 *   new Date(2020, 2, 6)
 * )
 * //=> 8
 */

function differenceInWeeks(dirtyDateLeft, dirtyDateRight) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var diff = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__differenceInDays_index_js__["a" /* default */])(dirtyDateLeft, dirtyDateRight) / 7;
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
}

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addHours_index_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);




/**
 * @name eachHourOfInterval
 * @category Interval Helpers
 * @summary Return the array of hours within the specified time interval.
 *
 * @description
 * Return the array of hours within the specified time interval.
 *
 * @param {Interval} interval - the interval. See [Interval]{@link https://date-fns.org/docs/Interval}
 * @param {Object} [options] - an object with options.
 * @param {Number} [options.step=1] - the step to increment by. The value should be more than 1.
 * @returns {Date[]} the array with starts of hours from the hour of the interval start to the hour of the interval end
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.step` must be a number greater than 1
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each hour between 6 October 2014, 12:00 and 6 October 2014, 15:00
 * var result = eachHourOfInterval({
 *   start: new Date(2014, 9, 6, 12),
 *   end: new Date(2014, 9, 6, 15)
 * })
 * //=> [
 * //   Mon Oct 06 2014 12:00:00,
 * //   Mon Oct 06 2014 13:00:00,
 * //   Mon Oct 06 2014 14:00:00,
 * //   Mon Oct 06 2014 15:00:00
 * // ]
 */
function eachHourOfInterval(dirtyInterval, options) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var interval = dirtyInterval || {};
  var startDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(interval.start);
  var endDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(interval.end);
  var startTime = startDate.getTime();
  var endTime = endDate.getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(startTime <= endTime)) {
    throw new RangeError('Invalid interval');
  }

  var dates = [];
  var currentDate = startDate;
  currentDate.setMinutes(0, 0, 0);
  var step = options && 'step' in options ? Number(options.step) : 1;
  if (step < 1 || isNaN(step)) throw new RangeError('`options.step` must be a number greater than 1');

  while (currentDate.getTime() <= endTime) {
    dates.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(currentDate));
    currentDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__addHours_index_js__["a" /* default */])(currentDate, step);
  }

  return dates;
}

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addMinutes_index_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__startOfMinute_index_js__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__(0);





/**
 * @name eachMinuteOfInterval
 * @category Interval Helpers
 * @summary Return the array of minutes within the specified time interval.
 *
 * @description
 * Returns the array of minutes within the specified time interval.
 *
 * @param {Interval} interval - the interval. See [Interval]{@link https://date-fns.org/docs/Interval}
 * @param {Object} [options] - an object with options.
 * @param {Number} [options.step=1] - the step to increment by. The starts of minutes from the hour of the interval start to the hour of the interval end
 * @throws {TypeError} 1 argument requie value should be more than 1.
 * @returns {Date[]} the array withred
 * @throws {RangeError} `options.step` must be a number equal or greater than 1
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each minute between 14 October 2020, 13:00 and 14 October 2020, 13:03
 * const result = eachMinuteOfInterval({
 *   start: new Date(2014, 9, 14, 13),
 *   end: new Date(2014, 9, 14, 13, 3)
 * })
 * //=> [
 * //   Wed Oct 14 2014 13:00:00,
 * //   Wed Oct 14 2014 13:01:00,
 * //   Wed Oct 14 2014 13:02:00,
 * //   Wed Oct 14 2014 13:03:00
 * // ]
 */
function eachMinuteOfInterval(interval, options) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var startDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__startOfMinute_index_js__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(interval.start));
  var endDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__startOfMinute_index_js__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(interval.end));
  var startTime = startDate.getTime();
  var endTime = endDate.getTime();

  if (startTime >= endTime) {
    throw new RangeError('Invalid interval');
  }

  var dates = [];
  var currentDate = startDate;
  var step = options && 'step' in options ? Number(options.step) : 1;
  if (step < 1 || isNaN(step)) throw new RangeError('`options.step` must be a number equal or greater than 1');

  while (currentDate.getTime() <= endTime) {
    dates.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(currentDate));
    currentDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__addMinutes_index_js__["a" /* default */])(currentDate, step);
  }

  return dates;
}

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name eachMonthOfInterval
 * @category Interval Helpers
 * @summary Return the array of months within the specified time interval.
 *
 * @description
 * Return the array of months within the specified time interval.
 *
 * @param {Interval} interval - the interval. See [Interval]{@link https://date-fns.org/docs/Interval}
 * @returns {Date[]} the array with starts of months from the month of the interval start to the month of the interval end
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each month between 6 February 2014 and 10 August 2014:
 * var result = eachMonthOfInterval({
 *   start: new Date(2014, 1, 6),
 *   end: new Date(2014, 7, 10)
 * })
 * //=> [
 * //   Sat Feb 01 2014 00:00:00,
 * //   Sat Mar 01 2014 00:00:00,
 * //   Tue Apr 01 2014 00:00:00,
 * //   Thu May 01 2014 00:00:00,
 * //   Sun Jun 01 2014 00:00:00,
 * //   Tue Jul 01 2014 00:00:00,
 * //   Fri Aug 01 2014 00:00:00
 * // ]
 */

function eachMonthOfInterval(dirtyInterval) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var interval = dirtyInterval || {};
  var startDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(interval.start);
  var endDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(interval.end);
  var endTime = endDate.getTime();
  var dates = []; // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(startDate.getTime() <= endTime)) {
    throw new RangeError('Invalid interval');
  }

  var currentDate = startDate;
  currentDate.setHours(0, 0, 0, 0);
  currentDate.setDate(1);

  while (currentDate.getTime() <= endTime) {
    dates.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(currentDate));
    currentDate.setMonth(currentDate.getMonth() + 1);
  }

  return dates;
}

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addQuarters_index_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__startOfQuarter_index_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__(0);




/**
 * @name eachQuarterOfInterval
 * @category Interval Helpers
 * @summary Return the array of quarters within the specified time interval.
 *
 * @description
 * Return the array of quarters within the specified time interval.
 *
 * @param {Interval} interval - the interval. See [Interval]{@link https://date-fns.org/docs/Interval}
 * @returns {Date[]} the array with starts of quarters from the quarter of the interval start to the quarter of the interval end
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each quarter within interval 6 February 2014 - 10 August 2014:
 * var result = eachQuarterOfInterval({
 *   start: new Date(2014, 1, 6),
 *   end: new Date(2014, 7, 10)
 * })
 * //=> [
 * //   Wed Jan 01 2014 00:00:00,
 * //   Tue Apr 01 2014 00:00:00,
 * //   Tue Jul 01 2014 00:00:00,
 * // ]
 */

function eachQuarterOfInterval(dirtyInterval) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var interval = dirtyInterval || {};
  var startDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__toDate_index_js__["a" /* default */])(interval.start);
  var endDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__toDate_index_js__["a" /* default */])(interval.end);
  var endTime = endDate.getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(startDate.getTime() <= endTime)) {
    throw new RangeError('Invalid interval');
  }

  var startDateQuarter = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__startOfQuarter_index_js__["a" /* default */])(startDate);
  var endDateQuarter = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__startOfQuarter_index_js__["a" /* default */])(endDate);
  endTime = endDateQuarter.getTime();
  var quarters = [];
  var currentQuarter = startDateQuarter;

  while (currentQuarter.getTime() <= endTime) {
    quarters.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__toDate_index_js__["a" /* default */])(currentQuarter));
    currentQuarter = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__addQuarters_index_js__["a" /* default */])(currentQuarter, 1);
  }

  return quarters;
}

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addWeeks_index_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__startOfWeek_index_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__(0);




/**
 * @name eachWeekOfInterval
 * @category Interval Helpers
 * @summary Return the array of weeks within the specified time interval.
 *
 * @description
 * Return the array of weeks within the specified time interval.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Interval} interval - the interval. See [Interval]{@link https://date-fns.org/docs/Interval}
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date[]} the array with starts of weeks from the week of the interval start to the week of the interval end
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be 0, 1, ..., 6
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each week within interval 6 October 2014 - 23 November 2014:
 * var result = eachWeekOfInterval({
 *   start: new Date(2014, 9, 6),
 *   end: new Date(2014, 10, 23)
 * })
 * //=> [
 * //   Sun Oct 05 2014 00:00:00,
 * //   Sun Oct 12 2014 00:00:00,
 * //   Sun Oct 19 2014 00:00:00,
 * //   Sun Oct 26 2014 00:00:00,
 * //   Sun Nov 02 2014 00:00:00,
 * //   Sun Nov 09 2014 00:00:00,
 * //   Sun Nov 16 2014 00:00:00,
 * //   Sun Nov 23 2014 00:00:00
 * // ]
 */

function eachWeekOfInterval(dirtyInterval, options) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var interval = dirtyInterval || {};
  var startDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__toDate_index_js__["a" /* default */])(interval.start);
  var endDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__toDate_index_js__["a" /* default */])(interval.end);
  var endTime = endDate.getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(startDate.getTime() <= endTime)) {
    throw new RangeError('Invalid interval');
  }

  var startDateWeek = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__startOfWeek_index_js__["a" /* default */])(startDate, options);
  var endDateWeek = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__startOfWeek_index_js__["a" /* default */])(endDate, options); // Some timezones switch DST at midnight, making start of day unreliable in these timezones, 3pm is a safe bet

  startDateWeek.setHours(15);
  endDateWeek.setHours(15);
  endTime = endDateWeek.getTime();
  var weeks = [];
  var currentWeek = startDateWeek;

  while (currentWeek.getTime() <= endTime) {
    currentWeek.setHours(0);
    weeks.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__toDate_index_js__["a" /* default */])(currentWeek));
    currentWeek = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__addWeeks_index_js__["a" /* default */])(currentWeek, 1);
    currentWeek.setHours(15);
  }

  return weeks;
}

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__eachWeekendOfInterval_index_js__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__startOfMonth_index_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__endOfMonth_index_js__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__(0);




/**
 * @name eachWeekendOfMonth
 * @category Month Helpers
 * @summary List all the Saturdays and Sundays in the given month.
 *
 * @description
 * Get all the Saturdays and Sundays in the given month.
 *
 * @param {Date|Number} date - the given month
 * @returns {Date[]} an array containing all the Saturdays and Sundays
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} The passed date is invalid
 *
 * @example
 * // Lists all Saturdays and Sundays in the given month
 * const result = eachWeekendOfMonth(new Date(2022, 1, 1))
 * //=> [
 * //   Sat Feb 05 2022 00:00:00,
 * //   Sun Feb 06 2022 00:00:00,
 * //   Sat Feb 12 2022 00:00:00,
 * //   Sun Feb 13 2022 00:00:00,
 * //   Sat Feb 19 2022 00:00:00,
 * //   Sun Feb 20 2022 00:00:00,
 * //   Sat Feb 26 2022 00:00:00,
 * //   Sun Feb 27 2022 00:00:00
 * // ]
 */

function eachWeekendOfMonth(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var startDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__startOfMonth_index_js__["a" /* default */])(dirtyDate);
  if (isNaN(startDate.getTime())) throw new RangeError('The passed date is invalid');
  var endDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__endOfMonth_index_js__["a" /* default */])(dirtyDate);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__eachWeekendOfInterval_index_js__["a" /* default */])({
    start: startDate,
    end: endDate
  });
}

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__eachWeekendOfInterval_index_js__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__startOfYear_index_js__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__endOfYear_index_js__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__(0);




/**
 * @name eachWeekendOfYear
 * @category Year Helpers
 * @summary List all the Saturdays and Sundays in the year.
 *
 * @description
 * Get all the Saturdays and Sundays in the year.
 *
 * @param {Date|Number} date - the given year
 * @returns {Date[]} an array containing all the Saturdays and Sundays
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} The passed date is invalid
 *
 * @example
 * // Lists all Saturdays and Sundays in the year
 * var result = eachWeekendOfYear(new Date(2020, 1, 1))
 * //=> [
 * //   Sat Jan 03 2020 00:00:00,
 * //   Sun Jan 04 2020 00:00:00,
 * //   ...
 * //   Sun Dec 27 2020 00:00:00
 * // ]
 * ]
 */

function eachWeekendOfYear(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var startDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__startOfYear_index_js__["a" /* default */])(dirtyDate);
  if (isNaN(startDate)) throw new RangeError('The passed date is invalid');
  var endDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__endOfYear_index_js__["a" /* default */])(dirtyDate);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__eachWeekendOfInterval_index_js__["a" /* default */])({
    start: startDate,
    end: endDate
  });
}

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name eachYearOfInterval
 * @category Interval Helpers
 * @summary Return the array of yearly timestamps within the specified time interval.
 *
 * @description
 * Return the array of yearly timestamps within the specified time interval.
 *
 * @param {Interval} interval - the interval. See [Interval]{@link https://date-fns.org/docs/Interval}
 * @returns {Date[]} the array with starts of yearly timestamps from the month of the interval start to the month of the interval end
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each year between 6 February 2014 and 10 August 2017:
 * var result = eachYearOfInterval({
 *   start: new Date(2014, 1, 6),
 *   end: new Date(2017, 7, 10)
 * })
 * //=> [
 * //   Wed Jan 01 2014 00:00:00,
 * //   Thu Jan 01 2015 00:00:00,
 * //   Fri Jan 01 2016 00:00:00,
 * //   Sun Jan 01 2017 00:00:00
 * // ]
 */

function eachYearOfInterval(dirtyInterval) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var interval = dirtyInterval || {};
  var startDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(interval.start);
  var endDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(interval.end);
  var endTime = endDate.getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(startDate.getTime() <= endTime)) {
    throw new RangeError('Invalid interval');
  }

  var dates = [];
  var currentDate = startDate;
  currentDate.setHours(0, 0, 0, 0);
  currentDate.setMonth(0, 1);

  while (currentDate.getTime() <= endTime) {
    dates.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(currentDate));
    currentDate.setFullYear(currentDate.getFullYear() + 1);
  }

  return dates;
}

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name endOfDecade
 * @category Decade Helpers
 * @summary Return the end of a decade for the given date.
 *
 * @description
 * Return the end of a decade for the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a decade
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // The end of a decade for 12 May 1984 00:00:00:
 * const result = endOfDecade(new Date(1984, 4, 12, 00, 00, 00))
 * //=> Dec 31 1989 23:59:59.999
 */

function endOfDecade(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var year = date.getFullYear();
  var decade = 9 + Math.floor(year / 10) * 10;
  date.setFullYear(decade, 11, 31);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name endOfHour
 * @category Hour Helpers
 * @summary Return the end of an hour for the given date.
 *
 * @description
 * Return the end of an hour for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of an hour
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of an hour for 2 September 2014 11:55:00:
 * const result = endOfHour(new Date(2014, 8, 2, 11, 55))
 * //=> Tue Sep 02 2014 11:59:59.999
 */

function endOfHour(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  date.setMinutes(59, 59, 999);
  return date;
}

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__endOfWeek_index_js__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name endOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the end of an ISO week for the given date.
 *
 * @description
 * Return the end of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of an ISO week
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of an ISO week for 2 September 2014 11:55:00:
 * var result = endOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Sep 07 2014 23:59:59.999
 */

function endOfISOWeek(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__endOfWeek_index_js__["a" /* default */])(dirtyDate, {
    weekStartsOn: 1
  });
}

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getISOWeekYear_index_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__startOfISOWeek_index_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);



/**
 * @name endOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the end of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the end of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `endOfISOYear` to `endOfISOWeekYear`.
 *   "ISO week year" is short for [ISO week-numbering year](https://en.wikipedia.org/wiki/ISO_week_date).
 *   This change makes the name consistent with
 *   locale-dependent week-numbering year helpers, e.g., `addWeekYears`.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of an ISO week-numbering year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of an ISO week-numbering year for 2 July 2005:
 * const result = endOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Sun Jan 01 2006 23:59:59.999
 */

function endOfISOWeekYear(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var year = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getISOWeekYear_index_js__["a" /* default */])(dirtyDate);
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__startOfISOWeek_index_js__["a" /* default */])(fourthOfJanuaryOfNextYear);
  date.setMilliseconds(date.getMilliseconds() - 1);
  return date;
}

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name endOfMinute
 * @category Minute Helpers
 * @summary Return the end of a minute for the given date.
 *
 * @description
 * Return the end of a minute for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a minute
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a minute for 1 December 2014 22:15:45.400:
 * const result = endOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:59.999
 */

function endOfMinute(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  date.setSeconds(59, 999);
  return date;
}

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name endOfQuarter
 * @category Quarter Helpers
 * @summary Return the end of a year quarter for the given date.
 *
 * @description
 * Return the end of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a quarter
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a quarter for 2 September 2014 11:55:00:
 * const result = endOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */

function endOfQuarter(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var currentMonth = date.getMonth();
  var month = currentMonth - currentMonth % 3 + 3;
  date.setMonth(month, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name endOfSecond
 * @category Second Helpers
 * @summary Return the end of a second for the given date.
 *
 * @description
 * Return the end of a second for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a second
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a second for 1 December 2014 22:15:45.400:
 * const result = endOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:45.999
 */

function endOfSecond(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  date.setMilliseconds(999);
  return date;
}

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__endOfDay_index_js__ = __webpack_require__(36);

/**
 * @name endOfToday
 * @category Day Helpers
 * @summary Return the end of today.
 * @pure false
 *
 * @description
 * Return the end of today.
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @returns {Date} the end of today
 *
 * @example
 * // If today is 6 October 2014:
 * var result = endOfToday()
 * //=> Mon Oct 6 2014 23:59:59.999
 */

function endOfToday() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__endOfDay_index_js__["a" /* default */])(Date.now());
}

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/**
 * @name endOfTomorrow
 * @category Day Helpers
 * @summary Return the end of tomorrow.
 * @pure false
 *
 * @description
 * Return the end of tomorrow.
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `new Date()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @returns {Date} the end of tomorrow
 *
 * @example
 * // If today is 6 October 2014:
 * const result = endOfTomorrow()
 * //=> Tue Oct 7 2014 23:59:59.999
 */
function endOfTomorrow() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth();
  var day = now.getDate();
  var date = new Date(0);
  date.setFullYear(year, month, day + 1);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/**
 * @name endOfYesterday
 * @category Day Helpers
 * @summary Return the end of yesterday.
 * @pure false
 *
 * @description
 * Return the end of yesterday.
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `new Date()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @returns {Date} the end of yesterday
 *
 * @example
 * // If today is 6 October 2014:
 * const result = endOfYesterday()
 * //=> Sun Oct 5 2014 23:59:59.999
 */
function endOfYesterday() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth();
  var day = now.getDate();
  var date = new Date(0);
  date.setFullYear(year, month, day - 1);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDistance_index_js__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name formatDistanceToNow
 * @category Common Helpers
 * @summary Return the distance between the given date and now in words.
 * @pure false
 *
 * @description
 * Return the distance between the given date and now in words.
 *
 * | Distance to now                                                   | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance to now     | Result               |
 * |---------------------|----------------------|
 * | 0 secs ... 5 secs   | less than 5 seconds  |
 * | 5 secs ... 10 secs  | less than 10 seconds |
 * | 10 secs ... 20 secs | less than 20 seconds |
 * | 20 secs ... 40 secs | half a minute        |
 * | 40 secs ... 60 secs | less than a minute   |
 * | 60 secs ... 90 secs | 1 minute             |
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `distanceInWordsToNow ` to `formatDistanceToNow`
 *   to make its name consistent with `format` and `formatRelative`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   distanceInWordsToNow(new Date(2014, 6, 2), { addSuffix: true })
 *   //=> 'in 6 months'
 *
 *   // v2.0.0 onward
 *
 *   formatDistanceToNow(new Date(2014, 6, 2), { addSuffix: true })
 *   //=> 'in 6 months'
 *   ```
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - the object with options
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result specifies if now is earlier or later than the passed date
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // If today is 1 January 2015, what is the distance to 2 July 2014?
 * var result = formatDistanceToNow(
 *   new Date(2014, 6, 2)
 * )
 * //=> '6 months'
 *
 * @example
 * // If now is 1 January 2015 00:00:00,
 * // what is the distance to 1 January 2015 00:00:15, including seconds?
 * var result = formatDistanceToNow(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   {includeSeconds: true}
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 January 2016, with a suffix?
 * var result = formatDistanceToNow(
 *   new Date(2016, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> 'in about 1 year'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 August 2016 in Esperanto?
 * var eoLocale = require('date-fns/locale/eo')
 * var result = formatDistanceToNow(
 *   new Date(2016, 7, 1),
 *   {locale: eoLocale}
 * )
 * //=> 'pli ol 1 jaro'
 */

function formatDistanceToNow(dirtyDate, dirtyOptions) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__formatDistance_index_js__["a" /* default */])(dirtyDate, Date.now(), dirtyOptions);
}

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDistanceStrict_index_js__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name formatDistanceToNowStrict
 * @category Common Helpers
 * @summary Return the distance between the given date and now in words.
 * @pure false
 *
 * @description
 * Return the distance between the given dates in words, using strict units.
 * This is like `formatDistance`, but does not use helpers like 'almost', 'over',
 * 'less than' and the like.
 *
 * | Distance between dates | Result              |
 * |------------------------|---------------------|
 * | 0 ... 59 secs          | [0..59] seconds     |
 * | 1 ... 59 mins          | [1..59] minutes     |
 * | 1 ... 23 hrs           | [1..23] hours       |
 * | 1 ... 29 days          | [1..29] days        |
 * | 1 ... 11 months        | [1..11] months      |
 * | 1 ... N years          | [1..N]  years       |
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {'second'|'minute'|'hour'|'day'|'month'|'year'} [options.unit] - if specified, will force a unit
 * @param {'floor'|'ceil'|'round'} [options.roundingMethod='round'] - which way to round partial units
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // If today is 1 January 2015, what is the distance to 2 July 2014?
 * var result = formatDistanceToNowStrict(
 *   new Date(2014, 6, 2)
 * )
 * //=> '6 months'
 *
 * @example
 * // If now is 1 January 2015 00:00:00,
 * // what is the distance to 1 January 2015 00:00:15, including seconds?
 * var result = formatDistanceToNowStrict(
 *   new Date(2015, 0, 1, 0, 0, 15)
 * )
 * //=> '20 seconds'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 January 2016, with a suffix?
 * var result = formatDistanceToNowStrict(
 *   new Date(2016, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> 'in 1 year'
 *
 * @example
 * // If today is 28 January 2015,
 * // what is the distance to 1 January 2015, in months, rounded up??
 * var result = formatDistanceToNowStrict(new Date(2015, 0, 1), {
 *   unit: 'month',
 *   roundingMethod: 'ceil'
 * })
 * //=> '1 month'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 August 2016 in Esperanto?
 * var eoLocale = require('date-fns/locale/eo')
 * var result = formatDistanceToNowStrict(
 *   new Date(2016, 7, 1),
 *   {locale: eoLocale}
 * )
 * //=> '1 jaro'
 */

function formatDistanceToNowStrict(dirtyDate, dirtyOptions) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__formatDistanceStrict_index_js__["a" /* default */])(dirtyDate, Date.now(), dirtyOptions);
}

/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__locale_en_US_index_js__ = __webpack_require__(15);

var defaultFormat = ['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds'];
/**
 * @name formatDuration
 * @category Common Helpers
 * @summary Formats a duration in human-readable format
 *
 * @description
 * Return human-readable duration string i.e. "9 months 2 days"
 *
 * @param {Duration} duration - the duration to format
 * @param {Object} [options] - an object with options.

 * @param {string[]} [options.format=['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds']] - the array of units to format
 * @param {boolean} [options.zero=false] - should be zeros be included in the output?
 * @param {string} [options.delimiter=' '] - delimiter string
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {string} the formatted date string
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Format full duration
 * formatDuration({
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30
 * })
 * //=> '2 years 9 months 1 week 7 days 5 hours 9 minutes 30 seconds
 *
 * @example
 * // Format partial duration
 * formatDuration({ months: 9, days: 2 })
 * //=> '9 months 2 days'
 *
 * @example
 * // Customize the format
 * formatDuration(
 *   {
 *     years: 2,
 *     months: 9,
 *     weeks: 1,
 *     days: 7,
 *     hours: 5,
 *     minutes: 9,
 *     seconds: 30
 *   },
 *   { format: ['months', 'weeks'] }
 * ) === '9 months 1 week'
 *
 * @example
 * // Customize the zeros presence
 * formatDuration({ years: 0, months: 9 })
 * //=> '9 months'
 * formatDuration({ years: 0, months: 9 }, { zero: true })
 * //=> '0 years 9 months'
 *
 * @example
 * // Customize the delimiter
 * formatDuration({ years: 2, months: 9, weeks: 3 }, { delimiter: ', ' })
 * //=> '2 years, 9 months, 3 weeks'
 */

function formatDuration(duration, options) {
  if (arguments.length < 1) {
    throw new TypeError("1 argument required, but only ".concat(arguments.length, " present"));
  }

  var format = (options === null || options === void 0 ? void 0 : options.format) || defaultFormat;
  var locale = (options === null || options === void 0 ? void 0 : options.locale) || __WEBPACK_IMPORTED_MODULE_0__locale_en_US_index_js__["a" /* default */];
  var zero = (options === null || options === void 0 ? void 0 : options.zero) || false;
  var delimiter = (options === null || options === void 0 ? void 0 : options.delimiter) || ' ';
  var result = format.reduce(function (acc, unit) {
    var token = "x".concat(unit.replace(/(^.)/, function (m) {
      return m.toUpperCase();
    }));
    var addChunk = typeof duration[unit] === 'number' && (zero || duration[unit]);
    return addChunk ? acc.concat(locale.formatDistance(token, duration[unit])) : acc;
  }, []).join(delimiter);
  return result;
}

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isValid_index_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__ = __webpack_require__(13);



/**
 * @name formatISO
 * @category Common Helpers
 * @summary Format the date according to the ISO 8601 standard (http://support.sas.com/documentation/cdl/en/lrdict/64316/HTML/default/viewer.htm#a003169814.htm).
 *
 * @description
 * Return the formatted date string in ISO 8601 format. Options may be passed to control the parts and notations of the date.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {'extended'|'basic'} [options.format='extended'] - if 'basic', hide delimiters between date and time values.
 * @param {'complete'|'date'|'time'} [options.representation='complete'] - format date, time with time zone, or both.
 * @returns {String} the formatted date string
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.format` must be 'extended' or 'basic'
 * @throws {RangeError} `options.represenation` must be 'date', 'time' or 'complete'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format (UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52))
 * //=> '2019-09-18T19:00:52Z'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601, short format (UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { format: 'basic' })
 * //=> '20190918T190052'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format, date only:
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { representation: 'date' })
 * //=> '2019-09-18'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format, time only (UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { representation: 'time' })
 * //=> '19:00:52Z'
 */

function formatISO(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError("1 argument required, but only ".concat(arguments.length, " present"));
  }

  var originalDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);

  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isValid_index_js__["a" /* default */])(originalDate)) {
    throw new RangeError('Invalid time value');
  }

  var options = dirtyOptions || {};
  var format = options.format == null ? 'extended' : String(options.format);
  var representation = options.representation == null ? 'complete' : String(options.representation);

  if (format !== 'extended' && format !== 'basic') {
    throw new RangeError("format must be 'extended' or 'basic'");
  }

  if (representation !== 'date' && representation !== 'time' && representation !== 'complete') {
    throw new RangeError("representation must be 'date', 'time', or 'complete'");
  }

  var result = '';
  var tzOffset = '';
  var dateDelimiter = format === 'extended' ? '-' : '';
  var timeDelimiter = format === 'extended' ? ':' : ''; // Representation is either 'date' or 'complete'

  if (representation !== 'time') {
    var day = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(originalDate.getDate(), 2);
    var month = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(originalDate.getMonth() + 1, 2);
    var year = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(originalDate.getFullYear(), 4); // yyyyMMdd or yyyy-MM-dd.

    result = "".concat(year).concat(dateDelimiter).concat(month).concat(dateDelimiter).concat(day);
  } // Representation is either 'time' or 'complete'


  if (representation !== 'date') {
    // Add the timezone.
    var offset = originalDate.getTimezoneOffset();

    if (offset !== 0) {
      var absoluteOffset = Math.abs(offset);
      var hourOffset = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(Math.floor(absoluteOffset / 60), 2);
      var minuteOffset = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(absoluteOffset % 60, 2); // If less than 0, the sign is +, because it is ahead of time.

      var sign = offset < 0 ? '+' : '-';
      tzOffset = "".concat(sign).concat(hourOffset, ":").concat(minuteOffset);
    } else {
      tzOffset = 'Z';
    }

    var hour = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(originalDate.getHours(), 2);
    var minute = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(originalDate.getMinutes(), 2);
    var second = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(originalDate.getSeconds(), 2); // If there's also date, separate it with time with 'T'

    var separator = result === '' ? '' : 'T'; // Creates a time string consisting of hour, minute, and second, separated by delimiters, if defined.

    var time = [hour, minute, second].join(timeDelimiter); // HHmmss or HH:mm:ss.

    result = "".concat(result).concat(separator).concat(time).concat(tzOffset);
  }

  return result;
}

/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isValid_index_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__ = __webpack_require__(13);



/**
 * @name formatISO9075
 * @category Common Helpers
 * @summary Format the date according to the ISO 9075 standard (https://dev.mysql.com/doc/refman/5.7/en/date-and-time-functions.html#function_get-format).
 *
 * @description
 * Return the formatted date string in ISO 9075 format. Options may be passed to control the parts and notations of the date.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {'extended'|'basic'} [options.format='extended'] - if 'basic', hide delimiters between date and time values.
 * @param {'complete'|'date'|'time'} [options.representation='complete'] - format date, time, or both.
 * @returns {String} the formatted date string
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.format` must be 'extended' or 'basic'
 * @throws {RangeError} `options.represenation` must be 'date', 'time' or 'complete'
 *
 * @example
 * // Represent 18 September 2019 in ISO 9075 format:
 * const result = formatISO9075(new Date(2019, 8, 18, 19, 0, 52))
 * //=> '2019-09-18 19:00:52'
 *
 * @example
 * // Represent 18 September 2019 in ISO 9075, short format:
 * const result = formatISO9075(new Date(2019, 8, 18, 19, 0, 52), { format: 'basic' })
 * //=> '20190918 190052'
 *
 * @example
 * // Represent 18 September 2019 in ISO 9075 format, date only:
 * const result = formatISO9075(new Date(2019, 8, 18, 19, 0, 52), { representation: 'date' })
 * //=> '2019-09-18'
 *
 * @example
 * // Represent 18 September 2019 in ISO 9075 format, time only:
 * const result = formatISO9075(new Date(2019, 8, 18, 19, 0, 52), { representation: 'time' })
 * //=> '19:00:52'
 */

function formatISO9075(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError("1 argument required, but only ".concat(arguments.length, " present"));
  }

  var originalDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);

  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isValid_index_js__["a" /* default */])(originalDate)) {
    throw new RangeError('Invalid time value');
  }

  var options = dirtyOptions || {};
  var format = options.format == null ? 'extended' : String(options.format);
  var representation = options.representation == null ? 'complete' : String(options.representation);

  if (format !== 'extended' && format !== 'basic') {
    throw new RangeError("format must be 'extended' or 'basic'");
  }

  if (representation !== 'date' && representation !== 'time' && representation !== 'complete') {
    throw new RangeError("representation must be 'date', 'time', or 'complete'");
  }

  var result = '';
  var dateDelimiter = format === 'extended' ? '-' : '';
  var timeDelimiter = format === 'extended' ? ':' : ''; // Representation is either 'date' or 'complete'

  if (representation !== 'time') {
    var day = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(originalDate.getDate(), 2);
    var month = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(originalDate.getMonth() + 1, 2);
    var year = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(originalDate.getFullYear(), 4); // yyyyMMdd or yyyy-MM-dd.

    result = "".concat(year).concat(dateDelimiter).concat(month).concat(dateDelimiter).concat(day);
  } // Representation is either 'time' or 'complete'


  if (representation !== 'date') {
    var hour = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(originalDate.getHours(), 2);
    var minute = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(originalDate.getMinutes(), 2);
    var second = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(originalDate.getSeconds(), 2); // If there's also date, separate it with time with a space

    var separator = result === '' ? '' : ' '; // HHmmss or HH:mm:ss.

    result = "".concat(result).concat(separator).concat(hour).concat(timeDelimiter).concat(minute).concat(timeDelimiter).concat(second);
  }

  return result;
}

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__(0);

/**
 * @name formatISODuration
 * @category Common Helpers
 * @summary Format a duration object according as ISO 8601 duration string
 *
 * @description
 * Format a duration object according to the ISO 8601 duration standard (https://www.digi.com/resources/documentation/digidocs/90001437-13/reference/r_iso_8601_duration_format.htm)
 *
 * @param {Duration} duration - the duration to format
 *
 * @returns {String} The ISO 8601 duration string
 * @throws {TypeError} Requires 1 argument
 * @throws {Error} Argument must be an object
 *
 * @example
 * // Format the given duration as ISO 8601 string
 * formatISODuration({
 *   years: 39,
 *   months: 2,
 *   days: 20,
 *   hours: 7,
 *   minutes: 5,
 *   seconds: 0
 * })
 * //=> 'P39Y2M20DT0H0M0S'
 */

function formatISODuration(duration) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  if (typeof duration !== 'object') throw new Error('Duration must be an object');
  var _duration$years = duration.years,
      years = _duration$years === void 0 ? 0 : _duration$years,
      _duration$months = duration.months,
      months = _duration$months === void 0 ? 0 : _duration$months,
      _duration$days = duration.days,
      days = _duration$days === void 0 ? 0 : _duration$days,
      _duration$hours = duration.hours,
      hours = _duration$hours === void 0 ? 0 : _duration$hours,
      _duration$minutes = duration.minutes,
      minutes = _duration$minutes === void 0 ? 0 : _duration$minutes,
      _duration$seconds = duration.seconds,
      seconds = _duration$seconds === void 0 ? 0 : _duration$seconds;
  return "P".concat(years, "Y").concat(months, "M").concat(days, "DT").concat(hours, "H").concat(minutes, "M").concat(seconds, "S");
}

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isValid_index_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_toInteger_index_js__ = __webpack_require__(2);




/**
 * @name formatRFC3339
 * @category Common Helpers
 * @summary Format the date according to the RFC 3339 standard (https://tools.ietf.org/html/rfc3339#section-5.6).
 *
 * @description
 * Return the formatted date string in RFC 3339 format. Options may be passed to control the parts and notations of the date.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {0|1|2|3} [options.fractionDigits=0] - number of digits after the decimal point after seconds
 * @returns {String} the formatted date string
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.fractionDigits` must be between 0 and 3
 *
 * @example
 * // Represent 18 September 2019 in RFC 3339 format:
 * const result = formatRFC3339(new Date(2019, 8, 18, 19, 0, 52))
 * //=> '2019-09-18T19:00:52Z'
 *
 * @example
 * // Represent 18 September 2019 in RFC 3339 format, 2 digits of second fraction:
 * const result = formatRFC3339(new Date(2019, 8, 18, 19, 0, 52, 234), { fractionDigits: 2 })
 * //=> '2019-09-18T19:00:52.23Z'
 *
 * @example
 * // Represent 18 September 2019 in RFC 3339 format, 3 digits of second fraction
 * const result = formatRFC3339(new Date(2019, 8, 18, 19, 0, 52, 234), { fractionDigits: 3 })
 * //=> '2019-09-18T19:00:52.234Z'
 */

function formatRFC3339(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError("1 arguments required, but only ".concat(arguments.length, " present"));
  }

  var originalDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);

  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isValid_index_js__["a" /* default */])(originalDate)) {
    throw new RangeError('Invalid time value');
  }

  var options = dirtyOptions || {};
  var fractionDigits = options.fractionDigits == null ? 0 : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_toInteger_index_js__["a" /* default */])(options.fractionDigits); // Test if fractionDigits is between 0 and 3 _and_ is not NaN

  if (!(fractionDigits >= 0 && fractionDigits <= 3)) {
    throw new RangeError('fractionDigits must be between 0 and 3 inclusively');
  }

  var day = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(originalDate.getDate(), 2);
  var month = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(originalDate.getMonth() + 1, 2);
  var year = originalDate.getFullYear();
  var hour = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(originalDate.getHours(), 2);
  var minute = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(originalDate.getMinutes(), 2);
  var second = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(originalDate.getSeconds(), 2);
  var fractionalSecond = '';

  if (fractionDigits > 0) {
    var milliseconds = originalDate.getMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, fractionDigits - 3));
    fractionalSecond = '.' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(fractionalSeconds, fractionDigits);
  }

  var offset = '';
  var tzOffset = originalDate.getTimezoneOffset();

  if (tzOffset !== 0) {
    var absoluteOffset = Math.abs(tzOffset);
    var hourOffset = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_toInteger_index_js__["a" /* default */])(absoluteOffset / 60), 2);
    var minuteOffset = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(absoluteOffset % 60, 2); // If less than 0, the sign is +, because it is ahead of time.

    var sign = tzOffset < 0 ? '+' : '-';
    offset = "".concat(sign).concat(hourOffset, ":").concat(minuteOffset);
  } else {
    offset = 'Z';
  }

  return "".concat(year, "-").concat(month, "-").concat(day, "T").concat(hour, ":").concat(minute, ":").concat(second).concat(fractionalSecond).concat(offset);
}

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isValid_index_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__ = __webpack_require__(13);



var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
/**
 * @name formatRFC7231
 * @category Common Helpers
 * @summary Format the date according to the RFC 7231 standard (https://tools.ietf.org/html/rfc7231#section-7.1.1.1).
 *
 * @description
 * Return the formatted date string in RFC 7231 format.
 * The result will always be in UTC timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {String} the formatted date string
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `date` must not be Invalid Date
 *
 * @example
 * // Represent 18 September 2019 in RFC 7231 format:
 * const result = formatRFC7231(new Date(2019, 8, 18, 19, 0, 52))
 * //=> 'Wed, 18 Sep 2019 19:00:52 GMT'
 */

function formatRFC7231(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError("1 arguments required, but only ".concat(arguments.length, " present"));
  }

  var originalDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);

  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isValid_index_js__["a" /* default */])(originalDate)) {
    throw new RangeError('Invalid time value');
  }

  var dayName = days[originalDate.getUTCDay()];
  var dayOfMonth = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(originalDate.getUTCDate(), 2);
  var monthName = months[originalDate.getUTCMonth()];
  var year = originalDate.getUTCFullYear();
  var hour = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(originalDate.getUTCHours(), 2);
  var minute = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(originalDate.getUTCMinutes(), 2);
  var second = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(originalDate.getUTCSeconds(), 2); // Result variables.

  return "".concat(dayName, ", ").concat(dayOfMonth, " ").concat(monthName, " ").concat(year, " ").concat(hour, ":").concat(minute, ":").concat(second, " GMT");
}

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__differenceInCalendarDays_index_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__format_index_js__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__locale_en_US_index_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__subMilliseconds_index_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_getTimezoneOffsetInMilliseconds_index_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_requiredArgs_index_js__ = __webpack_require__(0);








/**
 * @name formatRelative
 * @category Common Helpers
 * @summary Represent the date in words relative to the given base date.
 *
 * @description
 * Represent the date in words relative to the given base date.
 *
 * | Distance to the base date | Result                    |
 * |---------------------------|---------------------------|
 * | Previous 6 days           | last Sunday at 04:30 AM   |
 * | Last day                  | yesterday at 04:30 AM     |
 * | Same day                  | today at 04:30 AM         |
 * | Next day                  | tomorrow at 04:30 AM      |
 * | Next 6 days               | Sunday at 04:30 AM        |
 * | Other                     | 12/31/2017                |
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to format
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {String} the date in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.locale` must contain `formatRelative` property
 *
 * @example
 * // Represent the date of 6 days ago in words relative to the given base date. In this example, today is Wednesday
 * const result = formatRelative(addDays(new Date(), -6), new Date())
 * //=> "last Thursday at 12:45 AM"
 */
function formatRelative(dirtyDate, dirtyBaseDate, dirtyOptions) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__toDate_index_js__["a" /* default */])(dirtyDate);
  var baseDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__toDate_index_js__["a" /* default */])(dirtyBaseDate);

  var _ref = dirtyOptions || {},
      _ref$locale = _ref.locale,
      locale = _ref$locale === void 0 ? __WEBPACK_IMPORTED_MODULE_2__locale_en_US_index_js__["a" /* default */] : _ref$locale,
      _ref$weekStartsOn = _ref.weekStartsOn,
      weekStartsOn = _ref$weekStartsOn === void 0 ? 0 : _ref$weekStartsOn;

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  if (!locale.formatRelative) {
    throw new RangeError('locale must contain formatRelative property');
  }

  var diff = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__differenceInCalendarDays_index_js__["a" /* default */])(date, baseDate);

  if (isNaN(diff)) {
    throw new RangeError('Invalid time value');
  }

  var token;

  if (diff < -6) {
    token = 'other';
  } else if (diff < -1) {
    token = 'lastWeek';
  } else if (diff < 0) {
    token = 'yesterday';
  } else if (diff < 1) {
    token = 'today';
  } else if (diff < 2) {
    token = 'tomorrow';
  } else if (diff < 7) {
    token = 'nextWeek';
  } else {
    token = 'other';
  }

  var utcDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__subMilliseconds_index_js__["a" /* default */])(date, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__lib_getTimezoneOffsetInMilliseconds_index_js__["a" /* default */])(date));
  var utcBaseDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__subMilliseconds_index_js__["a" /* default */])(baseDate, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__lib_getTimezoneOffsetInMilliseconds_index_js__["a" /* default */])(baseDate));
  var formatStr = locale.formatRelative(token, utcDate, utcBaseDate, {
    locale: locale,
    weekStartsOn: weekStartsOn
  });
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__format_index_js__["a" /* default */])(date, formatStr, {
    locale: locale,
    weekStartsOn: weekStartsOn
  });
}

/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);



/**
 * @name fromUnixTime
 * @category Timestamp Helpers
 * @summary Create a date from a Unix timestamp.
 *
 * @description
 * Create a date from a Unix timestamp.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Number} unixTime - the given Unix timestamp
 * @returns {Date} the date
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Create the date 29 February 2012 11:45:05:
 * var result = fromUnixTime(1330515905)
 * //=> Wed Feb 29 2012 11:45:05
 */

function fromUnixTime(dirtyUnixTime) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var unixTime = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_toInteger_index_js__["a" /* default */])(dirtyUnixTime);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(unixTime * 1000);
}

/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__startOfYear_index_js__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__differenceInCalendarDays_index_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__(0);




/**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the day of year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */

function getDayOfYear(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var diff = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__differenceInCalendarDays_index_js__["a" /* default */])(date, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__startOfYear_index_js__["a" /* default */])(date));
  var dayOfYear = diff + 1;
  return dayOfYear;
}

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isLeapYear_index_js__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);



/**
 * @name getDaysInYear
 * @category Year Helpers
 * @summary Get the number of days in a year of the given date.
 *
 * @description
 * Get the number of days in a year of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the number of days in a year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // How many days are in 2012?
 * const result = getDaysInYear(new Date(2012, 0, 1))
 * //=> 366
 */

function getDaysInYear(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);

  if (String(new Date(date)) === 'Invalid Date') {
    return NaN;
  }

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isLeapYear_index_js__["a" /* default */])(date) ? 366 : 365;
}

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name getDecade
 * @category Decade Helpers
 * @summary Get the decade of the given date.
 *
 * @description
 * Get the decade of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the year of decade
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which decade belongs 27 November 1942?
 * const result = getDecade(new Date(1942, 10, 27))
 * //=> 1940
 */

function getDecade(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var year = date.getFullYear();
  var decade = Math.floor(year / 10) * 10;
  return decade;
}

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name getHours
 * @category Hour Helpers
 * @summary Get the hours of the given date.
 *
 * @description
 * Get the hours of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the hours
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the hours of 29 February 2012 11:45:00:
 * const result = getHours(new Date(2012, 1, 29, 11, 45))
 * //=> 11
 */

function getHours(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var hours = date.getHours();
  return hours;
}

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__startOfISOWeekYear_index_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addWeeks_index_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);



var MILLISECONDS_IN_WEEK = 604800000;
/**
 * @name getISOWeeksInYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of weeks in an ISO week-numbering year of the given date.
 *
 * @description
 * Get the number of weeks in an ISO week-numbering year of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the number of ISO weeks in a year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // How many weeks are in ISO week-numbering year 2015?
 * const result = getISOWeeksInYear(new Date(2015, 1, 11))
 * //=> 53
 */

function getISOWeeksInYear(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var thisYear = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__startOfISOWeekYear_index_js__["a" /* default */])(dirtyDate);
  var nextYear = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__startOfISOWeekYear_index_js__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__addWeeks_index_js__["a" /* default */])(thisYear, 60));
  var diff = nextYear.valueOf() - thisYear.valueOf(); // Round the number of weeks to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK);
}

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name getMilliseconds
 * @category Millisecond Helpers
 * @summary Get the milliseconds of the given date.
 *
 * @description
 * Get the milliseconds of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the milliseconds
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the milliseconds of 29 February 2012 11:45:05.123:
 * const result = getMilliseconds(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 123
 */

function getMilliseconds(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var milliseconds = date.getMilliseconds();
  return milliseconds;
}

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name getMinutes
 * @category Minute Helpers
 * @summary Get the minutes of the given date.
 *
 * @description
 * Get the minutes of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the minutes
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the minutes of 29 February 2012 11:45:05:
 * const result = getMinutes(new Date(2012, 1, 29, 11, 45, 5))
 * //=> 45
 */

function getMinutes(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var minutes = date.getMinutes();
  return minutes;
}

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name getMonth
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which month is 29 February 2012?
 * const result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */

function getMonth(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var month = date.getMonth();
  return month;
}

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


var MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;
/**
 * @name getOverlappingDaysInIntervals
 * @category Interval Helpers
 * @summary Get the number of days that overlap in two time intervals
 *
 * @description
 * Get the number of days that overlap in two time intervals
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `getOverlappingDaysInRanges` to `getOverlappingDaysInIntervals`.
 *   This change was made to mirror the use of the word "interval" in standard ISO 8601:2004 terminology:
 *
 *   ```
 *   2.1.3
 *   time interval
 *   part of the time axis limited by two instants
 *   ```
 *
 *   Also, this function now accepts an object with `start` and `end` properties
 *   instead of two arguments as an interval.
 *   This function now throws `RangeError` if the start of the interval is after its end
 *   or if any date in the interval is `Invalid Date`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   getOverlappingDaysInRanges(
 *     new Date(2014, 0, 10), new Date(2014, 0, 20),
 *     new Date(2014, 0, 17), new Date(2014, 0, 21)
 *   )
 *
 *   // v2.0.0 onward
 *
 *   getOverlappingDaysInIntervals(
 *     { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *     { start: new Date(2014, 0, 17), end: new Date(2014, 0, 21) }
 *   )
 *   ```
 *
 * @param {Interval} intervalLeft - the first interval to compare. See [Interval]{@link docs/Interval}
 * @param {Interval} intervalRight - the second interval to compare. See [Interval]{@link docs/Interval}
 * @returns {Number} the number of days that overlap in two time intervals
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // For overlapping time intervals adds 1 for each started overlapping day:
 * getOverlappingDaysInIntervals(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 17), end: new Date(2014, 0, 21) }
 * )
 * //=> 3
 *
 * @example
 * // For non-overlapping time intervals returns 0:
 * getOverlappingDaysInIntervals(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 21), end: new Date(2014, 0, 22) }
 * )
 * //=> 0
 */

function getOverlappingDaysInIntervals(dirtyIntervalLeft, dirtyIntervalRight) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var intervalLeft = dirtyIntervalLeft || {};
  var intervalRight = dirtyIntervalRight || {};
  var leftStartTime = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(intervalLeft.start).getTime();
  var leftEndTime = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(intervalLeft.end).getTime();
  var rightStartTime = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(intervalRight.start).getTime();
  var rightEndTime = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(intervalRight.end).getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(leftStartTime <= leftEndTime && rightStartTime <= rightEndTime)) {
    throw new RangeError('Invalid interval');
  }

  var isOverlapping = leftStartTime < rightEndTime && rightStartTime < leftEndTime;

  if (!isOverlapping) {
    return 0;
  }

  var overlapStartDate = rightStartTime < leftStartTime ? leftStartTime : rightStartTime;
  var overlapEndDate = rightEndTime > leftEndTime ? leftEndTime : rightEndTime;
  var differenceInMs = overlapEndDate - overlapStartDate;
  return Math.ceil(differenceInMs / MILLISECONDS_IN_DAY);
}

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name getSeconds
 * @category Second Helpers
 * @summary Get the seconds of the given date.
 *
 * @description
 * Get the seconds of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the seconds
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the seconds of 29 February 2012 11:45:05.123:
 * const result = getSeconds(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 5
 */

function getSeconds(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var seconds = date.getSeconds();
  return seconds;
}

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getTime_index_js__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name getUnixTime
 * @category Timestamp Helpers
 * @summary Get the seconds timestamp of the given date.
 *
 * @description
 * Get the seconds timestamp of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the timestamp
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the timestamp of 29 February 2012 11:45:05 CET:
 * const result = getUnixTime(new Date(2012, 1, 29, 11, 45, 5))
 * //=> 1330512305
 */

function getUnixTime(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Math.floor(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getTime_index_js__["a" /* default */])(dirtyDate) / 1000);
}

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getDate_index_js__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getDay_index_js__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__startOfMonth_index_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_requiredArgs_index_js__ = __webpack_require__(0);





/**
 * @name getWeekOfMonth
 * @category Week Helpers
 * @summary Get the week of the month of the given date.
 *
 * @description
 * Get the week of the month of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Number} the week of month
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Which week of the month is 9 November 2017?
 * var result = getWeekOfMonth(new Date(2017, 10, 9))
 * //=> 2
 */

function getWeekOfMonth(date, dirtyOptions) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_toInteger_index_js__["a" /* default */])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_toInteger_index_js__["a" /* default */])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var currentDayOfMonth = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getDate_index_js__["a" /* default */])(date);

  if (isNaN(currentDayOfMonth)) {
    return currentDayOfMonth;
  }

  var startWeekDay = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getDay_index_js__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__startOfMonth_index_js__["a" /* default */])(date));
  var lastDayOfFirstWeek = 0;

  if (startWeekDay >= weekStartsOn) {
    lastDayOfFirstWeek = weekStartsOn + 7 - startWeekDay;
  } else {
    lastDayOfFirstWeek = weekStartsOn - startWeekDay;
  }

  var weekNumber = 1;

  if (currentDayOfMonth > lastDayOfFirstWeek) {
    var remainingDaysAfterFirstWeek = currentDayOfMonth - lastDayOfFirstWeek;
    weekNumber = weekNumber + Math.ceil(remainingDaysAfterFirstWeek / 7);
  }

  return weekNumber;
}

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__differenceInCalendarWeeks_index_js__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lastDayOfMonth_index_js__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__startOfMonth_index_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__(0);





/**
 * @name getWeeksInMonth
 * @category Week Helpers
 * @summary Get the number of calendar weeks a month spans.
 *
 * @description
 * Get the number of calendar weeks the month in the given date spans.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Number} the number of calendar weeks
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // How many calendar weeks does February 2015 span?
 * const result = getWeeksInMonth(new Date(2015, 1, 8))
 * //=> 4
 *
 * @example
 * // If the week starts on Monday,
 * // how many calendar weeks does July 2017 span?
 * const result = getWeeksInMonth(new Date(2017, 6, 5), { weekStartsOn: 1 })
 * //=> 6
 */
function getWeeksInMonth(date, options) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__differenceInCalendarWeeks_index_js__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lastDayOfMonth_index_js__["a" /* default */])(date), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__startOfMonth_index_js__["a" /* default */])(date), options) + 1;
}

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name getYear
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which year is 2 July 2014?
 * const result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */

function getYear(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var year = date.getFullYear();
  return year;
}

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index_js__ = __webpack_require__(3);


/**
 * @name hoursToMilliseconds
 * @category  Conversion Helpers
 * @summary Convert hours to milliseconds.
 *
 * @description
 * Convert a number of hours to a full number of milliseconds.
 *
 * @param {number} hours - number of hours to be converted
 *
 * @returns {number} the number of hours converted to milliseconds
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 2 hours to milliseconds:
 * const result = hoursToMilliseconds(2)
 * //=> 7200000
 */

function hoursToMilliseconds(hours) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Math.floor(hours * __WEBPACK_IMPORTED_MODULE_1__constants_index_js__["j" /* millisecondsInHour */]);
}

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index_js__ = __webpack_require__(3);


/**
 * @name hoursToMinutes
 * @category Conversion Helpers
 * @summary Convert hours to minutes.
 *
 * @description
 * Convert a number of hours to a full number of minutes.
 *
 * @param {number} hours - number of hours to be converted
 *
 * @returns {number} the number of hours converted in minutes
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 2 hours to minutes:
 * const result = hoursToMinutes(2)
 * //=> 120
 */

function hoursToMinutes(hours) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Math.floor(hours * __WEBPACK_IMPORTED_MODULE_1__constants_index_js__["i" /* minutesInHour */]);
}

/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index_js__ = __webpack_require__(3);


/**
 * @name hoursToSeconds
 * @category Conversion Helpers
 * @summary Convert hours to seconds.
 *
 * @description
 * Convert a number of hours to a full number of seconds.
 *
 * @param {number} hours - number of hours to be converted
 *
 * @returns {number} the number of hours converted in seconds
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 2 hours to seconds:
 * const result = hoursToSeconds(2)
 * //=> 7200
 */

function hoursToSeconds(hours) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Math.floor(hours * __WEBPACK_IMPORTED_MODULE_1__constants_index_js__["f" /* secondsInHour */]);
}

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_index_js__ = __webpack_require__(124);
/* unused harmony reexport add */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addBusinessDays_index_js__ = __webpack_require__(56);
/* unused harmony reexport addBusinessDays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addDays_index_js__ = __webpack_require__(6);
/* unused harmony reexport addDays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addHours_index_js__ = __webpack_require__(30);
/* unused harmony reexport addHours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addISOWeekYears_index_js__ = __webpack_require__(57);
/* unused harmony reexport addISOWeekYears */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addMilliseconds_index_js__ = __webpack_require__(16);
/* unused harmony reexport addMilliseconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__addMinutes_index_js__ = __webpack_require__(31);
/* unused harmony reexport addMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__addMonths_index_js__ = __webpack_require__(17);
/* unused harmony reexport addMonths */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__addQuarters_index_js__ = __webpack_require__(32);
/* unused harmony reexport addQuarters */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__addSeconds_index_js__ = __webpack_require__(58);
/* unused harmony reexport addSeconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__addWeeks_index_js__ = __webpack_require__(23);
/* unused harmony reexport addWeeks */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__addYears_index_js__ = __webpack_require__(59);
/* unused harmony reexport addYears */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__areIntervalsOverlapping_index_js__ = __webpack_require__(125);
/* unused harmony reexport areIntervalsOverlapping */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__clamp_index_js__ = __webpack_require__(126);
/* unused harmony reexport clamp */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__closestIndexTo_index_js__ = __webpack_require__(127);
/* unused harmony reexport closestIndexTo */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__closestTo_index_js__ = __webpack_require__(128);
/* unused harmony reexport closestTo */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__compareAsc_index_js__ = __webpack_require__(10);
/* unused harmony reexport compareAsc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__compareDesc_index_js__ = __webpack_require__(129);
/* unused harmony reexport compareDesc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__daysToWeeks_index_js__ = __webpack_require__(130);
/* unused harmony reexport daysToWeeks */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__differenceInBusinessDays_index_js__ = __webpack_require__(131);
/* unused harmony reexport differenceInBusinessDays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__differenceInCalendarDays_index_js__ = __webpack_require__(11);
/* unused harmony reexport differenceInCalendarDays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__differenceInCalendarISOWeekYears_index_js__ = __webpack_require__(60);
/* unused harmony reexport differenceInCalendarISOWeekYears */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__differenceInCalendarISOWeeks_index_js__ = __webpack_require__(132);
/* unused harmony reexport differenceInCalendarISOWeeks */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__differenceInCalendarMonths_index_js__ = __webpack_require__(61);
/* unused harmony reexport differenceInCalendarMonths */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__differenceInCalendarQuarters_index_js__ = __webpack_require__(133);
/* unused harmony reexport differenceInCalendarQuarters */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__differenceInCalendarWeeks_index_js__ = __webpack_require__(62);
/* unused harmony reexport differenceInCalendarWeeks */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__differenceInCalendarYears_index_js__ = __webpack_require__(63);
/* unused harmony reexport differenceInCalendarYears */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__differenceInDays_index_js__ = __webpack_require__(33);
/* unused harmony reexport differenceInDays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__differenceInHours_index_js__ = __webpack_require__(64);
/* unused harmony reexport differenceInHours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__differenceInISOWeekYears_index_js__ = __webpack_require__(134);
/* unused harmony reexport differenceInISOWeekYears */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__differenceInMilliseconds_index_js__ = __webpack_require__(24);
/* unused harmony reexport differenceInMilliseconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__differenceInMinutes_index_js__ = __webpack_require__(65);
/* unused harmony reexport differenceInMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__differenceInMonths_index_js__ = __webpack_require__(25);
/* unused harmony reexport differenceInMonths */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__differenceInQuarters_index_js__ = __webpack_require__(135);
/* unused harmony reexport differenceInQuarters */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__differenceInSeconds_index_js__ = __webpack_require__(34);
/* unused harmony reexport differenceInSeconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__differenceInWeeks_index_js__ = __webpack_require__(136);
/* unused harmony reexport differenceInWeeks */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__differenceInYears_index_js__ = __webpack_require__(66);
/* unused harmony reexport differenceInYears */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__eachDayOfInterval_index_js__ = __webpack_require__(67);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_37__eachDayOfInterval_index_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__eachHourOfInterval_index_js__ = __webpack_require__(137);
/* unused harmony reexport eachHourOfInterval */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__eachMinuteOfInterval_index_js__ = __webpack_require__(138);
/* unused harmony reexport eachMinuteOfInterval */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__eachMonthOfInterval_index_js__ = __webpack_require__(139);
/* unused harmony reexport eachMonthOfInterval */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__eachQuarterOfInterval_index_js__ = __webpack_require__(140);
/* unused harmony reexport eachQuarterOfInterval */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__eachWeekOfInterval_index_js__ = __webpack_require__(141);
/* unused harmony reexport eachWeekOfInterval */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__eachWeekendOfInterval_index_js__ = __webpack_require__(35);
/* unused harmony reexport eachWeekendOfInterval */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__eachWeekendOfMonth_index_js__ = __webpack_require__(142);
/* unused harmony reexport eachWeekendOfMonth */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__eachWeekendOfYear_index_js__ = __webpack_require__(143);
/* unused harmony reexport eachWeekendOfYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__eachYearOfInterval_index_js__ = __webpack_require__(144);
/* unused harmony reexport eachYearOfInterval */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__endOfDay_index_js__ = __webpack_require__(36);
/* unused harmony reexport endOfDay */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__endOfDecade_index_js__ = __webpack_require__(145);
/* unused harmony reexport endOfDecade */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__endOfHour_index_js__ = __webpack_require__(146);
/* unused harmony reexport endOfHour */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__endOfISOWeek_index_js__ = __webpack_require__(147);
/* unused harmony reexport endOfISOWeek */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__endOfISOWeekYear_index_js__ = __webpack_require__(148);
/* unused harmony reexport endOfISOWeekYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__endOfMinute_index_js__ = __webpack_require__(149);
/* unused harmony reexport endOfMinute */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__endOfMonth_index_js__ = __webpack_require__(37);
/* unused harmony reexport endOfMonth */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__endOfQuarter_index_js__ = __webpack_require__(150);
/* unused harmony reexport endOfQuarter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__endOfSecond_index_js__ = __webpack_require__(151);
/* unused harmony reexport endOfSecond */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__endOfToday_index_js__ = __webpack_require__(152);
/* unused harmony reexport endOfToday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__endOfTomorrow_index_js__ = __webpack_require__(153);
/* unused harmony reexport endOfTomorrow */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__endOfWeek_index_js__ = __webpack_require__(68);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_58__endOfWeek_index_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__endOfYear_index_js__ = __webpack_require__(69);
/* unused harmony reexport endOfYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__endOfYesterday_index_js__ = __webpack_require__(154);
/* unused harmony reexport endOfYesterday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__format_index_js__ = __webpack_require__(70);
/* unused harmony reexport format */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__formatDistance_index_js__ = __webpack_require__(71);
/* unused harmony reexport formatDistance */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__formatDistanceStrict_index_js__ = __webpack_require__(72);
/* unused harmony reexport formatDistanceStrict */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__formatDistanceToNow_index_js__ = __webpack_require__(155);
/* unused harmony reexport formatDistanceToNow */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__formatDistanceToNowStrict_index_js__ = __webpack_require__(156);
/* unused harmony reexport formatDistanceToNowStrict */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__formatDuration_index_js__ = __webpack_require__(157);
/* unused harmony reexport formatDuration */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__formatISO_index_js__ = __webpack_require__(158);
/* unused harmony reexport formatISO */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__formatISO9075_index_js__ = __webpack_require__(159);
/* unused harmony reexport formatISO9075 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__formatISODuration_index_js__ = __webpack_require__(160);
/* unused harmony reexport formatISODuration */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__formatRFC3339_index_js__ = __webpack_require__(161);
/* unused harmony reexport formatRFC3339 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__formatRFC7231_index_js__ = __webpack_require__(162);
/* unused harmony reexport formatRFC7231 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__formatRelative_index_js__ = __webpack_require__(163);
/* unused harmony reexport formatRelative */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__fromUnixTime_index_js__ = __webpack_require__(164);
/* unused harmony reexport fromUnixTime */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__getDate_index_js__ = __webpack_require__(73);
/* unused harmony reexport getDate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__getDay_index_js__ = __webpack_require__(38);
/* unused harmony reexport getDay */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__getDayOfYear_index_js__ = __webpack_require__(165);
/* unused harmony reexport getDayOfYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__getDaysInMonth_index_js__ = __webpack_require__(74);
/* unused harmony reexport getDaysInMonth */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__getDaysInYear_index_js__ = __webpack_require__(166);
/* unused harmony reexport getDaysInYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__getDecade_index_js__ = __webpack_require__(167);
/* unused harmony reexport getDecade */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__getHours_index_js__ = __webpack_require__(168);
/* unused harmony reexport getHours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__getISODay_index_js__ = __webpack_require__(75);
/* unused harmony reexport getISODay */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__getISOWeek_index_js__ = __webpack_require__(76);
/* unused harmony reexport getISOWeek */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__getISOWeekYear_index_js__ = __webpack_require__(14);
/* unused harmony reexport getISOWeekYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__getISOWeeksInYear_index_js__ = __webpack_require__(169);
/* unused harmony reexport getISOWeeksInYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__getMilliseconds_index_js__ = __webpack_require__(170);
/* unused harmony reexport getMilliseconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__getMinutes_index_js__ = __webpack_require__(171);
/* unused harmony reexport getMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__getMonth_index_js__ = __webpack_require__(172);
/* unused harmony reexport getMonth */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__getOverlappingDaysInIntervals_index_js__ = __webpack_require__(173);
/* unused harmony reexport getOverlappingDaysInIntervals */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__getQuarter_index_js__ = __webpack_require__(77);
/* unused harmony reexport getQuarter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__getSeconds_index_js__ = __webpack_require__(174);
/* unused harmony reexport getSeconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91__getTime_index_js__ = __webpack_require__(78);
/* unused harmony reexport getTime */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_92__getUnixTime_index_js__ = __webpack_require__(175);
/* unused harmony reexport getUnixTime */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_93__getWeek_index_js__ = __webpack_require__(79);
/* unused harmony reexport getWeek */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_94__getWeekOfMonth_index_js__ = __webpack_require__(176);
/* unused harmony reexport getWeekOfMonth */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_95__getWeekYear_index_js__ = __webpack_require__(80);
/* unused harmony reexport getWeekYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_96__getWeeksInMonth_index_js__ = __webpack_require__(177);
/* unused harmony reexport getWeeksInMonth */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_97__getYear_index_js__ = __webpack_require__(178);
/* unused harmony reexport getYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_98__hoursToMilliseconds_index_js__ = __webpack_require__(179);
/* unused harmony reexport hoursToMilliseconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_99__hoursToMinutes_index_js__ = __webpack_require__(180);
/* unused harmony reexport hoursToMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_100__hoursToSeconds_index_js__ = __webpack_require__(181);
/* unused harmony reexport hoursToSeconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_101__intervalToDuration_index_js__ = __webpack_require__(183);
/* unused harmony reexport intervalToDuration */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_102__intlFormat_index_js__ = __webpack_require__(184);
/* unused harmony reexport intlFormat */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_103__isAfter_index_js__ = __webpack_require__(185);
/* unused harmony reexport isAfter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_104__isBefore_index_js__ = __webpack_require__(186);
/* unused harmony reexport isBefore */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_105__isDate_index_js__ = __webpack_require__(187);
/* unused harmony reexport isDate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_106__isEqual_index_js__ = __webpack_require__(188);
/* unused harmony reexport isEqual */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_107__isExists_index_js__ = __webpack_require__(189);
/* unused harmony reexport isExists */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_108__isFirstDayOfMonth_index_js__ = __webpack_require__(190);
/* unused harmony reexport isFirstDayOfMonth */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_109__isFriday_index_js__ = __webpack_require__(191);
/* unused harmony reexport isFriday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_110__isFuture_index_js__ = __webpack_require__(192);
/* unused harmony reexport isFuture */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_111__isLastDayOfMonth_index_js__ = __webpack_require__(81);
/* unused harmony reexport isLastDayOfMonth */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_112__isLeapYear_index_js__ = __webpack_require__(82);
/* unused harmony reexport isLeapYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_113__isMatch_index_js__ = __webpack_require__(193);
/* unused harmony reexport isMatch */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_114__isMonday_index_js__ = __webpack_require__(194);
/* unused harmony reexport isMonday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_115__isPast_index_js__ = __webpack_require__(195);
/* unused harmony reexport isPast */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_116__isSameDay_index_js__ = __webpack_require__(18);
/* unused harmony reexport isSameDay */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_117__isSameHour_index_js__ = __webpack_require__(83);
/* unused harmony reexport isSameHour */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_118__isSameISOWeek_index_js__ = __webpack_require__(84);
/* unused harmony reexport isSameISOWeek */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_119__isSameISOWeekYear_index_js__ = __webpack_require__(196);
/* unused harmony reexport isSameISOWeekYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_120__isSameMinute_index_js__ = __webpack_require__(85);
/* unused harmony reexport isSameMinute */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_121__isSameMonth_index_js__ = __webpack_require__(86);
/* unused harmony reexport isSameMonth */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_122__isSameQuarter_index_js__ = __webpack_require__(87);
/* unused harmony reexport isSameQuarter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_123__isSameSecond_index_js__ = __webpack_require__(88);
/* unused harmony reexport isSameSecond */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_124__isSameWeek_index_js__ = __webpack_require__(39);
/* unused harmony reexport isSameWeek */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_125__isSameYear_index_js__ = __webpack_require__(89);
/* unused harmony reexport isSameYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_126__isSaturday_index_js__ = __webpack_require__(90);
/* unused harmony reexport isSaturday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_127__isSunday_index_js__ = __webpack_require__(40);
/* unused harmony reexport isSunday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_128__isThisHour_index_js__ = __webpack_require__(197);
/* unused harmony reexport isThisHour */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_129__isThisISOWeek_index_js__ = __webpack_require__(198);
/* unused harmony reexport isThisISOWeek */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_130__isThisMinute_index_js__ = __webpack_require__(199);
/* unused harmony reexport isThisMinute */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_131__isThisMonth_index_js__ = __webpack_require__(200);
/* unused harmony reexport isThisMonth */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_132__isThisQuarter_index_js__ = __webpack_require__(201);
/* unused harmony reexport isThisQuarter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_133__isThisSecond_index_js__ = __webpack_require__(202);
/* unused harmony reexport isThisSecond */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_134__isThisWeek_index_js__ = __webpack_require__(203);
/* unused harmony reexport isThisWeek */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_135__isThisYear_index_js__ = __webpack_require__(204);
/* unused harmony reexport isThisYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_136__isThursday_index_js__ = __webpack_require__(205);
/* unused harmony reexport isThursday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_137__isToday_index_js__ = __webpack_require__(206);
/* unused harmony reexport isToday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_138__isTomorrow_index_js__ = __webpack_require__(207);
/* unused harmony reexport isTomorrow */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_139__isTuesday_index_js__ = __webpack_require__(208);
/* unused harmony reexport isTuesday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_140__isValid_index_js__ = __webpack_require__(4);
/* unused harmony reexport isValid */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_141__isWednesday_index_js__ = __webpack_require__(209);
/* unused harmony reexport isWednesday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_142__isWeekend_index_js__ = __webpack_require__(26);
/* unused harmony reexport isWeekend */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_143__isWithinInterval_index_js__ = __webpack_require__(210);
/* unused harmony reexport isWithinInterval */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_144__isYesterday_index_js__ = __webpack_require__(211);
/* unused harmony reexport isYesterday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_145__lastDayOfDecade_index_js__ = __webpack_require__(212);
/* unused harmony reexport lastDayOfDecade */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_146__lastDayOfISOWeek_index_js__ = __webpack_require__(213);
/* unused harmony reexport lastDayOfISOWeek */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_147__lastDayOfISOWeekYear_index_js__ = __webpack_require__(214);
/* unused harmony reexport lastDayOfISOWeekYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_148__lastDayOfMonth_index_js__ = __webpack_require__(91);
/* unused harmony reexport lastDayOfMonth */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_149__lastDayOfQuarter_index_js__ = __webpack_require__(215);
/* unused harmony reexport lastDayOfQuarter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_150__lastDayOfWeek_index_js__ = __webpack_require__(92);
/* unused harmony reexport lastDayOfWeek */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_151__lastDayOfYear_index_js__ = __webpack_require__(216);
/* unused harmony reexport lastDayOfYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_152__lightFormat_index_js__ = __webpack_require__(217);
/* unused harmony reexport lightFormat */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_153__max_index_js__ = __webpack_require__(93);
/* unused harmony reexport max */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_154__milliseconds_index_js__ = __webpack_require__(227);
/* unused harmony reexport milliseconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_155__millisecondsToHours_index_js__ = __webpack_require__(228);
/* unused harmony reexport millisecondsToHours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_156__millisecondsToMinutes_index_js__ = __webpack_require__(229);
/* unused harmony reexport millisecondsToMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_157__millisecondsToSeconds_index_js__ = __webpack_require__(230);
/* unused harmony reexport millisecondsToSeconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_158__min_index_js__ = __webpack_require__(94);
/* unused harmony reexport min */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_159__minutesToHours_index_js__ = __webpack_require__(231);
/* unused harmony reexport minutesToHours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_160__minutesToMilliseconds_index_js__ = __webpack_require__(232);
/* unused harmony reexport minutesToMilliseconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_161__minutesToSeconds_index_js__ = __webpack_require__(233);
/* unused harmony reexport minutesToSeconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_162__monthsToQuarters_index_js__ = __webpack_require__(234);
/* unused harmony reexport monthsToQuarters */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_163__monthsToYears_index_js__ = __webpack_require__(235);
/* unused harmony reexport monthsToYears */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_164__nextDay_index_js__ = __webpack_require__(8);
/* unused harmony reexport nextDay */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_165__nextFriday_index_js__ = __webpack_require__(236);
/* unused harmony reexport nextFriday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_166__nextMonday_index_js__ = __webpack_require__(237);
/* unused harmony reexport nextMonday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_167__nextSaturday_index_js__ = __webpack_require__(238);
/* unused harmony reexport nextSaturday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_168__nextSunday_index_js__ = __webpack_require__(239);
/* unused harmony reexport nextSunday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_169__nextThursday_index_js__ = __webpack_require__(240);
/* unused harmony reexport nextThursday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_170__nextTuesday_index_js__ = __webpack_require__(241);
/* unused harmony reexport nextTuesday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_171__nextWednesday_index_js__ = __webpack_require__(242);
/* unused harmony reexport nextWednesday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_172__parse_index_js__ = __webpack_require__(95);
/* unused harmony reexport parse */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_173__parseISO_index_js__ = __webpack_require__(244);
/* unused harmony reexport parseISO */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_174__parseJSON_index_js__ = __webpack_require__(245);
/* unused harmony reexport parseJSON */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_175__quartersToMonths_index_js__ = __webpack_require__(246);
/* unused harmony reexport quartersToMonths */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_176__quartersToYears_index_js__ = __webpack_require__(247);
/* unused harmony reexport quartersToYears */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_177__roundToNearestMinutes_index_js__ = __webpack_require__(248);
/* unused harmony reexport roundToNearestMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_178__secondsToHours_index_js__ = __webpack_require__(249);
/* unused harmony reexport secondsToHours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_179__secondsToMilliseconds_index_js__ = __webpack_require__(250);
/* unused harmony reexport secondsToMilliseconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_180__secondsToMinutes_index_js__ = __webpack_require__(251);
/* unused harmony reexport secondsToMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_181__set_index_js__ = __webpack_require__(252);
/* unused harmony reexport set */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_182__setDate_index_js__ = __webpack_require__(253);
/* unused harmony reexport setDate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_183__setDay_index_js__ = __webpack_require__(254);
/* unused harmony reexport setDay */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_184__setDayOfYear_index_js__ = __webpack_require__(255);
/* unused harmony reexport setDayOfYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_185__setHours_index_js__ = __webpack_require__(256);
/* unused harmony reexport setHours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_186__setISODay_index_js__ = __webpack_require__(257);
/* unused harmony reexport setISODay */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_187__setISOWeek_index_js__ = __webpack_require__(258);
/* unused harmony reexport setISOWeek */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_188__setISOWeekYear_index_js__ = __webpack_require__(96);
/* unused harmony reexport setISOWeekYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_189__setMilliseconds_index_js__ = __webpack_require__(259);
/* unused harmony reexport setMilliseconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_190__setMinutes_index_js__ = __webpack_require__(260);
/* unused harmony reexport setMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_191__setMonth_index_js__ = __webpack_require__(41);
/* unused harmony reexport setMonth */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_192__setQuarter_index_js__ = __webpack_require__(261);
/* unused harmony reexport setQuarter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_193__setSeconds_index_js__ = __webpack_require__(262);
/* unused harmony reexport setSeconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_194__setWeek_index_js__ = __webpack_require__(263);
/* unused harmony reexport setWeek */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_195__setWeekYear_index_js__ = __webpack_require__(264);
/* unused harmony reexport setWeekYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_196__setYear_index_js__ = __webpack_require__(265);
/* unused harmony reexport setYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_197__startOfDay_index_js__ = __webpack_require__(27);
/* unused harmony reexport startOfDay */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_198__startOfDecade_index_js__ = __webpack_require__(266);
/* unused harmony reexport startOfDecade */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_199__startOfHour_index_js__ = __webpack_require__(97);
/* unused harmony reexport startOfHour */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_200__startOfISOWeek_index_js__ = __webpack_require__(12);
/* unused harmony reexport startOfISOWeek */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_201__startOfISOWeekYear_index_js__ = __webpack_require__(19);
/* unused harmony reexport startOfISOWeekYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_202__startOfMinute_index_js__ = __webpack_require__(42);
/* unused harmony reexport startOfMinute */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_203__startOfMonth_index_js__ = __webpack_require__(28);
/* unused harmony reexport startOfMonth */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_204__startOfQuarter_index_js__ = __webpack_require__(43);
/* unused harmony reexport startOfQuarter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_205__startOfSecond_index_js__ = __webpack_require__(98);
/* unused harmony reexport startOfSecond */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_206__startOfToday_index_js__ = __webpack_require__(267);
/* unused harmony reexport startOfToday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_207__startOfTomorrow_index_js__ = __webpack_require__(268);
/* unused harmony reexport startOfTomorrow */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_208__startOfWeek_index_js__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_208__startOfWeek_index_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_209__startOfWeekYear_index_js__ = __webpack_require__(44);
/* unused harmony reexport startOfWeekYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_210__startOfYear_index_js__ = __webpack_require__(45);
/* unused harmony reexport startOfYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_211__startOfYesterday_index_js__ = __webpack_require__(269);
/* unused harmony reexport startOfYesterday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_212__sub_index_js__ = __webpack_require__(99);
/* unused harmony reexport sub */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_213__subBusinessDays_index_js__ = __webpack_require__(270);
/* unused harmony reexport subBusinessDays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_214__subDays_index_js__ = __webpack_require__(46);
/* unused harmony reexport subDays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_215__subHours_index_js__ = __webpack_require__(271);
/* unused harmony reexport subHours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_216__subISOWeekYears_index_js__ = __webpack_require__(100);
/* unused harmony reexport subISOWeekYears */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_217__subMilliseconds_index_js__ = __webpack_require__(20);
/* unused harmony reexport subMilliseconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_218__subMinutes_index_js__ = __webpack_require__(272);
/* unused harmony reexport subMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_219__subMonths_index_js__ = __webpack_require__(101);
/* unused harmony reexport subMonths */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_220__subQuarters_index_js__ = __webpack_require__(273);
/* unused harmony reexport subQuarters */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_221__subSeconds_index_js__ = __webpack_require__(274);
/* unused harmony reexport subSeconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_222__subWeeks_index_js__ = __webpack_require__(275);
/* unused harmony reexport subWeeks */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_223__subYears_index_js__ = __webpack_require__(276);
/* unused harmony reexport subYears */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_224__toDate_index_js__ = __webpack_require__(1);
/* unused harmony reexport toDate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_225__weeksToDays_index_js__ = __webpack_require__(277);
/* unused harmony reexport weeksToDays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_226__yearsToMonths_index_js__ = __webpack_require__(278);
/* unused harmony reexport yearsToMonths */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_227__yearsToQuarters_index_js__ = __webpack_require__(279);
/* unused harmony reexport yearsToQuarters */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_228__constants_index_js__ = __webpack_require__(3);
/* unused harmony namespace reexport */
// This file is generated automatically by `scripts/build/indices.js`. Please, don't change it.






































































































































































































































/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compareAsc_index_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__differenceInYears_index_js__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__differenceInMonths_index_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__differenceInDays_index_js__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__differenceInHours_index_js__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__differenceInMinutes_index_js__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__differenceInSeconds_index_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__isValid_index_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_requiredArgs_index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sub_index_js__ = __webpack_require__(99);











/**
 * @name intervalToDuration
 * @category Common Helpers
 * @summary Convert interval to duration
 *
 * @description
 * Convert a interval object to a duration object.
 *
 * @param {Interval} interval - the interval to convert to duration
 *
 * @returns {Duration} The duration Object
 * @throws {TypeError} Requires 2 arguments
 * @throws {RangeError} `start` must not be Invalid Date
 * @throws {RangeError} `end` must not be Invalid Date
 *
 * @example
 * // Get the duration between January 15, 1929 and April 4, 1968.
 * intervalToDuration({
 *   start: new Date(1929, 0, 15, 12, 0, 0),
 *   end: new Date(1968, 3, 4, 19, 5, 0)
 * })
 * // => { years: 39, months: 2, days: 20, hours: 7, minutes: 5, seconds: 0 }
 */

function intervalToDuration(_ref) {
  var start = _ref.start,
      end = _ref.end;
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var dateLeft = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__toDate_index_js__["a" /* default */])(start);
  var dateRight = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__toDate_index_js__["a" /* default */])(end);

  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__isValid_index_js__["a" /* default */])(dateLeft)) {
    throw new RangeError('Start Date is invalid');
  }

  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__isValid_index_js__["a" /* default */])(dateRight)) {
    throw new RangeError('End Date is invalid');
  }

  var duration = {
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };
  var sign = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__compareAsc_index_js__["a" /* default */])(dateLeft, dateRight);
  duration.years = Math.abs(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__differenceInYears_index_js__["a" /* default */])(dateLeft, dateRight));
  var remainingMonths = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__sub_index_js__["a" /* default */])(dateLeft, {
    years: sign * duration.years
  });
  duration.months = Math.abs(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__differenceInMonths_index_js__["a" /* default */])(remainingMonths, dateRight));
  var remainingDays = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__sub_index_js__["a" /* default */])(remainingMonths, {
    months: sign * duration.months
  });
  duration.days = Math.abs(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__differenceInDays_index_js__["a" /* default */])(remainingDays, dateRight));
  var remainingHours = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__sub_index_js__["a" /* default */])(remainingDays, {
    days: sign * duration.days
  });
  duration.hours = Math.abs(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__differenceInHours_index_js__["a" /* default */])(remainingHours, dateRight));
  var remainingMinutes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__sub_index_js__["a" /* default */])(remainingHours, {
    hours: sign * duration.hours
  });
  duration.minutes = Math.abs(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__differenceInMinutes_index_js__["a" /* default */])(remainingMinutes, dateRight));
  var remainingSeconds = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__sub_index_js__["a" /* default */])(remainingMinutes, {
    minutes: sign * duration.minutes
  });
  duration.seconds = Math.abs(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__differenceInSeconds_index_js__["a" /* default */])(remainingSeconds, dateRight));
  return duration;
}

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name intlFormat
 * @category Common Helpers
 * @summary  Format the date with Intl.DateTimeFormat (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat).
 *
 * @description
 * Return the formatted date string in the given format.
 * The method uses [`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) inside.
 * formatOptions are the same as [`Intl.DateTimeFormat` options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#using_options)
 *
 * > ⚠️ Please note that before Node version 13.0.0, only the locale data for en-US is available by default.
 *
 * @param {Date|Number} argument - the original date.
 * @param {Object} [formatOptions] - an object with options.
 * @param {'lookup'|'best fit'} [formatOptions.localeMatcher='best fit'] - locale selection algorithm.
 * @param {'narrow'|'short'|'long'} [formatOptions.weekday] - representation the days of the week.
 * @param {'narrow'|'short'|'long'} [formatOptions.era] - representation of eras.
 * @param {'numeric'|'2-digit'} [formatOptions.year] - representation of years.
 * @param {'numeric'|'2-digit'|'narrow'|'short'|'long'} [formatOptions.month='numeric'] - representation of month.
 * @param {'numeric'|'2-digit'} [formatOptions.day='numeric'] - representation of day.
 * @param {'numeric'|'2-digit'} [formatOptions.hour='numeric'] - representation of hours.
 * @param {'numeric'|'2-digit'} [formatOptions.minute] - representation of minutes.
 * @param {'numeric'|'2-digit'} [formatOptions.second] - representation of seconds.
 * @param {'short'|'long'} [formatOptions.timeZoneName] - representation of names of time zones.
 * @param {'basic'|'best fit'} [formatOptions.formatMatcher='best fit'] - format selection algorithm.
 * @param {Boolean} [formatOptions.hour12] - determines whether to use 12-hour time format.
 * @param {String} [formatOptions.timeZone] - the time zone to use.
 * @param {Object} [localeOptions] - an object with locale.
 * @param {String|String[]} [localeOptions.locale] - the locale code
 * @returns {String} the formatted date string.
 * @throws {TypeError} 1 argument required.
 * @throws {RangeError} `date` must not be Invalid Date
 *
 * @example
 * // Represent 10 October 2019 in German.
 * // Convert the date with format's options and locale's options.
 * const result = intlFormat(new Date(2019, 9, 4, 12, 30, 13, 456), {
 *      weekday: 'long',
 *      year: 'numeric',
 *      month: 'long',
 *      day: 'numeric',
 *    }, {
 *      locale: 'de-DE',
 *  })
 * //=> Freitag, 4. Oktober 2019
 *
 * @example
 * // Represent 10 October 2019.
 * // Convert the date with format's options.
 * const result = intlFormat.default(new Date(2019, 9, 4, 12, 30, 13, 456), {
 *      year: 'numeric',
 *      month: 'numeric',
 *      day: 'numeric',
 *      hour: 'numeric',
 *  })
 * //=> 10/4/2019, 12 PM
 *
 * @example
 * // Represent 10 October 2019 in Korean.
 * // Convert the date with locale's options.
 * const result = intlFormat(new Date(2019, 9, 4, 12, 30, 13, 456), {
 *      locale: 'ko-KR',
 *  })
 * //=> 2019. 10. 4.
 *
 * @example
 * // Represent 10 October 2019 in middle-endian format:
 * const result = intlFormat(new Date(2019, 9, 4, 12, 30, 13, 456))
 * //=> 10/4/2019
 */
function intlFormat(date, formatOrLocale, localeOptions) {
  var _localeOptions;

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var formatOptions;

  if (isFormatOptions(formatOrLocale)) {
    formatOptions = formatOrLocale;
  } else {
    localeOptions = formatOrLocale;
  }

  return new Intl.DateTimeFormat((_localeOptions = localeOptions) === null || _localeOptions === void 0 ? void 0 : _localeOptions.locale, formatOptions).format(date);
}

function isFormatOptions(opts) {
  return opts !== undefined && !('locale' in opts);
}

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date that should be after the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is after the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * var result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */

function isAfter(dirtyDate, dirtyDateToCompare) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var dateToCompare = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateToCompare);
  return date.getTime() > dateToCompare.getTime();
}

/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date that should be before the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is before the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * var result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */

function isBefore(dirtyDate, dirtyDateToCompare) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var dateToCompare = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateToCompare);
  return date.getTime() < dateToCompare.getTime();
}

/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__(0);

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return value instanceof Date || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name isEqual
 * @category Common Helpers
 * @summary Are the given dates equal?
 *
 * @description
 * Are the given dates equal?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Boolean} the dates are equal
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
 * var result = isEqual(
 *   new Date(2014, 6, 2, 6, 30, 45, 0),
 *   new Date(2014, 6, 2, 6, 30, 45, 500)
 * )
 * //=> false
 */

function isEqual(dirtyLeftDate, dirtyRightDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateLeft = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyLeftDate);
  var dateRight = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyRightDate);
  return dateLeft.getTime() === dateRight.getTime();
}

/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/**
 * @name isExists
 * @category Common Helpers
 * @summary Is the given date exists?
 *
 * @description
 * Checks if the given arguments convert to an existing date.
 *
 * @param {Number} year of the date to check
 * @param {Number} month of the date to check
 * @param {Number} day of the date to check
 * @returns {Boolean} the date exists
 * @throws {TypeError} 3 arguments required
 *
 * @example
 * // For the valid date:
 * var result = isExists(2018, 0, 31)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isExists(2018, 1, 31)
 * //=> false
 */
function isExists(year, month, day) {
  if (arguments.length < 3) {
    throw new TypeError('3 argument required, but only ' + arguments.length + ' present');
  }

  var date = new Date(year, month, day);
  return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day;
}

/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name isFirstDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the first day of a month?
 *
 * @description
 * Is the given date the first day of a month?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is the first day of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 1 September 2014 the first day of a month?
 * var result = isFirstDayOfMonth(new Date(2014, 8, 1))
 * //=> true
 */

function isFirstDayOfMonth(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate).getDate() === 1;
}

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name isFriday
 * @category Weekday Helpers
 * @summary Is the given date Friday?
 *
 * @description
 * Is the given date Friday?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is Friday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 26 September 2014 Friday?
 * var result = isFriday(new Date(2014, 8, 26))
 * //=> true
 */

function isFriday(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate).getDay() === 5;
}

/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name isFuture
 * @category Common Helpers
 * @summary Is the given date in the future?
 * @pure false
 *
 * @description
 * Is the given date in the future?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in the future
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 31 December 2014 in the future?
 * var result = isFuture(new Date(2014, 11, 31))
 * //=> true
 */

function isFuture(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate).getTime() > Date.now();
}

/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parse_index_js__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isValid_index_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);




/**
 * @name isMatch
 * @category Common Helpers
 * @summary validates the date string against given formats
 *
 * @description
 * Return the true if given date is string correct against the given format else
 * will return false.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters in the format string wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the format string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 5 below the table).
 *
 * Not all tokens are compatible. Combinations that don't make sense or could lead to bugs are prohibited
 * and will throw `RangeError`. For example usage of 24-hour format token with AM/PM token will throw an exception:
 *
 * ```javascript
 * isMatch('23 AM', 'HH a')
 * //=> RangeError: The format string mustn't contain `HH` and `a` at the same time
 * ```
 *
 * See the compatibility table: https://docs.google.com/spreadsheets/d/e/2PACX-1vQOPU3xUhplll6dyoMmVUXHKl_8CRDs6_ueLmex3SoqwhuolkuN3O05l4rqx5h1dKX8eb46Ul-CCSrq/pubhtml?gid=0&single=true
 *
 * Accepted format string patterns:
 * | Unit                            |Prior| Pattern | Result examples                   | Notes |
 * |---------------------------------|-----|---------|-----------------------------------|-------|
 * | Era                             | 140 | G..GGG  | AD, BC                            |       |
 * |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 |     | GGGGG   | A, B                              |       |
 * | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
 * |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
 * |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
 * |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
 * |                                 |     | yyyyy   | ...                               | 2,4   |
 * | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
 * |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
 * |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
 * |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
 * |                                 |     | YYYYY   | ...                               | 2,4   |
 * | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
 * |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
 * |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
 * |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
 * |                                 |     | RRRRR   | ...                               | 2,4,5 |
 * | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
 * |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
 * |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
 * |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
 * |                                 |     | uuuuu   | ...                               | 2,4   |
 * | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
 * |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | QQ      | 01, 02, 03, 04                    |       |
 * |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
 * |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | qq      | 01, 02, 03, 04                    |       |
 * |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
 * | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
 * |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | MM      | 01, 02, ..., 12                   |       |
 * |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | MMMM    | January, February, ..., December  | 2     |
 * |                                 |     | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
 * |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | LL      | 01, 02, ..., 12                   |       |
 * |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | LLLL    | January, February, ..., December  | 2     |
 * |                                 |     | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
 * |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
 * |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | II      | 01, 02, ..., 53                   | 5     |
 * | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
 * |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
 * |                                 |     | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
 * |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
 * |                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
 * |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 |     | DDDD    | ...                               | 2     |
 * | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
 * |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
 * |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
 * |                                 |     | iii     | Mon, Tue, Wed, ..., Su            | 5     |
 * |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
 * |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
 * |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 5     |
 * | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | ee      | 02, 03, ..., 01                   |       |
 * |                                 |     | eee     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | cc      | 02, 03, ..., 01                   |       |
 * |                                 |     | ccc     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
 * |                                 |     | aaaa    | a.m., p.m.                        | 2     |
 * |                                 |     | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 |     | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
 * |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 |     | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
 * |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
 * |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
 * |                                 |     | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
 * |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
 * |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | mm      | 00, 01, ..., 59                   |       |
 * | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
 * |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | ss      | 00, 01, ..., 59                   |       |
 * | Seconds timestamp               |  40 | t       | 512969520                         |       |
 * |                                 |     | tt      | ...                               | 2     |
 * | Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
 * |                                 |     | SS      | 00, 01, ..., 99                   |       |
 * |                                 |     | SSS     | 000, 0001, ..., 999               |       |
 * |                                 |     | SSSS    | ...                               | 2     |
 * | Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
 * |                                 |     | TT      | ...                               | 2     |
 * | Timezone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
 * |                                 |     | XX      | -0800, +0530, Z                   |       |
 * |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
 * |                                 |     | xx      | -0800, +0530, +0000               |       |
 * |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
 * |                                 |     | PP      | May 29, 1453                      |       |
 * |                                 |     | PPP     | May 29th, 1453                    |       |
 * |                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
 * | Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
 * |                                 |     | pp      | 12:00:00 AM                       |       |
 * | Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
 * |                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
 * |                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
 * |                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular.
 *    In `format` function, they will produce different result:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 *    `isMatch` will try to match both formatting and stand-alone units interchangably.
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table:
 *    - for numerical units (`yyyyyyyy`) `isMatch` will try to match a number
 *      as wide as the sequence
 *    - for text units (`MMMMMMMM`) `isMatch` will try to match the widest variation of the unit.
 *      These variations are marked with "2" in the last column of the table.
 *
 * 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 4. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` will try to guess the century of two digit year by proximity with `referenceDate`:
 *
 *    `isMatch('50', 'yy') //=> true`
 *
 *    `isMatch('75', 'yy') //=> true`
 *
 *    while `uu` will use the year as is:
 *
 *    `isMatch('50', 'uu') //=> true`
 *
 *    `isMatch('75', 'uu') //=> true`
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [setISOWeekYear]{@link https://date-fns.org/docs/setISOWeekYear}
 *    and [setWeekYear]{@link https://date-fns.org/docs/setWeekYear}).
 *
 * 5. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 7. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
 *    on the given locale.
 *
 *    using `en-US` locale: `P` => `MM/dd/yyyy`
 *    using `en-US` locale: `p` => `hh:mm a`
 *    using `pt-BR` locale: `P` => `dd/MM/yyyy`
 *    using `pt-BR` locale: `p` => `HH:mm`
 *
 * Values will be checked in the descending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are matched (e.g. when matching string 'January 1st' without a year),
 * the values will be taken from today's using `new Date()` date which works as a context of parsing.
 *
 * The result may vary by locale.
 *
 * If `formatString` matches with `dateString` but does not provides tokens, `referenceDate` will be returned.
 *
 *
 *
 * @param {String} dateString - the date string to verify
 * @param {String} formatString - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {Boolean}
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} `options.locale` must contain `match` property
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Match 11 February 2014 from middle-endian format:
 * var result = isMatch('02/11/2014', 'MM/dd/yyyy')
 * //=> true
 *
 * @example
 * // Match 28th of February in Esperanto locale in the context of 2010 year:
 * import eo from 'date-fns/locale/eo'
 * var result = isMatch('28-a de februaro', "do 'de' MMMM", {
 *   locale: eo
 * })
 * //=> true
 */
function isMatch(dateString, formatString, options) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isValid_index_js__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__parse_index_js__["a" /* default */])(dateString, formatString, new Date(), options));
}

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name isMonday
 * @category Weekday Helpers
 * @summary Is the given date Monday?
 *
 * @description
 * Is the given date Monday?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is Monday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 22 September 2014 Monday?
 * var result = isMonday(new Date(2014, 8, 22))
 * //=> true
 */

function isMonday(date) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(date).getDay() === 1;
}

/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name isPast
 * @category Common Helpers
 * @summary Is the given date in the past?
 * @pure false
 *
 * @description
 * Is the given date in the past?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in the past
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 2 July 2014 in the past?
 * var result = isPast(new Date(2014, 6, 2))
 * //=> true
 */

function isPast(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate).getTime() < Date.now();
}

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__startOfISOWeekYear_index_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name isSameISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Are the given dates in the same ISO week-numbering year?
 *
 * @description
 * Are the given dates in the same ISO week-numbering year?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `isSameISOYear` to `isSameISOWeekYear`.
 *   "ISO week year" is short for [ISO week-numbering year](https://en.wikipedia.org/wiki/ISO_week_date).
 *   This change makes the name consistent with
 *   locale-dependent week-numbering year helpers, e.g., `getWeekYear`.
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same ISO week-numbering year
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 29 December 2003 and 2 January 2005 in the same ISO week-numbering year?
 * var result = isSameISOWeekYear(new Date(2003, 11, 29), new Date(2005, 0, 2))
 * //=> true
 */

function isSameISOWeekYear(dirtyDateLeft, dirtyDateRight) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateLeftStartOfYear = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__startOfISOWeekYear_index_js__["a" /* default */])(dirtyDateLeft);
  var dateRightStartOfYear = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__startOfISOWeekYear_index_js__["a" /* default */])(dirtyDateRight);
  return dateLeftStartOfYear.getTime() === dateRightStartOfYear.getTime();
}

/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isSameHour_index_js__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name isThisHour
 * @category Hour Helpers
 * @summary Is the given date in the same hour as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same hour as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in this hour
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:00:00 in this hour?
 * var result = isThisHour(new Date(2014, 8, 25, 18))
 * //=> true
 */

function isThisHour(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isSameHour_index_js__["a" /* default */])(Date.now(), dirtyDate);
}

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isSameISOWeek_index_js__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name isThisISOWeek
 * @category ISO Week Helpers
 * @summary Is the given date in the same ISO week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same ISO week as the current date?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in this ISO week
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 25 September 2014, is 22 September 2014 in this ISO week?
 * var result = isThisISOWeek(new Date(2014, 8, 22))
 * //=> true
 */

function isThisISOWeek(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isSameISOWeek_index_js__["a" /* default */])(dirtyDate, Date.now());
}

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isSameMinute_index_js__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name isThisMinute
 * @category Minute Helpers
 * @summary Is the given date in the same minute as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same minute as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in this minute
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:30:00 in this minute?
 * var result = isThisMinute(new Date(2014, 8, 25, 18, 30))
 * //=> true
 */

function isThisMinute(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isSameMinute_index_js__["a" /* default */])(Date.now(), dirtyDate);
}

/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isSameMonth_index_js__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name isThisMonth
 * @category Month Helpers
 * @summary Is the given date in the same month as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same month as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in this month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 25 September 2014, is 15 September 2014 in this month?
 * var result = isThisMonth(new Date(2014, 8, 15))
 * //=> true
 */

function isThisMonth(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isSameMonth_index_js__["a" /* default */])(Date.now(), dirtyDate);
}

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isSameQuarter_index_js__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name isThisQuarter
 * @category Quarter Helpers
 * @summary Is the given date in the same quarter as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same quarter as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in this quarter
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 25 September 2014, is 2 July 2014 in this quarter?
 * var result = isThisQuarter(new Date(2014, 6, 2))
 * //=> true
 */

function isThisQuarter(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isSameQuarter_index_js__["a" /* default */])(Date.now(), dirtyDate);
}

/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isSameSecond_index_js__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name isThisSecond
 * @category Second Helpers
 * @summary Is the given date in the same second as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same second as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in this second
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:30:15.000 in this second?
 * var result = isThisSecond(new Date(2014, 8, 25, 18, 30, 15))
 * //=> true
 */

function isThisSecond(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isSameSecond_index_js__["a" /* default */])(Date.now(), dirtyDate);
}

/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isSameWeek_index_js__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);



/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * var result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * var result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */
function isThisWeek(dirtyDate, options) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isSameWeek_index_js__["a" /* default */])(dirtyDate, Date.now(), options);
}

/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isSameYear_index_js__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name isThisYear
 * @category Year Helpers
 * @summary Is the given date in the same year as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same year as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in this year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 25 September 2014, is 2 July 2014 in this year?
 * var result = isThisYear(new Date(2014, 6, 2))
 * //=> true
 */

function isThisYear(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isSameYear_index_js__["a" /* default */])(dirtyDate, Date.now());
}

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name isThursday
 * @category Weekday Helpers
 * @summary Is the given date Thursday?
 *
 * @description
 * Is the given date Thursday?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is Thursday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 25 September 2014 Thursday?
 * var result = isThursday(new Date(2014, 8, 25))
 * //=> true
 */

function isThursday(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate).getDay() === 4;
}

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isSameDay_index_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * var result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isSameDay_index_js__["a" /* default */])(dirtyDate, Date.now());
}

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addDays_index_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isSameDay_index_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);



/**
 * @name isTomorrow
 * @category Day Helpers
 * @summary Is the given date tomorrow?
 * @pure false
 *
 * @description
 * Is the given date tomorrow?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is tomorrow
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 7 October 14:00:00 tomorrow?
 * var result = isTomorrow(new Date(2014, 9, 7, 14, 0))
 * //=> true
 */

function isTomorrow(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isSameDay_index_js__["a" /* default */])(dirtyDate, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__addDays_index_js__["a" /* default */])(Date.now(), 1));
}

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name isTuesday
 * @category Weekday Helpers
 * @summary Is the given date Tuesday?
 *
 * @description
 * Is the given date Tuesday?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is Tuesday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 23 September 2014 Tuesday?
 * var result = isTuesday(new Date(2014, 8, 23))
 * //=> true
 */

function isTuesday(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate).getDay() === 2;
}

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name isWednesday
 * @category Weekday Helpers
 * @summary Is the given date Wednesday?
 *
 * @description
 * Is the given date Wednesday?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is Wednesday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 24 September 2014 Wednesday?
 * const result = isWednesday(new Date(2014, 8, 24))
 * //=> true
 */

function isWednesday(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate).getDay() === 3;
}

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);



/**
 * @name isWithinInterval
 * @category Interval Helpers
 * @summary Is the given date within the interval?
 *
 * @description
 * Is the given date within the interval? (Including start and end.)
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `isWithinRange` to `isWithinInterval`.
 *   This change was made to mirror the use of the word "interval" in standard ISO 8601:2004 terminology:
 *
 *   ```
 *   2.1.3
 *   time interval
 *   part of the time axis limited by two instants
 *   ```
 *
 *   Also, this function now accepts an object with `start` and `end` properties
 *   instead of two arguments as an interval.
 *   This function now throws `RangeError` if the start of the interval is after its end
 *   or if any date in the interval is `Invalid Date`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   isWithinRange(
 *     new Date(2014, 0, 3),
 *     new Date(2014, 0, 1), new Date(2014, 0, 7)
 *   )
 *
 *   // v2.0.0 onward
 *
 *   isWithinInterval(
 *     new Date(2014, 0, 3),
 *     { start: new Date(2014, 0, 1), end: new Date(2014, 0, 7) }
 *   )
 *   ```
 *
 * @param {Date|Number} date - the date to check
 * @param {Interval} interval - the interval to check
 * @returns {Boolean} the date is within the interval
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // For the date within the interval:
 * isWithinInterval(new Date(2014, 0, 3), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> true
 *
 * @example
 * // For the date outside of the interval:
 * isWithinInterval(new Date(2014, 0, 10), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> false
 *
 * @example
 * // For date equal to interval start:
 * isWithinInterval(date, { start, end: date }) // => true
 *
 * @example
 * // For date equal to interval end:
 * isWithinInterval(date, { start: date, end }) // => true
 */
function isWithinInterval(dirtyDate, interval) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var time = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate).getTime();
  var startTime = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(interval.start).getTime();
  var endTime = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(interval.end).getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(startTime <= endTime)) {
    throw new RangeError('Invalid interval');
  }

  return time >= startTime && time <= endTime;
}

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isSameDay_index_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__subDays_index_js__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);



/**
 * @name isYesterday
 * @category Day Helpers
 * @summary Is the given date yesterday?
 * @pure false
 *
 * @description
 * Is the given date yesterday?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is yesterday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 5 October 14:00:00 yesterday?
 * var result = isYesterday(new Date(2014, 9, 5, 14, 0))
 * //=> true
 */

function isYesterday(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isSameDay_index_js__["a" /* default */])(dirtyDate, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__subDays_index_js__["a" /* default */])(Date.now(), 1));
}

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name lastDayOfDecade
 * @category Decade Helpers
 * @summary Return the last day of a decade for the given date.
 *
 * @description
 * Return the last day of a decade for the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the last day of a decade
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The last day of a decade for 21 December 2012 21:12:00:
 * var result = lastDayOfDecade(new Date(2012, 11, 21, 21, 12, 00))
 * //=> Wed Dec 31 2019 00:00:00
 */

function lastDayOfDecade(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var year = date.getFullYear();
  var decade = 9 + Math.floor(year / 10) * 10;
  date.setFullYear(decade + 1, 0, 0);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lastDayOfWeek_index_js__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name lastDayOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the last day of an ISO week for the given date.
 *
 * @description
 * Return the last day of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the last day of an ISO week
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The last day of an ISO week for 2 September 2014 11:55:00:
 * var result = lastDayOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Sep 07 2014 00:00:00
 */

function lastDayOfISOWeek(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lastDayOfWeek_index_js__["a" /* default */])(dirtyDate, {
    weekStartsOn: 1
  });
}

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getISOWeekYear_index_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__startOfISOWeek_index_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);



/**
 * @name lastDayOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the last day of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the last day of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `lastDayOfISOYear` to `lastDayOfISOWeekYear`.
 *   "ISO week year" is short for [ISO week-numbering year](https://en.wikipedia.org/wiki/ISO_week_date).
 *   This change makes the name consistent with
 *   locale-dependent week-numbering year helpers, e.g., `getWeekYear`.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of an ISO week-numbering year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The last day of an ISO week-numbering year for 2 July 2005:
 * var result = lastDayOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Sun Jan 01 2006 00:00:00
 */

function lastDayOfISOWeekYear(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var year = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getISOWeekYear_index_js__["a" /* default */])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setFullYear(year + 1, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__startOfISOWeek_index_js__["a" /* default */])(fourthOfJanuary);
  date.setDate(date.getDate() - 1);
  return date;
}

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name lastDayOfQuarter
 * @category Quarter Helpers
 * @summary Return the last day of a year quarter for the given date.
 *
 * @description
 * Return the last day of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the last day of a quarter
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // The last day of a quarter for 2 September 2014 11:55:00:
 * var result = lastDayOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 00:00:00
 */

function lastDayOfQuarter(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var currentMonth = date.getMonth();
  var month = currentMonth - currentMonth % 3 + 3;
  date.setMonth(month, 0);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name lastDayOfYear
 * @category Year Helpers
 * @summary Return the last day of a year for the given date.
 *
 * @description
 * Return the last day of a year for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the last day of a year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The last day of a year for 2 September 2014 11:55:00:
 * var result = lastDayOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Dec 31 2014 00:00:00
 */

function lastDayOfYear(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var year = date.getFullYear();
  date.setFullYear(year + 1, 0, 0);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_format_lightFormatters_index_js__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_getTimezoneOffsetInMilliseconds_index_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isValid_index_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__subMilliseconds_index_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_requiredArgs_index_js__ = __webpack_require__(0);





 // This RegExp consists of three parts separated by `|`:
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /(\w)\1*|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name lightFormat
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. Unlike `format`,
 * `lightFormat` doesn't use locales and outputs date using the most popular tokens.
 *
 * > ⚠️ Please note that the `lightFormat` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   |
 * |---------------------------------|---------|-----------------------------------|
 * | AM, PM                          | a..aaa  | AM, PM                            |
 * |                                 | aaaa    | a.m., p.m.                        |
 * |                                 | aaaaa   | a, p                              |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 |
 * |                                 | yy      | 44, 01, 00, 17                    |
 * |                                 | yyy     | 044, 001, 000, 017                |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |
 * |                                 | MM      | 01, 02, ..., 12                   |
 * | Day of month                    | d       | 1, 2, ..., 31                     |
 * |                                 | dd      | 01, 02, ..., 31                   |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |
 * |                                 | hh      | 01, 02, ..., 11, 12               |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |
 * |                                 | HH      | 00, 01, 02, ..., 23               |
 * | Minute                          | m       | 0, 1, ..., 59                     |
 * |                                 | mm      | 00, 01, ..., 59                   |
 * | Second                          | s       | 0, 1, ..., 59                     |
 * |                                 | ss      | 00, 01, ..., 59                   |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |
 * |                                 | SS      | 00, 01, ..., 99                   |
 * |                                 | SSS     | 000, 0001, ..., 999               |
 * |                                 | SSSS    | ...                               |
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * const result = lightFormat(new Date(2014, 1, 11), 'yyyy-MM-dd')
 * //=> '2014-02-11'
 */

function lightFormat(dirtyDate, formatStr) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var originalDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);

  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__isValid_index_js__["a" /* default */])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_getTimezoneOffsetInMilliseconds_index_js__["a" /* default */])(originalDate);
  var utcDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__subMilliseconds_index_js__["a" /* default */])(originalDate, timezoneOffset);
  var tokens = formatStr.match(formattingTokensRegExp); // The only case when formattingTokensRegExp doesn't match the string is when it's empty

  if (!tokens) return '';
  var result = tokens.map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = __WEBPACK_IMPORTED_MODULE_1__lib_format_lightFormatters_index_js__["a" /* default */][firstCharacter];

    if (formatter) {
      return formatter(utcDate, substring);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  var matches = input.match(escapedStringRegExp);

  if (!matches) {
    return input;
  }

  return matches[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = buildFormatLongFn;
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = buildLocalizeFn;
function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challange you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = buildMatchFn;
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = buildMatchPatternFn;
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatDistance;
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};
function formatDistance(token, count, options) {
  options = options || {};
  var result;

  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token];
  } else if (count === 1) {
    result = formatDistanceLocale[token].one;
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count);
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
}

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_buildFormatLongFn_index_js__ = __webpack_require__(218);

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_buildFormatLongFn_index_js__["a" /* default */])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_buildFormatLongFn_index_js__["a" /* default */])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_buildFormatLongFn_index_js__["a" /* default */])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ __webpack_exports__["a"] = (formatLong);

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatRelative;
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};
function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
}

/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_buildLocalizeFn_index_js__ = __webpack_require__(219);

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

function ordinalNumber(dirtyNumber, _dirtyOptions) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`:
  //
  //   var options = dirtyOptions || {}
  //   var unit = String(options.unit)
  //
  // where `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
}

var localize = {
  ordinalNumber: ordinalNumber,
  era: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_buildLocalizeFn_index_js__["a" /* default */])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_buildLocalizeFn_index_js__["a" /* default */])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return Number(quarter) - 1;
    }
  }),
  month: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_buildLocalizeFn_index_js__["a" /* default */])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_buildLocalizeFn_index_js__["a" /* default */])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_buildLocalizeFn_index_js__["a" /* default */])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ __webpack_exports__["a"] = (localize);

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_buildMatchPatternFn_index_js__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_buildMatchFn_index_js__ = __webpack_require__(220);


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_buildMatchPatternFn_index_js__["a" /* default */])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_buildMatchFn_index_js__["a" /* default */])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_buildMatchFn_index_js__["a" /* default */])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_buildMatchFn_index_js__["a" /* default */])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_buildMatchFn_index_js__["a" /* default */])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_buildMatchFn_index_js__["a" /* default */])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ __webpack_exports__["a"] = (match);

/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__(0);

// Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
// 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
var daysInYear = 365.2425;
/**
 * @name milliseconds
 * @category Millisecond Helpers
 * @summary
 * Returns the number of milliseconds in the specified, years, months, weeks, days, hours, minutes and seconds.
 *
 * @description
 * Returns the number of milliseconds in the specified, years, months, weeks, days, hours, minutes and seconds.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * One month is a year divided by 12.
 *
 * @param {Duration} duration - the object with years, months, weeks, days, hours, minutes and seconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {number} the milliseconds
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // 1 year in milliseconds
 * milliseconds({ years: 1 })
 * //=> 31556952000
 *
 * // 3 months in milliseconds
 * milliseconds({ months: 3 })
 * //=> 7889238000
 */

function milliseconds(_ref) {
  var years = _ref.years,
      months = _ref.months,
      weeks = _ref.weeks,
      days = _ref.days,
      hours = _ref.hours,
      minutes = _ref.minutes,
      seconds = _ref.seconds;
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var totalDays = 0;
  if (years) totalDays += years * daysInYear;
  if (months) totalDays += months * (daysInYear / 12);
  if (weeks) totalDays += weeks * 7;
  if (days) totalDays += days;
  var totalSeconds = totalDays * 24 * 60 * 60;
  if (hours) totalSeconds += hours * 60 * 60;
  if (minutes) totalSeconds += minutes * 60;
  if (seconds) totalSeconds += seconds;
  return Math.round(totalSeconds * 1000);
}

/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index_js__ = __webpack_require__(3);


/**
 * @name millisecondsToHours
 * @category Conversion Helpers
 * @summary Convert milliseconds to hours.
 *
 * @description
 * Convert a number of milliseconds to a full number of hours.
 *
 * @param {number} milliseconds - number of milliseconds to be converted
 *
 * @returns {number} the number of milliseconds converted in hours
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 7200000 milliseconds to hours:
 * const result = millisecondsToHours(7200000)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = millisecondsToHours(7199999)
 * //=> 1
 */

function millisecondsToHours(milliseconds) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var hours = milliseconds / __WEBPACK_IMPORTED_MODULE_1__constants_index_js__["j" /* millisecondsInHour */];
  return Math.floor(hours);
}

/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index_js__ = __webpack_require__(3);


/**
 * @name millisecondsToMinutes
 * @category Conversion Helpers
 * @summary Convert milliseconds to minutes.
 *
 * @description
 * Convert a number of milliseconds to a full number of minutes.
 *
 * @param {number} milliseconds - number of milliseconds to be converted.
 *
 * @returns {number} the number of milliseconds converted in minutes
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 60000 milliseconds to minutes:
 * const result = millisecondsToMinutes(60000)
 * //=> 1
 *
 * @example
 * // It uses floor rounding:
 * const result = millisecondsToMinutes(119999)
 * //=> 1
 */

function millisecondsToMinutes(milliseconds) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var minutes = milliseconds / __WEBPACK_IMPORTED_MODULE_1__constants_index_js__["h" /* millisecondsInMinute */];
  return Math.floor(minutes);
}

/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index_js__ = __webpack_require__(3);


/**
 * @name millisecondsToSeconds
 * @category Conversion Helpers
 * @summary Convert milliseconds to seconds.
 *
 * @description
 * Convert a number of milliseconds to a full number of seconds.
 *
 * @param {number} milliseconds - number of milliseconds to be converted
 *
 * @returns {number} the number of milliseconds converted in seconds
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 1000 miliseconds to seconds:
 * const result = millisecondsToSeconds(1000)
 * //=> 1
 *
 * @example
 * // It uses floor rounding:
 * const result = millisecondsToSeconds(1999)
 * //=> 1
 */

function millisecondsToSeconds(milliseconds) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var seconds = milliseconds / __WEBPACK_IMPORTED_MODULE_1__constants_index_js__["e" /* millisecondsInSecond */];
  return Math.floor(seconds);
}

/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index_js__ = __webpack_require__(3);


/**
 * @name minutesToHours
 * @category Conversion Helpers
 * @summary Convert minutes to hours.
 *
 * @description
 * Convert a number of minutes to a full number of hours.
 *
 * @param {number} minutes - number of minutes to be converted
 *
 * @returns {number} the number of minutes converted in hours
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 140 minutes to hours:
 * const result = minutesToHours(120)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = minutesToHours(179)
 * //=> 2
 */

function minutesToHours(minutes) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var hours = minutes / __WEBPACK_IMPORTED_MODULE_1__constants_index_js__["i" /* minutesInHour */];
  return Math.floor(hours);
}

/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index_js__ = __webpack_require__(3);


/**
 * @name minutesToMilliseconds
 * @category Conversion Helpers
 * @summary Convert minutes to milliseconds.
 *
 * @description
 * Convert a number of minutes to a full number of milliseconds.
 *
 * @param {number} minutes - number of minutes to be converted
 *
 * @returns {number} the number of minutes converted in milliseconds
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 2 minutes to milliseconds
 * const result = minutesToMilliseconds(2)
 * //=> 120000
 */

function minutesToMilliseconds(minutes) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Math.floor(minutes * __WEBPACK_IMPORTED_MODULE_1__constants_index_js__["h" /* millisecondsInMinute */]);
}

/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index_js__ = __webpack_require__(3);


/**
 * @name minutesToSeconds
 * @category Conversion Helpers
 * @summary Convert minutes to seconds.
 *
 * @description
 * Convert a number of minutes to a full number of seconds.
 *
 * @param { number } minutes - number of minutes to be converted
 *
 * @returns {number} the number of minutes converted in seconds
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 2 minutes to seconds
 * const result = minutesToSeconds(2)
 * //=> 120
 */

function minutesToSeconds(minutes) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Math.floor(minutes * __WEBPACK_IMPORTED_MODULE_1__constants_index_js__["d" /* secondsInMinute */]);
}

/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index_js__ = __webpack_require__(3);


/**
 * @name monthsToQuarters
 * @category Conversion Helpers
 * @summary Convert number of months to quarters.
 *
 * @description
 * Convert a number of months to a full number of quarters.
 *
 * @param {number} months - number of months to be converted.
 *
 * @returns {number} the number of months converted in quarters
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 6 months to quarters:
 * const result = monthsToQuarters(6)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = monthsToQuarters(7)
 * //=> 2
 */

function monthsToQuarters(months) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var quarters = months / __WEBPACK_IMPORTED_MODULE_1__constants_index_js__["g" /* monthsInQuarter */];
  return Math.floor(quarters);
}

/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index_js__ = __webpack_require__(3);


/**
 * @name monthsToYears
 * @category Conversion Helpers
 * @summary Convert number of months to years.
 *
 * @description
 * Convert a number of months to a full number of years.
 *
 * @param {number} months - number of months to be converted
 *
 * @returns {number} the number of months converted in years
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 36 months to years:
 * const result = monthsToYears(36)
 * //=> 3
 *
 * // It uses floor rounding:
 * const result = monthsToYears(40)
 * //=> 3
 */

function monthsToYears(months) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var years = months / __WEBPACK_IMPORTED_MODULE_1__constants_index_js__["b" /* monthsInYear */];
  return Math.floor(years);
}

/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nextDay_index_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toDate_index_js__ = __webpack_require__(1);



/**
 * @name nextFriday
 * @category Weekday Helpers
 * @summary When is the next Friday?
 *
 * @description
 * When is the next Friday?
 *
 * @param {Date | number} date - the date to start counting from
 * @returns {Date} the next Friday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // When is the next Friday after Mar, 22, 2020?
 * const result = nextFriday(new Date(2020, 2, 22))
 * //=> Fri Mar 27 2020 00:00:00
 */

function nextFriday(date) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__nextDay_index_js__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__toDate_index_js__["a" /* default */])(date), 5);
}

/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nextDay_index_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toDate_index_js__ = __webpack_require__(1);



/**
 * @name nextMonday
 * @category Weekday Helpers
 * @summary When is the next Monday?
 *
 * @description
 * When is the next Monday?
 *
 * @param {Date | number} date - the date to start counting from
 * @returns {Date} the next Monday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // When is the next Monday after Mar, 22, 2020?
 * const result = nextMonday(new Date(2020, 2, 22))
 * //=> Mon Mar 23 2020 00:00:00
 */

function nextMonday(date) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__nextDay_index_js__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__toDate_index_js__["a" /* default */])(date), 1);
}

/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nextDay_index_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toDate_index_js__ = __webpack_require__(1);



/**
 * @name nextSaturday
 * @category Weekday Helpers
 * @summary When is the next Saturday?
 *
 * @description
 * When is the next Saturday?
 *
 * @param {Date | number} date - the date to start counting from
 * @returns {Date} the next Saturday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // When is the next Saturday after Mar, 22, 2020?
 * const result = nextSaturday(new Date(2020, 2, 22))
 * //=> Sat Mar 28 2020 00:00:00
 */

function nextSaturday(date) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__nextDay_index_js__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__toDate_index_js__["a" /* default */])(date), 6);
}

/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nextDay_index_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toDate_index_js__ = __webpack_require__(1);



/**
 * @name nextSunday
 * @category Weekday Helpers
 * @summary When is the next Sunday?
 *
 * @description
 * When is the next Sunday?
 *
 * @param {Date | number} date - the date to start counting from
 * @returns {Date} the next Sunday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // When is the next Sunday after Mar, 22, 2020?
 * const result = nextSunday(new Date(2020, 2, 22))
 * //=> Sun Mar 29 2020 00:00:00
 */

function nextSunday(date) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__nextDay_index_js__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__toDate_index_js__["a" /* default */])(date), 0);
}

/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nextDay_index_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toDate_index_js__ = __webpack_require__(1);



/**
 * @name nextThursday
 * @category Weekday Helpers
 * @summary When is the next Thursday?
 *
 * @description
 * When is the next Thursday?
 *
 * @param {Date | number} date - the date to start counting from
 * @returns {Date} the next Thursday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // When is the next Thursday after Mar, 22, 2020?
 * const result = nextThursday(new Date(2020, 2, 22))
 * //=> Thur Mar 26 2020 00:00:00
 */

function nextThursday(date) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__nextDay_index_js__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__toDate_index_js__["a" /* default */])(date), 4);
}

/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nextDay_index_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toDate_index_js__ = __webpack_require__(1);



/**
 * @name nextTuesday
 * @category Weekday Helpers
 * @summary When is the next Tuesday?
 *
 * @description
 * When is the next Tuesday?
 *
 * @param {Date | number} date - the date to start counting from
 * @returns {Date} the next Tuesday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // When is the next Tuesday after Mar, 22, 2020?
 * const result = nextTuesday(new Date(2020, 2, 22))
 * //=> Tue Mar 24 2020 00:00:00
 */

function nextTuesday(date) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__nextDay_index_js__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__toDate_index_js__["a" /* default */])(date), 2);
}

/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nextDay_index_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toDate_index_js__ = __webpack_require__(1);



/**
 * @name nextWednesday
 * @category Weekday Helpers
 * @summary When is the next Wednesday?
 *
 * @description
 * When is the next Wednesday?
 *
 * @param {Date | number} date - the date to start counting from
 * @returns {Date} the next Wednesday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // When is the next Wednesday after Mar, 22, 2020?
 * const result = nextWednesday(new Date(2020, 2, 22))
 * //=> Wed Mar 25 2020 00:00:00
 */

function nextWednesday(date) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__nextDay_index_js__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__toDate_index_js__["a" /* default */])(date), 3);
}

/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_getUTCWeekYear_index_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_setUTCDay_index_js__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_setUTCISODay_index_js__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_setUTCISOWeek_index_js__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_setUTCWeek_index_js__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_startOfUTCISOWeek_index_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_startOfUTCWeek_index_js__ = __webpack_require__(22);







var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var MILLISECONDS_IN_SECOND = 1000;
var numericPatterns = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/ // 0 to 9999, -0 to -9999

};
var timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};

function parseNumericPattern(pattern, string, valueCallback) {
  var matchResult = string.match(pattern);

  if (!matchResult) {
    return null;
  }

  var value = parseInt(matchResult[0], 10);
  return {
    value: valueCallback ? valueCallback(value) : value,
    rest: string.slice(matchResult[0].length)
  };
}

function parseTimezonePattern(pattern, string) {
  var matchResult = string.match(pattern);

  if (!matchResult) {
    return null;
  } // Input is 'Z'


  if (matchResult[0] === 'Z') {
    return {
      value: 0,
      rest: string.slice(1)
    };
  }

  var sign = matchResult[1] === '+' ? 1 : -1;
  var hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
  var minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
  var seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
  return {
    value: sign * (hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * MILLISECONDS_IN_SECOND),
    rest: string.slice(matchResult[0].length)
  };
}

function parseAnyDigitsSigned(string, valueCallback) {
  return parseNumericPattern(numericPatterns.anyDigitsSigned, string, valueCallback);
}

function parseNDigits(n, string, valueCallback) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigit, string, valueCallback);

    case 2:
      return parseNumericPattern(numericPatterns.twoDigits, string, valueCallback);

    case 3:
      return parseNumericPattern(numericPatterns.threeDigits, string, valueCallback);

    case 4:
      return parseNumericPattern(numericPatterns.fourDigits, string, valueCallback);

    default:
      return parseNumericPattern(new RegExp('^\\d{1,' + n + '}'), string, valueCallback);
  }
}

function parseNDigitsSigned(n, string, valueCallback) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigitSigned, string, valueCallback);

    case 2:
      return parseNumericPattern(numericPatterns.twoDigitsSigned, string, valueCallback);

    case 3:
      return parseNumericPattern(numericPatterns.threeDigitsSigned, string, valueCallback);

    case 4:
      return parseNumericPattern(numericPatterns.fourDigitsSigned, string, valueCallback);

    default:
      return parseNumericPattern(new RegExp('^-?\\d{1,' + n + '}'), string, valueCallback);
  }
}

function dayPeriodEnumToHours(enumValue) {
  switch (enumValue) {
    case 'morning':
      return 4;

    case 'evening':
      return 17;

    case 'pm':
    case 'noon':
    case 'afternoon':
      return 12;

    case 'am':
    case 'midnight':
    case 'night':
    default:
      return 0;
  }
}

function normalizeTwoDigitYear(twoDigitYear, currentYear) {
  var isCommonEra = currentYear > 0; // Absolute number of the current year:
  // 1 -> 1 AC
  // 0 -> 1 BC
  // -1 -> 2 BC

  var absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
  var result;

  if (absCurrentYear <= 50) {
    result = twoDigitYear || 100;
  } else {
    var rangeEnd = absCurrentYear + 50;
    var rangeEndCentury = Math.floor(rangeEnd / 100) * 100;
    var isPreviousCentury = twoDigitYear >= rangeEnd % 100;
    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
  }

  return isCommonEra ? result : 1 - result;
}

var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // User for validation

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O* | Timezone (GMT)                 |
 * |  p  |                                |  P  |                                |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z* | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `parse` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 */


var parsers = {
  // Era
  G: {
    priority: 140,
    parse: function (string, token, match, _options) {
      switch (token) {
        // AD, BC
        case 'G':
        case 'GG':
        case 'GGG':
          return match.era(string, {
            width: 'abbreviated'
          }) || match.era(string, {
            width: 'narrow'
          });
        // A, B

        case 'GGGGG':
          return match.era(string, {
            width: 'narrow'
          });
        // Anno Domini, Before Christ

        case 'GGGG':
        default:
          return match.era(string, {
            width: 'wide'
          }) || match.era(string, {
            width: 'abbreviated'
          }) || match.era(string, {
            width: 'narrow'
          });
      }
    },
    set: function (date, flags, value, _options) {
      flags.era = value;
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['R', 'u', 't', 'T']
  },
  // Year
  y: {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    priority: 130,
    parse: function (string, token, match, _options) {
      var valueCallback = function (year) {
        return {
          year: year,
          isTwoDigitYear: token === 'yy'
        };
      };

      switch (token) {
        case 'y':
          return parseNDigits(4, string, valueCallback);

        case 'yo':
          return match.ordinalNumber(string, {
            unit: 'year',
            valueCallback: valueCallback
          });

        default:
          return parseNDigits(token.length, string, valueCallback);
      }
    },
    validate: function (_date, value, _options) {
      return value.isTwoDigitYear || value.year > 0;
    },
    set: function (date, flags, value, _options) {
      var currentYear = date.getUTCFullYear();

      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      }

      var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'u', 'w', 'I', 'i', 'e', 'c', 't', 'T']
  },
  // Local week-numbering year
  Y: {
    priority: 130,
    parse: function (string, token, match, _options) {
      var valueCallback = function (year) {
        return {
          year: year,
          isTwoDigitYear: token === 'YY'
        };
      };

      switch (token) {
        case 'Y':
          return parseNDigits(4, string, valueCallback);

        case 'Yo':
          return match.ordinalNumber(string, {
            unit: 'year',
            valueCallback: valueCallback
          });

        default:
          return parseNDigits(token.length, string, valueCallback);
      }
    },
    validate: function (_date, value, _options) {
      return value.isTwoDigitYear || value.year > 0;
    },
    set: function (date, flags, value, options) {
      var currentYear = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_getUTCWeekYear_index_js__["a" /* default */])(date, options);

      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
        date.setUTCHours(0, 0, 0, 0);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_startOfUTCWeek_index_js__["a" /* default */])(date, options);
      }

      var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, options.firstWeekContainsDate);
      date.setUTCHours(0, 0, 0, 0);
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_startOfUTCWeek_index_js__["a" /* default */])(date, options);
    },
    incompatibleTokens: ['y', 'R', 'u', 'Q', 'q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']
  },
  // ISO week-numbering year
  R: {
    priority: 130,
    parse: function (string, token, _match, _options) {
      if (token === 'R') {
        return parseNDigitsSigned(4, string);
      }

      return parseNDigitsSigned(token.length, string);
    },
    set: function (_date, _flags, value, _options) {
      var firstWeekOfYear = new Date(0);
      firstWeekOfYear.setUTCFullYear(value, 0, 4);
      firstWeekOfYear.setUTCHours(0, 0, 0, 0);
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__lib_startOfUTCISOWeek_index_js__["a" /* default */])(firstWeekOfYear);
    },
    incompatibleTokens: ['G', 'y', 'Y', 'u', 'Q', 'q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']
  },
  // Extended year
  u: {
    priority: 130,
    parse: function (string, token, _match, _options) {
      if (token === 'u') {
        return parseNDigitsSigned(4, string);
      }

      return parseNDigitsSigned(token.length, string);
    },
    set: function (date, _flags, value, _options) {
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['G', 'y', 'Y', 'R', 'w', 'I', 'i', 'e', 'c', 't', 'T']
  },
  // Quarter
  Q: {
    priority: 120,
    parse: function (string, token, match, _options) {
      switch (token) {
        // 1, 2, 3, 4
        case 'Q':
        case 'QQ':
          // 01, 02, 03, 04
          return parseNDigits(token.length, string);
        // 1st, 2nd, 3rd, 4th

        case 'Qo':
          return match.ordinalNumber(string, {
            unit: 'quarter'
          });
        // Q1, Q2, Q3, Q4

        case 'QQQ':
          return match.quarter(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)

        case 'QQQQQ':
          return match.quarter(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // 1st quarter, 2nd quarter, ...

        case 'QQQQ':
        default:
          return match.quarter(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.quarter(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 4;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Stand-alone quarter
  q: {
    priority: 120,
    parse: function (string, token, match, _options) {
      switch (token) {
        // 1, 2, 3, 4
        case 'q':
        case 'qq':
          // 01, 02, 03, 04
          return parseNDigits(token.length, string);
        // 1st, 2nd, 3rd, 4th

        case 'qo':
          return match.ordinalNumber(string, {
            unit: 'quarter'
          });
        // Q1, Q2, Q3, Q4

        case 'qqq':
          return match.quarter(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)

        case 'qqqqq':
          return match.quarter(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // 1st quarter, 2nd quarter, ...

        case 'qqqq':
        default:
          return match.quarter(string, {
            width: 'wide',
            context: 'standalone'
          }) || match.quarter(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 4;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'Q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Month
  M: {
    priority: 110,
    parse: function (string, token, match, _options) {
      var valueCallback = function (value) {
        return value - 1;
      };

      switch (token) {
        // 1, 2, ..., 12
        case 'M':
          return parseNumericPattern(numericPatterns.month, string, valueCallback);
        // 01, 02, ..., 12

        case 'MM':
          return parseNDigits(2, string, valueCallback);
        // 1st, 2nd, ..., 12th

        case 'Mo':
          return match.ordinalNumber(string, {
            unit: 'month',
            valueCallback: valueCallback
          });
        // Jan, Feb, ..., Dec

        case 'MMM':
          return match.month(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.month(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // J, F, ..., D

        case 'MMMMM':
          return match.month(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // January, February, ..., December

        case 'MMMM':
        default:
          return match.month(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.month(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.month(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 11;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'L', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Stand-alone month
  L: {
    priority: 110,
    parse: function (string, token, match, _options) {
      var valueCallback = function (value) {
        return value - 1;
      };

      switch (token) {
        // 1, 2, ..., 12
        case 'L':
          return parseNumericPattern(numericPatterns.month, string, valueCallback);
        // 01, 02, ..., 12

        case 'LL':
          return parseNDigits(2, string, valueCallback);
        // 1st, 2nd, ..., 12th

        case 'Lo':
          return match.ordinalNumber(string, {
            unit: 'month',
            valueCallback: valueCallback
          });
        // Jan, Feb, ..., Dec

        case 'LLL':
          return match.month(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.month(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // J, F, ..., D

        case 'LLLLL':
          return match.month(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // January, February, ..., December

        case 'LLLL':
        default:
          return match.month(string, {
            width: 'wide',
            context: 'standalone'
          }) || match.month(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.month(string, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 11;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'M', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Local week of year
  w: {
    priority: 100,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'w':
          return parseNumericPattern(numericPatterns.week, string);

        case 'wo':
          return match.ordinalNumber(string, {
            unit: 'week'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 53;
    },
    set: function (date, _flags, value, options) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_startOfUTCWeek_index_js__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_setUTCWeek_index_js__["a" /* default */])(date, value, options), options);
    },
    incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']
  },
  // ISO week of year
  I: {
    priority: 100,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'I':
          return parseNumericPattern(numericPatterns.week, string);

        case 'Io':
          return match.ordinalNumber(string, {
            unit: 'week'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 53;
    },
    set: function (date, _flags, value, options) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__lib_startOfUTCISOWeek_index_js__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_setUTCISOWeek_index_js__["a" /* default */])(date, value, options), options);
    },
    incompatibleTokens: ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']
  },
  // Day of the month
  d: {
    priority: 90,
    subPriority: 1,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'd':
          return parseNumericPattern(numericPatterns.date, string);

        case 'do':
          return match.ordinalNumber(string, {
            unit: 'date'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (date, value, _options) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex(year);
      var month = date.getUTCMonth();

      if (isLeapYear) {
        return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
      } else {
        return value >= 1 && value <= DAYS_IN_MONTH[month];
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCDate(value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Day of year
  D: {
    priority: 90,
    subPriority: 1,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'D':
        case 'DD':
          return parseNumericPattern(numericPatterns.dayOfYear, string);

        case 'Do':
          return match.ordinalNumber(string, {
            unit: 'date'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (date, value, _options) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex(year);

      if (isLeapYear) {
        return value >= 1 && value <= 366;
      } else {
        return value >= 1 && value <= 365;
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth(0, value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'M', 'L', 'w', 'I', 'd', 'E', 'i', 'e', 'c', 't', 'T']
  },
  // Day of week
  E: {
    priority: 90,
    parse: function (string, token, match, _options) {
      switch (token) {
        // Tue
        case 'E':
        case 'EE':
        case 'EEE':
          return match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // T

        case 'EEEEE':
          return match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu

        case 'EEEEEE':
          return match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tuesday

        case 'EEEE':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 6;
    },
    set: function (date, _flags, value, options) {
      date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_setUTCDay_index_js__["a" /* default */])(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['D', 'i', 'e', 'c', 't', 'T']
  },
  // Local day of week
  e: {
    priority: 90,
    parse: function (string, token, match, options) {
      var valueCallback = function (value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };

      switch (token) {
        // 3
        case 'e':
        case 'ee':
          // 03
          return parseNDigits(token.length, string, valueCallback);
        // 3rd

        case 'eo':
          return match.ordinalNumber(string, {
            unit: 'day',
            valueCallback: valueCallback
          });
        // Tue

        case 'eee':
          return match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // T

        case 'eeeee':
          return match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu

        case 'eeeeee':
          return match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tuesday

        case 'eeee':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 6;
    },
    set: function (date, _flags, value, options) {
      date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_setUTCDay_index_js__["a" /* default */])(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'c', 't', 'T']
  },
  // Stand-alone local day of week
  c: {
    priority: 90,
    parse: function (string, token, match, options) {
      var valueCallback = function (value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };

      switch (token) {
        // 3
        case 'c':
        case 'cc':
          // 03
          return parseNDigits(token.length, string, valueCallback);
        // 3rd

        case 'co':
          return match.ordinalNumber(string, {
            unit: 'day',
            valueCallback: valueCallback
          });
        // Tue

        case 'ccc':
          return match.day(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.day(string, {
            width: 'short',
            context: 'standalone'
          }) || match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // T

        case 'ccccc':
          return match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // Tu

        case 'cccccc':
          return match.day(string, {
            width: 'short',
            context: 'standalone'
          }) || match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // Tuesday

        case 'cccc':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'standalone'
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.day(string, {
            width: 'short',
            context: 'standalone'
          }) || match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 6;
    },
    set: function (date, _flags, value, options) {
      date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_setUTCDay_index_js__["a" /* default */])(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'e', 't', 'T']
  },
  // ISO day of week
  i: {
    priority: 90,
    parse: function (string, token, match, _options) {
      var valueCallback = function (value) {
        if (value === 0) {
          return 7;
        }

        return value;
      };

      switch (token) {
        // 2
        case 'i':
        case 'ii':
          // 02
          return parseNDigits(token.length, string);
        // 2nd

        case 'io':
          return match.ordinalNumber(string, {
            unit: 'day'
          });
        // Tue

        case 'iii':
          return match.day(string, {
            width: 'abbreviated',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'short',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
        // T

        case 'iiiii':
          return match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
        // Tu

        case 'iiiiii':
          return match.day(string, {
            width: 'short',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
        // Tuesday

        case 'iiii':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'short',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 7;
    },
    set: function (date, _flags, value, options) {
      date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_setUTCISODay_index_js__["a" /* default */])(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'E', 'e', 'c', 't', 'T']
  },
  // AM or PM
  a: {
    priority: 80,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'a':
        case 'aa':
        case 'aaa':
          return match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'aaaaa':
          return match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'aaaa':
        default:
          return match.dayPeriod(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['b', 'B', 'H', 'K', 'k', 't', 'T']
  },
  // AM, PM, midnight
  b: {
    priority: 80,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'b':
        case 'bb':
        case 'bbb':
          return match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'bbbbb':
          return match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'bbbb':
        default:
          return match.dayPeriod(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'B', 'H', 'K', 'k', 't', 'T']
  },
  // in the morning, in the afternoon, in the evening, at night
  B: {
    priority: 80,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'B':
        case 'BB':
        case 'BBB':
          return match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'BBBBB':
          return match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'BBBB':
        default:
          return match.dayPeriod(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'b', 't', 'T']
  },
  // Hour [1-12]
  h: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'h':
          return parseNumericPattern(numericPatterns.hour12h, string);

        case 'ho':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 12;
    },
    set: function (date, _flags, value, _options) {
      var isPM = date.getUTCHours() >= 12;

      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else if (!isPM && value === 12) {
        date.setUTCHours(0, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }

      return date;
    },
    incompatibleTokens: ['H', 'K', 'k', 't', 'T']
  },
  // Hour [0-23]
  H: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'H':
          return parseNumericPattern(numericPatterns.hour23h, string);

        case 'Ho':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 23;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(value, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'b', 'h', 'K', 'k', 't', 'T']
  },
  // Hour [0-11]
  K: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'K':
          return parseNumericPattern(numericPatterns.hour11h, string);

        case 'Ko':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 11;
    },
    set: function (date, _flags, value, _options) {
      var isPM = date.getUTCHours() >= 12;

      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }

      return date;
    },
    incompatibleTokens: ['a', 'b', 'h', 'H', 'k', 't', 'T']
  },
  // Hour [1-24]
  k: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'k':
          return parseNumericPattern(numericPatterns.hour24h, string);

        case 'ko':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 24;
    },
    set: function (date, _flags, value, _options) {
      var hours = value <= 24 ? value % 24 : value;
      date.setUTCHours(hours, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'b', 'h', 'H', 'K', 't', 'T']
  },
  // Minute
  m: {
    priority: 60,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'm':
          return parseNumericPattern(numericPatterns.minute, string);

        case 'mo':
          return match.ordinalNumber(string, {
            unit: 'minute'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 59;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMinutes(value, 0, 0);
      return date;
    },
    incompatibleTokens: ['t', 'T']
  },
  // Second
  s: {
    priority: 50,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 's':
          return parseNumericPattern(numericPatterns.second, string);

        case 'so':
          return match.ordinalNumber(string, {
            unit: 'second'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 59;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCSeconds(value, 0);
      return date;
    },
    incompatibleTokens: ['t', 'T']
  },
  // Fraction of second
  S: {
    priority: 30,
    parse: function (string, token, _match, _options) {
      var valueCallback = function (value) {
        return Math.floor(value * Math.pow(10, -token.length + 3));
      };

      return parseNDigits(token.length, string, valueCallback);
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMilliseconds(value);
      return date;
    },
    incompatibleTokens: ['t', 'T']
  },
  // Timezone (ISO-8601. +00:00 is `'Z'`)
  X: {
    priority: 10,
    parse: function (string, token, _match, _options) {
      switch (token) {
        case 'X':
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string);

        case 'XX':
          return parseTimezonePattern(timezonePatterns.basic, string);

        case 'XXXX':
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string);

        case 'XXXXX':
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string);

        case 'XXX':
        default:
          return parseTimezonePattern(timezonePatterns.extended, string);
      }
    },
    set: function (date, flags, value, _options) {
      if (flags.timestampIsSet) {
        return date;
      }

      return new Date(date.getTime() - value);
    },
    incompatibleTokens: ['t', 'T', 'x']
  },
  // Timezone (ISO-8601)
  x: {
    priority: 10,
    parse: function (string, token, _match, _options) {
      switch (token) {
        case 'x':
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string);

        case 'xx':
          return parseTimezonePattern(timezonePatterns.basic, string);

        case 'xxxx':
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string);

        case 'xxxxx':
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string);

        case 'xxx':
        default:
          return parseTimezonePattern(timezonePatterns.extended, string);
      }
    },
    set: function (date, flags, value, _options) {
      if (flags.timestampIsSet) {
        return date;
      }

      return new Date(date.getTime() - value);
    },
    incompatibleTokens: ['t', 'T', 'X']
  },
  // Seconds timestamp
  t: {
    priority: 40,
    parse: function (string, _token, _match, _options) {
      return parseAnyDigitsSigned(string);
    },
    set: function (_date, _flags, value, _options) {
      return [new Date(value * 1000), {
        timestampIsSet: true
      }];
    },
    incompatibleTokens: '*'
  },
  // Milliseconds timestamp
  T: {
    priority: 20,
    parse: function (string, _token, _match, _options) {
      return parseAnyDigitsSigned(string);
    },
    set: function (_date, _flags, value, _options) {
      return [new Date(value), {
        timestampIsSet: true
      }];
    },
    incompatibleTokens: '*'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (parsers);

/***/ }),
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var DEFAULT_ADDITIONAL_DIGITS = 2;
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The previous `parse` implementation was renamed to `parseISO`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward
 *   parseISO('2016-01-01')
 *   ```
 *
 * - `parseISO` now validates separate date and time values in ISO-8601 strings
 *   and returns `Invalid Date` if the date is invalid.
 *
 *   ```javascript
 *   parseISO('2018-13-32')
 *   //=> Invalid Date
 *   ```
 *
 * - `parseISO` now doesn't fall back to `new Date` constructor
 *   if it fails to parse a string argument. Instead, it returns `Invalid Date`.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * var result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, dirtyOptions) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(options.additionalDigits);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (isNaN(date) || !date) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time) || time === null) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    dateStrings.date = null;
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: null
  };
  var year = captures[1] && parseInt(captures[1]);
  var century = captures[2] && parseInt(captures[2]);
  return {
    year: century == null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return null;
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return null;
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return null; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name parseJSON
 * @category Common Helpers
 * @summary Parse a JSON date string
 *
 * @description
 * Converts a complete ISO date string in UTC time, the typical format for transmitting
 * a date in JSON, to a JavaScript `Date` instance.
 *
 * This is a minimal implementation for converting dates retrieved from a JSON API to
 * a `Date` instance which can be used with other functions in the `date-fns` library.
 * The following formats are supported:
 *
 * - `2000-03-15T05:20:10.123Z`: The output of `.toISOString()` and `JSON.stringify(new Date())`
 * - `2000-03-15T05:20:10Z`: Without milliseconds
 * - `2000-03-15T05:20:10+00:00`: With a zero offset, the default JSON encoded format in some other languages
 * - `2000-03-15T05:20:10+05:45`: With a positive or negative offset, the default JSON encoded format in some other languages
 * - `2000-03-15T05:20:10+0000`: With a zero offset without a colon
 * - `2000-03-15T05:20:10`: Without a trailing 'Z' symbol
 * - `2000-03-15T05:20:10.1234567`: Up to 7 digits in milliseconds field. Only first 3 are taken into account since JS does not allow fractional milliseconds
 * - `2000-03-15 05:20:10`: With a space instead of a 'T' separator for APIs returning a SQL date without reformatting
 *
 * For convenience and ease of use these other input types are also supported
 * via [toDate]{@link https://date-fns.org/docs/toDate}:
 *
 * - A `Date` instance will be cloned
 * - A `number` will be treated as a timestamp
 *
 * Any other input type or invalid date strings will return an `Invalid Date`.
 *
 * @param {String|Number|Date} argument A fully formed ISO8601 date string to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 */

function parseJSON(argument) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);

  if (typeof argument === 'string') {
    var parts = argument.match(/(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(?:\.(\d{0,7}))?(?:Z|(.)(\d{2}):?(\d{2})?)?/);

    if (parts) {
      // Group 8 matches the sign
      return new Date(Date.UTC(+parts[1], +parts[2] - 1, +parts[3], +parts[4] - (+parts[9] || 0) * (parts[8] == '-' ? -1 : 1), +parts[5] - (+parts[10] || 0) * (parts[8] == '-' ? -1 : 1), +parts[6], +((parts[7] || '0') + '00').substring(0, 3)));
    }

    return new Date(NaN);
  }

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(argument);
}

/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index_js__ = __webpack_require__(3);


/**
 * @name quartersToMonths
 * @category Conversion Helpers
 * @summary Convert number of quarters to months.
 *
 * @description
 * Convert a number of quarters to a full number of months.
 *
 * @param {number} quarters - number of quarters to be converted
 *
 * @returns {number} the number of quarters converted in months
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 2 quarters to months
 * const result = quartersToMonths(2)
 * //=> 6
 */

function quartersToMonths(quarters) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Math.floor(quarters * __WEBPACK_IMPORTED_MODULE_1__constants_index_js__["g" /* monthsInQuarter */]);
}

/***/ }),
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index_js__ = __webpack_require__(3);


/**
 * @name quartersToYears
 * @category Conversion Helpers
 * @summary Convert number of quarters to years.
 *
 * @description
 * Convert a number of quarters to a full number of years.
 *
 * @param {number} quarters - number of quarters to be converted
 *
 * @returns {number} the number of quarters converted in years
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 8 quarters to years
 * const result = quartersToYears(8)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = quartersToYears(11)
 * //=> 2
 */

function quartersToYears(quarters) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var years = quarters / __WEBPACK_IMPORTED_MODULE_1__constants_index_js__["a" /* quartersInYear */];
  return Math.floor(years);
}

/***/ }),
/* 248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_toInteger_index_js__ = __webpack_require__(2);


/**
 * @name roundToNearestMinutes
 * @category Minute Helpers
 * @summary Rounds the given date to the nearest minute
 *
 * @description
 * Rounds the given date to the nearest minute (or number of minutes).
 * Rounds up when the given date is exactly between the nearest round minutes.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to round
 * @param {Object} [options] - an object with options.
 * @param {Number} [options.nearestTo=1] - nearest number of minutes to round to. E.g. `15` to round to quarter hours.
 * @returns {Date} the new date rounded to the closest minute
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.nearestTo` must be between 1 and 30
 *
 * @example
 * // Round 10 July 2014 12:12:34 to nearest minute:
 * var result = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34))
 * //=> Thu Jul 10 2014 12:13:00
 *
 * @example
 * // Round 10 July 2014 12:07:30 to nearest quarter hour:
 * var result = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34), { nearestTo: 15 })
 * // rounds up because given date is exactly between 12:00:00 and 12:15:00
 * //=> Thu Jul 10 2014 12:15:00
 */

function roundToNearestMinutes(dirtyDate, options) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only none provided present');
  }

  var nearestTo = options && 'nearestTo' in options ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_toInteger_index_js__["a" /* default */])(options.nearestTo) : 1;

  if (nearestTo < 1 || nearestTo > 30) {
    throw new RangeError('`options.nearestTo` must be between 1 and 30');
  }

  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var seconds = date.getSeconds(); // relevant if nearestTo is 1, which is the default case

  var minutes = date.getMinutes() + seconds / 60;
  var roundedMinutes = Math.floor(minutes / nearestTo) * nearestTo;
  var remainderMinutes = minutes % nearestTo;
  var addedMinutes = Math.round(remainderMinutes / nearestTo) * nearestTo;
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), roundedMinutes + addedMinutes);
}

/***/ }),
/* 249 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index_js__ = __webpack_require__(3);


/**
 * @name secondsToHours
 * @category Conversion Helpers
 * @summary Convert seconds to hours.
 *
 * @description
 * Convert a number of seconds to a full number of hours.
 *
 * @param {number} seconds - number of seconds to be converted
 *
 * @returns {number} the number of seconds converted in hours
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 7200 seconds into hours
 * const result = secondsToHours(7200)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = secondsToHours(7199)
 * //=> 1
 */

function secondsToHours(seconds) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var hours = seconds / __WEBPACK_IMPORTED_MODULE_1__constants_index_js__["f" /* secondsInHour */];
  return Math.floor(hours);
}

/***/ }),
/* 250 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index_js__ = __webpack_require__(3);


/**
 * @name secondsToMilliseconds
 * @category Conversion Helpers
 * @summary Convert seconds to milliseconds.
 *
 * @description
 * Convert a number of seconds to a full number of milliseconds.
 *
 * @param {number} seconds - number of seconds to be converted
 *
 * @returns {number} the number of seconds converted in milliseconds
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 2 seconds into milliseconds
 * const result = secondsToMilliseconds(2)
 * //=> 2000
 */

function secondsToMilliseconds(seconds) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return seconds * __WEBPACK_IMPORTED_MODULE_1__constants_index_js__["e" /* millisecondsInSecond */];
}

/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index_js__ = __webpack_require__(3);


/**
 * @name secondsToMinutes
 * @category Conversion Helpers
 * @summary Convert seconds to minutes.
 *
 * @description
 * Convert a number of seconds to a full number of minutes.
 *
 * @param {number} seconds - number of seconds to be converted
 *
 * @returns {number} the number of seconds converted in minutes
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 120 seconds into minutes
 * const result = secondsToMinutes(120)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = secondsToMinutes(119)
 * //=> 1
 */

function secondsToMinutes(seconds) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var minutes = seconds / __WEBPACK_IMPORTED_MODULE_1__constants_index_js__["d" /* secondsInMinute */];
  return Math.floor(minutes);
}

/***/ }),
/* 252 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__setMonth_index_js__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__(0);





/**
 * @name set
 * @category Common Helpers
 * @summary Set date values to a given date.
 *
 * @description
 * Set date values to a given date.
 *
 * Sets time values to date from object `values`.
 * A value is not set if it is undefined or null or doesn't exist in `values`.
 *
 * Note about bundle size: `set` does not internally use `setX` functions from date-fns but instead opts
 * to use native `Date#setX` methods. If you use this function, you may not want to include the
 * other `setX` functions that date-fns provides if you are concerned about the bundle size.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Object} values - an object with options
 * @param {Number} [values.year] - the number of years to be set
 * @param {Number} [values.month] - the number of months to be set
 * @param {Number} [values.date] - the number of days to be set
 * @param {Number} [values.hours] - the number of hours to be set
 * @param {Number} [values.minutes] - the number of minutes to be set
 * @param {Number} [values.seconds] - the number of seconds to be set
 * @param {Number} [values.milliseconds] - the number of milliseconds to be set
 * @returns {Date} the new date with options set
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `values` must be an object
 *
 * @example
 * // Transform 1 September 2014 into 20 October 2015 in a single line:
 * var result = set(new Date(2014, 8, 20), { year: 2015, month: 9, date: 20 })
 * //=> Tue Oct 20 2015 00:00:00
 *
 * @example
 * // Set 12 PM to 1 September 2014 01:23:45 to 1 September 2014 12:00:00:
 * var result = set(new Date(2014, 8, 1, 1, 23, 45), { hours: 12 })
 * //=> Mon Sep 01 2014 12:23:45
 */
function set(dirtyDate, values) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);

  if (typeof values !== 'object' || values === null) {
    throw new RangeError('values parameter must be an object');
  }

  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate); // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date

  if (isNaN(date.getTime())) {
    return new Date(NaN);
  }

  if (values.year != null) {
    date.setFullYear(values.year);
  }

  if (values.month != null) {
    date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__setMonth_index_js__["a" /* default */])(date, values.month);
  }

  if (values.date != null) {
    date.setDate(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__["a" /* default */])(values.date));
  }

  if (values.hours != null) {
    date.setHours(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__["a" /* default */])(values.hours));
  }

  if (values.minutes != null) {
    date.setMinutes(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__["a" /* default */])(values.minutes));
  }

  if (values.seconds != null) {
    date.setSeconds(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__["a" /* default */])(values.seconds));
  }

  if (values.milliseconds != null) {
    date.setMilliseconds(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__["a" /* default */])(values.milliseconds));
  }

  return date;
}

/***/ }),
/* 253 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);



/**
 * @name setDate
 * @category Day Helpers
 * @summary Set the day of the month to the given date.
 *
 * @description
 * Set the day of the month to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} dayOfMonth - the day of the month of the new date
 * @returns {Date} the new date with the day of the month set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set the 30th day of the month to 1 September 2014:
 * var result = setDate(new Date(2014, 8, 1), 30)
 * //=> Tue Sep 30 2014 00:00:00
 */

function setDate(dirtyDate, dirtyDayOfMonth) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  var dayOfMonth = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyDayOfMonth);
  date.setDate(dayOfMonth);
  return date;
}

/***/ }),
/* 254 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addDays_index_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__(0);





/**
 * @name setDay
 * @category Weekday Helpers
 * @summary Set the day of the week to the given date.
 *
 * @description
 * Set the day of the week to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} day - the day of the week of the new date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the new date with the day of the week set
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Set week day to Sunday, with the default weekStartsOn of Sunday:
 * var result = setDay(new Date(2014, 8, 1), 0)
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // Set week day to Sunday, with a weekStartsOn of Monday:
 * var result = setDay(new Date(2014, 8, 1), 0, { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 00:00:00
 */
function setDay(dirtyDate, dirtyDay, dirtyOptions) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__["a" /* default */])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__["a" /* default */])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  var day = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__["a" /* default */])(dirtyDay);
  var currentDay = date.getDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var delta = 7 - weekStartsOn;
  var diff = day < 0 || day > 6 ? day - (currentDay + delta) % 7 : (dayIndex + delta) % 7 - (currentDay + delta) % 7;
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__addDays_index_js__["a" /* default */])(date, diff);
}

/***/ }),
/* 255 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);



/**
 * @name setDayOfYear
 * @category Day Helpers
 * @summary Set the day of the year to the given date.
 *
 * @description
 * Set the day of the year to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} dayOfYear - the day of the year of the new date
 * @returns {Date} the new date with the day of the year set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set the 2nd day of the year to 2 July 2014:
 * var result = setDayOfYear(new Date(2014, 6, 2), 2)
 * //=> Thu Jan 02 2014 00:00:00
 */

function setDayOfYear(dirtyDate, dirtyDayOfYear) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  var dayOfYear = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyDayOfYear);
  date.setMonth(0);
  date.setDate(dayOfYear);
  return date;
}

/***/ }),
/* 256 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);



/**
 * @name setHours
 * @category Hour Helpers
 * @summary Set the hours to the given date.
 *
 * @description
 * Set the hours to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} hours - the hours of the new date
 * @returns {Date} the new date with the hours set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 4 hours to 1 September 2014 11:30:00:
 * var result = setHours(new Date(2014, 8, 1, 11, 30), 4)
 * //=> Mon Sep 01 2014 04:30:00
 */

function setHours(dirtyDate, dirtyHours) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  var hours = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyHours);
  date.setHours(hours);
  return date;
}

/***/ }),
/* 257 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addDays_index_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getISODay_index_js__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_requiredArgs_index_js__ = __webpack_require__(0);





/**
 * @name setISODay
 * @category Weekday Helpers
 * @summary Set the day of the ISO week to the given date.
 *
 * @description
 * Set the day of the ISO week to the given date.
 * ISO week starts with Monday.
 * 7 is the index of Sunday, 1 is the index of Monday etc.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} day - the day of the ISO week of the new date
 * @returns {Date} the new date with the day of the ISO week set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set Sunday to 1 September 2014:
 * const result = setISODay(new Date(2014, 8, 1), 7)
 * //=> Sun Sep 07 2014 00:00:00
 */

function setISODay(dirtyDate, dirtyDay) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  var day = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyDay);
  var currentDay = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__getISODay_index_js__["a" /* default */])(date);
  var diff = day - currentDay;
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__addDays_index_js__["a" /* default */])(date, diff);
}

/***/ }),
/* 258 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getISOWeek_index_js__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__(0);




/**
 * @name setISOWeek
 * @category ISO Week Helpers
 * @summary Set the ISO week to the given date.
 *
 * @description
 * Set the ISO week to the given date, saving the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} isoWeek - the ISO week of the new date
 * @returns {Date} the new date with the ISO week set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set the 53rd ISO week to 7 August 2004:
 * const result = setISOWeek(new Date(2004, 7, 7), 53)
 * //=> Sat Jan 01 2005 00:00:00
 */

function setISOWeek(dirtyDate, dirtyISOWeek) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  var isoWeek = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyISOWeek);
  var diff = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__getISOWeek_index_js__["a" /* default */])(date) - isoWeek;
  date.setDate(date.getDate() - diff * 7);
  return date;
}

/***/ }),
/* 259 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);



/**
 * @name setMilliseconds
 * @category Millisecond Helpers
 * @summary Set the milliseconds to the given date.
 *
 * @description
 * Set the milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} milliseconds - the milliseconds of the new date
 * @returns {Date} the new date with the milliseconds set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 300 milliseconds to 1 September 2014 11:30:40.500:
 * const result = setMilliseconds(new Date(2014, 8, 1, 11, 30, 40, 500), 300)
 * //=> Mon Sep 01 2014 11:30:40.300
 */

function setMilliseconds(dirtyDate, dirtyMilliseconds) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  var milliseconds = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyMilliseconds);
  date.setMilliseconds(milliseconds);
  return date;
}

/***/ }),
/* 260 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);



/**
 * @name setMinutes
 * @category Minute Helpers
 * @summary Set the minutes to the given date.
 *
 * @description
 * Set the minutes to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} minutes - the minutes of the new date
 * @returns {Date} the new date with the minutes set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 45 minutes to 1 September 2014 11:30:40:
 * const result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:45:40
 */

function setMinutes(dirtyDate, dirtyMinutes) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  var minutes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyMinutes);
  date.setMinutes(minutes);
  return date;
}

/***/ }),
/* 261 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setMonth_index_js__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__(0);




/**
 * @name setQuarter
 * @category Quarter Helpers
 * @summary Set the year quarter to the given date.
 *
 * @description
 * Set the year quarter to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} quarter - the quarter of the new date
 * @returns {Date} the new date with the quarter set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set the 2nd quarter to 2 July 2014:
 * const result = setQuarter(new Date(2014, 6, 2), 2)
 * //=> Wed Apr 02 2014 00:00:00
 */

function setQuarter(dirtyDate, dirtyQuarter) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  var quarter = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyQuarter);
  var oldQuarter = Math.floor(date.getMonth() / 3) + 1;
  var diff = quarter - oldQuarter;
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__setMonth_index_js__["a" /* default */])(date, date.getMonth() + diff * 3);
}

/***/ }),
/* 262 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);



/**
 * @name setSeconds
 * @category Second Helpers
 * @summary Set the seconds to the given date.
 *
 * @description
 * Set the seconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} seconds - the seconds of the new date
 * @returns {Date} the new date with the seconds set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 45 seconds to 1 September 2014 11:30:40:
 * const result = setSeconds(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:30:45
 */

function setSeconds(dirtyDate, dirtySeconds) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  var seconds = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtySeconds);
  date.setSeconds(seconds);
  return date;
}

/***/ }),
/* 263 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getWeek_index_js__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__(0);





/**
 * @name setWeek
 * @category Week Helpers
 * @summary Set the local week to the given date.
 *
 * @description
 * Set the local week to the given date, saving the weekday number.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} week - the week of the new date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @returns {Date} the new date with the local week set
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 *
 * @example
 * // Set the 1st week to 2 January 2005 with default options:
 * var result = setWeek(new Date(2005, 0, 2), 1)
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // Set the 1st week to 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January:
 * var result = setWeek(new Date(2005, 0, 2), 1, {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Sun Jan 4 2004 00:00:00
 */
function setWeek(dirtyDate, dirtyWeek, options) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  var week = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__["a" /* default */])(dirtyWeek);
  var diff = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getWeek_index_js__["a" /* default */])(date, options) - week;
  date.setDate(date.getDate() - diff * 7);
  return date;
}

/***/ }),
/* 264 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__differenceInCalendarDays_index_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__startOfWeekYear_index_js__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_requiredArgs_index_js__ = __webpack_require__(0);






/**
 * @name setWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Set the local week-numbering year to the given date.
 *
 * @description
 * Set the local week-numbering year to the given date,
 * saving the week number and the weekday number.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} weekYear - the local week-numbering year of the new date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @returns {Date} the new date with the local week-numbering year set
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 *
 * @example
 * // Set the local week-numbering year 2004 to 2 January 2010 with default options:
 * var result = setWeekYear(new Date(2010, 0, 2), 2004)
 * //=> Sat Jan 03 2004 00:00:00
 *
 * @example
 * // Set the local week-numbering year 2004 to 2 January 2010,
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * var result = setWeekYear(new Date(2010, 0, 2), 2004, {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Sat Jan 01 2005 00:00:00
 */
function setWeekYear(dirtyDate, dirtyWeekYear) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_toInteger_index_js__["a" /* default */])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_toInteger_index_js__["a" /* default */])(options.firstWeekContainsDate);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__toDate_index_js__["a" /* default */])(dirtyDate);
  var weekYear = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_toInteger_index_js__["a" /* default */])(dirtyWeekYear);
  var diff = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__differenceInCalendarDays_index_js__["a" /* default */])(date, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__startOfWeekYear_index_js__["a" /* default */])(date, options));
  var firstWeek = new Date(0);
  firstWeek.setFullYear(weekYear, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__startOfWeekYear_index_js__["a" /* default */])(firstWeek, options);
  date.setDate(date.getDate() + diff);
  return date;
}

/***/ }),
/* 265 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);



/**
 * @name setYear
 * @category Year Helpers
 * @summary Set the year to the given date.
 *
 * @description
 * Set the year to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} year - the year of the new date
 * @returns {Date} the new date with the year set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set year 2013 to 1 September 2014:
 * const result = setYear(new Date(2014, 8, 1), 2013)
 * //=> Sun Sep 01 2013 00:00:00
 */

function setYear(dirtyDate, dirtyYear) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  var year = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyYear); // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date

  if (isNaN(date.getTime())) {
    return new Date(NaN);
  }

  date.setFullYear(year);
  return date;
}

/***/ }),
/* 266 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__(0);


/**
 * @name startOfDecade
 * @category Decade Helpers
 * @summary Return the start of a decade for the given date.
 *
 * @description
 * Return the start of a decade for the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a decade
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a decade for 21 October 2015 00:00:00:
 * const result = startOfDecade(new Date(2015, 9, 21, 00, 00, 00))
 * //=> Jan 01 2010 00:00:00
 */

function startOfDecade(dirtyDate) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var year = date.getFullYear();
  var decade = Math.floor(year / 10) * 10;
  date.setFullYear(decade, 0, 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),
/* 267 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__startOfDay_index_js__ = __webpack_require__(27);

/**
 * @name startOfToday
 * @category Day Helpers
 * @summary Return the start of today.
 * @pure false
 *
 * @description
 * Return the start of today.
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @returns {Date} the start of today
 *
 * @example
 * // If today is 6 October 2014:
 * var result = startOfToday()
 * //=> Mon Oct 6 2014 00:00:00
 */

function startOfToday() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__startOfDay_index_js__["a" /* default */])(Date.now());
}

/***/ }),
/* 268 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/**
 * @name startOfTomorrow
 * @category Day Helpers
 * @summary Return the start of tomorrow.
 * @pure false
 *
 * @description
 * Return the start of tomorrow.
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `new Date()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @returns {Date} the start of tomorrow
 *
 * @example
 * // If today is 6 October 2014:
 * const result = startOfTomorrow()
 * //=> Tue Oct 7 2014 00:00:00
 */
function startOfTomorrow() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth();
  var day = now.getDate();
  var date = new Date(0);
  date.setFullYear(year, month, day + 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),
/* 269 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/**
 * @name startOfYesterday
 * @category Day Helpers
 * @summary Return the start of yesterday.
 * @pure false
 *
 * @description
 * Return the start of yesterday.
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `new Date()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @returns {Date} the start of yesterday
 *
 * @example
 * // If today is 6 October 2014:
 * const result = startOfYesterday()
 * //=> Sun Oct 5 2014 00:00:00
 */
function startOfYesterday() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth();
  var day = now.getDate();
  var date = new Date(0);
  date.setFullYear(year, month, day - 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),
/* 270 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addBusinessDays_index_js__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);



/**
 * @name subBusinessDays
 * @category Day Helpers
 * @summary Substract the specified number of business days (mon - fri) to the given date.
 *
 * @description
 * Substract the specified number of business days (mon - fri) to the given date, ignoring weekends.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of business days to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the business days subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Substract 10 business days from 1 September 2014:
 * var result = subBusinessDays(new Date(2014, 8, 1), 10)
 * //=> Mon Aug 18 2014 00:00:00 (skipped weekend days)
 */

function subBusinessDays(dirtyDate, dirtyAmount) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var amount = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__addBusinessDays_index_js__["a" /* default */])(dirtyDate, -amount);
}

/***/ }),
/* 271 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addHours_index_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);



/**
 * @name subHours
 * @category Hour Helpers
 * @summary Subtract the specified number of hours from the given date.
 *
 * @description
 * Subtract the specified number of hours from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of hours to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the hours subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 2 hours from 11 July 2014 01:00:00:
 * const result = subHours(new Date(2014, 6, 11, 1, 0), 2)
 * //=> Thu Jul 10 2014 23:00:00
 */

function subHours(dirtyDate, dirtyAmount) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var amount = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__addHours_index_js__["a" /* default */])(dirtyDate, -amount);
}

/***/ }),
/* 272 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addMinutes_index_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);



/**
 * @name subMinutes
 * @category Minute Helpers
 * @summary Subtract the specified number of minutes from the given date.
 *
 * @description
 * Subtract the specified number of minutes from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of minutes to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the minutes subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 30 minutes from 10 July 2014 12:00:00:
 * const result = subMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 11:30:00
 */

function subMinutes(dirtyDate, dirtyAmount) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var amount = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__addMinutes_index_js__["a" /* default */])(dirtyDate, -amount);
}

/***/ }),
/* 273 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addQuarters_index_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);



/**
 * @name subQuarters
 * @category Quarter Helpers
 * @summary Subtract the specified number of year quarters from the given date.
 *
 * @description
 * Subtract the specified number of year quarters from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of quarters to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the quarters subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 3 quarters from 1 September 2014:
 * const result = subQuarters(new Date(2014, 8, 1), 3)
 * //=> Sun Dec 01 2013 00:00:00
 */

function subQuarters(dirtyDate, dirtyAmount) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var amount = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__addQuarters_index_js__["a" /* default */])(dirtyDate, -amount);
}

/***/ }),
/* 274 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addSeconds_index_js__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);



/**
 * @name subSeconds
 * @category Second Helpers
 * @summary Subtract the specified number of seconds from the given date.
 *
 * @description
 * Subtract the specified number of seconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of seconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the seconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 30 seconds from 10 July 2014 12:45:00:
 * const result = subSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
 * //=> Thu Jul 10 2014 12:44:30
 */

function subSeconds(dirtyDate, dirtyAmount) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var amount = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__addSeconds_index_js__["a" /* default */])(dirtyDate, -amount);
}

/***/ }),
/* 275 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addWeeks_index_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);



/**
 * @name subWeeks
 * @category Week Helpers
 * @summary Subtract the specified number of weeks from the given date.
 *
 * @description
 * Subtract the specified number of weeks from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the weeks subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 4 weeks from 1 September 2014:
 * const result = subWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Aug 04 2014 00:00:00
 */

function subWeeks(dirtyDate, dirtyAmount) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var amount = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__addWeeks_index_js__["a" /* default */])(dirtyDate, -amount);
}

/***/ }),
/* 276 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addYears_index_js__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(0);



/**
 * @name subYears
 * @category Year Helpers
 * @summary Subtract the specified number of years from the given date.
 *
 * @description
 * Subtract the specified number of years from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of years to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the years subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 5 years from 1 September 2014:
 * const result = subYears(new Date(2014, 8, 1), 5)
 * //=> Tue Sep 01 2009 00:00:00
 */

function subYears(dirtyDate, dirtyAmount) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var amount = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__addYears_index_js__["a" /* default */])(dirtyDate, -amount);
}

/***/ }),
/* 277 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index_js__ = __webpack_require__(3);


/**
 * @name weeksToDays
 * @category Conversion Helpers
 * @summary Convert weeks to days.
 *
 * @description
 * Convert a number of weeks to a full number of days.
 *
 * @param {number} weeks - number of weeks to be converted
 *
 * @returns {number} the number of weeks converted in days
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 2 weeks into days
 * const result = weeksToDays(2)
 * //=> 14
 */

function weeksToDays(weeks) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Math.floor(weeks * __WEBPACK_IMPORTED_MODULE_1__constants_index_js__["c" /* daysInWeek */]);
}

/***/ }),
/* 278 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index_js__ = __webpack_require__(3);


/**
 * @name yearsToMonths
 * @category Conversion Helpers
 * @summary Convert years to months.
 *
 * @description
 * Convert a number of years to a full number of months.
 *
 * @param {number} years - number of years to be converted
 *
 * @returns {number} the number of years converted in months
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 2 years into months
 * const result = yearsToMonths(2)
 * //=> 24
 */

function yearsToMonths(years) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Math.floor(years * __WEBPACK_IMPORTED_MODULE_1__constants_index_js__["b" /* monthsInYear */]);
}

/***/ }),
/* 279 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index_js__ = __webpack_require__(3);


/**
 * @name yearsToQuarters
 * @category Conversion Helpers
 * @summary Convert years to quarters.
 *
 * @description
 * Convert a number of years to a full number of quarters.
 *
 * @param {number} years - number of years to be converted
 *
 * @returns {number} the number of years converted in quarters
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 2 years to quarters
 * const result = yearsToQuarters(2)
 * //=> 8
 */

function yearsToQuarters(years) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Math.floor(years * __WEBPACK_IMPORTED_MODULE_1__constants_index_js__["a" /* quartersInYear */]);
}

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(114);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(102)(content, {});
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
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(115);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(102)(content, {});
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
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(103);
module.exports = __webpack_require__(104);


/***/ })
/******/ ]);