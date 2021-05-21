module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/menu.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/button.js":
/*!******************************!*\
  !*** ./components/button.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button.module.css */ "./components/button.module.css");
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_button_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function LinkButton(_ref) {
  let {
    href,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["href", "children"]);

  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("a", _extends({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }), children));
}

function BaseButton(_ref2) {
  let {
    children
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["children"]);

  return __jsx("button", _extends({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 12
    }
  }), children);
}

function Button(_ref3) {
  let {
    full = false,
    children,
    className
  } = _ref3,
      props = _objectWithoutProperties(_ref3, ["full", "children", "className"]);

  const Comp = props.href ? LinkButton : BaseButton;
  return __jsx(Comp, _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_button_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button, full && _button_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.fullWidth, className)
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), children);
}

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/button.module.css":
/*!**************************************!*\
  !*** ./components/button.module.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"button": "button_button__3pOsY",
	"fullWidth": "button_fullWidth__1srXA"
};


/***/ }),

/***/ "./components/col/col-extra.js":
/*!*************************************!*\
  !*** ./components/col/col-extra.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _col_extra_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./col-extra.module.css */ "./components/col/col-extra.module.css");
/* harmony import */ var _col_extra_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_col_extra_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\col\\col-extra.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Extra({
  children
}) {
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()([_col_extra_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.layout]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 12
    }
  }, children);
}

/* harmony default export */ __webpack_exports__["default"] = (Extra);

/***/ }),

/***/ "./components/col/col-extra.module.css":
/*!*********************************************!*\
  !*** ./components/col/col-extra.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"layout": "col-extra_layout__3P3EC"
};


/***/ }),

/***/ "./components/col/col-main.js":
/*!************************************!*\
  !*** ./components/col/col-main.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _col_main_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./col-main.module.css */ "./components/col/col-main.module.css");
/* harmony import */ var _col_main_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_col_main_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\col\\col-main.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Main({
  children
}) {
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()([_col_main_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 12
    }
  }, children);
}

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./components/col/col-main.module.css":
/*!********************************************!*\
  !*** ./components/col/col-main.module.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"main": "col-main_main__3Igu0"
};


/***/ }),

/***/ "./components/col/col-sidebar.js":
/*!***************************************!*\
  !*** ./components/col/col-sidebar.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navigation_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navigation/navigation */ "./components/navigation/navigation.js");
/* harmony import */ var _theme_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme-button */ "./components/theme-button.js");
/* harmony import */ var _user_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/user */ "./components/user/user.js");
/* harmony import */ var _col_sidebar_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./col-sidebar.module.css */ "./components/col/col-sidebar.module.css");
/* harmony import */ var _col_sidebar_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_col_sidebar_module_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\col\\col-sidebar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function Sidebar({
  children
}) {
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()([_col_sidebar_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.sidebar]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx(_navigation_navigation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }), __jsx(_theme_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    big: true,
    full: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, "\xC7\u0131k\u0131\u015F Yap"), __jsx(_user_user__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Tansu \xC7am",
    adress: "Ak\u015Femsettin Mh Sultanbeyli/\u0130stanbul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./components/col/col-sidebar.module.css":
/*!***********************************************!*\
  !*** ./components/col/col-sidebar.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"sidebar": "col-sidebar_sidebar__2Lpc9"
};


/***/ }),

/***/ "./components/icon/Add.js":
/*!********************************!*\
  !*** ./components/icon/Add.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\icon\\Add.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgAdd(props) {
  return __jsx("svg", _extends({
    viewBox: "0 0 455.431 455.431",
    width: "1em",
    height: "1em"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M405.493 412.764c-69.689 56.889-287.289 56.889-355.556 0-69.689-56.889-62.578-300.089 0-364.089s292.978-64 355.556 0 69.689 307.201 0 364.089z",
    "data-original": "#8DC640",
    className: "add_svg__active-path",
    "data-old_color": "#8DC640",
    fill: "#c12020",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M229.138 313.209c-62.578 49.778-132.267 75.378-197.689 76.8-48.356-82.489-38.4-283.022 18.489-341.333 51.2-52.622 211.911-62.578 304.356-29.867 22.755 93.867-24.178 213.333-125.156 294.4z",
    "data-original": "#FFFFFF",
    fill: "#fff",
    opacity: 0.2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M362.827 227.876a25.494 25.494 0 01-25.6 25.6h-85.333v85.333a25.494 25.494 0 01-25.6 25.6 25.494 25.494 0 01-25.6-25.6v-85.333H115.36a25.494 25.494 0 01-25.6-25.6 25.494 25.494 0 0125.6-25.6h85.333v-85.333a25.494 25.494 0 0125.6-25.6 25.494 25.494 0 0125.6 25.6v85.333h85.333a25.493 25.493 0 0125.601 25.6z",
    "data-original": "#FFFFFF",
    fill: "#fff",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgAdd);

/***/ }),

/***/ "./components/icon/AdressAdd.js":
/*!**************************************!*\
  !*** ./components/icon/AdressAdd.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\icon\\AdressAdd.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgAdressAdd(props) {
  return __jsx("svg", _extends({
    height: "1em",
    viewBox: "0 0 24 24",
    width: "1em"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M9.02 21H2.5A2.503 2.503 0 010 18.5v-16C0 1.121 1.122 0 2.5 0h12C15.878 0 17 1.121 17 2.5v6.06a.5.5 0 01-1 0V2.5c0-.827-.673-1.5-1.5-1.5h-12C1.673 1 1 1.673 1 2.5v16c0 .827.673 1.5 1.5 1.5h6.52a.5.5 0 010 1z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M13.5 9h-10a.5.5 0 010-1h10a.5.5 0 010 1zM9.5 13h-6a.5.5 0 010-1h6a.5.5 0 010 1zM8.5 5h-5a.5.5 0 010-1h5a.5.5 0 010 1zM17.5 24c-3.584 0-6.5-2.916-6.5-6.5s2.916-6.5 6.5-6.5 6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5zm0-12c-3.033 0-5.5 2.468-5.5 5.5s2.467 5.5 5.5 5.5 5.5-2.468 5.5-5.5-2.467-5.5-5.5-5.5z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M17.5 21a.5.5 0 01-.5-.5v-6a.5.5 0 011 0v6a.5.5 0 01-.5.5z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M20.5 18h-6a.5.5 0 010-1h6a.5.5 0 010 1z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgAdressAdd);

/***/ }),

/***/ "./components/icon/ArrowBottom.js":
/*!****************************************!*\
  !*** ./components/icon/ArrowBottom.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\icon\\ArrowBottom.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgArrowBottom(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M20.207 8.147a1 1 0 00-1.414 0L12 14.94 5.207 8.147a1 1 0 00-1.414 1.414l7.5 7.5a.996.996 0 001.414.001l7.5-7.5a1 1 0 000-1.413v-.002z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgArrowBottom);

/***/ }),

/***/ "./components/icon/Basket.js":
/*!***********************************!*\
  !*** ./components/icon/Basket.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\icon\\Basket.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgBasket(props) {
  return __jsx("svg", _extends({
    fill: "currentColor",
    viewBox: "0 0 423.416 423.416",
    width: "1em",
    height: "1em"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M420.688 145.096a9.401 9.401 0 00-7.837-2.612H300.525V92.851c0-49.052-39.764-88.816-88.816-88.816s-88.816 39.764-88.816 88.816v49.633H10.565c-3.135 0-6.269 0-7.837 2.612a8.883 8.883 0 00-2.612 7.837L39.3 367.137c5.474 29.881 31.275 51.746 61.649 52.245h221.518c30.461-.749 56.208-22.787 61.649-52.767L423.3 152.933a8.883 8.883 0 00-2.612-7.837zM143.79 92.851c0-37.51 30.408-67.918 67.918-67.918 37.51 0 67.918 30.408 67.918 67.918v49.633H143.79V92.851zm219.428 271.151c-3.519 19.801-20.641 34.289-40.751 34.482H100.949c-20.11-.193-37.232-14.68-40.751-34.482l-37.094-200.62h377.208l-37.094 200.62z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M290.076 265.259c5.771 0 10.449-4.678 10.449-10.449v-31.347c0-5.771-4.678-10.449-10.449-10.449s-10.449 4.678-10.449 10.449v31.347c-.001 5.771 4.678 10.449 10.449 10.449zM133.341 265.259c5.771 0 10.449-4.678 10.449-10.449v-31.347c0-5.771-4.678-10.449-10.449-10.449s-10.449 4.678-10.449 10.449v31.347c0 5.771 4.678 10.449 10.449 10.449z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgBasket);

/***/ }),

/***/ "./components/icon/BasketFill.js":
/*!***************************************!*\
  !*** ./components/icon/BasketFill.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\icon\\BasketFill.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgBasketFill(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 396.016 396.016"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("g", {
    fill: "#fff",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx("path", {
    d: "M9.404 160.914l37.094 200.62c3.519 19.801 20.641 34.289 40.751 34.482h221.518c20.111-.193 37.232-14.68 40.751-34.482l37.094-200.62H9.404zm120.686 89.862c0 5.771-4.678 10.449-10.449 10.449s-10.449-4.678-10.449-10.449v-31.347c0-5.771 4.678-10.449 10.449-10.449s10.449 4.678 10.449 10.449v31.347zm156.735 0c0 5.771-4.678 10.449-10.449 10.449s-10.449-4.678-10.449-10.449v-31.347c0-5.771 4.678-10.449 10.449-10.449s10.449 4.678 10.449 10.449v31.347zM130.09 88.816c0-37.51 30.408-67.918 67.918-67.918 37.51 0 67.918 30.408 67.918 67.918v61.649h20.898V88.816C286.825 39.764 247.06 0 198.008 0s-88.816 39.764-88.816 88.816v61.649h20.898V88.816z",
    "data-original": "#000000",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgBasketFill);

/***/ }),

/***/ "./components/icon/Calender.js":
/*!*************************************!*\
  !*** ./components/icon/Calender.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\icon\\Calender.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgCalender(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("g", {
    clipPath: "url(#calender_svg__clip0)",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("path", {
    d: "M-37.9 18c-.1-.1-.1-.1-.1-.2.1 0 .1.1.1.2zM18 2.2h-1.3v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H7.7v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H4.8c-1.4 0-2.5 1.1-2.5 2.5v13.1c0 1.4 1.1 2.5 2.5 2.5h2.9c.4 0 .8-.3.8-.8 0-.4-.3-.8-.8-.8H4.8c-.6 0-1-.5-1-1V7.9c0-.3.4-.7 1-.7H18c.6 0 1 .4 1 .7v1.8c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-5c-.1-1.4-1.2-2.5-2.6-2.5zm1 3.7c-.3-.1-.7-.2-1-.2H4.8c-.4 0-.7.1-1 .2V4.7c0-.6.5-1 1-1h1.3v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5h7.5v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5H18c.6 0 1 .5 1 1v1.2z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }), __jsx("path", {
    d: "M15.5 10.4c-3.4 0-6.2 2.8-6.2 6.2 0 3.4 2.8 6.2 6.2 6.2 3.4 0 6.2-2.8 6.2-6.2 0-3.4-2.8-6.2-6.2-6.2zm0 11c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7c0 2.5-2.1 4.7-4.7 4.7z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }), __jsx("path", {
    d: "M18.9 18.7c-.1.2-.4.4-.6.4-.1 0-.3 0-.4-.1l-3.1-2v-3c0-.4.3-.8.8-.8.4 0 .8.3.8.8v2.2l2.4 1.5c.2.2.3.6.1 1z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  })), __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("clipPath", {
    id: "calender_svg__clip0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, __jsx("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgCalender);

/***/ }),

/***/ "./components/icon/Clock.js":
/*!**********************************!*\
  !*** ./components/icon/Clock.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\icon\\Clock.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgClock(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
    fill: "url(#clock_svg__paint0_linear)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M12 23.611c6.413 0 11.61-5.198 11.61-11.611S18.414.389 12 .389C5.587.389.389 5.587.389 12s5.198 11.611 11.61 11.611z",
    fill: "url(#clock_svg__paint1_linear)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M12 22.471c5.783 0 10.472-4.688 10.472-10.471S17.783 1.528 12 1.528C6.217 1.528 1.53 6.217 1.53 12c0 5.783 4.688 10.471 10.471 10.471z",
    fill: "url(#clock_svg__paint2_linear)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M12 22.471c5.783 0 10.472-4.688 10.472-10.471S17.783 1.528 12 1.528C6.217 1.528 1.53 6.217 1.53 12c0 5.783 4.688 10.471 10.471 10.471z",
    fill: "url(#clock_svg__paint3_radial)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M22.353 13.581l-3.5-3.471-.993.244-5.076-5.032a.51.51 0 00-.247-.247.51.51 0 00-.461-.295h-.152a.51.51 0 00-.51.51v5.94a.965.965 0 00-.34 1.05l-3.3 3.3a.51.51 0 000 .72l6.025 6.017a10.48 10.48 0 008.554-8.736z",
    fill: "url(#clock_svg__paint4_linear)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M22.352 13.581a10.479 10.479 0 01-8.553 8.736l-5.91-5.902a.51.51 0 00.714-.007l3.442-3.443a.966.966 0 00.922-.96l5.988-1.474a.217.217 0 00.16-.161l3.237 3.211z",
    fill: "url(#clock_svg__paint5_linear)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M12.076 12h-.152a.51.51 0 01-.51-.51v-6.2a.51.51 0 01.51-.51h.152a.51.51 0 01.51.51v6.2a.51.51 0 01-.51.51z",
    fill: "url(#clock_svg__paint6_linear)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M12.076 12l.107.107c.199.199.199.522 0 .72l-3.58 3.58a.51.51 0 01-.721 0l-.107-.106a.51.51 0 010-.721l3.58-3.58a.51.51 0 01.72 0z",
    fill: "url(#clock_svg__paint7_linear)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M19.114 10.268a.217.217 0 01-.158.262l-6.848 1.687a.217.217 0 01-.103-.421l6.847-1.686a.217.217 0 01.262.158z",
    fill: "url(#clock_svg__paint8_linear)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M12 12.968a.968.968 0 100-1.936.968.968 0 000 1.936z",
    fill: "url(#clock_svg__paint9_linear)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M12.037 4.163h-.074a.548.548 0 01-.548-.548v-.682c0-.303.245-.548.548-.548h.074c.303 0 .548.245.548.548v.682a.548.548 0 01-.548.548z",
    fill: "url(#clock_svg__paint10_linear)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M12.037 21.615h-.074a.548.548 0 01-.548-.548v-.681c0-.303.245-.549.548-.549h.074c.303 0 .548.246.548.549v.681a.548.548 0 01-.548.548z",
    fill: "url(#clock_svg__paint11_linear)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M19.837 12.037v-.074c0-.303.246-.548.548-.548h.682c.303 0 .548.245.548.548v.074a.548.548 0 01-.548.548h-.682a.548.548 0 01-.548-.548z",
    fill: "url(#clock_svg__paint12_linear)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M2.385 12.037v-.074c0-.303.245-.548.548-.548h.682c.302 0 .548.245.548.548v.074a.548.548 0 01-.548.548h-.682a.548.548 0 01-.548-.548z",
    fill: "url(#clock_svg__paint13_linear)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }), __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx("linearGradient", {
    id: "clock_svg__paint0_linear",
    x1: 12,
    y1: 29.29,
    x2: 12,
    y2: -1.136,
    gradientUnits: "userSpaceOnUse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, __jsx("stop", {
    stopColor: "#fff",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
    }
  }), __jsx("stop", {
    offset: 1,
    stopColor: "#E8EFEE",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    }
  })), __jsx("linearGradient", {
    id: "clock_svg__paint1_linear",
    x1: 12,
    y1: -4.73,
    x2: 12,
    y2: 24.709,
    gradientUnits: "userSpaceOnUse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, __jsx("stop", {
    stopColor: "#fff",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }), __jsx("stop", {
    offset: 1,
    stopColor: "#E8EFEE",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  })), __jsx("linearGradient", {
    id: "clock_svg__paint2_linear",
    x1: 6.313,
    y1: 6.312,
    x2: 17.136,
    y2: 17.135,
    gradientUnits: "userSpaceOnUse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, __jsx("stop", {
    stopColor: "#1ACEB8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }), __jsx("stop", {
    offset: 1,
    stopColor: "#0BBFBA",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 21
    }
  })), __jsx("linearGradient", {
    id: "clock_svg__paint4_linear",
    x1: 13.514,
    y1: 13.391,
    x2: 8.347,
    y2: 8.224,
    gradientUnits: "userSpaceOnUse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }, __jsx("stop", {
    offset: 0,
    stopColor: "#1ACEB8",
    stopOpacity: 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 21
    }
  }), __jsx("stop", {
    offset: 1,
    stopColor: "#04959C",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 21
    }
  })), __jsx("linearGradient", {
    id: "clock_svg__paint5_linear",
    x1: 18.352,
    y1: 19.298,
    x2: 11.023,
    y2: 9.542,
    gradientUnits: "userSpaceOnUse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  }, __jsx("stop", {
    offset: 0,
    stopColor: "#1ACEB8",
    stopOpacity: 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 21
    }
  }), __jsx("stop", {
    offset: 1,
    stopColor: "#04959C",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 21
    }
  })), __jsx("linearGradient", {
    id: "clock_svg__paint6_linear",
    x1: 12,
    y1: 2.081,
    x2: 12,
    y2: 12.616,
    gradientUnits: "userSpaceOnUse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }, __jsx("stop", {
    stopColor: "#fff",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 21
    }
  }), __jsx("stop", {
    offset: 1,
    stopColor: "#E8EFEE",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 21
    }
  })), __jsx("linearGradient", {
    id: "clock_svg__paint7_linear",
    x1: 10.986,
    y1: 13.197,
    x2: 7.471,
    y2: 16.711,
    gradientUnits: "userSpaceOnUse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 17
    }
  }, __jsx("stop", {
    stopColor: "#fff",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 21
    }
  }), __jsx("stop", {
    offset: 1,
    stopColor: "#E8EFEE",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 21
    }
  })), __jsx("linearGradient", {
    id: "clock_svg__paint8_linear",
    x1: 11.83,
    y1: 12.031,
    x2: 20.428,
    y2: 9.986,
    gradientUnits: "userSpaceOnUse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 17
    }
  }, __jsx("stop", {
    stopColor: "#D63305",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 21
    }
  }), __jsx("stop", {
    offset: 0.366,
    stopColor: "#CF3004",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 21
    }
  }), __jsx("stop", {
    offset: 0.899,
    stopColor: "#BC2602",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 21
    }
  }), __jsx("stop", {
    offset: 1,
    stopColor: "#B72401",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 21
    }
  })), __jsx("linearGradient", {
    id: "clock_svg__paint9_linear",
    x1: 12,
    y1: 14.016,
    x2: 12,
    y2: 10.962,
    gradientUnits: "userSpaceOnUse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 17
    }
  }, __jsx("stop", {
    stopColor: "#97AAAA",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 21
    }
  }), __jsx("stop", {
    offset: 1,
    stopColor: "#E8EFEE",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 21
    }
  })), __jsx("linearGradient", {
    id: "clock_svg__paint10_linear",
    x1: 12,
    y1: 1.719,
    x2: 12,
    y2: 4.314,
    gradientUnits: "userSpaceOnUse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 17
    }
  }, __jsx("stop", {
    stopColor: "#fff",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 21
    }
  }), __jsx("stop", {
    offset: 1,
    stopColor: "#E8EFEE",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 21
    }
  })), __jsx("linearGradient", {
    id: "clock_svg__paint11_linear",
    x1: 12,
    y1: 19.173,
    x2: 12,
    y2: 21.767,
    gradientUnits: "userSpaceOnUse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 17
    }
  }, __jsx("stop", {
    stopColor: "#fff",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 21
    }
  }), __jsx("stop", {
    offset: 1,
    stopColor: "#E8EFEE",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 21
    }
  })), __jsx("linearGradient", {
    id: "clock_svg__paint12_linear",
    x1: 22.202,
    y1: 29.296,
    x2: 19.607,
    y2: -1.13,
    gradientUnits: "userSpaceOnUse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 17
    }
  }, __jsx("stop", {
    stopColor: "#fff",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 21
    }
  }), __jsx("stop", {
    offset: 1,
    stopColor: "#E8EFEE",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 21
    }
  })), __jsx("linearGradient", {
    id: "clock_svg__paint13_linear",
    x1: 4.748,
    y1: 29.296,
    x2: 2.154,
    y2: -1.13,
    gradientUnits: "userSpaceOnUse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 17
    }
  }, __jsx("stop", {
    stopColor: "#fff",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 21
    }
  }), __jsx("stop", {
    offset: 1,
    stopColor: "#E8EFEE",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 21
    }
  })), __jsx("radialGradient", {
    id: "clock_svg__paint3_radial",
    cx: 0,
    cy: 0,
    r: 1,
    gradientUnits: "userSpaceOnUse",
    gradientTransform: "translate(12.706 12.916) scale(11.3059)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 17
    }
  }, __jsx("stop", {
    offset: 0,
    stopColor: "#1ACEB8",
    stopOpacity: 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 21
    }
  }), __jsx("stop", {
    offset: 0.504,
    stopColor: "#19CCB7",
    stopOpacity: 0.503,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 21
    }
  }), __jsx("stop", {
    offset: 0.685,
    stopColor: "#17C5B4",
    stopOpacity: 0.685,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 21
    }
  }), __jsx("stop", {
    offset: 0.814,
    stopColor: "#12BAAE",
    stopOpacity: 0.814,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 21
    }
  }), __jsx("stop", {
    offset: 0.918,
    stopColor: "#0CA9A6",
    stopOpacity: 0.918,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 21
    }
  }), __jsx("stop", {
    offset: 1,
    stopColor: "#04959C",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 21
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgClock);

/***/ }),

/***/ "./components/icon/Courier.js":
/*!************************************!*\
  !*** ./components/icon/Courier.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\icon\\Courier.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgCourier(props) {
  return __jsx("svg", _extends({
    height: "1em",
    viewBox: "0 0 64 64",
    width: "1em"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M58 44.14V61H36V44.14L47 41z",
    fill: "#ff7956",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M36 8c0 2.21-4 8-4 8s-4-5.79-4-8a4 4 0 018 0z",
    fill: "#ffda44",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M44 51h6v10h-6z",
    fill: "#cd2a00",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M61 41v4l-14-4-14 4v-4l14-4z",
    fill: "#ff5023",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M24 54h-1.5a11.5 11.5 0 010-23H43a5 5 0 000-10h-4v-2h4a7 7 0 010 14H22.5a9.5 9.5 0 000 19H24z",
    fill: "#1a6fb0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M32 10a2 2 0 112-2 2 2 0 01-2 2z",
    fill: "#fff",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }), __jsx("g", {
    fill: "#1a6fb0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx("path", {
    d: "M26 52h2v2h-2zM30 52h2v2h-2zM31 19h2v2h-2zM35 19h2v2h-2z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  })), __jsx("path", {
    d: "M14 3h7v3h-7zM3 3h7v3H3z",
    fill: "#ff9811",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M3 6h18v15H3z",
    fill: "#ffda44",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M6 15h4v2H6z",
    fill: "#fff",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M3 6h18v1H3z",
    fill: "#cc7400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M14 6v2l-4 1V3h4z",
    fill: "#d80027",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgCourier);

/***/ }),

/***/ "./components/icon/Emoji.js":
/*!**********************************!*\
  !*** ./components/icon/Emoji.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\icon\\Emoji.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgEmoji(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M12 17.115a5.509 5.509 0 01-4.656-2.544.748.748 0 01.226-1.035.747.747 0 011.036.226 4.02 4.02 0 003.395 1.855 4.024 4.024 0 003.396-1.854.747.747 0 011.036-.225c.35.224.45.688.226 1.036a5.516 5.516 0 01-4.658 2.545L12 17.115zM14.738 10.936a1.478 1.478 0 100-2.956 1.478 1.478 0 000 2.956zM9.262 10.936a1.478 1.478 0 100-2.956 1.478 1.478 0 000 2.956z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgEmoji);

/***/ }),

/***/ "./components/icon/Explore.js":
/*!************************************!*\
  !*** ./components/icon/Explore.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\icon\\Explore.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgExplore(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    fill: "none"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M17.5 6.114h-3.275l.31-3.56a.626.626 0 00-1.245-.107l-.32 3.666H7.705l.308-3.558a.625.625 0 10-1.244-.108L6.45 6.113H3.152a.626.626 0 000 1.25h3.19l-.459 5.273H2.5a.625.625 0 000 1.25h3.275l-.31 3.56a.626.626 0 00.568.676l.055.003c.321 0 .594-.246.622-.572l.32-3.666h5.266l-.308 3.558a.626.626 0 00.568.677l.055.003c.32 0 .593-.246.621-.572l.319-3.666h3.297c.345 0 .625-.281.625-.625a.626.626 0 00-.625-.625h-3.19l.459-5.273H17.5a.625.625 0 000-1.25zm-5.096 6.522H7.138l.458-5.272h5.267l-.459 5.272z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgExplore);

/***/ }),

/***/ "./components/icon/ExploreFill.js":
/*!****************************************!*\
  !*** ./components/icon/ExploreFill.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\icon\\ExploreFill.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgExploreFill(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    fill: "none"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M17.154 7.89c.55 0 1-.448 1-1s-.45-1-1-1h-2.683l.258-2.956a1 1 0 00-.916-1.083c-.541-.03-1.029.36-1.077.91l-.272 3.129H8.25l.257-2.954a1.002 1.002 0 00-.914-1.085.997.997 0 00-1.078.91l-.27 3.128H3.468a1 1 0 000 2h2.602l-.367 4.22H2.847a1.002 1.002 0 000 2.002H5.53l-.258 2.956c-.048.548.36 1.034.908 1.084l.088.004c.522 0 .95-.393.996-.915l.273-3.127h4.213l-.257 2.953c-.05.548.359 1.035.909 1.085l.088.004c.514 0 .952-.402.996-.915l.27-3.127h2.776c.55 0 1-.45 1-1s-.45-1.002-1-1.002H13.93l.367-4.22h2.858V7.89zm-4.865 0l-.367 4.22H7.711l.367-4.22h4.212z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgExploreFill);

/***/ }),

/***/ "./components/icon/Gif.js":
/*!********************************!*\
  !*** ./components/icon/Gif.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\icon\\Gif.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgGif(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M19 10.5V8.8h-4.4v6.4h1.7v-2h2v-1.7h-2v-1H19zm-7.3-1.7h1.7v6.4h-1.7V8.8zm-3.6 1.6c.4 0 .9.2 1.2.5l1.2-1C9.9 9.2 9 8.8 8.1 8.8c-1.8 0-3.2 1.4-3.2 3.2 0 1.8 1.4 3.2 3.2 3.2 1 0 1.8-.4 2.4-1.1v-2.5H7.7v1.2h1.2v.6c-.2.1-.5.2-.8.2-.9 0-1.6-.7-1.6-1.6 0-.8.7-1.6 1.6-1.6z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M20.5 2.02h-17a2.25 2.25 0 00-2.25 2.247v15.507A2.251 2.251 0 003.5 22.02h17c1.24 0 2.25-1.008 2.25-2.246V4.267A2.25 2.25 0 0020.5 2.02zm.75 17.754a.75.75 0 01-.75.746h-17a.75.75 0 01-.75-.746V4.267c0-.412.336-.747.75-.747h17c.414 0 .75.335.75.747v15.507z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgGif);

/***/ }),

/***/ "./components/icon/Home.js":
/*!*********************************!*\
  !*** ./components/icon/Home.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\icon\\Home.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgHome(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    fill: "none"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M18.717 6.308l-8.42-4.545a.626.626 0 00-.594 0L1.286 6.308a.626.626 0 00.594 1.1l.68-.366 1.357 9.594c.178 1.012 1.09 1.718 2.215 1.718h7.735c1.126 0 2.037-.706 2.219-1.739L17.44 7.04l.681.368a.63.63 0 00.848-.253.626.626 0 00-.253-.847zM14.852 16.42c-.09.505-.586.685-.984.685H6.133c-.4 0-.895-.18-.981-.665L3.733 6.41 10 3.022l6.268 3.384-1.416 10.012z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M6.85 10.153a3.153 3.153 0 003.15 3.15 3.153 3.153 0 003.15-3.15A3.153 3.153 0 0010 7.003a3.153 3.153 0 00-3.15 3.15zm5.05 0a1.901 1.901 0 01-3.8 0c0-1.048.852-1.9 1.9-1.9s1.9.852 1.9 1.9z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgHome);

/***/ }),

/***/ "./components/icon/HomeFill.js":
/*!*************************************!*\
  !*** ./components/icon/HomeFill.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\icon\\HomeFill.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgHomeFill(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    fill: "none"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M18.817 6.125l-8.421-4.544a.833.833 0 00-.792 0L1.188 6.125a.835.835 0 00.791 1.468l.612-.33 1.325 9.375c.18 1.011 1.092 1.718 2.217 1.718h7.734c1.125 0 2.037-.707 2.219-1.74l1.323-9.354.614.331a.832.832 0 10.792-1.465l.002-.003zM10 12.863a2.708 2.708 0 110-5.417 2.708 2.708 0 010 5.417z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgHomeFill);

/***/ }),

/***/ "./components/icon/Like.js":
/*!*********************************!*\
  !*** ./components/icon/Like.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\icon\\Like.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgLike(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12v.002zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965h-.001z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgLike);

/***/ }),

/***/ "./components/icon/List.js":
/*!*********************************!*\
  !*** ./components/icon/List.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\icon\\List.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgList(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    fill: "none"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M16.458 18.333H3.542a1.878 1.878 0 01-1.875-1.875V3.542c0-1.034.841-1.875 1.875-1.875h12.916c1.034 0 1.875.841 1.875 1.875v12.916a1.878 1.878 0 01-1.875 1.875zM3.542 2.917a.626.626 0 00-.625.625v12.916c0 .345.28.625.625.625h12.916c.345 0 .625-.28.625-.625V3.542a.626.626 0 00-.625-.625H3.542z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M14.167 7.2H5.833a.626.626 0 010-1.25h8.334a.625.625 0 110 1.25zm0 3.425H5.833a.625.625 0 010-1.25h8.334a.625.625 0 010 1.25zM10 14.05H5.833a.625.625 0 110-1.25H10a.626.626 0 010 1.25z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgList);

/***/ }),

/***/ "./components/icon/ListFill.js":
/*!*************************************!*\
  !*** ./components/icon/ListFill.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\icon\\ListFill.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgListFill(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    fill: "none"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M16.458 1.667H3.542c-1.031 0-1.875.844-1.875 1.875v12.916c0 1.031.844 1.875 1.875 1.875h12.916c1.031 0 1.875-.844 1.875-1.875V3.542c0-1.031-.844-1.875-1.875-1.875zM9.167 13.958H5.833a.625.625 0 010-1.25h3.334a.625.625 0 010 1.25zm5-3.333H5.833a.625.625 0 010-1.25h8.334a.625.625 0 010 1.25zm0-3.333H5.833a.625.625 0 010-1.25h8.334a.625.625 0 010 1.25z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgListFill);

/***/ }),

/***/ "./components/icon/Mark.js":
/*!*********************************!*\
  !*** ./components/icon/Mark.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\icon\\Mark.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgMark(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    fill: "none"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M16.583 19.583a.629.629 0 01-.368-.12L10 14.94l-6.215 4.525a.625.625 0 01-.993-.506V4.667c0-1.034.841-1.875 1.875-1.875h10.665c1.033 0 1.875.841 1.875 1.875v14.291a.624.624 0 01-.625.625h.001zM10 13.542c.13 0 .258.04.367.12l5.591 4.069V4.667a.627.627 0 00-.625-.625H4.667a.627.627 0 00-.625.625V17.73l5.591-4.07a.617.617 0 01.367-.12z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgMark);

/***/ }),

/***/ "./components/icon/MarkFill.js":
/*!*************************************!*\
  !*** ./components/icon/MarkFill.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\icon\\MarkFill.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgMarkFill(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    fill: "none"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M16.583 19.583c-.166 0-.25 0-.333-.083L10 14.917l-6.25 4.5c-.167.166-.417.166-.667.083-.166-.083-.333-.333-.333-.583V4.667c0-1 .833-1.834 1.833-1.834H15.25c1 0 1.833.834 1.833 1.834v14.25c0 .25-.166.416-.333.583 0 .083-.083.083-.167.083z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgMarkFill);

/***/ }),

/***/ "./components/icon/Media.js":
/*!**********************************!*\
  !*** ./components/icon/Media.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\icon\\Media.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgMedia(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858a.75.75 0 00-.53-.22h-.003a.74.74 0 00-.532.224l-4.317 4.384-1.813-1.806a.75.75 0 00-.53-.22c-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25a.75.75 0 01-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M8.868 9.851a1.542 1.542 0 100-3.084 1.542 1.542 0 000 3.084z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgMedia);

/***/ }),

/***/ "./components/icon/Message.js":
/*!************************************!*\
  !*** ./components/icon/Message.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\icon\\Message.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgMessage(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    fill: "none"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M16.042 2.515H3.958a2.294 2.294 0 00-2.291 2.293v10.413a2.295 2.295 0 002.291 2.294h12.084a2.295 2.295 0 002.291-2.294V4.808a2.294 2.294 0 00-2.291-2.293zM3.958 3.765h12.084c.575 0 1.041.467 1.041 1.042v.595l-6.708 4.472a.675.675 0 01-.75-.002l-6.708-4.47v-.595c0-.575.466-1.042 1.041-1.042zm12.084 12.498H3.958a1.042 1.042 0 01-1.041-1.041V6.867l6.033 4.025a1.888 1.888 0 002.1 0l6.033-4.024v8.351c0 .575-.466 1.042-1.041 1.042v.002z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgMessage);

/***/ }),

/***/ "./components/icon/MessageFill.js":
/*!****************************************!*\
  !*** ./components/icon/MessageFill.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\icon\\MessageFill.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgMessageFill(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    fill: "none"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M9.625 10.068a.675.675 0 00.75 0l7.958-5.305v-.18a1.878 1.878 0 00-1.875-1.875H3.542a1.878 1.878 0 00-1.875 1.875v.164l7.958 5.321z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M11.05 11.08a1.888 1.888 0 01-2.1-.002L1.667 6.21v9.725c0 1.033.841 1.875 1.875 1.875h12.916a1.878 1.878 0 001.875-1.875v-9.71l-7.283 4.853v.001z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgMessageFill);

/***/ }),

/***/ "./components/icon/Money.js":
/*!**********************************!*\
  !*** ./components/icon/Money.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\icon\\Money.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgMoney(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
    fill: "#334D5C",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }), __jsx("path", {
    opacity: 0.1,
    d: "M14.203 5.952L5.125 9.149v1.022l.13.13-.13.048v1.022l.13.13-.13.048v1.022l.13.13-.13.048v1.022l.13.13-.13.048v1.022l8.863 8.863c5.467-.912 9.683-5.517 9.993-11.166L18.875 7.56l-4.672-1.607z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M16.654 12.618l-2.45-.845-4.762 1.677-4.317.498v1.022l4.671 1.61 9.079-3.197v-1.022l-2.221.257z",
    fill: "#31978C",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M14.204 10.752l-9.079 3.196 4.671 1.61 9.079-3.197-4.671-1.61z",
    fill: "#3EA69B",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M9.18 15.116l-2.778-.958c.335-.118.332-.308-.007-.424l7.206-2.537c.338.116.884.115 1.22-.003l2.777.957c-.335.118-.332.308.007.425l-7.206 2.537c-.339-.116-.884-.115-1.22.003z",
    fill: "#44C4A1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M13.245 12.716c.88.304 1.036.746.348.988-.687.242-1.958.192-2.838-.11-.88-.304-1.036-.746-.348-.988.687-.242 1.958-.193 2.838.11zM15.809 11.814c.157.054.158.142.003.197-.156.055-.41.056-.567.001-.157-.054-.159-.142-.003-.197.156-.055.41-.055.566-.001zM8.755 14.297c.157.055.159.143.003.198-.156.055-.41.055-.567 0-.157-.053-.158-.142-.003-.196.156-.055.41-.056.567-.002z",
    fill: "#3EA69B",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M13.216 13.62l-.226-.077a4.388 4.388 0 01-1.09.149l-.047-.172c.322-.008.589-.04.8-.093l-.601-.207a4.165 4.165 0 01-.727.102 1.562 1.562 0 01-.565-.082c-.178-.062-.262-.134-.253-.216.01-.083.11-.161.297-.234l-.155-.054.196-.069.158.055c.241-.074.531-.122.87-.144l.085.168a3.191 3.191 0 00-.617.092l.582.2.009-.003a4.16 4.16 0 01.743-.104c.206-.006.399.022.58.084.18.062.264.135.25.219-.013.084-.118.164-.316.24l.223.078-.196.069zm-2.214-.612c-.006.035.026.064.095.087a.67.67 0 00.225.035c.081 0 .198-.014.35-.042l-.537-.184c-.083.035-.128.07-.133.104zm2.002.24c.01-.035-.022-.066-.094-.091a.7.7 0 00-.24-.036 2.32 2.32 0 00-.37.048l.558.192c.087-.038.136-.075.146-.112z",
    fill: "#44C4A1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M16.654 11.418l-2.45-.845-4.762 1.677-4.317.498v1.022l4.671 1.61 9.079-3.197V11.16l-2.221.257z",
    fill: "#31978C",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M14.204 9.552l-9.079 3.196 4.671 1.61 9.079-3.197-4.671-1.61z",
    fill: "#3EA69B",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M9.18 13.915l-2.778-.957c.335-.118.332-.308-.007-.424l7.206-2.538c.338.117.884.116 1.22-.002l2.777.957c-.335.118-.332.308.007.425l-7.206 2.537c-.339-.117-.884-.116-1.22.002z",
    fill: "#44C4A1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M13.245 11.516c.88.304 1.036.746.348.988-.687.242-1.958.193-2.838-.11-.88-.304-1.036-.746-.348-.988.687-.242 1.958-.193 2.838.11zM15.809 10.614c.157.054.158.142.003.197-.156.055-.41.055-.567.001-.157-.054-.159-.142-.003-.197.156-.055.41-.055.566-.001zM8.755 13.097c.157.055.159.143.003.198-.156.055-.41.055-.567 0-.157-.053-.158-.142-.003-.197.156-.054.41-.055.567 0z",
    fill: "#3EA69B",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M13.216 12.42l-.226-.077a4.388 4.388 0 01-1.09.149l-.047-.172c.322-.008.589-.04.8-.094l-.601-.207a4.165 4.165 0 01-.727.103 1.562 1.562 0 01-.565-.082c-.178-.062-.262-.134-.253-.216.01-.083.11-.161.297-.234l-.155-.054.196-.069.158.055c.241-.074.531-.122.87-.145l.085.169a3.191 3.191 0 00-.617.092l.582.2.009-.003a4.16 4.16 0 01.743-.104c.206-.006.399.022.58.084.18.062.264.135.25.219-.013.084-.118.164-.316.24l.223.078-.196.069zm-2.214-.612c-.006.034.026.063.095.087a.67.67 0 00.225.035c.081 0 .198-.014.35-.042l-.537-.184c-.083.035-.128.07-.133.104zm2.002.24c.01-.036-.022-.066-.094-.091a.702.702 0 00-.24-.036 2.32 2.32 0 00-.37.048l.558.192c.087-.038.136-.076.146-.112z",
    fill: "#44C4A1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M16.654 10.217l-2.45-.844-4.762 1.677-4.317.498v1.022l4.671 1.61 9.079-3.197V9.96l-2.221.256z",
    fill: "#31978C",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M14.204 8.352l-9.079 3.196 4.671 1.61 9.079-3.197-4.671-1.61z",
    fill: "#3EA69B",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M9.18 12.715l-2.778-.957c.335-.118.332-.308-.007-.424l7.206-2.538c.338.117.884.116 1.22-.002l2.777.957c-.335.118-.332.308.007.425l-7.206 2.537c-.339-.117-.884-.116-1.22.002z",
    fill: "#44C4A1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M13.245 10.316c.88.303 1.036.745.348.988-.687.242-1.958.192-2.838-.11-.88-.304-1.036-.746-.348-.988.687-.242 1.958-.193 2.838.11zM15.809 9.414c.157.054.158.142.003.197-.156.055-.41.055-.567.001-.157-.054-.159-.142-.003-.197.156-.055.41-.055.566-.001zM8.755 11.897c.157.054.159.143.003.198-.156.054-.41.055-.567 0-.157-.054-.158-.142-.003-.197.156-.054.41-.055.567 0z",
    fill: "#3EA69B",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M13.216 11.22l-.226-.077a4.383 4.383 0 01-1.09.149l-.047-.172c.322-.008.589-.04.8-.094l-.601-.207a4.176 4.176 0 01-.727.103 1.562 1.562 0 01-.565-.083c-.178-.061-.262-.133-.253-.216.01-.082.11-.16.297-.233l-.155-.054.196-.069.158.055c.241-.074.531-.122.87-.145l.085.169a3.191 3.191 0 00-.617.092l.582.2.009-.003a4.16 4.16 0 01.743-.104c.206-.006.399.022.58.084.18.062.264.135.25.219-.013.084-.118.164-.316.24l.223.078-.196.069zm-2.214-.612c-.006.034.026.063.095.087.069.024.144.036.225.035.081 0 .198-.014.35-.042l-.537-.184c-.083.035-.128.07-.133.104zm2.002.24c.01-.036-.022-.066-.094-.091a.702.702 0 00-.24-.036c-.087.002-.21.017-.37.048l.558.192c.087-.038.136-.076.146-.112z",
    fill: "#44C4A1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M16.654 9.017l-2.45-.844L9.442 9.85l-4.317.498v1.022l4.671 1.61 9.079-3.197V8.76l-2.221.256z",
    fill: "#31978C",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M14.204 7.152l-9.079 3.196 4.671 1.61 9.079-3.197-4.671-1.61z",
    fill: "#3EA69B",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M9.18 11.515l-2.778-.957c.335-.118.332-.308-.007-.425l7.206-2.537c.338.117.884.116 1.22-.002l2.777.957c-.335.118-.332.308.007.425l-7.206 2.537c-.339-.117-.884-.116-1.22.002z",
    fill: "#44C4A1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M13.245 9.116c.88.303 1.036.745.348.988-.687.242-1.958.192-2.838-.111-.88-.303-1.036-.745-.348-.987.687-.243 1.958-.193 2.838.11zM15.809 8.214c.157.054.158.142.003.197-.156.055-.41.055-.567.001-.157-.054-.159-.143-.003-.197.156-.055.41-.056.566-.001zM8.755 10.697c.157.054.159.143.003.198-.156.054-.41.055-.567 0-.157-.054-.158-.142-.003-.197.156-.055.41-.055.567 0z",
    fill: "#3EA69B",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M13.216 10.02l-.226-.077a4.388 4.388 0 01-1.09.149l-.047-.172c.322-.008.589-.04.8-.094l-.601-.207a4.174 4.174 0 01-.727.103 1.563 1.563 0 01-.565-.083c-.178-.061-.262-.133-.253-.216.01-.082.11-.16.297-.234l-.155-.053.196-.069.158.054c.241-.073.531-.121.87-.144l.085.168a3.188 3.188 0 00-.617.093l.582.2.009-.003c.29-.063.538-.098.743-.104.206-.006.399.022.58.084.18.062.264.135.25.219-.013.083-.118.164-.316.24l.223.077-.196.07zm-2.214-.612c-.006.034.026.063.095.087.069.024.144.036.225.035.081 0 .198-.014.35-.042l-.537-.184c-.083.035-.128.07-.133.104zm2.002.24c.01-.036-.022-.066-.094-.091a.7.7 0 00-.24-.036 2.32 2.32 0 00-.37.048l.558.192c.087-.039.136-.076.146-.112z",
    fill: "#44C4A1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M16.654 7.817l-2.45-.844L9.442 8.65l-4.317.498v1.022l4.671 1.61 9.079-3.197V7.56l-2.221.256z",
    fill: "#31978C",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M14.204 5.951L5.125 9.148l4.671 1.61 9.079-3.197-4.671-1.61z",
    fill: "#3EA69B",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M9.18 10.315l-2.778-.957c.335-.118.332-.308-.007-.425l7.206-2.537c.338.117.884.116 1.22-.002l2.777.957c-.335.118-.332.308.007.425l-7.206 2.537c-.339-.117-.884-.116-1.22.002z",
    fill: "#44C4A1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M13.245 7.916c.88.303 1.036.745.348.987-.687.243-1.958.193-2.838-.11-.88-.303-1.036-.745-.348-.988.687-.242 1.958-.192 2.838.111zM15.809 7.014c.157.054.158.142.003.197-.156.055-.41.055-.567 0-.157-.053-.159-.142-.003-.196.156-.055.41-.056.566-.001zM8.755 9.497c.157.054.159.143.003.197-.156.055-.41.056-.567.001-.157-.054-.158-.142-.003-.197.156-.055.41-.055.567 0z",
    fill: "#3EA69B",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M13.216 8.82l-.226-.078a4.386 4.386 0 01-1.09.15l-.047-.172c.322-.008.589-.04.8-.094l-.601-.207a4.174 4.174 0 01-.727.103 1.563 1.563 0 01-.565-.083c-.178-.061-.262-.133-.253-.216.01-.082.11-.16.297-.234l-.155-.053.196-.069.158.054c.241-.073.531-.121.87-.144l.085.168a3.187 3.187 0 00-.617.093l.582.2.009-.003c.29-.063.538-.098.743-.104.206-.006.399.022.58.084.18.062.264.135.25.219-.013.083-.118.164-.316.24l.223.077-.196.07zm-2.214-.612c-.006.034.026.063.095.087.069.024.144.036.225.035.081 0 .198-.014.35-.042l-.537-.184c-.083.035-.128.07-.133.104zm2.002.24c.01-.036-.022-.067-.094-.091a.7.7 0 00-.24-.036 2.32 2.32 0 00-.37.047l.558.192c.087-.038.136-.075.146-.111z",
    fill: "#44C4A1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M13.27 9.534v5.824l2.088-.735V8.799l-2.088.735z",
    fill: "#fff",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M13.52 9.447v5.823l.215-.076V9.371l-.216.076zM14.894 8.963v5.823l.215-.075V8.886l-.215.076z",
    fill: "#FCD462",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M15.13 17.302c0 .412-.796.747-1.777.747-.98 0-1.776-.335-1.776-.747v-.611h3.552v.61z",
    fill: "#F6C358",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M13.352 17.438c.982 0 1.777-.335 1.777-.747s-.795-.747-1.777-.747c-.98 0-1.776.335-1.776.747s.795.747 1.776.747z",
    fill: "#FCD462",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M13.353 16.09c-.856 0-1.55.269-1.55.6 0 .333.694.602 1.55.602.856 0 1.55-.27 1.55-.601 0-.332-.694-.601-1.55-.601zm0 1.135c-.76 0-1.378-.24-1.378-.534 0-.295.617-.534 1.378-.534.761 0 1.378.239 1.378.534 0 .295-.617.534-1.378.534z",
    fill: "#DC8744",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M13.296 17.106v-.073a2.26 2.26 0 01-.635-.11l.188-.086c.145.048.294.077.447.087v-.195a2.148 2.148 0 01-.427-.07c-.09-.03-.136-.074-.136-.131 0-.058.052-.105.156-.142.104-.037.24-.057.407-.06v-.05h.165v.05c.19.006.369.031.538.076l-.168.092a1.745 1.745 0 00-.37-.058v.188h.008c.198.018.344.043.437.073.093.031.14.076.14.134 0 .059-.054.106-.16.143a1.418 1.418 0 01-.425.06v.072h-.165zm-.182-.647c-.044.015-.066.034-.066.056 0 .023.017.04.052.054.034.013.1.025.196.037v-.173a.658.658 0 00-.182.026zm.544.44c.048-.016.072-.035.072-.059 0-.023-.019-.041-.057-.055a1.11 1.11 0 00-.212-.039v.18a.766.766 0 00.197-.027z",
    fill: "#DC8744",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M15.13 16.56c0 .412-.796.747-1.777.747-.98 0-1.776-.335-1.776-.747v-.611h3.552v.61z",
    fill: "#F6C358",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M13.352 16.695c.982 0 1.777-.334 1.777-.746 0-.413-.795-.747-1.777-.747-.98 0-1.776.334-1.776.747 0 .412.795.746 1.776.746z",
    fill: "#FCD462",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M13.353 15.348c-.856 0-1.55.269-1.55.6 0 .333.694.602 1.55.602.856 0 1.55-.27 1.55-.601 0-.332-.694-.601-1.55-.601zm0 1.135c-.76 0-1.378-.24-1.378-.534 0-.295.617-.534 1.378-.534.761 0 1.378.239 1.378.534 0 .295-.617.534-1.378.534z",
    fill: "#DC8744",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M13.296 16.364v-.073a2.26 2.26 0 01-.635-.11l.188-.086c.145.048.294.077.447.087v-.194a2.148 2.148 0 01-.427-.072c-.09-.029-.136-.072-.136-.13 0-.058.052-.105.156-.142a1.33 1.33 0 01.407-.06v-.05h.165v.05c.19.006.369.031.538.076l-.168.092a1.745 1.745 0 00-.37-.058v.188h.008c.198.018.344.043.437.073.093.031.14.076.14.134 0 .059-.054.106-.16.143a1.421 1.421 0 01-.425.06v.072h-.165zm-.182-.646c-.044.014-.066.033-.066.056 0 .022.017.04.052.053.034.013.1.025.196.037v-.173a.653.653 0 00-.182.027zm.544.439c.048-.016.072-.035.072-.058 0-.024-.019-.042-.057-.056a1.11 1.11 0 00-.212-.038v.18a.766.766 0 00.197-.028z",
    fill: "#DC8744",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M15.13 15.818c0 .412-.796.747-1.777.747-.98 0-1.776-.335-1.776-.747v-.611h3.552v.61z",
    fill: "#F6C358",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M13.352 15.954c.982 0 1.777-.335 1.777-.747s-.795-.747-1.777-.747c-.98 0-1.776.335-1.776.747s.795.747 1.776.747z",
    fill: "#FCD462",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M13.353 14.606c-.856 0-1.55.27-1.55.601 0 .332.694.6 1.55.6.856 0 1.55-.268 1.55-.6 0-.332-.694-.601-1.55-.601zm0 1.135c-.76 0-1.378-.239-1.378-.534 0-.295.617-.534 1.378-.534.761 0 1.378.239 1.378.534 0 .295-.617.534-1.378.534z",
    fill: "#DC8744",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M13.296 15.622v-.073a2.26 2.26 0 01-.635-.11l.188-.086c.145.049.294.078.447.087v-.194a2.163 2.163 0 01-.427-.072c-.09-.029-.136-.072-.136-.13 0-.058.052-.105.156-.142.104-.037.24-.057.407-.06v-.05h.165v.05c.19.006.369.031.538.076l-.168.092a1.752 1.752 0 00-.37-.058v.188h.008c.198.018.344.043.437.073.093.031.14.076.14.134 0 .059-.054.106-.16.143a1.415 1.415 0 01-.425.06v.072h-.165zm-.182-.646c-.044.015-.066.033-.066.056 0 .022.017.04.052.053.034.013.1.025.196.037v-.173a.657.657 0 00-.182.027zm.544.439c.048-.016.072-.035.072-.058 0-.024-.019-.042-.057-.056a1.11 1.11 0 00-.212-.039v.18a.77.77 0 00.197-.027z",
    fill: "#DC8744",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M15.13 15.076c0 .412-.796.747-1.777.747-.98 0-1.776-.335-1.776-.747v-.611h3.552v.61z",
    fill: "#F6C358",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M13.352 15.211c.982 0 1.777-.334 1.777-.746 0-.413-.795-.747-1.777-.747-.98 0-1.776.334-1.776.747 0 .412.795.746 1.776.746z",
    fill: "#FCD462",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M13.353 13.864c-.856 0-1.55.27-1.55.601 0 .332.694.6 1.55.6.856 0 1.55-.268 1.55-.6 0-.332-.694-.601-1.55-.601zm0 1.135c-.76 0-1.378-.239-1.378-.534 0-.295.617-.534 1.378-.534.761 0 1.378.239 1.378.534 0 .295-.617.534-1.378.534z",
    fill: "#DC8744",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M13.296 14.88v-.073a2.26 2.26 0 01-.635-.11l.188-.086c.145.048.294.077.447.087v-.194a2.157 2.157 0 01-.427-.072c-.09-.029-.136-.072-.136-.13 0-.058.052-.105.156-.142.104-.037.24-.057.407-.06v-.05h.165v.05c.19.006.369.031.538.076l-.168.092a1.752 1.752 0 00-.37-.058v.188h.008c.198.018.344.043.437.074.093.03.14.075.14.133 0 .059-.054.106-.16.143a1.418 1.418 0 01-.425.06v.072h-.165zm-.182-.646c-.044.015-.066.033-.066.056 0 .022.017.04.052.053.034.013.1.025.196.037v-.173a.654.654 0 00-.182.027zm.544.439c.048-.016.072-.035.072-.058 0-.024-.019-.042-.057-.056a1.11 1.11 0 00-.212-.038v.18a.77.77 0 00.197-.028z",
    fill: "#DC8744",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M15.13 14.334c0 .412-.796.747-1.777.747-.98 0-1.776-.335-1.776-.747v-.61h3.552v.61z",
    fill: "#F6C358",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M13.352 14.47c.982 0 1.777-.334 1.777-.747 0-.412-.795-.747-1.777-.747-.98 0-1.776.335-1.776.747 0 .413.795.747 1.776.747z",
    fill: "#FCD462",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M13.353 13.122c-.856 0-1.55.27-1.55.601 0 .332.694.601 1.55.601.856 0 1.55-.269 1.55-.6 0-.333-.694-.602-1.55-.602zm0 1.135c-.76 0-1.378-.239-1.378-.534 0-.295.617-.534 1.378-.534.761 0 1.378.24 1.378.534 0 .295-.617.534-1.378.534z",
    fill: "#DC8744",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M13.296 14.138v-.073a2.257 2.257 0 01-.635-.11l.188-.086c.145.049.294.078.447.087v-.194a2.163 2.163 0 01-.427-.071c-.09-.03-.136-.073-.136-.131 0-.058.052-.105.156-.142a1.33 1.33 0 01.407-.06v-.05h.165v.051c.19.005.369.03.538.075l-.168.092a1.752 1.752 0 00-.37-.058v.188h.008c.198.019.344.043.437.074.093.03.14.075.14.133 0 .059-.054.106-.16.143a1.415 1.415 0 01-.425.06v.072h-.165zm-.182-.646c-.044.015-.066.033-.066.056 0 .022.017.04.052.053.034.013.1.025.196.037v-.173a.658.658 0 00-.182.027zm.544.439c.048-.015.072-.035.072-.058s-.019-.042-.057-.056a1.112 1.112 0 00-.212-.038v.18a.775.775 0 00.197-.028z",
    fill: "#DC8744",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M15.13 13.592c0 .412-.796.747-1.777.747-.98 0-1.776-.335-1.776-.747v-.61h3.552v.61z",
    fill: "#F6C358",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M13.352 13.728c.982 0 1.777-.335 1.777-.747s-.795-.747-1.777-.747c-.98 0-1.776.335-1.776.747s.795.747 1.776.747z",
    fill: "#FCD462",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M13.353 12.38c-.856 0-1.55.27-1.55.601 0 .332.694.601 1.55.601.856 0 1.55-.269 1.55-.6 0-.333-.694-.602-1.55-.602zm0 1.135c-.76 0-1.378-.239-1.378-.534 0-.295.617-.534 1.378-.534.761 0 1.378.24 1.378.534 0 .295-.617.534-1.378.534z",
    fill: "#DC8744",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M13.296 13.396v-.073a2.26 2.26 0 01-.635-.109l.188-.087c.145.049.294.078.447.087v-.194a2.148 2.148 0 01-.427-.071c-.09-.03-.136-.073-.136-.131 0-.058.052-.105.156-.142.104-.037.24-.057.407-.06v-.05h.165v.051c.19.005.369.03.538.075l-.168.092a1.745 1.745 0 00-.37-.058v.188h.008c.198.019.344.043.437.074.093.03.14.075.14.133 0 .059-.054.106-.16.143a1.421 1.421 0 01-.425.06v.072h-.165zm-.182-.646c-.044.015-.066.034-.066.056s.017.04.052.053c.034.013.1.025.196.037v-.173a.657.657 0 00-.182.027zm.544.439c.048-.015.072-.035.072-.058 0-.024-.019-.042-.057-.056a1.11 1.11 0 00-.212-.038v.18a.766.766 0 00.197-.028z",
    fill: "#DC8744",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M15.13 12.85c0 .413-.796.747-1.777.747-.98 0-1.776-.335-1.776-.747v-.61h3.552v.61z",
    fill: "#F6C358",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M13.352 12.986c.982 0 1.777-.334 1.777-.747 0-.412-.795-.747-1.777-.747-.98 0-1.776.335-1.776.747 0 .413.795.747 1.776.747z",
    fill: "#FCD462",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M13.353 11.638c-.856 0-1.55.27-1.55.601 0 .332.694.601 1.55.601.856 0 1.55-.269 1.55-.6 0-.333-.694-.602-1.55-.602zm0 1.135c-.76 0-1.378-.239-1.378-.534 0-.295.617-.534 1.378-.534.761 0 1.378.24 1.378.534 0 .295-.617.534-1.378.534z",
    fill: "#DC8744",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M13.296 12.654v-.073a2.26 2.26 0 01-.635-.109l.188-.087c.145.049.294.078.447.087v-.194a2.148 2.148 0 01-.427-.071c-.09-.03-.136-.073-.136-.131 0-.058.052-.105.156-.142a1.33 1.33 0 01.407-.06v-.05h.165v.051c.19.005.369.03.538.075l-.168.092a1.752 1.752 0 00-.37-.058v.189h.008c.198.018.344.042.437.073.093.03.14.075.14.133 0 .059-.054.107-.16.143a1.415 1.415 0 01-.425.06v.072h-.165zm-.182-.646c-.044.015-.066.034-.066.056s.017.04.052.053c.034.013.1.025.196.038v-.174a.653.653 0 00-.182.027zm.544.439c.048-.015.072-.035.072-.058s-.019-.042-.057-.056a1.11 1.11 0 00-.212-.038v.18a.775.775 0 00.197-.028z",
    fill: "#DC8744",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M15.13 12.108c0 .413-.796.747-1.777.747-.98 0-1.776-.334-1.776-.747v-.61h3.552v.61z",
    fill: "#F6C358",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M13.352 12.244c.982 0 1.777-.335 1.777-.747s-.795-.747-1.777-.747c-.98 0-1.776.335-1.776.747s.795.747 1.776.747z",
    fill: "#FCD462",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M13.353 10.896c-.856 0-1.55.27-1.55.601 0 .332.694.601 1.55.601.856 0 1.55-.269 1.55-.6 0-.333-.694-.602-1.55-.602zm0 1.135c-.76 0-1.378-.239-1.378-.534 0-.295.617-.534 1.378-.534.761 0 1.378.24 1.378.534 0 .295-.617.534-1.378.534z",
    fill: "#DC8744",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M13.296 11.912v-.073a2.26 2.26 0 01-.635-.109l.188-.087c.145.049.294.078.447.087v-.194a2.163 2.163 0 01-.427-.071c-.09-.03-.136-.073-.136-.13 0-.059.052-.106.156-.143a1.33 1.33 0 01.407-.06v-.05h.165v.051c.19.006.369.03.538.075l-.168.092a1.752 1.752 0 00-.37-.058v.189h.008c.198.018.344.042.437.073.093.03.14.075.14.133 0 .059-.054.106-.16.143a1.415 1.415 0 01-.425.06v.072h-.165zm-.182-.646c-.044.015-.066.034-.066.056s.017.04.052.053c.034.013.1.026.196.038v-.174a.658.658 0 00-.182.027zm.544.44c.048-.016.072-.036.072-.059s-.019-.042-.057-.056a1.11 1.11 0 00-.212-.038v.18a.775.775 0 00.197-.028z",
    fill: "#DC8744",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M18.875 17.302c0 .412-.795.747-1.776.747s-1.776-.335-1.776-.747v-.611h3.552v.61z",
    fill: "#F6C358",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M17.1 17.438c.981 0 1.776-.335 1.776-.747s-.795-.747-1.776-.747-1.776.335-1.776.747.795.747 1.776.747z",
    fill: "#FCD462",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M17.099 16.09c-.856 0-1.55.269-1.55.6 0 .333.694.602 1.55.602.856 0 1.55-.27 1.55-.601 0-.332-.694-.601-1.55-.601zm0 1.135c-.761 0-1.378-.24-1.378-.534 0-.295.617-.534 1.378-.534.76 0 1.378.239 1.378.534 0 .295-.617.534-1.378.534z",
    fill: "#DC8744",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M17.042 17.106v-.073a2.26 2.26 0 01-.636-.11l.189-.086c.145.048.294.077.447.087v-.195a2.148 2.148 0 01-.428-.07c-.09-.03-.135-.074-.135-.131 0-.058.052-.105.156-.142.104-.037.24-.057.407-.06v-.05h.165v.05c.19.006.369.031.538.076l-.168.092a1.745 1.745 0 00-.37-.058v.188h.008c.198.018.343.043.436.073.094.031.14.076.14.134 0 .059-.053.106-.16.143a1.417 1.417 0 01-.424.06v.072h-.165zm-.182-.647c-.044.015-.066.034-.066.056 0 .023.017.04.052.054.034.013.1.025.196.037v-.173a.656.656 0 00-.182.026zm.544.44c.048-.016.072-.035.072-.059 0-.023-.019-.041-.057-.055a1.113 1.113 0 00-.212-.039v.18a.768.768 0 00.197-.027z",
    fill: "#DC8744",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M18.875 16.56c0 .412-.795.747-1.776.747s-1.776-.335-1.776-.747v-.611h3.552v.61z",
    fill: "#F6C358",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M17.1 16.695c.981 0 1.776-.334 1.776-.746 0-.413-.795-.747-1.776-.747s-1.776.334-1.776.747c0 .412.795.746 1.776.746z",
    fill: "#FCD462",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M17.099 15.348c-.856 0-1.55.269-1.55.6 0 .333.694.602 1.55.602.856 0 1.55-.27 1.55-.601 0-.332-.694-.601-1.55-.601zm0 1.135c-.761 0-1.378-.24-1.378-.534 0-.295.617-.534 1.378-.534.76 0 1.378.239 1.378.534 0 .295-.617.534-1.378.534z",
    fill: "#DC8744",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M17.042 16.364v-.073a2.26 2.26 0 01-.636-.11l.189-.086c.145.048.294.077.447.087v-.194a2.148 2.148 0 01-.428-.072c-.09-.029-.135-.072-.135-.13 0-.058.052-.105.156-.142a1.33 1.33 0 01.407-.06v-.05h.165v.05c.19.006.369.031.538.076l-.168.092a1.745 1.745 0 00-.37-.058v.188h.008c.198.018.343.043.436.073.094.031.14.076.14.134 0 .059-.053.106-.16.143a1.42 1.42 0 01-.424.06v.072h-.165zm-.182-.646c-.044.014-.066.033-.066.056 0 .022.017.04.052.053.034.013.1.025.196.037v-.173a.652.652 0 00-.182.027zm.544.439c.048-.016.072-.035.072-.058 0-.024-.019-.042-.057-.056a1.113 1.113 0 00-.212-.038v.18a.768.768 0 00.197-.028z",
    fill: "#DC8744",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M18.875 15.818c0 .412-.795.747-1.776.747s-1.776-.335-1.776-.747v-.611h3.552v.61z",
    fill: "#F6C358",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M17.1 15.954c.981 0 1.776-.335 1.776-.747s-.795-.747-1.776-.747-1.776.335-1.776.747.795.747 1.776.747z",
    fill: "#FCD462",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M17.099 14.606c-.856 0-1.55.27-1.55.601 0 .332.694.6 1.55.6.856 0 1.55-.268 1.55-.6 0-.332-.694-.601-1.55-.601zm0 1.135c-.761 0-1.378-.239-1.378-.534 0-.295.617-.534 1.378-.534.76 0 1.378.239 1.378.534 0 .295-.617.534-1.378.534z",
    fill: "#DC8744",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M17.042 15.622v-.073a2.26 2.26 0 01-.636-.11l.189-.086c.145.049.294.078.447.087v-.194a2.163 2.163 0 01-.428-.072c-.09-.029-.135-.072-.135-.13 0-.058.052-.105.156-.142.104-.037.24-.057.407-.06v-.05h.165v.05c.19.006.369.031.538.076l-.168.092a1.752 1.752 0 00-.37-.058v.188h.008c.198.018.343.043.436.073.094.031.14.076.14.134 0 .059-.053.106-.16.143a1.414 1.414 0 01-.424.06v.072h-.165zm-.182-.646c-.044.015-.066.033-.066.056 0 .022.017.04.052.053.034.013.1.025.196.037v-.173a.656.656 0 00-.182.027zm.544.439c.048-.016.072-.035.072-.058 0-.024-.019-.042-.057-.056a1.113 1.113 0 00-.212-.039v.18a.772.772 0 00.197-.027z",
    fill: "#DC8744",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M18.875 15.076c0 .412-.795.747-1.776.747s-1.776-.335-1.776-.747v-.611h3.552v.61z",
    fill: "#F6C358",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M17.1 15.211c.981 0 1.776-.334 1.776-.746 0-.413-.795-.747-1.776-.747s-1.776.334-1.776.747c0 .412.795.746 1.776.746z",
    fill: "#FCD462",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M17.099 13.864c-.856 0-1.55.27-1.55.601 0 .332.694.6 1.55.6.856 0 1.55-.268 1.55-.6 0-.332-.694-.601-1.55-.601zm0 1.135c-.761 0-1.378-.239-1.378-.534 0-.295.617-.534 1.378-.534.76 0 1.378.239 1.378.534 0 .295-.617.534-1.378.534z",
    fill: "#DC8744",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M17.042 14.88v-.073a2.26 2.26 0 01-.636-.11l.189-.086c.145.048.294.077.447.087v-.194a2.157 2.157 0 01-.428-.072c-.09-.029-.135-.072-.135-.13 0-.058.052-.105.156-.142.104-.037.24-.057.407-.06v-.05h.165v.05c.19.006.369.031.538.076l-.168.092a1.752 1.752 0 00-.37-.058v.188h.008c.198.018.343.043.436.074.094.03.14.075.14.133 0 .059-.053.106-.16.143a1.417 1.417 0 01-.424.06v.072h-.165zm-.182-.646c-.044.015-.066.033-.066.056 0 .022.017.04.052.053.034.013.1.025.196.037v-.173a.652.652 0 00-.182.027zm.544.439c.048-.016.072-.035.072-.058 0-.024-.019-.042-.057-.056a1.113 1.113 0 00-.212-.038v.18a.772.772 0 00.197-.028z",
    fill: "#DC8744",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M18.875 14.334c0 .412-.795.747-1.776.747s-1.776-.335-1.776-.747v-.61h3.552v.61z",
    fill: "#F6C358",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M17.1 14.47c.981 0 1.776-.334 1.776-.747 0-.412-.795-.747-1.776-.747s-1.776.335-1.776.747c0 .413.795.747 1.776.747z",
    fill: "#FCD462",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M17.099 13.122c-.856 0-1.55.27-1.55.601 0 .332.694.601 1.55.601.856 0 1.55-.269 1.55-.6 0-.333-.694-.602-1.55-.602zm0 1.135c-.761 0-1.378-.239-1.378-.534 0-.295.617-.534 1.378-.534.76 0 1.378.24 1.378.534 0 .295-.617.534-1.378.534z",
    fill: "#DC8744",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M17.042 14.138v-.073a2.257 2.257 0 01-.636-.11l.189-.086c.145.049.294.078.447.087v-.194a2.163 2.163 0 01-.428-.071c-.09-.03-.135-.073-.135-.131 0-.058.052-.105.156-.142a1.33 1.33 0 01.407-.06v-.05h.165v.051c.19.005.369.03.538.075l-.168.092a1.752 1.752 0 00-.37-.058v.188h.008c.198.019.343.043.436.074.094.03.14.075.14.133 0 .059-.053.106-.16.143a1.414 1.414 0 01-.424.06v.072h-.165zm-.182-.646c-.044.015-.066.033-.066.056 0 .022.017.04.052.053.034.013.1.025.196.037v-.173a.656.656 0 00-.182.027zm.544.439c.048-.015.072-.035.072-.058s-.019-.042-.057-.056a1.115 1.115 0 00-.212-.038v.18a.777.777 0 00.197-.028z",
    fill: "#DC8744",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M13.953 18.047a1.955 1.955 0 100-3.91 1.955 1.955 0 000 3.91z",
    fill: "#FCD462",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M13.953 14.387a1.706 1.706 0 100 3.413 1.706 1.706 0 000-3.413zm0 3.223a1.517 1.517 0 110-3.033 1.517 1.517 0 010 3.033z",
    fill: "#DC8744",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M13.89 17.272v-.207a1.235 1.235 0 01-.7-.31l.209-.248c.159.138.323.221.492.248v-.552c-.215-.051-.372-.119-.471-.202-.1-.084-.15-.207-.15-.371a.52.52 0 01.173-.403.696.696 0 01.447-.17v-.143h.182v.146c.209.015.406.086.592.213l-.185.261a.917.917 0 00-.407-.165v.535h.009c.218.051.378.12.48.208.103.087.154.214.154.38a.517.517 0 01-.176.405.734.734 0 01-.467.17v.205h-.181zm-.2-1.836a.203.203 0 00-.073.16.2.2 0 00.057.15c.038.037.11.073.216.107v-.492a.34.34 0 00-.2.075zm.599 1.247a.205.205 0 00.08-.165.205.205 0 00-.063-.157.62.62 0 00-.234-.11v.512a.397.397 0 00.217-.08z",
    fill: "#DC8744",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgMoney);

/***/ }),

/***/ "./components/icon/More.js":
/*!*********************************!*\
  !*** ./components/icon/More.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\icon\\More.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgMore(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    fill: "none"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M13.75 8.542c-.804 0-1.458.655-1.458 1.458a1.46 1.46 0 001.458 1.458c.803 0 1.458-.655 1.458-1.458 0-.803-.655-1.458-1.458-1.458zm0 2.083a.625.625 0 110-1.25.625.625 0 010 1.25zM10 8.542A1.46 1.46 0 008.542 10c0 .803.654 1.458 1.458 1.458A1.46 1.46 0 0011.458 10 1.46 1.46 0 0010 8.542zm0 2.083a.625.625 0 110-1.25.625.625 0 010 1.25zM6.25 8.542c-.804 0-1.458.655-1.458 1.458 0 .803.654 1.458 1.458 1.458.803 0 1.458-.655 1.458-1.458 0-.803-.655-1.458-1.458-1.458zm0 2.083a.625.625 0 110-1.25.625.625 0 010 1.25z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M10 18.958c-4.94 0-8.958-4.018-8.958-8.958S5.06 1.042 10 1.042 18.958 5.06 18.958 10 14.94 18.958 10 18.958zm0-16.666C5.75 2.292 2.292 5.75 2.292 10S5.75 17.708 10 17.708 17.708 14.25 17.708 10 14.25 2.292 10 2.292z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgMore);

/***/ }),

/***/ "./components/icon/Notification.js":
/*!*****************************************!*\
  !*** ./components/icon/Notification.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\icon\\Notification.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgNotification(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    fill: "none"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M18.08 13.723c-.016-.013-1.782-1.366-1.752-5.025.017-2.11-.676-3.985-1.955-5.279-1.146-1.16-2.698-1.802-4.369-1.81h-.01c-1.67.008-3.222.65-4.369 1.811C4.347 4.714 3.652 6.588 3.67 8.698c.03 3.609-1.683 4.973-1.752 5.025a.626.626 0 00.373 1.128h4.1a3.62 3.62 0 003.608 3.466c1.944 0 3.522-1.541 3.606-3.466h4.102a.621.621 0 00.591-.429.623.623 0 00-.219-.698h.002zM10 17.065a2.367 2.367 0 01-2.357-2.215h4.714A2.37 2.37 0 0110 17.067v-.002zM3.65 13.6c.617-.943 1.29-2.523 1.27-4.913-.015-1.8.537-3.319 1.594-4.39.911-.922 2.15-1.433 3.486-1.439 1.336.007 2.572.517 3.483 1.44 1.059 1.071 1.611 2.589 1.596 4.39-.02 2.39.654 3.97 1.271 4.913H3.65V13.6z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgNotification);

/***/ }),

/***/ "./components/icon/NotificationFill.js":
/*!*********************************************!*\
  !*** ./components/icon/NotificationFill.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\icon\\NotificationFill.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgNotificationFill(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    fill: "none"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M18.08 13.723c-.016-.013-1.782-1.366-1.752-5.025.017-2.11-.676-3.985-1.955-5.278-1.146-1.16-2.698-1.803-4.369-1.81h-.01c-1.67.007-3.222.65-4.369 1.81C4.347 4.714 3.652 6.588 3.67 8.697c.03 3.61-1.683 4.973-1.752 5.026a.626.626 0 00.374 1.127h3.745C6.12 16.97 7.86 18.672 10 18.672s3.88-1.702 3.963-3.822h3.745a.625.625 0 00.373-1.127zM10 17.007a2.31 2.31 0 01-2.297-2.157h4.594A2.31 2.31 0 0110 17.006z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgNotificationFill);

/***/ }),

/***/ "./components/icon/Products.js":
/*!*************************************!*\
  !*** ./components/icon/Products.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\icon\\Products.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgProducts(props) {
  return __jsx("svg", _extends({
    "data-name": "Layer 1",
    viewBox: "0 0 512 512",
    width: "1em",
    height: "1em"
  }, props, {
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M472.916 224h-24.909a24.534 24.534 0 00-23.417-18H398v-65.024a6.86 6.86 0 00-3.346-6.062L207.077 26.572a6.927 6.927 0 00-6.962 0L12.48 134.914A6.981 6.981 0 009 140.976v216.685a7 7 0 003.5 6.062l187.654 108.342a7 7 0 003.5.938 7.361 7.361 0 003.6-.938L306 415.108v41.174A29.642 29.642 0 00335.891 486h137.025A29.807 29.807 0 00503 456.282v-202.1A30.2 30.2 0 00472.916 224zm-48.077-4A10.161 10.161 0 01435 230.161v.678A10.161 10.161 0 01424.839 241h-40.678A10.161 10.161 0 01374 230.839v-.678A10.161 10.161 0 01384.161 220zM203.654 40.717l77.974 45.018-173.642 100.252-77.973-45.018zM197 453.878L23 353.619V153.085l174 100.259zm6.654-212.658l-81.668-47.151L295.628 93.818l81.672 47.151zM306 254.182v144.761l-95 54.935V253.344l173-100.259V206h.217a24.533 24.533 0 00-23.417 18h-24.909A30.037 30.037 0 00306 254.182zm183 202.1A15.793 15.793 0 01472.916 472H335.891A15.628 15.628 0 01320 456.282v-202.1A16.022 16.022 0 01335.891 238h25.182a23.944 23.944 0 0023.144 17h40.373a23.942 23.942 0 0023.143-17h25.183A16.186 16.186 0 01489 254.182z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M343.949 325h7.327a7 7 0 100-14H351v-19h19.307a6.739 6.739 0 006.655 4.727 7.019 7.019 0 007.038-6.984v-4.71a7.093 7.093 0 00-7.076-7.033h-32.975a6.985 6.985 0 00-6.949 7.033v32.975a6.95 6.95 0 006.949 6.992zM344 389h33a7 7 0 007-7v-33a7 7 0 00-7-7h-33a7 7 0 00-7 7v33a7 7 0 007 7zm7-33h19v19h-19zM351.277 439H351v-19h18.929a7.037 7.037 0 0014.071.014v-6.745a7.3 7.3 0 00-7.076-7.269h-32.975a7.191 7.191 0 00-6.949 7.269v32.975a6.752 6.752 0 006.949 6.756h7.328a7 7 0 100-14z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M393.041 286.592l-20.5 20.5-6.236-6.237a7 7 0 10-9.9 9.9l11.187 11.186a7 7 0 009.9 0l25.452-25.452a7 7 0 00-9.9-9.9zM393.041 415.841l-20.5 20.5-6.236-6.237a7 7 0 10-9.9 9.9l11.187 11.186a7 7 0 009.9 0l25.452-25.452a7 7 0 00-9.9-9.9zM464.857 295h-43.966a7 7 0 000 14h43.966a7 7 0 000-14zM464.857 359h-43.966a7 7 0 000 14h43.966a7 7 0 000-14zM464.857 423h-43.966a7 7 0 000 14h43.966a7 7 0 000-14z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgProducts);

/***/ }),

/***/ "./components/icon/ProductsFill.js":
/*!*****************************************!*\
  !*** ./components/icon/ProductsFill.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\icon\\ProductsFill.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgProductsFill(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 512"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "#fff",
    "data-original": "#000000",
    d: "M203.654 241.22l173.642-100.251-81.668-47.151-173.642 100.251 81.668 47.151zM197 253.344L23 153.085v200.534l174 100.259V253.344zM351 356h19v19h-19zM211 253.344v200.534l95-54.935V254.182A30.037 30.037 0 01335.891 224H360.8a24.533 24.533 0 0123.417-18H384v-52.915z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }), __jsx("rect", {
    xmlns: "http://www.w3.org/2000/svg",
    x: 374,
    y: 220,
    width: 61,
    height: 21,
    rx: 10.161,
    fill: "#fff",
    "data-original": "#000000",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }), __jsx("path", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "#fff",
    "data-original": "#000000",
    d: "M281.628 85.735l-77.974-45.018L30.013 140.969l77.973 45.018L281.628 85.735zM472.916 238h-25.183a23.942 23.942 0 01-23.143 17h-40.373a23.944 23.944 0 01-23.144-17h-25.182A16.022 16.022 0 00320 254.182v202.1A15.628 15.628 0 00335.891 472h137.025A15.793 15.793 0 00489 456.282v-202.1A16.186 16.186 0 00472.916 238zM337 285.033a6.985 6.985 0 016.949-7.033h32.975a7.093 7.093 0 017.076 7.033v4.71a7.019 7.019 0 01-7.038 6.984 6.739 6.739 0 01-6.655-4.727H351v19h.276a7 7 0 110 14h-7.327a6.95 6.95 0 01-6.949-6.992zM337 349a7 7 0 017-7h33a7 7 0 017 7v33a7 7 0 01-7 7h-33a7 7 0 01-7-7zm14.277 104h-7.328a6.752 6.752 0 01-6.949-6.756v-32.975a7.191 7.191 0 016.949-7.269h32.975a7.3 7.3 0 017.076 7.269v6.745a7.037 7.037 0 01-14.071-.014H351v19h.277a7 7 0 110 14zm51.664-27.259l-25.452 25.452a7 7 0 01-9.9 0L356.4 440.007a7 7 0 119.9-9.9l6.236 6.237 20.5-20.5a7 7 0 019.9 9.9zm0-129.249l-25.452 25.452a7 7 0 01-9.9 0L356.4 310.758a7 7 0 119.9-9.9l6.236 6.237 20.5-20.5a7 7 0 019.9 9.9zM464.857 437h-43.966a7 7 0 010-14h43.966a7 7 0 010 14zm0-64h-43.966a7 7 0 010-14h43.966a7 7 0 010 14zm0-64h-43.966a7 7 0 010-14h43.966a7 7 0 010 14z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgProductsFill);

/***/ }),

/***/ "./components/icon/Profile.js":
/*!************************************!*\
  !*** ./components/icon/Profile.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\icon\\Profile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgProfile(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    fill: "none"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M10 9.847c1.13 0 2.393-.125 3.2-1.047.678-.775.898-1.973.672-3.66-.317-2.354-1.764-3.76-3.872-3.76-2.108 0-3.555 1.406-3.872 3.762-.226 1.685-.006 2.883.672 3.658.807.922 2.07 1.047 3.2 1.047zm-2.633-4.54c.135-1 .655-2.677 2.633-2.677 1.977 0 2.498 1.678 2.633 2.677.173 1.291.048 2.189-.375 2.67-.379.434-1.055.62-2.258.62s-1.88-.186-2.258-.62c-.423-.481-.548-1.38-.375-2.67zM16.9 16.03c-.73-2.938-3.568-4.992-6.9-4.992-3.332 0-6.17 2.054-6.9 4.992a1.87 1.87 0 00.33 1.617c.34.433.866.683 1.443.683h10.254c.577 0 1.104-.25 1.444-.683.353-.45.472-1.04.328-1.617h.001zm-1.313.847a.56.56 0 01-.46.205H4.873a.56.56 0 01-.46-.205.628.628 0 01-.1-.545c.592-2.38 2.931-4.042 5.687-4.042 2.756 0 5.095 1.662 5.687 4.042.05.201.014.4-.1.545z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgProfile);

/***/ }),

/***/ "./components/icon/ProfileFill.js":
/*!****************************************!*\
  !*** ./components/icon/ProfileFill.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\icon\\ProfileFill.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgProfileFill(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    fill: "none"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M10.188 10.137c-1.13 0-2.394-.125-3.2-1.046-.679-.775-.898-1.973-.671-3.66.316-2.355 1.763-3.761 3.871-3.761 2.109 0 3.556 1.406 3.872 3.76.227 1.688.007 2.884-.672 3.66-.808.922-2.07 1.047-3.2 1.047zm4.874 8.209H5.313a1.717 1.717 0 01-1.375-.655 1.938 1.938 0 01-.341-1.64c.695-2.942 3.405-4.998 6.59-4.998s5.895 2.055 6.591 4.998c.137.582.009 1.195-.343 1.639-.333.42-.82.654-1.373.654v.002z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgProfileFill);

/***/ }),

/***/ "./components/icon/Question.js":
/*!*************************************!*\
  !*** ./components/icon/Question.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\icon\\Question.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgQuestion(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M20.222 9.16h-1.334c.015-.09.028-.182.028-.277V6.57c0-.98-.797-1.777-1.778-1.777H3.5V3.358a.75.75 0 00-1.5 0V20.83a.75.75 0 101.5 0v-1.434h10.556a1.78 1.78 0 001.778-1.777v-2.313c0-.095-.014-.187-.028-.278h4.417a1.78 1.78 0 001.778-1.778v-2.31a1.78 1.78 0 00-1.778-1.78h-.001zM17.14 6.293c.152 0 .277.124.277.277v2.31a.28.28 0 01-.278.28H3.5V6.29h13.64v.003zm-2.807 9.014v2.312a.278.278 0 01-.278.277H3.5v-2.868h10.556c.153 0 .277.126.277.28v-.001zM20.5 13.25a.278.278 0 01-.278.277H3.5V10.66h16.722c.153 0 .278.124.278.277v2.313z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgQuestion);

/***/ }),

/***/ "./components/icon/Retweet.js":
/*!************************************!*\
  !*** ./components/icon/Retweet.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\icon\\Retweet.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgRetweet(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M23.77 15.67a.749.749 0 00-1.06 0l-2.22 2.22V7.65a3.755 3.755 0 00-3.75-3.75h-5.85a.75.75 0 000 1.5h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22a.749.749 0 10-1.06 1.06l3.5 3.5a.74.74 0 00.53.22.74.74 0 00.53-.22l3.5-3.5a.747.747 0 000-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22a.752.752 0 001.062 0 .749.749 0 000-1.06l-3.5-3.5a.747.747 0 00-1.06 0l-3.5 3.5a.749.749 0 101.06 1.06l2.22-2.22V16.7a3.755 3.755 0 003.75 3.75h5.85a.75.75 0 000-1.5h-.002z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgRetweet);

/***/ }),

/***/ "./components/icon/Search.js":
/*!***********************************!*\
  !*** ./components/icon/Search.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\icon\\Search.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgSearch(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M21.53 20.47l-3.66-3.66A8.98 8.98 0 0020 11a9 9 0 10-9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66a.746.746 0 001.06 0 .747.747 0 00.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgSearch);

/***/ }),

/***/ "./components/icon/Settings.js":
/*!*************************************!*\
  !*** ./components/icon/Settings.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\icon\\Settings.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgSettings(props) {
  return __jsx("svg", _extends({
    viewBox: "0 0 368 368",
    width: "1em",
    height: "1em"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M344 144h-29.952c-2.512-8.2-5.8-16.12-9.792-23.664l21.16-21.16c4.528-4.528 7.024-10.56 7.024-16.984 0-6.416-2.496-12.448-7.024-16.976l-22.64-22.64c-9.048-9.048-24.888-9.072-33.952 0l-21.16 21.16A135.753 135.753 0 00224 53.944V24c0-13.232-10.768-24-24-24h-32c-13.232 0-24 10.768-24 24v29.952c-8.2 2.52-16.12 5.8-23.664 9.792l-21.168-21.16c-9.36-9.36-24.592-9.36-33.952 0l-22.648 22.64c-9.352 9.36-9.352 24.592 0 33.952l21.16 21.168a135.753 135.753 0 00-9.792 23.664H24c-13.232 0-24 10.768-24 24v32C0 213.232 10.768 224 24 224h29.952c2.52 8.2 5.8 16.12 9.792 23.664l-21.16 21.168c-9.36 9.36-9.36 24.592 0 33.952l22.64 22.648c9.36 9.352 24.592 9.352 33.952 0l21.168-21.16a135.753 135.753 0 0023.664 9.792V344c0 13.232 10.768 24 24 24h32c13.232 0 24-10.768 24-24v-29.952c8.2-2.52 16.128-5.8 23.664-9.792l21.16 21.168c9.072 9.064 24.912 9.048 33.952 0l22.64-22.64c4.528-4.528 7.024-10.56 7.024-16.976 0-6.424-2.496-12.448-7.024-16.976l-21.16-21.168A135.753 135.753 0 00314.056 224H344c13.232 0 24-10.768 24-24v-32c0-13.232-10.768-24-24-24zm8 56c0 4.408-3.584 8-8 8h-36a8.002 8.002 0 00-7.744 6c-2.832 10.92-7.144 21.344-12.832 30.976a8.01 8.01 0 001.232 9.72l25.44 25.448a7.948 7.948 0 012.336 5.664c0 2.152-.832 4.16-2.336 5.664l-22.64 22.64c-3.008 3.008-8.312 3.008-11.328 0l-25.44-25.44c-2.576-2.584-6.576-3.08-9.728-1.232-9.616 5.68-20.04 10-30.968 12.824A7.988 7.988 0 00208 308v36c0 4.408-3.584 8-8 8h-32c-4.408 0-8-3.592-8-8v-36a8.002 8.002 0 00-6-7.744 119.948 119.948 0 01-30.976-12.824 7.915 7.915 0 00-4.064-1.112c-2.072 0-4.12.8-5.664 2.344l-25.44 25.44a8.025 8.025 0 01-11.328 0l-22.64-22.64c-3.128-3.128-3.128-8.208 0-11.328l25.44-25.44a7.99 7.99 0 001.232-9.72c-5.68-9.632-10-20.048-12.824-30.976A7.986 7.986 0 0060 208H24c-4.408 0-8-3.592-8-8v-32c0-4.408 3.592-8 8-8h36a8.002 8.002 0 007.744-6 119.948 119.948 0 0112.824-30.976 7.988 7.988 0 00-1.232-9.72l-25.44-25.44c-3.12-3.12-3.12-8.2 0-11.328l22.64-22.64c3.128-3.128 8.2-3.12 11.328 0l25.44 25.44a7.978 7.978 0 009.72 1.232c9.632-5.68 20.048-10 30.976-12.824A8.002 8.002 0 00160 60V24c0-4.408 3.592-8 8-8h32c4.416 0 8 3.592 8 8v36a8.002 8.002 0 006 7.744 119.827 119.827 0 0130.968 12.824c3.152 1.856 7.152 1.36 9.728-1.232l25.44-25.44c3.016-3.024 8.32-3.016 11.328 0l22.64 22.64c1.504 1.504 2.336 3.52 2.336 5.664s-.832 4.16-2.336 5.664l-25.44 25.44a8.002 8.002 0 00-1.232 9.72c5.688 9.632 10 20.048 12.832 30.976a7.986 7.986 0 007.736 6h36c4.416 0 8 3.592 8 8v32z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M184 112c-39.696 0-72 32.304-72 72s32.304 72 72 72c39.704 0 72-32.304 72-72s-32.296-72-72-72zm0 128c-30.88 0-56-25.12-56-56s25.12-56 56-56c30.872 0 56 25.12 56 56s-25.128 56-56 56z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgSettings);

/***/ }),

/***/ "./components/icon/SettingsFill.js":
/*!*****************************************!*\
  !*** ./components/icon/SettingsFill.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\icon\\SettingsFill.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgSettingsFill(props) {
  return __jsx("svg", _extends({
    viewBox: "0 0 512 512",
    width: "1em",
    height: "1em"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M500.6 212.6l-59.9-14.7c-3.3-10.5-7.5-20.7-12.6-30.6l30.6-51c3.6-6 2.7-13.5-2.1-18.3L414 55.4c-4.8-4.8-12.3-5.7-18.3-2.1l-51 30.6c-9.9-5.1-20.1-9.3-30.6-12.6l-14.4-59.9C297.9 4.8 291.9 0 285 0h-60c-6.9 0-12.9 4.8-14.7 11.4l-14.4 59.9c-10.5 3.3-20.7 7.5-30.6 12.6l-51-30.6c-6-3.6-13.5-2.7-18.3 2.1L53.4 98c-4.8 4.8-5.7 12.3-2.1 18.3l30.6 51c-5.1 9.9-9.3 20.1-12.6 30.6l-57.9 14.7C4.8 214.1 0 220.1 0 227v60c0 6.9 4.8 12.9 11.4 14.4l57.9 14.7c3.3 10.5 7.5 20.7 12.6 30.6l-30.6 51c-3.6 6-2.7 13.5 2.1 18.3L96 458.6c4.8 4.8 12.3 5.7 18.3 2.1l51-30.6c9.9 5.1 20.1 9.3 30.6 12.6l14.4 57.9c1.8 6.6 7.8 11.4 14.7 11.4h60c6.9 0 12.9-4.8 14.7-11.4l14.4-57.9c10.5-3.3 20.7-7.5 30.6-12.6l51 30.6c6 3.6 13.5 2.7 18.3-2.1l42.6-42.6c4.8-4.8 5.7-12.3 2.1-18.3l-30.6-51c5.1-9.9 9.3-20.1 12.6-30.6l59.9-14.7c6.6-1.5 11.4-7.5 11.4-14.4v-60c0-6.9-4.8-12.9-11.4-14.4zM255 332c-41.4 0-75-33.6-75-75s33.6-75 75-75 75 33.6 75 75-33.6 75-75 75z",
    "data-original": "#000000",
    className: "settings-fill_svg__active-path",
    "data-old_color": "#000000",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgSettingsFill);

/***/ }),

/***/ "./components/icon/Share.js":
/*!**********************************!*\
  !*** ./components/icon/Share.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\icon\\Share.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgShare(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M17.53 7.47l-5-5a.749.749 0 00-1.06 0l-5 5a.749.749 0 101.06 1.06l3.72-3.72V15a.75.75 0 001.5 0V4.81l3.72 3.72c.146.147.338.22.53.22a.749.749 0 00.53-1.28z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M19.708 21.944H4.292A2.294 2.294 0 012 19.652V14a.75.75 0 011.5 0v5.652c0 .437.355.792.792.792h15.416a.793.793 0 00.792-.792V14a.75.75 0 011.5 0v5.652a2.294 2.294 0 01-2.292 2.292z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgShare);

/***/ }),

/***/ "./components/icon/TimelineProp.js":
/*!*****************************************!*\
  !*** ./components/icon/TimelineProp.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\icon\\TimelineProp.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgTimelineProp(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M22.772 10.506l-5.618-2.192-2.16-6.5a.751.751 0 00-1.424-.001l-2.16 6.5-5.62 2.192a.751.751 0 00.001 1.398l5.62 2.192 2.16 6.5a.752.752 0 001.424 0l2.16-6.5 5.62-2.192a.751.751 0 00-.001-1.397h-.002zm-6.49 2.32a.748.748 0 00-.44.46l-1.56 4.695-1.56-4.693a.753.753 0 00-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622.001-.002zM6.663 3.812h-1.88V2.05a.75.75 0 00-1.5 0v1.762H1.5a.75.75 0 000 1.5h1.782v1.762a.75.75 0 001.5 0V5.312h1.88a.75.75 0 100-1.5h.001zm2.535 15.622h-1.1v-1.016a.75.75 0 10-1.5 0v1.016H5.57a.75.75 0 000 1.5H6.6v1.016a.75.75 0 101.5 0v-1.016h1.098a.75.75 0 000-1.5z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgTimelineProp);

/***/ }),

/***/ "./components/icon/Twitter.js":
/*!************************************!*\
  !*** ./components/icon/Twitter.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\icon\\Twitter.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgTwitter(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    fill: "none"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M19.703 4.114a7.773 7.773 0 01-2.23.611 3.892 3.892 0 001.707-2.148 7.75 7.75 0 01-2.465.941A3.883 3.883 0 0010.1 7.06a11.024 11.024 0 01-8.002-4.057A3.883 3.883 0 003.3 8.186a3.873 3.873 0 01-1.758-.485v.05c0 1.88 1.337 3.45 3.114 3.806a3.912 3.912 0 01-1.754.067A3.884 3.884 0 006.53 14.32a7.79 7.79 0 01-5.748 1.608 10.979 10.979 0 005.95 1.745c7.142 0 11.046-5.915 11.046-11.045 0-.167-.005-.335-.012-.502a7.891 7.891 0 001.936-2.008l.002-.003z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgTwitter);

/***/ }),

/***/ "./components/icon/index.js":
/*!**********************************!*\
  !*** ./components/icon/index.js ***!
  \**********************************/
/*! exports provided: Add, AdressAdd, ArrowBottom, BasketFill, Basket, Calender, Clock, Courier, Emoji, ExploreFill, Explore, Gif, HomeFill, Home, İconComment, Like, ListFill, List, MarkFill, Mark, Media, MessageFill, Message, Money, More, NotificationFill, Notification, ProductsFill, Products, ProfileFill, Profile, Question, Retweet, Search, SettingsFill, Settings, Share, TimelineProp, Twitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add */ "./components/icon/Add.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Add", function() { return _Add__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _AdressAdd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdressAdd */ "./components/icon/AdressAdd.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdressAdd", function() { return _AdressAdd__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ArrowBottom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArrowBottom */ "./components/icon/ArrowBottom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowBottom", function() { return _ArrowBottom__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _BasketFill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BasketFill */ "./components/icon/BasketFill.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasketFill", function() { return _BasketFill__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Basket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Basket */ "./components/icon/Basket.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Basket", function() { return _Basket__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Calender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Calender */ "./components/icon/Calender.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Calender", function() { return _Calender__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Clock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Clock */ "./components/icon/Clock.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Clock", function() { return _Clock__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _Courier__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Courier */ "./components/icon/Courier.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Courier", function() { return _Courier__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _Emoji__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Emoji */ "./components/icon/Emoji.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Emoji", function() { return _Emoji__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _ExploreFill__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ExploreFill */ "./components/icon/ExploreFill.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExploreFill", function() { return _ExploreFill__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _Explore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Explore */ "./components/icon/Explore.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Explore", function() { return _Explore__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _Gif__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Gif */ "./components/icon/Gif.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Gif", function() { return _Gif__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _HomeFill__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./HomeFill */ "./components/icon/HomeFill.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeFill", function() { return _HomeFill__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Home */ "./components/icon/Home.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return _Home__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _conComment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./İconComment */ "./components/icon/İconComment.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "İconComment", function() { return _conComment__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _Like__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Like */ "./components/icon/Like.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Like", function() { return _Like__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _ListFill__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ListFill */ "./components/icon/ListFill.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListFill", function() { return _ListFill__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./List */ "./components/icon/List.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "List", function() { return _List__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _MarkFill__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./MarkFill */ "./components/icon/MarkFill.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkFill", function() { return _MarkFill__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _Mark__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Mark */ "./components/icon/Mark.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mark", function() { return _Mark__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Media */ "./components/icon/Media.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Media", function() { return _Media__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _MessageFill__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./MessageFill */ "./components/icon/MessageFill.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageFill", function() { return _MessageFill__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Message */ "./components/icon/Message.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return _Message__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _Money__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Money */ "./components/icon/Money.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Money", function() { return _Money__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _More__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./More */ "./components/icon/More.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "More", function() { return _More__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _NotificationFill__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./NotificationFill */ "./components/icon/NotificationFill.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationFill", function() { return _NotificationFill__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Notification */ "./components/icon/Notification.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return _Notification__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _ProductsFill__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ProductsFill */ "./components/icon/ProductsFill.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductsFill", function() { return _ProductsFill__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Products */ "./components/icon/Products.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Products", function() { return _Products__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _ProfileFill__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ProfileFill */ "./components/icon/ProfileFill.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileFill", function() { return _ProfileFill__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Profile */ "./components/icon/Profile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return _Profile__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _Question__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Question */ "./components/icon/Question.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return _Question__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _Retweet__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Retweet */ "./components/icon/Retweet.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Retweet", function() { return _Retweet__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Search */ "./components/icon/Search.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return _Search__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _SettingsFill__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./SettingsFill */ "./components/icon/SettingsFill.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingsFill", function() { return _SettingsFill__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./Settings */ "./components/icon/Settings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return _Settings__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _Share__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./Share */ "./components/icon/Share.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Share", function() { return _Share__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _TimelineProp__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./TimelineProp */ "./components/icon/TimelineProp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimelineProp", function() { return _TimelineProp__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _Twitter__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./Twitter */ "./components/icon/Twitter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Twitter", function() { return _Twitter__WEBPACK_IMPORTED_MODULE_38__["default"]; });









































/***/ }),

/***/ "./components/icon/İconComment.js":
/*!****************************************!*\
  !*** ./components/icon/İconComment.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\icon\\\u0130conComment.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgİconComment(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828a.85.85 0 00.12.403.744.744 0 001.034.229c.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788v.001zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67a.75.75 0 00-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176h-.001z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgİconComment);

/***/ }),

/***/ "./components/iconbar/button.js":
/*!**************************************!*\
  !*** ./components/iconbar/button.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button.module.css */ "./components/iconbar/button.module.css");
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_button_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\iconbar\\button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function LinkButton(_ref) {
  let {
    href,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["href", "children"]);

  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("a", _extends({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }), children));
}

function BaseButton(_ref2) {
  let {
    children
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["children"]);

  return __jsx("button", _extends({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 12
    }
  }), children);
}

function Button(_ref3) {
  let {
    children,
    className
  } = _ref3,
      props = _objectWithoutProperties(_ref3, ["children", "className"]);

  const Comp = props.href ? LinkButton : BaseButton;
  return __jsx(Comp, _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_button_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button, className)
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), children);
}

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/iconbar/button.module.css":
/*!**********************************************!*\
  !*** ./components/iconbar/button.module.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"button": "button_button__1hHZT"
};


/***/ }),

/***/ "./components/iconbar/iconbar.js":
/*!***************************************!*\
  !*** ./components/iconbar/iconbar.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./constants/index.js");
/* harmony import */ var _iconbar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iconbar.module.css */ "./components/iconbar/iconbar.module.css");
/* harmony import */ var _iconbar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconbar_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _navigation_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation-button */ "./components/iconbar/navigation-button.js");
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\iconbar\\iconbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function IconNav() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  return __jsx("nav", {
    className: _iconbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.iconbar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, _constants__WEBPACK_IMPORTED_MODULE_2__["ICONBAR"].map(menu => {
    const selected = router.pathname === menu.path;
    return __jsx(_navigation_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      href: menu.path,
      key: menu.key,
      className: _iconbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.icon,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 21
      }
    }, selected ? menu.iconSelected : menu.icon);
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (IconNav);

/***/ }),

/***/ "./components/iconbar/iconbar.module.css":
/*!***********************************************!*\
  !*** ./components/iconbar/iconbar.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"iconbar": "iconbar_iconbar__1qUaQ"
};


/***/ }),

/***/ "./components/iconbar/navigation-button.js":
/*!*************************************************!*\
  !*** ./components/iconbar/navigation-button.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navigation_button_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation-button.module.css */ "./components/iconbar/navigation-button.module.css");
/* harmony import */ var _navigation_button_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_navigation_button_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ "./components/iconbar/button.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\iconbar\\navigation-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function NavigationButton(_ref) {
  let {
    href,
    selected,
    children,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["href", "selected", "children", "className"]);

  return __jsx(_button__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_navigation_button_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navButton, selected && _navigation_button_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navButtonSelected),
    href: href
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }), children);
}

/* harmony default export */ __webpack_exports__["default"] = (NavigationButton);

/***/ }),

/***/ "./components/iconbar/navigation-button.module.css":
/*!*********************************************************!*\
  !*** ./components/iconbar/navigation-button.module.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"navButton": "navigation-button_navButton__14CBa",
	"navButtonSelected": "navigation-button_navButtonSelected__Houyt"
};


/***/ }),

/***/ "./components/layout/layout.js":
/*!*************************************!*\
  !*** ./components/layout/layout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useWindowSize */ "./hooks/useWindowSize.js");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.module.css */ "./components/layout/layout.module.css");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./constants/index.js");
/* harmony import */ var _col_col_sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../col/col-sidebar */ "./components/col/col-sidebar.js");
/* harmony import */ var _col_col_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../col/col-main */ "./components/col/col-main.js");
/* harmony import */ var _col_col_extra__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../col/col-extra */ "./components/col/col-extra.js");
/* harmony import */ var _navbar_navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../navbar/navbar */ "./components/navbar/navbar.js");
/* harmony import */ var _iconbar_iconbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../iconbar/iconbar */ "./components/iconbar/iconbar.js");
/* harmony import */ var _mobile_navbar_search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../mobile-navbar/search */ "./components/mobile-navbar/search.js");
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\layout\\layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












function Layout({
  children
}) {
  const size = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, size.width < _constants__WEBPACK_IMPORTED_MODULE_4__["default"].MOBILE_SIZE && __jsx(_mobile_navbar_search__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 48
    }
  }), size.width > _constants__WEBPACK_IMPORTED_MODULE_4__["default"].MOBILE_SIZE && __jsx(_navbar_navbar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 48
    }
  }), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()([_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.layout]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx(_col_col_sidebar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, "sidebar"), __jsx(_col_col_main__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, children), size.width > _constants__WEBPACK_IMPORTED_MODULE_4__["default"].TABLET_SIZE && __jsx(_col_col_extra__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 52
    }
  }, "extra"), size.width < _constants__WEBPACK_IMPORTED_MODULE_4__["default"].MOBILE_SIZE && __jsx(_iconbar_iconbar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 52
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/layout/layout.module.css":
/*!*********************************************!*\
  !*** ./components/layout/layout.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"layout": "layout_layout__2edI9"
};


/***/ }),

/***/ "./components/menu-content.js":
/*!************************************!*\
  !*** ./components/menu-content.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon_Add__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon/Add */ "./components/icon/Add.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _menu_content_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-content.module.css */ "./components/menu-content.module.css");
/* harmony import */ var _menu_content_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_menu_content_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\menu-content.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function MenuContent(_ref) {
  let {
    tableName,
    foodName,
    foodContent,
    price,
    href,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["tableName", "foodName", "foodContent", "price", "href", "children"]);

  return __jsx("table", {
    className: _menu_content_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.table,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("tr", {
    className: _menu_content_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.tableRow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx("th", {
    className: _menu_content_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.tableHead,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, tableName)), __jsx("tr", {
    className: _menu_content_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.row,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx("td", {
    className: _menu_content_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.tableData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "text",
    className: (_menu_content_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.fname, _menu_content_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.input),
    name: "fname",
    placeholder: "0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }), ' ', __jsx(_icon_Add__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  })), __jsx("td", {
    className: _menu_content_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.tableData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: _menu_content_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.textHead,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, foodName, " "), ' ', __jsx("small", {
    className: _menu_content_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.small,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, foodContent)), __jsx("td", {
    className: _menu_content_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.tableData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, "\u20BA", price)), __jsx("tr", {
    className: _menu_content_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.row,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx("td", {
    className: _menu_content_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.tableData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "text",
    className: (_menu_content_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.fname, _menu_content_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.input),
    name: "fname",
    placeholder: "0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }), ' ', __jsx(_icon_Add__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  })), __jsx("td", {
    className: _menu_content_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.tableData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: _menu_content_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.textHead,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }, foodName, " "), ' ', __jsx("small", {
    className: _menu_content_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.small,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, foodContent)), __jsx("td", {
    className: _menu_content_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.tableData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, "\u20BA", price)), __jsx("tr", {
    className: _menu_content_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.row,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx("td", {
    className: _menu_content_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.tableData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "text",
    className: (_menu_content_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.fname, _menu_content_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.input),
    name: "fname",
    placeholder: "0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }), ' ', __jsx(_icon_Add__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  })), __jsx("td", {
    className: _menu_content_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.tableData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: _menu_content_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.textHead,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  }, foodName, " "), ' ', __jsx("small", {
    className: _menu_content_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.small,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, foodContent)), __jsx("td", {
    className: _menu_content_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.tableData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, "\u20BA", price)), __jsx("tr", {
    className: _menu_content_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.row,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, __jsx("td", {
    className: _menu_content_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.tableData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "text",
    className: (_menu_content_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.fname, _menu_content_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.input),
    name: "fname",
    placeholder: "0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
    }
  }), ' ', __jsx(_icon_Add__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  })), __jsx("td", {
    className: _menu_content_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.tableData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: _menu_content_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.textHead,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }, foodName, " "), ' ', __jsx("small", {
    className: _menu_content_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.small,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 21
    }
  }, foodContent)), __jsx("td", {
    className: _menu_content_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.tableData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }, "\u20BA", price)));
}

/* harmony default export */ __webpack_exports__["default"] = (MenuContent);

/***/ }),

/***/ "./components/menu-content.module.css":
/*!********************************************!*\
  !*** ./components/menu-content.module.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"table": "menu-content_table__1jeoK",
	"input": "menu-content_input__37MGl",
	"textHead": "menu-content_textHead__vU6OU",
	"small": "menu-content_small__y0Pnk",
	"row": "menu-content_row__1mszs",
	"tableHead": "menu-content_tableHead__3F3OG",
	"tableData": "menu-content_tableData__w8m-8",
	"fname": "menu-content_fname__XBXBX"
};


/***/ }),

/***/ "./components/mobile-navbar/search.js":
/*!********************************************!*\
  !*** ./components/mobile-navbar/search.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _search_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.module.css */ "./components/mobile-navbar/search.module.css");
/* harmony import */ var _search_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_search_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navbar_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar/logo */ "./components/navbar/logo.js");
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\mobile-navbar\\search.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function NavBar(_ref) {
  let {
    href,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["href", "children"]);

  return __jsx("div", {
    className: _search_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.search,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "https://i.pinimg.com/originals/f4/c2/bf/f4c2bf89258b3a95233854b72018a564.png",
    className: _search_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }), __jsx("form", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("input", {
    className: _search_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.box,
    type: "text",
    name: "search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./components/mobile-navbar/search.module.css":
/*!****************************************************!*\
  !*** ./components/mobile-navbar/search.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"search": "search_search__33cDA",
	"box": "search_box__rp_R7",
	"logo": "search_logo__uC8_J"
};


/***/ }),

/***/ "./components/navbar/logo.js":
/*!***********************************!*\
  !*** ./components/navbar/logo.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logo_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo.module.css */ "./components/navbar/logo.module.css");
/* harmony import */ var _logo_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_logo_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\navbar\\logo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function Logo(_ref) {
  let {
    href,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["href", "children"]);

  return __jsx("div", {
    class: _logo_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.image,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "https://i.pinimg.com/originals/f4/c2/bf/f4c2bf89258b3a95233854b72018a564.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./components/navbar/logo.module.css":
/*!*******************************************!*\
  !*** ./components/navbar/logo.module.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"image": "logo_image__WstJl"
};


/***/ }),

/***/ "./components/navbar/navbar.js":
/*!*************************************!*\
  !*** ./components/navbar/navbar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navbar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.module.css */ "./components/navbar/navbar.module.css");
/* harmony import */ var _navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_navbar_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _search_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-box */ "./components/navbar/search-box.js");
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logo */ "./components/navbar/logo.js");
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\navbar\\navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Navbar() {
  return __jsx("div", {
    class: _navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx(_logo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx(_search_box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/navbar/navbar.module.css":
/*!*********************************************!*\
  !*** ./components/navbar/navbar.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"grid": "navbar_grid__1lwlN"
};


/***/ }),

/***/ "./components/navbar/search-box.js":
/*!*****************************************!*\
  !*** ./components/navbar/search-box.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon_Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icon/Search */ "./components/icon/Search.js");
/* harmony import */ var _search_box_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-box.module.css */ "./components/navbar/search-box.module.css");
/* harmony import */ var _search_box_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_search_box_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\navbar\\search-box.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function SearchBox(_ref) {
  let {
    href,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["href", "children"]);

  return __jsx("form", {
    className: _search_box_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.example,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "text",
    placeholder: "Search..",
    name: "search2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }), __jsx("button", {
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx(_icon_Search__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SearchBox);

/***/ }),

/***/ "./components/navbar/search-box.module.css":
/*!*************************************************!*\
  !*** ./components/navbar/search-box.module.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"example": "search-box_example__LQDG5"
};


/***/ }),

/***/ "./components/navigation/navigation-button.js":
/*!****************************************************!*\
  !*** ./components/navigation/navigation-button.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navigation_button_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation-button.module.css */ "./components/navigation/navigation-button.module.css");
/* harmony import */ var _navigation_button_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_navigation_button_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button */ "./components/button.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\navigation\\navigation-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function NavigationButton(_ref) {
  let {
    href,
    selected,
    children,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["href", "selected", "children", "className"]);

  return __jsx(_button__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_navigation_button_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navButton, selected && _navigation_button_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navButtonSelected),
    href: href
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }), children);
}

/* harmony default export */ __webpack_exports__["default"] = (NavigationButton);

/***/ }),

/***/ "./components/navigation/navigation-button.module.css":
/*!************************************************************!*\
  !*** ./components/navigation/navigation-button.module.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"navButton": "navigation-button_navButton__1mAlE",
	"navButtonSelected": "navigation-button_navButtonSelected__2kIwf"
};


/***/ }),

/***/ "./components/navigation/navigation.js":
/*!*********************************************!*\
  !*** ./components/navigation/navigation.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./constants/index.js");
/* harmony import */ var _navigation_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation.module.css */ "./components/navigation/navigation.module.css");
/* harmony import */ var _navigation_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_navigation_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _navigation_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation-button */ "./components/navigation/navigation-button.js");
/* harmony import */ var _text_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../text-title */ "./components/text-title.js");
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\navigation\\navigation.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function Navigation() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  return __jsx("nav", {
    className: _navigation_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.nav,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, _constants__WEBPACK_IMPORTED_MODULE_2__["SIDENAV"].map(menu => {
    const showTitle = menu.title.length > 0;
    const selected = router.pathname === menu.path;
    return __jsx(_navigation_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: menu.key,
      notify: menu.notify,
      selected: selected,
      href: menu.path,
      className: _navigation_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.navButton,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 21
      }
    }, selected ? menu.iconSelected : menu.icon, showTitle && __jsx(_text_title__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 39
      }
    }, menu.title));
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./components/navigation/navigation.module.css":
/*!*****************************************************!*\
  !*** ./components/navigation/navigation.module.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"nav": "navigation_nav__8ntz-",
	"navButton": "navigation_navButton__3mM3q"
};


/***/ }),

/***/ "./components/photo.js":
/*!*****************************!*\
  !*** ./components/photo.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _photo_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photo.module.css */ "./components/photo.module.css");
/* harmony import */ var _photo_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_photo_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\photo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Photo({
  src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Burger_King_logo.svg/1012px-Burger_King_logo.svg.png',
  alt,
  size = 55
}) {
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()([_photo_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.photo]),
    style: {
      width: size,
      height: size
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: _photo_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.img,
    src: src,
    alt: alt,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Photo);

/***/ }),

/***/ "./components/photo.module.css":
/*!*************************************!*\
  !*** ./components/photo.module.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"photo": "photo_photo__S9hi4",
	"img": "photo_img__FbDfn"
};


/***/ }),

/***/ "./components/rest-card/min.js":
/*!*************************************!*\
  !*** ./components/rest-card/min.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icon */ "./components/icon/index.js");
/* harmony import */ var _min_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./min.module.css */ "./components/rest-card/min.module.css");
/* harmony import */ var _min_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_min_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\rest-card\\min.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Min({
  minPrice
}) {
  return __jsx("div", {
    className: _min_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.layout,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx(_icon__WEBPACK_IMPORTED_MODULE_1__["Money"], {
    style: {
      fontSize: 35
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, "Min Paket Tutar\u0131"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, "\u20BA", minPrice)), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx(_icon__WEBPACK_IMPORTED_MODULE_1__["Clock"], {
    style: {
      fontSize: 35
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, "Teslim S\xFCresi"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, minPrice, "dk")));
}

/* harmony default export */ __webpack_exports__["default"] = (Min);

/***/ }),

/***/ "./components/rest-card/min.module.css":
/*!*********************************************!*\
  !*** ./components/rest-card/min.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"layout": "min_layout__3KI9Z"
};


/***/ }),

/***/ "./components/rest-card/point-box.js":
/*!*******************************************!*\
  !*** ./components/rest-card/point-box.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point */ "./components/rest-card/point.js");
/* harmony import */ var _point_box_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./point-box.module.css */ "./components/rest-card/point-box.module.css");
/* harmony import */ var _point_box_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_point_box_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\rest-card\\point-box.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function PointBox() {
  return __jsx("div", {
    className: _point_box_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.layout,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: _point_box_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, "Restaurant Puanlar\u0131"), __jsx("div", {
    className: _point_box_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.row,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx(_point__WEBPACK_IMPORTED_MODULE_1__["default"], {
    pointName: "H\u0131z",
    point: "7,5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }), __jsx(_point__WEBPACK_IMPORTED_MODULE_1__["default"], {
    pointName: "Servis",
    point: "8,5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }), __jsx(_point__WEBPACK_IMPORTED_MODULE_1__["default"], {
    pointName: "Lezzet",
    point: "9.0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (PointBox);

/***/ }),

/***/ "./components/rest-card/point-box.module.css":
/*!***************************************************!*\
  !*** ./components/rest-card/point-box.module.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"layout": "point-box_layout__f7B18",
	"row": "point-box_row__2gij3",
	"text": "point-box_text__AKlmy"
};


/***/ }),

/***/ "./components/rest-card/point.js":
/*!***************************************!*\
  !*** ./components/rest-card/point.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _photo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../photo */ "./components/photo.js");
/* harmony import */ var _point_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./point.module.css */ "./components/rest-card/point.module.css");
/* harmony import */ var _point_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_point_module_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\rest-card\\point.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







function Point(_ref) {
  let {
    pointName,
    point
  } = _ref,
      props = _objectWithoutProperties(_ref, ["pointName", "point"]);

  return __jsx("div", {
    className: _point_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.pointCard,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, pointName), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, point));
}

/* harmony default export */ __webpack_exports__["default"] = (Point);

/***/ }),

/***/ "./components/rest-card/point.module.css":
/*!***********************************************!*\
  !*** ./components/rest-card/point.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"pointCard": "point_pointCard__2r7mq"
};


/***/ }),

/***/ "./components/rest-card/rest-card.js":
/*!*******************************************!*\
  !*** ./components/rest-card/rest-card.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _photo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../photo */ "./components/photo.js");
/* harmony import */ var _point_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./point-box */ "./components/rest-card/point-box.js");
/* harmony import */ var _min__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./min */ "./components/rest-card/min.js");
/* harmony import */ var _rest_card_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rest-card.module.css */ "./components/rest-card/rest-card.module.css");
/* harmony import */ var _rest_card_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_rest_card_module_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\rest-card\\rest-card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







function RestCard(_ref) {
  let {
    href,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["href", "children"]);

  return __jsx("div", {
    className: _rest_card_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.layout,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(_photo__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }), __jsx(_point_box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }), __jsx(_min__WEBPACK_IMPORTED_MODULE_3__["default"], {
    minPrice: "15",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (RestCard);

/***/ }),

/***/ "./components/rest-card/rest-card.module.css":
/*!***************************************************!*\
  !*** ./components/rest-card/rest-card.module.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"layout": "rest-card_layout__24wBJ"
};


/***/ }),

/***/ "./components/text-title.js":
/*!**********************************!*\
  !*** ./components/text-title.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _text_title_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text-title.module.css */ "./components/text-title.module.css");
/* harmony import */ var _text_title_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_text_title_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\text-title.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function TextTitle({
  bold = true,
  children
}) {
  return __jsx("h2", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()([_text_title_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title, bold && _text_title_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.bold]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, children);
}

/* harmony default export */ __webpack_exports__["default"] = (TextTitle);

/***/ }),

/***/ "./components/text-title.module.css":
/*!******************************************!*\
  !*** ./components/text-title.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"title": "text-title_title__24Kuo",
	"bold": "text-title_bold__2YHBM"
};


/***/ }),

/***/ "./components/theme-button.js":
/*!************************************!*\
  !*** ./components/theme-button.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ "./components/button.js");
/* harmony import */ var _theme_button_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-button.module.css */ "./components/theme-button.module.css");
/* harmony import */ var _theme_button_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_theme_button_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\theme-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function ThemeButton(_ref) {
  let {
    className,
    children,
    big = false
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "children", "big"]);

  return __jsx(_button__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_theme_button_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button, big && _theme_button_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.bigButton, className)
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }), children);
}

/* harmony default export */ __webpack_exports__["default"] = (ThemeButton);

/***/ }),

/***/ "./components/theme-button.module.css":
/*!********************************************!*\
  !*** ./components/theme-button.module.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"button": "theme-button_button__281Yx",
	"bigButton": "theme-button_bigButton__1GBS5"
};


/***/ }),

/***/ "./components/user/user.js":
/*!*********************************!*\
  !*** ./components/user/user.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.module.css */ "./components/user/user.module.css");
/* harmony import */ var _user_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_user_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\user\\user.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function User(_ref) {
  let {
    name,
    adress,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["name", "adress", "children"]);

  return __jsx("div", {
    className: _user_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.userCard,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, name), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, adress));
}

/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./components/user/user.module.css":
/*!*****************************************!*\
  !*** ./components/user/user.module.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"userCard": "user_userCard__1QPC5"
};


/***/ }),

/***/ "./constants/index.js":
/*!****************************!*\
  !*** ./constants/index.js ***!
  \****************************/
/*! exports provided: default, SIDENAV, CONTENT, ICONBAR, ADMINSIDEBAR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIDENAV", function() { return SIDENAV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENT", function() { return CONTENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICONBAR", function() { return ICONBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADMINSIDEBAR", function() { return ADMINSIDEBAR; });
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/icon */ "./components/icon/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\constants\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = ({
  MOBILE_SIZE: 700,
  TABLET_SIZE: 925
});
const SIDENAV = [{
  key: 'home',
  path: '/main',
  icon: __jsx(_components_icon__WEBPACK_IMPORTED_MODULE_0__["Home"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 15
    }
  }),
  iconSelected: __jsx(_components_icon__WEBPACK_IMPORTED_MODULE_0__["HomeFill"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 23
    }
  }),
  title: 'Ana Sayfa'
}, {
  key: 'basket',
  path: '/cart',
  icon: __jsx(_components_icon__WEBPACK_IMPORTED_MODULE_0__["Basket"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 15
    }
  }),
  iconSelected: __jsx(_components_icon__WEBPACK_IMPORTED_MODULE_0__["BasketFill"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 23
    }
  }),
  title: 'Sepetim'
}, {
  key: 'notification',
  path: '/notifications',
  icon: __jsx(_components_icon__WEBPACK_IMPORTED_MODULE_0__["Notification"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }),
  iconSelected: __jsx(_components_icon__WEBPACK_IMPORTED_MODULE_0__["NotificationFill"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 23
    }
  }),
  title: 'Bildirimler'
}, {
  key: 'profile',
  path: '/profile',
  icon: __jsx(_components_icon__WEBPACK_IMPORTED_MODULE_0__["Profile"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }),
  iconSelected: __jsx(_components_icon__WEBPACK_IMPORTED_MODULE_0__["ProfileFill"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 23
    }
  }),
  title: 'Profil'
}, {
  key: 'settings',
  path: '/settings',
  icon: __jsx(_components_icon__WEBPACK_IMPORTED_MODULE_0__["Settings"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }),
  iconSelected: __jsx(_components_icon__WEBPACK_IMPORTED_MODULE_0__["SettingsFill"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 23
    }
  }),
  title: 'Ayarlar'
}];
const CONTENT = [{
  key: 1,
  name: 'Bursa İskender',
  cont: 'acılı',
  deger: 18
}, {
  key: 2,
  name: 'Tavuk Dürüm',
  cont: 'turşu,domates,marul',
  deger: 6
}, {
  key: 3,
  name: 'Et Dürüm',
  cont: 'turşu,domates,marul',
  deger: 8
}, {
  key: 4,
  name: 'Lahmacun',
  cont: 'yeşillik ile',
  deger: 6
}];
const ICONBAR = [{
  key: 'home',
  path: '/main',
  icon: __jsx(_components_icon__WEBPACK_IMPORTED_MODULE_0__["Home"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }),
  iconSelected: __jsx(_components_icon__WEBPACK_IMPORTED_MODULE_0__["HomeFill"], {
    style: {
      color: 'var(--c-theme)'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 23
    }
  })
}, {
  key: 'basket',
  path: '/cart',
  icon: __jsx(_components_icon__WEBPACK_IMPORTED_MODULE_0__["Basket"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }),
  iconSelected: __jsx(_components_icon__WEBPACK_IMPORTED_MODULE_0__["BasketFill"], {
    style: {
      color: 'var(--c-theme)'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 23
    }
  })
}, {
  key: 'profile',
  path: '/profile',
  icon: __jsx(_components_icon__WEBPACK_IMPORTED_MODULE_0__["Profile"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }),
  iconSelected: __jsx(_components_icon__WEBPACK_IMPORTED_MODULE_0__["ProfileFill"], {
    style: {
      color: 'var(--c-theme)'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 23
    }
  })
}, {
  key: 'settings',
  path: '/settings',
  icon: __jsx(_components_icon__WEBPACK_IMPORTED_MODULE_0__["Settings"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }),
  iconSelected: __jsx(_components_icon__WEBPACK_IMPORTED_MODULE_0__["SettingsFill"], {
    style: {
      color: 'var(--c-theme)'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 23
    }
  })
}];
const ADMINSIDEBAR = [{
  key: 'home',
  path: '/adminHome',
  icon: __jsx(_components_icon__WEBPACK_IMPORTED_MODULE_0__["Home"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 15
    }
  }),
  iconSelected: __jsx(_components_icon__WEBPACK_IMPORTED_MODULE_0__["HomeFill"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 23
    }
  }),
  title: 'Ana Sayfa'
}, {
  key: 'products',
  path: '/adminProduct',
  icon: __jsx(_components_icon__WEBPACK_IMPORTED_MODULE_0__["Products"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 15
    }
  }),
  iconSelected: __jsx(_components_icon__WEBPACK_IMPORTED_MODULE_0__["ProductsFill"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 23
    }
  }),
  title: 'Ürünler'
}, {
  key: 'basket',
  path: '/adminCart',
  icon: __jsx(_components_icon__WEBPACK_IMPORTED_MODULE_0__["Basket"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 15
    }
  }),
  iconSelected: __jsx(_components_icon__WEBPACK_IMPORTED_MODULE_0__["BasketFill"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 23
    }
  }),
  title: 'Siparişler'
}, {
  key: 'notification',
  path: '/adminComment',
  icon: __jsx(_components_icon__WEBPACK_IMPORTED_MODULE_0__["Notification"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 15
    }
  }),
  iconSelected: __jsx(_components_icon__WEBPACK_IMPORTED_MODULE_0__["NotificationFill"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 23
    }
  }),
  title: 'Yorumlar'
}];

/***/ }),

/***/ "./hooks/useWindowSize.js":
/*!********************************!*\
  !*** ./hooks/useWindowSize.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const {
    0: windowSize,
    1: setWindowSize
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    width: undefined,
    height: undefined
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    } // Add event listener


    window.addEventListener('resize', handleResize); // Call handler right away so state gets updated with initial window size

    handleResize(); // Remove event listener on cleanup

    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

/* harmony default export */ __webpack_exports__["default"] = (useWindowSize);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }

  return _react.default.cloneElement(child, childProps);
}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

function tryParseRelativeUrl(url) {
  try {
    return (0, _parseRelativeUrl.parseRelativeUrl)(url);
  } catch (err) {
    if (true) {
      setTimeout(() => {
        throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
      }, 0);
    }

    return null;
  }
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, options);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as);
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return false;
    let {
      pathname,
      searchParams
    } = parsed;
    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options;

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(cleanedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      const {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo);

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), as, __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return;
    const {
      pathname
    } = parsed; // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/menu.js":
/*!***********************!*\
  !*** ./pages/menu.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/layout */ "./components/layout/layout.js");
/* harmony import */ var _components_menu_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/menu-content */ "./components/menu-content.js");
/* harmony import */ var _components_rest_card_rest_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/rest-card/rest-card */ "./components/rest-card/rest-card.js");
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\pages\\menu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function MenuPage() {
  return __jsx(_components_layout_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(_components_rest_card_rest_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }), __jsx(_components_menu_content__WEBPACK_IMPORTED_MODULE_2__["default"], {
    tableName: "Kebap \xC7e\u015Fitleri",
    foodName: "Bursa \u0130skender ",
    foodContent: "\xD6zel sos, yo\u011Furt, so\u011Fan, k\u0131v\u0131rc\u0131k marul, domates, salata",
    price: "25",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }), __jsx(_components_menu_content__WEBPACK_IMPORTED_MODULE_2__["default"], {
    tableName: "Salata \xC7e\u015Fitleri",
    foodName: "Mevsim Salata",
    foodContent: "Havu\xE7, k\u0131v\u0131rc\u0131k marul, domates, biber, iste\u011Fe g\xF6re so\u011Fan",
    price: "10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MenuPage);

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29sL2NvbC1leHRyYS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbC9jb2wtZXh0cmEubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbC9jb2wtbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbC9jb2wtbWFpbi5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29sL2NvbC1zaWRlYmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29sL2NvbC1zaWRlYmFyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29uL0FkZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb24vQWRyZXNzQWRkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9BcnJvd0JvdHRvbS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb24vQmFza2V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9CYXNrZXRGaWxsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9DYWxlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb24vQ2xvY2suanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29uL0NvdXJpZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29uL0Vtb2ppLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9FeHBsb3JlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9FeHBsb3JlRmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb24vR2lmLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9Ib21lLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9Ib21lRmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb24vTGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb24vTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb24vTGlzdEZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29uL01hcmsuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29uL01hcmtGaWxsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9NZWRpYS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb24vTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb24vTWVzc2FnZUZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29uL01vbmV5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9Nb3JlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9Ob3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29uL05vdGlmaWNhdGlvbkZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29uL1Byb2R1Y3RzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9Qcm9kdWN0c0ZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29uL1Byb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29uL1Byb2ZpbGVGaWxsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9RdWVzdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb24vUmV0d2VldC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb24vU2VhcmNoLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9TZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb24vU2V0dGluZ3NGaWxsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9TaGFyZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb24vVGltZWxpbmVQcm9wLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9Ud2l0dGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb24vxLBjb25Db21tZW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbmJhci9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29uYmFyL2J1dHRvbi5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbmJhci9pY29uYmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbmJhci9pY29uYmFyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29uYmFyL25hdmlnYXRpb24tYnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbmJhci9uYXZpZ2F0aW9uLWJ1dHRvbi5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lbnUtY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lbnUtY29udGVudC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9iaWxlLW5hdmJhci9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2JpbGUtbmF2YmFyL3NlYXJjaC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmF2YmFyL2xvZ28uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZiYXIvbG9nby5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmJhci9uYXZiYXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmJhci9zZWFyY2gtYm94LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmF2YmFyL3NlYXJjaC1ib3gubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi1idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24tYnV0dG9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bob3RvLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGhvdG8ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Jlc3QtY2FyZC9taW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yZXN0LWNhcmQvbWluLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yZXN0LWNhcmQvcG9pbnQtYm94LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcmVzdC1jYXJkL3BvaW50LWJveC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcmVzdC1jYXJkL3BvaW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcmVzdC1jYXJkL3BvaW50Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yZXN0LWNhcmQvcmVzdC1jYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcmVzdC1jYXJkL3Jlc3QtY2FyZC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGV4dC10aXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RleHQtdGl0bGUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RoZW1lLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RoZW1lLWJ1dHRvbi5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdXNlci91c2VyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdXNlci91c2VyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZVdpbmRvd1NpemUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL21lbnUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiXSwibmFtZXMiOlsiTGlua0J1dHRvbiIsImhyZWYiLCJjaGlsZHJlbiIsInByb3BzIiwiQmFzZUJ1dHRvbiIsIkJ1dHRvbiIsImZ1bGwiLCJjbGFzc05hbWUiLCJDb21wIiwiY24iLCJzdHlsZXMiLCJidXR0b24iLCJmdWxsV2lkdGgiLCJFeHRyYSIsImxheW91dCIsIk1haW4iLCJtYWluIiwiU2lkZWJhciIsInNpZGViYXIiLCJTdmdBZGQiLCJTdmdBZHJlc3NBZGQiLCJTdmdBcnJvd0JvdHRvbSIsIlN2Z0Jhc2tldCIsIlN2Z0Jhc2tldEZpbGwiLCJTdmdDYWxlbmRlciIsIlN2Z0Nsb2NrIiwiU3ZnQ291cmllciIsIlN2Z0Vtb2ppIiwiU3ZnRXhwbG9yZSIsIlN2Z0V4cGxvcmVGaWxsIiwiU3ZnR2lmIiwiU3ZnSG9tZSIsIlN2Z0hvbWVGaWxsIiwiU3ZnTGlrZSIsIlN2Z0xpc3QiLCJTdmdMaXN0RmlsbCIsIlN2Z01hcmsiLCJTdmdNYXJrRmlsbCIsIlN2Z01lZGlhIiwiU3ZnTWVzc2FnZSIsIlN2Z01lc3NhZ2VGaWxsIiwiU3ZnTW9uZXkiLCJTdmdNb3JlIiwiU3ZnTm90aWZpY2F0aW9uIiwiU3ZnTm90aWZpY2F0aW9uRmlsbCIsIlN2Z1Byb2R1Y3RzIiwiU3ZnUHJvZHVjdHNGaWxsIiwiU3ZnUHJvZmlsZSIsIlN2Z1Byb2ZpbGVGaWxsIiwiU3ZnUXVlc3Rpb24iLCJTdmdSZXR3ZWV0IiwiU3ZnU2VhcmNoIiwiU3ZnU2V0dGluZ3MiLCJTdmdTZXR0aW5nc0ZpbGwiLCJTdmdTaGFyZSIsIlN2Z1RpbWVsaW5lUHJvcCIsIlN2Z1R3aXR0ZXIiLCJTdmfEsGNvbkNvbW1lbnQiLCJJY29uTmF2Iiwicm91dGVyIiwidXNlUm91dGVyIiwiaWNvbmJhciIsIklDT05CQVIiLCJtYXAiLCJtZW51Iiwic2VsZWN0ZWQiLCJwYXRobmFtZSIsInBhdGgiLCJrZXkiLCJpY29uIiwiaWNvblNlbGVjdGVkIiwiTmF2aWdhdGlvbkJ1dHRvbiIsIm5hdkJ1dHRvbiIsIm5hdkJ1dHRvblNlbGVjdGVkIiwiTGF5b3V0Iiwic2l6ZSIsInVzZVdpbmRvd1NpemUiLCJ3aWR0aCIsIkNPTlNUIiwiTU9CSUxFX1NJWkUiLCJUQUJMRVRfU0laRSIsIk1lbnVDb250ZW50IiwidGFibGVOYW1lIiwiZm9vZE5hbWUiLCJmb29kQ29udGVudCIsInByaWNlIiwidGFibGUiLCJ0YWJsZVJvdyIsInRhYmxlSGVhZCIsInJvdyIsInRhYmxlRGF0YSIsImZuYW1lIiwiaW5wdXQiLCJ0ZXh0SGVhZCIsInNtYWxsIiwiTmF2QmFyIiwic2VhcmNoIiwibG9nbyIsImJveCIsIkxvZ28iLCJpbWFnZSIsIk5hdmJhciIsImdyaWQiLCJTZWFyY2hCb3giLCJleGFtcGxlIiwiTmF2aWdhdGlvbiIsIm5hdiIsIlNJREVOQVYiLCJzaG93VGl0bGUiLCJ0aXRsZSIsImxlbmd0aCIsIm5vdGlmeSIsIlBob3RvIiwic3JjIiwiYWx0IiwicGhvdG8iLCJoZWlnaHQiLCJpbWciLCJNaW4iLCJtaW5QcmljZSIsImZvbnRTaXplIiwiUG9pbnRCb3giLCJ0ZXh0IiwiUG9pbnQiLCJwb2ludE5hbWUiLCJwb2ludCIsInBvaW50Q2FyZCIsIlJlc3RDYXJkIiwiVGV4dFRpdGxlIiwiYm9sZCIsIlRoZW1lQnV0dG9uIiwiYmlnIiwiYmlnQnV0dG9uIiwiVXNlciIsIm5hbWUiLCJhZHJlc3MiLCJ1c2VyQ2FyZCIsIkNPTlRFTlQiLCJjb250IiwiZGVnZXIiLCJjb2xvciIsIkFETUlOU0lERUJBUiIsIndpbmRvd1NpemUiLCJzZXRXaW5kb3dTaXplIiwidXNlU3RhdGUiLCJ1bmRlZmluZWQiLCJ1c2VFZmZlY3QiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsImNvbnNvbGUiLCJlcnIiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImhhc1dhcm5lZCIsIlJlYWN0IiwicCIsInJlc29sdmVkSHJlZiIsImNoaWxkRWxtIiwiaXNQcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRQcm9wcyIsInJlZiIsImVsIiwic2V0Q2hpbGRFbG0iLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsIndhcm4iLCJQcm9wVHlwZXMiLCJyZXF1aXJlIiwiZXhhY3QiLCJMaW5rIiwic2hhbGxvdyIsInBhc3NIcmVmIiwidmFsdWUiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJQQUdFX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhZGRCYXNlUGF0aCIsInJlc29sdmVIcmVmIiwic2V0VGltZW91dCIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwic3RhdGUiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsIl9fTkVYVF9EQVRBX18iLCJ1cGRhdGUiLCJtb2QiLCJkYXRhIiwibmV3RGF0YSIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwib3B0aW9ucyIsInByZXBhcmVVcmxBcyIsImlzTG9jYWxVUkwiLCJTVCIsInBlcmZvcm1hbmNlIiwiY2xlYW5lZEFzIiwiZGVsQmFzZVBhdGgiLCJwYXJzZWQiLCJ0cnlQYXJzZVJlbGF0aXZlVXJsIiwibWV0aG9kIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiYXBwQ29tcCIsImNoYW5nZVN0YXRlIiwiX19OIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJlcnJvciIsImNhY2hlZFJvdXRlSW5mbyIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJQcm9taXNlIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsIlRFU1RfUk9VVEUiLCJEVU1NWV9CQVNFIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwic2VhcmNoUGFyYW1zIiwiQXJyYXkiLCJyZXN1bHQiLCJpdGVtIiwic2VhcmNoUGFyYW1zTGlzdCIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsIm9wdGlvbmFsIiwicmVwZWF0Iiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwic2VnbWVudCIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsImlzTmFOIiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIk1lbnVQYWdlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsd0U7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNBLFVBQVQsT0FBa0Q7QUFBQSxNQUE5QjtBQUFFQyxRQUFGO0FBQVFDO0FBQVIsR0FBOEI7QUFBQSxNQUFUQyxLQUFTOztBQUM5QyxTQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVGLElBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLHdCQUFPRSxLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBZUQsUUFBZixDQURKLENBREo7QUFLSDs7QUFFRCxTQUFTRSxVQUFULFFBQTRDO0FBQUEsTUFBeEI7QUFBRUY7QUFBRixHQUF3QjtBQUFBLE1BQVRDLEtBQVM7O0FBQ3hDLFNBQU8sNkJBQVlBLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFvQkQsUUFBcEIsQ0FBUDtBQUNIOztBQUVELFNBQVNHLE1BQVQsUUFBaUU7QUFBQSxNQUFqRDtBQUFFQyxRQUFJLEdBQUcsS0FBVDtBQUFnQkosWUFBaEI7QUFBMEJLO0FBQTFCLEdBQWlEO0FBQUEsTUFBVEosS0FBUzs7QUFDN0QsUUFBTUssSUFBSSxHQUFHTCxLQUFLLENBQUNGLElBQU4sR0FBYUQsVUFBYixHQUEwQkksVUFBdkM7QUFDQSxTQUNJLE1BQUMsSUFBRDtBQUNJLGFBQVMsRUFBRUssaURBQUUsQ0FBQ0MseURBQU0sQ0FBQ0MsTUFBUixFQUFnQkwsSUFBSSxJQUFJSSx5REFBTSxDQUFDRSxTQUEvQixFQUEwQ0wsU0FBMUM7QUFEakIsS0FFUUosS0FGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSUtELFFBSkwsQ0FESjtBQVFIOztBQUVjRyxxRUFBZixFOzs7Ozs7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUVBOztBQUVBLFNBQVNRLEtBQVQsQ0FBZTtBQUFFWDtBQUFGLENBQWYsRUFBNkI7QUFDekIsU0FBTztBQUFLLGFBQVMsRUFBRU8saURBQUUsQ0FBQyxDQUFDQyw0REFBTSxDQUFDSSxNQUFSLENBQUQsQ0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQ1osUUFBdEMsQ0FBUDtBQUNIOztBQUNjVyxvRUFBZixFOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUVBOztBQUVBLFNBQVNFLElBQVQsQ0FBYztBQUFFYjtBQUFGLENBQWQsRUFBNEI7QUFDeEIsU0FBTztBQUFLLGFBQVMsRUFBRU8saURBQUUsQ0FBQyxDQUFDQywyREFBTSxDQUFDTSxJQUFSLENBQUQsQ0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFvQ2QsUUFBcEMsQ0FBUDtBQUNIOztBQUNjYSxtRUFBZixFOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNFLE9BQVQsQ0FBaUI7QUFBRWY7QUFBRixDQUFqQixFQUErQjtBQUMzQixTQUNJO0FBQUssYUFBUyxFQUFFTyxpREFBRSxDQUFDLENBQUNDLDhEQUFNLENBQUNRLE9BQVIsQ0FBRCxDQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSSxNQUFDLHFEQUFEO0FBQWEsT0FBRyxNQUFoQjtBQUFpQixRQUFJLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBRkosRUFNSSxNQUFDLGtEQUFEO0FBQ0ksUUFBSSxFQUFDLGNBRFQ7QUFFSSxVQUFNLEVBQUMsK0NBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5KLENBREo7QUFhSDs7QUFDY0Qsc0VBQWYsRTs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBOztBQUVBLFNBQVNFLE1BQVQsQ0FBZ0JoQixLQUFoQixFQUF1QjtBQUNuQixTQUNJO0FBQUssV0FBTyxFQUFDLHFCQUFiO0FBQW1DLFNBQUssRUFBQyxLQUF6QztBQUErQyxVQUFNLEVBQUM7QUFBdEQsS0FBZ0VBLEtBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDSTtBQUNJLEtBQUMsRUFBQyxnSkFETjtBQUVJLHFCQUFjLFNBRmxCO0FBR0ksYUFBUyxFQUFDLHNCQUhkO0FBSUksc0JBQWUsU0FKbkI7QUFLSSxRQUFJLEVBQUMsU0FMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFRSTtBQUNJLEtBQUMsRUFBQyw2TEFETjtBQUVJLHFCQUFjLFNBRmxCO0FBR0ksUUFBSSxFQUFDLE1BSFQ7QUFJSSxXQUFPLEVBQUUsR0FKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkosRUFjSTtBQUNJLEtBQUMsRUFBQyxvVEFETjtBQUVJLHFCQUFjLFNBRmxCO0FBR0ksUUFBSSxFQUFDLE1BSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRKLENBREo7QUFzQkg7O0FBRWNnQixxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTs7QUFFQSxTQUFTQyxZQUFULENBQXNCakIsS0FBdEIsRUFBNkI7QUFDekIsU0FDSTtBQUFLLFVBQU0sRUFBQyxLQUFaO0FBQWtCLFdBQU8sRUFBQyxXQUExQjtBQUFzQyxTQUFLLEVBQUM7QUFBNUMsS0FBc0RBLEtBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDSTtBQUFNLEtBQUMsRUFBQyxpTkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFNLEtBQUMsRUFBQyx5U0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSTtBQUFNLEtBQUMsRUFBQyw0REFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosRUFJSTtBQUFNLEtBQUMsRUFBQywwQ0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosQ0FESjtBQVFIOztBQUVjaUIsMkVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTs7QUFFQSxTQUFTQyxjQUFULENBQXdCbEIsS0FBeEIsRUFBK0I7QUFDM0IsU0FDSTtBQUNJLFNBQUssRUFBQyxLQURWO0FBRUksVUFBTSxFQUFDLEtBRlg7QUFHSSxXQUFPLEVBQUMsV0FIWjtBQUlJLFFBQUksRUFBQztBQUpULEtBS1FBLEtBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU9JO0FBQ0ksS0FBQyxFQUFDLHdJQUROO0FBRUksUUFBSSxFQUFDLGNBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBKLENBREo7QUFjSDs7QUFFY2tCLDZFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBOztBQUVBLFNBQVNDLFNBQVQsQ0FBbUJuQixLQUFuQixFQUEwQjtBQUN0QixTQUNJO0FBQ0ksUUFBSSxFQUFDLGNBRFQ7QUFFSSxXQUFPLEVBQUMscUJBRlo7QUFHSSxTQUFLLEVBQUMsS0FIVjtBQUlJLFVBQU0sRUFBQztBQUpYLEtBS1FBLEtBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU9JO0FBQU0sS0FBQyxFQUFDLHNsQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEosRUFRSTtBQUFNLEtBQUMsRUFBQyxnVkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkosQ0FESjtBQVlIOztBQUVjbUIsd0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7O0FBRUEsU0FBU0MsYUFBVCxDQUF1QnBCLEtBQXZCLEVBQThCO0FBQzFCLFNBQ0k7QUFBSyxTQUFLLEVBQUMsS0FBWDtBQUFpQixVQUFNLEVBQUMsS0FBeEI7QUFBOEIsV0FBTyxFQUFDO0FBQXRDLEtBQWdFQSxLQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQ0k7QUFBRyxRQUFJLEVBQUMsTUFBUjtBQUFlLFNBQUssRUFBQyw0QkFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQ0ksS0FBQyxFQUFDLDhuQkFETjtBQUVJLHFCQUFjLFNBRmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLENBREo7QUFVSDs7QUFFY29CLDRFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7O0FBRUEsU0FBU0MsV0FBVCxDQUFxQnJCLEtBQXJCLEVBQTRCO0FBQ3hCLFNBQ0k7QUFDSSxTQUFLLEVBQUMsS0FEVjtBQUVJLFVBQU0sRUFBQyxLQUZYO0FBR0ksV0FBTyxFQUFDLFdBSFo7QUFJSSxRQUFJLEVBQUM7QUFKVCxLQUtRQSxLQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFPSTtBQUFHLFlBQVEsRUFBQywyQkFBWjtBQUF3QyxRQUFJLEVBQUMsY0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU0sS0FBQyxFQUFDLDBmQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQU0sS0FBQyxFQUFDLHlMQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJO0FBQU0sS0FBQyxFQUFDLDRHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixDQVBKLEVBWUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVUsTUFBRSxFQUFDLHFCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFNLFFBQUksRUFBQyxNQUFYO0FBQWtCLEtBQUMsRUFBQyxlQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixDQVpKLENBREo7QUFvQkg7O0FBRWNxQiwwRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTs7QUFFQSxTQUFTQyxRQUFULENBQWtCdEIsS0FBbEIsRUFBeUI7QUFDckIsU0FDSTtBQUNJLFNBQUssRUFBQyxLQURWO0FBRUksVUFBTSxFQUFDLEtBRlg7QUFHSSxXQUFPLEVBQUMsV0FIWjtBQUlJLFFBQUksRUFBQztBQUpULEtBS1FBLEtBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU9JO0FBQ0ksS0FBQyxFQUFDLDBFQUROO0FBRUksUUFBSSxFQUFDLGdDQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixFQVdJO0FBQ0ksS0FBQyxFQUFDLHNIQUROO0FBRUksUUFBSSxFQUFDLGdDQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYSixFQWVJO0FBQ0ksS0FBQyxFQUFDLHdJQUROO0FBRUksUUFBSSxFQUFDLGdDQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFmSixFQW1CSTtBQUNJLEtBQUMsRUFBQyx3SUFETjtBQUVJLFFBQUksRUFBQyxnQ0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkJKLEVBdUJJO0FBQ0ksS0FBQyxFQUFDLG1OQUROO0FBRUksUUFBSSxFQUFDLGdDQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF2QkosRUEyQkk7QUFDSSxLQUFDLEVBQUMsaUtBRE47QUFFSSxRQUFJLEVBQUMsZ0NBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNCSixFQStCSTtBQUNJLEtBQUMsRUFBQyw2R0FETjtBQUVJLFFBQUksRUFBQyxnQ0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBL0JKLEVBbUNJO0FBQ0ksS0FBQyxFQUFDLG1JQUROO0FBRUksUUFBSSxFQUFDLGdDQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuQ0osRUF1Q0k7QUFDSSxLQUFDLEVBQUMsK0dBRE47QUFFSSxRQUFJLEVBQUMsZ0NBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZDSixFQTJDSTtBQUNJLEtBQUMsRUFBQyxzREFETjtBQUVJLFFBQUksRUFBQyxnQ0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0NKLEVBK0NJO0FBQ0ksS0FBQyxFQUFDLHNJQUROO0FBRUksUUFBSSxFQUFDLGlDQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEvQ0osRUFtREk7QUFDSSxLQUFDLEVBQUMsdUlBRE47QUFFSSxRQUFJLEVBQUMsaUNBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5ESixFQXVESTtBQUNJLEtBQUMsRUFBQyx1SUFETjtBQUVJLFFBQUksRUFBQyxpQ0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdkRKLEVBMkRJO0FBQ0ksS0FBQyxFQUFDLHNJQUROO0FBRUksUUFBSSxFQUFDLGlDQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEzREosRUErREk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQ0ksTUFBRSxFQUFDLDBCQURQO0FBRUksTUFBRSxFQUFFLEVBRlI7QUFHSSxNQUFFLEVBQUUsS0FIUjtBQUlJLE1BQUUsRUFBRSxFQUpSO0FBS0ksTUFBRSxFQUFFLENBQUMsS0FMVDtBQU1JLGlCQUFhLEVBQUMsZ0JBTmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRSTtBQUFNLGFBQVMsRUFBQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkosRUFTSTtBQUFNLFVBQU0sRUFBRSxDQUFkO0FBQWlCLGFBQVMsRUFBQyxTQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEosQ0FESixFQVlJO0FBQ0ksTUFBRSxFQUFDLDBCQURQO0FBRUksTUFBRSxFQUFFLEVBRlI7QUFHSSxNQUFFLEVBQUUsQ0FBQyxJQUhUO0FBSUksTUFBRSxFQUFFLEVBSlI7QUFLSSxNQUFFLEVBQUUsTUFMUjtBQU1JLGlCQUFhLEVBQUMsZ0JBTmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRSTtBQUFNLGFBQVMsRUFBQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkosRUFTSTtBQUFNLFVBQU0sRUFBRSxDQUFkO0FBQWlCLGFBQVMsRUFBQyxTQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEosQ0FaSixFQXVCSTtBQUNJLE1BQUUsRUFBQywwQkFEUDtBQUVJLE1BQUUsRUFBRSxLQUZSO0FBR0ksTUFBRSxFQUFFLEtBSFI7QUFJSSxNQUFFLEVBQUUsTUFKUjtBQUtJLE1BQUUsRUFBRSxNQUxSO0FBTUksaUJBQWEsRUFBQyxnQkFObEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFJO0FBQU0sYUFBUyxFQUFDLFNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSSixFQVNJO0FBQU0sVUFBTSxFQUFFLENBQWQ7QUFBaUIsYUFBUyxFQUFDLFNBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFUSixDQXZCSixFQWtDSTtBQUNJLE1BQUUsRUFBQywwQkFEUDtBQUVJLE1BQUUsRUFBRSxNQUZSO0FBR0ksTUFBRSxFQUFFLE1BSFI7QUFJSSxNQUFFLEVBQUUsS0FKUjtBQUtJLE1BQUUsRUFBRSxLQUxSO0FBTUksaUJBQWEsRUFBQyxnQkFObEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFJO0FBQU0sVUFBTSxFQUFFLENBQWQ7QUFBaUIsYUFBUyxFQUFDLFNBQTNCO0FBQXFDLGVBQVcsRUFBRSxDQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkosRUFTSTtBQUFNLFVBQU0sRUFBRSxDQUFkO0FBQWlCLGFBQVMsRUFBQyxTQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEosQ0FsQ0osRUE2Q0k7QUFDSSxNQUFFLEVBQUMsMEJBRFA7QUFFSSxNQUFFLEVBQUUsTUFGUjtBQUdJLE1BQUUsRUFBRSxNQUhSO0FBSUksTUFBRSxFQUFFLE1BSlI7QUFLSSxNQUFFLEVBQUUsS0FMUjtBQU1JLGlCQUFhLEVBQUMsZ0JBTmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRSTtBQUFNLFVBQU0sRUFBRSxDQUFkO0FBQWlCLGFBQVMsRUFBQyxTQUEzQjtBQUFxQyxlQUFXLEVBQUUsQ0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJKLEVBU0k7QUFBTSxVQUFNLEVBQUUsQ0FBZDtBQUFpQixhQUFTLEVBQUMsU0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRKLENBN0NKLEVBd0RJO0FBQ0ksTUFBRSxFQUFDLDBCQURQO0FBRUksTUFBRSxFQUFFLEVBRlI7QUFHSSxNQUFFLEVBQUUsS0FIUjtBQUlJLE1BQUUsRUFBRSxFQUpSO0FBS0ksTUFBRSxFQUFFLE1BTFI7QUFNSSxpQkFBYSxFQUFDLGdCQU5sQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUk7QUFBTSxhQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJKLEVBU0k7QUFBTSxVQUFNLEVBQUUsQ0FBZDtBQUFpQixhQUFTLEVBQUMsU0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRKLENBeERKLEVBbUVJO0FBQ0ksTUFBRSxFQUFDLDBCQURQO0FBRUksTUFBRSxFQUFFLE1BRlI7QUFHSSxNQUFFLEVBQUUsTUFIUjtBQUlJLE1BQUUsRUFBRSxLQUpSO0FBS0ksTUFBRSxFQUFFLE1BTFI7QUFNSSxpQkFBYSxFQUFDLGdCQU5sQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUk7QUFBTSxhQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJKLEVBU0k7QUFBTSxVQUFNLEVBQUUsQ0FBZDtBQUFpQixhQUFTLEVBQUMsU0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRKLENBbkVKLEVBOEVJO0FBQ0ksTUFBRSxFQUFDLDBCQURQO0FBRUksTUFBRSxFQUFFLEtBRlI7QUFHSSxNQUFFLEVBQUUsTUFIUjtBQUlJLE1BQUUsRUFBRSxNQUpSO0FBS0ksTUFBRSxFQUFFLEtBTFI7QUFNSSxpQkFBYSxFQUFDLGdCQU5sQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUk7QUFBTSxhQUFTLEVBQUMsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJKLEVBU0k7QUFBTSxVQUFNLEVBQUUsS0FBZDtBQUFxQixhQUFTLEVBQUMsU0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRKLEVBVUk7QUFBTSxVQUFNLEVBQUUsS0FBZDtBQUFxQixhQUFTLEVBQUMsU0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZKLEVBV0k7QUFBTSxVQUFNLEVBQUUsQ0FBZDtBQUFpQixhQUFTLEVBQUMsU0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhKLENBOUVKLEVBMkZJO0FBQ0ksTUFBRSxFQUFDLDBCQURQO0FBRUksTUFBRSxFQUFFLEVBRlI7QUFHSSxNQUFFLEVBQUUsTUFIUjtBQUlJLE1BQUUsRUFBRSxFQUpSO0FBS0ksTUFBRSxFQUFFLE1BTFI7QUFNSSxpQkFBYSxFQUFDLGdCQU5sQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUk7QUFBTSxhQUFTLEVBQUMsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJKLEVBU0k7QUFBTSxVQUFNLEVBQUUsQ0FBZDtBQUFpQixhQUFTLEVBQUMsU0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRKLENBM0ZKLEVBc0dJO0FBQ0ksTUFB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aUIsbUJBQU8sQ0FBQyxtRUFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTc0csUUFBVCxHQUFvQjtBQUNoQixTQUNJLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyxnRUFBRDtBQUNJLGFBQVMsRUFBQyx5QkFEZDtBQUVJLFlBQVEsRUFBQyxzQkFGYjtBQUdJLGVBQVcsRUFBQyxzRkFIaEI7QUFJSSxTQUFLLEVBQUMsSUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFRSSxNQUFDLGdFQUFEO0FBQ0ksYUFBUyxFQUFDLDBCQURkO0FBRUksWUFBUSxFQUFDLGVBRmI7QUFHSSxlQUFXLEVBQUMseUZBSGhCO0FBSUksU0FBSyxFQUFDLElBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJKLENBREo7QUFpQkg7O0FBRWNBLHVFQUFmLEU7Ozs7Ozs7Ozs7O0FDekJBLHVDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDIiwiZmlsZSI6InBhZ2VzL21lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL21lbnUuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2J1dHRvbi5tb2R1bGUuY3NzJ1xyXG5cclxuZnVuY3Rpb24gTGlua0J1dHRvbih7IGhyZWYsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxyXG4gICAgICAgICAgICA8YSB7Li4ucHJvcHN9PntjaGlsZHJlbn08L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBCYXNlQnV0dG9uKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0pIHtcclxuICAgIHJldHVybiA8YnV0dG9uIHsuLi5wcm9wc30+e2NoaWxkcmVufTwvYnV0dG9uPlxyXG59XHJcblxyXG5mdW5jdGlvbiBCdXR0b24oeyBmdWxsID0gZmFsc2UsIGNoaWxkcmVuLCBjbGFzc05hbWUsIC4uLnByb3BzIH0pIHtcclxuICAgIGNvbnN0IENvbXAgPSBwcm9wcy5ocmVmID8gTGlua0J1dHRvbiA6IEJhc2VCdXR0b25cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbXBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihzdHlsZXMuYnV0dG9uLCBmdWxsICYmIHN0eWxlcy5mdWxsV2lkdGgsIGNsYXNzTmFtZSl9XHJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0NvbXA+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJidXR0b25cIjogXCJidXR0b25fYnV0dG9uX18zcE9zWVwiLFxuXHRcImZ1bGxXaWR0aFwiOiBcImJ1dHRvbl9mdWxsV2lkdGhfXzFzclhBXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NvbC1leHRyYS5tb2R1bGUuY3NzJ1xyXG5cclxuZnVuY3Rpb24gRXh0cmEoeyBjaGlsZHJlbiB9KSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NuKFtzdHlsZXMubGF5b3V0XSl9PntjaGlsZHJlbn08L2Rpdj5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBFeHRyYVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsYXlvdXRcIjogXCJjb2wtZXh0cmFfbGF5b3V0X18zUDNFQ1wiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jb2wtbWFpbi5tb2R1bGUuY3NzJ1xyXG5cclxuZnVuY3Rpb24gTWFpbih7IGNoaWxkcmVuIH0pIHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y24oW3N0eWxlcy5tYWluXSl9PntjaGlsZHJlbn08L2Rpdj5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNYWluXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1haW5cIjogXCJjb2wtbWFpbl9tYWluX18zSWd1MFwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uJ1xyXG5pbXBvcnQgVGhlbWVCdXR0b24gZnJvbSAnLi4vdGhlbWUtYnV0dG9uJ1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi91c2VyL3VzZXInXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY29sLXNpZGViYXIubW9kdWxlLmNzcydcclxuXHJcbmZ1bmN0aW9uIFNpZGViYXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihbc3R5bGVzLnNpZGViYXJdKX0+XHJcbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uIC8+XHJcbiAgICAgICAgICAgIDxUaGVtZUJ1dHRvbiBiaWcgZnVsbD5cclxuICAgICAgICAgICAgICAgIMOHxLFrxLHFnyBZYXBcclxuICAgICAgICAgICAgPC9UaGVtZUJ1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDxVc2VyXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiVGFuc3Ugw4dhbVwiXHJcbiAgICAgICAgICAgICAgICBhZHJlc3M9XCJBa8WfZW1zZXR0aW4gTWggU3VsdGFuYmV5bGkvxLBzdGFuYnVsXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNpZGViYXJcIjogXCJjb2wtc2lkZWJhcl9zaWRlYmFyX18yTHBjOVwiXG59O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z0FkZChwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCA0NTUuNDMxIDQ1NS40MzFcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHsuLi5wcm9wc30+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNNDA1LjQ5MyA0MTIuNzY0Yy02OS42ODkgNTYuODg5LTI4Ny4yODkgNTYuODg5LTM1NS41NTYgMC02OS42ODktNTYuODg5LTYyLjU3OC0zMDAuMDg5IDAtMzY0LjA4OXMyOTIuOTc4LTY0IDM1NS41NTYgMCA2OS42ODkgMzA3LjIwMSAwIDM2NC4wODl6XCJcbiAgICAgICAgICAgICAgICBkYXRhLW9yaWdpbmFsPVwiIzhEQzY0MFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWRkX3N2Z19fYWN0aXZlLXBhdGhcIlxuICAgICAgICAgICAgICAgIGRhdGEtb2xkX2NvbG9yPVwiIzhEQzY0MFwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNjMTIwMjBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0yMjkuMTM4IDMxMy4yMDljLTYyLjU3OCA0OS43NzgtMTMyLjI2NyA3NS4zNzgtMTk3LjY4OSA3Ni44LTQ4LjM1Ni04Mi40ODktMzguNC0yODMuMDIyIDE4LjQ4OS0zNDEuMzMzIDUxLjItNTIuNjIyIDIxMS45MTEtNjIuNTc4IDMwNC4zNTYtMjkuODY3IDIyLjc1NSA5My44NjctMjQuMTc4IDIxMy4zMzMtMTI1LjE1NiAyOTQuNHpcIlxuICAgICAgICAgICAgICAgIGRhdGEtb3JpZ2luYWw9XCIjRkZGRkZGXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI2ZmZlwiXG4gICAgICAgICAgICAgICAgb3BhY2l0eT17MC4yfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0zNjIuODI3IDIyNy44NzZhMjUuNDk0IDI1LjQ5NCAwIDAxLTI1LjYgMjUuNmgtODUuMzMzdjg1LjMzM2EyNS40OTQgMjUuNDk0IDAgMDEtMjUuNiAyNS42IDI1LjQ5NCAyNS40OTQgMCAwMS0yNS42LTI1LjZ2LTg1LjMzM0gxMTUuMzZhMjUuNDk0IDI1LjQ5NCAwIDAxLTI1LjYtMjUuNiAyNS40OTQgMjUuNDk0IDAgMDEyNS42LTI1LjZoODUuMzMzdi04NS4zMzNhMjUuNDk0IDI1LjQ5NCAwIDAxMjUuNi0yNS42IDI1LjQ5NCAyNS40OTQgMCAwMTI1LjYgMjUuNnY4NS4zMzNoODUuMzMzYTI1LjQ5MyAyNS40OTMgMCAwMTI1LjYwMSAyNS42elwiXG4gICAgICAgICAgICAgICAgZGF0YS1vcmlnaW5hbD1cIiNGRkZGRkZcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnQWRkXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnQWRyZXNzQWRkKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2ZyBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIxZW1cIiB7Li4ucHJvcHN9PlxuICAgICAgICAgICAgPHBhdGggZD1cIk05LjAyIDIxSDIuNUEyLjUwMyAyLjUwMyAwIDAxMCAxOC41di0xNkMwIDEuMTIxIDEuMTIyIDAgMi41IDBoMTJDMTUuODc4IDAgMTcgMS4xMjEgMTcgMi41djYuMDZhLjUuNSAwIDAxLTEgMFYyLjVjMC0uODI3LS42NzMtMS41LTEuNS0xLjVoLTEyQzEuNjczIDEgMSAxLjY3MyAxIDIuNXYxNmMwIC44MjcuNjczIDEuNSAxLjUgMS41aDYuNTJhLjUuNSAwIDAxMCAxelwiIC8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTEzLjUgOWgtMTBhLjUuNSAwIDAxMC0xaDEwYS41LjUgMCAwMTAgMXpNOS41IDEzaC02YS41LjUgMCAwMTAtMWg2YS41LjUgMCAwMTAgMXpNOC41IDVoLTVhLjUuNSAwIDAxMC0xaDVhLjUuNSAwIDAxMCAxek0xNy41IDI0Yy0zLjU4NCAwLTYuNS0yLjkxNi02LjUtNi41czIuOTE2LTYuNSA2LjUtNi41IDYuNSAyLjkxNiA2LjUgNi41LTIuOTE2IDYuNS02LjUgNi41em0wLTEyYy0zLjAzMyAwLTUuNSAyLjQ2OC01LjUgNS41czIuNDY3IDUuNSA1LjUgNS41IDUuNS0yLjQ2OCA1LjUtNS41LTIuNDY3LTUuNS01LjUtNS41elwiIC8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTE3LjUgMjFhLjUuNSAwIDAxLS41LS41di02YS41LjUgMCAwMTEgMHY2YS41LjUgMCAwMS0uNS41elwiIC8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTIwLjUgMThoLTZhLjUuNSAwIDAxMC0xaDZhLjUuNSAwIDAxMCAxelwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnQWRyZXNzQWRkXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnQXJyb3dCb3R0b20ocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0yMC4yMDcgOC4xNDdhMSAxIDAgMDAtMS40MTQgMEwxMiAxNC45NCA1LjIwNyA4LjE0N2ExIDEgMCAwMC0xLjQxNCAxLjQxNGw3LjUgNy41YS45OTYuOTk2IDAgMDAxLjQxNC4wMDFsNy41LTcuNWExIDEgMCAwMDAtMS40MTN2LS4wMDJ6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnQXJyb3dCb3R0b21cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdCYXNrZXQocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDIzLjQxNiA0MjMuNDE2XCJcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNDIwLjY4OCAxNDUuMDk2YTkuNDAxIDkuNDAxIDAgMDAtNy44MzctMi42MTJIMzAwLjUyNVY5Mi44NTFjMC00OS4wNTItMzkuNzY0LTg4LjgxNi04OC44MTYtODguODE2cy04OC44MTYgMzkuNzY0LTg4LjgxNiA4OC44MTZ2NDkuNjMzSDEwLjU2NWMtMy4xMzUgMC02LjI2OSAwLTcuODM3IDIuNjEyYTguODgzIDguODgzIDAgMDAtMi42MTIgNy44MzdMMzkuMyAzNjcuMTM3YzUuNDc0IDI5Ljg4MSAzMS4yNzUgNTEuNzQ2IDYxLjY0OSA1Mi4yNDVoMjIxLjUxOGMzMC40NjEtLjc0OSA1Ni4yMDgtMjIuNzg3IDYxLjY0OS01Mi43NjdMNDIzLjMgMTUyLjkzM2E4Ljg4MyA4Ljg4MyAwIDAwLTIuNjEyLTcuODM3ek0xNDMuNzkgOTIuODUxYzAtMzcuNTEgMzAuNDA4LTY3LjkxOCA2Ny45MTgtNjcuOTE4IDM3LjUxIDAgNjcuOTE4IDMwLjQwOCA2Ny45MTggNjcuOTE4djQ5LjYzM0gxNDMuNzlWOTIuODUxem0yMTkuNDI4IDI3MS4xNTFjLTMuNTE5IDE5LjgwMS0yMC42NDEgMzQuMjg5LTQwLjc1MSAzNC40ODJIMTAwLjk0OWMtMjAuMTEtLjE5My0zNy4yMzItMTQuNjgtNDAuNzUxLTM0LjQ4MmwtMzcuMDk0LTIwMC42MmgzNzcuMjA4bC0zNy4wOTQgMjAwLjYyelwiIC8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTI5MC4wNzYgMjY1LjI1OWM1Ljc3MSAwIDEwLjQ0OS00LjY3OCAxMC40NDktMTAuNDQ5di0zMS4zNDdjMC01Ljc3MS00LjY3OC0xMC40NDktMTAuNDQ5LTEwLjQ0OXMtMTAuNDQ5IDQuNjc4LTEwLjQ0OSAxMC40NDl2MzEuMzQ3Yy0uMDAxIDUuNzcxIDQuNjc4IDEwLjQ0OSAxMC40NDkgMTAuNDQ5ek0xMzMuMzQxIDI2NS4yNTljNS43NzEgMCAxMC40NDktNC42NzggMTAuNDQ5LTEwLjQ0OXYtMzEuMzQ3YzAtNS43NzEtNC42NzgtMTAuNDQ5LTEwLjQ0OS0xMC40NDlzLTEwLjQ0OSA0LjY3OC0xMC40NDkgMTAuNDQ5djMxLjM0N2MwIDUuNzcxIDQuNjc4IDEwLjQ0OSAxMC40NDkgMTAuNDQ5elwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnQmFza2V0XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnQmFza2V0RmlsbChwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmcgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDM5Ni4wMTYgMzk2LjAxNlwiIHsuLi5wcm9wc30+XG4gICAgICAgICAgICA8ZyBmaWxsPVwiI2ZmZlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBkPVwiTTkuNDA0IDE2MC45MTRsMzcuMDk0IDIwMC42MmMzLjUxOSAxOS44MDEgMjAuNjQxIDM0LjI4OSA0MC43NTEgMzQuNDgyaDIyMS41MThjMjAuMTExLS4xOTMgMzcuMjMyLTE0LjY4IDQwLjc1MS0zNC40ODJsMzcuMDk0LTIwMC42Mkg5LjQwNHptMTIwLjY4NiA4OS44NjJjMCA1Ljc3MS00LjY3OCAxMC40NDktMTAuNDQ5IDEwLjQ0OXMtMTAuNDQ5LTQuNjc4LTEwLjQ0OS0xMC40NDl2LTMxLjM0N2MwLTUuNzcxIDQuNjc4LTEwLjQ0OSAxMC40NDktMTAuNDQ5czEwLjQ0OSA0LjY3OCAxMC40NDkgMTAuNDQ5djMxLjM0N3ptMTU2LjczNSAwYzAgNS43NzEtNC42NzggMTAuNDQ5LTEwLjQ0OSAxMC40NDlzLTEwLjQ0OS00LjY3OC0xMC40NDktMTAuNDQ5di0zMS4zNDdjMC01Ljc3MSA0LjY3OC0xMC40NDkgMTAuNDQ5LTEwLjQ0OXMxMC40NDkgNC42NzggMTAuNDQ5IDEwLjQ0OXYzMS4zNDd6TTEzMC4wOSA4OC44MTZjMC0zNy41MSAzMC40MDgtNjcuOTE4IDY3LjkxOC02Ny45MTggMzcuNTEgMCA2Ny45MTggMzAuNDA4IDY3LjkxOCA2Ny45MTh2NjEuNjQ5aDIwLjg5OFY4OC44MTZDMjg2LjgyNSAzOS43NjQgMjQ3LjA2IDAgMTk4LjAwOCAwcy04OC44MTYgMzkuNzY0LTg4LjgxNiA4OC44MTZ2NjEuNjQ5aDIwLjg5OFY4OC44MTZ6XCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1vcmlnaW5hbD1cIiMwMDAwMDBcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnQmFza2V0RmlsbFxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z0NhbGVuZGVyKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgICA8ZyBjbGlwUGF0aD1cInVybCgjY2FsZW5kZXJfc3ZnX19jbGlwMClcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0tMzcuOSAxOGMtLjEtLjEtLjEtLjEtLjEtLjIuMSAwIC4xLjEuMS4yek0xOCAyLjJoLTEuM3YtLjNjMC0uNC0uMy0uOC0uOC0uOC0uNCAwLS44LjMtLjguOHYuM0g3Ljd2LS4zYzAtLjQtLjMtLjgtLjgtLjgtLjQgMC0uOC4zLS44Ljh2LjNINC44Yy0xLjQgMC0yLjUgMS4xLTIuNSAyLjV2MTMuMWMwIDEuNCAxLjEgMi41IDIuNSAyLjVoMi45Yy40IDAgLjgtLjMuOC0uOCAwLS40LS4zLS44LS44LS44SDQuOGMtLjYgMC0xLS41LTEtMVY3LjljMC0uMy40LS43IDEtLjdIMThjLjYgMCAxIC40IDEgLjd2MS44YzAgLjQuMy44LjguOC40IDAgLjgtLjMuOC0uOHYtNWMtLjEtMS40LTEuMi0yLjUtMi42LTIuNXptMSAzLjdjLS4zLS4xLS43LS4yLTEtLjJINC44Yy0uNCAwLS43LjEtMSAuMlY0LjdjMC0uNi41LTEgMS0xaDEuM3YuNWMwIC40LjMuOC44LjguNCAwIC44LS4zLjgtLjh2LS41aDcuNXYuNWMwIC40LjMuOC44LjguNCAwIC44LS4zLjgtLjh2LS41SDE4Yy42IDAgMSAuNSAxIDF2MS4yelwiIC8+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNS41IDEwLjRjLTMuNCAwLTYuMiAyLjgtNi4yIDYuMiAwIDMuNCAyLjggNi4yIDYuMiA2LjIgMy40IDAgNi4yLTIuOCA2LjItNi4yIDAtMy40LTIuOC02LjItNi4yLTYuMnptMCAxMWMtMi42IDAtNC43LTIuMS00LjctNC43czIuMS00LjcgNC43LTQuNyA0LjcgMi4xIDQuNyA0LjdjMCAyLjUtMi4xIDQuNy00LjcgNC43elwiIC8+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xOC45IDE4LjdjLS4xLjItLjQuNC0uNi40LS4xIDAtLjMgMC0uNC0uMWwtMy4xLTJ2LTNjMC0uNC4zLS44LjgtLjguNCAwIC44LjMuOC44djIuMmwyLjQgMS41Yy4yLjIuMy42LjEgMXpcIiAvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICAgICAgPGNsaXBQYXRoIGlkPVwiY2FsZW5kZXJfc3ZnX19jbGlwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNMCAwaDI0djI0SDB6XCIgLz5cbiAgICAgICAgICAgICAgICA8L2NsaXBQYXRoPlxuICAgICAgICAgICAgPC9kZWZzPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0NhbGVuZGVyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnQ2xvY2socHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cInVybCgjY2xvY2tfc3ZnX19wYWludDBfbGluZWFyKVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEyIDIzLjYxMWM2LjQxMyAwIDExLjYxLTUuMTk4IDExLjYxLTExLjYxMVMxOC40MTQuMzg5IDEyIC4zODlDNS41ODcuMzg5LjM4OSA1LjU4Ny4zODkgMTJzNS4xOTggMTEuNjExIDExLjYxIDExLjYxMXpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI2Nsb2NrX3N2Z19fcGFpbnQxX2xpbmVhcilcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMiAyMi40NzFjNS43ODMgMCAxMC40NzItNC42ODggMTAuNDcyLTEwLjQ3MVMxNy43ODMgMS41MjggMTIgMS41MjhDNi4yMTcgMS41MjggMS41MyA2LjIxNyAxLjUzIDEyYzAgNS43ODMgNC42ODggMTAuNDcxIDEwLjQ3MSAxMC40NzF6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNjbG9ja19zdmdfX3BhaW50Ml9saW5lYXIpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTIgMjIuNDcxYzUuNzgzIDAgMTAuNDcyLTQuNjg4IDEwLjQ3Mi0xMC40NzFTMTcuNzgzIDEuNTI4IDEyIDEuNTI4QzYuMjE3IDEuNTI4IDEuNTMgNi4yMTcgMS41MyAxMmMwIDUuNzgzIDQuNjg4IDEwLjQ3MSAxMC40NzEgMTAuNDcxelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cInVybCgjY2xvY2tfc3ZnX19wYWludDNfcmFkaWFsKVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTIyLjM1MyAxMy41ODFsLTMuNS0zLjQ3MS0uOTkzLjI0NC01LjA3Ni01LjAzMmEuNTEuNTEgMCAwMC0uMjQ3LS4yNDcuNTEuNTEgMCAwMC0uNDYxLS4yOTVoLS4xNTJhLjUxLjUxIDAgMDAtLjUxLjUxdjUuOTRhLjk2NS45NjUgMCAwMC0uMzQgMS4wNWwtMy4zIDMuM2EuNTEuNTEgMCAwMDAgLjcybDYuMDI1IDYuMDE3YTEwLjQ4IDEwLjQ4IDAgMDA4LjU1NC04LjczNnpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI2Nsb2NrX3N2Z19fcGFpbnQ0X2xpbmVhcilcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0yMi4zNTIgMTMuNTgxYTEwLjQ3OSAxMC40NzkgMCAwMS04LjU1MyA4LjczNmwtNS45MS01LjkwMmEuNTEuNTEgMCAwMC43MTQtLjAwN2wzLjQ0Mi0zLjQ0M2EuOTY2Ljk2NiAwIDAwLjkyMi0uOTZsNS45ODgtMS40NzRhLjIxNy4yMTcgMCAwMC4xNi0uMTYxbDMuMjM3IDMuMjExelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cInVybCgjY2xvY2tfc3ZnX19wYWludDVfbGluZWFyKVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEyLjA3NiAxMmgtLjE1MmEuNTEuNTEgMCAwMS0uNTEtLjUxdi02LjJhLjUxLjUxIDAgMDEuNTEtLjUxaC4xNTJhLjUxLjUxIDAgMDEuNTEuNTF2Ni4yYS41MS41MSAwIDAxLS41MS41MXpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI2Nsb2NrX3N2Z19fcGFpbnQ2X2xpbmVhcilcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMi4wNzYgMTJsLjEwNy4xMDdjLjE5OS4xOTkuMTk5LjUyMiAwIC43MmwtMy41OCAzLjU4YS41MS41MSAwIDAxLS43MjEgMGwtLjEwNy0uMTA2YS41MS41MSAwIDAxMC0uNzIxbDMuNTgtMy41OGEuNTEuNTEgMCAwMS43MiAwelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cInVybCgjY2xvY2tfc3ZnX19wYWludDdfbGluZWFyKVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE5LjExNCAxMC4yNjhhLjIxNy4yMTcgMCAwMS0uMTU4LjI2MmwtNi44NDggMS42ODdhLjIxNy4yMTcgMCAwMS0uMTAzLS40MjFsNi44NDctMS42ODZhLjIxNy4yMTcgMCAwMS4yNjIuMTU4elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cInVybCgjY2xvY2tfc3ZnX19wYWludDhfbGluZWFyKVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEyIDEyLjk2OGEuOTY4Ljk2OCAwIDEwMC0xLjkzNi45NjguOTY4IDAgMDAwIDEuOTM2elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cInVybCgjY2xvY2tfc3ZnX19wYWludDlfbGluZWFyKVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEyLjAzNyA0LjE2M2gtLjA3NGEuNTQ4LjU0OCAwIDAxLS41NDgtLjU0OHYtLjY4MmMwLS4zMDMuMjQ1LS41NDguNTQ4LS41NDhoLjA3NGMuMzAzIDAgLjU0OC4yNDUuNTQ4LjU0OHYuNjgyYS41NDguNTQ4IDAgMDEtLjU0OC41NDh6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNjbG9ja19zdmdfX3BhaW50MTBfbGluZWFyKVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEyLjAzNyAyMS42MTVoLS4wNzRhLjU0OC41NDggMCAwMS0uNTQ4LS41NDh2LS42ODFjMC0uMzAzLjI0NS0uNTQ5LjU0OC0uNTQ5aC4wNzRjLjMwMyAwIC41NDguMjQ2LjU0OC41NDl2LjY4MWEuNTQ4LjU0OCAwIDAxLS41NDguNTQ4elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cInVybCgjY2xvY2tfc3ZnX19wYWludDExX2xpbmVhcilcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xOS44MzcgMTIuMDM3di0uMDc0YzAtLjMwMy4yNDYtLjU0OC41NDgtLjU0OGguNjgyYy4zMDMgMCAuNTQ4LjI0NS41NDguNTQ4di4wNzRhLjU0OC41NDggMCAwMS0uNTQ4LjU0OGgtLjY4MmEuNTQ4LjU0OCAwIDAxLS41NDgtLjU0OHpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI2Nsb2NrX3N2Z19fcGFpbnQxMl9saW5lYXIpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMi4zODUgMTIuMDM3di0uMDc0YzAtLjMwMy4yNDUtLjU0OC41NDgtLjU0OGguNjgyYy4zMDIgMCAuNTQ4LjI0NS41NDguNTQ4di4wNzRhLjU0OC41NDggMCAwMS0uNTQ4LjU0OGgtLjY4MmEuNTQ4LjU0OCAwIDAxLS41NDgtLjU0OHpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI2Nsb2NrX3N2Z19fcGFpbnQxM19saW5lYXIpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjbG9ja19zdmdfX3BhaW50MF9saW5lYXJcIlxuICAgICAgICAgICAgICAgICAgICB4MT17MTJ9XG4gICAgICAgICAgICAgICAgICAgIHkxPXsyOS4yOX1cbiAgICAgICAgICAgICAgICAgICAgeDI9ezEyfVxuICAgICAgICAgICAgICAgICAgICB5Mj17LTEuMTM2fVxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI2ZmZlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD17MX0gc3RvcENvbG9yPVwiI0U4RUZFRVwiIC8+XG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjbG9ja19zdmdfX3BhaW50MV9saW5lYXJcIlxuICAgICAgICAgICAgICAgICAgICB4MT17MTJ9XG4gICAgICAgICAgICAgICAgICAgIHkxPXstNC43M31cbiAgICAgICAgICAgICAgICAgICAgeDI9ezEyfVxuICAgICAgICAgICAgICAgICAgICB5Mj17MjQuNzA5fVxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI2ZmZlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD17MX0gc3RvcENvbG9yPVwiI0U4RUZFRVwiIC8+XG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjbG9ja19zdmdfX3BhaW50Ml9saW5lYXJcIlxuICAgICAgICAgICAgICAgICAgICB4MT17Ni4zMTN9XG4gICAgICAgICAgICAgICAgICAgIHkxPXs2LjMxMn1cbiAgICAgICAgICAgICAgICAgICAgeDI9ezE3LjEzNn1cbiAgICAgICAgICAgICAgICAgICAgeTI9ezE3LjEzNX1cbiAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiMxQUNFQjhcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezF9IHN0b3BDb2xvcj1cIiMwQkJGQkFcIiAvPlxuICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY2xvY2tfc3ZnX19wYWludDRfbGluZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgeDE9ezEzLjUxNH1cbiAgICAgICAgICAgICAgICAgICAgeTE9ezEzLjM5MX1cbiAgICAgICAgICAgICAgICAgICAgeDI9ezguMzQ3fVxuICAgICAgICAgICAgICAgICAgICB5Mj17OC4yMjR9XG4gICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezB9IHN0b3BDb2xvcj1cIiMxQUNFQjhcIiBzdG9wT3BhY2l0eT17MH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PXsxfSBzdG9wQ29sb3I9XCIjMDQ5NTlDXCIgLz5cbiAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgICAgICAgICAgICBpZD1cImNsb2NrX3N2Z19fcGFpbnQ1X2xpbmVhclwiXG4gICAgICAgICAgICAgICAgICAgIHgxPXsxOC4zNTJ9XG4gICAgICAgICAgICAgICAgICAgIHkxPXsxOS4yOTh9XG4gICAgICAgICAgICAgICAgICAgIHgyPXsxMS4wMjN9XG4gICAgICAgICAgICAgICAgICAgIHkyPXs5LjU0Mn1cbiAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD17MH0gc3RvcENvbG9yPVwiIzFBQ0VCOFwiIHN0b3BPcGFjaXR5PXswfSAvPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezF9IHN0b3BDb2xvcj1cIiMwNDk1OUNcIiAvPlxuICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY2xvY2tfc3ZnX19wYWludDZfbGluZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgeDE9ezEyfVxuICAgICAgICAgICAgICAgICAgICB5MT17Mi4wODF9XG4gICAgICAgICAgICAgICAgICAgIHgyPXsxMn1cbiAgICAgICAgICAgICAgICAgICAgeTI9ezEyLjYxNn1cbiAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiNmZmZcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezF9IHN0b3BDb2xvcj1cIiNFOEVGRUVcIiAvPlxuICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY2xvY2tfc3ZnX19wYWludDdfbGluZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgeDE9ezEwLjk4Nn1cbiAgICAgICAgICAgICAgICAgICAgeTE9ezEzLjE5N31cbiAgICAgICAgICAgICAgICAgICAgeDI9ezcuNDcxfVxuICAgICAgICAgICAgICAgICAgICB5Mj17MTYuNzExfVxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI2ZmZlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD17MX0gc3RvcENvbG9yPVwiI0U4RUZFRVwiIC8+XG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjbG9ja19zdmdfX3BhaW50OF9saW5lYXJcIlxuICAgICAgICAgICAgICAgICAgICB4MT17MTEuODN9XG4gICAgICAgICAgICAgICAgICAgIHkxPXsxMi4wMzF9XG4gICAgICAgICAgICAgICAgICAgIHgyPXsyMC40Mjh9XG4gICAgICAgICAgICAgICAgICAgIHkyPXs5Ljk4Nn1cbiAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiNENjMzMDVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezAuMzY2fSBzdG9wQ29sb3I9XCIjQ0YzMDA0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PXswLjg5OX0gc3RvcENvbG9yPVwiI0JDMjYwMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD17MX0gc3RvcENvbG9yPVwiI0I3MjQwMVwiIC8+XG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjbG9ja19zdmdfX3BhaW50OV9saW5lYXJcIlxuICAgICAgICAgICAgICAgICAgICB4MT17MTJ9XG4gICAgICAgICAgICAgICAgICAgIHkxPXsxNC4wMTZ9XG4gICAgICAgICAgICAgICAgICAgIHgyPXsxMn1cbiAgICAgICAgICAgICAgICAgICAgeTI9ezEwLjk2Mn1cbiAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiM5N0FBQUFcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezF9IHN0b3BDb2xvcj1cIiNFOEVGRUVcIiAvPlxuICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY2xvY2tfc3ZnX19wYWludDEwX2xpbmVhclwiXG4gICAgICAgICAgICAgICAgICAgIHgxPXsxMn1cbiAgICAgICAgICAgICAgICAgICAgeTE9ezEuNzE5fVxuICAgICAgICAgICAgICAgICAgICB4Mj17MTJ9XG4gICAgICAgICAgICAgICAgICAgIHkyPXs0LjMxNH1cbiAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiNmZmZcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezF9IHN0b3BDb2xvcj1cIiNFOEVGRUVcIiAvPlxuICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY2xvY2tfc3ZnX19wYWludDExX2xpbmVhclwiXG4gICAgICAgICAgICAgICAgICAgIHgxPXsxMn1cbiAgICAgICAgICAgICAgICAgICAgeTE9ezE5LjE3M31cbiAgICAgICAgICAgICAgICAgICAgeDI9ezEyfVxuICAgICAgICAgICAgICAgICAgICB5Mj17MjEuNzY3fVxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI2ZmZlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD17MX0gc3RvcENvbG9yPVwiI0U4RUZFRVwiIC8+XG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjbG9ja19zdmdfX3BhaW50MTJfbGluZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgeDE9ezIyLjIwMn1cbiAgICAgICAgICAgICAgICAgICAgeTE9ezI5LjI5Nn1cbiAgICAgICAgICAgICAgICAgICAgeDI9ezE5LjYwN31cbiAgICAgICAgICAgICAgICAgICAgeTI9ey0xLjEzfVxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI2ZmZlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD17MX0gc3RvcENvbG9yPVwiI0U4RUZFRVwiIC8+XG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjbG9ja19zdmdfX3BhaW50MTNfbGluZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgeDE9ezQuNzQ4fVxuICAgICAgICAgICAgICAgICAgICB5MT17MjkuMjk2fVxuICAgICAgICAgICAgICAgICAgICB4Mj17Mi4xNTR9XG4gICAgICAgICAgICAgICAgICAgIHkyPXstMS4xM31cbiAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiNmZmZcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezF9IHN0b3BDb2xvcj1cIiNFOEVGRUVcIiAvPlxuICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICAgICAgPHJhZGlhbEdyYWRpZW50XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY2xvY2tfc3ZnX19wYWludDNfcmFkaWFsXCJcbiAgICAgICAgICAgICAgICAgICAgY3g9ezB9XG4gICAgICAgICAgICAgICAgICAgIGN5PXswfVxuICAgICAgICAgICAgICAgICAgICByPXsxfVxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudFRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMi43MDYgMTIuOTE2KSBzY2FsZSgxMS4zMDU5KVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezB9IHN0b3BDb2xvcj1cIiMxQUNFQjhcIiBzdG9wT3BhY2l0eT17MH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3BcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldD17MC41MDR9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9wQ29sb3I9XCIjMTlDQ0I3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BPcGFjaXR5PXswLjUwM31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3BcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldD17MC42ODV9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9wQ29sb3I9XCIjMTdDNUI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BPcGFjaXR5PXswLjY4NX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3BcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldD17MC44MTR9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9wQ29sb3I9XCIjMTJCQUFFXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BPcGFjaXR5PXswLjgxNH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3BcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldD17MC45MTh9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9wQ29sb3I9XCIjMENBOUE2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BPcGFjaXR5PXswLjkxOH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PXsxfSBzdG9wQ29sb3I9XCIjMDQ5NTlDXCIgLz5cbiAgICAgICAgICAgICAgICA8L3JhZGlhbEdyYWRpZW50PlxuICAgICAgICAgICAgPC9kZWZzPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0Nsb2NrXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnQ291cmllcihwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmcgaGVpZ2h0PVwiMWVtXCIgdmlld0JveD1cIjAgMCA2NCA2NFwiIHdpZHRoPVwiMWVtXCIgey4uLnByb3BzfT5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNTggNDQuMTRWNjFIMzZWNDQuMTRMNDcgNDF6XCIgZmlsbD1cIiNmZjc5NTZcIiAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTM2IDhjMCAyLjIxLTQgOC00IDhzLTQtNS43OS00LThhNCA0IDAgMDE4IDB6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI2ZmZGE0NFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk00NCA1MWg2djEwaC02elwiIGZpbGw9XCIjY2QyYTAwXCIgLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNjEgNDF2NGwtMTQtNC0xNCA0di00bDE0LTR6XCIgZmlsbD1cIiNmZjUwMjNcIiAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTI0IDU0aC0xLjVhMTEuNSAxMS41IDAgMDEwLTIzSDQzYTUgNSAwIDAwMC0xMGgtNHYtMmg0YTcgNyAwIDAxMCAxNEgyMi41YTkuNSA5LjUgMCAwMDAgMTlIMjR6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzFhNmZiMFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0zMiAxMGEyIDIgMCAxMTItMiAyIDIgMCAwMS0yIDJ6XCIgZmlsbD1cIiNmZmZcIiAvPlxuICAgICAgICAgICAgPGcgZmlsbD1cIiMxYTZmYjBcIj5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTI2IDUyaDJ2MmgtMnpNMzAgNTJoMnYyaC0yek0zMSAxOWgydjJoLTJ6TTM1IDE5aDJ2MmgtMnpcIiAvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0xNCAzaDd2M2gtN3pNMyAzaDd2M0gzelwiIGZpbGw9XCIjZmY5ODExXCIgLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMyA2aDE4djE1SDN6XCIgZmlsbD1cIiNmZmRhNDRcIiAvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk02IDE1aDR2Mkg2elwiIGZpbGw9XCIjZmZmXCIgLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMyA2aDE4djFIM3pcIiBmaWxsPVwiI2NjNzQwMFwiIC8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTE0IDZ2MmwtNCAxVjNoNHpcIiBmaWxsPVwiI2Q4MDAyN1wiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnQ291cmllclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z0Vtb2ppKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTIgMjIuNzVDNi4wNzIgMjIuNzUgMS4yNSAxNy45MjggMS4yNSAxMlM2LjA3MiAxLjI1IDEyIDEuMjUgMjIuNzUgNi4wNzIgMjIuNzUgMTIgMTcuOTI4IDIyLjc1IDEyIDIyLjc1em0wLTIwQzYuOSAyLjc1IDIuNzUgNi45IDIuNzUgMTJTNi45IDIxLjI1IDEyIDIxLjI1czkuMjUtNC4xNSA5LjI1LTkuMjVTMTcuMSAyLjc1IDEyIDIuNzV6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTIgMTcuMTE1YTUuNTA5IDUuNTA5IDAgMDEtNC42NTYtMi41NDQuNzQ4Ljc0OCAwIDAxLjIyNi0xLjAzNS43NDcuNzQ3IDAgMDExLjAzNi4yMjYgNC4wMiA0LjAyIDAgMDAzLjM5NSAxLjg1NSA0LjAyNCA0LjAyNCAwIDAwMy4zOTYtMS44NTQuNzQ3Ljc0NyAwIDAxMS4wMzYtLjIyNWMuMzUuMjI0LjQ1LjY4OC4yMjYgMS4wMzZhNS41MTYgNS41MTYgMCAwMS00LjY1OCAyLjU0NUwxMiAxNy4xMTV6TTE0LjczOCAxMC45MzZhMS40NzggMS40NzggMCAxMDAtMi45NTYgMS40NzggMS40NzggMCAwMDAgMi45NTZ6TTkuMjYyIDEwLjkzNmExLjQ3OCAxLjQ3OCAwIDEwMC0yLjk1NiAxLjQ3OCAxLjQ3OCAwIDAwMCAyLjk1NnpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdFbW9qaVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z0V4cGxvcmUocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNy41IDYuMTE0aC0zLjI3NWwuMzEtMy41NmEuNjI2LjYyNiAwIDAwLTEuMjQ1LS4xMDdsLS4zMiAzLjY2Nkg3LjcwNWwuMzA4LTMuNTU4YS42MjUuNjI1IDAgMTAtMS4yNDQtLjEwOEw2LjQ1IDYuMTEzSDMuMTUyYS42MjYuNjI2IDAgMDAwIDEuMjVoMy4xOWwtLjQ1OSA1LjI3M0gyLjVhLjYyNS42MjUgMCAwMDAgMS4yNWgzLjI3NWwtLjMxIDMuNTZhLjYyNi42MjYgMCAwMC41NjguNjc2bC4wNTUuMDAzYy4zMjEgMCAuNTk0LS4yNDYuNjIyLS41NzJsLjMyLTMuNjY2aDUuMjY2bC0uMzA4IDMuNTU4YS42MjYuNjI2IDAgMDAuNTY4LjY3N2wuMDU1LjAwM2MuMzIgMCAuNTkzLS4yNDYuNjIxLS41NzJsLjMxOS0zLjY2NmgzLjI5N2MuMzQ1IDAgLjYyNS0uMjgxLjYyNS0uNjI1YS42MjYuNjI2IDAgMDAtLjYyNS0uNjI1aC0zLjE5bC40NTktNS4yNzNIMTcuNWEuNjI1LjYyNSAwIDAwMC0xLjI1em0tNS4wOTYgNi41MjJINy4xMzhsLjQ1OC01LjI3Mmg1LjI2N2wtLjQ1OSA1LjI3MnpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdFeHBsb3JlXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnRXhwbG9yZUZpbGwocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNy4xNTQgNy44OWMuNTUgMCAxLS40NDggMS0xcy0uNDUtMS0xLTFoLTIuNjgzbC4yNTgtMi45NTZhMSAxIDAgMDAtLjkxNi0xLjA4M2MtLjU0MS0uMDMtMS4wMjkuMzYtMS4wNzcuOTFsLS4yNzIgMy4xMjlIOC4yNWwuMjU3LTIuOTU0YTEuMDAyIDEuMDAyIDAgMDAtLjkxNC0xLjA4NS45OTcuOTk3IDAgMDAtMS4wNzguOTFsLS4yNyAzLjEyOEgzLjQ2OGExIDEgMCAwMDAgMmgyLjYwMmwtLjM2NyA0LjIySDIuODQ3YTEuMDAyIDEuMDAyIDAgMDAwIDIuMDAySDUuNTNsLS4yNTggMi45NTZjLS4wNDguNTQ4LjM2IDEuMDM0LjkwOCAxLjA4NGwuMDg4LjAwNGMuNTIyIDAgLjk1LS4zOTMuOTk2LS45MTVsLjI3My0zLjEyN2g0LjIxM2wtLjI1NyAyLjk1M2MtLjA1LjU0OC4zNTkgMS4wMzUuOTA5IDEuMDg1bC4wODguMDA0Yy41MTQgMCAuOTUyLS40MDIuOTk2LS45MTVsLjI3LTMuMTI3aDIuNzc2Yy41NSAwIDEtLjQ1IDEtMXMtLjQ1LTEuMDAyLTEtMS4wMDJIMTMuOTNsLjM2Ny00LjIyaDIuODU4VjcuODl6bS00Ljg2NSAwbC0uMzY3IDQuMjJINy43MTFsLjM2Ny00LjIyaDQuMjEyelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0V4cGxvcmVGaWxsXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnR2lmKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTkgMTAuNVY4LjhoLTQuNHY2LjRoMS43di0yaDJ2LTEuN2gtMnYtMUgxOXptLTcuMy0xLjdoMS43djYuNGgtMS43VjguOHptLTMuNiAxLjZjLjQgMCAuOS4yIDEuMi41bDEuMi0xQzkuOSA5LjIgOSA4LjggOC4xIDguOGMtMS44IDAtMy4yIDEuNC0zLjIgMy4yIDAgMS44IDEuNCAzLjIgMy4yIDMuMiAxIDAgMS44LS40IDIuNC0xLjF2LTIuNUg3Ljd2MS4yaDEuMnYuNmMtLjIuMS0uNS4yLS44LjItLjkgMC0xLjYtLjctMS42LTEuNiAwLS44LjctMS42IDEuNi0xLjZ6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMjAuNSAyLjAyaC0xN2EyLjI1IDIuMjUgMCAwMC0yLjI1IDIuMjQ3djE1LjUwN0EyLjI1MSAyLjI1MSAwIDAwMy41IDIyLjAyaDE3YzEuMjQgMCAyLjI1LTEuMDA4IDIuMjUtMi4yNDZWNC4yNjdBMi4yNSAyLjI1IDAgMDAyMC41IDIuMDJ6bS43NSAxNy43NTRhLjc1Ljc1IDAgMDEtLjc1Ljc0NmgtMTdhLjc1Ljc1IDAgMDEtLjc1LS43NDZWNC4yNjdjMC0uNDEyLjMzNi0uNzQ3Ljc1LS43NDdoMTdjLjQxNCAwIC43NS4zMzUuNzUuNzQ3djE1LjUwN3pcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdHaWZcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdIb21lKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTguNzE3IDYuMzA4bC04LjQyLTQuNTQ1YS42MjYuNjI2IDAgMDAtLjU5NCAwTDEuMjg2IDYuMzA4YS42MjYuNjI2IDAgMDAuNTk0IDEuMWwuNjgtLjM2NiAxLjM1NyA5LjU5NGMuMTc4IDEuMDEyIDEuMDkgMS43MTggMi4yMTUgMS43MThoNy43MzVjMS4xMjYgMCAyLjAzNy0uNzA2IDIuMjE5LTEuNzM5TDE3LjQ0IDcuMDRsLjY4MS4zNjhhLjYzLjYzIDAgMDAuODQ4LS4yNTMuNjI2LjYyNiAwIDAwLS4yNTMtLjg0N3pNMTQuODUyIDE2LjQyYy0uMDkuNTA1LS41ODYuNjg1LS45ODQuNjg1SDYuMTMzYy0uNCAwLS44OTUtLjE4LS45ODEtLjY2NUwzLjczMyA2LjQxIDEwIDMuMDIybDYuMjY4IDMuMzg0LTEuNDE2IDEwLjAxMnpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk02Ljg1IDEwLjE1M2EzLjE1MyAzLjE1MyAwIDAwMy4xNSAzLjE1IDMuMTUzIDMuMTUzIDAgMDAzLjE1LTMuMTVBMy4xNTMgMy4xNTMgMCAwMDEwIDcuMDAzYTMuMTUzIDMuMTUzIDAgMDAtMy4xNSAzLjE1em01LjA1IDBhMS45MDEgMS45MDEgMCAwMS0zLjggMGMwLTEuMDQ4Ljg1Mi0xLjkgMS45LTEuOXMxLjkuODUyIDEuOSAxLjl6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnSG9tZVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z0hvbWVGaWxsKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTguODE3IDYuMTI1bC04LjQyMS00LjU0NGEuODMzLjgzMyAwIDAwLS43OTIgMEwxLjE4OCA2LjEyNWEuODM1LjgzNSAwIDAwLjc5MSAxLjQ2OGwuNjEyLS4zMyAxLjMyNSA5LjM3NWMuMTggMS4wMTEgMS4wOTIgMS43MTggMi4yMTcgMS43MThoNy43MzRjMS4xMjUgMCAyLjAzNy0uNzA3IDIuMjE5LTEuNzRsMS4zMjMtOS4zNTQuNjE0LjMzMWEuODMyLjgzMiAwIDEwLjc5Mi0xLjQ2NWwuMDAyLS4wMDN6TTEwIDEyLjg2M2EyLjcwOCAyLjcwOCAwIDExMC01LjQxNyAyLjcwOCAyLjcwOCAwIDAxMCA1LjQxN3pcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdIb21lRmlsbFxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z0xpa2UocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMiAyMS42MzhoLS4wMTRDOS40MDMgMjEuNTkgMS45NSAxNC44NTYgMS45NSA4LjQ3OGMwLTMuMDY0IDIuNTI1LTUuNzU0IDUuNDAzLTUuNzU0IDIuMjkgMCAzLjgzIDEuNTggNC42NDYgMi43My44MTQtMS4xNDggMi4zNTQtMi43MyA0LjY0NS0yLjczIDIuODggMCA1LjQwNCAyLjY5IDUuNDA0IDUuNzU1IDAgNi4zNzYtNy40NTQgMTMuMTEtMTAuMDM3IDEzLjE1N0gxMnYuMDAyek03LjM1NCA0LjIyNWMtMi4wOCAwLTMuOTAzIDEuOTg4LTMuOTAzIDQuMjU1IDAgNS43NCA3LjAzNCAxMS41OTYgOC41NSAxMS42NTggMS41MTgtLjA2MiA4LjU1LTUuOTE3IDguNTUtMTEuNjU4IDAtMi4yNjctMS44MjMtNC4yNTUtMy45MDMtNC4yNTUtMi41MjggMC0zLjk0IDIuOTM2LTMuOTUyIDIuOTY1LS4yMy41NjItMS4xNTYuNTYyLTEuMzg3IDAtLjAxNC0uMDMtMS40MjUtMi45NjUtMy45NTQtMi45NjVoLS4wMDF6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnTGlrZVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z0xpc3QocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNi40NTggMTguMzMzSDMuNTQyYTEuODc4IDEuODc4IDAgMDEtMS44NzUtMS44NzVWMy41NDJjMC0xLjAzNC44NDEtMS44NzUgMS44NzUtMS44NzVoMTIuOTE2YzEuMDM0IDAgMS44NzUuODQxIDEuODc1IDEuODc1djEyLjkxNmExLjg3OCAxLjg3OCAwIDAxLTEuODc1IDEuODc1ek0zLjU0MiAyLjkxN2EuNjI2LjYyNiAwIDAwLS42MjUuNjI1djEyLjkxNmMwIC4zNDUuMjguNjI1LjYyNS42MjVoMTIuOTE2Yy4zNDUgMCAuNjI1LS4yOC42MjUtLjYyNVYzLjU0MmEuNjI2LjYyNiAwIDAwLS42MjUtLjYyNUgzLjU0MnpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNC4xNjcgNy4ySDUuODMzYS42MjYuNjI2IDAgMDEwLTEuMjVoOC4zMzRhLjYyNS42MjUgMCAxMTAgMS4yNXptMCAzLjQyNUg1LjgzM2EuNjI1LjYyNSAwIDAxMC0xLjI1aDguMzM0YS42MjUuNjI1IDAgMDEwIDEuMjV6TTEwIDE0LjA1SDUuODMzYS42MjUuNjI1IDAgMTEwLTEuMjVIMTBhLjYyNi42MjYgMCAwMTAgMS4yNXpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdMaXN0XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnTGlzdEZpbGwocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNi40NTggMS42NjdIMy41NDJjLTEuMDMxIDAtMS44NzUuODQ0LTEuODc1IDEuODc1djEyLjkxNmMwIDEuMDMxLjg0NCAxLjg3NSAxLjg3NSAxLjg3NWgxMi45MTZjMS4wMzEgMCAxLjg3NS0uODQ0IDEuODc1LTEuODc1VjMuNTQyYzAtMS4wMzEtLjg0NC0xLjg3NS0xLjg3NS0xLjg3NXpNOS4xNjcgMTMuOTU4SDUuODMzYS42MjUuNjI1IDAgMDEwLTEuMjVoMy4zMzRhLjYyNS42MjUgMCAwMTAgMS4yNXptNS0zLjMzM0g1LjgzM2EuNjI1LjYyNSAwIDAxMC0xLjI1aDguMzM0YS42MjUuNjI1IDAgMDEwIDEuMjV6bTAtMy4zMzNINS44MzNhLjYyNS42MjUgMCAwMTAtMS4yNWg4LjMzNGEuNjI1LjYyNSAwIDAxMCAxLjI1elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0xpc3RGaWxsXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnTWFyayhwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE2LjU4MyAxOS41ODNhLjYyOS42MjkgMCAwMS0uMzY4LS4xMkwxMCAxNC45NGwtNi4yMTUgNC41MjVhLjYyNS42MjUgMCAwMS0uOTkzLS41MDZWNC42NjdjMC0xLjAzNC44NDEtMS44NzUgMS44NzUtMS44NzVoMTAuNjY1YzEuMDMzIDAgMS44NzUuODQxIDEuODc1IDEuODc1djE0LjI5MWEuNjI0LjYyNCAwIDAxLS42MjUuNjI1aC4wMDF6TTEwIDEzLjU0MmMuMTMgMCAuMjU4LjA0LjM2Ny4xMmw1LjU5MSA0LjA2OVY0LjY2N2EuNjI3LjYyNyAwIDAwLS42MjUtLjYyNUg0LjY2N2EuNjI3LjYyNyAwIDAwLS42MjUuNjI1VjE3LjczbDUuNTkxLTQuMDdhLjYxNy42MTcgMCAwMS4zNjctLjEyelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z01hcmtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdNYXJrRmlsbChwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE2LjU4MyAxOS41ODNjLS4xNjYgMC0uMjUgMC0uMzMzLS4wODNMMTAgMTQuOTE3bC02LjI1IDQuNWMtLjE2Ny4xNjYtLjQxNy4xNjYtLjY2Ny4wODMtLjE2Ni0uMDgzLS4zMzMtLjMzMy0uMzMzLS41ODNWNC42NjdjMC0xIC44MzMtMS44MzQgMS44MzMtMS44MzRIMTUuMjVjMSAwIDEuODMzLjgzNCAxLjgzMyAxLjgzNHYxNC4yNWMwIC4yNS0uMTY2LjQxNi0uMzMzLjU4MyAwIC4wODMtLjA4My4wODMtLjE2Ny4wODN6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnTWFya0ZpbGxcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdNZWRpYShwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE5Ljc1IDJINC4yNUMzLjAxIDIgMiAzLjAxIDIgNC4yNXYxNS41QzIgMjAuOTkgMy4wMSAyMiA0LjI1IDIyaDE1LjVjMS4yNCAwIDIuMjUtMS4wMSAyLjI1LTIuMjVWNC4yNUMyMiAzLjAxIDIwLjk5IDIgMTkuNzUgMnpNNC4yNSAzLjVoMTUuNWMuNDEzIDAgLjc1LjMzNy43NS43NXY5LjY3NmwtMy44NTgtMy44NThhLjc1Ljc1IDAgMDAtLjUzLS4yMmgtLjAwM2EuNzQuNzQgMCAwMC0uNTMyLjIyNGwtNC4zMTcgNC4zODQtMS44MTMtMS44MDZhLjc1Ljc1IDAgMDAtLjUzLS4yMmMtLjE5My0uMDMtLjM5NS4wOC0uNTM1LjIyN0wzLjUgMTcuNjQyVjQuMjVjMC0uNDEzLjMzNy0uNzUuNzUtLjc1em0tLjc0NCAxNi4yOGw1LjQxOC01LjUzNCA2LjI4MiA2LjI1NEg0LjI1YS43NS43NSAwIDAxLS43NDQtLjcyem0xNi4yNDQuNzJoLTIuNDJsLTUuMDA3LTQuOTg3IDMuNzkyLTMuODUgNC4zODUgNC4zODR2My43MDNjMCAuNDEzLS4zMzcuNzUtLjc1Ljc1elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTguODY4IDkuODUxYTEuNTQyIDEuNTQyIDAgMTAwLTMuMDg0IDEuNTQyIDEuNTQyIDAgMDAwIDMuMDg0elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z01lZGlhXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnTWVzc2FnZShwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE2LjA0MiAyLjUxNUgzLjk1OGEyLjI5NCAyLjI5NCAwIDAwLTIuMjkxIDIuMjkzdjEwLjQxM2EyLjI5NSAyLjI5NSAwIDAwMi4yOTEgMi4yOTRoMTIuMDg0YTIuMjk1IDIuMjk1IDAgMDAyLjI5MS0yLjI5NFY0LjgwOGEyLjI5NCAyLjI5NCAwIDAwLTIuMjkxLTIuMjkzek0zLjk1OCAzLjc2NWgxMi4wODRjLjU3NSAwIDEuMDQxLjQ2NyAxLjA0MSAxLjA0MnYuNTk1bC02LjcwOCA0LjQ3MmEuNjc1LjY3NSAwIDAxLS43NS0uMDAybC02LjcwOC00LjQ3di0uNTk1YzAtLjU3NS40NjYtMS4wNDIgMS4wNDEtMS4wNDJ6bTEyLjA4NCAxMi40OThIMy45NThhMS4wNDIgMS4wNDIgMCAwMS0xLjA0MS0xLjA0MVY2Ljg2N2w2LjAzMyA0LjAyNWExLjg4OCAxLjg4OCAwIDAwMi4xIDBsNi4wMzMtNC4wMjR2OC4zNTFjMCAuNTc1LS40NjYgMS4wNDItMS4wNDEgMS4wNDJ2LjAwMnpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdNZXNzYWdlXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnTWVzc2FnZUZpbGwocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk05LjYyNSAxMC4wNjhhLjY3NS42NzUgMCAwMC43NSAwbDcuOTU4LTUuMzA1di0uMThhMS44NzggMS44NzggMCAwMC0xLjg3NS0xLjg3NUgzLjU0MmExLjg3OCAxLjg3OCAwIDAwLTEuODc1IDEuODc1di4xNjRsNy45NTggNS4zMjF6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTEuMDUgMTEuMDhhMS44ODggMS44ODggMCAwMS0yLjEtLjAwMkwxLjY2NyA2LjIxdjkuNzI1YzAgMS4wMzMuODQxIDEuODc1IDEuODc1IDEuODc1aDEyLjkxNmExLjg3OCAxLjg3OCAwIDAwMS44NzUtMS44NzV2LTkuNzFsLTcuMjgzIDQuODUzdi4wMDF6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnTWVzc2FnZUZpbGxcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdNb25leShwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEyIDI0YzYuNjI3IDAgMTItNS4zNzMgMTItMTJTMTguNjI3IDAgMTIgMCAwIDUuMzczIDAgMTJzNS4zNzMgMTIgMTIgMTJ6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzMzNEQ1Q1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBvcGFjaXR5PXswLjF9XG4gICAgICAgICAgICAgICAgZD1cIk0xNC4yMDMgNS45NTJMNS4xMjUgOS4xNDl2MS4wMjJsLjEzLjEzLS4xMy4wNDh2MS4wMjJsLjEzLjEzLS4xMy4wNDh2MS4wMjJsLjEzLjEzLS4xMy4wNDh2MS4wMjJsLjEzLjEzLS4xMy4wNDh2MS4wMjJsOC44NjMgOC44NjNjNS40NjctLjkxMiA5LjY4My01LjUxNyA5Ljk5My0xMS4xNjZMMTguODc1IDcuNTZsLTQuNjcyLTEuNjA3elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE2LjY1NCAxMi42MThsLTIuNDUtLjg0NS00Ljc2MiAxLjY3Ny00LjMxNy40OTh2MS4wMjJsNC42NzEgMS42MSA5LjA3OS0zLjE5N3YtMS4wMjJsLTIuMjIxLjI1N3pcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjMzE5NzhDXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTQuMjA0IDEwLjc1MmwtOS4wNzkgMy4xOTYgNC42NzEgMS42MSA5LjA3OS0zLjE5Ny00LjY3MS0xLjYxelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiMzRUE2OUJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk05LjE4IDE1LjExNmwtMi43NzgtLjk1OGMuMzM1LS4xMTguMzMyLS4zMDgtLjAwNy0uNDI0bDcuMjA2LTIuNTM3Yy4zMzguMTE2Ljg4NC4xMTUgMS4yMi0uMDAzbDIuNzc3Ljk1N2MtLjMzNS4xMTgtLjMzMi4zMDguMDA3LjQyNWwtNy4yMDYgMi41MzdjLS4zMzktLjExNi0uODg0LS4xMTUtMS4yMi4wMDN6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzQ0QzRBMVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEzLjI0NSAxMi43MTZjLjg4LjMwNCAxLjAzNi43NDYuMzQ4Ljk4OC0uNjg3LjI0Mi0xLjk1OC4xOTItMi44MzgtLjExLS44OC0uMzA0LTEuMDM2LS43NDYtLjM0OC0uOTg4LjY4Ny0uMjQyIDEuOTU4LS4xOTMgMi44MzguMTF6TTE1LjgwOSAxMS44MTRjLjE1Ny4wNTQuMTU4LjE0Mi4wMDMuMTk3LS4xNTYuMDU1LS40MS4wNTYtLjU2Ny4wMDEtLjE1Ny0uMDU0LS4xNTktLjE0Mi0uMDAzLS4xOTcuMTU2LS4wNTUuNDEtLjA1NS41NjYtLjAwMXpNOC43NTUgMTQuMjk3Yy4xNTcuMDU1LjE1OS4xNDMuMDAzLjE5OC0uMTU2LjA1NS0uNDEuMDU1LS41NjcgMC0uMTU3LS4wNTMtLjE1OC0uMTQyLS4wMDMtLjE5Ni4xNTYtLjA1NS40MS0uMDU2LjU2Ny0uMDAyelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiMzRUE2OUJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMy4yMTYgMTMuNjJsLS4yMjYtLjA3N2E0LjM4OCA0LjM4OCAwIDAxLTEuMDkuMTQ5bC0uMDQ3LS4xNzJjLjMyMi0uMDA4LjU4OS0uMDQuOC0uMDkzbC0uNjAxLS4yMDdhNC4xNjUgNC4xNjUgMCAwMS0uNzI3LjEwMiAxLjU2MiAxLjU2MiAwIDAxLS41NjUtLjA4MmMtLjE3OC0uMDYyLS4yNjItLjEzNC0uMjUzLS4yMTYuMDEtLjA4My4xMS0uMTYxLjI5Ny0uMjM0bC0uMTU1LS4wNTQuMTk2LS4wNjkuMTU4LjA1NWMuMjQxLS4wNzQuNTMxLS4xMjIuODctLjE0NGwuMDg1LjE2OGEzLjE5MSAzLjE5MSAwIDAwLS42MTcuMDkybC41ODIuMi4wMDktLjAwM2E0LjE2IDQuMTYgMCAwMS43NDMtLjEwNGMuMjA2LS4wMDYuMzk5LjAyMi41OC4wODQuMTguMDYyLjI2NC4xMzUuMjUuMjE5LS4wMTMuMDg0LS4xMTguMTY0LS4zMTYuMjRsLjIyMy4wNzgtLjE5Ni4wNjl6bS0yLjIxNC0uNjEyYy0uMDA2LjAzNS4wMjYuMDY0LjA5NS4wODdhLjY3LjY3IDAgMDAuMjI1LjAzNWMuMDgxIDAgLjE5OC0uMDE0LjM1LS4wNDJsLS41MzctLjE4NGMtLjA4My4wMzUtLjEyOC4wNy0uMTMzLjEwNHptMi4wMDIuMjRjLjAxLS4wMzUtLjAyMi0uMDY2LS4wOTQtLjA5MWEuNy43IDAgMDAtLjI0LS4wMzYgMi4zMiAyLjMyIDAgMDAtLjM3LjA0OGwuNTU4LjE5MmMuMDg3LS4wMzguMTM2LS4wNzUuMTQ2LS4xMTJ6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzQ0QzRBMVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE2LjY1NCAxMS40MThsLTIuNDUtLjg0NS00Ljc2MiAxLjY3Ny00LjMxNy40OTh2MS4wMjJsNC42NzEgMS42MSA5LjA3OS0zLjE5N1YxMS4xNmwtMi4yMjEuMjU3elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiMzMTk3OENcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNC4yMDQgOS41NTJsLTkuMDc5IDMuMTk2IDQuNjcxIDEuNjEgOS4wNzktMy4xOTctNC42NzEtMS42MXpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjM0VBNjlCXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNOS4xOCAxMy45MTVsLTIuNzc4LS45NTdjLjMzNS0uMTE4LjMzMi0uMzA4LS4wMDctLjQyNGw3LjIwNi0yLjUzOGMuMzM4LjExNy44ODQuMTE2IDEuMjItLjAwMmwyLjc3Ny45NTdjLS4zMzUuMTE4LS4zMzIuMzA4LjAwNy40MjVsLTcuMjA2IDIuNTM3Yy0uMzM5LS4xMTctLjg4NC0uMTE2LTEuMjIuMDAyelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM0NEM0QTFcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMy4yNDUgMTEuNTE2Yy44OC4zMDQgMS4wMzYuNzQ2LjM0OC45ODgtLjY4Ny4yNDItMS45NTguMTkzLTIuODM4LS4xMS0uODgtLjMwNC0xLjAzNi0uNzQ2LS4zNDgtLjk4OC42ODctLjI0MiAxLjk1OC0uMTkzIDIuODM4LjExek0xNS44MDkgMTAuNjE0Yy4xNTcuMDU0LjE1OC4xNDIuMDAzLjE5Ny0uMTU2LjA1NS0uNDEuMDU1LS41NjcuMDAxLS4xNTctLjA1NC0uMTU5LS4xNDItLjAwMy0uMTk3LjE1Ni0uMDU1LjQxLS4wNTUuNTY2LS4wMDF6TTguNzU1IDEzLjA5N2MuMTU3LjA1NS4xNTkuMTQzLjAwMy4xOTgtLjE1Ni4wNTUtLjQxLjA1NS0uNTY3IDAtLjE1Ny0uMDUzLS4xNTgtLjE0Mi0uMDAzLS4xOTcuMTU2LS4wNTQuNDEtLjA1NS41NjcgMHpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjM0VBNjlCXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuMjE2IDEyLjQybC0uMjI2LS4wNzdhNC4zODggNC4zODggMCAwMS0xLjA5LjE0OWwtLjA0Ny0uMTcyYy4zMjItLjAwOC41ODktLjA0LjgtLjA5NGwtLjYwMS0uMjA3YTQuMTY1IDQuMTY1IDAgMDEtLjcyNy4xMDMgMS41NjIgMS41NjIgMCAwMS0uNTY1LS4wODJjLS4xNzgtLjA2Mi0uMjYyLS4xMzQtLjI1My0uMjE2LjAxLS4wODMuMTEtLjE2MS4yOTctLjIzNGwtLjE1NS0uMDU0LjE5Ni0uMDY5LjE1OC4wNTVjLjI0MS0uMDc0LjUzMS0uMTIyLjg3LS4xNDVsLjA4NS4xNjlhMy4xOTEgMy4xOTEgMCAwMC0uNjE3LjA5MmwuNTgyLjIuMDA5LS4wMDNhNC4xNiA0LjE2IDAgMDEuNzQzLS4xMDRjLjIwNi0uMDA2LjM5OS4wMjIuNTguMDg0LjE4LjA2Mi4yNjQuMTM1LjI1LjIxOS0uMDEzLjA4NC0uMTE4LjE2NC0uMzE2LjI0bC4yMjMuMDc4LS4xOTYuMDY5em0tMi4yMTQtLjYxMmMtLjAwNi4wMzQuMDI2LjA2My4wOTUuMDg3YS42Ny42NyAwIDAwLjIyNS4wMzVjLjA4MSAwIC4xOTgtLjAxNC4zNS0uMDQybC0uNTM3LS4xODRjLS4wODMuMDM1LS4xMjguMDctLjEzMy4xMDR6bTIuMDAyLjI0Yy4wMS0uMDM2LS4wMjItLjA2Ni0uMDk0LS4wOTFhLjcwMi43MDIgMCAwMC0uMjQtLjAzNiAyLjMyIDIuMzIgMCAwMC0uMzcuMDQ4bC41NTguMTkyYy4wODctLjAzOC4xMzYtLjA3Ni4xNDYtLjExMnpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjNDRDNEExXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTYuNjU0IDEwLjIxN2wtMi40NS0uODQ0LTQuNzYyIDEuNjc3LTQuMzE3LjQ5OHYxLjAyMmw0LjY3MSAxLjYxIDkuMDc5LTMuMTk3VjkuOTZsLTIuMjIxLjI1NnpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjMzE5NzhDXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTQuMjA0IDguMzUybC05LjA3OSAzLjE5NiA0LjY3MSAxLjYxIDkuMDc5LTMuMTk3LTQuNjcxLTEuNjF6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzNFQTY5QlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTkuMTggMTIuNzE1bC0yLjc3OC0uOTU3Yy4zMzUtLjExOC4zMzItLjMwOC0uMDA3LS40MjRsNy4yMDYtMi41MzhjLjMzOC4xMTcuODg0LjExNiAxLjIyLS4wMDJsMi43NzcuOTU3Yy0uMzM1LjExOC0uMzMyLjMwOC4wMDcuNDI1bC03LjIwNiAyLjUzN2MtLjMzOS0uMTE3LS44ODQtLjExNi0xLjIyLjAwMnpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjNDRDNEExXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuMjQ1IDEwLjMxNmMuODguMzAzIDEuMDM2Ljc0NS4zNDguOTg4LS42ODcuMjQyLTEuOTU4LjE5Mi0yLjgzOC0uMTEtLjg4LS4zMDQtMS4wMzYtLjc0Ni0uMzQ4LS45ODguNjg3LS4yNDIgMS45NTgtLjE5MyAyLjgzOC4xMXpNMTUuODA5IDkuNDE0Yy4xNTcuMDU0LjE1OC4xNDIuMDAzLjE5Ny0uMTU2LjA1NS0uNDEuMDU1LS41NjcuMDAxLS4xNTctLjA1NC0uMTU5LS4xNDItLjAwMy0uMTk3LjE1Ni0uMDU1LjQxLS4wNTUuNTY2LS4wMDF6TTguNzU1IDExLjg5N2MuMTU3LjA1NC4xNTkuMTQzLjAwMy4xOTgtLjE1Ni4wNTQtLjQxLjA1NS0uNTY3IDAtLjE1Ny0uMDU0LS4xNTgtLjE0Mi0uMDAzLS4xOTcuMTU2LS4wNTQuNDEtLjA1NS41NjcgMHpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjM0VBNjlCXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuMjE2IDExLjIybC0uMjI2LS4wNzdhNC4zODMgNC4zODMgMCAwMS0xLjA5LjE0OWwtLjA0Ny0uMTcyYy4zMjItLjAwOC41ODktLjA0LjgtLjA5NGwtLjYwMS0uMjA3YTQuMTc2IDQuMTc2IDAgMDEtLjcyNy4xMDMgMS41NjIgMS41NjIgMCAwMS0uNTY1LS4wODNjLS4xNzgtLjA2MS0uMjYyLS4xMzMtLjI1My0uMjE2LjAxLS4wODIuMTEtLjE2LjI5Ny0uMjMzbC0uMTU1LS4wNTQuMTk2LS4wNjkuMTU4LjA1NWMuMjQxLS4wNzQuNTMxLS4xMjIuODctLjE0NWwuMDg1LjE2OWEzLjE5MSAzLjE5MSAwIDAwLS42MTcuMDkybC41ODIuMi4wMDktLjAwM2E0LjE2IDQuMTYgMCAwMS43NDMtLjEwNGMuMjA2LS4wMDYuMzk5LjAyMi41OC4wODQuMTguMDYyLjI2NC4xMzUuMjUuMjE5LS4wMTMuMDg0LS4xMTguMTY0LS4zMTYuMjRsLjIyMy4wNzgtLjE5Ni4wNjl6bS0yLjIxNC0uNjEyYy0uMDA2LjAzNC4wMjYuMDYzLjA5NS4wODcuMDY5LjAyNC4xNDQuMDM2LjIyNS4wMzUuMDgxIDAgLjE5OC0uMDE0LjM1LS4wNDJsLS41MzctLjE4NGMtLjA4My4wMzUtLjEyOC4wNy0uMTMzLjEwNHptMi4wMDIuMjRjLjAxLS4wMzYtLjAyMi0uMDY2LS4wOTQtLjA5MWEuNzAyLjcwMiAwIDAwLS4yNC0uMDM2Yy0uMDg3LjAwMi0uMjEuMDE3LS4zNy4wNDhsLjU1OC4xOTJjLjA4Ny0uMDM4LjEzNi0uMDc2LjE0Ni0uMTEyelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM0NEM0QTFcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNi42NTQgOS4wMTdsLTIuNDUtLjg0NEw5LjQ0MiA5Ljg1bC00LjMxNy40OTh2MS4wMjJsNC42NzEgMS42MSA5LjA3OS0zLjE5N1Y4Ljc2bC0yLjIyMS4yNTZ6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzMxOTc4Q1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE0LjIwNCA3LjE1MmwtOS4wNzkgMy4xOTYgNC42NzEgMS42MSA5LjA3OS0zLjE5Ny00LjY3MS0xLjYxelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiMzRUE2OUJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk05LjE4IDExLjUxNWwtMi43NzgtLjk1N2MuMzM1LS4xMTguMzMyLS4zMDgtLjAwNy0uNDI1bDcuMjA2LTIuNTM3Yy4zMzguMTE3Ljg4NC4xMTYgMS4yMi0uMDAybDIuNzc3Ljk1N2MtLjMzNS4xMTgtLjMzMi4zMDguMDA3LjQyNWwtNy4yMDYgMi41MzdjLS4zMzktLjExNy0uODg0LS4xMTYtMS4yMi4wMDJ6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzQ0QzRBMVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEzLjI0NSA5LjExNmMuODguMzAzIDEuMDM2Ljc0NS4zNDguOTg4LS42ODcuMjQyLTEuOTU4LjE5Mi0yLjgzOC0uMTExLS44OC0uMzAzLTEuMDM2LS43NDUtLjM0OC0uOTg3LjY4Ny0uMjQzIDEuOTU4LS4xOTMgMi44MzguMTF6TTE1LjgwOSA4LjIxNGMuMTU3LjA1NC4xNTguMTQyLjAwMy4xOTctLjE1Ni4wNTUtLjQxLjA1NS0uNTY3LjAwMS0uMTU3LS4wNTQtLjE1OS0uMTQzLS4wMDMtLjE5Ny4xNTYtLjA1NS40MS0uMDU2LjU2Ni0uMDAxek04Ljc1NSAxMC42OTdjLjE1Ny4wNTQuMTU5LjE0My4wMDMuMTk4LS4xNTYuMDU0LS40MS4wNTUtLjU2NyAwLS4xNTctLjA1NC0uMTU4LS4xNDItLjAwMy0uMTk3LjE1Ni0uMDU1LjQxLS4wNTUuNTY3IDB6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzNFQTY5QlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEzLjIxNiAxMC4wMmwtLjIyNi0uMDc3YTQuMzg4IDQuMzg4IDAgMDEtMS4wOS4xNDlsLS4wNDctLjE3MmMuMzIyLS4wMDguNTg5LS4wNC44LS4wOTRsLS42MDEtLjIwN2E0LjE3NCA0LjE3NCAwIDAxLS43MjcuMTAzIDEuNTYzIDEuNTYzIDAgMDEtLjU2NS0uMDgzYy0uMTc4LS4wNjEtLjI2Mi0uMTMzLS4yNTMtLjIxNi4wMS0uMDgyLjExLS4xNi4yOTctLjIzNGwtLjE1NS0uMDUzLjE5Ni0uMDY5LjE1OC4wNTRjLjI0MS0uMDczLjUzMS0uMTIxLjg3LS4xNDRsLjA4NS4xNjhhMy4xODggMy4xODggMCAwMC0uNjE3LjA5M2wuNTgyLjIuMDA5LS4wMDNjLjI5LS4wNjMuNTM4LS4wOTguNzQzLS4xMDQuMjA2LS4wMDYuMzk5LjAyMi41OC4wODQuMTguMDYyLjI2NC4xMzUuMjUuMjE5LS4wMTMuMDgzLS4xMTguMTY0LS4zMTYuMjRsLjIyMy4wNzctLjE5Ni4wN3ptLTIuMjE0LS42MTJjLS4wMDYuMDM0LjAyNi4wNjMuMDk1LjA4Ny4wNjkuMDI0LjE0NC4wMzYuMjI1LjAzNS4wODEgMCAuMTk4LS4wMTQuMzUtLjA0MmwtLjUzNy0uMTg0Yy0uMDgzLjAzNS0uMTI4LjA3LS4xMzMuMTA0em0yLjAwMi4yNGMuMDEtLjAzNi0uMDIyLS4wNjYtLjA5NC0uMDkxYS43LjcgMCAwMC0uMjQtLjAzNiAyLjMyIDIuMzIgMCAwMC0uMzcuMDQ4bC41NTguMTkyYy4wODctLjAzOS4xMzYtLjA3Ni4xNDYtLjExMnpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjNDRDNEExXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTYuNjU0IDcuODE3bC0yLjQ1LS44NDRMOS40NDIgOC42NWwtNC4zMTcuNDk4djEuMDIybDQuNjcxIDEuNjEgOS4wNzktMy4xOTdWNy41NmwtMi4yMjEuMjU2elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiMzMTk3OENcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNC4yMDQgNS45NTFMNS4xMjUgOS4xNDhsNC42NzEgMS42MSA5LjA3OS0zLjE5Ny00LjY3MS0xLjYxelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiMzRUE2OUJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk05LjE4IDEwLjMxNWwtMi43NzgtLjk1N2MuMzM1LS4xMTguMzMyLS4zMDgtLjAwNy0uNDI1bDcuMjA2LTIuNTM3Yy4zMzguMTE3Ljg4NC4xMTYgMS4yMi0uMDAybDIuNzc3Ljk1N2MtLjMzNS4xMTgtLjMzMi4zMDguMDA3LjQyNWwtNy4yMDYgMi41MzdjLS4zMzktLjExNy0uODg0LS4xMTYtMS4yMi4wMDJ6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzQ0QzRBMVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEzLjI0NSA3LjkxNmMuODguMzAzIDEuMDM2Ljc0NS4zNDguOTg3LS42ODcuMjQzLTEuOTU4LjE5My0yLjgzOC0uMTEtLjg4LS4zMDMtMS4wMzYtLjc0NS0uMzQ4LS45ODguNjg3LS4yNDIgMS45NTgtLjE5MiAyLjgzOC4xMTF6TTE1LjgwOSA3LjAxNGMuMTU3LjA1NC4xNTguMTQyLjAwMy4xOTctLjE1Ni4wNTUtLjQxLjA1NS0uNTY3IDAtLjE1Ny0uMDUzLS4xNTktLjE0Mi0uMDAzLS4xOTYuMTU2LS4wNTUuNDEtLjA1Ni41NjYtLjAwMXpNOC43NTUgOS40OTdjLjE1Ny4wNTQuMTU5LjE0My4wMDMuMTk3LS4xNTYuMDU1LS40MS4wNTYtLjU2Ny4wMDEtLjE1Ny0uMDU0LS4xNTgtLjE0Mi0uMDAzLS4xOTcuMTU2LS4wNTUuNDEtLjA1NS41NjcgMHpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjM0VBNjlCXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuMjE2IDguODJsLS4yMjYtLjA3OGE0LjM4NiA0LjM4NiAwIDAxLTEuMDkuMTVsLS4wNDctLjE3MmMuMzIyLS4wMDguNTg5LS4wNC44LS4wOTRsLS42MDEtLjIwN2E0LjE3NCA0LjE3NCAwIDAxLS43MjcuMTAzIDEuNTYzIDEuNTYzIDAgMDEtLjU2NS0uMDgzYy0uMTc4LS4wNjEtLjI2Mi0uMTMzLS4yNTMtLjIxNi4wMS0uMDgyLjExLS4xNi4yOTctLjIzNGwtLjE1NS0uMDUzLjE5Ni0uMDY5LjE1OC4wNTRjLjI0MS0uMDczLjUzMS0uMTIxLjg3LS4xNDRsLjA4NS4xNjhhMy4xODcgMy4xODcgMCAwMC0uNjE3LjA5M2wuNTgyLjIuMDA5LS4wMDNjLjI5LS4wNjMuNTM4LS4wOTguNzQzLS4xMDQuMjA2LS4wMDYuMzk5LjAyMi41OC4wODQuMTguMDYyLjI2NC4xMzUuMjUuMjE5LS4wMTMuMDgzLS4xMTguMTY0LS4zMTYuMjRsLjIyMy4wNzctLjE5Ni4wN3ptLTIuMjE0LS42MTJjLS4wMDYuMDM0LjAyNi4wNjMuMDk1LjA4Ny4wNjkuMDI0LjE0NC4wMzYuMjI1LjAzNS4wODEgMCAuMTk4LS4wMTQuMzUtLjA0MmwtLjUzNy0uMTg0Yy0uMDgzLjAzNS0uMTI4LjA3LS4xMzMuMTA0em0yLjAwMi4yNGMuMDEtLjAzNi0uMDIyLS4wNjctLjA5NC0uMDkxYS43LjcgMCAwMC0uMjQtLjAzNiAyLjMyIDIuMzIgMCAwMC0uMzcuMDQ3bC41NTguMTkyYy4wODctLjAzOC4xMzYtLjA3NS4xNDYtLjExMXpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjNDRDNEExXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuMjcgOS41MzR2NS44MjRsMi4wODgtLjczNVY4Ljc5OWwtMi4wODguNzM1elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNmZmZcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMy41MiA5LjQ0N3Y1LjgyM2wuMjE1LS4wNzZWOS4zNzFsLS4yMTYuMDc2ek0xNC44OTQgOC45NjN2NS44MjNsLjIxNS0uMDc1VjguODg2bC0uMjE1LjA3NnpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjRkNENDYyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTUuMTMgMTcuMzAyYzAgLjQxMi0uNzk2Ljc0Ny0xLjc3Ny43NDctLjk4IDAtMS43NzYtLjMzNS0xLjc3Ni0uNzQ3di0uNjExaDMuNTUydi42MXpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjRjZDMzU4XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuMzUyIDE3LjQzOGMuOTgyIDAgMS43NzctLjMzNSAxLjc3Ny0uNzQ3cy0uNzk1LS43NDctMS43NzctLjc0N2MtLjk4IDAtMS43NzYuMzM1LTEuNzc2Ljc0N3MuNzk1Ljc0NyAxLjc3Ni43NDd6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0ZDRDQ2MlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEzLjM1MyAxNi4wOWMtLjg1NiAwLTEuNTUuMjY5LTEuNTUuNiAwIC4zMzMuNjk0LjYwMiAxLjU1LjYwMi44NTYgMCAxLjU1LS4yNyAxLjU1LS42MDEgMC0uMzMyLS42OTQtLjYwMS0xLjU1LS42MDF6bTAgMS4xMzVjLS43NiAwLTEuMzc4LS4yNC0xLjM3OC0uNTM0IDAtLjI5NS42MTctLjUzNCAxLjM3OC0uNTM0Ljc2MSAwIDEuMzc4LjIzOSAxLjM3OC41MzQgMCAuMjk1LS42MTcuNTM0LTEuMzc4LjUzNHpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjREM4NzQ0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuMjk2IDE3LjEwNnYtLjA3M2EyLjI2IDIuMjYgMCAwMS0uNjM1LS4xMWwuMTg4LS4wODZjLjE0NS4wNDguMjk0LjA3Ny40NDcuMDg3di0uMTk1YTIuMTQ4IDIuMTQ4IDAgMDEtLjQyNy0uMDdjLS4wOS0uMDMtLjEzNi0uMDc0LS4xMzYtLjEzMSAwLS4wNTguMDUyLS4xMDUuMTU2LS4xNDIuMTA0LS4wMzcuMjQtLjA1Ny40MDctLjA2di0uMDVoLjE2NXYuMDVjLjE5LjAwNi4zNjkuMDMxLjUzOC4wNzZsLS4xNjguMDkyYTEuNzQ1IDEuNzQ1IDAgMDAtLjM3LS4wNTh2LjE4OGguMDA4Yy4xOTguMDE4LjM0NC4wNDMuNDM3LjA3My4wOTMuMDMxLjE0LjA3Ni4xNC4xMzQgMCAuMDU5LS4wNTQuMTA2LS4xNi4xNDNhMS40MTggMS40MTggMCAwMS0uNDI1LjA2di4wNzJoLS4xNjV6bS0uMTgyLS42NDdjLS4wNDQuMDE1LS4wNjYuMDM0LS4wNjYuMDU2IDAgLjAyMy4wMTcuMDQuMDUyLjA1NC4wMzQuMDEzLjEuMDI1LjE5Ni4wMzd2LS4xNzNhLjY1OC42NTggMCAwMC0uMTgyLjAyNnptLjU0NC40NGMuMDQ4LS4wMTYuMDcyLS4wMzUuMDcyLS4wNTkgMC0uMDIzLS4wMTktLjA0MS0uMDU3LS4wNTVhMS4xMSAxLjExIDAgMDAtLjIxMi0uMDM5di4xOGEuNzY2Ljc2NiAwIDAwLjE5Ny0uMDI3elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNEQzg3NDRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNS4xMyAxNi41NmMwIC40MTItLjc5Ni43NDctMS43NzcuNzQ3LS45OCAwLTEuNzc2LS4zMzUtMS43NzYtLjc0N3YtLjYxMWgzLjU1MnYuNjF6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0Y2QzM1OFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEzLjM1MiAxNi42OTVjLjk4MiAwIDEuNzc3LS4zMzQgMS43NzctLjc0NiAwLS40MTMtLjc5NS0uNzQ3LTEuNzc3LS43NDctLjk4IDAtMS43NzYuMzM0LTEuNzc2Ljc0NyAwIC40MTIuNzk1Ljc0NiAxLjc3Ni43NDZ6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0ZDRDQ2MlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEzLjM1MyAxNS4zNDhjLS44NTYgMC0xLjU1LjI2OS0xLjU1LjYgMCAuMzMzLjY5NC42MDIgMS41NS42MDIuODU2IDAgMS41NS0uMjcgMS41NS0uNjAxIDAtLjMzMi0uNjk0LS42MDEtMS41NS0uNjAxem0wIDEuMTM1Yy0uNzYgMC0xLjM3OC0uMjQtMS4zNzgtLjUzNCAwLS4yOTUuNjE3LS41MzQgMS4zNzgtLjUzNC43NjEgMCAxLjM3OC4yMzkgMS4zNzguNTM0IDAgLjI5NS0uNjE3LjUzNC0xLjM3OC41MzR6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0RDODc0NFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEzLjI5NiAxNi4zNjR2LS4wNzNhMi4yNiAyLjI2IDAgMDEtLjYzNS0uMTFsLjE4OC0uMDg2Yy4xNDUuMDQ4LjI5NC4wNzcuNDQ3LjA4N3YtLjE5NGEyLjE0OCAyLjE0OCAwIDAxLS40MjctLjA3MmMtLjA5LS4wMjktLjEzNi0uMDcyLS4xMzYtLjEzIDAtLjA1OC4wNTItLjEwNS4xNTYtLjE0MmExLjMzIDEuMzMgMCAwMS40MDctLjA2di0uMDVoLjE2NXYuMDVjLjE5LjAwNi4zNjkuMDMxLjUzOC4wNzZsLS4xNjguMDkyYTEuNzQ1IDEuNzQ1IDAgMDAtLjM3LS4wNTh2LjE4OGguMDA4Yy4xOTguMDE4LjM0NC4wNDMuNDM3LjA3My4wOTMuMDMxLjE0LjA3Ni4xNC4xMzQgMCAuMDU5LS4wNTQuMTA2LS4xNi4xNDNhMS40MjEgMS40MjEgMCAwMS0uNDI1LjA2di4wNzJoLS4xNjV6bS0uMTgyLS42NDZjLS4wNDQuMDE0LS4wNjYuMDMzLS4wNjYuMDU2IDAgLjAyMi4wMTcuMDQuMDUyLjA1My4wMzQuMDEzLjEuMDI1LjE5Ni4wMzd2LS4xNzNhLjY1My42NTMgMCAwMC0uMTgyLjAyN3ptLjU0NC40MzljLjA0OC0uMDE2LjA3Mi0uMDM1LjA3Mi0uMDU4IDAtLjAyNC0uMDE5LS4wNDItLjA1Ny0uMDU2YTEuMTEgMS4xMSAwIDAwLS4yMTItLjAzOHYuMThhLjc2Ni43NjYgMCAwMC4xOTctLjAyOHpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjREM4NzQ0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTUuMTMgMTUuODE4YzAgLjQxMi0uNzk2Ljc0Ny0xLjc3Ny43NDctLjk4IDAtMS43NzYtLjMzNS0xLjc3Ni0uNzQ3di0uNjExaDMuNTUydi42MXpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjRjZDMzU4XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuMzUyIDE1Ljk1NGMuOTgyIDAgMS43NzctLjMzNSAxLjc3Ny0uNzQ3cy0uNzk1LS43NDctMS43NzctLjc0N2MtLjk4IDAtMS43NzYuMzM1LTEuNzc2Ljc0N3MuNzk1Ljc0NyAxLjc3Ni43NDd6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0ZDRDQ2MlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEzLjM1MyAxNC42MDZjLS44NTYgMC0xLjU1LjI3LTEuNTUuNjAxIDAgLjMzMi42OTQuNiAxLjU1LjYuODU2IDAgMS41NS0uMjY4IDEuNTUtLjYgMC0uMzMyLS42OTQtLjYwMS0xLjU1LS42MDF6bTAgMS4xMzVjLS43NiAwLTEuMzc4LS4yMzktMS4zNzgtLjUzNCAwLS4yOTUuNjE3LS41MzQgMS4zNzgtLjUzNC43NjEgMCAxLjM3OC4yMzkgMS4zNzguNTM0IDAgLjI5NS0uNjE3LjUzNC0xLjM3OC41MzR6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0RDODc0NFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEzLjI5NiAxNS42MjJ2LS4wNzNhMi4yNiAyLjI2IDAgMDEtLjYzNS0uMTFsLjE4OC0uMDg2Yy4xNDUuMDQ5LjI5NC4wNzguNDQ3LjA4N3YtLjE5NGEyLjE2MyAyLjE2MyAwIDAxLS40MjctLjA3MmMtLjA5LS4wMjktLjEzNi0uMDcyLS4xMzYtLjEzIDAtLjA1OC4wNTItLjEwNS4xNTYtLjE0Mi4xMDQtLjAzNy4yNC0uMDU3LjQwNy0uMDZ2LS4wNWguMTY1di4wNWMuMTkuMDA2LjM2OS4wMzEuNTM4LjA3NmwtLjE2OC4wOTJhMS43NTIgMS43NTIgMCAwMC0uMzctLjA1OHYuMTg4aC4wMDhjLjE5OC4wMTguMzQ0LjA0My40MzcuMDczLjA5My4wMzEuMTQuMDc2LjE0LjEzNCAwIC4wNTktLjA1NC4xMDYtLjE2LjE0M2ExLjQxNSAxLjQxNSAwIDAxLS40MjUuMDZ2LjA3MmgtLjE2NXptLS4xODItLjY0NmMtLjA0NC4wMTUtLjA2Ni4wMzMtLjA2Ni4wNTYgMCAuMDIyLjAxNy4wNC4wNTIuMDUzLjAzNC4wMTMuMS4wMjUuMTk2LjAzN3YtLjE3M2EuNjU3LjY1NyAwIDAwLS4xODIuMDI3em0uNTQ0LjQzOWMuMDQ4LS4wMTYuMDcyLS4wMzUuMDcyLS4wNTggMC0uMDI0LS4wMTktLjA0Mi0uMDU3LS4wNTZhMS4xMSAxLjExIDAgMDAtLjIxMi0uMDM5di4xOGEuNzcuNzcgMCAwMC4xOTctLjAyN3pcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjREM4NzQ0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTUuMTMgMTUuMDc2YzAgLjQxMi0uNzk2Ljc0Ny0xLjc3Ny43NDctLjk4IDAtMS43NzYtLjMzNS0xLjc3Ni0uNzQ3di0uNjExaDMuNTUydi42MXpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjRjZDMzU4XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuMzUyIDE1LjIxMWMuOTgyIDAgMS43NzctLjMzNCAxLjc3Ny0uNzQ2IDAtLjQxMy0uNzk1LS43NDctMS43NzctLjc0Ny0uOTggMC0xLjc3Ni4zMzQtMS43NzYuNzQ3IDAgLjQxMi43OTUuNzQ2IDEuNzc2Ljc0NnpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjRkNENDYyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuMzUzIDEzLjg2NGMtLjg1NiAwLTEuNTUuMjctMS41NS42MDEgMCAuMzMyLjY5NC42IDEuNTUuNi44NTYgMCAxLjU1LS4yNjggMS41NS0uNiAwLS4zMzItLjY5NC0uNjAxLTEuNTUtLjYwMXptMCAxLjEzNWMtLjc2IDAtMS4zNzgtLjIzOS0xLjM3OC0uNTM0IDAtLjI5NS42MTctLjUzNCAxLjM3OC0uNTM0Ljc2MSAwIDEuMzc4LjIzOSAxLjM3OC41MzQgMCAuMjk1LS42MTcuNTM0LTEuMzc4LjUzNHpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjREM4NzQ0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuMjk2IDE0Ljg4di0uMDczYTIuMjYgMi4yNiAwIDAxLS42MzUtLjExbC4xODgtLjA4NmMuMTQ1LjA0OC4yOTQuMDc3LjQ0Ny4wODd2LS4xOTRhMi4xNTcgMi4xNTcgMCAwMS0uNDI3LS4wNzJjLS4wOS0uMDI5LS4xMzYtLjA3Mi0uMTM2LS4xMyAwLS4wNTguMDUyLS4xMDUuMTU2LS4xNDIuMTA0LS4wMzcuMjQtLjA1Ny40MDctLjA2di0uMDVoLjE2NXYuMDVjLjE5LjAwNi4zNjkuMDMxLjUzOC4wNzZsLS4xNjguMDkyYTEuNzUyIDEuNzUyIDAgMDAtLjM3LS4wNTh2LjE4OGguMDA4Yy4xOTguMDE4LjM0NC4wNDMuNDM3LjA3NC4wOTMuMDMuMTQuMDc1LjE0LjEzMyAwIC4wNTktLjA1NC4xMDYtLjE2LjE0M2ExLjQxOCAxLjQxOCAwIDAxLS40MjUuMDZ2LjA3MmgtLjE2NXptLS4xODItLjY0NmMtLjA0NC4wMTUtLjA2Ni4wMzMtLjA2Ni4wNTYgMCAuMDIyLjAxNy4wNC4wNTIuMDUzLjAzNC4wMTMuMS4wMjUuMTk2LjAzN3YtLjE3M2EuNjU0LjY1NCAwIDAwLS4xODIuMDI3em0uNTQ0LjQzOWMuMDQ4LS4wMTYuMDcyLS4wMzUuMDcyLS4wNTggMC0uMDI0LS4wMTktLjA0Mi0uMDU3LS4wNTZhMS4xMSAxLjExIDAgMDAtLjIxMi0uMDM4di4xOGEuNzcuNzcgMCAwMC4xOTctLjAyOHpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjREM4NzQ0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTUuMTMgMTQuMzM0YzAgLjQxMi0uNzk2Ljc0Ny0xLjc3Ny43NDctLjk4IDAtMS43NzYtLjMzNS0xLjc3Ni0uNzQ3di0uNjFoMy41NTJ2LjYxelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNGNkMzNThcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMy4zNTIgMTQuNDdjLjk4MiAwIDEuNzc3LS4zMzQgMS43NzctLjc0NyAwLS40MTItLjc5NS0uNzQ3LTEuNzc3LS43NDctLjk4IDAtMS43NzYuMzM1LTEuNzc2Ljc0NyAwIC40MTMuNzk1Ljc0NyAxLjc3Ni43NDd6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0ZDRDQ2MlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEzLjM1MyAxMy4xMjJjLS44NTYgMC0xLjU1LjI3LTEuNTUuNjAxIDAgLjMzMi42OTQuNjAxIDEuNTUuNjAxLjg1NiAwIDEuNTUtLjI2OSAxLjU1LS42IDAtLjMzMy0uNjk0LS42MDItMS41NS0uNjAyem0wIDEuMTM1Yy0uNzYgMC0xLjM3OC0uMjM5LTEuMzc4LS41MzQgMC0uMjk1LjYxNy0uNTM0IDEuMzc4LS41MzQuNzYxIDAgMS4zNzguMjQgMS4zNzguNTM0IDAgLjI5NS0uNjE3LjUzNC0xLjM3OC41MzR6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0RDODc0NFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEzLjI5NiAxNC4xMzh2LS4wNzNhMi4yNTcgMi4yNTcgMCAwMS0uNjM1LS4xMWwuMTg4LS4wODZjLjE0NS4wNDkuMjk0LjA3OC40NDcuMDg3di0uMTk0YTIuMTYzIDIuMTYzIDAgMDEtLjQyNy0uMDcxYy0uMDktLjAzLS4xMzYtLjA3My0uMTM2LS4xMzEgMC0uMDU4LjA1Mi0uMTA1LjE1Ni0uMTQyYTEuMzMgMS4zMyAwIDAxLjQwNy0uMDZ2LS4wNWguMTY1di4wNTFjLjE5LjAwNS4zNjkuMDMuNTM4LjA3NWwtLjE2OC4wOTJhMS43NTIgMS43NTIgMCAwMC0uMzctLjA1OHYuMTg4aC4wMDhjLjE5OC4wMTkuMzQ0LjA0My40MzcuMDc0LjA5My4wMy4xNC4wNzUuMTQuMTMzIDAgLjA1OS0uMDU0LjEwNi0uMTYuMTQzYTEuNDE1IDEuNDE1IDAgMDEtLjQyNS4wNnYuMDcyaC0uMTY1em0tLjE4Mi0uNjQ2Yy0uMDQ0LjAxNS0uMDY2LjAzMy0uMDY2LjA1NiAwIC4wMjIuMDE3LjA0LjA1Mi4wNTMuMDM0LjAxMy4xLjAyNS4xOTYuMDM3di0uMTczYS42NTguNjU4IDAgMDAtLjE4Mi4wMjd6bS41NDQuNDM5Yy4wNDgtLjAxNS4wNzItLjAzNS4wNzItLjA1OHMtLjAxOS0uMDQyLS4wNTctLjA1NmExLjExMiAxLjExMiAwIDAwLS4yMTItLjAzOHYuMThhLjc3NS43NzUgMCAwMC4xOTctLjAyOHpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjREM4NzQ0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTUuMTMgMTMuNTkyYzAgLjQxMi0uNzk2Ljc0Ny0xLjc3Ny43NDctLjk4IDAtMS43NzYtLjMzNS0xLjc3Ni0uNzQ3di0uNjFoMy41NTJ2LjYxelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNGNkMzNThcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMy4zNTIgMTMuNzI4Yy45ODIgMCAxLjc3Ny0uMzM1IDEuNzc3LS43NDdzLS43OTUtLjc0Ny0xLjc3Ny0uNzQ3Yy0uOTggMC0xLjc3Ni4zMzUtMS43NzYuNzQ3cy43OTUuNzQ3IDEuNzc2Ljc0N3pcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjRkNENDYyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuMzUzIDEyLjM4Yy0uODU2IDAtMS41NS4yNy0xLjU1LjYwMSAwIC4zMzIuNjk0LjYwMSAxLjU1LjYwMS44NTYgMCAxLjU1LS4yNjkgMS41NS0uNiAwLS4zMzMtLjY5NC0uNjAyLTEuNTUtLjYwMnptMCAxLjEzNWMtLjc2IDAtMS4zNzgtLjIzOS0xLjM3OC0uNTM0IDAtLjI5NS42MTctLjUzNCAxLjM3OC0uNTM0Ljc2MSAwIDEuMzc4LjI0IDEuMzc4LjUzNCAwIC4yOTUtLjYxNy41MzQtMS4zNzguNTM0elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNEQzg3NDRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMy4yOTYgMTMuMzk2di0uMDczYTIuMjYgMi4yNiAwIDAxLS42MzUtLjEwOWwuMTg4LS4wODdjLjE0NS4wNDkuMjk0LjA3OC40NDcuMDg3di0uMTk0YTIuMTQ4IDIuMTQ4IDAgMDEtLjQyNy0uMDcxYy0uMDktLjAzLS4xMzYtLjA3My0uMTM2LS4xMzEgMC0uMDU4LjA1Mi0uMTA1LjE1Ni0uMTQyLjEwNC0uMDM3LjI0LS4wNTcuNDA3LS4wNnYtLjA1aC4xNjV2LjA1MWMuMTkuMDA1LjM2OS4wMy41MzguMDc1bC0uMTY4LjA5MmExLjc0NSAxLjc0NSAwIDAwLS4zNy0uMDU4di4xODhoLjAwOGMuMTk4LjAxOS4zNDQuMDQzLjQzNy4wNzQuMDkzLjAzLjE0LjA3NS4xNC4xMzMgMCAuMDU5LS4wNTQuMTA2LS4xNi4xNDNhMS40MjEgMS40MjEgMCAwMS0uNDI1LjA2di4wNzJoLS4xNjV6bS0uMTgyLS42NDZjLS4wNDQuMDE1LS4wNjYuMDM0LS4wNjYuMDU2cy4wMTcuMDQuMDUyLjA1M2MuMDM0LjAxMy4xLjAyNS4xOTYuMDM3di0uMTczYS42NTcuNjU3IDAgMDAtLjE4Mi4wMjd6bS41NDQuNDM5Yy4wNDgtLjAxNS4wNzItLjAzNS4wNzItLjA1OCAwLS4wMjQtLjAxOS0uMDQyLS4wNTctLjA1NmExLjExIDEuMTEgMCAwMC0uMjEyLS4wMzh2LjE4YS43NjYuNzY2IDAgMDAuMTk3LS4wMjh6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0RDODc0NFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE1LjEzIDEyLjg1YzAgLjQxMy0uNzk2Ljc0Ny0xLjc3Ny43NDctLjk4IDAtMS43NzYtLjMzNS0xLjc3Ni0uNzQ3di0uNjFoMy41NTJ2LjYxelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNGNkMzNThcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMy4zNTIgMTIuOTg2Yy45ODIgMCAxLjc3Ny0uMzM0IDEuNzc3LS43NDcgMC0uNDEyLS43OTUtLjc0Ny0xLjc3Ny0uNzQ3LS45OCAwLTEuNzc2LjMzNS0xLjc3Ni43NDcgMCAuNDEzLjc5NS43NDcgMS43NzYuNzQ3elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNGQ0Q0NjJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMy4zNTMgMTEuNjM4Yy0uODU2IDAtMS41NS4yNy0xLjU1LjYwMSAwIC4zMzIuNjk0LjYwMSAxLjU1LjYwMS44NTYgMCAxLjU1LS4yNjkgMS41NS0uNiAwLS4zMzMtLjY5NC0uNjAyLTEuNTUtLjYwMnptMCAxLjEzNWMtLjc2IDAtMS4zNzgtLjIzOS0xLjM3OC0uNTM0IDAtLjI5NS42MTctLjUzNCAxLjM3OC0uNTM0Ljc2MSAwIDEuMzc4LjI0IDEuMzc4LjUzNCAwIC4yOTUtLjYxNy41MzQtMS4zNzguNTM0elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNEQzg3NDRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMy4yOTYgMTIuNjU0di0uMDczYTIuMjYgMi4yNiAwIDAxLS42MzUtLjEwOWwuMTg4LS4wODdjLjE0NS4wNDkuMjk0LjA3OC40NDcuMDg3di0uMTk0YTIuMTQ4IDIuMTQ4IDAgMDEtLjQyNy0uMDcxYy0uMDktLjAzLS4xMzYtLjA3My0uMTM2LS4xMzEgMC0uMDU4LjA1Mi0uMTA1LjE1Ni0uMTQyYTEuMzMgMS4zMyAwIDAxLjQwNy0uMDZ2LS4wNWguMTY1di4wNTFjLjE5LjAwNS4zNjkuMDMuNTM4LjA3NWwtLjE2OC4wOTJhMS43NTIgMS43NTIgMCAwMC0uMzctLjA1OHYuMTg5aC4wMDhjLjE5OC4wMTguMzQ0LjA0Mi40MzcuMDczLjA5My4wMy4xNC4wNzUuMTQuMTMzIDAgLjA1OS0uMDU0LjEwNy0uMTYuMTQzYTEuNDE1IDEuNDE1IDAgMDEtLjQyNS4wNnYuMDcyaC0uMTY1em0tLjE4Mi0uNjQ2Yy0uMDQ0LjAxNS0uMDY2LjAzNC0uMDY2LjA1NnMuMDE3LjA0LjA1Mi4wNTNjLjAzNC4wMTMuMS4wMjUuMTk2LjAzOHYtLjE3NGEuNjUzLjY1MyAwIDAwLS4xODIuMDI3em0uNTQ0LjQzOWMuMDQ4LS4wMTUuMDcyLS4wMzUuMDcyLS4wNThzLS4wMTktLjA0Mi0uMDU3LS4wNTZhMS4xMSAxLjExIDAgMDAtLjIxMi0uMDM4di4xOGEuNzc1Ljc3NSAwIDAwLjE5Ny0uMDI4elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNEQzg3NDRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNS4xMyAxMi4xMDhjMCAuNDEzLS43OTYuNzQ3LTEuNzc3Ljc0Ny0uOTggMC0xLjc3Ni0uMzM0LTEuNzc2LS43NDd2LS42MWgzLjU1MnYuNjF6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0Y2QzM1OFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEzLjM1MiAxMi4yNDRjLjk4MiAwIDEuNzc3LS4zMzUgMS43NzctLjc0N3MtLjc5NS0uNzQ3LTEuNzc3LS43NDdjLS45OCAwLTEuNzc2LjMzNS0xLjc3Ni43NDdzLjc5NS43NDcgMS43NzYuNzQ3elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNGQ0Q0NjJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMy4zNTMgMTAuODk2Yy0uODU2IDAtMS41NS4yNy0xLjU1LjYwMSAwIC4zMzIuNjk0LjYwMSAxLjU1LjYwMS44NTYgMCAxLjU1LS4yNjkgMS41NS0uNiAwLS4zMzMtLjY5NC0uNjAyLTEuNTUtLjYwMnptMCAxLjEzNWMtLjc2IDAtMS4zNzgtLjIzOS0xLjM3OC0uNTM0IDAtLjI5NS42MTctLjUzNCAxLjM3OC0uNTM0Ljc2MSAwIDEuMzc4LjI0IDEuMzc4LjUzNCAwIC4yOTUtLjYxNy41MzQtMS4zNzguNTM0elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNEQzg3NDRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMy4yOTYgMTEuOTEydi0uMDczYTIuMjYgMi4yNiAwIDAxLS42MzUtLjEwOWwuMTg4LS4wODdjLjE0NS4wNDkuMjk0LjA3OC40NDcuMDg3di0uMTk0YTIuMTYzIDIuMTYzIDAgMDEtLjQyNy0uMDcxYy0uMDktLjAzLS4xMzYtLjA3My0uMTM2LS4xMyAwLS4wNTkuMDUyLS4xMDYuMTU2LS4xNDNhMS4zMyAxLjMzIDAgMDEuNDA3LS4wNnYtLjA1aC4xNjV2LjA1MWMuMTkuMDA2LjM2OS4wMy41MzguMDc1bC0uMTY4LjA5MmExLjc1MiAxLjc1MiAwIDAwLS4zNy0uMDU4di4xODloLjAwOGMuMTk4LjAxOC4zNDQuMDQyLjQzNy4wNzMuMDkzLjAzLjE0LjA3NS4xNC4xMzMgMCAuMDU5LS4wNTQuMTA2LS4xNi4xNDNhMS40MTUgMS40MTUgMCAwMS0uNDI1LjA2di4wNzJoLS4xNjV6bS0uMTgyLS42NDZjLS4wNDQuMDE1LS4wNjYuMDM0LS4wNjYuMDU2cy4wMTcuMDQuMDUyLjA1M2MuMDM0LjAxMy4xLjAyNi4xOTYuMDM4di0uMTc0YS42NTguNjU4IDAgMDAtLjE4Mi4wMjd6bS41NDQuNDRjLjA0OC0uMDE2LjA3Mi0uMDM2LjA3Mi0uMDU5cy0uMDE5LS4wNDItLjA1Ny0uMDU2YTEuMTEgMS4xMSAwIDAwLS4yMTItLjAzOHYuMThhLjc3NS43NzUgMCAwMC4xOTctLjAyOHpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjREM4NzQ0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTguODc1IDE3LjMwMmMwIC40MTItLjc5NS43NDctMS43NzYuNzQ3cy0xLjc3Ni0uMzM1LTEuNzc2LS43NDd2LS42MTFoMy41NTJ2LjYxelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNGNkMzNThcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNy4xIDE3LjQzOGMuOTgxIDAgMS43NzYtLjMzNSAxLjc3Ni0uNzQ3cy0uNzk1LS43NDctMS43NzYtLjc0Ny0xLjc3Ni4zMzUtMS43NzYuNzQ3Ljc5NS43NDcgMS43NzYuNzQ3elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNGQ0Q0NjJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNy4wOTkgMTYuMDljLS44NTYgMC0xLjU1LjI2OS0xLjU1LjYgMCAuMzMzLjY5NC42MDIgMS41NS42MDIuODU2IDAgMS41NS0uMjcgMS41NS0uNjAxIDAtLjMzMi0uNjk0LS42MDEtMS41NS0uNjAxem0wIDEuMTM1Yy0uNzYxIDAtMS4zNzgtLjI0LTEuMzc4LS41MzQgMC0uMjk1LjYxNy0uNTM0IDEuMzc4LS41MzQuNzYgMCAxLjM3OC4yMzkgMS4zNzguNTM0IDAgLjI5NS0uNjE3LjUzNC0xLjM3OC41MzR6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0RDODc0NFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE3LjA0MiAxNy4xMDZ2LS4wNzNhMi4yNiAyLjI2IDAgMDEtLjYzNi0uMTFsLjE4OS0uMDg2Yy4xNDUuMDQ4LjI5NC4wNzcuNDQ3LjA4N3YtLjE5NWEyLjE0OCAyLjE0OCAwIDAxLS40MjgtLjA3Yy0uMDktLjAzLS4xMzUtLjA3NC0uMTM1LS4xMzEgMC0uMDU4LjA1Mi0uMTA1LjE1Ni0uMTQyLjEwNC0uMDM3LjI0LS4wNTcuNDA3LS4wNnYtLjA1aC4xNjV2LjA1Yy4xOS4wMDYuMzY5LjAzMS41MzguMDc2bC0uMTY4LjA5MmExLjc0NSAxLjc0NSAwIDAwLS4zNy0uMDU4di4xODhoLjAwOGMuMTk4LjAxOC4zNDMuMDQzLjQzNi4wNzMuMDk0LjAzMS4xNC4wNzYuMTQuMTM0IDAgLjA1OS0uMDUzLjEwNi0uMTYuMTQzYTEuNDE3IDEuNDE3IDAgMDEtLjQyNC4wNnYuMDcyaC0uMTY1em0tLjE4Mi0uNjQ3Yy0uMDQ0LjAxNS0uMDY2LjAzNC0uMDY2LjA1NiAwIC4wMjMuMDE3LjA0LjA1Mi4wNTQuMDM0LjAxMy4xLjAyNS4xOTYuMDM3di0uMTczYS42NTYuNjU2IDAgMDAtLjE4Mi4wMjZ6bS41NDQuNDRjLjA0OC0uMDE2LjA3Mi0uMDM1LjA3Mi0uMDU5IDAtLjAyMy0uMDE5LS4wNDEtLjA1Ny0uMDU1YTEuMTEzIDEuMTEzIDAgMDAtLjIxMi0uMDM5di4xOGEuNzY4Ljc2OCAwIDAwLjE5Ny0uMDI3elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNEQzg3NDRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xOC44NzUgMTYuNTZjMCAuNDEyLS43OTUuNzQ3LTEuNzc2Ljc0N3MtMS43NzYtLjMzNS0xLjc3Ni0uNzQ3di0uNjExaDMuNTUydi42MXpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjRjZDMzU4XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTcuMSAxNi42OTVjLjk4MSAwIDEuNzc2LS4zMzQgMS43NzYtLjc0NiAwLS40MTMtLjc5NS0uNzQ3LTEuNzc2LS43NDdzLTEuNzc2LjMzNC0xLjc3Ni43NDdjMCAuNDEyLjc5NS43NDYgMS43NzYuNzQ2elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNGQ0Q0NjJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNy4wOTkgMTUuMzQ4Yy0uODU2IDAtMS41NS4yNjktMS41NS42IDAgLjMzMy42OTQuNjAyIDEuNTUuNjAyLjg1NiAwIDEuNTUtLjI3IDEuNTUtLjYwMSAwLS4zMzItLjY5NC0uNjAxLTEuNTUtLjYwMXptMCAxLjEzNWMtLjc2MSAwLTEuMzc4LS4yNC0xLjM3OC0uNTM0IDAtLjI5NS42MTctLjUzNCAxLjM3OC0uNTM0Ljc2IDAgMS4zNzguMjM5IDEuMzc4LjUzNCAwIC4yOTUtLjYxNy41MzQtMS4zNzguNTM0elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNEQzg3NDRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNy4wNDIgMTYuMzY0di0uMDczYTIuMjYgMi4yNiAwIDAxLS42MzYtLjExbC4xODktLjA4NmMuMTQ1LjA0OC4yOTQuMDc3LjQ0Ny4wODd2LS4xOTRhMi4xNDggMi4xNDggMCAwMS0uNDI4LS4wNzJjLS4wOS0uMDI5LS4xMzUtLjA3Mi0uMTM1LS4xMyAwLS4wNTguMDUyLS4xMDUuMTU2LS4xNDJhMS4zMyAxLjMzIDAgMDEuNDA3LS4wNnYtLjA1aC4xNjV2LjA1Yy4xOS4wMDYuMzY5LjAzMS41MzguMDc2bC0uMTY4LjA5MmExLjc0NSAxLjc0NSAwIDAwLS4zNy0uMDU4di4xODhoLjAwOGMuMTk4LjAxOC4zNDMuMDQzLjQzNi4wNzMuMDk0LjAzMS4xNC4wNzYuMTQuMTM0IDAgLjA1OS0uMDUzLjEwNi0uMTYuMTQzYTEuNDIgMS40MiAwIDAxLS40MjQuMDZ2LjA3MmgtLjE2NXptLS4xODItLjY0NmMtLjA0NC4wMTQtLjA2Ni4wMzMtLjA2Ni4wNTYgMCAuMDIyLjAxNy4wNC4wNTIuMDUzLjAzNC4wMTMuMS4wMjUuMTk2LjAzN3YtLjE3M2EuNjUyLjY1MiAwIDAwLS4xODIuMDI3em0uNTQ0LjQzOWMuMDQ4LS4wMTYuMDcyLS4wMzUuMDcyLS4wNTggMC0uMDI0LS4wMTktLjA0Mi0uMDU3LS4wNTZhMS4xMTMgMS4xMTMgMCAwMC0uMjEyLS4wMzh2LjE4YS43NjguNzY4IDAgMDAuMTk3LS4wMjh6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0RDODc0NFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE4Ljg3NSAxNS44MThjMCAuNDEyLS43OTUuNzQ3LTEuNzc2Ljc0N3MtMS43NzYtLjMzNS0xLjc3Ni0uNzQ3di0uNjExaDMuNTUydi42MXpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjRjZDMzU4XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTcuMSAxNS45NTRjLjk4MSAwIDEuNzc2LS4zMzUgMS43NzYtLjc0N3MtLjc5NS0uNzQ3LTEuNzc2LS43NDctMS43NzYuMzM1LTEuNzc2Ljc0Ny43OTUuNzQ3IDEuNzc2Ljc0N3pcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjRkNENDYyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTcuMDk5IDE0LjYwNmMtLjg1NiAwLTEuNTUuMjctMS41NS42MDEgMCAuMzMyLjY5NC42IDEuNTUuNi44NTYgMCAxLjU1LS4yNjggMS41NS0uNiAwLS4zMzItLjY5NC0uNjAxLTEuNTUtLjYwMXptMCAxLjEzNWMtLjc2MSAwLTEuMzc4LS4yMzktMS4zNzgtLjUzNCAwLS4yOTUuNjE3LS41MzQgMS4zNzgtLjUzNC43NiAwIDEuMzc4LjIzOSAxLjM3OC41MzQgMCAuMjk1LS42MTcuNTM0LTEuMzc4LjUzNHpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjREM4NzQ0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTcuMDQyIDE1LjYyMnYtLjA3M2EyLjI2IDIuMjYgMCAwMS0uNjM2LS4xMWwuMTg5LS4wODZjLjE0NS4wNDkuMjk0LjA3OC40NDcuMDg3di0uMTk0YTIuMTYzIDIuMTYzIDAgMDEtLjQyOC0uMDcyYy0uMDktLjAyOS0uMTM1LS4wNzItLjEzNS0uMTMgMC0uMDU4LjA1Mi0uMTA1LjE1Ni0uMTQyLjEwNC0uMDM3LjI0LS4wNTcuNDA3LS4wNnYtLjA1aC4xNjV2LjA1Yy4xOS4wMDYuMzY5LjAzMS41MzguMDc2bC0uMTY4LjA5MmExLjc1MiAxLjc1MiAwIDAwLS4zNy0uMDU4di4xODhoLjAwOGMuMTk4LjAxOC4zNDMuMDQzLjQzNi4wNzMuMDk0LjAzMS4xNC4wNzYuMTQuMTM0IDAgLjA1OS0uMDUzLjEwNi0uMTYuMTQzYTEuNDE0IDEuNDE0IDAgMDEtLjQyNC4wNnYuMDcyaC0uMTY1em0tLjE4Mi0uNjQ2Yy0uMDQ0LjAxNS0uMDY2LjAzMy0uMDY2LjA1NiAwIC4wMjIuMDE3LjA0LjA1Mi4wNTMuMDM0LjAxMy4xLjAyNS4xOTYuMDM3di0uMTczYS42NTYuNjU2IDAgMDAtLjE4Mi4wMjd6bS41NDQuNDM5Yy4wNDgtLjAxNi4wNzItLjAzNS4wNzItLjA1OCAwLS4wMjQtLjAxOS0uMDQyLS4wNTctLjA1NmExLjExMyAxLjExMyAwIDAwLS4yMTItLjAzOXYuMThhLjc3Mi43NzIgMCAwMC4xOTctLjAyN3pcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjREM4NzQ0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTguODc1IDE1LjA3NmMwIC40MTItLjc5NS43NDctMS43NzYuNzQ3cy0xLjc3Ni0uMzM1LTEuNzc2LS43NDd2LS42MTFoMy41NTJ2LjYxelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNGNkMzNThcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNy4xIDE1LjIxMWMuOTgxIDAgMS43NzYtLjMzNCAxLjc3Ni0uNzQ2IDAtLjQxMy0uNzk1LS43NDctMS43NzYtLjc0N3MtMS43NzYuMzM0LTEuNzc2Ljc0N2MwIC40MTIuNzk1Ljc0NiAxLjc3Ni43NDZ6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0ZDRDQ2MlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE3LjA5OSAxMy44NjRjLS44NTYgMC0xLjU1LjI3LTEuNTUuNjAxIDAgLjMzMi42OTQuNiAxLjU1LjYuODU2IDAgMS41NS0uMjY4IDEuNTUtLjYgMC0uMzMyLS42OTQtLjYwMS0xLjU1LS42MDF6bTAgMS4xMzVjLS43NjEgMC0xLjM3OC0uMjM5LTEuMzc4LS41MzQgMC0uMjk1LjYxNy0uNTM0IDEuMzc4LS41MzQuNzYgMCAxLjM3OC4yMzkgMS4zNzguNTM0IDAgLjI5NS0uNjE3LjUzNC0xLjM3OC41MzR6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0RDODc0NFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE3LjA0MiAxNC44OHYtLjA3M2EyLjI2IDIuMjYgMCAwMS0uNjM2LS4xMWwuMTg5LS4wODZjLjE0NS4wNDguMjk0LjA3Ny40NDcuMDg3di0uMTk0YTIuMTU3IDIuMTU3IDAgMDEtLjQyOC0uMDcyYy0uMDktLjAyOS0uMTM1LS4wNzItLjEzNS0uMTMgMC0uMDU4LjA1Mi0uMTA1LjE1Ni0uMTQyLjEwNC0uMDM3LjI0LS4wNTcuNDA3LS4wNnYtLjA1aC4xNjV2LjA1Yy4xOS4wMDYuMzY5LjAzMS41MzguMDc2bC0uMTY4LjA5MmExLjc1MiAxLjc1MiAwIDAwLS4zNy0uMDU4di4xODhoLjAwOGMuMTk4LjAxOC4zNDMuMDQzLjQzNi4wNzQuMDk0LjAzLjE0LjA3NS4xNC4xMzMgMCAuMDU5LS4wNTMuMTA2LS4xNi4xNDNhMS40MTcgMS40MTcgMCAwMS0uNDI0LjA2di4wNzJoLS4xNjV6bS0uMTgyLS42NDZjLS4wNDQuMDE1LS4wNjYuMDMzLS4wNjYuMDU2IDAgLjAyMi4wMTcuMDQuMDUyLjA1My4wMzQuMDEzLjEuMDI1LjE5Ni4wMzd2LS4xNzNhLjY1Mi42NTIgMCAwMC0uMTgyLjAyN3ptLjU0NC40MzljLjA0OC0uMDE2LjA3Mi0uMDM1LjA3Mi0uMDU4IDAtLjAyNC0uMDE5LS4wNDItLjA1Ny0uMDU2YTEuMTEzIDEuMTEzIDAgMDAtLjIxMi0uMDM4di4xOGEuNzcyLjc3MiAwIDAwLjE5Ny0uMDI4elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNEQzg3NDRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xOC44NzUgMTQuMzM0YzAgLjQxMi0uNzk1Ljc0Ny0xLjc3Ni43NDdzLTEuNzc2LS4zMzUtMS43NzYtLjc0N3YtLjYxaDMuNTUydi42MXpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjRjZDMzU4XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTcuMSAxNC40N2MuOTgxIDAgMS43NzYtLjMzNCAxLjc3Ni0uNzQ3IDAtLjQxMi0uNzk1LS43NDctMS43NzYtLjc0N3MtMS43NzYuMzM1LTEuNzc2Ljc0N2MwIC40MTMuNzk1Ljc0NyAxLjc3Ni43NDd6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0ZDRDQ2MlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE3LjA5OSAxMy4xMjJjLS44NTYgMC0xLjU1LjI3LTEuNTUuNjAxIDAgLjMzMi42OTQuNjAxIDEuNTUuNjAxLjg1NiAwIDEuNTUtLjI2OSAxLjU1LS42IDAtLjMzMy0uNjk0LS42MDItMS41NS0uNjAyem0wIDEuMTM1Yy0uNzYxIDAtMS4zNzgtLjIzOS0xLjM3OC0uNTM0IDAtLjI5NS42MTctLjUzNCAxLjM3OC0uNTM0Ljc2IDAgMS4zNzguMjQgMS4zNzguNTM0IDAgLjI5NS0uNjE3LjUzNC0xLjM3OC41MzR6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0RDODc0NFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE3LjA0MiAxNC4xMzh2LS4wNzNhMi4yNTcgMi4yNTcgMCAwMS0uNjM2LS4xMWwuMTg5LS4wODZjLjE0NS4wNDkuMjk0LjA3OC40NDcuMDg3di0uMTk0YTIuMTYzIDIuMTYzIDAgMDEtLjQyOC0uMDcxYy0uMDktLjAzLS4xMzUtLjA3My0uMTM1LS4xMzEgMC0uMDU4LjA1Mi0uMTA1LjE1Ni0uMTQyYTEuMzMgMS4zMyAwIDAxLjQwNy0uMDZ2LS4wNWguMTY1di4wNTFjLjE5LjAwNS4zNjkuMDMuNTM4LjA3NWwtLjE2OC4wOTJhMS43NTIgMS43NTIgMCAwMC0uMzctLjA1OHYuMTg4aC4wMDhjLjE5OC4wMTkuMzQzLjA0My40MzYuMDc0LjA5NC4wMy4xNC4wNzUuMTQuMTMzIDAgLjA1OS0uMDUzLjEwNi0uMTYuMTQzYTEuNDE0IDEuNDE0IDAgMDEtLjQyNC4wNnYuMDcyaC0uMTY1em0tLjE4Mi0uNjQ2Yy0uMDQ0LjAxNS0uMDY2LjAzMy0uMDY2LjA1NiAwIC4wMjIuMDE3LjA0LjA1Mi4wNTMuMDM0LjAxMy4xLjAyNS4xOTYuMDM3di0uMTczYS42NTYuNjU2IDAgMDAtLjE4Mi4wMjd6bS41NDQuNDM5Yy4wNDgtLjAxNS4wNzItLjAzNS4wNzItLjA1OHMtLjAxOS0uMDQyLS4wNTctLjA1NmExLjExNSAxLjExNSAwIDAwLS4yMTItLjAzOHYuMThhLjc3Ny43NzcgMCAwMC4xOTctLjAyOHpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjREM4NzQ0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuOTUzIDE4LjA0N2ExLjk1NSAxLjk1NSAwIDEwMC0zLjkxIDEuOTU1IDEuOTU1IDAgMDAwIDMuOTF6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0ZDRDQ2MlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEzLjk1MyAxNC4zODdhMS43MDYgMS43MDYgMCAxMDAgMy40MTMgMS43MDYgMS43MDYgMCAwMDAtMy40MTN6bTAgMy4yMjNhMS41MTcgMS41MTcgMCAxMTAtMy4wMzMgMS41MTcgMS41MTcgMCAwMTAgMy4wMzN6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0RDODc0NFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEzLjg5IDE3LjI3MnYtLjIwN2ExLjIzNSAxLjIzNSAwIDAxLS43LS4zMWwuMjA5LS4yNDhjLjE1OS4xMzguMzIzLjIyMS40OTIuMjQ4di0uNTUyYy0uMjE1LS4wNTEtLjM3Mi0uMTE5LS40NzEtLjIwMi0uMS0uMDg0LS4xNS0uMjA3LS4xNS0uMzcxYS41Mi41MiAwIDAxLjE3My0uNDAzLjY5Ni42OTYgMCAwMS40NDctLjE3di0uMTQzaC4xODJ2LjE0NmMuMjA5LjAxNS40MDYuMDg2LjU5Mi4yMTNsLS4xODUuMjYxYS45MTcuOTE3IDAgMDAtLjQwNy0uMTY1di41MzVoLjAwOWMuMjE4LjA1MS4zNzguMTIuNDguMjA4LjEwMy4wODcuMTU0LjIxNC4xNTQuMzhhLjUxNy41MTcgMCAwMS0uMTc2LjQwNS43MzQuNzM0IDAgMDEtLjQ2Ny4xN3YuMjA1aC0uMTgxem0tLjItMS44MzZhLjIwMy4yMDMgMCAwMC0uMDczLjE2LjIuMiAwIDAwLjA1Ny4xNWMuMDM4LjAzNy4xMS4wNzMuMjE2LjEwN3YtLjQ5MmEuMzQuMzQgMCAwMC0uMi4wNzV6bS41OTkgMS4yNDdhLjIwNS4yMDUgMCAwMC4wOC0uMTY1LjIwNS4yMDUgMCAwMC0uMDYzLS4xNTcuNjIuNjIgMCAwMC0uMjM0LS4xMXYuNTEyYS4zOTcuMzk3IDAgMDAuMjE3LS4wOHpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjREM4NzQ0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnTW9uZXlcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdNb3JlKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuNzUgOC41NDJjLS44MDQgMC0xLjQ1OC42NTUtMS40NTggMS40NThhMS40NiAxLjQ2IDAgMDAxLjQ1OCAxLjQ1OGMuODAzIDAgMS40NTgtLjY1NSAxLjQ1OC0xLjQ1OCAwLS44MDMtLjY1NS0xLjQ1OC0xLjQ1OC0xLjQ1OHptMCAyLjA4M2EuNjI1LjYyNSAwIDExMC0xLjI1LjYyNS42MjUgMCAwMTAgMS4yNXpNMTAgOC41NDJBMS40NiAxLjQ2IDAgMDA4LjU0MiAxMGMwIC44MDMuNjU0IDEuNDU4IDEuNDU4IDEuNDU4QTEuNDYgMS40NiAwIDAwMTEuNDU4IDEwIDEuNDYgMS40NiAwIDAwMTAgOC41NDJ6bTAgMi4wODNhLjYyNS42MjUgMCAxMTAtMS4yNS42MjUuNjI1IDAgMDEwIDEuMjV6TTYuMjUgOC41NDJjLS44MDQgMC0xLjQ1OC42NTUtMS40NTggMS40NTggMCAuODAzLjY1NCAxLjQ1OCAxLjQ1OCAxLjQ1OC44MDMgMCAxLjQ1OC0uNjU1IDEuNDU4LTEuNDU4IDAtLjgwMy0uNjU1LTEuNDU4LTEuNDU4LTEuNDU4em0wIDIuMDgzYS42MjUuNjI1IDAgMTEwLTEuMjUuNjI1LjYyNSAwIDAxMCAxLjI1elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEwIDE4Ljk1OGMtNC45NCAwLTguOTU4LTQuMDE4LTguOTU4LTguOTU4UzUuMDYgMS4wNDIgMTAgMS4wNDIgMTguOTU4IDUuMDYgMTguOTU4IDEwIDE0Ljk0IDE4Ljk1OCAxMCAxOC45NTh6bTAtMTYuNjY2QzUuNzUgMi4yOTIgMi4yOTIgNS43NSAyLjI5MiAxMFM1Ljc1IDE3LjcwOCAxMCAxNy43MDggMTcuNzA4IDE0LjI1IDE3LjcwOCAxMCAxNC4yNSAyLjI5MiAxMCAyLjI5MnpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdNb3JlXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnTm90aWZpY2F0aW9uKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTguMDggMTMuNzIzYy0uMDE2LS4wMTMtMS43ODItMS4zNjYtMS43NTItNS4wMjUuMDE3LTIuMTEtLjY3Ni0zLjk4NS0xLjk1NS01LjI3OS0xLjE0Ni0xLjE2LTIuNjk4LTEuODAyLTQuMzY5LTEuODFoLS4wMWMtMS42Ny4wMDgtMy4yMjIuNjUtNC4zNjkgMS44MTFDNC4zNDcgNC43MTQgMy42NTIgNi41ODggMy42NyA4LjY5OGMuMDMgMy42MDktMS42ODMgNC45NzMtMS43NTIgNS4wMjVhLjYyNi42MjYgMCAwMC4zNzMgMS4xMjhoNC4xYTMuNjIgMy42MiAwIDAwMy42MDggMy40NjZjMS45NDQgMCAzLjUyMi0xLjU0MSAzLjYwNi0zLjQ2Nmg0LjEwMmEuNjIxLjYyMSAwIDAwLjU5MS0uNDI5LjYyMy42MjMgMCAwMC0uMjE5LS42OThoLjAwMnpNMTAgMTcuMDY1YTIuMzY3IDIuMzY3IDAgMDEtMi4zNTctMi4yMTVoNC43MTRBMi4zNyAyLjM3IDAgMDExMCAxNy4wNjd2LS4wMDJ6TTMuNjUgMTMuNmMuNjE3LS45NDMgMS4yOS0yLjUyMyAxLjI3LTQuOTEzLS4wMTUtMS44LjUzNy0zLjMxOSAxLjU5NC00LjM5LjkxMS0uOTIyIDIuMTUtMS40MzMgMy40ODYtMS40MzkgMS4zMzYuMDA3IDIuNTcyLjUxNyAzLjQ4MyAxLjQ0IDEuMDU5IDEuMDcxIDEuNjExIDIuNTg5IDEuNTk2IDQuMzktLjAyIDIuMzkuNjU0IDMuOTcgMS4yNzEgNC45MTNIMy42NVYxMy42elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z05vdGlmaWNhdGlvblxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z05vdGlmaWNhdGlvbkZpbGwocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xOC4wOCAxMy43MjNjLS4wMTYtLjAxMy0xLjc4Mi0xLjM2Ni0xLjc1Mi01LjAyNS4wMTctMi4xMS0uNjc2LTMuOTg1LTEuOTU1LTUuMjc4LTEuMTQ2LTEuMTYtMi42OTgtMS44MDMtNC4zNjktMS44MWgtLjAxYy0xLjY3LjAwNy0zLjIyMi42NS00LjM2OSAxLjgxQzQuMzQ3IDQuNzE0IDMuNjUyIDYuNTg4IDMuNjcgOC42OTdjLjAzIDMuNjEtMS42ODMgNC45NzMtMS43NTIgNS4wMjZhLjYyNi42MjYgMCAwMC4zNzQgMS4xMjdoMy43NDVDNi4xMiAxNi45NyA3Ljg2IDE4LjY3MiAxMCAxOC42NzJzMy44OC0xLjcwMiAzLjk2My0zLjgyMmgzLjc0NWEuNjI1LjYyNSAwIDAwLjM3My0xLjEyN3pNMTAgMTcuMDA3YTIuMzEgMi4zMSAwIDAxLTIuMjk3LTIuMTU3aDQuNTk0QTIuMzEgMi4zMSAwIDAxMTAgMTcuMDA2elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z05vdGlmaWNhdGlvbkZpbGxcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdQcm9kdWN0cyhwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIGRhdGEtbmFtZT1cIkxheWVyIDFcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCA1MTIgNTEyXCJcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGggZD1cIk00NzIuOTE2IDIyNGgtMjQuOTA5YTI0LjUzNCAyNC41MzQgMCAwMC0yMy40MTctMThIMzk4di02NS4wMjRhNi44NiA2Ljg2IDAgMDAtMy4zNDYtNi4wNjJMMjA3LjA3NyAyNi41NzJhNi45MjcgNi45MjcgMCAwMC02Ljk2MiAwTDEyLjQ4IDEzNC45MTRBNi45ODEgNi45ODEgMCAwMDkgMTQwLjk3NnYyMTYuNjg1YTcgNyAwIDAwMy41IDYuMDYybDE4Ny42NTQgMTA4LjM0MmE3IDcgMCAwMDMuNS45MzggNy4zNjEgNy4zNjEgMCAwMDMuNi0uOTM4TDMwNiA0MTUuMTA4djQxLjE3NEEyOS42NDIgMjkuNjQyIDAgMDAzMzUuODkxIDQ4NmgxMzcuMDI1QTI5LjgwNyAyOS44MDcgMCAwMDUwMyA0NTYuMjgydi0yMDIuMUEzMC4yIDMwLjIgMCAwMDQ3Mi45MTYgMjI0em0tNDguMDc3LTRBMTAuMTYxIDEwLjE2MSAwIDAxNDM1IDIzMC4xNjF2LjY3OEExMC4xNjEgMTAuMTYxIDAgMDE0MjQuODM5IDI0MWgtNDAuNjc4QTEwLjE2MSAxMC4xNjEgMCAwMTM3NCAyMzAuODM5di0uNjc4QTEwLjE2MSAxMC4xNjEgMCAwMTM4NC4xNjEgMjIwek0yMDMuNjU0IDQwLjcxN2w3Ny45NzQgNDUuMDE4LTE3My42NDIgMTAwLjI1Mi03Ny45NzMtNDUuMDE4ek0xOTcgNDUzLjg3OEwyMyAzNTMuNjE5VjE1My4wODVsMTc0IDEwMC4yNTl6bTYuNjU0LTIxMi42NThsLTgxLjY2OC00Ny4xNTFMMjk1LjYyOCA5My44MThsODEuNjcyIDQ3LjE1MXpNMzA2IDI1NC4xODJ2MTQ0Ljc2MWwtOTUgNTQuOTM1VjI1My4zNDRsMTczLTEwMC4yNTlWMjA2aC4yMTdhMjQuNTMzIDI0LjUzMyAwIDAwLTIzLjQxNyAxOGgtMjQuOTA5QTMwLjAzNyAzMC4wMzcgMCAwMDMwNiAyNTQuMTgyem0xODMgMjAyLjFBMTUuNzkzIDE1Ljc5MyAwIDAxNDcyLjkxNiA0NzJIMzM1Ljg5MUExNS42MjggMTUuNjI4IDAgMDEzMjAgNDU2LjI4MnYtMjAyLjFBMTYuMDIyIDE2LjAyMiAwIDAxMzM1Ljg5MSAyMzhoMjUuMTgyYTIzLjk0NCAyMy45NDQgMCAwMDIzLjE0NCAxN2g0MC4zNzNhMjMuOTQyIDIzLjk0MiAwIDAwMjMuMTQzLTE3aDI1LjE4M0ExNi4xODYgMTYuMTg2IDAgMDE0ODkgMjU0LjE4MnpcIiAvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0zNDMuOTQ5IDMyNWg3LjMyN2E3IDcgMCAxMDAtMTRIMzUxdi0xOWgxOS4zMDdhNi43MzkgNi43MzkgMCAwMDYuNjU1IDQuNzI3IDcuMDE5IDcuMDE5IDAgMDA3LjAzOC02Ljk4NHYtNC43MWE3LjA5MyA3LjA5MyAwIDAwLTcuMDc2LTcuMDMzaC0zMi45NzVhNi45ODUgNi45ODUgMCAwMC02Ljk0OSA3LjAzM3YzMi45NzVhNi45NSA2Ljk1IDAgMDA2Ljk0OSA2Ljk5MnpNMzQ0IDM4OWgzM2E3IDcgMCAwMDctN3YtMzNhNyA3IDAgMDAtNy03aC0zM2E3IDcgMCAwMC03IDd2MzNhNyA3IDAgMDA3IDd6bTctMzNoMTl2MTloLTE5ek0zNTEuMjc3IDQzOUgzNTF2LTE5aDE4LjkyOWE3LjAzNyA3LjAzNyAwIDAwMTQuMDcxLjAxNHYtNi43NDVhNy4zIDcuMyAwIDAwLTcuMDc2LTcuMjY5aC0zMi45NzVhNy4xOTEgNy4xOTEgMCAwMC02Ljk0OSA3LjI2OXYzMi45NzVhNi43NTIgNi43NTIgMCAwMDYuOTQ5IDYuNzU2aDcuMzI4YTcgNyAwIDEwMC0xNHpcIiAvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0zOTMuMDQxIDI4Ni41OTJsLTIwLjUgMjAuNS02LjIzNi02LjIzN2E3IDcgMCAxMC05LjkgOS45bDExLjE4NyAxMS4xODZhNyA3IDAgMDA5LjkgMGwyNS40NTItMjUuNDUyYTcgNyAwIDAwLTkuOS05Ljl6TTM5My4wNDEgNDE1Ljg0MWwtMjAuNSAyMC41LTYuMjM2LTYuMjM3YTcgNyAwIDEwLTkuOSA5LjlsMTEuMTg3IDExLjE4NmE3IDcgMCAwMDkuOSAwbDI1LjQ1Mi0yNS40NTJhNyA3IDAgMDAtOS45LTkuOXpNNDY0Ljg1NyAyOTVoLTQzLjk2NmE3IDcgMCAwMDAgMTRoNDMuOTY2YTcgNyAwIDAwMC0xNHpNNDY0Ljg1NyAzNTloLTQzLjk2NmE3IDcgMCAwMDAgMTRoNDMuOTY2YTcgNyAwIDAwMC0xNHpNNDY0Ljg1NyA0MjNoLTQzLjk2NmE3IDcgMCAwMDAgMTRoNDMuOTY2YTcgNyAwIDAwMC0xNHpcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1Byb2R1Y3RzXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnUHJvZHVjdHNGaWxsKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2ZyB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHsuLi5wcm9wc30+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgICAgICAgICAgICBkYXRhLW9yaWdpbmFsPVwiIzAwMDAwMFwiXG4gICAgICAgICAgICAgICAgZD1cIk0yMDMuNjU0IDI0MS4yMmwxNzMuNjQyLTEwMC4yNTEtODEuNjY4LTQ3LjE1MS0xNzMuNjQyIDEwMC4yNTEgODEuNjY4IDQ3LjE1MXpNMTk3IDI1My4zNDRMMjMgMTUzLjA4NXYyMDAuNTM0bDE3NCAxMDAuMjU5VjI1My4zNDR6TTM1MSAzNTZoMTl2MTloLTE5ek0yMTEgMjUzLjM0NHYyMDAuNTM0bDk1LTU0LjkzNVYyNTQuMTgyQTMwLjAzNyAzMC4wMzcgMCAwMTMzNS44OTEgMjI0SDM2MC44YTI0LjUzMyAyNC41MzMgMCAwMTIzLjQxNy0xOEgzODR2LTUyLjkxNXpcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgeD17Mzc0fVxuICAgICAgICAgICAgICAgIHk9ezIyMH1cbiAgICAgICAgICAgICAgICB3aWR0aD17NjF9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsyMX1cbiAgICAgICAgICAgICAgICByeD17MTAuMTYxfVxuICAgICAgICAgICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgICAgICAgICAgICBkYXRhLW9yaWdpbmFsPVwiIzAwMDAwMFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI2ZmZlwiXG4gICAgICAgICAgICAgICAgZGF0YS1vcmlnaW5hbD1cIiMwMDAwMDBcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMjgxLjYyOCA4NS43MzVsLTc3Ljk3NC00NS4wMThMMzAuMDEzIDE0MC45NjlsNzcuOTczIDQ1LjAxOEwyODEuNjI4IDg1LjczNXpNNDcyLjkxNiAyMzhoLTI1LjE4M2EyMy45NDIgMjMuOTQyIDAgMDEtMjMuMTQzIDE3aC00MC4zNzNhMjMuOTQ0IDIzLjk0NCAwIDAxLTIzLjE0NC0xN2gtMjUuMTgyQTE2LjAyMiAxNi4wMjIgMCAwMDMyMCAyNTQuMTgydjIwMi4xQTE1LjYyOCAxNS42MjggMCAwMDMzNS44OTEgNDcyaDEzNy4wMjVBMTUuNzkzIDE1Ljc5MyAwIDAwNDg5IDQ1Ni4yODJ2LTIwMi4xQTE2LjE4NiAxNi4xODYgMCAwMDQ3Mi45MTYgMjM4ek0zMzcgMjg1LjAzM2E2Ljk4NSA2Ljk4NSAwIDAxNi45NDktNy4wMzNoMzIuOTc1YTcuMDkzIDcuMDkzIDAgMDE3LjA3NiA3LjAzM3Y0LjcxYTcuMDE5IDcuMDE5IDAgMDEtNy4wMzggNi45ODQgNi43MzkgNi43MzkgMCAwMS02LjY1NS00LjcyN0gzNTF2MTloLjI3NmE3IDcgMCAxMTAgMTRoLTcuMzI3YTYuOTUgNi45NSAwIDAxLTYuOTQ5LTYuOTkyek0zMzcgMzQ5YTcgNyAwIDAxNy03aDMzYTcgNyAwIDAxNyA3djMzYTcgNyAwIDAxLTcgN2gtMzNhNyA3IDAgMDEtNy03em0xNC4yNzcgMTA0aC03LjMyOGE2Ljc1MiA2Ljc1MiAwIDAxLTYuOTQ5LTYuNzU2di0zMi45NzVhNy4xOTEgNy4xOTEgMCAwMTYuOTQ5LTcuMjY5aDMyLjk3NWE3LjMgNy4zIDAgMDE3LjA3NiA3LjI2OXY2Ljc0NWE3LjAzNyA3LjAzNyAwIDAxLTE0LjA3MS0uMDE0SDM1MXYxOWguMjc3YTcgNyAwIDExMCAxNHptNTEuNjY0LTI3LjI1OWwtMjUuNDUyIDI1LjQ1MmE3IDcgMCAwMS05LjkgMEwzNTYuNCA0NDAuMDA3YTcgNyAwIDExOS45LTkuOWw2LjIzNiA2LjIzNyAyMC41LTIwLjVhNyA3IDAgMDE5LjkgOS45em0wLTEyOS4yNDlsLTI1LjQ1MiAyNS40NTJhNyA3IDAgMDEtOS45IDBMMzU2LjQgMzEwLjc1OGE3IDcgMCAxMTkuOS05LjlsNi4yMzYgNi4yMzcgMjAuNS0yMC41YTcgNyAwIDAxOS45IDkuOXpNNDY0Ljg1NyA0MzdoLTQzLjk2NmE3IDcgMCAwMTAtMTRoNDMuOTY2YTcgNyAwIDAxMCAxNHptMC02NGgtNDMuOTY2YTcgNyAwIDAxMC0xNGg0My45NjZhNyA3IDAgMDEwIDE0em0wLTY0aC00My45NjZhNyA3IDAgMDEwLTE0aDQzLjk2NmE3IDcgMCAwMTAgMTR6XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnUHJvZHVjdHNGaWxsXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnUHJvZmlsZShwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEwIDkuODQ3YzEuMTMgMCAyLjM5My0uMTI1IDMuMi0xLjA0Ny42NzgtLjc3NS44OTgtMS45NzMuNjcyLTMuNjYtLjMxNy0yLjM1NC0xLjc2NC0zLjc2LTMuODcyLTMuNzYtMi4xMDggMC0zLjU1NSAxLjQwNi0zLjg3MiAzLjc2Mi0uMjI2IDEuNjg1LS4wMDYgMi44ODMuNjcyIDMuNjU4LjgwNy45MjIgMi4wNyAxLjA0NyAzLjIgMS4wNDd6bS0yLjYzMy00LjU0Yy4xMzUtMSAuNjU1LTIuNjc3IDIuNjMzLTIuNjc3IDEuOTc3IDAgMi40OTggMS42NzggMi42MzMgMi42NzcuMTczIDEuMjkxLjA0OCAyLjE4OS0uMzc1IDIuNjctLjM3OS40MzQtMS4wNTUuNjItMi4yNTguNjJzLTEuODgtLjE4Ni0yLjI1OC0uNjJjLS40MjMtLjQ4MS0uNTQ4LTEuMzgtLjM3NS0yLjY3ek0xNi45IDE2LjAzYy0uNzMtMi45MzgtMy41NjgtNC45OTItNi45LTQuOTkyLTMuMzMyIDAtNi4xNyAyLjA1NC02LjkgNC45OTJhMS44NyAxLjg3IDAgMDAuMzMgMS42MTdjLjM0LjQzMy44NjYuNjgzIDEuNDQzLjY4M2gxMC4yNTRjLjU3NyAwIDEuMTA0LS4yNSAxLjQ0NC0uNjgzLjM1My0uNDUuNDcyLTEuMDQuMzI4LTEuNjE3aC4wMDF6bS0xLjMxMy44NDdhLjU2LjU2IDAgMDEtLjQ2LjIwNUg0Ljg3M2EuNTYuNTYgMCAwMS0uNDYtLjIwNS42MjguNjI4IDAgMDEtLjEtLjU0NWMuNTkyLTIuMzggMi45MzEtNC4wNDIgNS42ODctNC4wNDIgMi43NTYgMCA1LjA5NSAxLjY2MiA1LjY4NyA0LjA0Mi4wNS4yMDEuMDE0LjQtLjEuNTQ1elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1Byb2ZpbGVcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdQcm9maWxlRmlsbChwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEwLjE4OCAxMC4xMzdjLTEuMTMgMC0yLjM5NC0uMTI1LTMuMi0xLjA0Ni0uNjc5LS43NzUtLjg5OC0xLjk3My0uNjcxLTMuNjYuMzE2LTIuMzU1IDEuNzYzLTMuNzYxIDMuODcxLTMuNzYxIDIuMTA5IDAgMy41NTYgMS40MDYgMy44NzIgMy43Ni4yMjcgMS42ODguMDA3IDIuODg0LS42NzIgMy42Ni0uODA4LjkyMi0yLjA3IDEuMDQ3LTMuMiAxLjA0N3ptNC44NzQgOC4yMDlINS4zMTNhMS43MTcgMS43MTcgMCAwMS0xLjM3NS0uNjU1IDEuOTM4IDEuOTM4IDAgMDEtLjM0MS0xLjY0Yy42OTUtMi45NDIgMy40MDUtNC45OTggNi41OS00Ljk5OHM1Ljg5NSAyLjA1NSA2LjU5MSA0Ljk5OGMuMTM3LjU4Mi4wMDkgMS4xOTUtLjM0MyAxLjYzOS0uMzMzLjQyLS44Mi42NTQtMS4zNzMuNjU0di4wMDJ6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnUHJvZmlsZUZpbGxcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdRdWVzdGlvbihwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTIwLjIyMiA5LjE2aC0xLjMzNGMuMDE1LS4wOS4wMjgtLjE4Mi4wMjgtLjI3N1Y2LjU3YzAtLjk4LS43OTctMS43NzctMS43NzgtMS43NzdIMy41VjMuMzU4YS43NS43NSAwIDAwLTEuNSAwVjIwLjgzYS43NS43NSAwIDEwMS41IDB2LTEuNDM0aDEwLjU1NmExLjc4IDEuNzggMCAwMDEuNzc4LTEuNzc3di0yLjMxM2MwLS4wOTUtLjAxNC0uMTg3LS4wMjgtLjI3OGg0LjQxN2ExLjc4IDEuNzggMCAwMDEuNzc4LTEuNzc4di0yLjMxYTEuNzggMS43OCAwIDAwLTEuNzc4LTEuNzhoLS4wMDF6TTE3LjE0IDYuMjkzYy4xNTIgMCAuMjc3LjEyNC4yNzcuMjc3djIuMzFhLjI4LjI4IDAgMDEtLjI3OC4yOEgzLjVWNi4yOWgxMy42NHYuMDAzem0tMi44MDcgOS4wMTR2Mi4zMTJhLjI3OC4yNzggMCAwMS0uMjc4LjI3N0gzLjV2LTIuODY4aDEwLjU1NmMuMTUzIDAgLjI3Ny4xMjYuMjc3LjI4di0uMDAxek0yMC41IDEzLjI1YS4yNzguMjc4IDAgMDEtLjI3OC4yNzdIMy41VjEwLjY2aDE2LjcyMmMuMTUzIDAgLjI3OC4xMjQuMjc4LjI3N3YyLjMxM3pcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdRdWVzdGlvblxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z1JldHdlZXQocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0yMy43NyAxNS42N2EuNzQ5Ljc0OSAwIDAwLTEuMDYgMGwtMi4yMiAyLjIyVjcuNjVhMy43NTUgMy43NTUgMCAwMC0zLjc1LTMuNzVoLTUuODVhLjc1Ljc1IDAgMDAwIDEuNWg1Ljg1YzEuMjQgMCAyLjI1IDEuMDEgMi4yNSAyLjI1djEwLjI0bC0yLjIyLTIuMjJhLjc0OS43NDkgMCAxMC0xLjA2IDEuMDZsMy41IDMuNWEuNzQuNzQgMCAwMC41My4yMi43NC43NCAwIDAwLjUzLS4yMmwzLjUtMy41YS43NDcuNzQ3IDAgMDAwLTEuMDZ6bS0xMC42NiAzLjI4SDcuMjZjLTEuMjQgMC0yLjI1LTEuMDEtMi4yNS0yLjI1VjYuNDZsMi4yMiAyLjIyYS43NTIuNzUyIDAgMDAxLjA2MiAwIC43NDkuNzQ5IDAgMDAwLTEuMDZsLTMuNS0zLjVhLjc0Ny43NDcgMCAwMC0xLjA2IDBsLTMuNSAzLjVhLjc0OS43NDkgMCAxMDEuMDYgMS4wNmwyLjIyLTIuMjJWMTYuN2EzLjc1NSAzLjc1NSAwIDAwMy43NSAzLjc1aDUuODVhLjc1Ljc1IDAgMDAwLTEuNWgtLjAwMnpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdSZXR3ZWV0XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnU2VhcmNoKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMjEuNTMgMjAuNDdsLTMuNjYtMy42NkE4Ljk4IDguOTggMCAwMDIwIDExYTkgOSAwIDEwLTkgOWMyLjIxNSAwIDQuMjQtLjgwNCA1LjgwOC0yLjEzbDMuNjYgMy42NmEuNzQ2Ljc0NiAwIDAwMS4wNiAwIC43NDcuNzQ3IDAgMDAuMDAyLTEuMDZ6TTMuNSAxMWMwLTQuMTM1IDMuMzY1LTcuNSA3LjUtNy41czcuNSAzLjM2NSA3LjUgNy41LTMuMzY1IDcuNS03LjUgNy41LTcuNS0zLjM2NS03LjUtNy41elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1NlYXJjaFxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z1NldHRpbmdzKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDM2OCAzNjhcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHsuLi5wcm9wc30+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTM0NCAxNDRoLTI5Ljk1MmMtMi41MTItOC4yLTUuOC0xNi4xMi05Ljc5Mi0yMy42NjRsMjEuMTYtMjEuMTZjNC41MjgtNC41MjggNy4wMjQtMTAuNTYgNy4wMjQtMTYuOTg0IDAtNi40MTYtMi40OTYtMTIuNDQ4LTcuMDI0LTE2Ljk3NmwtMjIuNjQtMjIuNjRjLTkuMDQ4LTkuMDQ4LTI0Ljg4OC05LjA3Mi0zMy45NTIgMGwtMjEuMTYgMjEuMTZBMTM1Ljc1MyAxMzUuNzUzIDAgMDAyMjQgNTMuOTQ0VjI0YzAtMTMuMjMyLTEwLjc2OC0yNC0yNC0yNGgtMzJjLTEzLjIzMiAwLTI0IDEwLjc2OC0yNCAyNHYyOS45NTJjLTguMiAyLjUyLTE2LjEyIDUuOC0yMy42NjQgOS43OTJsLTIxLjE2OC0yMS4xNmMtOS4zNi05LjM2LTI0LjU5Mi05LjM2LTMzLjk1MiAwbC0yMi42NDggMjIuNjRjLTkuMzUyIDkuMzYtOS4zNTIgMjQuNTkyIDAgMzMuOTUybDIxLjE2IDIxLjE2OGExMzUuNzUzIDEzNS43NTMgMCAwMC05Ljc5MiAyMy42NjRIMjRjLTEzLjIzMiAwLTI0IDEwLjc2OC0yNCAyNHYzMkMwIDIxMy4yMzIgMTAuNzY4IDIyNCAyNCAyMjRoMjkuOTUyYzIuNTIgOC4yIDUuOCAxNi4xMiA5Ljc5MiAyMy42NjRsLTIxLjE2IDIxLjE2OGMtOS4zNiA5LjM2LTkuMzYgMjQuNTkyIDAgMzMuOTUybDIyLjY0IDIyLjY0OGM5LjM2IDkuMzUyIDI0LjU5MiA5LjM1MiAzMy45NTIgMGwyMS4xNjgtMjEuMTZhMTM1Ljc1MyAxMzUuNzUzIDAgMDAyMy42NjQgOS43OTJWMzQ0YzAgMTMuMjMyIDEwLjc2OCAyNCAyNCAyNGgzMmMxMy4yMzIgMCAyNC0xMC43NjggMjQtMjR2LTI5Ljk1MmM4LjItMi41MiAxNi4xMjgtNS44IDIzLjY2NC05Ljc5MmwyMS4xNiAyMS4xNjhjOS4wNzIgOS4wNjQgMjQuOTEyIDkuMDQ4IDMzLjk1MiAwbDIyLjY0LTIyLjY0YzQuNTI4LTQuNTI4IDcuMDI0LTEwLjU2IDcuMDI0LTE2Ljk3NiAwLTYuNDI0LTIuNDk2LTEyLjQ0OC03LjAyNC0xNi45NzZsLTIxLjE2LTIxLjE2OEExMzUuNzUzIDEzNS43NTMgMCAwMDMxNC4wNTYgMjI0SDM0NGMxMy4yMzIgMCAyNC0xMC43NjggMjQtMjR2LTMyYzAtMTMuMjMyLTEwLjc2OC0yNC0yNC0yNHptOCA1NmMwIDQuNDA4LTMuNTg0IDgtOCA4aC0zNmE4LjAwMiA4LjAwMiAwIDAwLTcuNzQ0IDZjLTIuODMyIDEwLjkyLTcuMTQ0IDIxLjM0NC0xMi44MzIgMzAuOTc2YTguMDEgOC4wMSAwIDAwMS4yMzIgOS43MmwyNS40NCAyNS40NDhhNy45NDggNy45NDggMCAwMTIuMzM2IDUuNjY0YzAgMi4xNTItLjgzMiA0LjE2LTIuMzM2IDUuNjY0bC0yMi42NCAyMi42NGMtMy4wMDggMy4wMDgtOC4zMTIgMy4wMDgtMTEuMzI4IDBsLTI1LjQ0LTI1LjQ0Yy0yLjU3Ni0yLjU4NC02LjU3Ni0zLjA4LTkuNzI4LTEuMjMyLTkuNjE2IDUuNjgtMjAuMDQgMTAtMzAuOTY4IDEyLjgyNEE3Ljk4OCA3Ljk4OCAwIDAwMjA4IDMwOHYzNmMwIDQuNDA4LTMuNTg0IDgtOCA4aC0zMmMtNC40MDggMC04LTMuNTkyLTgtOHYtMzZhOC4wMDIgOC4wMDIgMCAwMC02LTcuNzQ0IDExOS45NDggMTE5Ljk0OCAwIDAxLTMwLjk3Ni0xMi44MjQgNy45MTUgNy45MTUgMCAwMC00LjA2NC0xLjExMmMtMi4wNzIgMC00LjEyLjgtNS42NjQgMi4zNDRsLTI1LjQ0IDI1LjQ0YTguMDI1IDguMDI1IDAgMDEtMTEuMzI4IDBsLTIyLjY0LTIyLjY0Yy0zLjEyOC0zLjEyOC0zLjEyOC04LjIwOCAwLTExLjMyOGwyNS40NC0yNS40NGE3Ljk5IDcuOTkgMCAwMDEuMjMyLTkuNzJjLTUuNjgtOS42MzItMTAtMjAuMDQ4LTEyLjgyNC0zMC45NzZBNy45ODYgNy45ODYgMCAwMDYwIDIwOEgyNGMtNC40MDggMC04LTMuNTkyLTgtOHYtMzJjMC00LjQwOCAzLjU5Mi04IDgtOGgzNmE4LjAwMiA4LjAwMiAwIDAwNy43NDQtNiAxMTkuOTQ4IDExOS45NDggMCAwMTEyLjgyNC0zMC45NzYgNy45ODggNy45ODggMCAwMC0xLjIzMi05LjcybC0yNS40NC0yNS40NGMtMy4xMi0zLjEyLTMuMTItOC4yIDAtMTEuMzI4bDIyLjY0LTIyLjY0YzMuMTI4LTMuMTI4IDguMi0zLjEyIDExLjMyOCAwbDI1LjQ0IDI1LjQ0YTcuOTc4IDcuOTc4IDAgMDA5LjcyIDEuMjMyYzkuNjMyLTUuNjggMjAuMDQ4LTEwIDMwLjk3Ni0xMi44MjRBOC4wMDIgOC4wMDIgMCAwMDE2MCA2MFYyNGMwLTQuNDA4IDMuNTkyLTggOC04aDMyYzQuNDE2IDAgOCAzLjU5MiA4IDh2MzZhOC4wMDIgOC4wMDIgMCAwMDYgNy43NDQgMTE5LjgyNyAxMTkuODI3IDAgMDEzMC45NjggMTIuODI0YzMuMTUyIDEuODU2IDcuMTUyIDEuMzYgOS43MjgtMS4yMzJsMjUuNDQtMjUuNDRjMy4wMTYtMy4wMjQgOC4zMi0zLjAxNiAxMS4zMjggMGwyMi42NCAyMi42NGMxLjUwNCAxLjUwNCAyLjMzNiAzLjUyIDIuMzM2IDUuNjY0cy0uODMyIDQuMTYtMi4zMzYgNS42NjRsLTI1LjQ0IDI1LjQ0YTguMDAyIDguMDAyIDAgMDAtMS4yMzIgOS43MmM1LjY4OCA5LjYzMiAxMCAyMC4wNDggMTIuODMyIDMwLjk3NmE3Ljk4NiA3Ljk4NiAwIDAwNy43MzYgNmgzNmM0LjQxNiAwIDggMy41OTIgOCA4djMyelwiIC8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTE4NCAxMTJjLTM5LjY5NiAwLTcyIDMyLjMwNC03MiA3MnMzMi4zMDQgNzIgNzIgNzJjMzkuNzA0IDAgNzItMzIuMzA0IDcyLTcycy0zMi4yOTYtNzItNzItNzJ6bTAgMTI4Yy0zMC44OCAwLTU2LTI1LjEyLTU2LTU2czI1LjEyLTU2IDU2LTU2YzMwLjg3MiAwIDU2IDI1LjEyIDU2IDU2cy0yNS4xMjggNTYtNTYgNTZ6XCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdTZXR0aW5nc1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z1NldHRpbmdzRmlsbChwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB7Li4ucHJvcHN9PlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTUwMC42IDIxMi42bC01OS45LTE0LjdjLTMuMy0xMC41LTcuNS0yMC43LTEyLjYtMzAuNmwzMC42LTUxYzMuNi02IDIuNy0xMy41LTIuMS0xOC4zTDQxNCA1NS40Yy00LjgtNC44LTEyLjMtNS43LTE4LjMtMi4xbC01MSAzMC42Yy05LjktNS4xLTIwLjEtOS4zLTMwLjYtMTIuNmwtMTQuNC01OS45QzI5Ny45IDQuOCAyOTEuOSAwIDI4NSAwaC02MGMtNi45IDAtMTIuOSA0LjgtMTQuNyAxMS40bC0xNC40IDU5LjljLTEwLjUgMy4zLTIwLjcgNy41LTMwLjYgMTIuNmwtNTEtMzAuNmMtNi0zLjYtMTMuNS0yLjctMTguMyAyLjFMNTMuNCA5OGMtNC44IDQuOC01LjcgMTIuMy0yLjEgMTguM2wzMC42IDUxYy01LjEgOS45LTkuMyAyMC4xLTEyLjYgMzAuNmwtNTcuOSAxNC43QzQuOCAyMTQuMSAwIDIyMC4xIDAgMjI3djYwYzAgNi45IDQuOCAxMi45IDExLjQgMTQuNGw1Ny45IDE0LjdjMy4zIDEwLjUgNy41IDIwLjcgMTIuNiAzMC42bC0zMC42IDUxYy0zLjYgNi0yLjcgMTMuNSAyLjEgMTguM0w5NiA0NTguNmM0LjggNC44IDEyLjMgNS43IDE4LjMgMi4xbDUxLTMwLjZjOS45IDUuMSAyMC4xIDkuMyAzMC42IDEyLjZsMTQuNCA1Ny45YzEuOCA2LjYgNy44IDExLjQgMTQuNyAxMS40aDYwYzYuOSAwIDEyLjktNC44IDE0LjctMTEuNGwxNC40LTU3LjljMTAuNS0zLjMgMjAuNy03LjUgMzAuNi0xMi42bDUxIDMwLjZjNiAzLjYgMTMuNSAyLjcgMTguMy0yLjFsNDIuNi00Mi42YzQuOC00LjggNS43LTEyLjMgMi4xLTE4LjNsLTMwLjYtNTFjNS4xLTkuOSA5LjMtMjAuMSAxMi42LTMwLjZsNTkuOS0xNC43YzYuNi0xLjUgMTEuNC03LjUgMTEuNC0xNC40di02MGMwLTYuOS00LjgtMTIuOS0xMS40LTE0LjR6TTI1NSAzMzJjLTQxLjQgMC03NS0zMy42LTc1LTc1czMzLjYtNzUgNzUtNzUgNzUgMzMuNiA3NSA3NS0zMy42IDc1LTc1IDc1elwiXG4gICAgICAgICAgICAgICAgZGF0YS1vcmlnaW5hbD1cIiMwMDAwMDBcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNldHRpbmdzLWZpbGxfc3ZnX19hY3RpdmUtcGF0aFwiXG4gICAgICAgICAgICAgICAgZGF0YS1vbGRfY29sb3I9XCIjMDAwMDAwXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnU2V0dGluZ3NGaWxsXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnU2hhcmUocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNy41MyA3LjQ3bC01LTVhLjc0OS43NDkgMCAwMC0xLjA2IDBsLTUgNWEuNzQ5Ljc0OSAwIDEwMS4wNiAxLjA2bDMuNzItMy43MlYxNWEuNzUuNzUgMCAwMDEuNSAwVjQuODFsMy43MiAzLjcyYy4xNDYuMTQ3LjMzOC4yMi41My4yMmEuNzQ5Ljc0OSAwIDAwLjUzLTEuMjh6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTkuNzA4IDIxLjk0NEg0LjI5MkEyLjI5NCAyLjI5NCAwIDAxMiAxOS42NTJWMTRhLjc1Ljc1IDAgMDExLjUgMHY1LjY1MmMwIC40MzcuMzU1Ljc5Mi43OTIuNzkyaDE1LjQxNmEuNzkzLjc5MyAwIDAwLjc5Mi0uNzkyVjE0YS43NS43NSAwIDAxMS41IDB2NS42NTJhMi4yOTQgMi4yOTQgMCAwMS0yLjI5MiAyLjI5MnpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdTaGFyZVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z1RpbWVsaW5lUHJvcChwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTIyLjc3MiAxMC41MDZsLTUuNjE4LTIuMTkyLTIuMTYtNi41YS43NTEuNzUxIDAgMDAtMS40MjQtLjAwMWwtMi4xNiA2LjUtNS42MiAyLjE5MmEuNzUxLjc1MSAwIDAwLjAwMSAxLjM5OGw1LjYyIDIuMTkyIDIuMTYgNi41YS43NTIuNzUyIDAgMDAxLjQyNCAwbDIuMTYtNi41IDUuNjItMi4xOTJhLjc1MS43NTEgMCAwMC0uMDAxLTEuMzk3aC0uMDAyem0tNi40OSAyLjMyYS43NDguNzQ4IDAgMDAtLjQ0LjQ2bC0xLjU2IDQuNjk1LTEuNTYtNC42OTNhLjc1My43NTMgMCAwMC0uNDM4LS40NjJsLTQuMTU1LTEuNjIgNC4xNTQtMS42MjJjLjIwOC0uMDguMzctLjI1LjQ0LS40NjJsMS41Ni00LjY5MyAxLjU2IDQuNjk0Yy4wNy4yMTIuMjMuMzgyLjQzOC40NjNsNC4xNTUgMS42Mi00LjE1NSAxLjYyMi4wMDEtLjAwMnpNNi42NjMgMy44MTJoLTEuODhWMi4wNWEuNzUuNzUgMCAwMC0xLjUgMHYxLjc2MkgxLjVhLjc1Ljc1IDAgMDAwIDEuNWgxLjc4MnYxLjc2MmEuNzUuNzUgMCAwMDEuNSAwVjUuMzEyaDEuODhhLjc1Ljc1IDAgMTAwLTEuNWguMDAxem0yLjUzNSAxNS42MjJoLTEuMXYtMS4wMTZhLjc1Ljc1IDAgMTAtMS41IDB2MS4wMTZINS41N2EuNzUuNzUgMCAwMDAgMS41SDYuNnYxLjAxNmEuNzUuNzUgMCAxMDEuNSAwdi0xLjAxNmgxLjA5OGEuNzUuNzUgMCAwMDAtMS41elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1RpbWVsaW5lUHJvcFxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z1R3aXR0ZXIocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xOS43MDMgNC4xMTRhNy43NzMgNy43NzMgMCAwMS0yLjIzLjYxMSAzLjg5MiAzLjg5MiAwIDAwMS43MDctMi4xNDggNy43NSA3Ljc1IDAgMDEtMi40NjUuOTQxQTMuODgzIDMuODgzIDAgMDAxMC4xIDcuMDZhMTEuMDI0IDExLjAyNCAwIDAxLTguMDAyLTQuMDU3QTMuODgzIDMuODgzIDAgMDAzLjMgOC4xODZhMy44NzMgMy44NzMgMCAwMS0xLjc1OC0uNDg1di4wNWMwIDEuODggMS4zMzcgMy40NSAzLjExNCAzLjgwNmEzLjkxMiAzLjkxMiAwIDAxLTEuNzU0LjA2N0EzLjg4NCAzLjg4NCAwIDAwNi41MyAxNC4zMmE3Ljc5IDcuNzkgMCAwMS01Ljc0OCAxLjYwOCAxMC45NzkgMTAuOTc5IDAgMDA1Ljk1IDEuNzQ1YzcuMTQyIDAgMTEuMDQ2LTUuOTE1IDExLjA0Ni0xMS4wNDUgMC0uMTY3LS4wMDUtLjMzNS0uMDEyLS41MDJhNy44OTEgNy44OTEgMCAwMDEuOTM2LTIuMDA4bC4wMDItLjAwM3pcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdUd2l0dGVyXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEFkZCB9IGZyb20gJy4vQWRkJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBZHJlc3NBZGQgfSBmcm9tICcuL0FkcmVzc0FkZCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQXJyb3dCb3R0b20gfSBmcm9tICcuL0Fycm93Qm90dG9tJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCYXNrZXRGaWxsIH0gZnJvbSAnLi9CYXNrZXRGaWxsJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCYXNrZXQgfSBmcm9tICcuL0Jhc2tldCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FsZW5kZXIgfSBmcm9tICcuL0NhbGVuZGVyJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDbG9jayB9IGZyb20gJy4vQ2xvY2snXG5leHBvcnQgeyBkZWZhdWx0IGFzIENvdXJpZXIgfSBmcm9tICcuL0NvdXJpZXInXG5leHBvcnQgeyBkZWZhdWx0IGFzIEVtb2ppIH0gZnJvbSAnLi9FbW9qaSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRXhwbG9yZUZpbGwgfSBmcm9tICcuL0V4cGxvcmVGaWxsJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFeHBsb3JlIH0gZnJvbSAnLi9FeHBsb3JlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBHaWYgfSBmcm9tICcuL0dpZidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSG9tZUZpbGwgfSBmcm9tICcuL0hvbWVGaWxsJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBIb21lIH0gZnJvbSAnLi9Ib21lJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyDEsGNvbkNvbW1lbnQgfSBmcm9tICcuL8SwY29uQ29tbWVudCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGlrZSB9IGZyb20gJy4vTGlrZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGlzdEZpbGwgfSBmcm9tICcuL0xpc3RGaWxsJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMaXN0IH0gZnJvbSAnLi9MaXN0J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXJrRmlsbCB9IGZyb20gJy4vTWFya0ZpbGwnXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hcmsgfSBmcm9tICcuL01hcmsnXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1lZGlhIH0gZnJvbSAnLi9NZWRpYSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWVzc2FnZUZpbGwgfSBmcm9tICcuL01lc3NhZ2VGaWxsJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNZXNzYWdlIH0gZnJvbSAnLi9NZXNzYWdlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNb25leSB9IGZyb20gJy4vTW9uZXknXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1vcmUgfSBmcm9tICcuL01vcmUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIE5vdGlmaWNhdGlvbkZpbGwgfSBmcm9tICcuL05vdGlmaWNhdGlvbkZpbGwnXG5leHBvcnQgeyBkZWZhdWx0IGFzIE5vdGlmaWNhdGlvbiB9IGZyb20gJy4vTm90aWZpY2F0aW9uJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9kdWN0c0ZpbGwgfSBmcm9tICcuL1Byb2R1Y3RzRmlsbCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvZHVjdHMgfSBmcm9tICcuL1Byb2R1Y3RzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9maWxlRmlsbCB9IGZyb20gJy4vUHJvZmlsZUZpbGwnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFByb2ZpbGUgfSBmcm9tICcuL1Byb2ZpbGUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFF1ZXN0aW9uIH0gZnJvbSAnLi9RdWVzdGlvbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmV0d2VldCB9IGZyb20gJy4vUmV0d2VldCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VhcmNoIH0gZnJvbSAnLi9TZWFyY2gnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNldHRpbmdzRmlsbCB9IGZyb20gJy4vU2V0dGluZ3NGaWxsJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXR0aW5ncyB9IGZyb20gJy4vU2V0dGluZ3MnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNoYXJlIH0gZnJvbSAnLi9TaGFyZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGltZWxpbmVQcm9wIH0gZnJvbSAnLi9UaW1lbGluZVByb3AnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFR3aXR0ZXIgfSBmcm9tICcuL1R3aXR0ZXInIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z8SwY29uQ29tbWVudChwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE0LjA0NiAyLjI0MmwtNC4xNDgtLjAxaC0uMDAyYy00LjM3NCAwLTcuOCAzLjQyNy03LjggNy44MDIgMCA0LjA5OCAzLjE4NiA3LjIwNiA3LjQ2NSA3LjM3djMuODI4YS44NS44NSAwIDAwLjEyLjQwMy43NDQuNzQ0IDAgMDAxLjAzNC4yMjljLjI2NC0uMTY4IDYuNDczLTQuMTQgOC4wODgtNS41MDYgMS45MDItMS42MSAzLjA0LTMuOTcgMy4wNDMtNi4zMTJ2LS4wMTdjLS4wMDYtNC4zNjctMy40My03Ljc4Ny03LjgtNy43ODh2LjAwMXptMy43ODcgMTIuOTcyYy0xLjEzNC45Ni00Ljg2MiAzLjQwNS02Ljc3MiA0LjY0M1YxNi42N2EuNzUuNzUgMCAwMC0uNzUtLjc1aC0uMzk2Yy0zLjY2IDAtNi4zMTgtMi40NzYtNi4zMTgtNS44ODYgMC0zLjUzNCAyLjc2OC02LjMwMiA2LjMtNi4zMDJsNC4xNDcuMDFoLjAwMmMzLjUzMiAwIDYuMyAyLjc2NiA2LjMwMiA2LjI5Ni0uMDAzIDEuOTEtLjk0MiAzLjg0NC0yLjUxNCA1LjE3NmgtLjAwMXpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmfEsGNvbkNvbW1lbnRcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9idXR0b24ubW9kdWxlLmNzcydcclxuXHJcbmZ1bmN0aW9uIExpbmtCdXR0b24oeyBocmVmLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGluayBocmVmPXtocmVmfT5cclxuICAgICAgICAgICAgPGEgey4uLnByb3BzfT57Y2hpbGRyZW59PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gQmFzZUJ1dHRvbih7IGNoaWxkcmVuLCAuLi5wcm9wcyB9KSB7XHJcbiAgICByZXR1cm4gPGJ1dHRvbiB7Li4ucHJvcHN9PntjaGlsZHJlbn08L2J1dHRvbj5cclxufVxyXG5cclxuZnVuY3Rpb24gQnV0dG9uKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkge1xyXG4gICAgY29uc3QgQ29tcCA9IHByb3BzLmhyZWYgPyBMaW5rQnV0dG9uIDogQmFzZUJ1dHRvblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29tcCBjbGFzc05hbWU9e2NuKHN0eWxlcy5idXR0b24sIGNsYXNzTmFtZSl9IHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0NvbXA+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJidXR0b25cIjogXCJidXR0b25fYnV0dG9uX18xaEhaVFwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmltcG9ydCB7IElDT05CQVIgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaWNvbmJhci5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgTmF2aWdhdGlvbkJ1dHRvbiBmcm9tICcuL25hdmlnYXRpb24tYnV0dG9uJ1xyXG5cclxuZnVuY3Rpb24gSWNvbk5hdigpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbmJhcn0+XHJcbiAgICAgICAgICAgIHtJQ09OQkFSLm1hcCgobWVudSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSByb3V0ZXIucGF0aG5hbWUgPT09IG1lbnUucGF0aFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXttZW51LnBhdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bWVudS5rZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmljb259XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWQgPyBtZW51Lmljb25TZWxlY3RlZCA6IG1lbnUuaWNvbn1cclxuICAgICAgICAgICAgICAgICAgICA8L05hdmlnYXRpb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJY29uTmF2XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImljb25iYXJcIjogXCJpY29uYmFyX2ljb25iYXJfXzFxVWFRXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9uYXZpZ2F0aW9uLWJ1dHRvbi5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vYnV0dG9uJ1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuXHJcbmZ1bmN0aW9uIE5hdmlnYXRpb25CdXR0b24oeyBocmVmLCBzZWxlY3RlZCwgY2hpbGRyZW4sIGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICBzdHlsZXMubmF2QnV0dG9uLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQgJiYgc3R5bGVzLm5hdkJ1dHRvblNlbGVjdGVkXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIGhyZWY9e2hyZWZ9XHJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uQnV0dG9uXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5hdkJ1dHRvblwiOiBcIm5hdmlnYXRpb24tYnV0dG9uX25hdkJ1dHRvbl9fMTRDQmFcIixcblx0XCJuYXZCdXR0b25TZWxlY3RlZFwiOiBcIm5hdmlnYXRpb24tYnV0dG9uX25hdkJ1dHRvblNlbGVjdGVkX19Ib3V5dFwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSAnLi4vLi4vaG9va3MvdXNlV2luZG93U2l6ZSdcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9sYXlvdXQubW9kdWxlLmNzcydcclxuaW1wb3J0IENPTlNUIGZyb20gJy4uLy4uL2NvbnN0YW50cydcclxuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vY29sL2NvbC1zaWRlYmFyJ1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuLi9jb2wvY29sLW1haW4nXHJcbmltcG9ydCBFeHRyYSBmcm9tICcuLi9jb2wvY29sLWV4dHJhJ1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL25hdmJhci9uYXZiYXInXHJcbmltcG9ydCBJY29uQmFyIGZyb20gJy4uL2ljb25iYXIvaWNvbmJhcidcclxuaW1wb3J0IE1vYmlsZU5hdiBmcm9tICcuLi9tb2JpbGUtbmF2YmFyL3NlYXJjaCdcclxuXHJcbmZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH0pIHtcclxuICAgIGNvbnN0IHNpemUgPSB1c2VXaW5kb3dTaXplKClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge3NpemUud2lkdGggPCBDT05TVC5NT0JJTEVfU0laRSAmJiA8TW9iaWxlTmF2IC8+fVxyXG4gICAgICAgICAgICB7c2l6ZS53aWR0aCA+IENPTlNULk1PQklMRV9TSVpFICYmIDxOYXZiYXIgLz59XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihbc3R5bGVzLmxheW91dF0pfT5cclxuICAgICAgICAgICAgICAgIDxTaWRlYmFyPnNpZGViYXI8L1NpZGViYXI+XHJcblxyXG4gICAgICAgICAgICAgICAgPE1haW4+e2NoaWxkcmVufTwvTWFpbj5cclxuXHJcbiAgICAgICAgICAgICAgICB7c2l6ZS53aWR0aCA+IENPTlNULlRBQkxFVF9TSVpFICYmIDxFeHRyYT5leHRyYTwvRXh0cmE+fVxyXG4gICAgICAgICAgICAgICAge3NpemUud2lkdGggPCBDT05TVC5NT0JJTEVfU0laRSAmJiA8SWNvbkJhcj48L0ljb25CYXI+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibGF5b3V0XCI6IFwibGF5b3V0X2xheW91dF9fMmVkSTlcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFkZCBmcm9tICcuL2ljb24vQWRkJ1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9tZW51LWNvbnRlbnQubW9kdWxlLmNzcydcclxuXHJcbmZ1bmN0aW9uIE1lbnVDb250ZW50KHtcclxuICAgIHRhYmxlTmFtZSxcclxuICAgIGZvb2ROYW1lLFxyXG4gICAgZm9vZENvbnRlbnQsXHJcbiAgICBwcmljZSxcclxuICAgIGhyZWYsXHJcbiAgICBjaGlsZHJlbixcclxuICAgIC4uLnByb3BzXHJcbn0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlfT5cclxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlUm93fT5cclxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9e3N0eWxlcy50YWJsZUhlYWR9Pnt0YWJsZU5hbWV9PC90aD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMudGFibGVEYXRhfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyhzdHlsZXMuZm5hbWUsIHN0eWxlcy5pbnB1dCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz57JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgIDxBZGQgLz5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMudGFibGVEYXRhfT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0SGVhZH0+e2Zvb2ROYW1lfSA8L3A+eycgJ31cclxuICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPXtzdHlsZXMuc21hbGx9Pntmb29kQ29udGVudH08L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMudGFibGVEYXRhfT7igrp7cHJpY2V9PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuXHJcbiAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9e3N0eWxlcy5yb3d9PlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlRGF0YX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsoc3R5bGVzLmZuYW1lLCBzdHlsZXMuaW5wdXQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+eycgJ31cclxuICAgICAgICAgICAgICAgICAgICA8QWRkIC8+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlRGF0YX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dEhlYWR9Pntmb29kTmFtZX0gPC9wPnsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT17c3R5bGVzLnNtYWxsfT57Zm9vZENvbnRlbnR9PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlRGF0YX0+4oK6e3ByaWNlfTwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcblxyXG4gICAgICAgICAgICA8dHIgY2xhc3NOYW1lPXtzdHlsZXMucm93fT5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy50YWJsZURhdGF9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17KHN0eWxlcy5mbmFtZSwgc3R5bGVzLmlucHV0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAvPnsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgPEFkZCAvPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy50YWJsZURhdGF9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHRIZWFkfT57Zm9vZE5hbWV9IDwvcD57JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9e3N0eWxlcy5zbWFsbH0+e2Zvb2RDb250ZW50fTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy50YWJsZURhdGF9PuKCuntwcmljZX08L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG5cclxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMudGFibGVEYXRhfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyhzdHlsZXMuZm5hbWUsIHN0eWxlcy5pbnB1dCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz57JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgIDxBZGQgLz5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMudGFibGVEYXRhfT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0SGVhZH0+e2Zvb2ROYW1lfSA8L3A+eycgJ31cclxuICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPXtzdHlsZXMuc21hbGx9Pntmb29kQ29udGVudH08L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMudGFibGVEYXRhfT7igrp7cHJpY2V9PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51Q29udGVudFxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0YWJsZVwiOiBcIm1lbnUtY29udGVudF90YWJsZV9fMWplb0tcIixcblx0XCJpbnB1dFwiOiBcIm1lbnUtY29udGVudF9pbnB1dF9fMzdNR2xcIixcblx0XCJ0ZXh0SGVhZFwiOiBcIm1lbnUtY29udGVudF90ZXh0SGVhZF9fdlU2T1VcIixcblx0XCJzbWFsbFwiOiBcIm1lbnUtY29udGVudF9zbWFsbF9feTBQbmtcIixcblx0XCJyb3dcIjogXCJtZW51LWNvbnRlbnRfcm93X18xbXN6c1wiLFxuXHRcInRhYmxlSGVhZFwiOiBcIm1lbnUtY29udGVudF90YWJsZUhlYWRfXzNGM09HXCIsXG5cdFwidGFibGVEYXRhXCI6IFwibWVudS1jb250ZW50X3RhYmxlRGF0YV9fdzhtLThcIixcblx0XCJmbmFtZVwiOiBcIm1lbnUtY29udGVudF9mbmFtZV9fWEJYQlhcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zZWFyY2gubW9kdWxlLmNzcydcclxuaW1wb3J0IExvZ28gZnJvbSAnLi4vbmF2YmFyL2xvZ28nXHJcblxyXG5mdW5jdGlvbiBOYXZCYXIoeyBocmVmLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaH0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaS5waW5pbWcuY29tL29yaWdpbmFscy9mNC9jMi9iZi9mNGMyYmY4OTI1OGIzYTk1MjMzODU0YjcyMDE4YTU2NC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubG9nb31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuYm94fSB0eXBlPVwidGV4dFwiIG5hbWU9XCJzZWFyY2hcIiAvPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhclxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzZWFyY2hcIjogXCJzZWFyY2hfc2VhcmNoX18zM2NEQVwiLFxuXHRcImJveFwiOiBcInNlYXJjaF9ib3hfX3JwX1I3XCIsXG5cdFwibG9nb1wiOiBcInNlYXJjaF9sb2dvX191QzhfSlwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xvZ28ubW9kdWxlLmNzcydcclxuXHJcbmZ1bmN0aW9uIExvZ28oeyBocmVmLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzPXtzdHlsZXMuaW1hZ2V9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaS5waW5pbWcuY29tL29yaWdpbmFscy9mNC9jMi9iZi9mNGMyYmY4OTI1OGIzYTk1MjMzODU0YjcyMDE4YTU2NC5wbmdcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dvXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImltYWdlXCI6IFwibG9nb19pbWFnZV9fV3N0SmxcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL25hdmJhci5tb2R1bGUuY3NzJ1xyXG5cclxuaW1wb3J0IFNlYXJjaCBmcm9tICcuL3NlYXJjaC1ib3gnXHJcbmltcG9ydCBMb2dvIGZyb20gJy4vbG9nbydcclxuXHJcbmZ1bmN0aW9uIE5hdmJhcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzcz17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPExvZ28gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXJcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZ3JpZFwiOiBcIm5hdmJhcl9ncmlkX18xbHdsTlwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gJy4uL2ljb24vU2VhcmNoJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3NlYXJjaC1ib3gubW9kdWxlLmNzcydcclxuXHJcbmZ1bmN0aW9uIFNlYXJjaEJveCh7IGhyZWYsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLmV4YW1wbGV9PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uXCIgbmFtZT1cInNlYXJjaDJcIiAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgIDxTZWFyY2ggLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCb3hcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZXhhbXBsZVwiOiBcInNlYXJjaC1ib3hfZXhhbXBsZV9fTFFERzVcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL25hdmlnYXRpb24tYnV0dG9uLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uJ1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuXHJcbmZ1bmN0aW9uIE5hdmlnYXRpb25CdXR0b24oeyBocmVmLCBzZWxlY3RlZCwgY2hpbGRyZW4sIGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICBzdHlsZXMubmF2QnV0dG9uLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQgJiYgc3R5bGVzLm5hdkJ1dHRvblNlbGVjdGVkXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIGhyZWY9e2hyZWZ9XHJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uQnV0dG9uXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5hdkJ1dHRvblwiOiBcIm5hdmlnYXRpb24tYnV0dG9uX25hdkJ1dHRvbl9fMW1BbEVcIixcblx0XCJuYXZCdXR0b25TZWxlY3RlZFwiOiBcIm5hdmlnYXRpb24tYnV0dG9uX25hdkJ1dHRvblNlbGVjdGVkX18ya0l3ZlwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmltcG9ydCB7IFNJREVOQVYgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9uYXZpZ2F0aW9uLm1vZHVsZS5jc3MnXHJcblxyXG5pbXBvcnQgTmF2aWdhdGlvbkJ1dHRvbiBmcm9tICcuL25hdmlnYXRpb24tYnV0dG9uJ1xyXG5pbXBvcnQgVGV4dFRpdGxlIGZyb20gJy4uL3RleHQtdGl0bGUnXHJcblxyXG5mdW5jdGlvbiBOYXZpZ2F0aW9uKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2fT5cclxuICAgICAgICAgICAge1NJREVOQVYubWFwKChtZW51KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaG93VGl0bGUgPSBtZW51LnRpdGxlLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gcm91dGVyLnBhdGhuYW1lID09PSBtZW51LnBhdGhcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bWVudS5rZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmeT17bWVudS5ub3RpZnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17bWVudS5wYXRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uYXZCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWQgPyBtZW51Lmljb25TZWxlY3RlZCA6IG1lbnUuaWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dUaXRsZSAmJiA8VGV4dFRpdGxlPnttZW51LnRpdGxlfTwvVGV4dFRpdGxlPn1cclxuICAgICAgICAgICAgICAgICAgICA8L05hdmlnYXRpb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5hdlwiOiBcIm5hdmlnYXRpb25fbmF2X184bnR6LVwiLFxuXHRcIm5hdkJ1dHRvblwiOiBcIm5hdmlnYXRpb25fbmF2QnV0dG9uX18zbU0zcVwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9waG90by5tb2R1bGUuY3NzJ1xyXG5cclxuZnVuY3Rpb24gUGhvdG8oe1xyXG4gICAgc3JjID0gJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvNy83OS9CdXJnZXJfS2luZ19sb2dvLnN2Zy8xMDEycHgtQnVyZ2VyX0tpbmdfbG9nby5zdmcucG5nJyxcclxuICAgIGFsdCxcclxuICAgIHNpemUgPSA1NSxcclxufSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oW3N0eWxlcy5waG90b10pfVxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogc2l6ZSwgaGVpZ2h0OiBzaXplIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmltZ30gc3JjPXtzcmN9IGFsdD17YWx0fSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFBob3RvXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInBob3RvXCI6IFwicGhvdG9fcGhvdG9fX1M5aGk0XCIsXG5cdFwiaW1nXCI6IFwicGhvdG9faW1nX19GYkRmblwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgKiBhcyBJY29uIGZyb20gJy4uL2ljb24nXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbWluLm1vZHVsZS5jc3MnXHJcblxyXG5mdW5jdGlvbiBNaW4oeyBtaW5QcmljZSB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGF5b3V0fT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxJY29uLk1vbmV5IHN0eWxlPXt7IGZvbnRTaXplOiAzNSB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPHA+TWluIFBha2V0IFR1dGFyxLE8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD7igrp7bWluUHJpY2V9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxJY29uLkNsb2NrIHN0eWxlPXt7IGZvbnRTaXplOiAzNSB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPHA+VGVzbGltIFPDvHJlc2k8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD57bWluUHJpY2V9ZGs8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNaW5cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibGF5b3V0XCI6IFwibWluX2xheW91dF9fM0tJOVpcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcG9pbnQtYm94Lm1vZHVsZS5jc3MnXHJcblxyXG5mdW5jdGlvbiBQb2ludEJveCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYXlvdXR9PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5SZXN0YXVyYW50IFB1YW5sYXLEsTwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb3d9PlxyXG4gICAgICAgICAgICAgICAgPFBvaW50IHBvaW50TmFtZT1cIkjEsXpcIiBwb2ludD1cIjcsNVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8UG9pbnQgcG9pbnROYW1lPVwiU2VydmlzXCIgcG9pbnQ9XCI4LDVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFBvaW50IHBvaW50TmFtZT1cIkxlenpldFwiIHBvaW50PVwiOS4wXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvaW50Qm94XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxheW91dFwiOiBcInBvaW50LWJveF9sYXlvdXRfX2Y3QjE4XCIsXG5cdFwicm93XCI6IFwicG9pbnQtYm94X3Jvd19fMmdpajNcIixcblx0XCJ0ZXh0XCI6IFwicG9pbnQtYm94X3RleHRfX0FLbG15XCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBQaG90byBmcm9tICcuLi9waG90bydcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wb2ludC5tb2R1bGUuY3NzJ1xyXG5cclxuZnVuY3Rpb24gUG9pbnQoeyBwb2ludE5hbWUsIHBvaW50LCAuLi5wcm9wcyB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9pbnRDYXJkfT5cclxuICAgICAgICAgICAgPHA+e3BvaW50TmFtZX08L3A+XHJcbiAgICAgICAgICAgIDxoMT57cG9pbnR9PC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9pbnRcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicG9pbnRDYXJkXCI6IFwicG9pbnRfcG9pbnRDYXJkX18ycjdtcVwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUGhvdG8gZnJvbSAnLi4vcGhvdG8nXHJcbmltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50LWJveCdcclxuaW1wb3J0IE1pbiBmcm9tICcuL21pbidcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9yZXN0LWNhcmQubW9kdWxlLmNzcydcclxuXHJcbmZ1bmN0aW9uIFJlc3RDYXJkKHsgaHJlZiwgY2hpbGRyZW4sIC4uLnByb3BzIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYXlvdXR9PlxyXG4gICAgICAgICAgICA8UGhvdG8gLz5cclxuICAgICAgICAgICAgPFBvaW50IC8+XHJcbiAgICAgICAgICAgIDxNaW4gbWluUHJpY2U9XCIxNVwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc3RDYXJkXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxheW91dFwiOiBcInJlc3QtY2FyZF9sYXlvdXRfXzI0d0JKXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3RleHQtdGl0bGUubW9kdWxlLmNzcydcclxuXHJcbmZ1bmN0aW9uIFRleHRUaXRsZSh7IGJvbGQgPSB0cnVlLCBjaGlsZHJlbiB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e2NuKFtzdHlsZXMudGl0bGUsIGJvbGQgJiYgc3R5bGVzLmJvbGRdKX0+e2NoaWxkcmVufTwvaDI+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVGV4dFRpdGxlXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRpdGxlXCI6IFwidGV4dC10aXRsZV90aXRsZV9fMjRLdW9cIixcblx0XCJib2xkXCI6IFwidGV4dC10aXRsZV9ib2xkX18yWUhCTVwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9idXR0b24nXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdGhlbWUtYnV0dG9uLm1vZHVsZS5jc3MnXHJcblxyXG5mdW5jdGlvbiBUaGVtZUJ1dHRvbih7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIGJpZyA9IGZhbHNlLCAuLi5wcm9wcyB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihzdHlsZXMuYnV0dG9uLCBiaWcgJiYgc3R5bGVzLmJpZ0J1dHRvbiwgY2xhc3NOYW1lKX1cclxuICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJ1dHRvblxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJidXR0b25cIjogXCJ0aGVtZS1idXR0b25fYnV0dG9uX18yODFZeFwiLFxuXHRcImJpZ0J1dHRvblwiOiBcInRoZW1lLWJ1dHRvbl9iaWdCdXR0b25fXzFHQlM1XCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdXNlci5tb2R1bGUuY3NzJ1xyXG5cclxuZnVuY3Rpb24gVXNlcih7IG5hbWUsIGFkcmVzcywgY2hpbGRyZW4sIC4uLnByb3BzIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyQ2FyZH0+XHJcbiAgICAgICAgICAgIDxoMj57bmFtZX08L2gyPlxyXG4gICAgICAgICAgICA8cD57YWRyZXNzfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlclxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ1c2VyQ2FyZFwiOiBcInVzZXJfdXNlckNhcmRfXzFRUEM1XCJcbn07XG4iLCJpbXBvcnQgKiBhcyBJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvaWNvbidcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgTU9CSUxFX1NJWkU6IDcwMCxcclxuICAgIFRBQkxFVF9TSVpFOiA5MjUsXHJcbn1cclxuZXhwb3J0IGNvbnN0IFNJREVOQVYgPSBbXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnaG9tZScsXHJcbiAgICAgICAgcGF0aDogJy9tYWluJyxcclxuICAgICAgICBpY29uOiA8SWNvbi5Ib21lIC8+LFxyXG4gICAgICAgIGljb25TZWxlY3RlZDogPEljb24uSG9tZUZpbGwgLz4sXHJcbiAgICAgICAgdGl0bGU6ICdBbmEgU2F5ZmEnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdiYXNrZXQnLFxyXG4gICAgICAgIHBhdGg6ICcvY2FydCcsXHJcbiAgICAgICAgaWNvbjogPEljb24uQmFza2V0IC8+LFxyXG4gICAgICAgIGljb25TZWxlY3RlZDogPEljb24uQmFza2V0RmlsbCAvPixcclxuICAgICAgICB0aXRsZTogJ1NlcGV0aW0nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdub3RpZmljYXRpb24nLFxyXG4gICAgICAgIHBhdGg6ICcvbm90aWZpY2F0aW9ucycsXHJcbiAgICAgICAgaWNvbjogPEljb24uTm90aWZpY2F0aW9uIC8+LFxyXG4gICAgICAgIGljb25TZWxlY3RlZDogPEljb24uTm90aWZpY2F0aW9uRmlsbCAvPixcclxuICAgICAgICB0aXRsZTogJ0JpbGRpcmltbGVyJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAncHJvZmlsZScsXHJcbiAgICAgICAgcGF0aDogJy9wcm9maWxlJyxcclxuICAgICAgICBpY29uOiA8SWNvbi5Qcm9maWxlIC8+LFxyXG4gICAgICAgIGljb25TZWxlY3RlZDogPEljb24uUHJvZmlsZUZpbGwgLz4sXHJcbiAgICAgICAgdGl0bGU6ICdQcm9maWwnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdzZXR0aW5ncycsXHJcbiAgICAgICAgcGF0aDogJy9zZXR0aW5ncycsXHJcbiAgICAgICAgaWNvbjogPEljb24uU2V0dGluZ3MgLz4sXHJcbiAgICAgICAgaWNvblNlbGVjdGVkOiA8SWNvbi5TZXR0aW5nc0ZpbGwgLz4sXHJcbiAgICAgICAgdGl0bGU6ICdBeWFybGFyJyxcclxuICAgIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBDT05URU5UID0gW1xyXG4gICAge1xyXG4gICAgICAgIGtleTogMSxcclxuICAgICAgICBuYW1lOiAnQnVyc2EgxLBza2VuZGVyJyxcclxuICAgICAgICBjb250OiAnYWPEsWzEsScsXHJcbiAgICAgICAgZGVnZXI6IDE4LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6IDIsXHJcbiAgICAgICAgbmFtZTogJ1RhdnVrIETDvHLDvG0nLFxyXG4gICAgICAgIGNvbnQ6ICd0dXLFn3UsZG9tYXRlcyxtYXJ1bCcsXHJcbiAgICAgICAgZGVnZXI6IDYsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogMyxcclxuICAgICAgICBuYW1lOiAnRXQgRMO8csO8bScsXHJcbiAgICAgICAgY29udDogJ3R1csWfdSxkb21hdGVzLG1hcnVsJyxcclxuICAgICAgICBkZWdlcjogOCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiA0LFxyXG4gICAgICAgIG5hbWU6ICdMYWhtYWN1bicsXHJcbiAgICAgICAgY29udDogJ3llxZ9pbGxpayBpbGUnLFxyXG4gICAgICAgIGRlZ2VyOiA2LFxyXG4gICAgfSxcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IElDT05CQVIgPSBbXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnaG9tZScsXHJcbiAgICAgICAgcGF0aDogJy9tYWluJyxcclxuICAgICAgICBpY29uOiA8SWNvbi5Ib21lIC8+LFxyXG4gICAgICAgIGljb25TZWxlY3RlZDogPEljb24uSG9tZUZpbGwgc3R5bGU9e3sgY29sb3I6ICd2YXIoLS1jLXRoZW1lKScgfX0gLz4sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ2Jhc2tldCcsXHJcbiAgICAgICAgcGF0aDogJy9jYXJ0JyxcclxuICAgICAgICBpY29uOiA8SWNvbi5CYXNrZXQgLz4sXHJcbiAgICAgICAgaWNvblNlbGVjdGVkOiA8SWNvbi5CYXNrZXRGaWxsIHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tYy10aGVtZSknIH19IC8+LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdwcm9maWxlJyxcclxuICAgICAgICBwYXRoOiAnL3Byb2ZpbGUnLFxyXG4gICAgICAgIGljb246IDxJY29uLlByb2ZpbGUgLz4sXHJcbiAgICAgICAgaWNvblNlbGVjdGVkOiA8SWNvbi5Qcm9maWxlRmlsbCBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLWMtdGhlbWUpJyB9fSAvPixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnc2V0dGluZ3MnLFxyXG4gICAgICAgIHBhdGg6ICcvc2V0dGluZ3MnLFxyXG4gICAgICAgIGljb246IDxJY29uLlNldHRpbmdzIC8+LFxyXG4gICAgICAgIGljb25TZWxlY3RlZDogPEljb24uU2V0dGluZ3NGaWxsIHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tYy10aGVtZSknIH19IC8+LFxyXG4gICAgfSxcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IEFETUlOU0lERUJBUiA9IFtcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdob21lJyxcclxuICAgICAgICBwYXRoOiAnL2FkbWluSG9tZScsXHJcbiAgICAgICAgaWNvbjogPEljb24uSG9tZSAvPixcclxuICAgICAgICBpY29uU2VsZWN0ZWQ6IDxJY29uLkhvbWVGaWxsIC8+LFxyXG4gICAgICAgIHRpdGxlOiAnQW5hIFNheWZhJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAncHJvZHVjdHMnLFxyXG4gICAgICAgIHBhdGg6ICcvYWRtaW5Qcm9kdWN0JyxcclxuICAgICAgICBpY29uOiA8SWNvbi5Qcm9kdWN0cyAvPixcclxuICAgICAgICBpY29uU2VsZWN0ZWQ6IDxJY29uLlByb2R1Y3RzRmlsbCAvPixcclxuICAgICAgICB0aXRsZTogJ8OccsO8bmxlcicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ2Jhc2tldCcsXHJcbiAgICAgICAgcGF0aDogJy9hZG1pbkNhcnQnLFxyXG4gICAgICAgIGljb246IDxJY29uLkJhc2tldCAvPixcclxuICAgICAgICBpY29uU2VsZWN0ZWQ6IDxJY29uLkJhc2tldEZpbGwgLz4sXHJcbiAgICAgICAgdGl0bGU6ICdTaXBhcmnFn2xlcicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ25vdGlmaWNhdGlvbicsXHJcbiAgICAgICAgcGF0aDogJy9hZG1pbkNvbW1lbnQnLFxyXG4gICAgICAgIGljb246IDxJY29uLk5vdGlmaWNhdGlvbiAvPixcclxuICAgICAgICBpY29uU2VsZWN0ZWQ6IDxJY29uLk5vdGlmaWNhdGlvbkZpbGwgLz4sXHJcbiAgICAgICAgdGl0bGU6ICdZb3J1bWxhcicsXHJcbiAgICB9LFxyXG5dXHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuZnVuY3Rpb24gdXNlV2luZG93U2l6ZSgpIHtcclxuICAgIC8vIEluaXRpYWxpemUgc3RhdGUgd2l0aCB1bmRlZmluZWQgd2lkdGgvaGVpZ2h0IHNvIHNlcnZlciBhbmQgY2xpZW50IHJlbmRlcnMgbWF0Y2hcclxuICAgIC8vIExlYXJuIG1vcmUgaGVyZTogaHR0cHM6Ly9qb3Nod2NvbWVhdS5jb20vcmVhY3QvdGhlLXBlcmlscy1vZi1yZWh5ZHJhdGlvbi9cclxuICAgIGNvbnN0IFt3aW5kb3dTaXplLCBzZXRXaW5kb3dTaXplXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB3aWR0aDogdW5kZWZpbmVkLFxyXG4gICAgICAgIGhlaWdodDogdW5kZWZpbmVkLFxyXG4gICAgfSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIEhhbmRsZXIgdG8gY2FsbCBvbiB3aW5kb3cgcmVzaXplXHJcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlUmVzaXplKCkge1xyXG4gICAgICAgICAgICAvLyBTZXQgd2luZG93IHdpZHRoL2hlaWdodCB0byBzdGF0ZVxyXG4gICAgICAgICAgICBzZXRXaW5kb3dTaXplKHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSlcclxuXHJcbiAgICAgICAgLy8gQ2FsbCBoYW5kbGVyIHJpZ2h0IGF3YXkgc28gc3RhdGUgZ2V0cyB1cGRhdGVkIHdpdGggaW5pdGlhbCB3aW5kb3cgc2l6ZVxyXG4gICAgICAgIGhhbmRsZVJlc2l6ZSgpXHJcblxyXG4gICAgICAgIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lciBvbiBjbGVhbnVwXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpXHJcbiAgICB9LCBbXSkgLy8gRW1wdHkgYXJyYXkgZW5zdXJlcyB0aGF0IGVmZmVjdCBpcyBvbmx5IHJ1biBvbiBtb3VudFxyXG5cclxuICAgIHJldHVybiB3aW5kb3dTaXplXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgdXNlV2luZG93U2l6ZVxyXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIFByZWZldGNoT3B0aW9ucyxcbiAgTmV4dFJvdXRlcixcbiAgaXNMb2NhbFVSTCxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBleGVjT25jZSB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgYWRkQmFzZVBhdGgsIHJlc29sdmVIcmVmIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hcyA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcykgOiByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoYXMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgY29uc3Qgd2FybiA9IGV4ZWNPbmNlKGNvbnNvbGUuZXJyb3IpXG5cbiAgLy8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG4gIGNvbnN0IFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKVxuICBjb25zdCBleGFjdCA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKVxuICAvLyBAdHMtaWdub3JlIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQsIHdoZW4gZGVjbGFyaW5nIGl0IG9uIHRoZSBjbGFzcyBpdCBvdXRwdXRzIGFuIGV4dHJhIGJpdCBvZiBjb2RlIHdoaWNoIGlzIG5vdCBuZWVkZWQuXG4gIExpbmsucHJvcFR5cGVzID0gZXhhY3Qoe1xuICAgIGhyZWY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLFxuICAgIGFzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgcHJlZmV0Y2g6IFByb3BUeXBlcy5ib29sLFxuICAgIHJlcGxhY2U6IFByb3BUeXBlcy5ib29sLFxuICAgIHNoYWxsb3c6IFByb3BUeXBlcy5ib29sLFxuICAgIHBhc3NIcmVmOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzY3JvbGw6IFByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgKHByb3BzOiBhbnksIHByb3BOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wc1twcm9wTmFtZV1cblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICBgV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPmBcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfSxcbiAgICBdKS5pc1JlcXVpcmVkLFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQge1xuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBiYXNlUGF0aCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGJhc2VQYXRoKVxuICAgICAgOiBiYXNlUGF0aCArIHBhdGhcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoY3VycmVudFBhdGg6IHN0cmluZywgaHJlZjogVXJsKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIHJldHVybiBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgIDogZmluYWxVcmwuaHJlZlxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIHVybEFzU3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5mdW5jdGlvbiB0cnlQYXJzZVJlbGF0aXZlVXJsKFxuICB1cmw6IHN0cmluZ1xuKTogbnVsbCB8IFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgIClcbiAgICAgIH0sIDApXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxudHlwZSBDb21wb25lbnRSZXMgPSB7IHBhZ2U6IENvbXBvbmVudFR5cGU7IG1vZDogYW55IH1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbnR5cGUgUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBhbnlcbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUm91dGVJbmZvLCBBcHA/OiBDb21wb25lbnRUeXBlKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cblxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtMb2FkaW5nRXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IENvbXBvbmVudFR5cGVcbiAgICAgIHdyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgdXBkYXRlKHJvdXRlOiBzdHJpbmcsIG1vZDogYW55KSB7XG4gICAgY29uc3QgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlID0gbW9kLmRlZmF1bHQgfHwgbW9kXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBDb21wb25lbnQsXG4gICAgICBfX05fU1NHOiBtb2QuX19OX1NTRyxcbiAgICAgIF9fTl9TU1A6IG1vZC5fX05fU1NQLFxuICAgIH0pXG4gICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGFcblxuICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBwYXJzZWQgPSB0cnlQYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGlmICghcGFyc2VkKSByZXR1cm4gZmFsc2VcblxuICAgIGxldCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMgfSA9IHBhcnNlZFxuICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpXG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKGNsZWFuZWRBcylcbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgY29uc3QgeyBlcnJvciB9ID0gcm91dGVJbmZvXG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKChvcHRpb25zIGFzIGFueSkuX05fWCwgKG9wdGlvbnMgYXMgYW55KS5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciwgZXJyb3I6IGVyciB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgIGVycixcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSBhcyBhbnkpXG4gICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8Um91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihcbiAgICAgICAgICAgIChyZXMpID0+XG4gICAgICAgICAgICAgICh7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgICAgICB9IGFzIFJvdXRlSW5mbylcbiAgICAgICAgICApXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHBhcnNlZCA9IHRyeVBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgaWYgKCFwYXJzZWQpIHJldHVyblxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGFzUGF0aCksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPENvbXBvbmVudFJlcz4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgaXRlbSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCB2YWx1ZSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4uLy4uL2xpYi9sb2FkLWVudi1jb25maWcnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogYW55XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgaW50ZXJmYWNlLW5hbWVcbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGZpbGVzOiBzdHJpbmdbXVxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dCdcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9tZW51LWNvbnRlbnQnXHJcbmltcG9ydCBSZXN0IGZyb20gJy4uL2NvbXBvbmVudHMvcmVzdC1jYXJkL3Jlc3QtY2FyZCdcclxuXHJcbmZ1bmN0aW9uIE1lbnVQYWdlKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8UmVzdCAvPlxyXG4gICAgICAgICAgICA8TWVudVxyXG4gICAgICAgICAgICAgICAgdGFibGVOYW1lPVwiS2ViYXAgw4dlxZ9pdGxlcmlcIlxyXG4gICAgICAgICAgICAgICAgZm9vZE5hbWU9XCJCdXJzYSDEsHNrZW5kZXIgXCJcclxuICAgICAgICAgICAgICAgIGZvb2RDb250ZW50PVwiw5Z6ZWwgc29zLCB5b8SfdXJ0LCBzb8SfYW4sIGvEsXbEsXJjxLFrIG1hcnVsLCBkb21hdGVzLCBzYWxhdGFcIlxyXG4gICAgICAgICAgICAgICAgcHJpY2U9XCIyNVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxNZW51XHJcbiAgICAgICAgICAgICAgICB0YWJsZU5hbWU9XCJTYWxhdGEgw4dlxZ9pdGxlcmlcIlxyXG4gICAgICAgICAgICAgICAgZm9vZE5hbWU9XCJNZXZzaW0gU2FsYXRhXCJcclxuICAgICAgICAgICAgICAgIGZvb2RDb250ZW50PVwiSGF2dcOnLCBrxLF2xLFyY8SxayBtYXJ1bCwgZG9tYXRlcywgYmliZXIsIGlzdGXEn2UgZ8O2cmUgc2/En2FuXCJcclxuICAgICAgICAgICAgICAgIHByaWNlPVwiMTBcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51UGFnZVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9