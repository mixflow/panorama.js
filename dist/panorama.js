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
exports.push([module.i, ".panorama__centering--1X83W {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.panorama__wrapper--3MegC {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n.panorama__overlay--R54RO {\n  /* overlay on the parent(wrapper), one's position is relative and\n  the other is absolute. */\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  /* background-color: #1EB9FF; */\n}\n.panorama__mainCanvas--12x4n {\n  height: 100%;\n  width: 100%;\n}\n.panorama__progressWrapper--22Leb {\n  width: 35%;\n  height: 8px;\n  border: 1px solid #FFF;\n}\n.panorama__progressBar--PSISO {\n  background-color: #FFF;\n  width: 0;\n  height: 100%;\n}\n.panorama__progressMessage--2HWiB {\n  color: #FFF;\n  float: left;\n}\n.panorama__percentageNum--3V2fE {\n  color: #FFF;\n  float: right;\n}\n.panorama__uiControlPanel--32VJ7 {\n  /* make one whole line bar, put on the bottom */\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  box-sizing: border-box;\n  /* include padding into width and height sizes */\n  height: 60px;\n  padding: 8px 8px;\n}\n.panorama__controlButton--3RClL {\n  display: inline-block;\n  height: 44px;\n  width: 44px;\n}\n.panorama__orientationSwitch--24RG1 {\n  background-color: white;\n}\n.panorama__orientationSwitch--24RG1.panorama__disabled--3n7yo {\n  background-color: black;\n}\n.panorama__fullscreenSwitch--djegi {\n  float: right;\n  background-color: skyblue;\n}\n.panorama__fullscreenSwitch--djegi.panorama__inFullscreen--1_r6b {\n  background-color: white;\n}\n", ""]);
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
	"disabled": "panorama__disabled--3n7yo",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYW5vcmFtYS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vcGFub3JhbWEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGFub3JhbWEvLi9zcmMvY3NzL3Bhbm9yYW1hLmxlc3MiLCJ3ZWJwYWNrOi8vcGFub3JhbWEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Bhbm9yYW1hLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovL3Bhbm9yYW1hLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly9wYW5vcmFtYS8uL3NyYy9jc3MvcGFub3JhbWEubGVzcz9iNmNlIiwid2VicGFjazovL3Bhbm9yYW1hLy4vc3JjL3Bhbm9yYW1hLmpzIiwid2VicGFjazovL3Bhbm9yYW1hLy4vc3JjL3VzZXItaW50ZXJmYWNlLmpzIiwid2VicGFjazovL3Bhbm9yYW1hLy4vc3JjL3V0aWxzL200LmpzIiwid2VicGFjazovL3Bhbm9yYW1hLy4vc3JjL3dlYmdsLWhlbHBlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMv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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFX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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLE9BQU87QUFDcEIsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsT0FBTztBQUNwQixhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsT0FBTztBQUNwQixhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QixhQUFhLFNBQVM7QUFDdEIsYUFBYSxTQUFTO0FBQ3RCLGFBQWEsUUFBUTtBQUNyQixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0EscUJBQXFCLE9BQU87QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUM1NUNEO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ087QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDhFOztBQUVBOztBQUVBLGlCQUFpQiw2QkFBNkI7QUFDOUMsbUJBQW1CLDJCQUEyQjtBQUM5QztBQUNBOztBQUVBLHVDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIseUJBQXlCO0FBQzFDLG1CQUFtQiwyQkFBMkI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDIiwiZmlsZSI6InBhbm9yYW1hLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicGFub3JhbWFcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wicGFub3JhbWFcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3Bhbm9yYW1hLmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucGFub3JhbWFfX2NlbnRlcmluZy0tMVg4M1cge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuLnBhbm9yYW1hX193cmFwcGVyLS0zTWVnQyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnBhbm9yYW1hX19vdmVybGF5LS1SNTRSTyB7XFxuICAvKiBvdmVybGF5IG9uIHRoZSBwYXJlbnQod3JhcHBlciksIG9uZSdzIHBvc2l0aW9uIGlzIHJlbGF0aXZlIGFuZFxcbiAgdGhlIG90aGVyIGlzIGFic29sdXRlLiAqL1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzFFQjlGRjsgKi9cXG59XFxuLnBhbm9yYW1hX19tYWluQ2FudmFzLS0xMng0biB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnBhbm9yYW1hX19wcm9ncmVzc1dyYXBwZXItLTIyTGViIHtcXG4gIHdpZHRoOiAzNSU7XFxuICBoZWlnaHQ6IDhweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNGRkY7XFxufVxcbi5wYW5vcmFtYV9fcHJvZ3Jlc3NCYXItLVBTSVNPIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLnBhbm9yYW1hX19wcm9ncmVzc01lc3NhZ2UtLTJIV2lCIHtcXG4gIGNvbG9yOiAjRkZGO1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcbi5wYW5vcmFtYV9fcGVyY2VudGFnZU51bS0tM1YyZkUge1xcbiAgY29sb3I6ICNGRkY7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcbi5wYW5vcmFtYV9fdWlDb250cm9sUGFuZWwtLTMyVko3IHtcXG4gIC8qIG1ha2Ugb25lIHdob2xlIGxpbmUgYmFyLCBwdXQgb24gdGhlIGJvdHRvbSAqL1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogaW5jbHVkZSBwYWRkaW5nIGludG8gd2lkdGggYW5kIGhlaWdodCBzaXplcyAqL1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgcGFkZGluZzogOHB4IDhweDtcXG59XFxuLnBhbm9yYW1hX19jb250cm9sQnV0dG9uLS0zUkNsTCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDQ0cHg7XFxuICB3aWR0aDogNDRweDtcXG59XFxuLnBhbm9yYW1hX19vcmllbnRhdGlvblN3aXRjaC0tMjRSRzEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5wYW5vcmFtYV9fb3JpZW50YXRpb25Td2l0Y2gtLTI0UkcxLnBhbm9yYW1hX19kaXNhYmxlZC0tM243eW8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcbi5wYW5vcmFtYV9fZnVsbHNjcmVlblN3aXRjaC0tZGplZ2kge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcXG59XFxuLnBhbm9yYW1hX19mdWxsc2NyZWVuU3dpdGNoLS1kamVnaS5wYW5vcmFtYV9faW5GdWxsc2NyZWVuLS0xX3I2YiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImNlbnRlcmluZ1wiOiBcInBhbm9yYW1hX19jZW50ZXJpbmctLTFYODNXXCIsXG5cdFwid3JhcHBlclwiOiBcInBhbm9yYW1hX193cmFwcGVyLS0zTWVnQ1wiLFxuXHRcIm92ZXJsYXlcIjogXCJwYW5vcmFtYV9fb3ZlcmxheS0tUjU0Uk9cIixcblx0XCJtYWluQ2FudmFzXCI6IFwicGFub3JhbWFfX21haW5DYW52YXMtLTEyeDRuXCIsXG5cdFwicHJvZ3Jlc3NXcmFwcGVyXCI6IFwicGFub3JhbWFfX3Byb2dyZXNzV3JhcHBlci0tMjJMZWIgcGFub3JhbWFfX2NlbnRlcmluZy0tMVg4M1dcIixcblx0XCJwcm9ncmVzc0JhclwiOiBcInBhbm9yYW1hX19wcm9ncmVzc0Jhci0tUFNJU09cIixcblx0XCJwcm9ncmVzc01lc3NhZ2VcIjogXCJwYW5vcmFtYV9fcHJvZ3Jlc3NNZXNzYWdlLS0ySFdpQlwiLFxuXHRcInBlcmNlbnRhZ2VOdW1cIjogXCJwYW5vcmFtYV9fcGVyY2VudGFnZU51bS0tM1YyZkVcIixcblx0XCJ1aUNvbnRyb2xQYW5lbFwiOiBcInBhbm9yYW1hX191aUNvbnRyb2xQYW5lbC0tMzJWSjdcIixcblx0XCJjb250cm9sQnV0dG9uXCI6IFwicGFub3JhbWFfX2NvbnRyb2xCdXR0b24tLTNSQ2xMXCIsXG5cdFwib3JpZW50YXRpb25Td2l0Y2hcIjogXCJwYW5vcmFtYV9fb3JpZW50YXRpb25Td2l0Y2gtLTI0UkcxIHBhbm9yYW1hX19jb250cm9sQnV0dG9uLS0zUkNsTFwiLFxuXHRcImRpc2FibGVkXCI6IFwicGFub3JhbWFfX2Rpc2FibGVkLS0zbjd5b1wiLFxuXHRcImZ1bGxzY3JlZW5Td2l0Y2hcIjogXCJwYW5vcmFtYV9fZnVsbHNjcmVlblN3aXRjaC0tZGplZ2kgcGFub3JhbWFfX2NvbnRyb2xCdXR0b24tLTNSQ2xMXCIsXG5cdFwiaW5GdWxsc2NyZWVuXCI6IFwicGFub3JhbWFfX2luRnVsbHNjcmVlbi0tMV9yNmJcIlxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIntcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tfaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiKFwiLmNvbmNhdChpdGVtWzJdLCBcIikgYW5kIChcIikuY29uY2F0KG1lZGlhUXVlcnksIFwiKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290KS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTEhLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcGFub3JhbWEubGVzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0xIS4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Bhbm9yYW1hLmxlc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTEhLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcGFub3JhbWEubGVzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgbTQgIGZyb20gJy4vdXRpbHMvbTQnO1xuaW1wb3J0IHsgaW5pdFNoYWRlclByb2dyYW0sIGNyZWF0ZVNwaGVyZVZlcnRpY2VzIH0gZnJvbSAnLi93ZWJnbC1oZWxwZXInO1xuXG5pbXBvcnQgY2xhenogZnJvbSBcIi4vY3NzL3Bhbm9yYW1hLmxlc3NcIjtcbmltcG9ydCB7XG4gIGNyZWF0ZU9yaWVudGF0aW9uU3dpdGNoSGVscGVyLFxuICBjcmVhdGVGdWxsc2NyZWVuU3dpdGNoSGVscGVyLFxuICB0b2dnbGVGdWxsc2NyZWVuXG59IGZyb20gXCIuL3VzZXItaW50ZXJmYWNlXCI7XG5cbi8qKlxuICogUGFub3JhbWEuanMuIGNyZWF0ZSBwYW5vcmFtYVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXR0aW5nICB0aGUgc2V0dGluZyBvZiBwYW5vcmFtYS5qcy5cbiAqIEBwYXJhbSB7c3RyaW5nfEVsZW1lbnR9IFtzZXR0aW5nLmNvbnRhaW5lcj1kb2N1bWVudC5ib2R5XSBUbyBzcGVjaWZ5IHdoaWNoIGNvbnRhaW5lciB0aGF0IHRoZSBwYW5vcmFtYSBwdXRzIGluLCBjYW4gYmUgZWl0aGVyIGNzcyBzZWxlY3RvciBzdHJpbmcobGlrZSBcIiNpZFwiIFwiLmNsYXp6bmFtZVwiIFwiZGl2I2lkXCIpIG9yIERPTUVsZW1lbnQobGlrZSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lkXCIpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlkXCIpICkuXG4gKiBAcGFyYW0ge3N0cmluZ30gc2V0dGluZy5zcmMgdGhlIGltYWdlIHVybCBvZiB0aGUgYWN0dWFsIHBhbm9yYW1hLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzZXR0aW5nLmZvdj05MF0gdGhlIEZpZWxkIE9mIFZpZXcgaW4gZGVncmVlcywgdGhlIGNhbWVyYSB2aWV3IGFuZ2xlIHNjb3BlLlxuICogQHBhcmFtIHtudW1iZXIgYXJyYXl9IFtzZXR0aW5nLmNhbWVyYURlZ3JlZT1bMCwwXV0gdHdvIG51bWJlcnMgcmVwcmVzZW50IHRoZSBob3Jpem9uYWwgYW5kIHZlcnRpY2FsIGRlZ3JlZXMgb2YgY2FtZXJhLFxuICogIGRlZmF1bHQgaXMgWzAsMF0gd2hpY2ggbWVhbnMgdGhlIGRlZmF1bHQgc3RhcnQgcG9pbnQgb2YgdGhlIHBhbm9yYW1hIGltYWdlLlxuICogIHRoZSBmaXJzdCBudW1iZXIgcmFuZ2VzIGZyb20gMCB0byAzNjAgd2hpY2ggaXMgaG9yaXpvbmFsIGRlZ3JlZSB3aGljaCBpcyB0aGUgZGlyZWN0aW9uIHRoYXQgY2FtZXJhIGxvb2tzIG9uIHRoZSBob3Jpem9uLlxuICogIHRoZSBzZWNvbmQgbnVtYmVyIHJhbmdlcyBmcm9tIC05MCB0byA5MCAodG90YWxseSAxODAgZGVncmVlcykgIHdoaWNoIGlzIHZlcnRpY2FsIGRlZ3JlZXMgb3IgdGhlIFBpdGNoIGFuZ2xlIHdoZW4gbG9vayB1cCBvciBsb29rIGRvd24sXG4gKiAgcG9zaXRpdmUgbnVtYmVycygwIHRvIDkwKSBhcmUgdGhlIGRlZ3JlZXMgdGhhdCBsb29rcyB1cCwgOTAgaXMgdGhlIG5vcnRoIHBvbGUodGhlIHRvcCk7XG4gKiAgbmVnYXRpdmUgbnVtYmVycygtOTAgdG8gMCkgYXJlIHRoZSBkZWdyZWVzIHRoYXQgbG9va3MgZG93biwgLTkwIGlzIHRoZSBzb3V0aCBwb2xlKHRoZSBib3R0b20pO1xuICovXG5mdW5jdGlvbiBwYW5vcmFtYShzZXR0aW5nKSB7XG5cbiAgLy8gY29uc3QgQ0xBWlogPSAncGFub3JhbWEnOyAvLyBjc3MgY2xhc3MgbmFtZS4gW05PVCBVU0VEIFlFVF1cblxuICBzZXR0aW5nID0gaGFuZGxlU2V0dGluZyhzZXR0aW5nKTtcblxuICBjb25zdCB7Y29udGFpbmVyLCB1cmwsIGZvdiwgY2FtZXJhRGVncmVlfSA9IHNldHRpbmc7XG4gIGNvbnN0IHtyYWRpdXMsIG51bVZlcnRpY2FsU2VnbWVudHMsIG51bUhvcml6b25hbFNlZ2VtZW50c30gPSBzZXR0aW5nLnNwaGVyZTtcblxuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICBjYW52YXMuY2xhc3NOYW1lID0gY2xhenoubWFpbkNhbnZhcztcbiAgY2FudmFzLndpZHRoID0gY29udGFpbmVyLmNsaWVudFdpZHRoO1xuICBjYW52YXMuaGVpZ2h0ID0gY29udGFpbmVyLmNsaWVudEhlaWdodDtcblxuICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKGNsYXp6LndyYXBwZXIpO1xuXG4gIC8vIHVzZXIgY29udGFpbmVyID4gd3JhcHBlciA+IGNhbnZhc1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY2FudmFzKTtcblxuICAvLyBvdmVybGF5XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvdmVybGF5LmNsYXNzTmFtZSA9IGNsYXp6Lm92ZXJsYXk7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG5cbiAgY29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdsXCIpOyAvLyBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0XG5cbiAgLy8gVUkgY29udHJvbHNcblxuICAvLyBtYWluIHBhbmVsIHRoYXQgaG9sZHMgYWxsIGNvbnRyb2wgYnV0dG9uc1xuICBjb25zdCB1aUNvbnRyb2xQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHVpQ29udHJvbFBhbmVsLmNsYXNzTmFtZSA9IGNsYXp6LnVpQ29udHJvbFBhbmVsO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKHVpQ29udHJvbFBhbmVsKTtcblxuICAvLyB0aGUgZGV2aWNlIG9yaWVudGF0aW9uIHN3aXRjaCB0byBlbmFibGUgYW5kIGRpc2FibGUgdGhlIG9yaWVudGF0aW9uIHRvIGNvbnRyb2wgY2FtZXJhc1xuICBjb25zdCBvcmllbnRhdGlvblN3aXRjaEhlbHBlciA9IGNyZWF0ZU9yaWVudGF0aW9uU3dpdGNoSGVscGVyKHVpQ29udHJvbFBhbmVsKTtcbiAgY29uc3Qgb3JpZW50YXRpb25Td2l0Y2ggPSBvcmllbnRhdGlvblN3aXRjaEhlbHBlci5jcmVhdGUoc2V0dGluZy5kZXZpY2VPcmllbnRhdGlvbkVuYWJsZWQpOyAvLyBpbml0IHN0YXR1cyBvZiB0aGUgc3dpdGNoXG5cbiAgLy8gZnVsbHNjcmVlbiBET00gRWxlbWVudCBhbmQgdG9nZ2xlIGZ1bGxzY3JlZW5cbiAgY29uc3QgZnVsbHNjcmVlblN3aXRjaEhlbHBlciA9IGNyZWF0ZUZ1bGxzY3JlZW5Td2l0Y2hIZWxwZXIodWlDb250cm9sUGFuZWwpO1xuICBjb25zdCBmdWxsc2NyZWVuU3dpdGNoID0gZnVsbHNjcmVlblN3aXRjaEhlbHBlci5jcmVhdGUoZmFsc2UpO1xuXG4gIGZ1bGxzY3JlZW5Td2l0Y2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgZnVsbHNjcmVlblN3aXRjaEhlbHBlci5mbGlwKCk7XG4gICAgdG9nZ2xlRnVsbHNjcmVlbih3cmFwcGVyKTtcbiAgfSwgZmFsc2UpO1xuXG4gIC8vIG5vdCBzdXBwb3J0IFdlYmdsXG4gIGlmIChnbCA9PT0gbnVsbCkge1xuICAgIC8vIFRPRE8gd2FybmlnIHRoZSBtc2cgdGhhdCB3ZWJnbCBpc24ndCBhdmFpYWJsZS5cbiAgICB0aHJvdyBFcnJvcih7XG4gICAgICB0eXBlOiBcIk5vdCBzdXBwb3J0IFdlYkdMXCIsXG4gICAgICBtc2c6IFwiV2ViR0wgaXNuJ3Qgc3VwcG9ydC4gdGhlIHBhbm9yYW1hIHdpbGwgbm90IHdvcmsuXCIsXG4gICAgfSk7XG4gIH1cblxuICBnbC5lbmFibGUoZ2wuQ1VMTF9GQUNFKTsgLy8gb25seSBkcmF3IHRoZSBmcm9udCBmYWNlIHdoaWNoIHRoZSB2ZXJ0aWNlcyBpcyBkcmF3biBjbG9ja3dpc2UuXG4gIC8vIFNldCBjbGVhciBjb2xvciB0byBibGFjaywgZnVsbHkgb3BhcXVlXG4gIGdsLmNsZWFyQ29sb3IoMC4wLCAwLjAsIDAuMCwgMS4wKTtcbiAgLy8gQ2xlYXIgdGhlIGNvbG9yIGJ1ZmZlciB3aXRoIHNwZWNpZmllZCBjbGVhciBjb2xvclxuICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUKTtcblxuXG4gIC8vIFZlcnRleCBzaGFkZXIgcHJvZ3JhbVxuICBjb25zdCB2c1NvdXJjZSA9IGBcbiAgICBhdHRyaWJ1dGUgdmVjNCBhVmVydGV4UG9zaXRpb247XG4gICAgYXR0cmlidXRlIHZlYzIgYVRleHR1cmVDb29yZGluYXRlO1xuXG4gICAgdW5pZm9ybSBtYXQ0IHVNb2RlbFZpZXdNYXRyaXg7XG4gICAgdW5pZm9ybSBtYXQ0IHVQcm9qZWN0aW9uTWF0cml4O1xuXG4gICAgdmFyeWluZyBoaWdocCB2ZWMyIHZUZXh0dXJlQ29vcmRpbmF0ZTtcblxuICAgIHZvaWQgbWFpbigpIHtcbiAgICAgIGdsX1Bvc2l0aW9uID0gdVByb2plY3Rpb25NYXRyaXggKiB1TW9kZWxWaWV3TWF0cml4ICogYVZlcnRleFBvc2l0aW9uO1xuICAgICAgdlRleHR1cmVDb29yZGluYXRlID0gYVRleHR1cmVDb29yZGluYXRlO1xuICAgIH1cbiAgYDtcblxuICAvLyBGcmFnbWVudCBzaGFkZXIgcHJvZ3JhbVxuICBjb25zdCBmc1NvdXJjZSA9IGBcbiAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdlRleHR1cmVDb29yZGluYXRlO1xuXG4gICAgdW5pZm9ybSBzYW1wbGVyMkQgdVNhbXBsZXI7XG5cbiAgICB2b2lkIG1haW4odm9pZCkge1xuICAgICAgZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKHVTYW1wbGVyLCB2VGV4dHVyZUNvb3JkaW5hdGUpO1xuICAgIH1cbiAgYDtcblxuICBjb25zdCBzaGFkZXJQcm9ncmFtID0gaW5pdFNoYWRlclByb2dyYW0oZ2wsIHZzU291cmNlLCBmc1NvdXJjZSk7XG5cbiAgY29uc3QgcHJvZ3JhbUluZm8gPSB7XG4gICAgcHJvZ3JhbTogc2hhZGVyUHJvZ3JhbSxcbiAgICBhdHRyaWJMb2NhdGlvbnM6IHtcbiAgICAgIHZlcnRleFBvc2l0aW9uOiBnbC5nZXRBdHRyaWJMb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAnYVZlcnRleFBvc2l0aW9uJyksXG4gICAgICB0ZXh0dXJlQ29vcmRpbmF0ZTogZ2wuZ2V0QXR0cmliTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ2FUZXh0dXJlQ29vcmRpbmF0ZScpLFxuICAgIH0sXG4gICAgdW5pZm9ybUxvY2F0aW9uczoge1xuICAgICAgcHJvamVjdGlvbk1hdHJpeDogZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICd1UHJvamVjdGlvbk1hdHJpeCcpLFxuICAgICAgbW9kZWxWaWV3TWF0cml4OiBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3VNb2RlbFZpZXdNYXRyaXgnKSxcbiAgICAgIHVTYW1wbGVyOiBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3VTYW1wbGVyJyksXG4gICAgfSxcbiAgfTtcblxuICAvLyBjcmVhdGUgb25lIHNwaGVyZSB2ZXJ0aWNlc1xuICBjb25zdCBzcGhlcmVWZXJ0aWNlcyA9IGNyZWF0ZVNwaGVyZVZlcnRpY2VzKHJhZGl1cywgbnVtVmVydGljYWxTZWdtZW50cywgbnVtSG9yaXpvbmFsU2VnZW1lbnRzKTtcblxuICAvLyBjcmVhdGUgb25lIHByb2dyZXNzIGhlbHBlciBmdW5jdGlvbiB0byBjb250cm9sIGxvYWRpbmcgaW5mby5cbiAgY29uc3QgbG9hZGluZ1Byb2dyZXNzSGVscGVyID0gbG9hZGluZ1Byb2dyZXNzRmFjdG9yeShvdmVybGF5LCBcImxvYWRpbmcgcGFub3JhbWEuLi5cIik7XG5cbiAgY29uc3QgZ2xfbG9hZFRleHR1cmUgPSBjdXJyeShsb2FkVGV4dHVyZSwgZ2wpOyAvLyBtZXRob2QsIGZpcnN0IGFyZ3VtZW50XG4gIGNvbnN0IHRleHR1cmUgPSBnbF9sb2FkVGV4dHVyZShcbiAgICB1cmwsXG4gICAgKCk9PnsgLy8gY2FsbGJhY2sgYWZ0ZXIgZmluaXNoaW5nIHRvIGxvYWQgdGhlIHRleHR1cmVcbiAgICAgIGxvYWRpbmdQcm9ncmVzc0hlbHBlci5oaWRlKCk7IC8vIGhpZGUgcHJvZ3Jlc3MgaW5mb1xuICAgICAgbmVlZFRvUmVkcmF3ID0gdHJ1ZTtcbiAgICB9LFxuICAgIGxvYWRpbmdQcm9ncmVzc0hlbHBlci5jcmVhdGVPclVwZGF0ZSAvLyBjYWxsYmFjayB3aGlsZSBsb2FkaW5nXG4gICk7XG5cbiAgY29uc3QgYnVmZmVycyA9IGluaXRCdWZmZXJzKGdsKTtcbiAgZnVuY3Rpb24gaW5pdEJ1ZmZlcnMoZ2wpIHtcblxuICAgIC8vIHBvc2l0aW9uIGJ1ZmZlciBwYXJ0c1xuICAgIGNvbnN0IHBvc2l0aW9ucyA9IHNwaGVyZVZlcnRpY2VzLnBvaXN0aW9ucy5mbGF0KCk7XG5cbiAgICBjb25zdCBwb3NpdGlvbkJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBwb3NpdGlvbkJ1ZmZlcik7XG4gICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkocG9zaXRpb25zKSxcbiAgICAgIGdsLlNUQVRJQ19EUkFXKTtcblxuICAgIC8vIHRleHR1cmUgcGFydHNcbiAgICBjb25zdCB0ZXh0dXJlQ29vcmRzID0gc3BoZXJlVmVydGljZXMudGV4dHVyZUNvb3JkaW5hdGVzLmZsYXQoKTtcblxuICAgIGNvbnN0IHRleHR1cmVDb29yZEJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0ZXh0dXJlQ29vcmRCdWZmZXIpO1xuICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KHRleHR1cmVDb29yZHMpLCBnbC5TVEFUSUNfRFJBVyk7XG5cbiAgICAvLyBidWlsZCB0aGUgZWxlbWVudCBhcnJheS5cbiAgICBjb25zdCBpbmRpY2VzID0gc3BoZXJlVmVydGljZXMuaW5kaWNlcy5mbGF0KCk7XG5cbiAgICBjb25zdCBpbmRleEJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIGluZGV4QnVmZmVyKTtcbiAgICBnbC5idWZmZXJEYXRhKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBuZXcgVWludDE2QXJyYXkoaW5kaWNlcyksXG4gICAgICBnbC5TVEFUSUNfRFJBVyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcG9zaXRpb246IHBvc2l0aW9uQnVmZmVyLFxuICAgICAgdGV4dHVyZUNvb3JkaW5hdGU6IHRleHR1cmVDb29yZEJ1ZmZlcixcbiAgICAgIGluZGljZXM6IGluZGV4QnVmZmVyLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ2FyZWZ1bGx5ISB0aGUgcmFuZ2Ugb2YgdXNlciBzZXR0aW5nIHZlcnRpY2FsIGRlZ3JlZXMgKC05MCB0byA5MCkgaXNcbiAgICogdGhlIHJldmVyc2VkIG9yZGVyIG9mIHRoZSBsYXRpdHVkZSgwIHRvIE1hdGguUEkpIHRoYXQgZGV2ZWxvcHMgbmVlZCwgYWxzbyB3aXRoIHRoZSBvZmZzZXQgb2YgaGFsZiBvZiBQSS5cbiAgICogbGF0aXR1ZGUgMCBtZWFucyB0aGUgbm9ydGggcG9sZSh0aGUgdG9wKSB0aGF0IGlzIHRoZSB1c2VyIHNldHRpbmcgZGVncmVlIDkwLlxuICAgKlxuICAgKiBXaHkgbWFrZSB1c2VyIHNldHRpbmcgYW5kIGFjdHVhbCBkYXRhIHN1Y2ggZGlmZmVyZW50P1xuICAgKiBBbndzZXI6IGVhc3kgZm9yIHVzZS4gYFswLDBdYGFzIHN0YXJ0cG9pbnQgbWF0Y2hlcyB0aGUgbWFuJ3MgaW50dWl0aW9uLlxuICAgKi9cbiAgbGV0IHtsYXRpdHVkZSwgbG9uZ2l0dWRlfSA9IHVzZXJDYW1lcmFEZWdyZWVUb0xhdExvbihjYW1lcmFEZWdyZWUpO1xuICBsZXQgdGFyZ2V0UG9zaXRpb24gPSBsYXRsb25Ub1ZlcnRleChsYXRpdHVkZSwgbG9uZ2l0dWRlKTsgLy8gY2FtZXJhIHRhcmdldCBwb3NpdGlvblxuXG4gIGZ1bmN0aW9uIGRyYXdTY2VuZShnbCwgcHJvZ3JhbUluZm8sIGJ1ZmZlcnMpIHtcbiAgICBnbC5jbGVhckNvbG9yKDAuMCwgMC4wLCAwLjAsIDEuMCk7ICAvLyBDbGVhciB0byBibGFjaywgZnVsbHkgb3BhcXVlXG4gICAgZ2wuY2xlYXJEZXB0aCgxLjApOyAgICAgICAgICAgICAgICAgLy8gQ2xlYXIgZXZlcnl0aGluZ1xuICAgIGdsLmVuYWJsZShnbC5ERVBUSF9URVNUKTsgICAgICAgICAgIC8vIEVuYWJsZSBkZXB0aCB0ZXN0aW5nXG4gICAgZ2wuZGVwdGhGdW5jKGdsLkxFUVVBTCk7ICAgICAgICAgICAgLy8gTmVhciB0aGluZ3Mgb2JzY3VyZSBmYXIgdGhpbmdzXG5cbiAgICAvLyBTZXQgdmlld3BvcnQodGhlIDQgcGFyYW10ZXJzOiB4LHksIHdpZHRoLCBoZWlnaHQsICh4LHkpIGlzIGxlZnQtdG9wIGNvcm5lciBjb29yZGluYXRlKSBvZiBXZWJnbC5cbiAgICAvLyBUZWxsIFdlYkdMIGhvdyB0byBjb252ZXJ0IGZyb20gY2xpcCBzcGFjZSB0byBwaXhlbHNcbiAgICBnbC52aWV3cG9ydCgwLCAwLCBnbC5jYW52YXMud2lkdGgsIGdsLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgLy8gQ2xlYXIgdGhlIGNhbnZhcyBiZWZvcmUgd2Ugc3RhcnQgZHJhd2luZyBvbiBpdC5cblxuICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQgfCBnbC5ERVBUSF9CVUZGRVJfQklUKTtcblxuICAgIC8vIENyZWF0ZSBhIHBlcnNwZWN0aXZlIG1hdHJpeCwgYSBzcGVjaWFsIG1hdHJpeCB0aGF0IGlzXG4gICAgLy8gdXNlZCB0byBzaW11bGF0ZSB0aGUgZGlzdG9ydGlvbiBvZiBwZXJzcGVjdGl2ZSBpbiBhIGNhbWVyYS5cbiAgICAvLyBPdXIgZmllbGQgb2YgdmlldyBpcyA0NSBkZWdyZWVzLCB3aXRoIGEgd2lkdGgvaGVpZ2h0XG4gICAgLy8gcmF0aW8gdGhhdCBtYXRjaGVzIHRoZSBkaXNwbGF5IHNpemUgb2YgdGhlIGNhbnZhc1xuICAgIC8vIGFuZCB3ZSBvbmx5IHdhbnQgdG8gc2VlIG9iamVjdHMgYmV0d2VlbiAwLjEgdW5pdHNcbiAgICAvLyBhbmQgMTAwIHVuaXRzIGF3YXkgZnJvbSB0aGUgY2FtZXJhLlxuXG4gICAgY29uc3QgZmllbGRPZlZpZXcgPSBmb3YgKiBNYXRoLlBJIC8gMTgwOyAgIC8vIGluIHJhZGlhbnNcbiAgICBjb25zdCBhc3BlY3QgPSBnbC5jYW52YXMuY2xpZW50V2lkdGggLyBnbC5jYW52YXMuY2xpZW50SGVpZ2h0O1xuICAgIGNvbnN0IHpOZWFyID0gMC4xO1xuICAgIGNvbnN0IHpGYXIgPSAxMDAuMDtcbiAgICBjb25zdCBwcm9qZWN0aW9uTWF0cml4ID0gbTQucGVyc3BlY3RpdmUoXG4gICAgICBmaWVsZE9mVmlldyxcbiAgICAgIGFzcGVjdCxcbiAgICAgIHpOZWFyLFxuICAgICAgekZhcik7XG5cbiAgICAvLyBDYW1lcmEgbWF0cml4XG4gICAgY29uc3QgY2FtZXJhVXAgPSBbMCwgMSwgMF07XG4gICAgbGV0IGNhbWVyYU1hdHJpeCA9IG00Lmxvb2tBdChbMCwgMCwgMF0sIHRhcmdldFBvc2l0aW9uLCBjYW1lcmFVcCk7XG5cbiAgICAvLyBjYW1lcmFNYXRyaXggPSBtNC50cmFuc2xhdGUoY2FtZXJhTWF0cml4LCAwLCAwLCAtMyk7XG5cbiAgICAvLyBTZXQgdGhlIGRyYXdpbmcgcG9zaXRpb24gdG8gdGhlIFwiaWRlbnRpdHlcIiBwb2ludCwgd2hpY2ggaXNcbiAgICAvLyB0aGUgY2VudGVyIG9mIHRoZSBzY2VuZS5cbiAgICBsZXQgbW9kZWxWaWV3TWF0cml4ID0gbTQuaW52ZXJzZShjYW1lcmFNYXRyaXgpO1xuXG4gICAgbGV0IHNjYWxlID0gbTQuc2NhbGluZygtMSwgMSwgMSk7XG4gICAgbW9kZWxWaWV3TWF0cml4ID0gbTQubXVsdGlwbHkobW9kZWxWaWV3TWF0cml4LCBzY2FsZSk7XG5cbiAgICAvLyBUZWxsIFdlYkdMIGhvdyB0byBwdWxsIG91dCB0aGUgcG9zaXRpb25zIGZyb20gdGhlIHBvc2l0aW9uXG4gICAgLy8gYnVmZmVyIGludG8gdGhlIHZlcnRleFBvc2l0aW9uIGF0dHJpYnV0ZS5cbiAgICB7XG4gICAgICBjb25zdCBudW1Db21wb25lbnRzID0gMzsgIC8vIHB1bGwgb3V0IDMgKHgseSx6KSB2YWx1ZXMgcGVyIGl0ZXJhdGlvblxuICAgICAgY29uc3QgdHlwZSA9IGdsLkZMT0FUOyAgICAvLyB0aGUgZGF0YSBpbiB0aGUgYnVmZmVyIGlzIDMyYml0IGZsb2F0c1xuICAgICAgY29uc3Qgbm9ybWFsaXplID0gZmFsc2U7ICAvLyBkb24ndCBub3JtYWxpemVcbiAgICAgIGNvbnN0IHN0cmlkZSA9IDA7ICAgICAgICAgLy8gaG93IG1hbnkgYnl0ZXMgdG8gZ2V0IGZyb20gb25lIHNldCBvZiB2YWx1ZXMgdG8gdGhlIG5leHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMCA9IHVzZSB0eXBlIGFuZCBudW1Db21wb25lbnRzIGFib3ZlXG4gICAgICBjb25zdCBvZmZzZXQgPSAwOyAgICAgICAgIC8vIGhvdyBtYW55IGJ5dGVzIGluc2lkZSB0aGUgYnVmZmVyIHRvIHN0YXJ0IGZyb21cbiAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBidWZmZXJzLnBvc2l0aW9uKTtcbiAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoXG4gICAgICAgICAgcHJvZ3JhbUluZm8uYXR0cmliTG9jYXRpb25zLnZlcnRleFBvc2l0aW9uLFxuICAgICAgICAgIG51bUNvbXBvbmVudHMsXG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICBub3JtYWxpemUsXG4gICAgICAgICAgc3RyaWRlLFxuICAgICAgICAgIG9mZnNldCk7XG4gICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShcbiAgICAgICAgICBwcm9ncmFtSW5mby5hdHRyaWJMb2NhdGlvbnMudmVydGV4UG9zaXRpb24pO1xuICAgIH1cblxuICAgIC8vIHRlbGwgd2ViZ2wgaG93IHRvIHB1bGwgb3V0IHRoZSB0ZXh0dXJlIGNvb3JkaW5hdGVzIGZyb20gYnVmZmVyXG4gICAge1xuICAgICAgY29uc3QgbnVtQ29tcG9uZW50cyA9IDI7IC8vIGV2ZXJ5IGNvb3JkaW5hdGUgY29tcG9zZWQgb2YgMiB2YWx1ZXNcbiAgICAgIGNvbnN0IHR5cGUgPSBnbC5GTE9BVDsgLy8gdGhlIGRhdGEgaW4gdGhlIGJ1ZmZlciBpcyAzMiBiaXQgZmxvYXRcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZSA9IGZhbHNlOyAvLyBkb24ndCBub3JtYWxpemVcbiAgICAgIGNvbnN0IHN0cmlkZSA9IDA7IC8vIGhvdyBtYW55IGJ5dGVzIHRvIGdldCBmcm9tIG9uZSBzZXQgdG8gdGhlIG5leHRcbiAgICAgIGNvbnN0IG9mZnNldCA9IDA7IC8vIGhvdyBtYW55IGJ5dGVzIGluc2lkZSB0aGUgYnVmZmVyIHRvIHN0YXJ0IGZyb21cbiAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBidWZmZXJzLnRleHR1cmVDb29yZGluYXRlKTtcbiAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoXG4gICAgICAgIHByb2dyYW1JbmZvLmF0dHJpYkxvY2F0aW9ucy50ZXh0dXJlQ29vcmRpbmF0ZSxcbiAgICAgICAgIG51bUNvbXBvbmVudHMsIHR5cGUsIG5vcm1hbGl6ZSwgc3RyaWRlLCBvZmZzZXQpO1xuICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkocHJvZ3JhbUluZm8uYXR0cmliTG9jYXRpb25zLnRleHR1cmVDb29yZGluYXRlKTtcbiAgICB9XG5cbiAgICAvLyBUZWxsIFdlYkdMIHdoaWNoIGluZGljZXMgdG8gdXNlIHRvIGluZGV4IHRoZSB2ZXJ0aWNlc1xuICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIGJ1ZmZlcnMuaW5kaWNlcyk7XG5cbiAgICAvLyBUZWxsIFdlYkdMIHRvIHVzZSBvdXIgcHJvZ3JhbSB3aGVuIGRyYXdpbmdcblxuICAgIGdsLnVzZVByb2dyYW0ocHJvZ3JhbUluZm8ucHJvZ3JhbSk7XG5cbiAgICAvLyBTZXQgdGhlIHNoYWRlciB1bmlmb3Jtc1xuXG4gICAgZ2wudW5pZm9ybU1hdHJpeDRmdihcbiAgICAgICAgcHJvZ3JhbUluZm8udW5pZm9ybUxvY2F0aW9ucy5wcm9qZWN0aW9uTWF0cml4LFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgcHJvamVjdGlvbk1hdHJpeCk7XG4gICAgZ2wudW5pZm9ybU1hdHJpeDRmdihcbiAgICAgICAgcHJvZ3JhbUluZm8udW5pZm9ybUxvY2F0aW9ucy5tb2RlbFZpZXdNYXRyaXgsXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBtb2RlbFZpZXdNYXRyaXgpO1xuXG4gICAgLyogU3BlY2lmeSB0aGUgdGV4dHVyZSB0byBtYXAgb250byB0aGUgZmFjZXMuICovXG5cbiAgICAvLyBUZWxsIFdlYkdMIHdlIHdhbnQgdG8gYWZmZWN0IHRleHR1cmUgdW5pdCAwXG4gICAgZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMCk7XG5cbiAgICAvLyBCaW5kIHRoZSB0ZXh0dXJlIHRvIHRleHR1cmUgdW5pdCAwXG4gICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZSk7XG5cbiAgICAvLyBUZWxsIHRoZSBzaGFkZXIgd2UgYm91bmQgdGhlIHRleHR1cmUgdG8gdGV4dHVyZSB1bml0IDBcbiAgICBnbC51bmlmb3JtMWkocHJvZ3JhbUluZm8udW5pZm9ybUxvY2F0aW9ucy51U2FtcGxlciwgMCk7XG5cbiAgICB7XG4gICAgICBjb25zdCB2ZXJ0ZXhDb3VudCA9IHNwaGVyZVZlcnRpY2VzLmluZGljZXMubGVuZ3RoKjM7XG4gICAgICBjb25zdCB0eXBlID0gZ2wuVU5TSUdORURfU0hPUlQ7XG4gICAgICBjb25zdCBvZmZzZXQgPSAwO1xuICAgICAgZ2wuZHJhd0VsZW1lbnRzKGdsLlRSSUFOR0xFUywgdmVydGV4Q291bnQsIHR5cGUsIG9mZnNldCk7XG4gICAgfVxuICB9IC8vW2VuZF0gZHJhd1NjZW5lIGZ1bmN0aW9uXG5cbiAgLy8gbG9jayBsYXRpdHVkZSByYW5nZSwgbm90IHBhc3MgdHdvIHBvbGVzXG4gIGNvbnN0IG1heExhdCA9IE1hdGguUEkgKiAoMSAtIDAuMDUpOyAvLyAwLjk1XG4gIGNvbnN0IG1pbkxhdCA9IE1hdGguUEkgKiAoMCArIDAuMDUpOyAvLyAwLjA1XG4gIGNvbnN0IGNsYW1wTGF0aXR1ZGUgPSBjdXJyeShjbGFtcCwgW21pbkxhdCwgbWF4TGF0XSk7XG5cbiAgY29uc3Qge2JlZm9yZVVwZGF0ZUNhbWVyYSwgdXBkYXRlQ2FtZXJhLCBmaW5pc2hVcGRhdGVDYW1lcmF9ID0gKGZ1bmN0aW9uKCl7XG4gICAgLy8gc3RvcmUgY3VycmVudCBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlIGR1cmluZyBkcmFnZ2luZy5cbiAgICAvLyBvbmx5IHVwZGF0ZSB0aGUgYWN0dWFsIGxhdGl0dWRlIGFuZCBsb25naXR1ZGUgYWZ0ZXIgZmluaXNoIGRyYWdnaW5nLlxuICAgIGxldCBsYXQ7XG4gICAgbGV0IGxvbjtcblxuICAgIGZ1bmN0aW9uIGJlZm9yZVVwZGF0ZUNhbWVyYSgpIHtcbiAgICAgIGxhdCA9IGxhdGl0dWRlO1xuICAgICAgbG9uID0gbG9uZ2l0dWRlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqICBUaGUgZnVuY3Rpb24gdG8gY2hhbmdlIHRoZSBjYW1lcmEncyB0YXJnZXQgdGhhdCBpdCBsb29rcyBhdCxcbiAgICAgKiAgQWxzbyB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBpcyBwYXNzZWQgaW4gdGhlIGRyYWcgYW5kIG1vdmUgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGVsdGFYIHRoZSBjdXJyZW50IGxhdGl0dWRlIHdoaWNoIGNhbWVyYSB0YXJnZXRzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRlbHRhWSAgdGhlIGN1cnJlbnQgbG9uZ2l0dWRlIHdoaWNoIGNhbWVyYSB0YXJnZXRzXG4gICAgICovXG4gICAgZnVuY3Rpb24gdXBkYXRlQ2FtZXJhKGRlbHRhWCwgZGVsdGFZKSB7XG4gICAgICAvLyB1cGRhdGUgdGhlIGxhdGxvbiBieSBhZGRpbmcgZGVsdGEgdmFsdWVcbiAgICAgIC8vIFRyZWF0IHRoZSBkZWx0YSB2YWx1ZSBhcyB0aGUgbW92ZW1lbnQgb24gdGhlIGNpcmN1bWZlcmVuY2UodmVyeSBjbG9zZSksXG4gICAgICAvLyBhbmQgY2FsY3VsYXRlIHRoZSByYXRpbyBvZiB0aGUgbW92ZW1lbnQgb3ZlciBjaXJjdW1mZXJlbmNlIGFuZCBnZXQgdGhlIHJhZGlhblxuICAgICAgLy8gZGVsdGEgbG9uZ2l0dWRlID0gZGVsdGFYIC8gY2lyY3VtZmVyZW5jZSAqICgyKk1hdGguUEkpLFxuICAgICAgLy8gYmVjYXN1c2UgY2lyY3VtZmVyZW5jZSBpcyAoMipNYXRoLlBJKnJhZGl1cyksIHNvIHRoZSBzaW1wbGlmeSBmb3JtdWxhciBpcyBkZWx0YVggLyByYWRpdXMuXG4gICAgICBsZXQgZGVsdGFMb24gPSBkZWx0YVggLyByYWRpdXM7XG4gICAgICBsZXQgZGVsYXRMYXQgPSBkZWx0YVkgLyByYWRpdXM7XG5cbiAgICAgIGxhdGl0dWRlID0gZGVsYXRMYXQrbGF0O1xuICAgICAgbG9uZ2l0dWRlID0gZGVsdGFMb24rbG9uO1xuXG4gICAgICBsYXRpdHVkZSA9IGNsYW1wTGF0aXR1ZGUobGF0aXR1ZGUpO1xuXG4gICAgICAvLyBjb21wdXRlIHRoZSBsb29rQXQgdmVydGljZS5cbiAgICAgIHRhcmdldFBvc2l0aW9uID0gbGF0bG9uVG9WZXJ0ZXgobGF0aXR1ZGUsIGxvbmdpdHVkZSk7XG5cbiAgICAgIG5lZWRUb1JlZHJhdyA9IHRydWU7IC8vIHJlZHJhdyB0aGUgc2NlbmVcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaW5pc2hVcGRhdGVDYW1lcmEoKSB7XG4gICAgICAvLyB1cGRhdGUgdGhlIGFjdHVhbCB2YXJpYmxlIGxhdGl0dWRlIGFuZCBsb25naXR1ZGUgdW50aWwgZHJhZ2dpbmcgaXMgZG9uZS5cbiAgICAgIC8vIGxhdGl0dWRlID0gbGF0O1xuICAgICAgLy8gbG9uZ2l0dWRlID0gbG9uO1xuICAgIH1cblxuICAgIHJldHVybiB7YmVmb3JlVXBkYXRlQ2FtZXJhLCB1cGRhdGVDYW1lcmEsIGZpbmlzaFVwZGF0ZUNhbWVyYX07XG4gIH0pKCk7XG5cbiAgLy8gaGFuZGxlIHVzZXIgaW5wdXQgYW5kIGNvbnRyb2wgdGhlIGNhbWVyYSwgbW91c2UgYW5kIHRvdWNoXG4gIGxldCBtb3VzZUV2ZW50SGFuZGxlcnMgPSB1c2VyQ29udHJvbEhhbmRsZXIoYmVmb3JlVXBkYXRlQ2FtZXJhLCB1cGRhdGVDYW1lcmEsIGZpbmlzaFVwZGF0ZUNhbWVyYSwgZmFsc2UpO1xuICBsZXQgdG91Y2hFdmVudEhhbmRsZXJzID0gdXNlckNvbnRyb2xIYW5kbGVyKGJlZm9yZVVwZGF0ZUNhbWVyYSwgdXBkYXRlQ2FtZXJhLCBmaW5pc2hVcGRhdGVDYW1lcmEsIHRydWUpO1xuXG5cbiAgLy8gcmVnaXN0ZXIgbW91c2UgZHJhZyBldmVudHNcbiAgY29uc3QgbW91c2VFdmVudFR5cGVzID0gW1wibW91c2Vkb3duXCIsIFwibW91c2Vtb3ZlXCIsIFwibW91c2V1cFwiXTtcblxuICBPYmplY3Qua2V5cyhtb3VzZUV2ZW50SGFuZGxlcnMpLm1hcCgoa2V5LCBpZHgpID0+IHtcbiAgICB3cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudFR5cGVzW2lkeF0sIG1vdXNlRXZlbnRIYW5kbGVyc1trZXldLCBmYWxzZSk7XG4gIH0pO1xuXG4gIC8vIHJlZ2lzdGVyIHRvdWNoIGRyYWcgZXZlbnRzXG4gIGNvbnN0IHRvdWNoRXZlbnRUeXBlcyA9IFtcInRvdWNoc3RhcnRcIiwgXCJ0b3VjaG1vdmVcIiwgXCJ0b3VjaGVuZFwiXTtcblxuICBPYmplY3Qua2V5cyh0b3VjaEV2ZW50SGFuZGxlcnMpLm1hcCgoa2V5LCBpZHgpID0+IHtcbiAgICB3cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudFR5cGVzW2lkeF0sIHRvdWNoRXZlbnRIYW5kbGVyc1trZXldLCBmYWxzZSk7XG4gIH0pO1xuXG5cblxuICBjb25zdCBkZXZpY2VPcmllbnRhdGlvbkhlbHBlciA9IGNyZWF0ZURldmljZU9yaWVudGF0aW9uSGVscGVyKChkZWx0YUFscGhhLCBkZWx0YUJldGEpID0+IHtcbiAgICAvLyBkZWx0YSB2YWx1ZXMgYXJlIGNhbGN1bGF0ZWQgaW4gZGVncmVlcy4gY29udmVydCB0aG9zZSB0byBsYXRsb24gcmFkaWFucyBhbmQgdXNlIGRpcmVjdGx5XG4gICAgY29uc3QgZGVsdGFMb24gPSBkZWdyZWVUb1JhZGlhbihkZWx0YUFscGhhKTtcbiAgICBjb25zdCBkZWx0YUxhdCA9IGRlZ3JlZVRvUmFkaWFuKGRlbHRhQmV0YSk7XG5cbiAgICBsYXRpdHVkZSAtPSBkZWx0YUxhdDtcbiAgICBsb25naXR1ZGUgLT0gZGVsdGFMb247XG5cbiAgICAvLyBjbGFtcCBsYXRpdHVkZSBiZXd0ZWVuIHNvdXRoIGFuZCBub3J0aCBwb2xlcy5cbiAgICBsYXRpdHVkZSA9IGNsYW1wTGF0aXR1ZGUobGF0aXR1ZGUpO1xuXG4gICAgdGFyZ2V0UG9zaXRpb24gPSBsYXRsb25Ub1ZlcnRleChsYXRpdHVkZSwgbG9uZ2l0dWRlKTtcbiAgICBuZWVkVG9SZWRyYXcgPSB0cnVlO1xuXG4gIH0pO1xuICAvLyByZWlnc3RlciBkZXZpY2Ugb3JpZW50YXRpb24gZXZlbnQgdG8gd2luZG93LlxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImRldmljZW9yaWVudGF0aW9uXCIsIGRldmljZU9yaWVudGF0aW9uSGVscGVyLmhhbmRsZXIsIHRydWUpO1xuICAvLyBiaW5kIGNsaWNrIGV2ZW50IG9uIHN3aXRjaFxuICBvcmllbnRhdGlvblN3aXRjaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBjb25zdCBlbmFibGVkID0gb3JpZW50YXRpb25Td2l0Y2hIZWxwZXIuZmxpcCgpOyAvLyB1cGRhdGUgc3dpdGNoIHN0YXR1c1xuICAgIGRldmljZU9yaWVudGF0aW9uSGVscGVyLnNldEVuYWJsZWQoZW5hYmxlZCk7XG4gIH0sIGZhbHNlKTtcbiAgLy8gaW5pdCBzdGF0dXNcbiAgZGV2aWNlT3JpZW50YXRpb25IZWxwZXIuc2V0RW5hYmxlZChzZXR0aW5nLmRldmljZU9yaWVudGF0aW9uRW5hYmxlZCk7XG5cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGRpc3BsYXkgc2l6ZShgY2FudmFzLmNsaWVudFdpZHRoYCBhbmQgYGNhbnZhcy5jbGllbnRIZWlnaHRgKSB3aGV0aGVyIGl0J3MgY2hhbmdlZC5cbiAgICogVXBkYXRlIHRoZSBjYW52YXMgcmVuZGVyIHNpemUoYGNhbnZhcy53aWR0aGAgYW5kIGBjYW52YXMuaGVpZ2h0YCkgdG8gdGhlIGN1cnJlbnQgZGlzcGxheSBzaXplLlxuICAgKiBBbmQgcmV0dXJuIGB0cnVlYCB3aGVuIHRoZSBzaXplIGlzIGNoYW5nZWQsIG90aGVyd2lzZSBgZmFsc2VgXG4gICAqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWU6IG5lZWQgcmVzaXplOyBmYWxzZTogbm8gbmVlZC5cbiAgICovXG4gIGZ1bmN0aW9uIHJlc2l6ZSgpe1xuICAgIHZhciBwaXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8/IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvOiAxO1xuXG4gICAgY29uc3QgY2xpZW50V2lkdGggPSBnbC5jYW52YXMuY2xpZW50V2lkdGggKiBwaXhlbFJhdGlvO1xuICAgIGNvbnN0IGNsaWVudEhlaWdodCA9IGdsLmNhbnZhcy5jbGllbnRIZWlnaHQgKiBwaXhlbFJhdGlvO1xuXG4gICAgaWYgKGdsLmNhbnZhcy53aWR0aCAhPT0gY2xpZW50V2lkdGggfHwgZ2wuY2FudmFzLmhlaWdodCAhPT0gY2xpZW50SGVpZ2h0KXtcbiAgICAgIGdsLmNhbnZhcy53aWR0aCA9IGNsaWVudFdpZHRoO1xuICAgICAgZ2wuY2FudmFzLmhlaWdodCA9IGNsaWVudEhlaWdodDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBsZXQgbmVlZFRvUmVkcmF3ID0gdHJ1ZTtcbiAgLy8gRHJhdyB0aGUgc2NlbmUgcmVwZWF0ZWRseVxuICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgaWYocmVzaXplKCkgfHwgbmVlZFRvUmVkcmF3KXtcbiAgICAgIC8vIG5lZWQgZHJhd1xuICAgICAgbmVlZFRvUmVkcmF3ID0gZmFsc2U7XG4gICAgICBkcmF3U2NlbmUoZ2wsIHByb2dyYW1JbmZvLCBidWZmZXJzKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgfVxuXG4gIHJlbmRlcigpOyAvLyBpbml0IGNhbGwgYHJlbmRlcigpYFxuXG4gIC8vIGRyYXdTY2VuZShnbCwgcHJvZ3JhbUluZm8sIGJ1ZmZlcnMpO1xuXG4gIHJldHVybiB7Y29udGFpbmVyfTtcbn0gLy8gW2VuZF0gZnVuY3Rpb24gcGFub3JhbWFcblxuLyoqXG4gKiBDb252ZXJ0IHVzZXIgaW5wdXQgY2FtZXJlIGRlZ3JlZSB0byBhY3R1YWwgbG9uZ2l0dWRlIGFuZCBsYXRpdHVkZSB0aGF0XG4gKiBhcmUgdXNlZCBmb3IgY2FtZXJhIGxvb2tBdCBwb2lzaXRpb24gbWF0cml4LlxuICogQmVjYXVzZSBsYXRsb24gYXJlIGluIHJhZGlhbnMuIEZvciBlYXN5IHVzZSwgdGhlIHVzZXIgaW5wdXQgaXMgaW4gZGVncmVlLlxuICogQWxzbyB0aGUgbGF0aXR1ZGUgcmFuZ2VzIGZyb20gMCB0byBQSSB0aGF0IGFyZSBsaWtlIE5vcnRoIFBvbGUgYW5kIFNvdXRoIFBvbGUgb24gdGhlIEVhcnRoLFxuICogQ29ycmVzcG9uZCB0byBsYXRpdHVkZSwgdGhlIHVzZXIgaW5wdXQgdmVydGljYWwgZGVncmVlIHJhbmdlcyBmcm9tIDkwIHRvIC05MCB0aGF0XG4gKiBpcyByZXZlcnNlZCBvcmRlciBvZiBsYXRpdHVkZSBhbmQgaXMgb2Zmc2V0IGhhbGYgb2YgUEkuXG4gKlxuICogQHBhcmFtIHtOdW1iZXIgQXJyYXl9IGRlZ3JlZSAgdHdvIG51bWJlciBhcnJheSBjb250YWlucyB0aGUgaG9yaXpvbmFsIGRlZ3JlZSBhbmRcbiAqICB0aGUgdmVydGljYWwgZGVncmVlLlxuICovXG5mdW5jdGlvbiB1c2VyQ2FtZXJhRGVncmVlVG9MYXRMb24oZGVncmVlKXtcbiAgbGV0IGxhdGl0dWRlID0gIC1kZWdyZWVUb1JhZGlhbihkZWdyZWVbMV0pICsgKE1hdGguUEkgLyAyKTtcbiAgbGV0IGxvbmdpdHVkZSA9ICBkZWdyZWVUb1JhZGlhbihkZWdyZWVbMF0pOyAvLyB0cmFucyB0byByYWRpYW4gZGlyZWN0bHlcbiAgcmV0dXJuIHtsYXRpdHVkZTogbGF0aXR1ZGUsIGxvbmdpdHVkZTogbG9uZ2l0dWRlfTtcbn1cblxuLy8gY29tcHV0ZSB0aGUgcmFkaWFuIG9mIHRoZSBkZWdyZWUuIDkwZGVnIC0+IFBJLzI7IDE4MGRlZyAtPiBQSTsgNDVkZWctPiBQSS80O1xuY29uc3QgZGVncmVlVG9SYWRpYW4gPSAoZGVnKSA9PiAoZGVnIC8gMTgwICogTWF0aC5QSSk7XG5jb25zdCByYWRpYW5Ub0RlZ3JlZSA9IChyYWRpYW4pID0+IChyYWRpYW4gLyBNYXRoLlBJICogMTgwKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGxhdGl0dWRlIGFuZCBsb25naXR1ZGUgdG8gdGhlIGNvcnJlc3BvbmQgdmVydGV4IGluIFt4LHksel0uICh0aGUgdGFyZ2V0IHBvaW50IGluIHRoZSBzcGhlcmUgd2hvc2UgcmFkaXVzIGlzIDEpXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxhdGl0dWRlIHRoZSByYWRpYW4gb2YgbGF0aXR1ZGUsIG5vcm1hbGx5IGZyb20gLVBJIHRvIFBJLlxuICogQHBhcmFtIHtudW1iZXJ9IGxvbmdpdHVkZSB0aGUgcmFkaWFuIG9mIGxvZ2l0dWRlLCBub3JtYWxseSBmcm9tIDAgdG8gMipQSS5cbiAqL1xuZnVuY3Rpb24gbGF0bG9uVG9WZXJ0ZXgobGF0aXR1ZGUsIGxvbmdpdHVkZSl7XG4gIGNvbnN0IHRoZXRhID0gbG9uZ2l0dWRlO1xuICBjb25zdCBwaGkgPSBsYXRpdHVkZTtcblxuICBjb25zdCBzaW5UaGV0YSA9IE1hdGguc2luKHRoZXRhKSwgY29zVGhldGEgPSBNYXRoLmNvcyh0aGV0YSk7XG4gIGNvbnN0IHNpblBoaSA9IE1hdGguc2luKHBoaSksIGNvc3RQaGkgPSBNYXRoLmNvcyhwaGkpO1xuXG4gIGNvbnN0IHV4ID0gY29zVGhldGEgKiBzaW5QaGk7XG4gIGNvbnN0IHV5ID0gY29zdFBoaTtcbiAgY29uc3QgdXogPSBzaW5UaGV0YSAqIHNpblBoaTtcblxuICByZXR1cm4gW3V4LCB1eSwgdXpdO1xufVxuXG5jb25zdCBjcmVhdGVEZXZpY2VPcmllbnRhdGlvbkhlbHBlciA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBsZXQgZW5hYmxlZCA9IHRydWU7XG5cbiAgbGV0IGFscGhhQmVmb3JlLCBiZXRhQmVmb3JlO1xuICBmdW5jdGlvbiBkZXZpY2VPcmllbnRhdGlvbkhhbmRsZXIoZXZlbnQpIHtcbiAgICBpZiAoZW5hYmxlZCkgeyAvLyByZWNvcmQgbW90aW9uKG9yaWVudGF0aW9uKSBkYXRhXG4gICAgICBjb25zdCB7YWxwaGEsIGJldGF9ID0gZXZlbnQ7IC8vIGN1cnJlbnQgb3JpZW50YXRpb24gZGF0YVxuXG4gICAgICBpZiAodHlwZW9mIGFscGhhQmVmb3JlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIC8vIG5vIGRhdGEgcmVjb3JkZWQgYmVmb3JlLCBzZXQgcHJldmlvdXMgdmFsdWUgZGlyZWN0bHkuXG4gICAgICAgIGFscGhhQmVmb3JlID0gYWxwaGE7XG4gICAgICAgIGJldGFCZWZvcmUgPSBiZXRhO1xuICAgICAgfVxuXG4gICAgICAvLyBjYWxjdWxhdGUgdGhlIGRlbHRhLCB0aGVuIGludm9rZSBjYWxsYmFja1xuICAgICAgY29uc3QgZGVsdGFBbHBoYSA9IGFscGhhIC0gYWxwaGFCZWZvcmU7XG4gICAgICBjb25zdCBkZWx0YUJldGEgPSBiZXRhIC0gYmV0YUJlZm9yZTtcbiAgICAgIC8vIHJlY29yZCBkYXRhXG4gICAgICBhbHBoYUJlZm9yZSA9IGFscGhhO1xuICAgICAgYmV0YUJlZm9yZSA9IGJldGE7XG5cbiAgICAgIC8vIGludm9rZSBjYWxsYmFja1xuICAgICAgY2FsbGJhY2soZGVsdGFBbHBoYSwgZGVsdGFCZXRhKTtcblxuICAgIH0gZWxzZSB7IC8vIGRpc2FibGUgb3JpZW50YXRpb25cbiAgICAgIGFscGhhQmVmb3JlID0gdW5kZWZpbmVkO1xuICAgICAgYmV0YUJlZm9yZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRFbmFibGVkKGJvb2wpIHtcbiAgICBlbmFibGVkID0gYm9vbDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaGFuZGxlcjogZGV2aWNlT3JpZW50YXRpb25IYW5kbGVyLFxuICAgIHNldEVuYWJsZWRcbiAgfTtcbn07XG5cbi8qKlxuICogR2VuZXJhdGUgdGhlIHRocmVlIGV2ZW50IGhhbmRsZXIgZm9yIHVzZXIncyBpbnB1dCBjb250cm9sIHdoZW4gaXMgZHJhZ2dpbmcuXG4gKiBgc3RhcnRIYW5kbGVyYCBpcyB1c2VkIGZvciB0aGUgYmVnaW4gb2YgdGhlIGRyYWdnaW5nIGNvbnRyb2wsIGhhbmRsZSBgbW91c2Vkb3duYCBldmVudCBvciBgdG91Y2hzdGFydGAgZXZlbnQuXG4gKiBgbW92ZUhhbmRsZXJgIGlzIHVzZWQgd2hlbiB1c2VyIGlzIGRyYWdnaW5nLCBoYW5kbGUgYG1vdXNlbW92ZWAgZXZlbnQgb3IgYHRvdWNobW92ZWAgZXZlbnQuXG4gKiBgZW5kSGFuZGxlcmAgaXMgdXNlZCBmb3IgdGhlIGVuZCBvZiB0aGUgZHJhZ2dpbmcgY29udHJvbCwgaGFuZGxlIGBtb3VzZXVwYCBvciAgYHRvdWNoZW5kYCBldmVudC5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBkcmFnZ2luZ0NhbGxiYWNrIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBoYW5kbGUgdXNlciBkcmFnIG1vdmVtZW50IHdoZW4gdXNlciBpcyBkcmFnZ2luZy5cbiAqICBwYXNzZWQgdHdvIGFyZ3VtZW50cyBjdXJyZW50IGRlbHRhWCBhbmQgZGVsdGFZKHVzZXIgbW92ZW1lbnQgaW4gcGl4ZWwpIHRoYXQgaXMgdXNlZCBsYXRlciB0byBjb21wdXRlIHRoZSBjYW1lcmEgYGxvb2sgYXRgICh0YXJnZXQgcG9zaXRpb24pLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNUb3VjaD1mYWxzZV0gdHJ1ZSBpZiB1c2VyIHVzZSB0b3VjaCBkZXZpY2UgdG8gZHJhZyBhbmQgbW92ZSwgZmFsc2Ugb3RoZXJ3aXNlKGxpa2UgbW91c2UpLlxuICogQHBhcmFtIHtudW1iZXJ9IFttb3ZlU3BlZWQ9MV0gdGhlIG11bHRpcGxpZXIgb2YgdGhlIHVzZXIgbW92ZW1lbnQgc3BlZWQsIGRlZmF1bHQgaXQncyAxIHRoYXQgaXMgbm9ybWFsIHNwZWVkIGFuZCBubyBjaGFuZ2UuXG4gKi9cbmNvbnN0IHVzZXJDb250cm9sSGFuZGxlciA9IGZ1bmN0aW9uIChzdGFydERyYWdDYWxsYmFjaywgZHJhZ2dpbmdDYWxsYmFjaywgZW5kRHJhZ0NhbGxiYWNrLCBpc1RvdWNoLCBtb3ZlU3BlZWQpIHtcblxuICBsZXQgc3RhcnRYID0gMDtcbiAgbGV0IHN0YXJ0WSA9IDA7XG4gIGxldCBpc1VzZXJEcmFnZ2luZyA9IGZhbHNlOyAvLyB0cnVlIGR1cmluZyB1c2VyIGRyYWdzXG5cbiAgLy8gc2V0IGRlZmF1bHQgdmFsdWUgMSB0byBtb3ZlU3BlZWRcbiAgaWYgKHR5cGVvZiBtb3ZlU3BlZWQgPT09IFwidW5kZWZpbmVkXCIpIHttb3ZlU3BlZWQgPSAxO31cblxuICAvLyBnZXQgY2xpZW50WCBhbmQgY2xpZW50WSBlaXRoZXIgZnJvbSBtb3VzZShjbGljaykgb3IgdG91Y2guXG4gIGNvbnN0IGdldFhZID0gaXNUb3VjaCA/XG4gICAgKGV2ZW50VGFyZ2V0KSA9PiAoe3g6IGV2ZW50VGFyZ2V0LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsIHk6IGV2ZW50VGFyZ2V0LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFl9KSA6XG4gICAgKGV2ZW50VGFyZ2V0KSA9PiAoe3g6IGV2ZW50VGFyZ2V0LmNsaWVudFgsIHk6IGV2ZW50VGFyZ2V0LmNsaWVudFl9KTtcblxuXG4gIGZ1bmN0aW9uIHN0YXJ0SGFuZGxlcihldmVudCl7XG4gICAgaWYoaXNUb3VjaCAhPT0gdHJ1ZSl7IC8vIERPIE5PVCBwcmV2ZW50IHdoZW4gaXMgdG91Y2ggZXZlbnQuIGNhdXNlIHRvdWNoIGRyYWdnaW5nIHByb2JsZW0gYW5kIHRvdWNoIGNsaWNrIG5vdCB3b3JrLlxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpc1VzZXJEcmFnZ2luZyA9IHRydWU7XG5cbiAgICBsZXQge3gsIHl9ID0gZ2V0WFkoZXZlbnQpO1xuICAgIHN0YXJ0WCA9IHg7XG4gICAgc3RhcnRZID0geTtcblxuICAgIHN0YXJ0RHJhZ0NhbGxiYWNrKCk7XG4gIH1cblxuICBmdW5jdGlvbiBtb3ZlSGFuZGxlcihldmVudCl7XG5cbiAgICBpZiAoaXNVc2VyRHJhZ2dpbmcgPT09IHRydWUpIHtcbiAgICAgIGxldCB7eCwgeX0gPSBnZXRYWShldmVudCk7XG4gICAgICBsZXQgZGVsdGFYID0geCAtIHN0YXJ0WDtcbiAgICAgIGxldCBkZWx0YVkgPSB5IC0gc3RhcnRZO1xuXG4gICAgICBkZWx0YVggPSBkZWx0YVggKiBtb3ZlU3BlZWQ7XG4gICAgICBkZWx0YVkgPSBkZWx0YVkgKiBtb3ZlU3BlZWQ7XG5cbiAgICAgIGRyYWdnaW5nQ2FsbGJhY2soZGVsdGFYLCBkZWx0YVkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGVuZEhhbmRsZXIoZXZlbnQpe1xuICAgIGlzVXNlckRyYWdnaW5nID0gZmFsc2U7IC8vIHJlc2V0XG5cbiAgICBlbmREcmFnQ2FsbGJhY2soKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc3RhcnRIYW5kbGVyLFxuICAgIG1vdmVIYW5kbGVyLFxuICAgIGVuZEhhbmRsZXIsXG4gIH07XG59OyAvLyBbZW5kXSByZXR1cm4gYWN0dWFsIGZ1bmN0aW9uXG5cblxuY29uc3QgbG9hZGluZ1Byb2dyZXNzRmFjdG9yeSA9IGZ1bmN0aW9uKHBhcmVudCwgdGV4dD1cIlwiKXtcbiAgbGV0IHByb2dyZXNzV3JhcHBlciA9IHVuZGVmaW5lZDsgLy8gc3RvcmUgRE9NRWxlbWVudCBsYXRlclxuICBsZXQgcHJvZ3Jlc3NCYXIgPSB1bmRlZmluZWQ7XG4gIGxldCBtZXNzYWdlID0gdW5kZWZpbmVkO1xuICBsZXQgcGVyY2VudGFnZU51bUVsID0gdW5kZWZpbmVkO1xuXG4gIC8vIHRoZSBhY3R1YWwgZnVuY3Rpb25cbiAgZnVuY3Rpb24gY3JlYXRlT3JVcGRhdGUobG9hZGVkLCB0b3RhbCkge1xuICAgIGlmICh0eXBlb2YgcHJvZ3Jlc3NXcmFwcGVyID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAvLyBjcmVhdGUgRE9NRUxlbWVudCBvZiB0aGUgcHJvZ3Jlc3MgYmFyXG4gICAgICBwcm9ncmVzc1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcHJvZ3Jlc3NXcmFwcGVyLmNsYXNzTmFtZSA9IGNsYXp6LnByb2dyZXNzV3JhcHBlcjtcblxuICAgICAgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcHJvZ3Jlc3NXcmFwcGVyLmFwcGVuZENoaWxkKHByb2dyZXNzQmFyKTtcbiAgICAgIHByb2dyZXNzQmFyLmNsYXNzTmFtZSA9IGNsYXp6LnByb2dyZXNzQmFyO1xuXG4gICAgICBwcm9ncmVzc1dyYXBwZXIuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NCYXIpO1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHByb2dyZXNzV3JhcHBlcik7XG4gICAgfVxuXG4gICAgaWYodGV4dCAmJiB0eXBlb2YgbWVzc2FnZSA9PT0gXCJ1bmRlZmluZWRcIil7XG4gICAgICBjcmVhdGVNZXNzYWdlKCk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIHByb2dyZXNzIGJhci5cbiAgICBjb25zdCByYXRpbyA9IChsb2FkZWQgLyB0b3RhbCkudG9QcmVjaXNpb24oNCk7XG4gICAgaWYgKCFOdW1iZXIuaXNOYU4ocmF0aW8pKSB7XG4gICAgICAvLyBhY3R1YWxseSBoYXZlIHBlcmNlbnRhZ2UgbnVtYmVyXG4gICAgICBjb25zdCBwZXJjZW50YWdlTnVtID0gYCR7cmF0aW8gKiAxMDB9JWA7XG4gICAgICBwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IHBlcmNlbnRhZ2VOdW07XG5cbiAgICAgIC8vIHNob3cgcGVyY2VudGFnZSBudW1iZXIgdGV4dFxuICAgICAgY3JlYXRlT3JVcGRhdGVQZXJjZW50YWdlTnVtYmVyKHBlcmNlbnRhZ2VOdW0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9yVXBkYXRlUGVyY2VudGFnZU51bWJlcihwZXJjZW50YWdlTnVtKSB7XG4gICAgaWYgKHR5cGVvZiBwZXJjZW50YWdlTnVtRWwgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIC8vIGlmIG5vdCBleGlzdHMsIGNyZWF0ZVxuICAgICAgcGVyY2VudGFnZU51bUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHBlcmNlbnRhZ2VOdW1FbC5jbGFzc05hbWUgPSBjbGF6ei5wZXJjZW50YWdlTnVtO1xuXG4gICAgICBwcm9ncmVzc1dyYXBwZXIuYXBwZW5kQ2hpbGQocGVyY2VudGFnZU51bUVsKTtcbiAgICB9XG4gICAgcGVyY2VudGFnZU51bUVsLmlubmVyVGV4dCA9IHBlcmNlbnRhZ2VOdW07XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVNZXNzYWdlKCkge1xuICAgIG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lc3NhZ2UuY2xhc3NOYW1lID0gY2xhenoucHJvZ3Jlc3NNZXNzYWdlO1xuICAgIG1lc3NhZ2UuaW5uZXJUZXh0ID0gdGV4dDtcblxuICAgIHByb2dyZXNzV3JhcHBlci5hcHBlbmRDaGlsZChtZXNzYWdlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGUoKXtcbiAgICBwcm9ncmVzc1dyYXBwZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdygpe1xuICAgIHByb2dyZXNzV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9XG5cbiAgcmV0dXJuIHtjcmVhdGVPclVwZGF0ZSwgaGlkZSwgc2hvd307XG59O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIGNvbnRleHQgb2Ygd2ViZ2xcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgaW1hZ2UgdXJsIHRoYXQgaXMgdXNlZCBhcyB0ZXh0dXJlXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSB0ZXh0dXJlTG9hZGVkQ2FsbGJhY2sgT3B0aW9uYWwsIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCBsb2FkZWQgdGV4dHVyZSBhcmd1bWVudFxuICogIHdoZW4gdGV4dHVyZSBpcyBhbHJlYWR5IGxvYWRlZC4gVXN1YWxseSBjb250YWlucyB0aGUgbWV0aG9kIHRoYXQgcmVkcmF3IHdlYmdsIHNjZW5lIHRvIHNob3cgdGhlIHRleHR1cmUuXG4gKiBAcmV0dXJuIHtXZWJHTFRleHR1cmV9IHRoZSB3ZWJnbCB0ZXh0dXJlLiBCZSBjYXJlZnVsLCB0aGUgdGV4dHVyZSBpcyBsb2FkZWQgYXN5bmNocm9ub3VzbHkobG9hZCBpbWFnZSBhc3luY2hyb25vdXNseSksXG4gKiAgaXQgd291bGQgYmUgcGxhY2Vob2xkZXIoc2luZ2xlIGNvbG9yKSBhdCB0aGUgYmVnaW5uaW5nLiBTbyB1c2UgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGhhbmRsZSB0aGUgbG9hZGVkIHRleHR1cmUuXG4gKi9cbmZ1bmN0aW9uIGxvYWRUZXh0dXJlKGdsLCB1cmwsIHRleHR1cmVMb2FkZWRDYWxsYmFjaywgbG9hZGluZ0NhbGxiYWNrKXtcbiAgY29uc3QgdGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcbiAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZSk7XG5cbiAgY29uc3QgbGV2ZWwgPSAwO1xuICBjb25zdCBpbnRlcm5hbEZvcm1hdCA9IGdsLlJHQkE7XG4gIGNvbnN0IHNyY0Zvcm1hdCA9IGdsLlJHQkE7XG4gIGNvbnN0IHNyY1R5cGUgPSBnbC5VTlNJR05FRF9CWVRFO1xuXG4gIC8vIGdyZXkgcGxhY2Vob2xkZXIgY29sb3IgYmVmb3JlIHRleHR1cmUgbG9hZGVkIC8vIFswLDAsMjU1LDEyOF1vcGFxdWUgYmx1ZVxuICBjb25zdCBwaXhlbCA9IG5ldyBVaW50OEFycmF5KFswLCAwLCAwLCAxMjhdKTtcbiAgY29uc3Qgd2lkdGggPSAxO1xuICBjb25zdCBoZWlnaHQgPSAxO1xuICBjb25zdCBib3JkZXIgPSAwO1xuICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIGxldmVsLCBpbnRlcm5hbEZvcm1hdCxcbiAgICAgICAgICAgICAgICB3aWR0aCwgaGVpZ2h0LCBib3JkZXIsIHNyY0Zvcm1hdCwgc3JjVHlwZSxcbiAgICAgICAgICAgICAgICBwaXhlbCk7XG5cbiAgLyoqXG4gICAqIFRoZSBjYWxsYmFjayBmdW5jdGlvbiB3b3VsZCBiZSBjYWxsZWQgd2hlbiBjb21wbGV0ZSBsb2FkaW5nIGltYWdlLlxuICAgKiBTZXQgdGhlIHBhbm9yYW1hIGltYWdlIGFzIHRoZSB0ZXh0dXJlLlxuICAgKiBAcGFyYW0ge0hUTUxJbWFnZUVsZW1lbnR9IGltYWdlICB0aGUgaW1hZ2UgZWxlbWVudCB0aGF0IGlzIHVzZWQgYXMgdGV4dHVyZVxuICAgKi9cbiAgZnVuY3Rpb24gYmluZEltYWdlVGV4dHVyZUNhbGxiYWNrIChpbWFnZSkge1xuXG4gICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZSk7XG4gICAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCBsZXZlbCwgaW50ZXJuYWxGb3JtYXQsXG4gICAgICAgICAgICAgICAgICBzcmNGb3JtYXQsIHNyY1R5cGUsIGltYWdlKTtcblxuICAgIC8vIFdlYkdMMSBoYXMgZGlmZmVyZW50IHJlcXVpcmVtZW50cyBmb3IgcG93ZXIgb2YgMiBpbWFnZXNcbiAgICAvLyB2cyBub24gcG93ZXIgb2YgMiBpbWFnZXMgc28gY2hlY2sgaWYgdGhlIGltYWdlIGlzIGFcbiAgICAvLyBwb3dlciBvZiAyIGluIGJvdGggZGltZW5zaW9ucy5cbiAgICBpZiAoaXNQb3dlck9mMihpbWFnZS53aWR0aCkgJiYgaXNQb3dlck9mMihpbWFnZS5oZWlnaHQpKSB7XG4gICAgICAvLyBZZXMsIGl0J3MgYSBwb3dlciBvZiAyLiBHZW5lcmF0ZSBtaXBzLlxuICAgICAgZ2wuZ2VuZXJhdGVNaXBtYXAoZ2wuVEVYVFVSRV8yRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5vLCBpdCdzIG5vdCBhIHBvd2VyIG9mIDIuIFR1cm4gb2ZmIG1pcHMgYW5kIHNldFxuICAgICAgLy8gd3JhcHBpbmcgdG8gY2xhbXAgdG8gZWRnZVxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKTtcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5MSU5FQVIpO1xuICAgICAgLy8gZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLk5FQVJFU1QpO1xuICAgICAgLy8gZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLk5FQVJFU1QpO1xuICAgIH1cblxuICAgIC8vIGNhbGxiYWNrIGFmdGVyIGltYWdlIGxvYWRlZC5cbiAgICBpZiAodGV4dHVyZUxvYWRlZENhbGxiYWNrKSB7dGV4dHVyZUxvYWRlZENhbGxiYWNrKHRleHR1cmUpO31cblxuICB9IC8vIFtlbmRdIGJpbmRJbWFnZVRleHR1cmVDYWxsYmFja1xuXG4gIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgbG9hZEltYWdlKHt1cmw6dXJsLCBpbWFnZTogaW1hZ2UsIGxvYWRlZENhbGxiYWNrOiBiaW5kSW1hZ2VUZXh0dXJlQ2FsbGJhY2ssIGxvYWRpbmdDYWxsYmFjazogbG9hZGluZ0NhbGxiYWNrfSk7XG5cbiAgcmV0dXJuIHRleHR1cmU7XG59XG5cbmZ1bmN0aW9uIGxvYWRJbWFnZSh7dXJsLCBpbWFnZSA9IG5ldyBJbWFnZSgpLCBsb2FkZWRDYWxsYmFjaywgbG9hZGluZ0NhbGxiYWNrfSkge1xuXG4gIGNvbnN0IG9uUHJvZ3Jlc3NIYW5kbGVyID0gbG9hZGluZ0NhbGxiYWNrID9cbiAgICAoZXZlbnQpID0+IGxvYWRpbmdDYWxsYmFjayhldmVudC5sb2FkZWQsIGV2ZW50LnRvdGFsKSA6XG4gICAgdW5kZWZpbmVkO1xuXG4gIC8vIFtJbXBvcnRhbnRdIGltYWdlLnNyYyBpcyBhc3luY2hyb25vdXMgb3BlcmF0aW9uLCBzZXQgb25sb2FkIHRvIGhhbmRsZSBhZnRlciB0aGUgaW1hZ2UgaXMgbG9hZGVkXG4gIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChsb2FkZWRDYWxsYmFjaykge2xvYWRlZENhbGxiYWNrKGltYWdlKTt9XG4gIH07XG5cbiAgcHJvZ3Jlc3NGZXRjaEJsb2IodXJsLCB7bWV0aG9kOiBcImdldFwifSwgb25Qcm9ncmVzc0hhbmRsZXIpXG4gIC50aGVuKHJlc3BvbnNlQmxvYiA9PiB7XG4gICAgY29uc3Qgb2JqZWN0VXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChyZXNwb25zZUJsb2IpO1xuICAgIGltYWdlLnNyYyA9IG9iamVjdFVybDtcbiAgfSlcbiAgLmNhdGNoKCBlcnIgPT4ge3Rocm93IGVycjt9KTtcbn1cblxuZnVuY3Rpb24gcHJvZ3Jlc3NGZXRjaEJsb2IodXJsLCBvcHRzPXt9LCBvblByb2dyZXNzSGFuZGxlcikge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIHhoci5yZXNwb25zZVR5cGUgPSBcImJsb2JcIjtcbiAgICB4aHIub3BlbihvcHRzLm1ldGhvZCB8fCBcImdldFwiLCB1cmwpO1xuXG4gICAgaWYgKG9wdHMuaGVhZGVycykge1xuICAgICAgT2JqZWN0LmtleXMob3B0cy5oZWFkZXJzKS5tYXAoIGtleSA9PiB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIG9wdHMuaGVhZGVyc1trZXldKSApO1xuICAgIH1cbiAgICBpZiAob25Qcm9ncmVzc0hhbmRsZXIpIHtcbiAgICAgIHhoci5vbnByb2dyZXNzID0gb25Qcm9ncmVzc0hhbmRsZXI7IC8vIHBhc3NlZCBldmVudFxuICAgIH1cbiAgICB4aHIub25sb2FkID0gKGV2ZW50KSA9PiByZXNvbHZlKGV2ZW50LnRhcmdldC5yZXNwb25zZSk7XG4gICAgeGhyLm9uZXJyb3IgPSByZWplY3Q7XG5cbiAgICB4aHIuc2VuZChvcHRzLmJvZHkpO1xuICB9KTtcbn1cblxuLypcbiAgcGFub3JhbWEgaGVscGVyIGZ1bmN0aW9uXG4gKi9cblxuY29uc3QgZGVmYXVsdFNldHRpbmcgPSB7XG4gIC8vIHRoZSBET01lbGVtZW50KG9yIHRoZSBDU1Mgc2VsZXRvciBzdHJpbmcgdGhhdCByZWZlcnMgdGhlIERPTUVsZW1lbnQpIGNvbnRhaW5lciB0aGF0IGNvbnRhaW5zIHRoaXMgcGFub3JhbWEuanMgY29tcG9uZW50XG4gIGNvbnRhaW5lcjogZG9jdW1lbnQuYm9keSxcbiAgLy8gdGhlIGltYWdlIHVybCBvZiB0aGUgcGFub3JhbWFcbiAgdXJsOiB1bmRlZmluZWQsXG5cbiAgLy8gdGhlIGZpZWxkIG9mIHZpZXdcbiAgZm92OiA3NSxcbiAgLy8gdGhlIGluaXRhbCBkZWdyZWUgb2YgdGhlIGNhbWVyZWEgdmlldywgZGVmYXVsdCBpcyBbMCwwXSB3aGljaCBtZWFucyB0byBsb29rIGZyb250IG9uIHRoZSBob3Jpem9uXG4gIGNhbWVyYURlZ3JlZTogWzAsIDBdLFxuXG4gIHNwaGVyZToge1xuICAgIHJhZGl1czogMzAsXG4gICAgbnVtVmVydGljYWxTZWdtZW50czogMTYsIC8vIHRoZSBudW1iZXIgb2YgdGhlIHZlcnRpY2FsIHNlZ21lbnRzLiBMaWtlIEVhcnRoJ3MgbWVyaWRpYW5zLHRoZSBsaW5lIGdvaW5nIHBvbGUgdG8gcG9sZS5cbiAgICBudW1Ib3Jpem9uYWxTZWdlbWVudHM6IDggLy8gdGhlIG51bWJlciBvZiB0aGUgaG9yaXpvbmFsIHNlZ21lbnRzLiBMaWtlIEVhcnRoJ3MgcGFyYWxsZWxzLlxuICB9LFxuXG4gIC8vIHdoZXRoZXIgb3Igbm90IHRvIHVzZSB0aGUgZGV2aWNlJ3Mgb3JpZW50YXRpb24oY2VpbHBob25lIG9yaXRhdGlvbikgdG8gY29udHJvbCB0aGUgY2FtZXJhLlxuICAvLyBCZSBjYXJlZnVsISBOZXdlciBicm93c2VycyBtYXkgbmVlZCB0aGUgZGV2aWNlb3JpZW50YXRpb24gbXVzdCBiZSB1c2VkIGluIEhUVFBTLlxuICBkZXZpY2VPcmllbnRhdGlvbkVuYWJsZWQ6IHRydWUsXG59O1xuXG4vKipcbiAqIEZpbGwgdGhlIHNldHRpbmcgd2l0aCBkZWZhdWx0IG9uZXMsIGV4Y2VwdCB0aGUgZXhjbHVkZSBvbmVzIG1hdGNoIHRoZSBgZXhjbHVkZUtleXNgLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXR0aW5nICBUaGUgb2JqZWN0IGxpdGVyYWwgdGhhdCBpcyB0YXJnZXQgc2V0dGluZywgd2hvc2UgbWlzc2luZyBlbnRyaWVzIHdpbGwgYmUgZmlsbGVkIHdpdGggZGVmYXVsdCBvbmVzLlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRTZXR0aW5nICBUaGUgb2JqZWN0IGxpdGVyYWwgIGNvbnRhaW5zIGRlZmF1bHQgc2V0dGluZyBlbnRyaWVzXG4gKiBAcGFyYW0ge1NldH0gW2V4Y2x1ZGVLZXlzPVNldCgwKV0gV2lsbCBOT1QgY29weSB0aGUgZW50cnkgdGhhdCBpcyBpbiB0aGUgZXhjbHVkZSBrZXlzLCBkZWZhdWx0IGlzIGVtcHR5IHNldCB0aGF0IHRoZXJlIGlzIG5vIGV4Y2x1ZGUga2V5c1xuICovXG5mdW5jdGlvbiBjb3B5TWlzc2luZ1ZhbHVlcyhzZXR0aW5nLCBkZWZhdWx0U2V0dGluZywgZXhjbHVkZUtleXM9bmV3IFNldCgpKSB7XG4gIC8vIGZpbGwgdGhlIG1pc3NpbmcgZW50cnkgd2l0aCBkZWZhdWx0XG4gIGZvciAobGV0IGtleSBpbiBkZWZhdWx0U2V0dGluZykge1xuICAgIGlmICghZXhjbHVkZUtleXMuaGFzKGtleSkgJiYgIShrZXkgaW4gc2V0dGluZykpe1xuICAgICAgc2V0dGluZ1trZXldID0gZGVmYXVsdFNldHRpbmdba2V5XTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlU2V0dGluZyhzZXR0aW5nKXtcbiAgc2V0dGluZyA9IHNldHRpbmcgfHwge307XG4gIGNvbnN0IG9iamVjdFNldHRpbmdLZXlzID0gW1wic3BoZXJlXCJdOyAvLyB0aGUgc2V0dGluZyBlbnRyeSB2YWx1ZSBpcyBvYmplY3QuXG5cbiAgLy8gdGhlcyBvcHRpb24gbXVzdCBiZSBjb250YWluZWRcbiAgaWYgKCFzZXR0aW5nLnVybCB8fCB0eXBlb2Ygc2V0dGluZy51cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICB0aHJvdyBFcnJvcihcIk1pc3NpbmcgYHVybGAgaW4gYHNldHRpbmdgIG9yIFRoZSB0eXBlIG9mIGB1cmxgIGlzbid0IGNvcnJlY3Q6IHRoZSBpbWFnZSB1cmwgbXVzdCBiZSBwYXNzZWQgaW4gYHNldHRpbmdgLCBhbmQgaXQgc2hvdWxkIGJlIHN0cmluZy5cIik7XG4gIH1cblxuICBjb3B5TWlzc2luZ1ZhbHVlcyhzZXR0aW5nLCBkZWZhdWx0U2V0dGluZyk7XG4gIG9iamVjdFNldHRpbmdLZXlzLm1hcCgga2V5ID0+IGNvcHlNaXNzaW5nVmFsdWVzKHNldHRpbmdba2V5XSwgZGVmYXVsdFNldHRpbmdba2V5XSkgKTtcblxuICAvLyBjb250YWluZXIgY2FuIGJlIGVpdGhlciBzdHJpbmcgb3IgRE9NRWxlbWVudFxuICBpZiAodHlwZW9mIHNldHRpbmcuY29udGFpbmVyID09PSBcInN0cmluZ1wiKSB7XG4gICAgc2V0dGluZy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNldHRpbmcuY29udGFpbmVyKTtcbiAgfSAvLyBlbHNlIERPTUVsZW1lbnRcblxuICByZXR1cm4gc2V0dGluZztcbn1cblxuLypcbiAgSlMgaGVscGVyIGZ1bmN0aW9uXG4qL1xuXG4vKipcbiAqIENsYW1wIHRoZSB2YWx1ZSBiZXR3ZWVuIG1pbiBhbmQgbWF4IGluY2x1c2l2ZWx5LlxuICogQHBhcmFtIHtOdW1iZXIgQXJyYXl9IHJhbmdlIHRoZSBBcnJheSBjb250YWlucyBtaW4gYW5kIG1heC5cbiAqIEBwYXJhbSB7TnVtYmVyfSB4IHRoZSB0YXJnZXQgdmFsdWUgd2lsbCBiZSBjbGFtcGVkLlxuICogQHJldHVybiB7TnVtYmVyfSB0aGUgY2xhbXBlZCByZXN1bHQgbnVtYmVyLlxuICovXG5mdW5jdGlvbiBjbGFtcChyYW5nZSwgeCl7XG4gIGlmKCFyYW5nZSB8fCByYW5nZS5sZW5ndGggPCAyKXtcbiAgICB0aHJvdyBFcnJvcihgVmFsdWUgRXJyb3I6IFRoZSAncmFuZ2UnIGFyZ3VtZW50OiAnJHtyYW5nZX0nLFxuICAgICAgd2hpY2ggaXMgcGFzc2VkIGluICdjbGFtcCcgZnVuY3Rpb24gaXNuJ3QgYSBhcnJheSBvZiB0d28gbnVtYmVycy5cbiAgICAgIEl0IG11c3QgY29udGFpbiBtaW4gYW5kIG1heCB2YWx1ZS4gYCk7XG4gIH1cbiAgY29uc3QgbWluID0gcmFuZ2VbMF0sIG1heCA9IHJhbmdlWzFdO1xuICBpZiAoeCA8IG1pbikge1xuICAgIHggPSBtaW47XG4gIH1lbHNlIGlmICh4ID4gbWF4KSB7XG4gICAgeCA9IG1heDtcbiAgfVxuICByZXR1cm4geDtcbn1cblxuZnVuY3Rpb24gaXNQb3dlck9mMih2YWx1ZSl7XG4gIHJldHVybiAodmFsdWUgJiAodmFsdWUgLSAxKSkgPT09IDA7IC8vIGJpbmFyeSBiaXQgb3BlcmF0aW9uIHRyaWNrXG59XG5cbi8vIGN1cnJ5IGZ1bmN0aW9uLiBsZXQgYWRkb25lID0gY3VycnkoYWRkLCAxKTsgbGV0IHggPSBhZGRvbmUoMykgLy8geCBpcyA0XG5mdW5jdGlvbiBjdXJyeShtZXRob2Qpe1xuICBjb25zdCBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbiAgY29uc3Qgc3RhcnRBcmdzID0gc2xpY2UuYXBwbHkoYXJndW1lbnRzKS5zbGljZSgxKTsgLy8gZXhjbHVkZSB0aGUgMXN0IG1ldGhvZCBhcmd1bWVudFxuICByZXR1cm4gZnVuY3Rpb24oKXtcbiAgICBjb25zdCByZXN0QXJncyA9IHNsaWNlLmFwcGx5KGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIG1ldGhvZC5hcHBseShudWxsLCBzdGFydEFyZ3MuY29uY2F0KHJlc3RBcmdzKSk7IC8vIGNhbGwgYWN0dWFsIGZ1bmN0aW9uXG4gIH07XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgcGFub3JhbWE7XG4iLCIvKlxuVGhlIHVzZXIgaW50ZXJmYWNlIHBhcnRzIG9mIHBhbm9yYW1hLmpzLiBBIGJ1bmNoIG9mIHNldHRpbmdzIG9mIHBhbm9yYW1hIHRvIGNvbnRyb2wgYnkgdXNlci5cbiovXG5cbmltcG9ydCBjbGF6eiBmcm9tIFwiLi9jc3MvcGFub3JhbWEubGVzc1wiO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCB0aGUgdGFyZ2V0IHdpbGwgYmUgaW4gZnVsbHNjcmVlbiBtb2RlIG9yIGV4aXQgZnVsbHNjcmVlbiBtb2RlKGJhY2sgdG8gbm9ybWFsKVxuICovXG5jb25zdCB0b2dnbGVGdWxsc2NyZWVuID0gKGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHByZWZpeHMgPSBbXCJcIiwgXCJ3ZWJraXRcIiwgXCJtb3pcIiwgXCJtc1wiXTtcblxuICAvLyB0aGUgbWV0aG9kcyBpbiBkaWZmZXJlbnQgYnJvc3dlcnMgd2l0aCBjb3JyZXNwb25kaW5nIHByZWZpeFxuICBmdW5jdGlvbiByZXF1ZXN0RnVsbHNjcmVlbih0YXJnZXQpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByZWZpeHMubGVuZ3RoOyBpKz0xKXtcbiAgICAgIGNvbnN0IHByZWZpeCA9IHByZWZpeHNbaV07XG4gICAgICBjb25zdCBtZXRob2ROYW1lID0gcHJlZml4PyBgJHtwcmVmaXh9UmVxdWVzdEZ1bGxzY3JlZW5gIDogXCJyZXF1ZXN0RnVsbHNjcmVlblwiO1xuXG4gICAgICBpZih0YXJnZXRbbWV0aG9kTmFtZV0pe1xuICAgICAgICB0YXJnZXRbbWV0aG9kTmFtZV0oKTsgLy8gY2FsbCB0aGUgY29ycmVzcG9uZGluZyBtZXRob2RcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBleGl0RnVsbHNjcmVlbigpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByZWZpeHMubGVuZ3RoOyBpKz0xKXtcbiAgICAgIGNvbnN0IHByZWZpeCA9IHByZWZpeHNbaV07XG4gICAgICBjb25zdCBtZXRob2ROYW1lID0gcHJlZml4PyBgJHtwcmVmaXh9RXhpdEZ1bGxzY3JlZW5gIDogXCJFeGl0RnVsbHNjcmVlblwiO1xuXG4gICAgICBpZihkb2N1bWVudFttZXRob2ROYW1lXSl7XG4gICAgICAgIGRvY3VtZW50W21ldGhvZE5hbWVdKCk7IC8vIGNhbGwgdGhlIGNvcnJlc3BvbmRpbmcgbWV0aG9kXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBpZiAoIWRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50KSB7XG4gICAgICAvLyBkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCB3b3VsZCBiZSBudWxsLCBpZiB0aGVyZSdzIG5vIGZ1bGxzY3JlZW4gZWxlbWVudC5cbiAgICAgIC8vIG9ubHkgb25lIGVsZW1lbnQgY291bGQgYmUgIGluIGZ1bGwtc2NyZWVuIG1vZGUuXG4gICAgICByZXF1ZXN0RnVsbHNjcmVlbih0YXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleGl0RnVsbHNjcmVlbigpO1xuICAgIH1cbiAgfTtcbn0pKCk7XG5cbi8qKlxuICogVGhlIHRvZ2dsZSBidXR0b24gb24gdXNlciBjb250cm9sIHBhbm5lbCBvZiBVSS4gVG8gZW50ZXIgb3IgZXhpdCBmdWxsc2NyZWVuLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gcGFyZW50IHRoZSBwYXJlbnQgRE9NIGVsZW1lbnQgdG8gcHV0IHRoZSBzd2l0Y2ggaW5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlRnVsbHNjcmVlblN3aXRjaEhlbHBlcihwYXJlbnQpIHtcbiAgcmV0dXJuIHN3aXRjaEhlbHBlcih7XG4gICAgcGFyZW50OiBwYXJlbnQsXG4gICAgY2xhc3NOYW1lOiBjbGF6ei5mdWxsc2NyZWVuU3dpdGNoLFxuICAgIG9uU3RhdGVDbGFzc05hbWU6IGNsYXp6LmluRnVsbHNjcmVlblxuICB9KTtcbn1cblxuXG4vLyB0aGUgcGFydCB0aGF0IGNvbnRyb2xzIHRoZSBkZXZpY2Ugb3JpZW50YXRpb24oY2VpbHBob25lIG1vdGlvbilcblxuLyoqXG4gKiBDcmVhdGUgYSBET01FbGVtZW50IHRoYXQgaXMgdXNlZCB0byBzd2l0Y2ggb3JpZW50YXRpb24gc3RhdHVzLiBQcm92aWRlXG4gKiB0aGUgZnVuY3Rpb25zIHRoYXQgZW5hYmxlIGFuZCBkaXNhYmxlIHRoZSBvcmllbnRhdGlvbiB0byB3b3JrIHRvZ2V0aGVyLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gcGFyZW50IHRoZSBwYXJlbnQgRE9NRWxlbWVudCBjb250YWlucyB0aGlzIHN3aXRjaFxuICovXG5mdW5jdGlvbiBjcmVhdGVPcmllbnRhdGlvblN3aXRjaEhlbHBlcihwYXJlbnQpIHtcbiAgcmV0dXJuIHN3aXRjaEhlbHBlcih7XG4gICAgcGFyZW50OiBwYXJlbnQsXG4gICAgY2xhc3NOYW1lOiBjbGF6ei5vcmllbnRhdGlvblN3aXRjaCxcbiAgICBvZmZTdGF0ZUNsYXNzTmFtZTogY2xhenouZGlzYWJsZWQsXG4gIH0pO1xufVxuXG4vKipcbiAqIHRoZSBoZWxwZXIgaW5jbHVkZXMgZnVuY3Rpb25zIHRoYXQgbWFpbnRhbmNlIGEgc3dpdGNoIGNvbnBvbmVudDpcbiAqIGNyZWF0ZSBzd2l0Y2ggY29tcG9uZW50LCBjcmVhdGUgdGhlIERPTSBlbGVtZW50IGFuZCBhbHNvIG1hbmFnZVxuICogdGhlIGNsYXNzbmFtZSB0byBjaGFuZ2Ugd2hlbiB0aGUgc3RhdGUgaXMgY2hhbmdlZChvbiBvciBvZmYpLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0IExpdGVyYWx9IHNldHRpbmcgY29udGFpbnMgdGhlIHNldHRpbmdzIG9mIHN3aXRjaFxuICogQHBhcmFtIHtFbGVtZW50fSBzZXR0aW5nLnBhcmVudCAgdGhlIHBhcmVudCBjb250YWluZXIsIHRoZSBzd2l0Y2ggd291bGQgYmUgcHV0IGludG8gaXQuXG4gKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmcgYXJyYXl9IHNldHRpbmcuY2xhc3NOYW1lIHRoZSBzd2l0Y2gncyBjc3MgY2xhc3MgbmFtZS4gY2FuIGJlIGVpdGhlciBvbmUgb3IgbXVsdGkgb25lcy5cbiAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZyBhcnJheX0gW3NldHRpbmcub25TdGF0ZUNsYXNzTmFtZT11bmRlZmluZWRdIHRoZSBzd2l0Y2ggb24gc3RhdGUgY2xhc3MgbmFtZSxcbiAqICB3aGVuIHN3aXRjaCBpcyBvbiwgdGhlIERPTSBlbGVtZW50IHdvdWxkIGNvbnRhaW5zIHRoaXMgY2xhc3NuYW1lLiBvdGhlcndpc2UgcmVtb3ZlIHRoZSBjbGFzc25hbWUgd2hlbiBzd2l0Y2ggaXMgb2ZmXG4gKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmcgYXJyYXl9IFtzZXR0aW5nLm9mZlN0YXRlQ2xhc3NOYW1lPXVuZGVmaW5lZF0gdGhlIG9wcG9zaXRlIHNpZGUgb2YgJ29uU3RhdGVDbGFzc05hbWUnLFxuICogIHdoZW4gc3dpdGNoIGlzIG9mZiwgY29udGFpbnMgdGhlIGNsYXNzbmFtZSwgb3RoZXJ3aXNlIHJlbW92ZSB0aGlzIG9uZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbc2V0dGluZy50YWdOYW1lPVwic3BhblwiXSB0aGUgc3dpdGNoJ3MgRE9NIGVsZW1lbnQgdGFnLCBkZWZhdWx0IGlzIFwic3BhblwiLlxuICogQHJldHVybiB7T2JqZWN0IExpdGVyYWx9IHJldHVybiBhIG9iamVjdCBsaXRlcmFsIGNvbnRhaW5zdGhlIGZ1bmN0aW9ucyB0aGF0IHRvIGNyZWF0ZSBhbmQgZmlscCB0aGUgc3dpdGNoLlxuICovXG5mdW5jdGlvbiBzd2l0Y2hIZWxwZXIoe3BhcmVudCwgY2xhc3NOYW1lLCBvblN0YXRlQ2xhc3NOYW1lLCBvZmZTdGF0ZUNsYXNzTmFtZSwgdGFnTmFtZX0pIHtcbiAgbGV0IGVsO1xuICBsZXQgc3RhdGU7XG5cbiAgaWYoIXRhZ05hbWUpIHtcbiAgICB0YWdOYW1lID0gXCJzcGFuXCI7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBET00gZWxlbW5ldCBvZiB0aGUgc3dpdGNoLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHN0YXRlIHRoZSBpbml0IHN0YXRlIG9mIHRoZSBzd2l0Y2ggd2hlbiBpcyBjcmVhdGVkLiBmYWxzZSBpcyBvZmYgdHJ1ZSBpcyBvblxuICAgKiBAcmV0dXJuIHtFbGVtZW50fSB0aGUgY3JlYXRlZCBET00gZWxlbWVudC5cbiAgICovXG4gIGZ1bmN0aW9uIGNyZWF0ZShzdGF0ZT1mYWxzZSkge1xuICAgIGlmICh0eXBlb2YgZWwgPT09IFwidW5kZWZpbmVkXCIpIHsgLy8gY3JlYXRlIGlmIG5vdCBleGlzdHMgYmVmb3JlXG4gICAgICBlbCA9IGNyZWF0ZUVsKHRhZ05hbWUsIGNsYXNzTmFtZSk7XG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWwpOyAvLyBwdXQgaW5zaWRlIG9mIHRoZSBjb250YWluZXIuXG4gICAgfVxuICAgIHVwZGF0ZVN0YXRlKHN0YXRlKTtcblxuICAgIHJldHVybiBlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IF9zdGF0ZSB0aGUgc3dpdGNoIHN0YXRlIHdvdWxkIGJlIGNoYW5nZSB0b1xuICAgKiAgdGhlIGFyZ3VtZW50LiBmYWxzZSBpcyBvZmYgdHJ1ZSBpcyBvbi5cbiAgICovXG4gIGZ1bmN0aW9uIHVwZGF0ZVN0YXRlKF9zdGF0ZSkge1xuICAgIHN0YXRlID0gX3N0YXRlO1xuICAgIGlmICghc3RhdGUpIHsgLy8gb2ZmIHN0YXRlIGFkZCBvZmYgY2xhc3NOYW1lIG9yIHJlbW92ZSBvbiBjbGFzc05hbWUgaWYgc3BlY2lmaWVkXG4gICAgICBpZiAob2ZmU3RhdGVDbGFzc05hbWUpIHtlbC5jbGFzc0xpc3QuYWRkKG9mZlN0YXRlQ2xhc3NOYW1lKTt9XG4gICAgICBpZiAob25TdGF0ZUNsYXNzTmFtZSkge2VsLmNsYXNzTGlzdC5yZW1vdmUob25TdGF0ZUNsYXNzTmFtZSk7fVxuICAgIH0gZWxzZSB7IC8vIG90aGVyd2lzZSBvbiBzdGF0ZSByZW1vdmUgb2ZmIGNsYXNzTmFtZSBvciBhZGQgb24gY2xhc3NOYW1lIGlmIHNwZWNpZmllZFxuICAgICAgaWYgKG9uU3RhdGVDbGFzc05hbWUpIHtlbC5jbGFzc0xpc3QuYWRkKG9uU3RhdGVDbGFzc05hbWUpO31cbiAgICAgIGlmIChvZmZTdGF0ZUNsYXNzTmFtZSkge2VsLmNsYXNzTGlzdC5yZW1vdmUob2ZmU3RhdGVDbGFzc05hbWUpO31cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogZmxpcCB0aGUgc3dpdGNoIGZvciBjb250aW51b3VzIFwib25cIiBvciBcIm9mZlwiXG4gICAqIEByZXR1cm4ge2Jvb2x9IHJldHVybiB0aGUgY3VycmVudCBzdGF0ZSBvZiBzd2l0Y2guIGZhbHNlIGlzIG9mZiB0cnVlIGlzIG9uLlxuICAgKi9cbiAgZnVuY3Rpb24gZmxpcCgpe1xuICAgIHN0YXRlID0gIXN0YXRlOyAvLyBmbGlwIHN0YXRlXG4gICAgdXBkYXRlU3RhdGUoc3RhdGUpO1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtFbGVtZW50fSBnZXQgdGhlIHJlZmVyZW5jZSBvZiB0aGUgc3dpdGNoJ3MgRE9NIGVsZW1lbnRcbiAgICovXG4gIGZ1bmN0aW9uIGdldCgpe1xuICAgIHJldHVybiBlbDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlLFxuICAgIGdldCxcbiAgICB1cGRhdGVTdGF0ZSxcbiAgICBmbGlwXG4gIH07XG59XG5cbi8qKlxuICogQSBoZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlIGEgRE9NIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZ05hbWUgIHRoZSBjcmVhdGVkIERPTSB0YWcgbmFtZSwgZS5nIFwiZGl2XCIsIFwic3BhblwiXG4gKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmcgYXJyYXl9IFtjbGFzc05hbWVzPVwiXCJdIHRoZSBET00gZWxlbWVudCBjbGFzc2VzLCBjb3VsZCBiZSBhXG4gKiAgc3RyaW5nIHNwZWNpZmllcyBjbGFzcyBuYW1lIHRoYXQgY2FuIGJlIHNpbmdsZSBvbmUgb3IgbXVsdGkgb25lcywgZS5nIFwibXktYnV0dG9uXCIsIFwibXktYnV0dG9uIGRpc2FibGVkXCI7XG4gKiAgYWxzbyBjb3VsZCBiZSBhIHN0cmluZyBvciBzdHJpbmcgYXJyYXkgY29udGFpbnMgYSBidXRjaCBvZiBjbGFzcyBuYW1lcywgZS5nIFtcIm15LWJ1dHRvblwiLCBcImRpc2FibGVkXCJdLlxuICpcbiAqIEByZXR1cm4ge0VsZW1lbnR9IHRoZSBET00gZWxlbWVudCB0aGF0IGlzIGNyZWF0ZWRcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRWwodGFnTmFtZSwgY2xhc3NOYW1lcz1cIlwiKSB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICBpZih0eXBlb2YgY2xhc3NOYW1lcyAhPT0gXCJ1bmRlZmluZWRcIil7XG4gICAgZWwuY2xhc3NOYW1lID0gQXJyYXkuaXNBcnJheShjbGFzc05hbWVzKSA/XG4gICAgICBjbGFzc05hbWVzLmpvaW4oXCIgXCIpIDogLy8gYXJyYXkgdG8gc3RyaW5nXG4gICAgICBjbGFzc05hbWVzOyAvLyBzdHJpbmdcbiAgfVxuICByZXR1cm4gZWw7XG59XG5cblxuZXhwb3J0IHtcbiAgY3JlYXRlRnVsbHNjcmVlblN3aXRjaEhlbHBlcixcbiAgdG9nZ2xlRnVsbHNjcmVlbixcblxuICBjcmVhdGVPcmllbnRhdGlvblN3aXRjaEhlbHBlcixcbiAgc3dpdGNoSGVscGVyLFxufTtcblxuIiwiLypcbiAqIENvcHlyaWdodCAyMDE0LCBHcmVnZyBUYXZhcmVzLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiAqIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcbiAqIG1ldDpcbiAqXG4gKiAgICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuICogbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZVxuICogY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lclxuICogaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuICogZGlzdHJpYnV0aW9uLlxuICogICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBHcmVnZyBUYXZhcmVzLiBub3IgdGhlIG5hbWVzIG9mIGhpc1xuICogY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb21cbiAqIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuICogXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuICogTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4gKiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuICogT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXG4gKiBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4gKiBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbiAqIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxuICogVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuICogKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG4gKiBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5cbi8qKlxuICogVmFyaW91cyAzZCBtYXRoIGZ1bmN0aW9ucy5cbiAqXG4gKiBAbW9kdWxlIHdlYmdsLTNkLW1hdGhcbiAqL1xuKGZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcbiAgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKXtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfWVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICBkZWZpbmUoW10sIGZhY3RvcnkpO1xuICB9IGVsc2Uge1xuICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xuICAgIHJvb3QubTQgPSBmYWN0b3J5KCk7XG4gIH1cbn0odGhpcywgZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvciB0eXBlZCBhcnJheSB3aXRoIDMgdmFsdWVzLlxuICAgKiBAdHlwZWRlZiB7bnVtYmVyW118VHlwZWRBcnJheX0gVmVjdG9yM1xuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG5cbiAgLyoqXG4gICAqIEFuIGFycmF5IG9yIHR5cGVkIGFycmF5IHdpdGggNCB2YWx1ZXMuXG4gICAqIEB0eXBlZGVmIHtudW1iZXJbXXxUeXBlZEFycmF5fSBWZWN0b3I0XG4gICAqIEBtZW1iZXJPZiBtb2R1bGU6d2ViZ2wtM2QtbWF0aFxuICAgKi9cblxuICAvKipcbiAgICogQW4gYXJyYXkgb3IgdHlwZWQgYXJyYXkgd2l0aCAxNiB2YWx1ZXMuXG4gICAqIEB0eXBlZGVmIHtudW1iZXJbXXxUeXBlZEFycmF5fSBNYXRyaXg0XG4gICAqIEBtZW1iZXJPZiBtb2R1bGU6d2ViZ2wtM2QtbWF0aFxuICAgKi9cblxuICAvKipcbiAgICogVGFrZXMgdHdvIDQtYnktNCBtYXRyaWNlcywgYSBhbmQgYiwgYW5kIGNvbXB1dGVzIHRoZSBwcm9kdWN0IGluIHRoZSBvcmRlclxuICAgKiB0aGF0IHByZS1jb21wb3NlcyBiIHdpdGggYS4gIEluIG90aGVyIHdvcmRzLCB0aGUgbWF0cml4IHJldHVybmVkIHdpbGxcbiAgICogdHJhbnNmb3JtIGJ5IGIgZmlyc3QgYW5kIHRoZW4gYS4gIE5vdGUgdGhpcyBpcyBzdWJ0bHkgZGlmZmVyZW50IGZyb20ganVzdFxuICAgKiBtdWx0aXBseWluZyB0aGUgbWF0cmljZXMgdG9nZXRoZXIuICBGb3IgZ2l2ZW4gYSBhbmQgYiwgdGhpcyBmdW5jdGlvbiByZXR1cm5zXG4gICAqIHRoZSBzYW1lIG9iamVjdCBpbiBib3RoIHJvdy1tYWpvciBhbmQgY29sdW1uLW1ham9yIG1vZGUuXG4gICAqIEBwYXJhbSB7TWF0cml4NH0gYSBBIG1hdHJpeC5cbiAgICogQHBhcmFtIHtNYXRyaXg0fSBiIEEgbWF0cml4LlxuICAgKiBAcGFyYW0ge01hdHJpeDR9IFtkc3RdIG9wdGlvbmFsIG1hdHJpeCB0byBzdG9yZSByZXN1bHRcbiAgICogQHJldHVybiB7TWF0cml4NH0gZHN0IG9yIGEgbmV3IG1hdHJpeCBpZiBub25lIHByb3ZpZGVkXG4gICAqL1xuICBmdW5jdGlvbiBtdWx0aXBseShhLCBiLCBkc3QpIHtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IEZsb2F0MzJBcnJheSgxNik7XG4gICAgdmFyIGIwMCA9IGJbMCAqIDQgKyAwXTtcbiAgICB2YXIgYjAxID0gYlswICogNCArIDFdO1xuICAgIHZhciBiMDIgPSBiWzAgKiA0ICsgMl07XG4gICAgdmFyIGIwMyA9IGJbMCAqIDQgKyAzXTtcbiAgICB2YXIgYjEwID0gYlsxICogNCArIDBdO1xuICAgIHZhciBiMTEgPSBiWzEgKiA0ICsgMV07XG4gICAgdmFyIGIxMiA9IGJbMSAqIDQgKyAyXTtcbiAgICB2YXIgYjEzID0gYlsxICogNCArIDNdO1xuICAgIHZhciBiMjAgPSBiWzIgKiA0ICsgMF07XG4gICAgdmFyIGIyMSA9IGJbMiAqIDQgKyAxXTtcbiAgICB2YXIgYjIyID0gYlsyICogNCArIDJdO1xuICAgIHZhciBiMjMgPSBiWzIgKiA0ICsgM107XG4gICAgdmFyIGIzMCA9IGJbMyAqIDQgKyAwXTtcbiAgICB2YXIgYjMxID0gYlszICogNCArIDFdO1xuICAgIHZhciBiMzIgPSBiWzMgKiA0ICsgMl07XG4gICAgdmFyIGIzMyA9IGJbMyAqIDQgKyAzXTtcbiAgICB2YXIgYTAwID0gYVswICogNCArIDBdO1xuICAgIHZhciBhMDEgPSBhWzAgKiA0ICsgMV07XG4gICAgdmFyIGEwMiA9IGFbMCAqIDQgKyAyXTtcbiAgICB2YXIgYTAzID0gYVswICogNCArIDNdO1xuICAgIHZhciBhMTAgPSBhWzEgKiA0ICsgMF07XG4gICAgdmFyIGExMSA9IGFbMSAqIDQgKyAxXTtcbiAgICB2YXIgYTEyID0gYVsxICogNCArIDJdO1xuICAgIHZhciBhMTMgPSBhWzEgKiA0ICsgM107XG4gICAgdmFyIGEyMCA9IGFbMiAqIDQgKyAwXTtcbiAgICB2YXIgYTIxID0gYVsyICogNCArIDFdO1xuICAgIHZhciBhMjIgPSBhWzIgKiA0ICsgMl07XG4gICAgdmFyIGEyMyA9IGFbMiAqIDQgKyAzXTtcbiAgICB2YXIgYTMwID0gYVszICogNCArIDBdO1xuICAgIHZhciBhMzEgPSBhWzMgKiA0ICsgMV07XG4gICAgdmFyIGEzMiA9IGFbMyAqIDQgKyAyXTtcbiAgICB2YXIgYTMzID0gYVszICogNCArIDNdO1xuICAgIGRzdFsgMF0gPSBiMDAgKiBhMDAgKyBiMDEgKiBhMTAgKyBiMDIgKiBhMjAgKyBiMDMgKiBhMzA7XG4gICAgZHN0WyAxXSA9IGIwMCAqIGEwMSArIGIwMSAqIGExMSArIGIwMiAqIGEyMSArIGIwMyAqIGEzMTtcbiAgICBkc3RbIDJdID0gYjAwICogYTAyICsgYjAxICogYTEyICsgYjAyICogYTIyICsgYjAzICogYTMyO1xuICAgIGRzdFsgM10gPSBiMDAgKiBhMDMgKyBiMDEgKiBhMTMgKyBiMDIgKiBhMjMgKyBiMDMgKiBhMzM7XG4gICAgZHN0WyA0XSA9IGIxMCAqIGEwMCArIGIxMSAqIGExMCArIGIxMiAqIGEyMCArIGIxMyAqIGEzMDtcbiAgICBkc3RbIDVdID0gYjEwICogYTAxICsgYjExICogYTExICsgYjEyICogYTIxICsgYjEzICogYTMxO1xuICAgIGRzdFsgNl0gPSBiMTAgKiBhMDIgKyBiMTEgKiBhMTIgKyBiMTIgKiBhMjIgKyBiMTMgKiBhMzI7XG4gICAgZHN0WyA3XSA9IGIxMCAqIGEwMyArIGIxMSAqIGExMyArIGIxMiAqIGEyMyArIGIxMyAqIGEzMztcbiAgICBkc3RbIDhdID0gYjIwICogYTAwICsgYjIxICogYTEwICsgYjIyICogYTIwICsgYjIzICogYTMwO1xuICAgIGRzdFsgOV0gPSBiMjAgKiBhMDEgKyBiMjEgKiBhMTEgKyBiMjIgKiBhMjEgKyBiMjMgKiBhMzE7XG4gICAgZHN0WzEwXSA9IGIyMCAqIGEwMiArIGIyMSAqIGExMiArIGIyMiAqIGEyMiArIGIyMyAqIGEzMjtcbiAgICBkc3RbMTFdID0gYjIwICogYTAzICsgYjIxICogYTEzICsgYjIyICogYTIzICsgYjIzICogYTMzO1xuICAgIGRzdFsxMl0gPSBiMzAgKiBhMDAgKyBiMzEgKiBhMTAgKyBiMzIgKiBhMjAgKyBiMzMgKiBhMzA7XG4gICAgZHN0WzEzXSA9IGIzMCAqIGEwMSArIGIzMSAqIGExMSArIGIzMiAqIGEyMSArIGIzMyAqIGEzMTtcbiAgICBkc3RbMTRdID0gYjMwICogYTAyICsgYjMxICogYTEyICsgYjMyICogYTIyICsgYjMzICogYTMyO1xuICAgIGRzdFsxNV0gPSBiMzAgKiBhMDMgKyBiMzEgKiBhMTMgKyBiMzIgKiBhMjMgKyBiMzMgKiBhMzM7XG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIGFkZHMgMiB2ZWN0b3JzM3NcbiAgICogQHBhcmFtIHtWZWN0b3IzfSBhIGFcbiAgICogQHBhcmFtIHtWZWN0b3IzfSBiIGJcbiAgICogQHBhcmFtIHtWZWN0b3IzfSBkc3Qgb3B0aW9uYWwgdmVjdG9yMyB0byBzdG9yZSByZXN1bHRcbiAgICogQHJldHVybiB7VmVjdG9yM30gZHN0IG9yIG5ldyBWZWN0b3IzIGlmIG5vdCBwcm92aWRlZFxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG4gIGZ1bmN0aW9uIGFkZFZlY3RvcnMoYSwgYiwgZHN0KSB7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBGbG9hdDMyQXJyYXkoMyk7XG4gICAgZHN0WzBdID0gYVswXSArIGJbMF07XG4gICAgZHN0WzFdID0gYVsxXSArIGJbMV07XG4gICAgZHN0WzJdID0gYVsyXSArIGJbMl07XG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBzdWJ0cmFjdHMgMiB2ZWN0b3JzM3NcbiAgICogQHBhcmFtIHtWZWN0b3IzfSBhIGFcbiAgICogQHBhcmFtIHtWZWN0b3IzfSBiIGJcbiAgICogQHBhcmFtIHtWZWN0b3IzfSBkc3Qgb3B0aW9uYWwgdmVjdG9yMyB0byBzdG9yZSByZXN1bHRcbiAgICogQHJldHVybiB7VmVjdG9yM30gZHN0IG9yIG5ldyBWZWN0b3IzIGlmIG5vdCBwcm92aWRlZFxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG4gIGZ1bmN0aW9uIHN1YnRyYWN0VmVjdG9ycyhhLCBiLCBkc3QpIHtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IEZsb2F0MzJBcnJheSgzKTtcbiAgICBkc3RbMF0gPSBhWzBdIC0gYlswXTtcbiAgICBkc3RbMV0gPSBhWzFdIC0gYlsxXTtcbiAgICBkc3RbMl0gPSBhWzJdIC0gYlsyXTtcbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgLyoqXG4gICAqIG5vcm1hbGl6ZXMgYSB2ZWN0b3IuXG4gICAqIEBwYXJhbSB7VmVjdG9yM30gdiB2ZWN0b3IgdG8gbm9ybWFsemllXG4gICAqIEBwYXJhbSB7VmVjdG9yM30gZHN0IG9wdGlvbmFsIHZlY3RvcjMgdG8gc3RvcmUgcmVzdWx0XG4gICAqIEByZXR1cm4ge1ZlY3RvcjN9IGRzdCBvciBuZXcgVmVjdG9yMyBpZiBub3QgcHJvdmlkZWRcbiAgICogQG1lbWJlck9mIG1vZHVsZTp3ZWJnbC0zZC1tYXRoXG4gICAqL1xuICBmdW5jdGlvbiBub3JtYWxpemUodiwgZHN0KSB7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBGbG9hdDMyQXJyYXkoMyk7XG4gICAgdmFyIGxlbmd0aCA9IE1hdGguc3FydCh2WzBdICogdlswXSArIHZbMV0gKiB2WzFdICsgdlsyXSAqIHZbMl0pO1xuICAgIC8vIG1ha2Ugc3VyZSB3ZSBkb24ndCBkaXZpZGUgYnkgMC5cbiAgICBpZiAobGVuZ3RoID4gMC4wMDAwMSkge1xuICAgICAgZHN0WzBdID0gdlswXSAvIGxlbmd0aDtcbiAgICAgIGRzdFsxXSA9IHZbMV0gLyBsZW5ndGg7XG4gICAgICBkc3RbMl0gPSB2WzJdIC8gbGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXB1dGVzIHRoZSBsZW5ndGggb2YgYSB2ZWNnb3JcbiAgICogQHBhcmFtIHtWZWN0b3IzfSB2IHZlY3RvciB0byB0YWtlIGxlbmd0aCBvZlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IGxlbmd0aCBvZiB2ZWN0b3JcbiAgICovXG4gIGZ1bmN0aW9uIGxlbmd0aCh2KSB7XG4gICAgcmV0dXJuIE1hdGguc3FydCh2WzBdICogdlswXSArIHZbMV0gKiB2WzFdICsgdlsyXSAqIHZbMl0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXB1dGVzIHRoZSBjcm9zcyBwcm9kdWN0IG9mIDIgdmVjdG9yczNzXG4gICAqIEBwYXJhbSB7VmVjdG9yM30gYSBhXG4gICAqIEBwYXJhbSB7VmVjdG9yM30gYiBiXG4gICAqIEBwYXJhbSB7VmVjdG9yM30gZHN0IG9wdGlvbmFsIHZlY3RvcjMgdG8gc3RvcmUgcmVzdWx0XG4gICAqIEByZXR1cm4ge1ZlY3RvcjN9IGRzdCBvciBuZXcgVmVjdG9yMyBpZiBub3QgcHJvdmlkZWRcbiAgICogQG1lbWJlck9mIG1vZHVsZTp3ZWJnbC0zZC1tYXRoXG4gICAqL1xuICBmdW5jdGlvbiBjcm9zcyhhLCBiLCBkc3QpIHtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IEZsb2F0MzJBcnJheSgzKTtcbiAgICBkc3RbMF0gPSBhWzFdICogYlsyXSAtIGFbMl0gKiBiWzFdO1xuICAgIGRzdFsxXSA9IGFbMl0gKiBiWzBdIC0gYVswXSAqIGJbMl07XG4gICAgZHN0WzJdID0gYVswXSAqIGJbMV0gLSBhWzFdICogYlswXTtcbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXB1dGVzIHRoZSBkb3QgcHJvZHVjdCBvZiB0d28gdmVjdG9yczsgYXNzdW1lcyBib3RoIHZlY3RvcnMgaGF2ZVxuICAgKiB0aHJlZSBlbnRyaWVzLlxuICAgKiBAcGFyYW0ge1ZlY3RvcjN9IGEgT3BlcmFuZCB2ZWN0b3IuXG4gICAqIEBwYXJhbSB7VmVjdG9yM30gYiBPcGVyYW5kIHZlY3Rvci5cbiAgICogQHJldHVybiB7bnVtYmVyfSBkb3QgcHJvZHVjdFxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG4gIGZ1bmN0aW9uIGRvdChhLCBiKSB7XG4gICAgcmV0dXJuIChhWzBdICogYlswXSkgKyAoYVsxXSAqIGJbMV0pICsgKGFbMl0gKiBiWzJdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wdXRlcyB0aGUgZGlzdGFuY2Ugc3F1YXJlZCBiZXR3ZWVuIDIgcG9pbnRzXG4gICAqIEBwYXJhbSB7VmVjdG9yM30gYVxuICAgKiBAcGFyYW0ge1ZlY3RvcjN9IGJcbiAgICogQHJldHVybiB7bnVibWVyfSBkaXN0YW5jZSBzcXVhcmVkIGJldHdlZW4gYSBhbmQgYlxuICAgKi9cbiAgZnVuY3Rpb24gZGlzdGFuY2VTcShhLCBiKSB7XG4gICAgY29uc3QgZHggPSBhWzBdIC0gYlswXTtcbiAgICBjb25zdCBkeSA9IGFbMV0gLSBiWzFdO1xuICAgIGNvbnN0IGR6ID0gYVsyXSAtIGJbMl07XG4gICAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5ICsgZHogKiBkejtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wdXRlcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAyIHBvaW50c1xuICAgKiBAcGFyYW0ge1ZlY3RvcjN9IGFcbiAgICogQHBhcmFtIHtWZWN0b3IzfSBiXG4gICAqIEByZXR1cm4ge251Ym1lcn0gZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gICAqL1xuICBmdW5jdGlvbiBkaXN0YW5jZShhLCBiKSB7XG4gICAgcmV0dXJuIE1hdGguc3FydChkaXN0YW5jZVNxKGEsIGIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlcyBhbiBpZGVudGl0eSBtYXRyaXguXG4gICAqIEBwYXJhbSB7TWF0cml4NH0gW2RzdF0gb3B0aW9uYWwgbWF0cml4IHRvIHN0b3JlIHJlc3VsdFxuICAgKiBAcmV0dXJuIHtNYXRyaXg0fSBkc3Qgb3IgYSBuZXcgbWF0cml4IGlmIG5vbmUgcHJvdmlkZWRcbiAgICogQG1lbWJlck9mIG1vZHVsZTp3ZWJnbC0zZC1tYXRoXG4gICAqL1xuICBmdW5jdGlvbiBpZGVudGl0eShkc3QpIHtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IEZsb2F0MzJBcnJheSgxNik7XG5cbiAgICBkc3RbIDBdID0gMTtcbiAgICBkc3RbIDFdID0gMDtcbiAgICBkc3RbIDJdID0gMDtcbiAgICBkc3RbIDNdID0gMDtcbiAgICBkc3RbIDRdID0gMDtcbiAgICBkc3RbIDVdID0gMTtcbiAgICBkc3RbIDZdID0gMDtcbiAgICBkc3RbIDddID0gMDtcbiAgICBkc3RbIDhdID0gMDtcbiAgICBkc3RbIDldID0gMDtcbiAgICBkc3RbMTBdID0gMTtcbiAgICBkc3RbMTFdID0gMDtcbiAgICBkc3RbMTJdID0gMDtcbiAgICBkc3RbMTNdID0gMDtcbiAgICBkc3RbMTRdID0gMDtcbiAgICBkc3RbMTVdID0gMTtcblxuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNwb3NlcyBhIG1hdHJpeC5cbiAgICogQHBhcmFtIHtNYXRyaXg0fSBtIG1hdHJpeCB0byB0cmFuc3Bvc2UuXG4gICAqIEBwYXJhbSB7TWF0cml4NH0gW2RzdF0gb3B0aW9uYWwgbWF0cml4IHRvIHN0b3JlIHJlc3VsdFxuICAgKiBAcmV0dXJuIHtNYXRyaXg0fSBkc3Qgb3IgYSBuZXcgbWF0cml4IGlmIG5vbmUgcHJvdmlkZWRcbiAgICogQG1lbWJlck9mIG1vZHVsZTp3ZWJnbC0zZC1tYXRoXG4gICAqL1xuICBmdW5jdGlvbiB0cmFuc3Bvc2UobSwgZHN0KSB7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuXG4gICAgZHN0WyAwXSA9IG1bMF07XG4gICAgZHN0WyAxXSA9IG1bNF07XG4gICAgZHN0WyAyXSA9IG1bOF07XG4gICAgZHN0WyAzXSA9IG1bMTJdO1xuICAgIGRzdFsgNF0gPSBtWzFdO1xuICAgIGRzdFsgNV0gPSBtWzVdO1xuICAgIGRzdFsgNl0gPSBtWzldO1xuICAgIGRzdFsgN10gPSBtWzEzXTtcbiAgICBkc3RbIDhdID0gbVsyXTtcbiAgICBkc3RbIDldID0gbVs2XTtcbiAgICBkc3RbMTBdID0gbVsxMF07XG4gICAgZHN0WzExXSA9IG1bMTRdO1xuICAgIGRzdFsxMl0gPSBtWzNdO1xuICAgIGRzdFsxM10gPSBtWzddO1xuICAgIGRzdFsxNF0gPSBtWzExXTtcbiAgICBkc3RbMTVdID0gbVsxNV07XG5cbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBsb29rQXQgbWF0cml4LlxuICAgKiBUaGlzIGlzIGEgd29ybGQgbWF0cml4IGZvciBhIGNhbWVyYS4gSW4gb3RoZXIgd29yZHMgaXQgd2lsbCB0cmFuc2Zvcm1cbiAgICogZnJvbSB0aGUgb3JpZ2luIHRvIGEgcGxhY2UgYW5kIG9yaWVudGF0aW9uIGluIHRoZSB3b3JsZC4gRm9yIGEgdmlld1xuICAgKiBtYXRyaXggdGFrZSB0aGUgaW52ZXJzZSBvZiB0aGlzLlxuICAgKiBAcGFyYW0ge1ZlY3RvcjN9IGNhbWVyYVBvc2l0aW9uIHBvc2l0aW9uIG9mIHRoZSBjYW1lcmFcbiAgICogQHBhcmFtIHtWZWN0b3IzfSB0YXJnZXQgcG9zaXRpb24gb2YgdGhlIHRhcmdldFxuICAgKiBAcGFyYW0ge1ZlY3RvcjN9IHVwIGRpcmVjdGlvblxuICAgKiBAcGFyYW0ge01hdHJpeDR9IFtkc3RdIG9wdGlvbmFsIG1hdHJpeCB0byBzdG9yZSByZXN1bHRcbiAgICogQHJldHVybiB7TWF0cml4NH0gZHN0IG9yIGEgbmV3IG1hdHJpeCBpZiBub25lIHByb3ZpZGVkXG4gICAqIEBtZW1iZXJPZiBtb2R1bGU6d2ViZ2wtM2QtbWF0aFxuICAgKi9cbiAgZnVuY3Rpb24gbG9va0F0KGNhbWVyYVBvc2l0aW9uLCB0YXJnZXQsIHVwLCBkc3QpIHtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IEZsb2F0MzJBcnJheSgxNik7XG4gICAgdmFyIHpBeGlzID0gbm9ybWFsaXplKFxuICAgICAgICBzdWJ0cmFjdFZlY3RvcnMoY2FtZXJhUG9zaXRpb24sIHRhcmdldCkpO1xuICAgIHZhciB4QXhpcyA9IG5vcm1hbGl6ZShjcm9zcyh1cCwgekF4aXMpKTtcbiAgICB2YXIgeUF4aXMgPSBub3JtYWxpemUoY3Jvc3MoekF4aXMsIHhBeGlzKSk7XG5cbiAgICBkc3RbIDBdID0geEF4aXNbMF07XG4gICAgZHN0WyAxXSA9IHhBeGlzWzFdO1xuICAgIGRzdFsgMl0gPSB4QXhpc1syXTtcbiAgICBkc3RbIDNdID0gMDtcbiAgICBkc3RbIDRdID0geUF4aXNbMF07XG4gICAgZHN0WyA1XSA9IHlBeGlzWzFdO1xuICAgIGRzdFsgNl0gPSB5QXhpc1syXTtcbiAgICBkc3RbIDddID0gMDtcbiAgICBkc3RbIDhdID0gekF4aXNbMF07XG4gICAgZHN0WyA5XSA9IHpBeGlzWzFdO1xuICAgIGRzdFsxMF0gPSB6QXhpc1syXTtcbiAgICBkc3RbMTFdID0gMDtcbiAgICBkc3RbMTJdID0gY2FtZXJhUG9zaXRpb25bMF07XG4gICAgZHN0WzEzXSA9IGNhbWVyYVBvc2l0aW9uWzFdO1xuICAgIGRzdFsxNF0gPSBjYW1lcmFQb3NpdGlvblsyXTtcbiAgICBkc3RbMTVdID0gMTtcblxuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuICAvKipcbiAgICogQ29tcHV0ZXMgYSA0LWJ5LTQgcGVyc3BlY3RpdmUgdHJhbnNmb3JtYXRpb24gbWF0cml4IGdpdmVuIHRoZSBhbmd1bGFyIGhlaWdodFxuICAgKiBvZiB0aGUgZnJ1c3R1bSwgdGhlIGFzcGVjdCByYXRpbywgYW5kIHRoZSBuZWFyIGFuZCBmYXIgY2xpcHBpbmcgcGxhbmVzLiAgVGhlXG4gICAqIGFyZ3VtZW50cyBkZWZpbmUgYSBmcnVzdHVtIGV4dGVuZGluZyBpbiB0aGUgbmVnYXRpdmUgeiBkaXJlY3Rpb24uICBUaGUgZ2l2ZW5cbiAgICogYW5nbGUgaXMgdGhlIHZlcnRpY2FsIGFuZ2xlIG9mIHRoZSBmcnVzdHVtLCBhbmQgdGhlIGhvcml6b250YWwgYW5nbGUgaXNcbiAgICogZGV0ZXJtaW5lZCB0byBwcm9kdWNlIHRoZSBnaXZlbiBhc3BlY3QgcmF0aW8uICBUaGUgYXJndW1lbnRzIG5lYXIgYW5kIGZhciBhcmVcbiAgICogdGhlIGRpc3RhbmNlcyB0byB0aGUgbmVhciBhbmQgZmFyIGNsaXBwaW5nIHBsYW5lcy4gIE5vdGUgdGhhdCBuZWFyIGFuZCBmYXJcbiAgICogYXJlIG5vdCB6IGNvb3JkaW5hdGVzLCBidXQgcmF0aGVyIHRoZXkgYXJlIGRpc3RhbmNlcyBhbG9uZyB0aGUgbmVnYXRpdmVcbiAgICogei1heGlzLiAgVGhlIG1hdHJpeCBnZW5lcmF0ZWQgc2VuZHMgdGhlIHZpZXdpbmcgZnJ1c3R1bSB0byB0aGUgdW5pdCBib3guXG4gICAqIFdlIGFzc3VtZSBhIHVuaXQgYm94IGV4dGVuZGluZyBmcm9tIC0xIHRvIDEgaW4gdGhlIHggYW5kIHkgZGltZW5zaW9ucyBhbmRcbiAgICogZnJvbSAtMSB0byAxIGluIHRoZSB6IGRpbWVuc2lvbi5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGZpZWxkT2ZWaWV3SW5SYWRpYW5zIGZpZWxkIG9mIHZpZXcgaW4geSBheGlzLlxuICAgKiBAcGFyYW0ge251bWJlcn0gYXNwZWN0IGFzcGVjdCBvZiB2aWV3cG9ydCAod2lkdGggLyBoZWlnaHQpXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBuZWFyIG5lYXIgWiBjbGlwcGluZyBwbGFuZVxuICAgKiBAcGFyYW0ge251bWJlcn0gZmFyIGZhciBaIGNsaXBwaW5nIHBsYW5lXG4gICAqIEBwYXJhbSB7TWF0cml4NH0gW2RzdF0gb3B0aW9uYWwgbWF0cml4IHRvIHN0b3JlIHJlc3VsdFxuICAgKiBAcmV0dXJuIHtNYXRyaXg0fSBkc3Qgb3IgYSBuZXcgbWF0cml4IGlmIG5vbmUgcHJvdmlkZWRcbiAgICogQG1lbWJlck9mIG1vZHVsZTp3ZWJnbC0zZC1tYXRoXG4gICAqL1xuICBmdW5jdGlvbiBwZXJzcGVjdGl2ZShmaWVsZE9mVmlld0luUmFkaWFucywgYXNwZWN0LCBuZWFyLCBmYXIsIGRzdCkge1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgRmxvYXQzMkFycmF5KDE2KTtcbiAgICB2YXIgZiA9IE1hdGgudGFuKE1hdGguUEkgKiAwLjUgLSAwLjUgKiBmaWVsZE9mVmlld0luUmFkaWFucyk7XG4gICAgdmFyIHJhbmdlSW52ID0gMS4wIC8gKG5lYXIgLSBmYXIpO1xuXG4gICAgZHN0WyAwXSA9IGYgLyBhc3BlY3Q7XG4gICAgZHN0WyAxXSA9IDA7XG4gICAgZHN0WyAyXSA9IDA7XG4gICAgZHN0WyAzXSA9IDA7XG4gICAgZHN0WyA0XSA9IDA7XG4gICAgZHN0WyA1XSA9IGY7XG4gICAgZHN0WyA2XSA9IDA7XG4gICAgZHN0WyA3XSA9IDA7XG4gICAgZHN0WyA4XSA9IDA7XG4gICAgZHN0WyA5XSA9IDA7XG4gICAgZHN0WzEwXSA9IChuZWFyICsgZmFyKSAqIHJhbmdlSW52O1xuICAgIGRzdFsxMV0gPSAtMTtcbiAgICBkc3RbMTJdID0gMDtcbiAgICBkc3RbMTNdID0gMDtcbiAgICBkc3RbMTRdID0gbmVhciAqIGZhciAqIHJhbmdlSW52ICogMjtcbiAgICBkc3RbMTVdID0gMDtcblxuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuICAvKipcbiAgICogQ29tcHV0ZXMgYSA0LWJ5LTQgb3J0aG9ncmFwaGljIHByb2plY3Rpb24gbWF0cml4IGdpdmVuIHRoZSBjb29yZGluYXRlcyBvZiB0aGVcbiAgICogcGxhbmVzIGRlZmluaW5nIHRoZSBheGlzLWFsaWduZWQsIGJveC1zaGFwZWQgdmlld2luZyB2b2x1bWUuICBUaGUgbWF0cml4XG4gICAqIGdlbmVyYXRlZCBzZW5kcyB0aGF0IGJveCB0byB0aGUgdW5pdCBib3guICBOb3RlIHRoYXQgYWx0aG91Z2ggbGVmdCBhbmQgcmlnaHRcbiAgICogYXJlIHggY29vcmRpbmF0ZXMgYW5kIGJvdHRvbSBhbmQgdG9wIGFyZSB5IGNvb3JkaW5hdGVzLCBuZWFyIGFuZCBmYXJcbiAgICogYXJlIG5vdCB6IGNvb3JkaW5hdGVzLCBidXQgcmF0aGVyIHRoZXkgYXJlIGRpc3RhbmNlcyBhbG9uZyB0aGUgbmVnYXRpdmVcbiAgICogei1heGlzLiAgV2UgYXNzdW1lIGEgdW5pdCBib3ggZXh0ZW5kaW5nIGZyb20gLTEgdG8gMSBpbiB0aGUgeCBhbmQgeVxuICAgKiBkaW1lbnNpb25zIGFuZCBmcm9tIC0xIHRvIDEgaW4gdGhlIHogZGltZW5zaW9uLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbGVmdCBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSBsZWZ0IHBsYW5lIG9mIHRoZSBib3guXG4gICAqIEBwYXJhbSB7bnVtYmVyfSByaWdodCBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSByaWdodCBwbGFuZSBvZiB0aGUgYm94LlxuICAgKiBAcGFyYW0ge251bWJlcn0gYm90dG9tIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIGJvdHRvbSBwbGFuZSBvZiB0aGUgYm94LlxuICAgKiBAcGFyYW0ge251bWJlcn0gdG9wIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIHJpZ2h0IHBsYW5lIG9mIHRoZSBib3guXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBuZWFyIFRoZSBuZWdhdGl2ZSB6IGNvb3JkaW5hdGUgb2YgdGhlIG5lYXIgcGxhbmUgb2YgdGhlIGJveC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGZhciBUaGUgbmVnYXRpdmUgeiBjb29yZGluYXRlIG9mIHRoZSBmYXIgcGxhbmUgb2YgdGhlIGJveC5cbiAgICogQHBhcmFtIHtNYXRyaXg0fSBbZHN0XSBvcHRpb25hbCBtYXRyaXggdG8gc3RvcmUgcmVzdWx0XG4gICAqIEByZXR1cm4ge01hdHJpeDR9IGRzdCBvciBhIG5ldyBtYXRyaXggaWYgbm9uZSBwcm92aWRlZFxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG4gIGZ1bmN0aW9uIG9ydGhvZ3JhcGhpYyhsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhciwgZHN0KSB7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuXG4gICAgZHN0WyAwXSA9IDIgLyAocmlnaHQgLSBsZWZ0KTtcbiAgICBkc3RbIDFdID0gMDtcbiAgICBkc3RbIDJdID0gMDtcbiAgICBkc3RbIDNdID0gMDtcbiAgICBkc3RbIDRdID0gMDtcbiAgICBkc3RbIDVdID0gMiAvICh0b3AgLSBib3R0b20pO1xuICAgIGRzdFsgNl0gPSAwO1xuICAgIGRzdFsgN10gPSAwO1xuICAgIGRzdFsgOF0gPSAwO1xuICAgIGRzdFsgOV0gPSAwO1xuICAgIGRzdFsxMF0gPSAyIC8gKG5lYXIgLSBmYXIpO1xuICAgIGRzdFsxMV0gPSAwO1xuICAgIGRzdFsxMl0gPSAobGVmdCArIHJpZ2h0KSAvIChsZWZ0IC0gcmlnaHQpO1xuICAgIGRzdFsxM10gPSAoYm90dG9tICsgdG9wKSAvIChib3R0b20gLSB0b3ApO1xuICAgIGRzdFsxNF0gPSAobmVhciArIGZhcikgLyAobmVhciAtIGZhcik7XG4gICAgZHN0WzE1XSA9IDE7XG5cbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXB1dGVzIGEgNC1ieS00IHBlcnNwZWN0aXZlIHRyYW5zZm9ybWF0aW9uIG1hdHJpeCBnaXZlbiB0aGUgbGVmdCwgcmlnaHQsXG4gICAqIHRvcCwgYm90dG9tLCBuZWFyIGFuZCBmYXIgY2xpcHBpbmcgcGxhbmVzLiBUaGUgYXJndW1lbnRzIGRlZmluZSBhIGZydXN0dW1cbiAgICogZXh0ZW5kaW5nIGluIHRoZSBuZWdhdGl2ZSB6IGRpcmVjdGlvbi4gVGhlIGFyZ3VtZW50cyBuZWFyIGFuZCBmYXIgYXJlIHRoZVxuICAgKiBkaXN0YW5jZXMgdG8gdGhlIG5lYXIgYW5kIGZhciBjbGlwcGluZyBwbGFuZXMuIE5vdGUgdGhhdCBuZWFyIGFuZCBmYXIgYXJlIG5vdFxuICAgKiB6IGNvb3JkaW5hdGVzLCBidXQgcmF0aGVyIHRoZXkgYXJlIGRpc3RhbmNlcyBhbG9uZyB0aGUgbmVnYXRpdmUgei1heGlzLiBUaGVcbiAgICogbWF0cml4IGdlbmVyYXRlZCBzZW5kcyB0aGUgdmlld2luZyBmcnVzdHVtIHRvIHRoZSB1bml0IGJveC4gV2UgYXNzdW1lIGEgdW5pdFxuICAgKiBib3ggZXh0ZW5kaW5nIGZyb20gLTEgdG8gMSBpbiB0aGUgeCBhbmQgeSBkaW1lbnNpb25zIGFuZCBmcm9tIC0xIHRvIDEgaW4gdGhlIHpcbiAgICogZGltZW5zaW9uLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbGVmdCBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSBsZWZ0IHBsYW5lIG9mIHRoZSBib3guXG4gICAqIEBwYXJhbSB7bnVtYmVyfSByaWdodCBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSByaWdodCBwbGFuZSBvZiB0aGUgYm94LlxuICAgKiBAcGFyYW0ge251bWJlcn0gYm90dG9tIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIGJvdHRvbSBwbGFuZSBvZiB0aGUgYm94LlxuICAgKiBAcGFyYW0ge251bWJlcn0gdG9wIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIHJpZ2h0IHBsYW5lIG9mIHRoZSBib3guXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBuZWFyIFRoZSBuZWdhdGl2ZSB6IGNvb3JkaW5hdGUgb2YgdGhlIG5lYXIgcGxhbmUgb2YgdGhlIGJveC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGZhciBUaGUgbmVnYXRpdmUgeiBjb29yZGluYXRlIG9mIHRoZSBmYXIgcGxhbmUgb2YgdGhlIGJveC5cbiAgICogQHBhcmFtIHtNYXRyaXg0fSBbZHN0XSBvcHRpb25hbCBtYXRyaXggdG8gc3RvcmUgcmVzdWx0XG4gICAqIEByZXR1cm4ge01hdHJpeDR9IGRzdCBvciBhIG5ldyBtYXRyaXggaWYgbm9uZSBwcm92aWRlZFxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG4gIGZ1bmN0aW9uIGZydXN0dW0obGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyLCBmYXIsIGRzdCkge1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgRmxvYXQzMkFycmF5KDE2KTtcblxuICAgIHZhciBkeCA9IHJpZ2h0IC0gbGVmdDtcbiAgICB2YXIgZHkgPSB0b3AgLSBib3R0b207XG4gICAgdmFyIGR6ID0gZmFyIC0gbmVhcjtcblxuICAgIGRzdFsgMF0gPSAyICogbmVhciAvIGR4O1xuICAgIGRzdFsgMV0gPSAwO1xuICAgIGRzdFsgMl0gPSAwO1xuICAgIGRzdFsgM10gPSAwO1xuICAgIGRzdFsgNF0gPSAwO1xuICAgIGRzdFsgNV0gPSAyICogbmVhciAvIGR5O1xuICAgIGRzdFsgNl0gPSAwO1xuICAgIGRzdFsgN10gPSAwO1xuICAgIGRzdFsgOF0gPSAobGVmdCArIHJpZ2h0KSAvIGR4O1xuICAgIGRzdFsgOV0gPSAodG9wICsgYm90dG9tKSAvIGR5O1xuICAgIGRzdFsxMF0gPSAtKGZhciArIG5lYXIpIC8gZHo7XG4gICAgZHN0WzExXSA9IC0xO1xuICAgIGRzdFsxMl0gPSAwO1xuICAgIGRzdFsxM10gPSAwO1xuICAgIGRzdFsxNF0gPSAtMiAqIG5lYXIgKiBmYXIgLyBkejtcbiAgICBkc3RbMTVdID0gMDtcblxuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuICAvKipcbiAgICogTWFrZXMgYSB0cmFuc2xhdGlvbiBtYXRyaXhcbiAgICogQHBhcmFtIHtudW1iZXJ9IHR4IHggdHJhbnNsYXRpb24uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0eSB5IHRyYW5zbGF0aW9uLlxuICAgKiBAcGFyYW0ge251bWJlcn0gdHogeiB0cmFuc2xhdGlvbi5cbiAgICogQHBhcmFtIHtNYXRyaXg0fSBbZHN0XSBvcHRpb25hbCBtYXRyaXggdG8gc3RvcmUgcmVzdWx0XG4gICAqIEByZXR1cm4ge01hdHJpeDR9IGRzdCBvciBhIG5ldyBtYXRyaXggaWYgbm9uZSBwcm92aWRlZFxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG4gIGZ1bmN0aW9uIHRyYW5zbGF0aW9uKHR4LCB0eSwgdHosIGRzdCkge1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgRmxvYXQzMkFycmF5KDE2KTtcblxuICAgIGRzdFsgMF0gPSAxO1xuICAgIGRzdFsgMV0gPSAwO1xuICAgIGRzdFsgMl0gPSAwO1xuICAgIGRzdFsgM10gPSAwO1xuICAgIGRzdFsgNF0gPSAwO1xuICAgIGRzdFsgNV0gPSAxO1xuICAgIGRzdFsgNl0gPSAwO1xuICAgIGRzdFsgN10gPSAwO1xuICAgIGRzdFsgOF0gPSAwO1xuICAgIGRzdFsgOV0gPSAwO1xuICAgIGRzdFsxMF0gPSAxO1xuICAgIGRzdFsxMV0gPSAwO1xuICAgIGRzdFsxMl0gPSB0eDtcbiAgICBkc3RbMTNdID0gdHk7XG4gICAgZHN0WzE0XSA9IHR6O1xuICAgIGRzdFsxNV0gPSAxO1xuXG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNdXRsaXBseSBieSB0cmFuc2xhdGlvbiBtYXRyaXguXG4gICAqIEBwYXJhbSB7TWF0cml4NH0gbSBtYXRyaXggdG8gbXVsdGlwbHlcbiAgICogQHBhcmFtIHtudW1iZXJ9IHR4IHggdHJhbnNsYXRpb24uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0eSB5IHRyYW5zbGF0aW9uLlxuICAgKiBAcGFyYW0ge251bWJlcn0gdHogeiB0cmFuc2xhdGlvbi5cbiAgICogQHBhcmFtIHtNYXRyaXg0fSBbZHN0XSBvcHRpb25hbCBtYXRyaXggdG8gc3RvcmUgcmVzdWx0XG4gICAqIEByZXR1cm4ge01hdHJpeDR9IGRzdCBvciBhIG5ldyBtYXRyaXggaWYgbm9uZSBwcm92aWRlZFxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG4gIGZ1bmN0aW9uIHRyYW5zbGF0ZShtLCB0eCwgdHksIHR6LCBkc3QpIHtcbiAgICAvLyBUaGlzIGlzIHRoZSBvcHRpbWl6ZWQgdmVyc2lvbiBvZlxuICAgIC8vIHJldHVybiBtdWx0aXBseShtLCB0cmFuc2xhdGlvbih0eCwgdHksIHR6KSwgZHN0KTtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IEZsb2F0MzJBcnJheSgxNik7XG5cbiAgICB2YXIgbTAwID0gbVswXTtcbiAgICB2YXIgbTAxID0gbVsxXTtcbiAgICB2YXIgbTAyID0gbVsyXTtcbiAgICB2YXIgbTAzID0gbVszXTtcbiAgICB2YXIgbTEwID0gbVsxICogNCArIDBdO1xuICAgIHZhciBtMTEgPSBtWzEgKiA0ICsgMV07XG4gICAgdmFyIG0xMiA9IG1bMSAqIDQgKyAyXTtcbiAgICB2YXIgbTEzID0gbVsxICogNCArIDNdO1xuICAgIHZhciBtMjAgPSBtWzIgKiA0ICsgMF07XG4gICAgdmFyIG0yMSA9IG1bMiAqIDQgKyAxXTtcbiAgICB2YXIgbTIyID0gbVsyICogNCArIDJdO1xuICAgIHZhciBtMjMgPSBtWzIgKiA0ICsgM107XG4gICAgdmFyIG0zMCA9IG1bMyAqIDQgKyAwXTtcbiAgICB2YXIgbTMxID0gbVszICogNCArIDFdO1xuICAgIHZhciBtMzIgPSBtWzMgKiA0ICsgMl07XG4gICAgdmFyIG0zMyA9IG1bMyAqIDQgKyAzXTtcblxuICAgIGlmIChtICE9PSBkc3QpIHtcbiAgICAgIGRzdFsgMF0gPSBtMDA7XG4gICAgICBkc3RbIDFdID0gbTAxO1xuICAgICAgZHN0WyAyXSA9IG0wMjtcbiAgICAgIGRzdFsgM10gPSBtMDM7XG4gICAgICBkc3RbIDRdID0gbTEwO1xuICAgICAgZHN0WyA1XSA9IG0xMTtcbiAgICAgIGRzdFsgNl0gPSBtMTI7XG4gICAgICBkc3RbIDddID0gbTEzO1xuICAgICAgZHN0WyA4XSA9IG0yMDtcbiAgICAgIGRzdFsgOV0gPSBtMjE7XG4gICAgICBkc3RbMTBdID0gbTIyO1xuICAgICAgZHN0WzExXSA9IG0yMztcbiAgICB9XG5cbiAgICBkc3RbMTJdID0gbTAwICogdHggKyBtMTAgKiB0eSArIG0yMCAqIHR6ICsgbTMwO1xuICAgIGRzdFsxM10gPSBtMDEgKiB0eCArIG0xMSAqIHR5ICsgbTIxICogdHogKyBtMzE7XG4gICAgZHN0WzE0XSA9IG0wMiAqIHR4ICsgbTEyICogdHkgKyBtMjIgKiB0eiArIG0zMjtcbiAgICBkc3RbMTVdID0gbTAzICogdHggKyBtMTMgKiB0eSArIG0yMyAqIHR6ICsgbTMzO1xuXG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlcyBhbiB4IHJvdGF0aW9uIG1hdHJpeFxuICAgKiBAcGFyYW0ge251bWJlcn0gYW5nbGVJblJhZGlhbnMgYW1vdW50IHRvIHJvdGF0ZVxuICAgKiBAcGFyYW0ge01hdHJpeDR9IFtkc3RdIG9wdGlvbmFsIG1hdHJpeCB0byBzdG9yZSByZXN1bHRcbiAgICogQHJldHVybiB7TWF0cml4NH0gZHN0IG9yIGEgbmV3IG1hdHJpeCBpZiBub25lIHByb3ZpZGVkXG4gICAqIEBtZW1iZXJPZiBtb2R1bGU6d2ViZ2wtM2QtbWF0aFxuICAgKi9cbiAgZnVuY3Rpb24geFJvdGF0aW9uKGFuZ2xlSW5SYWRpYW5zLCBkc3QpIHtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IEZsb2F0MzJBcnJheSgxNik7XG4gICAgdmFyIGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG5cbiAgICBkc3RbIDBdID0gMTtcbiAgICBkc3RbIDFdID0gMDtcbiAgICBkc3RbIDJdID0gMDtcbiAgICBkc3RbIDNdID0gMDtcbiAgICBkc3RbIDRdID0gMDtcbiAgICBkc3RbIDVdID0gYztcbiAgICBkc3RbIDZdID0gcztcbiAgICBkc3RbIDddID0gMDtcbiAgICBkc3RbIDhdID0gMDtcbiAgICBkc3RbIDldID0gLXM7XG4gICAgZHN0WzEwXSA9IGM7XG4gICAgZHN0WzExXSA9IDA7XG4gICAgZHN0WzEyXSA9IDA7XG4gICAgZHN0WzEzXSA9IDA7XG4gICAgZHN0WzE0XSA9IDA7XG4gICAgZHN0WzE1XSA9IDE7XG5cbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgLyoqXG4gICAqIE11bHRpcGx5IGJ5IGFuIHggcm90YXRpb24gbWF0cml4XG4gICAqIEBwYXJhbSB7TWF0cml4NH0gbSBtYXRyaXggdG8gbXVsdGlwbHlcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlSW5SYWRpYW5zIGFtb3VudCB0byByb3RhdGVcbiAgICogQHBhcmFtIHtNYXRyaXg0fSBbZHN0XSBvcHRpb25hbCBtYXRyaXggdG8gc3RvcmUgcmVzdWx0XG4gICAqIEByZXR1cm4ge01hdHJpeDR9IGRzdCBvciBhIG5ldyBtYXRyaXggaWYgbm9uZSBwcm92aWRlZFxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG4gIGZ1bmN0aW9uIHhSb3RhdGUobSwgYW5nbGVJblJhZGlhbnMsIGRzdCkge1xuICAgIC8vIHRoaXMgaXMgdGhlIG9wdGltaXplZCB2ZXJzaW9uIG9mXG4gICAgLy8gcmV0dXJuIG11bHRpcGx5KG0sIHhSb3RhdGlvbihhbmdsZUluUmFkaWFucyksIGRzdCk7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuXG4gICAgdmFyIG0xMCA9IG1bNF07XG4gICAgdmFyIG0xMSA9IG1bNV07XG4gICAgdmFyIG0xMiA9IG1bNl07XG4gICAgdmFyIG0xMyA9IG1bN107XG4gICAgdmFyIG0yMCA9IG1bOF07XG4gICAgdmFyIG0yMSA9IG1bOV07XG4gICAgdmFyIG0yMiA9IG1bMTBdO1xuICAgIHZhciBtMjMgPSBtWzExXTtcbiAgICB2YXIgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICB2YXIgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcblxuICAgIGRzdFs0XSAgPSBjICogbTEwICsgcyAqIG0yMDtcbiAgICBkc3RbNV0gID0gYyAqIG0xMSArIHMgKiBtMjE7XG4gICAgZHN0WzZdICA9IGMgKiBtMTIgKyBzICogbTIyO1xuICAgIGRzdFs3XSAgPSBjICogbTEzICsgcyAqIG0yMztcbiAgICBkc3RbOF0gID0gYyAqIG0yMCAtIHMgKiBtMTA7XG4gICAgZHN0WzldICA9IGMgKiBtMjEgLSBzICogbTExO1xuICAgIGRzdFsxMF0gPSBjICogbTIyIC0gcyAqIG0xMjtcbiAgICBkc3RbMTFdID0gYyAqIG0yMyAtIHMgKiBtMTM7XG5cbiAgICBpZiAobSAhPT0gZHN0KSB7XG4gICAgICBkc3RbIDBdID0gbVsgMF07XG4gICAgICBkc3RbIDFdID0gbVsgMV07XG4gICAgICBkc3RbIDJdID0gbVsgMl07XG4gICAgICBkc3RbIDNdID0gbVsgM107XG4gICAgICBkc3RbMTJdID0gbVsxMl07XG4gICAgICBkc3RbMTNdID0gbVsxM107XG4gICAgICBkc3RbMTRdID0gbVsxNF07XG4gICAgICBkc3RbMTVdID0gbVsxNV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlcyBhbiB5IHJvdGF0aW9uIG1hdHJpeFxuICAgKiBAcGFyYW0ge251bWJlcn0gYW5nbGVJblJhZGlhbnMgYW1vdW50IHRvIHJvdGF0ZVxuICAgKiBAcGFyYW0ge01hdHJpeDR9IFtkc3RdIG9wdGlvbmFsIG1hdHJpeCB0byBzdG9yZSByZXN1bHRcbiAgICogQHJldHVybiB7TWF0cml4NH0gZHN0IG9yIGEgbmV3IG1hdHJpeCBpZiBub25lIHByb3ZpZGVkXG4gICAqIEBtZW1iZXJPZiBtb2R1bGU6d2ViZ2wtM2QtbWF0aFxuICAgKi9cbiAgZnVuY3Rpb24geVJvdGF0aW9uKGFuZ2xlSW5SYWRpYW5zLCBkc3QpIHtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IEZsb2F0MzJBcnJheSgxNik7XG4gICAgdmFyIGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG5cbiAgICBkc3RbIDBdID0gYztcbiAgICBkc3RbIDFdID0gMDtcbiAgICBkc3RbIDJdID0gLXM7XG4gICAgZHN0WyAzXSA9IDA7XG4gICAgZHN0WyA0XSA9IDA7XG4gICAgZHN0WyA1XSA9IDE7XG4gICAgZHN0WyA2XSA9IDA7XG4gICAgZHN0WyA3XSA9IDA7XG4gICAgZHN0WyA4XSA9IHM7XG4gICAgZHN0WyA5XSA9IDA7XG4gICAgZHN0WzEwXSA9IGM7XG4gICAgZHN0WzExXSA9IDA7XG4gICAgZHN0WzEyXSA9IDA7XG4gICAgZHN0WzEzXSA9IDA7XG4gICAgZHN0WzE0XSA9IDA7XG4gICAgZHN0WzE1XSA9IDE7XG5cbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgLyoqXG4gICAqIE11bHRpcGx5IGJ5IGFuIHkgcm90YXRpb24gbWF0cml4XG4gICAqIEBwYXJhbSB7TWF0cml4NH0gbSBtYXRyaXggdG8gbXVsdGlwbHlcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlSW5SYWRpYW5zIGFtb3VudCB0byByb3RhdGVcbiAgICogQHBhcmFtIHtNYXRyaXg0fSBbZHN0XSBvcHRpb25hbCBtYXRyaXggdG8gc3RvcmUgcmVzdWx0XG4gICAqIEByZXR1cm4ge01hdHJpeDR9IGRzdCBvciBhIG5ldyBtYXRyaXggaWYgbm9uZSBwcm92aWRlZFxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG4gIGZ1bmN0aW9uIHlSb3RhdGUobSwgYW5nbGVJblJhZGlhbnMsIGRzdCkge1xuICAgIC8vIHRoaXMgaXMgdGhlIG9wdGltaXplZCB2ZXJpc29uIG9mXG4gICAgLy8gcmV0dXJuIG11bHRpcGx5KG0sIHlSb3RhdGlvbihhbmdsZUluUmFkaWFucyksIGRzdCk7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuXG4gICAgdmFyIG0wMCA9IG1bMCAqIDQgKyAwXTtcbiAgICB2YXIgbTAxID0gbVswICogNCArIDFdO1xuICAgIHZhciBtMDIgPSBtWzAgKiA0ICsgMl07XG4gICAgdmFyIG0wMyA9IG1bMCAqIDQgKyAzXTtcbiAgICB2YXIgbTIwID0gbVsyICogNCArIDBdO1xuICAgIHZhciBtMjEgPSBtWzIgKiA0ICsgMV07XG4gICAgdmFyIG0yMiA9IG1bMiAqIDQgKyAyXTtcbiAgICB2YXIgbTIzID0gbVsyICogNCArIDNdO1xuICAgIHZhciBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICAgIHZhciBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuXG4gICAgZHN0WyAwXSA9IGMgKiBtMDAgLSBzICogbTIwO1xuICAgIGRzdFsgMV0gPSBjICogbTAxIC0gcyAqIG0yMTtcbiAgICBkc3RbIDJdID0gYyAqIG0wMiAtIHMgKiBtMjI7XG4gICAgZHN0WyAzXSA9IGMgKiBtMDMgLSBzICogbTIzO1xuICAgIGRzdFsgOF0gPSBjICogbTIwICsgcyAqIG0wMDtcbiAgICBkc3RbIDldID0gYyAqIG0yMSArIHMgKiBtMDE7XG4gICAgZHN0WzEwXSA9IGMgKiBtMjIgKyBzICogbTAyO1xuICAgIGRzdFsxMV0gPSBjICogbTIzICsgcyAqIG0wMztcblxuICAgIGlmIChtICE9PSBkc3QpIHtcbiAgICAgIGRzdFsgNF0gPSBtWyA0XTtcbiAgICAgIGRzdFsgNV0gPSBtWyA1XTtcbiAgICAgIGRzdFsgNl0gPSBtWyA2XTtcbiAgICAgIGRzdFsgN10gPSBtWyA3XTtcbiAgICAgIGRzdFsxMl0gPSBtWzEyXTtcbiAgICAgIGRzdFsxM10gPSBtWzEzXTtcbiAgICAgIGRzdFsxNF0gPSBtWzE0XTtcbiAgICAgIGRzdFsxNV0gPSBtWzE1XTtcbiAgICB9XG5cbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2VzIGFuIHogcm90YXRpb24gbWF0cml4XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZUluUmFkaWFucyBhbW91bnQgdG8gcm90YXRlXG4gICAqIEBwYXJhbSB7TWF0cml4NH0gW2RzdF0gb3B0aW9uYWwgbWF0cml4IHRvIHN0b3JlIHJlc3VsdFxuICAgKiBAcmV0dXJuIHtNYXRyaXg0fSBkc3Qgb3IgYSBuZXcgbWF0cml4IGlmIG5vbmUgcHJvdmlkZWRcbiAgICogQG1lbWJlck9mIG1vZHVsZTp3ZWJnbC0zZC1tYXRoXG4gICAqL1xuICBmdW5jdGlvbiB6Um90YXRpb24oYW5nbGVJblJhZGlhbnMsIGRzdCkge1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgRmxvYXQzMkFycmF5KDE2KTtcbiAgICB2YXIgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICB2YXIgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcblxuICAgIGRzdFsgMF0gPSBjO1xuICAgIGRzdFsgMV0gPSBzO1xuICAgIGRzdFsgMl0gPSAwO1xuICAgIGRzdFsgM10gPSAwO1xuICAgIGRzdFsgNF0gPSAtcztcbiAgICBkc3RbIDVdID0gYztcbiAgICBkc3RbIDZdID0gMDtcbiAgICBkc3RbIDddID0gMDtcbiAgICBkc3RbIDhdID0gMDtcbiAgICBkc3RbIDldID0gMDtcbiAgICBkc3RbMTBdID0gMTtcbiAgICBkc3RbMTFdID0gMDtcbiAgICBkc3RbMTJdID0gMDtcbiAgICBkc3RbMTNdID0gMDtcbiAgICBkc3RbMTRdID0gMDtcbiAgICBkc3RbMTVdID0gMTtcblxuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuICAvKipcbiAgICogTXVsdGlwbHkgYnkgYW4geiByb3RhdGlvbiBtYXRyaXhcbiAgICogQHBhcmFtIHtNYXRyaXg0fSBtIG1hdHJpeCB0byBtdWx0aXBseVxuICAgKiBAcGFyYW0ge251bWJlcn0gYW5nbGVJblJhZGlhbnMgYW1vdW50IHRvIHJvdGF0ZVxuICAgKiBAcGFyYW0ge01hdHJpeDR9IFtkc3RdIG9wdGlvbmFsIG1hdHJpeCB0byBzdG9yZSByZXN1bHRcbiAgICogQHJldHVybiB7TWF0cml4NH0gZHN0IG9yIGEgbmV3IG1hdHJpeCBpZiBub25lIHByb3ZpZGVkXG4gICAqIEBtZW1iZXJPZiBtb2R1bGU6d2ViZ2wtM2QtbWF0aFxuICAgKi9cbiAgZnVuY3Rpb24gelJvdGF0ZShtLCBhbmdsZUluUmFkaWFucywgZHN0KSB7XG4gICAgLy8gVGhpcyBpcyB0aGUgb3B0aW1pemVkIHZlcmlzb24gb2ZcbiAgICAvLyByZXR1cm4gbXVsdGlwbHkobSwgelJvdGF0aW9uKGFuZ2xlSW5SYWRpYW5zKSwgZHN0KTtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IEZsb2F0MzJBcnJheSgxNik7XG5cbiAgICB2YXIgbTAwID0gbVswICogNCArIDBdO1xuICAgIHZhciBtMDEgPSBtWzAgKiA0ICsgMV07XG4gICAgdmFyIG0wMiA9IG1bMCAqIDQgKyAyXTtcbiAgICB2YXIgbTAzID0gbVswICogNCArIDNdO1xuICAgIHZhciBtMTAgPSBtWzEgKiA0ICsgMF07XG4gICAgdmFyIG0xMSA9IG1bMSAqIDQgKyAxXTtcbiAgICB2YXIgbTEyID0gbVsxICogNCArIDJdO1xuICAgIHZhciBtMTMgPSBtWzEgKiA0ICsgM107XG4gICAgdmFyIGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG5cbiAgICBkc3RbIDBdID0gYyAqIG0wMCArIHMgKiBtMTA7XG4gICAgZHN0WyAxXSA9IGMgKiBtMDEgKyBzICogbTExO1xuICAgIGRzdFsgMl0gPSBjICogbTAyICsgcyAqIG0xMjtcbiAgICBkc3RbIDNdID0gYyAqIG0wMyArIHMgKiBtMTM7XG4gICAgZHN0WyA0XSA9IGMgKiBtMTAgLSBzICogbTAwO1xuICAgIGRzdFsgNV0gPSBjICogbTExIC0gcyAqIG0wMTtcbiAgICBkc3RbIDZdID0gYyAqIG0xMiAtIHMgKiBtMDI7XG4gICAgZHN0WyA3XSA9IGMgKiBtMTMgLSBzICogbTAzO1xuXG4gICAgaWYgKG0gIT09IGRzdCkge1xuICAgICAgZHN0WyA4XSA9IG1bIDhdO1xuICAgICAgZHN0WyA5XSA9IG1bIDldO1xuICAgICAgZHN0WzEwXSA9IG1bMTBdO1xuICAgICAgZHN0WzExXSA9IG1bMTFdO1xuICAgICAgZHN0WzEyXSA9IG1bMTJdO1xuICAgICAgZHN0WzEzXSA9IG1bMTNdO1xuICAgICAgZHN0WzE0XSA9IG1bMTRdO1xuICAgICAgZHN0WzE1XSA9IG1bMTVdO1xuICAgIH1cblxuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuICAvKipcbiAgICogTWFrZXMgYW4gcm90YXRpb24gbWF0cml4IGFyb3VuZCBhbiBhcmJpdHJhcnkgYXhpc1xuICAgKiBAcGFyYW0ge1ZlY3RvcjN9IGF4aXMgYXhpcyB0byByb3RhdGUgYXJvdW5kXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZUluUmFkaWFucyBhbW91bnQgdG8gcm90YXRlXG4gICAqIEBwYXJhbSB7TWF0cml4NH0gW2RzdF0gb3B0aW9uYWwgbWF0cml4IHRvIHN0b3JlIHJlc3VsdFxuICAgKiBAcmV0dXJuIHtNYXRyaXg0fSBkc3Qgb3IgYSBuZXcgbWF0cml4IGlmIG5vbmUgcHJvdmlkZWRcbiAgICogQG1lbWJlck9mIG1vZHVsZTp3ZWJnbC0zZC1tYXRoXG4gICAqL1xuICBmdW5jdGlvbiBheGlzUm90YXRpb24oYXhpcywgYW5nbGVJblJhZGlhbnMsIGRzdCkge1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgRmxvYXQzMkFycmF5KDE2KTtcblxuICAgIHZhciB4ID0gYXhpc1swXTtcbiAgICB2YXIgeSA9IGF4aXNbMV07XG4gICAgdmFyIHogPSBheGlzWzJdO1xuICAgIHZhciBuID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeik7XG4gICAgeCAvPSBuO1xuICAgIHkgLz0gbjtcbiAgICB6IC89IG47XG4gICAgdmFyIHh4ID0geCAqIHg7XG4gICAgdmFyIHl5ID0geSAqIHk7XG4gICAgdmFyIHp6ID0geiAqIHo7XG4gICAgdmFyIGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG4gICAgdmFyIG9uZU1pbnVzQ29zaW5lID0gMSAtIGM7XG5cbiAgICBkc3RbIDBdID0geHggKyAoMSAtIHh4KSAqIGM7XG4gICAgZHN0WyAxXSA9IHggKiB5ICogb25lTWludXNDb3NpbmUgKyB6ICogcztcbiAgICBkc3RbIDJdID0geCAqIHogKiBvbmVNaW51c0Nvc2luZSAtIHkgKiBzO1xuICAgIGRzdFsgM10gPSAwO1xuICAgIGRzdFsgNF0gPSB4ICogeSAqIG9uZU1pbnVzQ29zaW5lIC0geiAqIHM7XG4gICAgZHN0WyA1XSA9IHl5ICsgKDEgLSB5eSkgKiBjO1xuICAgIGRzdFsgNl0gPSB5ICogeiAqIG9uZU1pbnVzQ29zaW5lICsgeCAqIHM7XG4gICAgZHN0WyA3XSA9IDA7XG4gICAgZHN0WyA4XSA9IHggKiB6ICogb25lTWludXNDb3NpbmUgKyB5ICogcztcbiAgICBkc3RbIDldID0geSAqIHogKiBvbmVNaW51c0Nvc2luZSAtIHggKiBzO1xuICAgIGRzdFsxMF0gPSB6eiArICgxIC0genopICogYztcbiAgICBkc3RbMTFdID0gMDtcbiAgICBkc3RbMTJdID0gMDtcbiAgICBkc3RbMTNdID0gMDtcbiAgICBkc3RbMTRdID0gMDtcbiAgICBkc3RbMTVdID0gMTtcblxuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuICAvKipcbiAgICogTXVsdGlwbHkgYnkgYW4gYXhpcyByb3RhdGlvbiBtYXRyaXhcbiAgICogQHBhcmFtIHtNYXRyaXg0fSBtIG1hdHJpeCB0byBtdWx0aXBseVxuICAgKiBAcGFyYW0ge1ZlY3RvcjN9IGF4aXMgYXhpcyB0byByb3RhdGUgYXJvdW5kXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZUluUmFkaWFucyBhbW91bnQgdG8gcm90YXRlXG4gICAqIEBwYXJhbSB7TWF0cml4NH0gW2RzdF0gb3B0aW9uYWwgbWF0cml4IHRvIHN0b3JlIHJlc3VsdFxuICAgKiBAcmV0dXJuIHtNYXRyaXg0fSBkc3Qgb3IgYSBuZXcgbWF0cml4IGlmIG5vbmUgcHJvdmlkZWRcbiAgICogQG1lbWJlck9mIG1vZHVsZTp3ZWJnbC0zZC1tYXRoXG4gICAqL1xuICBmdW5jdGlvbiBheGlzUm90YXRlKG0sIGF4aXMsIGFuZ2xlSW5SYWRpYW5zLCBkc3QpIHtcbiAgICAvLyBUaGlzIGlzIHRoZSBvcHRpbWl6ZWQgdmVyaXNvbiBvZlxuICAgIC8vIHJldHVybiBtdWx0aXBseShtLCBheGlzUm90YXRpb24oYXhpcywgYW5nbGVJblJhZGlhbnMpLCBkc3QpO1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgRmxvYXQzMkFycmF5KDE2KTtcblxuICAgIHZhciB4ID0gYXhpc1swXTtcbiAgICB2YXIgeSA9IGF4aXNbMV07XG4gICAgdmFyIHogPSBheGlzWzJdO1xuICAgIHZhciBuID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeik7XG4gICAgeCAvPSBuO1xuICAgIHkgLz0gbjtcbiAgICB6IC89IG47XG4gICAgdmFyIHh4ID0geCAqIHg7XG4gICAgdmFyIHl5ID0geSAqIHk7XG4gICAgdmFyIHp6ID0geiAqIHo7XG4gICAgdmFyIGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG4gICAgdmFyIG9uZU1pbnVzQ29zaW5lID0gMSAtIGM7XG5cbiAgICB2YXIgcjAwID0geHggKyAoMSAtIHh4KSAqIGM7XG4gICAgdmFyIHIwMSA9IHggKiB5ICogb25lTWludXNDb3NpbmUgKyB6ICogcztcbiAgICB2YXIgcjAyID0geCAqIHogKiBvbmVNaW51c0Nvc2luZSAtIHkgKiBzO1xuICAgIHZhciByMTAgPSB4ICogeSAqIG9uZU1pbnVzQ29zaW5lIC0geiAqIHM7XG4gICAgdmFyIHIxMSA9IHl5ICsgKDEgLSB5eSkgKiBjO1xuICAgIHZhciByMTIgPSB5ICogeiAqIG9uZU1pbnVzQ29zaW5lICsgeCAqIHM7XG4gICAgdmFyIHIyMCA9IHggKiB6ICogb25lTWludXNDb3NpbmUgKyB5ICogcztcbiAgICB2YXIgcjIxID0geSAqIHogKiBvbmVNaW51c0Nvc2luZSAtIHggKiBzO1xuICAgIHZhciByMjIgPSB6eiArICgxIC0genopICogYztcblxuICAgIHZhciBtMDAgPSBtWzBdO1xuICAgIHZhciBtMDEgPSBtWzFdO1xuICAgIHZhciBtMDIgPSBtWzJdO1xuICAgIHZhciBtMDMgPSBtWzNdO1xuICAgIHZhciBtMTAgPSBtWzRdO1xuICAgIHZhciBtMTEgPSBtWzVdO1xuICAgIHZhciBtMTIgPSBtWzZdO1xuICAgIHZhciBtMTMgPSBtWzddO1xuICAgIHZhciBtMjAgPSBtWzhdO1xuICAgIHZhciBtMjEgPSBtWzldO1xuICAgIHZhciBtMjIgPSBtWzEwXTtcbiAgICB2YXIgbTIzID0gbVsxMV07XG5cbiAgICBkc3RbIDBdID0gcjAwICogbTAwICsgcjAxICogbTEwICsgcjAyICogbTIwO1xuICAgIGRzdFsgMV0gPSByMDAgKiBtMDEgKyByMDEgKiBtMTEgKyByMDIgKiBtMjE7XG4gICAgZHN0WyAyXSA9IHIwMCAqIG0wMiArIHIwMSAqIG0xMiArIHIwMiAqIG0yMjtcbiAgICBkc3RbIDNdID0gcjAwICogbTAzICsgcjAxICogbTEzICsgcjAyICogbTIzO1xuICAgIGRzdFsgNF0gPSByMTAgKiBtMDAgKyByMTEgKiBtMTAgKyByMTIgKiBtMjA7XG4gICAgZHN0WyA1XSA9IHIxMCAqIG0wMSArIHIxMSAqIG0xMSArIHIxMiAqIG0yMTtcbiAgICBkc3RbIDZdID0gcjEwICogbTAyICsgcjExICogbTEyICsgcjEyICogbTIyO1xuICAgIGRzdFsgN10gPSByMTAgKiBtMDMgKyByMTEgKiBtMTMgKyByMTIgKiBtMjM7XG4gICAgZHN0WyA4XSA9IHIyMCAqIG0wMCArIHIyMSAqIG0xMCArIHIyMiAqIG0yMDtcbiAgICBkc3RbIDldID0gcjIwICogbTAxICsgcjIxICogbTExICsgcjIyICogbTIxO1xuICAgIGRzdFsxMF0gPSByMjAgKiBtMDIgKyByMjEgKiBtMTIgKyByMjIgKiBtMjI7XG4gICAgZHN0WzExXSA9IHIyMCAqIG0wMyArIHIyMSAqIG0xMyArIHIyMiAqIG0yMztcblxuICAgIGlmIChtICE9PSBkc3QpIHtcbiAgICAgIGRzdFsxMl0gPSBtWzEyXTtcbiAgICAgIGRzdFsxM10gPSBtWzEzXTtcbiAgICAgIGRzdFsxNF0gPSBtWzE0XTtcbiAgICAgIGRzdFsxNV0gPSBtWzE1XTtcbiAgICB9XG5cbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2VzIGEgc2NhbGUgbWF0cml4XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzeCB4IHNjYWxlLlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3kgeSBzY2FsZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHN6IHogc2NhbGUuXG4gICAqIEBwYXJhbSB7TWF0cml4NH0gW2RzdF0gb3B0aW9uYWwgbWF0cml4IHRvIHN0b3JlIHJlc3VsdFxuICAgKiBAcmV0dXJuIHtNYXRyaXg0fSBkc3Qgb3IgYSBuZXcgbWF0cml4IGlmIG5vbmUgcHJvdmlkZWRcbiAgICogQG1lbWJlck9mIG1vZHVsZTp3ZWJnbC0zZC1tYXRoXG4gICAqL1xuICBmdW5jdGlvbiBzY2FsaW5nKHN4LCBzeSwgc3osIGRzdCkge1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgRmxvYXQzMkFycmF5KDE2KTtcblxuICAgIGRzdFsgMF0gPSBzeDtcbiAgICBkc3RbIDFdID0gMDtcbiAgICBkc3RbIDJdID0gMDtcbiAgICBkc3RbIDNdID0gMDtcbiAgICBkc3RbIDRdID0gMDtcbiAgICBkc3RbIDVdID0gc3k7XG4gICAgZHN0WyA2XSA9IDA7XG4gICAgZHN0WyA3XSA9IDA7XG4gICAgZHN0WyA4XSA9IDA7XG4gICAgZHN0WyA5XSA9IDA7XG4gICAgZHN0WzEwXSA9IHN6O1xuICAgIGRzdFsxMV0gPSAwO1xuICAgIGRzdFsxMl0gPSAwO1xuICAgIGRzdFsxM10gPSAwO1xuICAgIGRzdFsxNF0gPSAwO1xuICAgIGRzdFsxNV0gPSAxO1xuXG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNdWx0aXBseSBieSBhIHNjYWxpbmcgbWF0cml4XG4gICAqIEBwYXJhbSB7TWF0cml4NH0gbSBtYXRyaXggdG8gbXVsdGlwbHlcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN4IHggc2NhbGUuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzeSB5IHNjYWxlLlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3ogeiBzY2FsZS5cbiAgICogQHBhcmFtIHtNYXRyaXg0fSBbZHN0XSBvcHRpb25hbCBtYXRyaXggdG8gc3RvcmUgcmVzdWx0XG4gICAqIEByZXR1cm4ge01hdHJpeDR9IGRzdCBvciBhIG5ldyBtYXRyaXggaWYgbm9uZSBwcm92aWRlZFxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG4gIGZ1bmN0aW9uIHNjYWxlKG0sIHN4LCBzeSwgc3osIGRzdCkge1xuICAgIC8vIFRoaXMgaXMgdGhlIG9wdGltaXplZCB2ZXJpc29uIG9mXG4gICAgLy8gcmV0dXJuIG11bHRpcGx5KG0sIHNjYWxpbmcoc3gsIHN5LCBzeiksIGRzdCk7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuXG4gICAgZHN0WyAwXSA9IHN4ICogbVswICogNCArIDBdO1xuICAgIGRzdFsgMV0gPSBzeCAqIG1bMCAqIDQgKyAxXTtcbiAgICBkc3RbIDJdID0gc3ggKiBtWzAgKiA0ICsgMl07XG4gICAgZHN0WyAzXSA9IHN4ICogbVswICogNCArIDNdO1xuICAgIGRzdFsgNF0gPSBzeSAqIG1bMSAqIDQgKyAwXTtcbiAgICBkc3RbIDVdID0gc3kgKiBtWzEgKiA0ICsgMV07XG4gICAgZHN0WyA2XSA9IHN5ICogbVsxICogNCArIDJdO1xuICAgIGRzdFsgN10gPSBzeSAqIG1bMSAqIDQgKyAzXTtcbiAgICBkc3RbIDhdID0gc3ogKiBtWzIgKiA0ICsgMF07XG4gICAgZHN0WyA5XSA9IHN6ICogbVsyICogNCArIDFdO1xuICAgIGRzdFsxMF0gPSBzeiAqIG1bMiAqIDQgKyAyXTtcbiAgICBkc3RbMTFdID0gc3ogKiBtWzIgKiA0ICsgM107XG5cbiAgICBpZiAobSAhPT0gZHN0KSB7XG4gICAgICBkc3RbMTJdID0gbVsxMl07XG4gICAgICBkc3RbMTNdID0gbVsxM107XG4gICAgICBkc3RbMTRdID0gbVsxNF07XG4gICAgICBkc3RbMTVdID0gbVsxNV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBjcmVhdGVzIGEgbWF0cml4IGZyb20gdHJhbnNsYXRpb24sIHF1YXRlcm5pb24sIHNjYWxlXG4gICAqIEBwYXJhbSB7TnVtYmVyW119IHRyYW5zbGF0aW9uIFt4LCB5LCB6XSB0cmFuc2xhdGlvblxuICAgKiBAcGFyYW0ge051bWJlcltdfSBxdWF0ZXJuaW9uIFt4LCB5LCB6LCB6XSBxdWF0ZXJuaW9uIHJvdGF0aW9uXG4gICAqIEBwYXJhbSB7TnVtYmVyW119IHNjYWxlIFt4LCB5LCB6XSBzY2FsZVxuICAgKiBAcGFyYW0ge01hdHJpeDR9IFtkc3RdIG9wdGlvbmFsIG1hdHJpeCB0byBzdG9yZSByZXN1bHRcbiAgICogQHJldHVybiB7TWF0cml4NH0gZHN0IG9yIGEgbmV3IG1hdHJpeCBpZiBub25lIHByb3ZpZGVkXG4gICAqL1xuICBmdW5jdGlvbiBjb21wb3NlKHRyYW5zbGF0aW9uLCBxdWF0ZXJuaW9uLCBzY2FsZSwgZHN0KSB7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuXG4gICAgY29uc3QgeCA9IHF1YXRlcm5pb25bMF07XG4gICAgY29uc3QgeSA9IHF1YXRlcm5pb25bMV07XG4gICAgY29uc3QgeiA9IHF1YXRlcm5pb25bMl07XG4gICAgY29uc3QgdyA9IHF1YXRlcm5pb25bM107XG5cbiAgICBjb25zdCB4MiA9IHggKyB4O1xuICAgIGNvbnN0IHkyID0geSArIHk7XG4gICAgY29uc3QgejIgPSB6ICsgejtcblxuICAgIGNvbnN0IHh4ID0geCAqIHgyO1xuICAgIGNvbnN0IHh5ID0geCAqIHkyO1xuICAgIGNvbnN0IHh6ID0geCAqIHoyO1xuXG4gICAgY29uc3QgeXkgPSB5ICogeTI7XG4gICAgY29uc3QgeXogPSB5ICogejI7XG4gICAgY29uc3QgenogPSB6ICogejI7XG5cbiAgICBjb25zdCB3eCA9IHcgKiB4MjtcbiAgICBjb25zdCB3eSA9IHcgKiB5MjtcbiAgICBjb25zdCB3eiA9IHcgKiB6MjtcblxuICAgIGNvbnN0IHN4ID0gc2NhbGVbMF07XG4gICAgY29uc3Qgc3kgPSBzY2FsZVsxXTtcbiAgICBjb25zdCBzeiA9IHNjYWxlWzJdO1xuXG4gICAgZHN0WzBdID0gKDEgLSAoeXkgKyB6eikpICogc3g7XG4gICAgZHN0WzFdID0gKHh5ICsgd3opICogc3g7XG4gICAgZHN0WzJdID0gKHh6IC0gd3kpICogc3g7XG4gICAgZHN0WzNdID0gMDtcblxuICAgIGRzdFs0XSA9ICh4eSAtIHd6KSAqIHN5O1xuICAgIGRzdFs1XSA9ICgxIC0gKHh4ICsgenopKSAqIHN5O1xuICAgIGRzdFs2XSA9ICh5eiArIHd4KSAqIHN5O1xuICAgIGRzdFs3XSA9IDA7XG5cbiAgICBkc3RbIDhdID0gKHh6ICsgd3kpICogc3o7XG4gICAgZHN0WyA5XSA9ICh5eiAtIHd4KSAqIHN6O1xuICAgIGRzdFsxMF0gPSAoMSAtICh4eCArIHl5KSkgKiBzejtcbiAgICBkc3RbMTFdID0gMDtcblxuICAgIGRzdFsxMl0gPSB0cmFuc2xhdGlvblswXTtcbiAgICBkc3RbMTNdID0gdHJhbnNsYXRpb25bMV07XG4gICAgZHN0WzE0XSA9IHRyYW5zbGF0aW9uWzJdO1xuICAgIGRzdFsxNV0gPSAxO1xuXG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHF1YXRGcm9tUm90YXRpb25NYXRyaXgobSwgZHN0KSB7XG4gICAgLy8gaHR0cDovL3d3dy5ldWNsaWRlYW5zcGFjZS5jb20vbWF0aHMvZ2VvbWV0cnkvcm90YXRpb25zL2NvbnZlcnNpb25zL21hdHJpeFRvUXVhdGVybmlvbi9pbmRleC5odG1cblxuICAgIC8vIGFzc3VtZXMgdGhlIHVwcGVyIDN4MyBvZiBtIGlzIGEgcHVyZSByb3RhdGlvbiBtYXRyaXggKGkuZSwgdW5zY2FsZWQpXG4gICAgY29uc3QgbTExID0gbVswXTtcbiAgICBjb25zdCBtMTIgPSBtWzRdO1xuICAgIGNvbnN0IG0xMyA9IG1bOF07XG4gICAgY29uc3QgbTIxID0gbVsxXTtcbiAgICBjb25zdCBtMjIgPSBtWzVdO1xuICAgIGNvbnN0IG0yMyA9IG1bOV07XG4gICAgY29uc3QgbTMxID0gbVsyXTtcbiAgICBjb25zdCBtMzIgPSBtWzZdO1xuICAgIGNvbnN0IG0zMyA9IG1bMTBdO1xuXG4gICAgY29uc3QgdHJhY2UgPSBtMTEgKyBtMjIgKyBtMzM7XG5cbiAgICBpZiAodHJhY2UgPiAwKSB7XG4gICAgICBjb25zdCBzID0gMC41IC8gTWF0aC5zcXJ0KHRyYWNlICsgMSk7XG4gICAgICBkc3RbM10gPSAwLjI1IC8gcztcbiAgICAgIGRzdFswXSA9IChtMzIgLSBtMjMpICogcztcbiAgICAgIGRzdFsxXSA9IChtMTMgLSBtMzEpICogcztcbiAgICAgIGRzdFsyXSA9IChtMjEgLSBtMTIpICogcztcbiAgICB9IGVsc2UgaWYgKG0xMSA+IG0yMiAmJiBtMTEgPiBtMzMpIHtcbiAgICAgIGNvbnN0IHMgPSAyICogTWF0aC5zcXJ0KDEgKyBtMTEgLSBtMjIgLSBtMzMpO1xuICAgICAgZHN0WzNdID0gKG0zMiAtIG0yMykgLyBzO1xuICAgICAgZHN0WzBdID0gMC4yNSAqIHM7XG4gICAgICBkc3RbMV0gPSAobTEyICsgbTIxKSAvIHM7XG4gICAgICBkc3RbMl0gPSAobTEzICsgbTMxKSAvIHM7XG4gICAgfSBlbHNlIGlmIChtMjIgPiBtMzMpIHtcbiAgICAgIGNvbnN0IHMgPSAyICogTWF0aC5zcXJ0KDEgKyBtMjIgLSBtMTEgLSBtMzMpO1xuICAgICAgZHN0WzNdID0gKG0xMyAtIG0zMSkgLyBzO1xuICAgICAgZHN0WzBdID0gKG0xMiArIG0yMSkgLyBzO1xuICAgICAgZHN0WzFdID0gMC4yNSAqIHM7XG4gICAgICBkc3RbMl0gPSAobTIzICsgbTMyKSAvIHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHMgPSAyICogTWF0aC5zcXJ0KDEgKyBtMzMgLSBtMTEgLSBtMjIpO1xuICAgICAgZHN0WzNdID0gKG0yMSAtIG0xMikgLyBzO1xuICAgICAgZHN0WzBdID0gKG0xMyArIG0zMSkgLyBzO1xuICAgICAgZHN0WzFdID0gKG0yMyArIG0zMikgLyBzO1xuICAgICAgZHN0WzJdID0gMC4yNSAqIHM7XG4gICAgfVxuICB9XG4gIFxuICBmdW5jdGlvbiBkZWNvbXBvc2UobWF0LCB0cmFuc2xhdGlvbiwgcXVhdGVybmlvbiwgc2NhbGUpIHtcbiAgICBsZXQgc3ggPSBsZW5ndGgobWF0LnNsaWNlKDAsIDMpKTtcbiAgICBjb25zdCBzeSA9IGxlbmd0aChtYXQuc2xpY2UoNCwgNykpO1xuICAgIGNvbnN0IHN6ID0gbGVuZ3RoKG1hdC5zbGljZSg4LCAxMSkpO1xuXG4gICAgLy8gaWYgZGVtYXRybWluZSBpcyBuZWdhdGl2ZSwgd2UgbmVlZCB0byBpbnZlcnQgb25lIHNjYWxlXG4gICAgY29uc3QgZGV0ID0gZGV0ZXJtaW5hdGUobWF0KTtcbiAgICBpZiAoZGV0IDwgMCkge1xuICAgICAgc3ggPSAtc3g7XG4gICAgfVxuXG4gICAgdHJhbnNsYXRpb25bMF0gPSBtYXRbMTJdO1xuICAgIHRyYW5zbGF0aW9uWzFdID0gbWF0WzEzXTtcbiAgICB0cmFuc2xhdGlvblsyXSA9IG1hdFsxNF07XG5cbiAgICAvLyBzY2FsZSB0aGUgcm90YXRpb24gcGFydFxuICAgIGNvbnN0IG1hdHJpeCA9IGNvcHkobWF0KTtcblxuICAgIGNvbnN0IGludlNYID0gMSAvIHN4O1xuICAgIGNvbnN0IGludlNZID0gMSAvIHN5O1xuICAgIGNvbnN0IGludlNaID0gMSAvIHN6O1xuXG4gICAgbWF0cml4WzBdICo9IGludlNYO1xuICAgIG1hdHJpeFsxXSAqPSBpbnZTWDtcbiAgICBtYXRyaXhbMl0gKj0gaW52U1g7XG5cbiAgICBtYXRyaXhbNF0gKj0gaW52U1k7XG4gICAgbWF0cml4WzVdICo9IGludlNZO1xuICAgIG1hdHJpeFs2XSAqPSBpbnZTWTtcblxuICAgIG1hdHJpeFs4XSAqPSBpbnZTWjtcbiAgICBtYXRyaXhbOV0gKj0gaW52U1o7XG4gICAgbWF0cml4WzEwXSAqPSBpbnZTWjtcblxuICAgIHF1YXRGcm9tUm90YXRpb25NYXRyaXgobWF0cml4LCBxdWF0ZXJuaW9uKTtcblxuICAgIHNjYWxlWzBdID0gc3g7XG4gICAgc2NhbGVbMV0gPSBzeTtcbiAgICBzY2FsZVsyXSA9IHN6O1xuICB9XG5cbiAgZnVuY3Rpb24gZGV0ZXJtaW5hdGUobSkge1xuICAgIHZhciBtMDAgPSBtWzAgKiA0ICsgMF07XG4gICAgdmFyIG0wMSA9IG1bMCAqIDQgKyAxXTtcbiAgICB2YXIgbTAyID0gbVswICogNCArIDJdO1xuICAgIHZhciBtMDMgPSBtWzAgKiA0ICsgM107XG4gICAgdmFyIG0xMCA9IG1bMSAqIDQgKyAwXTtcbiAgICB2YXIgbTExID0gbVsxICogNCArIDFdO1xuICAgIHZhciBtMTIgPSBtWzEgKiA0ICsgMl07XG4gICAgdmFyIG0xMyA9IG1bMSAqIDQgKyAzXTtcbiAgICB2YXIgbTIwID0gbVsyICogNCArIDBdO1xuICAgIHZhciBtMjEgPSBtWzIgKiA0ICsgMV07XG4gICAgdmFyIG0yMiA9IG1bMiAqIDQgKyAyXTtcbiAgICB2YXIgbTIzID0gbVsyICogNCArIDNdO1xuICAgIHZhciBtMzAgPSBtWzMgKiA0ICsgMF07XG4gICAgdmFyIG0zMSA9IG1bMyAqIDQgKyAxXTtcbiAgICB2YXIgbTMyID0gbVszICogNCArIDJdO1xuICAgIHZhciBtMzMgPSBtWzMgKiA0ICsgM107XG4gICAgdmFyIHRtcF8wICA9IG0yMiAqIG0zMztcbiAgICB2YXIgdG1wXzEgID0gbTMyICogbTIzO1xuICAgIHZhciB0bXBfMiAgPSBtMTIgKiBtMzM7XG4gICAgdmFyIHRtcF8zICA9IG0zMiAqIG0xMztcbiAgICB2YXIgdG1wXzQgID0gbTEyICogbTIzO1xuICAgIHZhciB0bXBfNSAgPSBtMjIgKiBtMTM7XG4gICAgdmFyIHRtcF82ICA9IG0wMiAqIG0zMztcbiAgICB2YXIgdG1wXzcgID0gbTMyICogbTAzO1xuICAgIHZhciB0bXBfOCAgPSBtMDIgKiBtMjM7XG4gICAgdmFyIHRtcF85ICA9IG0yMiAqIG0wMztcbiAgICB2YXIgdG1wXzEwID0gbTAyICogbTEzO1xuICAgIHZhciB0bXBfMTEgPSBtMTIgKiBtMDM7XG4gICAgdmFyIHRtcF8xMiA9IG0yMCAqIG0zMTtcbiAgICB2YXIgdG1wXzEzID0gbTMwICogbTIxO1xuICAgIHZhciB0bXBfMTQgPSBtMTAgKiBtMzE7XG4gICAgdmFyIHRtcF8xNSA9IG0zMCAqIG0xMTtcbiAgICB2YXIgdG1wXzE2ID0gbTEwICogbTIxO1xuICAgIHZhciB0bXBfMTcgPSBtMjAgKiBtMTE7XG4gICAgdmFyIHRtcF8xOCA9IG0wMCAqIG0zMTtcbiAgICB2YXIgdG1wXzE5ID0gbTMwICogbTAxO1xuICAgIHZhciB0bXBfMjAgPSBtMDAgKiBtMjE7XG4gICAgdmFyIHRtcF8yMSA9IG0yMCAqIG0wMTtcbiAgICB2YXIgdG1wXzIyID0gbTAwICogbTExO1xuICAgIHZhciB0bXBfMjMgPSBtMTAgKiBtMDE7XG5cbiAgICB2YXIgdDAgPSAodG1wXzAgKiBtMTEgKyB0bXBfMyAqIG0yMSArIHRtcF80ICogbTMxKSAtXG4gICAgICAgICh0bXBfMSAqIG0xMSArIHRtcF8yICogbTIxICsgdG1wXzUgKiBtMzEpO1xuICAgIHZhciB0MSA9ICh0bXBfMSAqIG0wMSArIHRtcF82ICogbTIxICsgdG1wXzkgKiBtMzEpIC1cbiAgICAgICAgKHRtcF8wICogbTAxICsgdG1wXzcgKiBtMjEgKyB0bXBfOCAqIG0zMSk7XG4gICAgdmFyIHQyID0gKHRtcF8yICogbTAxICsgdG1wXzcgKiBtMTEgKyB0bXBfMTAgKiBtMzEpIC1cbiAgICAgICAgKHRtcF8zICogbTAxICsgdG1wXzYgKiBtMTEgKyB0bXBfMTEgKiBtMzEpO1xuICAgIHZhciB0MyA9ICh0bXBfNSAqIG0wMSArIHRtcF84ICogbTExICsgdG1wXzExICogbTIxKSAtXG4gICAgICAgICh0bXBfNCAqIG0wMSArIHRtcF85ICogbTExICsgdG1wXzEwICogbTIxKTtcblxuICAgIHJldHVybiAxLjAgLyAobTAwICogdDAgKyBtMTAgKiB0MSArIG0yMCAqIHQyICsgbTMwICogdDMpOyAgICBcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wdXRlcyB0aGUgaW52ZXJzZSBvZiBhIG1hdHJpeC5cbiAgICogQHBhcmFtIHtNYXRyaXg0fSBtIG1hdHJpeCB0byBjb21wdXRlIGludmVyc2Ugb2ZcbiAgICogQHBhcmFtIHtNYXRyaXg0fSBbZHN0XSBvcHRpb25hbCBtYXRyaXggdG8gc3RvcmUgcmVzdWx0XG4gICAqIEByZXR1cm4ge01hdHJpeDR9IGRzdCBvciBhIG5ldyBtYXRyaXggaWYgbm9uZSBwcm92aWRlZFxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG4gIGZ1bmN0aW9uIGludmVyc2UobSwgZHN0KSB7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuICAgIHZhciBtMDAgPSBtWzAgKiA0ICsgMF07XG4gICAgdmFyIG0wMSA9IG1bMCAqIDQgKyAxXTtcbiAgICB2YXIgbTAyID0gbVswICogNCArIDJdO1xuICAgIHZhciBtMDMgPSBtWzAgKiA0ICsgM107XG4gICAgdmFyIG0xMCA9IG1bMSAqIDQgKyAwXTtcbiAgICB2YXIgbTExID0gbVsxICogNCArIDFdO1xuICAgIHZhciBtMTIgPSBtWzEgKiA0ICsgMl07XG4gICAgdmFyIG0xMyA9IG1bMSAqIDQgKyAzXTtcbiAgICB2YXIgbTIwID0gbVsyICogNCArIDBdO1xuICAgIHZhciBtMjEgPSBtWzIgKiA0ICsgMV07XG4gICAgdmFyIG0yMiA9IG1bMiAqIDQgKyAyXTtcbiAgICB2YXIgbTIzID0gbVsyICogNCArIDNdO1xuICAgIHZhciBtMzAgPSBtWzMgKiA0ICsgMF07XG4gICAgdmFyIG0zMSA9IG1bMyAqIDQgKyAxXTtcbiAgICB2YXIgbTMyID0gbVszICogNCArIDJdO1xuICAgIHZhciBtMzMgPSBtWzMgKiA0ICsgM107XG4gICAgdmFyIHRtcF8wICA9IG0yMiAqIG0zMztcbiAgICB2YXIgdG1wXzEgID0gbTMyICogbTIzO1xuICAgIHZhciB0bXBfMiAgPSBtMTIgKiBtMzM7XG4gICAgdmFyIHRtcF8zICA9IG0zMiAqIG0xMztcbiAgICB2YXIgdG1wXzQgID0gbTEyICogbTIzO1xuICAgIHZhciB0bXBfNSAgPSBtMjIgKiBtMTM7XG4gICAgdmFyIHRtcF82ICA9IG0wMiAqIG0zMztcbiAgICB2YXIgdG1wXzcgID0gbTMyICogbTAzO1xuICAgIHZhciB0bXBfOCAgPSBtMDIgKiBtMjM7XG4gICAgdmFyIHRtcF85ICA9IG0yMiAqIG0wMztcbiAgICB2YXIgdG1wXzEwID0gbTAyICogbTEzO1xuICAgIHZhciB0bXBfMTEgPSBtMTIgKiBtMDM7XG4gICAgdmFyIHRtcF8xMiA9IG0yMCAqIG0zMTtcbiAgICB2YXIgdG1wXzEzID0gbTMwICogbTIxO1xuICAgIHZhciB0bXBfMTQgPSBtMTAgKiBtMzE7XG4gICAgdmFyIHRtcF8xNSA9IG0zMCAqIG0xMTtcbiAgICB2YXIgdG1wXzE2ID0gbTEwICogbTIxO1xuICAgIHZhciB0bXBfMTcgPSBtMjAgKiBtMTE7XG4gICAgdmFyIHRtcF8xOCA9IG0wMCAqIG0zMTtcbiAgICB2YXIgdG1wXzE5ID0gbTMwICogbTAxO1xuICAgIHZhciB0bXBfMjAgPSBtMDAgKiBtMjE7XG4gICAgdmFyIHRtcF8yMSA9IG0yMCAqIG0wMTtcbiAgICB2YXIgdG1wXzIyID0gbTAwICogbTExO1xuICAgIHZhciB0bXBfMjMgPSBtMTAgKiBtMDE7XG5cbiAgICB2YXIgdDAgPSAodG1wXzAgKiBtMTEgKyB0bXBfMyAqIG0yMSArIHRtcF80ICogbTMxKSAtXG4gICAgICAgICh0bXBfMSAqIG0xMSArIHRtcF8yICogbTIxICsgdG1wXzUgKiBtMzEpO1xuICAgIHZhciB0MSA9ICh0bXBfMSAqIG0wMSArIHRtcF82ICogbTIxICsgdG1wXzkgKiBtMzEpIC1cbiAgICAgICAgKHRtcF8wICogbTAxICsgdG1wXzcgKiBtMjEgKyB0bXBfOCAqIG0zMSk7XG4gICAgdmFyIHQyID0gKHRtcF8yICogbTAxICsgdG1wXzcgKiBtMTEgKyB0bXBfMTAgKiBtMzEpIC1cbiAgICAgICAgKHRtcF8zICogbTAxICsgdG1wXzYgKiBtMTEgKyB0bXBfMTEgKiBtMzEpO1xuICAgIHZhciB0MyA9ICh0bXBfNSAqIG0wMSArIHRtcF84ICogbTExICsgdG1wXzExICogbTIxKSAtXG4gICAgICAgICh0bXBfNCAqIG0wMSArIHRtcF85ICogbTExICsgdG1wXzEwICogbTIxKTtcblxuICAgIHZhciBkID0gMS4wIC8gKG0wMCAqIHQwICsgbTEwICogdDEgKyBtMjAgKiB0MiArIG0zMCAqIHQzKTtcblxuICAgIGRzdFswXSA9IGQgKiB0MDtcbiAgICBkc3RbMV0gPSBkICogdDE7XG4gICAgZHN0WzJdID0gZCAqIHQyO1xuICAgIGRzdFszXSA9IGQgKiB0MztcbiAgICBkc3RbNF0gPSBkICogKCh0bXBfMSAqIG0xMCArIHRtcF8yICogbTIwICsgdG1wXzUgKiBtMzApIC1cbiAgICAgICAgICAodG1wXzAgKiBtMTAgKyB0bXBfMyAqIG0yMCArIHRtcF80ICogbTMwKSk7XG4gICAgZHN0WzVdID0gZCAqICgodG1wXzAgKiBtMDAgKyB0bXBfNyAqIG0yMCArIHRtcF84ICogbTMwKSAtXG4gICAgICAgICAgKHRtcF8xICogbTAwICsgdG1wXzYgKiBtMjAgKyB0bXBfOSAqIG0zMCkpO1xuICAgIGRzdFs2XSA9IGQgKiAoKHRtcF8zICogbTAwICsgdG1wXzYgKiBtMTAgKyB0bXBfMTEgKiBtMzApIC1cbiAgICAgICAgICAodG1wXzIgKiBtMDAgKyB0bXBfNyAqIG0xMCArIHRtcF8xMCAqIG0zMCkpO1xuICAgIGRzdFs3XSA9IGQgKiAoKHRtcF80ICogbTAwICsgdG1wXzkgKiBtMTAgKyB0bXBfMTAgKiBtMjApIC1cbiAgICAgICAgICAodG1wXzUgKiBtMDAgKyB0bXBfOCAqIG0xMCArIHRtcF8xMSAqIG0yMCkpO1xuICAgIGRzdFs4XSA9IGQgKiAoKHRtcF8xMiAqIG0xMyArIHRtcF8xNSAqIG0yMyArIHRtcF8xNiAqIG0zMykgLVxuICAgICAgICAgICh0bXBfMTMgKiBtMTMgKyB0bXBfMTQgKiBtMjMgKyB0bXBfMTcgKiBtMzMpKTtcbiAgICBkc3RbOV0gPSBkICogKCh0bXBfMTMgKiBtMDMgKyB0bXBfMTggKiBtMjMgKyB0bXBfMjEgKiBtMzMpIC1cbiAgICAgICAgICAodG1wXzEyICogbTAzICsgdG1wXzE5ICogbTIzICsgdG1wXzIwICogbTMzKSk7XG4gICAgZHN0WzEwXSA9IGQgKiAoKHRtcF8xNCAqIG0wMyArIHRtcF8xOSAqIG0xMyArIHRtcF8yMiAqIG0zMykgLVxuICAgICAgICAgICh0bXBfMTUgKiBtMDMgKyB0bXBfMTggKiBtMTMgKyB0bXBfMjMgKiBtMzMpKTtcbiAgICBkc3RbMTFdID0gZCAqICgodG1wXzE3ICogbTAzICsgdG1wXzIwICogbTEzICsgdG1wXzIzICogbTIzKSAtXG4gICAgICAgICAgKHRtcF8xNiAqIG0wMyArIHRtcF8yMSAqIG0xMyArIHRtcF8yMiAqIG0yMykpO1xuICAgIGRzdFsxMl0gPSBkICogKCh0bXBfMTQgKiBtMjIgKyB0bXBfMTcgKiBtMzIgKyB0bXBfMTMgKiBtMTIpIC1cbiAgICAgICAgICAodG1wXzE2ICogbTMyICsgdG1wXzEyICogbTEyICsgdG1wXzE1ICogbTIyKSk7XG4gICAgZHN0WzEzXSA9IGQgKiAoKHRtcF8yMCAqIG0zMiArIHRtcF8xMiAqIG0wMiArIHRtcF8xOSAqIG0yMikgLVxuICAgICAgICAgICh0bXBfMTggKiBtMjIgKyB0bXBfMjEgKiBtMzIgKyB0bXBfMTMgKiBtMDIpKTtcbiAgICBkc3RbMTRdID0gZCAqICgodG1wXzE4ICogbTEyICsgdG1wXzIzICogbTMyICsgdG1wXzE1ICogbTAyKSAtXG4gICAgICAgICAgKHRtcF8yMiAqIG0zMiArIHRtcF8xNCAqIG0wMiArIHRtcF8xOSAqIG0xMikpO1xuICAgIGRzdFsxNV0gPSBkICogKCh0bXBfMjIgKiBtMjIgKyB0bXBfMTYgKiBtMDIgKyB0bXBfMjEgKiBtMTIpIC1cbiAgICAgICAgICAodG1wXzIwICogbTEyICsgdG1wXzIzICogbTIyICsgdG1wXzE3ICogbTAyKSk7XG5cbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFRha2VzIGEgIG1hdHJpeCBhbmQgYSB2ZWN0b3Igd2l0aCA0IGVudHJpZXMsIHRyYW5zZm9ybXMgdGhhdCB2ZWN0b3IgYnlcbiAgICogdGhlIG1hdHJpeCwgYW5kIHJldHVybnMgdGhlIHJlc3VsdCBhcyBhIHZlY3RvciB3aXRoIDQgZW50cmllcy5cbiAgICogQHBhcmFtIHtNYXRyaXg0fSBtIFRoZSBtYXRyaXguXG4gICAqIEBwYXJhbSB7VmVjdG9yNH0gdiBUaGUgcG9pbnQgaW4gaG9tb2dlbm91cyBjb29yZGluYXRlcy5cbiAgICogQHBhcmFtIHtWZWN0b3I0fSBkc3Qgb3B0aW9uYWwgdmVjdG9yNCB0byBzdG9yZSByZXN1bHRcbiAgICogQHJldHVybiB7VmVjdG9yNH0gZHN0IG9yIG5ldyBWZWN0b3I0IGlmIG5vdCBwcm92aWRlZFxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG4gIGZ1bmN0aW9uIHRyYW5zZm9ybVZlY3RvcihtLCB2LCBkc3QpIHtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IEZsb2F0MzJBcnJheSg0KTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7ICsraSkge1xuICAgICAgZHN0W2ldID0gMC4wO1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCA0OyArK2opIHtcbiAgICAgICAgZHN0W2ldICs9IHZbal0gKiBtW2ogKiA0ICsgaV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuICAvKipcbiAgICogVGFrZXMgYSA0LWJ5LTQgbWF0cml4IGFuZCBhIHZlY3RvciB3aXRoIDMgZW50cmllcyxcbiAgICogaW50ZXJwcmV0cyB0aGUgdmVjdG9yIGFzIGEgcG9pbnQsIHRyYW5zZm9ybXMgdGhhdCBwb2ludCBieSB0aGUgbWF0cml4LCBhbmRcbiAgICogcmV0dXJucyB0aGUgcmVzdWx0IGFzIGEgdmVjdG9yIHdpdGggMyBlbnRyaWVzLlxuICAgKiBAcGFyYW0ge01hdHJpeDR9IG0gVGhlIG1hdHJpeC5cbiAgICogQHBhcmFtIHtWZWN0b3IzfSB2IFRoZSBwb2ludC5cbiAgICogQHBhcmFtIHtWZWN0b3I0fSBkc3Qgb3B0aW9uYWwgdmVjdG9yNCB0byBzdG9yZSByZXN1bHRcbiAgICogQHJldHVybiB7VmVjdG9yNH0gZHN0IG9yIG5ldyBWZWN0b3I0IGlmIG5vdCBwcm92aWRlZFxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG4gIGZ1bmN0aW9uIHRyYW5zZm9ybVBvaW50KG0sIHYsIGRzdCkge1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgRmxvYXQzMkFycmF5KDMpO1xuICAgIHZhciB2MCA9IHZbMF07XG4gICAgdmFyIHYxID0gdlsxXTtcbiAgICB2YXIgdjIgPSB2WzJdO1xuICAgIHZhciBkID0gdjAgKiBtWzAgKiA0ICsgM10gKyB2MSAqIG1bMSAqIDQgKyAzXSArIHYyICogbVsyICogNCArIDNdICsgbVszICogNCArIDNdO1xuXG4gICAgZHN0WzBdID0gKHYwICogbVswICogNCArIDBdICsgdjEgKiBtWzEgKiA0ICsgMF0gKyB2MiAqIG1bMiAqIDQgKyAwXSArIG1bMyAqIDQgKyAwXSkgLyBkO1xuICAgIGRzdFsxXSA9ICh2MCAqIG1bMCAqIDQgKyAxXSArIHYxICogbVsxICogNCArIDFdICsgdjIgKiBtWzIgKiA0ICsgMV0gKyBtWzMgKiA0ICsgMV0pIC8gZDtcbiAgICBkc3RbMl0gPSAodjAgKiBtWzAgKiA0ICsgMl0gKyB2MSAqIG1bMSAqIDQgKyAyXSArIHYyICogbVsyICogNCArIDJdICsgbVszICogNCArIDJdKSAvIGQ7XG5cbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFRha2VzIGEgNC1ieS00IG1hdHJpeCBhbmQgYSB2ZWN0b3Igd2l0aCAzIGVudHJpZXMsIGludGVycHJldHMgdGhlIHZlY3RvciBhcyBhXG4gICAqIGRpcmVjdGlvbiwgdHJhbnNmb3JtcyB0aGF0IGRpcmVjdGlvbiBieSB0aGUgbWF0cml4LCBhbmQgcmV0dXJucyB0aGUgcmVzdWx0O1xuICAgKiBhc3N1bWVzIHRoZSB0cmFuc2Zvcm1hdGlvbiBvZiAzLWRpbWVuc2lvbmFsIHNwYWNlIHJlcHJlc2VudGVkIGJ5IHRoZSBtYXRyaXhcbiAgICogaXMgcGFyYWxsZWwtcHJlc2VydmluZywgaS5lLiBhbnkgY29tYmluYXRpb24gb2Ygcm90YXRpb24sIHNjYWxpbmcgYW5kXG4gICAqIHRyYW5zbGF0aW9uLCBidXQgbm90IGEgcGVyc3BlY3RpdmUgZGlzdG9ydGlvbi4gUmV0dXJucyBhIHZlY3RvciB3aXRoIDNcbiAgICogZW50cmllcy5cbiAgICogQHBhcmFtIHtNYXRyaXg0fSBtIFRoZSBtYXRyaXguXG4gICAqIEBwYXJhbSB7VmVjdG9yM30gdiBUaGUgZGlyZWN0aW9uLlxuICAgKiBAcGFyYW0ge1ZlY3RvcjR9IGRzdCBvcHRpb25hbCB2ZWN0b3I0IHRvIHN0b3JlIHJlc3VsdFxuICAgKiBAcmV0dXJuIHtWZWN0b3I0fSBkc3Qgb3IgbmV3IFZlY3RvcjQgaWYgbm90IHByb3ZpZGVkXG4gICAqIEBtZW1iZXJPZiBtb2R1bGU6d2ViZ2wtM2QtbWF0aFxuICAgKi9cbiAgZnVuY3Rpb24gdHJhbnNmb3JtRGlyZWN0aW9uKG0sIHYsIGRzdCkge1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgRmxvYXQzMkFycmF5KDMpO1xuXG4gICAgdmFyIHYwID0gdlswXTtcbiAgICB2YXIgdjEgPSB2WzFdO1xuICAgIHZhciB2MiA9IHZbMl07XG5cbiAgICBkc3RbMF0gPSB2MCAqIG1bMCAqIDQgKyAwXSArIHYxICogbVsxICogNCArIDBdICsgdjIgKiBtWzIgKiA0ICsgMF07XG4gICAgZHN0WzFdID0gdjAgKiBtWzAgKiA0ICsgMV0gKyB2MSAqIG1bMSAqIDQgKyAxXSArIHYyICogbVsyICogNCArIDFdO1xuICAgIGRzdFsyXSA9IHYwICogbVswICogNCArIDJdICsgdjEgKiBtWzEgKiA0ICsgMl0gKyB2MiAqIG1bMiAqIDQgKyAyXTtcblxuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuICAvKipcbiAgICogVGFrZXMgYSA0LWJ5LTQgbWF0cml4IG0gYW5kIGEgdmVjdG9yIHYgd2l0aCAzIGVudHJpZXMsIGludGVycHJldHMgdGhlIHZlY3RvclxuICAgKiBhcyBhIG5vcm1hbCB0byBhIHN1cmZhY2UsIGFuZCBjb21wdXRlcyBhIHZlY3RvciB3aGljaCBpcyBub3JtYWwgdXBvblxuICAgKiB0cmFuc2Zvcm1pbmcgdGhhdCBzdXJmYWNlIGJ5IHRoZSBtYXRyaXguIFRoZSBlZmZlY3Qgb2YgdGhpcyBmdW5jdGlvbiBpcyB0aGVcbiAgICogc2FtZSBhcyB0cmFuc2Zvcm1pbmcgdiAoYXMgYSBkaXJlY3Rpb24pIGJ5IHRoZSBpbnZlcnNlLXRyYW5zcG9zZSBvZiBtLiAgVGhpc1xuICAgKiBmdW5jdGlvbiBhc3N1bWVzIHRoZSB0cmFuc2Zvcm1hdGlvbiBvZiAzLWRpbWVuc2lvbmFsIHNwYWNlIHJlcHJlc2VudGVkIGJ5IHRoZVxuICAgKiBtYXRyaXggaXMgcGFyYWxsZWwtcHJlc2VydmluZywgaS5lLiBhbnkgY29tYmluYXRpb24gb2Ygcm90YXRpb24sIHNjYWxpbmcgYW5kXG4gICAqIHRyYW5zbGF0aW9uLCBidXQgbm90IGEgcGVyc3BlY3RpdmUgZGlzdG9ydGlvbi4gIFJldHVybnMgYSB2ZWN0b3Igd2l0aCAzXG4gICAqIGVudHJpZXMuXG4gICAqIEBwYXJhbSB7TWF0cml4NH0gbSBUaGUgbWF0cml4LlxuICAgKiBAcGFyYW0ge1ZlY3RvcjN9IHYgVGhlIG5vcm1hbC5cbiAgICogQHBhcmFtIHtWZWN0b3IzfSBbZHN0XSBUaGUgZGlyZWN0aW9uLlxuICAgKiBAcmV0dXJuIHtWZWN0b3IzfSBUaGUgdHJhbnNmb3JtZWQgZGlyZWN0aW9uLlxuICAgKiBAbWVtYmVyT2YgbW9kdWxlOndlYmdsLTNkLW1hdGhcbiAgICovXG4gIGZ1bmN0aW9uIHRyYW5zZm9ybU5vcm1hbChtLCB2LCBkc3QpIHtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IEZsb2F0MzJBcnJheSgzKTtcbiAgICB2YXIgbWkgPSBpbnZlcnNlKG0pO1xuICAgIHZhciB2MCA9IHZbMF07XG4gICAgdmFyIHYxID0gdlsxXTtcbiAgICB2YXIgdjIgPSB2WzJdO1xuXG4gICAgZHN0WzBdID0gdjAgKiBtaVswICogNCArIDBdICsgdjEgKiBtaVswICogNCArIDFdICsgdjIgKiBtaVswICogNCArIDJdO1xuICAgIGRzdFsxXSA9IHYwICogbWlbMSAqIDQgKyAwXSArIHYxICogbWlbMSAqIDQgKyAxXSArIHYyICogbWlbMSAqIDQgKyAyXTtcbiAgICBkc3RbMl0gPSB2MCAqIG1pWzIgKiA0ICsgMF0gKyB2MSAqIG1pWzIgKiA0ICsgMV0gKyB2MiAqIG1pWzIgKiA0ICsgMl07XG5cbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgZnVuY3Rpb24gY29weShzcmMsIGRzdCkge1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgRmxvYXQzMkFycmF5KDE2KTtcblxuICAgIGRzdFsgMF0gPSBzcmNbIDBdO1xuICAgIGRzdFsgMV0gPSBzcmNbIDFdO1xuICAgIGRzdFsgMl0gPSBzcmNbIDJdO1xuICAgIGRzdFsgM10gPSBzcmNbIDNdO1xuICAgIGRzdFsgNF0gPSBzcmNbIDRdO1xuICAgIGRzdFsgNV0gPSBzcmNbIDVdO1xuICAgIGRzdFsgNl0gPSBzcmNbIDZdO1xuICAgIGRzdFsgN10gPSBzcmNbIDddO1xuICAgIGRzdFsgOF0gPSBzcmNbIDhdO1xuICAgIGRzdFsgOV0gPSBzcmNbIDldO1xuICAgIGRzdFsxMF0gPSBzcmNbMTBdO1xuICAgIGRzdFsxMV0gPSBzcmNbMTFdO1xuICAgIGRzdFsxMl0gPSBzcmNbMTJdO1xuICAgIGRzdFsxM10gPSBzcmNbMTNdO1xuICAgIGRzdFsxNF0gPSBzcmNbMTRdO1xuICAgIGRzdFsxNV0gPSBzcmNbMTVdO1xuXG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY29weTogY29weSxcbiAgICBsb29rQXQ6IGxvb2tBdCxcbiAgICBhZGRWZWN0b3JzOiBhZGRWZWN0b3JzLFxuICAgIHN1YnRyYWN0VmVjdG9yczogc3VidHJhY3RWZWN0b3JzLFxuICAgIGRpc3RhbmNlOiBkaXN0YW5jZSxcbiAgICBkaXN0YW5jZVNxOiBkaXN0YW5jZVNxLFxuICAgIG5vcm1hbGl6ZTogbm9ybWFsaXplLFxuICAgIGNvbXBvc2U6IGNvbXBvc2UsXG4gICAgY3Jvc3M6IGNyb3NzLFxuICAgIGRlY29tcG9zZTogZGVjb21wb3NlLFxuICAgIGRvdDogZG90LFxuICAgIGlkZW50aXR5OiBpZGVudGl0eSxcbiAgICB0cmFuc3Bvc2U6IHRyYW5zcG9zZSxcbiAgICBsZW5ndGg6IGxlbmd0aCxcbiAgICBvcnRob2dyYXBoaWM6IG9ydGhvZ3JhcGhpYyxcbiAgICBmcnVzdHVtOiBmcnVzdHVtLFxuICAgIHBlcnNwZWN0aXZlOiBwZXJzcGVjdGl2ZSxcbiAgICB0cmFuc2xhdGlvbjogdHJhbnNsYXRpb24sXG4gICAgdHJhbnNsYXRlOiB0cmFuc2xhdGUsXG4gICAgeFJvdGF0aW9uOiB4Um90YXRpb24sXG4gICAgeVJvdGF0aW9uOiB5Um90YXRpb24sXG4gICAgelJvdGF0aW9uOiB6Um90YXRpb24sXG4gICAgeFJvdGF0ZTogeFJvdGF0ZSxcbiAgICB5Um90YXRlOiB5Um90YXRlLFxuICAgIHpSb3RhdGU6IHpSb3RhdGUsXG4gICAgYXhpc1JvdGF0aW9uOiBheGlzUm90YXRpb24sXG4gICAgYXhpc1JvdGF0ZTogYXhpc1JvdGF0ZSxcbiAgICBzY2FsaW5nOiBzY2FsaW5nLFxuICAgIHNjYWxlOiBzY2FsZSxcbiAgICBtdWx0aXBseTogbXVsdGlwbHksXG4gICAgaW52ZXJzZTogaW52ZXJzZSxcbiAgICB0cmFuc2Zvcm1WZWN0b3I6IHRyYW5zZm9ybVZlY3RvcixcbiAgICB0cmFuc2Zvcm1Qb2ludDogdHJhbnNmb3JtUG9pbnQsXG4gICAgdHJhbnNmb3JtRGlyZWN0aW9uOiB0cmFuc2Zvcm1EaXJlY3Rpb24sXG4gICAgdHJhbnNmb3JtTm9ybWFsOiB0cmFuc2Zvcm1Ob3JtYWwsXG4gIH07XG5cbn0pKTtcblxuIiwiLyoqXG4gKiBQcmltaXRpdmUgc3BoZXJlLCB0aGUgdmVydGljZXMgaW4gdGhlIGxpc3Qgb2YgXG4gKiBjb29yZGluYXRlcyB0aGF0IGlzIHJlcHJlc2VudGVkIGJ5IHRoZSBhcnJheSBjb250YWlucyAzIG51bWJlcnMgKHgseSx6KS5cbiAqIFxuICogQHBhcmFtIHtudW1iZXJ9IHJhZGl1cyBcbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1WZXJ0aWNhbFNlZ21lbnRzIHRoZSBudW1iZXIgb2YgdGhlIHZlcnRpY2FsIHNlZ21lbnRzLiBMaWtlIEVhcnRoJ3MgbWVyaWRpYW5zLHRoZSBsaW5lIGdvaW5nIHBvbGUgdG8gcG9sZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1Ib3Jpem9uYWxTZWdlbWVudHMgdGhlIG51bWJlciBvZiB0aGUgaG9yaXpvbmFsIHNlZ21lbnRzLiBMaWtlIEVhcnRoJ3MgcGFyYWxsZWxzLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydExhdGl0dWRlSW5SYWRpYW5zPTBdICBcbiAqIEBwYXJhbSB7bnVtYmVyfSBbZW5kTGF0aXR1ZGVJblJhZGlhbnM9TWF0aC5QSV0gIFxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydExvbmdpdHVkZUluUmFkaWFucz0wXSAgXG4gKiBAcGFyYW0ge251bWJlcn0gW2VuZExvbmdpdHVkZUluUmFkaWFucz0yKk1hdGguUEldICBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNwaGVyZVZlcnRpY2VzKFxuICByYWRpdXMsIG51bVZlcnRpY2FsU2VnbWVudHMsIG51bUhvcml6b25hbFNlZ2VtZW50cywgXG4gIHN0YXJ0TGF0aXR1ZGVJblJhZGlhbnMgPSAwLCBlbmRMYXRpdHVkZUluUmFkaWFucyA9IE1hdGguUEksIFxuICBzdGFydExvbmdpdHVkZUluUmFkaWFucyA9IDAsIGVuZExvbmdpdHVkZUluUmFkaWFucyA9IDIgKiBNYXRoLlBJKSB7XG5cbiAgY29uc3QgbGF0aXR1ZGVSYW5nZSA9IGVuZExhdGl0dWRlSW5SYWRpYW5zIC0gc3RhcnRMYXRpdHVkZUluUmFkaWFucztcbiAgY29uc3QgbG9uZ2l0dWRlUmFuZ2UgPSBlbmRMb25naXR1ZGVJblJhZGlhbnMgLSBzdGFydExvbmdpdHVkZUluUmFkaWFucztcbiAgXG4gIC8vIGFkZCBvbmUgYmVjYXVzZSB0aGUgZW5kIGxpbmUgc2hvdWxkIGJlIHR3byBsaW5lcyBtZXJnZWRcbiAgY29uc3QgbnVtVmVydGljZXMgPSAobnVtVmVydGljYWxTZWdtZW50cyArIDEpICogKG51bUhvcml6b25hbFNlZ2VtZW50cyArIDEpOyBcbiAgXG4gIGxldCBwb3NpdGlvbnMgPSBbXSwgbm9ybWFscyA9IFtdLCB0ZXhDb29yZHMgPSBbXTtcblxuICBmb3IgKGxldCBqID0gMDsgaiA8IG51bUhvcml6b25hbFNlZ2VtZW50cysxOyBqKz0xKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1WZXJ0aWNhbFNlZ21lbnRzKzE7IGkrPTEpIHtcbiAgICAgIGNvbnN0IHUgPSBpIC8gbnVtVmVydGljYWxTZWdtZW50cztcbiAgICAgIGNvbnN0IHYgPSBqIC8gbnVtSG9yaXpvbmFsU2VnZW1lbnRzO1xuXG4gICAgICBjb25zdCB0aGV0YSA9IGxvbmdpdHVkZVJhbmdlICogdTsgXG4gICAgICBjb25zdCBwaGkgPSBsYXRpdHVkZVJhbmdlICogdjtcblxuICAgICAgY29uc3Qgc2luVGhldGEgPSBNYXRoLnNpbih0aGV0YSksIGNvc1RoZXRhID0gTWF0aC5jb3ModGhldGEpO1xuICAgICAgY29uc3Qgc2luUGhpID0gTWF0aC5zaW4ocGhpKSwgY29zdFBoaSA9IE1hdGguY29zKHBoaSk7XG5cbiAgICAgIGNvbnN0IHV4ID0gY29zVGhldGEgKiBzaW5QaGk7XG4gICAgICBjb25zdCB1eSA9IGNvc3RQaGk7XG4gICAgICBjb25zdCB1eiA9IHNpblRoZXRhICogc2luUGhpO1xuXG4gICAgICBwb3NpdGlvbnMucHVzaChbcmFkaXVzICogdXgsIHJhZGl1cyAqIHV5LCByYWRpdXMgKiB1el0pO1xuICAgICAgbm9ybWFscy5wdXNoKFt1eCwgdXksIHV6XSk7XG4gICAgICB0ZXhDb29yZHMucHVzaChbMSAtIHUsIHZdKTtcbiAgICB9XG4gIH1cblxuICAvLyBnZW5lcmF0ZSB0aGUgaW5kaWNlcyBvZiB0aGUgdHJpYW5nbGVzLlxuICBjb25zdCBudW1WZXJ0aWNhbFNlZ21lbnRWZXJ0aWNlcyA9IG51bVZlcnRpY2FsU2VnbWVudHMgKyAxO1xuICBsZXQgaW5kaWNlcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVZlcnRpY2FsU2VnbWVudHM7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbnVtSG9yaXpvbmFsU2VnZW1lbnRzOyBqICs9IDEpe1xuICAgICAgLy8gdHdvIHRyaWFuZ2xlcyBvZiBvbmUgZmFjZVxuICAgICAgLyogdHJpYW5nbGUgMSBcbiAgICAgICAgICAqMS0tLS0tKjJcbiAgICAgICAgICAgfCAgICAvXG4gICAgICAgICAgIHwgIC8gIFxuICAgICAgICAgICozICBcbiAgICAgICovXG4gICAgICBsZXQgaWR4MSA9IFtcbiAgICAgICAgaiAqIG51bVZlcnRpY2FsU2VnbWVudFZlcnRpY2VzICsgaSxcbiAgICAgICAgaiAqIG51bVZlcnRpY2FsU2VnbWVudFZlcnRpY2VzICsgKGkgKyAxKSxcbiAgICAgICAgKGogKyAxKSAqIG51bVZlcnRpY2FsU2VnbWVudFZlcnRpY2VzICsgaSBcbiAgICAgIF07XG4gICAgICAvKiB0cmlhbmdsZSAyXG4gICAgICAgICAgICAgICAgKjIgICBcbiAgICAgICAgICAgICAgLyAgfFxuICAgICAgICAgICAgLyAgICB8XG4gICAgICAgICAgKjEtLS0tLSozXG4gICAgICAqL1xuICAgICAgbGV0IGlkeDIgPSBbXG4gICAgICAgIChqICsgMSkgKiBudW1WZXJ0aWNhbFNlZ21lbnRWZXJ0aWNlcyArIGkgLFxuICAgICAgICBqICogbnVtVmVydGljYWxTZWdtZW50VmVydGljZXMgKyAoaSArIDEpLFxuICAgICAgICAoaiArIDEpICogbnVtVmVydGljYWxTZWdtZW50VmVydGljZXMgKyAoaSArIDEpXG4gICAgICBdO1xuXG4gICAgICBpbmRpY2VzLnB1c2goaWR4MSwgaWR4Mik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwb2lzdGlvbnM6IHBvc2l0aW9ucyxcbiAgICBub3JtYWxzOiBub3JtYWxzLFxuICAgIHRleHR1cmVDb29yZGluYXRlczogdGV4Q29vcmRzLFxuICAgIGluZGljZXM6IGluZGljZXMsXG5cbiAgICBudW1WZXJ0aWNlczogbnVtVmVydGljZXNcbiAgfTtcblxufVxuXG4vKlxuICBHTFNMIHNoYWRlciBwcm9ncmFtIGFuZCBHTFNMIGNvZGUgY29tcGlsZXIuXG5cbiAgVGhlcmUgYXJlIHR3byBzaGFkZXI6IHZlcnRleCBzaGFkZXIgYW5kIGZyYWdtZW50IHNoYWRlci5cbiAgVmVydGV4IHNoYWRlciBpcyB1c2VkIGZvciB0aGUgdmVydGV4IHBvc2l0aW9uIGluZm8uXG4gIGZyYWdtZW50IHNoYWRlciBpcyB1c2VkIGZvciB0aGUgdmVydGV4IGNvbG9yIGluZm8uXG5cbiAgRm9yIG1vcmUgZGV0YWlscywgTG9vayBmb3IgdGhlIGRvY3VtZW50IGFib3V0IFdlYkdMIG9uIE1ETi5cbiAqL1xuXG5cbi8vXG4vLyBJbml0aWFsaXplIGEgc2hhZGVyIHByb2dyYW0sIHNvIFdlYkdMIGtub3dzIGhvdyB0byBkcmF3IG91ciBkYXRhXG4vL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRTaGFkZXJQcm9ncmFtKGdsLCB2c1NvdXJjZSwgZnNTb3VyY2UpIHtcbiAgY29uc3QgdmVydGV4U2hhZGVyID0gbG9hZFNoYWRlcihnbCwgZ2wuVkVSVEVYX1NIQURFUiwgdnNTb3VyY2UpO1xuICBjb25zdCBmcmFnbWVudFNoYWRlciA9IGxvYWRTaGFkZXIoZ2wsIGdsLkZSQUdNRU5UX1NIQURFUiwgZnNTb3VyY2UpO1xuXG4gIC8vIENyZWF0ZSB0aGUgc2hhZGVyIHByb2dyYW1cblxuICBjb25zdCBzaGFkZXJQcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xuICBnbC5hdHRhY2hTaGFkZXIoc2hhZGVyUHJvZ3JhbSwgdmVydGV4U2hhZGVyKTtcbiAgZ2wuYXR0YWNoU2hhZGVyKHNoYWRlclByb2dyYW0sIGZyYWdtZW50U2hhZGVyKTtcbiAgZ2wubGlua1Byb2dyYW0oc2hhZGVyUHJvZ3JhbSk7XG5cbiAgLy8gSWYgY3JlYXRpbmcgdGhlIHNoYWRlciBwcm9ncmFtIGZhaWxlZCwgYWxlcnRcblxuICBpZiAoIWdsLmdldFByb2dyYW1QYXJhbWV0ZXIoc2hhZGVyUHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpKSB7XG4gICAgdGhyb3cgRXJyb3IoJ1VuYWJsZSB0byBpbml0aWFsaXplIHRoZSBzaGFkZXIgcHJvZ3JhbTogJyArIGdsLmdldFByb2dyYW1JbmZvTG9nKHNoYWRlclByb2dyYW0pKTtcbiAgfVxuXG4gIHJldHVybiBzaGFkZXJQcm9ncmFtO1xufVxuXG4vL1xuLy8gY3JlYXRlcyBhIHNoYWRlciBvZiB0aGUgZ2l2ZW4gdHlwZSwgdXBsb2FkcyB0aGUgc291cmNlIGFuZFxuLy8gY29tcGlsZXMgaXQuXG4vL1xuZnVuY3Rpb24gbG9hZFNoYWRlcihnbCwgdHlwZSwgc291cmNlKSB7XG4gIGNvbnN0IHNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcih0eXBlKTtcblxuICAvLyBTZW5kIHRoZSBzb3VyY2UgdG8gdGhlIHNoYWRlciBvYmplY3RcblxuICBnbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzb3VyY2UpO1xuXG4gIC8vIENvbXBpbGUgdGhlIHNoYWRlciBwcm9ncmFtXG5cbiAgZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xuXG4gIC8vIFNlZSBpZiBpdCBjb21waWxlZCBzdWNjZXNzZnVsbHlcblxuICBpZiAoIWdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKSkge1xuICAgIGdsLmRlbGV0ZVNoYWRlcihzaGFkZXIpO1xuICAgIHRocm93IEVycm9yKCdBbiBlcnJvciBvY2N1cnJlZCBjb21waWxpbmcgdGhlIHNoYWRlcnM6ICcgKyBnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcikpO1xuICB9XG5cbiAgcmV0dXJuIHNoYWRlcjtcbn0iXSwic291cmNlUm9vdCI6IiJ9