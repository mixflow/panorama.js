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
// Imports
var getUrl = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../asserts/mobile-motion.svg */ "./src/asserts/mobile-motion.svg"));
var ___CSS_LOADER_URL___1___ = getUrl(__webpack_require__(/*! ../asserts/fullscreen.svg */ "./src/asserts/fullscreen.svg"));
var ___CSS_LOADER_URL___2___ = getUrl(__webpack_require__(/*! ../asserts/exit-fullscreen.svg */ "./src/asserts/exit-fullscreen.svg"));
// Module
exports.push([module.i, ".panorama__centering--1X83W {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.panorama__wrapper--3MegC {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n.panorama__overlay--R54RO {\n  /* overlay on the parent(wrapper), one's position is relative and\n  the other is absolute. */\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  /* background-color: #1EB9FF; */\n}\n.panorama__mainCanvas--12x4n {\n  height: 100%;\n  width: 100%;\n}\n.panorama__progressWrapper--22Leb {\n  width: 35%;\n  height: 8px;\n  border: 1px solid #FFF;\n}\n.panorama__progressBar--PSISO {\n  background-color: #FFF;\n  width: 0;\n  height: 100%;\n}\n.panorama__progressMessage--2HWiB {\n  color: #FFF;\n  float: left;\n}\n.panorama__percentageNum--3V2fE {\n  color: #FFF;\n  float: right;\n}\n.panorama__uiControlPanel--32VJ7 {\n  /* make one whole line bar, put on the bottom */\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  box-sizing: border-box;\n  /* include padding into width and height sizes */\n  height: 4em;\n}\n.panorama__controlButton--3RClL {\n  display: inline-block;\n  height: 4em;\n  width: 4em;\n  background-color: rgba(211, 211, 211, 0.6);\n}\n.panorama__orientationSwitch--24RG1 {\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n  background-size: contain;\n}\n.panorama__fullscreenSwitch--djegi {\n  float: right;\n  background-image: url(" + ___CSS_LOADER_URL___1___ + ");\n  background-size: contain;\n}\n.panorama__fullscreenSwitch--djegi.panorama__inFullscreen--1_r6b {\n  background-image: url(" + ___CSS_LOADER_URL___2___ + ");\n}\n", ""]);
// Exports
exports.locals = {
	"centering": "panorama__centering--1X83W",
	"wrapper": "panorama__wrapper--3MegC",
	"overlay": "panorama__overlay--R54RO",
	"mainCanvas": "panorama__mainCanvas--12x4n",
	"progressWrapper": "panorama__progressWrapper--22Leb panorama__centering--1X83W",
	"progressBar": "panorama__progressBar--PSISO",
	"progressMessage": "panorama__progressMessage--2HWiB",
	"percentageNum": "panorama__percentageNum--3V2fE",
	"uiControlPanel": "panorama__uiControlPanel--32VJ7",
	"controlButton": "panorama__controlButton--3RClL",
	"orientationSwitch": "panorama__orientationSwitch--24RG1 panorama__controlButton--3RClL",
	"fullscreenSwitch": "panorama__fullscreenSwitch--djegi panorama__controlButton--3RClL",
	"inFullscreen": "panorama__inFullscreen--1_r6b"
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

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

/***/ "./src/asserts/exit-fullscreen.svg":
/*!*****************************************!*\
  !*** ./src/asserts/exit-fullscreen.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3C?xml version='1.0' encoding='ascii'?%3E %3Csvg xmlns='http://www.w3.org/2000/svg' height='200' version='1.1' width='200'%3E %3Cg id='View Layer_LineSet' inkscape:groupmode='lineset' inkscape:label='View Layer_LineSet' xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape'%3E %3Cstyle%3E %23strokes %3E * %7B fill: black; %7D %3C/style%3E %3Cg id='strokes' inkscape:groupmode='layer' inkscape:label='strokes' xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape'%3E %3Cpath d=' M 81.543, 36.539 71.543, 36.539 70.292, 36.539 70.292, 46.539 70.292, 47.790 70.292, 57.790 70.292, 59.041 70.292, 69.041 70.292, 70.292 60.292, 70.292 59.041, 70.292 49.041, 70.292 47.790, 70.292 37.790, 70.292 36.539, 70.292 36.539, 80.292 36.539, 81.543 46.539, 81.543 47.790, 81.543 57.790, 81.543 59.041, 81.543 69.041, 81.543 70.292, 81.543 80.292, 81.543 81.543, 81.543 81.543, 71.543 81.543, 70.292 81.543, 60.292 81.543, 59.041 81.543, 49.041 81.543, 47.790 81.543, 37.790 81.543, 36.539 ' fill='none' stroke='rgb(0, 0, 0)' stroke-linecap='butt' stroke-linejoin='round' stroke-opacity='1.0' stroke-width='3.0' /%3E %3Cpath d=' M 118.457, 36.539 118.457, 46.539 118.457, 47.790 118.457, 57.790 118.457, 59.041 118.457, 69.041 118.457, 70.292 118.457, 80.292 118.457, 81.543 128.457, 81.543 129.708, 81.543 139.708, 81.543 140.959, 81.543 150.959, 81.543 152.210, 81.543 162.210, 81.543 163.461, 81.543 163.461, 71.543 163.461, 70.292 153.461, 70.292 152.210, 70.292 142.210, 70.292 140.959, 70.292 130.959, 70.292 129.708, 70.292 129.708, 60.292 129.708, 59.041 129.708, 49.041 129.708, 47.790 129.708, 37.790 129.708, 36.539 119.708, 36.539 118.457, 36.539 ' fill='none' stroke='rgb(0, 0, 0)' stroke-linecap='butt' stroke-linejoin='round' stroke-opacity='1.0' stroke-width='3.0' /%3E %3Cpath d=' M 81.543, 163.461 81.543, 153.461 81.543, 152.210 81.543, 142.210 81.543, 140.959 81.543, 130.959 81.543, 129.708 81.543, 119.708 81.543, 118.457 71.543, 118.457 70.292, 118.457 60.292, 118.457 59.041, 118.457 49.041, 118.457 47.790, 118.457 37.790, 118.457 36.539, 118.457 36.539, 128.457 36.539, 129.708 46.539, 129.708 47.790, 129.708 57.790, 129.708 59.041, 129.708 69.041, 129.708 70.292, 129.708 70.292, 139.708 70.292, 140.959 70.292, 150.959 70.292, 152.210 70.292, 162.210 70.292, 163.461 80.292, 163.461 81.543, 163.461 ' fill='none' stroke='rgb(0, 0, 0)' stroke-linecap='butt' stroke-linejoin='round' stroke-opacity='1.0' stroke-width='3.0' /%3E %3Cpath d=' M 118.457, 163.461 128.457, 163.461 129.708, 163.461 129.708, 153.461 129.708, 152.210 129.708, 142.210 129.708, 140.959 129.708, 130.959 129.708, 129.708 139.708, 129.708 140.959, 129.708 150.959, 129.708 152.210, 129.708 162.210, 129.708 163.461, 129.708 163.461, 119.708 163.461, 118.457 153.461, 118.457 152.210, 118.457 142.210, 118.457 140.959, 118.457 130.959, 118.457 129.708, 118.457 119.708, 118.457 118.457, 118.457 118.457, 128.457 118.457, 129.708 118.457, 139.708 118.457, 140.959 118.457, 150.959 118.457, 152.210 118.457, 162.210 118.457, 163.461 ' fill='none' stroke='rgb(0, 0, 0)' stroke-linecap='butt' stroke-linejoin='round' stroke-opacity='1.0' stroke-width='3.0' /%3E %3C/g%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ "./src/asserts/fullscreen.svg":
/*!************************************!*\
  !*** ./src/asserts/fullscreen.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3C?xml version='1.0' encoding='ascii'?%3E %3Csvg xmlns='http://www.w3.org/2000/svg' height='200' version='1.1' width='200'%3E %3Cg id='View Layer_LineSet' inkscape:groupmode='lineset' inkscape:label='View Layer_LineSet' xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape'%3E %3Cstyle%3E %23strokes %3E * %7B fill: black; %7D %3C/style%3E %3Cg id='strokes' inkscape:groupmode='layer' inkscape:label='strokes' xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape'%3E %3Cpath d=' M 26.048, 71.052 36.048, 71.052 37.299, 71.052 37.299, 61.052 37.299, 59.801 37.299, 49.801 37.299, 48.550 37.299, 38.550 37.299, 37.299 47.299, 37.299 48.550, 37.299 58.550, 37.299 59.801, 37.299 69.801, 37.299 71.052, 37.299 71.052, 27.299 71.052, 26.048 61.052, 26.048 59.801, 26.048 49.801, 26.048 48.550, 26.048 38.550, 26.048 37.299, 26.048 27.299, 26.048 26.048, 26.048 26.048, 36.048 26.048, 37.299 26.048, 47.299 26.048, 48.550 26.048, 58.550 26.048, 59.801 26.048, 69.801 26.048, 71.052 ' fill='none' stroke='rgb(0, 0, 0)' stroke-linecap='butt' stroke-linejoin='round' stroke-opacity='1.0' stroke-width='3.0' /%3E %3Cpath d=' M 173.952, 71.052 173.952, 61.052 173.952, 59.801 173.952, 49.801 173.952, 48.550 173.952, 38.550 173.952, 37.299 173.952, 27.299 173.952, 26.048 163.952, 26.048 162.701, 26.048 152.701, 26.048 151.450, 26.048 141.450, 26.048 140.199, 26.048 130.199, 26.048 128.948, 26.048 128.948, 36.048 128.948, 37.299 138.948, 37.299 140.199, 37.299 150.199, 37.299 151.450, 37.299 161.450, 37.299 162.701, 37.299 162.701, 47.299 162.701, 48.550 162.701, 58.550 162.701, 59.801 162.701, 69.801 162.701, 71.052 172.701, 71.052 173.952, 71.052 ' fill='none' stroke='rgb(0, 0, 0)' stroke-linecap='butt' stroke-linejoin='round' stroke-opacity='1.0' stroke-width='3.0' /%3E %3Cpath d=' M 26.048, 128.948 26.048, 138.948 26.048, 140.199 26.048, 150.199 26.048, 151.450 26.048, 161.450 26.048, 162.701 26.048, 172.701 26.048, 173.952 36.048, 173.952 37.299, 173.952 47.299, 173.952 48.550, 173.952 58.550, 173.952 59.801, 173.952 69.801, 173.952 71.052, 173.952 71.052, 163.952 71.052, 162.701 61.052, 162.701 59.801, 162.701 49.801, 162.701 48.550, 162.701 38.550, 162.701 37.299, 162.701 37.299, 152.701 37.299, 151.450 37.299, 141.450 37.299, 140.199 37.299, 130.199 37.299, 128.948 27.299, 128.948 26.048, 128.948 ' fill='none' stroke='rgb(0, 0, 0)' stroke-linecap='butt' stroke-linejoin='round' stroke-opacity='1.0' stroke-width='3.0' /%3E %3Cpath d=' M 173.952, 128.948 163.952, 128.948 162.701, 128.948 162.701, 138.948 162.701, 140.199 162.701, 150.199 162.701, 151.450 162.701, 161.450 162.701, 162.701 152.701, 162.701 151.450, 162.701 141.450, 162.701 140.199, 162.701 130.199, 162.701 128.948, 162.701 128.948, 172.701 128.948, 173.952 138.948, 173.952 140.199, 173.952 150.199, 173.952 151.450, 173.952 161.450, 173.952 162.701, 173.952 172.701, 173.952 173.952, 173.952 173.952, 163.952 173.952, 162.701 173.952, 152.701 173.952, 151.450 173.952, 141.450 173.952, 140.199 173.952, 130.199 173.952, 128.948 ' fill='none' stroke='rgb(0, 0, 0)' stroke-linecap='butt' stroke-linejoin='round' stroke-opacity='1.0' stroke-width='3.0' /%3E %3C/g%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ "./src/asserts/mobile-motion.svg":
/*!***************************************!*\
  !*** ./src/asserts/mobile-motion.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3C?xml version='1.0' encoding='ascii'?%3E %3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape' height='200' version='1.1' width='200'%3E %3Cg id='ViewLayer_MobileFace' inkscape:groupmode='lineset' inkscape:label='View Layer_MobileFace'%3E %3Cg id='strokes' inkscape:groupmode='layer' inkscape:label='strokes'%3E %3Cstyle%3E .mobile-edge %7B%7D .mobile-face %7B%7D %3C/style%3E %3Cpath class='mobile-edge' d=' M 50.470, 136.428 50.470, 146.428 50.470, 156.428 50.470, 166.428 50.470, 176.428 50.470, 186.428 50.470, 188.701 60.470, 188.701 70.470, 188.701 80.470, 188.701 90.470, 188.701 100.470, 188.701 110.470, 188.701 120.470, 188.701 130.470, 188.701 140.470, 188.701 149.530, 188.701 149.530, 178.701 149.530, 168.701 149.530, 158.701 149.530, 148.701 149.530, 138.701 149.530, 128.701 149.530, 118.701 149.530, 108.701 149.530, 98.701 149.530, 88.701 149.530, 84.984 149.530, 80.104 149.530, 70.104 149.530, 60.104 149.530, 50.104 149.530, 40.104 149.530, 30.104 149.530, 20.104 149.530, 11.299 139.530, 11.299 129.530, 11.299 119.530, 11.299 109.530, 11.299 99.530, 11.299 89.530, 11.299 79.530, 11.299 69.530, 11.299 59.530, 11.299 50.470, 11.299 50.470, 21.299 50.470, 31.299 50.470, 41.299 50.470, 51.299 50.470, 61.299 50.470, 71.299 50.470, 80.730 50.470, 85.651 50.470, 95.651 50.470, 105.651 50.470, 115.651 50.470, 125.651 50.470, 128.518 ' fill='none' stroke='rgb(0, 0, 0)' stroke-linecap='butt' stroke-linejoin='round' stroke-opacity='1.0' stroke-width='3.0' /%3E %3Cpath class='mobile-face' d=' M 56.517, 129.102 56.517, 119.102 56.517, 109.102 56.517, 99.102 56.517, 89.102 56.517, 84.643 56.517, 79.853 56.517, 69.853 56.517, 59.853 56.517, 49.853 56.517, 39.853 56.517, 29.853 56.517, 19.853 56.517, 17.121 66.517, 17.121 76.517, 17.121 86.517, 17.121 96.517, 17.121 106.517, 17.121 116.517, 17.121 126.517, 17.121 136.517, 17.121 143.483, 17.121 143.483, 27.121 143.483, 37.121 143.483, 47.121 143.483, 57.121 143.483, 67.121 143.483, 77.121 143.483, 79.207 143.483, 83.957 143.483, 93.957 143.483, 103.957 143.483, 113.957 143.483, 123.957 143.483, 133.957 143.483, 143.957 143.483, 153.957 143.483, 163.957 143.483, 167.471 133.483, 167.471 123.483, 167.471 113.483, 167.471 103.483, 167.471 93.483, 167.471 83.483, 167.471 73.483, 167.471 63.483, 167.471 56.517, 167.471 56.517, 157.471 56.517, 147.471 56.517, 137.471 56.517, 137.048 ' fill='none' stroke='rgb(0, 0, 0)' stroke-linecap='butt' stroke-linejoin='round' stroke-opacity='1.0' stroke-width='3.0' /%3E %3Cpath d=' M 107.848, 177.360 107.697, 178.891 107.251, 180.363 106.525, 181.720 105.549, 182.910 104.360, 183.886 103.003, 184.611 101.531, 185.057 100.000, 185.208 98.469, 185.057 96.997, 184.611 95.640, 183.886 94.451, 182.910 93.475, 181.720 92.749, 180.363 92.303, 178.891 92.152, 177.360 92.303, 175.829 92.749, 174.357 93.475, 173.000 94.451, 171.811 95.640, 170.835 96.997, 170.109 98.469, 169.663 100.000, 169.512 101.531, 169.663 103.003, 170.109 104.360, 170.835 105.549, 171.811 106.525, 173.000 107.251, 174.357 107.697, 175.829 107.848, 177.360 ' fill='none' stroke='rgb(0, 0, 0)' stroke-linecap='butt' stroke-linejoin='round' stroke-opacity='1.0' stroke-width='3.0' /%3E %3C/g%3E %3C/g%3E %3Cg id='ViewLayer_Arrows' inkscape:groupmode='lineset' inkscape:label='View Layer_Arrows' xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape'%3E %3Cstyle%3E .arrow-head %7B fill: none; %7D %3C/style%3E %3Cg id='strokes' inkscape:groupmode='layer' inkscape:label='strokes' xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape'%3E %3Cpath d=' M 155.990, 129.790 156.111, 131.765 155.723, 133.286 154.939, 133.943 153.976, 133.573 153.093, 132.292 152.518, 130.448 152.398, 128.522 152.764, 127.013 153.527, 126.320 154.489, 126.642 155.394, 127.910 155.990, 129.790 ' fill='none' stroke='rgb(0, 0, 0)' stroke-linecap='butt' stroke-linejoin='round' stroke-opacity='1.0' stroke-width='3.0' /%3E %3Cpath d=' M 181.560, 118.529 181.488, 118.555 172.102, 122.007 169.363, 123.014 159.574, 125.057 153.527, 126.320 ' fill='none' stroke='rgb(0, 0, 0)' stroke-linecap='butt' stroke-linejoin='round' stroke-opacity='1.0' stroke-width='3.0' /%3E %3Cpath d=' M 154.939, 133.943 164.702, 131.778 171.442, 130.284 180.753, 126.636 184.082, 125.333 185.386, 124.550 193.597, 118.842 193.761, 118.729 197.700, 112.591 198.359, 111.142 198.235, 105.120 197.986, 103.636 194.443, 98.091 193.489, 97.073 187.303, 92.197 178.991, 87.968 169.572, 84.607 169.093, 84.436 159.403, 81.964 158.063, 81.622 149.530, 80.104 ' fill='none' stroke='rgb(0, 0, 0)' stroke-linecap='butt' stroke-linejoin='round' stroke-opacity='1.0' stroke-width='3.0' /%3E %3Cpath d=' M 192.170, 108.691 191.555, 109.550 188.249, 114.174 181.488, 118.555 ' fill='none' stroke='rgb(0, 0, 0)' stroke-linecap='butt' stroke-linejoin='round' stroke-opacity='1.0' stroke-width='3.0' /%3E %3Cpath d=' M 191.754, 104.657 191.715, 105.610 191.555, 109.550 ' fill='none' stroke='rgb(0, 0, 0)' stroke-linecap='butt' stroke-linejoin='round' stroke-opacity='1.0' stroke-width='3.0' /%3E %3Cpath d=' M 189.014, 100.858 189.228, 101.234 191.715, 105.610 ' fill='none' stroke='rgb(0, 0, 0)' stroke-linecap='butt' stroke-linejoin='round' stroke-opacity='1.0' stroke-width='3.0' /%3E %3Cpath d=' M 149.530, 84.984 156.452, 86.290 166.104, 88.904 166.987, 89.144 176.389, 92.714 184.221, 96.975 189.228, 101.234 ' fill='none' stroke='rgb(0, 0, 0)' stroke-linecap='butt' stroke-linejoin='round' stroke-opacity='1.0' stroke-width='3.0' /%3E %3Cpath d=' M 116.755, 82.036 121.385, 82.036 131.368, 82.624 133.371, 82.741 143.300, 83.935 143.483, 83.957 ' fill='none' stroke='rgb(0, 0, 0)' stroke-linecap='butt' stroke-linejoin='round' stroke-opacity='1.0' stroke-width='3.0' /%3E %3Cpath d=' M 143.483, 79.207 134.021, 78.133 124.037, 77.578 121.570, 77.441 116.776, 77.441 ' fill='none' stroke='rgb(0, 0, 0)' stroke-linecap='butt' stroke-linejoin='round' stroke-opacity='1.0' stroke-width='3.0' /%3E %3Cpath class='arrow-head' d=' M 116.803, 78.391 116.776, 77.441 116.732, 75.943 116.596, 74.548 116.433, 74.563 106.603, 76.403 96.774, 78.242 88.797, 79.735 98.626, 81.579 108.454, 83.423 116.541, 84.941 116.692, 83.617 116.755, 82.036 116.788, 81.214 116.803, 78.391 ' fill='none' stroke='rgb(0, 0, 0)' stroke-linecap='butt' stroke-linejoin='round' stroke-opacity='1.0' stroke-width='3.0' /%3E %3Cpath d=' M 65.691, 78.803 56.517, 79.853 ' fill='none' stroke='rgb(0, 0, 0)' stroke-linecap='butt' stroke-linejoin='round' stroke-opacity='1.0' stroke-width='3.0' /%3E %3Cpath d=' M 66.346, 83.452 66.487, 82.843 66.502, 81.766 66.387, 80.512 66.172, 79.425 65.917, 78.801 65.691, 78.803 ' fill='none' stroke='rgb(0, 0, 0)' stroke-linecap='butt' stroke-linejoin='round' stroke-opacity='1.0' stroke-width='3.0' /%3E %3Cpath d=' M 9.840, 102.301 14.943, 97.949 22.886, 93.605 32.227, 90.034 32.401, 89.967 42.049, 87.335 43.049, 87.062 50.470, 85.651 ' fill='none' stroke='rgb(0, 0, 0)' stroke-linecap='butt' stroke-linejoin='round' stroke-opacity='1.0' stroke-width='3.0' /%3E %3Cpath d=' M 50.470, 80.730 41.425, 82.352 31.739, 84.841 30.276, 85.217 20.864, 88.597 20.258, 88.815 11.827, 93.127 5.530, 98.103 4.567, 99.130 0.929, 104.795 0.679, 106.294 0.492, 112.454 1.161, 113.916 5.086, 120.202 13.247, 125.982 13.513, 126.171 14.839, 126.955 24.130, 130.654 27.605, 132.037 37.361, 134.233 44.307, 135.796 50.470, 136.428 56.517, 137.048 63.857, 137.801 71.629, 137.801 ' fill='none' stroke='rgb(0, 0, 0)' stroke-linecap='butt' stroke-linejoin='round' stroke-opacity='1.0' stroke-width='3.0' /%3E %3Cpath d=' M 17.559, 120.123 10.674, 115.581 7.392, 110.872 6.760, 109.966 ' fill='none' stroke='rgb(0, 0, 0)' stroke-linecap='butt' stroke-linejoin='round' stroke-opacity='1.0' stroke-width='3.0' /%3E %3Cpath d=' M 71.742, 129.868 64.444, 129.868 56.517, 129.102 50.470, 128.518 45.742, 128.061 35.959, 125.988 29.714, 124.665 20.347, 121.165 17.559, 120.123 17.395, 120.062 ' fill='none' stroke='rgb(0, 0, 0)' stroke-linecap='butt' stroke-linejoin='round' stroke-opacity='1.0' stroke-width='3.0' /%3E %3Cpath class='arrow-head' d=' M 118.698, 133.825 108.880, 131.926 99.062, 130.028 89.244, 128.129 79.426, 126.230 72.632, 124.916 72.176, 125.729 71.790, 128.791 71.742, 129.868 71.588, 133.310 71.629, 137.801 71.631, 137.997 71.906, 141.490 72.330, 142.832 82.146, 140.925 91.963, 139.018 101.779, 137.111 111.596, 135.205 118.698, 133.825 ' fill='none' stroke='rgb(0, 0, 0)' stroke-linecap='butt' stroke-linejoin='round' stroke-opacity='1.0' stroke-width='3.0' /%3E %3Cpath d=' M 7.392, 110.872 7.267, 106.804 7.237, 105.821 ' fill='none' stroke='rgb(0, 0, 0)' stroke-linecap='butt' stroke-linejoin='round' stroke-opacity='1.0' stroke-width='3.0' /%3E %3Cpath d=' M 7.267, 106.804 9.840, 102.301 10.057, 101.922 ' fill='none' stroke='rgb(0, 0, 0)' stroke-linecap='butt' stroke-linejoin='round' stroke-opacity='1.0' stroke-width='3.0' /%3E %3Cpath d=' M 56.517, 84.643 66.346, 83.452 ' fill='none' stroke='rgb(0, 0, 0)' stroke-linecap='butt' stroke-linejoin='round' stroke-opacity='1.0' stroke-width='3.0' /%3E %3C/g%3E %3C/g%3E %3C/svg%3E"

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
/* harmony import */ var _user_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-interface */ "./src/user-interface.js");








/**
 * Panorama.js. create panorama
 *
 * @param {Object} setting  the setting of panorama.js.
 * @param {string|Element} [setting.container=document.body] To specify which container that the panorama puts in, can be either css selector string(like "#id" ".clazzname" "div#id") or DOMElement(like document.querySelector("#id"), document.getElementById("id") ).
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
  canvas.className = _css_panorama_less__WEBPACK_IMPORTED_MODULE_2___default.a.mainCanvas;
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

  // UI controls

  // main panel that holds all control buttons
  const uiControlPanel = document.createElement("div");
  uiControlPanel.className = _css_panorama_less__WEBPACK_IMPORTED_MODULE_2___default.a.uiControlPanel;
  wrapper.appendChild(uiControlPanel);

  // the device orientation switch to enable and disable the orientation to control cameras
  const orientationSwitchHelper = Object(_user_interface__WEBPACK_IMPORTED_MODULE_3__["createOrientationSwitchHelper"])(uiControlPanel);
  const orientationSwitch = orientationSwitchHelper.create(setting.deviceOrientationEnabled); // init status of the switch

  // fullscreen DOM Element and toggle fullscreen
  const fullscreenSwitchHelper = Object(_user_interface__WEBPACK_IMPORTED_MODULE_3__["createFullscreenSwitchHelper"])(uiControlPanel);
  const fullscreenSwitch = fullscreenSwitchHelper.create(false);

  fullscreenSwitch.addEventListener("click", function(){
    fullscreenSwitchHelper.flip();
    Object(_user_interface__WEBPACK_IMPORTED_MODULE_3__["toggleFullscreen"])(wrapper);
  }, false);

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

    // Set viewport(the 4 paramters: x,y, width, height, (x,y) is left-top corner coordinate) of Webgl.
    // Tell WebGL how to convert from clip space to pixels
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

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

  // lock latitude range, not pass two poles
  const maxLat = Math.PI * (1 - 0.05); // 0.95
  const minLat = Math.PI * (0 + 0.05); // 0.05
  const clampLatitude = curry(clamp, [minLat, maxLat]);

  const {beforeUpdateCamera, updateCamera, finishUpdateCamera} = (function(){
    // store current latitude and longitude during dragging.
    // only update the actual latitude and longitude after finish dragging.
    let lat;
    let lon;

    function beforeUpdateCamera() {
      lat = latitude;
      lon = longitude;
    }

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

      latitude = delatLat+lat;
      longitude = deltaLon+lon;

      latitude = clampLatitude(latitude);

      // compute the lookAt vertice.
      targetPosition = latlonToVertex(latitude, longitude);

      needToRedraw = true; // redraw the scene
    }

    function finishUpdateCamera() {
      // update the actual varible latitude and longitude until dragging is done.
      // latitude = lat;
      // longitude = lon;
    }

    return {beforeUpdateCamera, updateCamera, finishUpdateCamera};
  })();

  // handle user input and control the camera, mouse and touch
  let mouseEventHandlers = userControlHandler(beforeUpdateCamera, updateCamera, finishUpdateCamera, false);
  let touchEventHandlers = userControlHandler(beforeUpdateCamera, updateCamera, finishUpdateCamera, true);


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

    // clamp latitude bewteen south and north poles.
    latitude = clampLatitude(latitude);

    targetPosition = latlonToVertex(latitude, longitude);
    needToRedraw = true;

  });
  // reigster device orientation event to window.
  window.addEventListener("deviceorientation", deviceOrientationHelper.handler, true);
  // bind click event on switch
  orientationSwitch.addEventListener("click", function(event) {
    const enabled = orientationSwitchHelper.flip(); // update switch status
    deviceOrientationHelper.setEnabled(enabled);
  }, false);
  // init status
  deviceOrientationHelper.setEnabled(setting.deviceOrientationEnabled);


  /**
   * Check the display size(`canvas.clientWidth` and `canvas.clientHeight`) whether it's changed.
   * Update the canvas render size(`canvas.width` and `canvas.height`) to the current display size.
   * And return `true` when the size is changed, otherwise `false`
   *
   * @return {boolean} true: need resize; false: no need.
   */
  function resize(){
    var pixelRatio = window.devicePixelRatio? window.devicePixelRatio: 1;

    const clientWidth = gl.canvas.clientWidth * pixelRatio;
    const clientHeight = gl.canvas.clientHeight * pixelRatio;

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

  function setEnabled(bool) {
    enabled = bool;
  }

  return {
    handler: deviceOrientationHandler,
    setEnabled
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
const userControlHandler = function (startDragCallback, draggingCallback, endDragCallback, isTouch, moveSpeed) {

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
    if(isTouch !== true){ // DO NOT prevent when is touch event. cause touch dragging problem and touch click not work.
      event.preventDefault();
    }

    isUserDragging = true;

    let {x, y} = getXY(event);
    startX = x;
    startY = y;

    startDragCallback();
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
    const ratio = loaded / total;
    if (!Number.isNaN(ratio)) {
      // actually have percentage number
      const percentageNum = `${(ratio * 100).toPrecision(3)}%`;
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
  },

  // whether or not to use the device's orientation(ceilphone oritation) to control the camera.
  // Be careful! Newer browsers may need the deviceorientation must be used in HTTPS.
  deviceOrientationEnabled: true,
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

/**
 * Clamp the value between min and max inclusively.
 * @param {Number Array} range the Array contains min and max.
 * @param {Number} x the target value will be clamped.
 * @return {Number} the clamped result number.
 */
function clamp(range, x){
  if(!range || range.length < 2){
    throw Error(`Value Error: The 'range' argument: '${range}',
      which is passed in 'clamp' function isn't a array of two numbers.
      It must contain min and max value. `);
  }
  const min = range[0], max = range[1];
  if (x < min) {
    x = min;
  }else if (x > max) {
    x = max;
  }
  return x;
}

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

/***/ "./src/user-interface.js":
/*!*******************************!*\
  !*** ./src/user-interface.js ***!
  \*******************************/
/*! exports provided: createFullscreenSwitchHelper, toggleFullscreen, createOrientationSwitchHelper, switchHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFullscreenSwitchHelper", function() { return createFullscreenSwitchHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleFullscreen", function() { return toggleFullscreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOrientationSwitchHelper", function() { return createOrientationSwitchHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchHelper", function() { return switchHelper; });
/* harmony import */ var _css_panorama_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/panorama.less */ "./src/css/panorama.less");
/* harmony import */ var _css_panorama_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_panorama_less__WEBPACK_IMPORTED_MODULE_0__);
/*
The user interface parts of panorama.js. A bunch of settings of panorama to control by user.
*/



/**
 *
 * @param {Element} target the target will be in fullscreen mode or exit fullscreen mode(back to normal)
 */
const toggleFullscreen = (function(){
  const prefixs = ["", "webkit", "moz", "ms"];

  // the methods in different broswers with corresponding prefix
  function requestFullscreen(target) {
    for (let i = 0; i < prefixs.length; i+=1){
      const prefix = prefixs[i];
      const methodName = prefix? `${prefix}RequestFullscreen` : "requestFullscreen";

      if(target[methodName]){
        target[methodName](); // call the corresponding method
      }
    }
  }

  function exitFullscreen() {
    for (let i = 0; i < prefixs.length; i+=1){
      const prefix = prefixs[i];
      const methodName = prefix? `${prefix}ExitFullscreen` : "ExitFullscreen";

      if(document[methodName]){
        document[methodName](); // call the corresponding method
      }
    }
  }

  return function (target) {
    if (!document.fullscreenElement) {
      // document.fullscreenElement would be null, if there's no fullscreen element.
      // only one element could be  in full-screen mode.
      requestFullscreen(target);
    } else {
      exitFullscreen();
    }
  };
})();

/**
 * The toggle button on user control pannel of UI. To enter or exit fullscreen.
 *
 * @param {Element} parent the parent DOM element to put the switch in
 */
function createFullscreenSwitchHelper(parent) {
  return switchHelper({
    parent: parent,
    className: _css_panorama_less__WEBPACK_IMPORTED_MODULE_0___default.a.fullscreenSwitch,
    onStateClassName: _css_panorama_less__WEBPACK_IMPORTED_MODULE_0___default.a.inFullscreen
  });
}


// the part that controls the device orientation(ceilphone motion)

/**
 * Create a DOMElement that is used to switch orientation status. Provide
 * the functions that enable and disable the orientation to work together.
 *
 * @param {Element} parent the parent DOMElement contains this switch
 */
function createOrientationSwitchHelper(parent) {
  return switchHelper({
    parent: parent,
    className: _css_panorama_less__WEBPACK_IMPORTED_MODULE_0___default.a.orientationSwitch,
    offStateClassName: _css_panorama_less__WEBPACK_IMPORTED_MODULE_0___default.a.disabled,
  });
}

/**
 * the helper includes functions that maintance a switch conponent:
 * create switch component, create the DOM element and also manage
 * the classname to change when the state is changed(on or off).
 *
 * @param {Object Literal} setting contains the settings of switch
 * @param {Element} setting.parent  the parent container, the switch would be put into it.
 * @param {string|string array} setting.className the switch's css class name. can be either one or multi ones.
 * @param {string|string array} [setting.onStateClassName=undefined] the switch on state class name,
 *  when switch is on, the DOM element would contains this classname. otherwise remove the classname when switch is off
 * @param {string|string array} [setting.offStateClassName=undefined] the opposite side of 'onStateClassName',
 *  when switch is off, contains the classname, otherwise remove this one.
 * @param {string} [setting.tagName="span"] the switch's DOM element tag, default is "span".
 * @return {Object Literal} return a object literal containsthe functions that to create and filp the switch.
 */
function switchHelper({parent, className, onStateClassName, offStateClassName, tagName}) {
  let el;
  let state;

  if(!tagName) {
    tagName = "span";
  }

  /**
   * Create the DOM elemnet of the switch.
   * @param {boolean} state the init state of the switch when is created. false is off true is on
   * @return {Element} the created DOM element.
   */
  function create(state=false) {
    if (typeof el === "undefined") { // create if not exists before
      el = createEl(tagName, className);
      parent.appendChild(el); // put inside of the container.
    }
    updateState(state);

    return el;
  }

  /**
   * change the state.
   * @param {boolean} _state the switch state would be change to
   *  the argument. false is off true is on.
   */
  function updateState(_state) {
    state = _state;
    if (!state) { // off state add off className or remove on className if specified
      if (offStateClassName) {el.classList.add(offStateClassName);}
      if (onStateClassName) {el.classList.remove(onStateClassName);}
    } else { // otherwise on state remove off className or add on className if specified
      if (onStateClassName) {el.classList.add(onStateClassName);}
      if (offStateClassName) {el.classList.remove(offStateClassName);}
    }
  }

  /**
   * flip the switch for continuous "on" or "off"
   * @return {bool} return the current state of switch. false is off true is on.
   */
  function flip(){
    state = !state; // flip state
    updateState(state);
    return state;
  }

  /**
   * @return {Element} get the reference of the switch's DOM element
   */
  function get(){
    return el;
  }

  return {
    create,
    get,
    updateState,
    flip
  };
}

/**
 * A helper function to create a DOM element.
 *
 * @param {string} tagName  the created DOM tag name, e.g "div", "span"
 * @param {string|string array} [classNames=""] the DOM element classes, could be a
 *  string specifies class name that can be single one or multi ones, e.g "my-button", "my-button disabled";
 *  also could be a string or string array contains a butch of class names, e.g ["my-button", "disabled"].
 *
 * @return {Element} the DOM element that is created
 */
function createEl(tagName, classNames="") {
  const el = document.createElement(tagName);

  if(typeof classNames !== "undefined"){
    el.className = Array.isArray(classNames) ?
      classNames.join(" ") : // array to string
      classNames; // string
  }
  return el;
}






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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYW5vcmFtYS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vcGFub3JhbWEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGFub3JhbWEvLi9zcmMvY3NzL3Bhbm9yYW1hLmxlc3MiLCJ3ZWJwYWNrOi8vcGFub3JhbWEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Bhbm9yYW1hLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wYW5vcmFtYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly9wYW5vcmFtYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vcGFub3JhbWEvLi9zcmMvYXNzZXJ0cy9leGl0LWZ1bGxzY3JlZW4uc3ZnIiwid2VicGFjazovL3Bhbm9yYW1hLy4vc3JjL2Fzc2VydHMvZnVsbHNjcmVlbi5zdmciLCJ3ZWJwYWNrOi8vcGFub3JhbWEvLi9zcmMvYXNzZXJ0cy9tb2JpbGUtbW90aW9uLnN2ZyIsIndlYnBhY2s6Ly9wYW5vcmFtYS8uL3NyYy9jc3MvcGFub3JhbWEubGVzcz9iNmNlIiwid2VicGFjazovL3Bhbm9yYW1hLy4vc3JjL3Bhbm9yYW1hLmpzIiwid2VicGFjazovL3Bhbm9yYW1hLy4vc3JjL3VzZXItaW50ZXJmYWNlLmpzIiwid2VicGFjazovL3Bhbm9yYW1hLy4vc3JjL3V0aWxzL200LmpzIiwid2VicGFjazovL3Bhbm9yYW1hLy4vc3JjL3dlYmdsLWhlbHBlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FB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R0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVB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UTtBQUNyQixhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLE9BQU87QUFDcEIsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsT0FBTztBQUNwQixhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsT0FBTztBQUNwQixhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QixhQUFhLFNBQVM7QUFDdEIsYUFBYSxTQUFTO0FBQ3RCLGFBQWEsUUFBUTtBQUNyQixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0EscUJBQXFCLE9BQU87QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUM1NUNEO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ087QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDhFOztBQUVBOztBQUVBLGlCQUFpQiw2QkFBNkI7QUFDOUMsbUJBQW1CLDJCQUEyQjtBQUM5QztBQUNBOztBQUVBLHVDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIseUJBQXlCO0FBQzFDLG1CQUFtQiwyQkFBMkI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDIiwiZmlsZSI6InBhbm9yYW1hLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicGFub3JhbWFcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wicGFub3JhbWFcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3Bhbm9yYW1hLmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gSW1wb3J0c1xudmFyIGdldFVybCA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vYXNzZXJ0cy9tb2JpbGUtbW90aW9uLnN2Z1wiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18xX19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9hc3NlcnRzL2Z1bGxzY3JlZW4uc3ZnXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzJfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL2Fzc2VydHMvZXhpdC1mdWxsc2NyZWVuLnN2Z1wiKSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5wYW5vcmFtYV9fY2VudGVyaW5nLS0xWDgzVyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG4ucGFub3JhbWFfX3dyYXBwZXItLTNNZWdDIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ucGFub3JhbWFfX292ZXJsYXktLVI1NFJPIHtcXG4gIC8qIG92ZXJsYXkgb24gdGhlIHBhcmVudCh3cmFwcGVyKSwgb25lJ3MgcG9zaXRpb24gaXMgcmVsYXRpdmUgYW5kXFxuICB0aGUgb3RoZXIgaXMgYWJzb2x1dGUuICovXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMUVCOUZGOyAqL1xcbn1cXG4ucGFub3JhbWFfX21haW5DYW52YXMtLTEyeDRuIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ucGFub3JhbWFfX3Byb2dyZXNzV3JhcHBlci0tMjJMZWIge1xcbiAgd2lkdGg6IDM1JTtcXG4gIGhlaWdodDogOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGRjtcXG59XFxuLnBhbm9yYW1hX19wcm9ncmVzc0Jhci0tUFNJU08ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4ucGFub3JhbWFfX3Byb2dyZXNzTWVzc2FnZS0tMkhXaUIge1xcbiAgY29sb3I6ICNGRkY7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLnBhbm9yYW1hX19wZXJjZW50YWdlTnVtLS0zVjJmRSB7XFxuICBjb2xvcjogI0ZGRjtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuLnBhbm9yYW1hX191aUNvbnRyb2xQYW5lbC0tMzJWSjcge1xcbiAgLyogbWFrZSBvbmUgd2hvbGUgbGluZSBiYXIsIHB1dCBvbiB0aGUgYm90dG9tICovXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiBpbmNsdWRlIHBhZGRpbmcgaW50byB3aWR0aCBhbmQgaGVpZ2h0IHNpemVzICovXFxuICBoZWlnaHQ6IDRlbTtcXG59XFxuLnBhbm9yYW1hX19jb250cm9sQnV0dG9uLS0zUkNsTCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDRlbTtcXG4gIHdpZHRoOiA0ZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMSwgMjExLCAyMTEsIDAuNik7XFxufVxcbi5wYW5vcmFtYV9fb3JpZW50YXRpb25Td2l0Y2gtLTI0UkcxIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG59XFxuLnBhbm9yYW1hX19mdWxsc2NyZWVuU3dpdGNoLS1kamVnaSB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzFfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxufVxcbi5wYW5vcmFtYV9fZnVsbHNjcmVlblN3aXRjaC0tZGplZ2kucGFub3JhbWFfX2luRnVsbHNjcmVlbi0tMV9yNmIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18yX19fICsgXCIpO1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiY2VudGVyaW5nXCI6IFwicGFub3JhbWFfX2NlbnRlcmluZy0tMVg4M1dcIixcblx0XCJ3cmFwcGVyXCI6IFwicGFub3JhbWFfX3dyYXBwZXItLTNNZWdDXCIsXG5cdFwib3ZlcmxheVwiOiBcInBhbm9yYW1hX19vdmVybGF5LS1SNTRST1wiLFxuXHRcIm1haW5DYW52YXNcIjogXCJwYW5vcmFtYV9fbWFpbkNhbnZhcy0tMTJ4NG5cIixcblx0XCJwcm9ncmVzc1dyYXBwZXJcIjogXCJwYW5vcmFtYV9fcHJvZ3Jlc3NXcmFwcGVyLS0yMkxlYiBwYW5vcmFtYV9fY2VudGVyaW5nLS0xWDgzV1wiLFxuXHRcInByb2dyZXNzQmFyXCI6IFwicGFub3JhbWFfX3Byb2dyZXNzQmFyLS1QU0lTT1wiLFxuXHRcInByb2dyZXNzTWVzc2FnZVwiOiBcInBhbm9yYW1hX19wcm9ncmVzc01lc3NhZ2UtLTJIV2lCXCIsXG5cdFwicGVyY2VudGFnZU51bVwiOiBcInBhbm9yYW1hX19wZXJjZW50YWdlTnVtLS0zVjJmRVwiLFxuXHRcInVpQ29udHJvbFBhbmVsXCI6IFwicGFub3JhbWFfX3VpQ29udHJvbFBhbmVsLS0zMlZKN1wiLFxuXHRcImNvbnRyb2xCdXR0b25cIjogXCJwYW5vcmFtYV9fY29udHJvbEJ1dHRvbi0tM1JDbExcIixcblx0XCJvcmllbnRhdGlvblN3aXRjaFwiOiBcInBhbm9yYW1hX19vcmllbnRhdGlvblN3aXRjaC0tMjRSRzEgcGFub3JhbWFfX2NvbnRyb2xCdXR0b24tLTNSQ2xMXCIsXG5cdFwiZnVsbHNjcmVlblN3aXRjaFwiOiBcInBhbm9yYW1hX19mdWxsc2NyZWVuU3dpdGNoLS1kamVnaSBwYW5vcmFtYV9fY29udHJvbEJ1dHRvbi0tM1JDbExcIixcblx0XCJpbkZ1bGxzY3JlZW5cIjogXCJwYW5vcmFtYV9faW5GdWxsc2NyZWVuLS0xX3I2YlwiXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwie1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW19pXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCIoXCIuY29uY2F0KGl0ZW1bMl0sIFwiKSBhbmQgKFwiKS5jb25jYXQobWVkaWFRdWVyeSwgXCIpXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgbmVlZFF1b3Rlcykge1xuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgbmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDP3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdhc2NpaSc/JTNFICUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGhlaWdodD0nMjAwJyB2ZXJzaW9uPScxLjEnIHdpZHRoPScyMDAnJTNFICUzQ2cgaWQ9J1ZpZXcgTGF5ZXJfTGluZVNldCcgaW5rc2NhcGU6Z3JvdXBtb2RlPSdsaW5lc2V0JyBpbmtzY2FwZTpsYWJlbD0nVmlldyBMYXllcl9MaW5lU2V0JyB4bWxuczppbmtzY2FwZT0naHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSclM0UgJTNDc3R5bGUlM0UgJTIzc3Ryb2tlcyAlM0UgKiAlN0IgZmlsbDogYmxhY2s7ICU3RCAlM0Mvc3R5bGUlM0UgJTNDZyBpZD0nc3Ryb2tlcycgaW5rc2NhcGU6Z3JvdXBtb2RlPSdsYXllcicgaW5rc2NhcGU6bGFiZWw9J3N0cm9rZXMnIHhtbG5zOmlua3NjYXBlPSdodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlJyUzRSAlM0NwYXRoIGQ9JyBNIDgxLjU0MywgMzYuNTM5IDcxLjU0MywgMzYuNTM5IDcwLjI5MiwgMzYuNTM5IDcwLjI5MiwgNDYuNTM5IDcwLjI5MiwgNDcuNzkwIDcwLjI5MiwgNTcuNzkwIDcwLjI5MiwgNTkuMDQxIDcwLjI5MiwgNjkuMDQxIDcwLjI5MiwgNzAuMjkyIDYwLjI5MiwgNzAuMjkyIDU5LjA0MSwgNzAuMjkyIDQ5LjA0MSwgNzAuMjkyIDQ3Ljc5MCwgNzAuMjkyIDM3Ljc5MCwgNzAuMjkyIDM2LjUzOSwgNzAuMjkyIDM2LjUzOSwgODAuMjkyIDM2LjUzOSwgODEuNTQzIDQ2LjUzOSwgODEuNTQzIDQ3Ljc5MCwgODEuNTQzIDU3Ljc5MCwgODEuNTQzIDU5LjA0MSwgODEuNTQzIDY5LjA0MSwgODEuNTQzIDcwLjI5MiwgODEuNTQzIDgwLjI5MiwgODEuNTQzIDgxLjU0MywgODEuNTQzIDgxLjU0MywgNzEuNTQzIDgxLjU0MywgNzAuMjkyIDgxLjU0MywgNjAuMjkyIDgxLjU0MywgNTkuMDQxIDgxLjU0MywgNDkuMDQxIDgxLjU0MywgNDcuNzkwIDgxLjU0MywgMzcuNzkwIDgxLjU0MywgMzYuNTM5ICcgZmlsbD0nbm9uZScgc3Ryb2tlPSdyZ2IoMCwgMCwgMCknIHN0cm9rZS1saW5lY2FwPSdidXR0JyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utb3BhY2l0eT0nMS4wJyBzdHJva2Utd2lkdGg9JzMuMCcgLyUzRSAlM0NwYXRoIGQ9JyBNIDExOC40NTcsIDM2LjUzOSAxMTguNDU3LCA0Ni41MzkgMTE4LjQ1NywgNDcuNzkwIDExOC40NTcsIDU3Ljc5MCAxMTguNDU3LCA1OS4wNDEgMTE4LjQ1NywgNjkuMDQxIDExOC40NTcsIDcwLjI5MiAxMTguNDU3LCA4MC4yOTIgMTE4LjQ1NywgODEuNTQzIDEyOC40NTcsIDgxLjU0MyAxMjkuNzA4LCA4MS41NDMgMTM5LjcwOCwgODEuNTQzIDE0MC45NTksIDgxLjU0MyAxNTAuOTU5LCA4MS41NDMgMTUyLjIxMCwgODEuNTQzIDE2Mi4yMTAsIDgxLjU0MyAxNjMuNDYxLCA4MS41NDMgMTYzLjQ2MSwgNzEuNTQzIDE2My40NjEsIDcwLjI5MiAxNTMuNDYxLCA3MC4yOTIgMTUyLjIxMCwgNzAuMjkyIDE0Mi4yMTAsIDcwLjI5MiAxNDAuOTU5LCA3MC4yOTIgMTMwLjk1OSwgNzAuMjkyIDEyOS43MDgsIDcwLjI5MiAxMjkuNzA4LCA2MC4yOTIgMTI5LjcwOCwgNTkuMDQxIDEyOS43MDgsIDQ5LjA0MSAxMjkuNzA4LCA0Ny43OTAgMTI5LjcwOCwgMzcuNzkwIDEyOS43MDgsIDM2LjUzOSAxMTkuNzA4LCAzNi41MzkgMTE4LjQ1NywgMzYuNTM5ICcgZmlsbD0nbm9uZScgc3Ryb2tlPSdyZ2IoMCwgMCwgMCknIHN0cm9rZS1saW5lY2FwPSdidXR0JyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utb3BhY2l0eT0nMS4wJyBzdHJva2Utd2lkdGg9JzMuMCcgLyUzRSAlM0NwYXRoIGQ9JyBNIDgxLjU0MywgMTYzLjQ2MSA4MS41NDMsIDE1My40NjEgODEuNTQzLCAxNTIuMjEwIDgxLjU0MywgMTQyLjIxMCA4MS41NDMsIDE0MC45NTkgODEuNTQzLCAxMzAuOTU5IDgxLjU0MywgMTI5LjcwOCA4MS41NDMsIDExOS43MDggODEuNTQzLCAxMTguNDU3IDcxLjU0MywgMTE4LjQ1NyA3MC4yOTIsIDExOC40NTcgNjAuMjkyLCAxMTguNDU3IDU5LjA0MSwgMTE4LjQ1NyA0OS4wNDEsIDExOC40NTcgNDcuNzkwLCAxMTguNDU3IDM3Ljc5MCwgMTE4LjQ1NyAzNi41MzksIDExOC40NTcgMzYuNTM5LCAxMjguNDU3IDM2LjUzOSwgMTI5LjcwOCA0Ni41MzksIDEyOS43MDggNDcuNzkwLCAxMjkuNzA4IDU3Ljc5MCwgMTI5LjcwOCA1OS4wNDEsIDEyOS43MDggNjkuMDQxLCAxMjkuNzA4IDcwLjI5MiwgMTI5LjcwOCA3MC4yOTIsIDEzOS43MDggNzAuMjkyLCAxNDAuOTU5IDcwLjI5MiwgMTUwLjk1OSA3MC4yOTIsIDE1Mi4yMTAgNzAuMjkyLCAxNjIuMjEwIDcwLjI5MiwgMTYzLjQ2MSA4MC4yOTIsIDE2My40NjEgODEuNTQzLCAxNjMuNDYxICcgZmlsbD0nbm9uZScgc3Ryb2tlPSdyZ2IoMCwgMCwgMCknIHN0cm9rZS1saW5lY2FwPSdidXR0JyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utb3BhY2l0eT0nMS4wJyBzdHJva2Utd2lkdGg9JzMuMCcgLyUzRSAlM0NwYXRoIGQ9JyBNIDExOC40NTcsIDE2My40NjEgMTI4LjQ1NywgMTYzLjQ2MSAxMjkuNzA4LCAxNjMuNDYxIDEyOS43MDgsIDE1My40NjEgMTI5LjcwOCwgMTUyLjIxMCAxMjkuNzA4LCAxNDIuMjEwIDEyOS43MDgsIDE0MC45NTkgMTI5LjcwOCwgMTMwLjk1OSAxMjkuNzA4LCAxMjkuNzA4IDEzOS43MDgsIDEyOS43MDggMTQwLjk1OSwgMTI5LjcwOCAxNTAuOTU5LCAxMjkuNzA4IDE1Mi4yMTAsIDEyOS43MDggMTYyLjIxMCwgMTI5LjcwOCAxNjMuNDYxLCAxMjkuNzA4IDE2My40NjEsIDExOS43MDggMTYzLjQ2MSwgMTE4LjQ1NyAxNTMuNDYxLCAxMTguNDU3IDE1Mi4yMTAsIDExOC40NTcgMTQyLjIxMCwgMTE4LjQ1NyAxNDAuOTU5LCAxMTguNDU3IDEzMC45NTksIDExOC40NTcgMTI5LjcwOCwgMTE4LjQ1NyAxMTkuNzA4LCAxMTguNDU3IDExOC40NTcsIDExOC40NTcgMTE4LjQ1NywgMTI4LjQ1NyAxMTguNDU3LCAxMjkuNzA4IDExOC40NTcsIDEzOS43MDggMTE4LjQ1NywgMTQwLjk1OSAxMTguNDU3LCAxNTAuOTU5IDExOC40NTcsIDE1Mi4yMTAgMTE4LjQ1NywgMTYyLjIxMCAxMTguNDU3LCAxNjMuNDYxICcgZmlsbD0nbm9uZScgc3Ryb2tlPSdyZ2IoMCwgMCwgMCknIHN0cm9rZS1saW5lY2FwPSdidXR0JyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utb3BhY2l0eT0nMS4wJyBzdHJva2Utd2lkdGg9JzMuMCcgLyUzRSAlM0MvZyUzRSAlM0MvZyUzRSAlM0Mvc3ZnJTNFXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQz94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nYXNjaWknPyUzRSAlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBoZWlnaHQ9JzIwMCcgdmVyc2lvbj0nMS4xJyB3aWR0aD0nMjAwJyUzRSAlM0NnIGlkPSdWaWV3IExheWVyX0xpbmVTZXQnIGlua3NjYXBlOmdyb3VwbW9kZT0nbGluZXNldCcgaW5rc2NhcGU6bGFiZWw9J1ZpZXcgTGF5ZXJfTGluZVNldCcgeG1sbnM6aW5rc2NhcGU9J2h0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUnJTNFICUzQ3N0eWxlJTNFICUyM3N0cm9rZXMgJTNFICogJTdCIGZpbGw6IGJsYWNrOyAlN0QgJTNDL3N0eWxlJTNFICUzQ2cgaWQ9J3N0cm9rZXMnIGlua3NjYXBlOmdyb3VwbW9kZT0nbGF5ZXInIGlua3NjYXBlOmxhYmVsPSdzdHJva2VzJyB4bWxuczppbmtzY2FwZT0naHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSclM0UgJTNDcGF0aCBkPScgTSAyNi4wNDgsIDcxLjA1MiAzNi4wNDgsIDcxLjA1MiAzNy4yOTksIDcxLjA1MiAzNy4yOTksIDYxLjA1MiAzNy4yOTksIDU5LjgwMSAzNy4yOTksIDQ5LjgwMSAzNy4yOTksIDQ4LjU1MCAzNy4yOTksIDM4LjU1MCAzNy4yOTksIDM3LjI5OSA0Ny4yOTksIDM3LjI5OSA0OC41NTAsIDM3LjI5OSA1OC41NTAsIDM3LjI5OSA1OS44MDEsIDM3LjI5OSA2OS44MDEsIDM3LjI5OSA3MS4wNTIsIDM3LjI5OSA3MS4wNTIsIDI3LjI5OSA3MS4wNTIsIDI2LjA0OCA2MS4wNTIsIDI2LjA0OCA1OS44MDEsIDI2LjA0OCA0OS44MDEsIDI2LjA0OCA0OC41NTAsIDI2LjA0OCAzOC41NTAsIDI2LjA0OCAzNy4yOTksIDI2LjA0OCAyNy4yOTksIDI2LjA0OCAyNi4wNDgsIDI2LjA0OCAyNi4wNDgsIDM2LjA0OCAyNi4wNDgsIDM3LjI5OSAyNi4wNDgsIDQ3LjI5OSAyNi4wNDgsIDQ4LjU1MCAyNi4wNDgsIDU4LjU1MCAyNi4wNDgsIDU5LjgwMSAyNi4wNDgsIDY5LjgwMSAyNi4wNDgsIDcxLjA1MiAnIGZpbGw9J25vbmUnIHN0cm9rZT0ncmdiKDAsIDAsIDApJyBzdHJva2UtbGluZWNhcD0nYnV0dCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLW9wYWNpdHk9JzEuMCcgc3Ryb2tlLXdpZHRoPSczLjAnIC8lM0UgJTNDcGF0aCBkPScgTSAxNzMuOTUyLCA3MS4wNTIgMTczLjk1MiwgNjEuMDUyIDE3My45NTIsIDU5LjgwMSAxNzMuOTUyLCA0OS44MDEgMTczLjk1MiwgNDguNTUwIDE3My45NTIsIDM4LjU1MCAxNzMuOTUyLCAzNy4yOTkgMTczLjk1MiwgMjcuMjk5IDE3My45NTIsIDI2LjA0OCAxNjMuOTUyLCAyNi4wNDggMTYyLjcwMSwgMjYuMDQ4IDE1Mi43MDEsIDI2LjA0OCAxNTEuNDUwLCAyNi4wNDggMTQxLjQ1MCwgMjYuMDQ4IDE0MC4xOTksIDI2LjA0OCAxMzAuMTk5LCAyNi4wNDggMTI4Ljk0OCwgMjYuMDQ4IDEyOC45NDgsIDM2LjA0OCAxMjguOTQ4LCAzNy4yOTkgMTM4Ljk0OCwgMzcuMjk5IDE0MC4xOTksIDM3LjI5OSAxNTAuMTk5LCAzNy4yOTkgMTUxLjQ1MCwgMzcuMjk5IDE2MS40NTAsIDM3LjI5OSAxNjIuNzAxLCAzNy4yOTkgMTYyLjcwMSwgNDcuMjk5IDE2Mi43MDEsIDQ4LjU1MCAxNjIuNzAxLCA1OC41NTAgMTYyLjcwMSwgNTkuODAxIDE2Mi43MDEsIDY5LjgwMSAxNjIuNzAxLCA3MS4wNTIgMTcyLjcwMSwgNzEuMDUyIDE3My45NTIsIDcxLjA1MiAnIGZpbGw9J25vbmUnIHN0cm9rZT0ncmdiKDAsIDAsIDApJyBzdHJva2UtbGluZWNhcD0nYnV0dCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLW9wYWNpdHk9JzEuMCcgc3Ryb2tlLXdpZHRoPSczLjAnIC8lM0UgJTNDcGF0aCBkPScgTSAyNi4wNDgsIDEyOC45NDggMjYuMDQ4LCAxMzguOTQ4IDI2LjA0OCwgMTQwLjE5OSAyNi4wNDgsIDE1MC4xOTkgMjYuMDQ4LCAxNTEuNDUwIDI2LjA0OCwgMTYxLjQ1MCAyNi4wNDgsIDE2Mi43MDEgMjYuMDQ4LCAxNzIuNzAxIDI2LjA0OCwgMTczLjk1MiAzNi4wNDgsIDE3My45NTIgMzcuMjk5LCAxNzMuOTUyIDQ3LjI5OSwgMTczLjk1MiA0OC41NTAsIDE3My45NTIgNTguNTUwLCAxNzMuOTUyIDU5LjgwMSwgMTczLjk1MiA2OS44MDEsIDE3My45NTIgNzEuMDUyLCAxNzMuOTUyIDcxLjA1MiwgMTYzLjk1MiA3MS4wNTIsIDE2Mi43MDEgNjEuMDUyLCAxNjIuNzAxIDU5LjgwMSwgMTYyLjcwMSA0OS44MDEsIDE2Mi43MDEgNDguNTUwLCAxNjIuNzAxIDM4LjU1MCwgMTYyLjcwMSAzNy4yOTksIDE2Mi43MDEgMzcuMjk5LCAxNTIuNzAxIDM3LjI5OSwgMTUxLjQ1MCAzNy4yOTksIDE0MS40NTAgMzcuMjk5LCAxNDAuMTk5IDM3LjI5OSwgMTMwLjE5OSAzNy4yOTksIDEyOC45NDggMjcuMjk5LCAxMjguOTQ4IDI2LjA0OCwgMTI4Ljk0OCAnIGZpbGw9J25vbmUnIHN0cm9rZT0ncmdiKDAsIDAsIDApJyBzdHJva2UtbGluZWNhcD0nYnV0dCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLW9wYWNpdHk9JzEuMCcgc3Ryb2tlLXdpZHRoPSczLjAnIC8lM0UgJTNDcGF0aCBkPScgTSAxNzMuOTUyLCAxMjguOTQ4IDE2My45NTIsIDEyOC45NDggMTYyLjcwMSwgMTI4Ljk0OCAxNjIuNzAxLCAxMzguOTQ4IDE2Mi43MDEsIDE0MC4xOTkgMTYyLjcwMSwgMTUwLjE5OSAxNjIuNzAxLCAxNTEuNDUwIDE2Mi43MDEsIDE2MS40NTAgMTYyLjcwMSwgMTYyLjcwMSAxNTIuNzAxLCAxNjIuNzAxIDE1MS40NTAsIDE2Mi43MDEgMTQxLjQ1MCwgMTYyLjcwMSAxNDAuMTk5LCAxNjIuNzAxIDEzMC4xOTksIDE2Mi43MDEgMTI4Ljk0OCwgMTYyLjcwMSAxMjguOTQ4LCAxNzIuNzAxIDEyOC45NDgsIDE3My45NTIgMTM4Ljk0OCwgMTczLjk1MiAxNDAuMTk5LCAxNzMuOTUyIDE1MC4xOTksIDE3My45NTIgMTUxLjQ1MCwgMTczLjk1MiAxNjEuNDUwLCAxNzMuOTUyIDE2Mi43MDEsIDE3My45NTIgMTcyLjcwMSwgMTczLjk1MiAxNzMuOTUyLCAxNzMuOTUyIDE3My45NTIsIDE2My45NTIgMTczLjk1MiwgMTYyLjcwMSAxNzMuOTUyLCAxNTIuNzAxIDE3My45NTIsIDE1MS40NTAgMTczLjk1MiwgMTQxLjQ1MCAxNzMuOTUyLCAxNDAuMTk5IDE3My45NTIsIDEzMC4xOTkgMTczLjk1MiwgMTI4Ljk0OCAnIGZpbGw9J25vbmUnIHN0cm9rZT0ncmdiKDAsIDAsIDApJyBzdHJva2UtbGluZWNhcD0nYnV0dCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLW9wYWNpdHk9JzEuMCcgc3Ryb2tlLXdpZHRoPSczLjAnIC8lM0UgJTNDL2clM0UgJTNDL2clM0UgJTNDL3N2ZyUzRVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0M/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J2FzY2lpJz8lM0UgJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6aW5rc2NhcGU9J2h0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUnIGhlaWdodD0nMjAwJyB2ZXJzaW9uPScxLjEnIHdpZHRoPScyMDAnJTNFICUzQ2cgaWQ9J1ZpZXdMYXllcl9Nb2JpbGVGYWNlJyBpbmtzY2FwZTpncm91cG1vZGU9J2xpbmVzZXQnIGlua3NjYXBlOmxhYmVsPSdWaWV3IExheWVyX01vYmlsZUZhY2UnJTNFICUzQ2cgaWQ9J3N0cm9rZXMnIGlua3NjYXBlOmdyb3VwbW9kZT0nbGF5ZXInIGlua3NjYXBlOmxhYmVsPSdzdHJva2VzJyUzRSAlM0NzdHlsZSUzRSAubW9iaWxlLWVkZ2UgJTdCJTdEIC5tb2JpbGUtZmFjZSAlN0IlN0QgJTNDL3N0eWxlJTNFICUzQ3BhdGggY2xhc3M9J21vYmlsZS1lZGdlJyBkPScgTSA1MC40NzAsIDEzNi40MjggNTAuNDcwLCAxNDYuNDI4IDUwLjQ3MCwgMTU2LjQyOCA1MC40NzAsIDE2Ni40MjggNTAuNDcwLCAxNzYuNDI4IDUwLjQ3MCwgMTg2LjQyOCA1MC40NzAsIDE4OC43MDEgNjAuNDcwLCAxODguNzAxIDcwLjQ3MCwgMTg4LjcwMSA4MC40NzAsIDE4OC43MDEgOTAuNDcwLCAxODguNzAxIDEwMC40NzAsIDE4OC43MDEgMTEwLjQ3MCwgMTg4LjcwMSAxMjAuNDcwLCAxODguNzAxIDEzMC40NzAsIDE4OC43MDEgMTQwLjQ3MCwgMTg4LjcwMSAxNDkuNTMwLCAxODguNzAxIDE0OS41MzAsIDE3OC43MDEgMTQ5LjUzMCwgMTY4LjcwMSAxNDkuNTMwLCAxNTguNzAxIDE0OS41MzAsIDE0OC43MDEgMTQ5LjUzMCwgMTM4LjcwMSAxNDkuNTMwLCAxMjguNzAxIDE0OS41MzAsIDExOC43MDEgMTQ5LjUzMCwgMTA4LjcwMSAxNDkuNTMwLCA5OC43MDEgMTQ5LjUzMCwgODguNzAxIDE0OS41MzAsIDg0Ljk4NCAxNDkuNTMwLCA4MC4xMDQgMTQ5LjUzMCwgNzAuMTA0IDE0OS41MzAsIDYwLjEwNCAxNDkuNTMwLCA1MC4xMDQgMTQ5LjUzMCwgNDAuMTA0IDE0OS41MzAsIDMwLjEwNCAxNDkuNTMwLCAyMC4xMDQgMTQ5LjUzMCwgMTEuMjk5IDEzOS41MzAsIDExLjI5OSAxMjkuNTMwLCAxMS4yOTkgMTE5LjUzMCwgMTEuMjk5IDEwOS41MzAsIDExLjI5OSA5OS41MzAsIDExLjI5OSA4OS41MzAsIDExLjI5OSA3OS41MzAsIDExLjI5OSA2OS41MzAsIDExLjI5OSA1OS41MzAsIDExLjI5OSA1MC40NzAsIDExLjI5OSA1MC40NzAsIDIxLjI5OSA1MC40NzAsIDMxLjI5OSA1MC40NzAsIDQxLjI5OSA1MC40NzAsIDUxLjI5OSA1MC40NzAsIDYxLjI5OSA1MC40NzAsIDcxLjI5OSA1MC40NzAsIDgwLjczMCA1MC40NzAsIDg1LjY1MSA1MC40NzAsIDk1LjY1MSA1MC40NzAsIDEwNS42NTEgNTAuNDcwLCAxMTUuNjUxIDUwLjQ3MCwgMTI1LjY1MSA1MC40NzAsIDEyOC41MTggJyBmaWxsPSdub25lJyBzdHJva2U9J3JnYigwLCAwLCAwKScgc3Ryb2tlLWxpbmVjYXA9J2J1dHQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS1vcGFjaXR5PScxLjAnIHN0cm9rZS13aWR0aD0nMy4wJyAvJTNFICUzQ3BhdGggY2xhc3M9J21vYmlsZS1mYWNlJyBkPScgTSA1Ni41MTcsIDEyOS4xMDIgNTYuNTE3LCAxMTkuMTAyIDU2LjUxNywgMTA5LjEwMiA1Ni41MTcsIDk5LjEwMiA1Ni41MTcsIDg5LjEwMiA1Ni41MTcsIDg0LjY0MyA1Ni41MTcsIDc5Ljg1MyA1Ni41MTcsIDY5Ljg1MyA1Ni41MTcsIDU5Ljg1MyA1Ni41MTcsIDQ5Ljg1MyA1Ni41MTcsIDM5Ljg1MyA1Ni41MTcsIDI5Ljg1MyA1Ni41MTcsIDE5Ljg1MyA1Ni41MTcsIDE3LjEyMSA2Ni41MTcsIDE3LjEyMSA3Ni41MTcsIDE3LjEyMSA4Ni41MTcsIDE3LjEyMSA5Ni41MTcsIDE3LjEyMSAxMDYuNTE3LCAxNy4xMjEgMTE2LjUxNywgMTcuMTIxIDEyNi41MTcsIDE3LjEyMSAxMzYuNTE3LCAxNy4xMjEgMTQzLjQ4MywgMTcuMTIxIDE0My40ODMsIDI3LjEyMSAxNDMuNDgzLCAzNy4xMjEgMTQzLjQ4MywgNDcuMTIxIDE0My40ODMsIDU3LjEyMSAxNDMuNDgzLCA2Ny4xMjEgMTQzLjQ4MywgNzcuMTIxIDE0My40ODMsIDc5LjIwNyAxNDMuNDgzLCA4My45NTcgMTQzLjQ4MywgOTMuOTU3IDE0My40ODMsIDEwMy45NTcgMTQzLjQ4MywgMTEzLjk1NyAxNDMuNDgzLCAxMjMuOTU3IDE0My40ODMsIDEzMy45NTcgMTQzLjQ4MywgMTQzLjk1NyAxNDMuNDgzLCAxNTMuOTU3IDE0My40ODMsIDE2My45NTcgMTQzLjQ4MywgMTY3LjQ3MSAxMzMuNDgzLCAxNjcuNDcxIDEyMy40ODMsIDE2Ny40NzEgMTEzLjQ4MywgMTY3LjQ3MSAxMDMuNDgzLCAxNjcuNDcxIDkzLjQ4MywgMTY3LjQ3MSA4My40ODMsIDE2Ny40NzEgNzMuNDgzLCAxNjcuNDcxIDYzLjQ4MywgMTY3LjQ3MSA1Ni41MTcsIDE2Ny40NzEgNTYuNTE3LCAxNTcuNDcxIDU2LjUxNywgMTQ3LjQ3MSA1Ni41MTcsIDEzNy40NzEgNTYuNTE3LCAxMzcuMDQ4ICcgZmlsbD0nbm9uZScgc3Ryb2tlPSdyZ2IoMCwgMCwgMCknIHN0cm9rZS1saW5lY2FwPSdidXR0JyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utb3BhY2l0eT0nMS4wJyBzdHJva2Utd2lkdGg9JzMuMCcgLyUzRSAlM0NwYXRoIGQ9JyBNIDEwNy44NDgsIDE3Ny4zNjAgMTA3LjY5NywgMTc4Ljg5MSAxMDcuMjUxLCAxODAuMzYzIDEwNi41MjUsIDE4MS43MjAgMTA1LjU0OSwgMTgyLjkxMCAxMDQuMzYwLCAxODMuODg2IDEwMy4wMDMsIDE4NC42MTEgMTAxLjUzMSwgMTg1LjA1NyAxMDAuMDAwLCAxODUuMjA4IDk4LjQ2OSwgMTg1LjA1NyA5Ni45OTcsIDE4NC42MTEgOTUuNjQwLCAxODMuODg2IDk0LjQ1MSwgMTgyLjkxMCA5My40NzUsIDE4MS43MjAgOTIuNzQ5LCAxODAuMzYzIDkyLjMwMywgMTc4Ljg5MSA5Mi4xNTIsIDE3Ny4zNjAgOTIuMzAzLCAxNzUuODI5IDkyLjc0OSwgMTc0LjM1NyA5My40NzUsIDE3My4wMDAgOTQuNDUxLCAxNzEuODExIDk1LjY0MCwgMTcwLjgzNSA5Ni45OTcsIDE3MC4xMDkgOTguNDY5LCAxNjkuNjYzIDEwMC4wMDAsIDE2OS41MTIgMTAxLjUzMSwgMTY5LjY2MyAxMDMuMDAzLCAxNzAuMTA5IDEwNC4zNjAsIDE3MC44MzUgMTA1LjU0OSwgMTcxLjgxMSAxMDYuNTI1LCAxNzMuMDAwIDEwNy4yNTEsIDE3NC4zNTcgMTA3LjY5NywgMTc1LjgyOSAxMDcuODQ4LCAxNzcuMzYwICcgZmlsbD0nbm9uZScgc3Ryb2tlPSdyZ2IoMCwgMCwgMCknIHN0cm9rZS1saW5lY2FwPSdidXR0JyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utb3BhY2l0eT0nMS4wJyBzdHJva2Utd2lkdGg9JzMuMCcgLyUzRSAlM0MvZyUzRSAlM0MvZyUzRSAlM0NnIGlkPSdWaWV3TGF5ZXJfQXJyb3dzJyBpbmtzY2FwZTpncm91cG1vZGU9J2xpbmVzZXQnIGlua3NjYXBlOmxhYmVsPSdWaWV3IExheWVyX0Fycm93cycgeG1sbnM6aW5rc2NhcGU9J2h0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUnJTNFICUzQ3N0eWxlJTNFIC5hcnJvdy1oZWFkICU3QiBmaWxsOiBub25lOyAlN0QgJTNDL3N0eWxlJTNFICUzQ2cgaWQ9J3N0cm9rZXMnIGlua3NjYXBlOmdyb3VwbW9kZT0nbGF5ZXInIGlua3NjYXBlOmxhYmVsPSdzdHJva2VzJyB4bWxuczppbmtzY2FwZT0naHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSclM0UgJTNDcGF0aCBkPScgTSAxNTUuOTkwLCAxMjkuNzkwIDE1Ni4xMTEsIDEzMS43NjUgMTU1LjcyMywgMTMzLjI4NiAxNTQuOTM5LCAxMzMuOTQzIDE1My45NzYsIDEzMy41NzMgMTUzLjA5MywgMTMyLjI5MiAxNTIuNTE4LCAxMzAuNDQ4IDE1Mi4zOTgsIDEyOC41MjIgMTUyLjc2NCwgMTI3LjAxMyAxNTMuNTI3LCAxMjYuMzIwIDE1NC40ODksIDEyNi42NDIgMTU1LjM5NCwgMTI3LjkxMCAxNTUuOTkwLCAxMjkuNzkwICcgZmlsbD0nbm9uZScgc3Ryb2tlPSdyZ2IoMCwgMCwgMCknIHN0cm9rZS1saW5lY2FwPSdidXR0JyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utb3BhY2l0eT0nMS4wJyBzdHJva2Utd2lkdGg9JzMuMCcgLyUzRSAlM0NwYXRoIGQ9JyBNIDE4MS41NjAsIDExOC41MjkgMTgxLjQ4OCwgMTE4LjU1NSAxNzIuMTAyLCAxMjIuMDA3IDE2OS4zNjMsIDEyMy4wMTQgMTU5LjU3NCwgMTI1LjA1NyAxNTMuNTI3LCAxMjYuMzIwICcgZmlsbD0nbm9uZScgc3Ryb2tlPSdyZ2IoMCwgMCwgMCknIHN0cm9rZS1saW5lY2FwPSdidXR0JyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utb3BhY2l0eT0nMS4wJyBzdHJva2Utd2lkdGg9JzMuMCcgLyUzRSAlM0NwYXRoIGQ9JyBNIDE1NC45MzksIDEzMy45NDMgMTY0LjcwMiwgMTMxLjc3OCAxNzEuNDQyLCAxMzAuMjg0IDE4MC43NTMsIDEyNi42MzYgMTg0LjA4MiwgMTI1LjMzMyAxODUuMzg2LCAxMjQuNTUwIDE5My41OTcsIDExOC44NDIgMTkzLjc2MSwgMTE4LjcyOSAxOTcuNzAwLCAxMTIuNTkxIDE5OC4zNTksIDExMS4xNDIgMTk4LjIzNSwgMTA1LjEyMCAxOTcuOTg2LCAxMDMuNjM2IDE5NC40NDMsIDk4LjA5MSAxOTMuNDg5LCA5Ny4wNzMgMTg3LjMwMywgOTIuMTk3IDE3OC45OTEsIDg3Ljk2OCAxNjkuNTcyLCA4NC42MDcgMTY5LjA5MywgODQuNDM2IDE1OS40MDMsIDgxLjk2NCAxNTguMDYzLCA4MS42MjIgMTQ5LjUzMCwgODAuMTA0ICcgZmlsbD0nbm9uZScgc3Ryb2tlPSdyZ2IoMCwgMCwgMCknIHN0cm9rZS1saW5lY2FwPSdidXR0JyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utb3BhY2l0eT0nMS4wJyBzdHJva2Utd2lkdGg9JzMuMCcgLyUzRSAlM0NwYXRoIGQ9JyBNIDE5Mi4xNzAsIDEwOC42OTEgMTkxLjU1NSwgMTA5LjU1MCAxODguMjQ5LCAxMTQuMTc0IDE4MS40ODgsIDExOC41NTUgJyBmaWxsPSdub25lJyBzdHJva2U9J3JnYigwLCAwLCAwKScgc3Ryb2tlLWxpbmVjYXA9J2J1dHQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS1vcGFjaXR5PScxLjAnIHN0cm9rZS13aWR0aD0nMy4wJyAvJTNFICUzQ3BhdGggZD0nIE0gMTkxLjc1NCwgMTA0LjY1NyAxOTEuNzE1LCAxMDUuNjEwIDE5MS41NTUsIDEwOS41NTAgJyBmaWxsPSdub25lJyBzdHJva2U9J3JnYigwLCAwLCAwKScgc3Ryb2tlLWxpbmVjYXA9J2J1dHQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS1vcGFjaXR5PScxLjAnIHN0cm9rZS13aWR0aD0nMy4wJyAvJTNFICUzQ3BhdGggZD0nIE0gMTg5LjAxNCwgMTAwLjg1OCAxODkuMjI4LCAxMDEuMjM0IDE5MS43MTUsIDEwNS42MTAgJyBmaWxsPSdub25lJyBzdHJva2U9J3JnYigwLCAwLCAwKScgc3Ryb2tlLWxpbmVjYXA9J2J1dHQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS1vcGFjaXR5PScxLjAnIHN0cm9rZS13aWR0aD0nMy4wJyAvJTNFICUzQ3BhdGggZD0nIE0gMTQ5LjUzMCwgODQuOTg0IDE1Ni40NTIsIDg2LjI5MCAxNjYuMTA0LCA4OC45MDQgMTY2Ljk4NywgODkuMTQ0IDE3Ni4zODksIDkyLjcxNCAxODQuMjIxLCA5Ni45NzUgMTg5LjIyOCwgMTAxLjIzNCAnIGZpbGw9J25vbmUnIHN0cm9rZT0ncmdiKDAsIDAsIDApJyBzdHJva2UtbGluZWNhcD0nYnV0dCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLW9wYWNpdHk9JzEuMCcgc3Ryb2tlLXdpZHRoPSczLjAnIC8lM0UgJTNDcGF0aCBkPScgTSAxMTYuNzU1LCA4Mi4wMzYgMTIxLjM4NSwgODIuMDM2IDEzMS4zNjgsIDgyLjYyNCAxMzMuMzcxLCA4Mi43NDEgMTQzLjMwMCwgODMuOTM1IDE0My40ODMsIDgzLjk1NyAnIGZpbGw9J25vbmUnIHN0cm9rZT0ncmdiKDAsIDAsIDApJyBzdHJva2UtbGluZWNhcD0nYnV0dCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLW9wYWNpdHk9JzEuMCcgc3Ryb2tlLXdpZHRoPSczLjAnIC8lM0UgJTNDcGF0aCBkPScgTSAxNDMuNDgzLCA3OS4yMDcgMTM0LjAyMSwgNzguMTMzIDEyNC4wMzcsIDc3LjU3OCAxMjEuNTcwLCA3Ny40NDEgMTE2Ljc3NiwgNzcuNDQxICcgZmlsbD0nbm9uZScgc3Ryb2tlPSdyZ2IoMCwgMCwgMCknIHN0cm9rZS1saW5lY2FwPSdidXR0JyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utb3BhY2l0eT0nMS4wJyBzdHJva2Utd2lkdGg9JzMuMCcgLyUzRSAlM0NwYXRoIGNsYXNzPSdhcnJvdy1oZWFkJyBkPScgTSAxMTYuODAzLCA3OC4zOTEgMTE2Ljc3NiwgNzcuNDQxIDExNi43MzIsIDc1Ljk0MyAxMTYuNTk2LCA3NC41NDggMTE2LjQzMywgNzQuNTYzIDEwNi42MDMsIDc2LjQwMyA5Ni43NzQsIDc4LjI0MiA4OC43OTcsIDc5LjczNSA5OC42MjYsIDgxLjU3OSAxMDguNDU0LCA4My40MjMgMTE2LjU0MSwgODQuOTQxIDExNi42OTIsIDgzLjYxNyAxMTYuNzU1LCA4Mi4wMzYgMTE2Ljc4OCwgODEuMjE0IDExNi44MDMsIDc4LjM5MSAnIGZpbGw9J25vbmUnIHN0cm9rZT0ncmdiKDAsIDAsIDApJyBzdHJva2UtbGluZWNhcD0nYnV0dCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLW9wYWNpdHk9JzEuMCcgc3Ryb2tlLXdpZHRoPSczLjAnIC8lM0UgJTNDcGF0aCBkPScgTSA2NS42OTEsIDc4LjgwMyA1Ni41MTcsIDc5Ljg1MyAnIGZpbGw9J25vbmUnIHN0cm9rZT0ncmdiKDAsIDAsIDApJyBzdHJva2UtbGluZWNhcD0nYnV0dCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLW9wYWNpdHk9JzEuMCcgc3Ryb2tlLXdpZHRoPSczLjAnIC8lM0UgJTNDcGF0aCBkPScgTSA2Ni4zNDYsIDgzLjQ1MiA2Ni40ODcsIDgyLjg0MyA2Ni41MDIsIDgxLjc2NiA2Ni4zODcsIDgwLjUxMiA2Ni4xNzIsIDc5LjQyNSA2NS45MTcsIDc4LjgwMSA2NS42OTEsIDc4LjgwMyAnIGZpbGw9J25vbmUnIHN0cm9rZT0ncmdiKDAsIDAsIDApJyBzdHJva2UtbGluZWNhcD0nYnV0dCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLW9wYWNpdHk9JzEuMCcgc3Ryb2tlLXdpZHRoPSczLjAnIC8lM0UgJTNDcGF0aCBkPScgTSA5Ljg0MCwgMTAyLjMwMSAxNC45NDMsIDk3Ljk0OSAyMi44ODYsIDkzLjYwNSAzMi4yMjcsIDkwLjAzNCAzMi40MDEsIDg5Ljk2NyA0Mi4wNDksIDg3LjMzNSA0My4wNDksIDg3LjA2MiA1MC40NzAsIDg1LjY1MSAnIGZpbGw9J25vbmUnIHN0cm9rZT0ncmdiKDAsIDAsIDApJyBzdHJva2UtbGluZWNhcD0nYnV0dCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLW9wYWNpdHk9JzEuMCcgc3Ryb2tlLXdpZHRoPSczLjAnIC8lM0UgJTNDcGF0aCBkPScgTSA1MC40NzAsIDgwLjczMCA0MS40MjUsIDgyLjM1MiAzMS43MzksIDg0Ljg0MSAzMC4yNzYsIDg1LjIxNyAyMC44NjQsIDg4LjU5NyAyMC4yNTgsIDg4LjgxNSAxMS44MjcsIDkzLjEyNyA1LjUzMCwgOTguMTAzIDQuNTY3LCA5OS4xMzAgMC45MjksIDEwNC43OTUgMC42NzksIDEwNi4yOTQgMC40OTIsIDExMi40NTQgMS4xNjEsIDExMy45MTYgNS4wODYsIDEyMC4yMDIgMTMuMjQ3LCAxMjUuOTgyIDEzLjUxMywgMTI2LjE3MSAxNC44MzksIDEyNi45NTUgMjQuMTMwLCAxMzAuNjU0IDI3LjYwNSwgMTMyLjAzNyAzNy4zNjEsIDEzNC4yMzMgNDQuMzA3LCAxMzUuNzk2IDUwLjQ3MCwgMTM2LjQyOCA1Ni41MTcsIDEzNy4wNDggNjMuODU3LCAxMzcuODAxIDcxLjYyOSwgMTM3LjgwMSAnIGZpbGw9J25vbmUnIHN0cm9rZT0ncmdiKDAsIDAsIDApJyBzdHJva2UtbGluZWNhcD0nYnV0dCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLW9wYWNpdHk9JzEuMCcgc3Ryb2tlLXdpZHRoPSczLjAnIC8lM0UgJTNDcGF0aCBkPScgTSAxNy41NTksIDEyMC4xMjMgMTAuNjc0LCAxMTUuNTgxIDcuMzkyLCAxMTAuODcyIDYuNzYwLCAxMDkuOTY2ICcgZmlsbD0nbm9uZScgc3Ryb2tlPSdyZ2IoMCwgMCwgMCknIHN0cm9rZS1saW5lY2FwPSdidXR0JyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utb3BhY2l0eT0nMS4wJyBzdHJva2Utd2lkdGg9JzMuMCcgLyUzRSAlM0NwYXRoIGQ9JyBNIDcxLjc0MiwgMTI5Ljg2OCA2NC40NDQsIDEyOS44NjggNTYuNTE3LCAxMjkuMTAyIDUwLjQ3MCwgMTI4LjUxOCA0NS43NDIsIDEyOC4wNjEgMzUuOTU5LCAxMjUuOTg4IDI5LjcxNCwgMTI0LjY2NSAyMC4zNDcsIDEyMS4xNjUgMTcuNTU5LCAxMjAuMTIzIDE3LjM5NSwgMTIwLjA2MiAnIGZpbGw9J25vbmUnIHN0cm9rZT0ncmdiKDAsIDAsIDApJyBzdHJva2UtbGluZWNhcD0nYnV0dCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLW9wYWNpdHk9JzEuMCcgc3Ryb2tlLXdpZHRoPSczLjAnIC8lM0UgJTNDcGF0aCBjbGFzcz0nYXJyb3ctaGVhZCcgZD0nIE0gMTE4LjY5OCwgMTMzLjgyNSAxMDguODgwLCAxMzEuOTI2IDk5LjA2MiwgMTMwLjAyOCA4OS4yNDQsIDEyOC4xMjkgNzkuNDI2LCAxMjYuMjMwIDcyLjYzMiwgMTI0LjkxNiA3Mi4xNzYsIDEyNS43MjkgNzEuNzkwLCAxMjguNzkxIDcxLjc0MiwgMTI5Ljg2OCA3MS41ODgsIDEzMy4zMTAgNzEuNjI5LCAxMzcuODAxIDcxLjYzMSwgMTM3Ljk5NyA3MS45MDYsIDE0MS40OTAgNzIuMzMwLCAxNDIuODMyIDgyLjE0NiwgMTQwLjkyNSA5MS45NjMsIDEzOS4wMTggMTAxLjc3OSwgMTM3LjExMSAxMTEuNTk2LCAxMzUuMjA1IDExOC42OTgsIDEzMy44MjUgJyBmaWxsPSdub25lJyBzdHJva2U9J3JnYigwLCAwLCAwKScgc3Ryb2tlLWxpbmVjYXA9J2J1dHQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS1vcGFjaXR5PScxLjAnIHN0cm9rZS13aWR0aD0nMy4wJyAvJTNFICUzQ3BhdGggZD0nIE0gNy4zOTIsIDExMC44NzIgNy4yNjcsIDEwNi44MDQgNy4yMzcsIDEwNS44MjEgJyBmaWxsPSdub25lJyBzdHJva2U9J3JnYigwLCAwLCAwKScgc3Ryb2tlLWxpbmVjYXA9J2J1dHQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS1vcGFjaXR5PScxLjAnIHN0cm9rZS13aWR0aD0nMy4wJyAvJTNFICUzQ3BhdGggZD0nIE0gNy4yNjcsIDEwNi44MDQgOS44NDAsIDEwMi4zMDEgMTAuMDU3LCAxMDEuOTIyICcgZmlsbD0nbm9uZScgc3Ryb2tlPSdyZ2IoMCwgMCwgMCknIHN0cm9rZS1saW5lY2FwPSdidXR0JyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utb3BhY2l0eT0nMS4wJyBzdHJva2Utd2lkdGg9JzMuMCcgLyUzRSAlM0NwYXRoIGQ9JyBNIDU2LjUxNywgODQuNjQzIDY2LjM0NiwgODMuNDUyICcgZmlsbD0nbm9uZScgc3Ryb2tlPSdyZ2IoMCwgMCwgMCknIHN0cm9rZS1saW5lY2FwPSdidXR0JyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utb3BhY2l0eT0nMS4wJyBzdHJva2Utd2lkdGg9JzMuMCcgLyUzRSAlM0MvZyUzRSAlM0MvZyUzRSAlM0Mvc3ZnJTNFXCIiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0xIS4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Bhbm9yYW1hLmxlc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMSEuLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wYW5vcmFtYS5sZXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0xIS4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Bhbm9yYW1hLmxlc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG00ICBmcm9tICcuL3V0aWxzL200JztcbmltcG9ydCB7IGluaXRTaGFkZXJQcm9ncmFtLCBjcmVhdGVTcGhlcmVWZXJ0aWNlcyB9IGZyb20gJy4vd2ViZ2wtaGVscGVyJztcblxuaW1wb3J0IGNsYXp6IGZyb20gXCIuL2Nzcy9wYW5vcmFtYS5sZXNzXCI7XG5pbXBvcnQge1xuICBjcmVhdGVPcmllbnRhdGlvblN3aXRjaEhlbHBlcixcbiAgY3JlYXRlRnVsbHNjcmVlblN3aXRjaEhlbHBlcixcbiAgdG9nZ2xlRnVsbHNjcmVlblxufSBmcm9tIFwiLi91c2VyLWludGVyZmFjZVwiO1xuXG4vKipcbiAqIFBhbm9yYW1hLmpzLiBjcmVhdGUgcGFub3JhbWFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0dGluZyAgdGhlIHNldHRpbmcgb2YgcGFub3JhbWEuanMuXG4gKiBAcGFyYW0ge3N0cmluZ3xFbGVtZW50fSBbc2V0dGluZy5jb250YWluZXI9ZG9jdW1lbnQuYm9keV0gVG8gc3BlY2lmeSB3aGljaCBjb250YWluZXIgdGhhdCB0aGUgcGFub3JhbWEgcHV0cyBpbiwgY2FuIGJlIGVpdGhlciBjc3Mgc2VsZWN0b3Igc3RyaW5nKGxpa2UgXCIjaWRcIiBcIi5jbGF6em5hbWVcIiBcImRpdiNpZFwiKSBvciBET01FbGVtZW50KGxpa2UgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpZFwiKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpZFwiKSApLlxuICogQHBhcmFtIHtzdHJpbmd9IHNldHRpbmcuc3JjIHRoZSBpbWFnZSB1cmwgb2YgdGhlIGFjdHVhbCBwYW5vcmFtYS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2V0dGluZy5mb3Y9OTBdIHRoZSBGaWVsZCBPZiBWaWV3IGluIGRlZ3JlZXMsIHRoZSBjYW1lcmEgdmlldyBhbmdsZSBzY29wZS5cbiAqIEBwYXJhbSB7bnVtYmVyIGFycmF5fSBbc2V0dGluZy5jYW1lcmFEZWdyZWU9WzAsMF1dIHR3byBudW1iZXJzIHJlcHJlc2VudCB0aGUgaG9yaXpvbmFsIGFuZCB2ZXJ0aWNhbCBkZWdyZWVzIG9mIGNhbWVyYSxcbiAqICBkZWZhdWx0IGlzIFswLDBdIHdoaWNoIG1lYW5zIHRoZSBkZWZhdWx0IHN0YXJ0IHBvaW50IG9mIHRoZSBwYW5vcmFtYSBpbWFnZS5cbiAqICB0aGUgZmlyc3QgbnVtYmVyIHJhbmdlcyBmcm9tIDAgdG8gMzYwIHdoaWNoIGlzIGhvcml6b25hbCBkZWdyZWUgd2hpY2ggaXMgdGhlIGRpcmVjdGlvbiB0aGF0IGNhbWVyYSBsb29rcyBvbiB0aGUgaG9yaXpvbi5cbiAqICB0aGUgc2Vjb25kIG51bWJlciByYW5nZXMgZnJvbSAtOTAgdG8gOTAgKHRvdGFsbHkgMTgwIGRlZ3JlZXMpICB3aGljaCBpcyB2ZXJ0aWNhbCBkZWdyZWVzIG9yIHRoZSBQaXRjaCBhbmdsZSB3aGVuIGxvb2sgdXAgb3IgbG9vayBkb3duLFxuICogIHBvc2l0aXZlIG51bWJlcnMoMCB0byA5MCkgYXJlIHRoZSBkZWdyZWVzIHRoYXQgbG9va3MgdXAsIDkwIGlzIHRoZSBub3J0aCBwb2xlKHRoZSB0b3ApO1xuICogIG5lZ2F0aXZlIG51bWJlcnMoLTkwIHRvIDApIGFyZSB0aGUgZGVncmVlcyB0aGF0IGxvb2tzIGRvd24sIC05MCBpcyB0aGUgc291dGggcG9sZSh0aGUgYm90dG9tKTtcbiAqL1xuZnVuY3Rpb24gcGFub3JhbWEoc2V0dGluZykge1xuXG4gIC8vIGNvbnN0IENMQVpaID0gJ3Bhbm9yYW1hJzsgLy8gY3NzIGNsYXNzIG5hbWUuIFtOT1QgVVNFRCBZRVRdXG5cbiAgc2V0dGluZyA9IGhhbmRsZVNldHRpbmcoc2V0dGluZyk7XG5cbiAgY29uc3Qge2NvbnRhaW5lciwgdXJsLCBmb3YsIGNhbWVyYURlZ3JlZX0gPSBzZXR0aW5nO1xuICBjb25zdCB7cmFkaXVzLCBudW1WZXJ0aWNhbFNlZ21lbnRzLCBudW1Ib3Jpem9uYWxTZWdlbWVudHN9ID0gc2V0dGluZy5zcGhlcmU7XG5cbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgY2FudmFzLmNsYXNzTmFtZSA9IGNsYXp6Lm1haW5DYW52YXM7XG4gIGNhbnZhcy53aWR0aCA9IGNvbnRhaW5lci5jbGllbnRXaWR0aDtcbiAgY2FudmFzLmhlaWdodCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG5cbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChjbGF6ei53cmFwcGVyKTtcblxuICAvLyB1c2VyIGNvbnRhaW5lciA+IHdyYXBwZXIgPiBjYW52YXNcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKGNhbnZhcyk7XG5cbiAgLy8gb3ZlcmxheVxuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgb3ZlcmxheS5jbGFzc05hbWUgPSBjbGF6ei5vdmVybGF5O1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuXG4gIGNvbnN0IGdsID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJnbFwiKTsgLy8gZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuXG4gIC8vIFVJIGNvbnRyb2xzXG5cbiAgLy8gbWFpbiBwYW5lbCB0aGF0IGhvbGRzIGFsbCBjb250cm9sIGJ1dHRvbnNcbiAgY29uc3QgdWlDb250cm9sUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB1aUNvbnRyb2xQYW5lbC5jbGFzc05hbWUgPSBjbGF6ei51aUNvbnRyb2xQYW5lbDtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZCh1aUNvbnRyb2xQYW5lbCk7XG5cbiAgLy8gdGhlIGRldmljZSBvcmllbnRhdGlvbiBzd2l0Y2ggdG8gZW5hYmxlIGFuZCBkaXNhYmxlIHRoZSBvcmllbnRhdGlvbiB0byBjb250cm9sIGNhbWVyYXNcbiAgY29uc3Qgb3JpZW50YXRpb25Td2l0Y2hIZWxwZXIgPSBjcmVhdGVPcmllbnRhdGlvblN3aXRjaEhlbHBlcih1aUNvbnRyb2xQYW5lbCk7XG4gIGNvbnN0IG9yaWVudGF0aW9uU3dpdGNoID0gb3JpZW50YXRpb25Td2l0Y2hIZWxwZXIuY3JlYXRlKHNldHRpbmcuZGV2aWNlT3JpZW50YXRpb25FbmFibGVkKTsgLy8gaW5pdCBzdGF0dXMgb2YgdGhlIHN3aXRjaFxuXG4gIC8vIGZ1bGxzY3JlZW4gRE9NIEVsZW1lbnQgYW5kIHRvZ2dsZSBmdWxsc2NyZWVuXG4gIGNvbnN0IGZ1bGxzY3JlZW5Td2l0Y2hIZWxwZXIgPSBjcmVhdGVGdWxsc2NyZWVuU3dpdGNoSGVscGVyKHVpQ29udHJvbFBhbmVsKTtcbiAgY29uc3QgZnVsbHNjcmVlblN3aXRjaCA9IGZ1bGxzY3JlZW5Td2l0Y2hIZWxwZXIuY3JlYXRlKGZhbHNlKTtcblxuICBmdWxsc2NyZWVuU3dpdGNoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgIGZ1bGxzY3JlZW5Td2l0Y2hIZWxwZXIuZmxpcCgpO1xuICAgIHRvZ2dsZUZ1bGxzY3JlZW4od3JhcHBlcik7XG4gIH0sIGZhbHNlKTtcblxuICAvLyBub3Qgc3VwcG9ydCBXZWJnbFxuICBpZiAoZ2wgPT09IG51bGwpIHtcbiAgICAvLyBUT0RPIHdhcm5pZyB0aGUgbXNnIHRoYXQgd2ViZ2wgaXNuJ3QgYXZhaWFibGUuXG4gICAgdGhyb3cgRXJyb3Ioe1xuICAgICAgdHlwZTogXCJOb3Qgc3VwcG9ydCBXZWJHTFwiLFxuICAgICAgbXNnOiBcIldlYkdMIGlzbid0IHN1cHBvcnQuIHRoZSBwYW5vcmFtYSB3aWxsIG5vdCB3b3JrLlwiLFxuICAgIH0pO1xuICB9XG5cbiAgZ2wuZW5hYmxlKGdsLkNVTExfRkFDRSk7IC8vIG9ubHkgZHJhdyB0aGUgZnJvbnQgZmFjZSB3aGljaCB0aGUgdmVydGljZXMgaXMgZHJhd24gY2xvY2t3aXNlLlxuICAvLyBTZXQgY2xlYXIgY29sb3IgdG8gYmxhY2ssIGZ1bGx5IG9wYXF1ZVxuICBnbC5jbGVhckNvbG9yKDAuMCwgMC4wLCAwLjAsIDEuMCk7XG4gIC8vIENsZWFyIHRoZSBjb2xvciBidWZmZXIgd2l0aCBzcGVjaWZpZWQgY2xlYXIgY29sb3JcbiAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XG5cblxuICAvLyBWZXJ0ZXggc2hhZGVyIHByb2dyYW1cbiAgY29uc3QgdnNTb3VyY2UgPSBgXG4gICAgYXR0cmlidXRlIHZlYzQgYVZlcnRleFBvc2l0aW9uO1xuICAgIGF0dHJpYnV0ZSB2ZWMyIGFUZXh0dXJlQ29vcmRpbmF0ZTtcblxuICAgIHVuaWZvcm0gbWF0NCB1TW9kZWxWaWV3TWF0cml4O1xuICAgIHVuaWZvcm0gbWF0NCB1UHJvamVjdGlvbk1hdHJpeDtcblxuICAgIHZhcnlpbmcgaGlnaHAgdmVjMiB2VGV4dHVyZUNvb3JkaW5hdGU7XG5cbiAgICB2b2lkIG1haW4oKSB7XG4gICAgICBnbF9Qb3NpdGlvbiA9IHVQcm9qZWN0aW9uTWF0cml4ICogdU1vZGVsVmlld01hdHJpeCAqIGFWZXJ0ZXhQb3NpdGlvbjtcbiAgICAgIHZUZXh0dXJlQ29vcmRpbmF0ZSA9IGFUZXh0dXJlQ29vcmRpbmF0ZTtcbiAgICB9XG4gIGA7XG5cbiAgLy8gRnJhZ21lbnQgc2hhZGVyIHByb2dyYW1cbiAgY29uc3QgZnNTb3VyY2UgPSBgXG4gICAgdmFyeWluZyBoaWdocCB2ZWMyIHZUZXh0dXJlQ29vcmRpbmF0ZTtcblxuICAgIHVuaWZvcm0gc2FtcGxlcjJEIHVTYW1wbGVyO1xuXG4gICAgdm9pZCBtYWluKHZvaWQpIHtcbiAgICAgIGdsX0ZyYWdDb2xvciA9IHRleHR1cmUyRCh1U2FtcGxlciwgdlRleHR1cmVDb29yZGluYXRlKTtcbiAgICB9XG4gIGA7XG5cbiAgY29uc3Qgc2hhZGVyUHJvZ3JhbSA9IGluaXRTaGFkZXJQcm9ncmFtKGdsLCB2c1NvdXJjZSwgZnNTb3VyY2UpO1xuXG4gIGNvbnN0IHByb2dyYW1JbmZvID0ge1xuICAgIHByb2dyYW06IHNoYWRlclByb2dyYW0sXG4gICAgYXR0cmliTG9jYXRpb25zOiB7XG4gICAgICB2ZXJ0ZXhQb3NpdGlvbjogZ2wuZ2V0QXR0cmliTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ2FWZXJ0ZXhQb3NpdGlvbicpLFxuICAgICAgdGV4dHVyZUNvb3JkaW5hdGU6IGdsLmdldEF0dHJpYkxvY2F0aW9uKHNoYWRlclByb2dyYW0sICdhVGV4dHVyZUNvb3JkaW5hdGUnKSxcbiAgICB9LFxuICAgIHVuaWZvcm1Mb2NhdGlvbnM6IHtcbiAgICAgIHByb2plY3Rpb25NYXRyaXg6IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAndVByb2plY3Rpb25NYXRyaXgnKSxcbiAgICAgIG1vZGVsVmlld01hdHJpeDogZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICd1TW9kZWxWaWV3TWF0cml4JyksXG4gICAgICB1U2FtcGxlcjogZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICd1U2FtcGxlcicpLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gY3JlYXRlIG9uZSBzcGhlcmUgdmVydGljZXNcbiAgY29uc3Qgc3BoZXJlVmVydGljZXMgPSBjcmVhdGVTcGhlcmVWZXJ0aWNlcyhyYWRpdXMsIG51bVZlcnRpY2FsU2VnbWVudHMsIG51bUhvcml6b25hbFNlZ2VtZW50cyk7XG5cbiAgLy8gY3JlYXRlIG9uZSBwcm9ncmVzcyBoZWxwZXIgZnVuY3Rpb24gdG8gY29udHJvbCBsb2FkaW5nIGluZm8uXG4gIGNvbnN0IGxvYWRpbmdQcm9ncmVzc0hlbHBlciA9IGxvYWRpbmdQcm9ncmVzc0ZhY3Rvcnkob3ZlcmxheSwgXCJsb2FkaW5nIHBhbm9yYW1hLi4uXCIpO1xuXG4gIGNvbnN0IGdsX2xvYWRUZXh0dXJlID0gY3VycnkobG9hZFRleHR1cmUsIGdsKTsgLy8gbWV0aG9kLCBmaXJzdCBhcmd1bWVudFxuICBjb25zdCB0ZXh0dXJlID0gZ2xfbG9hZFRleHR1cmUoXG4gICAgdXJsLFxuICAgICgpPT57IC8vIGNhbGxiYWNrIGFmdGVyIGZpbmlzaGluZyB0byBsb2FkIHRoZSB0ZXh0dXJlXG4gICAgICBsb2FkaW5nUHJvZ3Jlc3NIZWxwZXIuaGlkZSgpOyAvLyBoaWRlIHByb2dyZXNzIGluZm9cbiAgICAgIG5lZWRUb1JlZHJhdyA9IHRydWU7XG4gICAgfSxcbiAgICBsb2FkaW5nUHJvZ3Jlc3NIZWxwZXIuY3JlYXRlT3JVcGRhdGUgLy8gY2FsbGJhY2sgd2hpbGUgbG9hZGluZ1xuICApO1xuXG4gIGNvbnN0IGJ1ZmZlcnMgPSBpbml0QnVmZmVycyhnbCk7XG4gIGZ1bmN0aW9uIGluaXRCdWZmZXJzKGdsKSB7XG5cbiAgICAvLyBwb3NpdGlvbiBidWZmZXIgcGFydHNcbiAgICBjb25zdCBwb3NpdGlvbnMgPSBzcGhlcmVWZXJ0aWNlcy5wb2lzdGlvbnMuZmxhdCgpO1xuXG4gICAgY29uc3QgcG9zaXRpb25CdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgcG9zaXRpb25CdWZmZXIpO1xuICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KHBvc2l0aW9ucyksXG4gICAgICBnbC5TVEFUSUNfRFJBVyk7XG5cbiAgICAvLyB0ZXh0dXJlIHBhcnRzXG4gICAgY29uc3QgdGV4dHVyZUNvb3JkcyA9IHNwaGVyZVZlcnRpY2VzLnRleHR1cmVDb29yZGluYXRlcy5mbGF0KCk7XG5cbiAgICBjb25zdCB0ZXh0dXJlQ29vcmRCdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGV4dHVyZUNvb3JkQnVmZmVyKTtcbiAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheSh0ZXh0dXJlQ29vcmRzKSwgZ2wuU1RBVElDX0RSQVcpO1xuXG4gICAgLy8gYnVpbGQgdGhlIGVsZW1lbnQgYXJyYXkuXG4gICAgY29uc3QgaW5kaWNlcyA9IHNwaGVyZVZlcnRpY2VzLmluZGljZXMuZmxhdCgpO1xuXG4gICAgY29uc3QgaW5kZXhCdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBpbmRleEJ1ZmZlcik7XG4gICAgZ2wuYnVmZmVyRGF0YShnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgbmV3IFVpbnQxNkFycmF5KGluZGljZXMpLFxuICAgICAgZ2wuU1RBVElDX0RSQVcpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbkJ1ZmZlcixcbiAgICAgIHRleHR1cmVDb29yZGluYXRlOiB0ZXh0dXJlQ29vcmRCdWZmZXIsXG4gICAgICBpbmRpY2VzOiBpbmRleEJ1ZmZlcixcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENhcmVmdWxseSEgdGhlIHJhbmdlIG9mIHVzZXIgc2V0dGluZyB2ZXJ0aWNhbCBkZWdyZWVzICgtOTAgdG8gOTApIGlzXG4gICAqIHRoZSByZXZlcnNlZCBvcmRlciBvZiB0aGUgbGF0aXR1ZGUoMCB0byBNYXRoLlBJKSB0aGF0IGRldmVsb3BzIG5lZWQsIGFsc28gd2l0aCB0aGUgb2Zmc2V0IG9mIGhhbGYgb2YgUEkuXG4gICAqIGxhdGl0dWRlIDAgbWVhbnMgdGhlIG5vcnRoIHBvbGUodGhlIHRvcCkgdGhhdCBpcyB0aGUgdXNlciBzZXR0aW5nIGRlZ3JlZSA5MC5cbiAgICpcbiAgICogV2h5IG1ha2UgdXNlciBzZXR0aW5nIGFuZCBhY3R1YWwgZGF0YSBzdWNoIGRpZmZlcmVudD9cbiAgICogQW53c2VyOiBlYXN5IGZvciB1c2UuIGBbMCwwXWBhcyBzdGFydHBvaW50IG1hdGNoZXMgdGhlIG1hbidzIGludHVpdGlvbi5cbiAgICovXG4gIGxldCB7bGF0aXR1ZGUsIGxvbmdpdHVkZX0gPSB1c2VyQ2FtZXJhRGVncmVlVG9MYXRMb24oY2FtZXJhRGVncmVlKTtcbiAgbGV0IHRhcmdldFBvc2l0aW9uID0gbGF0bG9uVG9WZXJ0ZXgobGF0aXR1ZGUsIGxvbmdpdHVkZSk7IC8vIGNhbWVyYSB0YXJnZXQgcG9zaXRpb25cblxuICBmdW5jdGlvbiBkcmF3U2NlbmUoZ2wsIHByb2dyYW1JbmZvLCBidWZmZXJzKSB7XG4gICAgZ2wuY2xlYXJDb2xvcigwLjAsIDAuMCwgMC4wLCAxLjApOyAgLy8gQ2xlYXIgdG8gYmxhY2ssIGZ1bGx5IG9wYXF1ZVxuICAgIGdsLmNsZWFyRGVwdGgoMS4wKTsgICAgICAgICAgICAgICAgIC8vIENsZWFyIGV2ZXJ5dGhpbmdcbiAgICBnbC5lbmFibGUoZ2wuREVQVEhfVEVTVCk7ICAgICAgICAgICAvLyBFbmFibGUgZGVwdGggdGVzdGluZ1xuICAgIGdsLmRlcHRoRnVuYyhnbC5MRVFVQUwpOyAgICAgICAgICAgIC8vIE5lYXIgdGhpbmdzIG9ic2N1cmUgZmFyIHRoaW5nc1xuXG4gICAgLy8gU2V0IHZpZXdwb3J0KHRoZSA0IHBhcmFtdGVyczogeCx5LCB3aWR0aCwgaGVpZ2h0LCAoeCx5KSBpcyBsZWZ0LXRvcCBjb3JuZXIgY29vcmRpbmF0ZSkgb2YgV2ViZ2wuXG4gICAgLy8gVGVsbCBXZWJHTCBob3cgdG8gY29udmVydCBmcm9tIGNsaXAgc3BhY2UgdG8gcGl4ZWxzXG4gICAgZ2wudmlld3BvcnQoMCwgMCwgZ2wuY2FudmFzLndpZHRoLCBnbC5jYW52YXMuaGVpZ2h0KTtcblxuICAgIC8vIENsZWFyIHRoZSBjYW52YXMgYmVmb3JlIHdlIHN0YXJ0IGRyYXdpbmcgb24gaXQuXG5cbiAgICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUIHwgZ2wuREVQVEhfQlVGRkVSX0JJVCk7XG5cbiAgICAvLyBDcmVhdGUgYSBwZXJzcGVjdGl2ZSBtYXRyaXgsIGEgc3BlY2lhbCBtYXRyaXggdGhhdCBpc1xuICAgIC8vIHVzZWQgdG8gc2ltdWxhdGUgdGhlIGRpc3RvcnRpb24gb2YgcGVyc3BlY3RpdmUgaW4gYSBjYW1lcmEuXG4gICAgLy8gT3VyIGZpZWxkIG9mIHZpZXcgaXMgNDUgZGVncmVlcywgd2l0aCBhIHdpZHRoL2hlaWdodFxuICAgIC8vIHJhdGlvIHRoYXQgbWF0Y2hlcyB0aGUgZGlzcGxheSBzaXplIG9mIHRoZSBjYW52YXNcbiAgICAvLyBhbmQgd2Ugb25seSB3YW50IHRvIHNlZSBvYmplY3RzIGJldHdlZW4gMC4xIHVuaXRzXG4gICAgLy8gYW5kIDEwMCB1bml0cyBhd2F5IGZyb20gdGhlIGNhbWVyYS5cblxuICAgIGNvbnN0IGZpZWxkT2ZWaWV3ID0gZm92ICogTWF0aC5QSSAvIDE4MDsgICAvLyBpbiByYWRpYW5zXG4gICAgY29uc3QgYXNwZWN0ID0gZ2wuY2FudmFzLmNsaWVudFdpZHRoIC8gZ2wuY2FudmFzLmNsaWVudEhlaWdodDtcbiAgICBjb25zdCB6TmVhciA9IDAuMTtcbiAgICBjb25zdCB6RmFyID0gMTAwLjA7XG4gICAgY29uc3QgcHJvamVjdGlvbk1hdHJpeCA9IG00LnBlcnNwZWN0aXZlKFxuICAgICAgZmllbGRPZlZpZXcsXG4gICAgICBhc3BlY3QsXG4gICAgICB6TmVhcixcbiAgICAgIHpGYXIpO1xuXG4gICAgLy8gQ2FtZXJhIG1hdHJpeFxuICAgIGNvbnN0IGNhbWVyYVVwID0gWzAsIDEsIDBdO1xuICAgIGxldCBjYW1lcmFNYXRyaXggPSBtNC5sb29rQXQoWzAsIDAsIDBdLCB0YXJnZXRQb3NpdGlvbiwgY2FtZXJhVXApO1xuXG4gICAgLy8gY2FtZXJhTWF0cml4ID0gbTQudHJhbnNsYXRlKGNhbWVyYU1hdHJpeCwgMCwgMCwgLTMpO1xuXG4gICAgLy8gU2V0IHRoZSBkcmF3aW5nIHBvc2l0aW9uIHRvIHRoZSBcImlkZW50aXR5XCIgcG9pbnQsIHdoaWNoIGlzXG4gICAgLy8gdGhlIGNlbnRlciBvZiB0aGUgc2NlbmUuXG4gICAgbGV0IG1vZGVsVmlld01hdHJpeCA9IG00LmludmVyc2UoY2FtZXJhTWF0cml4KTtcblxuICAgIGxldCBzY2FsZSA9IG00LnNjYWxpbmcoLTEsIDEsIDEpO1xuICAgIG1vZGVsVmlld01hdHJpeCA9IG00Lm11bHRpcGx5KG1vZGVsVmlld01hdHJpeCwgc2NhbGUpO1xuXG4gICAgLy8gVGVsbCBXZWJHTCBob3cgdG8gcHVsbCBvdXQgdGhlIHBvc2l0aW9ucyBmcm9tIHRoZSBwb3NpdGlvblxuICAgIC8vIGJ1ZmZlciBpbnRvIHRoZSB2ZXJ0ZXhQb3NpdGlvbiBhdHRyaWJ1dGUuXG4gICAge1xuICAgICAgY29uc3QgbnVtQ29tcG9uZW50cyA9IDM7ICAvLyBwdWxsIG91dCAzICh4LHkseikgdmFsdWVzIHBlciBpdGVyYXRpb25cbiAgICAgIGNvbnN0IHR5cGUgPSBnbC5GTE9BVDsgICAgLy8gdGhlIGRhdGEgaW4gdGhlIGJ1ZmZlciBpcyAzMmJpdCBmbG9hdHNcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZSA9IGZhbHNlOyAgLy8gZG9uJ3Qgbm9ybWFsaXplXG4gICAgICBjb25zdCBzdHJpZGUgPSAwOyAgICAgICAgIC8vIGhvdyBtYW55IGJ5dGVzIHRvIGdldCBmcm9tIG9uZSBzZXQgb2YgdmFsdWVzIHRvIHRoZSBuZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDAgPSB1c2UgdHlwZSBhbmQgbnVtQ29tcG9uZW50cyBhYm92ZVxuICAgICAgY29uc3Qgb2Zmc2V0ID0gMDsgICAgICAgICAvLyBob3cgbWFueSBieXRlcyBpbnNpZGUgdGhlIGJ1ZmZlciB0byBzdGFydCBmcm9tXG4gICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgYnVmZmVycy5wb3NpdGlvbik7XG4gICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxuICAgICAgICAgIHByb2dyYW1JbmZvLmF0dHJpYkxvY2F0aW9ucy52ZXJ0ZXhQb3NpdGlvbixcbiAgICAgICAgICBudW1Db21wb25lbnRzLFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgbm9ybWFsaXplLFxuICAgICAgICAgIHN0cmlkZSxcbiAgICAgICAgICBvZmZzZXQpO1xuICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoXG4gICAgICAgICAgcHJvZ3JhbUluZm8uYXR0cmliTG9jYXRpb25zLnZlcnRleFBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICAvLyB0ZWxsIHdlYmdsIGhvdyB0byBwdWxsIG91dCB0aGUgdGV4dHVyZSBjb29yZGluYXRlcyBmcm9tIGJ1ZmZlclxuICAgIHtcbiAgICAgIGNvbnN0IG51bUNvbXBvbmVudHMgPSAyOyAvLyBldmVyeSBjb29yZGluYXRlIGNvbXBvc2VkIG9mIDIgdmFsdWVzXG4gICAgICBjb25zdCB0eXBlID0gZ2wuRkxPQVQ7IC8vIHRoZSBkYXRhIGluIHRoZSBidWZmZXIgaXMgMzIgYml0IGZsb2F0XG4gICAgICBjb25zdCBub3JtYWxpemUgPSBmYWxzZTsgLy8gZG9uJ3Qgbm9ybWFsaXplXG4gICAgICBjb25zdCBzdHJpZGUgPSAwOyAvLyBob3cgbWFueSBieXRlcyB0byBnZXQgZnJvbSBvbmUgc2V0IHRvIHRoZSBuZXh0XG4gICAgICBjb25zdCBvZmZzZXQgPSAwOyAvLyBob3cgbWFueSBieXRlcyBpbnNpZGUgdGhlIGJ1ZmZlciB0byBzdGFydCBmcm9tXG4gICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgYnVmZmVycy50ZXh0dXJlQ29vcmRpbmF0ZSk7XG4gICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxuICAgICAgICBwcm9ncmFtSW5mby5hdHRyaWJMb2NhdGlvbnMudGV4dHVyZUNvb3JkaW5hdGUsXG4gICAgICAgICBudW1Db21wb25lbnRzLCB0eXBlLCBub3JtYWxpemUsIHN0cmlkZSwgb2Zmc2V0KTtcbiAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHByb2dyYW1JbmZvLmF0dHJpYkxvY2F0aW9ucy50ZXh0dXJlQ29vcmRpbmF0ZSk7XG4gICAgfVxuXG4gICAgLy8gVGVsbCBXZWJHTCB3aGljaCBpbmRpY2VzIHRvIHVzZSB0byBpbmRleCB0aGUgdmVydGljZXNcbiAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBidWZmZXJzLmluZGljZXMpO1xuXG4gICAgLy8gVGVsbCBXZWJHTCB0byB1c2Ugb3VyIHByb2dyYW0gd2hlbiBkcmF3aW5nXG5cbiAgICBnbC51c2VQcm9ncmFtKHByb2dyYW1JbmZvLnByb2dyYW0pO1xuXG4gICAgLy8gU2V0IHRoZSBzaGFkZXIgdW5pZm9ybXNcblxuICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYoXG4gICAgICAgIHByb2dyYW1JbmZvLnVuaWZvcm1Mb2NhdGlvbnMucHJvamVjdGlvbk1hdHJpeCxcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIHByb2plY3Rpb25NYXRyaXgpO1xuICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYoXG4gICAgICAgIHByb2dyYW1JbmZvLnVuaWZvcm1Mb2NhdGlvbnMubW9kZWxWaWV3TWF0cml4LFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgbW9kZWxWaWV3TWF0cml4KTtcblxuICAgIC8qIFNwZWNpZnkgdGhlIHRleHR1cmUgdG8gbWFwIG9udG8gdGhlIGZhY2VzLiAqL1xuXG4gICAgLy8gVGVsbCBXZWJHTCB3ZSB3YW50IHRvIGFmZmVjdCB0ZXh0dXJlIHVuaXQgMFxuICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTApO1xuXG4gICAgLy8gQmluZCB0aGUgdGV4dHVyZSB0byB0ZXh0dXJlIHVuaXQgMFxuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRleHR1cmUpO1xuXG4gICAgLy8gVGVsbCB0aGUgc2hhZGVyIHdlIGJvdW5kIHRoZSB0ZXh0dXJlIHRvIHRleHR1cmUgdW5pdCAwXG4gICAgZ2wudW5pZm9ybTFpKHByb2dyYW1JbmZvLnVuaWZvcm1Mb2NhdGlvbnMudVNhbXBsZXIsIDApO1xuXG4gICAge1xuICAgICAgY29uc3QgdmVydGV4Q291bnQgPSBzcGhlcmVWZXJ0aWNlcy5pbmRpY2VzLmxlbmd0aCozO1xuICAgICAgY29uc3QgdHlwZSA9IGdsLlVOU0lHTkVEX1NIT1JUO1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gMDtcbiAgICAgIGdsLmRyYXdFbGVtZW50cyhnbC5UUklBTkdMRVMsIHZlcnRleENvdW50LCB0eXBlLCBvZmZzZXQpO1xuICAgIH1cbiAgfSAvL1tlbmRdIGRyYXdTY2VuZSBmdW5jdGlvblxuXG4gIC8vIGxvY2sgbGF0aXR1ZGUgcmFuZ2UsIG5vdCBwYXNzIHR3byBwb2xlc1xuICBjb25zdCBtYXhMYXQgPSBNYXRoLlBJICogKDEgLSAwLjA1KTsgLy8gMC45NVxuICBjb25zdCBtaW5MYXQgPSBNYXRoLlBJICogKDAgKyAwLjA1KTsgLy8gMC4wNVxuICBjb25zdCBjbGFtcExhdGl0dWRlID0gY3VycnkoY2xhbXAsIFttaW5MYXQsIG1heExhdF0pO1xuXG4gIGNvbnN0IHtiZWZvcmVVcGRhdGVDYW1lcmEsIHVwZGF0ZUNhbWVyYSwgZmluaXNoVXBkYXRlQ2FtZXJhfSA9IChmdW5jdGlvbigpe1xuICAgIC8vIHN0b3JlIGN1cnJlbnQgbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSBkdXJpbmcgZHJhZ2dpbmcuXG4gICAgLy8gb25seSB1cGRhdGUgdGhlIGFjdHVhbCBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlIGFmdGVyIGZpbmlzaCBkcmFnZ2luZy5cbiAgICBsZXQgbGF0O1xuICAgIGxldCBsb247XG5cbiAgICBmdW5jdGlvbiBiZWZvcmVVcGRhdGVDYW1lcmEoKSB7XG4gICAgICBsYXQgPSBsYXRpdHVkZTtcbiAgICAgIGxvbiA9IGxvbmdpdHVkZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAgVGhlIGZ1bmN0aW9uIHRvIGNoYW5nZSB0aGUgY2FtZXJhJ3MgdGFyZ2V0IHRoYXQgaXQgbG9va3MgYXQsXG4gICAgICogIEFsc28gdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgaXMgcGFzc2VkIGluIHRoZSBkcmFnIGFuZCBtb3ZlIGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRlbHRhWCB0aGUgY3VycmVudCBsYXRpdHVkZSB3aGljaCBjYW1lcmEgdGFyZ2V0c1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZWx0YVkgIHRoZSBjdXJyZW50IGxvbmdpdHVkZSB3aGljaCBjYW1lcmEgdGFyZ2V0c1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIHVwZGF0ZUNhbWVyYShkZWx0YVgsIGRlbHRhWSkge1xuICAgICAgLy8gdXBkYXRlIHRoZSBsYXRsb24gYnkgYWRkaW5nIGRlbHRhIHZhbHVlXG4gICAgICAvLyBUcmVhdCB0aGUgZGVsdGEgdmFsdWUgYXMgdGhlIG1vdmVtZW50IG9uIHRoZSBjaXJjdW1mZXJlbmNlKHZlcnkgY2xvc2UpLFxuICAgICAgLy8gYW5kIGNhbGN1bGF0ZSB0aGUgcmF0aW8gb2YgdGhlIG1vdmVtZW50IG92ZXIgY2lyY3VtZmVyZW5jZSBhbmQgZ2V0IHRoZSByYWRpYW5cbiAgICAgIC8vIGRlbHRhIGxvbmdpdHVkZSA9IGRlbHRhWCAvIGNpcmN1bWZlcmVuY2UgKiAoMipNYXRoLlBJKSxcbiAgICAgIC8vIGJlY2FzdXNlIGNpcmN1bWZlcmVuY2UgaXMgKDIqTWF0aC5QSSpyYWRpdXMpLCBzbyB0aGUgc2ltcGxpZnkgZm9ybXVsYXIgaXMgZGVsdGFYIC8gcmFkaXVzLlxuICAgICAgbGV0IGRlbHRhTG9uID0gZGVsdGFYIC8gcmFkaXVzO1xuICAgICAgbGV0IGRlbGF0TGF0ID0gZGVsdGFZIC8gcmFkaXVzO1xuXG4gICAgICBsYXRpdHVkZSA9IGRlbGF0TGF0K2xhdDtcbiAgICAgIGxvbmdpdHVkZSA9IGRlbHRhTG9uK2xvbjtcblxuICAgICAgbGF0aXR1ZGUgPSBjbGFtcExhdGl0dWRlKGxhdGl0dWRlKTtcblxuICAgICAgLy8gY29tcHV0ZSB0aGUgbG9va0F0IHZlcnRpY2UuXG4gICAgICB0YXJnZXRQb3NpdGlvbiA9IGxhdGxvblRvVmVydGV4KGxhdGl0dWRlLCBsb25naXR1ZGUpO1xuXG4gICAgICBuZWVkVG9SZWRyYXcgPSB0cnVlOyAvLyByZWRyYXcgdGhlIHNjZW5lXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmluaXNoVXBkYXRlQ2FtZXJhKCkge1xuICAgICAgLy8gdXBkYXRlIHRoZSBhY3R1YWwgdmFyaWJsZSBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlIHVudGlsIGRyYWdnaW5nIGlzIGRvbmUuXG4gICAgICAvLyBsYXRpdHVkZSA9IGxhdDtcbiAgICAgIC8vIGxvbmdpdHVkZSA9IGxvbjtcbiAgICB9XG5cbiAgICByZXR1cm4ge2JlZm9yZVVwZGF0ZUNhbWVyYSwgdXBkYXRlQ2FtZXJhLCBmaW5pc2hVcGRhdGVDYW1lcmF9O1xuICB9KSgpO1xuXG4gIC8vIGhhbmRsZSB1c2VyIGlucHV0IGFuZCBjb250cm9sIHRoZSBjYW1lcmEsIG1vdXNlIGFuZCB0b3VjaFxuICBsZXQgbW91c2VFdmVudEhhbmRsZXJzID0gdXNlckNvbnRyb2xIYW5kbGVyKGJlZm9yZVVwZGF0ZUNhbWVyYSwgdXBkYXRlQ2FtZXJhLCBmaW5pc2hVcGRhdGVDYW1lcmEsIGZhbHNlKTtcbiAgbGV0IHRvdWNoRXZlbnRIYW5kbGVycyA9IHVzZXJDb250cm9sSGFuZGxlcihiZWZvcmVVcGRhdGVDYW1lcmEsIHVwZGF0ZUNhbWVyYSwgZmluaXNoVXBkYXRlQ2FtZXJhLCB0cnVlKTtcblxuXG4gIC8vIHJlZ2lzdGVyIG1vdXNlIGRyYWcgZXZlbnRzXG4gIGNvbnN0IG1vdXNlRXZlbnRUeXBlcyA9IFtcIm1vdXNlZG93blwiLCBcIm1vdXNlbW92ZVwiLCBcIm1vdXNldXBcIl07XG5cbiAgT2JqZWN0LmtleXMobW91c2VFdmVudEhhbmRsZXJzKS5tYXAoKGtleSwgaWR4KSA9PiB7XG4gICAgd3JhcHBlci5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRUeXBlc1tpZHhdLCBtb3VzZUV2ZW50SGFuZGxlcnNba2V5XSwgZmFsc2UpO1xuICB9KTtcblxuICAvLyByZWdpc3RlciB0b3VjaCBkcmFnIGV2ZW50c1xuICBjb25zdCB0b3VjaEV2ZW50VHlwZXMgPSBbXCJ0b3VjaHN0YXJ0XCIsIFwidG91Y2htb3ZlXCIsIFwidG91Y2hlbmRcIl07XG5cbiAgT2JqZWN0LmtleXModG91Y2hFdmVudEhhbmRsZXJzKS5tYXAoKGtleSwgaWR4KSA9PiB7XG4gICAgd3JhcHBlci5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRUeXBlc1tpZHhdLCB0b3VjaEV2ZW50SGFuZGxlcnNba2V5XSwgZmFsc2UpO1xuICB9KTtcblxuXG5cbiAgY29uc3QgZGV2aWNlT3JpZW50YXRpb25IZWxwZXIgPSBjcmVhdGVEZXZpY2VPcmllbnRhdGlvbkhlbHBlcigoZGVsdGFBbHBoYSwgZGVsdGFCZXRhKSA9PiB7XG4gICAgLy8gZGVsdGEgdmFsdWVzIGFyZSBjYWxjdWxhdGVkIGluIGRlZ3JlZXMuIGNvbnZlcnQgdGhvc2UgdG8gbGF0bG9uIHJhZGlhbnMgYW5kIHVzZSBkaXJlY3RseVxuICAgIGNvbnN0IGRlbHRhTG9uID0gZGVncmVlVG9SYWRpYW4oZGVsdGFBbHBoYSk7XG4gICAgY29uc3QgZGVsdGFMYXQgPSBkZWdyZWVUb1JhZGlhbihkZWx0YUJldGEpO1xuXG4gICAgbGF0aXR1ZGUgLT0gZGVsdGFMYXQ7XG4gICAgbG9uZ2l0dWRlIC09IGRlbHRhTG9uO1xuXG4gICAgLy8gY2xhbXAgbGF0aXR1ZGUgYmV3dGVlbiBzb3V0aCBhbmQgbm9ydGggcG9sZXMuXG4gICAgbGF0aXR1ZGUgPSBjbGFtcExhdGl0dWRlKGxhdGl0dWRlKTtcblxuICAgIHRhcmdldFBvc2l0aW9uID0gbGF0bG9uVG9WZXJ0ZXgobGF0aXR1ZGUsIGxvbmdpdHVkZSk7XG4gICAgbmVlZFRvUmVkcmF3ID0gdHJ1ZTtcblxuICB9KTtcbiAgLy8gcmVpZ3N0ZXIgZGV2aWNlIG9yaWVudGF0aW9uIGV2ZW50IHRvIHdpbmRvdy5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJkZXZpY2VvcmllbnRhdGlvblwiLCBkZXZpY2VPcmllbnRhdGlvbkhlbHBlci5oYW5kbGVyLCB0cnVlKTtcbiAgLy8gYmluZCBjbGljayBldmVudCBvbiBzd2l0Y2hcbiAgb3JpZW50YXRpb25Td2l0Y2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgY29uc3QgZW5hYmxlZCA9IG9yaWVudGF0aW9uU3dpdGNoSGVscGVyLmZsaXAoKTsgLy8gdXBkYXRlIHN3aXRjaCBzdGF0dXNcbiAgICBkZXZpY2VPcmllbnRhdGlvbkhlbHBlci5zZXRFbmFibGVkKGVuYWJsZWQpO1xuICB9LCBmYWxzZSk7XG4gIC8vIGluaXQgc3RhdHVzXG4gIGRldmljZU9yaWVudGF0aW9uSGVscGVyLnNldEVuYWJsZWQoc2V0dGluZy5kZXZpY2VPcmllbnRhdGlvbkVuYWJsZWQpO1xuXG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBkaXNwbGF5IHNpemUoYGNhbnZhcy5jbGllbnRXaWR0aGAgYW5kIGBjYW52YXMuY2xpZW50SGVpZ2h0YCkgd2hldGhlciBpdCdzIGNoYW5nZWQuXG4gICAqIFVwZGF0ZSB0aGUgY2FudmFzIHJlbmRlciBzaXplKGBjYW52YXMud2lkdGhgIGFuZCBgY2FudmFzLmhlaWdodGApIHRvIHRoZSBjdXJyZW50IGRpc3BsYXkgc2l6ZS5cbiAgICogQW5kIHJldHVybiBgdHJ1ZWAgd2hlbiB0aGUgc2l6ZSBpcyBjaGFuZ2VkLCBvdGhlcndpc2UgYGZhbHNlYFxuICAgKlxuICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlOiBuZWVkIHJlc2l6ZTsgZmFsc2U6IG5vIG5lZWQuXG4gICAqL1xuICBmdW5jdGlvbiByZXNpemUoKXtcbiAgICB2YXIgcGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvPyB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbzogMTtcblxuICAgIGNvbnN0IGNsaWVudFdpZHRoID0gZ2wuY2FudmFzLmNsaWVudFdpZHRoICogcGl4ZWxSYXRpbztcbiAgICBjb25zdCBjbGllbnRIZWlnaHQgPSBnbC5jYW52YXMuY2xpZW50SGVpZ2h0ICogcGl4ZWxSYXRpbztcblxuICAgIGlmIChnbC5jYW52YXMud2lkdGggIT09IGNsaWVudFdpZHRoIHx8IGdsLmNhbnZhcy5oZWlnaHQgIT09IGNsaWVudEhlaWdodCl7XG4gICAgICBnbC5jYW52YXMud2lkdGggPSBjbGllbnRXaWR0aDtcbiAgICAgIGdsLmNhbnZhcy5oZWlnaHQgPSBjbGllbnRIZWlnaHQ7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgbGV0IG5lZWRUb1JlZHJhdyA9IHRydWU7XG4gIC8vIERyYXcgdGhlIHNjZW5lIHJlcGVhdGVkbHlcbiAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGlmKHJlc2l6ZSgpIHx8IG5lZWRUb1JlZHJhdyl7XG4gICAgICAvLyBuZWVkIGRyYXdcbiAgICAgIG5lZWRUb1JlZHJhdyA9IGZhbHNlO1xuICAgICAgZHJhd1NjZW5lKGdsLCBwcm9ncmFtSW5mbywgYnVmZmVycyk7XG4gICAgfVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gIH1cblxuICByZW5kZXIoKTsgLy8gaW5pdCBjYWxsIGByZW5kZXIoKWBcblxuICAvLyBkcmF3U2NlbmUoZ2wsIHByb2dyYW1JbmZvLCBidWZmZXJzKTtcblxuICByZXR1cm4ge2NvbnRhaW5lcn07XG59IC8vIFtlbmRdIGZ1bmN0aW9uIHBhbm9yYW1hXG5cbi8qKlxuICogQ29udmVydCB1c2VyIGlucHV0IGNhbWVyZSBkZWdyZWUgdG8gYWN0dWFsIGxvbmdpdHVkZSBhbmQgbGF0aXR1ZGUgdGhhdFxuICogYXJlIHVzZWQgZm9yIGNhbWVyYSBsb29rQXQgcG9pc2l0aW9uIG1hdHJpeC5cbiAqIEJlY2F1c2UgbGF0bG9uIGFyZSBpbiByYWRpYW5zLiBGb3IgZWFzeSB1c2UsIHRoZSB1c2VyIGlucHV0IGlzIGluIGRlZ3JlZS5cbiAqIEFsc28gdGhlIGxhdGl0dWRlIHJhbmdlcyBmcm9tIDAgdG8gUEkgdGhhdCBhcmUgbGlrZSBOb3J0aCBQb2xlIGFuZCBTb3V0aCBQb2xlIG9uIHRoZSBFYXJ0aCxcbiAqIENvcnJlc3BvbmQgdG8gbGF0aXR1ZGUsIHRoZSB1c2VyIGlucHV0IHZlcnRpY2FsIGRlZ3JlZSByYW5nZXMgZnJvbSA5MCB0byAtOTAgdGhhdFxuICogaXMgcmV2ZXJzZWQgb3JkZXIgb2YgbGF0aXR1ZGUgYW5kIGlzIG9mZnNldCBoYWxmIG9mIFBJLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyIEFycmF5fSBkZWdyZWUgIHR3byBudW1iZXIgYXJyYXkgY29udGFpbnMgdGhlIGhvcml6b25hbCBkZWdyZWUgYW5kXG4gKiAgdGhlIHZlcnRpY2FsIGRlZ3JlZS5cbiAqL1xuZnVuY3Rpb24gdXNlckNhbWVyYURlZ3JlZVRvTGF0TG9uKGRlZ3JlZSl7XG4gIGxldCBsYXRpdHVkZSA9ICAtZGVncmVlVG9SYWRpYW4oZGVncmVlWzFdKSArIChNYXRoLlBJIC8gMik7XG4gIGxldCBsb25naXR1ZGUgPSAgZGVncmVlVG9SYWRpYW4oZGVncmVlWzBdKTsgLy8gdHJhbnMgdG8gcmFkaWFuIGRpcmVjdGx5XG4gIHJldHVybiB7bGF0aXR1ZGU6IGxhdGl0dWRlLCBsb25naXR1ZGU6IGxvbmdpdHVkZX07XG59XG5cbi8vIGNvbXB1dGUgdGhlIHJhZGlhbiBvZiB0aGUgZGVncmVlLiA5MGRlZyAtPiBQSS8yOyAxODBkZWcgLT4gUEk7IDQ1ZGVnLT4gUEkvNDtcbmNvbnN0IGRlZ3JlZVRvUmFkaWFuID0gKGRlZykgPT4gKGRlZyAvIDE4MCAqIE1hdGguUEkpO1xuY29uc3QgcmFkaWFuVG9EZWdyZWUgPSAocmFkaWFuKSA9PiAocmFkaWFuIC8gTWF0aC5QSSAqIDE4MCk7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlIHRvIHRoZSBjb3JyZXNwb25kIHZlcnRleCBpbiBbeCx5LHpdLiAodGhlIHRhcmdldCBwb2ludCBpbiB0aGUgc3BoZXJlIHdob3NlIHJhZGl1cyBpcyAxKVxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsYXRpdHVkZSB0aGUgcmFkaWFuIG9mIGxhdGl0dWRlLCBub3JtYWxseSBmcm9tIC1QSSB0byBQSS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsb25naXR1ZGUgdGhlIHJhZGlhbiBvZiBsb2dpdHVkZSwgbm9ybWFsbHkgZnJvbSAwIHRvIDIqUEkuXG4gKi9cbmZ1bmN0aW9uIGxhdGxvblRvVmVydGV4KGxhdGl0dWRlLCBsb25naXR1ZGUpe1xuICBjb25zdCB0aGV0YSA9IGxvbmdpdHVkZTtcbiAgY29uc3QgcGhpID0gbGF0aXR1ZGU7XG5cbiAgY29uc3Qgc2luVGhldGEgPSBNYXRoLnNpbih0aGV0YSksIGNvc1RoZXRhID0gTWF0aC5jb3ModGhldGEpO1xuICBjb25zdCBzaW5QaGkgPSBNYXRoLnNpbihwaGkpLCBjb3N0UGhpID0gTWF0aC5jb3MocGhpKTtcblxuICBjb25zdCB1eCA9IGNvc1RoZXRhICogc2luUGhpO1xuICBjb25zdCB1eSA9IGNvc3RQaGk7XG4gIGNvbnN0IHV6ID0gc2luVGhldGEgKiBzaW5QaGk7XG5cbiAgcmV0dXJuIFt1eCwgdXksIHV6XTtcbn1cblxuY29uc3QgY3JlYXRlRGV2aWNlT3JpZW50YXRpb25IZWxwZXIgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgbGV0IGVuYWJsZWQgPSB0cnVlO1xuXG4gIGxldCBhbHBoYUJlZm9yZSwgYmV0YUJlZm9yZTtcbiAgZnVuY3Rpb24gZGV2aWNlT3JpZW50YXRpb25IYW5kbGVyKGV2ZW50KSB7XG4gICAgaWYgKGVuYWJsZWQpIHsgLy8gcmVjb3JkIG1vdGlvbihvcmllbnRhdGlvbikgZGF0YVxuICAgICAgY29uc3Qge2FscGhhLCBiZXRhfSA9IGV2ZW50OyAvLyBjdXJyZW50IG9yaWVudGF0aW9uIGRhdGFcblxuICAgICAgaWYgKHR5cGVvZiBhbHBoYUJlZm9yZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAvLyBubyBkYXRhIHJlY29yZGVkIGJlZm9yZSwgc2V0IHByZXZpb3VzIHZhbHVlIGRpcmVjdGx5LlxuICAgICAgICBhbHBoYUJlZm9yZSA9IGFscGhhO1xuICAgICAgICBiZXRhQmVmb3JlID0gYmV0YTtcbiAgICAgIH1cblxuICAgICAgLy8gY2FsY3VsYXRlIHRoZSBkZWx0YSwgdGhlbiBpbnZva2UgY2FsbGJhY2tcbiAgICAgIGNvbnN0IGRlbHRhQWxwaGEgPSBhbHBoYSAtIGFscGhhQmVmb3JlO1xuICAgICAgY29uc3QgZGVsdGFCZXRhID0gYmV0YSAtIGJldGFCZWZvcmU7XG4gICAgICAvLyByZWNvcmQgZGF0YVxuICAgICAgYWxwaGFCZWZvcmUgPSBhbHBoYTtcbiAgICAgIGJldGFCZWZvcmUgPSBiZXRhO1xuXG4gICAgICAvLyBpbnZva2UgY2FsbGJhY2tcbiAgICAgIGNhbGxiYWNrKGRlbHRhQWxwaGEsIGRlbHRhQmV0YSk7XG5cbiAgICB9IGVsc2UgeyAvLyBkaXNhYmxlIG9yaWVudGF0aW9uXG4gICAgICBhbHBoYUJlZm9yZSA9IHVuZGVmaW5lZDtcbiAgICAgIGJldGFCZWZvcmUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0RW5hYmxlZChib29sKSB7XG4gICAgZW5hYmxlZCA9IGJvb2w7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGhhbmRsZXI6IGRldmljZU9yaWVudGF0aW9uSGFuZGxlcixcbiAgICBzZXRFbmFibGVkXG4gIH07XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIHRoZSB0aHJlZSBldmVudCBoYW5kbGVyIGZvciB1c2VyJ3MgaW5wdXQgY29udHJvbCB3aGVuIGlzIGRyYWdnaW5nLlxuICogYHN0YXJ0SGFuZGxlcmAgaXMgdXNlZCBmb3IgdGhlIGJlZ2luIG9mIHRoZSBkcmFnZ2luZyBjb250cm9sLCBoYW5kbGUgYG1vdXNlZG93bmAgZXZlbnQgb3IgYHRvdWNoc3RhcnRgIGV2ZW50LlxuICogYG1vdmVIYW5kbGVyYCBpcyB1c2VkIHdoZW4gdXNlciBpcyBkcmFnZ2luZywgaGFuZGxlIGBtb3VzZW1vdmVgIGV2ZW50IG9yIGB0b3VjaG1vdmVgIGV2ZW50LlxuICogYGVuZEhhbmRsZXJgIGlzIHVzZWQgZm9yIHRoZSBlbmQgb2YgdGhlIGRyYWdnaW5nIGNvbnRyb2wsIGhhbmRsZSBgbW91c2V1cGAgb3IgIGB0b3VjaGVuZGAgZXZlbnQuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZHJhZ2dpbmdDYWxsYmFjayB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gaGFuZGxlIHVzZXIgZHJhZyBtb3ZlbWVudCB3aGVuIHVzZXIgaXMgZHJhZ2dpbmcuXG4gKiAgcGFzc2VkIHR3byBhcmd1bWVudHMgY3VycmVudCBkZWx0YVggYW5kIGRlbHRhWSh1c2VyIG1vdmVtZW50IGluIHBpeGVsKSB0aGF0IGlzIHVzZWQgbGF0ZXIgdG8gY29tcHV0ZSB0aGUgY2FtZXJhIGBsb29rIGF0YCAodGFyZ2V0IHBvc2l0aW9uKS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzVG91Y2g9ZmFsc2VdIHRydWUgaWYgdXNlciB1c2UgdG91Y2ggZGV2aWNlIHRvIGRyYWcgYW5kIG1vdmUsIGZhbHNlIG90aGVyd2lzZShsaWtlIG1vdXNlKS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbW92ZVNwZWVkPTFdIHRoZSBtdWx0aXBsaWVyIG9mIHRoZSB1c2VyIG1vdmVtZW50IHNwZWVkLCBkZWZhdWx0IGl0J3MgMSB0aGF0IGlzIG5vcm1hbCBzcGVlZCBhbmQgbm8gY2hhbmdlLlxuICovXG5jb25zdCB1c2VyQ29udHJvbEhhbmRsZXIgPSBmdW5jdGlvbiAoc3RhcnREcmFnQ2FsbGJhY2ssIGRyYWdnaW5nQ2FsbGJhY2ssIGVuZERyYWdDYWxsYmFjaywgaXNUb3VjaCwgbW92ZVNwZWVkKSB7XG5cbiAgbGV0IHN0YXJ0WCA9IDA7XG4gIGxldCBzdGFydFkgPSAwO1xuICBsZXQgaXNVc2VyRHJhZ2dpbmcgPSBmYWxzZTsgLy8gdHJ1ZSBkdXJpbmcgdXNlciBkcmFnc1xuXG4gIC8vIHNldCBkZWZhdWx0IHZhbHVlIDEgdG8gbW92ZVNwZWVkXG4gIGlmICh0eXBlb2YgbW92ZVNwZWVkID09PSBcInVuZGVmaW5lZFwiKSB7bW92ZVNwZWVkID0gMTt9XG5cbiAgLy8gZ2V0IGNsaWVudFggYW5kIGNsaWVudFkgZWl0aGVyIGZyb20gbW91c2UoY2xpY2spIG9yIHRvdWNoLlxuICBjb25zdCBnZXRYWSA9IGlzVG91Y2ggP1xuICAgIChldmVudFRhcmdldCkgPT4gKHt4OiBldmVudFRhcmdldC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLCB5OiBldmVudFRhcmdldC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZfSkgOlxuICAgIChldmVudFRhcmdldCkgPT4gKHt4OiBldmVudFRhcmdldC5jbGllbnRYLCB5OiBldmVudFRhcmdldC5jbGllbnRZfSk7XG5cblxuICBmdW5jdGlvbiBzdGFydEhhbmRsZXIoZXZlbnQpe1xuICAgIGlmKGlzVG91Y2ggIT09IHRydWUpeyAvLyBETyBOT1QgcHJldmVudCB3aGVuIGlzIHRvdWNoIGV2ZW50LiBjYXVzZSB0b3VjaCBkcmFnZ2luZyBwcm9ibGVtIGFuZCB0b3VjaCBjbGljayBub3Qgd29yay5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaXNVc2VyRHJhZ2dpbmcgPSB0cnVlO1xuXG4gICAgbGV0IHt4LCB5fSA9IGdldFhZKGV2ZW50KTtcbiAgICBzdGFydFggPSB4O1xuICAgIHN0YXJ0WSA9IHk7XG5cbiAgICBzdGFydERyYWdDYWxsYmFjaygpO1xuICB9XG5cbiAgZnVuY3Rpb24gbW92ZUhhbmRsZXIoZXZlbnQpe1xuXG4gICAgaWYgKGlzVXNlckRyYWdnaW5nID09PSB0cnVlKSB7XG4gICAgICBsZXQge3gsIHl9ID0gZ2V0WFkoZXZlbnQpO1xuICAgICAgbGV0IGRlbHRhWCA9IHggLSBzdGFydFg7XG4gICAgICBsZXQgZGVsdGFZID0geSAtIHN0YXJ0WTtcblxuICAgICAgZGVsdGFYID0gZGVsdGFYICogbW92ZVNwZWVkO1xuICAgICAgZGVsdGFZID0gZGVsdGFZICogbW92ZVNwZWVkO1xuXG4gICAgICBkcmFnZ2luZ0NhbGxiYWNrKGRlbHRhWCwgZGVsdGFZKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBlbmRIYW5kbGVyKGV2ZW50KXtcbiAgICBpc1VzZXJEcmFnZ2luZyA9IGZhbHNlOyAvLyByZXNldFxuXG4gICAgZW5kRHJhZ0NhbGxiYWNrKCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHN0YXJ0SGFuZGxlcixcbiAgICBtb3ZlSGFuZGxlcixcbiAgICBlbmRIYW5kbGVyLFxuICB9O1xufTsgLy8gW2VuZF0gcmV0dXJuIGFjdHVhbCBmdW5jdGlvblxuXG5cbmNvbnN0IGxvYWRpbmdQcm9ncmVzc0ZhY3RvcnkgPSBmdW5jdGlvbihwYXJlbnQsIHRleHQ9XCJcIil7XG4gIGxldCBwcm9ncmVzc1dyYXBwZXIgPSB1bmRlZmluZWQ7IC8vIHN0b3JlIERPTUVsZW1lbnQgbGF0ZXJcbiAgbGV0IHByb2dyZXNzQmFyID0gdW5kZWZpbmVkO1xuICBsZXQgbWVzc2FnZSA9IHVuZGVmaW5lZDtcbiAgbGV0IHBlcmNlbnRhZ2VOdW1FbCA9IHVuZGVmaW5lZDtcblxuICAvLyB0aGUgYWN0dWFsIGZ1bmN0aW9uXG4gIGZ1bmN0aW9uIGNyZWF0ZU9yVXBkYXRlKGxvYWRlZCwgdG90YWwpIHtcbiAgICBpZiAodHlwZW9mIHByb2dyZXNzV3JhcHBlciA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgLy8gY3JlYXRlIERPTUVMZW1lbnQgb2YgdGhlIHByb2dyZXNzIGJhclxuICAgICAgcHJvZ3Jlc3NXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHByb2dyZXNzV3JhcHBlci5jbGFzc05hbWUgPSBjbGF6ei5wcm9ncmVzc1dyYXBwZXI7XG5cbiAgICAgIHByb2dyZXNzQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHByb2dyZXNzV3JhcHBlci5hcHBlbmRDaGlsZChwcm9ncmVzc0Jhcik7XG4gICAgICBwcm9ncmVzc0Jhci5jbGFzc05hbWUgPSBjbGF6ei5wcm9ncmVzc0JhcjtcblxuICAgICAgcHJvZ3Jlc3NXcmFwcGVyLmFwcGVuZENoaWxkKHByb2dyZXNzQmFyKTtcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChwcm9ncmVzc1dyYXBwZXIpO1xuICAgIH1cblxuICAgIGlmKHRleHQgJiYgdHlwZW9mIG1lc3NhZ2UgPT09IFwidW5kZWZpbmVkXCIpe1xuICAgICAgY3JlYXRlTWVzc2FnZSgpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSBwcm9ncmVzcyBiYXIuXG4gICAgY29uc3QgcmF0aW8gPSBsb2FkZWQgLyB0b3RhbDtcbiAgICBpZiAoIU51bWJlci5pc05hTihyYXRpbykpIHtcbiAgICAgIC8vIGFjdHVhbGx5IGhhdmUgcGVyY2VudGFnZSBudW1iZXJcbiAgICAgIGNvbnN0IHBlcmNlbnRhZ2VOdW0gPSBgJHsocmF0aW8gKiAxMDApLnRvUHJlY2lzaW9uKDMpfSVgO1xuICAgICAgcHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSBwZXJjZW50YWdlTnVtO1xuXG4gICAgICAvLyBzaG93IHBlcmNlbnRhZ2UgbnVtYmVyIHRleHRcbiAgICAgIGNyZWF0ZU9yVXBkYXRlUGVyY2VudGFnZU51bWJlcihwZXJjZW50YWdlTnVtKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPclVwZGF0ZVBlcmNlbnRhZ2VOdW1iZXIocGVyY2VudGFnZU51bSkge1xuICAgIGlmICh0eXBlb2YgcGVyY2VudGFnZU51bUVsID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAvLyBpZiBub3QgZXhpc3RzLCBjcmVhdGVcbiAgICAgIHBlcmNlbnRhZ2VOdW1FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBwZXJjZW50YWdlTnVtRWwuY2xhc3NOYW1lID0gY2xhenoucGVyY2VudGFnZU51bTtcblxuICAgICAgcHJvZ3Jlc3NXcmFwcGVyLmFwcGVuZENoaWxkKHBlcmNlbnRhZ2VOdW1FbCk7XG4gICAgfVxuICAgIHBlcmNlbnRhZ2VOdW1FbC5pbm5lclRleHQgPSBwZXJjZW50YWdlTnVtO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTWVzc2FnZSgpIHtcbiAgICBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZXNzYWdlLmNsYXNzTmFtZSA9IGNsYXp6LnByb2dyZXNzTWVzc2FnZTtcbiAgICBtZXNzYWdlLmlubmVyVGV4dCA9IHRleHQ7XG5cbiAgICBwcm9ncmVzc1dyYXBwZXIuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG4gIH1cblxuICBmdW5jdGlvbiBoaWRlKCl7XG4gICAgcHJvZ3Jlc3NXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3coKXtcbiAgICBwcm9ncmVzc1dyYXBwZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgfVxuXG4gIHJldHVybiB7Y3JlYXRlT3JVcGRhdGUsIGhpZGUsIHNob3d9O1xufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBjb250ZXh0IG9mIHdlYmdsXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIGltYWdlIHVybCB0aGF0IGlzIHVzZWQgYXMgdGV4dHVyZVxuICogQHBhcmFtIHtmdW5jdGlvbn0gdGV4dHVyZUxvYWRlZENhbGxiYWNrIE9wdGlvbmFsLCB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggbG9hZGVkIHRleHR1cmUgYXJndW1lbnRcbiAqICB3aGVuIHRleHR1cmUgaXMgYWxyZWFkeSBsb2FkZWQuIFVzdWFsbHkgY29udGFpbnMgdGhlIG1ldGhvZCB0aGF0IHJlZHJhdyB3ZWJnbCBzY2VuZSB0byBzaG93IHRoZSB0ZXh0dXJlLlxuICogQHJldHVybiB7V2ViR0xUZXh0dXJlfSB0aGUgd2ViZ2wgdGV4dHVyZS4gQmUgY2FyZWZ1bCwgdGhlIHRleHR1cmUgaXMgbG9hZGVkIGFzeW5jaHJvbm91c2x5KGxvYWQgaW1hZ2UgYXN5bmNocm9ub3VzbHkpLFxuICogIGl0IHdvdWxkIGJlIHBsYWNlaG9sZGVyKHNpbmdsZSBjb2xvcikgYXQgdGhlIGJlZ2lubmluZy4gU28gdXNlIHRoZSBjYWxsYmFjayBmdW5jdGlvbiB0byBoYW5kbGUgdGhlIGxvYWRlZCB0ZXh0dXJlLlxuICovXG5mdW5jdGlvbiBsb2FkVGV4dHVyZShnbCwgdXJsLCB0ZXh0dXJlTG9hZGVkQ2FsbGJhY2ssIGxvYWRpbmdDYWxsYmFjayl7XG4gIGNvbnN0IHRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XG4gIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRleHR1cmUpO1xuXG4gIGNvbnN0IGxldmVsID0gMDtcbiAgY29uc3QgaW50ZXJuYWxGb3JtYXQgPSBnbC5SR0JBO1xuICBjb25zdCBzcmNGb3JtYXQgPSBnbC5SR0JBO1xuICBjb25zdCBzcmNUeXBlID0gZ2wuVU5TSUdORURfQllURTtcblxuICAvLyBncmV5IHBsYWNlaG9sZGVyIGNvbG9yIGJlZm9yZSB0ZXh0dXJlIGxvYWRlZCAvLyBbMCwwLDI1NSwxMjhdb3BhcXVlIGJsdWVcbiAgY29uc3QgcGl4ZWwgPSBuZXcgVWludDhBcnJheShbMCwgMCwgMCwgMTI4XSk7XG4gIGNvbnN0IHdpZHRoID0gMTtcbiAgY29uc3QgaGVpZ2h0ID0gMTtcbiAgY29uc3QgYm9yZGVyID0gMDtcbiAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCBsZXZlbCwgaW50ZXJuYWxGb3JtYXQsXG4gICAgICAgICAgICAgICAgd2lkdGgsIGhlaWdodCwgYm9yZGVyLCBzcmNGb3JtYXQsIHNyY1R5cGUsXG4gICAgICAgICAgICAgICAgcGl4ZWwpO1xuXG4gIC8qKlxuICAgKiBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gd291bGQgYmUgY2FsbGVkIHdoZW4gY29tcGxldGUgbG9hZGluZyBpbWFnZS5cbiAgICogU2V0IHRoZSBwYW5vcmFtYSBpbWFnZSBhcyB0aGUgdGV4dHVyZS5cbiAgICogQHBhcmFtIHtIVE1MSW1hZ2VFbGVtZW50fSBpbWFnZSAgdGhlIGltYWdlIGVsZW1lbnQgdGhhdCBpcyB1c2VkIGFzIHRleHR1cmVcbiAgICovXG4gIGZ1bmN0aW9uIGJpbmRJbWFnZVRleHR1cmVDYWxsYmFjayAoaW1hZ2UpIHtcblxuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRleHR1cmUpO1xuICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgbGV2ZWwsIGludGVybmFsRm9ybWF0LFxuICAgICAgICAgICAgICAgICAgc3JjRm9ybWF0LCBzcmNUeXBlLCBpbWFnZSk7XG5cbiAgICAvLyBXZWJHTDEgaGFzIGRpZmZlcmVudCByZXF1aXJlbWVudHMgZm9yIHBvd2VyIG9mIDIgaW1hZ2VzXG4gICAgLy8gdnMgbm9uIHBvd2VyIG9mIDIgaW1hZ2VzIHNvIGNoZWNrIGlmIHRoZSBpbWFnZSBpcyBhXG4gICAgLy8gcG93ZXIgb2YgMiBpbiBib3RoIGRpbWVuc2lvbnMuXG4gICAgaWYgKGlzUG93ZXJPZjIoaW1hZ2Uud2lkdGgpICYmIGlzUG93ZXJPZjIoaW1hZ2UuaGVpZ2h0KSkge1xuICAgICAgLy8gWWVzLCBpdCdzIGEgcG93ZXIgb2YgMi4gR2VuZXJhdGUgbWlwcy5cbiAgICAgIGdsLmdlbmVyYXRlTWlwbWFwKGdsLlRFWFRVUkVfMkQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBObywgaXQncyBub3QgYSBwb3dlciBvZiAyLiBUdXJuIG9mZiBtaXBzIGFuZCBzZXRcbiAgICAgIC8vIHdyYXBwaW5nIHRvIGNsYW1wIHRvIGVkZ2VcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLkNMQU1QX1RPX0VER0UpO1xuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTElORUFSKTtcbiAgICAgIC8vIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5ORUFSRVNUKTtcbiAgICAgIC8vIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5ORUFSRVNUKTtcbiAgICB9XG5cbiAgICAvLyBjYWxsYmFjayBhZnRlciBpbWFnZSBsb2FkZWQuXG4gICAgaWYgKHRleHR1cmVMb2FkZWRDYWxsYmFjaykge3RleHR1cmVMb2FkZWRDYWxsYmFjayh0ZXh0dXJlKTt9XG5cbiAgfSAvLyBbZW5kXSBiaW5kSW1hZ2VUZXh0dXJlQ2FsbGJhY2tcblxuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGxvYWRJbWFnZSh7dXJsOnVybCwgaW1hZ2U6IGltYWdlLCBsb2FkZWRDYWxsYmFjazogYmluZEltYWdlVGV4dHVyZUNhbGxiYWNrLCBsb2FkaW5nQ2FsbGJhY2s6IGxvYWRpbmdDYWxsYmFja30pO1xuXG4gIHJldHVybiB0ZXh0dXJlO1xufVxuXG5mdW5jdGlvbiBsb2FkSW1hZ2Uoe3VybCwgaW1hZ2UgPSBuZXcgSW1hZ2UoKSwgbG9hZGVkQ2FsbGJhY2ssIGxvYWRpbmdDYWxsYmFja30pIHtcblxuICBjb25zdCBvblByb2dyZXNzSGFuZGxlciA9IGxvYWRpbmdDYWxsYmFjayA/XG4gICAgKGV2ZW50KSA9PiBsb2FkaW5nQ2FsbGJhY2soZXZlbnQubG9hZGVkLCBldmVudC50b3RhbCkgOlxuICAgIHVuZGVmaW5lZDtcblxuICAvLyBbSW1wb3J0YW50XSBpbWFnZS5zcmMgaXMgYXN5bmNocm9ub3VzIG9wZXJhdGlvbiwgc2V0IG9ubG9hZCB0byBoYW5kbGUgYWZ0ZXIgdGhlIGltYWdlIGlzIGxvYWRlZFxuICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAobG9hZGVkQ2FsbGJhY2spIHtsb2FkZWRDYWxsYmFjayhpbWFnZSk7fVxuICB9O1xuXG4gIHByb2dyZXNzRmV0Y2hCbG9iKHVybCwge21ldGhvZDogXCJnZXRcIn0sIG9uUHJvZ3Jlc3NIYW5kbGVyKVxuICAudGhlbihyZXNwb25zZUJsb2IgPT4ge1xuICAgIGNvbnN0IG9iamVjdFVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwocmVzcG9uc2VCbG9iKTtcbiAgICBpbWFnZS5zcmMgPSBvYmplY3RVcmw7XG4gIH0pXG4gIC5jYXRjaCggZXJyID0+IHt0aHJvdyBlcnI7fSk7XG59XG5cbmZ1bmN0aW9uIHByb2dyZXNzRmV0Y2hCbG9iKHVybCwgb3B0cz17fSwgb25Qcm9ncmVzc0hhbmRsZXIpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICB4aHIucmVzcG9uc2VUeXBlID0gXCJibG9iXCI7XG4gICAgeGhyLm9wZW4ob3B0cy5tZXRob2QgfHwgXCJnZXRcIiwgdXJsKTtcblxuICAgIGlmIChvcHRzLmhlYWRlcnMpIHtcbiAgICAgIE9iamVjdC5rZXlzKG9wdHMuaGVhZGVycykubWFwKCBrZXkgPT4geGhyLnNldFJlcXVlc3RIZWFkZXIoa2V5LCBvcHRzLmhlYWRlcnNba2V5XSkgKTtcbiAgICB9XG4gICAgaWYgKG9uUHJvZ3Jlc3NIYW5kbGVyKSB7XG4gICAgICB4aHIub25wcm9ncmVzcyA9IG9uUHJvZ3Jlc3NIYW5kbGVyOyAvLyBwYXNzZWQgZXZlbnRcbiAgICB9XG4gICAgeGhyLm9ubG9hZCA9IChldmVudCkgPT4gcmVzb2x2ZShldmVudC50YXJnZXQucmVzcG9uc2UpO1xuICAgIHhoci5vbmVycm9yID0gcmVqZWN0O1xuXG4gICAgeGhyLnNlbmQob3B0cy5ib2R5KTtcbiAgfSk7XG59XG5cbi8qXG4gIHBhbm9yYW1hIGhlbHBlciBmdW5jdGlvblxuICovXG5cbmNvbnN0IGRlZmF1bHRTZXR0aW5nID0ge1xuICAvLyB0aGUgRE9NZWxlbWVudChvciB0aGUgQ1NTIHNlbGV0b3Igc3RyaW5nIHRoYXQgcmVmZXJzIHRoZSBET01FbGVtZW50KSBjb250YWluZXIgdGhhdCBjb250YWlucyB0aGlzIHBhbm9yYW1hLmpzIGNvbXBvbmVudFxuICBjb250YWluZXI6IGRvY3VtZW50LmJvZHksXG4gIC8vIHRoZSBpbWFnZSB1cmwgb2YgdGhlIHBhbm9yYW1hXG4gIHVybDogdW5kZWZpbmVkLFxuXG4gIC8vIHRoZSBmaWVsZCBvZiB2aWV3XG4gIGZvdjogNzUsXG4gIC8vIHRoZSBpbml0YWwgZGVncmVlIG9mIHRoZSBjYW1lcmVhIHZpZXcsIGRlZmF1bHQgaXMgWzAsMF0gd2hpY2ggbWVhbnMgdG8gbG9vayBmcm9udCBvbiB0aGUgaG9yaXpvblxuICBjYW1lcmFEZWdyZWU6IFswLCAwXSxcblxuICBzcGhlcmU6IHtcbiAgICByYWRpdXM6IDMwLFxuICAgIG51bVZlcnRpY2FsU2VnbWVudHM6IDE2LCAvLyB0aGUgbnVtYmVyIG9mIHRoZSB2ZXJ0aWNhbCBzZWdtZW50cy4gTGlrZSBFYXJ0aCdzIG1lcmlkaWFucyx0aGUgbGluZSBnb2luZyBwb2xlIHRvIHBvbGUuXG4gICAgbnVtSG9yaXpvbmFsU2VnZW1lbnRzOiA4IC8vIHRoZSBudW1iZXIgb2YgdGhlIGhvcml6b25hbCBzZWdtZW50cy4gTGlrZSBFYXJ0aCdzIHBhcmFsbGVscy5cbiAgfSxcblxuICAvLyB3aGV0aGVyIG9yIG5vdCB0byB1c2UgdGhlIGRldmljZSdzIG9yaWVudGF0aW9uKGNlaWxwaG9uZSBvcml0YXRpb24pIHRvIGNvbnRyb2wgdGhlIGNhbWVyYS5cbiAgLy8gQmUgY2FyZWZ1bCEgTmV3ZXIgYnJvd3NlcnMgbWF5IG5lZWQgdGhlIGRldmljZW9yaWVudGF0aW9uIG11c3QgYmUgdXNlZCBpbiBIVFRQUy5cbiAgZGV2aWNlT3JpZW50YXRpb25FbmFibGVkOiB0cnVlLFxufTtcblxuLyoqXG4gKiBGaWxsIHRoZSBzZXR0aW5nIHdpdGggZGVmYXVsdCBvbmVzLCBleGNlcHQgdGhlIGV4Y2x1ZGUgb25lcyBtYXRjaCB0aGUgYGV4Y2x1ZGVLZXlzYC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0dGluZyAgVGhlIG9iamVjdCBsaXRlcmFsIHRoYXQgaXMgdGFyZ2V0IHNldHRpbmcsIHdob3NlIG1pc3NpbmcgZW50cmllcyB3aWxsIGJlIGZpbGxlZCB3aXRoIGRlZmF1bHQgb25lcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0U2V0dGluZyAgVGhlIG9iamVjdCBsaXRlcmFsICBjb250YWlucyBkZWZhdWx0IHNldHRpbmcgZW50cmllc1xuICogQHBhcmFtIHtTZXR9IFtleGNsdWRlS2V5cz1TZXQoMCldIFdpbGwgTk9UIGNvcHkgdGhlIGVudHJ5IHRoYXQgaXMgaW4gdGhlIGV4Y2x1ZGUga2V5cywgZGVmYXVsdCBpcyBlbXB0eSBzZXQgdGhhdCB0aGVyZSBpcyBubyBleGNsdWRlIGtleXNcbiAqL1xuZnVuY3Rpb24gY29weU1pc3NpbmdWYWx1ZXMoc2V0dGluZywgZGVmYXVsdFNldHRpbmcsIGV4Y2x1ZGVLZXlzPW5ldyBTZXQoKSkge1xuICAvLyBmaWxsIHRoZSBtaXNzaW5nIGVudHJ5IHdpdGggZGVmYXVsdFxuICBmb3IgKGxldCBrZXkgaW4gZGVmYXVsdFNldHRpbmcpIHtcbiAgICBpZiAoIWV4Y2x1ZGVLZXlzLmhhcyhrZXkpICYmICEoa2V5IGluIHNldHRpbmcpKXtcbiAgICAgIHNldHRpbmdba2V5XSA9IGRlZmF1bHRTZXR0aW5nW2tleV07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVNldHRpbmcoc2V0dGluZyl7XG4gIHNldHRpbmcgPSBzZXR0aW5nIHx8IHt9O1xuICBjb25zdCBvYmplY3RTZXR0aW5nS2V5cyA9IFtcInNwaGVyZVwiXTsgLy8gdGhlIHNldHRpbmcgZW50cnkgdmFsdWUgaXMgb2JqZWN0LlxuXG4gIC8vIHRoZXMgb3B0aW9uIG11c3QgYmUgY29udGFpbmVkXG4gIGlmICghc2V0dGluZy51cmwgfHwgdHlwZW9mIHNldHRpbmcudXJsICE9PSBcInN0cmluZ1wiKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJNaXNzaW5nIGB1cmxgIGluIGBzZXR0aW5nYCBvciBUaGUgdHlwZSBvZiBgdXJsYCBpc24ndCBjb3JyZWN0OiB0aGUgaW1hZ2UgdXJsIG11c3QgYmUgcGFzc2VkIGluIGBzZXR0aW5nYCwgYW5kIGl0IHNob3VsZCBiZSBzdHJpbmcuXCIpO1xuICB9XG5cbiAgY29weU1pc3NpbmdWYWx1ZXMoc2V0dGluZywgZGVmYXVsdFNldHRpbmcpO1xuICBvYmplY3RTZXR0aW5nS2V5cy5tYXAoIGtleSA9PiBjb3B5TWlzc2luZ1ZhbHVlcyhzZXR0aW5nW2tleV0sIGRlZmF1bHRTZXR0aW5nW2tleV0pICk7XG5cbiAgLy8gY29udGFpbmVyIGNhbiBiZSBlaXRoZXIgc3RyaW5nIG9yIERPTUVsZW1lbnRcbiAgaWYgKHR5cGVvZiBzZXR0aW5nLmNvbnRhaW5lciA9PT0gXCJzdHJpbmdcIikge1xuICAgIHNldHRpbmcuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZXR0aW5nLmNvbnRhaW5lcik7XG4gIH0gLy8gZWxzZSBET01FbGVtZW50XG5cbiAgcmV0dXJuIHNldHRpbmc7XG59XG5cbi8qXG4gIEpTIGhlbHBlciBmdW5jdGlvblxuKi9cblxuLyoqXG4gKiBDbGFtcCB0aGUgdmFsdWUgYmV0d2VlbiBtaW4gYW5kIG1heCBpbmNsdXNpdmVseS5cbiAqIEBwYXJhbSB7TnVtYmVyIEFycmF5fSByYW5nZSB0aGUgQXJyYXkgY29udGFpbnMgbWluIGFuZCBtYXguXG4gKiBAcGFyYW0ge051bWJlcn0geCB0aGUgdGFyZ2V0IHZhbHVlIHdpbGwgYmUgY2xhbXBlZC5cbiAqIEByZXR1cm4ge051bWJlcn0gdGhlIGNsYW1wZWQgcmVzdWx0IG51bWJlci5cbiAqL1xuZnVuY3Rpb24gY2xhbXAocmFuZ2UsIHgpe1xuICBpZighcmFuZ2UgfHwgcmFuZ2UubGVuZ3RoIDwgMil7XG4gICAgdGhyb3cgRXJyb3IoYFZhbHVlIEVycm9yOiBUaGUgJ3JhbmdlJyBhcmd1bWVudDogJyR7cmFuZ2V9JyxcbiAgICAgIHdoaWNoIGlzIHBhc3NlZCBpbiAnY2xhbXAnIGZ1bmN0aW9uIGlzbid0IGEgYXJyYXkgb2YgdHdvIG51bWJlcnMuXG4gICAgICBJdCBtdXN0IGNvbnRhaW4gbWluIGFuZCBtYXggdmFsdWUuIGApO1xuICB9XG4gIGNvbnN0IG1pbiA9IHJhbmdlWzBdLCBtYXggPSByYW5nZVsxXTtcbiAgaWYgKHggPCBtaW4pIHtcbiAgICB4ID0gbWluO1xuICB9ZWxzZSBpZiAoeCA+IG1heCkge1xuICAgIHggPSBtYXg7XG4gIH1cbiAgcmV0dXJuIHg7XG59XG5cbmZ1bmN0aW9uIGlzUG93ZXJPZjIodmFsdWUpe1xuICByZXR1cm4gKHZhbHVlICYgKHZhbHVlIC0gMSkpID09PSAwOyAvLyBiaW5hcnkgYml0IG9wZXJhdGlvbiB0cmlja1xufVxuXG4vLyBjdXJyeSBmdW5jdGlvbi4gbGV0IGFkZG9uZSA9IGN1cnJ5KGFkZCwgMSk7IGxldCB4ID0gYWRkb25lKDMpIC8vIHggaXMgNFxuZnVuY3Rpb24gY3VycnkobWV0aG9kKXtcbiAgY29uc3Qgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG4gIGNvbnN0IHN0YXJ0QXJncyA9IHNsaWNlLmFwcGx5KGFyZ3VtZW50cykuc2xpY2UoMSk7IC8vIGV4Y2x1ZGUgdGhlIDFzdCBtZXRob2QgYXJndW1lbnRcbiAgcmV0dXJuIGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgcmVzdEFyZ3MgPSBzbGljZS5hcHBseShhcmd1bWVudHMpO1xuICAgIHJldHVybiBtZXRob2QuYXBwbHkobnVsbCwgc3RhcnRBcmdzLmNvbmNhdChyZXN0QXJncykpOyAvLyBjYWxsIGFjdHVhbCBmdW5jdGlvblxuICB9O1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHBhbm9yYW1hO1xuIiwiLypcblRoZSB1c2VyIGludGVyZmFjZSBwYXJ0cyBvZiBwYW5vcmFtYS5qcy4gQSBidW5jaCBvZiBzZXR0aW5ncyBvZiBwYW5vcmFtYSB0byBjb250cm9sIGJ5IHVzZXIuXG4qL1xuXG5pbXBvcnQgY2xhenogZnJvbSBcIi4vY3NzL3Bhbm9yYW1hLmxlc3NcIjtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgdGhlIHRhcmdldCB3aWxsIGJlIGluIGZ1bGxzY3JlZW4gbW9kZSBvciBleGl0IGZ1bGxzY3JlZW4gbW9kZShiYWNrIHRvIG5vcm1hbClcbiAqL1xuY29uc3QgdG9nZ2xlRnVsbHNjcmVlbiA9IChmdW5jdGlvbigpe1xuICBjb25zdCBwcmVmaXhzID0gW1wiXCIsIFwid2Via2l0XCIsIFwibW96XCIsIFwibXNcIl07XG5cbiAgLy8gdGhlIG1ldGhvZHMgaW4gZGlmZmVyZW50IGJyb3N3ZXJzIHdpdGggY29ycmVzcG9uZGluZyBwcmVmaXhcbiAgZnVuY3Rpb24gcmVxdWVzdEZ1bGxzY3JlZW4odGFyZ2V0KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmVmaXhzLmxlbmd0aDsgaSs9MSl7XG4gICAgICBjb25zdCBwcmVmaXggPSBwcmVmaXhzW2ldO1xuICAgICAgY29uc3QgbWV0aG9kTmFtZSA9IHByZWZpeD8gYCR7cHJlZml4fVJlcXVlc3RGdWxsc2NyZWVuYCA6IFwicmVxdWVzdEZ1bGxzY3JlZW5cIjtcblxuICAgICAgaWYodGFyZ2V0W21ldGhvZE5hbWVdKXtcbiAgICAgICAgdGFyZ2V0W21ldGhvZE5hbWVdKCk7IC8vIGNhbGwgdGhlIGNvcnJlc3BvbmRpbmcgbWV0aG9kXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZXhpdEZ1bGxzY3JlZW4oKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmVmaXhzLmxlbmd0aDsgaSs9MSl7XG4gICAgICBjb25zdCBwcmVmaXggPSBwcmVmaXhzW2ldO1xuICAgICAgY29uc3QgbWV0aG9kTmFtZSA9IHByZWZpeD8gYCR7cHJlZml4fUV4aXRGdWxsc2NyZWVuYCA6IFwiRXhpdEZ1bGxzY3JlZW5cIjtcblxuICAgICAgaWYoZG9jdW1lbnRbbWV0aG9kTmFtZV0pe1xuICAgICAgICBkb2N1bWVudFttZXRob2ROYW1lXSgpOyAvLyBjYWxsIHRoZSBjb3JyZXNwb25kaW5nIG1ldGhvZFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgaWYgKCFkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCkge1xuICAgICAgLy8gZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgd291bGQgYmUgbnVsbCwgaWYgdGhlcmUncyBubyBmdWxsc2NyZWVuIGVsZW1lbnQuXG4gICAgICAvLyBvbmx5IG9uZSBlbGVtZW50IGNvdWxkIGJlICBpbiBmdWxsLXNjcmVlbiBtb2RlLlxuICAgICAgcmVxdWVzdEZ1bGxzY3JlZW4odGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhpdEZ1bGxzY3JlZW4oKTtcbiAgICB9XG4gIH07XG59KSgpO1xuXG4vKipcbiAqIFRoZSB0b2dnbGUgYnV0dG9uIG9uIHVzZXIgY29udHJvbCBwYW5uZWwgb2YgVUkuIFRvIGVudGVyIG9yIGV4aXQgZnVsbHNjcmVlbi5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHBhcmVudCB0aGUgcGFyZW50IERPTSBlbGVtZW50IHRvIHB1dCB0aGUgc3dpdGNoIGluXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUZ1bGxzY3JlZW5Td2l0Y2hIZWxwZXIocGFyZW50KSB7XG4gIHJldHVybiBzd2l0Y2hIZWxwZXIoe1xuICAgIHBhcmVudDogcGFyZW50LFxuICAgIGNsYXNzTmFtZTogY2xhenouZnVsbHNjcmVlblN3aXRjaCxcbiAgICBvblN0YXRlQ2xhc3NOYW1lOiBjbGF6ei5pbkZ1bGxzY3JlZW5cbiAgfSk7XG59XG5cblxuLy8gdGhlIHBhcnQgdGhhdCBjb250cm9scyB0aGUgZGV2aWNlIG9yaWVudGF0aW9uKGNlaWxwaG9uZSBtb3Rpb24pXG5cbi8qKlxuICogQ3JlYXRlIGEgRE9NRWxlbWVudCB0aGF0IGlzIHVzZWQgdG8gc3dpdGNoIG9yaWVudGF0aW9uIHN0YXR1cy4gUHJvdmlkZVxuICogdGhlIGZ1bmN0aW9ucyB0aGF0IGVuYWJsZSBhbmQgZGlzYWJsZSB0aGUgb3JpZW50YXRpb24gdG8gd29yayB0b2dldGhlci5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHBhcmVudCB0aGUgcGFyZW50IERPTUVsZW1lbnQgY29udGFpbnMgdGhpcyBzd2l0Y2hcbiAqL1xuZnVuY3Rpb24gY3JlYXRlT3JpZW50YXRpb25Td2l0Y2hIZWxwZXIocGFyZW50KSB7XG4gIHJldHVybiBzd2l0Y2hIZWxwZXIoe1xuICAgIHBhcmVudDogcGFyZW50LFxuICAgIGNsYXNzTmFtZTogY2xhenoub3JpZW50YXRpb25Td2l0Y2gsXG4gICAgb2ZmU3RhdGVDbGFzc05hbWU6IGNsYXp6LmRpc2FibGVkLFxuICB9KTtcbn1cblxuLyoqXG4gKiB0aGUgaGVscGVyIGluY2x1ZGVzIGZ1bmN0aW9ucyB0aGF0IG1haW50YW5jZSBhIHN3aXRjaCBjb25wb25lbnQ6XG4gKiBjcmVhdGUgc3dpdGNoIGNvbXBvbmVudCwgY3JlYXRlIHRoZSBET00gZWxlbWVudCBhbmQgYWxzbyBtYW5hZ2VcbiAqIHRoZSBjbGFzc25hbWUgdG8gY2hhbmdlIHdoZW4gdGhlIHN0YXRlIGlzIGNoYW5nZWQob24gb3Igb2ZmKS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdCBMaXRlcmFsfSBzZXR0aW5nIGNvbnRhaW5zIHRoZSBzZXR0aW5ncyBvZiBzd2l0Y2hcbiAqIEBwYXJhbSB7RWxlbWVudH0gc2V0dGluZy5wYXJlbnQgIHRoZSBwYXJlbnQgY29udGFpbmVyLCB0aGUgc3dpdGNoIHdvdWxkIGJlIHB1dCBpbnRvIGl0LlxuICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nIGFycmF5fSBzZXR0aW5nLmNsYXNzTmFtZSB0aGUgc3dpdGNoJ3MgY3NzIGNsYXNzIG5hbWUuIGNhbiBiZSBlaXRoZXIgb25lIG9yIG11bHRpIG9uZXMuXG4gKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmcgYXJyYXl9IFtzZXR0aW5nLm9uU3RhdGVDbGFzc05hbWU9dW5kZWZpbmVkXSB0aGUgc3dpdGNoIG9uIHN0YXRlIGNsYXNzIG5hbWUsXG4gKiAgd2hlbiBzd2l0Y2ggaXMgb24sIHRoZSBET00gZWxlbWVudCB3b3VsZCBjb250YWlucyB0aGlzIGNsYXNzbmFtZS4gb3RoZXJ3aXNlIHJlbW92ZSB0aGUgY2xhc3NuYW1lIHdoZW4gc3dpdGNoIGlzIG9mZlxuICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nIGFycmF5fSBbc2V0dGluZy5vZmZTdGF0ZUNsYXNzTmFtZT11bmRlZmluZWRdIHRoZSBvcHBvc2l0ZSBzaWRlIG9mICdvblN0YXRlQ2xhc3NOYW1lJyxcbiAqICB3aGVuIHN3aXRjaCBpcyBvZmYsIGNvbnRhaW5zIHRoZSBjbGFzc25hbWUsIG90aGVyd2lzZSByZW1vdmUgdGhpcyBvbmUuXG4gKiBAcGFyYW0ge3N0cmluZ30gW3NldHRpbmcudGFnTmFtZT1cInNwYW5cIl0gdGhlIHN3aXRjaCdzIERPTSBlbGVtZW50IHRhZywgZGVmYXVsdCBpcyBcInNwYW5cIi5cbiAqIEByZXR1cm4ge09iamVjdCBMaXRlcmFsfSByZXR1cm4gYSBvYmplY3QgbGl0ZXJhbCBjb250YWluc3RoZSBmdW5jdGlvbnMgdGhhdCB0byBjcmVhdGUgYW5kIGZpbHAgdGhlIHN3aXRjaC5cbiAqL1xuZnVuY3Rpb24gc3dpdGNoSGVscGVyKHtwYXJlbnQsIGNsYXNzTmFtZSwgb25TdGF0ZUNsYXNzTmFtZSwgb2ZmU3RhdGVDbGFzc05hbWUsIHRhZ05hbWV9KSB7XG4gIGxldCBlbDtcbiAgbGV0IHN0YXRlO1xuXG4gIGlmKCF0YWdOYW1lKSB7XG4gICAgdGFnTmFtZSA9IFwic3BhblwiO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgRE9NIGVsZW1uZXQgb2YgdGhlIHN3aXRjaC5cbiAgICogQHBhcmFtIHtib29sZWFufSBzdGF0ZSB0aGUgaW5pdCBzdGF0ZSBvZiB0aGUgc3dpdGNoIHdoZW4gaXMgY3JlYXRlZC4gZmFsc2UgaXMgb2ZmIHRydWUgaXMgb25cbiAgICogQHJldHVybiB7RWxlbWVudH0gdGhlIGNyZWF0ZWQgRE9NIGVsZW1lbnQuXG4gICAqL1xuICBmdW5jdGlvbiBjcmVhdGUoc3RhdGU9ZmFsc2UpIHtcbiAgICBpZiAodHlwZW9mIGVsID09PSBcInVuZGVmaW5lZFwiKSB7IC8vIGNyZWF0ZSBpZiBub3QgZXhpc3RzIGJlZm9yZVxuICAgICAgZWwgPSBjcmVhdGVFbCh0YWdOYW1lLCBjbGFzc05hbWUpO1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGVsKTsgLy8gcHV0IGluc2lkZSBvZiB0aGUgY29udGFpbmVyLlxuICAgIH1cbiAgICB1cGRhdGVTdGF0ZShzdGF0ZSk7XG5cbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICAvKipcbiAgICogY2hhbmdlIHRoZSBzdGF0ZS5cbiAgICogQHBhcmFtIHtib29sZWFufSBfc3RhdGUgdGhlIHN3aXRjaCBzdGF0ZSB3b3VsZCBiZSBjaGFuZ2UgdG9cbiAgICogIHRoZSBhcmd1bWVudC4gZmFsc2UgaXMgb2ZmIHRydWUgaXMgb24uXG4gICAqL1xuICBmdW5jdGlvbiB1cGRhdGVTdGF0ZShfc3RhdGUpIHtcbiAgICBzdGF0ZSA9IF9zdGF0ZTtcbiAgICBpZiAoIXN0YXRlKSB7IC8vIG9mZiBzdGF0ZSBhZGQgb2ZmIGNsYXNzTmFtZSBvciByZW1vdmUgb24gY2xhc3NOYW1lIGlmIHNwZWNpZmllZFxuICAgICAgaWYgKG9mZlN0YXRlQ2xhc3NOYW1lKSB7ZWwuY2xhc3NMaXN0LmFkZChvZmZTdGF0ZUNsYXNzTmFtZSk7fVxuICAgICAgaWYgKG9uU3RhdGVDbGFzc05hbWUpIHtlbC5jbGFzc0xpc3QucmVtb3ZlKG9uU3RhdGVDbGFzc05hbWUpO31cbiAgICB9IGVsc2UgeyAvLyBvdGhlcndpc2Ugb24gc3RhdGUgcmVtb3ZlIG9mZiBjbGFzc05hbWUgb3IgYWRkIG9uIGNsYXNzTmFtZSBpZiBzcGVjaWZpZWRcbiAgICAgIGlmIChvblN0YXRlQ2xhc3NOYW1lKSB7ZWwuY2xhc3NMaXN0LmFkZChvblN0YXRlQ2xhc3NOYW1lKTt9XG4gICAgICBpZiAob2ZmU3RhdGVDbGFzc05hbWUpIHtlbC5jbGFzc0xpc3QucmVtb3ZlKG9mZlN0YXRlQ2xhc3NOYW1lKTt9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGZsaXAgdGhlIHN3aXRjaCBmb3IgY29udGludW91cyBcIm9uXCIgb3IgXCJvZmZcIlxuICAgKiBAcmV0dXJuIHtib29sfSByZXR1cm4gdGhlIGN1cnJlbnQgc3RhdGUgb2Ygc3dpdGNoLiBmYWxzZSBpcyBvZmYgdHJ1ZSBpcyBvbi5cbiAgICovXG4gIGZ1bmN0aW9uIGZsaXAoKXtcbiAgICBzdGF0ZSA9ICFzdGF0ZTsgLy8gZmxpcCBzdGF0ZVxuICAgIHVwZGF0ZVN0YXRlKHN0YXRlKTtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7RWxlbWVudH0gZ2V0IHRoZSByZWZlcmVuY2Ugb2YgdGhlIHN3aXRjaCdzIERPTSBlbGVtZW50XG4gICAqL1xuICBmdW5jdGlvbiBnZXQoKXtcbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZSxcbiAgICBnZXQsXG4gICAgdXBkYXRlU3RhdGUsXG4gICAgZmxpcFxuICB9O1xufVxuXG4vKipcbiAqIEEgaGVscGVyIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIERPTSBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWdOYW1lICB0aGUgY3JlYXRlZCBET00gdGFnIG5hbWUsIGUuZyBcImRpdlwiLCBcInNwYW5cIlxuICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nIGFycmF5fSBbY2xhc3NOYW1lcz1cIlwiXSB0aGUgRE9NIGVsZW1lbnQgY2xhc3NlcywgY291bGQgYmUgYVxuICogIHN0cmluZyBzcGVjaWZpZXMgY2xhc3MgbmFtZSB0aGF0IGNhbiBiZSBzaW5nbGUgb25lIG9yIG11bHRpIG9uZXMsIGUuZyBcIm15LWJ1dHRvblwiLCBcIm15LWJ1dHRvbiBkaXNhYmxlZFwiO1xuICogIGFsc28gY291bGQgYmUgYSBzdHJpbmcgb3Igc3RyaW5nIGFycmF5IGNvbnRhaW5zIGEgYnV0Y2ggb2YgY2xhc3MgbmFtZXMsIGUuZyBbXCJteS1idXR0b25cIiwgXCJkaXNhYmxlZFwiXS5cbiAqXG4gKiBAcmV0dXJuIHtFbGVtZW50fSB0aGUgRE9NIGVsZW1lbnQgdGhhdCBpcyBjcmVhdGVkXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUVsKHRhZ05hbWUsIGNsYXNzTmFtZXM9XCJcIikge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgaWYodHlwZW9mIGNsYXNzTmFtZXMgIT09IFwidW5kZWZpbmVkXCIpe1xuICAgIGVsLmNsYXNzTmFtZSA9IEFycmF5LmlzQXJyYXkoY2xhc3NOYW1lcykgP1xuICAgICAgY2xhc3NOYW1lcy5qb2luKFwiIFwiKSA6IC8vIGFycmF5IHRvIHN0cmluZ1xuICAgICAgY2xhc3NOYW1lczsgLy8gc3RyaW5nXG4gIH1cbiAgcmV0dXJuIGVsO1xufVxuXG5cbmV4cG9ydCB7XG4gIGNyZWF0ZUZ1bGxzY3JlZW5Td2l0Y2hIZWxwZXIsXG4gIHRvZ2dsZUZ1bGxzY3JlZW4sXG5cbiAgY3JlYXRlT3JpZW50YXRpb25Td2l0Y2hIZWxwZXIsXG4gIHN3aXRjaEhlbHBlcixcbn07XG5cbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAxNCwgR3JlZ2cgVGF2YXJlcy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4gKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlXG4gKiBtZXQ6XG4gKlxuICogICAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcbiAqIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqICAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmVcbiAqIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXJcbiAqIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiAqIGRpc3RyaWJ1dGlvbi5cbiAqICAgICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgR3JlZ2cgVGF2YXJlcy4gbm9yIHRoZSBuYW1lcyBvZiBoaXNcbiAqIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tXG4gKiB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlNcbiAqIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1RcbiAqIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUlxuICogQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFRcbiAqIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLFxuICogU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVFxuICogTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4gKiBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTllcbiAqIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbiAqIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRVxuICogT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuXG4vKipcbiAqIFZhcmlvdXMgM2QgbWF0aCBmdW5jdGlvbnMuXG4gKlxuICogQG1vZHVsZSB3ZWJnbC0zZC1tYXRoXG4gKi9cbihmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG4gIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jyl7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH1lbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG4gICAgZGVmaW5lKFtdLCBmYWN0b3J5KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBCcm93c2VyIGdsb2JhbHNcbiAgICByb290Lm00ID0gZmFjdG9yeSgpO1xuICB9XG59KHRoaXMsIGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICAvKipcbiAgICogQW4gYXJyYXkgb3IgdHlwZWQgYXJyYXkgd2l0aCAzIHZhbHVlcy5cbiAgICogQHR5cGVkZWYge251bWJlcltdfFR5cGVkQXJyYXl9IFZlY3RvcjNcbiAgICogQG1lbWJlck9mIG1vZHVsZTp3ZWJnbC0zZC1tYXRoXG4gICAqL1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvciB0eXBlZCBhcnJheSB3aXRoIDQgdmFsdWVzLlxuICAgKiBAdHlwZWRlZiB7bnVtYmVyW118VHlwZWRBcnJheX0gVmVjdG9yNFxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG5cbiAgLyoqXG4gICAqIEFuIGFycmF5IG9yIHR5cGVkIGFycmF5IHdpdGggMTYgdmFsdWVzLlxuICAgKiBAdHlwZWRlZiB7bnVtYmVyW118VHlwZWRBcnJheX0gTWF0cml4NFxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG5cbiAgLyoqXG4gICAqIFRha2VzIHR3byA0LWJ5LTQgbWF0cmljZXMsIGEgYW5kIGIsIGFuZCBjb21wdXRlcyB0aGUgcHJvZHVjdCBpbiB0aGUgb3JkZXJcbiAgICogdGhhdCBwcmUtY29tcG9zZXMgYiB3aXRoIGEuICBJbiBvdGhlciB3b3JkcywgdGhlIG1hdHJpeCByZXR1cm5lZCB3aWxsXG4gICAqIHRyYW5zZm9ybSBieSBiIGZpcnN0IGFuZCB0aGVuIGEuICBOb3RlIHRoaXMgaXMgc3VidGx5IGRpZmZlcmVudCBmcm9tIGp1c3RcbiAgICogbXVsdGlwbHlpbmcgdGhlIG1hdHJpY2VzIHRvZ2V0aGVyLiAgRm9yIGdpdmVuIGEgYW5kIGIsIHRoaXMgZnVuY3Rpb24gcmV0dXJuc1xuICAgKiB0aGUgc2FtZSBvYmplY3QgaW4gYm90aCByb3ctbWFqb3IgYW5kIGNvbHVtbi1tYWpvciBtb2RlLlxuICAgKiBAcGFyYW0ge01hdHJpeDR9IGEgQSBtYXRyaXguXG4gICAqIEBwYXJhbSB7TWF0cml4NH0gYiBBIG1hdHJpeC5cbiAgICogQHBhcmFtIHtNYXRyaXg0fSBbZHN0XSBvcHRpb25hbCBtYXRyaXggdG8gc3RvcmUgcmVzdWx0XG4gICAqIEByZXR1cm4ge01hdHJpeDR9IGRzdCBvciBhIG5ldyBtYXRyaXggaWYgbm9uZSBwcm92aWRlZFxuICAgKi9cbiAgZnVuY3Rpb24gbXVsdGlwbHkoYSwgYiwgZHN0KSB7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuICAgIHZhciBiMDAgPSBiWzAgKiA0ICsgMF07XG4gICAgdmFyIGIwMSA9IGJbMCAqIDQgKyAxXTtcbiAgICB2YXIgYjAyID0gYlswICogNCArIDJdO1xuICAgIHZhciBiMDMgPSBiWzAgKiA0ICsgM107XG4gICAgdmFyIGIxMCA9IGJbMSAqIDQgKyAwXTtcbiAgICB2YXIgYjExID0gYlsxICogNCArIDFdO1xuICAgIHZhciBiMTIgPSBiWzEgKiA0ICsgMl07XG4gICAgdmFyIGIxMyA9IGJbMSAqIDQgKyAzXTtcbiAgICB2YXIgYjIwID0gYlsyICogNCArIDBdO1xuICAgIHZhciBiMjEgPSBiWzIgKiA0ICsgMV07XG4gICAgdmFyIGIyMiA9IGJbMiAqIDQgKyAyXTtcbiAgICB2YXIgYjIzID0gYlsyICogNCArIDNdO1xuICAgIHZhciBiMzAgPSBiWzMgKiA0ICsgMF07XG4gICAgdmFyIGIzMSA9IGJbMyAqIDQgKyAxXTtcbiAgICB2YXIgYjMyID0gYlszICogNCArIDJdO1xuICAgIHZhciBiMzMgPSBiWzMgKiA0ICsgM107XG4gICAgdmFyIGEwMCA9IGFbMCAqIDQgKyAwXTtcbiAgICB2YXIgYTAxID0gYVswICogNCArIDFdO1xuICAgIHZhciBhMDIgPSBhWzAgKiA0ICsgMl07XG4gICAgdmFyIGEwMyA9IGFbMCAqIDQgKyAzXTtcbiAgICB2YXIgYTEwID0gYVsxICogNCArIDBdO1xuICAgIHZhciBhMTEgPSBhWzEgKiA0ICsgMV07XG4gICAgdmFyIGExMiA9IGFbMSAqIDQgKyAyXTtcbiAgICB2YXIgYTEzID0gYVsxICogNCArIDNdO1xuICAgIHZhciBhMjAgPSBhWzIgKiA0ICsgMF07XG4gICAgdmFyIGEyMSA9IGFbMiAqIDQgKyAxXTtcbiAgICB2YXIgYTIyID0gYVsyICogNCArIDJdO1xuICAgIHZhciBhMjMgPSBhWzIgKiA0ICsgM107XG4gICAgdmFyIGEzMCA9IGFbMyAqIDQgKyAwXTtcbiAgICB2YXIgYTMxID0gYVszICogNCArIDFdO1xuICAgIHZhciBhMzIgPSBhWzMgKiA0ICsgMl07XG4gICAgdmFyIGEzMyA9IGFbMyAqIDQgKyAzXTtcbiAgICBkc3RbIDBdID0gYjAwICogYTAwICsgYjAxICogYTEwICsgYjAyICogYTIwICsgYjAzICogYTMwO1xuICAgIGRzdFsgMV0gPSBiMDAgKiBhMDEgKyBiMDEgKiBhMTEgKyBiMDIgKiBhMjEgKyBiMDMgKiBhMzE7XG4gICAgZHN0WyAyXSA9IGIwMCAqIGEwMiArIGIwMSAqIGExMiArIGIwMiAqIGEyMiArIGIwMyAqIGEzMjtcbiAgICBkc3RbIDNdID0gYjAwICogYTAzICsgYjAxICogYTEzICsgYjAyICogYTIzICsgYjAzICogYTMzO1xuICAgIGRzdFsgNF0gPSBiMTAgKiBhMDAgKyBiMTEgKiBhMTAgKyBiMTIgKiBhMjAgKyBiMTMgKiBhMzA7XG4gICAgZHN0WyA1XSA9IGIxMCAqIGEwMSArIGIxMSAqIGExMSArIGIxMiAqIGEyMSArIGIxMyAqIGEzMTtcbiAgICBkc3RbIDZdID0gYjEwICogYTAyICsgYjExICogYTEyICsgYjEyICogYTIyICsgYjEzICogYTMyO1xuICAgIGRzdFsgN10gPSBiMTAgKiBhMDMgKyBiMTEgKiBhMTMgKyBiMTIgKiBhMjMgKyBiMTMgKiBhMzM7XG4gICAgZHN0WyA4XSA9IGIyMCAqIGEwMCArIGIyMSAqIGExMCArIGIyMiAqIGEyMCArIGIyMyAqIGEzMDtcbiAgICBkc3RbIDldID0gYjIwICogYTAxICsgYjIxICogYTExICsgYjIyICogYTIxICsgYjIzICogYTMxO1xuICAgIGRzdFsxMF0gPSBiMjAgKiBhMDIgKyBiMjEgKiBhMTIgKyBiMjIgKiBhMjIgKyBiMjMgKiBhMzI7XG4gICAgZHN0WzExXSA9IGIyMCAqIGEwMyArIGIyMSAqIGExMyArIGIyMiAqIGEyMyArIGIyMyAqIGEzMztcbiAgICBkc3RbMTJdID0gYjMwICogYTAwICsgYjMxICogYTEwICsgYjMyICogYTIwICsgYjMzICogYTMwO1xuICAgIGRzdFsxM10gPSBiMzAgKiBhMDEgKyBiMzEgKiBhMTEgKyBiMzIgKiBhMjEgKyBiMzMgKiBhMzE7XG4gICAgZHN0WzE0XSA9IGIzMCAqIGEwMiArIGIzMSAqIGExMiArIGIzMiAqIGEyMiArIGIzMyAqIGEzMjtcbiAgICBkc3RbMTVdID0gYjMwICogYTAzICsgYjMxICogYTEzICsgYjMyICogYTIzICsgYjMzICogYTMzO1xuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBhZGRzIDIgdmVjdG9yczNzXG4gICAqIEBwYXJhbSB7VmVjdG9yM30gYSBhXG4gICAqIEBwYXJhbSB7VmVjdG9yM30gYiBiXG4gICAqIEBwYXJhbSB7VmVjdG9yM30gZHN0IG9wdGlvbmFsIHZlY3RvcjMgdG8gc3RvcmUgcmVzdWx0XG4gICAqIEByZXR1cm4ge1ZlY3RvcjN9IGRzdCBvciBuZXcgVmVjdG9yMyBpZiBub3QgcHJvdmlkZWRcbiAgICogQG1lbWJlck9mIG1vZHVsZTp3ZWJnbC0zZC1tYXRoXG4gICAqL1xuICBmdW5jdGlvbiBhZGRWZWN0b3JzKGEsIGIsIGRzdCkge1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgRmxvYXQzMkFycmF5KDMpO1xuICAgIGRzdFswXSA9IGFbMF0gKyBiWzBdO1xuICAgIGRzdFsxXSA9IGFbMV0gKyBiWzFdO1xuICAgIGRzdFsyXSA9IGFbMl0gKyBiWzJdO1xuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuICAvKipcbiAgICogc3VidHJhY3RzIDIgdmVjdG9yczNzXG4gICAqIEBwYXJhbSB7VmVjdG9yM30gYSBhXG4gICAqIEBwYXJhbSB7VmVjdG9yM30gYiBiXG4gICAqIEBwYXJhbSB7VmVjdG9yM30gZHN0IG9wdGlvbmFsIHZlY3RvcjMgdG8gc3RvcmUgcmVzdWx0XG4gICAqIEByZXR1cm4ge1ZlY3RvcjN9IGRzdCBvciBuZXcgVmVjdG9yMyBpZiBub3QgcHJvdmlkZWRcbiAgICogQG1lbWJlck9mIG1vZHVsZTp3ZWJnbC0zZC1tYXRoXG4gICAqL1xuICBmdW5jdGlvbiBzdWJ0cmFjdFZlY3RvcnMoYSwgYiwgZHN0KSB7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBGbG9hdDMyQXJyYXkoMyk7XG4gICAgZHN0WzBdID0gYVswXSAtIGJbMF07XG4gICAgZHN0WzFdID0gYVsxXSAtIGJbMV07XG4gICAgZHN0WzJdID0gYVsyXSAtIGJbMl07XG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBub3JtYWxpemVzIGEgdmVjdG9yLlxuICAgKiBAcGFyYW0ge1ZlY3RvcjN9IHYgdmVjdG9yIHRvIG5vcm1hbHppZVxuICAgKiBAcGFyYW0ge1ZlY3RvcjN9IGRzdCBvcHRpb25hbCB2ZWN0b3IzIHRvIHN0b3JlIHJlc3VsdFxuICAgKiBAcmV0dXJuIHtWZWN0b3IzfSBkc3Qgb3IgbmV3IFZlY3RvcjMgaWYgbm90IHByb3ZpZGVkXG4gICAqIEBtZW1iZXJPZiBtb2R1bGU6d2ViZ2wtM2QtbWF0aFxuICAgKi9cbiAgZnVuY3Rpb24gbm9ybWFsaXplKHYsIGRzdCkge1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgRmxvYXQzMkFycmF5KDMpO1xuICAgIHZhciBsZW5ndGggPSBNYXRoLnNxcnQodlswXSAqIHZbMF0gKyB2WzFdICogdlsxXSArIHZbMl0gKiB2WzJdKTtcbiAgICAvLyBtYWtlIHN1cmUgd2UgZG9uJ3QgZGl2aWRlIGJ5IDAuXG4gICAgaWYgKGxlbmd0aCA+IDAuMDAwMDEpIHtcbiAgICAgIGRzdFswXSA9IHZbMF0gLyBsZW5ndGg7XG4gICAgICBkc3RbMV0gPSB2WzFdIC8gbGVuZ3RoO1xuICAgICAgZHN0WzJdID0gdlsyXSAvIGxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wdXRlcyB0aGUgbGVuZ3RoIG9mIGEgdmVjZ29yXG4gICAqIEBwYXJhbSB7VmVjdG9yM30gdiB2ZWN0b3IgdG8gdGFrZSBsZW5ndGggb2ZcbiAgICogQHJldHVybiB7bnVtYmVyfSBsZW5ndGggb2YgdmVjdG9yXG4gICAqL1xuICBmdW5jdGlvbiBsZW5ndGgodikge1xuICAgIHJldHVybiBNYXRoLnNxcnQodlswXSAqIHZbMF0gKyB2WzFdICogdlsxXSArIHZbMl0gKiB2WzJdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wdXRlcyB0aGUgY3Jvc3MgcHJvZHVjdCBvZiAyIHZlY3RvcnMzc1xuICAgKiBAcGFyYW0ge1ZlY3RvcjN9IGEgYVxuICAgKiBAcGFyYW0ge1ZlY3RvcjN9IGIgYlxuICAgKiBAcGFyYW0ge1ZlY3RvcjN9IGRzdCBvcHRpb25hbCB2ZWN0b3IzIHRvIHN0b3JlIHJlc3VsdFxuICAgKiBAcmV0dXJuIHtWZWN0b3IzfSBkc3Qgb3IgbmV3IFZlY3RvcjMgaWYgbm90IHByb3ZpZGVkXG4gICAqIEBtZW1iZXJPZiBtb2R1bGU6d2ViZ2wtM2QtbWF0aFxuICAgKi9cbiAgZnVuY3Rpb24gY3Jvc3MoYSwgYiwgZHN0KSB7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBGbG9hdDMyQXJyYXkoMyk7XG4gICAgZHN0WzBdID0gYVsxXSAqIGJbMl0gLSBhWzJdICogYlsxXTtcbiAgICBkc3RbMV0gPSBhWzJdICogYlswXSAtIGFbMF0gKiBiWzJdO1xuICAgIGRzdFsyXSA9IGFbMF0gKiBiWzFdIC0gYVsxXSAqIGJbMF07XG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wdXRlcyB0aGUgZG90IHByb2R1Y3Qgb2YgdHdvIHZlY3RvcnM7IGFzc3VtZXMgYm90aCB2ZWN0b3JzIGhhdmVcbiAgICogdGhyZWUgZW50cmllcy5cbiAgICogQHBhcmFtIHtWZWN0b3IzfSBhIE9wZXJhbmQgdmVjdG9yLlxuICAgKiBAcGFyYW0ge1ZlY3RvcjN9IGIgT3BlcmFuZCB2ZWN0b3IuXG4gICAqIEByZXR1cm4ge251bWJlcn0gZG90IHByb2R1Y3RcbiAgICogQG1lbWJlck9mIG1vZHVsZTp3ZWJnbC0zZC1tYXRoXG4gICAqL1xuICBmdW5jdGlvbiBkb3QoYSwgYikge1xuICAgIHJldHVybiAoYVswXSAqIGJbMF0pICsgKGFbMV0gKiBiWzFdKSArIChhWzJdICogYlsyXSk7XG4gIH1cblxuICAvKipcbiAgICogQ29tcHV0ZXMgdGhlIGRpc3RhbmNlIHNxdWFyZWQgYmV0d2VlbiAyIHBvaW50c1xuICAgKiBAcGFyYW0ge1ZlY3RvcjN9IGFcbiAgICogQHBhcmFtIHtWZWN0b3IzfSBiXG4gICAqIEByZXR1cm4ge251Ym1lcn0gZGlzdGFuY2Ugc3F1YXJlZCBiZXR3ZWVuIGEgYW5kIGJcbiAgICovXG4gIGZ1bmN0aW9uIGRpc3RhbmNlU3EoYSwgYikge1xuICAgIGNvbnN0IGR4ID0gYVswXSAtIGJbMF07XG4gICAgY29uc3QgZHkgPSBhWzFdIC0gYlsxXTtcbiAgICBjb25zdCBkeiA9IGFbMl0gLSBiWzJdO1xuICAgIHJldHVybiBkeCAqIGR4ICsgZHkgKiBkeSArIGR6ICogZHo7XG4gIH1cblxuICAvKipcbiAgICogQ29tcHV0ZXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMiBwb2ludHNcbiAgICogQHBhcmFtIHtWZWN0b3IzfSBhXG4gICAqIEBwYXJhbSB7VmVjdG9yM30gYlxuICAgKiBAcmV0dXJuIHtudWJtZXJ9IGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxuICAgKi9cbiAgZnVuY3Rpb24gZGlzdGFuY2UoYSwgYikge1xuICAgIHJldHVybiBNYXRoLnNxcnQoZGlzdGFuY2VTcShhLCBiKSk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZXMgYW4gaWRlbnRpdHkgbWF0cml4LlxuICAgKiBAcGFyYW0ge01hdHJpeDR9IFtkc3RdIG9wdGlvbmFsIG1hdHJpeCB0byBzdG9yZSByZXN1bHRcbiAgICogQHJldHVybiB7TWF0cml4NH0gZHN0IG9yIGEgbmV3IG1hdHJpeCBpZiBub25lIHByb3ZpZGVkXG4gICAqIEBtZW1iZXJPZiBtb2R1bGU6d2ViZ2wtM2QtbWF0aFxuICAgKi9cbiAgZnVuY3Rpb24gaWRlbnRpdHkoZHN0KSB7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuXG4gICAgZHN0WyAwXSA9IDE7XG4gICAgZHN0WyAxXSA9IDA7XG4gICAgZHN0WyAyXSA9IDA7XG4gICAgZHN0WyAzXSA9IDA7XG4gICAgZHN0WyA0XSA9IDA7XG4gICAgZHN0WyA1XSA9IDE7XG4gICAgZHN0WyA2XSA9IDA7XG4gICAgZHN0WyA3XSA9IDA7XG4gICAgZHN0WyA4XSA9IDA7XG4gICAgZHN0WyA5XSA9IDA7XG4gICAgZHN0WzEwXSA9IDE7XG4gICAgZHN0WzExXSA9IDA7XG4gICAgZHN0WzEyXSA9IDA7XG4gICAgZHN0WzEzXSA9IDA7XG4gICAgZHN0WzE0XSA9IDA7XG4gICAgZHN0WzE1XSA9IDE7XG5cbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zcG9zZXMgYSBtYXRyaXguXG4gICAqIEBwYXJhbSB7TWF0cml4NH0gbSBtYXRyaXggdG8gdHJhbnNwb3NlLlxuICAgKiBAcGFyYW0ge01hdHJpeDR9IFtkc3RdIG9wdGlvbmFsIG1hdHJpeCB0byBzdG9yZSByZXN1bHRcbiAgICogQHJldHVybiB7TWF0cml4NH0gZHN0IG9yIGEgbmV3IG1hdHJpeCBpZiBub25lIHByb3ZpZGVkXG4gICAqIEBtZW1iZXJPZiBtb2R1bGU6d2ViZ2wtM2QtbWF0aFxuICAgKi9cbiAgZnVuY3Rpb24gdHJhbnNwb3NlKG0sIGRzdCkge1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgRmxvYXQzMkFycmF5KDE2KTtcblxuICAgIGRzdFsgMF0gPSBtWzBdO1xuICAgIGRzdFsgMV0gPSBtWzRdO1xuICAgIGRzdFsgMl0gPSBtWzhdO1xuICAgIGRzdFsgM10gPSBtWzEyXTtcbiAgICBkc3RbIDRdID0gbVsxXTtcbiAgICBkc3RbIDVdID0gbVs1XTtcbiAgICBkc3RbIDZdID0gbVs5XTtcbiAgICBkc3RbIDddID0gbVsxM107XG4gICAgZHN0WyA4XSA9IG1bMl07XG4gICAgZHN0WyA5XSA9IG1bNl07XG4gICAgZHN0WzEwXSA9IG1bMTBdO1xuICAgIGRzdFsxMV0gPSBtWzE0XTtcbiAgICBkc3RbMTJdID0gbVszXTtcbiAgICBkc3RbMTNdID0gbVs3XTtcbiAgICBkc3RbMTRdID0gbVsxMV07XG4gICAgZHN0WzE1XSA9IG1bMTVdO1xuXG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbG9va0F0IG1hdHJpeC5cbiAgICogVGhpcyBpcyBhIHdvcmxkIG1hdHJpeCBmb3IgYSBjYW1lcmEuIEluIG90aGVyIHdvcmRzIGl0IHdpbGwgdHJhbnNmb3JtXG4gICAqIGZyb20gdGhlIG9yaWdpbiB0byBhIHBsYWNlIGFuZCBvcmllbnRhdGlvbiBpbiB0aGUgd29ybGQuIEZvciBhIHZpZXdcbiAgICogbWF0cml4IHRha2UgdGhlIGludmVyc2Ugb2YgdGhpcy5cbiAgICogQHBhcmFtIHtWZWN0b3IzfSBjYW1lcmFQb3NpdGlvbiBwb3NpdGlvbiBvZiB0aGUgY2FtZXJhXG4gICAqIEBwYXJhbSB7VmVjdG9yM30gdGFyZ2V0IHBvc2l0aW9uIG9mIHRoZSB0YXJnZXRcbiAgICogQHBhcmFtIHtWZWN0b3IzfSB1cCBkaXJlY3Rpb25cbiAgICogQHBhcmFtIHtNYXRyaXg0fSBbZHN0XSBvcHRpb25hbCBtYXRyaXggdG8gc3RvcmUgcmVzdWx0XG4gICAqIEByZXR1cm4ge01hdHJpeDR9IGRzdCBvciBhIG5ldyBtYXRyaXggaWYgbm9uZSBwcm92aWRlZFxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG4gIGZ1bmN0aW9uIGxvb2tBdChjYW1lcmFQb3NpdGlvbiwgdGFyZ2V0LCB1cCwgZHN0KSB7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuICAgIHZhciB6QXhpcyA9IG5vcm1hbGl6ZShcbiAgICAgICAgc3VidHJhY3RWZWN0b3JzKGNhbWVyYVBvc2l0aW9uLCB0YXJnZXQpKTtcbiAgICB2YXIgeEF4aXMgPSBub3JtYWxpemUoY3Jvc3ModXAsIHpBeGlzKSk7XG4gICAgdmFyIHlBeGlzID0gbm9ybWFsaXplKGNyb3NzKHpBeGlzLCB4QXhpcykpO1xuXG4gICAgZHN0WyAwXSA9IHhBeGlzWzBdO1xuICAgIGRzdFsgMV0gPSB4QXhpc1sxXTtcbiAgICBkc3RbIDJdID0geEF4aXNbMl07XG4gICAgZHN0WyAzXSA9IDA7XG4gICAgZHN0WyA0XSA9IHlBeGlzWzBdO1xuICAgIGRzdFsgNV0gPSB5QXhpc1sxXTtcbiAgICBkc3RbIDZdID0geUF4aXNbMl07XG4gICAgZHN0WyA3XSA9IDA7XG4gICAgZHN0WyA4XSA9IHpBeGlzWzBdO1xuICAgIGRzdFsgOV0gPSB6QXhpc1sxXTtcbiAgICBkc3RbMTBdID0gekF4aXNbMl07XG4gICAgZHN0WzExXSA9IDA7XG4gICAgZHN0WzEyXSA9IGNhbWVyYVBvc2l0aW9uWzBdO1xuICAgIGRzdFsxM10gPSBjYW1lcmFQb3NpdGlvblsxXTtcbiAgICBkc3RbMTRdID0gY2FtZXJhUG9zaXRpb25bMl07XG4gICAgZHN0WzE1XSA9IDE7XG5cbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXB1dGVzIGEgNC1ieS00IHBlcnNwZWN0aXZlIHRyYW5zZm9ybWF0aW9uIG1hdHJpeCBnaXZlbiB0aGUgYW5ndWxhciBoZWlnaHRcbiAgICogb2YgdGhlIGZydXN0dW0sIHRoZSBhc3BlY3QgcmF0aW8sIGFuZCB0aGUgbmVhciBhbmQgZmFyIGNsaXBwaW5nIHBsYW5lcy4gIFRoZVxuICAgKiBhcmd1bWVudHMgZGVmaW5lIGEgZnJ1c3R1bSBleHRlbmRpbmcgaW4gdGhlIG5lZ2F0aXZlIHogZGlyZWN0aW9uLiAgVGhlIGdpdmVuXG4gICAqIGFuZ2xlIGlzIHRoZSB2ZXJ0aWNhbCBhbmdsZSBvZiB0aGUgZnJ1c3R1bSwgYW5kIHRoZSBob3Jpem9udGFsIGFuZ2xlIGlzXG4gICAqIGRldGVybWluZWQgdG8gcHJvZHVjZSB0aGUgZ2l2ZW4gYXNwZWN0IHJhdGlvLiAgVGhlIGFyZ3VtZW50cyBuZWFyIGFuZCBmYXIgYXJlXG4gICAqIHRoZSBkaXN0YW5jZXMgdG8gdGhlIG5lYXIgYW5kIGZhciBjbGlwcGluZyBwbGFuZXMuICBOb3RlIHRoYXQgbmVhciBhbmQgZmFyXG4gICAqIGFyZSBub3QgeiBjb29yZGluYXRlcywgYnV0IHJhdGhlciB0aGV5IGFyZSBkaXN0YW5jZXMgYWxvbmcgdGhlIG5lZ2F0aXZlXG4gICAqIHotYXhpcy4gIFRoZSBtYXRyaXggZ2VuZXJhdGVkIHNlbmRzIHRoZSB2aWV3aW5nIGZydXN0dW0gdG8gdGhlIHVuaXQgYm94LlxuICAgKiBXZSBhc3N1bWUgYSB1bml0IGJveCBleHRlbmRpbmcgZnJvbSAtMSB0byAxIGluIHRoZSB4IGFuZCB5IGRpbWVuc2lvbnMgYW5kXG4gICAqIGZyb20gLTEgdG8gMSBpbiB0aGUgeiBkaW1lbnNpb24uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmaWVsZE9mVmlld0luUmFkaWFucyBmaWVsZCBvZiB2aWV3IGluIHkgYXhpcy5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGFzcGVjdCBhc3BlY3Qgb2Ygdmlld3BvcnQgKHdpZHRoIC8gaGVpZ2h0KVxuICAgKiBAcGFyYW0ge251bWJlcn0gbmVhciBuZWFyIFogY2xpcHBpbmcgcGxhbmVcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZhciBmYXIgWiBjbGlwcGluZyBwbGFuZVxuICAgKiBAcGFyYW0ge01hdHJpeDR9IFtkc3RdIG9wdGlvbmFsIG1hdHJpeCB0byBzdG9yZSByZXN1bHRcbiAgICogQHJldHVybiB7TWF0cml4NH0gZHN0IG9yIGEgbmV3IG1hdHJpeCBpZiBub25lIHByb3ZpZGVkXG4gICAqIEBtZW1iZXJPZiBtb2R1bGU6d2ViZ2wtM2QtbWF0aFxuICAgKi9cbiAgZnVuY3Rpb24gcGVyc3BlY3RpdmUoZmllbGRPZlZpZXdJblJhZGlhbnMsIGFzcGVjdCwgbmVhciwgZmFyLCBkc3QpIHtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IEZsb2F0MzJBcnJheSgxNik7XG4gICAgdmFyIGYgPSBNYXRoLnRhbihNYXRoLlBJICogMC41IC0gMC41ICogZmllbGRPZlZpZXdJblJhZGlhbnMpO1xuICAgIHZhciByYW5nZUludiA9IDEuMCAvIChuZWFyIC0gZmFyKTtcblxuICAgIGRzdFsgMF0gPSBmIC8gYXNwZWN0O1xuICAgIGRzdFsgMV0gPSAwO1xuICAgIGRzdFsgMl0gPSAwO1xuICAgIGRzdFsgM10gPSAwO1xuICAgIGRzdFsgNF0gPSAwO1xuICAgIGRzdFsgNV0gPSBmO1xuICAgIGRzdFsgNl0gPSAwO1xuICAgIGRzdFsgN10gPSAwO1xuICAgIGRzdFsgOF0gPSAwO1xuICAgIGRzdFsgOV0gPSAwO1xuICAgIGRzdFsxMF0gPSAobmVhciArIGZhcikgKiByYW5nZUludjtcbiAgICBkc3RbMTFdID0gLTE7XG4gICAgZHN0WzEyXSA9IDA7XG4gICAgZHN0WzEzXSA9IDA7XG4gICAgZHN0WzE0XSA9IG5lYXIgKiBmYXIgKiByYW5nZUludiAqIDI7XG4gICAgZHN0WzE1XSA9IDA7XG5cbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXB1dGVzIGEgNC1ieS00IG9ydGhvZ3JhcGhpYyBwcm9qZWN0aW9uIG1hdHJpeCBnaXZlbiB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlXG4gICAqIHBsYW5lcyBkZWZpbmluZyB0aGUgYXhpcy1hbGlnbmVkLCBib3gtc2hhcGVkIHZpZXdpbmcgdm9sdW1lLiAgVGhlIG1hdHJpeFxuICAgKiBnZW5lcmF0ZWQgc2VuZHMgdGhhdCBib3ggdG8gdGhlIHVuaXQgYm94LiAgTm90ZSB0aGF0IGFsdGhvdWdoIGxlZnQgYW5kIHJpZ2h0XG4gICAqIGFyZSB4IGNvb3JkaW5hdGVzIGFuZCBib3R0b20gYW5kIHRvcCBhcmUgeSBjb29yZGluYXRlcywgbmVhciBhbmQgZmFyXG4gICAqIGFyZSBub3QgeiBjb29yZGluYXRlcywgYnV0IHJhdGhlciB0aGV5IGFyZSBkaXN0YW5jZXMgYWxvbmcgdGhlIG5lZ2F0aXZlXG4gICAqIHotYXhpcy4gIFdlIGFzc3VtZSBhIHVuaXQgYm94IGV4dGVuZGluZyBmcm9tIC0xIHRvIDEgaW4gdGhlIHggYW5kIHlcbiAgICogZGltZW5zaW9ucyBhbmQgZnJvbSAtMSB0byAxIGluIHRoZSB6IGRpbWVuc2lvbi5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGxlZnQgVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgbGVmdCBwbGFuZSBvZiB0aGUgYm94LlxuICAgKiBAcGFyYW0ge251bWJlcn0gcmlnaHQgVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgcmlnaHQgcGxhbmUgb2YgdGhlIGJveC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGJvdHRvbSBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBib3R0b20gcGxhbmUgb2YgdGhlIGJveC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHRvcCBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSByaWdodCBwbGFuZSBvZiB0aGUgYm94LlxuICAgKiBAcGFyYW0ge251bWJlcn0gbmVhciBUaGUgbmVnYXRpdmUgeiBjb29yZGluYXRlIG9mIHRoZSBuZWFyIHBsYW5lIG9mIHRoZSBib3guXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmYXIgVGhlIG5lZ2F0aXZlIHogY29vcmRpbmF0ZSBvZiB0aGUgZmFyIHBsYW5lIG9mIHRoZSBib3guXG4gICAqIEBwYXJhbSB7TWF0cml4NH0gW2RzdF0gb3B0aW9uYWwgbWF0cml4IHRvIHN0b3JlIHJlc3VsdFxuICAgKiBAcmV0dXJuIHtNYXRyaXg0fSBkc3Qgb3IgYSBuZXcgbWF0cml4IGlmIG5vbmUgcHJvdmlkZWRcbiAgICogQG1lbWJlck9mIG1vZHVsZTp3ZWJnbC0zZC1tYXRoXG4gICAqL1xuICBmdW5jdGlvbiBvcnRob2dyYXBoaWMobGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyLCBmYXIsIGRzdCkge1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgRmxvYXQzMkFycmF5KDE2KTtcblxuICAgIGRzdFsgMF0gPSAyIC8gKHJpZ2h0IC0gbGVmdCk7XG4gICAgZHN0WyAxXSA9IDA7XG4gICAgZHN0WyAyXSA9IDA7XG4gICAgZHN0WyAzXSA9IDA7XG4gICAgZHN0WyA0XSA9IDA7XG4gICAgZHN0WyA1XSA9IDIgLyAodG9wIC0gYm90dG9tKTtcbiAgICBkc3RbIDZdID0gMDtcbiAgICBkc3RbIDddID0gMDtcbiAgICBkc3RbIDhdID0gMDtcbiAgICBkc3RbIDldID0gMDtcbiAgICBkc3RbMTBdID0gMiAvIChuZWFyIC0gZmFyKTtcbiAgICBkc3RbMTFdID0gMDtcbiAgICBkc3RbMTJdID0gKGxlZnQgKyByaWdodCkgLyAobGVmdCAtIHJpZ2h0KTtcbiAgICBkc3RbMTNdID0gKGJvdHRvbSArIHRvcCkgLyAoYm90dG9tIC0gdG9wKTtcbiAgICBkc3RbMTRdID0gKG5lYXIgKyBmYXIpIC8gKG5lYXIgLSBmYXIpO1xuICAgIGRzdFsxNV0gPSAxO1xuXG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wdXRlcyBhIDQtYnktNCBwZXJzcGVjdGl2ZSB0cmFuc2Zvcm1hdGlvbiBtYXRyaXggZ2l2ZW4gdGhlIGxlZnQsIHJpZ2h0LFxuICAgKiB0b3AsIGJvdHRvbSwgbmVhciBhbmQgZmFyIGNsaXBwaW5nIHBsYW5lcy4gVGhlIGFyZ3VtZW50cyBkZWZpbmUgYSBmcnVzdHVtXG4gICAqIGV4dGVuZGluZyBpbiB0aGUgbmVnYXRpdmUgeiBkaXJlY3Rpb24uIFRoZSBhcmd1bWVudHMgbmVhciBhbmQgZmFyIGFyZSB0aGVcbiAgICogZGlzdGFuY2VzIHRvIHRoZSBuZWFyIGFuZCBmYXIgY2xpcHBpbmcgcGxhbmVzLiBOb3RlIHRoYXQgbmVhciBhbmQgZmFyIGFyZSBub3RcbiAgICogeiBjb29yZGluYXRlcywgYnV0IHJhdGhlciB0aGV5IGFyZSBkaXN0YW5jZXMgYWxvbmcgdGhlIG5lZ2F0aXZlIHotYXhpcy4gVGhlXG4gICAqIG1hdHJpeCBnZW5lcmF0ZWQgc2VuZHMgdGhlIHZpZXdpbmcgZnJ1c3R1bSB0byB0aGUgdW5pdCBib3guIFdlIGFzc3VtZSBhIHVuaXRcbiAgICogYm94IGV4dGVuZGluZyBmcm9tIC0xIHRvIDEgaW4gdGhlIHggYW5kIHkgZGltZW5zaW9ucyBhbmQgZnJvbSAtMSB0byAxIGluIHRoZSB6XG4gICAqIGRpbWVuc2lvbi5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGxlZnQgVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgbGVmdCBwbGFuZSBvZiB0aGUgYm94LlxuICAgKiBAcGFyYW0ge251bWJlcn0gcmlnaHQgVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgcmlnaHQgcGxhbmUgb2YgdGhlIGJveC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGJvdHRvbSBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBib3R0b20gcGxhbmUgb2YgdGhlIGJveC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHRvcCBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSByaWdodCBwbGFuZSBvZiB0aGUgYm94LlxuICAgKiBAcGFyYW0ge251bWJlcn0gbmVhciBUaGUgbmVnYXRpdmUgeiBjb29yZGluYXRlIG9mIHRoZSBuZWFyIHBsYW5lIG9mIHRoZSBib3guXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmYXIgVGhlIG5lZ2F0aXZlIHogY29vcmRpbmF0ZSBvZiB0aGUgZmFyIHBsYW5lIG9mIHRoZSBib3guXG4gICAqIEBwYXJhbSB7TWF0cml4NH0gW2RzdF0gb3B0aW9uYWwgbWF0cml4IHRvIHN0b3JlIHJlc3VsdFxuICAgKiBAcmV0dXJuIHtNYXRyaXg0fSBkc3Qgb3IgYSBuZXcgbWF0cml4IGlmIG5vbmUgcHJvdmlkZWRcbiAgICogQG1lbWJlck9mIG1vZHVsZTp3ZWJnbC0zZC1tYXRoXG4gICAqL1xuICBmdW5jdGlvbiBmcnVzdHVtKGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhciwgZmFyLCBkc3QpIHtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IEZsb2F0MzJBcnJheSgxNik7XG5cbiAgICB2YXIgZHggPSByaWdodCAtIGxlZnQ7XG4gICAgdmFyIGR5ID0gdG9wIC0gYm90dG9tO1xuICAgIHZhciBkeiA9IGZhciAtIG5lYXI7XG5cbiAgICBkc3RbIDBdID0gMiAqIG5lYXIgLyBkeDtcbiAgICBkc3RbIDFdID0gMDtcbiAgICBkc3RbIDJdID0gMDtcbiAgICBkc3RbIDNdID0gMDtcbiAgICBkc3RbIDRdID0gMDtcbiAgICBkc3RbIDVdID0gMiAqIG5lYXIgLyBkeTtcbiAgICBkc3RbIDZdID0gMDtcbiAgICBkc3RbIDddID0gMDtcbiAgICBkc3RbIDhdID0gKGxlZnQgKyByaWdodCkgLyBkeDtcbiAgICBkc3RbIDldID0gKHRvcCArIGJvdHRvbSkgLyBkeTtcbiAgICBkc3RbMTBdID0gLShmYXIgKyBuZWFyKSAvIGR6O1xuICAgIGRzdFsxMV0gPSAtMTtcbiAgICBkc3RbMTJdID0gMDtcbiAgICBkc3RbMTNdID0gMDtcbiAgICBkc3RbMTRdID0gLTIgKiBuZWFyICogZmFyIC8gZHo7XG4gICAgZHN0WzE1XSA9IDA7XG5cbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2VzIGEgdHJhbnNsYXRpb24gbWF0cml4XG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0eCB4IHRyYW5zbGF0aW9uLlxuICAgKiBAcGFyYW0ge251bWJlcn0gdHkgeSB0cmFuc2xhdGlvbi5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHR6IHogdHJhbnNsYXRpb24uXG4gICAqIEBwYXJhbSB7TWF0cml4NH0gW2RzdF0gb3B0aW9uYWwgbWF0cml4IHRvIHN0b3JlIHJlc3VsdFxuICAgKiBAcmV0dXJuIHtNYXRyaXg0fSBkc3Qgb3IgYSBuZXcgbWF0cml4IGlmIG5vbmUgcHJvdmlkZWRcbiAgICogQG1lbWJlck9mIG1vZHVsZTp3ZWJnbC0zZC1tYXRoXG4gICAqL1xuICBmdW5jdGlvbiB0cmFuc2xhdGlvbih0eCwgdHksIHR6LCBkc3QpIHtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IEZsb2F0MzJBcnJheSgxNik7XG5cbiAgICBkc3RbIDBdID0gMTtcbiAgICBkc3RbIDFdID0gMDtcbiAgICBkc3RbIDJdID0gMDtcbiAgICBkc3RbIDNdID0gMDtcbiAgICBkc3RbIDRdID0gMDtcbiAgICBkc3RbIDVdID0gMTtcbiAgICBkc3RbIDZdID0gMDtcbiAgICBkc3RbIDddID0gMDtcbiAgICBkc3RbIDhdID0gMDtcbiAgICBkc3RbIDldID0gMDtcbiAgICBkc3RbMTBdID0gMTtcbiAgICBkc3RbMTFdID0gMDtcbiAgICBkc3RbMTJdID0gdHg7XG4gICAgZHN0WzEzXSA9IHR5O1xuICAgIGRzdFsxNF0gPSB0ejtcbiAgICBkc3RbMTVdID0gMTtcblxuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuICAvKipcbiAgICogTXV0bGlwbHkgYnkgdHJhbnNsYXRpb24gbWF0cml4LlxuICAgKiBAcGFyYW0ge01hdHJpeDR9IG0gbWF0cml4IHRvIG11bHRpcGx5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0eCB4IHRyYW5zbGF0aW9uLlxuICAgKiBAcGFyYW0ge251bWJlcn0gdHkgeSB0cmFuc2xhdGlvbi5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHR6IHogdHJhbnNsYXRpb24uXG4gICAqIEBwYXJhbSB7TWF0cml4NH0gW2RzdF0gb3B0aW9uYWwgbWF0cml4IHRvIHN0b3JlIHJlc3VsdFxuICAgKiBAcmV0dXJuIHtNYXRyaXg0fSBkc3Qgb3IgYSBuZXcgbWF0cml4IGlmIG5vbmUgcHJvdmlkZWRcbiAgICogQG1lbWJlck9mIG1vZHVsZTp3ZWJnbC0zZC1tYXRoXG4gICAqL1xuICBmdW5jdGlvbiB0cmFuc2xhdGUobSwgdHgsIHR5LCB0eiwgZHN0KSB7XG4gICAgLy8gVGhpcyBpcyB0aGUgb3B0aW1pemVkIHZlcnNpb24gb2ZcbiAgICAvLyByZXR1cm4gbXVsdGlwbHkobSwgdHJhbnNsYXRpb24odHgsIHR5LCB0eiksIGRzdCk7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuXG4gICAgdmFyIG0wMCA9IG1bMF07XG4gICAgdmFyIG0wMSA9IG1bMV07XG4gICAgdmFyIG0wMiA9IG1bMl07XG4gICAgdmFyIG0wMyA9IG1bM107XG4gICAgdmFyIG0xMCA9IG1bMSAqIDQgKyAwXTtcbiAgICB2YXIgbTExID0gbVsxICogNCArIDFdO1xuICAgIHZhciBtMTIgPSBtWzEgKiA0ICsgMl07XG4gICAgdmFyIG0xMyA9IG1bMSAqIDQgKyAzXTtcbiAgICB2YXIgbTIwID0gbVsyICogNCArIDBdO1xuICAgIHZhciBtMjEgPSBtWzIgKiA0ICsgMV07XG4gICAgdmFyIG0yMiA9IG1bMiAqIDQgKyAyXTtcbiAgICB2YXIgbTIzID0gbVsyICogNCArIDNdO1xuICAgIHZhciBtMzAgPSBtWzMgKiA0ICsgMF07XG4gICAgdmFyIG0zMSA9IG1bMyAqIDQgKyAxXTtcbiAgICB2YXIgbTMyID0gbVszICogNCArIDJdO1xuICAgIHZhciBtMzMgPSBtWzMgKiA0ICsgM107XG5cbiAgICBpZiAobSAhPT0gZHN0KSB7XG4gICAgICBkc3RbIDBdID0gbTAwO1xuICAgICAgZHN0WyAxXSA9IG0wMTtcbiAgICAgIGRzdFsgMl0gPSBtMDI7XG4gICAgICBkc3RbIDNdID0gbTAzO1xuICAgICAgZHN0WyA0XSA9IG0xMDtcbiAgICAgIGRzdFsgNV0gPSBtMTE7XG4gICAgICBkc3RbIDZdID0gbTEyO1xuICAgICAgZHN0WyA3XSA9IG0xMztcbiAgICAgIGRzdFsgOF0gPSBtMjA7XG4gICAgICBkc3RbIDldID0gbTIxO1xuICAgICAgZHN0WzEwXSA9IG0yMjtcbiAgICAgIGRzdFsxMV0gPSBtMjM7XG4gICAgfVxuXG4gICAgZHN0WzEyXSA9IG0wMCAqIHR4ICsgbTEwICogdHkgKyBtMjAgKiB0eiArIG0zMDtcbiAgICBkc3RbMTNdID0gbTAxICogdHggKyBtMTEgKiB0eSArIG0yMSAqIHR6ICsgbTMxO1xuICAgIGRzdFsxNF0gPSBtMDIgKiB0eCArIG0xMiAqIHR5ICsgbTIyICogdHogKyBtMzI7XG4gICAgZHN0WzE1XSA9IG0wMyAqIHR4ICsgbTEzICogdHkgKyBtMjMgKiB0eiArIG0zMztcblxuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuICAvKipcbiAgICogTWFrZXMgYW4geCByb3RhdGlvbiBtYXRyaXhcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlSW5SYWRpYW5zIGFtb3VudCB0byByb3RhdGVcbiAgICogQHBhcmFtIHtNYXRyaXg0fSBbZHN0XSBvcHRpb25hbCBtYXRyaXggdG8gc3RvcmUgcmVzdWx0XG4gICAqIEByZXR1cm4ge01hdHJpeDR9IGRzdCBvciBhIG5ldyBtYXRyaXggaWYgbm9uZSBwcm92aWRlZFxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG4gIGZ1bmN0aW9uIHhSb3RhdGlvbihhbmdsZUluUmFkaWFucywgZHN0KSB7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuICAgIHZhciBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICAgIHZhciBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuXG4gICAgZHN0WyAwXSA9IDE7XG4gICAgZHN0WyAxXSA9IDA7XG4gICAgZHN0WyAyXSA9IDA7XG4gICAgZHN0WyAzXSA9IDA7XG4gICAgZHN0WyA0XSA9IDA7XG4gICAgZHN0WyA1XSA9IGM7XG4gICAgZHN0WyA2XSA9IHM7XG4gICAgZHN0WyA3XSA9IDA7XG4gICAgZHN0WyA4XSA9IDA7XG4gICAgZHN0WyA5XSA9IC1zO1xuICAgIGRzdFsxMF0gPSBjO1xuICAgIGRzdFsxMV0gPSAwO1xuICAgIGRzdFsxMl0gPSAwO1xuICAgIGRzdFsxM10gPSAwO1xuICAgIGRzdFsxNF0gPSAwO1xuICAgIGRzdFsxNV0gPSAxO1xuXG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNdWx0aXBseSBieSBhbiB4IHJvdGF0aW9uIG1hdHJpeFxuICAgKiBAcGFyYW0ge01hdHJpeDR9IG0gbWF0cml4IHRvIG11bHRpcGx5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZUluUmFkaWFucyBhbW91bnQgdG8gcm90YXRlXG4gICAqIEBwYXJhbSB7TWF0cml4NH0gW2RzdF0gb3B0aW9uYWwgbWF0cml4IHRvIHN0b3JlIHJlc3VsdFxuICAgKiBAcmV0dXJuIHtNYXRyaXg0fSBkc3Qgb3IgYSBuZXcgbWF0cml4IGlmIG5vbmUgcHJvdmlkZWRcbiAgICogQG1lbWJlck9mIG1vZHVsZTp3ZWJnbC0zZC1tYXRoXG4gICAqL1xuICBmdW5jdGlvbiB4Um90YXRlKG0sIGFuZ2xlSW5SYWRpYW5zLCBkc3QpIHtcbiAgICAvLyB0aGlzIGlzIHRoZSBvcHRpbWl6ZWQgdmVyc2lvbiBvZlxuICAgIC8vIHJldHVybiBtdWx0aXBseShtLCB4Um90YXRpb24oYW5nbGVJblJhZGlhbnMpLCBkc3QpO1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgRmxvYXQzMkFycmF5KDE2KTtcblxuICAgIHZhciBtMTAgPSBtWzRdO1xuICAgIHZhciBtMTEgPSBtWzVdO1xuICAgIHZhciBtMTIgPSBtWzZdO1xuICAgIHZhciBtMTMgPSBtWzddO1xuICAgIHZhciBtMjAgPSBtWzhdO1xuICAgIHZhciBtMjEgPSBtWzldO1xuICAgIHZhciBtMjIgPSBtWzEwXTtcbiAgICB2YXIgbTIzID0gbVsxMV07XG4gICAgdmFyIGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG5cbiAgICBkc3RbNF0gID0gYyAqIG0xMCArIHMgKiBtMjA7XG4gICAgZHN0WzVdICA9IGMgKiBtMTEgKyBzICogbTIxO1xuICAgIGRzdFs2XSAgPSBjICogbTEyICsgcyAqIG0yMjtcbiAgICBkc3RbN10gID0gYyAqIG0xMyArIHMgKiBtMjM7XG4gICAgZHN0WzhdICA9IGMgKiBtMjAgLSBzICogbTEwO1xuICAgIGRzdFs5XSAgPSBjICogbTIxIC0gcyAqIG0xMTtcbiAgICBkc3RbMTBdID0gYyAqIG0yMiAtIHMgKiBtMTI7XG4gICAgZHN0WzExXSA9IGMgKiBtMjMgLSBzICogbTEzO1xuXG4gICAgaWYgKG0gIT09IGRzdCkge1xuICAgICAgZHN0WyAwXSA9IG1bIDBdO1xuICAgICAgZHN0WyAxXSA9IG1bIDFdO1xuICAgICAgZHN0WyAyXSA9IG1bIDJdO1xuICAgICAgZHN0WyAzXSA9IG1bIDNdO1xuICAgICAgZHN0WzEyXSA9IG1bMTJdO1xuICAgICAgZHN0WzEzXSA9IG1bMTNdO1xuICAgICAgZHN0WzE0XSA9IG1bMTRdO1xuICAgICAgZHN0WzE1XSA9IG1bMTVdO1xuICAgIH1cblxuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuICAvKipcbiAgICogTWFrZXMgYW4geSByb3RhdGlvbiBtYXRyaXhcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlSW5SYWRpYW5zIGFtb3VudCB0byByb3RhdGVcbiAgICogQHBhcmFtIHtNYXRyaXg0fSBbZHN0XSBvcHRpb25hbCBtYXRyaXggdG8gc3RvcmUgcmVzdWx0XG4gICAqIEByZXR1cm4ge01hdHJpeDR9IGRzdCBvciBhIG5ldyBtYXRyaXggaWYgbm9uZSBwcm92aWRlZFxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG4gIGZ1bmN0aW9uIHlSb3RhdGlvbihhbmdsZUluUmFkaWFucywgZHN0KSB7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuICAgIHZhciBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICAgIHZhciBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuXG4gICAgZHN0WyAwXSA9IGM7XG4gICAgZHN0WyAxXSA9IDA7XG4gICAgZHN0WyAyXSA9IC1zO1xuICAgIGRzdFsgM10gPSAwO1xuICAgIGRzdFsgNF0gPSAwO1xuICAgIGRzdFsgNV0gPSAxO1xuICAgIGRzdFsgNl0gPSAwO1xuICAgIGRzdFsgN10gPSAwO1xuICAgIGRzdFsgOF0gPSBzO1xuICAgIGRzdFsgOV0gPSAwO1xuICAgIGRzdFsxMF0gPSBjO1xuICAgIGRzdFsxMV0gPSAwO1xuICAgIGRzdFsxMl0gPSAwO1xuICAgIGRzdFsxM10gPSAwO1xuICAgIGRzdFsxNF0gPSAwO1xuICAgIGRzdFsxNV0gPSAxO1xuXG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNdWx0aXBseSBieSBhbiB5IHJvdGF0aW9uIG1hdHJpeFxuICAgKiBAcGFyYW0ge01hdHJpeDR9IG0gbWF0cml4IHRvIG11bHRpcGx5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZUluUmFkaWFucyBhbW91bnQgdG8gcm90YXRlXG4gICAqIEBwYXJhbSB7TWF0cml4NH0gW2RzdF0gb3B0aW9uYWwgbWF0cml4IHRvIHN0b3JlIHJlc3VsdFxuICAgKiBAcmV0dXJuIHtNYXRyaXg0fSBkc3Qgb3IgYSBuZXcgbWF0cml4IGlmIG5vbmUgcHJvdmlkZWRcbiAgICogQG1lbWJlck9mIG1vZHVsZTp3ZWJnbC0zZC1tYXRoXG4gICAqL1xuICBmdW5jdGlvbiB5Um90YXRlKG0sIGFuZ2xlSW5SYWRpYW5zLCBkc3QpIHtcbiAgICAvLyB0aGlzIGlzIHRoZSBvcHRpbWl6ZWQgdmVyaXNvbiBvZlxuICAgIC8vIHJldHVybiBtdWx0aXBseShtLCB5Um90YXRpb24oYW5nbGVJblJhZGlhbnMpLCBkc3QpO1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgRmxvYXQzMkFycmF5KDE2KTtcblxuICAgIHZhciBtMDAgPSBtWzAgKiA0ICsgMF07XG4gICAgdmFyIG0wMSA9IG1bMCAqIDQgKyAxXTtcbiAgICB2YXIgbTAyID0gbVswICogNCArIDJdO1xuICAgIHZhciBtMDMgPSBtWzAgKiA0ICsgM107XG4gICAgdmFyIG0yMCA9IG1bMiAqIDQgKyAwXTtcbiAgICB2YXIgbTIxID0gbVsyICogNCArIDFdO1xuICAgIHZhciBtMjIgPSBtWzIgKiA0ICsgMl07XG4gICAgdmFyIG0yMyA9IG1bMiAqIDQgKyAzXTtcbiAgICB2YXIgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICB2YXIgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcblxuICAgIGRzdFsgMF0gPSBjICogbTAwIC0gcyAqIG0yMDtcbiAgICBkc3RbIDFdID0gYyAqIG0wMSAtIHMgKiBtMjE7XG4gICAgZHN0WyAyXSA9IGMgKiBtMDIgLSBzICogbTIyO1xuICAgIGRzdFsgM10gPSBjICogbTAzIC0gcyAqIG0yMztcbiAgICBkc3RbIDhdID0gYyAqIG0yMCArIHMgKiBtMDA7XG4gICAgZHN0WyA5XSA9IGMgKiBtMjEgKyBzICogbTAxO1xuICAgIGRzdFsxMF0gPSBjICogbTIyICsgcyAqIG0wMjtcbiAgICBkc3RbMTFdID0gYyAqIG0yMyArIHMgKiBtMDM7XG5cbiAgICBpZiAobSAhPT0gZHN0KSB7XG4gICAgICBkc3RbIDRdID0gbVsgNF07XG4gICAgICBkc3RbIDVdID0gbVsgNV07XG4gICAgICBkc3RbIDZdID0gbVsgNl07XG4gICAgICBkc3RbIDddID0gbVsgN107XG4gICAgICBkc3RbMTJdID0gbVsxMl07XG4gICAgICBkc3RbMTNdID0gbVsxM107XG4gICAgICBkc3RbMTRdID0gbVsxNF07XG4gICAgICBkc3RbMTVdID0gbVsxNV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlcyBhbiB6IHJvdGF0aW9uIG1hdHJpeFxuICAgKiBAcGFyYW0ge251bWJlcn0gYW5nbGVJblJhZGlhbnMgYW1vdW50IHRvIHJvdGF0ZVxuICAgKiBAcGFyYW0ge01hdHJpeDR9IFtkc3RdIG9wdGlvbmFsIG1hdHJpeCB0byBzdG9yZSByZXN1bHRcbiAgICogQHJldHVybiB7TWF0cml4NH0gZHN0IG9yIGEgbmV3IG1hdHJpeCBpZiBub25lIHByb3ZpZGVkXG4gICAqIEBtZW1iZXJPZiBtb2R1bGU6d2ViZ2wtM2QtbWF0aFxuICAgKi9cbiAgZnVuY3Rpb24gelJvdGF0aW9uKGFuZ2xlSW5SYWRpYW5zLCBkc3QpIHtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IEZsb2F0MzJBcnJheSgxNik7XG4gICAgdmFyIGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG5cbiAgICBkc3RbIDBdID0gYztcbiAgICBkc3RbIDFdID0gcztcbiAgICBkc3RbIDJdID0gMDtcbiAgICBkc3RbIDNdID0gMDtcbiAgICBkc3RbIDRdID0gLXM7XG4gICAgZHN0WyA1XSA9IGM7XG4gICAgZHN0WyA2XSA9IDA7XG4gICAgZHN0WyA3XSA9IDA7XG4gICAgZHN0WyA4XSA9IDA7XG4gICAgZHN0WyA5XSA9IDA7XG4gICAgZHN0WzEwXSA9IDE7XG4gICAgZHN0WzExXSA9IDA7XG4gICAgZHN0WzEyXSA9IDA7XG4gICAgZHN0WzEzXSA9IDA7XG4gICAgZHN0WzE0XSA9IDA7XG4gICAgZHN0WzE1XSA9IDE7XG5cbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgLyoqXG4gICAqIE11bHRpcGx5IGJ5IGFuIHogcm90YXRpb24gbWF0cml4XG4gICAqIEBwYXJhbSB7TWF0cml4NH0gbSBtYXRyaXggdG8gbXVsdGlwbHlcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlSW5SYWRpYW5zIGFtb3VudCB0byByb3RhdGVcbiAgICogQHBhcmFtIHtNYXRyaXg0fSBbZHN0XSBvcHRpb25hbCBtYXRyaXggdG8gc3RvcmUgcmVzdWx0XG4gICAqIEByZXR1cm4ge01hdHJpeDR9IGRzdCBvciBhIG5ldyBtYXRyaXggaWYgbm9uZSBwcm92aWRlZFxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG4gIGZ1bmN0aW9uIHpSb3RhdGUobSwgYW5nbGVJblJhZGlhbnMsIGRzdCkge1xuICAgIC8vIFRoaXMgaXMgdGhlIG9wdGltaXplZCB2ZXJpc29uIG9mXG4gICAgLy8gcmV0dXJuIG11bHRpcGx5KG0sIHpSb3RhdGlvbihhbmdsZUluUmFkaWFucyksIGRzdCk7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuXG4gICAgdmFyIG0wMCA9IG1bMCAqIDQgKyAwXTtcbiAgICB2YXIgbTAxID0gbVswICogNCArIDFdO1xuICAgIHZhciBtMDIgPSBtWzAgKiA0ICsgMl07XG4gICAgdmFyIG0wMyA9IG1bMCAqIDQgKyAzXTtcbiAgICB2YXIgbTEwID0gbVsxICogNCArIDBdO1xuICAgIHZhciBtMTEgPSBtWzEgKiA0ICsgMV07XG4gICAgdmFyIG0xMiA9IG1bMSAqIDQgKyAyXTtcbiAgICB2YXIgbTEzID0gbVsxICogNCArIDNdO1xuICAgIHZhciBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICAgIHZhciBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuXG4gICAgZHN0WyAwXSA9IGMgKiBtMDAgKyBzICogbTEwO1xuICAgIGRzdFsgMV0gPSBjICogbTAxICsgcyAqIG0xMTtcbiAgICBkc3RbIDJdID0gYyAqIG0wMiArIHMgKiBtMTI7XG4gICAgZHN0WyAzXSA9IGMgKiBtMDMgKyBzICogbTEzO1xuICAgIGRzdFsgNF0gPSBjICogbTEwIC0gcyAqIG0wMDtcbiAgICBkc3RbIDVdID0gYyAqIG0xMSAtIHMgKiBtMDE7XG4gICAgZHN0WyA2XSA9IGMgKiBtMTIgLSBzICogbTAyO1xuICAgIGRzdFsgN10gPSBjICogbTEzIC0gcyAqIG0wMztcblxuICAgIGlmIChtICE9PSBkc3QpIHtcbiAgICAgIGRzdFsgOF0gPSBtWyA4XTtcbiAgICAgIGRzdFsgOV0gPSBtWyA5XTtcbiAgICAgIGRzdFsxMF0gPSBtWzEwXTtcbiAgICAgIGRzdFsxMV0gPSBtWzExXTtcbiAgICAgIGRzdFsxMl0gPSBtWzEyXTtcbiAgICAgIGRzdFsxM10gPSBtWzEzXTtcbiAgICAgIGRzdFsxNF0gPSBtWzE0XTtcbiAgICAgIGRzdFsxNV0gPSBtWzE1XTtcbiAgICB9XG5cbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2VzIGFuIHJvdGF0aW9uIG1hdHJpeCBhcm91bmQgYW4gYXJiaXRyYXJ5IGF4aXNcbiAgICogQHBhcmFtIHtWZWN0b3IzfSBheGlzIGF4aXMgdG8gcm90YXRlIGFyb3VuZFxuICAgKiBAcGFyYW0ge251bWJlcn0gYW5nbGVJblJhZGlhbnMgYW1vdW50IHRvIHJvdGF0ZVxuICAgKiBAcGFyYW0ge01hdHJpeDR9IFtkc3RdIG9wdGlvbmFsIG1hdHJpeCB0byBzdG9yZSByZXN1bHRcbiAgICogQHJldHVybiB7TWF0cml4NH0gZHN0IG9yIGEgbmV3IG1hdHJpeCBpZiBub25lIHByb3ZpZGVkXG4gICAqIEBtZW1iZXJPZiBtb2R1bGU6d2ViZ2wtM2QtbWF0aFxuICAgKi9cbiAgZnVuY3Rpb24gYXhpc1JvdGF0aW9uKGF4aXMsIGFuZ2xlSW5SYWRpYW5zLCBkc3QpIHtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IEZsb2F0MzJBcnJheSgxNik7XG5cbiAgICB2YXIgeCA9IGF4aXNbMF07XG4gICAgdmFyIHkgPSBheGlzWzFdO1xuICAgIHZhciB6ID0gYXhpc1syXTtcbiAgICB2YXIgbiA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHopO1xuICAgIHggLz0gbjtcbiAgICB5IC89IG47XG4gICAgeiAvPSBuO1xuICAgIHZhciB4eCA9IHggKiB4O1xuICAgIHZhciB5eSA9IHkgKiB5O1xuICAgIHZhciB6eiA9IHogKiB6O1xuICAgIHZhciBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICAgIHZhciBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuICAgIHZhciBvbmVNaW51c0Nvc2luZSA9IDEgLSBjO1xuXG4gICAgZHN0WyAwXSA9IHh4ICsgKDEgLSB4eCkgKiBjO1xuICAgIGRzdFsgMV0gPSB4ICogeSAqIG9uZU1pbnVzQ29zaW5lICsgeiAqIHM7XG4gICAgZHN0WyAyXSA9IHggKiB6ICogb25lTWludXNDb3NpbmUgLSB5ICogcztcbiAgICBkc3RbIDNdID0gMDtcbiAgICBkc3RbIDRdID0geCAqIHkgKiBvbmVNaW51c0Nvc2luZSAtIHogKiBzO1xuICAgIGRzdFsgNV0gPSB5eSArICgxIC0geXkpICogYztcbiAgICBkc3RbIDZdID0geSAqIHogKiBvbmVNaW51c0Nvc2luZSArIHggKiBzO1xuICAgIGRzdFsgN10gPSAwO1xuICAgIGRzdFsgOF0gPSB4ICogeiAqIG9uZU1pbnVzQ29zaW5lICsgeSAqIHM7XG4gICAgZHN0WyA5XSA9IHkgKiB6ICogb25lTWludXNDb3NpbmUgLSB4ICogcztcbiAgICBkc3RbMTBdID0genogKyAoMSAtIHp6KSAqIGM7XG4gICAgZHN0WzExXSA9IDA7XG4gICAgZHN0WzEyXSA9IDA7XG4gICAgZHN0WzEzXSA9IDA7XG4gICAgZHN0WzE0XSA9IDA7XG4gICAgZHN0WzE1XSA9IDE7XG5cbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgLyoqXG4gICAqIE11bHRpcGx5IGJ5IGFuIGF4aXMgcm90YXRpb24gbWF0cml4XG4gICAqIEBwYXJhbSB7TWF0cml4NH0gbSBtYXRyaXggdG8gbXVsdGlwbHlcbiAgICogQHBhcmFtIHtWZWN0b3IzfSBheGlzIGF4aXMgdG8gcm90YXRlIGFyb3VuZFxuICAgKiBAcGFyYW0ge251bWJlcn0gYW5nbGVJblJhZGlhbnMgYW1vdW50IHRvIHJvdGF0ZVxuICAgKiBAcGFyYW0ge01hdHJpeDR9IFtkc3RdIG9wdGlvbmFsIG1hdHJpeCB0byBzdG9yZSByZXN1bHRcbiAgICogQHJldHVybiB7TWF0cml4NH0gZHN0IG9yIGEgbmV3IG1hdHJpeCBpZiBub25lIHByb3ZpZGVkXG4gICAqIEBtZW1iZXJPZiBtb2R1bGU6d2ViZ2wtM2QtbWF0aFxuICAgKi9cbiAgZnVuY3Rpb24gYXhpc1JvdGF0ZShtLCBheGlzLCBhbmdsZUluUmFkaWFucywgZHN0KSB7XG4gICAgLy8gVGhpcyBpcyB0aGUgb3B0aW1pemVkIHZlcmlzb24gb2ZcbiAgICAvLyByZXR1cm4gbXVsdGlwbHkobSwgYXhpc1JvdGF0aW9uKGF4aXMsIGFuZ2xlSW5SYWRpYW5zKSwgZHN0KTtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IEZsb2F0MzJBcnJheSgxNik7XG5cbiAgICB2YXIgeCA9IGF4aXNbMF07XG4gICAgdmFyIHkgPSBheGlzWzFdO1xuICAgIHZhciB6ID0gYXhpc1syXTtcbiAgICB2YXIgbiA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHopO1xuICAgIHggLz0gbjtcbiAgICB5IC89IG47XG4gICAgeiAvPSBuO1xuICAgIHZhciB4eCA9IHggKiB4O1xuICAgIHZhciB5eSA9IHkgKiB5O1xuICAgIHZhciB6eiA9IHogKiB6O1xuICAgIHZhciBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICAgIHZhciBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuICAgIHZhciBvbmVNaW51c0Nvc2luZSA9IDEgLSBjO1xuXG4gICAgdmFyIHIwMCA9IHh4ICsgKDEgLSB4eCkgKiBjO1xuICAgIHZhciByMDEgPSB4ICogeSAqIG9uZU1pbnVzQ29zaW5lICsgeiAqIHM7XG4gICAgdmFyIHIwMiA9IHggKiB6ICogb25lTWludXNDb3NpbmUgLSB5ICogcztcbiAgICB2YXIgcjEwID0geCAqIHkgKiBvbmVNaW51c0Nvc2luZSAtIHogKiBzO1xuICAgIHZhciByMTEgPSB5eSArICgxIC0geXkpICogYztcbiAgICB2YXIgcjEyID0geSAqIHogKiBvbmVNaW51c0Nvc2luZSArIHggKiBzO1xuICAgIHZhciByMjAgPSB4ICogeiAqIG9uZU1pbnVzQ29zaW5lICsgeSAqIHM7XG4gICAgdmFyIHIyMSA9IHkgKiB6ICogb25lTWludXNDb3NpbmUgLSB4ICogcztcbiAgICB2YXIgcjIyID0genogKyAoMSAtIHp6KSAqIGM7XG5cbiAgICB2YXIgbTAwID0gbVswXTtcbiAgICB2YXIgbTAxID0gbVsxXTtcbiAgICB2YXIgbTAyID0gbVsyXTtcbiAgICB2YXIgbTAzID0gbVszXTtcbiAgICB2YXIgbTEwID0gbVs0XTtcbiAgICB2YXIgbTExID0gbVs1XTtcbiAgICB2YXIgbTEyID0gbVs2XTtcbiAgICB2YXIgbTEzID0gbVs3XTtcbiAgICB2YXIgbTIwID0gbVs4XTtcbiAgICB2YXIgbTIxID0gbVs5XTtcbiAgICB2YXIgbTIyID0gbVsxMF07XG4gICAgdmFyIG0yMyA9IG1bMTFdO1xuXG4gICAgZHN0WyAwXSA9IHIwMCAqIG0wMCArIHIwMSAqIG0xMCArIHIwMiAqIG0yMDtcbiAgICBkc3RbIDFdID0gcjAwICogbTAxICsgcjAxICogbTExICsgcjAyICogbTIxO1xuICAgIGRzdFsgMl0gPSByMDAgKiBtMDIgKyByMDEgKiBtMTIgKyByMDIgKiBtMjI7XG4gICAgZHN0WyAzXSA9IHIwMCAqIG0wMyArIHIwMSAqIG0xMyArIHIwMiAqIG0yMztcbiAgICBkc3RbIDRdID0gcjEwICogbTAwICsgcjExICogbTEwICsgcjEyICogbTIwO1xuICAgIGRzdFsgNV0gPSByMTAgKiBtMDEgKyByMTEgKiBtMTEgKyByMTIgKiBtMjE7XG4gICAgZHN0WyA2XSA9IHIxMCAqIG0wMiArIHIxMSAqIG0xMiArIHIxMiAqIG0yMjtcbiAgICBkc3RbIDddID0gcjEwICogbTAzICsgcjExICogbTEzICsgcjEyICogbTIzO1xuICAgIGRzdFsgOF0gPSByMjAgKiBtMDAgKyByMjEgKiBtMTAgKyByMjIgKiBtMjA7XG4gICAgZHN0WyA5XSA9IHIyMCAqIG0wMSArIHIyMSAqIG0xMSArIHIyMiAqIG0yMTtcbiAgICBkc3RbMTBdID0gcjIwICogbTAyICsgcjIxICogbTEyICsgcjIyICogbTIyO1xuICAgIGRzdFsxMV0gPSByMjAgKiBtMDMgKyByMjEgKiBtMTMgKyByMjIgKiBtMjM7XG5cbiAgICBpZiAobSAhPT0gZHN0KSB7XG4gICAgICBkc3RbMTJdID0gbVsxMl07XG4gICAgICBkc3RbMTNdID0gbVsxM107XG4gICAgICBkc3RbMTRdID0gbVsxNF07XG4gICAgICBkc3RbMTVdID0gbVsxNV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlcyBhIHNjYWxlIG1hdHJpeFxuICAgKiBAcGFyYW0ge251bWJlcn0gc3ggeCBzY2FsZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHN5IHkgc2NhbGUuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzeiB6IHNjYWxlLlxuICAgKiBAcGFyYW0ge01hdHJpeDR9IFtkc3RdIG9wdGlvbmFsIG1hdHJpeCB0byBzdG9yZSByZXN1bHRcbiAgICogQHJldHVybiB7TWF0cml4NH0gZHN0IG9yIGEgbmV3IG1hdHJpeCBpZiBub25lIHByb3ZpZGVkXG4gICAqIEBtZW1iZXJPZiBtb2R1bGU6d2ViZ2wtM2QtbWF0aFxuICAgKi9cbiAgZnVuY3Rpb24gc2NhbGluZyhzeCwgc3ksIHN6LCBkc3QpIHtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IEZsb2F0MzJBcnJheSgxNik7XG5cbiAgICBkc3RbIDBdID0gc3g7XG4gICAgZHN0WyAxXSA9IDA7XG4gICAgZHN0WyAyXSA9IDA7XG4gICAgZHN0WyAzXSA9IDA7XG4gICAgZHN0WyA0XSA9IDA7XG4gICAgZHN0WyA1XSA9IHN5O1xuICAgIGRzdFsgNl0gPSAwO1xuICAgIGRzdFsgN10gPSAwO1xuICAgIGRzdFsgOF0gPSAwO1xuICAgIGRzdFsgOV0gPSAwO1xuICAgIGRzdFsxMF0gPSBzejtcbiAgICBkc3RbMTFdID0gMDtcbiAgICBkc3RbMTJdID0gMDtcbiAgICBkc3RbMTNdID0gMDtcbiAgICBkc3RbMTRdID0gMDtcbiAgICBkc3RbMTVdID0gMTtcblxuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuICAvKipcbiAgICogTXVsdGlwbHkgYnkgYSBzY2FsaW5nIG1hdHJpeFxuICAgKiBAcGFyYW0ge01hdHJpeDR9IG0gbWF0cml4IHRvIG11bHRpcGx5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzeCB4IHNjYWxlLlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3kgeSBzY2FsZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHN6IHogc2NhbGUuXG4gICAqIEBwYXJhbSB7TWF0cml4NH0gW2RzdF0gb3B0aW9uYWwgbWF0cml4IHRvIHN0b3JlIHJlc3VsdFxuICAgKiBAcmV0dXJuIHtNYXRyaXg0fSBkc3Qgb3IgYSBuZXcgbWF0cml4IGlmIG5vbmUgcHJvdmlkZWRcbiAgICogQG1lbWJlck9mIG1vZHVsZTp3ZWJnbC0zZC1tYXRoXG4gICAqL1xuICBmdW5jdGlvbiBzY2FsZShtLCBzeCwgc3ksIHN6LCBkc3QpIHtcbiAgICAvLyBUaGlzIGlzIHRoZSBvcHRpbWl6ZWQgdmVyaXNvbiBvZlxuICAgIC8vIHJldHVybiBtdWx0aXBseShtLCBzY2FsaW5nKHN4LCBzeSwgc3opLCBkc3QpO1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgRmxvYXQzMkFycmF5KDE2KTtcblxuICAgIGRzdFsgMF0gPSBzeCAqIG1bMCAqIDQgKyAwXTtcbiAgICBkc3RbIDFdID0gc3ggKiBtWzAgKiA0ICsgMV07XG4gICAgZHN0WyAyXSA9IHN4ICogbVswICogNCArIDJdO1xuICAgIGRzdFsgM10gPSBzeCAqIG1bMCAqIDQgKyAzXTtcbiAgICBkc3RbIDRdID0gc3kgKiBtWzEgKiA0ICsgMF07XG4gICAgZHN0WyA1XSA9IHN5ICogbVsxICogNCArIDFdO1xuICAgIGRzdFsgNl0gPSBzeSAqIG1bMSAqIDQgKyAyXTtcbiAgICBkc3RbIDddID0gc3kgKiBtWzEgKiA0ICsgM107XG4gICAgZHN0WyA4XSA9IHN6ICogbVsyICogNCArIDBdO1xuICAgIGRzdFsgOV0gPSBzeiAqIG1bMiAqIDQgKyAxXTtcbiAgICBkc3RbMTBdID0gc3ogKiBtWzIgKiA0ICsgMl07XG4gICAgZHN0WzExXSA9IHN6ICogbVsyICogNCArIDNdO1xuXG4gICAgaWYgKG0gIT09IGRzdCkge1xuICAgICAgZHN0WzEyXSA9IG1bMTJdO1xuICAgICAgZHN0WzEzXSA9IG1bMTNdO1xuICAgICAgZHN0WzE0XSA9IG1bMTRdO1xuICAgICAgZHN0WzE1XSA9IG1bMTVdO1xuICAgIH1cblxuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuICAvKipcbiAgICogY3JlYXRlcyBhIG1hdHJpeCBmcm9tIHRyYW5zbGF0aW9uLCBxdWF0ZXJuaW9uLCBzY2FsZVxuICAgKiBAcGFyYW0ge051bWJlcltdfSB0cmFuc2xhdGlvbiBbeCwgeSwgel0gdHJhbnNsYXRpb25cbiAgICogQHBhcmFtIHtOdW1iZXJbXX0gcXVhdGVybmlvbiBbeCwgeSwgeiwgel0gcXVhdGVybmlvbiByb3RhdGlvblxuICAgKiBAcGFyYW0ge051bWJlcltdfSBzY2FsZSBbeCwgeSwgel0gc2NhbGVcbiAgICogQHBhcmFtIHtNYXRyaXg0fSBbZHN0XSBvcHRpb25hbCBtYXRyaXggdG8gc3RvcmUgcmVzdWx0XG4gICAqIEByZXR1cm4ge01hdHJpeDR9IGRzdCBvciBhIG5ldyBtYXRyaXggaWYgbm9uZSBwcm92aWRlZFxuICAgKi9cbiAgZnVuY3Rpb24gY29tcG9zZSh0cmFuc2xhdGlvbiwgcXVhdGVybmlvbiwgc2NhbGUsIGRzdCkge1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgRmxvYXQzMkFycmF5KDE2KTtcblxuICAgIGNvbnN0IHggPSBxdWF0ZXJuaW9uWzBdO1xuICAgIGNvbnN0IHkgPSBxdWF0ZXJuaW9uWzFdO1xuICAgIGNvbnN0IHogPSBxdWF0ZXJuaW9uWzJdO1xuICAgIGNvbnN0IHcgPSBxdWF0ZXJuaW9uWzNdO1xuXG4gICAgY29uc3QgeDIgPSB4ICsgeDtcbiAgICBjb25zdCB5MiA9IHkgKyB5O1xuICAgIGNvbnN0IHoyID0geiArIHo7XG5cbiAgICBjb25zdCB4eCA9IHggKiB4MjtcbiAgICBjb25zdCB4eSA9IHggKiB5MjtcbiAgICBjb25zdCB4eiA9IHggKiB6MjtcblxuICAgIGNvbnN0IHl5ID0geSAqIHkyO1xuICAgIGNvbnN0IHl6ID0geSAqIHoyO1xuICAgIGNvbnN0IHp6ID0geiAqIHoyO1xuXG4gICAgY29uc3Qgd3ggPSB3ICogeDI7XG4gICAgY29uc3Qgd3kgPSB3ICogeTI7XG4gICAgY29uc3Qgd3ogPSB3ICogejI7XG5cbiAgICBjb25zdCBzeCA9IHNjYWxlWzBdO1xuICAgIGNvbnN0IHN5ID0gc2NhbGVbMV07XG4gICAgY29uc3Qgc3ogPSBzY2FsZVsyXTtcblxuICAgIGRzdFswXSA9ICgxIC0gKHl5ICsgenopKSAqIHN4O1xuICAgIGRzdFsxXSA9ICh4eSArIHd6KSAqIHN4O1xuICAgIGRzdFsyXSA9ICh4eiAtIHd5KSAqIHN4O1xuICAgIGRzdFszXSA9IDA7XG5cbiAgICBkc3RbNF0gPSAoeHkgLSB3eikgKiBzeTtcbiAgICBkc3RbNV0gPSAoMSAtICh4eCArIHp6KSkgKiBzeTtcbiAgICBkc3RbNl0gPSAoeXogKyB3eCkgKiBzeTtcbiAgICBkc3RbN10gPSAwO1xuXG4gICAgZHN0WyA4XSA9ICh4eiArIHd5KSAqIHN6O1xuICAgIGRzdFsgOV0gPSAoeXogLSB3eCkgKiBzejtcbiAgICBkc3RbMTBdID0gKDEgLSAoeHggKyB5eSkpICogc3o7XG4gICAgZHN0WzExXSA9IDA7XG5cbiAgICBkc3RbMTJdID0gdHJhbnNsYXRpb25bMF07XG4gICAgZHN0WzEzXSA9IHRyYW5zbGF0aW9uWzFdO1xuICAgIGRzdFsxNF0gPSB0cmFuc2xhdGlvblsyXTtcbiAgICBkc3RbMTVdID0gMTtcblxuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuICBmdW5jdGlvbiBxdWF0RnJvbVJvdGF0aW9uTWF0cml4KG0sIGRzdCkge1xuICAgIC8vIGh0dHA6Ly93d3cuZXVjbGlkZWFuc3BhY2UuY29tL21hdGhzL2dlb21ldHJ5L3JvdGF0aW9ucy9jb252ZXJzaW9ucy9tYXRyaXhUb1F1YXRlcm5pb24vaW5kZXguaHRtXG5cbiAgICAvLyBhc3N1bWVzIHRoZSB1cHBlciAzeDMgb2YgbSBpcyBhIHB1cmUgcm90YXRpb24gbWF0cml4IChpLmUsIHVuc2NhbGVkKVxuICAgIGNvbnN0IG0xMSA9IG1bMF07XG4gICAgY29uc3QgbTEyID0gbVs0XTtcbiAgICBjb25zdCBtMTMgPSBtWzhdO1xuICAgIGNvbnN0IG0yMSA9IG1bMV07XG4gICAgY29uc3QgbTIyID0gbVs1XTtcbiAgICBjb25zdCBtMjMgPSBtWzldO1xuICAgIGNvbnN0IG0zMSA9IG1bMl07XG4gICAgY29uc3QgbTMyID0gbVs2XTtcbiAgICBjb25zdCBtMzMgPSBtWzEwXTtcblxuICAgIGNvbnN0IHRyYWNlID0gbTExICsgbTIyICsgbTMzO1xuXG4gICAgaWYgKHRyYWNlID4gMCkge1xuICAgICAgY29uc3QgcyA9IDAuNSAvIE1hdGguc3FydCh0cmFjZSArIDEpO1xuICAgICAgZHN0WzNdID0gMC4yNSAvIHM7XG4gICAgICBkc3RbMF0gPSAobTMyIC0gbTIzKSAqIHM7XG4gICAgICBkc3RbMV0gPSAobTEzIC0gbTMxKSAqIHM7XG4gICAgICBkc3RbMl0gPSAobTIxIC0gbTEyKSAqIHM7XG4gICAgfSBlbHNlIGlmIChtMTEgPiBtMjIgJiYgbTExID4gbTMzKSB7XG4gICAgICBjb25zdCBzID0gMiAqIE1hdGguc3FydCgxICsgbTExIC0gbTIyIC0gbTMzKTtcbiAgICAgIGRzdFszXSA9IChtMzIgLSBtMjMpIC8gcztcbiAgICAgIGRzdFswXSA9IDAuMjUgKiBzO1xuICAgICAgZHN0WzFdID0gKG0xMiArIG0yMSkgLyBzO1xuICAgICAgZHN0WzJdID0gKG0xMyArIG0zMSkgLyBzO1xuICAgIH0gZWxzZSBpZiAobTIyID4gbTMzKSB7XG4gICAgICBjb25zdCBzID0gMiAqIE1hdGguc3FydCgxICsgbTIyIC0gbTExIC0gbTMzKTtcbiAgICAgIGRzdFszXSA9IChtMTMgLSBtMzEpIC8gcztcbiAgICAgIGRzdFswXSA9IChtMTIgKyBtMjEpIC8gcztcbiAgICAgIGRzdFsxXSA9IDAuMjUgKiBzO1xuICAgICAgZHN0WzJdID0gKG0yMyArIG0zMikgLyBzO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzID0gMiAqIE1hdGguc3FydCgxICsgbTMzIC0gbTExIC0gbTIyKTtcbiAgICAgIGRzdFszXSA9IChtMjEgLSBtMTIpIC8gcztcbiAgICAgIGRzdFswXSA9IChtMTMgKyBtMzEpIC8gcztcbiAgICAgIGRzdFsxXSA9IChtMjMgKyBtMzIpIC8gcztcbiAgICAgIGRzdFsyXSA9IDAuMjUgKiBzO1xuICAgIH1cbiAgfVxuICBcbiAgZnVuY3Rpb24gZGVjb21wb3NlKG1hdCwgdHJhbnNsYXRpb24sIHF1YXRlcm5pb24sIHNjYWxlKSB7XG4gICAgbGV0IHN4ID0gbGVuZ3RoKG1hdC5zbGljZSgwLCAzKSk7XG4gICAgY29uc3Qgc3kgPSBsZW5ndGgobWF0LnNsaWNlKDQsIDcpKTtcbiAgICBjb25zdCBzeiA9IGxlbmd0aChtYXQuc2xpY2UoOCwgMTEpKTtcblxuICAgIC8vIGlmIGRlbWF0cm1pbmUgaXMgbmVnYXRpdmUsIHdlIG5lZWQgdG8gaW52ZXJ0IG9uZSBzY2FsZVxuICAgIGNvbnN0IGRldCA9IGRldGVybWluYXRlKG1hdCk7XG4gICAgaWYgKGRldCA8IDApIHtcbiAgICAgIHN4ID0gLXN4O1xuICAgIH1cblxuICAgIHRyYW5zbGF0aW9uWzBdID0gbWF0WzEyXTtcbiAgICB0cmFuc2xhdGlvblsxXSA9IG1hdFsxM107XG4gICAgdHJhbnNsYXRpb25bMl0gPSBtYXRbMTRdO1xuXG4gICAgLy8gc2NhbGUgdGhlIHJvdGF0aW9uIHBhcnRcbiAgICBjb25zdCBtYXRyaXggPSBjb3B5KG1hdCk7XG5cbiAgICBjb25zdCBpbnZTWCA9IDEgLyBzeDtcbiAgICBjb25zdCBpbnZTWSA9IDEgLyBzeTtcbiAgICBjb25zdCBpbnZTWiA9IDEgLyBzejtcblxuICAgIG1hdHJpeFswXSAqPSBpbnZTWDtcbiAgICBtYXRyaXhbMV0gKj0gaW52U1g7XG4gICAgbWF0cml4WzJdICo9IGludlNYO1xuXG4gICAgbWF0cml4WzRdICo9IGludlNZO1xuICAgIG1hdHJpeFs1XSAqPSBpbnZTWTtcbiAgICBtYXRyaXhbNl0gKj0gaW52U1k7XG5cbiAgICBtYXRyaXhbOF0gKj0gaW52U1o7XG4gICAgbWF0cml4WzldICo9IGludlNaO1xuICAgIG1hdHJpeFsxMF0gKj0gaW52U1o7XG5cbiAgICBxdWF0RnJvbVJvdGF0aW9uTWF0cml4KG1hdHJpeCwgcXVhdGVybmlvbik7XG5cbiAgICBzY2FsZVswXSA9IHN4O1xuICAgIHNjYWxlWzFdID0gc3k7XG4gICAgc2NhbGVbMl0gPSBzejtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRldGVybWluYXRlKG0pIHtcbiAgICB2YXIgbTAwID0gbVswICogNCArIDBdO1xuICAgIHZhciBtMDEgPSBtWzAgKiA0ICsgMV07XG4gICAgdmFyIG0wMiA9IG1bMCAqIDQgKyAyXTtcbiAgICB2YXIgbTAzID0gbVswICogNCArIDNdO1xuICAgIHZhciBtMTAgPSBtWzEgKiA0ICsgMF07XG4gICAgdmFyIG0xMSA9IG1bMSAqIDQgKyAxXTtcbiAgICB2YXIgbTEyID0gbVsxICogNCArIDJdO1xuICAgIHZhciBtMTMgPSBtWzEgKiA0ICsgM107XG4gICAgdmFyIG0yMCA9IG1bMiAqIDQgKyAwXTtcbiAgICB2YXIgbTIxID0gbVsyICogNCArIDFdO1xuICAgIHZhciBtMjIgPSBtWzIgKiA0ICsgMl07XG4gICAgdmFyIG0yMyA9IG1bMiAqIDQgKyAzXTtcbiAgICB2YXIgbTMwID0gbVszICogNCArIDBdO1xuICAgIHZhciBtMzEgPSBtWzMgKiA0ICsgMV07XG4gICAgdmFyIG0zMiA9IG1bMyAqIDQgKyAyXTtcbiAgICB2YXIgbTMzID0gbVszICogNCArIDNdO1xuICAgIHZhciB0bXBfMCAgPSBtMjIgKiBtMzM7XG4gICAgdmFyIHRtcF8xICA9IG0zMiAqIG0yMztcbiAgICB2YXIgdG1wXzIgID0gbTEyICogbTMzO1xuICAgIHZhciB0bXBfMyAgPSBtMzIgKiBtMTM7XG4gICAgdmFyIHRtcF80ICA9IG0xMiAqIG0yMztcbiAgICB2YXIgdG1wXzUgID0gbTIyICogbTEzO1xuICAgIHZhciB0bXBfNiAgPSBtMDIgKiBtMzM7XG4gICAgdmFyIHRtcF83ICA9IG0zMiAqIG0wMztcbiAgICB2YXIgdG1wXzggID0gbTAyICogbTIzO1xuICAgIHZhciB0bXBfOSAgPSBtMjIgKiBtMDM7XG4gICAgdmFyIHRtcF8xMCA9IG0wMiAqIG0xMztcbiAgICB2YXIgdG1wXzExID0gbTEyICogbTAzO1xuICAgIHZhciB0bXBfMTIgPSBtMjAgKiBtMzE7XG4gICAgdmFyIHRtcF8xMyA9IG0zMCAqIG0yMTtcbiAgICB2YXIgdG1wXzE0ID0gbTEwICogbTMxO1xuICAgIHZhciB0bXBfMTUgPSBtMzAgKiBtMTE7XG4gICAgdmFyIHRtcF8xNiA9IG0xMCAqIG0yMTtcbiAgICB2YXIgdG1wXzE3ID0gbTIwICogbTExO1xuICAgIHZhciB0bXBfMTggPSBtMDAgKiBtMzE7XG4gICAgdmFyIHRtcF8xOSA9IG0zMCAqIG0wMTtcbiAgICB2YXIgdG1wXzIwID0gbTAwICogbTIxO1xuICAgIHZhciB0bXBfMjEgPSBtMjAgKiBtMDE7XG4gICAgdmFyIHRtcF8yMiA9IG0wMCAqIG0xMTtcbiAgICB2YXIgdG1wXzIzID0gbTEwICogbTAxO1xuXG4gICAgdmFyIHQwID0gKHRtcF8wICogbTExICsgdG1wXzMgKiBtMjEgKyB0bXBfNCAqIG0zMSkgLVxuICAgICAgICAodG1wXzEgKiBtMTEgKyB0bXBfMiAqIG0yMSArIHRtcF81ICogbTMxKTtcbiAgICB2YXIgdDEgPSAodG1wXzEgKiBtMDEgKyB0bXBfNiAqIG0yMSArIHRtcF85ICogbTMxKSAtXG4gICAgICAgICh0bXBfMCAqIG0wMSArIHRtcF83ICogbTIxICsgdG1wXzggKiBtMzEpO1xuICAgIHZhciB0MiA9ICh0bXBfMiAqIG0wMSArIHRtcF83ICogbTExICsgdG1wXzEwICogbTMxKSAtXG4gICAgICAgICh0bXBfMyAqIG0wMSArIHRtcF82ICogbTExICsgdG1wXzExICogbTMxKTtcbiAgICB2YXIgdDMgPSAodG1wXzUgKiBtMDEgKyB0bXBfOCAqIG0xMSArIHRtcF8xMSAqIG0yMSkgLVxuICAgICAgICAodG1wXzQgKiBtMDEgKyB0bXBfOSAqIG0xMSArIHRtcF8xMCAqIG0yMSk7XG5cbiAgICByZXR1cm4gMS4wIC8gKG0wMCAqIHQwICsgbTEwICogdDEgKyBtMjAgKiB0MiArIG0zMCAqIHQzKTsgICAgXG4gIH1cblxuICAvKipcbiAgICogQ29tcHV0ZXMgdGhlIGludmVyc2Ugb2YgYSBtYXRyaXguXG4gICAqIEBwYXJhbSB7TWF0cml4NH0gbSBtYXRyaXggdG8gY29tcHV0ZSBpbnZlcnNlIG9mXG4gICAqIEBwYXJhbSB7TWF0cml4NH0gW2RzdF0gb3B0aW9uYWwgbWF0cml4IHRvIHN0b3JlIHJlc3VsdFxuICAgKiBAcmV0dXJuIHtNYXRyaXg0fSBkc3Qgb3IgYSBuZXcgbWF0cml4IGlmIG5vbmUgcHJvdmlkZWRcbiAgICogQG1lbWJlck9mIG1vZHVsZTp3ZWJnbC0zZC1tYXRoXG4gICAqL1xuICBmdW5jdGlvbiBpbnZlcnNlKG0sIGRzdCkge1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgRmxvYXQzMkFycmF5KDE2KTtcbiAgICB2YXIgbTAwID0gbVswICogNCArIDBdO1xuICAgIHZhciBtMDEgPSBtWzAgKiA0ICsgMV07XG4gICAgdmFyIG0wMiA9IG1bMCAqIDQgKyAyXTtcbiAgICB2YXIgbTAzID0gbVswICogNCArIDNdO1xuICAgIHZhciBtMTAgPSBtWzEgKiA0ICsgMF07XG4gICAgdmFyIG0xMSA9IG1bMSAqIDQgKyAxXTtcbiAgICB2YXIgbTEyID0gbVsxICogNCArIDJdO1xuICAgIHZhciBtMTMgPSBtWzEgKiA0ICsgM107XG4gICAgdmFyIG0yMCA9IG1bMiAqIDQgKyAwXTtcbiAgICB2YXIgbTIxID0gbVsyICogNCArIDFdO1xuICAgIHZhciBtMjIgPSBtWzIgKiA0ICsgMl07XG4gICAgdmFyIG0yMyA9IG1bMiAqIDQgKyAzXTtcbiAgICB2YXIgbTMwID0gbVszICogNCArIDBdO1xuICAgIHZhciBtMzEgPSBtWzMgKiA0ICsgMV07XG4gICAgdmFyIG0zMiA9IG1bMyAqIDQgKyAyXTtcbiAgICB2YXIgbTMzID0gbVszICogNCArIDNdO1xuICAgIHZhciB0bXBfMCAgPSBtMjIgKiBtMzM7XG4gICAgdmFyIHRtcF8xICA9IG0zMiAqIG0yMztcbiAgICB2YXIgdG1wXzIgID0gbTEyICogbTMzO1xuICAgIHZhciB0bXBfMyAgPSBtMzIgKiBtMTM7XG4gICAgdmFyIHRtcF80ICA9IG0xMiAqIG0yMztcbiAgICB2YXIgdG1wXzUgID0gbTIyICogbTEzO1xuICAgIHZhciB0bXBfNiAgPSBtMDIgKiBtMzM7XG4gICAgdmFyIHRtcF83ICA9IG0zMiAqIG0wMztcbiAgICB2YXIgdG1wXzggID0gbTAyICogbTIzO1xuICAgIHZhciB0bXBfOSAgPSBtMjIgKiBtMDM7XG4gICAgdmFyIHRtcF8xMCA9IG0wMiAqIG0xMztcbiAgICB2YXIgdG1wXzExID0gbTEyICogbTAzO1xuICAgIHZhciB0bXBfMTIgPSBtMjAgKiBtMzE7XG4gICAgdmFyIHRtcF8xMyA9IG0zMCAqIG0yMTtcbiAgICB2YXIgdG1wXzE0ID0gbTEwICogbTMxO1xuICAgIHZhciB0bXBfMTUgPSBtMzAgKiBtMTE7XG4gICAgdmFyIHRtcF8xNiA9IG0xMCAqIG0yMTtcbiAgICB2YXIgdG1wXzE3ID0gbTIwICogbTExO1xuICAgIHZhciB0bXBfMTggPSBtMDAgKiBtMzE7XG4gICAgdmFyIHRtcF8xOSA9IG0zMCAqIG0wMTtcbiAgICB2YXIgdG1wXzIwID0gbTAwICogbTIxO1xuICAgIHZhciB0bXBfMjEgPSBtMjAgKiBtMDE7XG4gICAgdmFyIHRtcF8yMiA9IG0wMCAqIG0xMTtcbiAgICB2YXIgdG1wXzIzID0gbTEwICogbTAxO1xuXG4gICAgdmFyIHQwID0gKHRtcF8wICogbTExICsgdG1wXzMgKiBtMjEgKyB0bXBfNCAqIG0zMSkgLVxuICAgICAgICAodG1wXzEgKiBtMTEgKyB0bXBfMiAqIG0yMSArIHRtcF81ICogbTMxKTtcbiAgICB2YXIgdDEgPSAodG1wXzEgKiBtMDEgKyB0bXBfNiAqIG0yMSArIHRtcF85ICogbTMxKSAtXG4gICAgICAgICh0bXBfMCAqIG0wMSArIHRtcF83ICogbTIxICsgdG1wXzggKiBtMzEpO1xuICAgIHZhciB0MiA9ICh0bXBfMiAqIG0wMSArIHRtcF83ICogbTExICsgdG1wXzEwICogbTMxKSAtXG4gICAgICAgICh0bXBfMyAqIG0wMSArIHRtcF82ICogbTExICsgdG1wXzExICogbTMxKTtcbiAgICB2YXIgdDMgPSAodG1wXzUgKiBtMDEgKyB0bXBfOCAqIG0xMSArIHRtcF8xMSAqIG0yMSkgLVxuICAgICAgICAodG1wXzQgKiBtMDEgKyB0bXBfOSAqIG0xMSArIHRtcF8xMCAqIG0yMSk7XG5cbiAgICB2YXIgZCA9IDEuMCAvIChtMDAgKiB0MCArIG0xMCAqIHQxICsgbTIwICogdDIgKyBtMzAgKiB0Myk7XG5cbiAgICBkc3RbMF0gPSBkICogdDA7XG4gICAgZHN0WzFdID0gZCAqIHQxO1xuICAgIGRzdFsyXSA9IGQgKiB0MjtcbiAgICBkc3RbM10gPSBkICogdDM7XG4gICAgZHN0WzRdID0gZCAqICgodG1wXzEgKiBtMTAgKyB0bXBfMiAqIG0yMCArIHRtcF81ICogbTMwKSAtXG4gICAgICAgICAgKHRtcF8wICogbTEwICsgdG1wXzMgKiBtMjAgKyB0bXBfNCAqIG0zMCkpO1xuICAgIGRzdFs1XSA9IGQgKiAoKHRtcF8wICogbTAwICsgdG1wXzcgKiBtMjAgKyB0bXBfOCAqIG0zMCkgLVxuICAgICAgICAgICh0bXBfMSAqIG0wMCArIHRtcF82ICogbTIwICsgdG1wXzkgKiBtMzApKTtcbiAgICBkc3RbNl0gPSBkICogKCh0bXBfMyAqIG0wMCArIHRtcF82ICogbTEwICsgdG1wXzExICogbTMwKSAtXG4gICAgICAgICAgKHRtcF8yICogbTAwICsgdG1wXzcgKiBtMTAgKyB0bXBfMTAgKiBtMzApKTtcbiAgICBkc3RbN10gPSBkICogKCh0bXBfNCAqIG0wMCArIHRtcF85ICogbTEwICsgdG1wXzEwICogbTIwKSAtXG4gICAgICAgICAgKHRtcF81ICogbTAwICsgdG1wXzggKiBtMTAgKyB0bXBfMTEgKiBtMjApKTtcbiAgICBkc3RbOF0gPSBkICogKCh0bXBfMTIgKiBtMTMgKyB0bXBfMTUgKiBtMjMgKyB0bXBfMTYgKiBtMzMpIC1cbiAgICAgICAgICAodG1wXzEzICogbTEzICsgdG1wXzE0ICogbTIzICsgdG1wXzE3ICogbTMzKSk7XG4gICAgZHN0WzldID0gZCAqICgodG1wXzEzICogbTAzICsgdG1wXzE4ICogbTIzICsgdG1wXzIxICogbTMzKSAtXG4gICAgICAgICAgKHRtcF8xMiAqIG0wMyArIHRtcF8xOSAqIG0yMyArIHRtcF8yMCAqIG0zMykpO1xuICAgIGRzdFsxMF0gPSBkICogKCh0bXBfMTQgKiBtMDMgKyB0bXBfMTkgKiBtMTMgKyB0bXBfMjIgKiBtMzMpIC1cbiAgICAgICAgICAodG1wXzE1ICogbTAzICsgdG1wXzE4ICogbTEzICsgdG1wXzIzICogbTMzKSk7XG4gICAgZHN0WzExXSA9IGQgKiAoKHRtcF8xNyAqIG0wMyArIHRtcF8yMCAqIG0xMyArIHRtcF8yMyAqIG0yMykgLVxuICAgICAgICAgICh0bXBfMTYgKiBtMDMgKyB0bXBfMjEgKiBtMTMgKyB0bXBfMjIgKiBtMjMpKTtcbiAgICBkc3RbMTJdID0gZCAqICgodG1wXzE0ICogbTIyICsgdG1wXzE3ICogbTMyICsgdG1wXzEzICogbTEyKSAtXG4gICAgICAgICAgKHRtcF8xNiAqIG0zMiArIHRtcF8xMiAqIG0xMiArIHRtcF8xNSAqIG0yMikpO1xuICAgIGRzdFsxM10gPSBkICogKCh0bXBfMjAgKiBtMzIgKyB0bXBfMTIgKiBtMDIgKyB0bXBfMTkgKiBtMjIpIC1cbiAgICAgICAgICAodG1wXzE4ICogbTIyICsgdG1wXzIxICogbTMyICsgdG1wXzEzICogbTAyKSk7XG4gICAgZHN0WzE0XSA9IGQgKiAoKHRtcF8xOCAqIG0xMiArIHRtcF8yMyAqIG0zMiArIHRtcF8xNSAqIG0wMikgLVxuICAgICAgICAgICh0bXBfMjIgKiBtMzIgKyB0bXBfMTQgKiBtMDIgKyB0bXBfMTkgKiBtMTIpKTtcbiAgICBkc3RbMTVdID0gZCAqICgodG1wXzIyICogbTIyICsgdG1wXzE2ICogbTAyICsgdG1wXzIxICogbTEyKSAtXG4gICAgICAgICAgKHRtcF8yMCAqIG0xMiArIHRtcF8yMyAqIG0yMiArIHRtcF8xNyAqIG0wMikpO1xuXG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUYWtlcyBhICBtYXRyaXggYW5kIGEgdmVjdG9yIHdpdGggNCBlbnRyaWVzLCB0cmFuc2Zvcm1zIHRoYXQgdmVjdG9yIGJ5XG4gICAqIHRoZSBtYXRyaXgsIGFuZCByZXR1cm5zIHRoZSByZXN1bHQgYXMgYSB2ZWN0b3Igd2l0aCA0IGVudHJpZXMuXG4gICAqIEBwYXJhbSB7TWF0cml4NH0gbSBUaGUgbWF0cml4LlxuICAgKiBAcGFyYW0ge1ZlY3RvcjR9IHYgVGhlIHBvaW50IGluIGhvbW9nZW5vdXMgY29vcmRpbmF0ZXMuXG4gICAqIEBwYXJhbSB7VmVjdG9yNH0gZHN0IG9wdGlvbmFsIHZlY3RvcjQgdG8gc3RvcmUgcmVzdWx0XG4gICAqIEByZXR1cm4ge1ZlY3RvcjR9IGRzdCBvciBuZXcgVmVjdG9yNCBpZiBub3QgcHJvdmlkZWRcbiAgICogQG1lbWJlck9mIG1vZHVsZTp3ZWJnbC0zZC1tYXRoXG4gICAqL1xuICBmdW5jdGlvbiB0cmFuc2Zvcm1WZWN0b3IobSwgdiwgZHN0KSB7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBGbG9hdDMyQXJyYXkoNCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyArK2kpIHtcbiAgICAgIGRzdFtpXSA9IDAuMDtcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgNDsgKytqKSB7XG4gICAgICAgIGRzdFtpXSArPSB2W2pdICogbVtqICogNCArIGldO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFRha2VzIGEgNC1ieS00IG1hdHJpeCBhbmQgYSB2ZWN0b3Igd2l0aCAzIGVudHJpZXMsXG4gICAqIGludGVycHJldHMgdGhlIHZlY3RvciBhcyBhIHBvaW50LCB0cmFuc2Zvcm1zIHRoYXQgcG9pbnQgYnkgdGhlIG1hdHJpeCwgYW5kXG4gICAqIHJldHVybnMgdGhlIHJlc3VsdCBhcyBhIHZlY3RvciB3aXRoIDMgZW50cmllcy5cbiAgICogQHBhcmFtIHtNYXRyaXg0fSBtIFRoZSBtYXRyaXguXG4gICAqIEBwYXJhbSB7VmVjdG9yM30gdiBUaGUgcG9pbnQuXG4gICAqIEBwYXJhbSB7VmVjdG9yNH0gZHN0IG9wdGlvbmFsIHZlY3RvcjQgdG8gc3RvcmUgcmVzdWx0XG4gICAqIEByZXR1cm4ge1ZlY3RvcjR9IGRzdCBvciBuZXcgVmVjdG9yNCBpZiBub3QgcHJvdmlkZWRcbiAgICogQG1lbWJlck9mIG1vZHVsZTp3ZWJnbC0zZC1tYXRoXG4gICAqL1xuICBmdW5jdGlvbiB0cmFuc2Zvcm1Qb2ludChtLCB2LCBkc3QpIHtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IEZsb2F0MzJBcnJheSgzKTtcbiAgICB2YXIgdjAgPSB2WzBdO1xuICAgIHZhciB2MSA9IHZbMV07XG4gICAgdmFyIHYyID0gdlsyXTtcbiAgICB2YXIgZCA9IHYwICogbVswICogNCArIDNdICsgdjEgKiBtWzEgKiA0ICsgM10gKyB2MiAqIG1bMiAqIDQgKyAzXSArIG1bMyAqIDQgKyAzXTtcblxuICAgIGRzdFswXSA9ICh2MCAqIG1bMCAqIDQgKyAwXSArIHYxICogbVsxICogNCArIDBdICsgdjIgKiBtWzIgKiA0ICsgMF0gKyBtWzMgKiA0ICsgMF0pIC8gZDtcbiAgICBkc3RbMV0gPSAodjAgKiBtWzAgKiA0ICsgMV0gKyB2MSAqIG1bMSAqIDQgKyAxXSArIHYyICogbVsyICogNCArIDFdICsgbVszICogNCArIDFdKSAvIGQ7XG4gICAgZHN0WzJdID0gKHYwICogbVswICogNCArIDJdICsgdjEgKiBtWzEgKiA0ICsgMl0gKyB2MiAqIG1bMiAqIDQgKyAyXSArIG1bMyAqIDQgKyAyXSkgLyBkO1xuXG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUYWtlcyBhIDQtYnktNCBtYXRyaXggYW5kIGEgdmVjdG9yIHdpdGggMyBlbnRyaWVzLCBpbnRlcnByZXRzIHRoZSB2ZWN0b3IgYXMgYVxuICAgKiBkaXJlY3Rpb24sIHRyYW5zZm9ybXMgdGhhdCBkaXJlY3Rpb24gYnkgdGhlIG1hdHJpeCwgYW5kIHJldHVybnMgdGhlIHJlc3VsdDtcbiAgICogYXNzdW1lcyB0aGUgdHJhbnNmb3JtYXRpb24gb2YgMy1kaW1lbnNpb25hbCBzcGFjZSByZXByZXNlbnRlZCBieSB0aGUgbWF0cml4XG4gICAqIGlzIHBhcmFsbGVsLXByZXNlcnZpbmcsIGkuZS4gYW55IGNvbWJpbmF0aW9uIG9mIHJvdGF0aW9uLCBzY2FsaW5nIGFuZFxuICAgKiB0cmFuc2xhdGlvbiwgYnV0IG5vdCBhIHBlcnNwZWN0aXZlIGRpc3RvcnRpb24uIFJldHVybnMgYSB2ZWN0b3Igd2l0aCAzXG4gICAqIGVudHJpZXMuXG4gICAqIEBwYXJhbSB7TWF0cml4NH0gbSBUaGUgbWF0cml4LlxuICAgKiBAcGFyYW0ge1ZlY3RvcjN9IHYgVGhlIGRpcmVjdGlvbi5cbiAgICogQHBhcmFtIHtWZWN0b3I0fSBkc3Qgb3B0aW9uYWwgdmVjdG9yNCB0byBzdG9yZSByZXN1bHRcbiAgICogQHJldHVybiB7VmVjdG9yNH0gZHN0IG9yIG5ldyBWZWN0b3I0IGlmIG5vdCBwcm92aWRlZFxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG4gIGZ1bmN0aW9uIHRyYW5zZm9ybURpcmVjdGlvbihtLCB2LCBkc3QpIHtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IEZsb2F0MzJBcnJheSgzKTtcblxuICAgIHZhciB2MCA9IHZbMF07XG4gICAgdmFyIHYxID0gdlsxXTtcbiAgICB2YXIgdjIgPSB2WzJdO1xuXG4gICAgZHN0WzBdID0gdjAgKiBtWzAgKiA0ICsgMF0gKyB2MSAqIG1bMSAqIDQgKyAwXSArIHYyICogbVsyICogNCArIDBdO1xuICAgIGRzdFsxXSA9IHYwICogbVswICogNCArIDFdICsgdjEgKiBtWzEgKiA0ICsgMV0gKyB2MiAqIG1bMiAqIDQgKyAxXTtcbiAgICBkc3RbMl0gPSB2MCAqIG1bMCAqIDQgKyAyXSArIHYxICogbVsxICogNCArIDJdICsgdjIgKiBtWzIgKiA0ICsgMl07XG5cbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFRha2VzIGEgNC1ieS00IG1hdHJpeCBtIGFuZCBhIHZlY3RvciB2IHdpdGggMyBlbnRyaWVzLCBpbnRlcnByZXRzIHRoZSB2ZWN0b3JcbiAgICogYXMgYSBub3JtYWwgdG8gYSBzdXJmYWNlLCBhbmQgY29tcHV0ZXMgYSB2ZWN0b3Igd2hpY2ggaXMgbm9ybWFsIHVwb25cbiAgICogdHJhbnNmb3JtaW5nIHRoYXQgc3VyZmFjZSBieSB0aGUgbWF0cml4LiBUaGUgZWZmZWN0IG9mIHRoaXMgZnVuY3Rpb24gaXMgdGhlXG4gICAqIHNhbWUgYXMgdHJhbnNmb3JtaW5nIHYgKGFzIGEgZGlyZWN0aW9uKSBieSB0aGUgaW52ZXJzZS10cmFuc3Bvc2Ugb2YgbS4gIFRoaXNcbiAgICogZnVuY3Rpb24gYXNzdW1lcyB0aGUgdHJhbnNmb3JtYXRpb24gb2YgMy1kaW1lbnNpb25hbCBzcGFjZSByZXByZXNlbnRlZCBieSB0aGVcbiAgICogbWF0cml4IGlzIHBhcmFsbGVsLXByZXNlcnZpbmcsIGkuZS4gYW55IGNvbWJpbmF0aW9uIG9mIHJvdGF0aW9uLCBzY2FsaW5nIGFuZFxuICAgKiB0cmFuc2xhdGlvbiwgYnV0IG5vdCBhIHBlcnNwZWN0aXZlIGRpc3RvcnRpb24uICBSZXR1cm5zIGEgdmVjdG9yIHdpdGggM1xuICAgKiBlbnRyaWVzLlxuICAgKiBAcGFyYW0ge01hdHJpeDR9IG0gVGhlIG1hdHJpeC5cbiAgICogQHBhcmFtIHtWZWN0b3IzfSB2IFRoZSBub3JtYWwuXG4gICAqIEBwYXJhbSB7VmVjdG9yM30gW2RzdF0gVGhlIGRpcmVjdGlvbi5cbiAgICogQHJldHVybiB7VmVjdG9yM30gVGhlIHRyYW5zZm9ybWVkIGRpcmVjdGlvbi5cbiAgICogQG1lbWJlck9mIG1vZHVsZTp3ZWJnbC0zZC1tYXRoXG4gICAqL1xuICBmdW5jdGlvbiB0cmFuc2Zvcm1Ob3JtYWwobSwgdiwgZHN0KSB7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBGbG9hdDMyQXJyYXkoMyk7XG4gICAgdmFyIG1pID0gaW52ZXJzZShtKTtcbiAgICB2YXIgdjAgPSB2WzBdO1xuICAgIHZhciB2MSA9IHZbMV07XG4gICAgdmFyIHYyID0gdlsyXTtcblxuICAgIGRzdFswXSA9IHYwICogbWlbMCAqIDQgKyAwXSArIHYxICogbWlbMCAqIDQgKyAxXSArIHYyICogbWlbMCAqIDQgKyAyXTtcbiAgICBkc3RbMV0gPSB2MCAqIG1pWzEgKiA0ICsgMF0gKyB2MSAqIG1pWzEgKiA0ICsgMV0gKyB2MiAqIG1pWzEgKiA0ICsgMl07XG4gICAgZHN0WzJdID0gdjAgKiBtaVsyICogNCArIDBdICsgdjEgKiBtaVsyICogNCArIDFdICsgdjIgKiBtaVsyICogNCArIDJdO1xuXG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvcHkoc3JjLCBkc3QpIHtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IEZsb2F0MzJBcnJheSgxNik7XG5cbiAgICBkc3RbIDBdID0gc3JjWyAwXTtcbiAgICBkc3RbIDFdID0gc3JjWyAxXTtcbiAgICBkc3RbIDJdID0gc3JjWyAyXTtcbiAgICBkc3RbIDNdID0gc3JjWyAzXTtcbiAgICBkc3RbIDRdID0gc3JjWyA0XTtcbiAgICBkc3RbIDVdID0gc3JjWyA1XTtcbiAgICBkc3RbIDZdID0gc3JjWyA2XTtcbiAgICBkc3RbIDddID0gc3JjWyA3XTtcbiAgICBkc3RbIDhdID0gc3JjWyA4XTtcbiAgICBkc3RbIDldID0gc3JjWyA5XTtcbiAgICBkc3RbMTBdID0gc3JjWzEwXTtcbiAgICBkc3RbMTFdID0gc3JjWzExXTtcbiAgICBkc3RbMTJdID0gc3JjWzEyXTtcbiAgICBkc3RbMTNdID0gc3JjWzEzXTtcbiAgICBkc3RbMTRdID0gc3JjWzE0XTtcbiAgICBkc3RbMTVdID0gc3JjWzE1XTtcblxuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNvcHk6IGNvcHksXG4gICAgbG9va0F0OiBsb29rQXQsXG4gICAgYWRkVmVjdG9yczogYWRkVmVjdG9ycyxcbiAgICBzdWJ0cmFjdFZlY3RvcnM6IHN1YnRyYWN0VmVjdG9ycyxcbiAgICBkaXN0YW5jZTogZGlzdGFuY2UsXG4gICAgZGlzdGFuY2VTcTogZGlzdGFuY2VTcSxcbiAgICBub3JtYWxpemU6IG5vcm1hbGl6ZSxcbiAgICBjb21wb3NlOiBjb21wb3NlLFxuICAgIGNyb3NzOiBjcm9zcyxcbiAgICBkZWNvbXBvc2U6IGRlY29tcG9zZSxcbiAgICBkb3Q6IGRvdCxcbiAgICBpZGVudGl0eTogaWRlbnRpdHksXG4gICAgdHJhbnNwb3NlOiB0cmFuc3Bvc2UsXG4gICAgbGVuZ3RoOiBsZW5ndGgsXG4gICAgb3J0aG9ncmFwaGljOiBvcnRob2dyYXBoaWMsXG4gICAgZnJ1c3R1bTogZnJ1c3R1bSxcbiAgICBwZXJzcGVjdGl2ZTogcGVyc3BlY3RpdmUsXG4gICAgdHJhbnNsYXRpb246IHRyYW5zbGF0aW9uLFxuICAgIHRyYW5zbGF0ZTogdHJhbnNsYXRlLFxuICAgIHhSb3RhdGlvbjogeFJvdGF0aW9uLFxuICAgIHlSb3RhdGlvbjogeVJvdGF0aW9uLFxuICAgIHpSb3RhdGlvbjogelJvdGF0aW9uLFxuICAgIHhSb3RhdGU6IHhSb3RhdGUsXG4gICAgeVJvdGF0ZTogeVJvdGF0ZSxcbiAgICB6Um90YXRlOiB6Um90YXRlLFxuICAgIGF4aXNSb3RhdGlvbjogYXhpc1JvdGF0aW9uLFxuICAgIGF4aXNSb3RhdGU6IGF4aXNSb3RhdGUsXG4gICAgc2NhbGluZzogc2NhbGluZyxcbiAgICBzY2FsZTogc2NhbGUsXG4gICAgbXVsdGlwbHk6IG11bHRpcGx5LFxuICAgIGludmVyc2U6IGludmVyc2UsXG4gICAgdHJhbnNmb3JtVmVjdG9yOiB0cmFuc2Zvcm1WZWN0b3IsXG4gICAgdHJhbnNmb3JtUG9pbnQ6IHRyYW5zZm9ybVBvaW50LFxuICAgIHRyYW5zZm9ybURpcmVjdGlvbjogdHJhbnNmb3JtRGlyZWN0aW9uLFxuICAgIHRyYW5zZm9ybU5vcm1hbDogdHJhbnNmb3JtTm9ybWFsLFxuICB9O1xuXG59KSk7XG5cbiIsIi8qKlxuICogUHJpbWl0aXZlIHNwaGVyZSwgdGhlIHZlcnRpY2VzIGluIHRoZSBsaXN0IG9mIFxuICogY29vcmRpbmF0ZXMgdGhhdCBpcyByZXByZXNlbnRlZCBieSB0aGUgYXJyYXkgY29udGFpbnMgMyBudW1iZXJzICh4LHkseikuXG4gKiBcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXMgXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtVmVydGljYWxTZWdtZW50cyB0aGUgbnVtYmVyIG9mIHRoZSB2ZXJ0aWNhbCBzZWdtZW50cy4gTGlrZSBFYXJ0aCdzIG1lcmlkaWFucyx0aGUgbGluZSBnb2luZyBwb2xlIHRvIHBvbGUuXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtSG9yaXpvbmFsU2VnZW1lbnRzIHRoZSBudW1iZXIgb2YgdGhlIGhvcml6b25hbCBzZWdtZW50cy4gTGlrZSBFYXJ0aCdzIHBhcmFsbGVscy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnRMYXRpdHVkZUluUmFkaWFucz0wXSAgXG4gKiBAcGFyYW0ge251bWJlcn0gW2VuZExhdGl0dWRlSW5SYWRpYW5zPU1hdGguUEldICBcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnRMb25naXR1ZGVJblJhZGlhbnM9MF0gIFxuICogQHBhcmFtIHtudW1iZXJ9IFtlbmRMb25naXR1ZGVJblJhZGlhbnM9MipNYXRoLlBJXSAgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTcGhlcmVWZXJ0aWNlcyhcbiAgcmFkaXVzLCBudW1WZXJ0aWNhbFNlZ21lbnRzLCBudW1Ib3Jpem9uYWxTZWdlbWVudHMsIFxuICBzdGFydExhdGl0dWRlSW5SYWRpYW5zID0gMCwgZW5kTGF0aXR1ZGVJblJhZGlhbnMgPSBNYXRoLlBJLCBcbiAgc3RhcnRMb25naXR1ZGVJblJhZGlhbnMgPSAwLCBlbmRMb25naXR1ZGVJblJhZGlhbnMgPSAyICogTWF0aC5QSSkge1xuXG4gIGNvbnN0IGxhdGl0dWRlUmFuZ2UgPSBlbmRMYXRpdHVkZUluUmFkaWFucyAtIHN0YXJ0TGF0aXR1ZGVJblJhZGlhbnM7XG4gIGNvbnN0IGxvbmdpdHVkZVJhbmdlID0gZW5kTG9uZ2l0dWRlSW5SYWRpYW5zIC0gc3RhcnRMb25naXR1ZGVJblJhZGlhbnM7XG4gIFxuICAvLyBhZGQgb25lIGJlY2F1c2UgdGhlIGVuZCBsaW5lIHNob3VsZCBiZSB0d28gbGluZXMgbWVyZ2VkXG4gIGNvbnN0IG51bVZlcnRpY2VzID0gKG51bVZlcnRpY2FsU2VnbWVudHMgKyAxKSAqIChudW1Ib3Jpem9uYWxTZWdlbWVudHMgKyAxKTsgXG4gIFxuICBsZXQgcG9zaXRpb25zID0gW10sIG5vcm1hbHMgPSBbXSwgdGV4Q29vcmRzID0gW107XG5cbiAgZm9yIChsZXQgaiA9IDA7IGogPCBudW1Ib3Jpem9uYWxTZWdlbWVudHMrMTsgais9MSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtVmVydGljYWxTZWdtZW50cysxOyBpKz0xKSB7XG4gICAgICBjb25zdCB1ID0gaSAvIG51bVZlcnRpY2FsU2VnbWVudHM7XG4gICAgICBjb25zdCB2ID0gaiAvIG51bUhvcml6b25hbFNlZ2VtZW50cztcblxuICAgICAgY29uc3QgdGhldGEgPSBsb25naXR1ZGVSYW5nZSAqIHU7IFxuICAgICAgY29uc3QgcGhpID0gbGF0aXR1ZGVSYW5nZSAqIHY7XG5cbiAgICAgIGNvbnN0IHNpblRoZXRhID0gTWF0aC5zaW4odGhldGEpLCBjb3NUaGV0YSA9IE1hdGguY29zKHRoZXRhKTtcbiAgICAgIGNvbnN0IHNpblBoaSA9IE1hdGguc2luKHBoaSksIGNvc3RQaGkgPSBNYXRoLmNvcyhwaGkpO1xuXG4gICAgICBjb25zdCB1eCA9IGNvc1RoZXRhICogc2luUGhpO1xuICAgICAgY29uc3QgdXkgPSBjb3N0UGhpO1xuICAgICAgY29uc3QgdXogPSBzaW5UaGV0YSAqIHNpblBoaTtcblxuICAgICAgcG9zaXRpb25zLnB1c2goW3JhZGl1cyAqIHV4LCByYWRpdXMgKiB1eSwgcmFkaXVzICogdXpdKTtcbiAgICAgIG5vcm1hbHMucHVzaChbdXgsIHV5LCB1el0pO1xuICAgICAgdGV4Q29vcmRzLnB1c2goWzEgLSB1LCB2XSk7XG4gICAgfVxuICB9XG5cbiAgLy8gZ2VuZXJhdGUgdGhlIGluZGljZXMgb2YgdGhlIHRyaWFuZ2xlcy5cbiAgY29uc3QgbnVtVmVydGljYWxTZWdtZW50VmVydGljZXMgPSBudW1WZXJ0aWNhbFNlZ21lbnRzICsgMTtcbiAgbGV0IGluZGljZXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1WZXJ0aWNhbFNlZ21lbnRzOyBpICs9IDEpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG51bUhvcml6b25hbFNlZ2VtZW50czsgaiArPSAxKXtcbiAgICAgIC8vIHR3byB0cmlhbmdsZXMgb2Ygb25lIGZhY2VcbiAgICAgIC8qIHRyaWFuZ2xlIDEgXG4gICAgICAgICAgKjEtLS0tLSoyXG4gICAgICAgICAgIHwgICAgL1xuICAgICAgICAgICB8ICAvICBcbiAgICAgICAgICAqMyAgXG4gICAgICAqL1xuICAgICAgbGV0IGlkeDEgPSBbXG4gICAgICAgIGogKiBudW1WZXJ0aWNhbFNlZ21lbnRWZXJ0aWNlcyArIGksXG4gICAgICAgIGogKiBudW1WZXJ0aWNhbFNlZ21lbnRWZXJ0aWNlcyArIChpICsgMSksXG4gICAgICAgIChqICsgMSkgKiBudW1WZXJ0aWNhbFNlZ21lbnRWZXJ0aWNlcyArIGkgXG4gICAgICBdO1xuICAgICAgLyogdHJpYW5nbGUgMlxuICAgICAgICAgICAgICAgICoyICAgXG4gICAgICAgICAgICAgIC8gIHxcbiAgICAgICAgICAgIC8gICAgfFxuICAgICAgICAgICoxLS0tLS0qM1xuICAgICAgKi9cbiAgICAgIGxldCBpZHgyID0gW1xuICAgICAgICAoaiArIDEpICogbnVtVmVydGljYWxTZWdtZW50VmVydGljZXMgKyBpICxcbiAgICAgICAgaiAqIG51bVZlcnRpY2FsU2VnbWVudFZlcnRpY2VzICsgKGkgKyAxKSxcbiAgICAgICAgKGogKyAxKSAqIG51bVZlcnRpY2FsU2VnbWVudFZlcnRpY2VzICsgKGkgKyAxKVxuICAgICAgXTtcblxuICAgICAgaW5kaWNlcy5wdXNoKGlkeDEsIGlkeDIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcG9pc3Rpb25zOiBwb3NpdGlvbnMsXG4gICAgbm9ybWFsczogbm9ybWFscyxcbiAgICB0ZXh0dXJlQ29vcmRpbmF0ZXM6IHRleENvb3JkcyxcbiAgICBpbmRpY2VzOiBpbmRpY2VzLFxuXG4gICAgbnVtVmVydGljZXM6IG51bVZlcnRpY2VzXG4gIH07XG5cbn1cblxuLypcbiAgR0xTTCBzaGFkZXIgcHJvZ3JhbSBhbmQgR0xTTCBjb2RlIGNvbXBpbGVyLlxuXG4gIFRoZXJlIGFyZSB0d28gc2hhZGVyOiB2ZXJ0ZXggc2hhZGVyIGFuZCBmcmFnbWVudCBzaGFkZXIuXG4gIFZlcnRleCBzaGFkZXIgaXMgdXNlZCBmb3IgdGhlIHZlcnRleCBwb3NpdGlvbiBpbmZvLlxuICBmcmFnbWVudCBzaGFkZXIgaXMgdXNlZCBmb3IgdGhlIHZlcnRleCBjb2xvciBpbmZvLlxuXG4gIEZvciBtb3JlIGRldGFpbHMsIExvb2sgZm9yIHRoZSBkb2N1bWVudCBhYm91dCBXZWJHTCBvbiBNRE4uXG4gKi9cblxuXG4vL1xuLy8gSW5pdGlhbGl6ZSBhIHNoYWRlciBwcm9ncmFtLCBzbyBXZWJHTCBrbm93cyBob3cgdG8gZHJhdyBvdXIgZGF0YVxuLy9cbmV4cG9ydCBmdW5jdGlvbiBpbml0U2hhZGVyUHJvZ3JhbShnbCwgdnNTb3VyY2UsIGZzU291cmNlKSB7XG4gIGNvbnN0IHZlcnRleFNoYWRlciA9IGxvYWRTaGFkZXIoZ2wsIGdsLlZFUlRFWF9TSEFERVIsIHZzU291cmNlKTtcbiAgY29uc3QgZnJhZ21lbnRTaGFkZXIgPSBsb2FkU2hhZGVyKGdsLCBnbC5GUkFHTUVOVF9TSEFERVIsIGZzU291cmNlKTtcblxuICAvLyBDcmVhdGUgdGhlIHNoYWRlciBwcm9ncmFtXG5cbiAgY29uc3Qgc2hhZGVyUHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcbiAgZ2wuYXR0YWNoU2hhZGVyKHNoYWRlclByb2dyYW0sIHZlcnRleFNoYWRlcik7XG4gIGdsLmF0dGFjaFNoYWRlcihzaGFkZXJQcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XG4gIGdsLmxpbmtQcm9ncmFtKHNoYWRlclByb2dyYW0pO1xuXG4gIC8vIElmIGNyZWF0aW5nIHRoZSBzaGFkZXIgcHJvZ3JhbSBmYWlsZWQsIGFsZXJ0XG5cbiAgaWYgKCFnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHNoYWRlclByb2dyYW0sIGdsLkxJTktfU1RBVFVTKSkge1xuICAgIHRocm93IEVycm9yKCdVbmFibGUgdG8gaW5pdGlhbGl6ZSB0aGUgc2hhZGVyIHByb2dyYW06ICcgKyBnbC5nZXRQcm9ncmFtSW5mb0xvZyhzaGFkZXJQcm9ncmFtKSk7XG4gIH1cblxuICByZXR1cm4gc2hhZGVyUHJvZ3JhbTtcbn1cblxuLy9cbi8vIGNyZWF0ZXMgYSBzaGFkZXIgb2YgdGhlIGdpdmVuIHR5cGUsIHVwbG9hZHMgdGhlIHNvdXJjZSBhbmRcbi8vIGNvbXBpbGVzIGl0LlxuLy9cbmZ1bmN0aW9uIGxvYWRTaGFkZXIoZ2wsIHR5cGUsIHNvdXJjZSkge1xuICBjb25zdCBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIodHlwZSk7XG5cbiAgLy8gU2VuZCB0aGUgc291cmNlIHRvIHRoZSBzaGFkZXIgb2JqZWN0XG5cbiAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc291cmNlKTtcblxuICAvLyBDb21waWxlIHRoZSBzaGFkZXIgcHJvZ3JhbVxuXG4gIGdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcblxuICAvLyBTZWUgaWYgaXQgY29tcGlsZWQgc3VjY2Vzc2Z1bGx5XG5cbiAgaWYgKCFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUykpIHtcbiAgICBnbC5kZWxldGVTaGFkZXIoc2hhZGVyKTtcbiAgICB0aHJvdyBFcnJvcignQW4gZXJyb3Igb2NjdXJyZWQgY29tcGlsaW5nIHRoZSBzaGFkZXJzOiAnICsgZ2wuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpKTtcbiAgfVxuXG4gIHJldHVybiBzaGFkZXI7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==