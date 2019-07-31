(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["panorama"] = factory();
	else
		root["panorama"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/panorama.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/css/panorama.less":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/less-loader/dist/cjs.js!./src/css/panorama.less ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".panorama__centering--1X83W {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.panorama__wrapper--3MegC {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n.panorama__overlay--R54RO {\n  /* overlay on the parent(wrapper), one's position is relative and\n  the other is absolute. */\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  /* background-color: #1EB9FF; */\n}\n.panorama__progressWrapper--22Leb {\n  width: 35%;\n  height: 8px;\n  border: 1px solid #FFF;\n}\n.panorama__progressBar--PSISO {\n  background-color: #FFF;\n  width: 0;\n  height: 100%;\n}\n.panorama__progressMessage--2HWiB {\n  color: #FFF;\n  float: left;\n}\n.panorama__percentageNum--3V2fE {\n  color: #FFF;\n  float: right;\n}\n", ""]);
// Exports
exports.locals = {
	"centering": "panorama__centering--1X83W",
	"wrapper": "panorama__wrapper--3MegC",
	"overlay": "panorama__overlay--R54RO",
	"progressWrapper": "panorama__progressWrapper--22Leb panorama__centering--1X83W",
	"progressBar": "panorama__progressBar--PSISO",
	"progressMessage": "panorama__progressMessage--2HWiB",
	"percentageNum": "panorama__percentageNum--3V2fE"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
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

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

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

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/css/panorama.less":
/*!*******************************!*\
  !*** ./src/css/panorama.less ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../node_modules/less-loader/dist/cjs.js!./panorama.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/css/panorama.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/panorama.js":
/*!*************************!*\
  !*** ./src/panorama.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_m4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/m4 */ "./src/utils/m4.js");
/* harmony import */ var _utils_m4__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils_m4__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _webgl_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webgl-helper */ "./src/webgl-helper.js");
/* harmony import */ var _css_panorama_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/panorama.less */ "./src/css/panorama.less");
/* harmony import */ var _css_panorama_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_panorama_less__WEBPACK_IMPORTED_MODULE_2__);







/**
 * Panorama.js. create panorama
 *
 * @param {Object} setting  the setting of panorama.js.
 * @param {string|DOMElement} [setting.container=document.body] To specify which container that the panorama puts in, can be either css selector string(like "#id" ".clazzname" "div#id") or DOMElement(like document.querySelector("#id"), document.getElementById("id") ).
 * @param {string} setting.src the image url of the actual panorama.
 * @param {number} [setting.fov=90] the Field Of View in degrees, the camera view angle scope.
 * @param {number array} [setting.cameraDegree=[0,0]] two numbers represent the horizonal and vertical degrees of camera,
 *  default is [0,0] which means the default start point of the panorama image.
 *  the first number ranges from 0 to 360 which is horizonal degree which is the direction that camera looks on the horizon.
 *  the second number ranges from -90 to 90 (totally 180 degrees)  which is vertical degrees or the Pitch angle when look up or look down,
 *  positive numbers(0 to 90) are the degrees that looks up, 90 is the north pole(the top);
 *  negative numbers(-90 to 0) are the degrees that looks down, -90 is the south pole(the bottom);
 */
function panorama(setting) {

  // const CLAZZ = 'panorama'; // css class name. [NOT USED YET]

  setting = handleSetting(setting);

  const {container, url, fov, cameraDegree} = setting;
  const {radius, numVerticalSegments, numHorizonalSegements} = setting.sphere;

  const canvas = document.createElement("canvas");
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;

  const wrapper = document.createElement("div");
  wrapper.classList.add(_css_panorama_less__WEBPACK_IMPORTED_MODULE_2___default.a.wrapper);

  // user container > wrapper > canvas
  container.appendChild(wrapper);
  wrapper.appendChild(canvas);

  // overlay
  const overlay = document.createElement("div");
  overlay.className = _css_panorama_less__WEBPACK_IMPORTED_MODULE_2___default.a.overlay;
  wrapper.appendChild(overlay);

  const gl = canvas.getContext("webgl"); // gl: WebGLRenderingContext

  // not support Webgl
  if (gl === null) {
    // TODO warnig the msg that webgl isn't avaiable.
    throw Error({
      type: "Not support WebGL",
      msg: "WebGL isn't support. the panorama will not work.",
    });
  }

  gl.enable(gl.CULL_FACE); // only draw the front face which the vertices is drawn clockwise.
  // Set clear color to black, fully opaque
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // Clear the color buffer with specified clear color
  gl.clear(gl.COLOR_BUFFER_BIT);


  // Vertex shader program
  const vsSource = `
    attribute vec4 aVertexPosition;
    attribute vec2 aTextureCoordinate;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    varying highp vec2 vTextureCoordinate;

    void main() {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
      vTextureCoordinate = aTextureCoordinate;
    }
  `;

  // Fragment shader program
  const fsSource = `
    varying highp vec2 vTextureCoordinate;

    uniform sampler2D uSampler;

    void main(void) {
      gl_FragColor = texture2D(uSampler, vTextureCoordinate);
    }
  `;

  const shaderProgram = Object(_webgl_helper__WEBPACK_IMPORTED_MODULE_1__["initShaderProgram"])(gl, vsSource, fsSource);

  const programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
      textureCoordinate: gl.getAttribLocation(shaderProgram, 'aTextureCoordinate'),
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
      uSampler: gl.getUniformLocation(shaderProgram, 'uSampler'),
    },
  };

  // create one sphere vertices
  const sphereVertices = Object(_webgl_helper__WEBPACK_IMPORTED_MODULE_1__["createSphereVertices"])(radius, numVerticalSegments, numHorizonalSegements);

  // create one progress helper function to control loading info.
  const loadingProgressHelper = loadingProgressFactory(overlay, "loading panorama...");

  const gl_loadTexture = curry(loadTexture, gl); // method, first argument
  const texture = gl_loadTexture(
    url,
    ()=>{ // callback after finishing to load the texture
      loadingProgressHelper.hide(); // hide progress info
      needToRedraw = true;
    },
    loadingProgressHelper.createOrUpdate // callback while loading
  );

  const buffers = initBuffers(gl);
  function initBuffers(gl) {

    // position buffer parts
    const positions = sphereVertices.poistions.flat();

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions),
      gl.STATIC_DRAW);

    // texture parts
    const textureCoords = sphereVertices.textureCoordinates.flat();

    const textureCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);

    // build the element array.
    const indices = sphereVertices.indices.flat();

    const indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices),
      gl.STATIC_DRAW);

    return {
      position: positionBuffer,
      textureCoordinate: textureCoordBuffer,
      indices: indexBuffer,
    };
  }

  /**
   * Carefully! the range of user setting vertical degrees (-90 to 90) is
   * the reversed order of the latitude(0 to Math.PI) that develops need, also with the offset of half of PI.
   * latitude 0 means the north pole(the top) that is the user setting degree 90.
   *
   * Why make user setting and actual data such different?
   * Anwser: easy for use. `[0,0]`as startpoint matches the man's intuition.
   */
  let {latitude, longitude} = userCameraDegreeToLatLon(cameraDegree);
  let targetPosition = latlonToVertex(latitude, longitude); // camera target position

  function drawScene(gl, programInfo, buffers) {
    gl.clearColor(0.0, 0.0, 0.0, 1.0);  // Clear to black, fully opaque
    gl.clearDepth(1.0);                 // Clear everything
    gl.enable(gl.DEPTH_TEST);           // Enable depth testing
    gl.depthFunc(gl.LEQUAL);            // Near things obscure far things

    // Clear the canvas before we start drawing on it.

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // Create a perspective matrix, a special matrix that is
    // used to simulate the distortion of perspective in a camera.
    // Our field of view is 45 degrees, with a width/height
    // ratio that matches the display size of the canvas
    // and we only want to see objects between 0.1 units
    // and 100 units away from the camera.

    const fieldOfView = fov * Math.PI / 180;   // in radians
    const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    const zNear = 0.1;
    const zFar = 100.0;
    const projectionMatrix = _utils_m4__WEBPACK_IMPORTED_MODULE_0___default.a.perspective(
      fieldOfView,
      aspect,
      zNear,
      zFar);

    // Camera matrix
    const cameraUp = [0, 1, 0];
    let cameraMatrix = _utils_m4__WEBPACK_IMPORTED_MODULE_0___default.a.lookAt([0, 0, 0], targetPosition, cameraUp);

    // cameraMatrix = m4.translate(cameraMatrix, 0, 0, -3);

    // Set the drawing position to the "identity" point, which is
    // the center of the scene.
    let modelViewMatrix = _utils_m4__WEBPACK_IMPORTED_MODULE_0___default.a.inverse(cameraMatrix);

    let scale = _utils_m4__WEBPACK_IMPORTED_MODULE_0___default.a.scaling(-1, 1, 1);
    modelViewMatrix = _utils_m4__WEBPACK_IMPORTED_MODULE_0___default.a.multiply(modelViewMatrix, scale);

    // Tell WebGL how to pull out the positions from the position
    // buffer into the vertexPosition attribute.
    {
      const numComponents = 3;  // pull out 3 (x,y,z) values per iteration
      const type = gl.FLOAT;    // the data in the buffer is 32bit floats
      const normalize = false;  // don't normalize
      const stride = 0;         // how many bytes to get from one set of values to the next
                                // 0 = use type and numComponents above
      const offset = 0;         // how many bytes inside the buffer to start from
      gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
      gl.vertexAttribPointer(
          programInfo.attribLocations.vertexPosition,
          numComponents,
          type,
          normalize,
          stride,
          offset);
      gl.enableVertexAttribArray(
          programInfo.attribLocations.vertexPosition);
    }

    // tell webgl how to pull out the texture coordinates from buffer
    {
      const numComponents = 2; // every coordinate composed of 2 values
      const type = gl.FLOAT; // the data in the buffer is 32 bit float
      const normalize = false; // don't normalize
      const stride = 0; // how many bytes to get from one set to the next
      const offset = 0; // how many bytes inside the buffer to start from
      gl.bindBuffer(gl.ARRAY_BUFFER, buffers.textureCoordinate);
      gl.vertexAttribPointer(
        programInfo.attribLocations.textureCoordinate,
         numComponents, type, normalize, stride, offset);
      gl.enableVertexAttribArray(programInfo.attribLocations.textureCoordinate);
    }

    // Tell WebGL which indices to use to index the vertices
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);

    // Tell WebGL to use our program when drawing

    gl.useProgram(programInfo.program);

    // Set the shader uniforms

    gl.uniformMatrix4fv(
        programInfo.uniformLocations.projectionMatrix,
        false,
        projectionMatrix);
    gl.uniformMatrix4fv(
        programInfo.uniformLocations.modelViewMatrix,
        false,
        modelViewMatrix);

    /* Specify the texture to map onto the faces. */

    // Tell WebGL we want to affect texture unit 0
    gl.activeTexture(gl.TEXTURE0);

    // Bind the texture to texture unit 0
    gl.bindTexture(gl.TEXTURE_2D, texture);

    // Tell the shader we bound the texture to texture unit 0
    gl.uniform1i(programInfo.uniformLocations.uSampler, 0);

    {
      const vertexCount = sphereVertices.indices.length*3;
      const type = gl.UNSIGNED_SHORT;
      const offset = 0;
      gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
    }
  } //[end] drawScene function

  const {updateCamera, finishUpdateCamera} = (function(){
    // store current latitude and longitude during dragging.
    // only update the actual latitude and longitude after finish dragging.
    let lat;
    let lon;

    /**
     *  The function to change the camera's target that it looks at,
     *  Also the callback function that is passed in the drag and move event.
     *
     * @param {number} deltaX the current latitude which camera targets
     * @param {number} deltaY  the current longitude which camera targets
     */
    function updateCamera(deltaX, deltaY) {
      // update the latlon by adding delta value
      // Treat the delta value as the movement on the circumference(very close),
      // and calculate the ratio of the movement over circumference and get the radian
      // delta longitude = deltaX / circumference * (2*Math.PI),
      // becasuse circumference is (2*Math.PI*radius), so the simplify formular is deltaX / radius.
      let deltaLon = deltaX / radius;
      let delatLat = deltaY / radius;

      lat = delatLat+latitude;
      lon = deltaLon+longitude;

      // lock latitude range, not pass two poles
      const maxLat = Math.PI * (1 - 0.05);
      const minLat = Math.PI * (0 + 0.05);
      if (lat > maxLat) {
        lat = maxLat;
      } else if (lat < minLat) {
        lat = minLat;
      }

      // compute the lookAt vertice.
      targetPosition = latlonToVertex(lat, lon);

      needToRedraw = true; // redraw the scene
    }

    function finishUpdateCamera() {
      // update the actual varible latitude and longitude until dragging is done.
      latitude = lat;
      longitude = lon;
    }

    return {updateCamera, finishUpdateCamera};
  })();

  // handle user input and control the camera, mouse and touch
  let mouseEventHandlers = userControlHandler(updateCamera, finishUpdateCamera, false);
  let touchEventHandlers = userControlHandler(updateCamera, finishUpdateCamera, true);


  // register mouse drag events
  const mouseEventTypes = ["mousedown", "mousemove", "mouseup"];

  Object.keys(mouseEventHandlers).map((key, idx) => {
    wrapper.addEventListener(mouseEventTypes[idx], mouseEventHandlers[key], false);
  });

  // register touch drag events
  const touchEventTypes = ["touchstart", "touchmove", "touchend"];

  Object.keys(touchEventHandlers).map((key, idx) => {
    wrapper.addEventListener(touchEventTypes[idx], touchEventHandlers[key], false);
  });



  const deviceOrientationHelper = createDeviceOrientationHelper((deltaAlpha, deltaBeta) => {
    // delta values are calculated in degrees. convert those to latlon radians and use directly
    const deltaLon = degreeToRadian(deltaAlpha);
    const deltaLat = degreeToRadian(deltaBeta);

    latitude -= deltaLat;
    longitude -= deltaLon;
    targetPosition = latlonToVertex(latitude, longitude);
    needToRedraw = true;

  });
  // reigster device orientation event to window.
  window.addEventListener("deviceorientation", deviceOrientationHelper.handler, true);


  /**
   * Check the display size(`canvas.clientWidth` and `canvas.clientHeight`) whether it's changed.
   * Update the canvas render size(`canvas.width` and `canvas.height`) to the current display size.
   * And return `true` when the size is changed, otherwise `false`
   *
   * @return {boolean} true: need resize; false: no need.
   */
  function resize(){
    const clientWidth = gl.canvas.clientWidth;
    const clientHeight = gl.canvas.clientHeight;

    if (gl.canvas.width !== clientWidth || gl.canvas.height !== clientHeight){
      gl.canvas.width = clientWidth;
      gl.canvas.height = clientHeight;
      return true;
    }
    return false;
  }

  let needToRedraw = true;
  // Draw the scene repeatedly
  function render() {
    if(resize() || needToRedraw){
      // need draw
      needToRedraw = false;
      drawScene(gl, programInfo, buffers);
    }

    requestAnimationFrame(render);
  }

  render(); // init call `render()`

  // drawScene(gl, programInfo, buffers);

  return {container};
} // [end] function panorama

/**
 * Convert user input camere degree to actual longitude and latitude that
 * are used for camera lookAt poisition matrix.
 * Because latlon are in radians. For easy use, the user input is in degree.
 * Also the latitude ranges from 0 to PI that are like North Pole and South Pole on the Earth,
 * Correspond to latitude, the user input vertical degree ranges from 90 to -90 that
 * is reversed order of latitude and is offset half of PI.
 *
 * @param {Number Array} degree  two number array contains the horizonal degree and
 *  the vertical degree.
 */
function userCameraDegreeToLatLon(degree){
  let latitude =  -degreeToRadian(degree[1]) + (Math.PI / 2);
  let longitude =  degreeToRadian(degree[0]); // trans to radian directly
  return {latitude: latitude, longitude: longitude};
}

// compute the radian of the degree. 90deg -> PI/2; 180deg -> PI; 45deg-> PI/4;
const degreeToRadian = (deg) => (deg / 180 * Math.PI);
const radianToDegree = (radian) => (radian / Math.PI * 180);

/**
 * Transform the latitude and longitude to the correspond vertex in [x,y,z]. (the target point in the sphere whose radius is 1)
 *
 * @param {number} latitude the radian of latitude, normally from -PI to PI.
 * @param {number} longitude the radian of logitude, normally from 0 to 2*PI.
 */
function latlonToVertex(latitude, longitude){
  const theta = longitude;
  const phi = latitude;

  const sinTheta = Math.sin(theta), cosTheta = Math.cos(theta);
  const sinPhi = Math.sin(phi), costPhi = Math.cos(phi);

  const ux = cosTheta * sinPhi;
  const uy = costPhi;
  const uz = sinTheta * sinPhi;

  return [ux, uy, uz];
}

const createDeviceOrientationHelper = function (callback) {
  let enabled = true;

  let alphaBefore, betaBefore;
  function deviceOrientationHandler(event) {
    if (enabled) { // record motion(orientation) data
      const {alpha, beta} = event; // current orientation data

      if (typeof alphaBefore === "undefined") {
        // no data recorded before, set previous value directly.
        alphaBefore = alpha;
        betaBefore = beta;
      }

      // calculate the delta, then invoke callback
      const deltaAlpha = alpha - alphaBefore;
      const deltaBeta = beta - betaBefore;
      // record data
      alphaBefore = alpha;
      betaBefore = beta;

      // invoke callback
      callback(deltaAlpha, deltaBeta);

    } else { // disable orientation
      alphaBefore = undefined;
      betaBefore = undefined;
    }
  }

  return {
    handler: deviceOrientationHandler,
    enable : () => enabled=true,
    disable: () => enabled=false
  };
};

/**
 * Generate the three event handler for user's input control when is dragging.
 * `startHandler` is used for the begin of the dragging control, handle `mousedown` event or `touchstart` event.
 * `moveHandler` is used when user is dragging, handle `mousemove` event or `touchmove` event.
 * `endHandler` is used for the end of the dragging control, handle `mouseup` or  `touchend` event.
 *
 * @param {function} draggingCallback the callback function handle user drag movement when user is dragging.
 *  passed two arguments current deltaX and deltaY(user movement in pixel) that is used later to compute the camera `look at` (target position).
 * @param {boolean} [isTouch=false] true if user use touch device to drag and move, false otherwise(like mouse).
 * @param {number} [moveSpeed=1] the multiplier of the user movement speed, default it's 1 that is normal speed and no change.
 */
const userControlHandler = function (draggingCallback, endDragCallback, isTouch, moveSpeed) {

  let startX = 0;
  let startY = 0;
  let isUserDragging = false; // true during user drags

  // set default value 1 to moveSpeed
  if (typeof moveSpeed === "undefined") {moveSpeed = 1;}

  // get clientX and clientY either from mouse(click) or touch.
  const getXY = isTouch ?
    (eventTarget) => ({x: eventTarget.changedTouches[0].clientX, y: eventTarget.changedTouches[0].clientY}) :
    (eventTarget) => ({x: eventTarget.clientX, y: eventTarget.clientY});


  function startHandler(event){
    event.preventDefault();

    isUserDragging = true;

    let {x, y} = getXY(event);
    startX = x;
    startY = y;
  }

  function moveHandler(event){

    if (isUserDragging === true) {
      let {x, y} = getXY(event);
      let deltaX = x - startX;
      let deltaY = y - startY;

      deltaX = deltaX * moveSpeed;
      deltaY = deltaY * moveSpeed;

      draggingCallback(deltaX, deltaY);
    }
  }

  function endHandler(event){
    isUserDragging = false; // reset

    endDragCallback();
  }

  return {
    startHandler,
    moveHandler,
    endHandler,
  };
}; // [end] return actual function


const loadingProgressFactory = function(parent, text=""){
  let progressWrapper = undefined; // store DOMElement later
  let progressBar = undefined;
  let message = undefined;
  let percentageNumEl = undefined;

  // the actual function
  function createOrUpdate(loaded, total) {
    if (typeof progressWrapper === "undefined") {
      // create DOMELement of the progress bar
      progressWrapper = document.createElement("div");
      progressWrapper.className = _css_panorama_less__WEBPACK_IMPORTED_MODULE_2___default.a.progressWrapper;

      progressBar = document.createElement("div");
      progressWrapper.appendChild(progressBar);
      progressBar.className = _css_panorama_less__WEBPACK_IMPORTED_MODULE_2___default.a.progressBar;

      progressWrapper.appendChild(progressBar);
      parent.appendChild(progressWrapper);
    }

    if(text && typeof message === "undefined"){
      createMessage();
    }

    // update progress bar.
    const ratio = (loaded / total).toPrecision(4);
    if (!Number.isNaN(ratio)) {
      // actually have percentage number
      const percentageNum = `${ratio * 100}%`;
      progressBar.style.width = percentageNum;

      // show percentage number text
      createOrUpdatePercentageNumber(percentageNum);
    }
  }

  function createOrUpdatePercentageNumber(percentageNum) {
    if (typeof percentageNumEl === "undefined") {
      // if not exists, create
      percentageNumEl = document.createElement("div");
      percentageNumEl.className = _css_panorama_less__WEBPACK_IMPORTED_MODULE_2___default.a.percentageNum;

      progressWrapper.appendChild(percentageNumEl);
    }
    percentageNumEl.innerText = percentageNum;
  }

  function createMessage() {
    message = document.createElement("div");
    message.className = _css_panorama_less__WEBPACK_IMPORTED_MODULE_2___default.a.progressMessage;
    message.innerText = text;

    progressWrapper.appendChild(message);
  }

  function hide(){
    progressWrapper.style.display = "none";
  }

  function show(){
    progressWrapper.style.display = "block";
  }

  return {createOrUpdate, hide, show};
};

/**
 *
 * @param {WebGLRenderingContext} gl The context of webgl
 * @param {string} url image url that is used as texture
 * @param {function} textureLoadedCallback Optional, the function is called with loaded texture argument
 *  when texture is already loaded. Usually contains the method that redraw webgl scene to show the texture.
 * @return {WebGLTexture} the webgl texture. Be careful, the texture is loaded asynchronously(load image asynchronously),
 *  it would be placeholder(single color) at the beginning. So use the callback function to handle the loaded texture.
 */
function loadTexture(gl, url, textureLoadedCallback, loadingCallback){
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);

  const level = 0;
  const internalFormat = gl.RGBA;
  const srcFormat = gl.RGBA;
  const srcType = gl.UNSIGNED_BYTE;

  // grey placeholder color before texture loaded // [0,0,255,128]opaque blue
  const pixel = new Uint8Array([0, 0, 0, 128]);
  const width = 1;
  const height = 1;
  const border = 0;
  gl.texImage2D(gl.TEXTURE_2D, level, internalFormat,
                width, height, border, srcFormat, srcType,
                pixel);

  /**
   * The callback function would be called when complete loading image.
   * Set the panorama image as the texture.
   * @param {HTMLImageElement} image  the image element that is used as texture
   */
  function bindImageTextureCallback (image) {

    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, level, internalFormat,
                  srcFormat, srcType, image);

    // WebGL1 has different requirements for power of 2 images
    // vs non power of 2 images so check if the image is a
    // power of 2 in both dimensions.
    if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
      // Yes, it's a power of 2. Generate mips.
      gl.generateMipmap(gl.TEXTURE_2D);
    } else {
      // No, it's not a power of 2. Turn off mips and set
      // wrapping to clamp to edge
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    }

    // callback after image loaded.
    if (textureLoadedCallback) {textureLoadedCallback(texture);}

  } // [end] bindImageTextureCallback

  const image = document.createElement("img");
  loadImage({url:url, image: image, loadedCallback: bindImageTextureCallback, loadingCallback: loadingCallback});

  return texture;
}

function loadImage({url, image = new Image(), loadedCallback, loadingCallback}) {

  const onProgressHandler = loadingCallback ?
    (event) => loadingCallback(event.loaded, event.total) :
    undefined;

  // [Important] image.src is asynchronous operation, set onload to handle after the image is loaded
  image.onload = function() {
    if (loadedCallback) {loadedCallback(image);}
  };

  progressFetchBlob(url, {method: "get"}, onProgressHandler)
  .then(responseBlob => {
    const objectUrl = URL.createObjectURL(responseBlob);
    image.src = objectUrl;
  })
  .catch( err => {throw err;});
}

function progressFetchBlob(url, opts={}, onProgressHandler) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();

    xhr.responseType = "blob";
    xhr.open(opts.method || "get", url);

    if (opts.headers) {
      Object.keys(opts.headers).map( key => xhr.setRequestHeader(key, opts.headers[key]) );
    }
    if (onProgressHandler) {
      xhr.onprogress = onProgressHandler; // passed event
    }
    xhr.onload = (event) => resolve(event.target.response);
    xhr.onerror = reject;

    xhr.send(opts.body);
  });
}

/*
  panorama helper function
 */

const defaultSetting = {
  // the DOMelement(or the CSS seletor string that refers the DOMElement) container that contains this panorama.js component
  container: document.body,
  // the image url of the panorama
  url: undefined,

  // the field of view
  fov: 75,
  // the inital degree of the camerea view, default is [0,0] which means to look front on the horizon
  cameraDegree: [0, 0],

  sphere: {
    radius: 30,
    numVerticalSegments: 16, // the number of the vertical segments. Like Earth's meridians,the line going pole to pole.
    numHorizonalSegements: 8 // the number of the horizonal segments. Like Earth's parallels.
  }
};

/**
 * Fill the setting with default ones, except the exclude ones match the `excludeKeys`.
 *
 * @param {Object} setting  The object literal that is target setting, whose missing entries will be filled with default ones.
 * @param {Object} defaultSetting  The object literal  contains default setting entries
 * @param {Set} [excludeKeys=Set(0)] Will NOT copy the entry that is in the exclude keys, default is empty set that there is no exclude keys
 */
function copyMissingValues(setting, defaultSetting, excludeKeys=new Set()) {
  // fill the missing entry with default
  for (let key in defaultSetting) {
    if (!excludeKeys.has(key) && !(key in setting)){
      setting[key] = defaultSetting[key];
    }
  }
}

function handleSetting(setting){
  setting = setting || {};
  const objectSettingKeys = ["sphere"]; // the setting entry value is object.

  // thes option must be contained
  if (!setting.url || typeof setting.url !== "string") {
    throw Error("Missing `url` in `setting` or The type of `url` isn't correct: the image url must be passed in `setting`, and it should be string.");
  }

  copyMissingValues(setting, defaultSetting);
  objectSettingKeys.map( key => copyMissingValues(setting[key], defaultSetting[key]) );

  // container can be either string or DOMElement
  if (typeof setting.container === "string") {
    setting.container = document.querySelector(setting.container);
  } // else DOMElement

  return setting;
}

/*
  JS helper function
 */
function isPowerOf2(value){
  return (value & (value - 1)) === 0; // binary bit operation trick
}

// curry function. let addone = curry(add, 1); let x = addone(3) // x is 4
function curry(method){
  const slice = Array.prototype.slice;
  const startArgs = slice.apply(arguments).slice(1); // exclude the 1st method argument
  return function(){
    const restArgs = slice.apply(arguments);
    return method.apply(null, startArgs.concat(restArgs)); // call actual function
  };
}


/* harmony default export */ __webpack_exports__["default"] = (panorama);


/***/ }),

/***/ "./src/utils/m4.js":
/*!*************************!*\
  !*** ./src/utils/m4.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Copyright 2014, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Various 3d math functions.
 *
 * @module webgl-3d-math
 */
(function(root, factory) {
  if(true){
		module.exports = factory();
  }else {}
}(this, function() {
  "use strict";

  /**
   * An array or typed array with 3 values.
   * @typedef {number[]|TypedArray} Vector3
   * @memberOf module:webgl-3d-math
   */

  /**
   * An array or typed array with 4 values.
   * @typedef {number[]|TypedArray} Vector4
   * @memberOf module:webgl-3d-math
   */

  /**
   * An array or typed array with 16 values.
   * @typedef {number[]|TypedArray} Matrix4
   * @memberOf module:webgl-3d-math
   */

  /**
   * Takes two 4-by-4 matrices, a and b, and computes the product in the order
   * that pre-composes b with a.  In other words, the matrix returned will
   * transform by b first and then a.  Note this is subtly different from just
   * multiplying the matrices together.  For given a and b, this function returns
   * the same object in both row-major and column-major mode.
   * @param {Matrix4} a A matrix.
   * @param {Matrix4} b A matrix.
   * @param {Matrix4} [dst] optional matrix to store result
   * @return {Matrix4} dst or a new matrix if none provided
   */
  function multiply(a, b, dst) {
    dst = dst || new Float32Array(16);
    var b00 = b[0 * 4 + 0];
    var b01 = b[0 * 4 + 1];
    var b02 = b[0 * 4 + 2];
    var b03 = b[0 * 4 + 3];
    var b10 = b[1 * 4 + 0];
    var b11 = b[1 * 4 + 1];
    var b12 = b[1 * 4 + 2];
    var b13 = b[1 * 4 + 3];
    var b20 = b[2 * 4 + 0];
    var b21 = b[2 * 4 + 1];
    var b22 = b[2 * 4 + 2];
    var b23 = b[2 * 4 + 3];
    var b30 = b[3 * 4 + 0];
    var b31 = b[3 * 4 + 1];
    var b32 = b[3 * 4 + 2];
    var b33 = b[3 * 4 + 3];
    var a00 = a[0 * 4 + 0];
    var a01 = a[0 * 4 + 1];
    var a02 = a[0 * 4 + 2];
    var a03 = a[0 * 4 + 3];
    var a10 = a[1 * 4 + 0];
    var a11 = a[1 * 4 + 1];
    var a12 = a[1 * 4 + 2];
    var a13 = a[1 * 4 + 3];
    var a20 = a[2 * 4 + 0];
    var a21 = a[2 * 4 + 1];
    var a22 = a[2 * 4 + 2];
    var a23 = a[2 * 4 + 3];
    var a30 = a[3 * 4 + 0];
    var a31 = a[3 * 4 + 1];
    var a32 = a[3 * 4 + 2];
    var a33 = a[3 * 4 + 3];
    dst[ 0] = b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30;
    dst[ 1] = b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31;
    dst[ 2] = b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32;
    dst[ 3] = b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33;
    dst[ 4] = b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30;
    dst[ 5] = b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31;
    dst[ 6] = b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32;
    dst[ 7] = b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33;
    dst[ 8] = b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30;
    dst[ 9] = b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31;
    dst[10] = b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32;
    dst[11] = b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33;
    dst[12] = b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30;
    dst[13] = b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31;
    dst[14] = b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32;
    dst[15] = b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33;
    return dst;
  }


  /**
   * adds 2 vectors3s
   * @param {Vector3} a a
   * @param {Vector3} b b
   * @param {Vector3} dst optional vector3 to store result
   * @return {Vector3} dst or new Vector3 if not provided
   * @memberOf module:webgl-3d-math
   */
  function addVectors(a, b, dst) {
    dst = dst || new Float32Array(3);
    dst[0] = a[0] + b[0];
    dst[1] = a[1] + b[1];
    dst[2] = a[2] + b[2];
    return dst;
  }

  /**
   * subtracts 2 vectors3s
   * @param {Vector3} a a
   * @param {Vector3} b b
   * @param {Vector3} dst optional vector3 to store result
   * @return {Vector3} dst or new Vector3 if not provided
   * @memberOf module:webgl-3d-math
   */
  function subtractVectors(a, b, dst) {
    dst = dst || new Float32Array(3);
    dst[0] = a[0] - b[0];
    dst[1] = a[1] - b[1];
    dst[2] = a[2] - b[2];
    return dst;
  }

  /**
   * normalizes a vector.
   * @param {Vector3} v vector to normalzie
   * @param {Vector3} dst optional vector3 to store result
   * @return {Vector3} dst or new Vector3 if not provided
   * @memberOf module:webgl-3d-math
   */
  function normalize(v, dst) {
    dst = dst || new Float32Array(3);
    var length = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
    // make sure we don't divide by 0.
    if (length > 0.00001) {
      dst[0] = v[0] / length;
      dst[1] = v[1] / length;
      dst[2] = v[2] / length;
    }
    return dst;
  }

  /**
   * Computes the length of a vecgor
   * @param {Vector3} v vector to take length of
   * @return {number} length of vector
   */
  function length(v) {
    return Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
  }

  /**
   * Computes the cross product of 2 vectors3s
   * @param {Vector3} a a
   * @param {Vector3} b b
   * @param {Vector3} dst optional vector3 to store result
   * @return {Vector3} dst or new Vector3 if not provided
   * @memberOf module:webgl-3d-math
   */
  function cross(a, b, dst) {
    dst = dst || new Float32Array(3);
    dst[0] = a[1] * b[2] - a[2] * b[1];
    dst[1] = a[2] * b[0] - a[0] * b[2];
    dst[2] = a[0] * b[1] - a[1] * b[0];
    return dst;
  }

  /**
   * Computes the dot product of two vectors; assumes both vectors have
   * three entries.
   * @param {Vector3} a Operand vector.
   * @param {Vector3} b Operand vector.
   * @return {number} dot product
   * @memberOf module:webgl-3d-math
   */
  function dot(a, b) {
    return (a[0] * b[0]) + (a[1] * b[1]) + (a[2] * b[2]);
  }

  /**
   * Computes the distance squared between 2 points
   * @param {Vector3} a
   * @param {Vector3} b
   * @return {nubmer} distance squared between a and b
   */
  function distanceSq(a, b) {
    const dx = a[0] - b[0];
    const dy = a[1] - b[1];
    const dz = a[2] - b[2];
    return dx * dx + dy * dy + dz * dz;
  }

  /**
   * Computes the distance between 2 points
   * @param {Vector3} a
   * @param {Vector3} b
   * @return {nubmer} distance between a and b
   */
  function distance(a, b) {
    return Math.sqrt(distanceSq(a, b));
  }

  /**
   * Makes an identity matrix.
   * @param {Matrix4} [dst] optional matrix to store result
   * @return {Matrix4} dst or a new matrix if none provided
   * @memberOf module:webgl-3d-math
   */
  function identity(dst) {
    dst = dst || new Float32Array(16);

    dst[ 0] = 1;
    dst[ 1] = 0;
    dst[ 2] = 0;
    dst[ 3] = 0;
    dst[ 4] = 0;
    dst[ 5] = 1;
    dst[ 6] = 0;
    dst[ 7] = 0;
    dst[ 8] = 0;
    dst[ 9] = 0;
    dst[10] = 1;
    dst[11] = 0;
    dst[12] = 0;
    dst[13] = 0;
    dst[14] = 0;
    dst[15] = 1;

    return dst;
  }

  /**
   * Transposes a matrix.
   * @param {Matrix4} m matrix to transpose.
   * @param {Matrix4} [dst] optional matrix to store result
   * @return {Matrix4} dst or a new matrix if none provided
   * @memberOf module:webgl-3d-math
   */
  function transpose(m, dst) {
    dst = dst || new Float32Array(16);

    dst[ 0] = m[0];
    dst[ 1] = m[4];
    dst[ 2] = m[8];
    dst[ 3] = m[12];
    dst[ 4] = m[1];
    dst[ 5] = m[5];
    dst[ 6] = m[9];
    dst[ 7] = m[13];
    dst[ 8] = m[2];
    dst[ 9] = m[6];
    dst[10] = m[10];
    dst[11] = m[14];
    dst[12] = m[3];
    dst[13] = m[7];
    dst[14] = m[11];
    dst[15] = m[15];

    return dst;
  }

  /**
   * Creates a lookAt matrix.
   * This is a world matrix for a camera. In other words it will transform
   * from the origin to a place and orientation in the world. For a view
   * matrix take the inverse of this.
   * @param {Vector3} cameraPosition position of the camera
   * @param {Vector3} target position of the target
   * @param {Vector3} up direction
   * @param {Matrix4} [dst] optional matrix to store result
   * @return {Matrix4} dst or a new matrix if none provided
   * @memberOf module:webgl-3d-math
   */
  function lookAt(cameraPosition, target, up, dst) {
    dst = dst || new Float32Array(16);
    var zAxis = normalize(
        subtractVectors(cameraPosition, target));
    var xAxis = normalize(cross(up, zAxis));
    var yAxis = normalize(cross(zAxis, xAxis));

    dst[ 0] = xAxis[0];
    dst[ 1] = xAxis[1];
    dst[ 2] = xAxis[2];
    dst[ 3] = 0;
    dst[ 4] = yAxis[0];
    dst[ 5] = yAxis[1];
    dst[ 6] = yAxis[2];
    dst[ 7] = 0;
    dst[ 8] = zAxis[0];
    dst[ 9] = zAxis[1];
    dst[10] = zAxis[2];
    dst[11] = 0;
    dst[12] = cameraPosition[0];
    dst[13] = cameraPosition[1];
    dst[14] = cameraPosition[2];
    dst[15] = 1;

    return dst;
  }

  /**
   * Computes a 4-by-4 perspective transformation matrix given the angular height
   * of the frustum, the aspect ratio, and the near and far clipping planes.  The
   * arguments define a frustum extending in the negative z direction.  The given
   * angle is the vertical angle of the frustum, and the horizontal angle is
   * determined to produce the given aspect ratio.  The arguments near and far are
   * the distances to the near and far clipping planes.  Note that near and far
   * are not z coordinates, but rather they are distances along the negative
   * z-axis.  The matrix generated sends the viewing frustum to the unit box.
   * We assume a unit box extending from -1 to 1 in the x and y dimensions and
   * from -1 to 1 in the z dimension.
   * @param {number} fieldOfViewInRadians field of view in y axis.
   * @param {number} aspect aspect of viewport (width / height)
   * @param {number} near near Z clipping plane
   * @param {number} far far Z clipping plane
   * @param {Matrix4} [dst] optional matrix to store result
   * @return {Matrix4} dst or a new matrix if none provided
   * @memberOf module:webgl-3d-math
   */
  function perspective(fieldOfViewInRadians, aspect, near, far, dst) {
    dst = dst || new Float32Array(16);
    var f = Math.tan(Math.PI * 0.5 - 0.5 * fieldOfViewInRadians);
    var rangeInv = 1.0 / (near - far);

    dst[ 0] = f / aspect;
    dst[ 1] = 0;
    dst[ 2] = 0;
    dst[ 3] = 0;
    dst[ 4] = 0;
    dst[ 5] = f;
    dst[ 6] = 0;
    dst[ 7] = 0;
    dst[ 8] = 0;
    dst[ 9] = 0;
    dst[10] = (near + far) * rangeInv;
    dst[11] = -1;
    dst[12] = 0;
    dst[13] = 0;
    dst[14] = near * far * rangeInv * 2;
    dst[15] = 0;

    return dst;
  }

  /**
   * Computes a 4-by-4 orthographic projection matrix given the coordinates of the
   * planes defining the axis-aligned, box-shaped viewing volume.  The matrix
   * generated sends that box to the unit box.  Note that although left and right
   * are x coordinates and bottom and top are y coordinates, near and far
   * are not z coordinates, but rather they are distances along the negative
   * z-axis.  We assume a unit box extending from -1 to 1 in the x and y
   * dimensions and from -1 to 1 in the z dimension.
   * @param {number} left The x coordinate of the left plane of the box.
   * @param {number} right The x coordinate of the right plane of the box.
   * @param {number} bottom The y coordinate of the bottom plane of the box.
   * @param {number} top The y coordinate of the right plane of the box.
   * @param {number} near The negative z coordinate of the near plane of the box.
   * @param {number} far The negative z coordinate of the far plane of the box.
   * @param {Matrix4} [dst] optional matrix to store result
   * @return {Matrix4} dst or a new matrix if none provided
   * @memberOf module:webgl-3d-math
   */
  function orthographic(left, right, bottom, top, near, far, dst) {
    dst = dst || new Float32Array(16);

    dst[ 0] = 2 / (right - left);
    dst[ 1] = 0;
    dst[ 2] = 0;
    dst[ 3] = 0;
    dst[ 4] = 0;
    dst[ 5] = 2 / (top - bottom);
    dst[ 6] = 0;
    dst[ 7] = 0;
    dst[ 8] = 0;
    dst[ 9] = 0;
    dst[10] = 2 / (near - far);
    dst[11] = 0;
    dst[12] = (left + right) / (left - right);
    dst[13] = (bottom + top) / (bottom - top);
    dst[14] = (near + far) / (near - far);
    dst[15] = 1;

    return dst;
  }

  /**
   * Computes a 4-by-4 perspective transformation matrix given the left, right,
   * top, bottom, near and far clipping planes. The arguments define a frustum
   * extending in the negative z direction. The arguments near and far are the
   * distances to the near and far clipping planes. Note that near and far are not
   * z coordinates, but rather they are distances along the negative z-axis. The
   * matrix generated sends the viewing frustum to the unit box. We assume a unit
   * box extending from -1 to 1 in the x and y dimensions and from -1 to 1 in the z
   * dimension.
   * @param {number} left The x coordinate of the left plane of the box.
   * @param {number} right The x coordinate of the right plane of the box.
   * @param {number} bottom The y coordinate of the bottom plane of the box.
   * @param {number} top The y coordinate of the right plane of the box.
   * @param {number} near The negative z coordinate of the near plane of the box.
   * @param {number} far The negative z coordinate of the far plane of the box.
   * @param {Matrix4} [dst] optional matrix to store result
   * @return {Matrix4} dst or a new matrix if none provided
   * @memberOf module:webgl-3d-math
   */
  function frustum(left, right, bottom, top, near, far, dst) {
    dst = dst || new Float32Array(16);

    var dx = right - left;
    var dy = top - bottom;
    var dz = far - near;

    dst[ 0] = 2 * near / dx;
    dst[ 1] = 0;
    dst[ 2] = 0;
    dst[ 3] = 0;
    dst[ 4] = 0;
    dst[ 5] = 2 * near / dy;
    dst[ 6] = 0;
    dst[ 7] = 0;
    dst[ 8] = (left + right) / dx;
    dst[ 9] = (top + bottom) / dy;
    dst[10] = -(far + near) / dz;
    dst[11] = -1;
    dst[12] = 0;
    dst[13] = 0;
    dst[14] = -2 * near * far / dz;
    dst[15] = 0;

    return dst;
  }

  /**
   * Makes a translation matrix
   * @param {number} tx x translation.
   * @param {number} ty y translation.
   * @param {number} tz z translation.
   * @param {Matrix4} [dst] optional matrix to store result
   * @return {Matrix4} dst or a new matrix if none provided
   * @memberOf module:webgl-3d-math
   */
  function translation(tx, ty, tz, dst) {
    dst = dst || new Float32Array(16);

    dst[ 0] = 1;
    dst[ 1] = 0;
    dst[ 2] = 0;
    dst[ 3] = 0;
    dst[ 4] = 0;
    dst[ 5] = 1;
    dst[ 6] = 0;
    dst[ 7] = 0;
    dst[ 8] = 0;
    dst[ 9] = 0;
    dst[10] = 1;
    dst[11] = 0;
    dst[12] = tx;
    dst[13] = ty;
    dst[14] = tz;
    dst[15] = 1;

    return dst;
  }

  /**
   * Mutliply by translation matrix.
   * @param {Matrix4} m matrix to multiply
   * @param {number} tx x translation.
   * @param {number} ty y translation.
   * @param {number} tz z translation.
   * @param {Matrix4} [dst] optional matrix to store result
   * @return {Matrix4} dst or a new matrix if none provided
   * @memberOf module:webgl-3d-math
   */
  function translate(m, tx, ty, tz, dst) {
    // This is the optimized version of
    // return multiply(m, translation(tx, ty, tz), dst);
    dst = dst || new Float32Array(16);

    var m00 = m[0];
    var m01 = m[1];
    var m02 = m[2];
    var m03 = m[3];
    var m10 = m[1 * 4 + 0];
    var m11 = m[1 * 4 + 1];
    var m12 = m[1 * 4 + 2];
    var m13 = m[1 * 4 + 3];
    var m20 = m[2 * 4 + 0];
    var m21 = m[2 * 4 + 1];
    var m22 = m[2 * 4 + 2];
    var m23 = m[2 * 4 + 3];
    var m30 = m[3 * 4 + 0];
    var m31 = m[3 * 4 + 1];
    var m32 = m[3 * 4 + 2];
    var m33 = m[3 * 4 + 3];

    if (m !== dst) {
      dst[ 0] = m00;
      dst[ 1] = m01;
      dst[ 2] = m02;
      dst[ 3] = m03;
      dst[ 4] = m10;
      dst[ 5] = m11;
      dst[ 6] = m12;
      dst[ 7] = m13;
      dst[ 8] = m20;
      dst[ 9] = m21;
      dst[10] = m22;
      dst[11] = m23;
    }

    dst[12] = m00 * tx + m10 * ty + m20 * tz + m30;
    dst[13] = m01 * tx + m11 * ty + m21 * tz + m31;
    dst[14] = m02 * tx + m12 * ty + m22 * tz + m32;
    dst[15] = m03 * tx + m13 * ty + m23 * tz + m33;

    return dst;
  }

  /**
   * Makes an x rotation matrix
   * @param {number} angleInRadians amount to rotate
   * @param {Matrix4} [dst] optional matrix to store result
   * @return {Matrix4} dst or a new matrix if none provided
   * @memberOf module:webgl-3d-math
   */
  function xRotation(angleInRadians, dst) {
    dst = dst || new Float32Array(16);
    var c = Math.cos(angleInRadians);
    var s = Math.sin(angleInRadians);

    dst[ 0] = 1;
    dst[ 1] = 0;
    dst[ 2] = 0;
    dst[ 3] = 0;
    dst[ 4] = 0;
    dst[ 5] = c;
    dst[ 6] = s;
    dst[ 7] = 0;
    dst[ 8] = 0;
    dst[ 9] = -s;
    dst[10] = c;
    dst[11] = 0;
    dst[12] = 0;
    dst[13] = 0;
    dst[14] = 0;
    dst[15] = 1;

    return dst;
  }

  /**
   * Multiply by an x rotation matrix
   * @param {Matrix4} m matrix to multiply
   * @param {number} angleInRadians amount to rotate
   * @param {Matrix4} [dst] optional matrix to store result
   * @return {Matrix4} dst or a new matrix if none provided
   * @memberOf module:webgl-3d-math
   */
  function xRotate(m, angleInRadians, dst) {
    // this is the optimized version of
    // return multiply(m, xRotation(angleInRadians), dst);
    dst = dst || new Float32Array(16);

    var m10 = m[4];
    var m11 = m[5];
    var m12 = m[6];
    var m13 = m[7];
    var m20 = m[8];
    var m21 = m[9];
    var m22 = m[10];
    var m23 = m[11];
    var c = Math.cos(angleInRadians);
    var s = Math.sin(angleInRadians);

    dst[4]  = c * m10 + s * m20;
    dst[5]  = c * m11 + s * m21;
    dst[6]  = c * m12 + s * m22;
    dst[7]  = c * m13 + s * m23;
    dst[8]  = c * m20 - s * m10;
    dst[9]  = c * m21 - s * m11;
    dst[10] = c * m22 - s * m12;
    dst[11] = c * m23 - s * m13;

    if (m !== dst) {
      dst[ 0] = m[ 0];
      dst[ 1] = m[ 1];
      dst[ 2] = m[ 2];
      dst[ 3] = m[ 3];
      dst[12] = m[12];
      dst[13] = m[13];
      dst[14] = m[14];
      dst[15] = m[15];
    }

    return dst;
  }

  /**
   * Makes an y rotation matrix
   * @param {number} angleInRadians amount to rotate
   * @param {Matrix4} [dst] optional matrix to store result
   * @return {Matrix4} dst or a new matrix if none provided
   * @memberOf module:webgl-3d-math
   */
  function yRotation(angleInRadians, dst) {
    dst = dst || new Float32Array(16);
    var c = Math.cos(angleInRadians);
    var s = Math.sin(angleInRadians);

    dst[ 0] = c;
    dst[ 1] = 0;
    dst[ 2] = -s;
    dst[ 3] = 0;
    dst[ 4] = 0;
    dst[ 5] = 1;
    dst[ 6] = 0;
    dst[ 7] = 0;
    dst[ 8] = s;
    dst[ 9] = 0;
    dst[10] = c;
    dst[11] = 0;
    dst[12] = 0;
    dst[13] = 0;
    dst[14] = 0;
    dst[15] = 1;

    return dst;
  }

  /**
   * Multiply by an y rotation matrix
   * @param {Matrix4} m matrix to multiply
   * @param {number} angleInRadians amount to rotate
   * @param {Matrix4} [dst] optional matrix to store result
   * @return {Matrix4} dst or a new matrix if none provided
   * @memberOf module:webgl-3d-math
   */
  function yRotate(m, angleInRadians, dst) {
    // this is the optimized verison of
    // return multiply(m, yRotation(angleInRadians), dst);
    dst = dst || new Float32Array(16);

    var m00 = m[0 * 4 + 0];
    var m01 = m[0 * 4 + 1];
    var m02 = m[0 * 4 + 2];
    var m03 = m[0 * 4 + 3];
    var m20 = m[2 * 4 + 0];
    var m21 = m[2 * 4 + 1];
    var m22 = m[2 * 4 + 2];
    var m23 = m[2 * 4 + 3];
    var c = Math.cos(angleInRadians);
    var s = Math.sin(angleInRadians);

    dst[ 0] = c * m00 - s * m20;
    dst[ 1] = c * m01 - s * m21;
    dst[ 2] = c * m02 - s * m22;
    dst[ 3] = c * m03 - s * m23;
    dst[ 8] = c * m20 + s * m00;
    dst[ 9] = c * m21 + s * m01;
    dst[10] = c * m22 + s * m02;
    dst[11] = c * m23 + s * m03;

    if (m !== dst) {
      dst[ 4] = m[ 4];
      dst[ 5] = m[ 5];
      dst[ 6] = m[ 6];
      dst[ 7] = m[ 7];
      dst[12] = m[12];
      dst[13] = m[13];
      dst[14] = m[14];
      dst[15] = m[15];
    }

    return dst;
  }

  /**
   * Makes an z rotation matrix
   * @param {number} angleInRadians amount to rotate
   * @param {Matrix4} [dst] optional matrix to store result
   * @return {Matrix4} dst or a new matrix if none provided
   * @memberOf module:webgl-3d-math
   */
  function zRotation(angleInRadians, dst) {
    dst = dst || new Float32Array(16);
    var c = Math.cos(angleInRadians);
    var s = Math.sin(angleInRadians);

    dst[ 0] = c;
    dst[ 1] = s;
    dst[ 2] = 0;
    dst[ 3] = 0;
    dst[ 4] = -s;
    dst[ 5] = c;
    dst[ 6] = 0;
    dst[ 7] = 0;
    dst[ 8] = 0;
    dst[ 9] = 0;
    dst[10] = 1;
    dst[11] = 0;
    dst[12] = 0;
    dst[13] = 0;
    dst[14] = 0;
    dst[15] = 1;

    return dst;
  }

  /**
   * Multiply by an z rotation matrix
   * @param {Matrix4} m matrix to multiply
   * @param {number} angleInRadians amount to rotate
   * @param {Matrix4} [dst] optional matrix to store result
   * @return {Matrix4} dst or a new matrix if none provided
   * @memberOf module:webgl-3d-math
   */
  function zRotate(m, angleInRadians, dst) {
    // This is the optimized verison of
    // return multiply(m, zRotation(angleInRadians), dst);
    dst = dst || new Float32Array(16);

    var m00 = m[0 * 4 + 0];
    var m01 = m[0 * 4 + 1];
    var m02 = m[0 * 4 + 2];
    var m03 = m[0 * 4 + 3];
    var m10 = m[1 * 4 + 0];
    var m11 = m[1 * 4 + 1];
    var m12 = m[1 * 4 + 2];
    var m13 = m[1 * 4 + 3];
    var c = Math.cos(angleInRadians);
    var s = Math.sin(angleInRadians);

    dst[ 0] = c * m00 + s * m10;
    dst[ 1] = c * m01 + s * m11;
    dst[ 2] = c * m02 + s * m12;
    dst[ 3] = c * m03 + s * m13;
    dst[ 4] = c * m10 - s * m00;
    dst[ 5] = c * m11 - s * m01;
    dst[ 6] = c * m12 - s * m02;
    dst[ 7] = c * m13 - s * m03;

    if (m !== dst) {
      dst[ 8] = m[ 8];
      dst[ 9] = m[ 9];
      dst[10] = m[10];
      dst[11] = m[11];
      dst[12] = m[12];
      dst[13] = m[13];
      dst[14] = m[14];
      dst[15] = m[15];
    }

    return dst;
  }

  /**
   * Makes an rotation matrix around an arbitrary axis
   * @param {Vector3} axis axis to rotate around
   * @param {number} angleInRadians amount to rotate
   * @param {Matrix4} [dst] optional matrix to store result
   * @return {Matrix4} dst or a new matrix if none provided
   * @memberOf module:webgl-3d-math
   */
  function axisRotation(axis, angleInRadians, dst) {
    dst = dst || new Float32Array(16);

    var x = axis[0];
    var y = axis[1];
    var z = axis[2];
    var n = Math.sqrt(x * x + y * y + z * z);
    x /= n;
    y /= n;
    z /= n;
    var xx = x * x;
    var yy = y * y;
    var zz = z * z;
    var c = Math.cos(angleInRadians);
    var s = Math.sin(angleInRadians);
    var oneMinusCosine = 1 - c;

    dst[ 0] = xx + (1 - xx) * c;
    dst[ 1] = x * y * oneMinusCosine + z * s;
    dst[ 2] = x * z * oneMinusCosine - y * s;
    dst[ 3] = 0;
    dst[ 4] = x * y * oneMinusCosine - z * s;
    dst[ 5] = yy + (1 - yy) * c;
    dst[ 6] = y * z * oneMinusCosine + x * s;
    dst[ 7] = 0;
    dst[ 8] = x * z * oneMinusCosine + y * s;
    dst[ 9] = y * z * oneMinusCosine - x * s;
    dst[10] = zz + (1 - zz) * c;
    dst[11] = 0;
    dst[12] = 0;
    dst[13] = 0;
    dst[14] = 0;
    dst[15] = 1;

    return dst;
  }

  /**
   * Multiply by an axis rotation matrix
   * @param {Matrix4} m matrix to multiply
   * @param {Vector3} axis axis to rotate around
   * @param {number} angleInRadians amount to rotate
   * @param {Matrix4} [dst] optional matrix to store result
   * @return {Matrix4} dst or a new matrix if none provided
   * @memberOf module:webgl-3d-math
   */
  function axisRotate(m, axis, angleInRadians, dst) {
    // This is the optimized verison of
    // return multiply(m, axisRotation(axis, angleInRadians), dst);
    dst = dst || new Float32Array(16);

    var x = axis[0];
    var y = axis[1];
    var z = axis[2];
    var n = Math.sqrt(x * x + y * y + z * z);
    x /= n;
    y /= n;
    z /= n;
    var xx = x * x;
    var yy = y * y;
    var zz = z * z;
    var c = Math.cos(angleInRadians);
    var s = Math.sin(angleInRadians);
    var oneMinusCosine = 1 - c;

    var r00 = xx + (1 - xx) * c;
    var r01 = x * y * oneMinusCosine + z * s;
    var r02 = x * z * oneMinusCosine - y * s;
    var r10 = x * y * oneMinusCosine - z * s;
    var r11 = yy + (1 - yy) * c;
    var r12 = y * z * oneMinusCosine + x * s;
    var r20 = x * z * oneMinusCosine + y * s;
    var r21 = y * z * oneMinusCosine - x * s;
    var r22 = zz + (1 - zz) * c;

    var m00 = m[0];
    var m01 = m[1];
    var m02 = m[2];
    var m03 = m[3];
    var m10 = m[4];
    var m11 = m[5];
    var m12 = m[6];
    var m13 = m[7];
    var m20 = m[8];
    var m21 = m[9];
    var m22 = m[10];
    var m23 = m[11];

    dst[ 0] = r00 * m00 + r01 * m10 + r02 * m20;
    dst[ 1] = r00 * m01 + r01 * m11 + r02 * m21;
    dst[ 2] = r00 * m02 + r01 * m12 + r02 * m22;
    dst[ 3] = r00 * m03 + r01 * m13 + r02 * m23;
    dst[ 4] = r10 * m00 + r11 * m10 + r12 * m20;
    dst[ 5] = r10 * m01 + r11 * m11 + r12 * m21;
    dst[ 6] = r10 * m02 + r11 * m12 + r12 * m22;
    dst[ 7] = r10 * m03 + r11 * m13 + r12 * m23;
    dst[ 8] = r20 * m00 + r21 * m10 + r22 * m20;
    dst[ 9] = r20 * m01 + r21 * m11 + r22 * m21;
    dst[10] = r20 * m02 + r21 * m12 + r22 * m22;
    dst[11] = r20 * m03 + r21 * m13 + r22 * m23;

    if (m !== dst) {
      dst[12] = m[12];
      dst[13] = m[13];
      dst[14] = m[14];
      dst[15] = m[15];
    }

    return dst;
  }

  /**
   * Makes a scale matrix
   * @param {number} sx x scale.
   * @param {number} sy y scale.
   * @param {number} sz z scale.
   * @param {Matrix4} [dst] optional matrix to store result
   * @return {Matrix4} dst or a new matrix if none provided
   * @memberOf module:webgl-3d-math
   */
  function scaling(sx, sy, sz, dst) {
    dst = dst || new Float32Array(16);

    dst[ 0] = sx;
    dst[ 1] = 0;
    dst[ 2] = 0;
    dst[ 3] = 0;
    dst[ 4] = 0;
    dst[ 5] = sy;
    dst[ 6] = 0;
    dst[ 7] = 0;
    dst[ 8] = 0;
    dst[ 9] = 0;
    dst[10] = sz;
    dst[11] = 0;
    dst[12] = 0;
    dst[13] = 0;
    dst[14] = 0;
    dst[15] = 1;

    return dst;
  }

  /**
   * Multiply by a scaling matrix
   * @param {Matrix4} m matrix to multiply
   * @param {number} sx x scale.
   * @param {number} sy y scale.
   * @param {number} sz z scale.
   * @param {Matrix4} [dst] optional matrix to store result
   * @return {Matrix4} dst or a new matrix if none provided
   * @memberOf module:webgl-3d-math
   */
  function scale(m, sx, sy, sz, dst) {
    // This is the optimized verison of
    // return multiply(m, scaling(sx, sy, sz), dst);
    dst = dst || new Float32Array(16);

    dst[ 0] = sx * m[0 * 4 + 0];
    dst[ 1] = sx * m[0 * 4 + 1];
    dst[ 2] = sx * m[0 * 4 + 2];
    dst[ 3] = sx * m[0 * 4 + 3];
    dst[ 4] = sy * m[1 * 4 + 0];
    dst[ 5] = sy * m[1 * 4 + 1];
    dst[ 6] = sy * m[1 * 4 + 2];
    dst[ 7] = sy * m[1 * 4 + 3];
    dst[ 8] = sz * m[2 * 4 + 0];
    dst[ 9] = sz * m[2 * 4 + 1];
    dst[10] = sz * m[2 * 4 + 2];
    dst[11] = sz * m[2 * 4 + 3];

    if (m !== dst) {
      dst[12] = m[12];
      dst[13] = m[13];
      dst[14] = m[14];
      dst[15] = m[15];
    }

    return dst;
  }

  /**
   * creates a matrix from translation, quaternion, scale
   * @param {Number[]} translation [x, y, z] translation
   * @param {Number[]} quaternion [x, y, z, z] quaternion rotation
   * @param {Number[]} scale [x, y, z] scale
   * @param {Matrix4} [dst] optional matrix to store result
   * @return {Matrix4} dst or a new matrix if none provided
   */
  function compose(translation, quaternion, scale, dst) {
    dst = dst || new Float32Array(16);

    const x = quaternion[0];
    const y = quaternion[1];
    const z = quaternion[2];
    const w = quaternion[3];

    const x2 = x + x;
    const y2 = y + y;
    const z2 = z + z;

    const xx = x * x2;
    const xy = x * y2;
    const xz = x * z2;

    const yy = y * y2;
    const yz = y * z2;
    const zz = z * z2;

    const wx = w * x2;
    const wy = w * y2;
    const wz = w * z2;

    const sx = scale[0];
    const sy = scale[1];
    const sz = scale[2];

    dst[0] = (1 - (yy + zz)) * sx;
    dst[1] = (xy + wz) * sx;
    dst[2] = (xz - wy) * sx;
    dst[3] = 0;

    dst[4] = (xy - wz) * sy;
    dst[5] = (1 - (xx + zz)) * sy;
    dst[6] = (yz + wx) * sy;
    dst[7] = 0;

    dst[ 8] = (xz + wy) * sz;
    dst[ 9] = (yz - wx) * sz;
    dst[10] = (1 - (xx + yy)) * sz;
    dst[11] = 0;

    dst[12] = translation[0];
    dst[13] = translation[1];
    dst[14] = translation[2];
    dst[15] = 1;

    return dst;
  }

  function quatFromRotationMatrix(m, dst) {
    // http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm

    // assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
    const m11 = m[0];
    const m12 = m[4];
    const m13 = m[8];
    const m21 = m[1];
    const m22 = m[5];
    const m23 = m[9];
    const m31 = m[2];
    const m32 = m[6];
    const m33 = m[10];

    const trace = m11 + m22 + m33;

    if (trace > 0) {
      const s = 0.5 / Math.sqrt(trace + 1);
      dst[3] = 0.25 / s;
      dst[0] = (m32 - m23) * s;
      dst[1] = (m13 - m31) * s;
      dst[2] = (m21 - m12) * s;
    } else if (m11 > m22 && m11 > m33) {
      const s = 2 * Math.sqrt(1 + m11 - m22 - m33);
      dst[3] = (m32 - m23) / s;
      dst[0] = 0.25 * s;
      dst[1] = (m12 + m21) / s;
      dst[2] = (m13 + m31) / s;
    } else if (m22 > m33) {
      const s = 2 * Math.sqrt(1 + m22 - m11 - m33);
      dst[3] = (m13 - m31) / s;
      dst[0] = (m12 + m21) / s;
      dst[1] = 0.25 * s;
      dst[2] = (m23 + m32) / s;
    } else {
      const s = 2 * Math.sqrt(1 + m33 - m11 - m22);
      dst[3] = (m21 - m12) / s;
      dst[0] = (m13 + m31) / s;
      dst[1] = (m23 + m32) / s;
      dst[2] = 0.25 * s;
    }
  }
  
  function decompose(mat, translation, quaternion, scale) {
    let sx = length(mat.slice(0, 3));
    const sy = length(mat.slice(4, 7));
    const sz = length(mat.slice(8, 11));

    // if dematrmine is negative, we need to invert one scale
    const det = determinate(mat);
    if (det < 0) {
      sx = -sx;
    }

    translation[0] = mat[12];
    translation[1] = mat[13];
    translation[2] = mat[14];

    // scale the rotation part
    const matrix = copy(mat);

    const invSX = 1 / sx;
    const invSY = 1 / sy;
    const invSZ = 1 / sz;

    matrix[0] *= invSX;
    matrix[1] *= invSX;
    matrix[2] *= invSX;

    matrix[4] *= invSY;
    matrix[5] *= invSY;
    matrix[6] *= invSY;

    matrix[8] *= invSZ;
    matrix[9] *= invSZ;
    matrix[10] *= invSZ;

    quatFromRotationMatrix(matrix, quaternion);

    scale[0] = sx;
    scale[1] = sy;
    scale[2] = sz;
  }

  function determinate(m) {
    var m00 = m[0 * 4 + 0];
    var m01 = m[0 * 4 + 1];
    var m02 = m[0 * 4 + 2];
    var m03 = m[0 * 4 + 3];
    var m10 = m[1 * 4 + 0];
    var m11 = m[1 * 4 + 1];
    var m12 = m[1 * 4 + 2];
    var m13 = m[1 * 4 + 3];
    var m20 = m[2 * 4 + 0];
    var m21 = m[2 * 4 + 1];
    var m22 = m[2 * 4 + 2];
    var m23 = m[2 * 4 + 3];
    var m30 = m[3 * 4 + 0];
    var m31 = m[3 * 4 + 1];
    var m32 = m[3 * 4 + 2];
    var m33 = m[3 * 4 + 3];
    var tmp_0  = m22 * m33;
    var tmp_1  = m32 * m23;
    var tmp_2  = m12 * m33;
    var tmp_3  = m32 * m13;
    var tmp_4  = m12 * m23;
    var tmp_5  = m22 * m13;
    var tmp_6  = m02 * m33;
    var tmp_7  = m32 * m03;
    var tmp_8  = m02 * m23;
    var tmp_9  = m22 * m03;
    var tmp_10 = m02 * m13;
    var tmp_11 = m12 * m03;
    var tmp_12 = m20 * m31;
    var tmp_13 = m30 * m21;
    var tmp_14 = m10 * m31;
    var tmp_15 = m30 * m11;
    var tmp_16 = m10 * m21;
    var tmp_17 = m20 * m11;
    var tmp_18 = m00 * m31;
    var tmp_19 = m30 * m01;
    var tmp_20 = m00 * m21;
    var tmp_21 = m20 * m01;
    var tmp_22 = m00 * m11;
    var tmp_23 = m10 * m01;

    var t0 = (tmp_0 * m11 + tmp_3 * m21 + tmp_4 * m31) -
        (tmp_1 * m11 + tmp_2 * m21 + tmp_5 * m31);
    var t1 = (tmp_1 * m01 + tmp_6 * m21 + tmp_9 * m31) -
        (tmp_0 * m01 + tmp_7 * m21 + tmp_8 * m31);
    var t2 = (tmp_2 * m01 + tmp_7 * m11 + tmp_10 * m31) -
        (tmp_3 * m01 + tmp_6 * m11 + tmp_11 * m31);
    var t3 = (tmp_5 * m01 + tmp_8 * m11 + tmp_11 * m21) -
        (tmp_4 * m01 + tmp_9 * m11 + tmp_10 * m21);

    return 1.0 / (m00 * t0 + m10 * t1 + m20 * t2 + m30 * t3);    
  }

  /**
   * Computes the inverse of a matrix.
   * @param {Matrix4} m matrix to compute inverse of
   * @param {Matrix4} [dst] optional matrix to store result
   * @return {Matrix4} dst or a new matrix if none provided
   * @memberOf module:webgl-3d-math
   */
  function inverse(m, dst) {
    dst = dst || new Float32Array(16);
    var m00 = m[0 * 4 + 0];
    var m01 = m[0 * 4 + 1];
    var m02 = m[0 * 4 + 2];
    var m03 = m[0 * 4 + 3];
    var m10 = m[1 * 4 + 0];
    var m11 = m[1 * 4 + 1];
    var m12 = m[1 * 4 + 2];
    var m13 = m[1 * 4 + 3];
    var m20 = m[2 * 4 + 0];
    var m21 = m[2 * 4 + 1];
    var m22 = m[2 * 4 + 2];
    var m23 = m[2 * 4 + 3];
    var m30 = m[3 * 4 + 0];
    var m31 = m[3 * 4 + 1];
    var m32 = m[3 * 4 + 2];
    var m33 = m[3 * 4 + 3];
    var tmp_0  = m22 * m33;
    var tmp_1  = m32 * m23;
    var tmp_2  = m12 * m33;
    var tmp_3  = m32 * m13;
    var tmp_4  = m12 * m23;
    var tmp_5  = m22 * m13;
    var tmp_6  = m02 * m33;
    var tmp_7  = m32 * m03;
    var tmp_8  = m02 * m23;
    var tmp_9  = m22 * m03;
    var tmp_10 = m02 * m13;
    var tmp_11 = m12 * m03;
    var tmp_12 = m20 * m31;
    var tmp_13 = m30 * m21;
    var tmp_14 = m10 * m31;
    var tmp_15 = m30 * m11;
    var tmp_16 = m10 * m21;
    var tmp_17 = m20 * m11;
    var tmp_18 = m00 * m31;
    var tmp_19 = m30 * m01;
    var tmp_20 = m00 * m21;
    var tmp_21 = m20 * m01;
    var tmp_22 = m00 * m11;
    var tmp_23 = m10 * m01;

    var t0 = (tmp_0 * m11 + tmp_3 * m21 + tmp_4 * m31) -
        (tmp_1 * m11 + tmp_2 * m21 + tmp_5 * m31);
    var t1 = (tmp_1 * m01 + tmp_6 * m21 + tmp_9 * m31) -
        (tmp_0 * m01 + tmp_7 * m21 + tmp_8 * m31);
    var t2 = (tmp_2 * m01 + tmp_7 * m11 + tmp_10 * m31) -
        (tmp_3 * m01 + tmp_6 * m11 + tmp_11 * m31);
    var t3 = (tmp_5 * m01 + tmp_8 * m11 + tmp_11 * m21) -
        (tmp_4 * m01 + tmp_9 * m11 + tmp_10 * m21);

    var d = 1.0 / (m00 * t0 + m10 * t1 + m20 * t2 + m30 * t3);

    dst[0] = d * t0;
    dst[1] = d * t1;
    dst[2] = d * t2;
    dst[3] = d * t3;
    dst[4] = d * ((tmp_1 * m10 + tmp_2 * m20 + tmp_5 * m30) -
          (tmp_0 * m10 + tmp_3 * m20 + tmp_4 * m30));
    dst[5] = d * ((tmp_0 * m00 + tmp_7 * m20 + tmp_8 * m30) -
          (tmp_1 * m00 + tmp_6 * m20 + tmp_9 * m30));
    dst[6] = d * ((tmp_3 * m00 + tmp_6 * m10 + tmp_11 * m30) -
          (tmp_2 * m00 + tmp_7 * m10 + tmp_10 * m30));
    dst[7] = d * ((tmp_4 * m00 + tmp_9 * m10 + tmp_10 * m20) -
          (tmp_5 * m00 + tmp_8 * m10 + tmp_11 * m20));
    dst[8] = d * ((tmp_12 * m13 + tmp_15 * m23 + tmp_16 * m33) -
          (tmp_13 * m13 + tmp_14 * m23 + tmp_17 * m33));
    dst[9] = d * ((tmp_13 * m03 + tmp_18 * m23 + tmp_21 * m33) -
          (tmp_12 * m03 + tmp_19 * m23 + tmp_20 * m33));
    dst[10] = d * ((tmp_14 * m03 + tmp_19 * m13 + tmp_22 * m33) -
          (tmp_15 * m03 + tmp_18 * m13 + tmp_23 * m33));
    dst[11] = d * ((tmp_17 * m03 + tmp_20 * m13 + tmp_23 * m23) -
          (tmp_16 * m03 + tmp_21 * m13 + tmp_22 * m23));
    dst[12] = d * ((tmp_14 * m22 + tmp_17 * m32 + tmp_13 * m12) -
          (tmp_16 * m32 + tmp_12 * m12 + tmp_15 * m22));
    dst[13] = d * ((tmp_20 * m32 + tmp_12 * m02 + tmp_19 * m22) -
          (tmp_18 * m22 + tmp_21 * m32 + tmp_13 * m02));
    dst[14] = d * ((tmp_18 * m12 + tmp_23 * m32 + tmp_15 * m02) -
          (tmp_22 * m32 + tmp_14 * m02 + tmp_19 * m12));
    dst[15] = d * ((tmp_22 * m22 + tmp_16 * m02 + tmp_21 * m12) -
          (tmp_20 * m12 + tmp_23 * m22 + tmp_17 * m02));

    return dst;
  }

  /**
   * Takes a  matrix and a vector with 4 entries, transforms that vector by
   * the matrix, and returns the result as a vector with 4 entries.
   * @param {Matrix4} m The matrix.
   * @param {Vector4} v The point in homogenous coordinates.
   * @param {Vector4} dst optional vector4 to store result
   * @return {Vector4} dst or new Vector4 if not provided
   * @memberOf module:webgl-3d-math
   */
  function transformVector(m, v, dst) {
    dst = dst || new Float32Array(4);
    for (var i = 0; i < 4; ++i) {
      dst[i] = 0.0;
      for (var j = 0; j < 4; ++j) {
        dst[i] += v[j] * m[j * 4 + i];
      }
    }
    return dst;
  }

  /**
   * Takes a 4-by-4 matrix and a vector with 3 entries,
   * interprets the vector as a point, transforms that point by the matrix, and
   * returns the result as a vector with 3 entries.
   * @param {Matrix4} m The matrix.
   * @param {Vector3} v The point.
   * @param {Vector4} dst optional vector4 to store result
   * @return {Vector4} dst or new Vector4 if not provided
   * @memberOf module:webgl-3d-math
   */
  function transformPoint(m, v, dst) {
    dst = dst || new Float32Array(3);
    var v0 = v[0];
    var v1 = v[1];
    var v2 = v[2];
    var d = v0 * m[0 * 4 + 3] + v1 * m[1 * 4 + 3] + v2 * m[2 * 4 + 3] + m[3 * 4 + 3];

    dst[0] = (v0 * m[0 * 4 + 0] + v1 * m[1 * 4 + 0] + v2 * m[2 * 4 + 0] + m[3 * 4 + 0]) / d;
    dst[1] = (v0 * m[0 * 4 + 1] + v1 * m[1 * 4 + 1] + v2 * m[2 * 4 + 1] + m[3 * 4 + 1]) / d;
    dst[2] = (v0 * m[0 * 4 + 2] + v1 * m[1 * 4 + 2] + v2 * m[2 * 4 + 2] + m[3 * 4 + 2]) / d;

    return dst;
  }

  /**
   * Takes a 4-by-4 matrix and a vector with 3 entries, interprets the vector as a
   * direction, transforms that direction by the matrix, and returns the result;
   * assumes the transformation of 3-dimensional space represented by the matrix
   * is parallel-preserving, i.e. any combination of rotation, scaling and
   * translation, but not a perspective distortion. Returns a vector with 3
   * entries.
   * @param {Matrix4} m The matrix.
   * @param {Vector3} v The direction.
   * @param {Vector4} dst optional vector4 to store result
   * @return {Vector4} dst or new Vector4 if not provided
   * @memberOf module:webgl-3d-math
   */
  function transformDirection(m, v, dst) {
    dst = dst || new Float32Array(3);

    var v0 = v[0];
    var v1 = v[1];
    var v2 = v[2];

    dst[0] = v0 * m[0 * 4 + 0] + v1 * m[1 * 4 + 0] + v2 * m[2 * 4 + 0];
    dst[1] = v0 * m[0 * 4 + 1] + v1 * m[1 * 4 + 1] + v2 * m[2 * 4 + 1];
    dst[2] = v0 * m[0 * 4 + 2] + v1 * m[1 * 4 + 2] + v2 * m[2 * 4 + 2];

    return dst;
  }

  /**
   * Takes a 4-by-4 matrix m and a vector v with 3 entries, interprets the vector
   * as a normal to a surface, and computes a vector which is normal upon
   * transforming that surface by the matrix. The effect of this function is the
   * same as transforming v (as a direction) by the inverse-transpose of m.  This
   * function assumes the transformation of 3-dimensional space represented by the
   * matrix is parallel-preserving, i.e. any combination of rotation, scaling and
   * translation, but not a perspective distortion.  Returns a vector with 3
   * entries.
   * @param {Matrix4} m The matrix.
   * @param {Vector3} v The normal.
   * @param {Vector3} [dst] The direction.
   * @return {Vector3} The transformed direction.
   * @memberOf module:webgl-3d-math
   */
  function transformNormal(m, v, dst) {
    dst = dst || new Float32Array(3);
    var mi = inverse(m);
    var v0 = v[0];
    var v1 = v[1];
    var v2 = v[2];

    dst[0] = v0 * mi[0 * 4 + 0] + v1 * mi[0 * 4 + 1] + v2 * mi[0 * 4 + 2];
    dst[1] = v0 * mi[1 * 4 + 0] + v1 * mi[1 * 4 + 1] + v2 * mi[1 * 4 + 2];
    dst[2] = v0 * mi[2 * 4 + 0] + v1 * mi[2 * 4 + 1] + v2 * mi[2 * 4 + 2];

    return dst;
  }

  function copy(src, dst) {
    dst = dst || new Float32Array(16);

    dst[ 0] = src[ 0];
    dst[ 1] = src[ 1];
    dst[ 2] = src[ 2];
    dst[ 3] = src[ 3];
    dst[ 4] = src[ 4];
    dst[ 5] = src[ 5];
    dst[ 6] = src[ 6];
    dst[ 7] = src[ 7];
    dst[ 8] = src[ 8];
    dst[ 9] = src[ 9];
    dst[10] = src[10];
    dst[11] = src[11];
    dst[12] = src[12];
    dst[13] = src[13];
    dst[14] = src[14];
    dst[15] = src[15];

    return dst;
  }

  return {
    copy: copy,
    lookAt: lookAt,
    addVectors: addVectors,
    subtractVectors: subtractVectors,
    distance: distance,
    distanceSq: distanceSq,
    normalize: normalize,
    compose: compose,
    cross: cross,
    decompose: decompose,
    dot: dot,
    identity: identity,
    transpose: transpose,
    length: length,
    orthographic: orthographic,
    frustum: frustum,
    perspective: perspective,
    translation: translation,
    translate: translate,
    xRotation: xRotation,
    yRotation: yRotation,
    zRotation: zRotation,
    xRotate: xRotate,
    yRotate: yRotate,
    zRotate: zRotate,
    axisRotation: axisRotation,
    axisRotate: axisRotate,
    scaling: scaling,
    scale: scale,
    multiply: multiply,
    inverse: inverse,
    transformVector: transformVector,
    transformPoint: transformPoint,
    transformDirection: transformDirection,
    transformNormal: transformNormal,
  };

}));



/***/ }),

/***/ "./src/webgl-helper.js":
/*!*****************************!*\
  !*** ./src/webgl-helper.js ***!
  \*****************************/
/*! exports provided: createSphereVertices, initShaderProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSphereVertices", function() { return createSphereVertices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initShaderProgram", function() { return initShaderProgram; });
/**
 * Primitive sphere, the vertices in the list of 
 * coordinates that is represented by the array contains 3 numbers (x,y,z).
 * 
 * @param {number} radius 
 * @param {number} numVerticalSegments the number of the vertical segments. Like Earth's meridians,the line going pole to pole.
 * @param {number} numHorizonalSegements the number of the horizonal segments. Like Earth's parallels.
 * @param {number} [startLatitudeInRadians=0]  
 * @param {number} [endLatitudeInRadians=Math.PI]  
 * @param {number} [startLongitudeInRadians=0]  
 * @param {number} [endLongitudeInRadians=2*Math.PI]  
 */
function createSphereVertices(
  radius, numVerticalSegments, numHorizonalSegements, 
  startLatitudeInRadians = 0, endLatitudeInRadians = Math.PI, 
  startLongitudeInRadians = 0, endLongitudeInRadians = 2 * Math.PI) {

  const latitudeRange = endLatitudeInRadians - startLatitudeInRadians;
  const longitudeRange = endLongitudeInRadians - startLongitudeInRadians;
  
  // add one because the end line should be two lines merged
  const numVertices = (numVerticalSegments + 1) * (numHorizonalSegements + 1); 
  
  let positions = [], normals = [], texCoords = [];

  for (let j = 0; j < numHorizonalSegements+1; j+=1) {
    for (let i = 0; i < numVerticalSegments+1; i+=1) {
      const u = i / numVerticalSegments;
      const v = j / numHorizonalSegements;

      const theta = longitudeRange * u; 
      const phi = latitudeRange * v;

      const sinTheta = Math.sin(theta), cosTheta = Math.cos(theta);
      const sinPhi = Math.sin(phi), costPhi = Math.cos(phi);

      const ux = cosTheta * sinPhi;
      const uy = costPhi;
      const uz = sinTheta * sinPhi;

      positions.push([radius * ux, radius * uy, radius * uz]);
      normals.push([ux, uy, uz]);
      texCoords.push([1 - u, v]);
    }
  }

  // generate the indices of the triangles.
  const numVerticalSegmentVertices = numVerticalSegments + 1;
  let indices = [];
  for (let i = 0; i < numVerticalSegments; i += 1) {
    for (let j = 0; j < numHorizonalSegements; j += 1){
      // two triangles of one face
      /* triangle 1 
          *1-----*2
           |    /
           |  /  
          *3  
      */
      let idx1 = [
        j * numVerticalSegmentVertices + i,
        j * numVerticalSegmentVertices + (i + 1),
        (j + 1) * numVerticalSegmentVertices + i 
      ];
      /* triangle 2
                *2   
              /  |
            /    |
          *1-----*3
      */
      let idx2 = [
        (j + 1) * numVerticalSegmentVertices + i ,
        j * numVerticalSegmentVertices + (i + 1),
        (j + 1) * numVerticalSegmentVertices + (i + 1)
      ];

      indices.push(idx1, idx2);
    }
  }

  return {
    poistions: positions,
    normals: normals,
    textureCoordinates: texCoords,
    indices: indices,

    numVertices: numVertices
  };

}

/*
  GLSL shader program and GLSL code compiler.

  There are two shader: vertex shader and fragment shader.
  Vertex shader is used for the vertex position info.
  fragment shader is used for the vertex color info.

  For more details, Look for the document about WebGL on MDN.
 */


//
// Initialize a shader program, so WebGL knows how to draw our data
//
function initShaderProgram(gl, vsSource, fsSource) {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

  // Create the shader program

  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  // If creating the shader program failed, alert

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    throw Error('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
  }

  return shaderProgram;
}

//
// creates a shader of the given type, uploads the source and
// compiles it.
//
function loadShader(gl, type, source) {
  const shader = gl.createShader(type);

  // Send the source to the shader object

  gl.shaderSource(shader, source);

  // Compile the shader program

  gl.compileShader(shader);

  // See if it compiled successfully

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    throw Error('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
  }

  return shader;
}

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYW5vcmFtYS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vcGFub3JhbWEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGFub3JhbWEvLi9zcmMvY3NzL3Bhbm9yYW1hLmxlc3MiLCJ3ZWJwYWNrOi8vcGFub3JhbWEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Bhbm9yYW1hLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovL3Bhbm9yYW1hLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly9wYW5vcmFtYS8uL3NyYy9jc3MvcGFub3JhbWEubGVzcz9iNmNlIiwid2VicGFjazovL3Bhbm9yYW1hLy4vc3JjL3Bhbm9yYW1hLmpzIiwid2VicGFjazovL3Bhbm9yYW1hLy4vc3JjL3V0aWxzL200LmpzIiwid2VicGFjazovL3Bhbm9yYW1hLy4vc3JjL3dlYmdsLWhlbHBlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7O0FBRWQsa0RBQWtELHNCQUFzQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7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UTtBQUNyQixhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsT0FBTztBQUNwQixhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLE9BQU87QUFDcEIsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLE9BQU87QUFDcEIsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGFBQWEsU0FBUztBQUN0QixhQUFhLFNBQVM7QUFDdEIsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQSxxQkFBcUIsT0FBTztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQzU1Q0Q7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEI7QUFDTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsOEU7O0FBRUE7O0FBRUEsaUJBQWlCLDZCQUE2QjtBQUM5QyxtQkFBbUIsMkJBQTJCO0FBQzlDO0FBQ0E7O0FBRUEsdUM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix5QkFBeUI7QUFDMUMsbUJBQW1CLDJCQUEyQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEMiLCJmaWxlIjoicGFub3JhbWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJwYW5vcmFtYVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJwYW5vcmFtYVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFub3JhbWEuanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5wYW5vcmFtYV9fY2VudGVyaW5nLS0xWDgzVyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG4ucGFub3JhbWFfX3dyYXBwZXItLTNNZWdDIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ucGFub3JhbWFfX292ZXJsYXktLVI1NFJPIHtcXG4gIC8qIG92ZXJsYXkgb24gdGhlIHBhcmVudCh3cmFwcGVyKSwgb25lJ3MgcG9zaXRpb24gaXMgcmVsYXRpdmUgYW5kXFxuICB0aGUgb3RoZXIgaXMgYWJzb2x1dGUuICovXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMUVCOUZGOyAqL1xcbn1cXG4ucGFub3JhbWFfX3Byb2dyZXNzV3JhcHBlci0tMjJMZWIge1xcbiAgd2lkdGg6IDM1JTtcXG4gIGhlaWdodDogOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGRjtcXG59XFxuLnBhbm9yYW1hX19wcm9ncmVzc0Jhci0tUFNJU08ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4ucGFub3JhbWFfX3Byb2dyZXNzTWVzc2FnZS0tMkhXaUIge1xcbiAgY29sb3I6ICNGRkY7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLnBhbm9yYW1hX19wZXJjZW50YWdlTnVtLS0zVjJmRSB7XFxuICBjb2xvcjogI0ZGRjtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImNlbnRlcmluZ1wiOiBcInBhbm9yYW1hX19jZW50ZXJpbmctLTFYODNXXCIsXG5cdFwid3JhcHBlclwiOiBcInBhbm9yYW1hX193cmFwcGVyLS0zTWVnQ1wiLFxuXHRcIm92ZXJsYXlcIjogXCJwYW5vcmFtYV9fb3ZlcmxheS0tUjU0Uk9cIixcblx0XCJwcm9ncmVzc1dyYXBwZXJcIjogXCJwYW5vcmFtYV9fcHJvZ3Jlc3NXcmFwcGVyLS0yMkxlYiBwYW5vcmFtYV9fY2VudGVyaW5nLS0xWDgzV1wiLFxuXHRcInByb2dyZXNzQmFyXCI6IFwicGFub3JhbWFfX3Byb2dyZXNzQmFyLS1QU0lTT1wiLFxuXHRcInByb2dyZXNzTWVzc2FnZVwiOiBcInBhbm9yYW1hX19wcm9ncmVzc01lc3NhZ2UtLTJIV2lCXCIsXG5cdFwicGVyY2VudGFnZU51bVwiOiBcInBhbm9yYW1hX19wZXJjZW50YWdlTnVtLS0zVjJmRVwiXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwie1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW19pXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCIoXCIuY29uY2F0KGl0ZW1bMl0sIFwiKSBhbmQgKFwiKS5jb25jYXQobWVkaWFRdWVyeSwgXCIpXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMSEuLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wYW5vcmFtYS5sZXNzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTEhLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcGFub3JhbWEubGVzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMSEuLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wYW5vcmFtYS5sZXNzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBtNCAgZnJvbSAnLi91dGlscy9tNCc7XG5pbXBvcnQgeyBpbml0U2hhZGVyUHJvZ3JhbSwgY3JlYXRlU3BoZXJlVmVydGljZXMgfSBmcm9tICcuL3dlYmdsLWhlbHBlcic7XG5cbmltcG9ydCBjbGF6eiBmcm9tIFwiLi9jc3MvcGFub3JhbWEubGVzc1wiO1xuXG4vKipcbiAqIFBhbm9yYW1hLmpzLiBjcmVhdGUgcGFub3JhbWFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0dGluZyAgdGhlIHNldHRpbmcgb2YgcGFub3JhbWEuanMuXG4gKiBAcGFyYW0ge3N0cmluZ3xET01FbGVtZW50fSBbc2V0dGluZy5jb250YWluZXI9ZG9jdW1lbnQuYm9keV0gVG8gc3BlY2lmeSB3aGljaCBjb250YWluZXIgdGhhdCB0aGUgcGFub3JhbWEgcHV0cyBpbiwgY2FuIGJlIGVpdGhlciBjc3Mgc2VsZWN0b3Igc3RyaW5nKGxpa2UgXCIjaWRcIiBcIi5jbGF6em5hbWVcIiBcImRpdiNpZFwiKSBvciBET01FbGVtZW50KGxpa2UgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpZFwiKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpZFwiKSApLlxuICogQHBhcmFtIHtzdHJpbmd9IHNldHRpbmcuc3JjIHRoZSBpbWFnZSB1cmwgb2YgdGhlIGFjdHVhbCBwYW5vcmFtYS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2V0dGluZy5mb3Y9OTBdIHRoZSBGaWVsZCBPZiBWaWV3IGluIGRlZ3JlZXMsIHRoZSBjYW1lcmEgdmlldyBhbmdsZSBzY29wZS5cbiAqIEBwYXJhbSB7bnVtYmVyIGFycmF5fSBbc2V0dGluZy5jYW1lcmFEZWdyZWU9WzAsMF1dIHR3byBudW1iZXJzIHJlcHJlc2VudCB0aGUgaG9yaXpvbmFsIGFuZCB2ZXJ0aWNhbCBkZWdyZWVzIG9mIGNhbWVyYSxcbiAqICBkZWZhdWx0IGlzIFswLDBdIHdoaWNoIG1lYW5zIHRoZSBkZWZhdWx0IHN0YXJ0IHBvaW50IG9mIHRoZSBwYW5vcmFtYSBpbWFnZS5cbiAqICB0aGUgZmlyc3QgbnVtYmVyIHJhbmdlcyBmcm9tIDAgdG8gMzYwIHdoaWNoIGlzIGhvcml6b25hbCBkZWdyZWUgd2hpY2ggaXMgdGhlIGRpcmVjdGlvbiB0aGF0IGNhbWVyYSBsb29rcyBvbiB0aGUgaG9yaXpvbi5cbiAqICB0aGUgc2Vjb25kIG51bWJlciByYW5nZXMgZnJvbSAtOTAgdG8gOTAgKHRvdGFsbHkgMTgwIGRlZ3JlZXMpICB3aGljaCBpcyB2ZXJ0aWNhbCBkZWdyZWVzIG9yIHRoZSBQaXRjaCBhbmdsZSB3aGVuIGxvb2sgdXAgb3IgbG9vayBkb3duLFxuICogIHBvc2l0aXZlIG51bWJlcnMoMCB0byA5MCkgYXJlIHRoZSBkZWdyZWVzIHRoYXQgbG9va3MgdXAsIDkwIGlzIHRoZSBub3J0aCBwb2xlKHRoZSB0b3ApO1xuICogIG5lZ2F0aXZlIG51bWJlcnMoLTkwIHRvIDApIGFyZSB0aGUgZGVncmVlcyB0aGF0IGxvb2tzIGRvd24sIC05MCBpcyB0aGUgc291dGggcG9sZSh0aGUgYm90dG9tKTtcbiAqL1xuZnVuY3Rpb24gcGFub3JhbWEoc2V0dGluZykge1xuXG4gIC8vIGNvbnN0IENMQVpaID0gJ3Bhbm9yYW1hJzsgLy8gY3NzIGNsYXNzIG5hbWUuIFtOT1QgVVNFRCBZRVRdXG5cbiAgc2V0dGluZyA9IGhhbmRsZVNldHRpbmcoc2V0dGluZyk7XG5cbiAgY29uc3Qge2NvbnRhaW5lciwgdXJsLCBmb3YsIGNhbWVyYURlZ3JlZX0gPSBzZXR0aW5nO1xuICBjb25zdCB7cmFkaXVzLCBudW1WZXJ0aWNhbFNlZ21lbnRzLCBudW1Ib3Jpem9uYWxTZWdlbWVudHN9ID0gc2V0dGluZy5zcGhlcmU7XG5cbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgY2FudmFzLndpZHRoID0gY29udGFpbmVyLmNsaWVudFdpZHRoO1xuICBjYW52YXMuaGVpZ2h0ID0gY29udGFpbmVyLmNsaWVudEhlaWdodDtcblxuICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKGNsYXp6LndyYXBwZXIpO1xuXG4gIC8vIHVzZXIgY29udGFpbmVyID4gd3JhcHBlciA+IGNhbnZhc1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY2FudmFzKTtcblxuICAvLyBvdmVybGF5XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvdmVybGF5LmNsYXNzTmFtZSA9IGNsYXp6Lm92ZXJsYXk7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG5cbiAgY29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdsXCIpOyAvLyBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0XG5cbiAgLy8gbm90IHN1cHBvcnQgV2ViZ2xcbiAgaWYgKGdsID09PSBudWxsKSB7XG4gICAgLy8gVE9ETyB3YXJuaWcgdGhlIG1zZyB0aGF0IHdlYmdsIGlzbid0IGF2YWlhYmxlLlxuICAgIHRocm93IEVycm9yKHtcbiAgICAgIHR5cGU6IFwiTm90IHN1cHBvcnQgV2ViR0xcIixcbiAgICAgIG1zZzogXCJXZWJHTCBpc24ndCBzdXBwb3J0LiB0aGUgcGFub3JhbWEgd2lsbCBub3Qgd29yay5cIixcbiAgICB9KTtcbiAgfVxuXG4gIGdsLmVuYWJsZShnbC5DVUxMX0ZBQ0UpOyAvLyBvbmx5IGRyYXcgdGhlIGZyb250IGZhY2Ugd2hpY2ggdGhlIHZlcnRpY2VzIGlzIGRyYXduIGNsb2Nrd2lzZS5cbiAgLy8gU2V0IGNsZWFyIGNvbG9yIHRvIGJsYWNrLCBmdWxseSBvcGFxdWVcbiAgZ2wuY2xlYXJDb2xvcigwLjAsIDAuMCwgMC4wLCAxLjApO1xuICAvLyBDbGVhciB0aGUgY29sb3IgYnVmZmVyIHdpdGggc3BlY2lmaWVkIGNsZWFyIGNvbG9yXG4gIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQpO1xuXG5cbiAgLy8gVmVydGV4IHNoYWRlciBwcm9ncmFtXG4gIGNvbnN0IHZzU291cmNlID0gYFxuICAgIGF0dHJpYnV0ZSB2ZWM0IGFWZXJ0ZXhQb3NpdGlvbjtcbiAgICBhdHRyaWJ1dGUgdmVjMiBhVGV4dHVyZUNvb3JkaW5hdGU7XG5cbiAgICB1bmlmb3JtIG1hdDQgdU1vZGVsVmlld01hdHJpeDtcbiAgICB1bmlmb3JtIG1hdDQgdVByb2plY3Rpb25NYXRyaXg7XG5cbiAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdlRleHR1cmVDb29yZGluYXRlO1xuXG4gICAgdm9pZCBtYWluKCkge1xuICAgICAgZ2xfUG9zaXRpb24gPSB1UHJvamVjdGlvbk1hdHJpeCAqIHVNb2RlbFZpZXdNYXRyaXggKiBhVmVydGV4UG9zaXRpb247XG4gICAgICB2VGV4dHVyZUNvb3JkaW5hdGUgPSBhVGV4dHVyZUNvb3JkaW5hdGU7XG4gICAgfVxuICBgO1xuXG4gIC8vIEZyYWdtZW50IHNoYWRlciBwcm9ncmFtXG4gIGNvbnN0IGZzU291cmNlID0gYFxuICAgIHZhcnlpbmcgaGlnaHAgdmVjMiB2VGV4dHVyZUNvb3JkaW5hdGU7XG5cbiAgICB1bmlmb3JtIHNhbXBsZXIyRCB1U2FtcGxlcjtcblxuICAgIHZvaWQgbWFpbih2b2lkKSB7XG4gICAgICBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQodVNhbXBsZXIsIHZUZXh0dXJlQ29vcmRpbmF0ZSk7XG4gICAgfVxuICBgO1xuXG4gIGNvbnN0IHNoYWRlclByb2dyYW0gPSBpbml0U2hhZGVyUHJvZ3JhbShnbCwgdnNTb3VyY2UsIGZzU291cmNlKTtcblxuICBjb25zdCBwcm9ncmFtSW5mbyA9IHtcbiAgICBwcm9ncmFtOiBzaGFkZXJQcm9ncmFtLFxuICAgIGF0dHJpYkxvY2F0aW9uczoge1xuICAgICAgdmVydGV4UG9zaXRpb246IGdsLmdldEF0dHJpYkxvY2F0aW9uKHNoYWRlclByb2dyYW0sICdhVmVydGV4UG9zaXRpb24nKSxcbiAgICAgIHRleHR1cmVDb29yZGluYXRlOiBnbC5nZXRBdHRyaWJMb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAnYVRleHR1cmVDb29yZGluYXRlJyksXG4gICAgfSxcbiAgICB1bmlmb3JtTG9jYXRpb25zOiB7XG4gICAgICBwcm9qZWN0aW9uTWF0cml4OiBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3VQcm9qZWN0aW9uTWF0cml4JyksXG4gICAgICBtb2RlbFZpZXdNYXRyaXg6IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAndU1vZGVsVmlld01hdHJpeCcpLFxuICAgICAgdVNhbXBsZXI6IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAndVNhbXBsZXInKSxcbiAgICB9LFxuICB9O1xuXG4gIC8vIGNyZWF0ZSBvbmUgc3BoZXJlIHZlcnRpY2VzXG4gIGNvbnN0IHNwaGVyZVZlcnRpY2VzID0gY3JlYXRlU3BoZXJlVmVydGljZXMocmFkaXVzLCBudW1WZXJ0aWNhbFNlZ21lbnRzLCBudW1Ib3Jpem9uYWxTZWdlbWVudHMpO1xuXG4gIC8vIGNyZWF0ZSBvbmUgcHJvZ3Jlc3MgaGVscGVyIGZ1bmN0aW9uIHRvIGNvbnRyb2wgbG9hZGluZyBpbmZvLlxuICBjb25zdCBsb2FkaW5nUHJvZ3Jlc3NIZWxwZXIgPSBsb2FkaW5nUHJvZ3Jlc3NGYWN0b3J5KG92ZXJsYXksIFwibG9hZGluZyBwYW5vcmFtYS4uLlwiKTtcblxuICBjb25zdCBnbF9sb2FkVGV4dHVyZSA9IGN1cnJ5KGxvYWRUZXh0dXJlLCBnbCk7IC8vIG1ldGhvZCwgZmlyc3QgYXJndW1lbnRcbiAgY29uc3QgdGV4dHVyZSA9IGdsX2xvYWRUZXh0dXJlKFxuICAgIHVybCxcbiAgICAoKT0+eyAvLyBjYWxsYmFjayBhZnRlciBmaW5pc2hpbmcgdG8gbG9hZCB0aGUgdGV4dHVyZVxuICAgICAgbG9hZGluZ1Byb2dyZXNzSGVscGVyLmhpZGUoKTsgLy8gaGlkZSBwcm9ncmVzcyBpbmZvXG4gICAgICBuZWVkVG9SZWRyYXcgPSB0cnVlO1xuICAgIH0sXG4gICAgbG9hZGluZ1Byb2dyZXNzSGVscGVyLmNyZWF0ZU9yVXBkYXRlIC8vIGNhbGxiYWNrIHdoaWxlIGxvYWRpbmdcbiAgKTtcblxuICBjb25zdCBidWZmZXJzID0gaW5pdEJ1ZmZlcnMoZ2wpO1xuICBmdW5jdGlvbiBpbml0QnVmZmVycyhnbCkge1xuXG4gICAgLy8gcG9zaXRpb24gYnVmZmVyIHBhcnRzXG4gICAgY29uc3QgcG9zaXRpb25zID0gc3BoZXJlVmVydGljZXMucG9pc3Rpb25zLmZsYXQoKTtcblxuICAgIGNvbnN0IHBvc2l0aW9uQnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHBvc2l0aW9uQnVmZmVyKTtcbiAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheShwb3NpdGlvbnMpLFxuICAgICAgZ2wuU1RBVElDX0RSQVcpO1xuXG4gICAgLy8gdGV4dHVyZSBwYXJ0c1xuICAgIGNvbnN0IHRleHR1cmVDb29yZHMgPSBzcGhlcmVWZXJ0aWNlcy50ZXh0dXJlQ29vcmRpbmF0ZXMuZmxhdCgpO1xuXG4gICAgY29uc3QgdGV4dHVyZUNvb3JkQnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRleHR1cmVDb29yZEJ1ZmZlcik7XG4gICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkodGV4dHVyZUNvb3JkcyksIGdsLlNUQVRJQ19EUkFXKTtcblxuICAgIC8vIGJ1aWxkIHRoZSBlbGVtZW50IGFycmF5LlxuICAgIGNvbnN0IGluZGljZXMgPSBzcGhlcmVWZXJ0aWNlcy5pbmRpY2VzLmZsYXQoKTtcblxuICAgIGNvbnN0IGluZGV4QnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgaW5kZXhCdWZmZXIpO1xuICAgIGdsLmJ1ZmZlckRhdGEoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIG5ldyBVaW50MTZBcnJheShpbmRpY2VzKSxcbiAgICAgIGdsLlNUQVRJQ19EUkFXKTtcblxuICAgIHJldHVybiB7XG4gICAgICBwb3NpdGlvbjogcG9zaXRpb25CdWZmZXIsXG4gICAgICB0ZXh0dXJlQ29vcmRpbmF0ZTogdGV4dHVyZUNvb3JkQnVmZmVyLFxuICAgICAgaW5kaWNlczogaW5kZXhCdWZmZXIsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXJlZnVsbHkhIHRoZSByYW5nZSBvZiB1c2VyIHNldHRpbmcgdmVydGljYWwgZGVncmVlcyAoLTkwIHRvIDkwKSBpc1xuICAgKiB0aGUgcmV2ZXJzZWQgb3JkZXIgb2YgdGhlIGxhdGl0dWRlKDAgdG8gTWF0aC5QSSkgdGhhdCBkZXZlbG9wcyBuZWVkLCBhbHNvIHdpdGggdGhlIG9mZnNldCBvZiBoYWxmIG9mIFBJLlxuICAgKiBsYXRpdHVkZSAwIG1lYW5zIHRoZSBub3J0aCBwb2xlKHRoZSB0b3ApIHRoYXQgaXMgdGhlIHVzZXIgc2V0dGluZyBkZWdyZWUgOTAuXG4gICAqXG4gICAqIFdoeSBtYWtlIHVzZXIgc2V0dGluZyBhbmQgYWN0dWFsIGRhdGEgc3VjaCBkaWZmZXJlbnQ/XG4gICAqIEFud3NlcjogZWFzeSBmb3IgdXNlLiBgWzAsMF1gYXMgc3RhcnRwb2ludCBtYXRjaGVzIHRoZSBtYW4ncyBpbnR1aXRpb24uXG4gICAqL1xuICBsZXQge2xhdGl0dWRlLCBsb25naXR1ZGV9ID0gdXNlckNhbWVyYURlZ3JlZVRvTGF0TG9uKGNhbWVyYURlZ3JlZSk7XG4gIGxldCB0YXJnZXRQb3NpdGlvbiA9IGxhdGxvblRvVmVydGV4KGxhdGl0dWRlLCBsb25naXR1ZGUpOyAvLyBjYW1lcmEgdGFyZ2V0IHBvc2l0aW9uXG5cbiAgZnVuY3Rpb24gZHJhd1NjZW5lKGdsLCBwcm9ncmFtSW5mbywgYnVmZmVycykge1xuICAgIGdsLmNsZWFyQ29sb3IoMC4wLCAwLjAsIDAuMCwgMS4wKTsgIC8vIENsZWFyIHRvIGJsYWNrLCBmdWxseSBvcGFxdWVcbiAgICBnbC5jbGVhckRlcHRoKDEuMCk7ICAgICAgICAgICAgICAgICAvLyBDbGVhciBldmVyeXRoaW5nXG4gICAgZ2wuZW5hYmxlKGdsLkRFUFRIX1RFU1QpOyAgICAgICAgICAgLy8gRW5hYmxlIGRlcHRoIHRlc3RpbmdcbiAgICBnbC5kZXB0aEZ1bmMoZ2wuTEVRVUFMKTsgICAgICAgICAgICAvLyBOZWFyIHRoaW5ncyBvYnNjdXJlIGZhciB0aGluZ3NcblxuICAgIC8vIENsZWFyIHRoZSBjYW52YXMgYmVmb3JlIHdlIHN0YXJ0IGRyYXdpbmcgb24gaXQuXG5cbiAgICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUIHwgZ2wuREVQVEhfQlVGRkVSX0JJVCk7XG5cbiAgICAvLyBDcmVhdGUgYSBwZXJzcGVjdGl2ZSBtYXRyaXgsIGEgc3BlY2lhbCBtYXRyaXggdGhhdCBpc1xuICAgIC8vIHVzZWQgdG8gc2ltdWxhdGUgdGhlIGRpc3RvcnRpb24gb2YgcGVyc3BlY3RpdmUgaW4gYSBjYW1lcmEuXG4gICAgLy8gT3VyIGZpZWxkIG9mIHZpZXcgaXMgNDUgZGVncmVlcywgd2l0aCBhIHdpZHRoL2hlaWdodFxuICAgIC8vIHJhdGlvIHRoYXQgbWF0Y2hlcyB0aGUgZGlzcGxheSBzaXplIG9mIHRoZSBjYW52YXNcbiAgICAvLyBhbmQgd2Ugb25seSB3YW50IHRvIHNlZSBvYmplY3RzIGJldHdlZW4gMC4xIHVuaXRzXG4gICAgLy8gYW5kIDEwMCB1bml0cyBhd2F5IGZyb20gdGhlIGNhbWVyYS5cblxuICAgIGNvbnN0IGZpZWxkT2ZWaWV3ID0gZm92ICogTWF0aC5QSSAvIDE4MDsgICAvLyBpbiByYWRpYW5zXG4gICAgY29uc3QgYXNwZWN0ID0gZ2wuY2FudmFzLmNsaWVudFdpZHRoIC8gZ2wuY2FudmFzLmNsaWVudEhlaWdodDtcbiAgICBjb25zdCB6TmVhciA9IDAuMTtcbiAgICBjb25zdCB6RmFyID0gMTAwLjA7XG4gICAgY29uc3QgcHJvamVjdGlvbk1hdHJpeCA9IG00LnBlcnNwZWN0aXZlKFxuICAgICAgZmllbGRPZlZpZXcsXG4gICAgICBhc3BlY3QsXG4gICAgICB6TmVhcixcbiAgICAgIHpGYXIpO1xuXG4gICAgLy8gQ2FtZXJhIG1hdHJpeFxuICAgIGNvbnN0IGNhbWVyYVVwID0gWzAsIDEsIDBdO1xuICAgIGxldCBjYW1lcmFNYXRyaXggPSBtNC5sb29rQXQoWzAsIDAsIDBdLCB0YXJnZXRQb3NpdGlvbiwgY2FtZXJhVXApO1xuXG4gICAgLy8gY2FtZXJhTWF0cml4ID0gbTQudHJhbnNsYXRlKGNhbWVyYU1hdHJpeCwgMCwgMCwgLTMpO1xuXG4gICAgLy8gU2V0IHRoZSBkcmF3aW5nIHBvc2l0aW9uIHRvIHRoZSBcImlkZW50aXR5XCIgcG9pbnQsIHdoaWNoIGlzXG4gICAgLy8gdGhlIGNlbnRlciBvZiB0aGUgc2NlbmUuXG4gICAgbGV0IG1vZGVsVmlld01hdHJpeCA9IG00LmludmVyc2UoY2FtZXJhTWF0cml4KTtcblxuICAgIGxldCBzY2FsZSA9IG00LnNjYWxpbmcoLTEsIDEsIDEpO1xuICAgIG1vZGVsVmlld01hdHJpeCA9IG00Lm11bHRpcGx5KG1vZGVsVmlld01hdHJpeCwgc2NhbGUpO1xuXG4gICAgLy8gVGVsbCBXZWJHTCBob3cgdG8gcHVsbCBvdXQgdGhlIHBvc2l0aW9ucyBmcm9tIHRoZSBwb3NpdGlvblxuICAgIC8vIGJ1ZmZlciBpbnRvIHRoZSB2ZXJ0ZXhQb3NpdGlvbiBhdHRyaWJ1dGUuXG4gICAge1xuICAgICAgY29uc3QgbnVtQ29tcG9uZW50cyA9IDM7ICAvLyBwdWxsIG91dCAzICh4LHkseikgdmFsdWVzIHBlciBpdGVyYXRpb25cbiAgICAgIGNvbnN0IHR5cGUgPSBnbC5GTE9BVDsgICAgLy8gdGhlIGRhdGEgaW4gdGhlIGJ1ZmZlciBpcyAzMmJpdCBmbG9hdHNcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZSA9IGZhbHNlOyAgLy8gZG9uJ3Qgbm9ybWFsaXplXG4gICAgICBjb25zdCBzdHJpZGUgPSAwOyAgICAgICAgIC8vIGhvdyBtYW55IGJ5dGVzIHRvIGdldCBmcm9tIG9uZSBzZXQgb2YgdmFsdWVzIHRvIHRoZSBuZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDAgPSB1c2UgdHlwZSBhbmQgbnVtQ29tcG9uZW50cyBhYm92ZVxuICAgICAgY29uc3Qgb2Zmc2V0ID0gMDsgICAgICAgICAvLyBob3cgbWFueSBieXRlcyBpbnNpZGUgdGhlIGJ1ZmZlciB0byBzdGFydCBmcm9tXG4gICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgYnVmZmVycy5wb3NpdGlvbik7XG4gICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxuICAgICAgICAgIHByb2dyYW1JbmZvLmF0dHJpYkxvY2F0aW9ucy52ZXJ0ZXhQb3NpdGlvbixcbiAgICAgICAgICBudW1Db21wb25lbnRzLFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgbm9ybWFsaXplLFxuICAgICAgICAgIHN0cmlkZSxcbiAgICAgICAgICBvZmZzZXQpO1xuICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoXG4gICAgICAgICAgcHJvZ3JhbUluZm8uYXR0cmliTG9jYXRpb25zLnZlcnRleFBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICAvLyB0ZWxsIHdlYmdsIGhvdyB0byBwdWxsIG91dCB0aGUgdGV4dHVyZSBjb29yZGluYXRlcyBmcm9tIGJ1ZmZlclxuICAgIHtcbiAgICAgIGNvbnN0IG51bUNvbXBvbmVudHMgPSAyOyAvLyBldmVyeSBjb29yZGluYXRlIGNvbXBvc2VkIG9mIDIgdmFsdWVzXG4gICAgICBjb25zdCB0eXBlID0gZ2wuRkxPQVQ7IC8vIHRoZSBkYXRhIGluIHRoZSBidWZmZXIgaXMgMzIgYml0IGZsb2F0XG4gICAgICBjb25zdCBub3JtYWxpemUgPSBmYWxzZTsgLy8gZG9uJ3Qgbm9ybWFsaXplXG4gICAgICBjb25zdCBzdHJpZGUgPSAwOyAvLyBob3cgbWFueSBieXRlcyB0byBnZXQgZnJvbSBvbmUgc2V0IHRvIHRoZSBuZXh0XG4gICAgICBjb25zdCBvZmZzZXQgPSAwOyAvLyBob3cgbWFueSBieXRlcyBpbnNpZGUgdGhlIGJ1ZmZlciB0byBzdGFydCBmcm9tXG4gICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgYnVmZmVycy50ZXh0dXJlQ29vcmRpbmF0ZSk7XG4gICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxuICAgICAgICBwcm9ncmFtSW5mby5hdHRyaWJMb2NhdGlvbnMudGV4dHVyZUNvb3JkaW5hdGUsXG4gICAgICAgICBudW1Db21wb25lbnRzLCB0eXBlLCBub3JtYWxpemUsIHN0cmlkZSwgb2Zmc2V0KTtcbiAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHByb2dyYW1JbmZvLmF0dHJpYkxvY2F0aW9ucy50ZXh0dXJlQ29vcmRpbmF0ZSk7XG4gICAgfVxuXG4gICAgLy8gVGVsbCBXZWJHTCB3aGljaCBpbmRpY2VzIHRvIHVzZSB0byBpbmRleCB0aGUgdmVydGljZXNcbiAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBidWZmZXJzLmluZGljZXMpO1xuXG4gICAgLy8gVGVsbCBXZWJHTCB0byB1c2Ugb3VyIHByb2dyYW0gd2hlbiBkcmF3aW5nXG5cbiAgICBnbC51c2VQcm9ncmFtKHByb2dyYW1JbmZvLnByb2dyYW0pO1xuXG4gICAgLy8gU2V0IHRoZSBzaGFkZXIgdW5pZm9ybXNcblxuICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYoXG4gICAgICAgIHByb2dyYW1JbmZvLnVuaWZvcm1Mb2NhdGlvbnMucHJvamVjdGlvbk1hdHJpeCxcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIHByb2plY3Rpb25NYXRyaXgpO1xuICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYoXG4gICAgICAgIHByb2dyYW1JbmZvLnVuaWZvcm1Mb2NhdGlvbnMubW9kZWxWaWV3TWF0cml4LFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgbW9kZWxWaWV3TWF0cml4KTtcblxuICAgIC8qIFNwZWNpZnkgdGhlIHRleHR1cmUgdG8gbWFwIG9udG8gdGhlIGZhY2VzLiAqL1xuXG4gICAgLy8gVGVsbCBXZWJHTCB3ZSB3YW50IHRvIGFmZmVjdCB0ZXh0dXJlIHVuaXQgMFxuICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTApO1xuXG4gICAgLy8gQmluZCB0aGUgdGV4dHVyZSB0byB0ZXh0dXJlIHVuaXQgMFxuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRleHR1cmUpO1xuXG4gICAgLy8gVGVsbCB0aGUgc2hhZGVyIHdlIGJvdW5kIHRoZSB0ZXh0dXJlIHRvIHRleHR1cmUgdW5pdCAwXG4gICAgZ2wudW5pZm9ybTFpKHByb2dyYW1JbmZvLnVuaWZvcm1Mb2NhdGlvbnMudVNhbXBsZXIsIDApO1xuXG4gICAge1xuICAgICAgY29uc3QgdmVydGV4Q291bnQgPSBzcGhlcmVWZXJ0aWNlcy5pbmRpY2VzLmxlbmd0aCozO1xuICAgICAgY29uc3QgdHlwZSA9IGdsLlVOU0lHTkVEX1NIT1JUO1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gMDtcbiAgICAgIGdsLmRyYXdFbGVtZW50cyhnbC5UUklBTkdMRVMsIHZlcnRleENvdW50LCB0eXBlLCBvZmZzZXQpO1xuICAgIH1cbiAgfSAvL1tlbmRdIGRyYXdTY2VuZSBmdW5jdGlvblxuXG4gIGNvbnN0IHt1cGRhdGVDYW1lcmEsIGZpbmlzaFVwZGF0ZUNhbWVyYX0gPSAoZnVuY3Rpb24oKXtcbiAgICAvLyBzdG9yZSBjdXJyZW50IGxhdGl0dWRlIGFuZCBsb25naXR1ZGUgZHVyaW5nIGRyYWdnaW5nLlxuICAgIC8vIG9ubHkgdXBkYXRlIHRoZSBhY3R1YWwgbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSBhZnRlciBmaW5pc2ggZHJhZ2dpbmcuXG4gICAgbGV0IGxhdDtcbiAgICBsZXQgbG9uO1xuXG4gICAgLyoqXG4gICAgICogIFRoZSBmdW5jdGlvbiB0byBjaGFuZ2UgdGhlIGNhbWVyYSdzIHRhcmdldCB0aGF0IGl0IGxvb2tzIGF0LFxuICAgICAqICBBbHNvIHRoZSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IGlzIHBhc3NlZCBpbiB0aGUgZHJhZyBhbmQgbW92ZSBldmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZWx0YVggdGhlIGN1cnJlbnQgbGF0aXR1ZGUgd2hpY2ggY2FtZXJhIHRhcmdldHNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGVsdGFZICB0aGUgY3VycmVudCBsb25naXR1ZGUgd2hpY2ggY2FtZXJhIHRhcmdldHNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB1cGRhdGVDYW1lcmEoZGVsdGFYLCBkZWx0YVkpIHtcbiAgICAgIC8vIHVwZGF0ZSB0aGUgbGF0bG9uIGJ5IGFkZGluZyBkZWx0YSB2YWx1ZVxuICAgICAgLy8gVHJlYXQgdGhlIGRlbHRhIHZhbHVlIGFzIHRoZSBtb3ZlbWVudCBvbiB0aGUgY2lyY3VtZmVyZW5jZSh2ZXJ5IGNsb3NlKSxcbiAgICAgIC8vIGFuZCBjYWxjdWxhdGUgdGhlIHJhdGlvIG9mIHRoZSBtb3ZlbWVudCBvdmVyIGNpcmN1bWZlcmVuY2UgYW5kIGdldCB0aGUgcmFkaWFuXG4gICAgICAvLyBkZWx0YSBsb25naXR1ZGUgPSBkZWx0YVggLyBjaXJjdW1mZXJlbmNlICogKDIqTWF0aC5QSSksXG4gICAgICAvLyBiZWNhc3VzZSBjaXJjdW1mZXJlbmNlIGlzICgyKk1hdGguUEkqcmFkaXVzKSwgc28gdGhlIHNpbXBsaWZ5IGZvcm11bGFyIGlzIGRlbHRhWCAvIHJhZGl1cy5cbiAgICAgIGxldCBkZWx0YUxvbiA9IGRlbHRhWCAvIHJhZGl1cztcbiAgICAgIGxldCBkZWxhdExhdCA9IGRlbHRhWSAvIHJhZGl1cztcblxuICAgICAgbGF0ID0gZGVsYXRMYXQrbGF0aXR1ZGU7XG4gICAgICBsb24gPSBkZWx0YUxvbitsb25naXR1ZGU7XG5cbiAgICAgIC8vIGxvY2sgbGF0aXR1ZGUgcmFuZ2UsIG5vdCBwYXNzIHR3byBwb2xlc1xuICAgICAgY29uc3QgbWF4TGF0ID0gTWF0aC5QSSAqICgxIC0gMC4wNSk7XG4gICAgICBjb25zdCBtaW5MYXQgPSBNYXRoLlBJICogKDAgKyAwLjA1KTtcbiAgICAgIGlmIChsYXQgPiBtYXhMYXQpIHtcbiAgICAgICAgbGF0ID0gbWF4TGF0O1xuICAgICAgfSBlbHNlIGlmIChsYXQgPCBtaW5MYXQpIHtcbiAgICAgICAgbGF0ID0gbWluTGF0O1xuICAgICAgfVxuXG4gICAgICAvLyBjb21wdXRlIHRoZSBsb29rQXQgdmVydGljZS5cbiAgICAgIHRhcmdldFBvc2l0aW9uID0gbGF0bG9uVG9WZXJ0ZXgobGF0LCBsb24pO1xuXG4gICAgICBuZWVkVG9SZWRyYXcgPSB0cnVlOyAvLyByZWRyYXcgdGhlIHNjZW5lXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmluaXNoVXBkYXRlQ2FtZXJhKCkge1xuICAgICAgLy8gdXBkYXRlIHRoZSBhY3R1YWwgdmFyaWJsZSBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlIHVudGlsIGRyYWdnaW5nIGlzIGRvbmUuXG4gICAgICBsYXRpdHVkZSA9IGxhdDtcbiAgICAgIGxvbmdpdHVkZSA9IGxvbjtcbiAgICB9XG5cbiAgICByZXR1cm4ge3VwZGF0ZUNhbWVyYSwgZmluaXNoVXBkYXRlQ2FtZXJhfTtcbiAgfSkoKTtcblxuICAvLyBoYW5kbGUgdXNlciBpbnB1dCBhbmQgY29udHJvbCB0aGUgY2FtZXJhLCBtb3VzZSBhbmQgdG91Y2hcbiAgbGV0IG1vdXNlRXZlbnRIYW5kbGVycyA9IHVzZXJDb250cm9sSGFuZGxlcih1cGRhdGVDYW1lcmEsIGZpbmlzaFVwZGF0ZUNhbWVyYSwgZmFsc2UpO1xuICBsZXQgdG91Y2hFdmVudEhhbmRsZXJzID0gdXNlckNvbnRyb2xIYW5kbGVyKHVwZGF0ZUNhbWVyYSwgZmluaXNoVXBkYXRlQ2FtZXJhLCB0cnVlKTtcblxuXG4gIC8vIHJlZ2lzdGVyIG1vdXNlIGRyYWcgZXZlbnRzXG4gIGNvbnN0IG1vdXNlRXZlbnRUeXBlcyA9IFtcIm1vdXNlZG93blwiLCBcIm1vdXNlbW92ZVwiLCBcIm1vdXNldXBcIl07XG5cbiAgT2JqZWN0LmtleXMobW91c2VFdmVudEhhbmRsZXJzKS5tYXAoKGtleSwgaWR4KSA9PiB7XG4gICAgd3JhcHBlci5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRUeXBlc1tpZHhdLCBtb3VzZUV2ZW50SGFuZGxlcnNba2V5XSwgZmFsc2UpO1xuICB9KTtcblxuICAvLyByZWdpc3RlciB0b3VjaCBkcmFnIGV2ZW50c1xuICBjb25zdCB0b3VjaEV2ZW50VHlwZXMgPSBbXCJ0b3VjaHN0YXJ0XCIsIFwidG91Y2htb3ZlXCIsIFwidG91Y2hlbmRcIl07XG5cbiAgT2JqZWN0LmtleXModG91Y2hFdmVudEhhbmRsZXJzKS5tYXAoKGtleSwgaWR4KSA9PiB7XG4gICAgd3JhcHBlci5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRUeXBlc1tpZHhdLCB0b3VjaEV2ZW50SGFuZGxlcnNba2V5XSwgZmFsc2UpO1xuICB9KTtcblxuXG5cbiAgY29uc3QgZGV2aWNlT3JpZW50YXRpb25IZWxwZXIgPSBjcmVhdGVEZXZpY2VPcmllbnRhdGlvbkhlbHBlcigoZGVsdGFBbHBoYSwgZGVsdGFCZXRhKSA9PiB7XG4gICAgLy8gZGVsdGEgdmFsdWVzIGFyZSBjYWxjdWxhdGVkIGluIGRlZ3JlZXMuIGNvbnZlcnQgdGhvc2UgdG8gbGF0bG9uIHJhZGlhbnMgYW5kIHVzZSBkaXJlY3RseVxuICAgIGNvbnN0IGRlbHRhTG9uID0gZGVncmVlVG9SYWRpYW4oZGVsdGFBbHBoYSk7XG4gICAgY29uc3QgZGVsdGFMYXQgPSBkZWdyZWVUb1JhZGlhbihkZWx0YUJldGEpO1xuXG4gICAgbGF0aXR1ZGUgLT0gZGVsdGFMYXQ7XG4gICAgbG9uZ2l0dWRlIC09IGRlbHRhTG9uO1xuICAgIHRhcmdldFBvc2l0aW9uID0gbGF0bG9uVG9WZXJ0ZXgobGF0aXR1ZGUsIGxvbmdpdHVkZSk7XG4gICAgbmVlZFRvUmVkcmF3ID0gdHJ1ZTtcblxuICB9KTtcbiAgLy8gcmVpZ3N0ZXIgZGV2aWNlIG9yaWVudGF0aW9uIGV2ZW50IHRvIHdpbmRvdy5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJkZXZpY2VvcmllbnRhdGlvblwiLCBkZXZpY2VPcmllbnRhdGlvbkhlbHBlci5oYW5kbGVyLCB0cnVlKTtcblxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgZGlzcGxheSBzaXplKGBjYW52YXMuY2xpZW50V2lkdGhgIGFuZCBgY2FudmFzLmNsaWVudEhlaWdodGApIHdoZXRoZXIgaXQncyBjaGFuZ2VkLlxuICAgKiBVcGRhdGUgdGhlIGNhbnZhcyByZW5kZXIgc2l6ZShgY2FudmFzLndpZHRoYCBhbmQgYGNhbnZhcy5oZWlnaHRgKSB0byB0aGUgY3VycmVudCBkaXNwbGF5IHNpemUuXG4gICAqIEFuZCByZXR1cm4gYHRydWVgIHdoZW4gdGhlIHNpemUgaXMgY2hhbmdlZCwgb3RoZXJ3aXNlIGBmYWxzZWBcbiAgICpcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZTogbmVlZCByZXNpemU7IGZhbHNlOiBubyBuZWVkLlxuICAgKi9cbiAgZnVuY3Rpb24gcmVzaXplKCl7XG4gICAgY29uc3QgY2xpZW50V2lkdGggPSBnbC5jYW52YXMuY2xpZW50V2lkdGg7XG4gICAgY29uc3QgY2xpZW50SGVpZ2h0ID0gZ2wuY2FudmFzLmNsaWVudEhlaWdodDtcblxuICAgIGlmIChnbC5jYW52YXMud2lkdGggIT09IGNsaWVudFdpZHRoIHx8IGdsLmNhbnZhcy5oZWlnaHQgIT09IGNsaWVudEhlaWdodCl7XG4gICAgICBnbC5jYW52YXMud2lkdGggPSBjbGllbnRXaWR0aDtcbiAgICAgIGdsLmNhbnZhcy5oZWlnaHQgPSBjbGllbnRIZWlnaHQ7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgbGV0IG5lZWRUb1JlZHJhdyA9IHRydWU7XG4gIC8vIERyYXcgdGhlIHNjZW5lIHJlcGVhdGVkbHlcbiAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGlmKHJlc2l6ZSgpIHx8IG5lZWRUb1JlZHJhdyl7XG4gICAgICAvLyBuZWVkIGRyYXdcbiAgICAgIG5lZWRUb1JlZHJhdyA9IGZhbHNlO1xuICAgICAgZHJhd1NjZW5lKGdsLCBwcm9ncmFtSW5mbywgYnVmZmVycyk7XG4gICAgfVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gIH1cblxuICByZW5kZXIoKTsgLy8gaW5pdCBjYWxsIGByZW5kZXIoKWBcblxuICAvLyBkcmF3U2NlbmUoZ2wsIHByb2dyYW1JbmZvLCBidWZmZXJzKTtcblxuICByZXR1cm4ge2NvbnRhaW5lcn07XG59IC8vIFtlbmRdIGZ1bmN0aW9uIHBhbm9yYW1hXG5cbi8qKlxuICogQ29udmVydCB1c2VyIGlucHV0IGNhbWVyZSBkZWdyZWUgdG8gYWN0dWFsIGxvbmdpdHVkZSBhbmQgbGF0aXR1ZGUgdGhhdFxuICogYXJlIHVzZWQgZm9yIGNhbWVyYSBsb29rQXQgcG9pc2l0aW9uIG1hdHJpeC5cbiAqIEJlY2F1c2UgbGF0bG9uIGFyZSBpbiByYWRpYW5zLiBGb3IgZWFzeSB1c2UsIHRoZSB1c2VyIGlucHV0IGlzIGluIGRlZ3JlZS5cbiAqIEFsc28gdGhlIGxhdGl0dWRlIHJhbmdlcyBmcm9tIDAgdG8gUEkgdGhhdCBhcmUgbGlrZSBOb3J0aCBQb2xlIGFuZCBTb3V0aCBQb2xlIG9uIHRoZSBFYXJ0aCxcbiAqIENvcnJlc3BvbmQgdG8gbGF0aXR1ZGUsIHRoZSB1c2VyIGlucHV0IHZlcnRpY2FsIGRlZ3JlZSByYW5nZXMgZnJvbSA5MCB0byAtOTAgdGhhdFxuICogaXMgcmV2ZXJzZWQgb3JkZXIgb2YgbGF0aXR1ZGUgYW5kIGlzIG9mZnNldCBoYWxmIG9mIFBJLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyIEFycmF5fSBkZWdyZWUgIHR3byBudW1iZXIgYXJyYXkgY29udGFpbnMgdGhlIGhvcml6b25hbCBkZWdyZWUgYW5kXG4gKiAgdGhlIHZlcnRpY2FsIGRlZ3JlZS5cbiAqL1xuZnVuY3Rpb24gdXNlckNhbWVyYURlZ3JlZVRvTGF0TG9uKGRlZ3JlZSl7XG4gIGxldCBsYXRpdHVkZSA9ICAtZGVncmVlVG9SYWRpYW4oZGVncmVlWzFdKSArIChNYXRoLlBJIC8gMik7XG4gIGxldCBsb25naXR1ZGUgPSAgZGVncmVlVG9SYWRpYW4oZGVncmVlWzBdKTsgLy8gdHJhbnMgdG8gcmFkaWFuIGRpcmVjdGx5XG4gIHJldHVybiB7bGF0aXR1ZGU6IGxhdGl0dWRlLCBsb25naXR1ZGU6IGxvbmdpdHVkZX07XG59XG5cbi8vIGNvbXB1dGUgdGhlIHJhZGlhbiBvZiB0aGUgZGVncmVlLiA5MGRlZyAtPiBQSS8yOyAxODBkZWcgLT4gUEk7IDQ1ZGVnLT4gUEkvNDtcbmNvbnN0IGRlZ3JlZVRvUmFkaWFuID0gKGRlZykgPT4gKGRlZyAvIDE4MCAqIE1hdGguUEkpO1xuY29uc3QgcmFkaWFuVG9EZWdyZWUgPSAocmFkaWFuKSA9PiAocmFkaWFuIC8gTWF0aC5QSSAqIDE4MCk7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlIHRvIHRoZSBjb3JyZXNwb25kIHZlcnRleCBpbiBbeCx5LHpdLiAodGhlIHRhcmdldCBwb2ludCBpbiB0aGUgc3BoZXJlIHdob3NlIHJhZGl1cyBpcyAxKVxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsYXRpdHVkZSB0aGUgcmFkaWFuIG9mIGxhdGl0dWRlLCBub3JtYWxseSBmcm9tIC1QSSB0byBQSS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsb25naXR1ZGUgdGhlIHJhZGlhbiBvZiBsb2dpdHVkZSwgbm9ybWFsbHkgZnJvbSAwIHRvIDIqUEkuXG4gKi9cbmZ1bmN0aW9uIGxhdGxvblRvVmVydGV4KGxhdGl0dWRlLCBsb25naXR1ZGUpe1xuICBjb25zdCB0aGV0YSA9IGxvbmdpdHVkZTtcbiAgY29uc3QgcGhpID0gbGF0aXR1ZGU7XG5cbiAgY29uc3Qgc2luVGhldGEgPSBNYXRoLnNpbih0aGV0YSksIGNvc1RoZXRhID0gTWF0aC5jb3ModGhldGEpO1xuICBjb25zdCBzaW5QaGkgPSBNYXRoLnNpbihwaGkpLCBjb3N0UGhpID0gTWF0aC5jb3MocGhpKTtcblxuICBjb25zdCB1eCA9IGNvc1RoZXRhICogc2luUGhpO1xuICBjb25zdCB1eSA9IGNvc3RQaGk7XG4gIGNvbnN0IHV6ID0gc2luVGhldGEgKiBzaW5QaGk7XG5cbiAgcmV0dXJuIFt1eCwgdXksIHV6XTtcbn1cblxuY29uc3QgY3JlYXRlRGV2aWNlT3JpZW50YXRpb25IZWxwZXIgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgbGV0IGVuYWJsZWQgPSB0cnVlO1xuXG4gIGxldCBhbHBoYUJlZm9yZSwgYmV0YUJlZm9yZTtcbiAgZnVuY3Rpb24gZGV2aWNlT3JpZW50YXRpb25IYW5kbGVyKGV2ZW50KSB7XG4gICAgaWYgKGVuYWJsZWQpIHsgLy8gcmVjb3JkIG1vdGlvbihvcmllbnRhdGlvbikgZGF0YVxuICAgICAgY29uc3Qge2FscGhhLCBiZXRhfSA9IGV2ZW50OyAvLyBjdXJyZW50IG9yaWVudGF0aW9uIGRhdGFcblxuICAgICAgaWYgKHR5cGVvZiBhbHBoYUJlZm9yZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAvLyBubyBkYXRhIHJlY29yZGVkIGJlZm9yZSwgc2V0IHByZXZpb3VzIHZhbHVlIGRpcmVjdGx5LlxuICAgICAgICBhbHBoYUJlZm9yZSA9IGFscGhhO1xuICAgICAgICBiZXRhQmVmb3JlID0gYmV0YTtcbiAgICAgIH1cblxuICAgICAgLy8gY2FsY3VsYXRlIHRoZSBkZWx0YSwgdGhlbiBpbnZva2UgY2FsbGJhY2tcbiAgICAgIGNvbnN0IGRlbHRhQWxwaGEgPSBhbHBoYSAtIGFscGhhQmVmb3JlO1xuICAgICAgY29uc3QgZGVsdGFCZXRhID0gYmV0YSAtIGJldGFCZWZvcmU7XG4gICAgICAvLyByZWNvcmQgZGF0YVxuICAgICAgYWxwaGFCZWZvcmUgPSBhbHBoYTtcbiAgICAgIGJldGFCZWZvcmUgPSBiZXRhO1xuXG4gICAgICAvLyBpbnZva2UgY2FsbGJhY2tcbiAgICAgIGNhbGxiYWNrKGRlbHRhQWxwaGEsIGRlbHRhQmV0YSk7XG5cbiAgICB9IGVsc2UgeyAvLyBkaXNhYmxlIG9yaWVudGF0aW9uXG4gICAgICBhbHBoYUJlZm9yZSA9IHVuZGVmaW5lZDtcbiAgICAgIGJldGFCZWZvcmUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBoYW5kbGVyOiBkZXZpY2VPcmllbnRhdGlvbkhhbmRsZXIsXG4gICAgZW5hYmxlIDogKCkgPT4gZW5hYmxlZD10cnVlLFxuICAgIGRpc2FibGU6ICgpID0+IGVuYWJsZWQ9ZmFsc2VcbiAgfTtcbn07XG5cbi8qKlxuICogR2VuZXJhdGUgdGhlIHRocmVlIGV2ZW50IGhhbmRsZXIgZm9yIHVzZXIncyBpbnB1dCBjb250cm9sIHdoZW4gaXMgZHJhZ2dpbmcuXG4gKiBgc3RhcnRIYW5kbGVyYCBpcyB1c2VkIGZvciB0aGUgYmVnaW4gb2YgdGhlIGRyYWdnaW5nIGNvbnRyb2wsIGhhbmRsZSBgbW91c2Vkb3duYCBldmVudCBvciBgdG91Y2hzdGFydGAgZXZlbnQuXG4gKiBgbW92ZUhhbmRsZXJgIGlzIHVzZWQgd2hlbiB1c2VyIGlzIGRyYWdnaW5nLCBoYW5kbGUgYG1vdXNlbW92ZWAgZXZlbnQgb3IgYHRvdWNobW92ZWAgZXZlbnQuXG4gKiBgZW5kSGFuZGxlcmAgaXMgdXNlZCBmb3IgdGhlIGVuZCBvZiB0aGUgZHJhZ2dpbmcgY29udHJvbCwgaGFuZGxlIGBtb3VzZXVwYCBvciAgYHRvdWNoZW5kYCBldmVudC5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBkcmFnZ2luZ0NhbGxiYWNrIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBoYW5kbGUgdXNlciBkcmFnIG1vdmVtZW50IHdoZW4gdXNlciBpcyBkcmFnZ2luZy5cbiAqICBwYXNzZWQgdHdvIGFyZ3VtZW50cyBjdXJyZW50IGRlbHRhWCBhbmQgZGVsdGFZKHVzZXIgbW92ZW1lbnQgaW4gcGl4ZWwpIHRoYXQgaXMgdXNlZCBsYXRlciB0byBjb21wdXRlIHRoZSBjYW1lcmEgYGxvb2sgYXRgICh0YXJnZXQgcG9zaXRpb24pLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNUb3VjaD1mYWxzZV0gdHJ1ZSBpZiB1c2VyIHVzZSB0b3VjaCBkZXZpY2UgdG8gZHJhZyBhbmQgbW92ZSwgZmFsc2Ugb3RoZXJ3aXNlKGxpa2UgbW91c2UpLlxuICogQHBhcmFtIHtudW1iZXJ9IFttb3ZlU3BlZWQ9MV0gdGhlIG11bHRpcGxpZXIgb2YgdGhlIHVzZXIgbW92ZW1lbnQgc3BlZWQsIGRlZmF1bHQgaXQncyAxIHRoYXQgaXMgbm9ybWFsIHNwZWVkIGFuZCBubyBjaGFuZ2UuXG4gKi9cbmNvbnN0IHVzZXJDb250cm9sSGFuZGxlciA9IGZ1bmN0aW9uIChkcmFnZ2luZ0NhbGxiYWNrLCBlbmREcmFnQ2FsbGJhY2ssIGlzVG91Y2gsIG1vdmVTcGVlZCkge1xuXG4gIGxldCBzdGFydFggPSAwO1xuICBsZXQgc3RhcnRZID0gMDtcbiAgbGV0IGlzVXNlckRyYWdnaW5nID0gZmFsc2U7IC8vIHRydWUgZHVyaW5nIHVzZXIgZHJhZ3NcblxuICAvLyBzZXQgZGVmYXVsdCB2YWx1ZSAxIHRvIG1vdmVTcGVlZFxuICBpZiAodHlwZW9mIG1vdmVTcGVlZCA9PT0gXCJ1bmRlZmluZWRcIikge21vdmVTcGVlZCA9IDE7fVxuXG4gIC8vIGdldCBjbGllbnRYIGFuZCBjbGllbnRZIGVpdGhlciBmcm9tIG1vdXNlKGNsaWNrKSBvciB0b3VjaC5cbiAgY29uc3QgZ2V0WFkgPSBpc1RvdWNoID9cbiAgICAoZXZlbnRUYXJnZXQpID0+ICh7eDogZXZlbnRUYXJnZXQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCwgeTogZXZlbnRUYXJnZXQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WX0pIDpcbiAgICAoZXZlbnRUYXJnZXQpID0+ICh7eDogZXZlbnRUYXJnZXQuY2xpZW50WCwgeTogZXZlbnRUYXJnZXQuY2xpZW50WX0pO1xuXG5cbiAgZnVuY3Rpb24gc3RhcnRIYW5kbGVyKGV2ZW50KXtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaXNVc2VyRHJhZ2dpbmcgPSB0cnVlO1xuXG4gICAgbGV0IHt4LCB5fSA9IGdldFhZKGV2ZW50KTtcbiAgICBzdGFydFggPSB4O1xuICAgIHN0YXJ0WSA9IHk7XG4gIH1cblxuICBmdW5jdGlvbiBtb3ZlSGFuZGxlcihldmVudCl7XG5cbiAgICBpZiAoaXNVc2VyRHJhZ2dpbmcgPT09IHRydWUpIHtcbiAgICAgIGxldCB7eCwgeX0gPSBnZXRYWShldmVudCk7XG4gICAgICBsZXQgZGVsdGFYID0geCAtIHN0YXJ0WDtcbiAgICAgIGxldCBkZWx0YVkgPSB5IC0gc3RhcnRZO1xuXG4gICAgICBkZWx0YVggPSBkZWx0YVggKiBtb3ZlU3BlZWQ7XG4gICAgICBkZWx0YVkgPSBkZWx0YVkgKiBtb3ZlU3BlZWQ7XG5cbiAgICAgIGRyYWdnaW5nQ2FsbGJhY2soZGVsdGFYLCBkZWx0YVkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGVuZEhhbmRsZXIoZXZlbnQpe1xuICAgIGlzVXNlckRyYWdnaW5nID0gZmFsc2U7IC8vIHJlc2V0XG5cbiAgICBlbmREcmFnQ2FsbGJhY2soKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc3RhcnRIYW5kbGVyLFxuICAgIG1vdmVIYW5kbGVyLFxuICAgIGVuZEhhbmRsZXIsXG4gIH07XG59OyAvLyBbZW5kXSByZXR1cm4gYWN0dWFsIGZ1bmN0aW9uXG5cblxuY29uc3QgbG9hZGluZ1Byb2dyZXNzRmFjdG9yeSA9IGZ1bmN0aW9uKHBhcmVudCwgdGV4dD1cIlwiKXtcbiAgbGV0IHByb2dyZXNzV3JhcHBlciA9IHVuZGVmaW5lZDsgLy8gc3RvcmUgRE9NRWxlbWVudCBsYXRlclxuICBsZXQgcHJvZ3Jlc3NCYXIgPSB1bmRlZmluZWQ7XG4gIGxldCBtZXNzYWdlID0gdW5kZWZpbmVkO1xuICBsZXQgcGVyY2VudGFnZU51bUVsID0gdW5kZWZpbmVkO1xuXG4gIC8vIHRoZSBhY3R1YWwgZnVuY3Rpb25cbiAgZnVuY3Rpb24gY3JlYXRlT3JVcGRhdGUobG9hZGVkLCB0b3RhbCkge1xuICAgIGlmICh0eXBlb2YgcHJvZ3Jlc3NXcmFwcGVyID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAvLyBjcmVhdGUgRE9NRUxlbWVudCBvZiB0aGUgcHJvZ3Jlc3MgYmFyXG4gICAgICBwcm9ncmVzc1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcHJvZ3Jlc3NXcmFwcGVyLmNsYXNzTmFtZSA9IGNsYXp6LnByb2dyZXNzV3JhcHBlcjtcblxuICAgICAgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcHJvZ3Jlc3NXcmFwcGVyLmFwcGVuZENoaWxkKHByb2dyZXNzQmFyKTtcbiAgICAgIHByb2dyZXNzQmFyLmNsYXNzTmFtZSA9IGNsYXp6LnByb2dyZXNzQmFyO1xuXG4gICAgICBwcm9ncmVzc1dyYXBwZXIuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NCYXIpO1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHByb2dyZXNzV3JhcHBlcik7XG4gICAgfVxuXG4gICAgaWYodGV4dCAmJiB0eXBlb2YgbWVzc2FnZSA9PT0gXCJ1bmRlZmluZWRcIil7XG4gICAgICBjcmVhdGVNZXNzYWdlKCk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIHByb2dyZXNzIGJhci5cbiAgICBjb25zdCByYXRpbyA9IChsb2FkZWQgLyB0b3RhbCkudG9QcmVjaXNpb24oNCk7XG4gICAgaWYgKCFOdW1iZXIuaXNOYU4ocmF0aW8pKSB7XG4gICAgICAvLyBhY3R1YWxseSBoYXZlIHBlcmNlbnRhZ2UgbnVtYmVyXG4gICAgICBjb25zdCBwZXJjZW50YWdlTnVtID0gYCR7cmF0aW8gKiAxMDB9JWA7XG4gICAgICBwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IHBlcmNlbnRhZ2VOdW07XG5cbiAgICAgIC8vIHNob3cgcGVyY2VudGFnZSBudW1iZXIgdGV4dFxuICAgICAgY3JlYXRlT3JVcGRhdGVQZXJjZW50YWdlTnVtYmVyKHBlcmNlbnRhZ2VOdW0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9yVXBkYXRlUGVyY2VudGFnZU51bWJlcihwZXJjZW50YWdlTnVtKSB7XG4gICAgaWYgKHR5cGVvZiBwZXJjZW50YWdlTnVtRWwgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIC8vIGlmIG5vdCBleGlzdHMsIGNyZWF0ZVxuICAgICAgcGVyY2VudGFnZU51bUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHBlcmNlbnRhZ2VOdW1FbC5jbGFzc05hbWUgPSBjbGF6ei5wZXJjZW50YWdlTnVtO1xuXG4gICAgICBwcm9ncmVzc1dyYXBwZXIuYXBwZW5kQ2hpbGQocGVyY2VudGFnZU51bUVsKTtcbiAgICB9XG4gICAgcGVyY2VudGFnZU51bUVsLmlubmVyVGV4dCA9IHBlcmNlbnRhZ2VOdW07XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVNZXNzYWdlKCkge1xuICAgIG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lc3NhZ2UuY2xhc3NOYW1lID0gY2xhenoucHJvZ3Jlc3NNZXNzYWdlO1xuICAgIG1lc3NhZ2UuaW5uZXJUZXh0ID0gdGV4dDtcblxuICAgIHByb2dyZXNzV3JhcHBlci5hcHBlbmRDaGlsZChtZXNzYWdlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGUoKXtcbiAgICBwcm9ncmVzc1dyYXBwZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdygpe1xuICAgIHByb2dyZXNzV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9XG5cbiAgcmV0dXJuIHtjcmVhdGVPclVwZGF0ZSwgaGlkZSwgc2hvd307XG59O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIGNvbnRleHQgb2Ygd2ViZ2xcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgaW1hZ2UgdXJsIHRoYXQgaXMgdXNlZCBhcyB0ZXh0dXJlXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSB0ZXh0dXJlTG9hZGVkQ2FsbGJhY2sgT3B0aW9uYWwsIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCBsb2FkZWQgdGV4dHVyZSBhcmd1bWVudFxuICogIHdoZW4gdGV4dHVyZSBpcyBhbHJlYWR5IGxvYWRlZC4gVXN1YWxseSBjb250YWlucyB0aGUgbWV0aG9kIHRoYXQgcmVkcmF3IHdlYmdsIHNjZW5lIHRvIHNob3cgdGhlIHRleHR1cmUuXG4gKiBAcmV0dXJuIHtXZWJHTFRleHR1cmV9IHRoZSB3ZWJnbCB0ZXh0dXJlLiBCZSBjYXJlZnVsLCB0aGUgdGV4dHVyZSBpcyBsb2FkZWQgYXN5bmNocm9ub3VzbHkobG9hZCBpbWFnZSBhc3luY2hyb25vdXNseSksXG4gKiAgaXQgd291bGQgYmUgcGxhY2Vob2xkZXIoc2luZ2xlIGNvbG9yKSBhdCB0aGUgYmVnaW5uaW5nLiBTbyB1c2UgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGhhbmRsZSB0aGUgbG9hZGVkIHRleHR1cmUuXG4gKi9cbmZ1bmN0aW9uIGxvYWRUZXh0dXJlKGdsLCB1cmwsIHRleHR1cmVMb2FkZWRDYWxsYmFjaywgbG9hZGluZ0NhbGxiYWNrKXtcbiAgY29uc3QgdGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcbiAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZSk7XG5cbiAgY29uc3QgbGV2ZWwgPSAwO1xuICBjb25zdCBpbnRlcm5hbEZvcm1hdCA9IGdsLlJHQkE7XG4gIGNvbnN0IHNyY0Zvcm1hdCA9IGdsLlJHQkE7XG4gIGNvbnN0IHNyY1R5cGUgPSBnbC5VTlNJR05FRF9CWVRFO1xuXG4gIC8vIGdyZXkgcGxhY2Vob2xkZXIgY29sb3IgYmVmb3JlIHRleHR1cmUgbG9hZGVkIC8vIFswLDAsMjU1LDEyOF1vcGFxdWUgYmx1ZVxuICBjb25zdCBwaXhlbCA9IG5ldyBVaW50OEFycmF5KFswLCAwLCAwLCAxMjhdKTtcbiAgY29uc3Qgd2lkdGggPSAxO1xuICBjb25zdCBoZWlnaHQgPSAxO1xuICBjb25zdCBib3JkZXIgPSAwO1xuICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIGxldmVsLCBpbnRlcm5hbEZvcm1hdCxcbiAgICAgICAgICAgICAgICB3aWR0aCwgaGVpZ2h0LCBib3JkZXIsIHNyY0Zvcm1hdCwgc3JjVHlwZSxcbiAgICAgICAgICAgICAgICBwaXhlbCk7XG5cbiAgLyoqXG4gICAqIFRoZSBjYWxsYmFjayBmdW5jdGlvbiB3b3VsZCBiZSBjYWxsZWQgd2hlbiBjb21wbGV0ZSBsb2FkaW5nIGltYWdlLlxuICAgKiBTZXQgdGhlIHBhbm9yYW1hIGltYWdlIGFzIHRoZSB0ZXh0dXJlLlxuICAgKiBAcGFyYW0ge0hUTUxJbWFnZUVsZW1lbnR9IGltYWdlICB0aGUgaW1hZ2UgZWxlbWVudCB0aGF0IGlzIHVzZWQgYXMgdGV4dHVyZVxuICAgKi9cbiAgZnVuY3Rpb24gYmluZEltYWdlVGV4dHVyZUNhbGxiYWNrIChpbWFnZSkge1xuXG4gICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZSk7XG4gICAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCBsZXZlbCwgaW50ZXJuYWxGb3JtYXQsXG4gICAgICAgICAgICAgICAgICBzcmNGb3JtYXQsIHNyY1R5cGUsIGltYWdlKTtcblxuICAgIC8vIFdlYkdMMSBoYXMgZGlmZmVyZW50IHJlcXVpcmVtZW50cyBmb3IgcG93ZXIgb2YgMiBpbWFnZXNcbiAgICAvLyB2cyBub24gcG93ZXIgb2YgMiBpbWFnZXMgc28gY2hlY2sgaWYgdGhlIGltYWdlIGlzIGFcbiAgICAvLyBwb3dlciBvZiAyIGluIGJvdGggZGltZW5zaW9ucy5cbiAgICBpZiAoaXNQb3dlck9mMihpbWFnZS53aWR0aCkgJiYgaXNQb3dlck9mMihpbWFnZS5oZWlnaHQpKSB7XG4gICAgICAvLyBZZXMsIGl0J3MgYSBwb3dlciBvZiAyLiBHZW5lcmF0ZSBtaXBzLlxuICAgICAgZ2wuZ2VuZXJhdGVNaXBtYXAoZ2wuVEVYVFVSRV8yRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5vLCBpdCdzIG5vdCBhIHBvd2VyIG9mIDIuIFR1cm4gb2ZmIG1pcHMgYW5kIHNldFxuICAgICAgLy8gd3JhcHBpbmcgdG8gY2xhbXAgdG8gZWRnZVxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKTtcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5MSU5FQVIpO1xuICAgICAgLy8gZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLk5FQVJFU1QpO1xuICAgICAgLy8gZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLk5FQVJFU1QpO1xuICAgIH1cblxuICAgIC8vIGNhbGxiYWNrIGFmdGVyIGltYWdlIGxvYWRlZC5cbiAgICBpZiAodGV4dHVyZUxvYWRlZENhbGxiYWNrKSB7dGV4dHVyZUxvYWRlZENhbGxiYWNrKHRleHR1cmUpO31cblxuICB9IC8vIFtlbmRdIGJpbmRJbWFnZVRleHR1cmVDYWxsYmFja1xuXG4gIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgbG9hZEltYWdlKHt1cmw6dXJsLCBpbWFnZTogaW1hZ2UsIGxvYWRlZENhbGxiYWNrOiBiaW5kSW1hZ2VUZXh0dXJlQ2FsbGJhY2ssIGxvYWRpbmdDYWxsYmFjazogbG9hZGluZ0NhbGxiYWNrfSk7XG5cbiAgcmV0dXJuIHRleHR1cmU7XG59XG5cbmZ1bmN0aW9uIGxvYWRJbWFnZSh7dXJsLCBpbWFnZSA9IG5ldyBJbWFnZSgpLCBsb2FkZWRDYWxsYmFjaywgbG9hZGluZ0NhbGxiYWNrfSkge1xuXG4gIGNvbnN0IG9uUHJvZ3Jlc3NIYW5kbGVyID0gbG9hZGluZ0NhbGxiYWNrID9cbiAgICAoZXZlbnQpID0+IGxvYWRpbmdDYWxsYmFjayhldmVudC5sb2FkZWQsIGV2ZW50LnRvdGFsKSA6XG4gICAgdW5kZWZpbmVkO1xuXG4gIC8vIFtJbXBvcnRhbnRdIGltYWdlLnNyYyBpcyBhc3luY2hyb25vdXMgb3BlcmF0aW9uLCBzZXQgb25sb2FkIHRvIGhhbmRsZSBhZnRlciB0aGUgaW1hZ2UgaXMgbG9hZGVkXG4gIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChsb2FkZWRDYWxsYmFjaykge2xvYWRlZENhbGxiYWNrKGltYWdlKTt9XG4gIH07XG5cbiAgcHJvZ3Jlc3NGZXRjaEJsb2IodXJsLCB7bWV0aG9kOiBcImdldFwifSwgb25Qcm9ncmVzc0hhbmRsZXIpXG4gIC50aGVuKHJlc3BvbnNlQmxvYiA9PiB7XG4gICAgY29uc3Qgb2JqZWN0VXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChyZXNwb25zZUJsb2IpO1xuICAgIGltYWdlLnNyYyA9IG9iamVjdFVybDtcbiAgfSlcbiAgLmNhdGNoKCBlcnIgPT4ge3Rocm93IGVycjt9KTtcbn1cblxuZnVuY3Rpb24gcHJvZ3Jlc3NGZXRjaEJsb2IodXJsLCBvcHRzPXt9LCBvblByb2dyZXNzSGFuZGxlcikge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIHhoci5yZXNwb25zZVR5cGUgPSBcImJsb2JcIjtcbiAgICB4aHIub3BlbihvcHRzLm1ldGhvZCB8fCBcImdldFwiLCB1cmwpO1xuXG4gICAgaWYgKG9wdHMuaGVhZGVycykge1xuICAgICAgT2JqZWN0LmtleXMob3B0cy5oZWFkZXJzKS5tYXAoIGtleSA9PiB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIG9wdHMuaGVhZGVyc1trZXldKSApO1xuICAgIH1cbiAgICBpZiAob25Qcm9ncmVzc0hhbmRsZXIpIHtcbiAgICAgIHhoci5vbnByb2dyZXNzID0gb25Qcm9ncmVzc0hhbmRsZXI7IC8vIHBhc3NlZCBldmVudFxuICAgIH1cbiAgICB4aHIub25sb2FkID0gKGV2ZW50KSA9PiByZXNvbHZlKGV2ZW50LnRhcmdldC5yZXNwb25zZSk7XG4gICAgeGhyLm9uZXJyb3IgPSByZWplY3Q7XG5cbiAgICB4aHIuc2VuZChvcHRzLmJvZHkpO1xuICB9KTtcbn1cblxuLypcbiAgcGFub3JhbWEgaGVscGVyIGZ1bmN0aW9uXG4gKi9cblxuY29uc3QgZGVmYXVsdFNldHRpbmcgPSB7XG4gIC8vIHRoZSBET01lbGVtZW50KG9yIHRoZSBDU1Mgc2VsZXRvciBzdHJpbmcgdGhhdCByZWZlcnMgdGhlIERPTUVsZW1lbnQpIGNvbnRhaW5lciB0aGF0IGNvbnRhaW5zIHRoaXMgcGFub3JhbWEuanMgY29tcG9uZW50XG4gIGNvbnRhaW5lcjogZG9jdW1lbnQuYm9keSxcbiAgLy8gdGhlIGltYWdlIHVybCBvZiB0aGUgcGFub3JhbWFcbiAgdXJsOiB1bmRlZmluZWQsXG5cbiAgLy8gdGhlIGZpZWxkIG9mIHZpZXdcbiAgZm92OiA3NSxcbiAgLy8gdGhlIGluaXRhbCBkZWdyZWUgb2YgdGhlIGNhbWVyZWEgdmlldywgZGVmYXVsdCBpcyBbMCwwXSB3aGljaCBtZWFucyB0byBsb29rIGZyb250IG9uIHRoZSBob3Jpem9uXG4gIGNhbWVyYURlZ3JlZTogWzAsIDBdLFxuXG4gIHNwaGVyZToge1xuICAgIHJhZGl1czogMzAsXG4gICAgbnVtVmVydGljYWxTZWdtZW50czogMTYsIC8vIHRoZSBudW1iZXIgb2YgdGhlIHZlcnRpY2FsIHNlZ21lbnRzLiBMaWtlIEVhcnRoJ3MgbWVyaWRpYW5zLHRoZSBsaW5lIGdvaW5nIHBvbGUgdG8gcG9sZS5cbiAgICBudW1Ib3Jpem9uYWxTZWdlbWVudHM6IDggLy8gdGhlIG51bWJlciBvZiB0aGUgaG9yaXpvbmFsIHNlZ21lbnRzLiBMaWtlIEVhcnRoJ3MgcGFyYWxsZWxzLlxuICB9XG59O1xuXG4vKipcbiAqIEZpbGwgdGhlIHNldHRpbmcgd2l0aCBkZWZhdWx0IG9uZXMsIGV4Y2VwdCB0aGUgZXhjbHVkZSBvbmVzIG1hdGNoIHRoZSBgZXhjbHVkZUtleXNgLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXR0aW5nICBUaGUgb2JqZWN0IGxpdGVyYWwgdGhhdCBpcyB0YXJnZXQgc2V0dGluZywgd2hvc2UgbWlzc2luZyBlbnRyaWVzIHdpbGwgYmUgZmlsbGVkIHdpdGggZGVmYXVsdCBvbmVzLlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRTZXR0aW5nICBUaGUgb2JqZWN0IGxpdGVyYWwgIGNvbnRhaW5zIGRlZmF1bHQgc2V0dGluZyBlbnRyaWVzXG4gKiBAcGFyYW0ge1NldH0gW2V4Y2x1ZGVLZXlzPVNldCgwKV0gV2lsbCBOT1QgY29weSB0aGUgZW50cnkgdGhhdCBpcyBpbiB0aGUgZXhjbHVkZSBrZXlzLCBkZWZhdWx0IGlzIGVtcHR5IHNldCB0aGF0IHRoZXJlIGlzIG5vIGV4Y2x1ZGUga2V5c1xuICovXG5mdW5jdGlvbiBjb3B5TWlzc2luZ1ZhbHVlcyhzZXR0aW5nLCBkZWZhdWx0U2V0dGluZywgZXhjbHVkZUtleXM9bmV3IFNldCgpKSB7XG4gIC8vIGZpbGwgdGhlIG1pc3NpbmcgZW50cnkgd2l0aCBkZWZhdWx0XG4gIGZvciAobGV0IGtleSBpbiBkZWZhdWx0U2V0dGluZykge1xuICAgIGlmICghZXhjbHVkZUtleXMuaGFzKGtleSkgJiYgIShrZXkgaW4gc2V0dGluZykpe1xuICAgICAgc2V0dGluZ1trZXldID0gZGVmYXVsdFNldHRpbmdba2V5XTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlU2V0dGluZyhzZXR0aW5nKXtcbiAgc2V0dGluZyA9IHNldHRpbmcgfHwge307XG4gIGNvbnN0IG9iamVjdFNldHRpbmdLZXlzID0gW1wic3BoZXJlXCJdOyAvLyB0aGUgc2V0dGluZyBlbnRyeSB2YWx1ZSBpcyBvYmplY3QuXG5cbiAgLy8gdGhlcyBvcHRpb24gbXVzdCBiZSBjb250YWluZWRcbiAgaWYgKCFzZXR0aW5nLnVybCB8fCB0eXBlb2Ygc2V0dGluZy51cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICB0aHJvdyBFcnJvcihcIk1pc3NpbmcgYHVybGAgaW4gYHNldHRpbmdgIG9yIFRoZSB0eXBlIG9mIGB1cmxgIGlzbid0IGNvcnJlY3Q6IHRoZSBpbWFnZSB1cmwgbXVzdCBiZSBwYXNzZWQgaW4gYHNldHRpbmdgLCBhbmQgaXQgc2hvdWxkIGJlIHN0cmluZy5cIik7XG4gIH1cblxuICBjb3B5TWlzc2luZ1ZhbHVlcyhzZXR0aW5nLCBkZWZhdWx0U2V0dGluZyk7XG4gIG9iamVjdFNldHRpbmdLZXlzLm1hcCgga2V5ID0+IGNvcHlNaXNzaW5nVmFsdWVzKHNldHRpbmdba2V5XSwgZGVmYXVsdFNldHRpbmdba2V5XSkgKTtcblxuICAvLyBjb250YWluZXIgY2FuIGJlIGVpdGhlciBzdHJpbmcgb3IgRE9NRWxlbWVudFxuICBpZiAodHlwZW9mIHNldHRpbmcuY29udGFpbmVyID09PSBcInN0cmluZ1wiKSB7XG4gICAgc2V0dGluZy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNldHRpbmcuY29udGFpbmVyKTtcbiAgfSAvLyBlbHNlIERPTUVsZW1lbnRcblxuICByZXR1cm4gc2V0dGluZztcbn1cblxuLypcbiAgSlMgaGVscGVyIGZ1bmN0aW9uXG4gKi9cbmZ1bmN0aW9uIGlzUG93ZXJPZjIodmFsdWUpe1xuICByZXR1cm4gKHZhbHVlICYgKHZhbHVlIC0gMSkpID09PSAwOyAvLyBiaW5hcnkgYml0IG9wZXJhdGlvbiB0cmlja1xufVxuXG4vLyBjdXJyeSBmdW5jdGlvbi4gbGV0IGFkZG9uZSA9IGN1cnJ5KGFkZCwgMSk7IGxldCB4ID0gYWRkb25lKDMpIC8vIHggaXMgNFxuZnVuY3Rpb24gY3VycnkobWV0aG9kKXtcbiAgY29uc3Qgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG4gIGNvbnN0IHN0YXJ0QXJncyA9IHNsaWNlLmFwcGx5KGFyZ3VtZW50cykuc2xpY2UoMSk7IC8vIGV4Y2x1ZGUgdGhlIDFzdCBtZXRob2QgYXJndW1lbnRcbiAgcmV0dXJuIGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgcmVzdEFyZ3MgPSBzbGljZS5hcHBseShhcmd1bWVudHMpO1xuICAgIHJldHVybiBtZXRob2QuYXBwbHkobnVsbCwgc3RhcnRBcmdzLmNvbmNhdChyZXN0QXJncykpOyAvLyBjYWxsIGFjdHVhbCBmdW5jdGlvblxuICB9O1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHBhbm9yYW1hO1xuIiwiLypcbiAqIENvcHlyaWdodCAyMDE0LCBHcmVnZyBUYXZhcmVzLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiAqIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcbiAqIG1ldDpcbiAqXG4gKiAgICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuICogbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZVxuICogY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lclxuICogaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuICogZGlzdHJpYnV0aW9uLlxuICogICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBHcmVnZyBUYXZhcmVzLiBub3IgdGhlIG5hbWVzIG9mIGhpc1xuICogY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb21cbiAqIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuICogXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuICogTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4gKiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuICogT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXG4gKiBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4gKiBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbiAqIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxuICogVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuICogKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG4gKiBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5cbi8qKlxuICogVmFyaW91cyAzZCBtYXRoIGZ1bmN0aW9ucy5cbiAqXG4gKiBAbW9kdWxlIHdlYmdsLTNkLW1hdGhcbiAqL1xuKGZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcbiAgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKXtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfWVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICBkZWZpbmUoW10sIGZhY3RvcnkpO1xuICB9IGVsc2Uge1xuICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xuICAgIHJvb3QubTQgPSBmYWN0b3J5KCk7XG4gIH1cbn0odGhpcywgZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvciB0eXBlZCBhcnJheSB3aXRoIDMgdmFsdWVzLlxuICAgKiBAdHlwZWRlZiB7bnVtYmVyW118VHlwZWRBcnJheX0gVmVjdG9yM1xuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG5cbiAgLyoqXG4gICAqIEFuIGFycmF5IG9yIHR5cGVkIGFycmF5IHdpdGggNCB2YWx1ZXMuXG4gICAqIEB0eXBlZGVmIHtudW1iZXJbXXxUeXBlZEFycmF5fSBWZWN0b3I0XG4gICAqIEBtZW1iZXJPZiBtb2R1bGU6d2ViZ2wtM2QtbWF0aFxuICAgKi9cblxuICAvKipcbiAgICogQW4gYXJyYXkgb3IgdHlwZWQgYXJyYXkgd2l0aCAxNiB2YWx1ZXMuXG4gICAqIEB0eXBlZGVmIHtudW1iZXJbXXxUeXBlZEFycmF5fSBNYXRyaXg0XG4gICAqIEBtZW1iZXJPZiBtb2R1bGU6d2ViZ2wtM2QtbWF0aFxuICAgKi9cblxuICAvKipcbiAgICogVGFrZXMgdHdvIDQtYnktNCBtYXRyaWNlcywgYSBhbmQgYiwgYW5kIGNvbXB1dGVzIHRoZSBwcm9kdWN0IGluIHRoZSBvcmRlclxuICAgKiB0aGF0IHByZS1jb21wb3NlcyBiIHdpdGggYS4gIEluIG90aGVyIHdvcmRzLCB0aGUgbWF0cml4IHJldHVybmVkIHdpbGxcbiAgICogdHJhbnNmb3JtIGJ5IGIgZmlyc3QgYW5kIHRoZW4gYS4gIE5vdGUgdGhpcyBpcyBzdWJ0bHkgZGlmZmVyZW50IGZyb20ganVzdFxuICAgKiBtdWx0aXBseWluZyB0aGUgbWF0cmljZXMgdG9nZXRoZXIuICBGb3IgZ2l2ZW4gYSBhbmQgYiwgdGhpcyBmdW5jdGlvbiByZXR1cm5zXG4gICAqIHRoZSBzYW1lIG9iamVjdCBpbiBib3RoIHJvdy1tYWpvciBhbmQgY29sdW1uLW1ham9yIG1vZGUuXG4gICAqIEBwYXJhbSB7TWF0cml4NH0gYSBBIG1hdHJpeC5cbiAgICogQHBhcmFtIHtNYXRyaXg0fSBiIEEgbWF0cml4LlxuICAgKiBAcGFyYW0ge01hdHJpeDR9IFtkc3RdIG9wdGlvbmFsIG1hdHJpeCB0byBzdG9yZSByZXN1bHRcbiAgICogQHJldHVybiB7TWF0cml4NH0gZHN0IG9yIGEgbmV3IG1hdHJpeCBpZiBub25lIHByb3ZpZGVkXG4gICAqL1xuICBmdW5jdGlvbiBtdWx0aXBseShhLCBiLCBkc3QpIHtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IEZsb2F0MzJBcnJheSgxNik7XG4gICAgdmFyIGIwMCA9IGJbMCAqIDQgKyAwXTtcbiAgICB2YXIgYjAxID0gYlswICogNCArIDFdO1xuICAgIHZhciBiMDIgPSBiWzAgKiA0ICsgMl07XG4gICAgdmFyIGIwMyA9IGJbMCAqIDQgKyAzXTtcbiAgICB2YXIgYjEwID0gYlsxICogNCArIDBdO1xuICAgIHZhciBiMTEgPSBiWzEgKiA0ICsgMV07XG4gICAgdmFyIGIxMiA9IGJbMSAqIDQgKyAyXTtcbiAgICB2YXIgYjEzID0gYlsxICogNCArIDNdO1xuICAgIHZhciBiMjAgPSBiWzIgKiA0ICsgMF07XG4gICAgdmFyIGIyMSA9IGJbMiAqIDQgKyAxXTtcbiAgICB2YXIgYjIyID0gYlsyICogNCArIDJdO1xuICAgIHZhciBiMjMgPSBiWzIgKiA0ICsgM107XG4gICAgdmFyIGIzMCA9IGJbMyAqIDQgKyAwXTtcbiAgICB2YXIgYjMxID0gYlszICogNCArIDFdO1xuICAgIHZhciBiMzIgPSBiWzMgKiA0ICsgMl07XG4gICAgdmFyIGIzMyA9IGJbMyAqIDQgKyAzXTtcbiAgICB2YXIgYTAwID0gYVswICogNCArIDBdO1xuICAgIHZhciBhMDEgPSBhWzAgKiA0ICsgMV07XG4gICAgdmFyIGEwMiA9IGFbMCAqIDQgKyAyXTtcbiAgICB2YXIgYTAzID0gYVswICogNCArIDNdO1xuICAgIHZhciBhMTAgPSBhWzEgKiA0ICsgMF07XG4gICAgdmFyIGExMSA9IGFbMSAqIDQgKyAxXTtcbiAgICB2YXIgYTEyID0gYVsxICogNCArIDJdO1xuICAgIHZhciBhMTMgPSBhWzEgKiA0ICsgM107XG4gICAgdmFyIGEyMCA9IGFbMiAqIDQgKyAwXTtcbiAgICB2YXIgYTIxID0gYVsyICogNCArIDFdO1xuICAgIHZhciBhMjIgPSBhWzIgKiA0ICsgMl07XG4gICAgdmFyIGEyMyA9IGFbMiAqIDQgKyAzXTtcbiAgICB2YXIgYTMwID0gYVszICogNCArIDBdO1xuICAgIHZhciBhMzEgPSBhWzMgKiA0ICsgMV07XG4gICAgdmFyIGEzMiA9IGFbMyAqIDQgKyAyXTtcbiAgICB2YXIgYTMzID0gYVszICogNCArIDNdO1xuICAgIGRzdFsgMF0gPSBiMDAgKiBhMDAgKyBiMDEgKiBhMTAgKyBiMDIgKiBhMjAgKyBiMDMgKiBhMzA7XG4gICAgZHN0WyAxXSA9IGIwMCAqIGEwMSArIGIwMSAqIGExMSArIGIwMiAqIGEyMSArIGIwMyAqIGEzMTtcbiAgICBkc3RbIDJdID0gYjAwICogYTAyICsgYjAxICogYTEyICsgYjAyICogYTIyICsgYjAzICogYTMyO1xuICAgIGRzdFsgM10gPSBiMDAgKiBhMDMgKyBiMDEgKiBhMTMgKyBiMDIgKiBhMjMgKyBiMDMgKiBhMzM7XG4gICAgZHN0WyA0XSA9IGIxMCAqIGEwMCArIGIxMSAqIGExMCArIGIxMiAqIGEyMCArIGIxMyAqIGEzMDtcbiAgICBkc3RbIDVdID0gYjEwICogYTAxICsgYjExICogYTExICsgYjEyICogYTIxICsgYjEzICogYTMxO1xuICAgIGRzdFsgNl0gPSBiMTAgKiBhMDIgKyBiMTEgKiBhMTIgKyBiMTIgKiBhMjIgKyBiMTMgKiBhMzI7XG4gICAgZHN0WyA3XSA9IGIxMCAqIGEwMyArIGIxMSAqIGExMyArIGIxMiAqIGEyMyArIGIxMyAqIGEzMztcbiAgICBkc3RbIDhdID0gYjIwICogYTAwICsgYjIxICogYTEwICsgYjIyICogYTIwICsgYjIzICogYTMwO1xuICAgIGRzdFsgOV0gPSBiMjAgKiBhMDEgKyBiMjEgKiBhMTEgKyBiMjIgKiBhMjEgKyBiMjMgKiBhMzE7XG4gICAgZHN0WzEwXSA9IGIyMCAqIGEwMiArIGIyMSAqIGExMiArIGIyMiAqIGEyMiArIGIyMyAqIGEzMjtcbiAgICBkc3RbMTFdID0gYjIwICogYTAzICsgYjIxICogYTEzICsgYjIyICogYTIzICsgYjIzICogYTMzO1xuICAgIGRzdFsxMl0gPSBiMzAgKiBhMDAgKyBiMzEgKiBhMTAgKyBiMzIgKiBhMjAgKyBiMzMgKiBhMzA7XG4gICAgZHN0WzEzXSA9IGIzMCAqIGEwMSArIGIzMSAqIGExMSArIGIzMiAqIGEyMSArIGIzMyAqIGEzMTtcbiAgICBkc3RbMTRdID0gYjMwICogYTAyICsgYjMxICogYTEyICsgYjMyICogYTIyICsgYjMzICogYTMyO1xuICAgIGRzdFsxNV0gPSBiMzAgKiBhMDMgKyBiMzEgKiBhMTMgKyBiMzIgKiBhMjMgKyBiMzMgKiBhMzM7XG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIGFkZHMgMiB2ZWN0b3JzM3NcbiAgICogQHBhcmFtIHtWZWN0b3IzfSBhIGFcbiAgICogQHBhcmFtIHtWZWN0b3IzfSBiIGJcbiAgICogQHBhcmFtIHtWZWN0b3IzfSBkc3Qgb3B0aW9uYWwgdmVjdG9yMyB0byBzdG9yZSByZXN1bHRcbiAgICogQHJldHVybiB7VmVjdG9yM30gZHN0IG9yIG5ldyBWZWN0b3IzIGlmIG5vdCBwcm92aWRlZFxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG4gIGZ1bmN0aW9uIGFkZFZlY3RvcnMoYSwgYiwgZHN0KSB7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBGbG9hdDMyQXJyYXkoMyk7XG4gICAgZHN0WzBdID0gYVswXSArIGJbMF07XG4gICAgZHN0WzFdID0gYVsxXSArIGJbMV07XG4gICAgZHN0WzJdID0gYVsyXSArIGJbMl07XG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBzdWJ0cmFjdHMgMiB2ZWN0b3JzM3NcbiAgICogQHBhcmFtIHtWZWN0b3IzfSBhIGFcbiAgICogQHBhcmFtIHtWZWN0b3IzfSBiIGJcbiAgICogQHBhcmFtIHtWZWN0b3IzfSBkc3Qgb3B0aW9uYWwgdmVjdG9yMyB0byBzdG9yZSByZXN1bHRcbiAgICogQHJldHVybiB7VmVjdG9yM30gZHN0IG9yIG5ldyBWZWN0b3IzIGlmIG5vdCBwcm92aWRlZFxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG4gIGZ1bmN0aW9uIHN1YnRyYWN0VmVjdG9ycyhhLCBiLCBkc3QpIHtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IEZsb2F0MzJBcnJheSgzKTtcbiAgICBkc3RbMF0gPSBhWzBdIC0gYlswXTtcbiAgICBkc3RbMV0gPSBhWzFdIC0gYlsxXTtcbiAgICBkc3RbMl0gPSBhWzJdIC0gYlsyXTtcbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgLyoqXG4gICAqIG5vcm1hbGl6ZXMgYSB2ZWN0b3IuXG4gICAqIEBwYXJhbSB7VmVjdG9yM30gdiB2ZWN0b3IgdG8gbm9ybWFsemllXG4gICAqIEBwYXJhbSB7VmVjdG9yM30gZHN0IG9wdGlvbmFsIHZlY3RvcjMgdG8gc3RvcmUgcmVzdWx0XG4gICAqIEByZXR1cm4ge1ZlY3RvcjN9IGRzdCBvciBuZXcgVmVjdG9yMyBpZiBub3QgcHJvdmlkZWRcbiAgICogQG1lbWJlck9mIG1vZHVsZTp3ZWJnbC0zZC1tYXRoXG4gICAqL1xuICBmdW5jdGlvbiBub3JtYWxpemUodiwgZHN0KSB7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBGbG9hdDMyQXJyYXkoMyk7XG4gICAgdmFyIGxlbmd0aCA9IE1hdGguc3FydCh2WzBdICogdlswXSArIHZbMV0gKiB2WzFdICsgdlsyXSAqIHZbMl0pO1xuICAgIC8vIG1ha2Ugc3VyZSB3ZSBkb24ndCBkaXZpZGUgYnkgMC5cbiAgICBpZiAobGVuZ3RoID4gMC4wMDAwMSkge1xuICAgICAgZHN0WzBdID0gdlswXSAvIGxlbmd0aDtcbiAgICAgIGRzdFsxXSA9IHZbMV0gLyBsZW5ndGg7XG4gICAgICBkc3RbMl0gPSB2WzJdIC8gbGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXB1dGVzIHRoZSBsZW5ndGggb2YgYSB2ZWNnb3JcbiAgICogQHBhcmFtIHtWZWN0b3IzfSB2IHZlY3RvciB0byB0YWtlIGxlbmd0aCBvZlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IGxlbmd0aCBvZiB2ZWN0b3JcbiAgICovXG4gIGZ1bmN0aW9uIGxlbmd0aCh2KSB7XG4gICAgcmV0dXJuIE1hdGguc3FydCh2WzBdICogdlswXSArIHZbMV0gKiB2WzFdICsgdlsyXSAqIHZbMl0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXB1dGVzIHRoZSBjcm9zcyBwcm9kdWN0IG9mIDIgdmVjdG9yczNzXG4gICAqIEBwYXJhbSB7VmVjdG9yM30gYSBhXG4gICAqIEBwYXJhbSB7VmVjdG9yM30gYiBiXG4gICAqIEBwYXJhbSB7VmVjdG9yM30gZHN0IG9wdGlvbmFsIHZlY3RvcjMgdG8gc3RvcmUgcmVzdWx0XG4gICAqIEByZXR1cm4ge1ZlY3RvcjN9IGRzdCBvciBuZXcgVmVjdG9yMyBpZiBub3QgcHJvdmlkZWRcbiAgICogQG1lbWJlck9mIG1vZHVsZTp3ZWJnbC0zZC1tYXRoXG4gICAqL1xuICBmdW5jdGlvbiBjcm9zcyhhLCBiLCBkc3QpIHtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IEZsb2F0MzJBcnJheSgzKTtcbiAgICBkc3RbMF0gPSBhWzFdICogYlsyXSAtIGFbMl0gKiBiWzFdO1xuICAgIGRzdFsxXSA9IGFbMl0gKiBiWzBdIC0gYVswXSAqIGJbMl07XG4gICAgZHN0WzJdID0gYVswXSAqIGJbMV0gLSBhWzFdICogYlswXTtcbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXB1dGVzIHRoZSBkb3QgcHJvZHVjdCBvZiB0d28gdmVjdG9yczsgYXNzdW1lcyBib3RoIHZlY3RvcnMgaGF2ZVxuICAgKiB0aHJlZSBlbnRyaWVzLlxuICAgKiBAcGFyYW0ge1ZlY3RvcjN9IGEgT3BlcmFuZCB2ZWN0b3IuXG4gICAqIEBwYXJhbSB7VmVjdG9yM30gYiBPcGVyYW5kIHZlY3Rvci5cbiAgICogQHJldHVybiB7bnVtYmVyfSBkb3QgcHJvZHVjdFxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG4gIGZ1bmN0aW9uIGRvdChhLCBiKSB7XG4gICAgcmV0dXJuIChhWzBdICogYlswXSkgKyAoYVsxXSAqIGJbMV0pICsgKGFbMl0gKiBiWzJdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wdXRlcyB0aGUgZGlzdGFuY2Ugc3F1YXJlZCBiZXR3ZWVuIDIgcG9pbnRzXG4gICAqIEBwYXJhbSB7VmVjdG9yM30gYVxuICAgKiBAcGFyYW0ge1ZlY3RvcjN9IGJcbiAgICogQHJldHVybiB7bnVibWVyfSBkaXN0YW5jZSBzcXVhcmVkIGJldHdlZW4gYSBhbmQgYlxuICAgKi9cbiAgZnVuY3Rpb24gZGlzdGFuY2VTcShhLCBiKSB7XG4gICAgY29uc3QgZHggPSBhWzBdIC0gYlswXTtcbiAgICBjb25zdCBkeSA9IGFbMV0gLSBiWzFdO1xuICAgIGNvbnN0IGR6ID0gYVsyXSAtIGJbMl07XG4gICAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5ICsgZHogKiBkejtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wdXRlcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAyIHBvaW50c1xuICAgKiBAcGFyYW0ge1ZlY3RvcjN9IGFcbiAgICogQHBhcmFtIHtWZWN0b3IzfSBiXG4gICAqIEByZXR1cm4ge251Ym1lcn0gZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gICAqL1xuICBmdW5jdGlvbiBkaXN0YW5jZShhLCBiKSB7XG4gICAgcmV0dXJuIE1hdGguc3FydChkaXN0YW5jZVNxKGEsIGIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlcyBhbiBpZGVudGl0eSBtYXRyaXguXG4gICAqIEBwYXJhbSB7TWF0cml4NH0gW2RzdF0gb3B0aW9uYWwgbWF0cml4IHRvIHN0b3JlIHJlc3VsdFxuICAgKiBAcmV0dXJuIHtNYXRyaXg0fSBkc3Qgb3IgYSBuZXcgbWF0cml4IGlmIG5vbmUgcHJvdmlkZWRcbiAgICogQG1lbWJlck9mIG1vZHVsZTp3ZWJnbC0zZC1tYXRoXG4gICAqL1xuICBmdW5jdGlvbiBpZGVudGl0eShkc3QpIHtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IEZsb2F0MzJBcnJheSgxNik7XG5cbiAgICBkc3RbIDBdID0gMTtcbiAgICBkc3RbIDFdID0gMDtcbiAgICBkc3RbIDJdID0gMDtcbiAgICBkc3RbIDNdID0gMDtcbiAgICBkc3RbIDRdID0gMDtcbiAgICBkc3RbIDVdID0gMTtcbiAgICBkc3RbIDZdID0gMDtcbiAgICBkc3RbIDddID0gMDtcbiAgICBkc3RbIDhdID0gMDtcbiAgICBkc3RbIDldID0gMDtcbiAgICBkc3RbMTBdID0gMTtcbiAgICBkc3RbMTFdID0gMDtcbiAgICBkc3RbMTJdID0gMDtcbiAgICBkc3RbMTNdID0gMDtcbiAgICBkc3RbMTRdID0gMDtcbiAgICBkc3RbMTVdID0gMTtcblxuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNwb3NlcyBhIG1hdHJpeC5cbiAgICogQHBhcmFtIHtNYXRyaXg0fSBtIG1hdHJpeCB0byB0cmFuc3Bvc2UuXG4gICAqIEBwYXJhbSB7TWF0cml4NH0gW2RzdF0gb3B0aW9uYWwgbWF0cml4IHRvIHN0b3JlIHJlc3VsdFxuICAgKiBAcmV0dXJuIHtNYXRyaXg0fSBkc3Qgb3IgYSBuZXcgbWF0cml4IGlmIG5vbmUgcHJvdmlkZWRcbiAgICogQG1lbWJlck9mIG1vZHVsZTp3ZWJnbC0zZC1tYXRoXG4gICAqL1xuICBmdW5jdGlvbiB0cmFuc3Bvc2UobSwgZHN0KSB7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuXG4gICAgZHN0WyAwXSA9IG1bMF07XG4gICAgZHN0WyAxXSA9IG1bNF07XG4gICAgZHN0WyAyXSA9IG1bOF07XG4gICAgZHN0WyAzXSA9IG1bMTJdO1xuICAgIGRzdFsgNF0gPSBtWzFdO1xuICAgIGRzdFsgNV0gPSBtWzVdO1xuICAgIGRzdFsgNl0gPSBtWzldO1xuICAgIGRzdFsgN10gPSBtWzEzXTtcbiAgICBkc3RbIDhdID0gbVsyXTtcbiAgICBkc3RbIDldID0gbVs2XTtcbiAgICBkc3RbMTBdID0gbVsxMF07XG4gICAgZHN0WzExXSA9IG1bMTRdO1xuICAgIGRzdFsxMl0gPSBtWzNdO1xuICAgIGRzdFsxM10gPSBtWzddO1xuICAgIGRzdFsxNF0gPSBtWzExXTtcbiAgICBkc3RbMTVdID0gbVsxNV07XG5cbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBsb29rQXQgbWF0cml4LlxuICAgKiBUaGlzIGlzIGEgd29ybGQgbWF0cml4IGZvciBhIGNhbWVyYS4gSW4gb3RoZXIgd29yZHMgaXQgd2lsbCB0cmFuc2Zvcm1cbiAgICogZnJvbSB0aGUgb3JpZ2luIHRvIGEgcGxhY2UgYW5kIG9yaWVudGF0aW9uIGluIHRoZSB3b3JsZC4gRm9yIGEgdmlld1xuICAgKiBtYXRyaXggdGFrZSB0aGUgaW52ZXJzZSBvZiB0aGlzLlxuICAgKiBAcGFyYW0ge1ZlY3RvcjN9IGNhbWVyYVBvc2l0aW9uIHBvc2l0aW9uIG9mIHRoZSBjYW1lcmFcbiAgICogQHBhcmFtIHtWZWN0b3IzfSB0YXJnZXQgcG9zaXRpb24gb2YgdGhlIHRhcmdldFxuICAgKiBAcGFyYW0ge1ZlY3RvcjN9IHVwIGRpcmVjdGlvblxuICAgKiBAcGFyYW0ge01hdHJpeDR9IFtkc3RdIG9wdGlvbmFsIG1hdHJpeCB0byBzdG9yZSByZXN1bHRcbiAgICogQHJldHVybiB7TWF0cml4NH0gZHN0IG9yIGEgbmV3IG1hdHJpeCBpZiBub25lIHByb3ZpZGVkXG4gICAqIEBtZW1iZXJPZiBtb2R1bGU6d2ViZ2wtM2QtbWF0aFxuICAgKi9cbiAgZnVuY3Rpb24gbG9va0F0KGNhbWVyYVBvc2l0aW9uLCB0YXJnZXQsIHVwLCBkc3QpIHtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IEZsb2F0MzJBcnJheSgxNik7XG4gICAgdmFyIHpBeGlzID0gbm9ybWFsaXplKFxuICAgICAgICBzdWJ0cmFjdFZlY3RvcnMoY2FtZXJhUG9zaXRpb24sIHRhcmdldCkpO1xuICAgIHZhciB4QXhpcyA9IG5vcm1hbGl6ZShjcm9zcyh1cCwgekF4aXMpKTtcbiAgICB2YXIgeUF4aXMgPSBub3JtYWxpemUoY3Jvc3MoekF4aXMsIHhBeGlzKSk7XG5cbiAgICBkc3RbIDBdID0geEF4aXNbMF07XG4gICAgZHN0WyAxXSA9IHhBeGlzWzFdO1xuICAgIGRzdFsgMl0gPSB4QXhpc1syXTtcbiAgICBkc3RbIDNdID0gMDtcbiAgICBkc3RbIDRdID0geUF4aXNbMF07XG4gICAgZHN0WyA1XSA9IHlBeGlzWzFdO1xuICAgIGRzdFsgNl0gPSB5QXhpc1syXTtcbiAgICBkc3RbIDddID0gMDtcbiAgICBkc3RbIDhdID0gekF4aXNbMF07XG4gICAgZHN0WyA5XSA9IHpBeGlzWzFdO1xuICAgIGRzdFsxMF0gPSB6QXhpc1syXTtcbiAgICBkc3RbMTFdID0gMDtcbiAgICBkc3RbMTJdID0gY2FtZXJhUG9zaXRpb25bMF07XG4gICAgZHN0WzEzXSA9IGNhbWVyYVBvc2l0aW9uWzFdO1xuICAgIGRzdFsxNF0gPSBjYW1lcmFQb3NpdGlvblsyXTtcbiAgICBkc3RbMTVdID0gMTtcblxuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuICAvKipcbiAgICogQ29tcHV0ZXMgYSA0LWJ5LTQgcGVyc3BlY3RpdmUgdHJhbnNmb3JtYXRpb24gbWF0cml4IGdpdmVuIHRoZSBhbmd1bGFyIGhlaWdodFxuICAgKiBvZiB0aGUgZnJ1c3R1bSwgdGhlIGFzcGVjdCByYXRpbywgYW5kIHRoZSBuZWFyIGFuZCBmYXIgY2xpcHBpbmcgcGxhbmVzLiAgVGhlXG4gICAqIGFyZ3VtZW50cyBkZWZpbmUgYSBmcnVzdHVtIGV4dGVuZGluZyBpbiB0aGUgbmVnYXRpdmUgeiBkaXJlY3Rpb24uICBUaGUgZ2l2ZW5cbiAgICogYW5nbGUgaXMgdGhlIHZlcnRpY2FsIGFuZ2xlIG9mIHRoZSBmcnVzdHVtLCBhbmQgdGhlIGhvcml6b250YWwgYW5nbGUgaXNcbiAgICogZGV0ZXJtaW5lZCB0byBwcm9kdWNlIHRoZSBnaXZlbiBhc3BlY3QgcmF0aW8uICBUaGUgYXJndW1lbnRzIG5lYXIgYW5kIGZhciBhcmVcbiAgICogdGhlIGRpc3RhbmNlcyB0byB0aGUgbmVhciBhbmQgZmFyIGNsaXBwaW5nIHBsYW5lcy4gIE5vdGUgdGhhdCBuZWFyIGFuZCBmYXJcbiAgICogYXJlIG5vdCB6IGNvb3JkaW5hdGVzLCBidXQgcmF0aGVyIHRoZXkgYXJlIGRpc3RhbmNlcyBhbG9uZyB0aGUgbmVnYXRpdmVcbiAgICogei1heGlzLiAgVGhlIG1hdHJpeCBnZW5lcmF0ZWQgc2VuZHMgdGhlIHZpZXdpbmcgZnJ1c3R1bSB0byB0aGUgdW5pdCBib3guXG4gICAqIFdlIGFzc3VtZSBhIHVuaXQgYm94IGV4dGVuZGluZyBmcm9tIC0xIHRvIDEgaW4gdGhlIHggYW5kIHkgZGltZW5zaW9ucyBhbmRcbiAgICogZnJvbSAtMSB0byAxIGluIHRoZSB6IGRpbWVuc2lvbi5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGZpZWxkT2ZWaWV3SW5SYWRpYW5zIGZpZWxkIG9mIHZpZXcgaW4geSBheGlzLlxuICAgKiBAcGFyYW0ge251bWJlcn0gYXNwZWN0IGFzcGVjdCBvZiB2aWV3cG9ydCAod2lkdGggLyBoZWlnaHQpXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBuZWFyIG5lYXIgWiBjbGlwcGluZyBwbGFuZVxuICAgKiBAcGFyYW0ge251bWJlcn0gZmFyIGZhciBaIGNsaXBwaW5nIHBsYW5lXG4gICAqIEBwYXJhbSB7TWF0cml4NH0gW2RzdF0gb3B0aW9uYWwgbWF0cml4IHRvIHN0b3JlIHJlc3VsdFxuICAgKiBAcmV0dXJuIHtNYXRyaXg0fSBkc3Qgb3IgYSBuZXcgbWF0cml4IGlmIG5vbmUgcHJvdmlkZWRcbiAgICogQG1lbWJlck9mIG1vZHVsZTp3ZWJnbC0zZC1tYXRoXG4gICAqL1xuICBmdW5jdGlvbiBwZXJzcGVjdGl2ZShmaWVsZE9mVmlld0luUmFkaWFucywgYXNwZWN0LCBuZWFyLCBmYXIsIGRzdCkge1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgRmxvYXQzMkFycmF5KDE2KTtcbiAgICB2YXIgZiA9IE1hdGgudGFuKE1hdGguUEkgKiAwLjUgLSAwLjUgKiBmaWVsZE9mVmlld0luUmFkaWFucyk7XG4gICAgdmFyIHJhbmdlSW52ID0gMS4wIC8gKG5lYXIgLSBmYXIpO1xuXG4gICAgZHN0WyAwXSA9IGYgLyBhc3BlY3Q7XG4gICAgZHN0WyAxXSA9IDA7XG4gICAgZHN0WyAyXSA9IDA7XG4gICAgZHN0WyAzXSA9IDA7XG4gICAgZHN0WyA0XSA9IDA7XG4gICAgZHN0WyA1XSA9IGY7XG4gICAgZHN0WyA2XSA9IDA7XG4gICAgZHN0WyA3XSA9IDA7XG4gICAgZHN0WyA4XSA9IDA7XG4gICAgZHN0WyA5XSA9IDA7XG4gICAgZHN0WzEwXSA9IChuZWFyICsgZmFyKSAqIHJhbmdlSW52O1xuICAgIGRzdFsxMV0gPSAtMTtcbiAgICBkc3RbMTJdID0gMDtcbiAgICBkc3RbMTNdID0gMDtcbiAgICBkc3RbMTRdID0gbmVhciAqIGZhciAqIHJhbmdlSW52ICogMjtcbiAgICBkc3RbMTVdID0gMDtcblxuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuICAvKipcbiAgICogQ29tcHV0ZXMgYSA0LWJ5LTQgb3J0aG9ncmFwaGljIHByb2plY3Rpb24gbWF0cml4IGdpdmVuIHRoZSBjb29yZGluYXRlcyBvZiB0aGVcbiAgICogcGxhbmVzIGRlZmluaW5nIHRoZSBheGlzLWFsaWduZWQsIGJveC1zaGFwZWQgdmlld2luZyB2b2x1bWUuICBUaGUgbWF0cml4XG4gICAqIGdlbmVyYXRlZCBzZW5kcyB0aGF0IGJveCB0byB0aGUgdW5pdCBib3guICBOb3RlIHRoYXQgYWx0aG91Z2ggbGVmdCBhbmQgcmlnaHRcbiAgICogYXJlIHggY29vcmRpbmF0ZXMgYW5kIGJvdHRvbSBhbmQgdG9wIGFyZSB5IGNvb3JkaW5hdGVzLCBuZWFyIGFuZCBmYXJcbiAgICogYXJlIG5vdCB6IGNvb3JkaW5hdGVzLCBidXQgcmF0aGVyIHRoZXkgYXJlIGRpc3RhbmNlcyBhbG9uZyB0aGUgbmVnYXRpdmVcbiAgICogei1heGlzLiAgV2UgYXNzdW1lIGEgdW5pdCBib3ggZXh0ZW5kaW5nIGZyb20gLTEgdG8gMSBpbiB0aGUgeCBhbmQgeVxuICAgKiBkaW1lbnNpb25zIGFuZCBmcm9tIC0xIHRvIDEgaW4gdGhlIHogZGltZW5zaW9uLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbGVmdCBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSBsZWZ0IHBsYW5lIG9mIHRoZSBib3guXG4gICAqIEBwYXJhbSB7bnVtYmVyfSByaWdodCBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSByaWdodCBwbGFuZSBvZiB0aGUgYm94LlxuICAgKiBAcGFyYW0ge251bWJlcn0gYm90dG9tIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIGJvdHRvbSBwbGFuZSBvZiB0aGUgYm94LlxuICAgKiBAcGFyYW0ge251bWJlcn0gdG9wIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIHJpZ2h0IHBsYW5lIG9mIHRoZSBib3guXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBuZWFyIFRoZSBuZWdhdGl2ZSB6IGNvb3JkaW5hdGUgb2YgdGhlIG5lYXIgcGxhbmUgb2YgdGhlIGJveC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGZhciBUaGUgbmVnYXRpdmUgeiBjb29yZGluYXRlIG9mIHRoZSBmYXIgcGxhbmUgb2YgdGhlIGJveC5cbiAgICogQHBhcmFtIHtNYXRyaXg0fSBbZHN0XSBvcHRpb25hbCBtYXRyaXggdG8gc3RvcmUgcmVzdWx0XG4gICAqIEByZXR1cm4ge01hdHJpeDR9IGRzdCBvciBhIG5ldyBtYXRyaXggaWYgbm9uZSBwcm92aWRlZFxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG4gIGZ1bmN0aW9uIG9ydGhvZ3JhcGhpYyhsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhciwgZHN0KSB7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuXG4gICAgZHN0WyAwXSA9IDIgLyAocmlnaHQgLSBsZWZ0KTtcbiAgICBkc3RbIDFdID0gMDtcbiAgICBkc3RbIDJdID0gMDtcbiAgICBkc3RbIDNdID0gMDtcbiAgICBkc3RbIDRdID0gMDtcbiAgICBkc3RbIDVdID0gMiAvICh0b3AgLSBib3R0b20pO1xuICAgIGRzdFsgNl0gPSAwO1xuICAgIGRzdFsgN10gPSAwO1xuICAgIGRzdFsgOF0gPSAwO1xuICAgIGRzdFsgOV0gPSAwO1xuICAgIGRzdFsxMF0gPSAyIC8gKG5lYXIgLSBmYXIpO1xuICAgIGRzdFsxMV0gPSAwO1xuICAgIGRzdFsxMl0gPSAobGVmdCArIHJpZ2h0KSAvIChsZWZ0IC0gcmlnaHQpO1xuICAgIGRzdFsxM10gPSAoYm90dG9tICsgdG9wKSAvIChib3R0b20gLSB0b3ApO1xuICAgIGRzdFsxNF0gPSAobmVhciArIGZhcikgLyAobmVhciAtIGZhcik7XG4gICAgZHN0WzE1XSA9IDE7XG5cbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXB1dGVzIGEgNC1ieS00IHBlcnNwZWN0aXZlIHRyYW5zZm9ybWF0aW9uIG1hdHJpeCBnaXZlbiB0aGUgbGVmdCwgcmlnaHQsXG4gICAqIHRvcCwgYm90dG9tLCBuZWFyIGFuZCBmYXIgY2xpcHBpbmcgcGxhbmVzLiBUaGUgYXJndW1lbnRzIGRlZmluZSBhIGZydXN0dW1cbiAgICogZXh0ZW5kaW5nIGluIHRoZSBuZWdhdGl2ZSB6IGRpcmVjdGlvbi4gVGhlIGFyZ3VtZW50cyBuZWFyIGFuZCBmYXIgYXJlIHRoZVxuICAgKiBkaXN0YW5jZXMgdG8gdGhlIG5lYXIgYW5kIGZhciBjbGlwcGluZyBwbGFuZXMuIE5vdGUgdGhhdCBuZWFyIGFuZCBmYXIgYXJlIG5vdFxuICAgKiB6IGNvb3JkaW5hdGVzLCBidXQgcmF0aGVyIHRoZXkgYXJlIGRpc3RhbmNlcyBhbG9uZyB0aGUgbmVnYXRpdmUgei1heGlzLiBUaGVcbiAgICogbWF0cml4IGdlbmVyYXRlZCBzZW5kcyB0aGUgdmlld2luZyBmcnVzdHVtIHRvIHRoZSB1bml0IGJveC4gV2UgYXNzdW1lIGEgdW5pdFxuICAgKiBib3ggZXh0ZW5kaW5nIGZyb20gLTEgdG8gMSBpbiB0aGUgeCBhbmQgeSBkaW1lbnNpb25zIGFuZCBmcm9tIC0xIHRvIDEgaW4gdGhlIHpcbiAgICogZGltZW5zaW9uLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbGVmdCBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSBsZWZ0IHBsYW5lIG9mIHRoZSBib3guXG4gICAqIEBwYXJhbSB7bnVtYmVyfSByaWdodCBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSByaWdodCBwbGFuZSBvZiB0aGUgYm94LlxuICAgKiBAcGFyYW0ge251bWJlcn0gYm90dG9tIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIGJvdHRvbSBwbGFuZSBvZiB0aGUgYm94LlxuICAgKiBAcGFyYW0ge251bWJlcn0gdG9wIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIHJpZ2h0IHBsYW5lIG9mIHRoZSBib3guXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBuZWFyIFRoZSBuZWdhdGl2ZSB6IGNvb3JkaW5hdGUgb2YgdGhlIG5lYXIgcGxhbmUgb2YgdGhlIGJveC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGZhciBUaGUgbmVnYXRpdmUgeiBjb29yZGluYXRlIG9mIHRoZSBmYXIgcGxhbmUgb2YgdGhlIGJveC5cbiAgICogQHBhcmFtIHtNYXRyaXg0fSBbZHN0XSBvcHRpb25hbCBtYXRyaXggdG8gc3RvcmUgcmVzdWx0XG4gICAqIEByZXR1cm4ge01hdHJpeDR9IGRzdCBvciBhIG5ldyBtYXRyaXggaWYgbm9uZSBwcm92aWRlZFxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG4gIGZ1bmN0aW9uIGZydXN0dW0obGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyLCBmYXIsIGRzdCkge1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgRmxvYXQzMkFycmF5KDE2KTtcblxuICAgIHZhciBkeCA9IHJpZ2h0IC0gbGVmdDtcbiAgICB2YXIgZHkgPSB0b3AgLSBib3R0b207XG4gICAgdmFyIGR6ID0gZmFyIC0gbmVhcjtcblxuICAgIGRzdFsgMF0gPSAyICogbmVhciAvIGR4O1xuICAgIGRzdFsgMV0gPSAwO1xuICAgIGRzdFsgMl0gPSAwO1xuICAgIGRzdFsgM10gPSAwO1xuICAgIGRzdFsgNF0gPSAwO1xuICAgIGRzdFsgNV0gPSAyICogbmVhciAvIGR5O1xuICAgIGRzdFsgNl0gPSAwO1xuICAgIGRzdFsgN10gPSAwO1xuICAgIGRzdFsgOF0gPSAobGVmdCArIHJpZ2h0KSAvIGR4O1xuICAgIGRzdFsgOV0gPSAodG9wICsgYm90dG9tKSAvIGR5O1xuICAgIGRzdFsxMF0gPSAtKGZhciArIG5lYXIpIC8gZHo7XG4gICAgZHN0WzExXSA9IC0xO1xuICAgIGRzdFsxMl0gPSAwO1xuICAgIGRzdFsxM10gPSAwO1xuICAgIGRzdFsxNF0gPSAtMiAqIG5lYXIgKiBmYXIgLyBkejtcbiAgICBkc3RbMTVdID0gMDtcblxuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuICAvKipcbiAgICogTWFrZXMgYSB0cmFuc2xhdGlvbiBtYXRyaXhcbiAgICogQHBhcmFtIHtudW1iZXJ9IHR4IHggdHJhbnNsYXRpb24uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0eSB5IHRyYW5zbGF0aW9uLlxuICAgKiBAcGFyYW0ge251bWJlcn0gdHogeiB0cmFuc2xhdGlvbi5cbiAgICogQHBhcmFtIHtNYXRyaXg0fSBbZHN0XSBvcHRpb25hbCBtYXRyaXggdG8gc3RvcmUgcmVzdWx0XG4gICAqIEByZXR1cm4ge01hdHJpeDR9IGRzdCBvciBhIG5ldyBtYXRyaXggaWYgbm9uZSBwcm92aWRlZFxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG4gIGZ1bmN0aW9uIHRyYW5zbGF0aW9uKHR4LCB0eSwgdHosIGRzdCkge1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgRmxvYXQzMkFycmF5KDE2KTtcblxuICAgIGRzdFsgMF0gPSAxO1xuICAgIGRzdFsgMV0gPSAwO1xuICAgIGRzdFsgMl0gPSAwO1xuICAgIGRzdFsgM10gPSAwO1xuICAgIGRzdFsgNF0gPSAwO1xuICAgIGRzdFsgNV0gPSAxO1xuICAgIGRzdFsgNl0gPSAwO1xuICAgIGRzdFsgN10gPSAwO1xuICAgIGRzdFsgOF0gPSAwO1xuICAgIGRzdFsgOV0gPSAwO1xuICAgIGRzdFsxMF0gPSAxO1xuICAgIGRzdFsxMV0gPSAwO1xuICAgIGRzdFsxMl0gPSB0eDtcbiAgICBkc3RbMTNdID0gdHk7XG4gICAgZHN0WzE0XSA9IHR6O1xuICAgIGRzdFsxNV0gPSAxO1xuXG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNdXRsaXBseSBieSB0cmFuc2xhdGlvbiBtYXRyaXguXG4gICAqIEBwYXJhbSB7TWF0cml4NH0gbSBtYXRyaXggdG8gbXVsdGlwbHlcbiAgICogQHBhcmFtIHtudW1iZXJ9IHR4IHggdHJhbnNsYXRpb24uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0eSB5IHRyYW5zbGF0aW9uLlxuICAgKiBAcGFyYW0ge251bWJlcn0gdHogeiB0cmFuc2xhdGlvbi5cbiAgICogQHBhcmFtIHtNYXRyaXg0fSBbZHN0XSBvcHRpb25hbCBtYXRyaXggdG8gc3RvcmUgcmVzdWx0XG4gICAqIEByZXR1cm4ge01hdHJpeDR9IGRzdCBvciBhIG5ldyBtYXRyaXggaWYgbm9uZSBwcm92aWRlZFxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG4gIGZ1bmN0aW9uIHRyYW5zbGF0ZShtLCB0eCwgdHksIHR6LCBkc3QpIHtcbiAgICAvLyBUaGlzIGlzIHRoZSBvcHRpbWl6ZWQgdmVyc2lvbiBvZlxuICAgIC8vIHJldHVybiBtdWx0aXBseShtLCB0cmFuc2xhdGlvbih0eCwgdHksIHR6KSwgZHN0KTtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IEZsb2F0MzJBcnJheSgxNik7XG5cbiAgICB2YXIgbTAwID0gbVswXTtcbiAgICB2YXIgbTAxID0gbVsxXTtcbiAgICB2YXIgbTAyID0gbVsyXTtcbiAgICB2YXIgbTAzID0gbVszXTtcbiAgICB2YXIgbTEwID0gbVsxICogNCArIDBdO1xuICAgIHZhciBtMTEgPSBtWzEgKiA0ICsgMV07XG4gICAgdmFyIG0xMiA9IG1bMSAqIDQgKyAyXTtcbiAgICB2YXIgbTEzID0gbVsxICogNCArIDNdO1xuICAgIHZhciBtMjAgPSBtWzIgKiA0ICsgMF07XG4gICAgdmFyIG0yMSA9IG1bMiAqIDQgKyAxXTtcbiAgICB2YXIgbTIyID0gbVsyICogNCArIDJdO1xuICAgIHZhciBtMjMgPSBtWzIgKiA0ICsgM107XG4gICAgdmFyIG0zMCA9IG1bMyAqIDQgKyAwXTtcbiAgICB2YXIgbTMxID0gbVszICogNCArIDFdO1xuICAgIHZhciBtMzIgPSBtWzMgKiA0ICsgMl07XG4gICAgdmFyIG0zMyA9IG1bMyAqIDQgKyAzXTtcblxuICAgIGlmIChtICE9PSBkc3QpIHtcbiAgICAgIGRzdFsgMF0gPSBtMDA7XG4gICAgICBkc3RbIDFdID0gbTAxO1xuICAgICAgZHN0WyAyXSA9IG0wMjtcbiAgICAgIGRzdFsgM10gPSBtMDM7XG4gICAgICBkc3RbIDRdID0gbTEwO1xuICAgICAgZHN0WyA1XSA9IG0xMTtcbiAgICAgIGRzdFsgNl0gPSBtMTI7XG4gICAgICBkc3RbIDddID0gbTEzO1xuICAgICAgZHN0WyA4XSA9IG0yMDtcbiAgICAgIGRzdFsgOV0gPSBtMjE7XG4gICAgICBkc3RbMTBdID0gbTIyO1xuICAgICAgZHN0WzExXSA9IG0yMztcbiAgICB9XG5cbiAgICBkc3RbMTJdID0gbTAwICogdHggKyBtMTAgKiB0eSArIG0yMCAqIHR6ICsgbTMwO1xuICAgIGRzdFsxM10gPSBtMDEgKiB0eCArIG0xMSAqIHR5ICsgbTIxICogdHogKyBtMzE7XG4gICAgZHN0WzE0XSA9IG0wMiAqIHR4ICsgbTEyICogdHkgKyBtMjIgKiB0eiArIG0zMjtcbiAgICBkc3RbMTVdID0gbTAzICogdHggKyBtMTMgKiB0eSArIG0yMyAqIHR6ICsgbTMzO1xuXG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlcyBhbiB4IHJvdGF0aW9uIG1hdHJpeFxuICAgKiBAcGFyYW0ge251bWJlcn0gYW5nbGVJblJhZGlhbnMgYW1vdW50IHRvIHJvdGF0ZVxuICAgKiBAcGFyYW0ge01hdHJpeDR9IFtkc3RdIG9wdGlvbmFsIG1hdHJpeCB0byBzdG9yZSByZXN1bHRcbiAgICogQHJldHVybiB7TWF0cml4NH0gZHN0IG9yIGEgbmV3IG1hdHJpeCBpZiBub25lIHByb3ZpZGVkXG4gICAqIEBtZW1iZXJPZiBtb2R1bGU6d2ViZ2wtM2QtbWF0aFxuICAgKi9cbiAgZnVuY3Rpb24geFJvdGF0aW9uKGFuZ2xlSW5SYWRpYW5zLCBkc3QpIHtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IEZsb2F0MzJBcnJheSgxNik7XG4gICAgdmFyIGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG5cbiAgICBkc3RbIDBdID0gMTtcbiAgICBkc3RbIDFdID0gMDtcbiAgICBkc3RbIDJdID0gMDtcbiAgICBkc3RbIDNdID0gMDtcbiAgICBkc3RbIDRdID0gMDtcbiAgICBkc3RbIDVdID0gYztcbiAgICBkc3RbIDZdID0gcztcbiAgICBkc3RbIDddID0gMDtcbiAgICBkc3RbIDhdID0gMDtcbiAgICBkc3RbIDldID0gLXM7XG4gICAgZHN0WzEwXSA9IGM7XG4gICAgZHN0WzExXSA9IDA7XG4gICAgZHN0WzEyXSA9IDA7XG4gICAgZHN0WzEzXSA9IDA7XG4gICAgZHN0WzE0XSA9IDA7XG4gICAgZHN0WzE1XSA9IDE7XG5cbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgLyoqXG4gICAqIE11bHRpcGx5IGJ5IGFuIHggcm90YXRpb24gbWF0cml4XG4gICAqIEBwYXJhbSB7TWF0cml4NH0gbSBtYXRyaXggdG8gbXVsdGlwbHlcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlSW5SYWRpYW5zIGFtb3VudCB0byByb3RhdGVcbiAgICogQHBhcmFtIHtNYXRyaXg0fSBbZHN0XSBvcHRpb25hbCBtYXRyaXggdG8gc3RvcmUgcmVzdWx0XG4gICAqIEByZXR1cm4ge01hdHJpeDR9IGRzdCBvciBhIG5ldyBtYXRyaXggaWYgbm9uZSBwcm92aWRlZFxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG4gIGZ1bmN0aW9uIHhSb3RhdGUobSwgYW5nbGVJblJhZGlhbnMsIGRzdCkge1xuICAgIC8vIHRoaXMgaXMgdGhlIG9wdGltaXplZCB2ZXJzaW9uIG9mXG4gICAgLy8gcmV0dXJuIG11bHRpcGx5KG0sIHhSb3RhdGlvbihhbmdsZUluUmFkaWFucyksIGRzdCk7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuXG4gICAgdmFyIG0xMCA9IG1bNF07XG4gICAgdmFyIG0xMSA9IG1bNV07XG4gICAgdmFyIG0xMiA9IG1bNl07XG4gICAgdmFyIG0xMyA9IG1bN107XG4gICAgdmFyIG0yMCA9IG1bOF07XG4gICAgdmFyIG0yMSA9IG1bOV07XG4gICAgdmFyIG0yMiA9IG1bMTBdO1xuICAgIHZhciBtMjMgPSBtWzExXTtcbiAgICB2YXIgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICB2YXIgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcblxuICAgIGRzdFs0XSAgPSBjICogbTEwICsgcyAqIG0yMDtcbiAgICBkc3RbNV0gID0gYyAqIG0xMSArIHMgKiBtMjE7XG4gICAgZHN0WzZdICA9IGMgKiBtMTIgKyBzICogbTIyO1xuICAgIGRzdFs3XSAgPSBjICogbTEzICsgcyAqIG0yMztcbiAgICBkc3RbOF0gID0gYyAqIG0yMCAtIHMgKiBtMTA7XG4gICAgZHN0WzldICA9IGMgKiBtMjEgLSBzICogbTExO1xuICAgIGRzdFsxMF0gPSBjICogbTIyIC0gcyAqIG0xMjtcbiAgICBkc3RbMTFdID0gYyAqIG0yMyAtIHMgKiBtMTM7XG5cbiAgICBpZiAobSAhPT0gZHN0KSB7XG4gICAgICBkc3RbIDBdID0gbVsgMF07XG4gICAgICBkc3RbIDFdID0gbVsgMV07XG4gICAgICBkc3RbIDJdID0gbVsgMl07XG4gICAgICBkc3RbIDNdID0gbVsgM107XG4gICAgICBkc3RbMTJdID0gbVsxMl07XG4gICAgICBkc3RbMTNdID0gbVsxM107XG4gICAgICBkc3RbMTRdID0gbVsxNF07XG4gICAgICBkc3RbMTVdID0gbVsxNV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlcyBhbiB5IHJvdGF0aW9uIG1hdHJpeFxuICAgKiBAcGFyYW0ge251bWJlcn0gYW5nbGVJblJhZGlhbnMgYW1vdW50IHRvIHJvdGF0ZVxuICAgKiBAcGFyYW0ge01hdHJpeDR9IFtkc3RdIG9wdGlvbmFsIG1hdHJpeCB0byBzdG9yZSByZXN1bHRcbiAgICogQHJldHVybiB7TWF0cml4NH0gZHN0IG9yIGEgbmV3IG1hdHJpeCBpZiBub25lIHByb3ZpZGVkXG4gICAqIEBtZW1iZXJPZiBtb2R1bGU6d2ViZ2wtM2QtbWF0aFxuICAgKi9cbiAgZnVuY3Rpb24geVJvdGF0aW9uKGFuZ2xlSW5SYWRpYW5zLCBkc3QpIHtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IEZsb2F0MzJBcnJheSgxNik7XG4gICAgdmFyIGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG5cbiAgICBkc3RbIDBdID0gYztcbiAgICBkc3RbIDFdID0gMDtcbiAgICBkc3RbIDJdID0gLXM7XG4gICAgZHN0WyAzXSA9IDA7XG4gICAgZHN0WyA0XSA9IDA7XG4gICAgZHN0WyA1XSA9IDE7XG4gICAgZHN0WyA2XSA9IDA7XG4gICAgZHN0WyA3XSA9IDA7XG4gICAgZHN0WyA4XSA9IHM7XG4gICAgZHN0WyA5XSA9IDA7XG4gICAgZHN0WzEwXSA9IGM7XG4gICAgZHN0WzExXSA9IDA7XG4gICAgZHN0WzEyXSA9IDA7XG4gICAgZHN0WzEzXSA9IDA7XG4gICAgZHN0WzE0XSA9IDA7XG4gICAgZHN0WzE1XSA9IDE7XG5cbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgLyoqXG4gICAqIE11bHRpcGx5IGJ5IGFuIHkgcm90YXRpb24gbWF0cml4XG4gICAqIEBwYXJhbSB7TWF0cml4NH0gbSBtYXRyaXggdG8gbXVsdGlwbHlcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlSW5SYWRpYW5zIGFtb3VudCB0byByb3RhdGVcbiAgICogQHBhcmFtIHtNYXRyaXg0fSBbZHN0XSBvcHRpb25hbCBtYXRyaXggdG8gc3RvcmUgcmVzdWx0XG4gICAqIEByZXR1cm4ge01hdHJpeDR9IGRzdCBvciBhIG5ldyBtYXRyaXggaWYgbm9uZSBwcm92aWRlZFxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG4gIGZ1bmN0aW9uIHlSb3RhdGUobSwgYW5nbGVJblJhZGlhbnMsIGRzdCkge1xuICAgIC8vIHRoaXMgaXMgdGhlIG9wdGltaXplZCB2ZXJpc29uIG9mXG4gICAgLy8gcmV0dXJuIG11bHRpcGx5KG0sIHlSb3RhdGlvbihhbmdsZUluUmFkaWFucyksIGRzdCk7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuXG4gICAgdmFyIG0wMCA9IG1bMCAqIDQgKyAwXTtcbiAgICB2YXIgbTAxID0gbVswICogNCArIDFdO1xuICAgIHZhciBtMDIgPSBtWzAgKiA0ICsgMl07XG4gICAgdmFyIG0wMyA9IG1bMCAqIDQgKyAzXTtcbiAgICB2YXIgbTIwID0gbVsyICogNCArIDBdO1xuICAgIHZhciBtMjEgPSBtWzIgKiA0ICsgMV07XG4gICAgdmFyIG0yMiA9IG1bMiAqIDQgKyAyXTtcbiAgICB2YXIgbTIzID0gbVsyICogNCArIDNdO1xuICAgIHZhciBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICAgIHZhciBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuXG4gICAgZHN0WyAwXSA9IGMgKiBtMDAgLSBzICogbTIwO1xuICAgIGRzdFsgMV0gPSBjICogbTAxIC0gcyAqIG0yMTtcbiAgICBkc3RbIDJdID0gYyAqIG0wMiAtIHMgKiBtMjI7XG4gICAgZHN0WyAzXSA9IGMgKiBtMDMgLSBzICogbTIzO1xuICAgIGRzdFsgOF0gPSBjICogbTIwICsgcyAqIG0wMDtcbiAgICBkc3RbIDldID0gYyAqIG0yMSArIHMgKiBtMDE7XG4gICAgZHN0WzEwXSA9IGMgKiBtMjIgKyBzICogbTAyO1xuICAgIGRzdFsxMV0gPSBjICogbTIzICsgcyAqIG0wMztcblxuICAgIGlmIChtICE9PSBkc3QpIHtcbiAgICAgIGRzdFsgNF0gPSBtWyA0XTtcbiAgICAgIGRzdFsgNV0gPSBtWyA1XTtcbiAgICAgIGRzdFsgNl0gPSBtWyA2XTtcbiAgICAgIGRzdFsgN10gPSBtWyA3XTtcbiAgICAgIGRzdFsxMl0gPSBtWzEyXTtcbiAgICAgIGRzdFsxM10gPSBtWzEzXTtcbiAgICAgIGRzdFsxNF0gPSBtWzE0XTtcbiAgICAgIGRzdFsxNV0gPSBtWzE1XTtcbiAgICB9XG5cbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2VzIGFuIHogcm90YXRpb24gbWF0cml4XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZUluUmFkaWFucyBhbW91bnQgdG8gcm90YXRlXG4gICAqIEBwYXJhbSB7TWF0cml4NH0gW2RzdF0gb3B0aW9uYWwgbWF0cml4IHRvIHN0b3JlIHJlc3VsdFxuICAgKiBAcmV0dXJuIHtNYXRyaXg0fSBkc3Qgb3IgYSBuZXcgbWF0cml4IGlmIG5vbmUgcHJvdmlkZWRcbiAgICogQG1lbWJlck9mIG1vZHVsZTp3ZWJnbC0zZC1tYXRoXG4gICAqL1xuICBmdW5jdGlvbiB6Um90YXRpb24oYW5nbGVJblJhZGlhbnMsIGRzdCkge1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgRmxvYXQzMkFycmF5KDE2KTtcbiAgICB2YXIgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICB2YXIgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcblxuICAgIGRzdFsgMF0gPSBjO1xuICAgIGRzdFsgMV0gPSBzO1xuICAgIGRzdFsgMl0gPSAwO1xuICAgIGRzdFsgM10gPSAwO1xuICAgIGRzdFsgNF0gPSAtcztcbiAgICBkc3RbIDVdID0gYztcbiAgICBkc3RbIDZdID0gMDtcbiAgICBkc3RbIDddID0gMDtcbiAgICBkc3RbIDhdID0gMDtcbiAgICBkc3RbIDldID0gMDtcbiAgICBkc3RbMTBdID0gMTtcbiAgICBkc3RbMTFdID0gMDtcbiAgICBkc3RbMTJdID0gMDtcbiAgICBkc3RbMTNdID0gMDtcbiAgICBkc3RbMTRdID0gMDtcbiAgICBkc3RbMTVdID0gMTtcblxuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuICAvKipcbiAgICogTXVsdGlwbHkgYnkgYW4geiByb3RhdGlvbiBtYXRyaXhcbiAgICogQHBhcmFtIHtNYXRyaXg0fSBtIG1hdHJpeCB0byBtdWx0aXBseVxuICAgKiBAcGFyYW0ge251bWJlcn0gYW5nbGVJblJhZGlhbnMgYW1vdW50IHRvIHJvdGF0ZVxuICAgKiBAcGFyYW0ge01hdHJpeDR9IFtkc3RdIG9wdGlvbmFsIG1hdHJpeCB0byBzdG9yZSByZXN1bHRcbiAgICogQHJldHVybiB7TWF0cml4NH0gZHN0IG9yIGEgbmV3IG1hdHJpeCBpZiBub25lIHByb3ZpZGVkXG4gICAqIEBtZW1iZXJPZiBtb2R1bGU6d2ViZ2wtM2QtbWF0aFxuICAgKi9cbiAgZnVuY3Rpb24gelJvdGF0ZShtLCBhbmdsZUluUmFkaWFucywgZHN0KSB7XG4gICAgLy8gVGhpcyBpcyB0aGUgb3B0aW1pemVkIHZlcmlzb24gb2ZcbiAgICAvLyByZXR1cm4gbXVsdGlwbHkobSwgelJvdGF0aW9uKGFuZ2xlSW5SYWRpYW5zKSwgZHN0KTtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IEZsb2F0MzJBcnJheSgxNik7XG5cbiAgICB2YXIgbTAwID0gbVswICogNCArIDBdO1xuICAgIHZhciBtMDEgPSBtWzAgKiA0ICsgMV07XG4gICAgdmFyIG0wMiA9IG1bMCAqIDQgKyAyXTtcbiAgICB2YXIgbTAzID0gbVswICogNCArIDNdO1xuICAgIHZhciBtMTAgPSBtWzEgKiA0ICsgMF07XG4gICAgdmFyIG0xMSA9IG1bMSAqIDQgKyAxXTtcbiAgICB2YXIgbTEyID0gbVsxICogNCArIDJdO1xuICAgIHZhciBtMTMgPSBtWzEgKiA0ICsgM107XG4gICAgdmFyIGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG5cbiAgICBkc3RbIDBdID0gYyAqIG0wMCArIHMgKiBtMTA7XG4gICAgZHN0WyAxXSA9IGMgKiBtMDEgKyBzICogbTExO1xuICAgIGRzdFsgMl0gPSBjICogbTAyICsgcyAqIG0xMjtcbiAgICBkc3RbIDNdID0gYyAqIG0wMyArIHMgKiBtMTM7XG4gICAgZHN0WyA0XSA9IGMgKiBtMTAgLSBzICogbTAwO1xuICAgIGRzdFsgNV0gPSBjICogbTExIC0gcyAqIG0wMTtcbiAgICBkc3RbIDZdID0gYyAqIG0xMiAtIHMgKiBtMDI7XG4gICAgZHN0WyA3XSA9IGMgKiBtMTMgLSBzICogbTAzO1xuXG4gICAgaWYgKG0gIT09IGRzdCkge1xuICAgICAgZHN0WyA4XSA9IG1bIDhdO1xuICAgICAgZHN0WyA5XSA9IG1bIDldO1xuICAgICAgZHN0WzEwXSA9IG1bMTBdO1xuICAgICAgZHN0WzExXSA9IG1bMTFdO1xuICAgICAgZHN0WzEyXSA9IG1bMTJdO1xuICAgICAgZHN0WzEzXSA9IG1bMTNdO1xuICAgICAgZHN0WzE0XSA9IG1bMTRdO1xuICAgICAgZHN0WzE1XSA9IG1bMTVdO1xuICAgIH1cblxuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuICAvKipcbiAgICogTWFrZXMgYW4gcm90YXRpb24gbWF0cml4IGFyb3VuZCBhbiBhcmJpdHJhcnkgYXhpc1xuICAgKiBAcGFyYW0ge1ZlY3RvcjN9IGF4aXMgYXhpcyB0byByb3RhdGUgYXJvdW5kXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZUluUmFkaWFucyBhbW91bnQgdG8gcm90YXRlXG4gICAqIEBwYXJhbSB7TWF0cml4NH0gW2RzdF0gb3B0aW9uYWwgbWF0cml4IHRvIHN0b3JlIHJlc3VsdFxuICAgKiBAcmV0dXJuIHtNYXRyaXg0fSBkc3Qgb3IgYSBuZXcgbWF0cml4IGlmIG5vbmUgcHJvdmlkZWRcbiAgICogQG1lbWJlck9mIG1vZHVsZTp3ZWJnbC0zZC1tYXRoXG4gICAqL1xuICBmdW5jdGlvbiBheGlzUm90YXRpb24oYXhpcywgYW5nbGVJblJhZGlhbnMsIGRzdCkge1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgRmxvYXQzMkFycmF5KDE2KTtcblxuICAgIHZhciB4ID0gYXhpc1swXTtcbiAgICB2YXIgeSA9IGF4aXNbMV07XG4gICAgdmFyIHogPSBheGlzWzJdO1xuICAgIHZhciBuID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeik7XG4gICAgeCAvPSBuO1xuICAgIHkgLz0gbjtcbiAgICB6IC89IG47XG4gICAgdmFyIHh4ID0geCAqIHg7XG4gICAgdmFyIHl5ID0geSAqIHk7XG4gICAgdmFyIHp6ID0geiAqIHo7XG4gICAgdmFyIGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG4gICAgdmFyIG9uZU1pbnVzQ29zaW5lID0gMSAtIGM7XG5cbiAgICBkc3RbIDBdID0geHggKyAoMSAtIHh4KSAqIGM7XG4gICAgZHN0WyAxXSA9IHggKiB5ICogb25lTWludXNDb3NpbmUgKyB6ICogcztcbiAgICBkc3RbIDJdID0geCAqIHogKiBvbmVNaW51c0Nvc2luZSAtIHkgKiBzO1xuICAgIGRzdFsgM10gPSAwO1xuICAgIGRzdFsgNF0gPSB4ICogeSAqIG9uZU1pbnVzQ29zaW5lIC0geiAqIHM7XG4gICAgZHN0WyA1XSA9IHl5ICsgKDEgLSB5eSkgKiBjO1xuICAgIGRzdFsgNl0gPSB5ICogeiAqIG9uZU1pbnVzQ29zaW5lICsgeCAqIHM7XG4gICAgZHN0WyA3XSA9IDA7XG4gICAgZHN0WyA4XSA9IHggKiB6ICogb25lTWludXNDb3NpbmUgKyB5ICogcztcbiAgICBkc3RbIDldID0geSAqIHogKiBvbmVNaW51c0Nvc2luZSAtIHggKiBzO1xuICAgIGRzdFsxMF0gPSB6eiArICgxIC0genopICogYztcbiAgICBkc3RbMTFdID0gMDtcbiAgICBkc3RbMTJdID0gMDtcbiAgICBkc3RbMTNdID0gMDtcbiAgICBkc3RbMTRdID0gMDtcbiAgICBkc3RbMTVdID0gMTtcblxuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuICAvKipcbiAgICogTXVsdGlwbHkgYnkgYW4gYXhpcyByb3RhdGlvbiBtYXRyaXhcbiAgICogQHBhcmFtIHtNYXRyaXg0fSBtIG1hdHJpeCB0byBtdWx0aXBseVxuICAgKiBAcGFyYW0ge1ZlY3RvcjN9IGF4aXMgYXhpcyB0byByb3RhdGUgYXJvdW5kXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZUluUmFkaWFucyBhbW91bnQgdG8gcm90YXRlXG4gICAqIEBwYXJhbSB7TWF0cml4NH0gW2RzdF0gb3B0aW9uYWwgbWF0cml4IHRvIHN0b3JlIHJlc3VsdFxuICAgKiBAcmV0dXJuIHtNYXRyaXg0fSBkc3Qgb3IgYSBuZXcgbWF0cml4IGlmIG5vbmUgcHJvdmlkZWRcbiAgICogQG1lbWJlck9mIG1vZHVsZTp3ZWJnbC0zZC1tYXRoXG4gICAqL1xuICBmdW5jdGlvbiBheGlzUm90YXRlKG0sIGF4aXMsIGFuZ2xlSW5SYWRpYW5zLCBkc3QpIHtcbiAgICAvLyBUaGlzIGlzIHRoZSBvcHRpbWl6ZWQgdmVyaXNvbiBvZlxuICAgIC8vIHJldHVybiBtdWx0aXBseShtLCBheGlzUm90YXRpb24oYXhpcywgYW5nbGVJblJhZGlhbnMpLCBkc3QpO1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgRmxvYXQzMkFycmF5KDE2KTtcblxuICAgIHZhciB4ID0gYXhpc1swXTtcbiAgICB2YXIgeSA9IGF4aXNbMV07XG4gICAgdmFyIHogPSBheGlzWzJdO1xuICAgIHZhciBuID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeik7XG4gICAgeCAvPSBuO1xuICAgIHkgLz0gbjtcbiAgICB6IC89IG47XG4gICAgdmFyIHh4ID0geCAqIHg7XG4gICAgdmFyIHl5ID0geSAqIHk7XG4gICAgdmFyIHp6ID0geiAqIHo7XG4gICAgdmFyIGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG4gICAgdmFyIG9uZU1pbnVzQ29zaW5lID0gMSAtIGM7XG5cbiAgICB2YXIgcjAwID0geHggKyAoMSAtIHh4KSAqIGM7XG4gICAgdmFyIHIwMSA9IHggKiB5ICogb25lTWludXNDb3NpbmUgKyB6ICogcztcbiAgICB2YXIgcjAyID0geCAqIHogKiBvbmVNaW51c0Nvc2luZSAtIHkgKiBzO1xuICAgIHZhciByMTAgPSB4ICogeSAqIG9uZU1pbnVzQ29zaW5lIC0geiAqIHM7XG4gICAgdmFyIHIxMSA9IHl5ICsgKDEgLSB5eSkgKiBjO1xuICAgIHZhciByMTIgPSB5ICogeiAqIG9uZU1pbnVzQ29zaW5lICsgeCAqIHM7XG4gICAgdmFyIHIyMCA9IHggKiB6ICogb25lTWludXNDb3NpbmUgKyB5ICogcztcbiAgICB2YXIgcjIxID0geSAqIHogKiBvbmVNaW51c0Nvc2luZSAtIHggKiBzO1xuICAgIHZhciByMjIgPSB6eiArICgxIC0genopICogYztcblxuICAgIHZhciBtMDAgPSBtWzBdO1xuICAgIHZhciBtMDEgPSBtWzFdO1xuICAgIHZhciBtMDIgPSBtWzJdO1xuICAgIHZhciBtMDMgPSBtWzNdO1xuICAgIHZhciBtMTAgPSBtWzRdO1xuICAgIHZhciBtMTEgPSBtWzVdO1xuICAgIHZhciBtMTIgPSBtWzZdO1xuICAgIHZhciBtMTMgPSBtWzddO1xuICAgIHZhciBtMjAgPSBtWzhdO1xuICAgIHZhciBtMjEgPSBtWzldO1xuICAgIHZhciBtMjIgPSBtWzEwXTtcbiAgICB2YXIgbTIzID0gbVsxMV07XG5cbiAgICBkc3RbIDBdID0gcjAwICogbTAwICsgcjAxICogbTEwICsgcjAyICogbTIwO1xuICAgIGRzdFsgMV0gPSByMDAgKiBtMDEgKyByMDEgKiBtMTEgKyByMDIgKiBtMjE7XG4gICAgZHN0WyAyXSA9IHIwMCAqIG0wMiArIHIwMSAqIG0xMiArIHIwMiAqIG0yMjtcbiAgICBkc3RbIDNdID0gcjAwICogbTAzICsgcjAxICogbTEzICsgcjAyICogbTIzO1xuICAgIGRzdFsgNF0gPSByMTAgKiBtMDAgKyByMTEgKiBtMTAgKyByMTIgKiBtMjA7XG4gICAgZHN0WyA1XSA9IHIxMCAqIG0wMSArIHIxMSAqIG0xMSArIHIxMiAqIG0yMTtcbiAgICBkc3RbIDZdID0gcjEwICogbTAyICsgcjExICogbTEyICsgcjEyICogbTIyO1xuICAgIGRzdFsgN10gPSByMTAgKiBtMDMgKyByMTEgKiBtMTMgKyByMTIgKiBtMjM7XG4gICAgZHN0WyA4XSA9IHIyMCAqIG0wMCArIHIyMSAqIG0xMCArIHIyMiAqIG0yMDtcbiAgICBkc3RbIDldID0gcjIwICogbTAxICsgcjIxICogbTExICsgcjIyICogbTIxO1xuICAgIGRzdFsxMF0gPSByMjAgKiBtMDIgKyByMjEgKiBtMTIgKyByMjIgKiBtMjI7XG4gICAgZHN0WzExXSA9IHIyMCAqIG0wMyArIHIyMSAqIG0xMyArIHIyMiAqIG0yMztcblxuICAgIGlmIChtICE9PSBkc3QpIHtcbiAgICAgIGRzdFsxMl0gPSBtWzEyXTtcbiAgICAgIGRzdFsxM10gPSBtWzEzXTtcbiAgICAgIGRzdFsxNF0gPSBtWzE0XTtcbiAgICAgIGRzdFsxNV0gPSBtWzE1XTtcbiAgICB9XG5cbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2VzIGEgc2NhbGUgbWF0cml4XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzeCB4IHNjYWxlLlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3kgeSBzY2FsZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHN6IHogc2NhbGUuXG4gICAqIEBwYXJhbSB7TWF0cml4NH0gW2RzdF0gb3B0aW9uYWwgbWF0cml4IHRvIHN0b3JlIHJlc3VsdFxuICAgKiBAcmV0dXJuIHtNYXRyaXg0fSBkc3Qgb3IgYSBuZXcgbWF0cml4IGlmIG5vbmUgcHJvdmlkZWRcbiAgICogQG1lbWJlck9mIG1vZHVsZTp3ZWJnbC0zZC1tYXRoXG4gICAqL1xuICBmdW5jdGlvbiBzY2FsaW5nKHN4LCBzeSwgc3osIGRzdCkge1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgRmxvYXQzMkFycmF5KDE2KTtcblxuICAgIGRzdFsgMF0gPSBzeDtcbiAgICBkc3RbIDFdID0gMDtcbiAgICBkc3RbIDJdID0gMDtcbiAgICBkc3RbIDNdID0gMDtcbiAgICBkc3RbIDRdID0gMDtcbiAgICBkc3RbIDVdID0gc3k7XG4gICAgZHN0WyA2XSA9IDA7XG4gICAgZHN0WyA3XSA9IDA7XG4gICAgZHN0WyA4XSA9IDA7XG4gICAgZHN0WyA5XSA9IDA7XG4gICAgZHN0WzEwXSA9IHN6O1xuICAgIGRzdFsxMV0gPSAwO1xuICAgIGRzdFsxMl0gPSAwO1xuICAgIGRzdFsxM10gPSAwO1xuICAgIGRzdFsxNF0gPSAwO1xuICAgIGRzdFsxNV0gPSAxO1xuXG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNdWx0aXBseSBieSBhIHNjYWxpbmcgbWF0cml4XG4gICAqIEBwYXJhbSB7TWF0cml4NH0gbSBtYXRyaXggdG8gbXVsdGlwbHlcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN4IHggc2NhbGUuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzeSB5IHNjYWxlLlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3ogeiBzY2FsZS5cbiAgICogQHBhcmFtIHtNYXRyaXg0fSBbZHN0XSBvcHRpb25hbCBtYXRyaXggdG8gc3RvcmUgcmVzdWx0XG4gICAqIEByZXR1cm4ge01hdHJpeDR9IGRzdCBvciBhIG5ldyBtYXRyaXggaWYgbm9uZSBwcm92aWRlZFxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG4gIGZ1bmN0aW9uIHNjYWxlKG0sIHN4LCBzeSwgc3osIGRzdCkge1xuICAgIC8vIFRoaXMgaXMgdGhlIG9wdGltaXplZCB2ZXJpc29uIG9mXG4gICAgLy8gcmV0dXJuIG11bHRpcGx5KG0sIHNjYWxpbmcoc3gsIHN5LCBzeiksIGRzdCk7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuXG4gICAgZHN0WyAwXSA9IHN4ICogbVswICogNCArIDBdO1xuICAgIGRzdFsgMV0gPSBzeCAqIG1bMCAqIDQgKyAxXTtcbiAgICBkc3RbIDJdID0gc3ggKiBtWzAgKiA0ICsgMl07XG4gICAgZHN0WyAzXSA9IHN4ICogbVswICogNCArIDNdO1xuICAgIGRzdFsgNF0gPSBzeSAqIG1bMSAqIDQgKyAwXTtcbiAgICBkc3RbIDVdID0gc3kgKiBtWzEgKiA0ICsgMV07XG4gICAgZHN0WyA2XSA9IHN5ICogbVsxICogNCArIDJdO1xuICAgIGRzdFsgN10gPSBzeSAqIG1bMSAqIDQgKyAzXTtcbiAgICBkc3RbIDhdID0gc3ogKiBtWzIgKiA0ICsgMF07XG4gICAgZHN0WyA5XSA9IHN6ICogbVsyICogNCArIDFdO1xuICAgIGRzdFsxMF0gPSBzeiAqIG1bMiAqIDQgKyAyXTtcbiAgICBkc3RbMTFdID0gc3ogKiBtWzIgKiA0ICsgM107XG5cbiAgICBpZiAobSAhPT0gZHN0KSB7XG4gICAgICBkc3RbMTJdID0gbVsxMl07XG4gICAgICBkc3RbMTNdID0gbVsxM107XG4gICAgICBkc3RbMTRdID0gbVsxNF07XG4gICAgICBkc3RbMTVdID0gbVsxNV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBjcmVhdGVzIGEgbWF0cml4IGZyb20gdHJhbnNsYXRpb24sIHF1YXRlcm5pb24sIHNjYWxlXG4gICAqIEBwYXJhbSB7TnVtYmVyW119IHRyYW5zbGF0aW9uIFt4LCB5LCB6XSB0cmFuc2xhdGlvblxuICAgKiBAcGFyYW0ge051bWJlcltdfSBxdWF0ZXJuaW9uIFt4LCB5LCB6LCB6XSBxdWF0ZXJuaW9uIHJvdGF0aW9uXG4gICAqIEBwYXJhbSB7TnVtYmVyW119IHNjYWxlIFt4LCB5LCB6XSBzY2FsZVxuICAgKiBAcGFyYW0ge01hdHJpeDR9IFtkc3RdIG9wdGlvbmFsIG1hdHJpeCB0byBzdG9yZSByZXN1bHRcbiAgICogQHJldHVybiB7TWF0cml4NH0gZHN0IG9yIGEgbmV3IG1hdHJpeCBpZiBub25lIHByb3ZpZGVkXG4gICAqL1xuICBmdW5jdGlvbiBjb21wb3NlKHRyYW5zbGF0aW9uLCBxdWF0ZXJuaW9uLCBzY2FsZSwgZHN0KSB7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuXG4gICAgY29uc3QgeCA9IHF1YXRlcm5pb25bMF07XG4gICAgY29uc3QgeSA9IHF1YXRlcm5pb25bMV07XG4gICAgY29uc3QgeiA9IHF1YXRlcm5pb25bMl07XG4gICAgY29uc3QgdyA9IHF1YXRlcm5pb25bM107XG5cbiAgICBjb25zdCB4MiA9IHggKyB4O1xuICAgIGNvbnN0IHkyID0geSArIHk7XG4gICAgY29uc3QgejIgPSB6ICsgejtcblxuICAgIGNvbnN0IHh4ID0geCAqIHgyO1xuICAgIGNvbnN0IHh5ID0geCAqIHkyO1xuICAgIGNvbnN0IHh6ID0geCAqIHoyO1xuXG4gICAgY29uc3QgeXkgPSB5ICogeTI7XG4gICAgY29uc3QgeXogPSB5ICogejI7XG4gICAgY29uc3QgenogPSB6ICogejI7XG5cbiAgICBjb25zdCB3eCA9IHcgKiB4MjtcbiAgICBjb25zdCB3eSA9IHcgKiB5MjtcbiAgICBjb25zdCB3eiA9IHcgKiB6MjtcblxuICAgIGNvbnN0IHN4ID0gc2NhbGVbMF07XG4gICAgY29uc3Qgc3kgPSBzY2FsZVsxXTtcbiAgICBjb25zdCBzeiA9IHNjYWxlWzJdO1xuXG4gICAgZHN0WzBdID0gKDEgLSAoeXkgKyB6eikpICogc3g7XG4gICAgZHN0WzFdID0gKHh5ICsgd3opICogc3g7XG4gICAgZHN0WzJdID0gKHh6IC0gd3kpICogc3g7XG4gICAgZHN0WzNdID0gMDtcblxuICAgIGRzdFs0XSA9ICh4eSAtIHd6KSAqIHN5O1xuICAgIGRzdFs1XSA9ICgxIC0gKHh4ICsgenopKSAqIHN5O1xuICAgIGRzdFs2XSA9ICh5eiArIHd4KSAqIHN5O1xuICAgIGRzdFs3XSA9IDA7XG5cbiAgICBkc3RbIDhdID0gKHh6ICsgd3kpICogc3o7XG4gICAgZHN0WyA5XSA9ICh5eiAtIHd4KSAqIHN6O1xuICAgIGRzdFsxMF0gPSAoMSAtICh4eCArIHl5KSkgKiBzejtcbiAgICBkc3RbMTFdID0gMDtcblxuICAgIGRzdFsxMl0gPSB0cmFuc2xhdGlvblswXTtcbiAgICBkc3RbMTNdID0gdHJhbnNsYXRpb25bMV07XG4gICAgZHN0WzE0XSA9IHRyYW5zbGF0aW9uWzJdO1xuICAgIGRzdFsxNV0gPSAxO1xuXG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHF1YXRGcm9tUm90YXRpb25NYXRyaXgobSwgZHN0KSB7XG4gICAgLy8gaHR0cDovL3d3dy5ldWNsaWRlYW5zcGFjZS5jb20vbWF0aHMvZ2VvbWV0cnkvcm90YXRpb25zL2NvbnZlcnNpb25zL21hdHJpeFRvUXVhdGVybmlvbi9pbmRleC5odG1cblxuICAgIC8vIGFzc3VtZXMgdGhlIHVwcGVyIDN4MyBvZiBtIGlzIGEgcHVyZSByb3RhdGlvbiBtYXRyaXggKGkuZSwgdW5zY2FsZWQpXG4gICAgY29uc3QgbTExID0gbVswXTtcbiAgICBjb25zdCBtMTIgPSBtWzRdO1xuICAgIGNvbnN0IG0xMyA9IG1bOF07XG4gICAgY29uc3QgbTIxID0gbVsxXTtcbiAgICBjb25zdCBtMjIgPSBtWzVdO1xuICAgIGNvbnN0IG0yMyA9IG1bOV07XG4gICAgY29uc3QgbTMxID0gbVsyXTtcbiAgICBjb25zdCBtMzIgPSBtWzZdO1xuICAgIGNvbnN0IG0zMyA9IG1bMTBdO1xuXG4gICAgY29uc3QgdHJhY2UgPSBtMTEgKyBtMjIgKyBtMzM7XG5cbiAgICBpZiAodHJhY2UgPiAwKSB7XG4gICAgICBjb25zdCBzID0gMC41IC8gTWF0aC5zcXJ0KHRyYWNlICsgMSk7XG4gICAgICBkc3RbM10gPSAwLjI1IC8gcztcbiAgICAgIGRzdFswXSA9IChtMzIgLSBtMjMpICogcztcbiAgICAgIGRzdFsxXSA9IChtMTMgLSBtMzEpICogcztcbiAgICAgIGRzdFsyXSA9IChtMjEgLSBtMTIpICogcztcbiAgICB9IGVsc2UgaWYgKG0xMSA+IG0yMiAmJiBtMTEgPiBtMzMpIHtcbiAgICAgIGNvbnN0IHMgPSAyICogTWF0aC5zcXJ0KDEgKyBtMTEgLSBtMjIgLSBtMzMpO1xuICAgICAgZHN0WzNdID0gKG0zMiAtIG0yMykgLyBzO1xuICAgICAgZHN0WzBdID0gMC4yNSAqIHM7XG4gICAgICBkc3RbMV0gPSAobTEyICsgbTIxKSAvIHM7XG4gICAgICBkc3RbMl0gPSAobTEzICsgbTMxKSAvIHM7XG4gICAgfSBlbHNlIGlmIChtMjIgPiBtMzMpIHtcbiAgICAgIGNvbnN0IHMgPSAyICogTWF0aC5zcXJ0KDEgKyBtMjIgLSBtMTEgLSBtMzMpO1xuICAgICAgZHN0WzNdID0gKG0xMyAtIG0zMSkgLyBzO1xuICAgICAgZHN0WzBdID0gKG0xMiArIG0yMSkgLyBzO1xuICAgICAgZHN0WzFdID0gMC4yNSAqIHM7XG4gICAgICBkc3RbMl0gPSAobTIzICsgbTMyKSAvIHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHMgPSAyICogTWF0aC5zcXJ0KDEgKyBtMzMgLSBtMTEgLSBtMjIpO1xuICAgICAgZHN0WzNdID0gKG0yMSAtIG0xMikgLyBzO1xuICAgICAgZHN0WzBdID0gKG0xMyArIG0zMSkgLyBzO1xuICAgICAgZHN0WzFdID0gKG0yMyArIG0zMikgLyBzO1xuICAgICAgZHN0WzJdID0gMC4yNSAqIHM7XG4gICAgfVxuICB9XG4gIFxuICBmdW5jdGlvbiBkZWNvbXBvc2UobWF0LCB0cmFuc2xhdGlvbiwgcXVhdGVybmlvbiwgc2NhbGUpIHtcbiAgICBsZXQgc3ggPSBsZW5ndGgobWF0LnNsaWNlKDAsIDMpKTtcbiAgICBjb25zdCBzeSA9IGxlbmd0aChtYXQuc2xpY2UoNCwgNykpO1xuICAgIGNvbnN0IHN6ID0gbGVuZ3RoKG1hdC5zbGljZSg4LCAxMSkpO1xuXG4gICAgLy8gaWYgZGVtYXRybWluZSBpcyBuZWdhdGl2ZSwgd2UgbmVlZCB0byBpbnZlcnQgb25lIHNjYWxlXG4gICAgY29uc3QgZGV0ID0gZGV0ZXJtaW5hdGUobWF0KTtcbiAgICBpZiAoZGV0IDwgMCkge1xuICAgICAgc3ggPSAtc3g7XG4gICAgfVxuXG4gICAgdHJhbnNsYXRpb25bMF0gPSBtYXRbMTJdO1xuICAgIHRyYW5zbGF0aW9uWzFdID0gbWF0WzEzXTtcbiAgICB0cmFuc2xhdGlvblsyXSA9IG1hdFsxNF07XG5cbiAgICAvLyBzY2FsZSB0aGUgcm90YXRpb24gcGFydFxuICAgIGNvbnN0IG1hdHJpeCA9IGNvcHkobWF0KTtcblxuICAgIGNvbnN0IGludlNYID0gMSAvIHN4O1xuICAgIGNvbnN0IGludlNZID0gMSAvIHN5O1xuICAgIGNvbnN0IGludlNaID0gMSAvIHN6O1xuXG4gICAgbWF0cml4WzBdICo9IGludlNYO1xuICAgIG1hdHJpeFsxXSAqPSBpbnZTWDtcbiAgICBtYXRyaXhbMl0gKj0gaW52U1g7XG5cbiAgICBtYXRyaXhbNF0gKj0gaW52U1k7XG4gICAgbWF0cml4WzVdICo9IGludlNZO1xuICAgIG1hdHJpeFs2XSAqPSBpbnZTWTtcblxuICAgIG1hdHJpeFs4XSAqPSBpbnZTWjtcbiAgICBtYXRyaXhbOV0gKj0gaW52U1o7XG4gICAgbWF0cml4WzEwXSAqPSBpbnZTWjtcblxuICAgIHF1YXRGcm9tUm90YXRpb25NYXRyaXgobWF0cml4LCBxdWF0ZXJuaW9uKTtcblxuICAgIHNjYWxlWzBdID0gc3g7XG4gICAgc2NhbGVbMV0gPSBzeTtcbiAgICBzY2FsZVsyXSA9IHN6O1xuICB9XG5cbiAgZnVuY3Rpb24gZGV0ZXJtaW5hdGUobSkge1xuICAgIHZhciBtMDAgPSBtWzAgKiA0ICsgMF07XG4gICAgdmFyIG0wMSA9IG1bMCAqIDQgKyAxXTtcbiAgICB2YXIgbTAyID0gbVswICogNCArIDJdO1xuICAgIHZhciBtMDMgPSBtWzAgKiA0ICsgM107XG4gICAgdmFyIG0xMCA9IG1bMSAqIDQgKyAwXTtcbiAgICB2YXIgbTExID0gbVsxICogNCArIDFdO1xuICAgIHZhciBtMTIgPSBtWzEgKiA0ICsgMl07XG4gICAgdmFyIG0xMyA9IG1bMSAqIDQgKyAzXTtcbiAgICB2YXIgbTIwID0gbVsyICogNCArIDBdO1xuICAgIHZhciBtMjEgPSBtWzIgKiA0ICsgMV07XG4gICAgdmFyIG0yMiA9IG1bMiAqIDQgKyAyXTtcbiAgICB2YXIgbTIzID0gbVsyICogNCArIDNdO1xuICAgIHZhciBtMzAgPSBtWzMgKiA0ICsgMF07XG4gICAgdmFyIG0zMSA9IG1bMyAqIDQgKyAxXTtcbiAgICB2YXIgbTMyID0gbVszICogNCArIDJdO1xuICAgIHZhciBtMzMgPSBtWzMgKiA0ICsgM107XG4gICAgdmFyIHRtcF8wICA9IG0yMiAqIG0zMztcbiAgICB2YXIgdG1wXzEgID0gbTMyICogbTIzO1xuICAgIHZhciB0bXBfMiAgPSBtMTIgKiBtMzM7XG4gICAgdmFyIHRtcF8zICA9IG0zMiAqIG0xMztcbiAgICB2YXIgdG1wXzQgID0gbTEyICogbTIzO1xuICAgIHZhciB0bXBfNSAgPSBtMjIgKiBtMTM7XG4gICAgdmFyIHRtcF82ICA9IG0wMiAqIG0zMztcbiAgICB2YXIgdG1wXzcgID0gbTMyICogbTAzO1xuICAgIHZhciB0bXBfOCAgPSBtMDIgKiBtMjM7XG4gICAgdmFyIHRtcF85ICA9IG0yMiAqIG0wMztcbiAgICB2YXIgdG1wXzEwID0gbTAyICogbTEzO1xuICAgIHZhciB0bXBfMTEgPSBtMTIgKiBtMDM7XG4gICAgdmFyIHRtcF8xMiA9IG0yMCAqIG0zMTtcbiAgICB2YXIgdG1wXzEzID0gbTMwICogbTIxO1xuICAgIHZhciB0bXBfMTQgPSBtMTAgKiBtMzE7XG4gICAgdmFyIHRtcF8xNSA9IG0zMCAqIG0xMTtcbiAgICB2YXIgdG1wXzE2ID0gbTEwICogbTIxO1xuICAgIHZhciB0bXBfMTcgPSBtMjAgKiBtMTE7XG4gICAgdmFyIHRtcF8xOCA9IG0wMCAqIG0zMTtcbiAgICB2YXIgdG1wXzE5ID0gbTMwICogbTAxO1xuICAgIHZhciB0bXBfMjAgPSBtMDAgKiBtMjE7XG4gICAgdmFyIHRtcF8yMSA9IG0yMCAqIG0wMTtcbiAgICB2YXIgdG1wXzIyID0gbTAwICogbTExO1xuICAgIHZhciB0bXBfMjMgPSBtMTAgKiBtMDE7XG5cbiAgICB2YXIgdDAgPSAodG1wXzAgKiBtMTEgKyB0bXBfMyAqIG0yMSArIHRtcF80ICogbTMxKSAtXG4gICAgICAgICh0bXBfMSAqIG0xMSArIHRtcF8yICogbTIxICsgdG1wXzUgKiBtMzEpO1xuICAgIHZhciB0MSA9ICh0bXBfMSAqIG0wMSArIHRtcF82ICogbTIxICsgdG1wXzkgKiBtMzEpIC1cbiAgICAgICAgKHRtcF8wICogbTAxICsgdG1wXzcgKiBtMjEgKyB0bXBfOCAqIG0zMSk7XG4gICAgdmFyIHQyID0gKHRtcF8yICogbTAxICsgdG1wXzcgKiBtMTEgKyB0bXBfMTAgKiBtMzEpIC1cbiAgICAgICAgKHRtcF8zICogbTAxICsgdG1wXzYgKiBtMTEgKyB0bXBfMTEgKiBtMzEpO1xuICAgIHZhciB0MyA9ICh0bXBfNSAqIG0wMSArIHRtcF84ICogbTExICsgdG1wXzExICogbTIxKSAtXG4gICAgICAgICh0bXBfNCAqIG0wMSArIHRtcF85ICogbTExICsgdG1wXzEwICogbTIxKTtcblxuICAgIHJldHVybiAxLjAgLyAobTAwICogdDAgKyBtMTAgKiB0MSArIG0yMCAqIHQyICsgbTMwICogdDMpOyAgICBcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wdXRlcyB0aGUgaW52ZXJzZSBvZiBhIG1hdHJpeC5cbiAgICogQHBhcmFtIHtNYXRyaXg0fSBtIG1hdHJpeCB0byBjb21wdXRlIGludmVyc2Ugb2ZcbiAgICogQHBhcmFtIHtNYXRyaXg0fSBbZHN0XSBvcHRpb25hbCBtYXRyaXggdG8gc3RvcmUgcmVzdWx0XG4gICAqIEByZXR1cm4ge01hdHJpeDR9IGRzdCBvciBhIG5ldyBtYXRyaXggaWYgbm9uZSBwcm92aWRlZFxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG4gIGZ1bmN0aW9uIGludmVyc2UobSwgZHN0KSB7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuICAgIHZhciBtMDAgPSBtWzAgKiA0ICsgMF07XG4gICAgdmFyIG0wMSA9IG1bMCAqIDQgKyAxXTtcbiAgICB2YXIgbTAyID0gbVswICogNCArIDJdO1xuICAgIHZhciBtMDMgPSBtWzAgKiA0ICsgM107XG4gICAgdmFyIG0xMCA9IG1bMSAqIDQgKyAwXTtcbiAgICB2YXIgbTExID0gbVsxICogNCArIDFdO1xuICAgIHZhciBtMTIgPSBtWzEgKiA0ICsgMl07XG4gICAgdmFyIG0xMyA9IG1bMSAqIDQgKyAzXTtcbiAgICB2YXIgbTIwID0gbVsyICogNCArIDBdO1xuICAgIHZhciBtMjEgPSBtWzIgKiA0ICsgMV07XG4gICAgdmFyIG0yMiA9IG1bMiAqIDQgKyAyXTtcbiAgICB2YXIgbTIzID0gbVsyICogNCArIDNdO1xuICAgIHZhciBtMzAgPSBtWzMgKiA0ICsgMF07XG4gICAgdmFyIG0zMSA9IG1bMyAqIDQgKyAxXTtcbiAgICB2YXIgbTMyID0gbVszICogNCArIDJdO1xuICAgIHZhciBtMzMgPSBtWzMgKiA0ICsgM107XG4gICAgdmFyIHRtcF8wICA9IG0yMiAqIG0zMztcbiAgICB2YXIgdG1wXzEgID0gbTMyICogbTIzO1xuICAgIHZhciB0bXBfMiAgPSBtMTIgKiBtMzM7XG4gICAgdmFyIHRtcF8zICA9IG0zMiAqIG0xMztcbiAgICB2YXIgdG1wXzQgID0gbTEyICogbTIzO1xuICAgIHZhciB0bXBfNSAgPSBtMjIgKiBtMTM7XG4gICAgdmFyIHRtcF82ICA9IG0wMiAqIG0zMztcbiAgICB2YXIgdG1wXzcgID0gbTMyICogbTAzO1xuICAgIHZhciB0bXBfOCAgPSBtMDIgKiBtMjM7XG4gICAgdmFyIHRtcF85ICA9IG0yMiAqIG0wMztcbiAgICB2YXIgdG1wXzEwID0gbTAyICogbTEzO1xuICAgIHZhciB0bXBfMTEgPSBtMTIgKiBtMDM7XG4gICAgdmFyIHRtcF8xMiA9IG0yMCAqIG0zMTtcbiAgICB2YXIgdG1wXzEzID0gbTMwICogbTIxO1xuICAgIHZhciB0bXBfMTQgPSBtMTAgKiBtMzE7XG4gICAgdmFyIHRtcF8xNSA9IG0zMCAqIG0xMTtcbiAgICB2YXIgdG1wXzE2ID0gbTEwICogbTIxO1xuICAgIHZhciB0bXBfMTcgPSBtMjAgKiBtMTE7XG4gICAgdmFyIHRtcF8xOCA9IG0wMCAqIG0zMTtcbiAgICB2YXIgdG1wXzE5ID0gbTMwICogbTAxO1xuICAgIHZhciB0bXBfMjAgPSBtMDAgKiBtMjE7XG4gICAgdmFyIHRtcF8yMSA9IG0yMCAqIG0wMTtcbiAgICB2YXIgdG1wXzIyID0gbTAwICogbTExO1xuICAgIHZhciB0bXBfMjMgPSBtMTAgKiBtMDE7XG5cbiAgICB2YXIgdDAgPSAodG1wXzAgKiBtMTEgKyB0bXBfMyAqIG0yMSArIHRtcF80ICogbTMxKSAtXG4gICAgICAgICh0bXBfMSAqIG0xMSArIHRtcF8yICogbTIxICsgdG1wXzUgKiBtMzEpO1xuICAgIHZhciB0MSA9ICh0bXBfMSAqIG0wMSArIHRtcF82ICogbTIxICsgdG1wXzkgKiBtMzEpIC1cbiAgICAgICAgKHRtcF8wICogbTAxICsgdG1wXzcgKiBtMjEgKyB0bXBfOCAqIG0zMSk7XG4gICAgdmFyIHQyID0gKHRtcF8yICogbTAxICsgdG1wXzcgKiBtMTEgKyB0bXBfMTAgKiBtMzEpIC1cbiAgICAgICAgKHRtcF8zICogbTAxICsgdG1wXzYgKiBtMTEgKyB0bXBfMTEgKiBtMzEpO1xuICAgIHZhciB0MyA9ICh0bXBfNSAqIG0wMSArIHRtcF84ICogbTExICsgdG1wXzExICogbTIxKSAtXG4gICAgICAgICh0bXBfNCAqIG0wMSArIHRtcF85ICogbTExICsgdG1wXzEwICogbTIxKTtcblxuICAgIHZhciBkID0gMS4wIC8gKG0wMCAqIHQwICsgbTEwICogdDEgKyBtMjAgKiB0MiArIG0zMCAqIHQzKTtcblxuICAgIGRzdFswXSA9IGQgKiB0MDtcbiAgICBkc3RbMV0gPSBkICogdDE7XG4gICAgZHN0WzJdID0gZCAqIHQyO1xuICAgIGRzdFszXSA9IGQgKiB0MztcbiAgICBkc3RbNF0gPSBkICogKCh0bXBfMSAqIG0xMCArIHRtcF8yICogbTIwICsgdG1wXzUgKiBtMzApIC1cbiAgICAgICAgICAodG1wXzAgKiBtMTAgKyB0bXBfMyAqIG0yMCArIHRtcF80ICogbTMwKSk7XG4gICAgZHN0WzVdID0gZCAqICgodG1wXzAgKiBtMDAgKyB0bXBfNyAqIG0yMCArIHRtcF84ICogbTMwKSAtXG4gICAgICAgICAgKHRtcF8xICogbTAwICsgdG1wXzYgKiBtMjAgKyB0bXBfOSAqIG0zMCkpO1xuICAgIGRzdFs2XSA9IGQgKiAoKHRtcF8zICogbTAwICsgdG1wXzYgKiBtMTAgKyB0bXBfMTEgKiBtMzApIC1cbiAgICAgICAgICAodG1wXzIgKiBtMDAgKyB0bXBfNyAqIG0xMCArIHRtcF8xMCAqIG0zMCkpO1xuICAgIGRzdFs3XSA9IGQgKiAoKHRtcF80ICogbTAwICsgdG1wXzkgKiBtMTAgKyB0bXBfMTAgKiBtMjApIC1cbiAgICAgICAgICAodG1wXzUgKiBtMDAgKyB0bXBfOCAqIG0xMCArIHRtcF8xMSAqIG0yMCkpO1xuICAgIGRzdFs4XSA9IGQgKiAoKHRtcF8xMiAqIG0xMyArIHRtcF8xNSAqIG0yMyArIHRtcF8xNiAqIG0zMykgLVxuICAgICAgICAgICh0bXBfMTMgKiBtMTMgKyB0bXBfMTQgKiBtMjMgKyB0bXBfMTcgKiBtMzMpKTtcbiAgICBkc3RbOV0gPSBkICogKCh0bXBfMTMgKiBtMDMgKyB0bXBfMTggKiBtMjMgKyB0bXBfMjEgKiBtMzMpIC1cbiAgICAgICAgICAodG1wXzEyICogbTAzICsgdG1wXzE5ICogbTIzICsgdG1wXzIwICogbTMzKSk7XG4gICAgZHN0WzEwXSA9IGQgKiAoKHRtcF8xNCAqIG0wMyArIHRtcF8xOSAqIG0xMyArIHRtcF8yMiAqIG0zMykgLVxuICAgICAgICAgICh0bXBfMTUgKiBtMDMgKyB0bXBfMTggKiBtMTMgKyB0bXBfMjMgKiBtMzMpKTtcbiAgICBkc3RbMTFdID0gZCAqICgodG1wXzE3ICogbTAzICsgdG1wXzIwICogbTEzICsgdG1wXzIzICogbTIzKSAtXG4gICAgICAgICAgKHRtcF8xNiAqIG0wMyArIHRtcF8yMSAqIG0xMyArIHRtcF8yMiAqIG0yMykpO1xuICAgIGRzdFsxMl0gPSBkICogKCh0bXBfMTQgKiBtMjIgKyB0bXBfMTcgKiBtMzIgKyB0bXBfMTMgKiBtMTIpIC1cbiAgICAgICAgICAodG1wXzE2ICogbTMyICsgdG1wXzEyICogbTEyICsgdG1wXzE1ICogbTIyKSk7XG4gICAgZHN0WzEzXSA9IGQgKiAoKHRtcF8yMCAqIG0zMiArIHRtcF8xMiAqIG0wMiArIHRtcF8xOSAqIG0yMikgLVxuICAgICAgICAgICh0bXBfMTggKiBtMjIgKyB0bXBfMjEgKiBtMzIgKyB0bXBfMTMgKiBtMDIpKTtcbiAgICBkc3RbMTRdID0gZCAqICgodG1wXzE4ICogbTEyICsgdG1wXzIzICogbTMyICsgdG1wXzE1ICogbTAyKSAtXG4gICAgICAgICAgKHRtcF8yMiAqIG0zMiArIHRtcF8xNCAqIG0wMiArIHRtcF8xOSAqIG0xMikpO1xuICAgIGRzdFsxNV0gPSBkICogKCh0bXBfMjIgKiBtMjIgKyB0bXBfMTYgKiBtMDIgKyB0bXBfMjEgKiBtMTIpIC1cbiAgICAgICAgICAodG1wXzIwICogbTEyICsgdG1wXzIzICogbTIyICsgdG1wXzE3ICogbTAyKSk7XG5cbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFRha2VzIGEgIG1hdHJpeCBhbmQgYSB2ZWN0b3Igd2l0aCA0IGVudHJpZXMsIHRyYW5zZm9ybXMgdGhhdCB2ZWN0b3IgYnlcbiAgICogdGhlIG1hdHJpeCwgYW5kIHJldHVybnMgdGhlIHJlc3VsdCBhcyBhIHZlY3RvciB3aXRoIDQgZW50cmllcy5cbiAgICogQHBhcmFtIHtNYXRyaXg0fSBtIFRoZSBtYXRyaXguXG4gICAqIEBwYXJhbSB7VmVjdG9yNH0gdiBUaGUgcG9pbnQgaW4gaG9tb2dlbm91cyBjb29yZGluYXRlcy5cbiAgICogQHBhcmFtIHtWZWN0b3I0fSBkc3Qgb3B0aW9uYWwgdmVjdG9yNCB0byBzdG9yZSByZXN1bHRcbiAgICogQHJldHVybiB7VmVjdG9yNH0gZHN0IG9yIG5ldyBWZWN0b3I0IGlmIG5vdCBwcm92aWRlZFxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG4gIGZ1bmN0aW9uIHRyYW5zZm9ybVZlY3RvcihtLCB2LCBkc3QpIHtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IEZsb2F0MzJBcnJheSg0KTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7ICsraSkge1xuICAgICAgZHN0W2ldID0gMC4wO1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCA0OyArK2opIHtcbiAgICAgICAgZHN0W2ldICs9IHZbal0gKiBtW2ogKiA0ICsgaV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuICAvKipcbiAgICogVGFrZXMgYSA0LWJ5LTQgbWF0cml4IGFuZCBhIHZlY3RvciB3aXRoIDMgZW50cmllcyxcbiAgICogaW50ZXJwcmV0cyB0aGUgdmVjdG9yIGFzIGEgcG9pbnQsIHRyYW5zZm9ybXMgdGhhdCBwb2ludCBieSB0aGUgbWF0cml4LCBhbmRcbiAgICogcmV0dXJucyB0aGUgcmVzdWx0IGFzIGEgdmVjdG9yIHdpdGggMyBlbnRyaWVzLlxuICAgKiBAcGFyYW0ge01hdHJpeDR9IG0gVGhlIG1hdHJpeC5cbiAgICogQHBhcmFtIHtWZWN0b3IzfSB2IFRoZSBwb2ludC5cbiAgICogQHBhcmFtIHtWZWN0b3I0fSBkc3Qgb3B0aW9uYWwgdmVjdG9yNCB0byBzdG9yZSByZXN1bHRcbiAgICogQHJldHVybiB7VmVjdG9yNH0gZHN0IG9yIG5ldyBWZWN0b3I0IGlmIG5vdCBwcm92aWRlZFxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG4gIGZ1bmN0aW9uIHRyYW5zZm9ybVBvaW50KG0sIHYsIGRzdCkge1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgRmxvYXQzMkFycmF5KDMpO1xuICAgIHZhciB2MCA9IHZbMF07XG4gICAgdmFyIHYxID0gdlsxXTtcbiAgICB2YXIgdjIgPSB2WzJdO1xuICAgIHZhciBkID0gdjAgKiBtWzAgKiA0ICsgM10gKyB2MSAqIG1bMSAqIDQgKyAzXSArIHYyICogbVsyICogNCArIDNdICsgbVszICogNCArIDNdO1xuXG4gICAgZHN0WzBdID0gKHYwICogbVswICogNCArIDBdICsgdjEgKiBtWzEgKiA0ICsgMF0gKyB2MiAqIG1bMiAqIDQgKyAwXSArIG1bMyAqIDQgKyAwXSkgLyBkO1xuICAgIGRzdFsxXSA9ICh2MCAqIG1bMCAqIDQgKyAxXSArIHYxICogbVsxICogNCArIDFdICsgdjIgKiBtWzIgKiA0ICsgMV0gKyBtWzMgKiA0ICsgMV0pIC8gZDtcbiAgICBkc3RbMl0gPSAodjAgKiBtWzAgKiA0ICsgMl0gKyB2MSAqIG1bMSAqIDQgKyAyXSArIHYyICogbVsyICogNCArIDJdICsgbVszICogNCArIDJdKSAvIGQ7XG5cbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFRha2VzIGEgNC1ieS00IG1hdHJpeCBhbmQgYSB2ZWN0b3Igd2l0aCAzIGVudHJpZXMsIGludGVycHJldHMgdGhlIHZlY3RvciBhcyBhXG4gICAqIGRpcmVjdGlvbiwgdHJhbnNmb3JtcyB0aGF0IGRpcmVjdGlvbiBieSB0aGUgbWF0cml4LCBhbmQgcmV0dXJucyB0aGUgcmVzdWx0O1xuICAgKiBhc3N1bWVzIHRoZSB0cmFuc2Zvcm1hdGlvbiBvZiAzLWRpbWVuc2lvbmFsIHNwYWNlIHJlcHJlc2VudGVkIGJ5IHRoZSBtYXRyaXhcbiAgICogaXMgcGFyYWxsZWwtcHJlc2VydmluZywgaS5lLiBhbnkgY29tYmluYXRpb24gb2Ygcm90YXRpb24sIHNjYWxpbmcgYW5kXG4gICAqIHRyYW5zbGF0aW9uLCBidXQgbm90IGEgcGVyc3BlY3RpdmUgZGlzdG9ydGlvbi4gUmV0dXJucyBhIHZlY3RvciB3aXRoIDNcbiAgICogZW50cmllcy5cbiAgICogQHBhcmFtIHtNYXRyaXg0fSBtIFRoZSBtYXRyaXguXG4gICAqIEBwYXJhbSB7VmVjdG9yM30gdiBUaGUgZGlyZWN0aW9uLlxuICAgKiBAcGFyYW0ge1ZlY3RvcjR9IGRzdCBvcHRpb25hbCB2ZWN0b3I0IHRvIHN0b3JlIHJlc3VsdFxuICAgKiBAcmV0dXJuIHtWZWN0b3I0fSBkc3Qgb3IgbmV3IFZlY3RvcjQgaWYgbm90IHByb3ZpZGVkXG4gICAqIEBtZW1iZXJPZiBtb2R1bGU6d2ViZ2wtM2QtbWF0aFxuICAgKi9cbiAgZnVuY3Rpb24gdHJhbnNmb3JtRGlyZWN0aW9uKG0sIHYsIGRzdCkge1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgRmxvYXQzMkFycmF5KDMpO1xuXG4gICAgdmFyIHYwID0gdlswXTtcbiAgICB2YXIgdjEgPSB2WzFdO1xuICAgIHZhciB2MiA9IHZbMl07XG5cbiAgICBkc3RbMF0gPSB2MCAqIG1bMCAqIDQgKyAwXSArIHYxICogbVsxICogNCArIDBdICsgdjIgKiBtWzIgKiA0ICsgMF07XG4gICAgZHN0WzFdID0gdjAgKiBtWzAgKiA0ICsgMV0gKyB2MSAqIG1bMSAqIDQgKyAxXSArIHYyICogbVsyICogNCArIDFdO1xuICAgIGRzdFsyXSA9IHYwICogbVswICogNCArIDJdICsgdjEgKiBtWzEgKiA0ICsgMl0gKyB2MiAqIG1bMiAqIDQgKyAyXTtcblxuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuICAvKipcbiAgICogVGFrZXMgYSA0LWJ5LTQgbWF0cml4IG0gYW5kIGEgdmVjdG9yIHYgd2l0aCAzIGVudHJpZXMsIGludGVycHJldHMgdGhlIHZlY3RvclxuICAgKiBhcyBhIG5vcm1hbCB0byBhIHN1cmZhY2UsIGFuZCBjb21wdXRlcyBhIHZlY3RvciB3aGljaCBpcyBub3JtYWwgdXBvblxuICAgKiB0cmFuc2Zvcm1pbmcgdGhhdCBzdXJmYWNlIGJ5IHRoZSBtYXRyaXguIFRoZSBlZmZlY3Qgb2YgdGhpcyBmdW5jdGlvbiBpcyB0aGVcbiAgICogc2FtZSBhcyB0cmFuc2Zvcm1pbmcgdiAoYXMgYSBkaXJlY3Rpb24pIGJ5IHRoZSBpbnZlcnNlLXRyYW5zcG9zZSBvZiBtLiAgVGhpc1xuICAgKiBmdW5jdGlvbiBhc3N1bWVzIHRoZSB0cmFuc2Zvcm1hdGlvbiBvZiAzLWRpbWVuc2lvbmFsIHNwYWNlIHJlcHJlc2VudGVkIGJ5IHRoZVxuICAgKiBtYXRyaXggaXMgcGFyYWxsZWwtcHJlc2VydmluZywgaS5lLiBhbnkgY29tYmluYXRpb24gb2Ygcm90YXRpb24sIHNjYWxpbmcgYW5kXG4gICAqIHRyYW5zbGF0aW9uLCBidXQgbm90IGEgcGVyc3BlY3RpdmUgZGlzdG9ydGlvbi4gIFJldHVybnMgYSB2ZWN0b3Igd2l0aCAzXG4gICAqIGVudHJpZXMuXG4gICAqIEBwYXJhbSB7TWF0cml4NH0gbSBUaGUgbWF0cml4LlxuICAgKiBAcGFyYW0ge1ZlY3RvcjN9IHYgVGhlIG5vcm1hbC5cbiAgICogQHBhcmFtIHtWZWN0b3IzfSBbZHN0XSBUaGUgZGlyZWN0aW9uLlxuICAgKiBAcmV0dXJuIHtWZWN0b3IzfSBUaGUgdHJhbnNmb3JtZWQgZGlyZWN0aW9uLlxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG4gIGZ1bmN0aW9uIHRyYW5zZm9ybU5vcm1hbChtLCB2LCBkc3QpIHtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IEZsb2F0MzJBcnJheSgzKTtcbiAgICB2YXIgbWkgPSBpbnZlcnNlKG0pO1xuICAgIHZhciB2MCA9IHZbMF07XG4gICAgdmFyIHYxID0gdlsxXTtcbiAgICB2YXIgdjIgPSB2WzJdO1xuXG4gICAgZHN0WzBdID0gdjAgKiBtaVswICogNCArIDBdICsgdjEgKiBtaVswICogNCArIDFdICsgdjIgKiBtaVswICogNCArIDJdO1xuICAgIGRzdFsxXSA9IHYwICogbWlbMSAqIDQgKyAwXSArIHYxICogbWlbMSAqIDQgKyAxXSArIHYyICogbWlbMSAqIDQgKyAyXTtcbiAgICBkc3RbMl0gPSB2MCAqIG1pWzIgKiA0ICsgMF0gKyB2MSAqIG1pWzIgKiA0ICsgMV0gKyB2MiAqIG1pWzIgKiA0ICsgMl07XG5cbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgZnVuY3Rpb24gY29weShzcmMsIGRzdCkge1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgRmxvYXQzMkFycmF5KDE2KTtcblxuICAgIGRzdFsgMF0gPSBzcmNbIDBdO1xuICAgIGRzdFsgMV0gPSBzcmNbIDFdO1xuICAgIGRzdFsgMl0gPSBzcmNbIDJdO1xuICAgIGRzdFsgM10gPSBzcmNbIDNdO1xuICAgIGRzdFsgNF0gPSBzcmNbIDRdO1xuICAgIGRzdFsgNV0gPSBzcmNbIDVdO1xuICAgIGRzdFsgNl0gPSBzcmNbIDZdO1xuICAgIGRzdFsgN10gPSBzcmNbIDddO1xuICAgIGRzdFsgOF0gPSBzcmNbIDhdO1xuICAgIGRzdFsgOV0gPSBzcmNbIDldO1xuICAgIGRzdFsxMF0gPSBzcmNbMTBdO1xuICAgIGRzdFsxMV0gPSBzcmNbMTFdO1xuICAgIGRzdFsxMl0gPSBzcmNbMTJdO1xuICAgIGRzdFsxM10gPSBzcmNbMTNdO1xuICAgIGRzdFsxNF0gPSBzcmNbMTRdO1xuICAgIGRzdFsxNV0gPSBzcmNbMTVdO1xuXG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY29weTogY29weSxcbiAgICBsb29rQXQ6IGxvb2tBdCxcbiAgICBhZGRWZWN0b3JzOiBhZGRWZWN0b3JzLFxuICAgIHN1YnRyYWN0VmVjdG9yczogc3VidHJhY3RWZWN0b3JzLFxuICAgIGRpc3RhbmNlOiBkaXN0YW5jZSxcbiAgICBkaXN0YW5jZVNxOiBkaXN0YW5jZVNxLFxuICAgIG5vcm1hbGl6ZTogbm9ybWFsaXplLFxuICAgIGNvbXBvc2U6IGNvbXBvc2UsXG4gICAgY3Jvc3M6IGNyb3NzLFxuICAgIGRlY29tcG9zZTogZGVjb21wb3NlLFxuICAgIGRvdDogZG90LFxuICAgIGlkZW50aXR5OiBpZGVudGl0eSxcbiAgICB0cmFuc3Bvc2U6IHRyYW5zcG9zZSxcbiAgICBsZW5ndGg6IGxlbmd0aCxcbiAgICBvcnRob2dyYXBoaWM6IG9ydGhvZ3JhcGhpYyxcbiAgICBmcnVzdHVtOiBmcnVzdHVtLFxuICAgIHBlcnNwZWN0aXZlOiBwZXJzcGVjdGl2ZSxcbiAgICB0cmFuc2xhdGlvbjogdHJhbnNsYXRpb24sXG4gICAgdHJhbnNsYXRlOiB0cmFuc2xhdGUsXG4gICAgeFJvdGF0aW9uOiB4Um90YXRpb24sXG4gICAgeVJvdGF0aW9uOiB5Um90YXRpb24sXG4gICAgelJvdGF0aW9uOiB6Um90YXRpb24sXG4gICAgeFJvdGF0ZTogeFJvdGF0ZSxcbiAgICB5Um90YXRlOiB5Um90YXRlLFxuICAgIHpSb3RhdGU6IHpSb3RhdGUsXG4gICAgYXhpc1JvdGF0aW9uOiBheGlzUm90YXRpb24sXG4gICAgYXhpc1JvdGF0ZTogYXhpc1JvdGF0ZSxcbiAgICBzY2FsaW5nOiBzY2FsaW5nLFxuICAgIHNjYWxlOiBzY2FsZSxcbiAgICBtdWx0aXBseTogbXVsdGlwbHksXG4gICAgaW52ZXJzZTogaW52ZXJzZSxcbiAgICB0cmFuc2Zvcm1WZWN0b3I6IHRyYW5zZm9ybVZlY3RvcixcbiAgICB0cmFuc2Zvcm1Qb2ludDogdHJhbnNmb3JtUG9pbnQsXG4gICAgdHJhbnNmb3JtRGlyZWN0aW9uOiB0cmFuc2Zvcm1EaXJlY3Rpb24sXG4gICAgdHJhbnNmb3JtTm9ybWFsOiB0cmFuc2Zvcm1Ob3JtYWwsXG4gIH07XG5cbn0pKTtcblxuIiwiLyoqXG4gKiBQcmltaXRpdmUgc3BoZXJlLCB0aGUgdmVydGljZXMgaW4gdGhlIGxpc3Qgb2YgXG4gKiBjb29yZGluYXRlcyB0aGF0IGlzIHJlcHJlc2VudGVkIGJ5IHRoZSBhcnJheSBjb250YWlucyAzIG51bWJlcnMgKHgseSx6KS5cbiAqIFxuICogQHBhcmFtIHtudW1iZXJ9IHJhZGl1cyBcbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1WZXJ0aWNhbFNlZ21lbnRzIHRoZSBudW1iZXIgb2YgdGhlIHZlcnRpY2FsIHNlZ21lbnRzLiBMaWtlIEVhcnRoJ3MgbWVyaWRpYW5zLHRoZSBsaW5lIGdvaW5nIHBvbGUgdG8gcG9sZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1Ib3Jpem9uYWxTZWdlbWVudHMgdGhlIG51bWJlciBvZiB0aGUgaG9yaXpvbmFsIHNlZ21lbnRzLiBMaWtlIEVhcnRoJ3MgcGFyYWxsZWxzLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydExhdGl0dWRlSW5SYWRpYW5zPTBdICBcbiAqIEBwYXJhbSB7bnVtYmVyfSBbZW5kTGF0aXR1ZGVJblJhZGlhbnM9TWF0aC5QSV0gIFxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydExvbmdpdHVkZUluUmFkaWFucz0wXSAgXG4gKiBAcGFyYW0ge251bWJlcn0gW2VuZExvbmdpdHVkZUluUmFkaWFucz0yKk1hdGguUEldICBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNwaGVyZVZlcnRpY2VzKFxuICByYWRpdXMsIG51bVZlcnRpY2FsU2VnbWVudHMsIG51bUhvcml6b25hbFNlZ2VtZW50cywgXG4gIHN0YXJ0TGF0aXR1ZGVJblJhZGlhbnMgPSAwLCBlbmRMYXRpdHVkZUluUmFkaWFucyA9IE1hdGguUEksIFxuICBzdGFydExvbmdpdHVkZUluUmFkaWFucyA9IDAsIGVuZExvbmdpdHVkZUluUmFkaWFucyA9IDIgKiBNYXRoLlBJKSB7XG5cbiAgY29uc3QgbGF0aXR1ZGVSYW5nZSA9IGVuZExhdGl0dWRlSW5SYWRpYW5zIC0gc3RhcnRMYXRpdHVkZUluUmFkaWFucztcbiAgY29uc3QgbG9uZ2l0dWRlUmFuZ2UgPSBlbmRMb25naXR1ZGVJblJhZGlhbnMgLSBzdGFydExvbmdpdHVkZUluUmFkaWFucztcbiAgXG4gIC8vIGFkZCBvbmUgYmVjYXVzZSB0aGUgZW5kIGxpbmUgc2hvdWxkIGJlIHR3byBsaW5lcyBtZXJnZWRcbiAgY29uc3QgbnVtVmVydGljZXMgPSAobnVtVmVydGljYWxTZWdtZW50cyArIDEpICogKG51bUhvcml6b25hbFNlZ2VtZW50cyArIDEpOyBcbiAgXG4gIGxldCBwb3NpdGlvbnMgPSBbXSwgbm9ybWFscyA9IFtdLCB0ZXhDb29yZHMgPSBbXTtcblxuICBmb3IgKGxldCBqID0gMDsgaiA8IG51bUhvcml6b25hbFNlZ2VtZW50cysxOyBqKz0xKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1WZXJ0aWNhbFNlZ21lbnRzKzE7IGkrPTEpIHtcbiAgICAgIGNvbnN0IHUgPSBpIC8gbnVtVmVydGljYWxTZWdtZW50cztcbiAgICAgIGNvbnN0IHYgPSBqIC8gbnVtSG9yaXpvbmFsU2VnZW1lbnRzO1xuXG4gICAgICBjb25zdCB0aGV0YSA9IGxvbmdpdHVkZVJhbmdlICogdTsgXG4gICAgICBjb25zdCBwaGkgPSBsYXRpdHVkZVJhbmdlICogdjtcblxuICAgICAgY29uc3Qgc2luVGhldGEgPSBNYXRoLnNpbih0aGV0YSksIGNvc1RoZXRhID0gTWF0aC5jb3ModGhldGEpO1xuICAgICAgY29uc3Qgc2luUGhpID0gTWF0aC5zaW4ocGhpKSwgY29zdFBoaSA9IE1hdGguY29zKHBoaSk7XG5cbiAgICAgIGNvbnN0IHV4ID0gY29zVGhldGEgKiBzaW5QaGk7XG4gICAgICBjb25zdCB1eSA9IGNvc3RQaGk7XG4gICAgICBjb25zdCB1eiA9IHNpblRoZXRhICogc2luUGhpO1xuXG4gICAgICBwb3NpdGlvbnMucHVzaChbcmFkaXVzICogdXgsIHJhZGl1cyAqIHV5LCByYWRpdXMgKiB1el0pO1xuICAgICAgbm9ybWFscy5wdXNoKFt1eCwgdXksIHV6XSk7XG4gICAgICB0ZXhDb29yZHMucHVzaChbMSAtIHUsIHZdKTtcbiAgICB9XG4gIH1cblxuICAvLyBnZW5lcmF0ZSB0aGUgaW5kaWNlcyBvZiB0aGUgdHJpYW5nbGVzLlxuICBjb25zdCBudW1WZXJ0aWNhbFNlZ21lbnRWZXJ0aWNlcyA9IG51bVZlcnRpY2FsU2VnbWVudHMgKyAxO1xuICBsZXQgaW5kaWNlcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVZlcnRpY2FsU2VnbWVudHM7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbnVtSG9yaXpvbmFsU2VnZW1lbnRzOyBqICs9IDEpe1xuICAgICAgLy8gdHdvIHRyaWFuZ2xlcyBvZiBvbmUgZmFjZVxuICAgICAgLyogdHJpYW5nbGUgMSBcbiAgICAgICAgICAqMS0tLS0tKjJcbiAgICAgICAgICAgfCAgICAvXG4gICAgICAgICAgIHwgIC8gIFxuICAgICAgICAgICozICBcbiAgICAgICovXG4gICAgICBsZXQgaWR4MSA9IFtcbiAgICAgICAgaiAqIG51bVZlcnRpY2FsU2VnbWVudFZlcnRpY2VzICsgaSxcbiAgICAgICAgaiAqIG51bVZlcnRpY2FsU2VnbWVudFZlcnRpY2VzICsgKGkgKyAxKSxcbiAgICAgICAgKGogKyAxKSAqIG51bVZlcnRpY2FsU2VnbWVudFZlcnRpY2VzICsgaSBcbiAgICAgIF07XG4gICAgICAvKiB0cmlhbmdsZSAyXG4gICAgICAgICAgICAgICAgKjIgICBcbiAgICAgICAgICAgICAgLyAgfFxuICAgICAgICAgICAgLyAgICB8XG4gICAgICAgICAgKjEtLS0tLSozXG4gICAgICAqL1xuICAgICAgbGV0IGlkeDIgPSBbXG4gICAgICAgIChqICsgMSkgKiBudW1WZXJ0aWNhbFNlZ21lbnRWZXJ0aWNlcyArIGkgLFxuICAgICAgICBqICogbnVtVmVydGljYWxTZWdtZW50VmVydGljZXMgKyAoaSArIDEpLFxuICAgICAgICAoaiArIDEpICogbnVtVmVydGljYWxTZWdtZW50VmVydGljZXMgKyAoaSArIDEpXG4gICAgICBdO1xuXG4gICAgICBpbmRpY2VzLnB1c2goaWR4MSwgaWR4Mik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwb2lzdGlvbnM6IHBvc2l0aW9ucyxcbiAgICBub3JtYWxzOiBub3JtYWxzLFxuICAgIHRleHR1cmVDb29yZGluYXRlczogdGV4Q29vcmRzLFxuICAgIGluZGljZXM6IGluZGljZXMsXG5cbiAgICBudW1WZXJ0aWNlczogbnVtVmVydGljZXNcbiAgfTtcblxufVxuXG4vKlxuICBHTFNMIHNoYWRlciBwcm9ncmFtIGFuZCBHTFNMIGNvZGUgY29tcGlsZXIuXG5cbiAgVGhlcmUgYXJlIHR3byBzaGFkZXI6IHZlcnRleCBzaGFkZXIgYW5kIGZyYWdtZW50IHNoYWRlci5cbiAgVmVydGV4IHNoYWRlciBpcyB1c2VkIGZvciB0aGUgdmVydGV4IHBvc2l0aW9uIGluZm8uXG4gIGZyYWdtZW50IHNoYWRlciBpcyB1c2VkIGZvciB0aGUgdmVydGV4IGNvbG9yIGluZm8uXG5cbiAgRm9yIG1vcmUgZGV0YWlscywgTG9vayBmb3IgdGhlIGRvY3VtZW50IGFib3V0IFdlYkdMIG9uIE1ETi5cbiAqL1xuXG5cbi8vXG4vLyBJbml0aWFsaXplIGEgc2hhZGVyIHByb2dyYW0sIHNvIFdlYkdMIGtub3dzIGhvdyB0byBkcmF3IG91ciBkYXRhXG4vL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRTaGFkZXJQcm9ncmFtKGdsLCB2c1NvdXJjZSwgZnNTb3VyY2UpIHtcbiAgY29uc3QgdmVydGV4U2hhZGVyID0gbG9hZFNoYWRlcihnbCwgZ2wuVkVSVEVYX1NIQURFUiwgdnNTb3VyY2UpO1xuICBjb25zdCBmcmFnbWVudFNoYWRlciA9IGxvYWRTaGFkZXIoZ2wsIGdsLkZSQUdNRU5UX1NIQURFUiwgZnNTb3VyY2UpO1xuXG4gIC8vIENyZWF0ZSB0aGUgc2hhZGVyIHByb2dyYW1cblxuICBjb25zdCBzaGFkZXJQcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xuICBnbC5hdHRhY2hTaGFkZXIoc2hhZGVyUHJvZ3JhbSwgdmVydGV4U2hhZGVyKTtcbiAgZ2wuYXR0YWNoU2hhZGVyKHNoYWRlclByb2dyYW0sIGZyYWdtZW50U2hhZGVyKTtcbiAgZ2wubGlua1Byb2dyYW0oc2hhZGVyUHJvZ3JhbSk7XG5cbiAgLy8gSWYgY3JlYXRpbmcgdGhlIHNoYWRlciBwcm9ncmFtIGZhaWxlZCwgYWxlcnRcblxuICBpZiAoIWdsLmdldFByb2dyYW1QYXJhbWV0ZXIoc2hhZGVyUHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpKSB7XG4gICAgdGhyb3cgRXJyb3IoJ1VuYWJsZSB0byBpbml0aWFsaXplIHRoZSBzaGFkZXIgcHJvZ3JhbTogJyArIGdsLmdldFByb2dyYW1JbmZvTG9nKHNoYWRlclByb2dyYW0pKTtcbiAgfVxuXG4gIHJldHVybiBzaGFkZXJQcm9ncmFtO1xufVxuXG4vL1xuLy8gY3JlYXRlcyBhIHNoYWRlciBvZiB0aGUgZ2l2ZW4gdHlwZSwgdXBsb2FkcyB0aGUgc291cmNlIGFuZFxuLy8gY29tcGlsZXMgaXQuXG4vL1xuZnVuY3Rpb24gbG9hZFNoYWRlcihnbCwgdHlwZSwgc291cmNlKSB7XG4gIGNvbnN0IHNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcih0eXBlKTtcblxuICAvLyBTZW5kIHRoZSBzb3VyY2UgdG8gdGhlIHNoYWRlciBvYmplY3RcblxuICBnbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzb3VyY2UpO1xuXG4gIC8vIENvbXBpbGUgdGhlIHNoYWRlciBwcm9ncmFtXG5cbiAgZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xuXG4gIC8vIFNlZSBpZiBpdCBjb21waWxlZCBzdWNjZXNzZnVsbHlcblxuICBpZiAoIWdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKSkge1xuICAgIGdsLmRlbGV0ZVNoYWRlcihzaGFkZXIpO1xuICAgIHRocm93IEVycm9yKCdBbiBlcnJvciBvY2N1cnJlZCBjb21waWxpbmcgdGhlIHNoYWRlcnM6ICcgKyBnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcikpO1xuICB9XG5cbiAgcmV0dXJuIHNoYWRlcjtcbn0iXSwic291cmNlUm9vdCI6IiJ9