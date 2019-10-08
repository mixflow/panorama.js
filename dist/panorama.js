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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYW5vcmFtYS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vcGFub3JhbWEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGFub3JhbWEvLi9zcmMvY3NzL3Bhbm9yYW1hLmxlc3MiLCJ3ZWJwYWNrOi8vcGFub3JhbWEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Bhbm9yYW1hLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wYW5vcmFtYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly9wYW5vcmFtYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vcGFub3JhbWEvLi9zcmMvYXNzZXJ0cy9leGl0LWZ1bGxzY3JlZW4uc3ZnIiwid2VicGFjazovL3Bhbm9yYW1hLy4vc3JjL2Fzc2VydHMvZnVsbHNjcmVlbi5zdmciLCJ3ZWJwYWNrOi8vcGFub3JhbWEvLi9zcmMvYXNzZXJ0cy9tb2JpbGUtbW90aW9uLnN2ZyIsIndlYnBhY2s6Ly9wYW5vcmFtYS8uL3NyYy9jc3MvcGFub3JhbWEubGVzcz9iNmNlIiwid2VicGFjazovL3Bhbm9yYW1hLy4vc3JjL3Bhbm9yYW1hLmpzIiwid2VicGFjazovL3Bhbm9yYW1hLy4vc3JjL3VzZXItaW50ZXJmYWNlLmpzIiwid2VicGFjazovL3Bhbm9yYW1hLy4vc3JjL3V0aWxzL200LmpzIiwid2VicGFjazovL3Bhbm9yYW1hLy4vc3JjL3dlYmdsLWhlbHBlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FB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R0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVB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QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLE9BQU87QUFDcEIsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsT0FBTztBQUNwQixhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLE9BQU87QUFDcEIsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsT0FBTztBQUNwQixhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLFNBQVM7QUFDdEIsYUFBYSxTQUFTO0FBQ3RCLGFBQWEsU0FBUztBQUN0QixhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2RDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBLHFCQUFxQixPQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDNTVDRDtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjtBQUNPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw4RTs7QUFFQTs7QUFFQSxpQkFBaUIsNkJBQTZCO0FBQzlDLG1CQUFtQiwyQkFBMkI7QUFDOUM7QUFDQTs7QUFFQSx1QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHlCQUF5QjtBQUMxQyxtQkFBbUIsMkJBQTJCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQyIsImZpbGUiOiJwYW5vcmFtYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInBhbm9yYW1hXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInBhbm9yYW1hXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYW5vcmFtYS5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIEltcG9ydHNcbnZhciBnZXRVcmwgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL2Fzc2VydHMvbW9iaWxlLW1vdGlvbi5zdmdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMV9fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vYXNzZXJ0cy9mdWxsc2NyZWVuLnN2Z1wiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18yX19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9hc3NlcnRzL2V4aXQtZnVsbHNjcmVlbi5zdmdcIikpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucGFub3JhbWFfX2NlbnRlcmluZy0tMVg4M1cge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuLnBhbm9yYW1hX193cmFwcGVyLS0zTWVnQyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnBhbm9yYW1hX19vdmVybGF5LS1SNTRSTyB7XFxuICAvKiBvdmVybGF5IG9uIHRoZSBwYXJlbnQod3JhcHBlciksIG9uZSdzIHBvc2l0aW9uIGlzIHJlbGF0aXZlIGFuZFxcbiAgdGhlIG90aGVyIGlzIGFic29sdXRlLiAqL1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzFFQjlGRjsgKi9cXG59XFxuLnBhbm9yYW1hX19tYWluQ2FudmFzLS0xMng0biB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnBhbm9yYW1hX19wcm9ncmVzc1dyYXBwZXItLTIyTGViIHtcXG4gIHdpZHRoOiAzNSU7XFxuICBoZWlnaHQ6IDhweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNGRkY7XFxufVxcbi5wYW5vcmFtYV9fcHJvZ3Jlc3NCYXItLVBTSVNPIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLnBhbm9yYW1hX19wcm9ncmVzc01lc3NhZ2UtLTJIV2lCIHtcXG4gIGNvbG9yOiAjRkZGO1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcbi5wYW5vcmFtYV9fcGVyY2VudGFnZU51bS0tM1YyZkUge1xcbiAgY29sb3I6ICNGRkY7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcbi5wYW5vcmFtYV9fdWlDb250cm9sUGFuZWwtLTMyVko3IHtcXG4gIC8qIG1ha2Ugb25lIHdob2xlIGxpbmUgYmFyLCBwdXQgb24gdGhlIGJvdHRvbSAqL1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogaW5jbHVkZSBwYWRkaW5nIGludG8gd2lkdGggYW5kIGhlaWdodCBzaXplcyAqL1xcbiAgaGVpZ2h0OiA0ZW07XFxufVxcbi5wYW5vcmFtYV9fY29udHJvbEJ1dHRvbi0tM1JDbEwge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiA0ZW07XFxuICB3aWR0aDogNGVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTEsIDIxMSwgMjExLCAwLjYpO1xcbn1cXG4ucGFub3JhbWFfX29yaWVudGF0aW9uU3dpdGNoLS0yNFJHMSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxufVxcbi5wYW5vcmFtYV9fZnVsbHNjcmVlblN3aXRjaC0tZGplZ2kge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbn1cXG4ucGFub3JhbWFfX2Z1bGxzY3JlZW5Td2l0Y2gtLWRqZWdpLnBhbm9yYW1hX19pbkZ1bGxzY3JlZW4tLTFfcjZiIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMl9fXyArIFwiKTtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImNlbnRlcmluZ1wiOiBcInBhbm9yYW1hX19jZW50ZXJpbmctLTFYODNXXCIsXG5cdFwid3JhcHBlclwiOiBcInBhbm9yYW1hX193cmFwcGVyLS0zTWVnQ1wiLFxuXHRcIm92ZXJsYXlcIjogXCJwYW5vcmFtYV9fb3ZlcmxheS0tUjU0Uk9cIixcblx0XCJtYWluQ2FudmFzXCI6IFwicGFub3JhbWFfX21haW5DYW52YXMtLTEyeDRuXCIsXG5cdFwicHJvZ3Jlc3NXcmFwcGVyXCI6IFwicGFub3JhbWFfX3Byb2dyZXNzV3JhcHBlci0tMjJMZWIgcGFub3JhbWFfX2NlbnRlcmluZy0tMVg4M1dcIixcblx0XCJwcm9ncmVzc0JhclwiOiBcInBhbm9yYW1hX19wcm9ncmVzc0Jhci0tUFNJU09cIixcblx0XCJwcm9ncmVzc01lc3NhZ2VcIjogXCJwYW5vcmFtYV9fcHJvZ3Jlc3NNZXNzYWdlLS0ySFdpQlwiLFxuXHRcInBlcmNlbnRhZ2VOdW1cIjogXCJwYW5vcmFtYV9fcGVyY2VudGFnZU51bS0tM1YyZkVcIixcblx0XCJ1aUNvbnRyb2xQYW5lbFwiOiBcInBhbm9yYW1hX191aUNvbnRyb2xQYW5lbC0tMzJWSjdcIixcblx0XCJjb250cm9sQnV0dG9uXCI6IFwicGFub3JhbWFfX2NvbnRyb2xCdXR0b24tLTNSQ2xMXCIsXG5cdFwib3JpZW50YXRpb25Td2l0Y2hcIjogXCJwYW5vcmFtYV9fb3JpZW50YXRpb25Td2l0Y2gtLTI0UkcxIHBhbm9yYW1hX19jb250cm9sQnV0dG9uLS0zUkNsTFwiLFxuXHRcImZ1bGxzY3JlZW5Td2l0Y2hcIjogXCJwYW5vcmFtYV9fZnVsbHNjcmVlblN3aXRjaC0tZGplZ2kgcGFub3JhbWFfX2NvbnRyb2xCdXR0b24tLTNSQ2xMXCIsXG5cdFwiaW5GdWxsc2NyZWVuXCI6IFwicGFub3JhbWFfX2luRnVsbHNjcmVlbi0tMV9yNmJcIlxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIntcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tfaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiKFwiLmNvbmNhdChpdGVtWzJdLCBcIikgYW5kIChcIikuY29uY2F0KG1lZGlhUXVlcnksIFwiKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290KS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG5lZWRRdW90ZXMpIHtcbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQz94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nYXNjaWknPyUzRSAlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBoZWlnaHQ9JzIwMCcgdmVyc2lvbj0nMS4xJyB3aWR0aD0nMjAwJyUzRSAlM0NnIGlkPSdWaWV3IExheWVyX0xpbmVTZXQnIGlua3NjYXBlOmdyb3VwbW9kZT0nbGluZXNldCcgaW5rc2NhcGU6bGFiZWw9J1ZpZXcgTGF5ZXJfTGluZVNldCcgeG1sbnM6aW5rc2NhcGU9J2h0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUnJTNFICUzQ3N0eWxlJTNFICUyM3N0cm9rZXMgJTNFICogJTdCIGZpbGw6IGJsYWNrOyAlN0QgJTNDL3N0eWxlJTNFICUzQ2cgaWQ9J3N0cm9rZXMnIGlua3NjYXBlOmdyb3VwbW9kZT0nbGF5ZXInIGlua3NjYXBlOmxhYmVsPSdzdHJva2VzJyB4bWxuczppbmtzY2FwZT0naHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSclM0UgJTNDcGF0aCBkPScgTSA4MS41NDMsIDM2LjUzOSA3MS41NDMsIDM2LjUzOSA3MC4yOTIsIDM2LjUzOSA3MC4yOTIsIDQ2LjUzOSA3MC4yOTIsIDQ3Ljc5MCA3MC4yOTIsIDU3Ljc5MCA3MC4yOTIsIDU5LjA0MSA3MC4yOTIsIDY5LjA0MSA3MC4yOTIsIDcwLjI5MiA2MC4yOTIsIDcwLjI5MiA1OS4wNDEsIDcwLjI5MiA0OS4wNDEsIDcwLjI5MiA0Ny43OTAsIDcwLjI5MiAzNy43OTAsIDcwLjI5MiAzNi41MzksIDcwLjI5MiAzNi41MzksIDgwLjI5MiAzNi41MzksIDgxLjU0MyA0Ni41MzksIDgxLjU0MyA0Ny43OTAsIDgxLjU0MyA1Ny43OTAsIDgxLjU0MyA1OS4wNDEsIDgxLjU0MyA2OS4wNDEsIDgxLjU0MyA3MC4yOTIsIDgxLjU0MyA4MC4yOTIsIDgxLjU0MyA4MS41NDMsIDgxLjU0MyA4MS41NDMsIDcxLjU0MyA4MS41NDMsIDcwLjI5MiA4MS41NDMsIDYwLjI5MiA4MS41NDMsIDU5LjA0MSA4MS41NDMsIDQ5LjA0MSA4MS41NDMsIDQ3Ljc5MCA4MS41NDMsIDM3Ljc5MCA4MS41NDMsIDM2LjUzOSAnIGZpbGw9J25vbmUnIHN0cm9rZT0ncmdiKDAsIDAsIDApJyBzdHJva2UtbGluZWNhcD0nYnV0dCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLW9wYWNpdHk9JzEuMCcgc3Ryb2tlLXdpZHRoPSczLjAnIC8lM0UgJTNDcGF0aCBkPScgTSAxMTguNDU3LCAzNi41MzkgMTE4LjQ1NywgNDYuNTM5IDExOC40NTcsIDQ3Ljc5MCAxMTguNDU3LCA1Ny43OTAgMTE4LjQ1NywgNTkuMDQxIDExOC40NTcsIDY5LjA0MSAxMTguNDU3LCA3MC4yOTIgMTE4LjQ1NywgODAuMjkyIDExOC40NTcsIDgxLjU0MyAxMjguNDU3LCA4MS41NDMgMTI5LjcwOCwgODEuNTQzIDEzOS43MDgsIDgxLjU0MyAxNDAuOTU5LCA4MS41NDMgMTUwLjk1OSwgODEuNTQzIDE1Mi4yMTAsIDgxLjU0MyAxNjIuMjEwLCA4MS41NDMgMTYzLjQ2MSwgODEuNTQzIDE2My40NjEsIDcxLjU0MyAxNjMuNDYxLCA3MC4yOTIgMTUzLjQ2MSwgNzAuMjkyIDE1Mi4yMTAsIDcwLjI5MiAxNDIuMjEwLCA3MC4yOTIgMTQwLjk1OSwgNzAuMjkyIDEzMC45NTksIDcwLjI5MiAxMjkuNzA4LCA3MC4yOTIgMTI5LjcwOCwgNjAuMjkyIDEyOS43MDgsIDU5LjA0MSAxMjkuNzA4LCA0OS4wNDEgMTI5LjcwOCwgNDcuNzkwIDEyOS43MDgsIDM3Ljc5MCAxMjkuNzA4LCAzNi41MzkgMTE5LjcwOCwgMzYuNTM5IDExOC40NTcsIDM2LjUzOSAnIGZpbGw9J25vbmUnIHN0cm9rZT0ncmdiKDAsIDAsIDApJyBzdHJva2UtbGluZWNhcD0nYnV0dCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLW9wYWNpdHk9JzEuMCcgc3Ryb2tlLXdpZHRoPSczLjAnIC8lM0UgJTNDcGF0aCBkPScgTSA4MS41NDMsIDE2My40NjEgODEuNTQzLCAxNTMuNDYxIDgxLjU0MywgMTUyLjIxMCA4MS41NDMsIDE0Mi4yMTAgODEuNTQzLCAxNDAuOTU5IDgxLjU0MywgMTMwLjk1OSA4MS41NDMsIDEyOS43MDggODEuNTQzLCAxMTkuNzA4IDgxLjU0MywgMTE4LjQ1NyA3MS41NDMsIDExOC40NTcgNzAuMjkyLCAxMTguNDU3IDYwLjI5MiwgMTE4LjQ1NyA1OS4wNDEsIDExOC40NTcgNDkuMDQxLCAxMTguNDU3IDQ3Ljc5MCwgMTE4LjQ1NyAzNy43OTAsIDExOC40NTcgMzYuNTM5LCAxMTguNDU3IDM2LjUzOSwgMTI4LjQ1NyAzNi41MzksIDEyOS43MDggNDYuNTM5LCAxMjkuNzA4IDQ3Ljc5MCwgMTI5LjcwOCA1Ny43OTAsIDEyOS43MDggNTkuMDQxLCAxMjkuNzA4IDY5LjA0MSwgMTI5LjcwOCA3MC4yOTIsIDEyOS43MDggNzAuMjkyLCAxMzkuNzA4IDcwLjI5MiwgMTQwLjk1OSA3MC4yOTIsIDE1MC45NTkgNzAuMjkyLCAxNTIuMjEwIDcwLjI5MiwgMTYyLjIxMCA3MC4yOTIsIDE2My40NjEgODAuMjkyLCAxNjMuNDYxIDgxLjU0MywgMTYzLjQ2MSAnIGZpbGw9J25vbmUnIHN0cm9rZT0ncmdiKDAsIDAsIDApJyBzdHJva2UtbGluZWNhcD0nYnV0dCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLW9wYWNpdHk9JzEuMCcgc3Ryb2tlLXdpZHRoPSczLjAnIC8lM0UgJTNDcGF0aCBkPScgTSAxMTguNDU3LCAxNjMuNDYxIDEyOC40NTcsIDE2My40NjEgMTI5LjcwOCwgMTYzLjQ2MSAxMjkuNzA4LCAxNTMuNDYxIDEyOS43MDgsIDE1Mi4yMTAgMTI5LjcwOCwgMTQyLjIxMCAxMjkuNzA4LCAxNDAuOTU5IDEyOS43MDgsIDEzMC45NTkgMTI5LjcwOCwgMTI5LjcwOCAxMzkuNzA4LCAxMjkuNzA4IDE0MC45NTksIDEyOS43MDggMTUwLjk1OSwgMTI5LjcwOCAxNTIuMjEwLCAxMjkuNzA4IDE2Mi4yMTAsIDEyOS43MDggMTYzLjQ2MSwgMTI5LjcwOCAxNjMuNDYxLCAxMTkuNzA4IDE2My40NjEsIDExOC40NTcgMTUzLjQ2MSwgMTE4LjQ1NyAxNTIuMjEwLCAxMTguNDU3IDE0Mi4yMTAsIDExOC40NTcgMTQwLjk1OSwgMTE4LjQ1NyAxMzAuOTU5LCAxMTguNDU3IDEyOS43MDgsIDExOC40NTcgMTE5LjcwOCwgMTE4LjQ1NyAxMTguNDU3LCAxMTguNDU3IDExOC40NTcsIDEyOC40NTcgMTE4LjQ1NywgMTI5LjcwOCAxMTguNDU3LCAxMzkuNzA4IDExOC40NTcsIDE0MC45NTkgMTE4LjQ1NywgMTUwLjk1OSAxMTguNDU3LCAxNTIuMjEwIDExOC40NTcsIDE2Mi4yMTAgMTE4LjQ1NywgMTYzLjQ2MSAnIGZpbGw9J25vbmUnIHN0cm9rZT0ncmdiKDAsIDAsIDApJyBzdHJva2UtbGluZWNhcD0nYnV0dCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLW9wYWNpdHk9JzEuMCcgc3Ryb2tlLXdpZHRoPSczLjAnIC8lM0UgJTNDL2clM0UgJTNDL2clM0UgJTNDL3N2ZyUzRVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0M/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J2FzY2lpJz8lM0UgJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgaGVpZ2h0PScyMDAnIHZlcnNpb249JzEuMScgd2lkdGg9JzIwMCclM0UgJTNDZyBpZD0nVmlldyBMYXllcl9MaW5lU2V0JyBpbmtzY2FwZTpncm91cG1vZGU9J2xpbmVzZXQnIGlua3NjYXBlOmxhYmVsPSdWaWV3IExheWVyX0xpbmVTZXQnIHhtbG5zOmlua3NjYXBlPSdodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlJyUzRSAlM0NzdHlsZSUzRSAlMjNzdHJva2VzICUzRSAqICU3QiBmaWxsOiBibGFjazsgJTdEICUzQy9zdHlsZSUzRSAlM0NnIGlkPSdzdHJva2VzJyBpbmtzY2FwZTpncm91cG1vZGU9J2xheWVyJyBpbmtzY2FwZTpsYWJlbD0nc3Ryb2tlcycgeG1sbnM6aW5rc2NhcGU9J2h0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUnJTNFICUzQ3BhdGggZD0nIE0gMjYuMDQ4LCA3MS4wNTIgMzYuMDQ4LCA3MS4wNTIgMzcuMjk5LCA3MS4wNTIgMzcuMjk5LCA2MS4wNTIgMzcuMjk5LCA1OS44MDEgMzcuMjk5LCA0OS44MDEgMzcuMjk5LCA0OC41NTAgMzcuMjk5LCAzOC41NTAgMzcuMjk5LCAzNy4yOTkgNDcuMjk5LCAzNy4yOTkgNDguNTUwLCAzNy4yOTkgNTguNTUwLCAzNy4yOTkgNTkuODAxLCAzNy4yOTkgNjkuODAxLCAzNy4yOTkgNzEuMDUyLCAzNy4yOTkgNzEuMDUyLCAyNy4yOTkgNzEuMDUyLCAyNi4wNDggNjEuMDUyLCAyNi4wNDggNTkuODAxLCAyNi4wNDggNDkuODAxLCAyNi4wNDggNDguNTUwLCAyNi4wNDggMzguNTUwLCAyNi4wNDggMzcuMjk5LCAyNi4wNDggMjcuMjk5LCAyNi4wNDggMjYuMDQ4LCAyNi4wNDggMjYuMDQ4LCAzNi4wNDggMjYuMDQ4LCAzNy4yOTkgMjYuMDQ4LCA0Ny4yOTkgMjYuMDQ4LCA0OC41NTAgMjYuMDQ4LCA1OC41NTAgMjYuMDQ4LCA1OS44MDEgMjYuMDQ4LCA2OS44MDEgMjYuMDQ4LCA3MS4wNTIgJyBmaWxsPSdub25lJyBzdHJva2U9J3JnYigwLCAwLCAwKScgc3Ryb2tlLWxpbmVjYXA9J2J1dHQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS1vcGFjaXR5PScxLjAnIHN0cm9rZS13aWR0aD0nMy4wJyAvJTNFICUzQ3BhdGggZD0nIE0gMTczLjk1MiwgNzEuMDUyIDE3My45NTIsIDYxLjA1MiAxNzMuOTUyLCA1OS44MDEgMTczLjk1MiwgNDkuODAxIDE3My45NTIsIDQ4LjU1MCAxNzMuOTUyLCAzOC41NTAgMTczLjk1MiwgMzcuMjk5IDE3My45NTIsIDI3LjI5OSAxNzMuOTUyLCAyNi4wNDggMTYzLjk1MiwgMjYuMDQ4IDE2Mi43MDEsIDI2LjA0OCAxNTIuNzAxLCAyNi4wNDggMTUxLjQ1MCwgMjYuMDQ4IDE0MS40NTAsIDI2LjA0OCAxNDAuMTk5LCAyNi4wNDggMTMwLjE5OSwgMjYuMDQ4IDEyOC45NDgsIDI2LjA0OCAxMjguOTQ4LCAzNi4wNDggMTI4Ljk0OCwgMzcuMjk5IDEzOC45NDgsIDM3LjI5OSAxNDAuMTk5LCAzNy4yOTkgMTUwLjE5OSwgMzcuMjk5IDE1MS40NTAsIDM3LjI5OSAxNjEuNDUwLCAzNy4yOTkgMTYyLjcwMSwgMzcuMjk5IDE2Mi43MDEsIDQ3LjI5OSAxNjIuNzAxLCA0OC41NTAgMTYyLjcwMSwgNTguNTUwIDE2Mi43MDEsIDU5LjgwMSAxNjIuNzAxLCA2OS44MDEgMTYyLjcwMSwgNzEuMDUyIDE3Mi43MDEsIDcxLjA1MiAxNzMuOTUyLCA3MS4wNTIgJyBmaWxsPSdub25lJyBzdHJva2U9J3JnYigwLCAwLCAwKScgc3Ryb2tlLWxpbmVjYXA9J2J1dHQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS1vcGFjaXR5PScxLjAnIHN0cm9rZS13aWR0aD0nMy4wJyAvJTNFICUzQ3BhdGggZD0nIE0gMjYuMDQ4LCAxMjguOTQ4IDI2LjA0OCwgMTM4Ljk0OCAyNi4wNDgsIDE0MC4xOTkgMjYuMDQ4LCAxNTAuMTk5IDI2LjA0OCwgMTUxLjQ1MCAyNi4wNDgsIDE2MS40NTAgMjYuMDQ4LCAxNjIuNzAxIDI2LjA0OCwgMTcyLjcwMSAyNi4wNDgsIDE3My45NTIgMzYuMDQ4LCAxNzMuOTUyIDM3LjI5OSwgMTczLjk1MiA0Ny4yOTksIDE3My45NTIgNDguNTUwLCAxNzMuOTUyIDU4LjU1MCwgMTczLjk1MiA1OS44MDEsIDE3My45NTIgNjkuODAxLCAxNzMuOTUyIDcxLjA1MiwgMTczLjk1MiA3MS4wNTIsIDE2My45NTIgNzEuMDUyLCAxNjIuNzAxIDYxLjA1MiwgMTYyLjcwMSA1OS44MDEsIDE2Mi43MDEgNDkuODAxLCAxNjIuNzAxIDQ4LjU1MCwgMTYyLjcwMSAzOC41NTAsIDE2Mi43MDEgMzcuMjk5LCAxNjIuNzAxIDM3LjI5OSwgMTUyLjcwMSAzNy4yOTksIDE1MS40NTAgMzcuMjk5LCAxNDEuNDUwIDM3LjI5OSwgMTQwLjE5OSAzNy4yOTksIDEzMC4xOTkgMzcuMjk5LCAxMjguOTQ4IDI3LjI5OSwgMTI4Ljk0OCAyNi4wNDgsIDEyOC45NDggJyBmaWxsPSdub25lJyBzdHJva2U9J3JnYigwLCAwLCAwKScgc3Ryb2tlLWxpbmVjYXA9J2J1dHQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS1vcGFjaXR5PScxLjAnIHN0cm9rZS13aWR0aD0nMy4wJyAvJTNFICUzQ3BhdGggZD0nIE0gMTczLjk1MiwgMTI4Ljk0OCAxNjMuOTUyLCAxMjguOTQ4IDE2Mi43MDEsIDEyOC45NDggMTYyLjcwMSwgMTM4Ljk0OCAxNjIuNzAxLCAxNDAuMTk5IDE2Mi43MDEsIDE1MC4xOTkgMTYyLjcwMSwgMTUxLjQ1MCAxNjIuNzAxLCAxNjEuNDUwIDE2Mi43MDEsIDE2Mi43MDEgMTUyLjcwMSwgMTYyLjcwMSAxNTEuNDUwLCAxNjIuNzAxIDE0MS40NTAsIDE2Mi43MDEgMTQwLjE5OSwgMTYyLjcwMSAxMzAuMTk5LCAxNjIuNzAxIDEyOC45NDgsIDE2Mi43MDEgMTI4Ljk0OCwgMTcyLjcwMSAxMjguOTQ4LCAxNzMuOTUyIDEzOC45NDgsIDE3My45NTIgMTQwLjE5OSwgMTczLjk1MiAxNTAuMTk5LCAxNzMuOTUyIDE1MS40NTAsIDE3My45NTIgMTYxLjQ1MCwgMTczLjk1MiAxNjIuNzAxLCAxNzMuOTUyIDE3Mi43MDEsIDE3My45NTIgMTczLjk1MiwgMTczLjk1MiAxNzMuOTUyLCAxNjMuOTUyIDE3My45NTIsIDE2Mi43MDEgMTczLjk1MiwgMTUyLjcwMSAxNzMuOTUyLCAxNTEuNDUwIDE3My45NTIsIDE0MS40NTAgMTczLjk1MiwgMTQwLjE5OSAxNzMuOTUyLCAxMzAuMTk5IDE3My45NTIsIDEyOC45NDggJyBmaWxsPSdub25lJyBzdHJva2U9J3JnYigwLCAwLCAwKScgc3Ryb2tlLWxpbmVjYXA9J2J1dHQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS1vcGFjaXR5PScxLjAnIHN0cm9rZS13aWR0aD0nMy4wJyAvJTNFICUzQy9nJTNFICUzQy9nJTNFICUzQy9zdmclM0VcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDP3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdhc2NpaSc/JTNFICUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOmlua3NjYXBlPSdodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlJyBoZWlnaHQ9JzIwMCcgdmVyc2lvbj0nMS4xJyB3aWR0aD0nMjAwJyUzRSAlM0NnIGlkPSdWaWV3TGF5ZXJfTW9iaWxlRmFjZScgaW5rc2NhcGU6Z3JvdXBtb2RlPSdsaW5lc2V0JyBpbmtzY2FwZTpsYWJlbD0nVmlldyBMYXllcl9Nb2JpbGVGYWNlJyUzRSAlM0NnIGlkPSdzdHJva2VzJyBpbmtzY2FwZTpncm91cG1vZGU9J2xheWVyJyBpbmtzY2FwZTpsYWJlbD0nc3Ryb2tlcyclM0UgJTNDc3R5bGUlM0UgLm1vYmlsZS1lZGdlICU3QiU3RCAubW9iaWxlLWZhY2UgJTdCJTdEICUzQy9zdHlsZSUzRSAlM0NwYXRoIGNsYXNzPSdtb2JpbGUtZWRnZScgZD0nIE0gNTAuNDcwLCAxMzYuNDI4IDUwLjQ3MCwgMTQ2LjQyOCA1MC40NzAsIDE1Ni40MjggNTAuNDcwLCAxNjYuNDI4IDUwLjQ3MCwgMTc2LjQyOCA1MC40NzAsIDE4Ni40MjggNTAuNDcwLCAxODguNzAxIDYwLjQ3MCwgMTg4LjcwMSA3MC40NzAsIDE4OC43MDEgODAuNDcwLCAxODguNzAxIDkwLjQ3MCwgMTg4LjcwMSAxMDAuNDcwLCAxODguNzAxIDExMC40NzAsIDE4OC43MDEgMTIwLjQ3MCwgMTg4LjcwMSAxMzAuNDcwLCAxODguNzAxIDE0MC40NzAsIDE4OC43MDEgMTQ5LjUzMCwgMTg4LjcwMSAxNDkuNTMwLCAxNzguNzAxIDE0OS41MzAsIDE2OC43MDEgMTQ5LjUzMCwgMTU4LjcwMSAxNDkuNTMwLCAxNDguNzAxIDE0OS41MzAsIDEzOC43MDEgMTQ5LjUzMCwgMTI4LjcwMSAxNDkuNTMwLCAxMTguNzAxIDE0OS41MzAsIDEwOC43MDEgMTQ5LjUzMCwgOTguNzAxIDE0OS41MzAsIDg4LjcwMSAxNDkuNTMwLCA4NC45ODQgMTQ5LjUzMCwgODAuMTA0IDE0OS41MzAsIDcwLjEwNCAxNDkuNTMwLCA2MC4xMDQgMTQ5LjUzMCwgNTAuMTA0IDE0OS41MzAsIDQwLjEwNCAxNDkuNTMwLCAzMC4xMDQgMTQ5LjUzMCwgMjAuMTA0IDE0OS41MzAsIDExLjI5OSAxMzkuNTMwLCAxMS4yOTkgMTI5LjUzMCwgMTEuMjk5IDExOS41MzAsIDExLjI5OSAxMDkuNTMwLCAxMS4yOTkgOTkuNTMwLCAxMS4yOTkgODkuNTMwLCAxMS4yOTkgNzkuNTMwLCAxMS4yOTkgNjkuNTMwLCAxMS4yOTkgNTkuNTMwLCAxMS4yOTkgNTAuNDcwLCAxMS4yOTkgNTAuNDcwLCAyMS4yOTkgNTAuNDcwLCAzMS4yOTkgNTAuNDcwLCA0MS4yOTkgNTAuNDcwLCA1MS4yOTkgNTAuNDcwLCA2MS4yOTkgNTAuNDcwLCA3MS4yOTkgNTAuNDcwLCA4MC43MzAgNTAuNDcwLCA4NS42NTEgNTAuNDcwLCA5NS42NTEgNTAuNDcwLCAxMDUuNjUxIDUwLjQ3MCwgMTE1LjY1MSA1MC40NzAsIDEyNS42NTEgNTAuNDcwLCAxMjguNTE4ICcgZmlsbD0nbm9uZScgc3Ryb2tlPSdyZ2IoMCwgMCwgMCknIHN0cm9rZS1saW5lY2FwPSdidXR0JyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utb3BhY2l0eT0nMS4wJyBzdHJva2Utd2lkdGg9JzMuMCcgLyUzRSAlM0NwYXRoIGNsYXNzPSdtb2JpbGUtZmFjZScgZD0nIE0gNTYuNTE3LCAxMjkuMTAyIDU2LjUxNywgMTE5LjEwMiA1Ni41MTcsIDEwOS4xMDIgNTYuNTE3LCA5OS4xMDIgNTYuNTE3LCA4OS4xMDIgNTYuNTE3LCA4NC42NDMgNTYuNTE3LCA3OS44NTMgNTYuNTE3LCA2OS44NTMgNTYuNTE3LCA1OS44NTMgNTYuNTE3LCA0OS44NTMgNTYuNTE3LCAzOS44NTMgNTYuNTE3LCAyOS44NTMgNTYuNTE3LCAxOS44NTMgNTYuNTE3LCAxNy4xMjEgNjYuNTE3LCAxNy4xMjEgNzYuNTE3LCAxNy4xMjEgODYuNTE3LCAxNy4xMjEgOTYuNTE3LCAxNy4xMjEgMTA2LjUxNywgMTcuMTIxIDExNi41MTcsIDE3LjEyMSAxMjYuNTE3LCAxNy4xMjEgMTM2LjUxNywgMTcuMTIxIDE0My40ODMsIDE3LjEyMSAxNDMuNDgzLCAyNy4xMjEgMTQzLjQ4MywgMzcuMTIxIDE0My40ODMsIDQ3LjEyMSAxNDMuNDgzLCA1Ny4xMjEgMTQzLjQ4MywgNjcuMTIxIDE0My40ODMsIDc3LjEyMSAxNDMuNDgzLCA3OS4yMDcgMTQzLjQ4MywgODMuOTU3IDE0My40ODMsIDkzLjk1NyAxNDMuNDgzLCAxMDMuOTU3IDE0My40ODMsIDExMy45NTcgMTQzLjQ4MywgMTIzLjk1NyAxNDMuNDgzLCAxMzMuOTU3IDE0My40ODMsIDE0My45NTcgMTQzLjQ4MywgMTUzLjk1NyAxNDMuNDgzLCAxNjMuOTU3IDE0My40ODMsIDE2Ny40NzEgMTMzLjQ4MywgMTY3LjQ3MSAxMjMuNDgzLCAxNjcuNDcxIDExMy40ODMsIDE2Ny40NzEgMTAzLjQ4MywgMTY3LjQ3MSA5My40ODMsIDE2Ny40NzEgODMuNDgzLCAxNjcuNDcxIDczLjQ4MywgMTY3LjQ3MSA2My40ODMsIDE2Ny40NzEgNTYuNTE3LCAxNjcuNDcxIDU2LjUxNywgMTU3LjQ3MSA1Ni41MTcsIDE0Ny40NzEgNTYuNTE3LCAxMzcuNDcxIDU2LjUxNywgMTM3LjA0OCAnIGZpbGw9J25vbmUnIHN0cm9rZT0ncmdiKDAsIDAsIDApJyBzdHJva2UtbGluZWNhcD0nYnV0dCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLW9wYWNpdHk9JzEuMCcgc3Ryb2tlLXdpZHRoPSczLjAnIC8lM0UgJTNDcGF0aCBkPScgTSAxMDcuODQ4LCAxNzcuMzYwIDEwNy42OTcsIDE3OC44OTEgMTA3LjI1MSwgMTgwLjM2MyAxMDYuNTI1LCAxODEuNzIwIDEwNS41NDksIDE4Mi45MTAgMTA0LjM2MCwgMTgzLjg4NiAxMDMuMDAzLCAxODQuNjExIDEwMS41MzEsIDE4NS4wNTcgMTAwLjAwMCwgMTg1LjIwOCA5OC40NjksIDE4NS4wNTcgOTYuOTk3LCAxODQuNjExIDk1LjY0MCwgMTgzLjg4NiA5NC40NTEsIDE4Mi45MTAgOTMuNDc1LCAxODEuNzIwIDkyLjc0OSwgMTgwLjM2MyA5Mi4zMDMsIDE3OC44OTEgOTIuMTUyLCAxNzcuMzYwIDkyLjMwMywgMTc1LjgyOSA5Mi43NDksIDE3NC4zNTcgOTMuNDc1LCAxNzMuMDAwIDk0LjQ1MSwgMTcxLjgxMSA5NS42NDAsIDE3MC44MzUgOTYuOTk3LCAxNzAuMTA5IDk4LjQ2OSwgMTY5LjY2MyAxMDAuMDAwLCAxNjkuNTEyIDEwMS41MzEsIDE2OS42NjMgMTAzLjAwMywgMTcwLjEwOSAxMDQuMzYwLCAxNzAuODM1IDEwNS41NDksIDE3MS44MTEgMTA2LjUyNSwgMTczLjAwMCAxMDcuMjUxLCAxNzQuMzU3IDEwNy42OTcsIDE3NS44MjkgMTA3Ljg0OCwgMTc3LjM2MCAnIGZpbGw9J25vbmUnIHN0cm9rZT0ncmdiKDAsIDAsIDApJyBzdHJva2UtbGluZWNhcD0nYnV0dCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLW9wYWNpdHk9JzEuMCcgc3Ryb2tlLXdpZHRoPSczLjAnIC8lM0UgJTNDL2clM0UgJTNDL2clM0UgJTNDZyBpZD0nVmlld0xheWVyX0Fycm93cycgaW5rc2NhcGU6Z3JvdXBtb2RlPSdsaW5lc2V0JyBpbmtzY2FwZTpsYWJlbD0nVmlldyBMYXllcl9BcnJvd3MnIHhtbG5zOmlua3NjYXBlPSdodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlJyUzRSAlM0NzdHlsZSUzRSAuYXJyb3ctaGVhZCAlN0IgZmlsbDogbm9uZTsgJTdEICUzQy9zdHlsZSUzRSAlM0NnIGlkPSdzdHJva2VzJyBpbmtzY2FwZTpncm91cG1vZGU9J2xheWVyJyBpbmtzY2FwZTpsYWJlbD0nc3Ryb2tlcycgeG1sbnM6aW5rc2NhcGU9J2h0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUnJTNFICUzQ3BhdGggZD0nIE0gMTU1Ljk5MCwgMTI5Ljc5MCAxNTYuMTExLCAxMzEuNzY1IDE1NS43MjMsIDEzMy4yODYgMTU0LjkzOSwgMTMzLjk0MyAxNTMuOTc2LCAxMzMuNTczIDE1My4wOTMsIDEzMi4yOTIgMTUyLjUxOCwgMTMwLjQ0OCAxNTIuMzk4LCAxMjguNTIyIDE1Mi43NjQsIDEyNy4wMTMgMTUzLjUyNywgMTI2LjMyMCAxNTQuNDg5LCAxMjYuNjQyIDE1NS4zOTQsIDEyNy45MTAgMTU1Ljk5MCwgMTI5Ljc5MCAnIGZpbGw9J25vbmUnIHN0cm9rZT0ncmdiKDAsIDAsIDApJyBzdHJva2UtbGluZWNhcD0nYnV0dCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLW9wYWNpdHk9JzEuMCcgc3Ryb2tlLXdpZHRoPSczLjAnIC8lM0UgJTNDcGF0aCBkPScgTSAxODEuNTYwLCAxMTguNTI5IDE4MS40ODgsIDExOC41NTUgMTcyLjEwMiwgMTIyLjAwNyAxNjkuMzYzLCAxMjMuMDE0IDE1OS41NzQsIDEyNS4wNTcgMTUzLjUyNywgMTI2LjMyMCAnIGZpbGw9J25vbmUnIHN0cm9rZT0ncmdiKDAsIDAsIDApJyBzdHJva2UtbGluZWNhcD0nYnV0dCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLW9wYWNpdHk9JzEuMCcgc3Ryb2tlLXdpZHRoPSczLjAnIC8lM0UgJTNDcGF0aCBkPScgTSAxNTQuOTM5LCAxMzMuOTQzIDE2NC43MDIsIDEzMS43NzggMTcxLjQ0MiwgMTMwLjI4NCAxODAuNzUzLCAxMjYuNjM2IDE4NC4wODIsIDEyNS4zMzMgMTg1LjM4NiwgMTI0LjU1MCAxOTMuNTk3LCAxMTguODQyIDE5My43NjEsIDExOC43MjkgMTk3LjcwMCwgMTEyLjU5MSAxOTguMzU5LCAxMTEuMTQyIDE5OC4yMzUsIDEwNS4xMjAgMTk3Ljk4NiwgMTAzLjYzNiAxOTQuNDQzLCA5OC4wOTEgMTkzLjQ4OSwgOTcuMDczIDE4Ny4zMDMsIDkyLjE5NyAxNzguOTkxLCA4Ny45NjggMTY5LjU3MiwgODQuNjA3IDE2OS4wOTMsIDg0LjQzNiAxNTkuNDAzLCA4MS45NjQgMTU4LjA2MywgODEuNjIyIDE0OS41MzAsIDgwLjEwNCAnIGZpbGw9J25vbmUnIHN0cm9rZT0ncmdiKDAsIDAsIDApJyBzdHJva2UtbGluZWNhcD0nYnV0dCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLW9wYWNpdHk9JzEuMCcgc3Ryb2tlLXdpZHRoPSczLjAnIC8lM0UgJTNDcGF0aCBkPScgTSAxOTIuMTcwLCAxMDguNjkxIDE5MS41NTUsIDEwOS41NTAgMTg4LjI0OSwgMTE0LjE3NCAxODEuNDg4LCAxMTguNTU1ICcgZmlsbD0nbm9uZScgc3Ryb2tlPSdyZ2IoMCwgMCwgMCknIHN0cm9rZS1saW5lY2FwPSdidXR0JyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utb3BhY2l0eT0nMS4wJyBzdHJva2Utd2lkdGg9JzMuMCcgLyUzRSAlM0NwYXRoIGQ9JyBNIDE5MS43NTQsIDEwNC42NTcgMTkxLjcxNSwgMTA1LjYxMCAxOTEuNTU1LCAxMDkuNTUwICcgZmlsbD0nbm9uZScgc3Ryb2tlPSdyZ2IoMCwgMCwgMCknIHN0cm9rZS1saW5lY2FwPSdidXR0JyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utb3BhY2l0eT0nMS4wJyBzdHJva2Utd2lkdGg9JzMuMCcgLyUzRSAlM0NwYXRoIGQ9JyBNIDE4OS4wMTQsIDEwMC44NTggMTg5LjIyOCwgMTAxLjIzNCAxOTEuNzE1LCAxMDUuNjEwICcgZmlsbD0nbm9uZScgc3Ryb2tlPSdyZ2IoMCwgMCwgMCknIHN0cm9rZS1saW5lY2FwPSdidXR0JyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utb3BhY2l0eT0nMS4wJyBzdHJva2Utd2lkdGg9JzMuMCcgLyUzRSAlM0NwYXRoIGQ9JyBNIDE0OS41MzAsIDg0Ljk4NCAxNTYuNDUyLCA4Ni4yOTAgMTY2LjEwNCwgODguOTA0IDE2Ni45ODcsIDg5LjE0NCAxNzYuMzg5LCA5Mi43MTQgMTg0LjIyMSwgOTYuOTc1IDE4OS4yMjgsIDEwMS4yMzQgJyBmaWxsPSdub25lJyBzdHJva2U9J3JnYigwLCAwLCAwKScgc3Ryb2tlLWxpbmVjYXA9J2J1dHQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS1vcGFjaXR5PScxLjAnIHN0cm9rZS13aWR0aD0nMy4wJyAvJTNFICUzQ3BhdGggZD0nIE0gMTE2Ljc1NSwgODIuMDM2IDEyMS4zODUsIDgyLjAzNiAxMzEuMzY4LCA4Mi42MjQgMTMzLjM3MSwgODIuNzQxIDE0My4zMDAsIDgzLjkzNSAxNDMuNDgzLCA4My45NTcgJyBmaWxsPSdub25lJyBzdHJva2U9J3JnYigwLCAwLCAwKScgc3Ryb2tlLWxpbmVjYXA9J2J1dHQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS1vcGFjaXR5PScxLjAnIHN0cm9rZS13aWR0aD0nMy4wJyAvJTNFICUzQ3BhdGggZD0nIE0gMTQzLjQ4MywgNzkuMjA3IDEzNC4wMjEsIDc4LjEzMyAxMjQuMDM3LCA3Ny41NzggMTIxLjU3MCwgNzcuNDQxIDExNi43NzYsIDc3LjQ0MSAnIGZpbGw9J25vbmUnIHN0cm9rZT0ncmdiKDAsIDAsIDApJyBzdHJva2UtbGluZWNhcD0nYnV0dCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLW9wYWNpdHk9JzEuMCcgc3Ryb2tlLXdpZHRoPSczLjAnIC8lM0UgJTNDcGF0aCBjbGFzcz0nYXJyb3ctaGVhZCcgZD0nIE0gMTE2LjgwMywgNzguMzkxIDExNi43NzYsIDc3LjQ0MSAxMTYuNzMyLCA3NS45NDMgMTE2LjU5NiwgNzQuNTQ4IDExNi40MzMsIDc0LjU2MyAxMDYuNjAzLCA3Ni40MDMgOTYuNzc0LCA3OC4yNDIgODguNzk3LCA3OS43MzUgOTguNjI2LCA4MS41NzkgMTA4LjQ1NCwgODMuNDIzIDExNi41NDEsIDg0Ljk0MSAxMTYuNjkyLCA4My42MTcgMTE2Ljc1NSwgODIuMDM2IDExNi43ODgsIDgxLjIxNCAxMTYuODAzLCA3OC4zOTEgJyBmaWxsPSdub25lJyBzdHJva2U9J3JnYigwLCAwLCAwKScgc3Ryb2tlLWxpbmVjYXA9J2J1dHQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS1vcGFjaXR5PScxLjAnIHN0cm9rZS13aWR0aD0nMy4wJyAvJTNFICUzQ3BhdGggZD0nIE0gNjUuNjkxLCA3OC44MDMgNTYuNTE3LCA3OS44NTMgJyBmaWxsPSdub25lJyBzdHJva2U9J3JnYigwLCAwLCAwKScgc3Ryb2tlLWxpbmVjYXA9J2J1dHQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS1vcGFjaXR5PScxLjAnIHN0cm9rZS13aWR0aD0nMy4wJyAvJTNFICUzQ3BhdGggZD0nIE0gNjYuMzQ2LCA4My40NTIgNjYuNDg3LCA4Mi44NDMgNjYuNTAyLCA4MS43NjYgNjYuMzg3LCA4MC41MTIgNjYuMTcyLCA3OS40MjUgNjUuOTE3LCA3OC44MDEgNjUuNjkxLCA3OC44MDMgJyBmaWxsPSdub25lJyBzdHJva2U9J3JnYigwLCAwLCAwKScgc3Ryb2tlLWxpbmVjYXA9J2J1dHQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS1vcGFjaXR5PScxLjAnIHN0cm9rZS13aWR0aD0nMy4wJyAvJTNFICUzQ3BhdGggZD0nIE0gOS44NDAsIDEwMi4zMDEgMTQuOTQzLCA5Ny45NDkgMjIuODg2LCA5My42MDUgMzIuMjI3LCA5MC4wMzQgMzIuNDAxLCA4OS45NjcgNDIuMDQ5LCA4Ny4zMzUgNDMuMDQ5LCA4Ny4wNjIgNTAuNDcwLCA4NS42NTEgJyBmaWxsPSdub25lJyBzdHJva2U9J3JnYigwLCAwLCAwKScgc3Ryb2tlLWxpbmVjYXA9J2J1dHQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS1vcGFjaXR5PScxLjAnIHN0cm9rZS13aWR0aD0nMy4wJyAvJTNFICUzQ3BhdGggZD0nIE0gNTAuNDcwLCA4MC43MzAgNDEuNDI1LCA4Mi4zNTIgMzEuNzM5LCA4NC44NDEgMzAuMjc2LCA4NS4yMTcgMjAuODY0LCA4OC41OTcgMjAuMjU4LCA4OC44MTUgMTEuODI3LCA5My4xMjcgNS41MzAsIDk4LjEwMyA0LjU2NywgOTkuMTMwIDAuOTI5LCAxMDQuNzk1IDAuNjc5LCAxMDYuMjk0IDAuNDkyLCAxMTIuNDU0IDEuMTYxLCAxMTMuOTE2IDUuMDg2LCAxMjAuMjAyIDEzLjI0NywgMTI1Ljk4MiAxMy41MTMsIDEyNi4xNzEgMTQuODM5LCAxMjYuOTU1IDI0LjEzMCwgMTMwLjY1NCAyNy42MDUsIDEzMi4wMzcgMzcuMzYxLCAxMzQuMjMzIDQ0LjMwNywgMTM1Ljc5NiA1MC40NzAsIDEzNi40MjggNTYuNTE3LCAxMzcuMDQ4IDYzLjg1NywgMTM3LjgwMSA3MS42MjksIDEzNy44MDEgJyBmaWxsPSdub25lJyBzdHJva2U9J3JnYigwLCAwLCAwKScgc3Ryb2tlLWxpbmVjYXA9J2J1dHQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS1vcGFjaXR5PScxLjAnIHN0cm9rZS13aWR0aD0nMy4wJyAvJTNFICUzQ3BhdGggZD0nIE0gMTcuNTU5LCAxMjAuMTIzIDEwLjY3NCwgMTE1LjU4MSA3LjM5MiwgMTEwLjg3MiA2Ljc2MCwgMTA5Ljk2NiAnIGZpbGw9J25vbmUnIHN0cm9rZT0ncmdiKDAsIDAsIDApJyBzdHJva2UtbGluZWNhcD0nYnV0dCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLW9wYWNpdHk9JzEuMCcgc3Ryb2tlLXdpZHRoPSczLjAnIC8lM0UgJTNDcGF0aCBkPScgTSA3MS43NDIsIDEyOS44NjggNjQuNDQ0LCAxMjkuODY4IDU2LjUxNywgMTI5LjEwMiA1MC40NzAsIDEyOC41MTggNDUuNzQyLCAxMjguMDYxIDM1Ljk1OSwgMTI1Ljk4OCAyOS43MTQsIDEyNC42NjUgMjAuMzQ3LCAxMjEuMTY1IDE3LjU1OSwgMTIwLjEyMyAxNy4zOTUsIDEyMC4wNjIgJyBmaWxsPSdub25lJyBzdHJva2U9J3JnYigwLCAwLCAwKScgc3Ryb2tlLWxpbmVjYXA9J2J1dHQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS1vcGFjaXR5PScxLjAnIHN0cm9rZS13aWR0aD0nMy4wJyAvJTNFICUzQ3BhdGggY2xhc3M9J2Fycm93LWhlYWQnIGQ9JyBNIDExOC42OTgsIDEzMy44MjUgMTA4Ljg4MCwgMTMxLjkyNiA5OS4wNjIsIDEzMC4wMjggODkuMjQ0LCAxMjguMTI5IDc5LjQyNiwgMTI2LjIzMCA3Mi42MzIsIDEyNC45MTYgNzIuMTc2LCAxMjUuNzI5IDcxLjc5MCwgMTI4Ljc5MSA3MS43NDIsIDEyOS44NjggNzEuNTg4LCAxMzMuMzEwIDcxLjYyOSwgMTM3LjgwMSA3MS42MzEsIDEzNy45OTcgNzEuOTA2LCAxNDEuNDkwIDcyLjMzMCwgMTQyLjgzMiA4Mi4xNDYsIDE0MC45MjUgOTEuOTYzLCAxMzkuMDE4IDEwMS43NzksIDEzNy4xMTEgMTExLjU5NiwgMTM1LjIwNSAxMTguNjk4LCAxMzMuODI1ICcgZmlsbD0nbm9uZScgc3Ryb2tlPSdyZ2IoMCwgMCwgMCknIHN0cm9rZS1saW5lY2FwPSdidXR0JyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utb3BhY2l0eT0nMS4wJyBzdHJva2Utd2lkdGg9JzMuMCcgLyUzRSAlM0NwYXRoIGQ9JyBNIDcuMzkyLCAxMTAuODcyIDcuMjY3LCAxMDYuODA0IDcuMjM3LCAxMDUuODIxICcgZmlsbD0nbm9uZScgc3Ryb2tlPSdyZ2IoMCwgMCwgMCknIHN0cm9rZS1saW5lY2FwPSdidXR0JyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utb3BhY2l0eT0nMS4wJyBzdHJva2Utd2lkdGg9JzMuMCcgLyUzRSAlM0NwYXRoIGQ9JyBNIDcuMjY3LCAxMDYuODA0IDkuODQwLCAxMDIuMzAxIDEwLjA1NywgMTAxLjkyMiAnIGZpbGw9J25vbmUnIHN0cm9rZT0ncmdiKDAsIDAsIDApJyBzdHJva2UtbGluZWNhcD0nYnV0dCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLW9wYWNpdHk9JzEuMCcgc3Ryb2tlLXdpZHRoPSczLjAnIC8lM0UgJTNDcGF0aCBkPScgTSA1Ni41MTcsIDg0LjY0MyA2Ni4zNDYsIDgzLjQ1MiAnIGZpbGw9J25vbmUnIHN0cm9rZT0ncmdiKDAsIDAsIDApJyBzdHJva2UtbGluZWNhcD0nYnV0dCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLW9wYWNpdHk9JzEuMCcgc3Ryb2tlLXdpZHRoPSczLjAnIC8lM0UgJTNDL2clM0UgJTNDL2clM0UgJTNDL3N2ZyUzRVwiIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMSEuLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wYW5vcmFtYS5sZXNzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTEhLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcGFub3JhbWEubGVzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMSEuLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wYW5vcmFtYS5sZXNzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBtNCAgZnJvbSAnLi91dGlscy9tNCc7XG5pbXBvcnQgeyBpbml0U2hhZGVyUHJvZ3JhbSwgY3JlYXRlU3BoZXJlVmVydGljZXMgfSBmcm9tICcuL3dlYmdsLWhlbHBlcic7XG5cbmltcG9ydCBjbGF6eiBmcm9tIFwiLi9jc3MvcGFub3JhbWEubGVzc1wiO1xuaW1wb3J0IHtcbiAgY3JlYXRlT3JpZW50YXRpb25Td2l0Y2hIZWxwZXIsXG4gIGNyZWF0ZUZ1bGxzY3JlZW5Td2l0Y2hIZWxwZXIsXG4gIHRvZ2dsZUZ1bGxzY3JlZW5cbn0gZnJvbSBcIi4vdXNlci1pbnRlcmZhY2VcIjtcblxuLyoqXG4gKiBQYW5vcmFtYS5qcy4gY3JlYXRlIHBhbm9yYW1hXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHNldHRpbmcgIHRoZSBzZXR0aW5nIG9mIHBhbm9yYW1hLmpzLlxuICogQHBhcmFtIHtzdHJpbmd8RWxlbWVudH0gW3NldHRpbmcuY29udGFpbmVyPWRvY3VtZW50LmJvZHldIFRvIHNwZWNpZnkgd2hpY2ggY29udGFpbmVyIHRoYXQgdGhlIHBhbm9yYW1hIHB1dHMgaW4sIGNhbiBiZSBlaXRoZXIgY3NzIHNlbGVjdG9yIHN0cmluZyhsaWtlIFwiI2lkXCIgXCIuY2xhenpuYW1lXCIgXCJkaXYjaWRcIikgb3IgRE9NRWxlbWVudChsaWtlIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaWRcIiksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWRcIikgKS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBzZXR0aW5nLnNyYyB0aGUgaW1hZ2UgdXJsIG9mIHRoZSBhY3R1YWwgcGFub3JhbWEuXG4gKiBAcGFyYW0ge251bWJlcn0gW3NldHRpbmcuZm92PTkwXSB0aGUgRmllbGQgT2YgVmlldyBpbiBkZWdyZWVzLCB0aGUgY2FtZXJhIHZpZXcgYW5nbGUgc2NvcGUuXG4gKiBAcGFyYW0ge251bWJlciBhcnJheX0gW3NldHRpbmcuY2FtZXJhRGVncmVlPVswLDBdXSB0d28gbnVtYmVycyByZXByZXNlbnQgdGhlIGhvcml6b25hbCBhbmQgdmVydGljYWwgZGVncmVlcyBvZiBjYW1lcmEsXG4gKiAgZGVmYXVsdCBpcyBbMCwwXSB3aGljaCBtZWFucyB0aGUgZGVmYXVsdCBzdGFydCBwb2ludCBvZiB0aGUgcGFub3JhbWEgaW1hZ2UuXG4gKiAgdGhlIGZpcnN0IG51bWJlciByYW5nZXMgZnJvbSAwIHRvIDM2MCB3aGljaCBpcyBob3Jpem9uYWwgZGVncmVlIHdoaWNoIGlzIHRoZSBkaXJlY3Rpb24gdGhhdCBjYW1lcmEgbG9va3Mgb24gdGhlIGhvcml6b24uXG4gKiAgdGhlIHNlY29uZCBudW1iZXIgcmFuZ2VzIGZyb20gLTkwIHRvIDkwICh0b3RhbGx5IDE4MCBkZWdyZWVzKSAgd2hpY2ggaXMgdmVydGljYWwgZGVncmVlcyBvciB0aGUgUGl0Y2ggYW5nbGUgd2hlbiBsb29rIHVwIG9yIGxvb2sgZG93bixcbiAqICBwb3NpdGl2ZSBudW1iZXJzKDAgdG8gOTApIGFyZSB0aGUgZGVncmVlcyB0aGF0IGxvb2tzIHVwLCA5MCBpcyB0aGUgbm9ydGggcG9sZSh0aGUgdG9wKTtcbiAqICBuZWdhdGl2ZSBudW1iZXJzKC05MCB0byAwKSBhcmUgdGhlIGRlZ3JlZXMgdGhhdCBsb29rcyBkb3duLCAtOTAgaXMgdGhlIHNvdXRoIHBvbGUodGhlIGJvdHRvbSk7XG4gKi9cbmZ1bmN0aW9uIHBhbm9yYW1hKHNldHRpbmcpIHtcblxuICAvLyBjb25zdCBDTEFaWiA9ICdwYW5vcmFtYSc7IC8vIGNzcyBjbGFzcyBuYW1lLiBbTk9UIFVTRUQgWUVUXVxuXG4gIHNldHRpbmcgPSBoYW5kbGVTZXR0aW5nKHNldHRpbmcpO1xuXG4gIGNvbnN0IHtjb250YWluZXIsIHVybCwgZm92LCBjYW1lcmFEZWdyZWV9ID0gc2V0dGluZztcbiAgY29uc3Qge3JhZGl1cywgbnVtVmVydGljYWxTZWdtZW50cywgbnVtSG9yaXpvbmFsU2VnZW1lbnRzfSA9IHNldHRpbmcuc3BoZXJlO1xuXG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gIGNhbnZhcy5jbGFzc05hbWUgPSBjbGF6ei5tYWluQ2FudmFzO1xuICBjYW52YXMud2lkdGggPSBjb250YWluZXIuY2xpZW50V2lkdGg7XG4gIGNhbnZhcy5oZWlnaHQgPSBjb250YWluZXIuY2xpZW50SGVpZ2h0O1xuXG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoY2xhenoud3JhcHBlcik7XG5cbiAgLy8gdXNlciBjb250YWluZXIgPiB3cmFwcGVyID4gY2FudmFzXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChjYW52YXMpO1xuXG4gIC8vIG92ZXJsYXlcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG92ZXJsYXkuY2xhc3NOYW1lID0gY2xhenoub3ZlcmxheTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChvdmVybGF5KTtcblxuICBjb25zdCBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ2xcIik7IC8vIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHRcblxuICAvLyBVSSBjb250cm9sc1xuXG4gIC8vIG1haW4gcGFuZWwgdGhhdCBob2xkcyBhbGwgY29udHJvbCBidXR0b25zXG4gIGNvbnN0IHVpQ29udHJvbFBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdWlDb250cm9sUGFuZWwuY2xhc3NOYW1lID0gY2xhenoudWlDb250cm9sUGFuZWw7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQodWlDb250cm9sUGFuZWwpO1xuXG4gIC8vIHRoZSBkZXZpY2Ugb3JpZW50YXRpb24gc3dpdGNoIHRvIGVuYWJsZSBhbmQgZGlzYWJsZSB0aGUgb3JpZW50YXRpb24gdG8gY29udHJvbCBjYW1lcmFzXG4gIGNvbnN0IG9yaWVudGF0aW9uU3dpdGNoSGVscGVyID0gY3JlYXRlT3JpZW50YXRpb25Td2l0Y2hIZWxwZXIodWlDb250cm9sUGFuZWwpO1xuICBjb25zdCBvcmllbnRhdGlvblN3aXRjaCA9IG9yaWVudGF0aW9uU3dpdGNoSGVscGVyLmNyZWF0ZShzZXR0aW5nLmRldmljZU9yaWVudGF0aW9uRW5hYmxlZCk7IC8vIGluaXQgc3RhdHVzIG9mIHRoZSBzd2l0Y2hcblxuICAvLyBmdWxsc2NyZWVuIERPTSBFbGVtZW50IGFuZCB0b2dnbGUgZnVsbHNjcmVlblxuICBjb25zdCBmdWxsc2NyZWVuU3dpdGNoSGVscGVyID0gY3JlYXRlRnVsbHNjcmVlblN3aXRjaEhlbHBlcih1aUNvbnRyb2xQYW5lbCk7XG4gIGNvbnN0IGZ1bGxzY3JlZW5Td2l0Y2ggPSBmdWxsc2NyZWVuU3dpdGNoSGVscGVyLmNyZWF0ZShmYWxzZSk7XG5cbiAgZnVsbHNjcmVlblN3aXRjaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICBmdWxsc2NyZWVuU3dpdGNoSGVscGVyLmZsaXAoKTtcbiAgICB0b2dnbGVGdWxsc2NyZWVuKHdyYXBwZXIpO1xuICB9LCBmYWxzZSk7XG5cbiAgLy8gbm90IHN1cHBvcnQgV2ViZ2xcbiAgaWYgKGdsID09PSBudWxsKSB7XG4gICAgLy8gVE9ETyB3YXJuaWcgdGhlIG1zZyB0aGF0IHdlYmdsIGlzbid0IGF2YWlhYmxlLlxuICAgIHRocm93IEVycm9yKHtcbiAgICAgIHR5cGU6IFwiTm90IHN1cHBvcnQgV2ViR0xcIixcbiAgICAgIG1zZzogXCJXZWJHTCBpc24ndCBzdXBwb3J0LiB0aGUgcGFub3JhbWEgd2lsbCBub3Qgd29yay5cIixcbiAgICB9KTtcbiAgfVxuXG4gIGdsLmVuYWJsZShnbC5DVUxMX0ZBQ0UpOyAvLyBvbmx5IGRyYXcgdGhlIGZyb250IGZhY2Ugd2hpY2ggdGhlIHZlcnRpY2VzIGlzIGRyYXduIGNsb2Nrd2lzZS5cbiAgLy8gU2V0IGNsZWFyIGNvbG9yIHRvIGJsYWNrLCBmdWxseSBvcGFxdWVcbiAgZ2wuY2xlYXJDb2xvcigwLjAsIDAuMCwgMC4wLCAxLjApO1xuICAvLyBDbGVhciB0aGUgY29sb3IgYnVmZmVyIHdpdGggc3BlY2lmaWVkIGNsZWFyIGNvbG9yXG4gIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQpO1xuXG5cbiAgLy8gVmVydGV4IHNoYWRlciBwcm9ncmFtXG4gIGNvbnN0IHZzU291cmNlID0gYFxuICAgIGF0dHJpYnV0ZSB2ZWM0IGFWZXJ0ZXhQb3NpdGlvbjtcbiAgICBhdHRyaWJ1dGUgdmVjMiBhVGV4dHVyZUNvb3JkaW5hdGU7XG5cbiAgICB1bmlmb3JtIG1hdDQgdU1vZGVsVmlld01hdHJpeDtcbiAgICB1bmlmb3JtIG1hdDQgdVByb2plY3Rpb25NYXRyaXg7XG5cbiAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdlRleHR1cmVDb29yZGluYXRlO1xuXG4gICAgdm9pZCBtYWluKCkge1xuICAgICAgZ2xfUG9zaXRpb24gPSB1UHJvamVjdGlvbk1hdHJpeCAqIHVNb2RlbFZpZXdNYXRyaXggKiBhVmVydGV4UG9zaXRpb247XG4gICAgICB2VGV4dHVyZUNvb3JkaW5hdGUgPSBhVGV4dHVyZUNvb3JkaW5hdGU7XG4gICAgfVxuICBgO1xuXG4gIC8vIEZyYWdtZW50IHNoYWRlciBwcm9ncmFtXG4gIGNvbnN0IGZzU291cmNlID0gYFxuICAgIHZhcnlpbmcgaGlnaHAgdmVjMiB2VGV4dHVyZUNvb3JkaW5hdGU7XG5cbiAgICB1bmlmb3JtIHNhbXBsZXIyRCB1U2FtcGxlcjtcblxuICAgIHZvaWQgbWFpbih2b2lkKSB7XG4gICAgICBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQodVNhbXBsZXIsIHZUZXh0dXJlQ29vcmRpbmF0ZSk7XG4gICAgfVxuICBgO1xuXG4gIGNvbnN0IHNoYWRlclByb2dyYW0gPSBpbml0U2hhZGVyUHJvZ3JhbShnbCwgdnNTb3VyY2UsIGZzU291cmNlKTtcblxuICBjb25zdCBwcm9ncmFtSW5mbyA9IHtcbiAgICBwcm9ncmFtOiBzaGFkZXJQcm9ncmFtLFxuICAgIGF0dHJpYkxvY2F0aW9uczoge1xuICAgICAgdmVydGV4UG9zaXRpb246IGdsLmdldEF0dHJpYkxvY2F0aW9uKHNoYWRlclByb2dyYW0sICdhVmVydGV4UG9zaXRpb24nKSxcbiAgICAgIHRleHR1cmVDb29yZGluYXRlOiBnbC5nZXRBdHRyaWJMb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAnYVRleHR1cmVDb29yZGluYXRlJyksXG4gICAgfSxcbiAgICB1bmlmb3JtTG9jYXRpb25zOiB7XG4gICAgICBwcm9qZWN0aW9uTWF0cml4OiBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3VQcm9qZWN0aW9uTWF0cml4JyksXG4gICAgICBtb2RlbFZpZXdNYXRyaXg6IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAndU1vZGVsVmlld01hdHJpeCcpLFxuICAgICAgdVNhbXBsZXI6IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAndVNhbXBsZXInKSxcbiAgICB9LFxuICB9O1xuXG4gIC8vIGNyZWF0ZSBvbmUgc3BoZXJlIHZlcnRpY2VzXG4gIGNvbnN0IHNwaGVyZVZlcnRpY2VzID0gY3JlYXRlU3BoZXJlVmVydGljZXMocmFkaXVzLCBudW1WZXJ0aWNhbFNlZ21lbnRzLCBudW1Ib3Jpem9uYWxTZWdlbWVudHMpO1xuXG4gIC8vIGNyZWF0ZSBvbmUgcHJvZ3Jlc3MgaGVscGVyIGZ1bmN0aW9uIHRvIGNvbnRyb2wgbG9hZGluZyBpbmZvLlxuICBjb25zdCBsb2FkaW5nUHJvZ3Jlc3NIZWxwZXIgPSBsb2FkaW5nUHJvZ3Jlc3NGYWN0b3J5KG92ZXJsYXksIFwibG9hZGluZyBwYW5vcmFtYS4uLlwiKTtcblxuICBjb25zdCBnbF9sb2FkVGV4dHVyZSA9IGN1cnJ5KGxvYWRUZXh0dXJlLCBnbCk7IC8vIG1ldGhvZCwgZmlyc3QgYXJndW1lbnRcbiAgY29uc3QgdGV4dHVyZSA9IGdsX2xvYWRUZXh0dXJlKFxuICAgIHVybCxcbiAgICAoKT0+eyAvLyBjYWxsYmFjayBhZnRlciBmaW5pc2hpbmcgdG8gbG9hZCB0aGUgdGV4dHVyZVxuICAgICAgbG9hZGluZ1Byb2dyZXNzSGVscGVyLmhpZGUoKTsgLy8gaGlkZSBwcm9ncmVzcyBpbmZvXG4gICAgICBuZWVkVG9SZWRyYXcgPSB0cnVlO1xuICAgIH0sXG4gICAgbG9hZGluZ1Byb2dyZXNzSGVscGVyLmNyZWF0ZU9yVXBkYXRlIC8vIGNhbGxiYWNrIHdoaWxlIGxvYWRpbmdcbiAgKTtcblxuICBjb25zdCBidWZmZXJzID0gaW5pdEJ1ZmZlcnMoZ2wpO1xuICBmdW5jdGlvbiBpbml0QnVmZmVycyhnbCkge1xuXG4gICAgLy8gcG9zaXRpb24gYnVmZmVyIHBhcnRzXG4gICAgY29uc3QgcG9zaXRpb25zID0gc3BoZXJlVmVydGljZXMucG9pc3Rpb25zLmZsYXQoKTtcblxuICAgIGNvbnN0IHBvc2l0aW9uQnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHBvc2l0aW9uQnVmZmVyKTtcbiAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheShwb3NpdGlvbnMpLFxuICAgICAgZ2wuU1RBVElDX0RSQVcpO1xuXG4gICAgLy8gdGV4dHVyZSBwYXJ0c1xuICAgIGNvbnN0IHRleHR1cmVDb29yZHMgPSBzcGhlcmVWZXJ0aWNlcy50ZXh0dXJlQ29vcmRpbmF0ZXMuZmxhdCgpO1xuXG4gICAgY29uc3QgdGV4dHVyZUNvb3JkQnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRleHR1cmVDb29yZEJ1ZmZlcik7XG4gICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkodGV4dHVyZUNvb3JkcyksIGdsLlNUQVRJQ19EUkFXKTtcblxuICAgIC8vIGJ1aWxkIHRoZSBlbGVtZW50IGFycmF5LlxuICAgIGNvbnN0IGluZGljZXMgPSBzcGhlcmVWZXJ0aWNlcy5pbmRpY2VzLmZsYXQoKTtcblxuICAgIGNvbnN0IGluZGV4QnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgaW5kZXhCdWZmZXIpO1xuICAgIGdsLmJ1ZmZlckRhdGEoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIG5ldyBVaW50MTZBcnJheShpbmRpY2VzKSxcbiAgICAgIGdsLlNUQVRJQ19EUkFXKTtcblxuICAgIHJldHVybiB7XG4gICAgICBwb3NpdGlvbjogcG9zaXRpb25CdWZmZXIsXG4gICAgICB0ZXh0dXJlQ29vcmRpbmF0ZTogdGV4dHVyZUNvb3JkQnVmZmVyLFxuICAgICAgaW5kaWNlczogaW5kZXhCdWZmZXIsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXJlZnVsbHkhIHRoZSByYW5nZSBvZiB1c2VyIHNldHRpbmcgdmVydGljYWwgZGVncmVlcyAoLTkwIHRvIDkwKSBpc1xuICAgKiB0aGUgcmV2ZXJzZWQgb3JkZXIgb2YgdGhlIGxhdGl0dWRlKDAgdG8gTWF0aC5QSSkgdGhhdCBkZXZlbG9wcyBuZWVkLCBhbHNvIHdpdGggdGhlIG9mZnNldCBvZiBoYWxmIG9mIFBJLlxuICAgKiBsYXRpdHVkZSAwIG1lYW5zIHRoZSBub3J0aCBwb2xlKHRoZSB0b3ApIHRoYXQgaXMgdGhlIHVzZXIgc2V0dGluZyBkZWdyZWUgOTAuXG4gICAqXG4gICAqIFdoeSBtYWtlIHVzZXIgc2V0dGluZyBhbmQgYWN0dWFsIGRhdGEgc3VjaCBkaWZmZXJlbnQ/XG4gICAqIEFud3NlcjogZWFzeSBmb3IgdXNlLiBgWzAsMF1gYXMgc3RhcnRwb2ludCBtYXRjaGVzIHRoZSBtYW4ncyBpbnR1aXRpb24uXG4gICAqL1xuICBsZXQge2xhdGl0dWRlLCBsb25naXR1ZGV9ID0gdXNlckNhbWVyYURlZ3JlZVRvTGF0TG9uKGNhbWVyYURlZ3JlZSk7XG4gIGxldCB0YXJnZXRQb3NpdGlvbiA9IGxhdGxvblRvVmVydGV4KGxhdGl0dWRlLCBsb25naXR1ZGUpOyAvLyBjYW1lcmEgdGFyZ2V0IHBvc2l0aW9uXG5cbiAgZnVuY3Rpb24gZHJhd1NjZW5lKGdsLCBwcm9ncmFtSW5mbywgYnVmZmVycykge1xuICAgIGdsLmNsZWFyQ29sb3IoMC4wLCAwLjAsIDAuMCwgMS4wKTsgIC8vIENsZWFyIHRvIGJsYWNrLCBmdWxseSBvcGFxdWVcbiAgICBnbC5jbGVhckRlcHRoKDEuMCk7ICAgICAgICAgICAgICAgICAvLyBDbGVhciBldmVyeXRoaW5nXG4gICAgZ2wuZW5hYmxlKGdsLkRFUFRIX1RFU1QpOyAgICAgICAgICAgLy8gRW5hYmxlIGRlcHRoIHRlc3RpbmdcbiAgICBnbC5kZXB0aEZ1bmMoZ2wuTEVRVUFMKTsgICAgICAgICAgICAvLyBOZWFyIHRoaW5ncyBvYnNjdXJlIGZhciB0aGluZ3NcblxuICAgIC8vIFNldCB2aWV3cG9ydCh0aGUgNCBwYXJhbXRlcnM6IHgseSwgd2lkdGgsIGhlaWdodCwgKHgseSkgaXMgbGVmdC10b3AgY29ybmVyIGNvb3JkaW5hdGUpIG9mIFdlYmdsLlxuICAgIC8vIFRlbGwgV2ViR0wgaG93IHRvIGNvbnZlcnQgZnJvbSBjbGlwIHNwYWNlIHRvIHBpeGVsc1xuICAgIGdsLnZpZXdwb3J0KDAsIDAsIGdsLmNhbnZhcy53aWR0aCwgZ2wuY2FudmFzLmhlaWdodCk7XG5cbiAgICAvLyBDbGVhciB0aGUgY2FudmFzIGJlZm9yZSB3ZSBzdGFydCBkcmF3aW5nIG9uIGl0LlxuXG4gICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCB8IGdsLkRFUFRIX0JVRkZFUl9CSVQpO1xuXG4gICAgLy8gQ3JlYXRlIGEgcGVyc3BlY3RpdmUgbWF0cml4LCBhIHNwZWNpYWwgbWF0cml4IHRoYXQgaXNcbiAgICAvLyB1c2VkIHRvIHNpbXVsYXRlIHRoZSBkaXN0b3J0aW9uIG9mIHBlcnNwZWN0aXZlIGluIGEgY2FtZXJhLlxuICAgIC8vIE91ciBmaWVsZCBvZiB2aWV3IGlzIDQ1IGRlZ3JlZXMsIHdpdGggYSB3aWR0aC9oZWlnaHRcbiAgICAvLyByYXRpbyB0aGF0IG1hdGNoZXMgdGhlIGRpc3BsYXkgc2l6ZSBvZiB0aGUgY2FudmFzXG4gICAgLy8gYW5kIHdlIG9ubHkgd2FudCB0byBzZWUgb2JqZWN0cyBiZXR3ZWVuIDAuMSB1bml0c1xuICAgIC8vIGFuZCAxMDAgdW5pdHMgYXdheSBmcm9tIHRoZSBjYW1lcmEuXG5cbiAgICBjb25zdCBmaWVsZE9mVmlldyA9IGZvdiAqIE1hdGguUEkgLyAxODA7ICAgLy8gaW4gcmFkaWFuc1xuICAgIGNvbnN0IGFzcGVjdCA9IGdsLmNhbnZhcy5jbGllbnRXaWR0aCAvIGdsLmNhbnZhcy5jbGllbnRIZWlnaHQ7XG4gICAgY29uc3Qgek5lYXIgPSAwLjE7XG4gICAgY29uc3QgekZhciA9IDEwMC4wO1xuICAgIGNvbnN0IHByb2plY3Rpb25NYXRyaXggPSBtNC5wZXJzcGVjdGl2ZShcbiAgICAgIGZpZWxkT2ZWaWV3LFxuICAgICAgYXNwZWN0LFxuICAgICAgek5lYXIsXG4gICAgICB6RmFyKTtcblxuICAgIC8vIENhbWVyYSBtYXRyaXhcbiAgICBjb25zdCBjYW1lcmFVcCA9IFswLCAxLCAwXTtcbiAgICBsZXQgY2FtZXJhTWF0cml4ID0gbTQubG9va0F0KFswLCAwLCAwXSwgdGFyZ2V0UG9zaXRpb24sIGNhbWVyYVVwKTtcblxuICAgIC8vIGNhbWVyYU1hdHJpeCA9IG00LnRyYW5zbGF0ZShjYW1lcmFNYXRyaXgsIDAsIDAsIC0zKTtcblxuICAgIC8vIFNldCB0aGUgZHJhd2luZyBwb3NpdGlvbiB0byB0aGUgXCJpZGVudGl0eVwiIHBvaW50LCB3aGljaCBpc1xuICAgIC8vIHRoZSBjZW50ZXIgb2YgdGhlIHNjZW5lLlxuICAgIGxldCBtb2RlbFZpZXdNYXRyaXggPSBtNC5pbnZlcnNlKGNhbWVyYU1hdHJpeCk7XG5cbiAgICBsZXQgc2NhbGUgPSBtNC5zY2FsaW5nKC0xLCAxLCAxKTtcbiAgICBtb2RlbFZpZXdNYXRyaXggPSBtNC5tdWx0aXBseShtb2RlbFZpZXdNYXRyaXgsIHNjYWxlKTtcblxuICAgIC8vIFRlbGwgV2ViR0wgaG93IHRvIHB1bGwgb3V0IHRoZSBwb3NpdGlvbnMgZnJvbSB0aGUgcG9zaXRpb25cbiAgICAvLyBidWZmZXIgaW50byB0aGUgdmVydGV4UG9zaXRpb24gYXR0cmlidXRlLlxuICAgIHtcbiAgICAgIGNvbnN0IG51bUNvbXBvbmVudHMgPSAzOyAgLy8gcHVsbCBvdXQgMyAoeCx5LHopIHZhbHVlcyBwZXIgaXRlcmF0aW9uXG4gICAgICBjb25zdCB0eXBlID0gZ2wuRkxPQVQ7ICAgIC8vIHRoZSBkYXRhIGluIHRoZSBidWZmZXIgaXMgMzJiaXQgZmxvYXRzXG4gICAgICBjb25zdCBub3JtYWxpemUgPSBmYWxzZTsgIC8vIGRvbid0IG5vcm1hbGl6ZVxuICAgICAgY29uc3Qgc3RyaWRlID0gMDsgICAgICAgICAvLyBob3cgbWFueSBieXRlcyB0byBnZXQgZnJvbSBvbmUgc2V0IG9mIHZhbHVlcyB0byB0aGUgbmV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAwID0gdXNlIHR5cGUgYW5kIG51bUNvbXBvbmVudHMgYWJvdmVcbiAgICAgIGNvbnN0IG9mZnNldCA9IDA7ICAgICAgICAgLy8gaG93IG1hbnkgYnl0ZXMgaW5zaWRlIHRoZSBidWZmZXIgdG8gc3RhcnQgZnJvbVxuICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIGJ1ZmZlcnMucG9zaXRpb24pO1xuICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihcbiAgICAgICAgICBwcm9ncmFtSW5mby5hdHRyaWJMb2NhdGlvbnMudmVydGV4UG9zaXRpb24sXG4gICAgICAgICAgbnVtQ29tcG9uZW50cyxcbiAgICAgICAgICB0eXBlLFxuICAgICAgICAgIG5vcm1hbGl6ZSxcbiAgICAgICAgICBzdHJpZGUsXG4gICAgICAgICAgb2Zmc2V0KTtcbiAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KFxuICAgICAgICAgIHByb2dyYW1JbmZvLmF0dHJpYkxvY2F0aW9ucy52ZXJ0ZXhQb3NpdGlvbik7XG4gICAgfVxuXG4gICAgLy8gdGVsbCB3ZWJnbCBob3cgdG8gcHVsbCBvdXQgdGhlIHRleHR1cmUgY29vcmRpbmF0ZXMgZnJvbSBidWZmZXJcbiAgICB7XG4gICAgICBjb25zdCBudW1Db21wb25lbnRzID0gMjsgLy8gZXZlcnkgY29vcmRpbmF0ZSBjb21wb3NlZCBvZiAyIHZhbHVlc1xuICAgICAgY29uc3QgdHlwZSA9IGdsLkZMT0FUOyAvLyB0aGUgZGF0YSBpbiB0aGUgYnVmZmVyIGlzIDMyIGJpdCBmbG9hdFxuICAgICAgY29uc3Qgbm9ybWFsaXplID0gZmFsc2U7IC8vIGRvbid0IG5vcm1hbGl6ZVxuICAgICAgY29uc3Qgc3RyaWRlID0gMDsgLy8gaG93IG1hbnkgYnl0ZXMgdG8gZ2V0IGZyb20gb25lIHNldCB0byB0aGUgbmV4dFxuICAgICAgY29uc3Qgb2Zmc2V0ID0gMDsgLy8gaG93IG1hbnkgYnl0ZXMgaW5zaWRlIHRoZSBidWZmZXIgdG8gc3RhcnQgZnJvbVxuICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIGJ1ZmZlcnMudGV4dHVyZUNvb3JkaW5hdGUpO1xuICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihcbiAgICAgICAgcHJvZ3JhbUluZm8uYXR0cmliTG9jYXRpb25zLnRleHR1cmVDb29yZGluYXRlLFxuICAgICAgICAgbnVtQ29tcG9uZW50cywgdHlwZSwgbm9ybWFsaXplLCBzdHJpZGUsIG9mZnNldCk7XG4gICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShwcm9ncmFtSW5mby5hdHRyaWJMb2NhdGlvbnMudGV4dHVyZUNvb3JkaW5hdGUpO1xuICAgIH1cblxuICAgIC8vIFRlbGwgV2ViR0wgd2hpY2ggaW5kaWNlcyB0byB1c2UgdG8gaW5kZXggdGhlIHZlcnRpY2VzXG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgYnVmZmVycy5pbmRpY2VzKTtcblxuICAgIC8vIFRlbGwgV2ViR0wgdG8gdXNlIG91ciBwcm9ncmFtIHdoZW4gZHJhd2luZ1xuXG4gICAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtSW5mby5wcm9ncmFtKTtcblxuICAgIC8vIFNldCB0aGUgc2hhZGVyIHVuaWZvcm1zXG5cbiAgICBnbC51bmlmb3JtTWF0cml4NGZ2KFxuICAgICAgICBwcm9ncmFtSW5mby51bmlmb3JtTG9jYXRpb25zLnByb2plY3Rpb25NYXRyaXgsXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBwcm9qZWN0aW9uTWF0cml4KTtcbiAgICBnbC51bmlmb3JtTWF0cml4NGZ2KFxuICAgICAgICBwcm9ncmFtSW5mby51bmlmb3JtTG9jYXRpb25zLm1vZGVsVmlld01hdHJpeCxcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIG1vZGVsVmlld01hdHJpeCk7XG5cbiAgICAvKiBTcGVjaWZ5IHRoZSB0ZXh0dXJlIHRvIG1hcCBvbnRvIHRoZSBmYWNlcy4gKi9cblxuICAgIC8vIFRlbGwgV2ViR0wgd2Ugd2FudCB0byBhZmZlY3QgdGV4dHVyZSB1bml0IDBcbiAgICBnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUwKTtcblxuICAgIC8vIEJpbmQgdGhlIHRleHR1cmUgdG8gdGV4dHVyZSB1bml0IDBcbiAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlKTtcblxuICAgIC8vIFRlbGwgdGhlIHNoYWRlciB3ZSBib3VuZCB0aGUgdGV4dHVyZSB0byB0ZXh0dXJlIHVuaXQgMFxuICAgIGdsLnVuaWZvcm0xaShwcm9ncmFtSW5mby51bmlmb3JtTG9jYXRpb25zLnVTYW1wbGVyLCAwKTtcblxuICAgIHtcbiAgICAgIGNvbnN0IHZlcnRleENvdW50ID0gc3BoZXJlVmVydGljZXMuaW5kaWNlcy5sZW5ndGgqMztcbiAgICAgIGNvbnN0IHR5cGUgPSBnbC5VTlNJR05FRF9TSE9SVDtcbiAgICAgIGNvbnN0IG9mZnNldCA9IDA7XG4gICAgICBnbC5kcmF3RWxlbWVudHMoZ2wuVFJJQU5HTEVTLCB2ZXJ0ZXhDb3VudCwgdHlwZSwgb2Zmc2V0KTtcbiAgICB9XG4gIH0gLy9bZW5kXSBkcmF3U2NlbmUgZnVuY3Rpb25cblxuICAvLyBsb2NrIGxhdGl0dWRlIHJhbmdlLCBub3QgcGFzcyB0d28gcG9sZXNcbiAgY29uc3QgbWF4TGF0ID0gTWF0aC5QSSAqICgxIC0gMC4wNSk7IC8vIDAuOTVcbiAgY29uc3QgbWluTGF0ID0gTWF0aC5QSSAqICgwICsgMC4wNSk7IC8vIDAuMDVcbiAgY29uc3QgY2xhbXBMYXRpdHVkZSA9IGN1cnJ5KGNsYW1wLCBbbWluTGF0LCBtYXhMYXRdKTtcblxuICBjb25zdCB7YmVmb3JlVXBkYXRlQ2FtZXJhLCB1cGRhdGVDYW1lcmEsIGZpbmlzaFVwZGF0ZUNhbWVyYX0gPSAoZnVuY3Rpb24oKXtcbiAgICAvLyBzdG9yZSBjdXJyZW50IGxhdGl0dWRlIGFuZCBsb25naXR1ZGUgZHVyaW5nIGRyYWdnaW5nLlxuICAgIC8vIG9ubHkgdXBkYXRlIHRoZSBhY3R1YWwgbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSBhZnRlciBmaW5pc2ggZHJhZ2dpbmcuXG4gICAgbGV0IGxhdDtcbiAgICBsZXQgbG9uO1xuXG4gICAgZnVuY3Rpb24gYmVmb3JlVXBkYXRlQ2FtZXJhKCkge1xuICAgICAgbGF0ID0gbGF0aXR1ZGU7XG4gICAgICBsb24gPSBsb25naXR1ZGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogIFRoZSBmdW5jdGlvbiB0byBjaGFuZ2UgdGhlIGNhbWVyYSdzIHRhcmdldCB0aGF0IGl0IGxvb2tzIGF0LFxuICAgICAqICBBbHNvIHRoZSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IGlzIHBhc3NlZCBpbiB0aGUgZHJhZyBhbmQgbW92ZSBldmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZWx0YVggdGhlIGN1cnJlbnQgbGF0aXR1ZGUgd2hpY2ggY2FtZXJhIHRhcmdldHNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGVsdGFZICB0aGUgY3VycmVudCBsb25naXR1ZGUgd2hpY2ggY2FtZXJhIHRhcmdldHNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB1cGRhdGVDYW1lcmEoZGVsdGFYLCBkZWx0YVkpIHtcbiAgICAgIC8vIHVwZGF0ZSB0aGUgbGF0bG9uIGJ5IGFkZGluZyBkZWx0YSB2YWx1ZVxuICAgICAgLy8gVHJlYXQgdGhlIGRlbHRhIHZhbHVlIGFzIHRoZSBtb3ZlbWVudCBvbiB0aGUgY2lyY3VtZmVyZW5jZSh2ZXJ5IGNsb3NlKSxcbiAgICAgIC8vIGFuZCBjYWxjdWxhdGUgdGhlIHJhdGlvIG9mIHRoZSBtb3ZlbWVudCBvdmVyIGNpcmN1bWZlcmVuY2UgYW5kIGdldCB0aGUgcmFkaWFuXG4gICAgICAvLyBkZWx0YSBsb25naXR1ZGUgPSBkZWx0YVggLyBjaXJjdW1mZXJlbmNlICogKDIqTWF0aC5QSSksXG4gICAgICAvLyBiZWNhc3VzZSBjaXJjdW1mZXJlbmNlIGlzICgyKk1hdGguUEkqcmFkaXVzKSwgc28gdGhlIHNpbXBsaWZ5IGZvcm11bGFyIGlzIGRlbHRhWCAvIHJhZGl1cy5cbiAgICAgIGxldCBkZWx0YUxvbiA9IGRlbHRhWCAvIHJhZGl1cztcbiAgICAgIGxldCBkZWxhdExhdCA9IGRlbHRhWSAvIHJhZGl1cztcblxuICAgICAgbGF0aXR1ZGUgPSBkZWxhdExhdCtsYXQ7XG4gICAgICBsb25naXR1ZGUgPSBkZWx0YUxvbitsb247XG5cbiAgICAgIGxhdGl0dWRlID0gY2xhbXBMYXRpdHVkZShsYXRpdHVkZSk7XG5cbiAgICAgIC8vIGNvbXB1dGUgdGhlIGxvb2tBdCB2ZXJ0aWNlLlxuICAgICAgdGFyZ2V0UG9zaXRpb24gPSBsYXRsb25Ub1ZlcnRleChsYXRpdHVkZSwgbG9uZ2l0dWRlKTtcblxuICAgICAgbmVlZFRvUmVkcmF3ID0gdHJ1ZTsgLy8gcmVkcmF3IHRoZSBzY2VuZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbmlzaFVwZGF0ZUNhbWVyYSgpIHtcbiAgICAgIC8vIHVwZGF0ZSB0aGUgYWN0dWFsIHZhcmlibGUgbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSB1bnRpbCBkcmFnZ2luZyBpcyBkb25lLlxuICAgICAgLy8gbGF0aXR1ZGUgPSBsYXQ7XG4gICAgICAvLyBsb25naXR1ZGUgPSBsb247XG4gICAgfVxuXG4gICAgcmV0dXJuIHtiZWZvcmVVcGRhdGVDYW1lcmEsIHVwZGF0ZUNhbWVyYSwgZmluaXNoVXBkYXRlQ2FtZXJhfTtcbiAgfSkoKTtcblxuICAvLyBoYW5kbGUgdXNlciBpbnB1dCBhbmQgY29udHJvbCB0aGUgY2FtZXJhLCBtb3VzZSBhbmQgdG91Y2hcbiAgbGV0IG1vdXNlRXZlbnRIYW5kbGVycyA9IHVzZXJDb250cm9sSGFuZGxlcihiZWZvcmVVcGRhdGVDYW1lcmEsIHVwZGF0ZUNhbWVyYSwgZmluaXNoVXBkYXRlQ2FtZXJhLCBmYWxzZSk7XG4gIGxldCB0b3VjaEV2ZW50SGFuZGxlcnMgPSB1c2VyQ29udHJvbEhhbmRsZXIoYmVmb3JlVXBkYXRlQ2FtZXJhLCB1cGRhdGVDYW1lcmEsIGZpbmlzaFVwZGF0ZUNhbWVyYSwgdHJ1ZSk7XG5cblxuICAvLyByZWdpc3RlciBtb3VzZSBkcmFnIGV2ZW50c1xuICBjb25zdCBtb3VzZUV2ZW50VHlwZXMgPSBbXCJtb3VzZWRvd25cIiwgXCJtb3VzZW1vdmVcIiwgXCJtb3VzZXVwXCJdO1xuXG4gIE9iamVjdC5rZXlzKG1vdXNlRXZlbnRIYW5kbGVycykubWFwKChrZXksIGlkeCkgPT4ge1xuICAgIHdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50VHlwZXNbaWR4XSwgbW91c2VFdmVudEhhbmRsZXJzW2tleV0sIGZhbHNlKTtcbiAgfSk7XG5cbiAgLy8gcmVnaXN0ZXIgdG91Y2ggZHJhZyBldmVudHNcbiAgY29uc3QgdG91Y2hFdmVudFR5cGVzID0gW1widG91Y2hzdGFydFwiLCBcInRvdWNobW92ZVwiLCBcInRvdWNoZW5kXCJdO1xuXG4gIE9iamVjdC5rZXlzKHRvdWNoRXZlbnRIYW5kbGVycykubWFwKChrZXksIGlkeCkgPT4ge1xuICAgIHdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50VHlwZXNbaWR4XSwgdG91Y2hFdmVudEhhbmRsZXJzW2tleV0sIGZhbHNlKTtcbiAgfSk7XG5cblxuXG4gIGNvbnN0IGRldmljZU9yaWVudGF0aW9uSGVscGVyID0gY3JlYXRlRGV2aWNlT3JpZW50YXRpb25IZWxwZXIoKGRlbHRhQWxwaGEsIGRlbHRhQmV0YSkgPT4ge1xuICAgIC8vIGRlbHRhIHZhbHVlcyBhcmUgY2FsY3VsYXRlZCBpbiBkZWdyZWVzLiBjb252ZXJ0IHRob3NlIHRvIGxhdGxvbiByYWRpYW5zIGFuZCB1c2UgZGlyZWN0bHlcbiAgICBjb25zdCBkZWx0YUxvbiA9IGRlZ3JlZVRvUmFkaWFuKGRlbHRhQWxwaGEpO1xuICAgIGNvbnN0IGRlbHRhTGF0ID0gZGVncmVlVG9SYWRpYW4oZGVsdGFCZXRhKTtcblxuICAgIGxhdGl0dWRlIC09IGRlbHRhTGF0O1xuICAgIGxvbmdpdHVkZSAtPSBkZWx0YUxvbjtcblxuICAgIC8vIGNsYW1wIGxhdGl0dWRlIGJld3RlZW4gc291dGggYW5kIG5vcnRoIHBvbGVzLlxuICAgIGxhdGl0dWRlID0gY2xhbXBMYXRpdHVkZShsYXRpdHVkZSk7XG5cbiAgICB0YXJnZXRQb3NpdGlvbiA9IGxhdGxvblRvVmVydGV4KGxhdGl0dWRlLCBsb25naXR1ZGUpO1xuICAgIG5lZWRUb1JlZHJhdyA9IHRydWU7XG5cbiAgfSk7XG4gIC8vIHJlaWdzdGVyIGRldmljZSBvcmllbnRhdGlvbiBldmVudCB0byB3aW5kb3cuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiZGV2aWNlb3JpZW50YXRpb25cIiwgZGV2aWNlT3JpZW50YXRpb25IZWxwZXIuaGFuZGxlciwgdHJ1ZSk7XG4gIC8vIGJpbmQgY2xpY2sgZXZlbnQgb24gc3dpdGNoXG4gIG9yaWVudGF0aW9uU3dpdGNoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xuICAgIGNvbnN0IGVuYWJsZWQgPSBvcmllbnRhdGlvblN3aXRjaEhlbHBlci5mbGlwKCk7IC8vIHVwZGF0ZSBzd2l0Y2ggc3RhdHVzXG4gICAgZGV2aWNlT3JpZW50YXRpb25IZWxwZXIuc2V0RW5hYmxlZChlbmFibGVkKTtcbiAgfSwgZmFsc2UpO1xuICAvLyBpbml0IHN0YXR1c1xuICBkZXZpY2VPcmllbnRhdGlvbkhlbHBlci5zZXRFbmFibGVkKHNldHRpbmcuZGV2aWNlT3JpZW50YXRpb25FbmFibGVkKTtcblxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgZGlzcGxheSBzaXplKGBjYW52YXMuY2xpZW50V2lkdGhgIGFuZCBgY2FudmFzLmNsaWVudEhlaWdodGApIHdoZXRoZXIgaXQncyBjaGFuZ2VkLlxuICAgKiBVcGRhdGUgdGhlIGNhbnZhcyByZW5kZXIgc2l6ZShgY2FudmFzLndpZHRoYCBhbmQgYGNhbnZhcy5oZWlnaHRgKSB0byB0aGUgY3VycmVudCBkaXNwbGF5IHNpemUuXG4gICAqIEFuZCByZXR1cm4gYHRydWVgIHdoZW4gdGhlIHNpemUgaXMgY2hhbmdlZCwgb3RoZXJ3aXNlIGBmYWxzZWBcbiAgICpcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZTogbmVlZCByZXNpemU7IGZhbHNlOiBubyBuZWVkLlxuICAgKi9cbiAgZnVuY3Rpb24gcmVzaXplKCl7XG4gICAgdmFyIHBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbz8gd2luZG93LmRldmljZVBpeGVsUmF0aW86IDE7XG5cbiAgICBjb25zdCBjbGllbnRXaWR0aCA9IGdsLmNhbnZhcy5jbGllbnRXaWR0aCAqIHBpeGVsUmF0aW87XG4gICAgY29uc3QgY2xpZW50SGVpZ2h0ID0gZ2wuY2FudmFzLmNsaWVudEhlaWdodCAqIHBpeGVsUmF0aW87XG5cbiAgICBpZiAoZ2wuY2FudmFzLndpZHRoICE9PSBjbGllbnRXaWR0aCB8fCBnbC5jYW52YXMuaGVpZ2h0ICE9PSBjbGllbnRIZWlnaHQpe1xuICAgICAgZ2wuY2FudmFzLndpZHRoID0gY2xpZW50V2lkdGg7XG4gICAgICBnbC5jYW52YXMuaGVpZ2h0ID0gY2xpZW50SGVpZ2h0O1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGxldCBuZWVkVG9SZWRyYXcgPSB0cnVlO1xuICAvLyBEcmF3IHRoZSBzY2VuZSByZXBlYXRlZGx5XG4gIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBpZihyZXNpemUoKSB8fCBuZWVkVG9SZWRyYXcpe1xuICAgICAgLy8gbmVlZCBkcmF3XG4gICAgICBuZWVkVG9SZWRyYXcgPSBmYWxzZTtcbiAgICAgIGRyYXdTY2VuZShnbCwgcHJvZ3JhbUluZm8sIGJ1ZmZlcnMpO1xuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICB9XG5cbiAgcmVuZGVyKCk7IC8vIGluaXQgY2FsbCBgcmVuZGVyKClgXG5cbiAgLy8gZHJhd1NjZW5lKGdsLCBwcm9ncmFtSW5mbywgYnVmZmVycyk7XG5cbiAgcmV0dXJuIHtjb250YWluZXJ9O1xufSAvLyBbZW5kXSBmdW5jdGlvbiBwYW5vcmFtYVxuXG4vKipcbiAqIENvbnZlcnQgdXNlciBpbnB1dCBjYW1lcmUgZGVncmVlIHRvIGFjdHVhbCBsb25naXR1ZGUgYW5kIGxhdGl0dWRlIHRoYXRcbiAqIGFyZSB1c2VkIGZvciBjYW1lcmEgbG9va0F0IHBvaXNpdGlvbiBtYXRyaXguXG4gKiBCZWNhdXNlIGxhdGxvbiBhcmUgaW4gcmFkaWFucy4gRm9yIGVhc3kgdXNlLCB0aGUgdXNlciBpbnB1dCBpcyBpbiBkZWdyZWUuXG4gKiBBbHNvIHRoZSBsYXRpdHVkZSByYW5nZXMgZnJvbSAwIHRvIFBJIHRoYXQgYXJlIGxpa2UgTm9ydGggUG9sZSBhbmQgU291dGggUG9sZSBvbiB0aGUgRWFydGgsXG4gKiBDb3JyZXNwb25kIHRvIGxhdGl0dWRlLCB0aGUgdXNlciBpbnB1dCB2ZXJ0aWNhbCBkZWdyZWUgcmFuZ2VzIGZyb20gOTAgdG8gLTkwIHRoYXRcbiAqIGlzIHJldmVyc2VkIG9yZGVyIG9mIGxhdGl0dWRlIGFuZCBpcyBvZmZzZXQgaGFsZiBvZiBQSS5cbiAqXG4gKiBAcGFyYW0ge051bWJlciBBcnJheX0gZGVncmVlICB0d28gbnVtYmVyIGFycmF5IGNvbnRhaW5zIHRoZSBob3Jpem9uYWwgZGVncmVlIGFuZFxuICogIHRoZSB2ZXJ0aWNhbCBkZWdyZWUuXG4gKi9cbmZ1bmN0aW9uIHVzZXJDYW1lcmFEZWdyZWVUb0xhdExvbihkZWdyZWUpe1xuICBsZXQgbGF0aXR1ZGUgPSAgLWRlZ3JlZVRvUmFkaWFuKGRlZ3JlZVsxXSkgKyAoTWF0aC5QSSAvIDIpO1xuICBsZXQgbG9uZ2l0dWRlID0gIGRlZ3JlZVRvUmFkaWFuKGRlZ3JlZVswXSk7IC8vIHRyYW5zIHRvIHJhZGlhbiBkaXJlY3RseVxuICByZXR1cm4ge2xhdGl0dWRlOiBsYXRpdHVkZSwgbG9uZ2l0dWRlOiBsb25naXR1ZGV9O1xufVxuXG4vLyBjb21wdXRlIHRoZSByYWRpYW4gb2YgdGhlIGRlZ3JlZS4gOTBkZWcgLT4gUEkvMjsgMTgwZGVnIC0+IFBJOyA0NWRlZy0+IFBJLzQ7XG5jb25zdCBkZWdyZWVUb1JhZGlhbiA9IChkZWcpID0+IChkZWcgLyAxODAgKiBNYXRoLlBJKTtcbmNvbnN0IHJhZGlhblRvRGVncmVlID0gKHJhZGlhbikgPT4gKHJhZGlhbiAvIE1hdGguUEkgKiAxODApO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSB0byB0aGUgY29ycmVzcG9uZCB2ZXJ0ZXggaW4gW3gseSx6XS4gKHRoZSB0YXJnZXQgcG9pbnQgaW4gdGhlIHNwaGVyZSB3aG9zZSByYWRpdXMgaXMgMSlcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbGF0aXR1ZGUgdGhlIHJhZGlhbiBvZiBsYXRpdHVkZSwgbm9ybWFsbHkgZnJvbSAtUEkgdG8gUEkuXG4gKiBAcGFyYW0ge251bWJlcn0gbG9uZ2l0dWRlIHRoZSByYWRpYW4gb2YgbG9naXR1ZGUsIG5vcm1hbGx5IGZyb20gMCB0byAyKlBJLlxuICovXG5mdW5jdGlvbiBsYXRsb25Ub1ZlcnRleChsYXRpdHVkZSwgbG9uZ2l0dWRlKXtcbiAgY29uc3QgdGhldGEgPSBsb25naXR1ZGU7XG4gIGNvbnN0IHBoaSA9IGxhdGl0dWRlO1xuXG4gIGNvbnN0IHNpblRoZXRhID0gTWF0aC5zaW4odGhldGEpLCBjb3NUaGV0YSA9IE1hdGguY29zKHRoZXRhKTtcbiAgY29uc3Qgc2luUGhpID0gTWF0aC5zaW4ocGhpKSwgY29zdFBoaSA9IE1hdGguY29zKHBoaSk7XG5cbiAgY29uc3QgdXggPSBjb3NUaGV0YSAqIHNpblBoaTtcbiAgY29uc3QgdXkgPSBjb3N0UGhpO1xuICBjb25zdCB1eiA9IHNpblRoZXRhICogc2luUGhpO1xuXG4gIHJldHVybiBbdXgsIHV5LCB1el07XG59XG5cbmNvbnN0IGNyZWF0ZURldmljZU9yaWVudGF0aW9uSGVscGVyID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGxldCBlbmFibGVkID0gdHJ1ZTtcblxuICBsZXQgYWxwaGFCZWZvcmUsIGJldGFCZWZvcmU7XG4gIGZ1bmN0aW9uIGRldmljZU9yaWVudGF0aW9uSGFuZGxlcihldmVudCkge1xuICAgIGlmIChlbmFibGVkKSB7IC8vIHJlY29yZCBtb3Rpb24ob3JpZW50YXRpb24pIGRhdGFcbiAgICAgIGNvbnN0IHthbHBoYSwgYmV0YX0gPSBldmVudDsgLy8gY3VycmVudCBvcmllbnRhdGlvbiBkYXRhXG5cbiAgICAgIGlmICh0eXBlb2YgYWxwaGFCZWZvcmUgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgLy8gbm8gZGF0YSByZWNvcmRlZCBiZWZvcmUsIHNldCBwcmV2aW91cyB2YWx1ZSBkaXJlY3RseS5cbiAgICAgICAgYWxwaGFCZWZvcmUgPSBhbHBoYTtcbiAgICAgICAgYmV0YUJlZm9yZSA9IGJldGE7XG4gICAgICB9XG5cbiAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgZGVsdGEsIHRoZW4gaW52b2tlIGNhbGxiYWNrXG4gICAgICBjb25zdCBkZWx0YUFscGhhID0gYWxwaGEgLSBhbHBoYUJlZm9yZTtcbiAgICAgIGNvbnN0IGRlbHRhQmV0YSA9IGJldGEgLSBiZXRhQmVmb3JlO1xuICAgICAgLy8gcmVjb3JkIGRhdGFcbiAgICAgIGFscGhhQmVmb3JlID0gYWxwaGE7XG4gICAgICBiZXRhQmVmb3JlID0gYmV0YTtcblxuICAgICAgLy8gaW52b2tlIGNhbGxiYWNrXG4gICAgICBjYWxsYmFjayhkZWx0YUFscGhhLCBkZWx0YUJldGEpO1xuXG4gICAgfSBlbHNlIHsgLy8gZGlzYWJsZSBvcmllbnRhdGlvblxuICAgICAgYWxwaGFCZWZvcmUgPSB1bmRlZmluZWQ7XG4gICAgICBiZXRhQmVmb3JlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEVuYWJsZWQoYm9vbCkge1xuICAgIGVuYWJsZWQgPSBib29sO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBoYW5kbGVyOiBkZXZpY2VPcmllbnRhdGlvbkhhbmRsZXIsXG4gICAgc2V0RW5hYmxlZFxuICB9O1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZSB0aGUgdGhyZWUgZXZlbnQgaGFuZGxlciBmb3IgdXNlcidzIGlucHV0IGNvbnRyb2wgd2hlbiBpcyBkcmFnZ2luZy5cbiAqIGBzdGFydEhhbmRsZXJgIGlzIHVzZWQgZm9yIHRoZSBiZWdpbiBvZiB0aGUgZHJhZ2dpbmcgY29udHJvbCwgaGFuZGxlIGBtb3VzZWRvd25gIGV2ZW50IG9yIGB0b3VjaHN0YXJ0YCBldmVudC5cbiAqIGBtb3ZlSGFuZGxlcmAgaXMgdXNlZCB3aGVuIHVzZXIgaXMgZHJhZ2dpbmcsIGhhbmRsZSBgbW91c2Vtb3ZlYCBldmVudCBvciBgdG91Y2htb3ZlYCBldmVudC5cbiAqIGBlbmRIYW5kbGVyYCBpcyB1c2VkIGZvciB0aGUgZW5kIG9mIHRoZSBkcmFnZ2luZyBjb250cm9sLCBoYW5kbGUgYG1vdXNldXBgIG9yICBgdG91Y2hlbmRgIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGRyYWdnaW5nQ2FsbGJhY2sgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIGhhbmRsZSB1c2VyIGRyYWcgbW92ZW1lbnQgd2hlbiB1c2VyIGlzIGRyYWdnaW5nLlxuICogIHBhc3NlZCB0d28gYXJndW1lbnRzIGN1cnJlbnQgZGVsdGFYIGFuZCBkZWx0YVkodXNlciBtb3ZlbWVudCBpbiBwaXhlbCkgdGhhdCBpcyB1c2VkIGxhdGVyIHRvIGNvbXB1dGUgdGhlIGNhbWVyYSBgbG9vayBhdGAgKHRhcmdldCBwb3NpdGlvbikuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc1RvdWNoPWZhbHNlXSB0cnVlIGlmIHVzZXIgdXNlIHRvdWNoIGRldmljZSB0byBkcmFnIGFuZCBtb3ZlLCBmYWxzZSBvdGhlcndpc2UobGlrZSBtb3VzZSkuXG4gKiBAcGFyYW0ge251bWJlcn0gW21vdmVTcGVlZD0xXSB0aGUgbXVsdGlwbGllciBvZiB0aGUgdXNlciBtb3ZlbWVudCBzcGVlZCwgZGVmYXVsdCBpdCdzIDEgdGhhdCBpcyBub3JtYWwgc3BlZWQgYW5kIG5vIGNoYW5nZS5cbiAqL1xuY29uc3QgdXNlckNvbnRyb2xIYW5kbGVyID0gZnVuY3Rpb24gKHN0YXJ0RHJhZ0NhbGxiYWNrLCBkcmFnZ2luZ0NhbGxiYWNrLCBlbmREcmFnQ2FsbGJhY2ssIGlzVG91Y2gsIG1vdmVTcGVlZCkge1xuXG4gIGxldCBzdGFydFggPSAwO1xuICBsZXQgc3RhcnRZID0gMDtcbiAgbGV0IGlzVXNlckRyYWdnaW5nID0gZmFsc2U7IC8vIHRydWUgZHVyaW5nIHVzZXIgZHJhZ3NcblxuICAvLyBzZXQgZGVmYXVsdCB2YWx1ZSAxIHRvIG1vdmVTcGVlZFxuICBpZiAodHlwZW9mIG1vdmVTcGVlZCA9PT0gXCJ1bmRlZmluZWRcIikge21vdmVTcGVlZCA9IDE7fVxuXG4gIC8vIGdldCBjbGllbnRYIGFuZCBjbGllbnRZIGVpdGhlciBmcm9tIG1vdXNlKGNsaWNrKSBvciB0b3VjaC5cbiAgY29uc3QgZ2V0WFkgPSBpc1RvdWNoID9cbiAgICAoZXZlbnRUYXJnZXQpID0+ICh7eDogZXZlbnRUYXJnZXQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCwgeTogZXZlbnRUYXJnZXQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WX0pIDpcbiAgICAoZXZlbnRUYXJnZXQpID0+ICh7eDogZXZlbnRUYXJnZXQuY2xpZW50WCwgeTogZXZlbnRUYXJnZXQuY2xpZW50WX0pO1xuXG5cbiAgZnVuY3Rpb24gc3RhcnRIYW5kbGVyKGV2ZW50KXtcbiAgICBpZihpc1RvdWNoICE9PSB0cnVlKXsgLy8gRE8gTk9UIHByZXZlbnQgd2hlbiBpcyB0b3VjaCBldmVudC4gY2F1c2UgdG91Y2ggZHJhZ2dpbmcgcHJvYmxlbSBhbmQgdG91Y2ggY2xpY2sgbm90IHdvcmsuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlzVXNlckRyYWdnaW5nID0gdHJ1ZTtcblxuICAgIGxldCB7eCwgeX0gPSBnZXRYWShldmVudCk7XG4gICAgc3RhcnRYID0geDtcbiAgICBzdGFydFkgPSB5O1xuXG4gICAgc3RhcnREcmFnQ2FsbGJhY2soKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdmVIYW5kbGVyKGV2ZW50KXtcblxuICAgIGlmIChpc1VzZXJEcmFnZ2luZyA9PT0gdHJ1ZSkge1xuICAgICAgbGV0IHt4LCB5fSA9IGdldFhZKGV2ZW50KTtcbiAgICAgIGxldCBkZWx0YVggPSB4IC0gc3RhcnRYO1xuICAgICAgbGV0IGRlbHRhWSA9IHkgLSBzdGFydFk7XG5cbiAgICAgIGRlbHRhWCA9IGRlbHRhWCAqIG1vdmVTcGVlZDtcbiAgICAgIGRlbHRhWSA9IGRlbHRhWSAqIG1vdmVTcGVlZDtcblxuICAgICAgZHJhZ2dpbmdDYWxsYmFjayhkZWx0YVgsIGRlbHRhWSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZW5kSGFuZGxlcihldmVudCl7XG4gICAgaXNVc2VyRHJhZ2dpbmcgPSBmYWxzZTsgLy8gcmVzZXRcblxuICAgIGVuZERyYWdDYWxsYmFjaygpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzdGFydEhhbmRsZXIsXG4gICAgbW92ZUhhbmRsZXIsXG4gICAgZW5kSGFuZGxlcixcbiAgfTtcbn07IC8vIFtlbmRdIHJldHVybiBhY3R1YWwgZnVuY3Rpb25cblxuXG5jb25zdCBsb2FkaW5nUHJvZ3Jlc3NGYWN0b3J5ID0gZnVuY3Rpb24ocGFyZW50LCB0ZXh0PVwiXCIpe1xuICBsZXQgcHJvZ3Jlc3NXcmFwcGVyID0gdW5kZWZpbmVkOyAvLyBzdG9yZSBET01FbGVtZW50IGxhdGVyXG4gIGxldCBwcm9ncmVzc0JhciA9IHVuZGVmaW5lZDtcbiAgbGV0IG1lc3NhZ2UgPSB1bmRlZmluZWQ7XG4gIGxldCBwZXJjZW50YWdlTnVtRWwgPSB1bmRlZmluZWQ7XG5cbiAgLy8gdGhlIGFjdHVhbCBmdW5jdGlvblxuICBmdW5jdGlvbiBjcmVhdGVPclVwZGF0ZShsb2FkZWQsIHRvdGFsKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9ncmVzc1dyYXBwZXIgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIC8vIGNyZWF0ZSBET01FTGVtZW50IG9mIHRoZSBwcm9ncmVzcyBiYXJcbiAgICAgIHByb2dyZXNzV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBwcm9ncmVzc1dyYXBwZXIuY2xhc3NOYW1lID0gY2xhenoucHJvZ3Jlc3NXcmFwcGVyO1xuXG4gICAgICBwcm9ncmVzc0JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBwcm9ncmVzc1dyYXBwZXIuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NCYXIpO1xuICAgICAgcHJvZ3Jlc3NCYXIuY2xhc3NOYW1lID0gY2xhenoucHJvZ3Jlc3NCYXI7XG5cbiAgICAgIHByb2dyZXNzV3JhcHBlci5hcHBlbmRDaGlsZChwcm9ncmVzc0Jhcik7XG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NXcmFwcGVyKTtcbiAgICB9XG5cbiAgICBpZih0ZXh0ICYmIHR5cGVvZiBtZXNzYWdlID09PSBcInVuZGVmaW5lZFwiKXtcbiAgICAgIGNyZWF0ZU1lc3NhZ2UoKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgcHJvZ3Jlc3MgYmFyLlxuICAgIGNvbnN0IHJhdGlvID0gKGxvYWRlZCAvIHRvdGFsKS50b1ByZWNpc2lvbig0KTtcbiAgICBpZiAoIU51bWJlci5pc05hTihyYXRpbykpIHtcbiAgICAgIC8vIGFjdHVhbGx5IGhhdmUgcGVyY2VudGFnZSBudW1iZXJcbiAgICAgIGNvbnN0IHBlcmNlbnRhZ2VOdW0gPSBgJHtyYXRpbyAqIDEwMH0lYDtcbiAgICAgIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gcGVyY2VudGFnZU51bTtcblxuICAgICAgLy8gc2hvdyBwZXJjZW50YWdlIG51bWJlciB0ZXh0XG4gICAgICBjcmVhdGVPclVwZGF0ZVBlcmNlbnRhZ2VOdW1iZXIocGVyY2VudGFnZU51bSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlT3JVcGRhdGVQZXJjZW50YWdlTnVtYmVyKHBlcmNlbnRhZ2VOdW0pIHtcbiAgICBpZiAodHlwZW9mIHBlcmNlbnRhZ2VOdW1FbCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgLy8gaWYgbm90IGV4aXN0cywgY3JlYXRlXG4gICAgICBwZXJjZW50YWdlTnVtRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcGVyY2VudGFnZU51bUVsLmNsYXNzTmFtZSA9IGNsYXp6LnBlcmNlbnRhZ2VOdW07XG5cbiAgICAgIHByb2dyZXNzV3JhcHBlci5hcHBlbmRDaGlsZChwZXJjZW50YWdlTnVtRWwpO1xuICAgIH1cbiAgICBwZXJjZW50YWdlTnVtRWwuaW5uZXJUZXh0ID0gcGVyY2VudGFnZU51bTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU1lc3NhZ2UoKSB7XG4gICAgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVzc2FnZS5jbGFzc05hbWUgPSBjbGF6ei5wcm9ncmVzc01lc3NhZ2U7XG4gICAgbWVzc2FnZS5pbm5lclRleHQgPSB0ZXh0O1xuXG4gICAgcHJvZ3Jlc3NXcmFwcGVyLmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZSgpe1xuICAgIHByb2dyZXNzV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cblxuICBmdW5jdGlvbiBzaG93KCl7XG4gICAgcHJvZ3Jlc3NXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH1cblxuICByZXR1cm4ge2NyZWF0ZU9yVXBkYXRlLCBoaWRlLCBzaG93fTtcbn07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgY29udGV4dCBvZiB3ZWJnbFxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBpbWFnZSB1cmwgdGhhdCBpcyB1c2VkIGFzIHRleHR1cmVcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHRleHR1cmVMb2FkZWRDYWxsYmFjayBPcHRpb25hbCwgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIGxvYWRlZCB0ZXh0dXJlIGFyZ3VtZW50XG4gKiAgd2hlbiB0ZXh0dXJlIGlzIGFscmVhZHkgbG9hZGVkLiBVc3VhbGx5IGNvbnRhaW5zIHRoZSBtZXRob2QgdGhhdCByZWRyYXcgd2ViZ2wgc2NlbmUgdG8gc2hvdyB0aGUgdGV4dHVyZS5cbiAqIEByZXR1cm4ge1dlYkdMVGV4dHVyZX0gdGhlIHdlYmdsIHRleHR1cmUuIEJlIGNhcmVmdWwsIHRoZSB0ZXh0dXJlIGlzIGxvYWRlZCBhc3luY2hyb25vdXNseShsb2FkIGltYWdlIGFzeW5jaHJvbm91c2x5KSxcbiAqICBpdCB3b3VsZCBiZSBwbGFjZWhvbGRlcihzaW5nbGUgY29sb3IpIGF0IHRoZSBiZWdpbm5pbmcuIFNvIHVzZSB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gdG8gaGFuZGxlIHRoZSBsb2FkZWQgdGV4dHVyZS5cbiAqL1xuZnVuY3Rpb24gbG9hZFRleHR1cmUoZ2wsIHVybCwgdGV4dHVyZUxvYWRlZENhbGxiYWNrLCBsb2FkaW5nQ2FsbGJhY2spe1xuICBjb25zdCB0ZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xuICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlKTtcblxuICBjb25zdCBsZXZlbCA9IDA7XG4gIGNvbnN0IGludGVybmFsRm9ybWF0ID0gZ2wuUkdCQTtcbiAgY29uc3Qgc3JjRm9ybWF0ID0gZ2wuUkdCQTtcbiAgY29uc3Qgc3JjVHlwZSA9IGdsLlVOU0lHTkVEX0JZVEU7XG5cbiAgLy8gZ3JleSBwbGFjZWhvbGRlciBjb2xvciBiZWZvcmUgdGV4dHVyZSBsb2FkZWQgLy8gWzAsMCwyNTUsMTI4XW9wYXF1ZSBibHVlXG4gIGNvbnN0IHBpeGVsID0gbmV3IFVpbnQ4QXJyYXkoWzAsIDAsIDAsIDEyOF0pO1xuICBjb25zdCB3aWR0aCA9IDE7XG4gIGNvbnN0IGhlaWdodCA9IDE7XG4gIGNvbnN0IGJvcmRlciA9IDA7XG4gIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgbGV2ZWwsIGludGVybmFsRm9ybWF0LFxuICAgICAgICAgICAgICAgIHdpZHRoLCBoZWlnaHQsIGJvcmRlciwgc3JjRm9ybWF0LCBzcmNUeXBlLFxuICAgICAgICAgICAgICAgIHBpeGVsKTtcblxuICAvKipcbiAgICogVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHdvdWxkIGJlIGNhbGxlZCB3aGVuIGNvbXBsZXRlIGxvYWRpbmcgaW1hZ2UuXG4gICAqIFNldCB0aGUgcGFub3JhbWEgaW1hZ2UgYXMgdGhlIHRleHR1cmUuXG4gICAqIEBwYXJhbSB7SFRNTEltYWdlRWxlbWVudH0gaW1hZ2UgIHRoZSBpbWFnZSBlbGVtZW50IHRoYXQgaXMgdXNlZCBhcyB0ZXh0dXJlXG4gICAqL1xuICBmdW5jdGlvbiBiaW5kSW1hZ2VUZXh0dXJlQ2FsbGJhY2sgKGltYWdlKSB7XG5cbiAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlKTtcbiAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIGxldmVsLCBpbnRlcm5hbEZvcm1hdCxcbiAgICAgICAgICAgICAgICAgIHNyY0Zvcm1hdCwgc3JjVHlwZSwgaW1hZ2UpO1xuXG4gICAgLy8gV2ViR0wxIGhhcyBkaWZmZXJlbnQgcmVxdWlyZW1lbnRzIGZvciBwb3dlciBvZiAyIGltYWdlc1xuICAgIC8vIHZzIG5vbiBwb3dlciBvZiAyIGltYWdlcyBzbyBjaGVjayBpZiB0aGUgaW1hZ2UgaXMgYVxuICAgIC8vIHBvd2VyIG9mIDIgaW4gYm90aCBkaW1lbnNpb25zLlxuICAgIGlmIChpc1Bvd2VyT2YyKGltYWdlLndpZHRoKSAmJiBpc1Bvd2VyT2YyKGltYWdlLmhlaWdodCkpIHtcbiAgICAgIC8vIFllcywgaXQncyBhIHBvd2VyIG9mIDIuIEdlbmVyYXRlIG1pcHMuXG4gICAgICBnbC5nZW5lcmF0ZU1pcG1hcChnbC5URVhUVVJFXzJEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTm8sIGl0J3Mgbm90IGEgcG93ZXIgb2YgMi4gVHVybiBvZmYgbWlwcyBhbmQgc2V0XG4gICAgICAvLyB3cmFwcGluZyB0byBjbGFtcCB0byBlZGdlXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5DTEFNUF9UT19FREdFKTtcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLkNMQU1QX1RPX0VER0UpO1xuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLkxJTkVBUik7XG4gICAgICAvLyBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7XG4gICAgICAvLyBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7XG4gICAgfVxuXG4gICAgLy8gY2FsbGJhY2sgYWZ0ZXIgaW1hZ2UgbG9hZGVkLlxuICAgIGlmICh0ZXh0dXJlTG9hZGVkQ2FsbGJhY2spIHt0ZXh0dXJlTG9hZGVkQ2FsbGJhY2sodGV4dHVyZSk7fVxuXG4gIH0gLy8gW2VuZF0gYmluZEltYWdlVGV4dHVyZUNhbGxiYWNrXG5cbiAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBsb2FkSW1hZ2Uoe3VybDp1cmwsIGltYWdlOiBpbWFnZSwgbG9hZGVkQ2FsbGJhY2s6IGJpbmRJbWFnZVRleHR1cmVDYWxsYmFjaywgbG9hZGluZ0NhbGxiYWNrOiBsb2FkaW5nQ2FsbGJhY2t9KTtcblxuICByZXR1cm4gdGV4dHVyZTtcbn1cblxuZnVuY3Rpb24gbG9hZEltYWdlKHt1cmwsIGltYWdlID0gbmV3IEltYWdlKCksIGxvYWRlZENhbGxiYWNrLCBsb2FkaW5nQ2FsbGJhY2t9KSB7XG5cbiAgY29uc3Qgb25Qcm9ncmVzc0hhbmRsZXIgPSBsb2FkaW5nQ2FsbGJhY2sgP1xuICAgIChldmVudCkgPT4gbG9hZGluZ0NhbGxiYWNrKGV2ZW50LmxvYWRlZCwgZXZlbnQudG90YWwpIDpcbiAgICB1bmRlZmluZWQ7XG5cbiAgLy8gW0ltcG9ydGFudF0gaW1hZ2Uuc3JjIGlzIGFzeW5jaHJvbm91cyBvcGVyYXRpb24sIHNldCBvbmxvYWQgdG8gaGFuZGxlIGFmdGVyIHRoZSBpbWFnZSBpcyBsb2FkZWRcbiAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKGxvYWRlZENhbGxiYWNrKSB7bG9hZGVkQ2FsbGJhY2soaW1hZ2UpO31cbiAgfTtcblxuICBwcm9ncmVzc0ZldGNoQmxvYih1cmwsIHttZXRob2Q6IFwiZ2V0XCJ9LCBvblByb2dyZXNzSGFuZGxlcilcbiAgLnRoZW4ocmVzcG9uc2VCbG9iID0+IHtcbiAgICBjb25zdCBvYmplY3RVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHJlc3BvbnNlQmxvYik7XG4gICAgaW1hZ2Uuc3JjID0gb2JqZWN0VXJsO1xuICB9KVxuICAuY2F0Y2goIGVyciA9PiB7dGhyb3cgZXJyO30pO1xufVxuXG5mdW5jdGlvbiBwcm9ncmVzc0ZldGNoQmxvYih1cmwsIG9wdHM9e30sIG9uUHJvZ3Jlc3NIYW5kbGVyKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9IFwiYmxvYlwiO1xuICAgIHhoci5vcGVuKG9wdHMubWV0aG9kIHx8IFwiZ2V0XCIsIHVybCk7XG5cbiAgICBpZiAob3B0cy5oZWFkZXJzKSB7XG4gICAgICBPYmplY3Qua2V5cyhvcHRzLmhlYWRlcnMpLm1hcCgga2V5ID0+IHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgb3B0cy5oZWFkZXJzW2tleV0pICk7XG4gICAgfVxuICAgIGlmIChvblByb2dyZXNzSGFuZGxlcikge1xuICAgICAgeGhyLm9ucHJvZ3Jlc3MgPSBvblByb2dyZXNzSGFuZGxlcjsgLy8gcGFzc2VkIGV2ZW50XG4gICAgfVxuICAgIHhoci5vbmxvYWQgPSAoZXZlbnQpID0+IHJlc29sdmUoZXZlbnQudGFyZ2V0LnJlc3BvbnNlKTtcbiAgICB4aHIub25lcnJvciA9IHJlamVjdDtcblxuICAgIHhoci5zZW5kKG9wdHMuYm9keSk7XG4gIH0pO1xufVxuXG4vKlxuICBwYW5vcmFtYSBoZWxwZXIgZnVuY3Rpb25cbiAqL1xuXG5jb25zdCBkZWZhdWx0U2V0dGluZyA9IHtcbiAgLy8gdGhlIERPTWVsZW1lbnQob3IgdGhlIENTUyBzZWxldG9yIHN0cmluZyB0aGF0IHJlZmVycyB0aGUgRE9NRWxlbWVudCkgY29udGFpbmVyIHRoYXQgY29udGFpbnMgdGhpcyBwYW5vcmFtYS5qcyBjb21wb25lbnRcbiAgY29udGFpbmVyOiBkb2N1bWVudC5ib2R5LFxuICAvLyB0aGUgaW1hZ2UgdXJsIG9mIHRoZSBwYW5vcmFtYVxuICB1cmw6IHVuZGVmaW5lZCxcblxuICAvLyB0aGUgZmllbGQgb2Ygdmlld1xuICBmb3Y6IDc1LFxuICAvLyB0aGUgaW5pdGFsIGRlZ3JlZSBvZiB0aGUgY2FtZXJlYSB2aWV3LCBkZWZhdWx0IGlzIFswLDBdIHdoaWNoIG1lYW5zIHRvIGxvb2sgZnJvbnQgb24gdGhlIGhvcml6b25cbiAgY2FtZXJhRGVncmVlOiBbMCwgMF0sXG5cbiAgc3BoZXJlOiB7XG4gICAgcmFkaXVzOiAzMCxcbiAgICBudW1WZXJ0aWNhbFNlZ21lbnRzOiAxNiwgLy8gdGhlIG51bWJlciBvZiB0aGUgdmVydGljYWwgc2VnbWVudHMuIExpa2UgRWFydGgncyBtZXJpZGlhbnMsdGhlIGxpbmUgZ29pbmcgcG9sZSB0byBwb2xlLlxuICAgIG51bUhvcml6b25hbFNlZ2VtZW50czogOCAvLyB0aGUgbnVtYmVyIG9mIHRoZSBob3Jpem9uYWwgc2VnbWVudHMuIExpa2UgRWFydGgncyBwYXJhbGxlbHMuXG4gIH0sXG5cbiAgLy8gd2hldGhlciBvciBub3QgdG8gdXNlIHRoZSBkZXZpY2UncyBvcmllbnRhdGlvbihjZWlscGhvbmUgb3JpdGF0aW9uKSB0byBjb250cm9sIHRoZSBjYW1lcmEuXG4gIC8vIEJlIGNhcmVmdWwhIE5ld2VyIGJyb3dzZXJzIG1heSBuZWVkIHRoZSBkZXZpY2VvcmllbnRhdGlvbiBtdXN0IGJlIHVzZWQgaW4gSFRUUFMuXG4gIGRldmljZU9yaWVudGF0aW9uRW5hYmxlZDogdHJ1ZSxcbn07XG5cbi8qKlxuICogRmlsbCB0aGUgc2V0dGluZyB3aXRoIGRlZmF1bHQgb25lcywgZXhjZXB0IHRoZSBleGNsdWRlIG9uZXMgbWF0Y2ggdGhlIGBleGNsdWRlS2V5c2AuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHNldHRpbmcgIFRoZSBvYmplY3QgbGl0ZXJhbCB0aGF0IGlzIHRhcmdldCBzZXR0aW5nLCB3aG9zZSBtaXNzaW5nIGVudHJpZXMgd2lsbCBiZSBmaWxsZWQgd2l0aCBkZWZhdWx0IG9uZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdFNldHRpbmcgIFRoZSBvYmplY3QgbGl0ZXJhbCAgY29udGFpbnMgZGVmYXVsdCBzZXR0aW5nIGVudHJpZXNcbiAqIEBwYXJhbSB7U2V0fSBbZXhjbHVkZUtleXM9U2V0KDApXSBXaWxsIE5PVCBjb3B5IHRoZSBlbnRyeSB0aGF0IGlzIGluIHRoZSBleGNsdWRlIGtleXMsIGRlZmF1bHQgaXMgZW1wdHkgc2V0IHRoYXQgdGhlcmUgaXMgbm8gZXhjbHVkZSBrZXlzXG4gKi9cbmZ1bmN0aW9uIGNvcHlNaXNzaW5nVmFsdWVzKHNldHRpbmcsIGRlZmF1bHRTZXR0aW5nLCBleGNsdWRlS2V5cz1uZXcgU2V0KCkpIHtcbiAgLy8gZmlsbCB0aGUgbWlzc2luZyBlbnRyeSB3aXRoIGRlZmF1bHRcbiAgZm9yIChsZXQga2V5IGluIGRlZmF1bHRTZXR0aW5nKSB7XG4gICAgaWYgKCFleGNsdWRlS2V5cy5oYXMoa2V5KSAmJiAhKGtleSBpbiBzZXR0aW5nKSl7XG4gICAgICBzZXR0aW5nW2tleV0gPSBkZWZhdWx0U2V0dGluZ1trZXldO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVTZXR0aW5nKHNldHRpbmcpe1xuICBzZXR0aW5nID0gc2V0dGluZyB8fCB7fTtcbiAgY29uc3Qgb2JqZWN0U2V0dGluZ0tleXMgPSBbXCJzcGhlcmVcIl07IC8vIHRoZSBzZXR0aW5nIGVudHJ5IHZhbHVlIGlzIG9iamVjdC5cblxuICAvLyB0aGVzIG9wdGlvbiBtdXN0IGJlIGNvbnRhaW5lZFxuICBpZiAoIXNldHRpbmcudXJsIHx8IHR5cGVvZiBzZXR0aW5nLnVybCAhPT0gXCJzdHJpbmdcIikge1xuICAgIHRocm93IEVycm9yKFwiTWlzc2luZyBgdXJsYCBpbiBgc2V0dGluZ2Agb3IgVGhlIHR5cGUgb2YgYHVybGAgaXNuJ3QgY29ycmVjdDogdGhlIGltYWdlIHVybCBtdXN0IGJlIHBhc3NlZCBpbiBgc2V0dGluZ2AsIGFuZCBpdCBzaG91bGQgYmUgc3RyaW5nLlwiKTtcbiAgfVxuXG4gIGNvcHlNaXNzaW5nVmFsdWVzKHNldHRpbmcsIGRlZmF1bHRTZXR0aW5nKTtcbiAgb2JqZWN0U2V0dGluZ0tleXMubWFwKCBrZXkgPT4gY29weU1pc3NpbmdWYWx1ZXMoc2V0dGluZ1trZXldLCBkZWZhdWx0U2V0dGluZ1trZXldKSApO1xuXG4gIC8vIGNvbnRhaW5lciBjYW4gYmUgZWl0aGVyIHN0cmluZyBvciBET01FbGVtZW50XG4gIGlmICh0eXBlb2Ygc2V0dGluZy5jb250YWluZXIgPT09IFwic3RyaW5nXCIpIHtcbiAgICBzZXR0aW5nLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2V0dGluZy5jb250YWluZXIpO1xuICB9IC8vIGVsc2UgRE9NRWxlbWVudFxuXG4gIHJldHVybiBzZXR0aW5nO1xufVxuXG4vKlxuICBKUyBoZWxwZXIgZnVuY3Rpb25cbiovXG5cbi8qKlxuICogQ2xhbXAgdGhlIHZhbHVlIGJldHdlZW4gbWluIGFuZCBtYXggaW5jbHVzaXZlbHkuXG4gKiBAcGFyYW0ge051bWJlciBBcnJheX0gcmFuZ2UgdGhlIEFycmF5IGNvbnRhaW5zIG1pbiBhbmQgbWF4LlxuICogQHBhcmFtIHtOdW1iZXJ9IHggdGhlIHRhcmdldCB2YWx1ZSB3aWxsIGJlIGNsYW1wZWQuXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IHRoZSBjbGFtcGVkIHJlc3VsdCBudW1iZXIuXG4gKi9cbmZ1bmN0aW9uIGNsYW1wKHJhbmdlLCB4KXtcbiAgaWYoIXJhbmdlIHx8IHJhbmdlLmxlbmd0aCA8IDIpe1xuICAgIHRocm93IEVycm9yKGBWYWx1ZSBFcnJvcjogVGhlICdyYW5nZScgYXJndW1lbnQ6ICcke3JhbmdlfScsXG4gICAgICB3aGljaCBpcyBwYXNzZWQgaW4gJ2NsYW1wJyBmdW5jdGlvbiBpc24ndCBhIGFycmF5IG9mIHR3byBudW1iZXJzLlxuICAgICAgSXQgbXVzdCBjb250YWluIG1pbiBhbmQgbWF4IHZhbHVlLiBgKTtcbiAgfVxuICBjb25zdCBtaW4gPSByYW5nZVswXSwgbWF4ID0gcmFuZ2VbMV07XG4gIGlmICh4IDwgbWluKSB7XG4gICAgeCA9IG1pbjtcbiAgfWVsc2UgaWYgKHggPiBtYXgpIHtcbiAgICB4ID0gbWF4O1xuICB9XG4gIHJldHVybiB4O1xufVxuXG5mdW5jdGlvbiBpc1Bvd2VyT2YyKHZhbHVlKXtcbiAgcmV0dXJuICh2YWx1ZSAmICh2YWx1ZSAtIDEpKSA9PT0gMDsgLy8gYmluYXJ5IGJpdCBvcGVyYXRpb24gdHJpY2tcbn1cblxuLy8gY3VycnkgZnVuY3Rpb24uIGxldCBhZGRvbmUgPSBjdXJyeShhZGQsIDEpOyBsZXQgeCA9IGFkZG9uZSgzKSAvLyB4IGlzIDRcbmZ1bmN0aW9uIGN1cnJ5KG1ldGhvZCl7XG4gIGNvbnN0IHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuICBjb25zdCBzdGFydEFyZ3MgPSBzbGljZS5hcHBseShhcmd1bWVudHMpLnNsaWNlKDEpOyAvLyBleGNsdWRlIHRoZSAxc3QgbWV0aG9kIGFyZ3VtZW50XG4gIHJldHVybiBmdW5jdGlvbigpe1xuICAgIGNvbnN0IHJlc3RBcmdzID0gc2xpY2UuYXBwbHkoYXJndW1lbnRzKTtcbiAgICByZXR1cm4gbWV0aG9kLmFwcGx5KG51bGwsIHN0YXJ0QXJncy5jb25jYXQocmVzdEFyZ3MpKTsgLy8gY2FsbCBhY3R1YWwgZnVuY3Rpb25cbiAgfTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBwYW5vcmFtYTtcbiIsIi8qXG5UaGUgdXNlciBpbnRlcmZhY2UgcGFydHMgb2YgcGFub3JhbWEuanMuIEEgYnVuY2ggb2Ygc2V0dGluZ3Mgb2YgcGFub3JhbWEgdG8gY29udHJvbCBieSB1c2VyLlxuKi9cblxuaW1wb3J0IGNsYXp6IGZyb20gXCIuL2Nzcy9wYW5vcmFtYS5sZXNzXCI7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IHRoZSB0YXJnZXQgd2lsbCBiZSBpbiBmdWxsc2NyZWVuIG1vZGUgb3IgZXhpdCBmdWxsc2NyZWVuIG1vZGUoYmFjayB0byBub3JtYWwpXG4gKi9cbmNvbnN0IHRvZ2dsZUZ1bGxzY3JlZW4gPSAoZnVuY3Rpb24oKXtcbiAgY29uc3QgcHJlZml4cyA9IFtcIlwiLCBcIndlYmtpdFwiLCBcIm1velwiLCBcIm1zXCJdO1xuXG4gIC8vIHRoZSBtZXRob2RzIGluIGRpZmZlcmVudCBicm9zd2VycyB3aXRoIGNvcnJlc3BvbmRpbmcgcHJlZml4XG4gIGZ1bmN0aW9uIHJlcXVlc3RGdWxsc2NyZWVuKHRhcmdldCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJlZml4cy5sZW5ndGg7IGkrPTEpe1xuICAgICAgY29uc3QgcHJlZml4ID0gcHJlZml4c1tpXTtcbiAgICAgIGNvbnN0IG1ldGhvZE5hbWUgPSBwcmVmaXg/IGAke3ByZWZpeH1SZXF1ZXN0RnVsbHNjcmVlbmAgOiBcInJlcXVlc3RGdWxsc2NyZWVuXCI7XG5cbiAgICAgIGlmKHRhcmdldFttZXRob2ROYW1lXSl7XG4gICAgICAgIHRhcmdldFttZXRob2ROYW1lXSgpOyAvLyBjYWxsIHRoZSBjb3JyZXNwb25kaW5nIG1ldGhvZFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGV4aXRGdWxsc2NyZWVuKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJlZml4cy5sZW5ndGg7IGkrPTEpe1xuICAgICAgY29uc3QgcHJlZml4ID0gcHJlZml4c1tpXTtcbiAgICAgIGNvbnN0IG1ldGhvZE5hbWUgPSBwcmVmaXg/IGAke3ByZWZpeH1FeGl0RnVsbHNjcmVlbmAgOiBcIkV4aXRGdWxsc2NyZWVuXCI7XG5cbiAgICAgIGlmKGRvY3VtZW50W21ldGhvZE5hbWVdKXtcbiAgICAgICAgZG9jdW1lbnRbbWV0aG9kTmFtZV0oKTsgLy8gY2FsbCB0aGUgY29ycmVzcG9uZGluZyBtZXRob2RcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGlmICghZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQpIHtcbiAgICAgIC8vIGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50IHdvdWxkIGJlIG51bGwsIGlmIHRoZXJlJ3Mgbm8gZnVsbHNjcmVlbiBlbGVtZW50LlxuICAgICAgLy8gb25seSBvbmUgZWxlbWVudCBjb3VsZCBiZSAgaW4gZnVsbC1zY3JlZW4gbW9kZS5cbiAgICAgIHJlcXVlc3RGdWxsc2NyZWVuKHRhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4aXRGdWxsc2NyZWVuKCk7XG4gICAgfVxuICB9O1xufSkoKTtcblxuLyoqXG4gKiBUaGUgdG9nZ2xlIGJ1dHRvbiBvbiB1c2VyIGNvbnRyb2wgcGFubmVsIG9mIFVJLiBUbyBlbnRlciBvciBleGl0IGZ1bGxzY3JlZW4uXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBwYXJlbnQgdGhlIHBhcmVudCBET00gZWxlbWVudCB0byBwdXQgdGhlIHN3aXRjaCBpblxuICovXG5mdW5jdGlvbiBjcmVhdGVGdWxsc2NyZWVuU3dpdGNoSGVscGVyKHBhcmVudCkge1xuICByZXR1cm4gc3dpdGNoSGVscGVyKHtcbiAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICBjbGFzc05hbWU6IGNsYXp6LmZ1bGxzY3JlZW5Td2l0Y2gsXG4gICAgb25TdGF0ZUNsYXNzTmFtZTogY2xhenouaW5GdWxsc2NyZWVuXG4gIH0pO1xufVxuXG5cbi8vIHRoZSBwYXJ0IHRoYXQgY29udHJvbHMgdGhlIGRldmljZSBvcmllbnRhdGlvbihjZWlscGhvbmUgbW90aW9uKVxuXG4vKipcbiAqIENyZWF0ZSBhIERPTUVsZW1lbnQgdGhhdCBpcyB1c2VkIHRvIHN3aXRjaCBvcmllbnRhdGlvbiBzdGF0dXMuIFByb3ZpZGVcbiAqIHRoZSBmdW5jdGlvbnMgdGhhdCBlbmFibGUgYW5kIGRpc2FibGUgdGhlIG9yaWVudGF0aW9uIHRvIHdvcmsgdG9nZXRoZXIuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBwYXJlbnQgdGhlIHBhcmVudCBET01FbGVtZW50IGNvbnRhaW5zIHRoaXMgc3dpdGNoXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZU9yaWVudGF0aW9uU3dpdGNoSGVscGVyKHBhcmVudCkge1xuICByZXR1cm4gc3dpdGNoSGVscGVyKHtcbiAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICBjbGFzc05hbWU6IGNsYXp6Lm9yaWVudGF0aW9uU3dpdGNoLFxuICAgIG9mZlN0YXRlQ2xhc3NOYW1lOiBjbGF6ei5kaXNhYmxlZCxcbiAgfSk7XG59XG5cbi8qKlxuICogdGhlIGhlbHBlciBpbmNsdWRlcyBmdW5jdGlvbnMgdGhhdCBtYWludGFuY2UgYSBzd2l0Y2ggY29ucG9uZW50OlxuICogY3JlYXRlIHN3aXRjaCBjb21wb25lbnQsIGNyZWF0ZSB0aGUgRE9NIGVsZW1lbnQgYW5kIGFsc28gbWFuYWdlXG4gKiB0aGUgY2xhc3NuYW1lIHRvIGNoYW5nZSB3aGVuIHRoZSBzdGF0ZSBpcyBjaGFuZ2VkKG9uIG9yIG9mZikuXG4gKlxuICogQHBhcmFtIHtPYmplY3QgTGl0ZXJhbH0gc2V0dGluZyBjb250YWlucyB0aGUgc2V0dGluZ3Mgb2Ygc3dpdGNoXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHNldHRpbmcucGFyZW50ICB0aGUgcGFyZW50IGNvbnRhaW5lciwgdGhlIHN3aXRjaCB3b3VsZCBiZSBwdXQgaW50byBpdC5cbiAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZyBhcnJheX0gc2V0dGluZy5jbGFzc05hbWUgdGhlIHN3aXRjaCdzIGNzcyBjbGFzcyBuYW1lLiBjYW4gYmUgZWl0aGVyIG9uZSBvciBtdWx0aSBvbmVzLlxuICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nIGFycmF5fSBbc2V0dGluZy5vblN0YXRlQ2xhc3NOYW1lPXVuZGVmaW5lZF0gdGhlIHN3aXRjaCBvbiBzdGF0ZSBjbGFzcyBuYW1lLFxuICogIHdoZW4gc3dpdGNoIGlzIG9uLCB0aGUgRE9NIGVsZW1lbnQgd291bGQgY29udGFpbnMgdGhpcyBjbGFzc25hbWUuIG90aGVyd2lzZSByZW1vdmUgdGhlIGNsYXNzbmFtZSB3aGVuIHN3aXRjaCBpcyBvZmZcbiAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZyBhcnJheX0gW3NldHRpbmcub2ZmU3RhdGVDbGFzc05hbWU9dW5kZWZpbmVkXSB0aGUgb3Bwb3NpdGUgc2lkZSBvZiAnb25TdGF0ZUNsYXNzTmFtZScsXG4gKiAgd2hlbiBzd2l0Y2ggaXMgb2ZmLCBjb250YWlucyB0aGUgY2xhc3NuYW1lLCBvdGhlcndpc2UgcmVtb3ZlIHRoaXMgb25lLlxuICogQHBhcmFtIHtzdHJpbmd9IFtzZXR0aW5nLnRhZ05hbWU9XCJzcGFuXCJdIHRoZSBzd2l0Y2gncyBET00gZWxlbWVudCB0YWcsIGRlZmF1bHQgaXMgXCJzcGFuXCIuXG4gKiBAcmV0dXJuIHtPYmplY3QgTGl0ZXJhbH0gcmV0dXJuIGEgb2JqZWN0IGxpdGVyYWwgY29udGFpbnN0aGUgZnVuY3Rpb25zIHRoYXQgdG8gY3JlYXRlIGFuZCBmaWxwIHRoZSBzd2l0Y2guXG4gKi9cbmZ1bmN0aW9uIHN3aXRjaEhlbHBlcih7cGFyZW50LCBjbGFzc05hbWUsIG9uU3RhdGVDbGFzc05hbWUsIG9mZlN0YXRlQ2xhc3NOYW1lLCB0YWdOYW1lfSkge1xuICBsZXQgZWw7XG4gIGxldCBzdGF0ZTtcblxuICBpZighdGFnTmFtZSkge1xuICAgIHRhZ05hbWUgPSBcInNwYW5cIjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIERPTSBlbGVtbmV0IG9mIHRoZSBzd2l0Y2guXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc3RhdGUgdGhlIGluaXQgc3RhdGUgb2YgdGhlIHN3aXRjaCB3aGVuIGlzIGNyZWF0ZWQuIGZhbHNlIGlzIG9mZiB0cnVlIGlzIG9uXG4gICAqIEByZXR1cm4ge0VsZW1lbnR9IHRoZSBjcmVhdGVkIERPTSBlbGVtZW50LlxuICAgKi9cbiAgZnVuY3Rpb24gY3JlYXRlKHN0YXRlPWZhbHNlKSB7XG4gICAgaWYgKHR5cGVvZiBlbCA9PT0gXCJ1bmRlZmluZWRcIikgeyAvLyBjcmVhdGUgaWYgbm90IGV4aXN0cyBiZWZvcmVcbiAgICAgIGVsID0gY3JlYXRlRWwodGFnTmFtZSwgY2xhc3NOYW1lKTtcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbCk7IC8vIHB1dCBpbnNpZGUgb2YgdGhlIGNvbnRhaW5lci5cbiAgICB9XG4gICAgdXBkYXRlU3RhdGUoc3RhdGUpO1xuXG4gICAgcmV0dXJuIGVsO1xuICB9XG5cbiAgLyoqXG4gICAqIGNoYW5nZSB0aGUgc3RhdGUuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gX3N0YXRlIHRoZSBzd2l0Y2ggc3RhdGUgd291bGQgYmUgY2hhbmdlIHRvXG4gICAqICB0aGUgYXJndW1lbnQuIGZhbHNlIGlzIG9mZiB0cnVlIGlzIG9uLlxuICAgKi9cbiAgZnVuY3Rpb24gdXBkYXRlU3RhdGUoX3N0YXRlKSB7XG4gICAgc3RhdGUgPSBfc3RhdGU7XG4gICAgaWYgKCFzdGF0ZSkgeyAvLyBvZmYgc3RhdGUgYWRkIG9mZiBjbGFzc05hbWUgb3IgcmVtb3ZlIG9uIGNsYXNzTmFtZSBpZiBzcGVjaWZpZWRcbiAgICAgIGlmIChvZmZTdGF0ZUNsYXNzTmFtZSkge2VsLmNsYXNzTGlzdC5hZGQob2ZmU3RhdGVDbGFzc05hbWUpO31cbiAgICAgIGlmIChvblN0YXRlQ2xhc3NOYW1lKSB7ZWwuY2xhc3NMaXN0LnJlbW92ZShvblN0YXRlQ2xhc3NOYW1lKTt9XG4gICAgfSBlbHNlIHsgLy8gb3RoZXJ3aXNlIG9uIHN0YXRlIHJlbW92ZSBvZmYgY2xhc3NOYW1lIG9yIGFkZCBvbiBjbGFzc05hbWUgaWYgc3BlY2lmaWVkXG4gICAgICBpZiAob25TdGF0ZUNsYXNzTmFtZSkge2VsLmNsYXNzTGlzdC5hZGQob25TdGF0ZUNsYXNzTmFtZSk7fVxuICAgICAgaWYgKG9mZlN0YXRlQ2xhc3NOYW1lKSB7ZWwuY2xhc3NMaXN0LnJlbW92ZShvZmZTdGF0ZUNsYXNzTmFtZSk7fVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBmbGlwIHRoZSBzd2l0Y2ggZm9yIGNvbnRpbnVvdXMgXCJvblwiIG9yIFwib2ZmXCJcbiAgICogQHJldHVybiB7Ym9vbH0gcmV0dXJuIHRoZSBjdXJyZW50IHN0YXRlIG9mIHN3aXRjaC4gZmFsc2UgaXMgb2ZmIHRydWUgaXMgb24uXG4gICAqL1xuICBmdW5jdGlvbiBmbGlwKCl7XG4gICAgc3RhdGUgPSAhc3RhdGU7IC8vIGZsaXAgc3RhdGVcbiAgICB1cGRhdGVTdGF0ZShzdGF0ZSk7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge0VsZW1lbnR9IGdldCB0aGUgcmVmZXJlbmNlIG9mIHRoZSBzd2l0Y2gncyBET00gZWxlbWVudFxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0KCl7XG4gICAgcmV0dXJuIGVsO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGUsXG4gICAgZ2V0LFxuICAgIHVwZGF0ZVN0YXRlLFxuICAgIGZsaXBcbiAgfTtcbn1cblxuLyoqXG4gKiBBIGhlbHBlciBmdW5jdGlvbiB0byBjcmVhdGUgYSBET00gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnTmFtZSAgdGhlIGNyZWF0ZWQgRE9NIHRhZyBuYW1lLCBlLmcgXCJkaXZcIiwgXCJzcGFuXCJcbiAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZyBhcnJheX0gW2NsYXNzTmFtZXM9XCJcIl0gdGhlIERPTSBlbGVtZW50IGNsYXNzZXMsIGNvdWxkIGJlIGFcbiAqICBzdHJpbmcgc3BlY2lmaWVzIGNsYXNzIG5hbWUgdGhhdCBjYW4gYmUgc2luZ2xlIG9uZSBvciBtdWx0aSBvbmVzLCBlLmcgXCJteS1idXR0b25cIiwgXCJteS1idXR0b24gZGlzYWJsZWRcIjtcbiAqICBhbHNvIGNvdWxkIGJlIGEgc3RyaW5nIG9yIHN0cmluZyBhcnJheSBjb250YWlucyBhIGJ1dGNoIG9mIGNsYXNzIG5hbWVzLCBlLmcgW1wibXktYnV0dG9uXCIsIFwiZGlzYWJsZWRcIl0uXG4gKlxuICogQHJldHVybiB7RWxlbWVudH0gdGhlIERPTSBlbGVtZW50IHRoYXQgaXMgY3JlYXRlZFxuICovXG5mdW5jdGlvbiBjcmVhdGVFbCh0YWdOYW1lLCBjbGFzc05hbWVzPVwiXCIpIHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gIGlmKHR5cGVvZiBjbGFzc05hbWVzICE9PSBcInVuZGVmaW5lZFwiKXtcbiAgICBlbC5jbGFzc05hbWUgPSBBcnJheS5pc0FycmF5KGNsYXNzTmFtZXMpID9cbiAgICAgIGNsYXNzTmFtZXMuam9pbihcIiBcIikgOiAvLyBhcnJheSB0byBzdHJpbmdcbiAgICAgIGNsYXNzTmFtZXM7IC8vIHN0cmluZ1xuICB9XG4gIHJldHVybiBlbDtcbn1cblxuXG5leHBvcnQge1xuICBjcmVhdGVGdWxsc2NyZWVuU3dpdGNoSGVscGVyLFxuICB0b2dnbGVGdWxsc2NyZWVuLFxuXG4gIGNyZWF0ZU9yaWVudGF0aW9uU3dpdGNoSGVscGVyLFxuICBzd2l0Y2hIZWxwZXIsXG59O1xuXG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMTQsIEdyZWdnIFRhdmFyZXMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuICogbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZVxuICogbWV0OlxuICpcbiAqICAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4gKiBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXG4gKiBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyXG4gKiBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4gKiBkaXN0cmlidXRpb24uXG4gKiAgICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIEdyZWdnIFRhdmFyZXMuIG5vciB0aGUgbmFtZXMgb2YgaGlzXG4gKiBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbVxuICogdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTXG4gKiBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UXG4gKiBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1JcbiAqIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUXG4gKiBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCxcbiAqIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1RcbiAqIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuICogREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZXG4gKiBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUXG4gKiAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0VcbiAqIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cblxuLyoqXG4gKiBWYXJpb3VzIDNkIG1hdGggZnVuY3Rpb25zLlxuICpcbiAqIEBtb2R1bGUgd2ViZ2wtM2QtbWF0aFxuICovXG4oZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuICBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpe1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuICAgIGRlZmluZShbXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQnJvd3NlciBnbG9iYWxzXG4gICAgcm9vdC5tNCA9IGZhY3RvcnkoKTtcbiAgfVxufSh0aGlzLCBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgLyoqXG4gICAqIEFuIGFycmF5IG9yIHR5cGVkIGFycmF5IHdpdGggMyB2YWx1ZXMuXG4gICAqIEB0eXBlZGVmIHtudW1iZXJbXXxUeXBlZEFycmF5fSBWZWN0b3IzXG4gICAqIEBtZW1iZXJPZiBtb2R1bGU6d2ViZ2wtM2QtbWF0aFxuICAgKi9cblxuICAvKipcbiAgICogQW4gYXJyYXkgb3IgdHlwZWQgYXJyYXkgd2l0aCA0IHZhbHVlcy5cbiAgICogQHR5cGVkZWYge251bWJlcltdfFR5cGVkQXJyYXl9IFZlY3RvcjRcbiAgICogQG1lbWJlck9mIG1vZHVsZTp3ZWJnbC0zZC1tYXRoXG4gICAqL1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvciB0eXBlZCBhcnJheSB3aXRoIDE2IHZhbHVlcy5cbiAgICogQHR5cGVkZWYge251bWJlcltdfFR5cGVkQXJyYXl9IE1hdHJpeDRcbiAgICogQG1lbWJlck9mIG1vZHVsZTp3ZWJnbC0zZC1tYXRoXG4gICAqL1xuXG4gIC8qKlxuICAgKiBUYWtlcyB0d28gNC1ieS00IG1hdHJpY2VzLCBhIGFuZCBiLCBhbmQgY29tcHV0ZXMgdGhlIHByb2R1Y3QgaW4gdGhlIG9yZGVyXG4gICAqIHRoYXQgcHJlLWNvbXBvc2VzIGIgd2l0aCBhLiAgSW4gb3RoZXIgd29yZHMsIHRoZSBtYXRyaXggcmV0dXJuZWQgd2lsbFxuICAgKiB0cmFuc2Zvcm0gYnkgYiBmaXJzdCBhbmQgdGhlbiBhLiAgTm90ZSB0aGlzIGlzIHN1YnRseSBkaWZmZXJlbnQgZnJvbSBqdXN0XG4gICAqIG11bHRpcGx5aW5nIHRoZSBtYXRyaWNlcyB0b2dldGhlci4gIEZvciBnaXZlbiBhIGFuZCBiLCB0aGlzIGZ1bmN0aW9uIHJldHVybnNcbiAgICogdGhlIHNhbWUgb2JqZWN0IGluIGJvdGggcm93LW1ham9yIGFuZCBjb2x1bW4tbWFqb3IgbW9kZS5cbiAgICogQHBhcmFtIHtNYXRyaXg0fSBhIEEgbWF0cml4LlxuICAgKiBAcGFyYW0ge01hdHJpeDR9IGIgQSBtYXRyaXguXG4gICAqIEBwYXJhbSB7TWF0cml4NH0gW2RzdF0gb3B0aW9uYWwgbWF0cml4IHRvIHN0b3JlIHJlc3VsdFxuICAgKiBAcmV0dXJuIHtNYXRyaXg0fSBkc3Qgb3IgYSBuZXcgbWF0cml4IGlmIG5vbmUgcHJvdmlkZWRcbiAgICovXG4gIGZ1bmN0aW9uIG11bHRpcGx5KGEsIGIsIGRzdCkge1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgRmxvYXQzMkFycmF5KDE2KTtcbiAgICB2YXIgYjAwID0gYlswICogNCArIDBdO1xuICAgIHZhciBiMDEgPSBiWzAgKiA0ICsgMV07XG4gICAgdmFyIGIwMiA9IGJbMCAqIDQgKyAyXTtcbiAgICB2YXIgYjAzID0gYlswICogNCArIDNdO1xuICAgIHZhciBiMTAgPSBiWzEgKiA0ICsgMF07XG4gICAgdmFyIGIxMSA9IGJbMSAqIDQgKyAxXTtcbiAgICB2YXIgYjEyID0gYlsxICogNCArIDJdO1xuICAgIHZhciBiMTMgPSBiWzEgKiA0ICsgM107XG4gICAgdmFyIGIyMCA9IGJbMiAqIDQgKyAwXTtcbiAgICB2YXIgYjIxID0gYlsyICogNCArIDFdO1xuICAgIHZhciBiMjIgPSBiWzIgKiA0ICsgMl07XG4gICAgdmFyIGIyMyA9IGJbMiAqIDQgKyAzXTtcbiAgICB2YXIgYjMwID0gYlszICogNCArIDBdO1xuICAgIHZhciBiMzEgPSBiWzMgKiA0ICsgMV07XG4gICAgdmFyIGIzMiA9IGJbMyAqIDQgKyAyXTtcbiAgICB2YXIgYjMzID0gYlszICogNCArIDNdO1xuICAgIHZhciBhMDAgPSBhWzAgKiA0ICsgMF07XG4gICAgdmFyIGEwMSA9IGFbMCAqIDQgKyAxXTtcbiAgICB2YXIgYTAyID0gYVswICogNCArIDJdO1xuICAgIHZhciBhMDMgPSBhWzAgKiA0ICsgM107XG4gICAgdmFyIGExMCA9IGFbMSAqIDQgKyAwXTtcbiAgICB2YXIgYTExID0gYVsxICogNCArIDFdO1xuICAgIHZhciBhMTIgPSBhWzEgKiA0ICsgMl07XG4gICAgdmFyIGExMyA9IGFbMSAqIDQgKyAzXTtcbiAgICB2YXIgYTIwID0gYVsyICogNCArIDBdO1xuICAgIHZhciBhMjEgPSBhWzIgKiA0ICsgMV07XG4gICAgdmFyIGEyMiA9IGFbMiAqIDQgKyAyXTtcbiAgICB2YXIgYTIzID0gYVsyICogNCArIDNdO1xuICAgIHZhciBhMzAgPSBhWzMgKiA0ICsgMF07XG4gICAgdmFyIGEzMSA9IGFbMyAqIDQgKyAxXTtcbiAgICB2YXIgYTMyID0gYVszICogNCArIDJdO1xuICAgIHZhciBhMzMgPSBhWzMgKiA0ICsgM107XG4gICAgZHN0WyAwXSA9IGIwMCAqIGEwMCArIGIwMSAqIGExMCArIGIwMiAqIGEyMCArIGIwMyAqIGEzMDtcbiAgICBkc3RbIDFdID0gYjAwICogYTAxICsgYjAxICogYTExICsgYjAyICogYTIxICsgYjAzICogYTMxO1xuICAgIGRzdFsgMl0gPSBiMDAgKiBhMDIgKyBiMDEgKiBhMTIgKyBiMDIgKiBhMjIgKyBiMDMgKiBhMzI7XG4gICAgZHN0WyAzXSA9IGIwMCAqIGEwMyArIGIwMSAqIGExMyArIGIwMiAqIGEyMyArIGIwMyAqIGEzMztcbiAgICBkc3RbIDRdID0gYjEwICogYTAwICsgYjExICogYTEwICsgYjEyICogYTIwICsgYjEzICogYTMwO1xuICAgIGRzdFsgNV0gPSBiMTAgKiBhMDEgKyBiMTEgKiBhMTEgKyBiMTIgKiBhMjEgKyBiMTMgKiBhMzE7XG4gICAgZHN0WyA2XSA9IGIxMCAqIGEwMiArIGIxMSAqIGExMiArIGIxMiAqIGEyMiArIGIxMyAqIGEzMjtcbiAgICBkc3RbIDddID0gYjEwICogYTAzICsgYjExICogYTEzICsgYjEyICogYTIzICsgYjEzICogYTMzO1xuICAgIGRzdFsgOF0gPSBiMjAgKiBhMDAgKyBiMjEgKiBhMTAgKyBiMjIgKiBhMjAgKyBiMjMgKiBhMzA7XG4gICAgZHN0WyA5XSA9IGIyMCAqIGEwMSArIGIyMSAqIGExMSArIGIyMiAqIGEyMSArIGIyMyAqIGEzMTtcbiAgICBkc3RbMTBdID0gYjIwICogYTAyICsgYjIxICogYTEyICsgYjIyICogYTIyICsgYjIzICogYTMyO1xuICAgIGRzdFsxMV0gPSBiMjAgKiBhMDMgKyBiMjEgKiBhMTMgKyBiMjIgKiBhMjMgKyBiMjMgKiBhMzM7XG4gICAgZHN0WzEyXSA9IGIzMCAqIGEwMCArIGIzMSAqIGExMCArIGIzMiAqIGEyMCArIGIzMyAqIGEzMDtcbiAgICBkc3RbMTNdID0gYjMwICogYTAxICsgYjMxICogYTExICsgYjMyICogYTIxICsgYjMzICogYTMxO1xuICAgIGRzdFsxNF0gPSBiMzAgKiBhMDIgKyBiMzEgKiBhMTIgKyBiMzIgKiBhMjIgKyBiMzMgKiBhMzI7XG4gICAgZHN0WzE1XSA9IGIzMCAqIGEwMyArIGIzMSAqIGExMyArIGIzMiAqIGEyMyArIGIzMyAqIGEzMztcbiAgICByZXR1cm4gZHN0O1xuICB9XG5cblxuICAvKipcbiAgICogYWRkcyAyIHZlY3RvcnMzc1xuICAgKiBAcGFyYW0ge1ZlY3RvcjN9IGEgYVxuICAgKiBAcGFyYW0ge1ZlY3RvcjN9IGIgYlxuICAgKiBAcGFyYW0ge1ZlY3RvcjN9IGRzdCBvcHRpb25hbCB2ZWN0b3IzIHRvIHN0b3JlIHJlc3VsdFxuICAgKiBAcmV0dXJuIHtWZWN0b3IzfSBkc3Qgb3IgbmV3IFZlY3RvcjMgaWYgbm90IHByb3ZpZGVkXG4gICAqIEBtZW1iZXJPZiBtb2R1bGU6d2ViZ2wtM2QtbWF0aFxuICAgKi9cbiAgZnVuY3Rpb24gYWRkVmVjdG9ycyhhLCBiLCBkc3QpIHtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IEZsb2F0MzJBcnJheSgzKTtcbiAgICBkc3RbMF0gPSBhWzBdICsgYlswXTtcbiAgICBkc3RbMV0gPSBhWzFdICsgYlsxXTtcbiAgICBkc3RbMl0gPSBhWzJdICsgYlsyXTtcbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgLyoqXG4gICAqIHN1YnRyYWN0cyAyIHZlY3RvcnMzc1xuICAgKiBAcGFyYW0ge1ZlY3RvcjN9IGEgYVxuICAgKiBAcGFyYW0ge1ZlY3RvcjN9IGIgYlxuICAgKiBAcGFyYW0ge1ZlY3RvcjN9IGRzdCBvcHRpb25hbCB2ZWN0b3IzIHRvIHN0b3JlIHJlc3VsdFxuICAgKiBAcmV0dXJuIHtWZWN0b3IzfSBkc3Qgb3IgbmV3IFZlY3RvcjMgaWYgbm90IHByb3ZpZGVkXG4gICAqIEBtZW1iZXJPZiBtb2R1bGU6d2ViZ2wtM2QtbWF0aFxuICAgKi9cbiAgZnVuY3Rpb24gc3VidHJhY3RWZWN0b3JzKGEsIGIsIGRzdCkge1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgRmxvYXQzMkFycmF5KDMpO1xuICAgIGRzdFswXSA9IGFbMF0gLSBiWzBdO1xuICAgIGRzdFsxXSA9IGFbMV0gLSBiWzFdO1xuICAgIGRzdFsyXSA9IGFbMl0gLSBiWzJdO1xuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuICAvKipcbiAgICogbm9ybWFsaXplcyBhIHZlY3Rvci5cbiAgICogQHBhcmFtIHtWZWN0b3IzfSB2IHZlY3RvciB0byBub3JtYWx6aWVcbiAgICogQHBhcmFtIHtWZWN0b3IzfSBkc3Qgb3B0aW9uYWwgdmVjdG9yMyB0byBzdG9yZSByZXN1bHRcbiAgICogQHJldHVybiB7VmVjdG9yM30gZHN0IG9yIG5ldyBWZWN0b3IzIGlmIG5vdCBwcm92aWRlZFxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZSh2LCBkc3QpIHtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IEZsb2F0MzJBcnJheSgzKTtcbiAgICB2YXIgbGVuZ3RoID0gTWF0aC5zcXJ0KHZbMF0gKiB2WzBdICsgdlsxXSAqIHZbMV0gKyB2WzJdICogdlsyXSk7XG4gICAgLy8gbWFrZSBzdXJlIHdlIGRvbid0IGRpdmlkZSBieSAwLlxuICAgIGlmIChsZW5ndGggPiAwLjAwMDAxKSB7XG4gICAgICBkc3RbMF0gPSB2WzBdIC8gbGVuZ3RoO1xuICAgICAgZHN0WzFdID0gdlsxXSAvIGxlbmd0aDtcbiAgICAgIGRzdFsyXSA9IHZbMl0gLyBsZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuICAvKipcbiAgICogQ29tcHV0ZXMgdGhlIGxlbmd0aCBvZiBhIHZlY2dvclxuICAgKiBAcGFyYW0ge1ZlY3RvcjN9IHYgdmVjdG9yIHRvIHRha2UgbGVuZ3RoIG9mXG4gICAqIEByZXR1cm4ge251bWJlcn0gbGVuZ3RoIG9mIHZlY3RvclxuICAgKi9cbiAgZnVuY3Rpb24gbGVuZ3RoKHYpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHZbMF0gKiB2WzBdICsgdlsxXSAqIHZbMV0gKyB2WzJdICogdlsyXSk7XG4gIH1cblxuICAvKipcbiAgICogQ29tcHV0ZXMgdGhlIGNyb3NzIHByb2R1Y3Qgb2YgMiB2ZWN0b3JzM3NcbiAgICogQHBhcmFtIHtWZWN0b3IzfSBhIGFcbiAgICogQHBhcmFtIHtWZWN0b3IzfSBiIGJcbiAgICogQHBhcmFtIHtWZWN0b3IzfSBkc3Qgb3B0aW9uYWwgdmVjdG9yMyB0byBzdG9yZSByZXN1bHRcbiAgICogQHJldHVybiB7VmVjdG9yM30gZHN0IG9yIG5ldyBWZWN0b3IzIGlmIG5vdCBwcm92aWRlZFxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG4gIGZ1bmN0aW9uIGNyb3NzKGEsIGIsIGRzdCkge1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgRmxvYXQzMkFycmF5KDMpO1xuICAgIGRzdFswXSA9IGFbMV0gKiBiWzJdIC0gYVsyXSAqIGJbMV07XG4gICAgZHN0WzFdID0gYVsyXSAqIGJbMF0gLSBhWzBdICogYlsyXTtcbiAgICBkc3RbMl0gPSBhWzBdICogYlsxXSAtIGFbMV0gKiBiWzBdO1xuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuICAvKipcbiAgICogQ29tcHV0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWN0b3JzOyBhc3N1bWVzIGJvdGggdmVjdG9ycyBoYXZlXG4gICAqIHRocmVlIGVudHJpZXMuXG4gICAqIEBwYXJhbSB7VmVjdG9yM30gYSBPcGVyYW5kIHZlY3Rvci5cbiAgICogQHBhcmFtIHtWZWN0b3IzfSBiIE9wZXJhbmQgdmVjdG9yLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IGRvdCBwcm9kdWN0XG4gICAqIEBtZW1iZXJPZiBtb2R1bGU6d2ViZ2wtM2QtbWF0aFxuICAgKi9cbiAgZnVuY3Rpb24gZG90KGEsIGIpIHtcbiAgICByZXR1cm4gKGFbMF0gKiBiWzBdKSArIChhWzFdICogYlsxXSkgKyAoYVsyXSAqIGJbMl0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXB1dGVzIHRoZSBkaXN0YW5jZSBzcXVhcmVkIGJldHdlZW4gMiBwb2ludHNcbiAgICogQHBhcmFtIHtWZWN0b3IzfSBhXG4gICAqIEBwYXJhbSB7VmVjdG9yM30gYlxuICAgKiBAcmV0dXJuIHtudWJtZXJ9IGRpc3RhbmNlIHNxdWFyZWQgYmV0d2VlbiBhIGFuZCBiXG4gICAqL1xuICBmdW5jdGlvbiBkaXN0YW5jZVNxKGEsIGIpIHtcbiAgICBjb25zdCBkeCA9IGFbMF0gLSBiWzBdO1xuICAgIGNvbnN0IGR5ID0gYVsxXSAtIGJbMV07XG4gICAgY29uc3QgZHogPSBhWzJdIC0gYlsyXTtcbiAgICByZXR1cm4gZHggKiBkeCArIGR5ICogZHkgKyBkeiAqIGR6O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXB1dGVzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDIgcG9pbnRzXG4gICAqIEBwYXJhbSB7VmVjdG9yM30gYVxuICAgKiBAcGFyYW0ge1ZlY3RvcjN9IGJcbiAgICogQHJldHVybiB7bnVibWVyfSBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcbiAgICovXG4gIGZ1bmN0aW9uIGRpc3RhbmNlKGEsIGIpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KGRpc3RhbmNlU3EoYSwgYikpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2VzIGFuIGlkZW50aXR5IG1hdHJpeC5cbiAgICogQHBhcmFtIHtNYXRyaXg0fSBbZHN0XSBvcHRpb25hbCBtYXRyaXggdG8gc3RvcmUgcmVzdWx0XG4gICAqIEByZXR1cm4ge01hdHJpeDR9IGRzdCBvciBhIG5ldyBtYXRyaXggaWYgbm9uZSBwcm92aWRlZFxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG4gIGZ1bmN0aW9uIGlkZW50aXR5KGRzdCkge1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgRmxvYXQzMkFycmF5KDE2KTtcblxuICAgIGRzdFsgMF0gPSAxO1xuICAgIGRzdFsgMV0gPSAwO1xuICAgIGRzdFsgMl0gPSAwO1xuICAgIGRzdFsgM10gPSAwO1xuICAgIGRzdFsgNF0gPSAwO1xuICAgIGRzdFsgNV0gPSAxO1xuICAgIGRzdFsgNl0gPSAwO1xuICAgIGRzdFsgN10gPSAwO1xuICAgIGRzdFsgOF0gPSAwO1xuICAgIGRzdFsgOV0gPSAwO1xuICAgIGRzdFsxMF0gPSAxO1xuICAgIGRzdFsxMV0gPSAwO1xuICAgIGRzdFsxMl0gPSAwO1xuICAgIGRzdFsxM10gPSAwO1xuICAgIGRzdFsxNF0gPSAwO1xuICAgIGRzdFsxNV0gPSAxO1xuXG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc3Bvc2VzIGEgbWF0cml4LlxuICAgKiBAcGFyYW0ge01hdHJpeDR9IG0gbWF0cml4IHRvIHRyYW5zcG9zZS5cbiAgICogQHBhcmFtIHtNYXRyaXg0fSBbZHN0XSBvcHRpb25hbCBtYXRyaXggdG8gc3RvcmUgcmVzdWx0XG4gICAqIEByZXR1cm4ge01hdHJpeDR9IGRzdCBvciBhIG5ldyBtYXRyaXggaWYgbm9uZSBwcm92aWRlZFxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG4gIGZ1bmN0aW9uIHRyYW5zcG9zZShtLCBkc3QpIHtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IEZsb2F0MzJBcnJheSgxNik7XG5cbiAgICBkc3RbIDBdID0gbVswXTtcbiAgICBkc3RbIDFdID0gbVs0XTtcbiAgICBkc3RbIDJdID0gbVs4XTtcbiAgICBkc3RbIDNdID0gbVsxMl07XG4gICAgZHN0WyA0XSA9IG1bMV07XG4gICAgZHN0WyA1XSA9IG1bNV07XG4gICAgZHN0WyA2XSA9IG1bOV07XG4gICAgZHN0WyA3XSA9IG1bMTNdO1xuICAgIGRzdFsgOF0gPSBtWzJdO1xuICAgIGRzdFsgOV0gPSBtWzZdO1xuICAgIGRzdFsxMF0gPSBtWzEwXTtcbiAgICBkc3RbMTFdID0gbVsxNF07XG4gICAgZHN0WzEyXSA9IG1bM107XG4gICAgZHN0WzEzXSA9IG1bN107XG4gICAgZHN0WzE0XSA9IG1bMTFdO1xuICAgIGRzdFsxNV0gPSBtWzE1XTtcblxuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGxvb2tBdCBtYXRyaXguXG4gICAqIFRoaXMgaXMgYSB3b3JsZCBtYXRyaXggZm9yIGEgY2FtZXJhLiBJbiBvdGhlciB3b3JkcyBpdCB3aWxsIHRyYW5zZm9ybVxuICAgKiBmcm9tIHRoZSBvcmlnaW4gdG8gYSBwbGFjZSBhbmQgb3JpZW50YXRpb24gaW4gdGhlIHdvcmxkLiBGb3IgYSB2aWV3XG4gICAqIG1hdHJpeCB0YWtlIHRoZSBpbnZlcnNlIG9mIHRoaXMuXG4gICAqIEBwYXJhbSB7VmVjdG9yM30gY2FtZXJhUG9zaXRpb24gcG9zaXRpb24gb2YgdGhlIGNhbWVyYVxuICAgKiBAcGFyYW0ge1ZlY3RvcjN9IHRhcmdldCBwb3NpdGlvbiBvZiB0aGUgdGFyZ2V0XG4gICAqIEBwYXJhbSB7VmVjdG9yM30gdXAgZGlyZWN0aW9uXG4gICAqIEBwYXJhbSB7TWF0cml4NH0gW2RzdF0gb3B0aW9uYWwgbWF0cml4IHRvIHN0b3JlIHJlc3VsdFxuICAgKiBAcmV0dXJuIHtNYXRyaXg0fSBkc3Qgb3IgYSBuZXcgbWF0cml4IGlmIG5vbmUgcHJvdmlkZWRcbiAgICogQG1lbWJlck9mIG1vZHVsZTp3ZWJnbC0zZC1tYXRoXG4gICAqL1xuICBmdW5jdGlvbiBsb29rQXQoY2FtZXJhUG9zaXRpb24sIHRhcmdldCwgdXAsIGRzdCkge1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgRmxvYXQzMkFycmF5KDE2KTtcbiAgICB2YXIgekF4aXMgPSBub3JtYWxpemUoXG4gICAgICAgIHN1YnRyYWN0VmVjdG9ycyhjYW1lcmFQb3NpdGlvbiwgdGFyZ2V0KSk7XG4gICAgdmFyIHhBeGlzID0gbm9ybWFsaXplKGNyb3NzKHVwLCB6QXhpcykpO1xuICAgIHZhciB5QXhpcyA9IG5vcm1hbGl6ZShjcm9zcyh6QXhpcywgeEF4aXMpKTtcblxuICAgIGRzdFsgMF0gPSB4QXhpc1swXTtcbiAgICBkc3RbIDFdID0geEF4aXNbMV07XG4gICAgZHN0WyAyXSA9IHhBeGlzWzJdO1xuICAgIGRzdFsgM10gPSAwO1xuICAgIGRzdFsgNF0gPSB5QXhpc1swXTtcbiAgICBkc3RbIDVdID0geUF4aXNbMV07XG4gICAgZHN0WyA2XSA9IHlBeGlzWzJdO1xuICAgIGRzdFsgN10gPSAwO1xuICAgIGRzdFsgOF0gPSB6QXhpc1swXTtcbiAgICBkc3RbIDldID0gekF4aXNbMV07XG4gICAgZHN0WzEwXSA9IHpBeGlzWzJdO1xuICAgIGRzdFsxMV0gPSAwO1xuICAgIGRzdFsxMl0gPSBjYW1lcmFQb3NpdGlvblswXTtcbiAgICBkc3RbMTNdID0gY2FtZXJhUG9zaXRpb25bMV07XG4gICAgZHN0WzE0XSA9IGNhbWVyYVBvc2l0aW9uWzJdO1xuICAgIGRzdFsxNV0gPSAxO1xuXG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wdXRlcyBhIDQtYnktNCBwZXJzcGVjdGl2ZSB0cmFuc2Zvcm1hdGlvbiBtYXRyaXggZ2l2ZW4gdGhlIGFuZ3VsYXIgaGVpZ2h0XG4gICAqIG9mIHRoZSBmcnVzdHVtLCB0aGUgYXNwZWN0IHJhdGlvLCBhbmQgdGhlIG5lYXIgYW5kIGZhciBjbGlwcGluZyBwbGFuZXMuICBUaGVcbiAgICogYXJndW1lbnRzIGRlZmluZSBhIGZydXN0dW0gZXh0ZW5kaW5nIGluIHRoZSBuZWdhdGl2ZSB6IGRpcmVjdGlvbi4gIFRoZSBnaXZlblxuICAgKiBhbmdsZSBpcyB0aGUgdmVydGljYWwgYW5nbGUgb2YgdGhlIGZydXN0dW0sIGFuZCB0aGUgaG9yaXpvbnRhbCBhbmdsZSBpc1xuICAgKiBkZXRlcm1pbmVkIHRvIHByb2R1Y2UgdGhlIGdpdmVuIGFzcGVjdCByYXRpby4gIFRoZSBhcmd1bWVudHMgbmVhciBhbmQgZmFyIGFyZVxuICAgKiB0aGUgZGlzdGFuY2VzIHRvIHRoZSBuZWFyIGFuZCBmYXIgY2xpcHBpbmcgcGxhbmVzLiAgTm90ZSB0aGF0IG5lYXIgYW5kIGZhclxuICAgKiBhcmUgbm90IHogY29vcmRpbmF0ZXMsIGJ1dCByYXRoZXIgdGhleSBhcmUgZGlzdGFuY2VzIGFsb25nIHRoZSBuZWdhdGl2ZVxuICAgKiB6LWF4aXMuICBUaGUgbWF0cml4IGdlbmVyYXRlZCBzZW5kcyB0aGUgdmlld2luZyBmcnVzdHVtIHRvIHRoZSB1bml0IGJveC5cbiAgICogV2UgYXNzdW1lIGEgdW5pdCBib3ggZXh0ZW5kaW5nIGZyb20gLTEgdG8gMSBpbiB0aGUgeCBhbmQgeSBkaW1lbnNpb25zIGFuZFxuICAgKiBmcm9tIC0xIHRvIDEgaW4gdGhlIHogZGltZW5zaW9uLlxuICAgKiBAcGFyYW0ge251bWJlcn0gZmllbGRPZlZpZXdJblJhZGlhbnMgZmllbGQgb2YgdmlldyBpbiB5IGF4aXMuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhc3BlY3QgYXNwZWN0IG9mIHZpZXdwb3J0ICh3aWR0aCAvIGhlaWdodClcbiAgICogQHBhcmFtIHtudW1iZXJ9IG5lYXIgbmVhciBaIGNsaXBwaW5nIHBsYW5lXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmYXIgZmFyIFogY2xpcHBpbmcgcGxhbmVcbiAgICogQHBhcmFtIHtNYXRyaXg0fSBbZHN0XSBvcHRpb25hbCBtYXRyaXggdG8gc3RvcmUgcmVzdWx0XG4gICAqIEByZXR1cm4ge01hdHJpeDR9IGRzdCBvciBhIG5ldyBtYXRyaXggaWYgbm9uZSBwcm92aWRlZFxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG4gIGZ1bmN0aW9uIHBlcnNwZWN0aXZlKGZpZWxkT2ZWaWV3SW5SYWRpYW5zLCBhc3BlY3QsIG5lYXIsIGZhciwgZHN0KSB7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuICAgIHZhciBmID0gTWF0aC50YW4oTWF0aC5QSSAqIDAuNSAtIDAuNSAqIGZpZWxkT2ZWaWV3SW5SYWRpYW5zKTtcbiAgICB2YXIgcmFuZ2VJbnYgPSAxLjAgLyAobmVhciAtIGZhcik7XG5cbiAgICBkc3RbIDBdID0gZiAvIGFzcGVjdDtcbiAgICBkc3RbIDFdID0gMDtcbiAgICBkc3RbIDJdID0gMDtcbiAgICBkc3RbIDNdID0gMDtcbiAgICBkc3RbIDRdID0gMDtcbiAgICBkc3RbIDVdID0gZjtcbiAgICBkc3RbIDZdID0gMDtcbiAgICBkc3RbIDddID0gMDtcbiAgICBkc3RbIDhdID0gMDtcbiAgICBkc3RbIDldID0gMDtcbiAgICBkc3RbMTBdID0gKG5lYXIgKyBmYXIpICogcmFuZ2VJbnY7XG4gICAgZHN0WzExXSA9IC0xO1xuICAgIGRzdFsxMl0gPSAwO1xuICAgIGRzdFsxM10gPSAwO1xuICAgIGRzdFsxNF0gPSBuZWFyICogZmFyICogcmFuZ2VJbnYgKiAyO1xuICAgIGRzdFsxNV0gPSAwO1xuXG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wdXRlcyBhIDQtYnktNCBvcnRob2dyYXBoaWMgcHJvamVjdGlvbiBtYXRyaXggZ2l2ZW4gdGhlIGNvb3JkaW5hdGVzIG9mIHRoZVxuICAgKiBwbGFuZXMgZGVmaW5pbmcgdGhlIGF4aXMtYWxpZ25lZCwgYm94LXNoYXBlZCB2aWV3aW5nIHZvbHVtZS4gIFRoZSBtYXRyaXhcbiAgICogZ2VuZXJhdGVkIHNlbmRzIHRoYXQgYm94IHRvIHRoZSB1bml0IGJveC4gIE5vdGUgdGhhdCBhbHRob3VnaCBsZWZ0IGFuZCByaWdodFxuICAgKiBhcmUgeCBjb29yZGluYXRlcyBhbmQgYm90dG9tIGFuZCB0b3AgYXJlIHkgY29vcmRpbmF0ZXMsIG5lYXIgYW5kIGZhclxuICAgKiBhcmUgbm90IHogY29vcmRpbmF0ZXMsIGJ1dCByYXRoZXIgdGhleSBhcmUgZGlzdGFuY2VzIGFsb25nIHRoZSBuZWdhdGl2ZVxuICAgKiB6LWF4aXMuICBXZSBhc3N1bWUgYSB1bml0IGJveCBleHRlbmRpbmcgZnJvbSAtMSB0byAxIGluIHRoZSB4IGFuZCB5XG4gICAqIGRpbWVuc2lvbnMgYW5kIGZyb20gLTEgdG8gMSBpbiB0aGUgeiBkaW1lbnNpb24uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsZWZ0IFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIGxlZnQgcGxhbmUgb2YgdGhlIGJveC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHJpZ2h0IFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIHJpZ2h0IHBsYW5lIG9mIHRoZSBib3guXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBib3R0b20gVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgYm90dG9tIHBsYW5lIG9mIHRoZSBib3guXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0b3AgVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgcmlnaHQgcGxhbmUgb2YgdGhlIGJveC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IG5lYXIgVGhlIG5lZ2F0aXZlIHogY29vcmRpbmF0ZSBvZiB0aGUgbmVhciBwbGFuZSBvZiB0aGUgYm94LlxuICAgKiBAcGFyYW0ge251bWJlcn0gZmFyIFRoZSBuZWdhdGl2ZSB6IGNvb3JkaW5hdGUgb2YgdGhlIGZhciBwbGFuZSBvZiB0aGUgYm94LlxuICAgKiBAcGFyYW0ge01hdHJpeDR9IFtkc3RdIG9wdGlvbmFsIG1hdHJpeCB0byBzdG9yZSByZXN1bHRcbiAgICogQHJldHVybiB7TWF0cml4NH0gZHN0IG9yIGEgbmV3IG1hdHJpeCBpZiBub25lIHByb3ZpZGVkXG4gICAqIEBtZW1iZXJPZiBtb2R1bGU6d2ViZ2wtM2QtbWF0aFxuICAgKi9cbiAgZnVuY3Rpb24gb3J0aG9ncmFwaGljKGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhciwgZmFyLCBkc3QpIHtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IEZsb2F0MzJBcnJheSgxNik7XG5cbiAgICBkc3RbIDBdID0gMiAvIChyaWdodCAtIGxlZnQpO1xuICAgIGRzdFsgMV0gPSAwO1xuICAgIGRzdFsgMl0gPSAwO1xuICAgIGRzdFsgM10gPSAwO1xuICAgIGRzdFsgNF0gPSAwO1xuICAgIGRzdFsgNV0gPSAyIC8gKHRvcCAtIGJvdHRvbSk7XG4gICAgZHN0WyA2XSA9IDA7XG4gICAgZHN0WyA3XSA9IDA7XG4gICAgZHN0WyA4XSA9IDA7XG4gICAgZHN0WyA5XSA9IDA7XG4gICAgZHN0WzEwXSA9IDIgLyAobmVhciAtIGZhcik7XG4gICAgZHN0WzExXSA9IDA7XG4gICAgZHN0WzEyXSA9IChsZWZ0ICsgcmlnaHQpIC8gKGxlZnQgLSByaWdodCk7XG4gICAgZHN0WzEzXSA9IChib3R0b20gKyB0b3ApIC8gKGJvdHRvbSAtIHRvcCk7XG4gICAgZHN0WzE0XSA9IChuZWFyICsgZmFyKSAvIChuZWFyIC0gZmFyKTtcbiAgICBkc3RbMTVdID0gMTtcblxuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuICAvKipcbiAgICogQ29tcHV0ZXMgYSA0LWJ5LTQgcGVyc3BlY3RpdmUgdHJhbnNmb3JtYXRpb24gbWF0cml4IGdpdmVuIHRoZSBsZWZ0LCByaWdodCxcbiAgICogdG9wLCBib3R0b20sIG5lYXIgYW5kIGZhciBjbGlwcGluZyBwbGFuZXMuIFRoZSBhcmd1bWVudHMgZGVmaW5lIGEgZnJ1c3R1bVxuICAgKiBleHRlbmRpbmcgaW4gdGhlIG5lZ2F0aXZlIHogZGlyZWN0aW9uLiBUaGUgYXJndW1lbnRzIG5lYXIgYW5kIGZhciBhcmUgdGhlXG4gICAqIGRpc3RhbmNlcyB0byB0aGUgbmVhciBhbmQgZmFyIGNsaXBwaW5nIHBsYW5lcy4gTm90ZSB0aGF0IG5lYXIgYW5kIGZhciBhcmUgbm90XG4gICAqIHogY29vcmRpbmF0ZXMsIGJ1dCByYXRoZXIgdGhleSBhcmUgZGlzdGFuY2VzIGFsb25nIHRoZSBuZWdhdGl2ZSB6LWF4aXMuIFRoZVxuICAgKiBtYXRyaXggZ2VuZXJhdGVkIHNlbmRzIHRoZSB2aWV3aW5nIGZydXN0dW0gdG8gdGhlIHVuaXQgYm94LiBXZSBhc3N1bWUgYSB1bml0XG4gICAqIGJveCBleHRlbmRpbmcgZnJvbSAtMSB0byAxIGluIHRoZSB4IGFuZCB5IGRpbWVuc2lvbnMgYW5kIGZyb20gLTEgdG8gMSBpbiB0aGUgelxuICAgKiBkaW1lbnNpb24uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsZWZ0IFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIGxlZnQgcGxhbmUgb2YgdGhlIGJveC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHJpZ2h0IFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIHJpZ2h0IHBsYW5lIG9mIHRoZSBib3guXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBib3R0b20gVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgYm90dG9tIHBsYW5lIG9mIHRoZSBib3guXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0b3AgVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgcmlnaHQgcGxhbmUgb2YgdGhlIGJveC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IG5lYXIgVGhlIG5lZ2F0aXZlIHogY29vcmRpbmF0ZSBvZiB0aGUgbmVhciBwbGFuZSBvZiB0aGUgYm94LlxuICAgKiBAcGFyYW0ge251bWJlcn0gZmFyIFRoZSBuZWdhdGl2ZSB6IGNvb3JkaW5hdGUgb2YgdGhlIGZhciBwbGFuZSBvZiB0aGUgYm94LlxuICAgKiBAcGFyYW0ge01hdHJpeDR9IFtkc3RdIG9wdGlvbmFsIG1hdHJpeCB0byBzdG9yZSByZXN1bHRcbiAgICogQHJldHVybiB7TWF0cml4NH0gZHN0IG9yIGEgbmV3IG1hdHJpeCBpZiBub25lIHByb3ZpZGVkXG4gICAqIEBtZW1iZXJPZiBtb2R1bGU6d2ViZ2wtM2QtbWF0aFxuICAgKi9cbiAgZnVuY3Rpb24gZnJ1c3R1bShsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhciwgZHN0KSB7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuXG4gICAgdmFyIGR4ID0gcmlnaHQgLSBsZWZ0O1xuICAgIHZhciBkeSA9IHRvcCAtIGJvdHRvbTtcbiAgICB2YXIgZHogPSBmYXIgLSBuZWFyO1xuXG4gICAgZHN0WyAwXSA9IDIgKiBuZWFyIC8gZHg7XG4gICAgZHN0WyAxXSA9IDA7XG4gICAgZHN0WyAyXSA9IDA7XG4gICAgZHN0WyAzXSA9IDA7XG4gICAgZHN0WyA0XSA9IDA7XG4gICAgZHN0WyA1XSA9IDIgKiBuZWFyIC8gZHk7XG4gICAgZHN0WyA2XSA9IDA7XG4gICAgZHN0WyA3XSA9IDA7XG4gICAgZHN0WyA4XSA9IChsZWZ0ICsgcmlnaHQpIC8gZHg7XG4gICAgZHN0WyA5XSA9ICh0b3AgKyBib3R0b20pIC8gZHk7XG4gICAgZHN0WzEwXSA9IC0oZmFyICsgbmVhcikgLyBkejtcbiAgICBkc3RbMTFdID0gLTE7XG4gICAgZHN0WzEyXSA9IDA7XG4gICAgZHN0WzEzXSA9IDA7XG4gICAgZHN0WzE0XSA9IC0yICogbmVhciAqIGZhciAvIGR6O1xuICAgIGRzdFsxNV0gPSAwO1xuXG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlcyBhIHRyYW5zbGF0aW9uIG1hdHJpeFxuICAgKiBAcGFyYW0ge251bWJlcn0gdHggeCB0cmFuc2xhdGlvbi5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHR5IHkgdHJhbnNsYXRpb24uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0eiB6IHRyYW5zbGF0aW9uLlxuICAgKiBAcGFyYW0ge01hdHJpeDR9IFtkc3RdIG9wdGlvbmFsIG1hdHJpeCB0byBzdG9yZSByZXN1bHRcbiAgICogQHJldHVybiB7TWF0cml4NH0gZHN0IG9yIGEgbmV3IG1hdHJpeCBpZiBub25lIHByb3ZpZGVkXG4gICAqIEBtZW1iZXJPZiBtb2R1bGU6d2ViZ2wtM2QtbWF0aFxuICAgKi9cbiAgZnVuY3Rpb24gdHJhbnNsYXRpb24odHgsIHR5LCB0eiwgZHN0KSB7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuXG4gICAgZHN0WyAwXSA9IDE7XG4gICAgZHN0WyAxXSA9IDA7XG4gICAgZHN0WyAyXSA9IDA7XG4gICAgZHN0WyAzXSA9IDA7XG4gICAgZHN0WyA0XSA9IDA7XG4gICAgZHN0WyA1XSA9IDE7XG4gICAgZHN0WyA2XSA9IDA7XG4gICAgZHN0WyA3XSA9IDA7XG4gICAgZHN0WyA4XSA9IDA7XG4gICAgZHN0WyA5XSA9IDA7XG4gICAgZHN0WzEwXSA9IDE7XG4gICAgZHN0WzExXSA9IDA7XG4gICAgZHN0WzEyXSA9IHR4O1xuICAgIGRzdFsxM10gPSB0eTtcbiAgICBkc3RbMTRdID0gdHo7XG4gICAgZHN0WzE1XSA9IDE7XG5cbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgLyoqXG4gICAqIE11dGxpcGx5IGJ5IHRyYW5zbGF0aW9uIG1hdHJpeC5cbiAgICogQHBhcmFtIHtNYXRyaXg0fSBtIG1hdHJpeCB0byBtdWx0aXBseVxuICAgKiBAcGFyYW0ge251bWJlcn0gdHggeCB0cmFuc2xhdGlvbi5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHR5IHkgdHJhbnNsYXRpb24uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0eiB6IHRyYW5zbGF0aW9uLlxuICAgKiBAcGFyYW0ge01hdHJpeDR9IFtkc3RdIG9wdGlvbmFsIG1hdHJpeCB0byBzdG9yZSByZXN1bHRcbiAgICogQHJldHVybiB7TWF0cml4NH0gZHN0IG9yIGEgbmV3IG1hdHJpeCBpZiBub25lIHByb3ZpZGVkXG4gICAqIEBtZW1iZXJPZiBtb2R1bGU6d2ViZ2wtM2QtbWF0aFxuICAgKi9cbiAgZnVuY3Rpb24gdHJhbnNsYXRlKG0sIHR4LCB0eSwgdHosIGRzdCkge1xuICAgIC8vIFRoaXMgaXMgdGhlIG9wdGltaXplZCB2ZXJzaW9uIG9mXG4gICAgLy8gcmV0dXJuIG11bHRpcGx5KG0sIHRyYW5zbGF0aW9uKHR4LCB0eSwgdHopLCBkc3QpO1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgRmxvYXQzMkFycmF5KDE2KTtcblxuICAgIHZhciBtMDAgPSBtWzBdO1xuICAgIHZhciBtMDEgPSBtWzFdO1xuICAgIHZhciBtMDIgPSBtWzJdO1xuICAgIHZhciBtMDMgPSBtWzNdO1xuICAgIHZhciBtMTAgPSBtWzEgKiA0ICsgMF07XG4gICAgdmFyIG0xMSA9IG1bMSAqIDQgKyAxXTtcbiAgICB2YXIgbTEyID0gbVsxICogNCArIDJdO1xuICAgIHZhciBtMTMgPSBtWzEgKiA0ICsgM107XG4gICAgdmFyIG0yMCA9IG1bMiAqIDQgKyAwXTtcbiAgICB2YXIgbTIxID0gbVsyICogNCArIDFdO1xuICAgIHZhciBtMjIgPSBtWzIgKiA0ICsgMl07XG4gICAgdmFyIG0yMyA9IG1bMiAqIDQgKyAzXTtcbiAgICB2YXIgbTMwID0gbVszICogNCArIDBdO1xuICAgIHZhciBtMzEgPSBtWzMgKiA0ICsgMV07XG4gICAgdmFyIG0zMiA9IG1bMyAqIDQgKyAyXTtcbiAgICB2YXIgbTMzID0gbVszICogNCArIDNdO1xuXG4gICAgaWYgKG0gIT09IGRzdCkge1xuICAgICAgZHN0WyAwXSA9IG0wMDtcbiAgICAgIGRzdFsgMV0gPSBtMDE7XG4gICAgICBkc3RbIDJdID0gbTAyO1xuICAgICAgZHN0WyAzXSA9IG0wMztcbiAgICAgIGRzdFsgNF0gPSBtMTA7XG4gICAgICBkc3RbIDVdID0gbTExO1xuICAgICAgZHN0WyA2XSA9IG0xMjtcbiAgICAgIGRzdFsgN10gPSBtMTM7XG4gICAgICBkc3RbIDhdID0gbTIwO1xuICAgICAgZHN0WyA5XSA9IG0yMTtcbiAgICAgIGRzdFsxMF0gPSBtMjI7XG4gICAgICBkc3RbMTFdID0gbTIzO1xuICAgIH1cblxuICAgIGRzdFsxMl0gPSBtMDAgKiB0eCArIG0xMCAqIHR5ICsgbTIwICogdHogKyBtMzA7XG4gICAgZHN0WzEzXSA9IG0wMSAqIHR4ICsgbTExICogdHkgKyBtMjEgKiB0eiArIG0zMTtcbiAgICBkc3RbMTRdID0gbTAyICogdHggKyBtMTIgKiB0eSArIG0yMiAqIHR6ICsgbTMyO1xuICAgIGRzdFsxNV0gPSBtMDMgKiB0eCArIG0xMyAqIHR5ICsgbTIzICogdHogKyBtMzM7XG5cbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2VzIGFuIHggcm90YXRpb24gbWF0cml4XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZUluUmFkaWFucyBhbW91bnQgdG8gcm90YXRlXG4gICAqIEBwYXJhbSB7TWF0cml4NH0gW2RzdF0gb3B0aW9uYWwgbWF0cml4IHRvIHN0b3JlIHJlc3VsdFxuICAgKiBAcmV0dXJuIHtNYXRyaXg0fSBkc3Qgb3IgYSBuZXcgbWF0cml4IGlmIG5vbmUgcHJvdmlkZWRcbiAgICogQG1lbWJlck9mIG1vZHVsZTp3ZWJnbC0zZC1tYXRoXG4gICAqL1xuICBmdW5jdGlvbiB4Um90YXRpb24oYW5nbGVJblJhZGlhbnMsIGRzdCkge1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgRmxvYXQzMkFycmF5KDE2KTtcbiAgICB2YXIgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICB2YXIgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcblxuICAgIGRzdFsgMF0gPSAxO1xuICAgIGRzdFsgMV0gPSAwO1xuICAgIGRzdFsgMl0gPSAwO1xuICAgIGRzdFsgM10gPSAwO1xuICAgIGRzdFsgNF0gPSAwO1xuICAgIGRzdFsgNV0gPSBjO1xuICAgIGRzdFsgNl0gPSBzO1xuICAgIGRzdFsgN10gPSAwO1xuICAgIGRzdFsgOF0gPSAwO1xuICAgIGRzdFsgOV0gPSAtcztcbiAgICBkc3RbMTBdID0gYztcbiAgICBkc3RbMTFdID0gMDtcbiAgICBkc3RbMTJdID0gMDtcbiAgICBkc3RbMTNdID0gMDtcbiAgICBkc3RbMTRdID0gMDtcbiAgICBkc3RbMTVdID0gMTtcblxuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuICAvKipcbiAgICogTXVsdGlwbHkgYnkgYW4geCByb3RhdGlvbiBtYXRyaXhcbiAgICogQHBhcmFtIHtNYXRyaXg0fSBtIG1hdHJpeCB0byBtdWx0aXBseVxuICAgKiBAcGFyYW0ge251bWJlcn0gYW5nbGVJblJhZGlhbnMgYW1vdW50IHRvIHJvdGF0ZVxuICAgKiBAcGFyYW0ge01hdHJpeDR9IFtkc3RdIG9wdGlvbmFsIG1hdHJpeCB0byBzdG9yZSByZXN1bHRcbiAgICogQHJldHVybiB7TWF0cml4NH0gZHN0IG9yIGEgbmV3IG1hdHJpeCBpZiBub25lIHByb3ZpZGVkXG4gICAqIEBtZW1iZXJPZiBtb2R1bGU6d2ViZ2wtM2QtbWF0aFxuICAgKi9cbiAgZnVuY3Rpb24geFJvdGF0ZShtLCBhbmdsZUluUmFkaWFucywgZHN0KSB7XG4gICAgLy8gdGhpcyBpcyB0aGUgb3B0aW1pemVkIHZlcnNpb24gb2ZcbiAgICAvLyByZXR1cm4gbXVsdGlwbHkobSwgeFJvdGF0aW9uKGFuZ2xlSW5SYWRpYW5zKSwgZHN0KTtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IEZsb2F0MzJBcnJheSgxNik7XG5cbiAgICB2YXIgbTEwID0gbVs0XTtcbiAgICB2YXIgbTExID0gbVs1XTtcbiAgICB2YXIgbTEyID0gbVs2XTtcbiAgICB2YXIgbTEzID0gbVs3XTtcbiAgICB2YXIgbTIwID0gbVs4XTtcbiAgICB2YXIgbTIxID0gbVs5XTtcbiAgICB2YXIgbTIyID0gbVsxMF07XG4gICAgdmFyIG0yMyA9IG1bMTFdO1xuICAgIHZhciBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICAgIHZhciBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuXG4gICAgZHN0WzRdICA9IGMgKiBtMTAgKyBzICogbTIwO1xuICAgIGRzdFs1XSAgPSBjICogbTExICsgcyAqIG0yMTtcbiAgICBkc3RbNl0gID0gYyAqIG0xMiArIHMgKiBtMjI7XG4gICAgZHN0WzddICA9IGMgKiBtMTMgKyBzICogbTIzO1xuICAgIGRzdFs4XSAgPSBjICogbTIwIC0gcyAqIG0xMDtcbiAgICBkc3RbOV0gID0gYyAqIG0yMSAtIHMgKiBtMTE7XG4gICAgZHN0WzEwXSA9IGMgKiBtMjIgLSBzICogbTEyO1xuICAgIGRzdFsxMV0gPSBjICogbTIzIC0gcyAqIG0xMztcblxuICAgIGlmIChtICE9PSBkc3QpIHtcbiAgICAgIGRzdFsgMF0gPSBtWyAwXTtcbiAgICAgIGRzdFsgMV0gPSBtWyAxXTtcbiAgICAgIGRzdFsgMl0gPSBtWyAyXTtcbiAgICAgIGRzdFsgM10gPSBtWyAzXTtcbiAgICAgIGRzdFsxMl0gPSBtWzEyXTtcbiAgICAgIGRzdFsxM10gPSBtWzEzXTtcbiAgICAgIGRzdFsxNF0gPSBtWzE0XTtcbiAgICAgIGRzdFsxNV0gPSBtWzE1XTtcbiAgICB9XG5cbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2VzIGFuIHkgcm90YXRpb24gbWF0cml4XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZUluUmFkaWFucyBhbW91bnQgdG8gcm90YXRlXG4gICAqIEBwYXJhbSB7TWF0cml4NH0gW2RzdF0gb3B0aW9uYWwgbWF0cml4IHRvIHN0b3JlIHJlc3VsdFxuICAgKiBAcmV0dXJuIHtNYXRyaXg0fSBkc3Qgb3IgYSBuZXcgbWF0cml4IGlmIG5vbmUgcHJvdmlkZWRcbiAgICogQG1lbWJlck9mIG1vZHVsZTp3ZWJnbC0zZC1tYXRoXG4gICAqL1xuICBmdW5jdGlvbiB5Um90YXRpb24oYW5nbGVJblJhZGlhbnMsIGRzdCkge1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgRmxvYXQzMkFycmF5KDE2KTtcbiAgICB2YXIgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICB2YXIgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcblxuICAgIGRzdFsgMF0gPSBjO1xuICAgIGRzdFsgMV0gPSAwO1xuICAgIGRzdFsgMl0gPSAtcztcbiAgICBkc3RbIDNdID0gMDtcbiAgICBkc3RbIDRdID0gMDtcbiAgICBkc3RbIDVdID0gMTtcbiAgICBkc3RbIDZdID0gMDtcbiAgICBkc3RbIDddID0gMDtcbiAgICBkc3RbIDhdID0gcztcbiAgICBkc3RbIDldID0gMDtcbiAgICBkc3RbMTBdID0gYztcbiAgICBkc3RbMTFdID0gMDtcbiAgICBkc3RbMTJdID0gMDtcbiAgICBkc3RbMTNdID0gMDtcbiAgICBkc3RbMTRdID0gMDtcbiAgICBkc3RbMTVdID0gMTtcblxuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuICAvKipcbiAgICogTXVsdGlwbHkgYnkgYW4geSByb3RhdGlvbiBtYXRyaXhcbiAgICogQHBhcmFtIHtNYXRyaXg0fSBtIG1hdHJpeCB0byBtdWx0aXBseVxuICAgKiBAcGFyYW0ge251bWJlcn0gYW5nbGVJblJhZGlhbnMgYW1vdW50IHRvIHJvdGF0ZVxuICAgKiBAcGFyYW0ge01hdHJpeDR9IFtkc3RdIG9wdGlvbmFsIG1hdHJpeCB0byBzdG9yZSByZXN1bHRcbiAgICogQHJldHVybiB7TWF0cml4NH0gZHN0IG9yIGEgbmV3IG1hdHJpeCBpZiBub25lIHByb3ZpZGVkXG4gICAqIEBtZW1iZXJPZiBtb2R1bGU6d2ViZ2wtM2QtbWF0aFxuICAgKi9cbiAgZnVuY3Rpb24geVJvdGF0ZShtLCBhbmdsZUluUmFkaWFucywgZHN0KSB7XG4gICAgLy8gdGhpcyBpcyB0aGUgb3B0aW1pemVkIHZlcmlzb24gb2ZcbiAgICAvLyByZXR1cm4gbXVsdGlwbHkobSwgeVJvdGF0aW9uKGFuZ2xlSW5SYWRpYW5zKSwgZHN0KTtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IEZsb2F0MzJBcnJheSgxNik7XG5cbiAgICB2YXIgbTAwID0gbVswICogNCArIDBdO1xuICAgIHZhciBtMDEgPSBtWzAgKiA0ICsgMV07XG4gICAgdmFyIG0wMiA9IG1bMCAqIDQgKyAyXTtcbiAgICB2YXIgbTAzID0gbVswICogNCArIDNdO1xuICAgIHZhciBtMjAgPSBtWzIgKiA0ICsgMF07XG4gICAgdmFyIG0yMSA9IG1bMiAqIDQgKyAxXTtcbiAgICB2YXIgbTIyID0gbVsyICogNCArIDJdO1xuICAgIHZhciBtMjMgPSBtWzIgKiA0ICsgM107XG4gICAgdmFyIGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG5cbiAgICBkc3RbIDBdID0gYyAqIG0wMCAtIHMgKiBtMjA7XG4gICAgZHN0WyAxXSA9IGMgKiBtMDEgLSBzICogbTIxO1xuICAgIGRzdFsgMl0gPSBjICogbTAyIC0gcyAqIG0yMjtcbiAgICBkc3RbIDNdID0gYyAqIG0wMyAtIHMgKiBtMjM7XG4gICAgZHN0WyA4XSA9IGMgKiBtMjAgKyBzICogbTAwO1xuICAgIGRzdFsgOV0gPSBjICogbTIxICsgcyAqIG0wMTtcbiAgICBkc3RbMTBdID0gYyAqIG0yMiArIHMgKiBtMDI7XG4gICAgZHN0WzExXSA9IGMgKiBtMjMgKyBzICogbTAzO1xuXG4gICAgaWYgKG0gIT09IGRzdCkge1xuICAgICAgZHN0WyA0XSA9IG1bIDRdO1xuICAgICAgZHN0WyA1XSA9IG1bIDVdO1xuICAgICAgZHN0WyA2XSA9IG1bIDZdO1xuICAgICAgZHN0WyA3XSA9IG1bIDddO1xuICAgICAgZHN0WzEyXSA9IG1bMTJdO1xuICAgICAgZHN0WzEzXSA9IG1bMTNdO1xuICAgICAgZHN0WzE0XSA9IG1bMTRdO1xuICAgICAgZHN0WzE1XSA9IG1bMTVdO1xuICAgIH1cblxuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuICAvKipcbiAgICogTWFrZXMgYW4geiByb3RhdGlvbiBtYXRyaXhcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlSW5SYWRpYW5zIGFtb3VudCB0byByb3RhdGVcbiAgICogQHBhcmFtIHtNYXRyaXg0fSBbZHN0XSBvcHRpb25hbCBtYXRyaXggdG8gc3RvcmUgcmVzdWx0XG4gICAqIEByZXR1cm4ge01hdHJpeDR9IGRzdCBvciBhIG5ldyBtYXRyaXggaWYgbm9uZSBwcm92aWRlZFxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG4gIGZ1bmN0aW9uIHpSb3RhdGlvbihhbmdsZUluUmFkaWFucywgZHN0KSB7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuICAgIHZhciBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICAgIHZhciBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuXG4gICAgZHN0WyAwXSA9IGM7XG4gICAgZHN0WyAxXSA9IHM7XG4gICAgZHN0WyAyXSA9IDA7XG4gICAgZHN0WyAzXSA9IDA7XG4gICAgZHN0WyA0XSA9IC1zO1xuICAgIGRzdFsgNV0gPSBjO1xuICAgIGRzdFsgNl0gPSAwO1xuICAgIGRzdFsgN10gPSAwO1xuICAgIGRzdFsgOF0gPSAwO1xuICAgIGRzdFsgOV0gPSAwO1xuICAgIGRzdFsxMF0gPSAxO1xuICAgIGRzdFsxMV0gPSAwO1xuICAgIGRzdFsxMl0gPSAwO1xuICAgIGRzdFsxM10gPSAwO1xuICAgIGRzdFsxNF0gPSAwO1xuICAgIGRzdFsxNV0gPSAxO1xuXG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNdWx0aXBseSBieSBhbiB6IHJvdGF0aW9uIG1hdHJpeFxuICAgKiBAcGFyYW0ge01hdHJpeDR9IG0gbWF0cml4IHRvIG11bHRpcGx5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZUluUmFkaWFucyBhbW91bnQgdG8gcm90YXRlXG4gICAqIEBwYXJhbSB7TWF0cml4NH0gW2RzdF0gb3B0aW9uYWwgbWF0cml4IHRvIHN0b3JlIHJlc3VsdFxuICAgKiBAcmV0dXJuIHtNYXRyaXg0fSBkc3Qgb3IgYSBuZXcgbWF0cml4IGlmIG5vbmUgcHJvdmlkZWRcbiAgICogQG1lbWJlck9mIG1vZHVsZTp3ZWJnbC0zZC1tYXRoXG4gICAqL1xuICBmdW5jdGlvbiB6Um90YXRlKG0sIGFuZ2xlSW5SYWRpYW5zLCBkc3QpIHtcbiAgICAvLyBUaGlzIGlzIHRoZSBvcHRpbWl6ZWQgdmVyaXNvbiBvZlxuICAgIC8vIHJldHVybiBtdWx0aXBseShtLCB6Um90YXRpb24oYW5nbGVJblJhZGlhbnMpLCBkc3QpO1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgRmxvYXQzMkFycmF5KDE2KTtcblxuICAgIHZhciBtMDAgPSBtWzAgKiA0ICsgMF07XG4gICAgdmFyIG0wMSA9IG1bMCAqIDQgKyAxXTtcbiAgICB2YXIgbTAyID0gbVswICogNCArIDJdO1xuICAgIHZhciBtMDMgPSBtWzAgKiA0ICsgM107XG4gICAgdmFyIG0xMCA9IG1bMSAqIDQgKyAwXTtcbiAgICB2YXIgbTExID0gbVsxICogNCArIDFdO1xuICAgIHZhciBtMTIgPSBtWzEgKiA0ICsgMl07XG4gICAgdmFyIG0xMyA9IG1bMSAqIDQgKyAzXTtcbiAgICB2YXIgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICB2YXIgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcblxuICAgIGRzdFsgMF0gPSBjICogbTAwICsgcyAqIG0xMDtcbiAgICBkc3RbIDFdID0gYyAqIG0wMSArIHMgKiBtMTE7XG4gICAgZHN0WyAyXSA9IGMgKiBtMDIgKyBzICogbTEyO1xuICAgIGRzdFsgM10gPSBjICogbTAzICsgcyAqIG0xMztcbiAgICBkc3RbIDRdID0gYyAqIG0xMCAtIHMgKiBtMDA7XG4gICAgZHN0WyA1XSA9IGMgKiBtMTEgLSBzICogbTAxO1xuICAgIGRzdFsgNl0gPSBjICogbTEyIC0gcyAqIG0wMjtcbiAgICBkc3RbIDddID0gYyAqIG0xMyAtIHMgKiBtMDM7XG5cbiAgICBpZiAobSAhPT0gZHN0KSB7XG4gICAgICBkc3RbIDhdID0gbVsgOF07XG4gICAgICBkc3RbIDldID0gbVsgOV07XG4gICAgICBkc3RbMTBdID0gbVsxMF07XG4gICAgICBkc3RbMTFdID0gbVsxMV07XG4gICAgICBkc3RbMTJdID0gbVsxMl07XG4gICAgICBkc3RbMTNdID0gbVsxM107XG4gICAgICBkc3RbMTRdID0gbVsxNF07XG4gICAgICBkc3RbMTVdID0gbVsxNV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlcyBhbiByb3RhdGlvbiBtYXRyaXggYXJvdW5kIGFuIGFyYml0cmFyeSBheGlzXG4gICAqIEBwYXJhbSB7VmVjdG9yM30gYXhpcyBheGlzIHRvIHJvdGF0ZSBhcm91bmRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlSW5SYWRpYW5zIGFtb3VudCB0byByb3RhdGVcbiAgICogQHBhcmFtIHtNYXRyaXg0fSBbZHN0XSBvcHRpb25hbCBtYXRyaXggdG8gc3RvcmUgcmVzdWx0XG4gICAqIEByZXR1cm4ge01hdHJpeDR9IGRzdCBvciBhIG5ldyBtYXRyaXggaWYgbm9uZSBwcm92aWRlZFxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG4gIGZ1bmN0aW9uIGF4aXNSb3RhdGlvbihheGlzLCBhbmdsZUluUmFkaWFucywgZHN0KSB7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuXG4gICAgdmFyIHggPSBheGlzWzBdO1xuICAgIHZhciB5ID0gYXhpc1sxXTtcbiAgICB2YXIgeiA9IGF4aXNbMl07XG4gICAgdmFyIG4gPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KTtcbiAgICB4IC89IG47XG4gICAgeSAvPSBuO1xuICAgIHogLz0gbjtcbiAgICB2YXIgeHggPSB4ICogeDtcbiAgICB2YXIgeXkgPSB5ICogeTtcbiAgICB2YXIgenogPSB6ICogejtcbiAgICB2YXIgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICB2YXIgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICB2YXIgb25lTWludXNDb3NpbmUgPSAxIC0gYztcblxuICAgIGRzdFsgMF0gPSB4eCArICgxIC0geHgpICogYztcbiAgICBkc3RbIDFdID0geCAqIHkgKiBvbmVNaW51c0Nvc2luZSArIHogKiBzO1xuICAgIGRzdFsgMl0gPSB4ICogeiAqIG9uZU1pbnVzQ29zaW5lIC0geSAqIHM7XG4gICAgZHN0WyAzXSA9IDA7XG4gICAgZHN0WyA0XSA9IHggKiB5ICogb25lTWludXNDb3NpbmUgLSB6ICogcztcbiAgICBkc3RbIDVdID0geXkgKyAoMSAtIHl5KSAqIGM7XG4gICAgZHN0WyA2XSA9IHkgKiB6ICogb25lTWludXNDb3NpbmUgKyB4ICogcztcbiAgICBkc3RbIDddID0gMDtcbiAgICBkc3RbIDhdID0geCAqIHogKiBvbmVNaW51c0Nvc2luZSArIHkgKiBzO1xuICAgIGRzdFsgOV0gPSB5ICogeiAqIG9uZU1pbnVzQ29zaW5lIC0geCAqIHM7XG4gICAgZHN0WzEwXSA9IHp6ICsgKDEgLSB6eikgKiBjO1xuICAgIGRzdFsxMV0gPSAwO1xuICAgIGRzdFsxMl0gPSAwO1xuICAgIGRzdFsxM10gPSAwO1xuICAgIGRzdFsxNF0gPSAwO1xuICAgIGRzdFsxNV0gPSAxO1xuXG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNdWx0aXBseSBieSBhbiBheGlzIHJvdGF0aW9uIG1hdHJpeFxuICAgKiBAcGFyYW0ge01hdHJpeDR9IG0gbWF0cml4IHRvIG11bHRpcGx5XG4gICAqIEBwYXJhbSB7VmVjdG9yM30gYXhpcyBheGlzIHRvIHJvdGF0ZSBhcm91bmRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlSW5SYWRpYW5zIGFtb3VudCB0byByb3RhdGVcbiAgICogQHBhcmFtIHtNYXRyaXg0fSBbZHN0XSBvcHRpb25hbCBtYXRyaXggdG8gc3RvcmUgcmVzdWx0XG4gICAqIEByZXR1cm4ge01hdHJpeDR9IGRzdCBvciBhIG5ldyBtYXRyaXggaWYgbm9uZSBwcm92aWRlZFxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG4gIGZ1bmN0aW9uIGF4aXNSb3RhdGUobSwgYXhpcywgYW5nbGVJblJhZGlhbnMsIGRzdCkge1xuICAgIC8vIFRoaXMgaXMgdGhlIG9wdGltaXplZCB2ZXJpc29uIG9mXG4gICAgLy8gcmV0dXJuIG11bHRpcGx5KG0sIGF4aXNSb3RhdGlvbihheGlzLCBhbmdsZUluUmFkaWFucyksIGRzdCk7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuXG4gICAgdmFyIHggPSBheGlzWzBdO1xuICAgIHZhciB5ID0gYXhpc1sxXTtcbiAgICB2YXIgeiA9IGF4aXNbMl07XG4gICAgdmFyIG4gPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KTtcbiAgICB4IC89IG47XG4gICAgeSAvPSBuO1xuICAgIHogLz0gbjtcbiAgICB2YXIgeHggPSB4ICogeDtcbiAgICB2YXIgeXkgPSB5ICogeTtcbiAgICB2YXIgenogPSB6ICogejtcbiAgICB2YXIgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICB2YXIgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICB2YXIgb25lTWludXNDb3NpbmUgPSAxIC0gYztcblxuICAgIHZhciByMDAgPSB4eCArICgxIC0geHgpICogYztcbiAgICB2YXIgcjAxID0geCAqIHkgKiBvbmVNaW51c0Nvc2luZSArIHogKiBzO1xuICAgIHZhciByMDIgPSB4ICogeiAqIG9uZU1pbnVzQ29zaW5lIC0geSAqIHM7XG4gICAgdmFyIHIxMCA9IHggKiB5ICogb25lTWludXNDb3NpbmUgLSB6ICogcztcbiAgICB2YXIgcjExID0geXkgKyAoMSAtIHl5KSAqIGM7XG4gICAgdmFyIHIxMiA9IHkgKiB6ICogb25lTWludXNDb3NpbmUgKyB4ICogcztcbiAgICB2YXIgcjIwID0geCAqIHogKiBvbmVNaW51c0Nvc2luZSArIHkgKiBzO1xuICAgIHZhciByMjEgPSB5ICogeiAqIG9uZU1pbnVzQ29zaW5lIC0geCAqIHM7XG4gICAgdmFyIHIyMiA9IHp6ICsgKDEgLSB6eikgKiBjO1xuXG4gICAgdmFyIG0wMCA9IG1bMF07XG4gICAgdmFyIG0wMSA9IG1bMV07XG4gICAgdmFyIG0wMiA9IG1bMl07XG4gICAgdmFyIG0wMyA9IG1bM107XG4gICAgdmFyIG0xMCA9IG1bNF07XG4gICAgdmFyIG0xMSA9IG1bNV07XG4gICAgdmFyIG0xMiA9IG1bNl07XG4gICAgdmFyIG0xMyA9IG1bN107XG4gICAgdmFyIG0yMCA9IG1bOF07XG4gICAgdmFyIG0yMSA9IG1bOV07XG4gICAgdmFyIG0yMiA9IG1bMTBdO1xuICAgIHZhciBtMjMgPSBtWzExXTtcblxuICAgIGRzdFsgMF0gPSByMDAgKiBtMDAgKyByMDEgKiBtMTAgKyByMDIgKiBtMjA7XG4gICAgZHN0WyAxXSA9IHIwMCAqIG0wMSArIHIwMSAqIG0xMSArIHIwMiAqIG0yMTtcbiAgICBkc3RbIDJdID0gcjAwICogbTAyICsgcjAxICogbTEyICsgcjAyICogbTIyO1xuICAgIGRzdFsgM10gPSByMDAgKiBtMDMgKyByMDEgKiBtMTMgKyByMDIgKiBtMjM7XG4gICAgZHN0WyA0XSA9IHIxMCAqIG0wMCArIHIxMSAqIG0xMCArIHIxMiAqIG0yMDtcbiAgICBkc3RbIDVdID0gcjEwICogbTAxICsgcjExICogbTExICsgcjEyICogbTIxO1xuICAgIGRzdFsgNl0gPSByMTAgKiBtMDIgKyByMTEgKiBtMTIgKyByMTIgKiBtMjI7XG4gICAgZHN0WyA3XSA9IHIxMCAqIG0wMyArIHIxMSAqIG0xMyArIHIxMiAqIG0yMztcbiAgICBkc3RbIDhdID0gcjIwICogbTAwICsgcjIxICogbTEwICsgcjIyICogbTIwO1xuICAgIGRzdFsgOV0gPSByMjAgKiBtMDEgKyByMjEgKiBtMTEgKyByMjIgKiBtMjE7XG4gICAgZHN0WzEwXSA9IHIyMCAqIG0wMiArIHIyMSAqIG0xMiArIHIyMiAqIG0yMjtcbiAgICBkc3RbMTFdID0gcjIwICogbTAzICsgcjIxICogbTEzICsgcjIyICogbTIzO1xuXG4gICAgaWYgKG0gIT09IGRzdCkge1xuICAgICAgZHN0WzEyXSA9IG1bMTJdO1xuICAgICAgZHN0WzEzXSA9IG1bMTNdO1xuICAgICAgZHN0WzE0XSA9IG1bMTRdO1xuICAgICAgZHN0WzE1XSA9IG1bMTVdO1xuICAgIH1cblxuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuICAvKipcbiAgICogTWFrZXMgYSBzY2FsZSBtYXRyaXhcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN4IHggc2NhbGUuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzeSB5IHNjYWxlLlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3ogeiBzY2FsZS5cbiAgICogQHBhcmFtIHtNYXRyaXg0fSBbZHN0XSBvcHRpb25hbCBtYXRyaXggdG8gc3RvcmUgcmVzdWx0XG4gICAqIEByZXR1cm4ge01hdHJpeDR9IGRzdCBvciBhIG5ldyBtYXRyaXggaWYgbm9uZSBwcm92aWRlZFxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG4gIGZ1bmN0aW9uIHNjYWxpbmcoc3gsIHN5LCBzeiwgZHN0KSB7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuXG4gICAgZHN0WyAwXSA9IHN4O1xuICAgIGRzdFsgMV0gPSAwO1xuICAgIGRzdFsgMl0gPSAwO1xuICAgIGRzdFsgM10gPSAwO1xuICAgIGRzdFsgNF0gPSAwO1xuICAgIGRzdFsgNV0gPSBzeTtcbiAgICBkc3RbIDZdID0gMDtcbiAgICBkc3RbIDddID0gMDtcbiAgICBkc3RbIDhdID0gMDtcbiAgICBkc3RbIDldID0gMDtcbiAgICBkc3RbMTBdID0gc3o7XG4gICAgZHN0WzExXSA9IDA7XG4gICAgZHN0WzEyXSA9IDA7XG4gICAgZHN0WzEzXSA9IDA7XG4gICAgZHN0WzE0XSA9IDA7XG4gICAgZHN0WzE1XSA9IDE7XG5cbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgLyoqXG4gICAqIE11bHRpcGx5IGJ5IGEgc2NhbGluZyBtYXRyaXhcbiAgICogQHBhcmFtIHtNYXRyaXg0fSBtIG1hdHJpeCB0byBtdWx0aXBseVxuICAgKiBAcGFyYW0ge251bWJlcn0gc3ggeCBzY2FsZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHN5IHkgc2NhbGUuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzeiB6IHNjYWxlLlxuICAgKiBAcGFyYW0ge01hdHJpeDR9IFtkc3RdIG9wdGlvbmFsIG1hdHJpeCB0byBzdG9yZSByZXN1bHRcbiAgICogQHJldHVybiB7TWF0cml4NH0gZHN0IG9yIGEgbmV3IG1hdHJpeCBpZiBub25lIHByb3ZpZGVkXG4gICAqIEBtZW1iZXJPZiBtb2R1bGU6d2ViZ2wtM2QtbWF0aFxuICAgKi9cbiAgZnVuY3Rpb24gc2NhbGUobSwgc3gsIHN5LCBzeiwgZHN0KSB7XG4gICAgLy8gVGhpcyBpcyB0aGUgb3B0aW1pemVkIHZlcmlzb24gb2ZcbiAgICAvLyByZXR1cm4gbXVsdGlwbHkobSwgc2NhbGluZyhzeCwgc3ksIHN6KSwgZHN0KTtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IEZsb2F0MzJBcnJheSgxNik7XG5cbiAgICBkc3RbIDBdID0gc3ggKiBtWzAgKiA0ICsgMF07XG4gICAgZHN0WyAxXSA9IHN4ICogbVswICogNCArIDFdO1xuICAgIGRzdFsgMl0gPSBzeCAqIG1bMCAqIDQgKyAyXTtcbiAgICBkc3RbIDNdID0gc3ggKiBtWzAgKiA0ICsgM107XG4gICAgZHN0WyA0XSA9IHN5ICogbVsxICogNCArIDBdO1xuICAgIGRzdFsgNV0gPSBzeSAqIG1bMSAqIDQgKyAxXTtcbiAgICBkc3RbIDZdID0gc3kgKiBtWzEgKiA0ICsgMl07XG4gICAgZHN0WyA3XSA9IHN5ICogbVsxICogNCArIDNdO1xuICAgIGRzdFsgOF0gPSBzeiAqIG1bMiAqIDQgKyAwXTtcbiAgICBkc3RbIDldID0gc3ogKiBtWzIgKiA0ICsgMV07XG4gICAgZHN0WzEwXSA9IHN6ICogbVsyICogNCArIDJdO1xuICAgIGRzdFsxMV0gPSBzeiAqIG1bMiAqIDQgKyAzXTtcblxuICAgIGlmIChtICE9PSBkc3QpIHtcbiAgICAgIGRzdFsxMl0gPSBtWzEyXTtcbiAgICAgIGRzdFsxM10gPSBtWzEzXTtcbiAgICAgIGRzdFsxNF0gPSBtWzE0XTtcbiAgICAgIGRzdFsxNV0gPSBtWzE1XTtcbiAgICB9XG5cbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgLyoqXG4gICAqIGNyZWF0ZXMgYSBtYXRyaXggZnJvbSB0cmFuc2xhdGlvbiwgcXVhdGVybmlvbiwgc2NhbGVcbiAgICogQHBhcmFtIHtOdW1iZXJbXX0gdHJhbnNsYXRpb24gW3gsIHksIHpdIHRyYW5zbGF0aW9uXG4gICAqIEBwYXJhbSB7TnVtYmVyW119IHF1YXRlcm5pb24gW3gsIHksIHosIHpdIHF1YXRlcm5pb24gcm90YXRpb25cbiAgICogQHBhcmFtIHtOdW1iZXJbXX0gc2NhbGUgW3gsIHksIHpdIHNjYWxlXG4gICAqIEBwYXJhbSB7TWF0cml4NH0gW2RzdF0gb3B0aW9uYWwgbWF0cml4IHRvIHN0b3JlIHJlc3VsdFxuICAgKiBAcmV0dXJuIHtNYXRyaXg0fSBkc3Qgb3IgYSBuZXcgbWF0cml4IGlmIG5vbmUgcHJvdmlkZWRcbiAgICovXG4gIGZ1bmN0aW9uIGNvbXBvc2UodHJhbnNsYXRpb24sIHF1YXRlcm5pb24sIHNjYWxlLCBkc3QpIHtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IEZsb2F0MzJBcnJheSgxNik7XG5cbiAgICBjb25zdCB4ID0gcXVhdGVybmlvblswXTtcbiAgICBjb25zdCB5ID0gcXVhdGVybmlvblsxXTtcbiAgICBjb25zdCB6ID0gcXVhdGVybmlvblsyXTtcbiAgICBjb25zdCB3ID0gcXVhdGVybmlvblszXTtcblxuICAgIGNvbnN0IHgyID0geCArIHg7XG4gICAgY29uc3QgeTIgPSB5ICsgeTtcbiAgICBjb25zdCB6MiA9IHogKyB6O1xuXG4gICAgY29uc3QgeHggPSB4ICogeDI7XG4gICAgY29uc3QgeHkgPSB4ICogeTI7XG4gICAgY29uc3QgeHogPSB4ICogejI7XG5cbiAgICBjb25zdCB5eSA9IHkgKiB5MjtcbiAgICBjb25zdCB5eiA9IHkgKiB6MjtcbiAgICBjb25zdCB6eiA9IHogKiB6MjtcblxuICAgIGNvbnN0IHd4ID0gdyAqIHgyO1xuICAgIGNvbnN0IHd5ID0gdyAqIHkyO1xuICAgIGNvbnN0IHd6ID0gdyAqIHoyO1xuXG4gICAgY29uc3Qgc3ggPSBzY2FsZVswXTtcbiAgICBjb25zdCBzeSA9IHNjYWxlWzFdO1xuICAgIGNvbnN0IHN6ID0gc2NhbGVbMl07XG5cbiAgICBkc3RbMF0gPSAoMSAtICh5eSArIHp6KSkgKiBzeDtcbiAgICBkc3RbMV0gPSAoeHkgKyB3eikgKiBzeDtcbiAgICBkc3RbMl0gPSAoeHogLSB3eSkgKiBzeDtcbiAgICBkc3RbM10gPSAwO1xuXG4gICAgZHN0WzRdID0gKHh5IC0gd3opICogc3k7XG4gICAgZHN0WzVdID0gKDEgLSAoeHggKyB6eikpICogc3k7XG4gICAgZHN0WzZdID0gKHl6ICsgd3gpICogc3k7XG4gICAgZHN0WzddID0gMDtcblxuICAgIGRzdFsgOF0gPSAoeHogKyB3eSkgKiBzejtcbiAgICBkc3RbIDldID0gKHl6IC0gd3gpICogc3o7XG4gICAgZHN0WzEwXSA9ICgxIC0gKHh4ICsgeXkpKSAqIHN6O1xuICAgIGRzdFsxMV0gPSAwO1xuXG4gICAgZHN0WzEyXSA9IHRyYW5zbGF0aW9uWzBdO1xuICAgIGRzdFsxM10gPSB0cmFuc2xhdGlvblsxXTtcbiAgICBkc3RbMTRdID0gdHJhbnNsYXRpb25bMl07XG4gICAgZHN0WzE1XSA9IDE7XG5cbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgZnVuY3Rpb24gcXVhdEZyb21Sb3RhdGlvbk1hdHJpeChtLCBkc3QpIHtcbiAgICAvLyBodHRwOi8vd3d3LmV1Y2xpZGVhbnNwYWNlLmNvbS9tYXRocy9nZW9tZXRyeS9yb3RhdGlvbnMvY29udmVyc2lvbnMvbWF0cml4VG9RdWF0ZXJuaW9uL2luZGV4Lmh0bVxuXG4gICAgLy8gYXNzdW1lcyB0aGUgdXBwZXIgM3gzIG9mIG0gaXMgYSBwdXJlIHJvdGF0aW9uIG1hdHJpeCAoaS5lLCB1bnNjYWxlZClcbiAgICBjb25zdCBtMTEgPSBtWzBdO1xuICAgIGNvbnN0IG0xMiA9IG1bNF07XG4gICAgY29uc3QgbTEzID0gbVs4XTtcbiAgICBjb25zdCBtMjEgPSBtWzFdO1xuICAgIGNvbnN0IG0yMiA9IG1bNV07XG4gICAgY29uc3QgbTIzID0gbVs5XTtcbiAgICBjb25zdCBtMzEgPSBtWzJdO1xuICAgIGNvbnN0IG0zMiA9IG1bNl07XG4gICAgY29uc3QgbTMzID0gbVsxMF07XG5cbiAgICBjb25zdCB0cmFjZSA9IG0xMSArIG0yMiArIG0zMztcblxuICAgIGlmICh0cmFjZSA+IDApIHtcbiAgICAgIGNvbnN0IHMgPSAwLjUgLyBNYXRoLnNxcnQodHJhY2UgKyAxKTtcbiAgICAgIGRzdFszXSA9IDAuMjUgLyBzO1xuICAgICAgZHN0WzBdID0gKG0zMiAtIG0yMykgKiBzO1xuICAgICAgZHN0WzFdID0gKG0xMyAtIG0zMSkgKiBzO1xuICAgICAgZHN0WzJdID0gKG0yMSAtIG0xMikgKiBzO1xuICAgIH0gZWxzZSBpZiAobTExID4gbTIyICYmIG0xMSA+IG0zMykge1xuICAgICAgY29uc3QgcyA9IDIgKiBNYXRoLnNxcnQoMSArIG0xMSAtIG0yMiAtIG0zMyk7XG4gICAgICBkc3RbM10gPSAobTMyIC0gbTIzKSAvIHM7XG4gICAgICBkc3RbMF0gPSAwLjI1ICogcztcbiAgICAgIGRzdFsxXSA9IChtMTIgKyBtMjEpIC8gcztcbiAgICAgIGRzdFsyXSA9IChtMTMgKyBtMzEpIC8gcztcbiAgICB9IGVsc2UgaWYgKG0yMiA+IG0zMykge1xuICAgICAgY29uc3QgcyA9IDIgKiBNYXRoLnNxcnQoMSArIG0yMiAtIG0xMSAtIG0zMyk7XG4gICAgICBkc3RbM10gPSAobTEzIC0gbTMxKSAvIHM7XG4gICAgICBkc3RbMF0gPSAobTEyICsgbTIxKSAvIHM7XG4gICAgICBkc3RbMV0gPSAwLjI1ICogcztcbiAgICAgIGRzdFsyXSA9IChtMjMgKyBtMzIpIC8gcztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcyA9IDIgKiBNYXRoLnNxcnQoMSArIG0zMyAtIG0xMSAtIG0yMik7XG4gICAgICBkc3RbM10gPSAobTIxIC0gbTEyKSAvIHM7XG4gICAgICBkc3RbMF0gPSAobTEzICsgbTMxKSAvIHM7XG4gICAgICBkc3RbMV0gPSAobTIzICsgbTMyKSAvIHM7XG4gICAgICBkc3RbMl0gPSAwLjI1ICogcztcbiAgICB9XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGRlY29tcG9zZShtYXQsIHRyYW5zbGF0aW9uLCBxdWF0ZXJuaW9uLCBzY2FsZSkge1xuICAgIGxldCBzeCA9IGxlbmd0aChtYXQuc2xpY2UoMCwgMykpO1xuICAgIGNvbnN0IHN5ID0gbGVuZ3RoKG1hdC5zbGljZSg0LCA3KSk7XG4gICAgY29uc3Qgc3ogPSBsZW5ndGgobWF0LnNsaWNlKDgsIDExKSk7XG5cbiAgICAvLyBpZiBkZW1hdHJtaW5lIGlzIG5lZ2F0aXZlLCB3ZSBuZWVkIHRvIGludmVydCBvbmUgc2NhbGVcbiAgICBjb25zdCBkZXQgPSBkZXRlcm1pbmF0ZShtYXQpO1xuICAgIGlmIChkZXQgPCAwKSB7XG4gICAgICBzeCA9IC1zeDtcbiAgICB9XG5cbiAgICB0cmFuc2xhdGlvblswXSA9IG1hdFsxMl07XG4gICAgdHJhbnNsYXRpb25bMV0gPSBtYXRbMTNdO1xuICAgIHRyYW5zbGF0aW9uWzJdID0gbWF0WzE0XTtcblxuICAgIC8vIHNjYWxlIHRoZSByb3RhdGlvbiBwYXJ0XG4gICAgY29uc3QgbWF0cml4ID0gY29weShtYXQpO1xuXG4gICAgY29uc3QgaW52U1ggPSAxIC8gc3g7XG4gICAgY29uc3QgaW52U1kgPSAxIC8gc3k7XG4gICAgY29uc3QgaW52U1ogPSAxIC8gc3o7XG5cbiAgICBtYXRyaXhbMF0gKj0gaW52U1g7XG4gICAgbWF0cml4WzFdICo9IGludlNYO1xuICAgIG1hdHJpeFsyXSAqPSBpbnZTWDtcblxuICAgIG1hdHJpeFs0XSAqPSBpbnZTWTtcbiAgICBtYXRyaXhbNV0gKj0gaW52U1k7XG4gICAgbWF0cml4WzZdICo9IGludlNZO1xuXG4gICAgbWF0cml4WzhdICo9IGludlNaO1xuICAgIG1hdHJpeFs5XSAqPSBpbnZTWjtcbiAgICBtYXRyaXhbMTBdICo9IGludlNaO1xuXG4gICAgcXVhdEZyb21Sb3RhdGlvbk1hdHJpeChtYXRyaXgsIHF1YXRlcm5pb24pO1xuXG4gICAgc2NhbGVbMF0gPSBzeDtcbiAgICBzY2FsZVsxXSA9IHN5O1xuICAgIHNjYWxlWzJdID0gc3o7XG4gIH1cblxuICBmdW5jdGlvbiBkZXRlcm1pbmF0ZShtKSB7XG4gICAgdmFyIG0wMCA9IG1bMCAqIDQgKyAwXTtcbiAgICB2YXIgbTAxID0gbVswICogNCArIDFdO1xuICAgIHZhciBtMDIgPSBtWzAgKiA0ICsgMl07XG4gICAgdmFyIG0wMyA9IG1bMCAqIDQgKyAzXTtcbiAgICB2YXIgbTEwID0gbVsxICogNCArIDBdO1xuICAgIHZhciBtMTEgPSBtWzEgKiA0ICsgMV07XG4gICAgdmFyIG0xMiA9IG1bMSAqIDQgKyAyXTtcbiAgICB2YXIgbTEzID0gbVsxICogNCArIDNdO1xuICAgIHZhciBtMjAgPSBtWzIgKiA0ICsgMF07XG4gICAgdmFyIG0yMSA9IG1bMiAqIDQgKyAxXTtcbiAgICB2YXIgbTIyID0gbVsyICogNCArIDJdO1xuICAgIHZhciBtMjMgPSBtWzIgKiA0ICsgM107XG4gICAgdmFyIG0zMCA9IG1bMyAqIDQgKyAwXTtcbiAgICB2YXIgbTMxID0gbVszICogNCArIDFdO1xuICAgIHZhciBtMzIgPSBtWzMgKiA0ICsgMl07XG4gICAgdmFyIG0zMyA9IG1bMyAqIDQgKyAzXTtcbiAgICB2YXIgdG1wXzAgID0gbTIyICogbTMzO1xuICAgIHZhciB0bXBfMSAgPSBtMzIgKiBtMjM7XG4gICAgdmFyIHRtcF8yICA9IG0xMiAqIG0zMztcbiAgICB2YXIgdG1wXzMgID0gbTMyICogbTEzO1xuICAgIHZhciB0bXBfNCAgPSBtMTIgKiBtMjM7XG4gICAgdmFyIHRtcF81ICA9IG0yMiAqIG0xMztcbiAgICB2YXIgdG1wXzYgID0gbTAyICogbTMzO1xuICAgIHZhciB0bXBfNyAgPSBtMzIgKiBtMDM7XG4gICAgdmFyIHRtcF84ICA9IG0wMiAqIG0yMztcbiAgICB2YXIgdG1wXzkgID0gbTIyICogbTAzO1xuICAgIHZhciB0bXBfMTAgPSBtMDIgKiBtMTM7XG4gICAgdmFyIHRtcF8xMSA9IG0xMiAqIG0wMztcbiAgICB2YXIgdG1wXzEyID0gbTIwICogbTMxO1xuICAgIHZhciB0bXBfMTMgPSBtMzAgKiBtMjE7XG4gICAgdmFyIHRtcF8xNCA9IG0xMCAqIG0zMTtcbiAgICB2YXIgdG1wXzE1ID0gbTMwICogbTExO1xuICAgIHZhciB0bXBfMTYgPSBtMTAgKiBtMjE7XG4gICAgdmFyIHRtcF8xNyA9IG0yMCAqIG0xMTtcbiAgICB2YXIgdG1wXzE4ID0gbTAwICogbTMxO1xuICAgIHZhciB0bXBfMTkgPSBtMzAgKiBtMDE7XG4gICAgdmFyIHRtcF8yMCA9IG0wMCAqIG0yMTtcbiAgICB2YXIgdG1wXzIxID0gbTIwICogbTAxO1xuICAgIHZhciB0bXBfMjIgPSBtMDAgKiBtMTE7XG4gICAgdmFyIHRtcF8yMyA9IG0xMCAqIG0wMTtcblxuICAgIHZhciB0MCA9ICh0bXBfMCAqIG0xMSArIHRtcF8zICogbTIxICsgdG1wXzQgKiBtMzEpIC1cbiAgICAgICAgKHRtcF8xICogbTExICsgdG1wXzIgKiBtMjEgKyB0bXBfNSAqIG0zMSk7XG4gICAgdmFyIHQxID0gKHRtcF8xICogbTAxICsgdG1wXzYgKiBtMjEgKyB0bXBfOSAqIG0zMSkgLVxuICAgICAgICAodG1wXzAgKiBtMDEgKyB0bXBfNyAqIG0yMSArIHRtcF84ICogbTMxKTtcbiAgICB2YXIgdDIgPSAodG1wXzIgKiBtMDEgKyB0bXBfNyAqIG0xMSArIHRtcF8xMCAqIG0zMSkgLVxuICAgICAgICAodG1wXzMgKiBtMDEgKyB0bXBfNiAqIG0xMSArIHRtcF8xMSAqIG0zMSk7XG4gICAgdmFyIHQzID0gKHRtcF81ICogbTAxICsgdG1wXzggKiBtMTEgKyB0bXBfMTEgKiBtMjEpIC1cbiAgICAgICAgKHRtcF80ICogbTAxICsgdG1wXzkgKiBtMTEgKyB0bXBfMTAgKiBtMjEpO1xuXG4gICAgcmV0dXJuIDEuMCAvIChtMDAgKiB0MCArIG0xMCAqIHQxICsgbTIwICogdDIgKyBtMzAgKiB0Myk7ICAgIFxuICB9XG5cbiAgLyoqXG4gICAqIENvbXB1dGVzIHRoZSBpbnZlcnNlIG9mIGEgbWF0cml4LlxuICAgKiBAcGFyYW0ge01hdHJpeDR9IG0gbWF0cml4IHRvIGNvbXB1dGUgaW52ZXJzZSBvZlxuICAgKiBAcGFyYW0ge01hdHJpeDR9IFtkc3RdIG9wdGlvbmFsIG1hdHJpeCB0byBzdG9yZSByZXN1bHRcbiAgICogQHJldHVybiB7TWF0cml4NH0gZHN0IG9yIGEgbmV3IG1hdHJpeCBpZiBub25lIHByb3ZpZGVkXG4gICAqIEBtZW1iZXJPZiBtb2R1bGU6d2ViZ2wtM2QtbWF0aFxuICAgKi9cbiAgZnVuY3Rpb24gaW52ZXJzZShtLCBkc3QpIHtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IEZsb2F0MzJBcnJheSgxNik7XG4gICAgdmFyIG0wMCA9IG1bMCAqIDQgKyAwXTtcbiAgICB2YXIgbTAxID0gbVswICogNCArIDFdO1xuICAgIHZhciBtMDIgPSBtWzAgKiA0ICsgMl07XG4gICAgdmFyIG0wMyA9IG1bMCAqIDQgKyAzXTtcbiAgICB2YXIgbTEwID0gbVsxICogNCArIDBdO1xuICAgIHZhciBtMTEgPSBtWzEgKiA0ICsgMV07XG4gICAgdmFyIG0xMiA9IG1bMSAqIDQgKyAyXTtcbiAgICB2YXIgbTEzID0gbVsxICogNCArIDNdO1xuICAgIHZhciBtMjAgPSBtWzIgKiA0ICsgMF07XG4gICAgdmFyIG0yMSA9IG1bMiAqIDQgKyAxXTtcbiAgICB2YXIgbTIyID0gbVsyICogNCArIDJdO1xuICAgIHZhciBtMjMgPSBtWzIgKiA0ICsgM107XG4gICAgdmFyIG0zMCA9IG1bMyAqIDQgKyAwXTtcbiAgICB2YXIgbTMxID0gbVszICogNCArIDFdO1xuICAgIHZhciBtMzIgPSBtWzMgKiA0ICsgMl07XG4gICAgdmFyIG0zMyA9IG1bMyAqIDQgKyAzXTtcbiAgICB2YXIgdG1wXzAgID0gbTIyICogbTMzO1xuICAgIHZhciB0bXBfMSAgPSBtMzIgKiBtMjM7XG4gICAgdmFyIHRtcF8yICA9IG0xMiAqIG0zMztcbiAgICB2YXIgdG1wXzMgID0gbTMyICogbTEzO1xuICAgIHZhciB0bXBfNCAgPSBtMTIgKiBtMjM7XG4gICAgdmFyIHRtcF81ICA9IG0yMiAqIG0xMztcbiAgICB2YXIgdG1wXzYgID0gbTAyICogbTMzO1xuICAgIHZhciB0bXBfNyAgPSBtMzIgKiBtMDM7XG4gICAgdmFyIHRtcF84ICA9IG0wMiAqIG0yMztcbiAgICB2YXIgdG1wXzkgID0gbTIyICogbTAzO1xuICAgIHZhciB0bXBfMTAgPSBtMDIgKiBtMTM7XG4gICAgdmFyIHRtcF8xMSA9IG0xMiAqIG0wMztcbiAgICB2YXIgdG1wXzEyID0gbTIwICogbTMxO1xuICAgIHZhciB0bXBfMTMgPSBtMzAgKiBtMjE7XG4gICAgdmFyIHRtcF8xNCA9IG0xMCAqIG0zMTtcbiAgICB2YXIgdG1wXzE1ID0gbTMwICogbTExO1xuICAgIHZhciB0bXBfMTYgPSBtMTAgKiBtMjE7XG4gICAgdmFyIHRtcF8xNyA9IG0yMCAqIG0xMTtcbiAgICB2YXIgdG1wXzE4ID0gbTAwICogbTMxO1xuICAgIHZhciB0bXBfMTkgPSBtMzAgKiBtMDE7XG4gICAgdmFyIHRtcF8yMCA9IG0wMCAqIG0yMTtcbiAgICB2YXIgdG1wXzIxID0gbTIwICogbTAxO1xuICAgIHZhciB0bXBfMjIgPSBtMDAgKiBtMTE7XG4gICAgdmFyIHRtcF8yMyA9IG0xMCAqIG0wMTtcblxuICAgIHZhciB0MCA9ICh0bXBfMCAqIG0xMSArIHRtcF8zICogbTIxICsgdG1wXzQgKiBtMzEpIC1cbiAgICAgICAgKHRtcF8xICogbTExICsgdG1wXzIgKiBtMjEgKyB0bXBfNSAqIG0zMSk7XG4gICAgdmFyIHQxID0gKHRtcF8xICogbTAxICsgdG1wXzYgKiBtMjEgKyB0bXBfOSAqIG0zMSkgLVxuICAgICAgICAodG1wXzAgKiBtMDEgKyB0bXBfNyAqIG0yMSArIHRtcF84ICogbTMxKTtcbiAgICB2YXIgdDIgPSAodG1wXzIgKiBtMDEgKyB0bXBfNyAqIG0xMSArIHRtcF8xMCAqIG0zMSkgLVxuICAgICAgICAodG1wXzMgKiBtMDEgKyB0bXBfNiAqIG0xMSArIHRtcF8xMSAqIG0zMSk7XG4gICAgdmFyIHQzID0gKHRtcF81ICogbTAxICsgdG1wXzggKiBtMTEgKyB0bXBfMTEgKiBtMjEpIC1cbiAgICAgICAgKHRtcF80ICogbTAxICsgdG1wXzkgKiBtMTEgKyB0bXBfMTAgKiBtMjEpO1xuXG4gICAgdmFyIGQgPSAxLjAgLyAobTAwICogdDAgKyBtMTAgKiB0MSArIG0yMCAqIHQyICsgbTMwICogdDMpO1xuXG4gICAgZHN0WzBdID0gZCAqIHQwO1xuICAgIGRzdFsxXSA9IGQgKiB0MTtcbiAgICBkc3RbMl0gPSBkICogdDI7XG4gICAgZHN0WzNdID0gZCAqIHQzO1xuICAgIGRzdFs0XSA9IGQgKiAoKHRtcF8xICogbTEwICsgdG1wXzIgKiBtMjAgKyB0bXBfNSAqIG0zMCkgLVxuICAgICAgICAgICh0bXBfMCAqIG0xMCArIHRtcF8zICogbTIwICsgdG1wXzQgKiBtMzApKTtcbiAgICBkc3RbNV0gPSBkICogKCh0bXBfMCAqIG0wMCArIHRtcF83ICogbTIwICsgdG1wXzggKiBtMzApIC1cbiAgICAgICAgICAodG1wXzEgKiBtMDAgKyB0bXBfNiAqIG0yMCArIHRtcF85ICogbTMwKSk7XG4gICAgZHN0WzZdID0gZCAqICgodG1wXzMgKiBtMDAgKyB0bXBfNiAqIG0xMCArIHRtcF8xMSAqIG0zMCkgLVxuICAgICAgICAgICh0bXBfMiAqIG0wMCArIHRtcF83ICogbTEwICsgdG1wXzEwICogbTMwKSk7XG4gICAgZHN0WzddID0gZCAqICgodG1wXzQgKiBtMDAgKyB0bXBfOSAqIG0xMCArIHRtcF8xMCAqIG0yMCkgLVxuICAgICAgICAgICh0bXBfNSAqIG0wMCArIHRtcF84ICogbTEwICsgdG1wXzExICogbTIwKSk7XG4gICAgZHN0WzhdID0gZCAqICgodG1wXzEyICogbTEzICsgdG1wXzE1ICogbTIzICsgdG1wXzE2ICogbTMzKSAtXG4gICAgICAgICAgKHRtcF8xMyAqIG0xMyArIHRtcF8xNCAqIG0yMyArIHRtcF8xNyAqIG0zMykpO1xuICAgIGRzdFs5XSA9IGQgKiAoKHRtcF8xMyAqIG0wMyArIHRtcF8xOCAqIG0yMyArIHRtcF8yMSAqIG0zMykgLVxuICAgICAgICAgICh0bXBfMTIgKiBtMDMgKyB0bXBfMTkgKiBtMjMgKyB0bXBfMjAgKiBtMzMpKTtcbiAgICBkc3RbMTBdID0gZCAqICgodG1wXzE0ICogbTAzICsgdG1wXzE5ICogbTEzICsgdG1wXzIyICogbTMzKSAtXG4gICAgICAgICAgKHRtcF8xNSAqIG0wMyArIHRtcF8xOCAqIG0xMyArIHRtcF8yMyAqIG0zMykpO1xuICAgIGRzdFsxMV0gPSBkICogKCh0bXBfMTcgKiBtMDMgKyB0bXBfMjAgKiBtMTMgKyB0bXBfMjMgKiBtMjMpIC1cbiAgICAgICAgICAodG1wXzE2ICogbTAzICsgdG1wXzIxICogbTEzICsgdG1wXzIyICogbTIzKSk7XG4gICAgZHN0WzEyXSA9IGQgKiAoKHRtcF8xNCAqIG0yMiArIHRtcF8xNyAqIG0zMiArIHRtcF8xMyAqIG0xMikgLVxuICAgICAgICAgICh0bXBfMTYgKiBtMzIgKyB0bXBfMTIgKiBtMTIgKyB0bXBfMTUgKiBtMjIpKTtcbiAgICBkc3RbMTNdID0gZCAqICgodG1wXzIwICogbTMyICsgdG1wXzEyICogbTAyICsgdG1wXzE5ICogbTIyKSAtXG4gICAgICAgICAgKHRtcF8xOCAqIG0yMiArIHRtcF8yMSAqIG0zMiArIHRtcF8xMyAqIG0wMikpO1xuICAgIGRzdFsxNF0gPSBkICogKCh0bXBfMTggKiBtMTIgKyB0bXBfMjMgKiBtMzIgKyB0bXBfMTUgKiBtMDIpIC1cbiAgICAgICAgICAodG1wXzIyICogbTMyICsgdG1wXzE0ICogbTAyICsgdG1wXzE5ICogbTEyKSk7XG4gICAgZHN0WzE1XSA9IGQgKiAoKHRtcF8yMiAqIG0yMiArIHRtcF8xNiAqIG0wMiArIHRtcF8yMSAqIG0xMikgLVxuICAgICAgICAgICh0bXBfMjAgKiBtMTIgKyB0bXBfMjMgKiBtMjIgKyB0bXBfMTcgKiBtMDIpKTtcblxuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuICAvKipcbiAgICogVGFrZXMgYSAgbWF0cml4IGFuZCBhIHZlY3RvciB3aXRoIDQgZW50cmllcywgdHJhbnNmb3JtcyB0aGF0IHZlY3RvciBieVxuICAgKiB0aGUgbWF0cml4LCBhbmQgcmV0dXJucyB0aGUgcmVzdWx0IGFzIGEgdmVjdG9yIHdpdGggNCBlbnRyaWVzLlxuICAgKiBAcGFyYW0ge01hdHJpeDR9IG0gVGhlIG1hdHJpeC5cbiAgICogQHBhcmFtIHtWZWN0b3I0fSB2IFRoZSBwb2ludCBpbiBob21vZ2Vub3VzIGNvb3JkaW5hdGVzLlxuICAgKiBAcGFyYW0ge1ZlY3RvcjR9IGRzdCBvcHRpb25hbCB2ZWN0b3I0IHRvIHN0b3JlIHJlc3VsdFxuICAgKiBAcmV0dXJuIHtWZWN0b3I0fSBkc3Qgb3IgbmV3IFZlY3RvcjQgaWYgbm90IHByb3ZpZGVkXG4gICAqIEBtZW1iZXJPZiBtb2R1bGU6d2ViZ2wtM2QtbWF0aFxuICAgKi9cbiAgZnVuY3Rpb24gdHJhbnNmb3JtVmVjdG9yKG0sIHYsIGRzdCkge1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgRmxvYXQzMkFycmF5KDQpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNDsgKytpKSB7XG4gICAgICBkc3RbaV0gPSAwLjA7XG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDQ7ICsraikge1xuICAgICAgICBkc3RbaV0gKz0gdltqXSAqIG1baiAqIDQgKyBpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUYWtlcyBhIDQtYnktNCBtYXRyaXggYW5kIGEgdmVjdG9yIHdpdGggMyBlbnRyaWVzLFxuICAgKiBpbnRlcnByZXRzIHRoZSB2ZWN0b3IgYXMgYSBwb2ludCwgdHJhbnNmb3JtcyB0aGF0IHBvaW50IGJ5IHRoZSBtYXRyaXgsIGFuZFxuICAgKiByZXR1cm5zIHRoZSByZXN1bHQgYXMgYSB2ZWN0b3Igd2l0aCAzIGVudHJpZXMuXG4gICAqIEBwYXJhbSB7TWF0cml4NH0gbSBUaGUgbWF0cml4LlxuICAgKiBAcGFyYW0ge1ZlY3RvcjN9IHYgVGhlIHBvaW50LlxuICAgKiBAcGFyYW0ge1ZlY3RvcjR9IGRzdCBvcHRpb25hbCB2ZWN0b3I0IHRvIHN0b3JlIHJlc3VsdFxuICAgKiBAcmV0dXJuIHtWZWN0b3I0fSBkc3Qgb3IgbmV3IFZlY3RvcjQgaWYgbm90IHByb3ZpZGVkXG4gICAqIEBtZW1iZXJPZiBtb2R1bGU6d2ViZ2wtM2QtbWF0aFxuICAgKi9cbiAgZnVuY3Rpb24gdHJhbnNmb3JtUG9pbnQobSwgdiwgZHN0KSB7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBGbG9hdDMyQXJyYXkoMyk7XG4gICAgdmFyIHYwID0gdlswXTtcbiAgICB2YXIgdjEgPSB2WzFdO1xuICAgIHZhciB2MiA9IHZbMl07XG4gICAgdmFyIGQgPSB2MCAqIG1bMCAqIDQgKyAzXSArIHYxICogbVsxICogNCArIDNdICsgdjIgKiBtWzIgKiA0ICsgM10gKyBtWzMgKiA0ICsgM107XG5cbiAgICBkc3RbMF0gPSAodjAgKiBtWzAgKiA0ICsgMF0gKyB2MSAqIG1bMSAqIDQgKyAwXSArIHYyICogbVsyICogNCArIDBdICsgbVszICogNCArIDBdKSAvIGQ7XG4gICAgZHN0WzFdID0gKHYwICogbVswICogNCArIDFdICsgdjEgKiBtWzEgKiA0ICsgMV0gKyB2MiAqIG1bMiAqIDQgKyAxXSArIG1bMyAqIDQgKyAxXSkgLyBkO1xuICAgIGRzdFsyXSA9ICh2MCAqIG1bMCAqIDQgKyAyXSArIHYxICogbVsxICogNCArIDJdICsgdjIgKiBtWzIgKiA0ICsgMl0gKyBtWzMgKiA0ICsgMl0pIC8gZDtcblxuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuICAvKipcbiAgICogVGFrZXMgYSA0LWJ5LTQgbWF0cml4IGFuZCBhIHZlY3RvciB3aXRoIDMgZW50cmllcywgaW50ZXJwcmV0cyB0aGUgdmVjdG9yIGFzIGFcbiAgICogZGlyZWN0aW9uLCB0cmFuc2Zvcm1zIHRoYXQgZGlyZWN0aW9uIGJ5IHRoZSBtYXRyaXgsIGFuZCByZXR1cm5zIHRoZSByZXN1bHQ7XG4gICAqIGFzc3VtZXMgdGhlIHRyYW5zZm9ybWF0aW9uIG9mIDMtZGltZW5zaW9uYWwgc3BhY2UgcmVwcmVzZW50ZWQgYnkgdGhlIG1hdHJpeFxuICAgKiBpcyBwYXJhbGxlbC1wcmVzZXJ2aW5nLCBpLmUuIGFueSBjb21iaW5hdGlvbiBvZiByb3RhdGlvbiwgc2NhbGluZyBhbmRcbiAgICogdHJhbnNsYXRpb24sIGJ1dCBub3QgYSBwZXJzcGVjdGl2ZSBkaXN0b3J0aW9uLiBSZXR1cm5zIGEgdmVjdG9yIHdpdGggM1xuICAgKiBlbnRyaWVzLlxuICAgKiBAcGFyYW0ge01hdHJpeDR9IG0gVGhlIG1hdHJpeC5cbiAgICogQHBhcmFtIHtWZWN0b3IzfSB2IFRoZSBkaXJlY3Rpb24uXG4gICAqIEBwYXJhbSB7VmVjdG9yNH0gZHN0IG9wdGlvbmFsIHZlY3RvcjQgdG8gc3RvcmUgcmVzdWx0XG4gICAqIEByZXR1cm4ge1ZlY3RvcjR9IGRzdCBvciBuZXcgVmVjdG9yNCBpZiBub3QgcHJvdmlkZWRcbiAgICogQG1lbWJlck9mIG1vZHVsZTp3ZWJnbC0zZC1tYXRoXG4gICAqL1xuICBmdW5jdGlvbiB0cmFuc2Zvcm1EaXJlY3Rpb24obSwgdiwgZHN0KSB7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBGbG9hdDMyQXJyYXkoMyk7XG5cbiAgICB2YXIgdjAgPSB2WzBdO1xuICAgIHZhciB2MSA9IHZbMV07XG4gICAgdmFyIHYyID0gdlsyXTtcblxuICAgIGRzdFswXSA9IHYwICogbVswICogNCArIDBdICsgdjEgKiBtWzEgKiA0ICsgMF0gKyB2MiAqIG1bMiAqIDQgKyAwXTtcbiAgICBkc3RbMV0gPSB2MCAqIG1bMCAqIDQgKyAxXSArIHYxICogbVsxICogNCArIDFdICsgdjIgKiBtWzIgKiA0ICsgMV07XG4gICAgZHN0WzJdID0gdjAgKiBtWzAgKiA0ICsgMl0gKyB2MSAqIG1bMSAqIDQgKyAyXSArIHYyICogbVsyICogNCArIDJdO1xuXG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUYWtlcyBhIDQtYnktNCBtYXRyaXggbSBhbmQgYSB2ZWN0b3IgdiB3aXRoIDMgZW50cmllcywgaW50ZXJwcmV0cyB0aGUgdmVjdG9yXG4gICAqIGFzIGEgbm9ybWFsIHRvIGEgc3VyZmFjZSwgYW5kIGNvbXB1dGVzIGEgdmVjdG9yIHdoaWNoIGlzIG5vcm1hbCB1cG9uXG4gICAqIHRyYW5zZm9ybWluZyB0aGF0IHN1cmZhY2UgYnkgdGhlIG1hdHJpeC4gVGhlIGVmZmVjdCBvZiB0aGlzIGZ1bmN0aW9uIGlzIHRoZVxuICAgKiBzYW1lIGFzIHRyYW5zZm9ybWluZyB2IChhcyBhIGRpcmVjdGlvbikgYnkgdGhlIGludmVyc2UtdHJhbnNwb3NlIG9mIG0uICBUaGlzXG4gICAqIGZ1bmN0aW9uIGFzc3VtZXMgdGhlIHRyYW5zZm9ybWF0aW9uIG9mIDMtZGltZW5zaW9uYWwgc3BhY2UgcmVwcmVzZW50ZWQgYnkgdGhlXG4gICAqIG1hdHJpeCBpcyBwYXJhbGxlbC1wcmVzZXJ2aW5nLCBpLmUuIGFueSBjb21iaW5hdGlvbiBvZiByb3RhdGlvbiwgc2NhbGluZyBhbmRcbiAgICogdHJhbnNsYXRpb24sIGJ1dCBub3QgYSBwZXJzcGVjdGl2ZSBkaXN0b3J0aW9uLiAgUmV0dXJucyBhIHZlY3RvciB3aXRoIDNcbiAgICogZW50cmllcy5cbiAgICogQHBhcmFtIHtNYXRyaXg0fSBtIFRoZSBtYXRyaXguXG4gICAqIEBwYXJhbSB7VmVjdG9yM30gdiBUaGUgbm9ybWFsLlxuICAgKiBAcGFyYW0ge1ZlY3RvcjN9IFtkc3RdIFRoZSBkaXJlY3Rpb24uXG4gICAqIEByZXR1cm4ge1ZlY3RvcjN9IFRoZSB0cmFuc2Zvcm1lZCBkaXJlY3Rpb24uXG4gICAqIEBtZW1iZXJPZiBtb2R1bGU6d2ViZ2wtM2QtbWF0aFxuICAgKi9cbiAgZnVuY3Rpb24gdHJhbnNmb3JtTm9ybWFsKG0sIHYsIGRzdCkge1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgRmxvYXQzMkFycmF5KDMpO1xuICAgIHZhciBtaSA9IGludmVyc2UobSk7XG4gICAgdmFyIHYwID0gdlswXTtcbiAgICB2YXIgdjEgPSB2WzFdO1xuICAgIHZhciB2MiA9IHZbMl07XG5cbiAgICBkc3RbMF0gPSB2MCAqIG1pWzAgKiA0ICsgMF0gKyB2MSAqIG1pWzAgKiA0ICsgMV0gKyB2MiAqIG1pWzAgKiA0ICsgMl07XG4gICAgZHN0WzFdID0gdjAgKiBtaVsxICogNCArIDBdICsgdjEgKiBtaVsxICogNCArIDFdICsgdjIgKiBtaVsxICogNCArIDJdO1xuICAgIGRzdFsyXSA9IHYwICogbWlbMiAqIDQgKyAwXSArIHYxICogbWlbMiAqIDQgKyAxXSArIHYyICogbWlbMiAqIDQgKyAyXTtcblxuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuICBmdW5jdGlvbiBjb3B5KHNyYywgZHN0KSB7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuXG4gICAgZHN0WyAwXSA9IHNyY1sgMF07XG4gICAgZHN0WyAxXSA9IHNyY1sgMV07XG4gICAgZHN0WyAyXSA9IHNyY1sgMl07XG4gICAgZHN0WyAzXSA9IHNyY1sgM107XG4gICAgZHN0WyA0XSA9IHNyY1sgNF07XG4gICAgZHN0WyA1XSA9IHNyY1sgNV07XG4gICAgZHN0WyA2XSA9IHNyY1sgNl07XG4gICAgZHN0WyA3XSA9IHNyY1sgN107XG4gICAgZHN0WyA4XSA9IHNyY1sgOF07XG4gICAgZHN0WyA5XSA9IHNyY1sgOV07XG4gICAgZHN0WzEwXSA9IHNyY1sxMF07XG4gICAgZHN0WzExXSA9IHNyY1sxMV07XG4gICAgZHN0WzEyXSA9IHNyY1sxMl07XG4gICAgZHN0WzEzXSA9IHNyY1sxM107XG4gICAgZHN0WzE0XSA9IHNyY1sxNF07XG4gICAgZHN0WzE1XSA9IHNyY1sxNV07XG5cbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjb3B5OiBjb3B5LFxuICAgIGxvb2tBdDogbG9va0F0LFxuICAgIGFkZFZlY3RvcnM6IGFkZFZlY3RvcnMsXG4gICAgc3VidHJhY3RWZWN0b3JzOiBzdWJ0cmFjdFZlY3RvcnMsXG4gICAgZGlzdGFuY2U6IGRpc3RhbmNlLFxuICAgIGRpc3RhbmNlU3E6IGRpc3RhbmNlU3EsXG4gICAgbm9ybWFsaXplOiBub3JtYWxpemUsXG4gICAgY29tcG9zZTogY29tcG9zZSxcbiAgICBjcm9zczogY3Jvc3MsXG4gICAgZGVjb21wb3NlOiBkZWNvbXBvc2UsXG4gICAgZG90OiBkb3QsXG4gICAgaWRlbnRpdHk6IGlkZW50aXR5LFxuICAgIHRyYW5zcG9zZTogdHJhbnNwb3NlLFxuICAgIGxlbmd0aDogbGVuZ3RoLFxuICAgIG9ydGhvZ3JhcGhpYzogb3J0aG9ncmFwaGljLFxuICAgIGZydXN0dW06IGZydXN0dW0sXG4gICAgcGVyc3BlY3RpdmU6IHBlcnNwZWN0aXZlLFxuICAgIHRyYW5zbGF0aW9uOiB0cmFuc2xhdGlvbixcbiAgICB0cmFuc2xhdGU6IHRyYW5zbGF0ZSxcbiAgICB4Um90YXRpb246IHhSb3RhdGlvbixcbiAgICB5Um90YXRpb246IHlSb3RhdGlvbixcbiAgICB6Um90YXRpb246IHpSb3RhdGlvbixcbiAgICB4Um90YXRlOiB4Um90YXRlLFxuICAgIHlSb3RhdGU6IHlSb3RhdGUsXG4gICAgelJvdGF0ZTogelJvdGF0ZSxcbiAgICBheGlzUm90YXRpb246IGF4aXNSb3RhdGlvbixcbiAgICBheGlzUm90YXRlOiBheGlzUm90YXRlLFxuICAgIHNjYWxpbmc6IHNjYWxpbmcsXG4gICAgc2NhbGU6IHNjYWxlLFxuICAgIG11bHRpcGx5OiBtdWx0aXBseSxcbiAgICBpbnZlcnNlOiBpbnZlcnNlLFxuICAgIHRyYW5zZm9ybVZlY3RvcjogdHJhbnNmb3JtVmVjdG9yLFxuICAgIHRyYW5zZm9ybVBvaW50OiB0cmFuc2Zvcm1Qb2ludCxcbiAgICB0cmFuc2Zvcm1EaXJlY3Rpb246IHRyYW5zZm9ybURpcmVjdGlvbixcbiAgICB0cmFuc2Zvcm1Ob3JtYWw6IHRyYW5zZm9ybU5vcm1hbCxcbiAgfTtcblxufSkpO1xuXG4iLCIvKipcbiAqIFByaW1pdGl2ZSBzcGhlcmUsIHRoZSB2ZXJ0aWNlcyBpbiB0aGUgbGlzdCBvZiBcbiAqIGNvb3JkaW5hdGVzIHRoYXQgaXMgcmVwcmVzZW50ZWQgYnkgdGhlIGFycmF5IGNvbnRhaW5zIDMgbnVtYmVycyAoeCx5LHopLlxuICogXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkaXVzIFxuICogQHBhcmFtIHtudW1iZXJ9IG51bVZlcnRpY2FsU2VnbWVudHMgdGhlIG51bWJlciBvZiB0aGUgdmVydGljYWwgc2VnbWVudHMuIExpa2UgRWFydGgncyBtZXJpZGlhbnMsdGhlIGxpbmUgZ29pbmcgcG9sZSB0byBwb2xlLlxuICogQHBhcmFtIHtudW1iZXJ9IG51bUhvcml6b25hbFNlZ2VtZW50cyB0aGUgbnVtYmVyIG9mIHRoZSBob3Jpem9uYWwgc2VnbWVudHMuIExpa2UgRWFydGgncyBwYXJhbGxlbHMuXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0TGF0aXR1ZGVJblJhZGlhbnM9MF0gIFxuICogQHBhcmFtIHtudW1iZXJ9IFtlbmRMYXRpdHVkZUluUmFkaWFucz1NYXRoLlBJXSAgXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0TG9uZ2l0dWRlSW5SYWRpYW5zPTBdICBcbiAqIEBwYXJhbSB7bnVtYmVyfSBbZW5kTG9uZ2l0dWRlSW5SYWRpYW5zPTIqTWF0aC5QSV0gIFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3BoZXJlVmVydGljZXMoXG4gIHJhZGl1cywgbnVtVmVydGljYWxTZWdtZW50cywgbnVtSG9yaXpvbmFsU2VnZW1lbnRzLCBcbiAgc3RhcnRMYXRpdHVkZUluUmFkaWFucyA9IDAsIGVuZExhdGl0dWRlSW5SYWRpYW5zID0gTWF0aC5QSSwgXG4gIHN0YXJ0TG9uZ2l0dWRlSW5SYWRpYW5zID0gMCwgZW5kTG9uZ2l0dWRlSW5SYWRpYW5zID0gMiAqIE1hdGguUEkpIHtcblxuICBjb25zdCBsYXRpdHVkZVJhbmdlID0gZW5kTGF0aXR1ZGVJblJhZGlhbnMgLSBzdGFydExhdGl0dWRlSW5SYWRpYW5zO1xuICBjb25zdCBsb25naXR1ZGVSYW5nZSA9IGVuZExvbmdpdHVkZUluUmFkaWFucyAtIHN0YXJ0TG9uZ2l0dWRlSW5SYWRpYW5zO1xuICBcbiAgLy8gYWRkIG9uZSBiZWNhdXNlIHRoZSBlbmQgbGluZSBzaG91bGQgYmUgdHdvIGxpbmVzIG1lcmdlZFxuICBjb25zdCBudW1WZXJ0aWNlcyA9IChudW1WZXJ0aWNhbFNlZ21lbnRzICsgMSkgKiAobnVtSG9yaXpvbmFsU2VnZW1lbnRzICsgMSk7IFxuICBcbiAgbGV0IHBvc2l0aW9ucyA9IFtdLCBub3JtYWxzID0gW10sIHRleENvb3JkcyA9IFtdO1xuXG4gIGZvciAobGV0IGogPSAwOyBqIDwgbnVtSG9yaXpvbmFsU2VnZW1lbnRzKzE7IGorPTEpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVZlcnRpY2FsU2VnbWVudHMrMTsgaSs9MSkge1xuICAgICAgY29uc3QgdSA9IGkgLyBudW1WZXJ0aWNhbFNlZ21lbnRzO1xuICAgICAgY29uc3QgdiA9IGogLyBudW1Ib3Jpem9uYWxTZWdlbWVudHM7XG5cbiAgICAgIGNvbnN0IHRoZXRhID0gbG9uZ2l0dWRlUmFuZ2UgKiB1OyBcbiAgICAgIGNvbnN0IHBoaSA9IGxhdGl0dWRlUmFuZ2UgKiB2O1xuXG4gICAgICBjb25zdCBzaW5UaGV0YSA9IE1hdGguc2luKHRoZXRhKSwgY29zVGhldGEgPSBNYXRoLmNvcyh0aGV0YSk7XG4gICAgICBjb25zdCBzaW5QaGkgPSBNYXRoLnNpbihwaGkpLCBjb3N0UGhpID0gTWF0aC5jb3MocGhpKTtcblxuICAgICAgY29uc3QgdXggPSBjb3NUaGV0YSAqIHNpblBoaTtcbiAgICAgIGNvbnN0IHV5ID0gY29zdFBoaTtcbiAgICAgIGNvbnN0IHV6ID0gc2luVGhldGEgKiBzaW5QaGk7XG5cbiAgICAgIHBvc2l0aW9ucy5wdXNoKFtyYWRpdXMgKiB1eCwgcmFkaXVzICogdXksIHJhZGl1cyAqIHV6XSk7XG4gICAgICBub3JtYWxzLnB1c2goW3V4LCB1eSwgdXpdKTtcbiAgICAgIHRleENvb3Jkcy5wdXNoKFsxIC0gdSwgdl0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIGdlbmVyYXRlIHRoZSBpbmRpY2VzIG9mIHRoZSB0cmlhbmdsZXMuXG4gIGNvbnN0IG51bVZlcnRpY2FsU2VnbWVudFZlcnRpY2VzID0gbnVtVmVydGljYWxTZWdtZW50cyArIDE7XG4gIGxldCBpbmRpY2VzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtVmVydGljYWxTZWdtZW50czsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBudW1Ib3Jpem9uYWxTZWdlbWVudHM7IGogKz0gMSl7XG4gICAgICAvLyB0d28gdHJpYW5nbGVzIG9mIG9uZSBmYWNlXG4gICAgICAvKiB0cmlhbmdsZSAxIFxuICAgICAgICAgICoxLS0tLS0qMlxuICAgICAgICAgICB8ICAgIC9cbiAgICAgICAgICAgfCAgLyAgXG4gICAgICAgICAgKjMgIFxuICAgICAgKi9cbiAgICAgIGxldCBpZHgxID0gW1xuICAgICAgICBqICogbnVtVmVydGljYWxTZWdtZW50VmVydGljZXMgKyBpLFxuICAgICAgICBqICogbnVtVmVydGljYWxTZWdtZW50VmVydGljZXMgKyAoaSArIDEpLFxuICAgICAgICAoaiArIDEpICogbnVtVmVydGljYWxTZWdtZW50VmVydGljZXMgKyBpIFxuICAgICAgXTtcbiAgICAgIC8qIHRyaWFuZ2xlIDJcbiAgICAgICAgICAgICAgICAqMiAgIFxuICAgICAgICAgICAgICAvICB8XG4gICAgICAgICAgICAvICAgIHxcbiAgICAgICAgICAqMS0tLS0tKjNcbiAgICAgICovXG4gICAgICBsZXQgaWR4MiA9IFtcbiAgICAgICAgKGogKyAxKSAqIG51bVZlcnRpY2FsU2VnbWVudFZlcnRpY2VzICsgaSAsXG4gICAgICAgIGogKiBudW1WZXJ0aWNhbFNlZ21lbnRWZXJ0aWNlcyArIChpICsgMSksXG4gICAgICAgIChqICsgMSkgKiBudW1WZXJ0aWNhbFNlZ21lbnRWZXJ0aWNlcyArIChpICsgMSlcbiAgICAgIF07XG5cbiAgICAgIGluZGljZXMucHVzaChpZHgxLCBpZHgyKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBvaXN0aW9uczogcG9zaXRpb25zLFxuICAgIG5vcm1hbHM6IG5vcm1hbHMsXG4gICAgdGV4dHVyZUNvb3JkaW5hdGVzOiB0ZXhDb29yZHMsXG4gICAgaW5kaWNlczogaW5kaWNlcyxcblxuICAgIG51bVZlcnRpY2VzOiBudW1WZXJ0aWNlc1xuICB9O1xuXG59XG5cbi8qXG4gIEdMU0wgc2hhZGVyIHByb2dyYW0gYW5kIEdMU0wgY29kZSBjb21waWxlci5cblxuICBUaGVyZSBhcmUgdHdvIHNoYWRlcjogdmVydGV4IHNoYWRlciBhbmQgZnJhZ21lbnQgc2hhZGVyLlxuICBWZXJ0ZXggc2hhZGVyIGlzIHVzZWQgZm9yIHRoZSB2ZXJ0ZXggcG9zaXRpb24gaW5mby5cbiAgZnJhZ21lbnQgc2hhZGVyIGlzIHVzZWQgZm9yIHRoZSB2ZXJ0ZXggY29sb3IgaW5mby5cblxuICBGb3IgbW9yZSBkZXRhaWxzLCBMb29rIGZvciB0aGUgZG9jdW1lbnQgYWJvdXQgV2ViR0wgb24gTUROLlxuICovXG5cblxuLy9cbi8vIEluaXRpYWxpemUgYSBzaGFkZXIgcHJvZ3JhbSwgc28gV2ViR0wga25vd3MgaG93IHRvIGRyYXcgb3VyIGRhdGFcbi8vXG5leHBvcnQgZnVuY3Rpb24gaW5pdFNoYWRlclByb2dyYW0oZ2wsIHZzU291cmNlLCBmc1NvdXJjZSkge1xuICBjb25zdCB2ZXJ0ZXhTaGFkZXIgPSBsb2FkU2hhZGVyKGdsLCBnbC5WRVJURVhfU0hBREVSLCB2c1NvdXJjZSk7XG4gIGNvbnN0IGZyYWdtZW50U2hhZGVyID0gbG9hZFNoYWRlcihnbCwgZ2wuRlJBR01FTlRfU0hBREVSLCBmc1NvdXJjZSk7XG5cbiAgLy8gQ3JlYXRlIHRoZSBzaGFkZXIgcHJvZ3JhbVxuXG4gIGNvbnN0IHNoYWRlclByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCk7XG4gIGdsLmF0dGFjaFNoYWRlcihzaGFkZXJQcm9ncmFtLCB2ZXJ0ZXhTaGFkZXIpO1xuICBnbC5hdHRhY2hTaGFkZXIoc2hhZGVyUHJvZ3JhbSwgZnJhZ21lbnRTaGFkZXIpO1xuICBnbC5saW5rUHJvZ3JhbShzaGFkZXJQcm9ncmFtKTtcblxuICAvLyBJZiBjcmVhdGluZyB0aGUgc2hhZGVyIHByb2dyYW0gZmFpbGVkLCBhbGVydFxuXG4gIGlmICghZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihzaGFkZXJQcm9ncmFtLCBnbC5MSU5LX1NUQVRVUykpIHtcbiAgICB0aHJvdyBFcnJvcignVW5hYmxlIHRvIGluaXRpYWxpemUgdGhlIHNoYWRlciBwcm9ncmFtOiAnICsgZ2wuZ2V0UHJvZ3JhbUluZm9Mb2coc2hhZGVyUHJvZ3JhbSkpO1xuICB9XG5cbiAgcmV0dXJuIHNoYWRlclByb2dyYW07XG59XG5cbi8vXG4vLyBjcmVhdGVzIGEgc2hhZGVyIG9mIHRoZSBnaXZlbiB0eXBlLCB1cGxvYWRzIHRoZSBzb3VyY2UgYW5kXG4vLyBjb21waWxlcyBpdC5cbi8vXG5mdW5jdGlvbiBsb2FkU2hhZGVyKGdsLCB0eXBlLCBzb3VyY2UpIHtcbiAgY29uc3Qgc2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKHR5cGUpO1xuXG4gIC8vIFNlbmQgdGhlIHNvdXJjZSB0byB0aGUgc2hhZGVyIG9iamVjdFxuXG4gIGdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNvdXJjZSk7XG5cbiAgLy8gQ29tcGlsZSB0aGUgc2hhZGVyIHByb2dyYW1cblxuICBnbC5jb21waWxlU2hhZGVyKHNoYWRlcik7XG5cbiAgLy8gU2VlIGlmIGl0IGNvbXBpbGVkIHN1Y2Nlc3NmdWxseVxuXG4gIGlmICghZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XG4gICAgZ2wuZGVsZXRlU2hhZGVyKHNoYWRlcik7XG4gICAgdGhyb3cgRXJyb3IoJ0FuIGVycm9yIG9jY3VycmVkIGNvbXBpbGluZyB0aGUgc2hhZGVyczogJyArIGdsLmdldFNoYWRlckluZm9Mb2coc2hhZGVyKSk7XG4gIH1cblxuICByZXR1cm4gc2hhZGVyO1xufSJdLCJzb3VyY2VSb290IjoiIn0=