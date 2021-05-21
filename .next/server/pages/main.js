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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/main.js");
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

/***/ "./components/card.js":
/*!****************************!*\
  !*** ./components/card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.module.css */ "./components/card.module.css");
/* harmony import */ var _card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_card_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _photo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photo */ "./components/photo.js");
/* harmony import */ var _icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon-button */ "./components/icon-button.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ "./components/icon/index.js");
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







function Card(_ref) {
  let {
    href,
    name
  } = _ref,
      props = _objectWithoutProperties(_ref, ["href", "name"]);

  return __jsx("article", _extends({
    className: _card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card,
    href: href
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx(_photo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: _card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.avatarPhoto,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: _card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.body,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("header", {
    className: _card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: _card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, name), ' '), __jsx("footer", {
    className: _card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footerButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, __jsx(_icon_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: _card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.actionButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }, __jsx(_icon__WEBPACK_IMPORTED_MODULE_4__["İconComment"], {
    style: {
      color: 'green'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 29
    }
  })), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }, "3")), __jsx("div", {
    className: _card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footerButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, __jsx(_icon_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: _card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.actionButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  }, __jsx(_icon__WEBPACK_IMPORTED_MODULE_4__["Like"], {
    style: {
      color: 'var(--c-theme)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 29
    }
  })), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  }, "5")))));
}

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/card.module.css":
/*!************************************!*\
  !*** ./components/card.module.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card": "card_card__3t4dS",
	"avatarPhoto": "card_avatarPhoto__2RKMN",
	"avatar": "card_avatar__2Tzy_",
	"body": "card_body__2mI2G",
	"header": "card_header__1g80v",
	"name": "card_name__1jC2W",
	"footer": "card_footer__RKXbl",
	"footerButton": "card_footerButton__13m5Z",
	"actionButton": "card_actionButton__1PtTJ"
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

/***/ "./components/icon-button.js":
/*!***********************************!*\
  !*** ./components/icon-button.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.module.css */ "./components/button.module.css");
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_button_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button */ "./components/button.js");
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\icon-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function IconButton(_ref) {
  let {
    children,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "className"]);

  return __jsx(_button__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_button_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button, className)
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }), children);
}

/* harmony default export */ __webpack_exports__["default"] = (IconButton);

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

/***/ "./components/main-card.js":
/*!*********************************!*\
  !*** ./components/main-card.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ "./components/card.js");
/* harmony import */ var _main_card_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-card.module.css */ "./components/main-card.module.css");
/* harmony import */ var _main_card_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_main_card_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\main-card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function MainCard({
  name
}) {
  return __jsx("div", {
    className: _main_card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.layout,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _main_card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.row,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _main_card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.column,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, __jsx(_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: _main_card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.column,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx(_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: _main_card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.column,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, __jsx(_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: _main_card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.column,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, __jsx(_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: _main_card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.column,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, __jsx(_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: _main_card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.column,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx(_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: _main_card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.column,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, __jsx(_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: _main_card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.column,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, __jsx(_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: _main_card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.column,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx(_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: _main_card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.column,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx(_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: _main_card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.column,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx(_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: _main_card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.column,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, __jsx(_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: _main_card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.column,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx(_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: _main_card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.column,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx(_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: _main_card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.column,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx(_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: _main_card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.column,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, __jsx(_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: _main_card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.column,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx(_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: _main_card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.column,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, __jsx(_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (MainCard);

/***/ }),

/***/ "./components/main-card.module.css":
/*!*****************************************!*\
  !*** ./components/main-card.module.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"layout": "main-card_layout__TVi-_",
	"column": "main-card_column__305m9",
	"row": "main-card_row__3msdX"
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

/***/ "./pages/main.js":
/*!***********************!*\
  !*** ./pages/main.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/layout */ "./components/layout/layout.js");
/* harmony import */ var _components_main_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/main-card */ "./components/main-card.js");
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\pages\\main.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function MainPage() {
  return __jsx(_components_layout_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, __jsx(_components_main_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "Burger King",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (MainPage);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NhcmQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbC9jb2wtZXh0cmEuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb2wvY29sLWV4dHJhLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb2wvY29sLW1haW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb2wvY29sLW1haW4ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbC9jb2wtc2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbC9jb2wtc2lkZWJhci5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi1idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29uL0FkZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb24vQWRyZXNzQWRkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9BcnJvd0JvdHRvbS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb24vQmFza2V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9CYXNrZXRGaWxsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9DYWxlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb24vQ2xvY2suanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29uL0NvdXJpZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29uL0Vtb2ppLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9FeHBsb3JlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9FeHBsb3JlRmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb24vR2lmLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9Ib21lLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9Ib21lRmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb24vTGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb24vTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb24vTGlzdEZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29uL01hcmsuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29uL01hcmtGaWxsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9NZWRpYS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb24vTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb24vTWVzc2FnZUZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29uL01vbmV5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9Nb3JlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9Ob3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29uL05vdGlmaWNhdGlvbkZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29uL1Byb2R1Y3RzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9Qcm9kdWN0c0ZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29uL1Byb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29uL1Byb2ZpbGVGaWxsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9RdWVzdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb24vUmV0d2VldC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb24vU2VhcmNoLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9TZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb24vU2V0dGluZ3NGaWxsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9TaGFyZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb24vVGltZWxpbmVQcm9wLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9Ud2l0dGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb24vxLBjb25Db21tZW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbmJhci9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29uYmFyL2J1dHRvbi5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbmJhci9pY29uYmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbmJhci9pY29uYmFyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29uYmFyL25hdmlnYXRpb24tYnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbmJhci9uYXZpZ2F0aW9uLWJ1dHRvbi5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21haW4tY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21haW4tY2FyZC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9iaWxlLW5hdmJhci9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2JpbGUtbmF2YmFyL3NlYXJjaC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmF2YmFyL2xvZ28uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZiYXIvbG9nby5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmJhci9uYXZiYXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmJhci9zZWFyY2gtYm94LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmF2YmFyL3NlYXJjaC1ib3gubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi1idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24tYnV0dG9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bob3RvLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGhvdG8ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RleHQtdGl0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90ZXh0LXRpdGxlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90aGVtZS1idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90aGVtZS1idXR0b24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VzZXIvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VzZXIvdXNlci5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ob29rcy91c2VXaW5kb3dTaXplLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9tYWluLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIl0sIm5hbWVzIjpbIkxpbmtCdXR0b24iLCJocmVmIiwiY2hpbGRyZW4iLCJwcm9wcyIsIkJhc2VCdXR0b24iLCJCdXR0b24iLCJmdWxsIiwiY2xhc3NOYW1lIiwiQ29tcCIsImNuIiwic3R5bGVzIiwiYnV0dG9uIiwiZnVsbFdpZHRoIiwiQ2FyZCIsIm5hbWUiLCJjYXJkIiwiYXZhdGFyIiwiYXZhdGFyUGhvdG8iLCJib2R5IiwiaGVhZGVyIiwiZm9vdGVyIiwiZm9vdGVyQnV0dG9uIiwiYWN0aW9uQnV0dG9uIiwiY29sb3IiLCJFeHRyYSIsImxheW91dCIsIk1haW4iLCJtYWluIiwiU2lkZWJhciIsInNpZGViYXIiLCJJY29uQnV0dG9uIiwiU3ZnQWRkIiwiU3ZnQWRyZXNzQWRkIiwiU3ZnQXJyb3dCb3R0b20iLCJTdmdCYXNrZXQiLCJTdmdCYXNrZXRGaWxsIiwiU3ZnQ2FsZW5kZXIiLCJTdmdDbG9jayIsIlN2Z0NvdXJpZXIiLCJTdmdFbW9qaSIsIlN2Z0V4cGxvcmUiLCJTdmdFeHBsb3JlRmlsbCIsIlN2Z0dpZiIsIlN2Z0hvbWUiLCJTdmdIb21lRmlsbCIsIlN2Z0xpa2UiLCJTdmdMaXN0IiwiU3ZnTGlzdEZpbGwiLCJTdmdNYXJrIiwiU3ZnTWFya0ZpbGwiLCJTdmdNZWRpYSIsIlN2Z01lc3NhZ2UiLCJTdmdNZXNzYWdlRmlsbCIsIlN2Z01vbmV5IiwiU3ZnTW9yZSIsIlN2Z05vdGlmaWNhdGlvbiIsIlN2Z05vdGlmaWNhdGlvbkZpbGwiLCJTdmdQcm9kdWN0cyIsIlN2Z1Byb2R1Y3RzRmlsbCIsIlN2Z1Byb2ZpbGUiLCJTdmdQcm9maWxlRmlsbCIsIlN2Z1F1ZXN0aW9uIiwiU3ZnUmV0d2VldCIsIlN2Z1NlYXJjaCIsIlN2Z1NldHRpbmdzIiwiU3ZnU2V0dGluZ3NGaWxsIiwiU3ZnU2hhcmUiLCJTdmdUaW1lbGluZVByb3AiLCJTdmdUd2l0dGVyIiwiU3ZnxLBjb25Db21tZW50IiwiSWNvbk5hdiIsInJvdXRlciIsInVzZVJvdXRlciIsImljb25iYXIiLCJJQ09OQkFSIiwibWFwIiwibWVudSIsInNlbGVjdGVkIiwicGF0aG5hbWUiLCJwYXRoIiwia2V5IiwiaWNvbiIsImljb25TZWxlY3RlZCIsIk5hdmlnYXRpb25CdXR0b24iLCJuYXZCdXR0b24iLCJuYXZCdXR0b25TZWxlY3RlZCIsIkxheW91dCIsInNpemUiLCJ1c2VXaW5kb3dTaXplIiwid2lkdGgiLCJDT05TVCIsIk1PQklMRV9TSVpFIiwiVEFCTEVUX1NJWkUiLCJNYWluQ2FyZCIsInN0eWxlIiwicm93IiwiY29sdW1uIiwiTmF2QmFyIiwic2VhcmNoIiwibG9nbyIsImJveCIsIkxvZ28iLCJpbWFnZSIsIk5hdmJhciIsImdyaWQiLCJTZWFyY2hCb3giLCJleGFtcGxlIiwiTmF2aWdhdGlvbiIsIm5hdiIsIlNJREVOQVYiLCJzaG93VGl0bGUiLCJ0aXRsZSIsImxlbmd0aCIsIm5vdGlmeSIsIlBob3RvIiwic3JjIiwiYWx0IiwicGhvdG8iLCJoZWlnaHQiLCJpbWciLCJUZXh0VGl0bGUiLCJib2xkIiwiVGhlbWVCdXR0b24iLCJiaWciLCJiaWdCdXR0b24iLCJVc2VyIiwiYWRyZXNzIiwidXNlckNhcmQiLCJDT05URU5UIiwiY29udCIsImRlZ2VyIiwiQURNSU5TSURFQkFSIiwid2luZG93U2l6ZSIsInNldFdpbmRvd1NpemUiLCJ1c2VTdGF0ZSIsInVuZGVmaW5lZCIsInVzZUVmZmVjdCIsImhhbmRsZVJlc2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJwcmVmZXRjaGVkIiwiY2FjaGVkT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJvYnNlcnZlciIsImdldE9ic2VydmVyIiwiY29uc29sZSIsImVyciIsImV2ZW50IiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRvY3VtZW50IiwiaGFzV2FybmVkIiwiUmVhY3QiLCJwIiwicmVzb2x2ZWRIcmVmIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJwcmVmZXRjaCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwicmVmIiwiZWwiLCJzZXRDaGlsZEVsbSIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5Iiwid2FybiIsIlByb3BUeXBlcyIsInJlcXVpcmUiLCJleGFjdCIsIkxpbmsiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJ2YWx1ZSIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJPYmplY3QiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJzZXRUaW1lb3V0IiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJjcmVkZW50aWFscyIsInJlcyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImlzU2VydmVyUmVuZGVyIiwibWFya0xvYWRpbmdFcnJvciIsImNvbnN0cnVjdG9yIiwicm91dGUiLCJxdWVyeSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJzdGF0ZSIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiX19ORVhUX0RBVEFfXyIsInVwZGF0ZSIsIm1vZCIsImRhdGEiLCJuZXdEYXRhIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJvcHRpb25zIiwicHJlcGFyZVVybEFzIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJjbGVhbmVkQXMiLCJkZWxCYXNlUGF0aCIsInBhcnNlZCIsInRyeVBhcnNlUmVsYXRpdmVVcmwiLCJtZXRob2QiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsIm1pc3NpbmdQYXJhbXMiLCJwYXJhbSIsImFzUGF0aG5hbWUiLCJyb3V0ZUluZm8iLCJhcHBDb21wIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwicGFnZSIsImVycm9yIiwiY2FjaGVkUm91dGVJbmZvIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIlByb21pc2UiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJlbmNvZGVVUklDb21wb25lbnQiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwiVEVTVF9ST1VURSIsIkRVTU1ZX0JBU0UiLCJyZXNvbHZlZEJhc2UiLCJvcmlnaW4iLCJzZWFyY2hQYXJhbXMiLCJBcnJheSIsInJlc3VsdCIsIml0ZW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwib3B0aW9uYWwiLCJyZXBlYXQiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJzZWdtZW50IiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwiaXNOYU4iLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiTWFpblBhZ2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7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S0ksTUFBRSxFQUFFLE1BTFI7QUFNSSxpQkFBYSxFQUFDLGdCQU5sQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUk7QUFBTSxhQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJKLEVBU0k7QUFBTSxVQUFNLEVBQUUsQ0FBZDtBQUFpQixhQUFTLEVBQUMsU0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRKLENBeERKLEVBbUVJO0FBQ0ksTUFBRSxFQUFDLDBCQURQO0FBRUksTUFBRSxFQUFFLE1BRlI7QUFHSSxNQUFFLEVBQUUsTUFIUjtBQUlJLE1BQUUsRUFBRSxLQUpSO0FBS0ksTUFBRSxFQUFFLE1BTFI7QUFNSSxpQkFBYSxFQUFDLGdCQU5sQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUk7QUFBTSxhQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJKLEVBU0k7QUFBTSxVQUFNLEVBQUUsQ0FBZDtBQUFpQixhQUFTLEVBQUMsU0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRKLENBbkVKLEVBOEVJO0FBQ0ksTUFBRSxFQUFDLDBCQURQO0FBRUksTUFBRSxFQUFFLEtBRlI7QUFHSSxNQUFFLEVBQUUsTUFIUjtBQUlJLE1BQUUsRUFBRSxNQUpSO0FBS0ksTUFBRSxFQUFFLEtBTFI7QUFNSSxpQkFBYSxFQUFDLGdCQU5sQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUk7QUFBTSxhQUFTLEVBQUMsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJKLEVBU0k7QUFBTSxVQUFNLEVBQUUsS0FBZDtBQUFxQixhQUFTLEVBQUMsU0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRKLEVBVUk7QUFBTSxVQUFNLEVBQUUsS0FBZDtBQUFxQixhQUFTLEVBQUMsU0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZKLEVBV0k7QUFBTSxVQUFNLEVBQUUsQ0FBZDtBQUFpQixhQUFTLEVBQUMsU0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhKLENBOUVKLEVBMkZJO0FBQ0ksTUFBRSxFQUFDLDBCQURQO0FBRUksTUFBRSxFQUFFLEVBRlI7QUFHSSxNQUFFLEVBQUUsTUFIUjtBQUlJLE1BQUUsRUFBRSxFQUpSO0FBS0ksTUFBRSxFQUFFLE1BTFI7QUFNSSxpQkFBYSxFQUFDLGdCQU5sQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUk7QUFBTSxhQUFTLEVBQUMsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJKLEVBU0k7QUFBTSxVQUFNLEVBQUUsQ0FBZDtBQUFpQixhQUFTLEVBQUMsU0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRKLENBM0ZKLEVBc0dJO0FBQ0ksTUFBRSxFQUFDLDJCQURQO0FBRUksTUFBRSxFQUFFLEVBRlI7QUFHSSxNQUFFLEVBQUUsS0FIUjtBQUlJLE1BQUUsRUFBRSxFQUpSO0FBS0ksTUFBRSxFQUFFLEtBTFI7QUFNSSxpQkFBYSxFQUFDLGdCQU5sQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUk7QUFBTSxhQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJKLEVBU0k7QUFBTSxVQUFNLEVBQUUsQ0FBZDtBQUFpQixhQUFTLEVBQUMsU0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRKLENBdEdKLEVBaUhJO0FBQ0ksTUFBRSxFQUFDLDJCQURQO0FBRUksTUFBRSxFQUFFLEVBRlI7QUFHSSxNQUFFLEVBQUUsTUFIUjtBQUlJLE1BQUUsRUFBRSxFQUpSO0FBS0ksTUFB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ZixFOzs7Ozs7Ozs7OztBQ2pCQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQyIsImZpbGUiOiJwYWdlcy9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9tYWluLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9idXR0b24ubW9kdWxlLmNzcydcclxuXHJcbmZ1bmN0aW9uIExpbmtCdXR0b24oeyBocmVmLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGluayBocmVmPXtocmVmfT5cclxuICAgICAgICAgICAgPGEgey4uLnByb3BzfT57Y2hpbGRyZW59PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gQmFzZUJ1dHRvbih7IGNoaWxkcmVuLCAuLi5wcm9wcyB9KSB7XHJcbiAgICByZXR1cm4gPGJ1dHRvbiB7Li4ucHJvcHN9PntjaGlsZHJlbn08L2J1dHRvbj5cclxufVxyXG5cclxuZnVuY3Rpb24gQnV0dG9uKHsgZnVsbCA9IGZhbHNlLCBjaGlsZHJlbiwgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSB7XHJcbiAgICBjb25zdCBDb21wID0gcHJvcHMuaHJlZiA/IExpbmtCdXR0b24gOiBCYXNlQnV0dG9uXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb21wXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oc3R5bGVzLmJ1dHRvbiwgZnVsbCAmJiBzdHlsZXMuZnVsbFdpZHRoLCBjbGFzc05hbWUpfVxyXG4gICAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9Db21wPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYnV0dG9uXCI6IFwiYnV0dG9uX2J1dHRvbl9fM3BPc1lcIixcblx0XCJmdWxsV2lkdGhcIjogXCJidXR0b25fZnVsbFdpZHRoX18xc3JYQVwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NhcmQubW9kdWxlLmNzcydcclxuaW1wb3J0IFBob3RvIGZyb20gJy4vcGhvdG8nXHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJy4vaWNvbi1idXR0b24nXHJcbmltcG9ydCAqIGFzIEljb24gZnJvbSAnLi9pY29uJ1xyXG5cclxuZnVuY3Rpb24gQ2FyZCh7IGhyZWYsIG5hbWUsIC4uLnByb3BzIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0gaHJlZj17aHJlZn0gey4uLnByb3BzfT5cclxuICAgICAgICAgICAgey8qIGF2YXRhciAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgICAgICAgPFBob3RvIGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhclBob3RvfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBib2R5ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvZHl9PlxyXG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PntuYW1lfTwvc3Bhbj57JyAnfVxyXG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiByZXBseSAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlckJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbkJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbi7EsGNvbkNvbW1lbnQgc3R5bGU9e3sgY29sb3I6ICdncmVlbicgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4zPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogbGlrZSAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlckJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbkJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbi5MaWtlIHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tYy10aGVtZSknIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+NTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2FyZFwiOiBcImNhcmRfY2FyZF9fM3Q0ZFNcIixcblx0XCJhdmF0YXJQaG90b1wiOiBcImNhcmRfYXZhdGFyUGhvdG9fXzJSS01OXCIsXG5cdFwiYXZhdGFyXCI6IFwiY2FyZF9hdmF0YXJfXzJUenlfXCIsXG5cdFwiYm9keVwiOiBcImNhcmRfYm9keV9fMm1JMkdcIixcblx0XCJoZWFkZXJcIjogXCJjYXJkX2hlYWRlcl9fMWc4MHZcIixcblx0XCJuYW1lXCI6IFwiY2FyZF9uYW1lX18xakMyV1wiLFxuXHRcImZvb3RlclwiOiBcImNhcmRfZm9vdGVyX19SS1hibFwiLFxuXHRcImZvb3RlckJ1dHRvblwiOiBcImNhcmRfZm9vdGVyQnV0dG9uX18xM201WlwiLFxuXHRcImFjdGlvbkJ1dHRvblwiOiBcImNhcmRfYWN0aW9uQnV0dG9uX18xUHRUSlwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jb2wtZXh0cmEubW9kdWxlLmNzcydcclxuXHJcbmZ1bmN0aW9uIEV4dHJhKHsgY2hpbGRyZW4gfSkge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbihbc3R5bGVzLmxheW91dF0pfT57Y2hpbGRyZW59PC9kaXY+XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRXh0cmFcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibGF5b3V0XCI6IFwiY29sLWV4dHJhX2xheW91dF9fM1AzRUNcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY29sLW1haW4ubW9kdWxlLmNzcydcclxuXHJcbmZ1bmN0aW9uIE1haW4oeyBjaGlsZHJlbiB9KSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NuKFtzdHlsZXMubWFpbl0pfT57Y2hpbGRyZW59PC9kaXY+XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTWFpblxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWluXCI6IFwiY29sLW1haW5fbWFpbl9fM0lndTBcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL25hdmlnYXRpb24vbmF2aWdhdGlvbidcclxuaW1wb3J0IFRoZW1lQnV0dG9uIGZyb20gJy4uL3RoZW1lLWJ1dHRvbidcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vdXNlci91c2VyJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NvbC1zaWRlYmFyLm1vZHVsZS5jc3MnXHJcblxyXG5mdW5jdGlvbiBTaWRlYmFyKHsgY2hpbGRyZW4gfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oW3N0eWxlcy5zaWRlYmFyXSl9PlxyXG4gICAgICAgICAgICA8TmF2aWdhdGlvbiAvPlxyXG4gICAgICAgICAgICA8VGhlbWVCdXR0b24gYmlnIGZ1bGw+XHJcbiAgICAgICAgICAgICAgICDDh8Sxa8SxxZ8gWWFwXHJcbiAgICAgICAgICAgIDwvVGhlbWVCdXR0b24+XHJcblxyXG4gICAgICAgICAgICA8VXNlclxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIlRhbnN1IMOHYW1cIlxyXG4gICAgICAgICAgICAgICAgYWRyZXNzPVwiQWvFn2Vtc2V0dGluIE1oIFN1bHRhbmJleWxpL8Swc3RhbmJ1bFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhclxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzaWRlYmFyXCI6IFwiY29sLXNpZGViYXJfc2lkZWJhcl9fMkxwYzlcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYnV0dG9uLm1vZHVsZS5jc3MnXHJcblxyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vYnV0dG9uJ1xyXG5cclxuZnVuY3Rpb24gSWNvbkJ1dHRvbih7IGNoaWxkcmVuLCBjbGFzc05hbWUsIC4uLnByb3BzIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NuKHN0eWxlcy5idXR0b24sIGNsYXNzTmFtZSl9IHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSWNvbkJ1dHRvblxyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnQWRkKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDQ1NS40MzEgNDU1LjQzMVwiIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgey4uLnByb3BzfT5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk00MDUuNDkzIDQxMi43NjRjLTY5LjY4OSA1Ni44ODktMjg3LjI4OSA1Ni44ODktMzU1LjU1NiAwLTY5LjY4OS01Ni44ODktNjIuNTc4LTMwMC4wODkgMC0zNjQuMDg5czI5Mi45NzgtNjQgMzU1LjU1NiAwIDY5LjY4OSAzMDcuMjAxIDAgMzY0LjA4OXpcIlxuICAgICAgICAgICAgICAgIGRhdGEtb3JpZ2luYWw9XCIjOERDNjQwXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZGRfc3ZnX19hY3RpdmUtcGF0aFwiXG4gICAgICAgICAgICAgICAgZGF0YS1vbGRfY29sb3I9XCIjOERDNjQwXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI2MxMjAyMFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTIyOS4xMzggMzEzLjIwOWMtNjIuNTc4IDQ5Ljc3OC0xMzIuMjY3IDc1LjM3OC0xOTcuNjg5IDc2LjgtNDguMzU2LTgyLjQ4OS0zOC40LTI4My4wMjIgMTguNDg5LTM0MS4zMzMgNTEuMi01Mi42MjIgMjExLjkxMS02Mi41NzggMzA0LjM1Ni0yOS44NjcgMjIuNzU1IDkzLjg2Ny0yNC4xNzggMjEzLjMzMy0xMjUuMTU2IDI5NC40elwiXG4gICAgICAgICAgICAgICAgZGF0YS1vcmlnaW5hbD1cIiNGRkZGRkZcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgICAgICAgICAgICBvcGFjaXR5PXswLjJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTM2Mi44MjcgMjI3Ljg3NmEyNS40OTQgMjUuNDk0IDAgMDEtMjUuNiAyNS42aC04NS4zMzN2ODUuMzMzYTI1LjQ5NCAyNS40OTQgMCAwMS0yNS42IDI1LjYgMjUuNDk0IDI1LjQ5NCAwIDAxLTI1LjYtMjUuNnYtODUuMzMzSDExNS4zNmEyNS40OTQgMjUuNDk0IDAgMDEtMjUuNi0yNS42IDI1LjQ5NCAyNS40OTQgMCAwMTI1LjYtMjUuNmg4NS4zMzN2LTg1LjMzM2EyNS40OTQgMjUuNDk0IDAgMDEyNS42LTI1LjYgMjUuNDk0IDI1LjQ5NCAwIDAxMjUuNiAyNS42djg1LjMzM2g4NS4zMzNhMjUuNDkzIDI1LjQ5MyAwIDAxMjUuNjAxIDI1LjZ6XCJcbiAgICAgICAgICAgICAgICBkYXRhLW9yaWdpbmFsPVwiI0ZGRkZGRlwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNmZmZcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdBZGRcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdBZHJlc3NBZGQocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjFlbVwiIHsuLi5wcm9wc30+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTkuMDIgMjFIMi41QTIuNTAzIDIuNTAzIDAgMDEwIDE4LjV2LTE2QzAgMS4xMjEgMS4xMjIgMCAyLjUgMGgxMkMxNS44NzggMCAxNyAxLjEyMSAxNyAyLjV2Ni4wNmEuNS41IDAgMDEtMSAwVjIuNWMwLS44MjctLjY3My0xLjUtMS41LTEuNWgtMTJDMS42NzMgMSAxIDEuNjczIDEgMi41djE2YzAgLjgyNy42NzMgMS41IDEuNSAxLjVoNi41MmEuNS41IDAgMDEwIDF6XCIgLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTMuNSA5aC0xMGEuNS41IDAgMDEwLTFoMTBhLjUuNSAwIDAxMCAxek05LjUgMTNoLTZhLjUuNSAwIDAxMC0xaDZhLjUuNSAwIDAxMCAxek04LjUgNWgtNWEuNS41IDAgMDEwLTFoNWEuNS41IDAgMDEwIDF6TTE3LjUgMjRjLTMuNTg0IDAtNi41LTIuOTE2LTYuNS02LjVzMi45MTYtNi41IDYuNS02LjUgNi41IDIuOTE2IDYuNSA2LjUtMi45MTYgNi41LTYuNSA2LjV6bTAtMTJjLTMuMDMzIDAtNS41IDIuNDY4LTUuNSA1LjVzMi40NjcgNS41IDUuNSA1LjUgNS41LTIuNDY4IDUuNS01LjUtMi40NjctNS41LTUuNS01LjV6XCIgLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTcuNSAyMWEuNS41IDAgMDEtLjUtLjV2LTZhLjUuNSAwIDAxMSAwdjZhLjUuNSAwIDAxLS41LjV6XCIgLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjAuNSAxOGgtNmEuNS41IDAgMDEwLTFoNmEuNS41IDAgMDEwIDF6XCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdBZHJlc3NBZGRcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdBcnJvd0JvdHRvbShwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTIwLjIwNyA4LjE0N2ExIDEgMCAwMC0xLjQxNCAwTDEyIDE0Ljk0IDUuMjA3IDguMTQ3YTEgMSAwIDAwLTEuNDE0IDEuNDE0bDcuNSA3LjVhLjk5Ni45OTYgMCAwMDEuNDE0LjAwMWw3LjUtNy41YTEgMSAwIDAwMC0xLjQxM3YtLjAwMnpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdBcnJvd0JvdHRvbVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z0Jhc2tldChwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCA0MjMuNDE2IDQyMy40MTZcIlxuICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGggZD1cIk00MjAuNjg4IDE0NS4wOTZhOS40MDEgOS40MDEgMCAwMC03LjgzNy0yLjYxMkgzMDAuNTI1VjkyLjg1MWMwLTQ5LjA1Mi0zOS43NjQtODguODE2LTg4LjgxNi04OC44MTZzLTg4LjgxNiAzOS43NjQtODguODE2IDg4LjgxNnY0OS42MzNIMTAuNTY1Yy0zLjEzNSAwLTYuMjY5IDAtNy44MzcgMi42MTJhOC44ODMgOC44ODMgMCAwMC0yLjYxMiA3LjgzN0wzOS4zIDM2Ny4xMzdjNS40NzQgMjkuODgxIDMxLjI3NSA1MS43NDYgNjEuNjQ5IDUyLjI0NWgyMjEuNTE4YzMwLjQ2MS0uNzQ5IDU2LjIwOC0yMi43ODcgNjEuNjQ5LTUyLjc2N0w0MjMuMyAxNTIuOTMzYTguODgzIDguODgzIDAgMDAtMi42MTItNy44Mzd6TTE0My43OSA5Mi44NTFjMC0zNy41MSAzMC40MDgtNjcuOTE4IDY3LjkxOC02Ny45MTggMzcuNTEgMCA2Ny45MTggMzAuNDA4IDY3LjkxOCA2Ny45MTh2NDkuNjMzSDE0My43OVY5Mi44NTF6bTIxOS40MjggMjcxLjE1MWMtMy41MTkgMTkuODAxLTIwLjY0MSAzNC4yODktNDAuNzUxIDM0LjQ4MkgxMDAuOTQ5Yy0yMC4xMS0uMTkzLTM3LjIzMi0xNC42OC00MC43NTEtMzQuNDgybC0zNy4wOTQtMjAwLjYyaDM3Ny4yMDhsLTM3LjA5NCAyMDAuNjJ6XCIgLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjkwLjA3NiAyNjUuMjU5YzUuNzcxIDAgMTAuNDQ5LTQuNjc4IDEwLjQ0OS0xMC40NDl2LTMxLjM0N2MwLTUuNzcxLTQuNjc4LTEwLjQ0OS0xMC40NDktMTAuNDQ5cy0xMC40NDkgNC42NzgtMTAuNDQ5IDEwLjQ0OXYzMS4zNDdjLS4wMDEgNS43NzEgNC42NzggMTAuNDQ5IDEwLjQ0OSAxMC40NDl6TTEzMy4zNDEgMjY1LjI1OWM1Ljc3MSAwIDEwLjQ0OS00LjY3OCAxMC40NDktMTAuNDQ5di0zMS4zNDdjMC01Ljc3MS00LjY3OC0xMC40NDktMTAuNDQ5LTEwLjQ0OXMtMTAuNDQ5IDQuNjc4LTEwLjQ0OSAxMC40NDl2MzEuMzQ3YzAgNS43NzEgNC42NzggMTAuNDQ5IDEwLjQ0OSAxMC40NDl6XCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdCYXNrZXRcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdCYXNrZXRGaWxsKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2ZyB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMzk2LjAxNiAzOTYuMDE2XCIgey4uLnByb3BzfT5cbiAgICAgICAgICAgIDxnIGZpbGw9XCIjZmZmXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNOS40MDQgMTYwLjkxNGwzNy4wOTQgMjAwLjYyYzMuNTE5IDE5LjgwMSAyMC42NDEgMzQuMjg5IDQwLjc1MSAzNC40ODJoMjIxLjUxOGMyMC4xMTEtLjE5MyAzNy4yMzItMTQuNjggNDAuNzUxLTM0LjQ4MmwzNy4wOTQtMjAwLjYySDkuNDA0em0xMjAuNjg2IDg5Ljg2MmMwIDUuNzcxLTQuNjc4IDEwLjQ0OS0xMC40NDkgMTAuNDQ5cy0xMC40NDktNC42NzgtMTAuNDQ5LTEwLjQ0OXYtMzEuMzQ3YzAtNS43NzEgNC42NzgtMTAuNDQ5IDEwLjQ0OS0xMC40NDlzMTAuNDQ5IDQuNjc4IDEwLjQ0OSAxMC40NDl2MzEuMzQ3em0xNTYuNzM1IDBjMCA1Ljc3MS00LjY3OCAxMC40NDktMTAuNDQ5IDEwLjQ0OXMtMTAuNDQ5LTQuNjc4LTEwLjQ0OS0xMC40NDl2LTMxLjM0N2MwLTUuNzcxIDQuNjc4LTEwLjQ0OSAxMC40NDktMTAuNDQ5czEwLjQ0OSA0LjY3OCAxMC40NDkgMTAuNDQ5djMxLjM0N3pNMTMwLjA5IDg4LjgxNmMwLTM3LjUxIDMwLjQwOC02Ny45MTggNjcuOTE4LTY3LjkxOCAzNy41MSAwIDY3LjkxOCAzMC40MDggNjcuOTE4IDY3LjkxOHY2MS42NDloMjAuODk4Vjg4LjgxNkMyODYuODI1IDM5Ljc2NCAyNDcuMDYgMCAxOTguMDA4IDBzLTg4LjgxNiAzOS43NjQtODguODE2IDg4LjgxNnY2MS42NDloMjAuODk4Vjg4LjgxNnpcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLW9yaWdpbmFsPVwiIzAwMDAwMFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdCYXNrZXRGaWxsXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnQ2FsZW5kZXIocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxnIGNsaXBQYXRoPVwidXJsKCNjYWxlbmRlcl9zdmdfX2NsaXAwKVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTS0zNy45IDE4Yy0uMS0uMS0uMS0uMS0uMS0uMi4xIDAgLjEuMS4xLjJ6TTE4IDIuMmgtMS4zdi0uM2MwLS40LS4zLS44LS44LS44LS40IDAtLjguMy0uOC44di4zSDcuN3YtLjNjMC0uNC0uMy0uOC0uOC0uOC0uNCAwLS44LjMtLjguOHYuM0g0LjhjLTEuNCAwLTIuNSAxLjEtMi41IDIuNXYxMy4xYzAgMS40IDEuMSAyLjUgMi41IDIuNWgyLjljLjQgMCAuOC0uMy44LS44IDAtLjQtLjMtLjgtLjgtLjhINC44Yy0uNiAwLTEtLjUtMS0xVjcuOWMwLS4zLjQtLjcgMS0uN0gxOGMuNiAwIDEgLjQgMSAuN3YxLjhjMCAuNC4zLjguOC44LjQgMCAuOC0uMy44LS44di01Yy0uMS0xLjQtMS4yLTIuNS0yLjYtMi41em0xIDMuN2MtLjMtLjEtLjctLjItMS0uMkg0LjhjLS40IDAtLjcuMS0xIC4yVjQuN2MwLS42LjUtMSAxLTFoMS4zdi41YzAgLjQuMy44LjguOC40IDAgLjgtLjMuOC0uOHYtLjVoNy41di41YzAgLjQuMy44LjguOC40IDAgLjgtLjMuOC0uOHYtLjVIMThjLjYgMCAxIC41IDEgMXYxLjJ6XCIgLz5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE1LjUgMTAuNGMtMy40IDAtNi4yIDIuOC02LjIgNi4yIDAgMy40IDIuOCA2LjIgNi4yIDYuMiAzLjQgMCA2LjItMi44IDYuMi02LjIgMC0zLjQtMi44LTYuMi02LjItNi4yem0wIDExYy0yLjYgMC00LjctMi4xLTQuNy00LjdzMi4xLTQuNyA0LjctNC43IDQuNyAyLjEgNC43IDQuN2MwIDIuNS0yLjEgNC43LTQuNyA0Ljd6XCIgLz5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE4LjkgMTguN2MtLjEuMi0uNC40LS42LjQtLjEgMC0uMyAwLS40LS4xbC0zLjEtMnYtM2MwLS40LjMtLjguOC0uOC40IDAgLjguMy44Ljh2Mi4ybDIuNCAxLjVjLjIuMi4zLjYuMSAxelwiIC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgICAgICA8Y2xpcFBhdGggaWQ9XCJjYWxlbmRlcl9zdmdfX2NsaXAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmXCIgZD1cIk0wIDBoMjR2MjRIMHpcIiAvPlxuICAgICAgICAgICAgICAgIDwvY2xpcFBhdGg+XG4gICAgICAgICAgICA8L2RlZnM+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnQ2FsZW5kZXJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdDbG9jayhwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEyIDI0YzYuNjI3IDAgMTItNS4zNzMgMTItMTJTMTguNjI3IDAgMTIgMCAwIDUuMzczIDAgMTJzNS4zNzMgMTIgMTIgMTJ6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNjbG9ja19zdmdfX3BhaW50MF9saW5lYXIpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTIgMjMuNjExYzYuNDEzIDAgMTEuNjEtNS4xOTggMTEuNjEtMTEuNjExUzE4LjQxNC4zODkgMTIgLjM4OUM1LjU4Ny4zODkuMzg5IDUuNTg3LjM4OSAxMnM1LjE5OCAxMS42MTEgMTEuNjEgMTEuNjExelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cInVybCgjY2xvY2tfc3ZnX19wYWludDFfbGluZWFyKVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEyIDIyLjQ3MWM1Ljc4MyAwIDEwLjQ3Mi00LjY4OCAxMC40NzItMTAuNDcxUzE3Ljc4MyAxLjUyOCAxMiAxLjUyOEM2LjIxNyAxLjUyOCAxLjUzIDYuMjE3IDEuNTMgMTJjMCA1Ljc4MyA0LjY4OCAxMC40NzEgMTAuNDcxIDEwLjQ3MXpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI2Nsb2NrX3N2Z19fcGFpbnQyX2xpbmVhcilcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMiAyMi40NzFjNS43ODMgMCAxMC40NzItNC42ODggMTAuNDcyLTEwLjQ3MVMxNy43ODMgMS41MjggMTIgMS41MjhDNi4yMTcgMS41MjggMS41MyA2LjIxNyAxLjUzIDEyYzAgNS43ODMgNC42ODggMTAuNDcxIDEwLjQ3MSAxMC40NzF6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNjbG9ja19zdmdfX3BhaW50M19yYWRpYWwpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMjIuMzUzIDEzLjU4MWwtMy41LTMuNDcxLS45OTMuMjQ0LTUuMDc2LTUuMDMyYS41MS41MSAwIDAwLS4yNDctLjI0Ny41MS41MSAwIDAwLS40NjEtLjI5NWgtLjE1MmEuNTEuNTEgMCAwMC0uNTEuNTF2NS45NGEuOTY1Ljk2NSAwIDAwLS4zNCAxLjA1bC0zLjMgMy4zYS41MS41MSAwIDAwMCAuNzJsNi4wMjUgNi4wMTdhMTAuNDggMTAuNDggMCAwMDguNTU0LTguNzM2elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cInVybCgjY2xvY2tfc3ZnX19wYWludDRfbGluZWFyKVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTIyLjM1MiAxMy41ODFhMTAuNDc5IDEwLjQ3OSAwIDAxLTguNTUzIDguNzM2bC01LjkxLTUuOTAyYS41MS41MSAwIDAwLjcxNC0uMDA3bDMuNDQyLTMuNDQzYS45NjYuOTY2IDAgMDAuOTIyLS45Nmw1Ljk4OC0xLjQ3NGEuMjE3LjIxNyAwIDAwLjE2LS4xNjFsMy4yMzcgMy4yMTF6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNjbG9ja19zdmdfX3BhaW50NV9saW5lYXIpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTIuMDc2IDEyaC0uMTUyYS41MS41MSAwIDAxLS41MS0uNTF2LTYuMmEuNTEuNTEgMCAwMS41MS0uNTFoLjE1MmEuNTEuNTEgMCAwMS41MS41MXY2LjJhLjUxLjUxIDAgMDEtLjUxLjUxelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cInVybCgjY2xvY2tfc3ZnX19wYWludDZfbGluZWFyKVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEyLjA3NiAxMmwuMTA3LjEwN2MuMTk5LjE5OS4xOTkuNTIyIDAgLjcybC0zLjU4IDMuNThhLjUxLjUxIDAgMDEtLjcyMSAwbC0uMTA3LS4xMDZhLjUxLjUxIDAgMDEwLS43MjFsMy41OC0zLjU4YS41MS41MSAwIDAxLjcyIDB6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNjbG9ja19zdmdfX3BhaW50N19saW5lYXIpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTkuMTE0IDEwLjI2OGEuMjE3LjIxNyAwIDAxLS4xNTguMjYybC02Ljg0OCAxLjY4N2EuMjE3LjIxNyAwIDAxLS4xMDMtLjQyMWw2Ljg0Ny0xLjY4NmEuMjE3LjIxNyAwIDAxLjI2Mi4xNTh6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNjbG9ja19zdmdfX3BhaW50OF9saW5lYXIpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTIgMTIuOTY4YS45NjguOTY4IDAgMTAwLTEuOTM2Ljk2OC45NjggMCAwMDAgMS45MzZ6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNjbG9ja19zdmdfX3BhaW50OV9saW5lYXIpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTIuMDM3IDQuMTYzaC0uMDc0YS41NDguNTQ4IDAgMDEtLjU0OC0uNTQ4di0uNjgyYzAtLjMwMy4yNDUtLjU0OC41NDgtLjU0OGguMDc0Yy4zMDMgMCAuNTQ4LjI0NS41NDguNTQ4di42ODJhLjU0OC41NDggMCAwMS0uNTQ4LjU0OHpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI2Nsb2NrX3N2Z19fcGFpbnQxMF9saW5lYXIpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTIuMDM3IDIxLjYxNWgtLjA3NGEuNTQ4LjU0OCAwIDAxLS41NDgtLjU0OHYtLjY4MWMwLS4zMDMuMjQ1LS41NDkuNTQ4LS41NDloLjA3NGMuMzAzIDAgLjU0OC4yNDYuNTQ4LjU0OXYuNjgxYS41NDguNTQ4IDAgMDEtLjU0OC41NDh6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNjbG9ja19zdmdfX3BhaW50MTFfbGluZWFyKVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE5LjgzNyAxMi4wMzd2LS4wNzRjMC0uMzAzLjI0Ni0uNTQ4LjU0OC0uNTQ4aC42ODJjLjMwMyAwIC41NDguMjQ1LjU0OC41NDh2LjA3NGEuNTQ4LjU0OCAwIDAxLS41NDguNTQ4aC0uNjgyYS41NDguNTQ4IDAgMDEtLjU0OC0uNTQ4elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cInVybCgjY2xvY2tfc3ZnX19wYWludDEyX2xpbmVhcilcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0yLjM4NSAxMi4wMzd2LS4wNzRjMC0uMzAzLjI0NS0uNTQ4LjU0OC0uNTQ4aC42ODJjLjMwMiAwIC41NDguMjQ1LjU0OC41NDh2LjA3NGEuNTQ4LjU0OCAwIDAxLS41NDguNTQ4aC0uNjgyYS41NDguNTQ4IDAgMDEtLjU0OC0uNTQ4elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cInVybCgjY2xvY2tfc3ZnX19wYWludDEzX2xpbmVhcilcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkZWZzPlxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgICAgICAgICAgICBpZD1cImNsb2NrX3N2Z19fcGFpbnQwX2xpbmVhclwiXG4gICAgICAgICAgICAgICAgICAgIHgxPXsxMn1cbiAgICAgICAgICAgICAgICAgICAgeTE9ezI5LjI5fVxuICAgICAgICAgICAgICAgICAgICB4Mj17MTJ9XG4gICAgICAgICAgICAgICAgICAgIHkyPXstMS4xMzZ9XG4gICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjZmZmXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PXsxfSBzdG9wQ29sb3I9XCIjRThFRkVFXCIgLz5cbiAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgICAgICAgICAgICBpZD1cImNsb2NrX3N2Z19fcGFpbnQxX2xpbmVhclwiXG4gICAgICAgICAgICAgICAgICAgIHgxPXsxMn1cbiAgICAgICAgICAgICAgICAgICAgeTE9ey00LjczfVxuICAgICAgICAgICAgICAgICAgICB4Mj17MTJ9XG4gICAgICAgICAgICAgICAgICAgIHkyPXsyNC43MDl9XG4gICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjZmZmXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PXsxfSBzdG9wQ29sb3I9XCIjRThFRkVFXCIgLz5cbiAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgICAgICAgICAgICBpZD1cImNsb2NrX3N2Z19fcGFpbnQyX2xpbmVhclwiXG4gICAgICAgICAgICAgICAgICAgIHgxPXs2LjMxM31cbiAgICAgICAgICAgICAgICAgICAgeTE9ezYuMzEyfVxuICAgICAgICAgICAgICAgICAgICB4Mj17MTcuMTM2fVxuICAgICAgICAgICAgICAgICAgICB5Mj17MTcuMTM1fVxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiIzFBQ0VCOFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD17MX0gc3RvcENvbG9yPVwiIzBCQkZCQVwiIC8+XG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjbG9ja19zdmdfX3BhaW50NF9saW5lYXJcIlxuICAgICAgICAgICAgICAgICAgICB4MT17MTMuNTE0fVxuICAgICAgICAgICAgICAgICAgICB5MT17MTMuMzkxfVxuICAgICAgICAgICAgICAgICAgICB4Mj17OC4zNDd9XG4gICAgICAgICAgICAgICAgICAgIHkyPXs4LjIyNH1cbiAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD17MH0gc3RvcENvbG9yPVwiIzFBQ0VCOFwiIHN0b3BPcGFjaXR5PXswfSAvPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezF9IHN0b3BDb2xvcj1cIiMwNDk1OUNcIiAvPlxuICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY2xvY2tfc3ZnX19wYWludDVfbGluZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgeDE9ezE4LjM1Mn1cbiAgICAgICAgICAgICAgICAgICAgeTE9ezE5LjI5OH1cbiAgICAgICAgICAgICAgICAgICAgeDI9ezExLjAyM31cbiAgICAgICAgICAgICAgICAgICAgeTI9ezkuNTQyfVxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PXswfSBzdG9wQ29sb3I9XCIjMUFDRUI4XCIgc3RvcE9wYWNpdHk9ezB9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD17MX0gc3RvcENvbG9yPVwiIzA0OTU5Q1wiIC8+XG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjbG9ja19zdmdfX3BhaW50Nl9saW5lYXJcIlxuICAgICAgICAgICAgICAgICAgICB4MT17MTJ9XG4gICAgICAgICAgICAgICAgICAgIHkxPXsyLjA4MX1cbiAgICAgICAgICAgICAgICAgICAgeDI9ezEyfVxuICAgICAgICAgICAgICAgICAgICB5Mj17MTIuNjE2fVxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI2ZmZlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD17MX0gc3RvcENvbG9yPVwiI0U4RUZFRVwiIC8+XG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjbG9ja19zdmdfX3BhaW50N19saW5lYXJcIlxuICAgICAgICAgICAgICAgICAgICB4MT17MTAuOTg2fVxuICAgICAgICAgICAgICAgICAgICB5MT17MTMuMTk3fVxuICAgICAgICAgICAgICAgICAgICB4Mj17Ny40NzF9XG4gICAgICAgICAgICAgICAgICAgIHkyPXsxNi43MTF9XG4gICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjZmZmXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PXsxfSBzdG9wQ29sb3I9XCIjRThFRkVFXCIgLz5cbiAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgICAgICAgICAgICBpZD1cImNsb2NrX3N2Z19fcGFpbnQ4X2xpbmVhclwiXG4gICAgICAgICAgICAgICAgICAgIHgxPXsxMS44M31cbiAgICAgICAgICAgICAgICAgICAgeTE9ezEyLjAzMX1cbiAgICAgICAgICAgICAgICAgICAgeDI9ezIwLjQyOH1cbiAgICAgICAgICAgICAgICAgICAgeTI9ezkuOTg2fVxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI0Q2MzMwNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD17MC4zNjZ9IHN0b3BDb2xvcj1cIiNDRjMwMDRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezAuODk5fSBzdG9wQ29sb3I9XCIjQkMyNjAyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PXsxfSBzdG9wQ29sb3I9XCIjQjcyNDAxXCIgLz5cbiAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgICAgICAgICAgICBpZD1cImNsb2NrX3N2Z19fcGFpbnQ5X2xpbmVhclwiXG4gICAgICAgICAgICAgICAgICAgIHgxPXsxMn1cbiAgICAgICAgICAgICAgICAgICAgeTE9ezE0LjAxNn1cbiAgICAgICAgICAgICAgICAgICAgeDI9ezEyfVxuICAgICAgICAgICAgICAgICAgICB5Mj17MTAuOTYyfVxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiIzk3QUFBQVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD17MX0gc3RvcENvbG9yPVwiI0U4RUZFRVwiIC8+XG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjbG9ja19zdmdfX3BhaW50MTBfbGluZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgeDE9ezEyfVxuICAgICAgICAgICAgICAgICAgICB5MT17MS43MTl9XG4gICAgICAgICAgICAgICAgICAgIHgyPXsxMn1cbiAgICAgICAgICAgICAgICAgICAgeTI9ezQuMzE0fVxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI2ZmZlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD17MX0gc3RvcENvbG9yPVwiI0U4RUZFRVwiIC8+XG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjbG9ja19zdmdfX3BhaW50MTFfbGluZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgeDE9ezEyfVxuICAgICAgICAgICAgICAgICAgICB5MT17MTkuMTczfVxuICAgICAgICAgICAgICAgICAgICB4Mj17MTJ9XG4gICAgICAgICAgICAgICAgICAgIHkyPXsyMS43Njd9XG4gICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjZmZmXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PXsxfSBzdG9wQ29sb3I9XCIjRThFRkVFXCIgLz5cbiAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgICAgICAgICAgICBpZD1cImNsb2NrX3N2Z19fcGFpbnQxMl9saW5lYXJcIlxuICAgICAgICAgICAgICAgICAgICB4MT17MjIuMjAyfVxuICAgICAgICAgICAgICAgICAgICB5MT17MjkuMjk2fVxuICAgICAgICAgICAgICAgICAgICB4Mj17MTkuNjA3fVxuICAgICAgICAgICAgICAgICAgICB5Mj17LTEuMTN9XG4gICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjZmZmXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PXsxfSBzdG9wQ29sb3I9XCIjRThFRkVFXCIgLz5cbiAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgICAgICAgICAgICBpZD1cImNsb2NrX3N2Z19fcGFpbnQxM19saW5lYXJcIlxuICAgICAgICAgICAgICAgICAgICB4MT17NC43NDh9XG4gICAgICAgICAgICAgICAgICAgIHkxPXsyOS4yOTZ9XG4gICAgICAgICAgICAgICAgICAgIHgyPXsyLjE1NH1cbiAgICAgICAgICAgICAgICAgICAgeTI9ey0xLjEzfVxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI2ZmZlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD17MX0gc3RvcENvbG9yPVwiI0U4RUZFRVwiIC8+XG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICA8cmFkaWFsR3JhZGllbnRcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjbG9ja19zdmdfX3BhaW50M19yYWRpYWxcIlxuICAgICAgICAgICAgICAgICAgICBjeD17MH1cbiAgICAgICAgICAgICAgICAgICAgY3k9ezB9XG4gICAgICAgICAgICAgICAgICAgIHI9ezF9XG4gICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VHJhbnNmb3JtPVwidHJhbnNsYXRlKDEyLjcwNiAxMi45MTYpIHNjYWxlKDExLjMwNTkpXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD17MH0gc3RvcENvbG9yPVwiIzFBQ0VCOFwiIHN0b3BPcGFjaXR5PXswfSAvPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcFxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PXswLjUwNH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BDb2xvcj1cIiMxOUNDQjdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcE9wYWNpdHk9ezAuNTAzfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcFxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PXswLjY4NX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BDb2xvcj1cIiMxN0M1QjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcE9wYWNpdHk9ezAuNjg1fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcFxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PXswLjgxNH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BDb2xvcj1cIiMxMkJBQUVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcE9wYWNpdHk9ezAuODE0fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcFxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PXswLjkxOH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BDb2xvcj1cIiMwQ0E5QTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcE9wYWNpdHk9ezAuOTE4fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezF9IHN0b3BDb2xvcj1cIiMwNDk1OUNcIiAvPlxuICAgICAgICAgICAgICAgIDwvcmFkaWFsR3JhZGllbnQ+XG4gICAgICAgICAgICA8L2RlZnM+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnQ2xvY2tcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdDb3VyaWVyKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2ZyBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDY0IDY0XCIgd2lkdGg9XCIxZW1cIiB7Li4ucHJvcHN9PlxuICAgICAgICAgICAgPHBhdGggZD1cIk01OCA0NC4xNFY2MUgzNlY0NC4xNEw0NyA0MXpcIiBmaWxsPVwiI2ZmNzk1NlwiIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMzYgOGMwIDIuMjEtNCA4LTQgOHMtNC01Ljc5LTQtOGE0IDQgMCAwMTggMHpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjZmZkYTQ0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTQ0IDUxaDZ2MTBoLTZ6XCIgZmlsbD1cIiNjZDJhMDBcIiAvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk02MSA0MXY0bC0xNC00LTE0IDR2LTRsMTQtNHpcIiBmaWxsPVwiI2ZmNTAyM1wiIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMjQgNTRoLTEuNWExMS41IDExLjUgMCAwMTAtMjNINDNhNSA1IDAgMDAwLTEwaC00di0yaDRhNyA3IDAgMDEwIDE0SDIyLjVhOS41IDkuNSAwIDAwMCAxOUgyNHpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjMWE2ZmIwXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTMyIDEwYTIgMiAwIDExMi0yIDIgMiAwIDAxLTIgMnpcIiBmaWxsPVwiI2ZmZlwiIC8+XG4gICAgICAgICAgICA8ZyBmaWxsPVwiIzFhNmZiMFwiPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjYgNTJoMnYyaC0yek0zMCA1MmgydjJoLTJ6TTMxIDE5aDJ2MmgtMnpNMzUgMTloMnYyaC0yelwiIC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTE0IDNoN3YzaC03ek0zIDNoN3YzSDN6XCIgZmlsbD1cIiNmZjk4MTFcIiAvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0zIDZoMTh2MTVIM3pcIiBmaWxsPVwiI2ZmZGE0NFwiIC8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTYgMTVoNHYySDZ6XCIgZmlsbD1cIiNmZmZcIiAvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0zIDZoMTh2MUgzelwiIGZpbGw9XCIjY2M3NDAwXCIgLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTQgNnYybC00IDFWM2g0elwiIGZpbGw9XCIjZDgwMDI3XCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdDb3VyaWVyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnRW1vamkocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMiAyMi43NUM2LjA3MiAyMi43NSAxLjI1IDE3LjkyOCAxLjI1IDEyUzYuMDcyIDEuMjUgMTIgMS4yNSAyMi43NSA2LjA3MiAyMi43NSAxMiAxNy45MjggMjIuNzUgMTIgMjIuNzV6bTAtMjBDNi45IDIuNzUgMi43NSA2LjkgMi43NSAxMlM2LjkgMjEuMjUgMTIgMjEuMjVzOS4yNS00LjE1IDkuMjUtOS4yNVMxNy4xIDIuNzUgMTIgMi43NXpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMiAxNy4xMTVhNS41MDkgNS41MDkgMCAwMS00LjY1Ni0yLjU0NC43NDguNzQ4IDAgMDEuMjI2LTEuMDM1Ljc0Ny43NDcgMCAwMTEuMDM2LjIyNiA0LjAyIDQuMDIgMCAwMDMuMzk1IDEuODU1IDQuMDI0IDQuMDI0IDAgMDAzLjM5Ni0xLjg1NC43NDcuNzQ3IDAgMDExLjAzNi0uMjI1Yy4zNS4yMjQuNDUuNjg4LjIyNiAxLjAzNmE1LjUxNiA1LjUxNiAwIDAxLTQuNjU4IDIuNTQ1TDEyIDE3LjExNXpNMTQuNzM4IDEwLjkzNmExLjQ3OCAxLjQ3OCAwIDEwMC0yLjk1NiAxLjQ3OCAxLjQ3OCAwIDAwMCAyLjk1NnpNOS4yNjIgMTAuOTM2YTEuNDc4IDEuNDc4IDAgMTAwLTIuOTU2IDEuNDc4IDEuNDc4IDAgMDAwIDIuOTU2elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0Vtb2ppXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnRXhwbG9yZShwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE3LjUgNi4xMTRoLTMuMjc1bC4zMS0zLjU2YS42MjYuNjI2IDAgMDAtMS4yNDUtLjEwN2wtLjMyIDMuNjY2SDcuNzA1bC4zMDgtMy41NThhLjYyNS42MjUgMCAxMC0xLjI0NC0uMTA4TDYuNDUgNi4xMTNIMy4xNTJhLjYyNi42MjYgMCAwMDAgMS4yNWgzLjE5bC0uNDU5IDUuMjczSDIuNWEuNjI1LjYyNSAwIDAwMCAxLjI1aDMuMjc1bC0uMzEgMy41NmEuNjI2LjYyNiAwIDAwLjU2OC42NzZsLjA1NS4wMDNjLjMyMSAwIC41OTQtLjI0Ni42MjItLjU3MmwuMzItMy42NjZoNS4yNjZsLS4zMDggMy41NThhLjYyNi42MjYgMCAwMC41NjguNjc3bC4wNTUuMDAzYy4zMiAwIC41OTMtLjI0Ni42MjEtLjU3MmwuMzE5LTMuNjY2aDMuMjk3Yy4zNDUgMCAuNjI1LS4yODEuNjI1LS42MjVhLjYyNi42MjYgMCAwMC0uNjI1LS42MjVoLTMuMTlsLjQ1OS01LjI3M0gxNy41YS42MjUuNjI1IDAgMDAwLTEuMjV6bS01LjA5NiA2LjUyMkg3LjEzOGwuNDU4LTUuMjcyaDUuMjY3bC0uNDU5IDUuMjcyelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0V4cGxvcmVcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdFeHBsb3JlRmlsbChwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE3LjE1NCA3Ljg5Yy41NSAwIDEtLjQ0OCAxLTFzLS40NS0xLTEtMWgtMi42ODNsLjI1OC0yLjk1NmExIDEgMCAwMC0uOTE2LTEuMDgzYy0uNTQxLS4wMy0xLjAyOS4zNi0xLjA3Ny45MWwtLjI3MiAzLjEyOUg4LjI1bC4yNTctMi45NTRhMS4wMDIgMS4wMDIgMCAwMC0uOTE0LTEuMDg1Ljk5Ny45OTcgMCAwMC0xLjA3OC45MWwtLjI3IDMuMTI4SDMuNDY4YTEgMSAwIDAwMCAyaDIuNjAybC0uMzY3IDQuMjJIMi44NDdhMS4wMDIgMS4wMDIgMCAwMDAgMi4wMDJINS41M2wtLjI1OCAyLjk1NmMtLjA0OC41NDguMzYgMS4wMzQuOTA4IDEuMDg0bC4wODguMDA0Yy41MjIgMCAuOTUtLjM5My45OTYtLjkxNWwuMjczLTMuMTI3aDQuMjEzbC0uMjU3IDIuOTUzYy0uMDUuNTQ4LjM1OSAxLjAzNS45MDkgMS4wODVsLjA4OC4wMDRjLjUxNCAwIC45NTItLjQwMi45OTYtLjkxNWwuMjctMy4xMjdoMi43NzZjLjU1IDAgMS0uNDUgMS0xcy0uNDUtMS4wMDItMS0xLjAwMkgxMy45M2wuMzY3LTQuMjJoMi44NThWNy44OXptLTQuODY1IDBsLS4zNjcgNC4yMkg3LjcxMWwuMzY3LTQuMjJoNC4yMTJ6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnRXhwbG9yZUZpbGxcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdHaWYocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xOSAxMC41VjguOGgtNC40djYuNGgxLjd2LTJoMnYtMS43aC0ydi0xSDE5em0tNy4zLTEuN2gxLjd2Ni40aC0xLjdWOC44em0tMy42IDEuNmMuNCAwIC45LjIgMS4yLjVsMS4yLTFDOS45IDkuMiA5IDguOCA4LjEgOC44Yy0xLjggMC0zLjIgMS40LTMuMiAzLjIgMCAxLjggMS40IDMuMiAzLjIgMy4yIDEgMCAxLjgtLjQgMi40LTEuMXYtMi41SDcuN3YxLjJoMS4ydi42Yy0uMi4xLS41LjItLjguMi0uOSAwLTEuNi0uNy0xLjYtMS42IDAtLjguNy0xLjYgMS42LTEuNnpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0yMC41IDIuMDJoLTE3YTIuMjUgMi4yNSAwIDAwLTIuMjUgMi4yNDd2MTUuNTA3QTIuMjUxIDIuMjUxIDAgMDAzLjUgMjIuMDJoMTdjMS4yNCAwIDIuMjUtMS4wMDggMi4yNS0yLjI0NlY0LjI2N0EyLjI1IDIuMjUgMCAwMDIwLjUgMi4wMnptLjc1IDE3Ljc1NGEuNzUuNzUgMCAwMS0uNzUuNzQ2aC0xN2EuNzUuNzUgMCAwMS0uNzUtLjc0NlY0LjI2N2MwLS40MTIuMzM2LS43NDcuNzUtLjc0N2gxN2MuNDE0IDAgLjc1LjMzNS43NS43NDd2MTUuNTA3elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0dpZlxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z0hvbWUocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xOC43MTcgNi4zMDhsLTguNDItNC41NDVhLjYyNi42MjYgMCAwMC0uNTk0IDBMMS4yODYgNi4zMDhhLjYyNi42MjYgMCAwMC41OTQgMS4xbC42OC0uMzY2IDEuMzU3IDkuNTk0Yy4xNzggMS4wMTIgMS4wOSAxLjcxOCAyLjIxNSAxLjcxOGg3LjczNWMxLjEyNiAwIDIuMDM3LS43MDYgMi4yMTktMS43MzlMMTcuNDQgNy4wNGwuNjgxLjM2OGEuNjMuNjMgMCAwMC44NDgtLjI1My42MjYuNjI2IDAgMDAtLjI1My0uODQ3ek0xNC44NTIgMTYuNDJjLS4wOS41MDUtLjU4Ni42ODUtLjk4NC42ODVINi4xMzNjLS40IDAtLjg5NS0uMTgtLjk4MS0uNjY1TDMuNzMzIDYuNDEgMTAgMy4wMjJsNi4yNjggMy4zODQtMS40MTYgMTAuMDEyelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTYuODUgMTAuMTUzYTMuMTUzIDMuMTUzIDAgMDAzLjE1IDMuMTUgMy4xNTMgMy4xNTMgMCAwMDMuMTUtMy4xNUEzLjE1MyAzLjE1MyAwIDAwMTAgNy4wMDNhMy4xNTMgMy4xNTMgMCAwMC0zLjE1IDMuMTV6bTUuMDUgMGExLjkwMSAxLjkwMSAwIDAxLTMuOCAwYzAtMS4wNDguODUyLTEuOSAxLjktMS45czEuOS44NTIgMS45IDEuOXpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdIb21lXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnSG9tZUZpbGwocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xOC44MTcgNi4xMjVsLTguNDIxLTQuNTQ0YS44MzMuODMzIDAgMDAtLjc5MiAwTDEuMTg4IDYuMTI1YS44MzUuODM1IDAgMDAuNzkxIDEuNDY4bC42MTItLjMzIDEuMzI1IDkuMzc1Yy4xOCAxLjAxMSAxLjA5MiAxLjcxOCAyLjIxNyAxLjcxOGg3LjczNGMxLjEyNSAwIDIuMDM3LS43MDcgMi4yMTktMS43NGwxLjMyMy05LjM1NC42MTQuMzMxYS44MzIuODMyIDAgMTAuNzkyLTEuNDY1bC4wMDItLjAwM3pNMTAgMTIuODYzYTIuNzA4IDIuNzA4IDAgMTEwLTUuNDE3IDIuNzA4IDIuNzA4IDAgMDEwIDUuNDE3elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0hvbWVGaWxsXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnTGlrZShwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEyIDIxLjYzOGgtLjAxNEM5LjQwMyAyMS41OSAxLjk1IDE0Ljg1NiAxLjk1IDguNDc4YzAtMy4wNjQgMi41MjUtNS43NTQgNS40MDMtNS43NTQgMi4yOSAwIDMuODMgMS41OCA0LjY0NiAyLjczLjgxNC0xLjE0OCAyLjM1NC0yLjczIDQuNjQ1LTIuNzMgMi44OCAwIDUuNDA0IDIuNjkgNS40MDQgNS43NTUgMCA2LjM3Ni03LjQ1NCAxMy4xMS0xMC4wMzcgMTMuMTU3SDEydi4wMDJ6TTcuMzU0IDQuMjI1Yy0yLjA4IDAtMy45MDMgMS45ODgtMy45MDMgNC4yNTUgMCA1Ljc0IDcuMDM0IDExLjU5NiA4LjU1IDExLjY1OCAxLjUxOC0uMDYyIDguNTUtNS45MTcgOC41NS0xMS42NTggMC0yLjI2Ny0xLjgyMy00LjI1NS0zLjkwMy00LjI1NS0yLjUyOCAwLTMuOTQgMi45MzYtMy45NTIgMi45NjUtLjIzLjU2Mi0xLjE1Ni41NjItMS4zODcgMC0uMDE0LS4wMy0xLjQyNS0yLjk2NS0zLjk1NC0yLjk2NWgtLjAwMXpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdMaWtlXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnTGlzdChwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE2LjQ1OCAxOC4zMzNIMy41NDJhMS44NzggMS44NzggMCAwMS0xLjg3NS0xLjg3NVYzLjU0MmMwLTEuMDM0Ljg0MS0xLjg3NSAxLjg3NS0xLjg3NWgxMi45MTZjMS4wMzQgMCAxLjg3NS44NDEgMS44NzUgMS44NzV2MTIuOTE2YTEuODc4IDEuODc4IDAgMDEtMS44NzUgMS44NzV6TTMuNTQyIDIuOTE3YS42MjYuNjI2IDAgMDAtLjYyNS42MjV2MTIuOTE2YzAgLjM0NS4yOC42MjUuNjI1LjYyNWgxMi45MTZjLjM0NSAwIC42MjUtLjI4LjYyNS0uNjI1VjMuNTQyYS42MjYuNjI2IDAgMDAtLjYyNS0uNjI1SDMuNTQyelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE0LjE2NyA3LjJINS44MzNhLjYyNi42MjYgMCAwMTAtMS4yNWg4LjMzNGEuNjI1LjYyNSAwIDExMCAxLjI1em0wIDMuNDI1SDUuODMzYS42MjUuNjI1IDAgMDEwLTEuMjVoOC4zMzRhLjYyNS42MjUgMCAwMTAgMS4yNXpNMTAgMTQuMDVINS44MzNhLjYyNS42MjUgMCAxMTAtMS4yNUgxMGEuNjI2LjYyNiAwIDAxMCAxLjI1elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0xpc3RcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdMaXN0RmlsbChwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE2LjQ1OCAxLjY2N0gzLjU0MmMtMS4wMzEgMC0xLjg3NS44NDQtMS44NzUgMS44NzV2MTIuOTE2YzAgMS4wMzEuODQ0IDEuODc1IDEuODc1IDEuODc1aDEyLjkxNmMxLjAzMSAwIDEuODc1LS44NDQgMS44NzUtMS44NzVWMy41NDJjMC0xLjAzMS0uODQ0LTEuODc1LTEuODc1LTEuODc1ek05LjE2NyAxMy45NThINS44MzNhLjYyNS42MjUgMCAwMTAtMS4yNWgzLjMzNGEuNjI1LjYyNSAwIDAxMCAxLjI1em01LTMuMzMzSDUuODMzYS42MjUuNjI1IDAgMDEwLTEuMjVoOC4zMzRhLjYyNS42MjUgMCAwMTAgMS4yNXptMC0zLjMzM0g1LjgzM2EuNjI1LjYyNSAwIDAxMC0xLjI1aDguMzM0YS42MjUuNjI1IDAgMDEwIDEuMjV6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnTGlzdEZpbGxcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdNYXJrKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTYuNTgzIDE5LjU4M2EuNjI5LjYyOSAwIDAxLS4zNjgtLjEyTDEwIDE0Ljk0bC02LjIxNSA0LjUyNWEuNjI1LjYyNSAwIDAxLS45OTMtLjUwNlY0LjY2N2MwLTEuMDM0Ljg0MS0xLjg3NSAxLjg3NS0xLjg3NWgxMC42NjVjMS4wMzMgMCAxLjg3NS44NDEgMS44NzUgMS44NzV2MTQuMjkxYS42MjQuNjI0IDAgMDEtLjYyNS42MjVoLjAwMXpNMTAgMTMuNTQyYy4xMyAwIC4yNTguMDQuMzY3LjEybDUuNTkxIDQuMDY5VjQuNjY3YS42MjcuNjI3IDAgMDAtLjYyNS0uNjI1SDQuNjY3YS42MjcuNjI3IDAgMDAtLjYyNS42MjVWMTcuNzNsNS41OTEtNC4wN2EuNjE3LjYxNyAwIDAxLjM2Ny0uMTJ6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnTWFya1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z01hcmtGaWxsKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTYuNTgzIDE5LjU4M2MtLjE2NiAwLS4yNSAwLS4zMzMtLjA4M0wxMCAxNC45MTdsLTYuMjUgNC41Yy0uMTY3LjE2Ni0uNDE3LjE2Ni0uNjY3LjA4My0uMTY2LS4wODMtLjMzMy0uMzMzLS4zMzMtLjU4M1Y0LjY2N2MwLTEgLjgzMy0xLjgzNCAxLjgzMy0xLjgzNEgxNS4yNWMxIDAgMS44MzMuODM0IDEuODMzIDEuODM0djE0LjI1YzAgLjI1LS4xNjYuNDE2LS4zMzMuNTgzIDAgLjA4My0uMDgzLjA4My0uMTY3LjA4M3pcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdNYXJrRmlsbFxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z01lZGlhKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTkuNzUgMkg0LjI1QzMuMDEgMiAyIDMuMDEgMiA0LjI1djE1LjVDMiAyMC45OSAzLjAxIDIyIDQuMjUgMjJoMTUuNWMxLjI0IDAgMi4yNS0xLjAxIDIuMjUtMi4yNVY0LjI1QzIyIDMuMDEgMjAuOTkgMiAxOS43NSAyek00LjI1IDMuNWgxNS41Yy40MTMgMCAuNzUuMzM3Ljc1Ljc1djkuNjc2bC0zLjg1OC0zLjg1OGEuNzUuNzUgMCAwMC0uNTMtLjIyaC0uMDAzYS43NC43NCAwIDAwLS41MzIuMjI0bC00LjMxNyA0LjM4NC0xLjgxMy0xLjgwNmEuNzUuNzUgMCAwMC0uNTMtLjIyYy0uMTkzLS4wMy0uMzk1LjA4LS41MzUuMjI3TDMuNSAxNy42NDJWNC4yNWMwLS40MTMuMzM3LS43NS43NS0uNzV6bS0uNzQ0IDE2LjI4bDUuNDE4LTUuNTM0IDYuMjgyIDYuMjU0SDQuMjVhLjc1Ljc1IDAgMDEtLjc0NC0uNzJ6bTE2LjI0NC43MmgtMi40MmwtNS4wMDctNC45ODcgMy43OTItMy44NSA0LjM4NSA0LjM4NHYzLjcwM2MwIC40MTMtLjMzNy43NS0uNzUuNzV6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNOC44NjggOS44NTFhMS41NDIgMS41NDIgMCAxMDAtMy4wODQgMS41NDIgMS41NDIgMCAwMDAgMy4wODR6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnTWVkaWFcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdNZXNzYWdlKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTYuMDQyIDIuNTE1SDMuOTU4YTIuMjk0IDIuMjk0IDAgMDAtMi4yOTEgMi4yOTN2MTAuNDEzYTIuMjk1IDIuMjk1IDAgMDAyLjI5MSAyLjI5NGgxMi4wODRhMi4yOTUgMi4yOTUgMCAwMDIuMjkxLTIuMjk0VjQuODA4YTIuMjk0IDIuMjk0IDAgMDAtMi4yOTEtMi4yOTN6TTMuOTU4IDMuNzY1aDEyLjA4NGMuNTc1IDAgMS4wNDEuNDY3IDEuMDQxIDEuMDQydi41OTVsLTYuNzA4IDQuNDcyYS42NzUuNjc1IDAgMDEtLjc1LS4wMDJsLTYuNzA4LTQuNDd2LS41OTVjMC0uNTc1LjQ2Ni0xLjA0MiAxLjA0MS0xLjA0MnptMTIuMDg0IDEyLjQ5OEgzLjk1OGExLjA0MiAxLjA0MiAwIDAxLTEuMDQxLTEuMDQxVjYuODY3bDYuMDMzIDQuMDI1YTEuODg4IDEuODg4IDAgMDAyLjEgMGw2LjAzMy00LjAyNHY4LjM1MWMwIC41NzUtLjQ2NiAxLjA0Mi0xLjA0MSAxLjA0MnYuMDAyelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z01lc3NhZ2VcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdNZXNzYWdlRmlsbChwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTkuNjI1IDEwLjA2OGEuNjc1LjY3NSAwIDAwLjc1IDBsNy45NTgtNS4zMDV2LS4xOGExLjg3OCAxLjg3OCAwIDAwLTEuODc1LTEuODc1SDMuNTQyYTEuODc4IDEuODc4IDAgMDAtMS44NzUgMS44NzV2LjE2NGw3Ljk1OCA1LjMyMXpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMS4wNSAxMS4wOGExLjg4OCAxLjg4OCAwIDAxLTIuMS0uMDAyTDEuNjY3IDYuMjF2OS43MjVjMCAxLjAzMy44NDEgMS44NzUgMS44NzUgMS44NzVoMTIuOTE2YTEuODc4IDEuODc4IDAgMDAxLjg3NS0xLjg3NXYtOS43MWwtNy4yODMgNC44NTN2LjAwMXpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdNZXNzYWdlRmlsbFxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z01vbmV5KHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTIgMjRjNi42MjcgMCAxMi01LjM3MyAxMi0xMlMxOC42MjcgMCAxMiAwIDAgNS4zNzMgMCAxMnM1LjM3MyAxMiAxMiAxMnpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjMzM0RDVDXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIG9wYWNpdHk9ezAuMX1cbiAgICAgICAgICAgICAgICBkPVwiTTE0LjIwMyA1Ljk1Mkw1LjEyNSA5LjE0OXYxLjAyMmwuMTMuMTMtLjEzLjA0OHYxLjAyMmwuMTMuMTMtLjEzLjA0OHYxLjAyMmwuMTMuMTMtLjEzLjA0OHYxLjAyMmwuMTMuMTMtLjEzLjA0OHYxLjAyMmw4Ljg2MyA4Ljg2M2M1LjQ2Ny0uOTEyIDkuNjgzLTUuNTE3IDkuOTkzLTExLjE2NkwxOC44NzUgNy41NmwtNC42NzItMS42MDd6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTYuNjU0IDEyLjYxOGwtMi40NS0uODQ1LTQuNzYyIDEuNjc3LTQuMzE3LjQ5OHYxLjAyMmw0LjY3MSAxLjYxIDkuMDc5LTMuMTk3di0xLjAyMmwtMi4yMjEuMjU3elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiMzMTk3OENcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNC4yMDQgMTAuNzUybC05LjA3OSAzLjE5NiA0LjY3MSAxLjYxIDkuMDc5LTMuMTk3LTQuNjcxLTEuNjF6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzNFQTY5QlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTkuMTggMTUuMTE2bC0yLjc3OC0uOTU4Yy4zMzUtLjExOC4zMzItLjMwOC0uMDA3LS40MjRsNy4yMDYtMi41MzdjLjMzOC4xMTYuODg0LjExNSAxLjIyLS4wMDNsMi43NzcuOTU3Yy0uMzM1LjExOC0uMzMyLjMwOC4wMDcuNDI1bC03LjIwNiAyLjUzN2MtLjMzOS0uMTE2LS44ODQtLjExNS0xLjIyLjAwM3pcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjNDRDNEExXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuMjQ1IDEyLjcxNmMuODguMzA0IDEuMDM2Ljc0Ni4zNDguOTg4LS42ODcuMjQyLTEuOTU4LjE5Mi0yLjgzOC0uMTEtLjg4LS4zMDQtMS4wMzYtLjc0Ni0uMzQ4LS45ODguNjg3LS4yNDIgMS45NTgtLjE5MyAyLjgzOC4xMXpNMTUuODA5IDExLjgxNGMuMTU3LjA1NC4xNTguMTQyLjAwMy4xOTctLjE1Ni4wNTUtLjQxLjA1Ni0uNTY3LjAwMS0uMTU3LS4wNTQtLjE1OS0uMTQyLS4wMDMtLjE5Ny4xNTYtLjA1NS40MS0uMDU1LjU2Ni0uMDAxek04Ljc1NSAxNC4yOTdjLjE1Ny4wNTUuMTU5LjE0My4wMDMuMTk4LS4xNTYuMDU1LS40MS4wNTUtLjU2NyAwLS4xNTctLjA1My0uMTU4LS4xNDItLjAwMy0uMTk2LjE1Ni0uMDU1LjQxLS4wNTYuNTY3LS4wMDJ6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzNFQTY5QlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEzLjIxNiAxMy42MmwtLjIyNi0uMDc3YTQuMzg4IDQuMzg4IDAgMDEtMS4wOS4xNDlsLS4wNDctLjE3MmMuMzIyLS4wMDguNTg5LS4wNC44LS4wOTNsLS42MDEtLjIwN2E0LjE2NSA0LjE2NSAwIDAxLS43MjcuMTAyIDEuNTYyIDEuNTYyIDAgMDEtLjU2NS0uMDgyYy0uMTc4LS4wNjItLjI2Mi0uMTM0LS4yNTMtLjIxNi4wMS0uMDgzLjExLS4xNjEuMjk3LS4yMzRsLS4xNTUtLjA1NC4xOTYtLjA2OS4xNTguMDU1Yy4yNDEtLjA3NC41MzEtLjEyMi44Ny0uMTQ0bC4wODUuMTY4YTMuMTkxIDMuMTkxIDAgMDAtLjYxNy4wOTJsLjU4Mi4yLjAwOS0uMDAzYTQuMTYgNC4xNiAwIDAxLjc0My0uMTA0Yy4yMDYtLjAwNi4zOTkuMDIyLjU4LjA4NC4xOC4wNjIuMjY0LjEzNS4yNS4yMTktLjAxMy4wODQtLjExOC4xNjQtLjMxNi4yNGwuMjIzLjA3OC0uMTk2LjA2OXptLTIuMjE0LS42MTJjLS4wMDYuMDM1LjAyNi4wNjQuMDk1LjA4N2EuNjcuNjcgMCAwMC4yMjUuMDM1Yy4wODEgMCAuMTk4LS4wMTQuMzUtLjA0MmwtLjUzNy0uMTg0Yy0uMDgzLjAzNS0uMTI4LjA3LS4xMzMuMTA0em0yLjAwMi4yNGMuMDEtLjAzNS0uMDIyLS4wNjYtLjA5NC0uMDkxYS43LjcgMCAwMC0uMjQtLjAzNiAyLjMyIDIuMzIgMCAwMC0uMzcuMDQ4bC41NTguMTkyYy4wODctLjAzOC4xMzYtLjA3NS4xNDYtLjExMnpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjNDRDNEExXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTYuNjU0IDExLjQxOGwtMi40NS0uODQ1LTQuNzYyIDEuNjc3LTQuMzE3LjQ5OHYxLjAyMmw0LjY3MSAxLjYxIDkuMDc5LTMuMTk3VjExLjE2bC0yLjIyMS4yNTd6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzMxOTc4Q1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE0LjIwNCA5LjU1MmwtOS4wNzkgMy4xOTYgNC42NzEgMS42MSA5LjA3OS0zLjE5Ny00LjY3MS0xLjYxelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiMzRUE2OUJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk05LjE4IDEzLjkxNWwtMi43NzgtLjk1N2MuMzM1LS4xMTguMzMyLS4zMDgtLjAwNy0uNDI0bDcuMjA2LTIuNTM4Yy4zMzguMTE3Ljg4NC4xMTYgMS4yMi0uMDAybDIuNzc3Ljk1N2MtLjMzNS4xMTgtLjMzMi4zMDguMDA3LjQyNWwtNy4yMDYgMi41MzdjLS4zMzktLjExNy0uODg0LS4xMTYtMS4yMi4wMDJ6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzQ0QzRBMVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEzLjI0NSAxMS41MTZjLjg4LjMwNCAxLjAzNi43NDYuMzQ4Ljk4OC0uNjg3LjI0Mi0xLjk1OC4xOTMtMi44MzgtLjExLS44OC0uMzA0LTEuMDM2LS43NDYtLjM0OC0uOTg4LjY4Ny0uMjQyIDEuOTU4LS4xOTMgMi44MzguMTF6TTE1LjgwOSAxMC42MTRjLjE1Ny4wNTQuMTU4LjE0Mi4wMDMuMTk3LS4xNTYuMDU1LS40MS4wNTUtLjU2Ny4wMDEtLjE1Ny0uMDU0LS4xNTktLjE0Mi0uMDAzLS4xOTcuMTU2LS4wNTUuNDEtLjA1NS41NjYtLjAwMXpNOC43NTUgMTMuMDk3Yy4xNTcuMDU1LjE1OS4xNDMuMDAzLjE5OC0uMTU2LjA1NS0uNDEuMDU1LS41NjcgMC0uMTU3LS4wNTMtLjE1OC0uMTQyLS4wMDMtLjE5Ny4xNTYtLjA1NC40MS0uMDU1LjU2NyAwelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiMzRUE2OUJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMy4yMTYgMTIuNDJsLS4yMjYtLjA3N2E0LjM4OCA0LjM4OCAwIDAxLTEuMDkuMTQ5bC0uMDQ3LS4xNzJjLjMyMi0uMDA4LjU4OS0uMDQuOC0uMDk0bC0uNjAxLS4yMDdhNC4xNjUgNC4xNjUgMCAwMS0uNzI3LjEwMyAxLjU2MiAxLjU2MiAwIDAxLS41NjUtLjA4MmMtLjE3OC0uMDYyLS4yNjItLjEzNC0uMjUzLS4yMTYuMDEtLjA4My4xMS0uMTYxLjI5Ny0uMjM0bC0uMTU1LS4wNTQuMTk2LS4wNjkuMTU4LjA1NWMuMjQxLS4wNzQuNTMxLS4xMjIuODctLjE0NWwuMDg1LjE2OWEzLjE5MSAzLjE5MSAwIDAwLS42MTcuMDkybC41ODIuMi4wMDktLjAwM2E0LjE2IDQuMTYgMCAwMS43NDMtLjEwNGMuMjA2LS4wMDYuMzk5LjAyMi41OC4wODQuMTguMDYyLjI2NC4xMzUuMjUuMjE5LS4wMTMuMDg0LS4xMTguMTY0LS4zMTYuMjRsLjIyMy4wNzgtLjE5Ni4wNjl6bS0yLjIxNC0uNjEyYy0uMDA2LjAzNC4wMjYuMDYzLjA5NS4wODdhLjY3LjY3IDAgMDAuMjI1LjAzNWMuMDgxIDAgLjE5OC0uMDE0LjM1LS4wNDJsLS41MzctLjE4NGMtLjA4My4wMzUtLjEyOC4wNy0uMTMzLjEwNHptMi4wMDIuMjRjLjAxLS4wMzYtLjAyMi0uMDY2LS4wOTQtLjA5MWEuNzAyLjcwMiAwIDAwLS4yNC0uMDM2IDIuMzIgMi4zMiAwIDAwLS4zNy4wNDhsLjU1OC4xOTJjLjA4Ny0uMDM4LjEzNi0uMDc2LjE0Ni0uMTEyelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM0NEM0QTFcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNi42NTQgMTAuMjE3bC0yLjQ1LS44NDQtNC43NjIgMS42NzctNC4zMTcuNDk4djEuMDIybDQuNjcxIDEuNjEgOS4wNzktMy4xOTdWOS45NmwtMi4yMjEuMjU2elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiMzMTk3OENcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNC4yMDQgOC4zNTJsLTkuMDc5IDMuMTk2IDQuNjcxIDEuNjEgOS4wNzktMy4xOTctNC42NzEtMS42MXpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjM0VBNjlCXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNOS4xOCAxMi43MTVsLTIuNzc4LS45NTdjLjMzNS0uMTE4LjMzMi0uMzA4LS4wMDctLjQyNGw3LjIwNi0yLjUzOGMuMzM4LjExNy44ODQuMTE2IDEuMjItLjAwMmwyLjc3Ny45NTdjLS4zMzUuMTE4LS4zMzIuMzA4LjAwNy40MjVsLTcuMjA2IDIuNTM3Yy0uMzM5LS4xMTctLjg4NC0uMTE2LTEuMjIuMDAyelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM0NEM0QTFcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMy4yNDUgMTAuMzE2Yy44OC4zMDMgMS4wMzYuNzQ1LjM0OC45ODgtLjY4Ny4yNDItMS45NTguMTkyLTIuODM4LS4xMS0uODgtLjMwNC0xLjAzNi0uNzQ2LS4zNDgtLjk4OC42ODctLjI0MiAxLjk1OC0uMTkzIDIuODM4LjExek0xNS44MDkgOS40MTRjLjE1Ny4wNTQuMTU4LjE0Mi4wMDMuMTk3LS4xNTYuMDU1LS40MS4wNTUtLjU2Ny4wMDEtLjE1Ny0uMDU0LS4xNTktLjE0Mi0uMDAzLS4xOTcuMTU2LS4wNTUuNDEtLjA1NS41NjYtLjAwMXpNOC43NTUgMTEuODk3Yy4xNTcuMDU0LjE1OS4xNDMuMDAzLjE5OC0uMTU2LjA1NC0uNDEuMDU1LS41NjcgMC0uMTU3LS4wNTQtLjE1OC0uMTQyLS4wMDMtLjE5Ny4xNTYtLjA1NC40MS0uMDU1LjU2NyAwelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiMzRUE2OUJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMy4yMTYgMTEuMjJsLS4yMjYtLjA3N2E0LjM4MyA0LjM4MyAwIDAxLTEuMDkuMTQ5bC0uMDQ3LS4xNzJjLjMyMi0uMDA4LjU4OS0uMDQuOC0uMDk0bC0uNjAxLS4yMDdhNC4xNzYgNC4xNzYgMCAwMS0uNzI3LjEwMyAxLjU2MiAxLjU2MiAwIDAxLS41NjUtLjA4M2MtLjE3OC0uMDYxLS4yNjItLjEzMy0uMjUzLS4yMTYuMDEtLjA4Mi4xMS0uMTYuMjk3LS4yMzNsLS4xNTUtLjA1NC4xOTYtLjA2OS4xNTguMDU1Yy4yNDEtLjA3NC41MzEtLjEyMi44Ny0uMTQ1bC4wODUuMTY5YTMuMTkxIDMuMTkxIDAgMDAtLjYxNy4wOTJsLjU4Mi4yLjAwOS0uMDAzYTQuMTYgNC4xNiAwIDAxLjc0My0uMTA0Yy4yMDYtLjAwNi4zOTkuMDIyLjU4LjA4NC4xOC4wNjIuMjY0LjEzNS4yNS4yMTktLjAxMy4wODQtLjExOC4xNjQtLjMxNi4yNGwuMjIzLjA3OC0uMTk2LjA2OXptLTIuMjE0LS42MTJjLS4wMDYuMDM0LjAyNi4wNjMuMDk1LjA4Ny4wNjkuMDI0LjE0NC4wMzYuMjI1LjAzNS4wODEgMCAuMTk4LS4wMTQuMzUtLjA0MmwtLjUzNy0uMTg0Yy0uMDgzLjAzNS0uMTI4LjA3LS4xMzMuMTA0em0yLjAwMi4yNGMuMDEtLjAzNi0uMDIyLS4wNjYtLjA5NC0uMDkxYS43MDIuNzAyIDAgMDAtLjI0LS4wMzZjLS4wODcuMDAyLS4yMS4wMTctLjM3LjA0OGwuNTU4LjE5MmMuMDg3LS4wMzguMTM2LS4wNzYuMTQ2LS4xMTJ6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzQ0QzRBMVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE2LjY1NCA5LjAxN2wtMi40NS0uODQ0TDkuNDQyIDkuODVsLTQuMzE3LjQ5OHYxLjAyMmw0LjY3MSAxLjYxIDkuMDc5LTMuMTk3VjguNzZsLTIuMjIxLjI1NnpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjMzE5NzhDXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTQuMjA0IDcuMTUybC05LjA3OSAzLjE5NiA0LjY3MSAxLjYxIDkuMDc5LTMuMTk3LTQuNjcxLTEuNjF6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzNFQTY5QlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTkuMTggMTEuNTE1bC0yLjc3OC0uOTU3Yy4zMzUtLjExOC4zMzItLjMwOC0uMDA3LS40MjVsNy4yMDYtMi41MzdjLjMzOC4xMTcuODg0LjExNiAxLjIyLS4wMDJsMi43NzcuOTU3Yy0uMzM1LjExOC0uMzMyLjMwOC4wMDcuNDI1bC03LjIwNiAyLjUzN2MtLjMzOS0uMTE3LS44ODQtLjExNi0xLjIyLjAwMnpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjNDRDNEExXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuMjQ1IDkuMTE2Yy44OC4zMDMgMS4wMzYuNzQ1LjM0OC45ODgtLjY4Ny4yNDItMS45NTguMTkyLTIuODM4LS4xMTEtLjg4LS4zMDMtMS4wMzYtLjc0NS0uMzQ4LS45ODcuNjg3LS4yNDMgMS45NTgtLjE5MyAyLjgzOC4xMXpNMTUuODA5IDguMjE0Yy4xNTcuMDU0LjE1OC4xNDIuMDAzLjE5Ny0uMTU2LjA1NS0uNDEuMDU1LS41NjcuMDAxLS4xNTctLjA1NC0uMTU5LS4xNDMtLjAwMy0uMTk3LjE1Ni0uMDU1LjQxLS4wNTYuNTY2LS4wMDF6TTguNzU1IDEwLjY5N2MuMTU3LjA1NC4xNTkuMTQzLjAwMy4xOTgtLjE1Ni4wNTQtLjQxLjA1NS0uNTY3IDAtLjE1Ny0uMDU0LS4xNTgtLjE0Mi0uMDAzLS4xOTcuMTU2LS4wNTUuNDEtLjA1NS41NjcgMHpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjM0VBNjlCXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuMjE2IDEwLjAybC0uMjI2LS4wNzdhNC4zODggNC4zODggMCAwMS0xLjA5LjE0OWwtLjA0Ny0uMTcyYy4zMjItLjAwOC41ODktLjA0LjgtLjA5NGwtLjYwMS0uMjA3YTQuMTc0IDQuMTc0IDAgMDEtLjcyNy4xMDMgMS41NjMgMS41NjMgMCAwMS0uNTY1LS4wODNjLS4xNzgtLjA2MS0uMjYyLS4xMzMtLjI1My0uMjE2LjAxLS4wODIuMTEtLjE2LjI5Ny0uMjM0bC0uMTU1LS4wNTMuMTk2LS4wNjkuMTU4LjA1NGMuMjQxLS4wNzMuNTMxLS4xMjEuODctLjE0NGwuMDg1LjE2OGEzLjE4OCAzLjE4OCAwIDAwLS42MTcuMDkzbC41ODIuMi4wMDktLjAwM2MuMjktLjA2My41MzgtLjA5OC43NDMtLjEwNC4yMDYtLjAwNi4zOTkuMDIyLjU4LjA4NC4xOC4wNjIuMjY0LjEzNS4yNS4yMTktLjAxMy4wODMtLjExOC4xNjQtLjMxNi4yNGwuMjIzLjA3Ny0uMTk2LjA3em0tMi4yMTQtLjYxMmMtLjAwNi4wMzQuMDI2LjA2My4wOTUuMDg3LjA2OS4wMjQuMTQ0LjAzNi4yMjUuMDM1LjA4MSAwIC4xOTgtLjAxNC4zNS0uMDQybC0uNTM3LS4xODRjLS4wODMuMDM1LS4xMjguMDctLjEzMy4xMDR6bTIuMDAyLjI0Yy4wMS0uMDM2LS4wMjItLjA2Ni0uMDk0LS4wOTFhLjcuNyAwIDAwLS4yNC0uMDM2IDIuMzIgMi4zMiAwIDAwLS4zNy4wNDhsLjU1OC4xOTJjLjA4Ny0uMDM5LjEzNi0uMDc2LjE0Ni0uMTEyelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM0NEM0QTFcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNi42NTQgNy44MTdsLTIuNDUtLjg0NEw5LjQ0MiA4LjY1bC00LjMxNy40OTh2MS4wMjJsNC42NzEgMS42MSA5LjA3OS0zLjE5N1Y3LjU2bC0yLjIyMS4yNTZ6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzMxOTc4Q1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE0LjIwNCA1Ljk1MUw1LjEyNSA5LjE0OGw0LjY3MSAxLjYxIDkuMDc5LTMuMTk3LTQuNjcxLTEuNjF6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzNFQTY5QlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTkuMTggMTAuMzE1bC0yLjc3OC0uOTU3Yy4zMzUtLjExOC4zMzItLjMwOC0uMDA3LS40MjVsNy4yMDYtMi41MzdjLjMzOC4xMTcuODg0LjExNiAxLjIyLS4wMDJsMi43NzcuOTU3Yy0uMzM1LjExOC0uMzMyLjMwOC4wMDcuNDI1bC03LjIwNiAyLjUzN2MtLjMzOS0uMTE3LS44ODQtLjExNi0xLjIyLjAwMnpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjNDRDNEExXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuMjQ1IDcuOTE2Yy44OC4zMDMgMS4wMzYuNzQ1LjM0OC45ODctLjY4Ny4yNDMtMS45NTguMTkzLTIuODM4LS4xMS0uODgtLjMwMy0xLjAzNi0uNzQ1LS4zNDgtLjk4OC42ODctLjI0MiAxLjk1OC0uMTkyIDIuODM4LjExMXpNMTUuODA5IDcuMDE0Yy4xNTcuMDU0LjE1OC4xNDIuMDAzLjE5Ny0uMTU2LjA1NS0uNDEuMDU1LS41NjcgMC0uMTU3LS4wNTMtLjE1OS0uMTQyLS4wMDMtLjE5Ni4xNTYtLjA1NS40MS0uMDU2LjU2Ni0uMDAxek04Ljc1NSA5LjQ5N2MuMTU3LjA1NC4xNTkuMTQzLjAwMy4xOTctLjE1Ni4wNTUtLjQxLjA1Ni0uNTY3LjAwMS0uMTU3LS4wNTQtLjE1OC0uMTQyLS4wMDMtLjE5Ny4xNTYtLjA1NS40MS0uMDU1LjU2NyAwelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiMzRUE2OUJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMy4yMTYgOC44MmwtLjIyNi0uMDc4YTQuMzg2IDQuMzg2IDAgMDEtMS4wOS4xNWwtLjA0Ny0uMTcyYy4zMjItLjAwOC41ODktLjA0LjgtLjA5NGwtLjYwMS0uMjA3YTQuMTc0IDQuMTc0IDAgMDEtLjcyNy4xMDMgMS41NjMgMS41NjMgMCAwMS0uNTY1LS4wODNjLS4xNzgtLjA2MS0uMjYyLS4xMzMtLjI1My0uMjE2LjAxLS4wODIuMTEtLjE2LjI5Ny0uMjM0bC0uMTU1LS4wNTMuMTk2LS4wNjkuMTU4LjA1NGMuMjQxLS4wNzMuNTMxLS4xMjEuODctLjE0NGwuMDg1LjE2OGEzLjE4NyAzLjE4NyAwIDAwLS42MTcuMDkzbC41ODIuMi4wMDktLjAwM2MuMjktLjA2My41MzgtLjA5OC43NDMtLjEwNC4yMDYtLjAwNi4zOTkuMDIyLjU4LjA4NC4xOC4wNjIuMjY0LjEzNS4yNS4yMTktLjAxMy4wODMtLjExOC4xNjQtLjMxNi4yNGwuMjIzLjA3Ny0uMTk2LjA3em0tMi4yMTQtLjYxMmMtLjAwNi4wMzQuMDI2LjA2My4wOTUuMDg3LjA2OS4wMjQuMTQ0LjAzNi4yMjUuMDM1LjA4MSAwIC4xOTgtLjAxNC4zNS0uMDQybC0uNTM3LS4xODRjLS4wODMuMDM1LS4xMjguMDctLjEzMy4xMDR6bTIuMDAyLjI0Yy4wMS0uMDM2LS4wMjItLjA2Ny0uMDk0LS4wOTFhLjcuNyAwIDAwLS4yNC0uMDM2IDIuMzIgMi4zMiAwIDAwLS4zNy4wNDdsLjU1OC4xOTJjLjA4Ny0uMDM4LjEzNi0uMDc1LjE0Ni0uMTExelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM0NEM0QTFcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMy4yNyA5LjUzNHY1LjgyNGwyLjA4OC0uNzM1VjguNzk5bC0yLjA4OC43MzV6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI2ZmZlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEzLjUyIDkuNDQ3djUuODIzbC4yMTUtLjA3NlY5LjM3MWwtLjIxNi4wNzZ6TTE0Ljg5NCA4Ljk2M3Y1LjgyM2wuMjE1LS4wNzVWOC44ODZsLS4yMTUuMDc2elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNGQ0Q0NjJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNS4xMyAxNy4zMDJjMCAuNDEyLS43OTYuNzQ3LTEuNzc3Ljc0Ny0uOTggMC0xLjc3Ni0uMzM1LTEuNzc2LS43NDd2LS42MTFoMy41NTJ2LjYxelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNGNkMzNThcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMy4zNTIgMTcuNDM4Yy45ODIgMCAxLjc3Ny0uMzM1IDEuNzc3LS43NDdzLS43OTUtLjc0Ny0xLjc3Ny0uNzQ3Yy0uOTggMC0xLjc3Ni4zMzUtMS43NzYuNzQ3cy43OTUuNzQ3IDEuNzc2Ljc0N3pcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjRkNENDYyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuMzUzIDE2LjA5Yy0uODU2IDAtMS41NS4yNjktMS41NS42IDAgLjMzMy42OTQuNjAyIDEuNTUuNjAyLjg1NiAwIDEuNTUtLjI3IDEuNTUtLjYwMSAwLS4zMzItLjY5NC0uNjAxLTEuNTUtLjYwMXptMCAxLjEzNWMtLjc2IDAtMS4zNzgtLjI0LTEuMzc4LS41MzQgMC0uMjk1LjYxNy0uNTM0IDEuMzc4LS41MzQuNzYxIDAgMS4zNzguMjM5IDEuMzc4LjUzNCAwIC4yOTUtLjYxNy41MzQtMS4zNzguNTM0elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNEQzg3NDRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMy4yOTYgMTcuMTA2di0uMDczYTIuMjYgMi4yNiAwIDAxLS42MzUtLjExbC4xODgtLjA4NmMuMTQ1LjA0OC4yOTQuMDc3LjQ0Ny4wODd2LS4xOTVhMi4xNDggMi4xNDggMCAwMS0uNDI3LS4wN2MtLjA5LS4wMy0uMTM2LS4wNzQtLjEzNi0uMTMxIDAtLjA1OC4wNTItLjEwNS4xNTYtLjE0Mi4xMDQtLjAzNy4yNC0uMDU3LjQwNy0uMDZ2LS4wNWguMTY1di4wNWMuMTkuMDA2LjM2OS4wMzEuNTM4LjA3NmwtLjE2OC4wOTJhMS43NDUgMS43NDUgMCAwMC0uMzctLjA1OHYuMTg4aC4wMDhjLjE5OC4wMTguMzQ0LjA0My40MzcuMDczLjA5My4wMzEuMTQuMDc2LjE0LjEzNCAwIC4wNTktLjA1NC4xMDYtLjE2LjE0M2ExLjQxOCAxLjQxOCAwIDAxLS40MjUuMDZ2LjA3MmgtLjE2NXptLS4xODItLjY0N2MtLjA0NC4wMTUtLjA2Ni4wMzQtLjA2Ni4wNTYgMCAuMDIzLjAxNy4wNC4wNTIuMDU0LjAzNC4wMTMuMS4wMjUuMTk2LjAzN3YtLjE3M2EuNjU4LjY1OCAwIDAwLS4xODIuMDI2em0uNTQ0LjQ0Yy4wNDgtLjAxNi4wNzItLjAzNS4wNzItLjA1OSAwLS4wMjMtLjAxOS0uMDQxLS4wNTctLjA1NWExLjExIDEuMTEgMCAwMC0uMjEyLS4wMzl2LjE4YS43NjYuNzY2IDAgMDAuMTk3LS4wMjd6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0RDODc0NFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE1LjEzIDE2LjU2YzAgLjQxMi0uNzk2Ljc0Ny0xLjc3Ny43NDctLjk4IDAtMS43NzYtLjMzNS0xLjc3Ni0uNzQ3di0uNjExaDMuNTUydi42MXpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjRjZDMzU4XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuMzUyIDE2LjY5NWMuOTgyIDAgMS43NzctLjMzNCAxLjc3Ny0uNzQ2IDAtLjQxMy0uNzk1LS43NDctMS43NzctLjc0Ny0uOTggMC0xLjc3Ni4zMzQtMS43NzYuNzQ3IDAgLjQxMi43OTUuNzQ2IDEuNzc2Ljc0NnpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjRkNENDYyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuMzUzIDE1LjM0OGMtLjg1NiAwLTEuNTUuMjY5LTEuNTUuNiAwIC4zMzMuNjk0LjYwMiAxLjU1LjYwMi44NTYgMCAxLjU1LS4yNyAxLjU1LS42MDEgMC0uMzMyLS42OTQtLjYwMS0xLjU1LS42MDF6bTAgMS4xMzVjLS43NiAwLTEuMzc4LS4yNC0xLjM3OC0uNTM0IDAtLjI5NS42MTctLjUzNCAxLjM3OC0uNTM0Ljc2MSAwIDEuMzc4LjIzOSAxLjM3OC41MzQgMCAuMjk1LS42MTcuNTM0LTEuMzc4LjUzNHpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjREM4NzQ0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuMjk2IDE2LjM2NHYtLjA3M2EyLjI2IDIuMjYgMCAwMS0uNjM1LS4xMWwuMTg4LS4wODZjLjE0NS4wNDguMjk0LjA3Ny40NDcuMDg3di0uMTk0YTIuMTQ4IDIuMTQ4IDAgMDEtLjQyNy0uMDcyYy0uMDktLjAyOS0uMTM2LS4wNzItLjEzNi0uMTMgMC0uMDU4LjA1Mi0uMTA1LjE1Ni0uMTQyYTEuMzMgMS4zMyAwIDAxLjQwNy0uMDZ2LS4wNWguMTY1di4wNWMuMTkuMDA2LjM2OS4wMzEuNTM4LjA3NmwtLjE2OC4wOTJhMS43NDUgMS43NDUgMCAwMC0uMzctLjA1OHYuMTg4aC4wMDhjLjE5OC4wMTguMzQ0LjA0My40MzcuMDczLjA5My4wMzEuMTQuMDc2LjE0LjEzNCAwIC4wNTktLjA1NC4xMDYtLjE2LjE0M2ExLjQyMSAxLjQyMSAwIDAxLS40MjUuMDZ2LjA3MmgtLjE2NXptLS4xODItLjY0NmMtLjA0NC4wMTQtLjA2Ni4wMzMtLjA2Ni4wNTYgMCAuMDIyLjAxNy4wNC4wNTIuMDUzLjAzNC4wMTMuMS4wMjUuMTk2LjAzN3YtLjE3M2EuNjUzLjY1MyAwIDAwLS4xODIuMDI3em0uNTQ0LjQzOWMuMDQ4LS4wMTYuMDcyLS4wMzUuMDcyLS4wNTggMC0uMDI0LS4wMTktLjA0Mi0uMDU3LS4wNTZhMS4xMSAxLjExIDAgMDAtLjIxMi0uMDM4di4xOGEuNzY2Ljc2NiAwIDAwLjE5Ny0uMDI4elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNEQzg3NDRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNS4xMyAxNS44MThjMCAuNDEyLS43OTYuNzQ3LTEuNzc3Ljc0Ny0uOTggMC0xLjc3Ni0uMzM1LTEuNzc2LS43NDd2LS42MTFoMy41NTJ2LjYxelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNGNkMzNThcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMy4zNTIgMTUuOTU0Yy45ODIgMCAxLjc3Ny0uMzM1IDEuNzc3LS43NDdzLS43OTUtLjc0Ny0xLjc3Ny0uNzQ3Yy0uOTggMC0xLjc3Ni4zMzUtMS43NzYuNzQ3cy43OTUuNzQ3IDEuNzc2Ljc0N3pcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjRkNENDYyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuMzUzIDE0LjYwNmMtLjg1NiAwLTEuNTUuMjctMS41NS42MDEgMCAuMzMyLjY5NC42IDEuNTUuNi44NTYgMCAxLjU1LS4yNjggMS41NS0uNiAwLS4zMzItLjY5NC0uNjAxLTEuNTUtLjYwMXptMCAxLjEzNWMtLjc2IDAtMS4zNzgtLjIzOS0xLjM3OC0uNTM0IDAtLjI5NS42MTctLjUzNCAxLjM3OC0uNTM0Ljc2MSAwIDEuMzc4LjIzOSAxLjM3OC41MzQgMCAuMjk1LS42MTcuNTM0LTEuMzc4LjUzNHpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjREM4NzQ0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuMjk2IDE1LjYyMnYtLjA3M2EyLjI2IDIuMjYgMCAwMS0uNjM1LS4xMWwuMTg4LS4wODZjLjE0NS4wNDkuMjk0LjA3OC40NDcuMDg3di0uMTk0YTIuMTYzIDIuMTYzIDAgMDEtLjQyNy0uMDcyYy0uMDktLjAyOS0uMTM2LS4wNzItLjEzNi0uMTMgMC0uMDU4LjA1Mi0uMTA1LjE1Ni0uMTQyLjEwNC0uMDM3LjI0LS4wNTcuNDA3LS4wNnYtLjA1aC4xNjV2LjA1Yy4xOS4wMDYuMzY5LjAzMS41MzguMDc2bC0uMTY4LjA5MmExLjc1MiAxLjc1MiAwIDAwLS4zNy0uMDU4di4xODhoLjAwOGMuMTk4LjAxOC4zNDQuMDQzLjQzNy4wNzMuMDkzLjAzMS4xNC4wNzYuMTQuMTM0IDAgLjA1OS0uMDU0LjEwNi0uMTYuMTQzYTEuNDE1IDEuNDE1IDAgMDEtLjQyNS4wNnYuMDcyaC0uMTY1em0tLjE4Mi0uNjQ2Yy0uMDQ0LjAxNS0uMDY2LjAzMy0uMDY2LjA1NiAwIC4wMjIuMDE3LjA0LjA1Mi4wNTMuMDM0LjAxMy4xLjAyNS4xOTYuMDM3di0uMTczYS42NTcuNjU3IDAgMDAtLjE4Mi4wMjd6bS41NDQuNDM5Yy4wNDgtLjAxNi4wNzItLjAzNS4wNzItLjA1OCAwLS4wMjQtLjAxOS0uMDQyLS4wNTctLjA1NmExLjExIDEuMTEgMCAwMC0uMjEyLS4wMzl2LjE4YS43Ny43NyAwIDAwLjE5Ny0uMDI3elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNEQzg3NDRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNS4xMyAxNS4wNzZjMCAuNDEyLS43OTYuNzQ3LTEuNzc3Ljc0Ny0uOTggMC0xLjc3Ni0uMzM1LTEuNzc2LS43NDd2LS42MTFoMy41NTJ2LjYxelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNGNkMzNThcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMy4zNTIgMTUuMjExYy45ODIgMCAxLjc3Ny0uMzM0IDEuNzc3LS43NDYgMC0uNDEzLS43OTUtLjc0Ny0xLjc3Ny0uNzQ3LS45OCAwLTEuNzc2LjMzNC0xLjc3Ni43NDcgMCAuNDEyLjc5NS43NDYgMS43NzYuNzQ2elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNGQ0Q0NjJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMy4zNTMgMTMuODY0Yy0uODU2IDAtMS41NS4yNy0xLjU1LjYwMSAwIC4zMzIuNjk0LjYgMS41NS42Ljg1NiAwIDEuNTUtLjI2OCAxLjU1LS42IDAtLjMzMi0uNjk0LS42MDEtMS41NS0uNjAxem0wIDEuMTM1Yy0uNzYgMC0xLjM3OC0uMjM5LTEuMzc4LS41MzQgMC0uMjk1LjYxNy0uNTM0IDEuMzc4LS41MzQuNzYxIDAgMS4zNzguMjM5IDEuMzc4LjUzNCAwIC4yOTUtLjYxNy41MzQtMS4zNzguNTM0elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNEQzg3NDRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMy4yOTYgMTQuODh2LS4wNzNhMi4yNiAyLjI2IDAgMDEtLjYzNS0uMTFsLjE4OC0uMDg2Yy4xNDUuMDQ4LjI5NC4wNzcuNDQ3LjA4N3YtLjE5NGEyLjE1NyAyLjE1NyAwIDAxLS40MjctLjA3MmMtLjA5LS4wMjktLjEzNi0uMDcyLS4xMzYtLjEzIDAtLjA1OC4wNTItLjEwNS4xNTYtLjE0Mi4xMDQtLjAzNy4yNC0uMDU3LjQwNy0uMDZ2LS4wNWguMTY1di4wNWMuMTkuMDA2LjM2OS4wMzEuNTM4LjA3NmwtLjE2OC4wOTJhMS43NTIgMS43NTIgMCAwMC0uMzctLjA1OHYuMTg4aC4wMDhjLjE5OC4wMTguMzQ0LjA0My40MzcuMDc0LjA5My4wMy4xNC4wNzUuMTQuMTMzIDAgLjA1OS0uMDU0LjEwNi0uMTYuMTQzYTEuNDE4IDEuNDE4IDAgMDEtLjQyNS4wNnYuMDcyaC0uMTY1em0tLjE4Mi0uNjQ2Yy0uMDQ0LjAxNS0uMDY2LjAzMy0uMDY2LjA1NiAwIC4wMjIuMDE3LjA0LjA1Mi4wNTMuMDM0LjAxMy4xLjAyNS4xOTYuMDM3di0uMTczYS42NTQuNjU0IDAgMDAtLjE4Mi4wMjd6bS41NDQuNDM5Yy4wNDgtLjAxNi4wNzItLjAzNS4wNzItLjA1OCAwLS4wMjQtLjAxOS0uMDQyLS4wNTctLjA1NmExLjExIDEuMTEgMCAwMC0uMjEyLS4wMzh2LjE4YS43Ny43NyAwIDAwLjE5Ny0uMDI4elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNEQzg3NDRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNS4xMyAxNC4zMzRjMCAuNDEyLS43OTYuNzQ3LTEuNzc3Ljc0Ny0uOTggMC0xLjc3Ni0uMzM1LTEuNzc2LS43NDd2LS42MWgzLjU1MnYuNjF6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0Y2QzM1OFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEzLjM1MiAxNC40N2MuOTgyIDAgMS43NzctLjMzNCAxLjc3Ny0uNzQ3IDAtLjQxMi0uNzk1LS43NDctMS43NzctLjc0Ny0uOTggMC0xLjc3Ni4zMzUtMS43NzYuNzQ3IDAgLjQxMy43OTUuNzQ3IDEuNzc2Ljc0N3pcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjRkNENDYyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuMzUzIDEzLjEyMmMtLjg1NiAwLTEuNTUuMjctMS41NS42MDEgMCAuMzMyLjY5NC42MDEgMS41NS42MDEuODU2IDAgMS41NS0uMjY5IDEuNTUtLjYgMC0uMzMzLS42OTQtLjYwMi0xLjU1LS42MDJ6bTAgMS4xMzVjLS43NiAwLTEuMzc4LS4yMzktMS4zNzgtLjUzNCAwLS4yOTUuNjE3LS41MzQgMS4zNzgtLjUzNC43NjEgMCAxLjM3OC4yNCAxLjM3OC41MzQgMCAuMjk1LS42MTcuNTM0LTEuMzc4LjUzNHpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjREM4NzQ0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuMjk2IDE0LjEzOHYtLjA3M2EyLjI1NyAyLjI1NyAwIDAxLS42MzUtLjExbC4xODgtLjA4NmMuMTQ1LjA0OS4yOTQuMDc4LjQ0Ny4wODd2LS4xOTRhMi4xNjMgMi4xNjMgMCAwMS0uNDI3LS4wNzFjLS4wOS0uMDMtLjEzNi0uMDczLS4xMzYtLjEzMSAwLS4wNTguMDUyLS4xMDUuMTU2LS4xNDJhMS4zMyAxLjMzIDAgMDEuNDA3LS4wNnYtLjA1aC4xNjV2LjA1MWMuMTkuMDA1LjM2OS4wMy41MzguMDc1bC0uMTY4LjA5MmExLjc1MiAxLjc1MiAwIDAwLS4zNy0uMDU4di4xODhoLjAwOGMuMTk4LjAxOS4zNDQuMDQzLjQzNy4wNzQuMDkzLjAzLjE0LjA3NS4xNC4xMzMgMCAuMDU5LS4wNTQuMTA2LS4xNi4xNDNhMS40MTUgMS40MTUgMCAwMS0uNDI1LjA2di4wNzJoLS4xNjV6bS0uMTgyLS42NDZjLS4wNDQuMDE1LS4wNjYuMDMzLS4wNjYuMDU2IDAgLjAyMi4wMTcuMDQuMDUyLjA1My4wMzQuMDEzLjEuMDI1LjE5Ni4wMzd2LS4xNzNhLjY1OC42NTggMCAwMC0uMTgyLjAyN3ptLjU0NC40MzljLjA0OC0uMDE1LjA3Mi0uMDM1LjA3Mi0uMDU4cy0uMDE5LS4wNDItLjA1Ny0uMDU2YTEuMTEyIDEuMTEyIDAgMDAtLjIxMi0uMDM4di4xOGEuNzc1Ljc3NSAwIDAwLjE5Ny0uMDI4elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNEQzg3NDRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNS4xMyAxMy41OTJjMCAuNDEyLS43OTYuNzQ3LTEuNzc3Ljc0Ny0uOTggMC0xLjc3Ni0uMzM1LTEuNzc2LS43NDd2LS42MWgzLjU1MnYuNjF6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0Y2QzM1OFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEzLjM1MiAxMy43MjhjLjk4MiAwIDEuNzc3LS4zMzUgMS43NzctLjc0N3MtLjc5NS0uNzQ3LTEuNzc3LS43NDdjLS45OCAwLTEuNzc2LjMzNS0xLjc3Ni43NDdzLjc5NS43NDcgMS43NzYuNzQ3elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNGQ0Q0NjJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMy4zNTMgMTIuMzhjLS44NTYgMC0xLjU1LjI3LTEuNTUuNjAxIDAgLjMzMi42OTQuNjAxIDEuNTUuNjAxLjg1NiAwIDEuNTUtLjI2OSAxLjU1LS42IDAtLjMzMy0uNjk0LS42MDItMS41NS0uNjAyem0wIDEuMTM1Yy0uNzYgMC0xLjM3OC0uMjM5LTEuMzc4LS41MzQgMC0uMjk1LjYxNy0uNTM0IDEuMzc4LS41MzQuNzYxIDAgMS4zNzguMjQgMS4zNzguNTM0IDAgLjI5NS0uNjE3LjUzNC0xLjM3OC41MzR6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0RDODc0NFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEzLjI5NiAxMy4zOTZ2LS4wNzNhMi4yNiAyLjI2IDAgMDEtLjYzNS0uMTA5bC4xODgtLjA4N2MuMTQ1LjA0OS4yOTQuMDc4LjQ0Ny4wODd2LS4xOTRhMi4xNDggMi4xNDggMCAwMS0uNDI3LS4wNzFjLS4wOS0uMDMtLjEzNi0uMDczLS4xMzYtLjEzMSAwLS4wNTguMDUyLS4xMDUuMTU2LS4xNDIuMTA0LS4wMzcuMjQtLjA1Ny40MDctLjA2di0uMDVoLjE2NXYuMDUxYy4xOS4wMDUuMzY5LjAzLjUzOC4wNzVsLS4xNjguMDkyYTEuNzQ1IDEuNzQ1IDAgMDAtLjM3LS4wNTh2LjE4OGguMDA4Yy4xOTguMDE5LjM0NC4wNDMuNDM3LjA3NC4wOTMuMDMuMTQuMDc1LjE0LjEzMyAwIC4wNTktLjA1NC4xMDYtLjE2LjE0M2ExLjQyMSAxLjQyMSAwIDAxLS40MjUuMDZ2LjA3MmgtLjE2NXptLS4xODItLjY0NmMtLjA0NC4wMTUtLjA2Ni4wMzQtLjA2Ni4wNTZzLjAxNy4wNC4wNTIuMDUzYy4wMzQuMDEzLjEuMDI1LjE5Ni4wMzd2LS4xNzNhLjY1Ny42NTcgMCAwMC0uMTgyLjAyN3ptLjU0NC40MzljLjA0OC0uMDE1LjA3Mi0uMDM1LjA3Mi0uMDU4IDAtLjAyNC0uMDE5LS4wNDItLjA1Ny0uMDU2YTEuMTEgMS4xMSAwIDAwLS4yMTItLjAzOHYuMThhLjc2Ni43NjYgMCAwMC4xOTctLjAyOHpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjREM4NzQ0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTUuMTMgMTIuODVjMCAuNDEzLS43OTYuNzQ3LTEuNzc3Ljc0Ny0uOTggMC0xLjc3Ni0uMzM1LTEuNzc2LS43NDd2LS42MWgzLjU1MnYuNjF6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0Y2QzM1OFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEzLjM1MiAxMi45ODZjLjk4MiAwIDEuNzc3LS4zMzQgMS43NzctLjc0NyAwLS40MTItLjc5NS0uNzQ3LTEuNzc3LS43NDctLjk4IDAtMS43NzYuMzM1LTEuNzc2Ljc0NyAwIC40MTMuNzk1Ljc0NyAxLjc3Ni43NDd6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0ZDRDQ2MlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEzLjM1MyAxMS42MzhjLS44NTYgMC0xLjU1LjI3LTEuNTUuNjAxIDAgLjMzMi42OTQuNjAxIDEuNTUuNjAxLjg1NiAwIDEuNTUtLjI2OSAxLjU1LS42IDAtLjMzMy0uNjk0LS42MDItMS41NS0uNjAyem0wIDEuMTM1Yy0uNzYgMC0xLjM3OC0uMjM5LTEuMzc4LS41MzQgMC0uMjk1LjYxNy0uNTM0IDEuMzc4LS41MzQuNzYxIDAgMS4zNzguMjQgMS4zNzguNTM0IDAgLjI5NS0uNjE3LjUzNC0xLjM3OC41MzR6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0RDODc0NFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEzLjI5NiAxMi42NTR2LS4wNzNhMi4yNiAyLjI2IDAgMDEtLjYzNS0uMTA5bC4xODgtLjA4N2MuMTQ1LjA0OS4yOTQuMDc4LjQ0Ny4wODd2LS4xOTRhMi4xNDggMi4xNDggMCAwMS0uNDI3LS4wNzFjLS4wOS0uMDMtLjEzNi0uMDczLS4xMzYtLjEzMSAwLS4wNTguMDUyLS4xMDUuMTU2LS4xNDJhMS4zMyAxLjMzIDAgMDEuNDA3LS4wNnYtLjA1aC4xNjV2LjA1MWMuMTkuMDA1LjM2OS4wMy41MzguMDc1bC0uMTY4LjA5MmExLjc1MiAxLjc1MiAwIDAwLS4zNy0uMDU4di4xODloLjAwOGMuMTk4LjAxOC4zNDQuMDQyLjQzNy4wNzMuMDkzLjAzLjE0LjA3NS4xNC4xMzMgMCAuMDU5LS4wNTQuMTA3LS4xNi4xNDNhMS40MTUgMS40MTUgMCAwMS0uNDI1LjA2di4wNzJoLS4xNjV6bS0uMTgyLS42NDZjLS4wNDQuMDE1LS4wNjYuMDM0LS4wNjYuMDU2cy4wMTcuMDQuMDUyLjA1M2MuMDM0LjAxMy4xLjAyNS4xOTYuMDM4di0uMTc0YS42NTMuNjUzIDAgMDAtLjE4Mi4wMjd6bS41NDQuNDM5Yy4wNDgtLjAxNS4wNzItLjAzNS4wNzItLjA1OHMtLjAxOS0uMDQyLS4wNTctLjA1NmExLjExIDEuMTEgMCAwMC0uMjEyLS4wMzh2LjE4YS43NzUuNzc1IDAgMDAuMTk3LS4wMjh6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0RDODc0NFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE1LjEzIDEyLjEwOGMwIC40MTMtLjc5Ni43NDctMS43NzcuNzQ3LS45OCAwLTEuNzc2LS4zMzQtMS43NzYtLjc0N3YtLjYxaDMuNTUydi42MXpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjRjZDMzU4XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuMzUyIDEyLjI0NGMuOTgyIDAgMS43NzctLjMzNSAxLjc3Ny0uNzQ3cy0uNzk1LS43NDctMS43NzctLjc0N2MtLjk4IDAtMS43NzYuMzM1LTEuNzc2Ljc0N3MuNzk1Ljc0NyAxLjc3Ni43NDd6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0ZDRDQ2MlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEzLjM1MyAxMC44OTZjLS44NTYgMC0xLjU1LjI3LTEuNTUuNjAxIDAgLjMzMi42OTQuNjAxIDEuNTUuNjAxLjg1NiAwIDEuNTUtLjI2OSAxLjU1LS42IDAtLjMzMy0uNjk0LS42MDItMS41NS0uNjAyem0wIDEuMTM1Yy0uNzYgMC0xLjM3OC0uMjM5LTEuMzc4LS41MzQgMC0uMjk1LjYxNy0uNTM0IDEuMzc4LS41MzQuNzYxIDAgMS4zNzguMjQgMS4zNzguNTM0IDAgLjI5NS0uNjE3LjUzNC0xLjM3OC41MzR6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0RDODc0NFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEzLjI5NiAxMS45MTJ2LS4wNzNhMi4yNiAyLjI2IDAgMDEtLjYzNS0uMTA5bC4xODgtLjA4N2MuMTQ1LjA0OS4yOTQuMDc4LjQ0Ny4wODd2LS4xOTRhMi4xNjMgMi4xNjMgMCAwMS0uNDI3LS4wNzFjLS4wOS0uMDMtLjEzNi0uMDczLS4xMzYtLjEzIDAtLjA1OS4wNTItLjEwNi4xNTYtLjE0M2ExLjMzIDEuMzMgMCAwMS40MDctLjA2di0uMDVoLjE2NXYuMDUxYy4xOS4wMDYuMzY5LjAzLjUzOC4wNzVsLS4xNjguMDkyYTEuNzUyIDEuNzUyIDAgMDAtLjM3LS4wNTh2LjE4OWguMDA4Yy4xOTguMDE4LjM0NC4wNDIuNDM3LjA3My4wOTMuMDMuMTQuMDc1LjE0LjEzMyAwIC4wNTktLjA1NC4xMDYtLjE2LjE0M2ExLjQxNSAxLjQxNSAwIDAxLS40MjUuMDZ2LjA3MmgtLjE2NXptLS4xODItLjY0NmMtLjA0NC4wMTUtLjA2Ni4wMzQtLjA2Ni4wNTZzLjAxNy4wNC4wNTIuMDUzYy4wMzQuMDEzLjEuMDI2LjE5Ni4wMzh2LS4xNzRhLjY1OC42NTggMCAwMC0uMTgyLjAyN3ptLjU0NC40NGMuMDQ4LS4wMTYuMDcyLS4wMzYuMDcyLS4wNTlzLS4wMTktLjA0Mi0uMDU3LS4wNTZhMS4xMSAxLjExIDAgMDAtLjIxMi0uMDM4di4xOGEuNzc1Ljc3NSAwIDAwLjE5Ny0uMDI4elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNEQzg3NDRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xOC44NzUgMTcuMzAyYzAgLjQxMi0uNzk1Ljc0Ny0xLjc3Ni43NDdzLTEuNzc2LS4zMzUtMS43NzYtLjc0N3YtLjYxMWgzLjU1MnYuNjF6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0Y2QzM1OFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE3LjEgMTcuNDM4Yy45ODEgMCAxLjc3Ni0uMzM1IDEuNzc2LS43NDdzLS43OTUtLjc0Ny0xLjc3Ni0uNzQ3LTEuNzc2LjMzNS0xLjc3Ni43NDcuNzk1Ljc0NyAxLjc3Ni43NDd6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0ZDRDQ2MlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE3LjA5OSAxNi4wOWMtLjg1NiAwLTEuNTUuMjY5LTEuNTUuNiAwIC4zMzMuNjk0LjYwMiAxLjU1LjYwMi44NTYgMCAxLjU1LS4yNyAxLjU1LS42MDEgMC0uMzMyLS42OTQtLjYwMS0xLjU1LS42MDF6bTAgMS4xMzVjLS43NjEgMC0xLjM3OC0uMjQtMS4zNzgtLjUzNCAwLS4yOTUuNjE3LS41MzQgMS4zNzgtLjUzNC43NiAwIDEuMzc4LjIzOSAxLjM3OC41MzQgMCAuMjk1LS42MTcuNTM0LTEuMzc4LjUzNHpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjREM4NzQ0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTcuMDQyIDE3LjEwNnYtLjA3M2EyLjI2IDIuMjYgMCAwMS0uNjM2LS4xMWwuMTg5LS4wODZjLjE0NS4wNDguMjk0LjA3Ny40NDcuMDg3di0uMTk1YTIuMTQ4IDIuMTQ4IDAgMDEtLjQyOC0uMDdjLS4wOS0uMDMtLjEzNS0uMDc0LS4xMzUtLjEzMSAwLS4wNTguMDUyLS4xMDUuMTU2LS4xNDIuMTA0LS4wMzcuMjQtLjA1Ny40MDctLjA2di0uMDVoLjE2NXYuMDVjLjE5LjAwNi4zNjkuMDMxLjUzOC4wNzZsLS4xNjguMDkyYTEuNzQ1IDEuNzQ1IDAgMDAtLjM3LS4wNTh2LjE4OGguMDA4Yy4xOTguMDE4LjM0My4wNDMuNDM2LjA3My4wOTQuMDMxLjE0LjA3Ni4xNC4xMzQgMCAuMDU5LS4wNTMuMTA2LS4xNi4xNDNhMS40MTcgMS40MTcgMCAwMS0uNDI0LjA2di4wNzJoLS4xNjV6bS0uMTgyLS42NDdjLS4wNDQuMDE1LS4wNjYuMDM0LS4wNjYuMDU2IDAgLjAyMy4wMTcuMDQuMDUyLjA1NC4wMzQuMDEzLjEuMDI1LjE5Ni4wMzd2LS4xNzNhLjY1Ni42NTYgMCAwMC0uMTgyLjAyNnptLjU0NC40NGMuMDQ4LS4wMTYuMDcyLS4wMzUuMDcyLS4wNTkgMC0uMDIzLS4wMTktLjA0MS0uMDU3LS4wNTVhMS4xMTMgMS4xMTMgMCAwMC0uMjEyLS4wMzl2LjE4YS43NjguNzY4IDAgMDAuMTk3LS4wMjd6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0RDODc0NFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE4Ljg3NSAxNi41NmMwIC40MTItLjc5NS43NDctMS43NzYuNzQ3cy0xLjc3Ni0uMzM1LTEuNzc2LS43NDd2LS42MTFoMy41NTJ2LjYxelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNGNkMzNThcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNy4xIDE2LjY5NWMuOTgxIDAgMS43NzYtLjMzNCAxLjc3Ni0uNzQ2IDAtLjQxMy0uNzk1LS43NDctMS43NzYtLjc0N3MtMS43NzYuMzM0LTEuNzc2Ljc0N2MwIC40MTIuNzk1Ljc0NiAxLjc3Ni43NDZ6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0ZDRDQ2MlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE3LjA5OSAxNS4zNDhjLS44NTYgMC0xLjU1LjI2OS0xLjU1LjYgMCAuMzMzLjY5NC42MDIgMS41NS42MDIuODU2IDAgMS41NS0uMjcgMS41NS0uNjAxIDAtLjMzMi0uNjk0LS42MDEtMS41NS0uNjAxem0wIDEuMTM1Yy0uNzYxIDAtMS4zNzgtLjI0LTEuMzc4LS41MzQgMC0uMjk1LjYxNy0uNTM0IDEuMzc4LS41MzQuNzYgMCAxLjM3OC4yMzkgMS4zNzguNTM0IDAgLjI5NS0uNjE3LjUzNC0xLjM3OC41MzR6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0RDODc0NFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE3LjA0MiAxNi4zNjR2LS4wNzNhMi4yNiAyLjI2IDAgMDEtLjYzNi0uMTFsLjE4OS0uMDg2Yy4xNDUuMDQ4LjI5NC4wNzcuNDQ3LjA4N3YtLjE5NGEyLjE0OCAyLjE0OCAwIDAxLS40MjgtLjA3MmMtLjA5LS4wMjktLjEzNS0uMDcyLS4xMzUtLjEzIDAtLjA1OC4wNTItLjEwNS4xNTYtLjE0MmExLjMzIDEuMzMgMCAwMS40MDctLjA2di0uMDVoLjE2NXYuMDVjLjE5LjAwNi4zNjkuMDMxLjUzOC4wNzZsLS4xNjguMDkyYTEuNzQ1IDEuNzQ1IDAgMDAtLjM3LS4wNTh2LjE4OGguMDA4Yy4xOTguMDE4LjM0My4wNDMuNDM2LjA3My4wOTQuMDMxLjE0LjA3Ni4xNC4xMzQgMCAuMDU5LS4wNTMuMTA2LS4xNi4xNDNhMS40MiAxLjQyIDAgMDEtLjQyNC4wNnYuMDcyaC0uMTY1em0tLjE4Mi0uNjQ2Yy0uMDQ0LjAxNC0uMDY2LjAzMy0uMDY2LjA1NiAwIC4wMjIuMDE3LjA0LjA1Mi4wNTMuMDM0LjAxMy4xLjAyNS4xOTYuMDM3di0uMTczYS42NTIuNjUyIDAgMDAtLjE4Mi4wMjd6bS41NDQuNDM5Yy4wNDgtLjAxNi4wNzItLjAzNS4wNzItLjA1OCAwLS4wMjQtLjAxOS0uMDQyLS4wNTctLjA1NmExLjExMyAxLjExMyAwIDAwLS4yMTItLjAzOHYuMThhLjc2OC43NjggMCAwMC4xOTctLjAyOHpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjREM4NzQ0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTguODc1IDE1LjgxOGMwIC40MTItLjc5NS43NDctMS43NzYuNzQ3cy0xLjc3Ni0uMzM1LTEuNzc2LS43NDd2LS42MTFoMy41NTJ2LjYxelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNGNkMzNThcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNy4xIDE1Ljk1NGMuOTgxIDAgMS43NzYtLjMzNSAxLjc3Ni0uNzQ3cy0uNzk1LS43NDctMS43NzYtLjc0Ny0xLjc3Ni4zMzUtMS43NzYuNzQ3Ljc5NS43NDcgMS43NzYuNzQ3elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNGQ0Q0NjJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNy4wOTkgMTQuNjA2Yy0uODU2IDAtMS41NS4yNy0xLjU1LjYwMSAwIC4zMzIuNjk0LjYgMS41NS42Ljg1NiAwIDEuNTUtLjI2OCAxLjU1LS42IDAtLjMzMi0uNjk0LS42MDEtMS41NS0uNjAxem0wIDEuMTM1Yy0uNzYxIDAtMS4zNzgtLjIzOS0xLjM3OC0uNTM0IDAtLjI5NS42MTctLjUzNCAxLjM3OC0uNTM0Ljc2IDAgMS4zNzguMjM5IDEuMzc4LjUzNCAwIC4yOTUtLjYxNy41MzQtMS4zNzguNTM0elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNEQzg3NDRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNy4wNDIgMTUuNjIydi0uMDczYTIuMjYgMi4yNiAwIDAxLS42MzYtLjExbC4xODktLjA4NmMuMTQ1LjA0OS4yOTQuMDc4LjQ0Ny4wODd2LS4xOTRhMi4xNjMgMi4xNjMgMCAwMS0uNDI4LS4wNzJjLS4wOS0uMDI5LS4xMzUtLjA3Mi0uMTM1LS4xMyAwLS4wNTguMDUyLS4xMDUuMTU2LS4xNDIuMTA0LS4wMzcuMjQtLjA1Ny40MDctLjA2di0uMDVoLjE2NXYuMDVjLjE5LjAwNi4zNjkuMDMxLjUzOC4wNzZsLS4xNjguMDkyYTEuNzUyIDEuNzUyIDAgMDAtLjM3LS4wNTh2LjE4OGguMDA4Yy4xOTguMDE4LjM0My4wNDMuNDM2LjA3My4wOTQuMDMxLjE0LjA3Ni4xNC4xMzQgMCAuMDU5LS4wNTMuMTA2LS4xNi4xNDNhMS40MTQgMS40MTQgMCAwMS0uNDI0LjA2di4wNzJoLS4xNjV6bS0uMTgyLS42NDZjLS4wNDQuMDE1LS4wNjYuMDMzLS4wNjYuMDU2IDAgLjAyMi4wMTcuMDQuMDUyLjA1My4wMzQuMDEzLjEuMDI1LjE5Ni4wMzd2LS4xNzNhLjY1Ni42NTYgMCAwMC0uMTgyLjAyN3ptLjU0NC40MzljLjA0OC0uMDE2LjA3Mi0uMDM1LjA3Mi0uMDU4IDAtLjAyNC0uMDE5LS4wNDItLjA1Ny0uMDU2YTEuMTEzIDEuMTEzIDAgMDAtLjIxMi0uMDM5di4xOGEuNzcyLjc3MiAwIDAwLjE5Ny0uMDI3elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNEQzg3NDRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xOC44NzUgMTUuMDc2YzAgLjQxMi0uNzk1Ljc0Ny0xLjc3Ni43NDdzLTEuNzc2LS4zMzUtMS43NzYtLjc0N3YtLjYxMWgzLjU1MnYuNjF6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0Y2QzM1OFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE3LjEgMTUuMjExYy45ODEgMCAxLjc3Ni0uMzM0IDEuNzc2LS43NDYgMC0uNDEzLS43OTUtLjc0Ny0xLjc3Ni0uNzQ3cy0xLjc3Ni4zMzQtMS43NzYuNzQ3YzAgLjQxMi43OTUuNzQ2IDEuNzc2Ljc0NnpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjRkNENDYyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTcuMDk5IDEzLjg2NGMtLjg1NiAwLTEuNTUuMjctMS41NS42MDEgMCAuMzMyLjY5NC42IDEuNTUuNi44NTYgMCAxLjU1LS4yNjggMS41NS0uNiAwLS4zMzItLjY5NC0uNjAxLTEuNTUtLjYwMXptMCAxLjEzNWMtLjc2MSAwLTEuMzc4LS4yMzktMS4zNzgtLjUzNCAwLS4yOTUuNjE3LS41MzQgMS4zNzgtLjUzNC43NiAwIDEuMzc4LjIzOSAxLjM3OC41MzQgMCAuMjk1LS42MTcuNTM0LTEuMzc4LjUzNHpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjREM4NzQ0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTcuMDQyIDE0Ljg4di0uMDczYTIuMjYgMi4yNiAwIDAxLS42MzYtLjExbC4xODktLjA4NmMuMTQ1LjA0OC4yOTQuMDc3LjQ0Ny4wODd2LS4xOTRhMi4xNTcgMi4xNTcgMCAwMS0uNDI4LS4wNzJjLS4wOS0uMDI5LS4xMzUtLjA3Mi0uMTM1LS4xMyAwLS4wNTguMDUyLS4xMDUuMTU2LS4xNDIuMTA0LS4wMzcuMjQtLjA1Ny40MDctLjA2di0uMDVoLjE2NXYuMDVjLjE5LjAwNi4zNjkuMDMxLjUzOC4wNzZsLS4xNjguMDkyYTEuNzUyIDEuNzUyIDAgMDAtLjM3LS4wNTh2LjE4OGguMDA4Yy4xOTguMDE4LjM0My4wNDMuNDM2LjA3NC4wOTQuMDMuMTQuMDc1LjE0LjEzMyAwIC4wNTktLjA1My4xMDYtLjE2LjE0M2ExLjQxNyAxLjQxNyAwIDAxLS40MjQuMDZ2LjA3MmgtLjE2NXptLS4xODItLjY0NmMtLjA0NC4wMTUtLjA2Ni4wMzMtLjA2Ni4wNTYgMCAuMDIyLjAxNy4wNC4wNTIuMDUzLjAzNC4wMTMuMS4wMjUuMTk2LjAzN3YtLjE3M2EuNjUyLjY1MiAwIDAwLS4xODIuMDI3em0uNTQ0LjQzOWMuMDQ4LS4wMTYuMDcyLS4wMzUuMDcyLS4wNTggMC0uMDI0LS4wMTktLjA0Mi0uMDU3LS4wNTZhMS4xMTMgMS4xMTMgMCAwMC0uMjEyLS4wMzh2LjE4YS43NzIuNzcyIDAgMDAuMTk3LS4wMjh6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0RDODc0NFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE4Ljg3NSAxNC4zMzRjMCAuNDEyLS43OTUuNzQ3LTEuNzc2Ljc0N3MtMS43NzYtLjMzNS0xLjc3Ni0uNzQ3di0uNjFoMy41NTJ2LjYxelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNGNkMzNThcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNy4xIDE0LjQ3Yy45ODEgMCAxLjc3Ni0uMzM0IDEuNzc2LS43NDcgMC0uNDEyLS43OTUtLjc0Ny0xLjc3Ni0uNzQ3cy0xLjc3Ni4zMzUtMS43NzYuNzQ3YzAgLjQxMy43OTUuNzQ3IDEuNzc2Ljc0N3pcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjRkNENDYyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTcuMDk5IDEzLjEyMmMtLjg1NiAwLTEuNTUuMjctMS41NS42MDEgMCAuMzMyLjY5NC42MDEgMS41NS42MDEuODU2IDAgMS41NS0uMjY5IDEuNTUtLjYgMC0uMzMzLS42OTQtLjYwMi0xLjU1LS42MDJ6bTAgMS4xMzVjLS43NjEgMC0xLjM3OC0uMjM5LTEuMzc4LS41MzQgMC0uMjk1LjYxNy0uNTM0IDEuMzc4LS41MzQuNzYgMCAxLjM3OC4yNCAxLjM3OC41MzQgMCAuMjk1LS42MTcuNTM0LTEuMzc4LjUzNHpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjREM4NzQ0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTcuMDQyIDE0LjEzOHYtLjA3M2EyLjI1NyAyLjI1NyAwIDAxLS42MzYtLjExbC4xODktLjA4NmMuMTQ1LjA0OS4yOTQuMDc4LjQ0Ny4wODd2LS4xOTRhMi4xNjMgMi4xNjMgMCAwMS0uNDI4LS4wNzFjLS4wOS0uMDMtLjEzNS0uMDczLS4xMzUtLjEzMSAwLS4wNTguMDUyLS4xMDUuMTU2LS4xNDJhMS4zMyAxLjMzIDAgMDEuNDA3LS4wNnYtLjA1aC4xNjV2LjA1MWMuMTkuMDA1LjM2OS4wMy41MzguMDc1bC0uMTY4LjA5MmExLjc1MiAxLjc1MiAwIDAwLS4zNy0uMDU4di4xODhoLjAwOGMuMTk4LjAxOS4zNDMuMDQzLjQzNi4wNzQuMDk0LjAzLjE0LjA3NS4xNC4xMzMgMCAuMDU5LS4wNTMuMTA2LS4xNi4xNDNhMS40MTQgMS40MTQgMCAwMS0uNDI0LjA2di4wNzJoLS4xNjV6bS0uMTgyLS42NDZjLS4wNDQuMDE1LS4wNjYuMDMzLS4wNjYuMDU2IDAgLjAyMi4wMTcuMDQuMDUyLjA1My4wMzQuMDEzLjEuMDI1LjE5Ni4wMzd2LS4xNzNhLjY1Ni42NTYgMCAwMC0uMTgyLjAyN3ptLjU0NC40MzljLjA0OC0uMDE1LjA3Mi0uMDM1LjA3Mi0uMDU4cy0uMDE5LS4wNDItLjA1Ny0uMDU2YTEuMTE1IDEuMTE1IDAgMDAtLjIxMi0uMDM4di4xOGEuNzc3Ljc3NyAwIDAwLjE5Ny0uMDI4elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNEQzg3NDRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMy45NTMgMTguMDQ3YTEuOTU1IDEuOTU1IDAgMTAwLTMuOTEgMS45NTUgMS45NTUgMCAwMDAgMy45MXpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjRkNENDYyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuOTUzIDE0LjM4N2ExLjcwNiAxLjcwNiAwIDEwMCAzLjQxMyAxLjcwNiAxLjcwNiAwIDAwMC0zLjQxM3ptMCAzLjIyM2ExLjUxNyAxLjUxNyAwIDExMC0zLjAzMyAxLjUxNyAxLjUxNyAwIDAxMCAzLjAzM3pcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjREM4NzQ0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuODkgMTcuMjcydi0uMjA3YTEuMjM1IDEuMjM1IDAgMDEtLjctLjMxbC4yMDktLjI0OGMuMTU5LjEzOC4zMjMuMjIxLjQ5Mi4yNDh2LS41NTJjLS4yMTUtLjA1MS0uMzcyLS4xMTktLjQ3MS0uMjAyLS4xLS4wODQtLjE1LS4yMDctLjE1LS4zNzFhLjUyLjUyIDAgMDEuMTczLS40MDMuNjk2LjY5NiAwIDAxLjQ0Ny0uMTd2LS4xNDNoLjE4MnYuMTQ2Yy4yMDkuMDE1LjQwNi4wODYuNTkyLjIxM2wtLjE4NS4yNjFhLjkxNy45MTcgMCAwMC0uNDA3LS4xNjV2LjUzNWguMDA5Yy4yMTguMDUxLjM3OC4xMi40OC4yMDguMTAzLjA4Ny4xNTQuMjE0LjE1NC4zOGEuNTE3LjUxNyAwIDAxLS4xNzYuNDA1LjczNC43MzQgMCAwMS0uNDY3LjE3di4yMDVoLS4xODF6bS0uMi0xLjgzNmEuMjAzLjIwMyAwIDAwLS4wNzMuMTYuMi4yIDAgMDAuMDU3LjE1Yy4wMzguMDM3LjExLjA3My4yMTYuMTA3di0uNDkyYS4zNC4zNCAwIDAwLS4yLjA3NXptLjU5OSAxLjI0N2EuMjA1LjIwNSAwIDAwLjA4LS4xNjUuMjA1LjIwNSAwIDAwLS4wNjMtLjE1Ny42Mi42MiAwIDAwLS4yMzQtLjExdi41MTJhLjM5Ny4zOTcgMCAwMC4yMTctLjA4elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNEQzg3NDRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdNb25leVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z01vcmUocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMy43NSA4LjU0MmMtLjgwNCAwLTEuNDU4LjY1NS0xLjQ1OCAxLjQ1OGExLjQ2IDEuNDYgMCAwMDEuNDU4IDEuNDU4Yy44MDMgMCAxLjQ1OC0uNjU1IDEuNDU4LTEuNDU4IDAtLjgwMy0uNjU1LTEuNDU4LTEuNDU4LTEuNDU4em0wIDIuMDgzYS42MjUuNjI1IDAgMTEwLTEuMjUuNjI1LjYyNSAwIDAxMCAxLjI1ek0xMCA4LjU0MkExLjQ2IDEuNDYgMCAwMDguNTQyIDEwYzAgLjgwMy42NTQgMS40NTggMS40NTggMS40NThBMS40NiAxLjQ2IDAgMDAxMS40NTggMTAgMS40NiAxLjQ2IDAgMDAxMCA4LjU0MnptMCAyLjA4M2EuNjI1LjYyNSAwIDExMC0xLjI1LjYyNS42MjUgMCAwMTAgMS4yNXpNNi4yNSA4LjU0MmMtLjgwNCAwLTEuNDU4LjY1NS0xLjQ1OCAxLjQ1OCAwIC44MDMuNjU0IDEuNDU4IDEuNDU4IDEuNDU4LjgwMyAwIDEuNDU4LS42NTUgMS40NTgtMS40NTggMC0uODAzLS42NTUtMS40NTgtMS40NTgtMS40NTh6bTAgMi4wODNhLjYyNS42MjUgMCAxMTAtMS4yNS42MjUuNjI1IDAgMDEwIDEuMjV6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTAgMTguOTU4Yy00Ljk0IDAtOC45NTgtNC4wMTgtOC45NTgtOC45NThTNS4wNiAxLjA0MiAxMCAxLjA0MiAxOC45NTggNS4wNiAxOC45NTggMTAgMTQuOTQgMTguOTU4IDEwIDE4Ljk1OHptMC0xNi42NjZDNS43NSAyLjI5MiAyLjI5MiA1Ljc1IDIuMjkyIDEwUzUuNzUgMTcuNzA4IDEwIDE3LjcwOCAxNy43MDggMTQuMjUgMTcuNzA4IDEwIDE0LjI1IDIuMjkyIDEwIDIuMjkyelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z01vcmVcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdOb3RpZmljYXRpb24ocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xOC4wOCAxMy43MjNjLS4wMTYtLjAxMy0xLjc4Mi0xLjM2Ni0xLjc1Mi01LjAyNS4wMTctMi4xMS0uNjc2LTMuOTg1LTEuOTU1LTUuMjc5LTEuMTQ2LTEuMTYtMi42OTgtMS44MDItNC4zNjktMS44MWgtLjAxYy0xLjY3LjAwOC0zLjIyMi42NS00LjM2OSAxLjgxMUM0LjM0NyA0LjcxNCAzLjY1MiA2LjU4OCAzLjY3IDguNjk4Yy4wMyAzLjYwOS0xLjY4MyA0Ljk3My0xLjc1MiA1LjAyNWEuNjI2LjYyNiAwIDAwLjM3MyAxLjEyOGg0LjFhMy42MiAzLjYyIDAgMDAzLjYwOCAzLjQ2NmMxLjk0NCAwIDMuNTIyLTEuNTQxIDMuNjA2LTMuNDY2aDQuMTAyYS42MjEuNjIxIDAgMDAuNTkxLS40MjkuNjIzLjYyMyAwIDAwLS4yMTktLjY5OGguMDAyek0xMCAxNy4wNjVhMi4zNjcgMi4zNjcgMCAwMS0yLjM1Ny0yLjIxNWg0LjcxNEEyLjM3IDIuMzcgMCAwMTEwIDE3LjA2N3YtLjAwMnpNMy42NSAxMy42Yy42MTctLjk0MyAxLjI5LTIuNTIzIDEuMjctNC45MTMtLjAxNS0xLjguNTM3LTMuMzE5IDEuNTk0LTQuMzkuOTExLS45MjIgMi4xNS0xLjQzMyAzLjQ4Ni0xLjQzOSAxLjMzNi4wMDcgMi41NzIuNTE3IDMuNDgzIDEuNDQgMS4wNTkgMS4wNzEgMS42MTEgMi41ODkgMS41OTYgNC4zOS0uMDIgMi4zOS42NTQgMy45NyAxLjI3MSA0LjkxM0gzLjY1VjEzLjZ6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnTm90aWZpY2F0aW9uXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnTm90aWZpY2F0aW9uRmlsbChwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE4LjA4IDEzLjcyM2MtLjAxNi0uMDEzLTEuNzgyLTEuMzY2LTEuNzUyLTUuMDI1LjAxNy0yLjExLS42NzYtMy45ODUtMS45NTUtNS4yNzgtMS4xNDYtMS4xNi0yLjY5OC0xLjgwMy00LjM2OS0xLjgxaC0uMDFjLTEuNjcuMDA3LTMuMjIyLjY1LTQuMzY5IDEuODFDNC4zNDcgNC43MTQgMy42NTIgNi41ODggMy42NyA4LjY5N2MuMDMgMy42MS0xLjY4MyA0Ljk3My0xLjc1MiA1LjAyNmEuNjI2LjYyNiAwIDAwLjM3NCAxLjEyN2gzLjc0NUM2LjEyIDE2Ljk3IDcuODYgMTguNjcyIDEwIDE4LjY3MnMzLjg4LTEuNzAyIDMuOTYzLTMuODIyaDMuNzQ1YS42MjUuNjI1IDAgMDAuMzczLTEuMTI3ek0xMCAxNy4wMDdhMi4zMSAyLjMxIDAgMDEtMi4yOTctMi4xNTdoNC41OTRBMi4zMSAyLjMxIDAgMDExMCAxNy4wMDZ6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnTm90aWZpY2F0aW9uRmlsbFxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z1Byb2R1Y3RzKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgZGF0YS1uYW1lPVwiTGF5ZXIgMVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIlxuICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTQ3Mi45MTYgMjI0aC0yNC45MDlhMjQuNTM0IDI0LjUzNCAwIDAwLTIzLjQxNy0xOEgzOTh2LTY1LjAyNGE2Ljg2IDYuODYgMCAwMC0zLjM0Ni02LjA2MkwyMDcuMDc3IDI2LjU3MmE2LjkyNyA2LjkyNyAwIDAwLTYuOTYyIDBMMTIuNDggMTM0LjkxNEE2Ljk4MSA2Ljk4MSAwIDAwOSAxNDAuOTc2djIxNi42ODVhNyA3IDAgMDAzLjUgNi4wNjJsMTg3LjY1NCAxMDguMzQyYTcgNyAwIDAwMy41LjkzOCA3LjM2MSA3LjM2MSAwIDAwMy42LS45MzhMMzA2IDQxNS4xMDh2NDEuMTc0QTI5LjY0MiAyOS42NDIgMCAwMDMzNS44OTEgNDg2aDEzNy4wMjVBMjkuODA3IDI5LjgwNyAwIDAwNTAzIDQ1Ni4yODJ2LTIwMi4xQTMwLjIgMzAuMiAwIDAwNDcyLjkxNiAyMjR6bS00OC4wNzctNEExMC4xNjEgMTAuMTYxIDAgMDE0MzUgMjMwLjE2MXYuNjc4QTEwLjE2MSAxMC4xNjEgMCAwMTQyNC44MzkgMjQxaC00MC42NzhBMTAuMTYxIDEwLjE2MSAwIDAxMzc0IDIzMC44Mzl2LS42NzhBMTAuMTYxIDEwLjE2MSAwIDAxMzg0LjE2MSAyMjB6TTIwMy42NTQgNDAuNzE3bDc3Ljk3NCA0NS4wMTgtMTczLjY0MiAxMDAuMjUyLTc3Ljk3My00NS4wMTh6TTE5NyA0NTMuODc4TDIzIDM1My42MTlWMTUzLjA4NWwxNzQgMTAwLjI1OXptNi42NTQtMjEyLjY1OGwtODEuNjY4LTQ3LjE1MUwyOTUuNjI4IDkzLjgxOGw4MS42NzIgNDcuMTUxek0zMDYgMjU0LjE4MnYxNDQuNzYxbC05NSA1NC45MzVWMjUzLjM0NGwxNzMtMTAwLjI1OVYyMDZoLjIxN2EyNC41MzMgMjQuNTMzIDAgMDAtMjMuNDE3IDE4aC0yNC45MDlBMzAuMDM3IDMwLjAzNyAwIDAwMzA2IDI1NC4xODJ6bTE4MyAyMDIuMUExNS43OTMgMTUuNzkzIDAgMDE0NzIuOTE2IDQ3MkgzMzUuODkxQTE1LjYyOCAxNS42MjggMCAwMTMyMCA0NTYuMjgydi0yMDIuMUExNi4wMjIgMTYuMDIyIDAgMDEzMzUuODkxIDIzOGgyNS4xODJhMjMuOTQ0IDIzLjk0NCAwIDAwMjMuMTQ0IDE3aDQwLjM3M2EyMy45NDIgMjMuOTQyIDAgMDAyMy4xNDMtMTdoMjUuMTgzQTE2LjE4NiAxNi4xODYgMCAwMTQ4OSAyNTQuMTgyelwiIC8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTM0My45NDkgMzI1aDcuMzI3YTcgNyAwIDEwMC0xNEgzNTF2LTE5aDE5LjMwN2E2LjczOSA2LjczOSAwIDAwNi42NTUgNC43MjcgNy4wMTkgNy4wMTkgMCAwMDcuMDM4LTYuOTg0di00LjcxYTcuMDkzIDcuMDkzIDAgMDAtNy4wNzYtNy4wMzNoLTMyLjk3NWE2Ljk4NSA2Ljk4NSAwIDAwLTYuOTQ5IDcuMDMzdjMyLjk3NWE2Ljk1IDYuOTUgMCAwMDYuOTQ5IDYuOTkyek0zNDQgMzg5aDMzYTcgNyAwIDAwNy03di0zM2E3IDcgMCAwMC03LTdoLTMzYTcgNyAwIDAwLTcgN3YzM2E3IDcgMCAwMDcgN3ptNy0zM2gxOXYxOWgtMTl6TTM1MS4yNzcgNDM5SDM1MXYtMTloMTguOTI5YTcuMDM3IDcuMDM3IDAgMDAxNC4wNzEuMDE0di02Ljc0NWE3LjMgNy4zIDAgMDAtNy4wNzYtNy4yNjloLTMyLjk3NWE3LjE5MSA3LjE5MSAwIDAwLTYuOTQ5IDcuMjY5djMyLjk3NWE2Ljc1MiA2Ljc1MiAwIDAwNi45NDkgNi43NTZoNy4zMjhhNyA3IDAgMTAwLTE0elwiIC8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTM5My4wNDEgMjg2LjU5MmwtMjAuNSAyMC41LTYuMjM2LTYuMjM3YTcgNyAwIDEwLTkuOSA5LjlsMTEuMTg3IDExLjE4NmE3IDcgMCAwMDkuOSAwbDI1LjQ1Mi0yNS40NTJhNyA3IDAgMDAtOS45LTkuOXpNMzkzLjA0MSA0MTUuODQxbC0yMC41IDIwLjUtNi4yMzYtNi4yMzdhNyA3IDAgMTAtOS45IDkuOWwxMS4xODcgMTEuMTg2YTcgNyAwIDAwOS45IDBsMjUuNDUyLTI1LjQ1MmE3IDcgMCAwMC05LjktOS45ek00NjQuODU3IDI5NWgtNDMuOTY2YTcgNyAwIDAwMCAxNGg0My45NjZhNyA3IDAgMDAwLTE0ek00NjQuODU3IDM1OWgtNDMuOTY2YTcgNyAwIDAwMCAxNGg0My45NjZhNyA3IDAgMDAwLTE0ek00NjQuODU3IDQyM2gtNDMuOTY2YTcgNyAwIDAwMCAxNGg0My45NjZhNyA3IDAgMDAwLTE0elwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnUHJvZHVjdHNcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdQcm9kdWN0c0ZpbGwocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgey4uLnByb3BzfT5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNmZmZcIlxuICAgICAgICAgICAgICAgIGRhdGEtb3JpZ2luYWw9XCIjMDAwMDAwXCJcbiAgICAgICAgICAgICAgICBkPVwiTTIwMy42NTQgMjQxLjIybDE3My42NDItMTAwLjI1MS04MS42NjgtNDcuMTUxLTE3My42NDIgMTAwLjI1MSA4MS42NjggNDcuMTUxek0xOTcgMjUzLjM0NEwyMyAxNTMuMDg1djIwMC41MzRsMTc0IDEwMC4yNTlWMjUzLjM0NHpNMzUxIDM1NmgxOXYxOWgtMTl6TTIxMSAyNTMuMzQ0djIwMC41MzRsOTUtNTQuOTM1VjI1NC4xODJBMzAuMDM3IDMwLjAzNyAwIDAxMzM1Ljg5MSAyMjRIMzYwLjhhMjQuNTMzIDI0LjUzMyAwIDAxMjMuNDE3LTE4SDM4NHYtNTIuOTE1elwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICB4PXszNzR9XG4gICAgICAgICAgICAgICAgeT17MjIwfVxuICAgICAgICAgICAgICAgIHdpZHRoPXs2MX1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezIxfVxuICAgICAgICAgICAgICAgIHJ4PXsxMC4xNjF9XG4gICAgICAgICAgICAgICAgZmlsbD1cIiNmZmZcIlxuICAgICAgICAgICAgICAgIGRhdGEtb3JpZ2luYWw9XCIjMDAwMDAwXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgICAgICAgICAgICBkYXRhLW9yaWdpbmFsPVwiIzAwMDAwMFwiXG4gICAgICAgICAgICAgICAgZD1cIk0yODEuNjI4IDg1LjczNWwtNzcuOTc0LTQ1LjAxOEwzMC4wMTMgMTQwLjk2OWw3Ny45NzMgNDUuMDE4TDI4MS42MjggODUuNzM1ek00NzIuOTE2IDIzOGgtMjUuMTgzYTIzLjk0MiAyMy45NDIgMCAwMS0yMy4xNDMgMTdoLTQwLjM3M2EyMy45NDQgMjMuOTQ0IDAgMDEtMjMuMTQ0LTE3aC0yNS4xODJBMTYuMDIyIDE2LjAyMiAwIDAwMzIwIDI1NC4xODJ2MjAyLjFBMTUuNjI4IDE1LjYyOCAwIDAwMzM1Ljg5MSA0NzJoMTM3LjAyNUExNS43OTMgMTUuNzkzIDAgMDA0ODkgNDU2LjI4MnYtMjAyLjFBMTYuMTg2IDE2LjE4NiAwIDAwNDcyLjkxNiAyMzh6TTMzNyAyODUuMDMzYTYuOTg1IDYuOTg1IDAgMDE2Ljk0OS03LjAzM2gzMi45NzVhNy4wOTMgNy4wOTMgMCAwMTcuMDc2IDcuMDMzdjQuNzFhNy4wMTkgNy4wMTkgMCAwMS03LjAzOCA2Ljk4NCA2LjczOSA2LjczOSAwIDAxLTYuNjU1LTQuNzI3SDM1MXYxOWguMjc2YTcgNyAwIDExMCAxNGgtNy4zMjdhNi45NSA2Ljk1IDAgMDEtNi45NDktNi45OTJ6TTMzNyAzNDlhNyA3IDAgMDE3LTdoMzNhNyA3IDAgMDE3IDd2MzNhNyA3IDAgMDEtNyA3aC0zM2E3IDcgMCAwMS03LTd6bTE0LjI3NyAxMDRoLTcuMzI4YTYuNzUyIDYuNzUyIDAgMDEtNi45NDktNi43NTZ2LTMyLjk3NWE3LjE5MSA3LjE5MSAwIDAxNi45NDktNy4yNjloMzIuOTc1YTcuMyA3LjMgMCAwMTcuMDc2IDcuMjY5djYuNzQ1YTcuMDM3IDcuMDM3IDAgMDEtMTQuMDcxLS4wMTRIMzUxdjE5aC4yNzdhNyA3IDAgMTEwIDE0em01MS42NjQtMjcuMjU5bC0yNS40NTIgMjUuNDUyYTcgNyAwIDAxLTkuOSAwTDM1Ni40IDQ0MC4wMDdhNyA3IDAgMTE5LjktOS45bDYuMjM2IDYuMjM3IDIwLjUtMjAuNWE3IDcgMCAwMTkuOSA5Ljl6bTAtMTI5LjI0OWwtMjUuNDUyIDI1LjQ1MmE3IDcgMCAwMS05LjkgMEwzNTYuNCAzMTAuNzU4YTcgNyAwIDExOS45LTkuOWw2LjIzNiA2LjIzNyAyMC41LTIwLjVhNyA3IDAgMDE5LjkgOS45ek00NjQuODU3IDQzN2gtNDMuOTY2YTcgNyAwIDAxMC0xNGg0My45NjZhNyA3IDAgMDEwIDE0em0wLTY0aC00My45NjZhNyA3IDAgMDEwLTE0aDQzLjk2NmE3IDcgMCAwMTAgMTR6bTAtNjRoLTQzLjk2NmE3IDcgMCAwMTAtMTRoNDMuOTY2YTcgNyAwIDAxMCAxNHpcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdQcm9kdWN0c0ZpbGxcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdQcm9maWxlKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTAgOS44NDdjMS4xMyAwIDIuMzkzLS4xMjUgMy4yLTEuMDQ3LjY3OC0uNzc1Ljg5OC0xLjk3My42NzItMy42Ni0uMzE3LTIuMzU0LTEuNzY0LTMuNzYtMy44NzItMy43Ni0yLjEwOCAwLTMuNTU1IDEuNDA2LTMuODcyIDMuNzYyLS4yMjYgMS42ODUtLjAwNiAyLjg4My42NzIgMy42NTguODA3LjkyMiAyLjA3IDEuMDQ3IDMuMiAxLjA0N3ptLTIuNjMzLTQuNTRjLjEzNS0xIC42NTUtMi42NzcgMi42MzMtMi42NzcgMS45NzcgMCAyLjQ5OCAxLjY3OCAyLjYzMyAyLjY3Ny4xNzMgMS4yOTEuMDQ4IDIuMTg5LS4zNzUgMi42Ny0uMzc5LjQzNC0xLjA1NS42Mi0yLjI1OC42MnMtMS44OC0uMTg2LTIuMjU4LS42MmMtLjQyMy0uNDgxLS41NDgtMS4zOC0uMzc1LTIuNjd6TTE2LjkgMTYuMDNjLS43My0yLjkzOC0zLjU2OC00Ljk5Mi02LjktNC45OTItMy4zMzIgMC02LjE3IDIuMDU0LTYuOSA0Ljk5MmExLjg3IDEuODcgMCAwMC4zMyAxLjYxN2MuMzQuNDMzLjg2Ni42ODMgMS40NDMuNjgzaDEwLjI1NGMuNTc3IDAgMS4xMDQtLjI1IDEuNDQ0LS42ODMuMzUzLS40NS40NzItMS4wNC4zMjgtMS42MTdoLjAwMXptLTEuMzEzLjg0N2EuNTYuNTYgMCAwMS0uNDYuMjA1SDQuODczYS41Ni41NiAwIDAxLS40Ni0uMjA1LjYyOC42MjggMCAwMS0uMS0uNTQ1Yy41OTItMi4zOCAyLjkzMS00LjA0MiA1LjY4Ny00LjA0MiAyLjc1NiAwIDUuMDk1IDEuNjYyIDUuNjg3IDQuMDQyLjA1LjIwMS4wMTQuNC0uMS41NDV6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnUHJvZmlsZVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z1Byb2ZpbGVGaWxsKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTAuMTg4IDEwLjEzN2MtMS4xMyAwLTIuMzk0LS4xMjUtMy4yLTEuMDQ2LS42NzktLjc3NS0uODk4LTEuOTczLS42NzEtMy42Ni4zMTYtMi4zNTUgMS43NjMtMy43NjEgMy44NzEtMy43NjEgMi4xMDkgMCAzLjU1NiAxLjQwNiAzLjg3MiAzLjc2LjIyNyAxLjY4OC4wMDcgMi44ODQtLjY3MiAzLjY2LS44MDguOTIyLTIuMDcgMS4wNDctMy4yIDEuMDQ3em00Ljg3NCA4LjIwOUg1LjMxM2ExLjcxNyAxLjcxNyAwIDAxLTEuMzc1LS42NTUgMS45MzggMS45MzggMCAwMS0uMzQxLTEuNjRjLjY5NS0yLjk0MiAzLjQwNS00Ljk5OCA2LjU5LTQuOTk4czUuODk1IDIuMDU1IDYuNTkxIDQuOTk4Yy4xMzcuNTgyLjAwOSAxLjE5NS0uMzQzIDEuNjM5LS4zMzMuNDItLjgyLjY1NC0xLjM3My42NTR2LjAwMnpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdQcm9maWxlRmlsbFxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z1F1ZXN0aW9uKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMjAuMjIyIDkuMTZoLTEuMzM0Yy4wMTUtLjA5LjAyOC0uMTgyLjAyOC0uMjc3VjYuNTdjMC0uOTgtLjc5Ny0xLjc3Ny0xLjc3OC0xLjc3N0gzLjVWMy4zNThhLjc1Ljc1IDAgMDAtMS41IDBWMjAuODNhLjc1Ljc1IDAgMTAxLjUgMHYtMS40MzRoMTAuNTU2YTEuNzggMS43OCAwIDAwMS43NzgtMS43Nzd2LTIuMzEzYzAtLjA5NS0uMDE0LS4xODctLjAyOC0uMjc4aDQuNDE3YTEuNzggMS43OCAwIDAwMS43NzgtMS43Nzh2LTIuMzFhMS43OCAxLjc4IDAgMDAtMS43NzgtMS43OGgtLjAwMXpNMTcuMTQgNi4yOTNjLjE1MiAwIC4yNzcuMTI0LjI3Ny4yNzd2Mi4zMWEuMjguMjggMCAwMS0uMjc4LjI4SDMuNVY2LjI5aDEzLjY0di4wMDN6bS0yLjgwNyA5LjAxNHYyLjMxMmEuMjc4LjI3OCAwIDAxLS4yNzguMjc3SDMuNXYtMi44NjhoMTAuNTU2Yy4xNTMgMCAuMjc3LjEyNi4yNzcuMjh2LS4wMDF6TTIwLjUgMTMuMjVhLjI3OC4yNzggMCAwMS0uMjc4LjI3N0gzLjVWMTAuNjZoMTYuNzIyYy4xNTMgMCAuMjc4LjEyNC4yNzguMjc3djIuMzEzelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1F1ZXN0aW9uXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnUmV0d2VldChwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTIzLjc3IDE1LjY3YS43NDkuNzQ5IDAgMDAtMS4wNiAwbC0yLjIyIDIuMjJWNy42NWEzLjc1NSAzLjc1NSAwIDAwLTMuNzUtMy43NWgtNS44NWEuNzUuNzUgMCAwMDAgMS41aDUuODVjMS4yNCAwIDIuMjUgMS4wMSAyLjI1IDIuMjV2MTAuMjRsLTIuMjItMi4yMmEuNzQ5Ljc0OSAwIDEwLTEuMDYgMS4wNmwzLjUgMy41YS43NC43NCAwIDAwLjUzLjIyLjc0Ljc0IDAgMDAuNTMtLjIybDMuNS0zLjVhLjc0Ny43NDcgMCAwMDAtMS4wNnptLTEwLjY2IDMuMjhINy4yNmMtMS4yNCAwLTIuMjUtMS4wMS0yLjI1LTIuMjVWNi40NmwyLjIyIDIuMjJhLjc1Mi43NTIgMCAwMDEuMDYyIDAgLjc0OS43NDkgMCAwMDAtMS4wNmwtMy41LTMuNWEuNzQ3Ljc0NyAwIDAwLTEuMDYgMGwtMy41IDMuNWEuNzQ5Ljc0OSAwIDEwMS4wNiAxLjA2bDIuMjItMi4yMlYxNi43YTMuNzU1IDMuNzU1IDAgMDAzLjc1IDMuNzVoNS44NWEuNzUuNzUgMCAwMDAtMS41aC0uMDAyelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1JldHdlZXRcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdTZWFyY2gocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0yMS41MyAyMC40N2wtMy42Ni0zLjY2QTguOTggOC45OCAwIDAwMjAgMTFhOSA5IDAgMTAtOSA5YzIuMjE1IDAgNC4yNC0uODA0IDUuODA4LTIuMTNsMy42NiAzLjY2YS43NDYuNzQ2IDAgMDAxLjA2IDAgLjc0Ny43NDcgMCAwMC4wMDItMS4wNnpNMy41IDExYzAtNC4xMzUgMy4zNjUtNy41IDcuNS03LjVzNy41IDMuMzY1IDcuNSA3LjUtMy4zNjUgNy41LTcuNSA3LjUtNy41LTMuMzY1LTcuNS03LjV6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnU2VhcmNoXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnU2V0dGluZ3MocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMzY4IDM2OFwiIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgey4uLnByb3BzfT5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzQ0IDE0NGgtMjkuOTUyYy0yLjUxMi04LjItNS44LTE2LjEyLTkuNzkyLTIzLjY2NGwyMS4xNi0yMS4xNmM0LjUyOC00LjUyOCA3LjAyNC0xMC41NiA3LjAyNC0xNi45ODQgMC02LjQxNi0yLjQ5Ni0xMi40NDgtNy4wMjQtMTYuOTc2bC0yMi42NC0yMi42NGMtOS4wNDgtOS4wNDgtMjQuODg4LTkuMDcyLTMzLjk1MiAwbC0yMS4xNiAyMS4xNkExMzUuNzUzIDEzNS43NTMgMCAwMDIyNCA1My45NDRWMjRjMC0xMy4yMzItMTAuNzY4LTI0LTI0LTI0aC0zMmMtMTMuMjMyIDAtMjQgMTAuNzY4LTI0IDI0djI5Ljk1MmMtOC4yIDIuNTItMTYuMTIgNS44LTIzLjY2NCA5Ljc5MmwtMjEuMTY4LTIxLjE2Yy05LjM2LTkuMzYtMjQuNTkyLTkuMzYtMzMuOTUyIDBsLTIyLjY0OCAyMi42NGMtOS4zNTIgOS4zNi05LjM1MiAyNC41OTIgMCAzMy45NTJsMjEuMTYgMjEuMTY4YTEzNS43NTMgMTM1Ljc1MyAwIDAwLTkuNzkyIDIzLjY2NEgyNGMtMTMuMjMyIDAtMjQgMTAuNzY4LTI0IDI0djMyQzAgMjEzLjIzMiAxMC43NjggMjI0IDI0IDIyNGgyOS45NTJjMi41MiA4LjIgNS44IDE2LjEyIDkuNzkyIDIzLjY2NGwtMjEuMTYgMjEuMTY4Yy05LjM2IDkuMzYtOS4zNiAyNC41OTIgMCAzMy45NTJsMjIuNjQgMjIuNjQ4YzkuMzYgOS4zNTIgMjQuNTkyIDkuMzUyIDMzLjk1MiAwbDIxLjE2OC0yMS4xNmExMzUuNzUzIDEzNS43NTMgMCAwMDIzLjY2NCA5Ljc5MlYzNDRjMCAxMy4yMzIgMTAuNzY4IDI0IDI0IDI0aDMyYzEzLjIzMiAwIDI0LTEwLjc2OCAyNC0yNHYtMjkuOTUyYzguMi0yLjUyIDE2LjEyOC01LjggMjMuNjY0LTkuNzkybDIxLjE2IDIxLjE2OGM5LjA3MiA5LjA2NCAyNC45MTIgOS4wNDggMzMuOTUyIDBsMjIuNjQtMjIuNjRjNC41MjgtNC41MjggNy4wMjQtMTAuNTYgNy4wMjQtMTYuOTc2IDAtNi40MjQtMi40OTYtMTIuNDQ4LTcuMDI0LTE2Ljk3NmwtMjEuMTYtMjEuMTY4QTEzNS43NTMgMTM1Ljc1MyAwIDAwMzE0LjA1NiAyMjRIMzQ0YzEzLjIzMiAwIDI0LTEwLjc2OCAyNC0yNHYtMzJjMC0xMy4yMzItMTAuNzY4LTI0LTI0LTI0em04IDU2YzAgNC40MDgtMy41ODQgOC04IDhoLTM2YTguMDAyIDguMDAyIDAgMDAtNy43NDQgNmMtMi44MzIgMTAuOTItNy4xNDQgMjEuMzQ0LTEyLjgzMiAzMC45NzZhOC4wMSA4LjAxIDAgMDAxLjIzMiA5LjcybDI1LjQ0IDI1LjQ0OGE3Ljk0OCA3Ljk0OCAwIDAxMi4zMzYgNS42NjRjMCAyLjE1Mi0uODMyIDQuMTYtMi4zMzYgNS42NjRsLTIyLjY0IDIyLjY0Yy0zLjAwOCAzLjAwOC04LjMxMiAzLjAwOC0xMS4zMjggMGwtMjUuNDQtMjUuNDRjLTIuNTc2LTIuNTg0LTYuNTc2LTMuMDgtOS43MjgtMS4yMzItOS42MTYgNS42OC0yMC4wNCAxMC0zMC45NjggMTIuODI0QTcuOTg4IDcuOTg4IDAgMDAyMDggMzA4djM2YzAgNC40MDgtMy41ODQgOC04IDhoLTMyYy00LjQwOCAwLTgtMy41OTItOC04di0zNmE4LjAwMiA4LjAwMiAwIDAwLTYtNy43NDQgMTE5Ljk0OCAxMTkuOTQ4IDAgMDEtMzAuOTc2LTEyLjgyNCA3LjkxNSA3LjkxNSAwIDAwLTQuMDY0LTEuMTEyYy0yLjA3MiAwLTQuMTIuOC01LjY2NCAyLjM0NGwtMjUuNDQgMjUuNDRhOC4wMjUgOC4wMjUgMCAwMS0xMS4zMjggMGwtMjIuNjQtMjIuNjRjLTMuMTI4LTMuMTI4LTMuMTI4LTguMjA4IDAtMTEuMzI4bDI1LjQ0LTI1LjQ0YTcuOTkgNy45OSAwIDAwMS4yMzItOS43MmMtNS42OC05LjYzMi0xMC0yMC4wNDgtMTIuODI0LTMwLjk3NkE3Ljk4NiA3Ljk4NiAwIDAwNjAgMjA4SDI0Yy00LjQwOCAwLTgtMy41OTItOC04di0zMmMwLTQuNDA4IDMuNTkyLTggOC04aDM2YTguMDAyIDguMDAyIDAgMDA3Ljc0NC02IDExOS45NDggMTE5Ljk0OCAwIDAxMTIuODI0LTMwLjk3NiA3Ljk4OCA3Ljk4OCAwIDAwLTEuMjMyLTkuNzJsLTI1LjQ0LTI1LjQ0Yy0zLjEyLTMuMTItMy4xMi04LjIgMC0xMS4zMjhsMjIuNjQtMjIuNjRjMy4xMjgtMy4xMjggOC4yLTMuMTIgMTEuMzI4IDBsMjUuNDQgMjUuNDRhNy45NzggNy45NzggMCAwMDkuNzIgMS4yMzJjOS42MzItNS42OCAyMC4wNDgtMTAgMzAuOTc2LTEyLjgyNEE4LjAwMiA4LjAwMiAwIDAwMTYwIDYwVjI0YzAtNC40MDggMy41OTItOCA4LThoMzJjNC40MTYgMCA4IDMuNTkyIDggOHYzNmE4LjAwMiA4LjAwMiAwIDAwNiA3Ljc0NCAxMTkuODI3IDExOS44MjcgMCAwMTMwLjk2OCAxMi44MjRjMy4xNTIgMS44NTYgNy4xNTIgMS4zNiA5LjcyOC0xLjIzMmwyNS40NC0yNS40NGMzLjAxNi0zLjAyNCA4LjMyLTMuMDE2IDExLjMyOCAwbDIyLjY0IDIyLjY0YzEuNTA0IDEuNTA0IDIuMzM2IDMuNTIgMi4zMzYgNS42NjRzLS44MzIgNC4xNi0yLjMzNiA1LjY2NGwtMjUuNDQgMjUuNDRhOC4wMDIgOC4wMDIgMCAwMC0xLjIzMiA5LjcyYzUuNjg4IDkuNjMyIDEwIDIwLjA0OCAxMi44MzIgMzAuOTc2YTcuOTg2IDcuOTg2IDAgMDA3LjczNiA2aDM2YzQuNDE2IDAgOCAzLjU5MiA4IDh2MzJ6XCIgLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTg0IDExMmMtMzkuNjk2IDAtNzIgMzIuMzA0LTcyIDcyczMyLjMwNCA3MiA3MiA3MmMzOS43MDQgMCA3Mi0zMi4zMDQgNzItNzJzLTMyLjI5Ni03Mi03Mi03MnptMCAxMjhjLTMwLjg4IDAtNTYtMjUuMTItNTYtNTZzMjUuMTItNTYgNTYtNTZjMzAuODcyIDAgNTYgMjUuMTIgNTYgNTZzLTI1LjEyOCA1Ni01NiA1NnpcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1NldHRpbmdzXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnU2V0dGluZ3NGaWxsKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHsuLi5wcm9wc30+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNNTAwLjYgMjEyLjZsLTU5LjktMTQuN2MtMy4zLTEwLjUtNy41LTIwLjctMTIuNi0zMC42bDMwLjYtNTFjMy42LTYgMi43LTEzLjUtMi4xLTE4LjNMNDE0IDU1LjRjLTQuOC00LjgtMTIuMy01LjctMTguMy0yLjFsLTUxIDMwLjZjLTkuOS01LjEtMjAuMS05LjMtMzAuNi0xMi42bC0xNC40LTU5LjlDMjk3LjkgNC44IDI5MS45IDAgMjg1IDBoLTYwYy02LjkgMC0xMi45IDQuOC0xNC43IDExLjRsLTE0LjQgNTkuOWMtMTAuNSAzLjMtMjAuNyA3LjUtMzAuNiAxMi42bC01MS0zMC42Yy02LTMuNi0xMy41LTIuNy0xOC4zIDIuMUw1My40IDk4Yy00LjggNC44LTUuNyAxMi4zLTIuMSAxOC4zbDMwLjYgNTFjLTUuMSA5LjktOS4zIDIwLjEtMTIuNiAzMC42bC01Ny45IDE0LjdDNC44IDIxNC4xIDAgMjIwLjEgMCAyMjd2NjBjMCA2LjkgNC44IDEyLjkgMTEuNCAxNC40bDU3LjkgMTQuN2MzLjMgMTAuNSA3LjUgMjAuNyAxMi42IDMwLjZsLTMwLjYgNTFjLTMuNiA2LTIuNyAxMy41IDIuMSAxOC4zTDk2IDQ1OC42YzQuOCA0LjggMTIuMyA1LjcgMTguMyAyLjFsNTEtMzAuNmM5LjkgNS4xIDIwLjEgOS4zIDMwLjYgMTIuNmwxNC40IDU3LjljMS44IDYuNiA3LjggMTEuNCAxNC43IDExLjRoNjBjNi45IDAgMTIuOS00LjggMTQuNy0xMS40bDE0LjQtNTcuOWMxMC41LTMuMyAyMC43LTcuNSAzMC42LTEyLjZsNTEgMzAuNmM2IDMuNiAxMy41IDIuNyAxOC4zLTIuMWw0Mi42LTQyLjZjNC44LTQuOCA1LjctMTIuMyAyLjEtMTguM2wtMzAuNi01MWM1LjEtOS45IDkuMy0yMC4xIDEyLjYtMzAuNmw1OS45LTE0LjdjNi42LTEuNSAxMS40LTcuNSAxMS40LTE0LjR2LTYwYzAtNi45LTQuOC0xMi45LTExLjQtMTQuNHpNMjU1IDMzMmMtNDEuNCAwLTc1LTMzLjYtNzUtNzVzMzMuNi03NSA3NS03NSA3NSAzMy42IDc1IDc1LTMzLjYgNzUtNzUgNzV6XCJcbiAgICAgICAgICAgICAgICBkYXRhLW9yaWdpbmFsPVwiIzAwMDAwMFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2V0dGluZ3MtZmlsbF9zdmdfX2FjdGl2ZS1wYXRoXCJcbiAgICAgICAgICAgICAgICBkYXRhLW9sZF9jb2xvcj1cIiMwMDAwMDBcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdTZXR0aW5nc0ZpbGxcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdTaGFyZShwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE3LjUzIDcuNDdsLTUtNWEuNzQ5Ljc0OSAwIDAwLTEuMDYgMGwtNSA1YS43NDkuNzQ5IDAgMTAxLjA2IDEuMDZsMy43Mi0zLjcyVjE1YS43NS43NSAwIDAwMS41IDBWNC44MWwzLjcyIDMuNzJjLjE0Ni4xNDcuMzM4LjIyLjUzLjIyYS43NDkuNzQ5IDAgMDAuNTMtMS4yOHpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xOS43MDggMjEuOTQ0SDQuMjkyQTIuMjk0IDIuMjk0IDAgMDEyIDE5LjY1MlYxNGEuNzUuNzUgMCAwMTEuNSAwdjUuNjUyYzAgLjQzNy4zNTUuNzkyLjc5Mi43OTJoMTUuNDE2YS43OTMuNzkzIDAgMDAuNzkyLS43OTJWMTRhLjc1Ljc1IDAgMDExLjUgMHY1LjY1MmEyLjI5NCAyLjI5NCAwIDAxLTIuMjkyIDIuMjkyelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1NoYXJlXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnVGltZWxpbmVQcm9wKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMjIuNzcyIDEwLjUwNmwtNS42MTgtMi4xOTItMi4xNi02LjVhLjc1MS43NTEgMCAwMC0xLjQyNC0uMDAxbC0yLjE2IDYuNS01LjYyIDIuMTkyYS43NTEuNzUxIDAgMDAuMDAxIDEuMzk4bDUuNjIgMi4xOTIgMi4xNiA2LjVhLjc1Mi43NTIgMCAwMDEuNDI0IDBsMi4xNi02LjUgNS42Mi0yLjE5MmEuNzUxLjc1MSAwIDAwLS4wMDEtMS4zOTdoLS4wMDJ6bS02LjQ5IDIuMzJhLjc0OC43NDggMCAwMC0uNDQuNDZsLTEuNTYgNC42OTUtMS41Ni00LjY5M2EuNzUzLjc1MyAwIDAwLS40MzgtLjQ2MmwtNC4xNTUtMS42MiA0LjE1NC0xLjYyMmMuMjA4LS4wOC4zNy0uMjUuNDQtLjQ2MmwxLjU2LTQuNjkzIDEuNTYgNC42OTRjLjA3LjIxMi4yMy4zODIuNDM4LjQ2M2w0LjE1NSAxLjYyLTQuMTU1IDEuNjIyLjAwMS0uMDAyek02LjY2MyAzLjgxMmgtMS44OFYyLjA1YS43NS43NSAwIDAwLTEuNSAwdjEuNzYySDEuNWEuNzUuNzUgMCAwMDAgMS41aDEuNzgydjEuNzYyYS43NS43NSAwIDAwMS41IDBWNS4zMTJoMS44OGEuNzUuNzUgMCAxMDAtMS41aC4wMDF6bTIuNTM1IDE1LjYyMmgtMS4xdi0xLjAxNmEuNzUuNzUgMCAxMC0xLjUgMHYxLjAxNkg1LjU3YS43NS43NSAwIDAwMCAxLjVINi42djEuMDE2YS43NS43NSAwIDEwMS41IDB2LTEuMDE2aDEuMDk4YS43NS43NSAwIDAwMC0xLjV6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnVGltZWxpbmVQcm9wXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnVHdpdHRlcihwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE5LjcwMyA0LjExNGE3Ljc3MyA3Ljc3MyAwIDAxLTIuMjMuNjExIDMuODkyIDMuODkyIDAgMDAxLjcwNy0yLjE0OCA3Ljc1IDcuNzUgMCAwMS0yLjQ2NS45NDFBMy44ODMgMy44ODMgMCAwMDEwLjEgNy4wNmExMS4wMjQgMTEuMDI0IDAgMDEtOC4wMDItNC4wNTdBMy44ODMgMy44ODMgMCAwMDMuMyA4LjE4NmEzLjg3MyAzLjg3MyAwIDAxLTEuNzU4LS40ODV2LjA1YzAgMS44OCAxLjMzNyAzLjQ1IDMuMTE0IDMuODA2YTMuOTEyIDMuOTEyIDAgMDEtMS43NTQuMDY3QTMuODg0IDMuODg0IDAgMDA2LjUzIDE0LjMyYTcuNzkgNy43OSAwIDAxLTUuNzQ4IDEuNjA4IDEwLjk3OSAxMC45NzkgMCAwMDUuOTUgMS43NDVjNy4xNDIgMCAxMS4wNDYtNS45MTUgMTEuMDQ2LTExLjA0NSAwLS4xNjctLjAwNS0uMzM1LS4wMTItLjUwMmE3Ljg5MSA3Ljg5MSAwIDAwMS45MzYtMi4wMDhsLjAwMi0uMDAzelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1R3aXR0ZXJcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQWRkIH0gZnJvbSAnLi9BZGQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEFkcmVzc0FkZCB9IGZyb20gJy4vQWRyZXNzQWRkJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBcnJvd0JvdHRvbSB9IGZyb20gJy4vQXJyb3dCb3R0b20nXG5leHBvcnQgeyBkZWZhdWx0IGFzIEJhc2tldEZpbGwgfSBmcm9tICcuL0Jhc2tldEZpbGwnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEJhc2tldCB9IGZyb20gJy4vQmFza2V0J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYWxlbmRlciB9IGZyb20gJy4vQ2FsZW5kZXInXG5leHBvcnQgeyBkZWZhdWx0IGFzIENsb2NrIH0gZnJvbSAnLi9DbG9jaydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ291cmllciB9IGZyb20gJy4vQ291cmllcidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRW1vamkgfSBmcm9tICcuL0Vtb2ppJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFeHBsb3JlRmlsbCB9IGZyb20gJy4vRXhwbG9yZUZpbGwnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEV4cGxvcmUgfSBmcm9tICcuL0V4cGxvcmUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEdpZiB9IGZyb20gJy4vR2lmJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBIb21lRmlsbCB9IGZyb20gJy4vSG9tZUZpbGwnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEhvbWUgfSBmcm9tICcuL0hvbWUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIMSwY29uQ29tbWVudCB9IGZyb20gJy4vxLBjb25Db21tZW50J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMaWtlIH0gZnJvbSAnLi9MaWtlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMaXN0RmlsbCB9IGZyb20gJy4vTGlzdEZpbGwnXG5leHBvcnQgeyBkZWZhdWx0IGFzIExpc3QgfSBmcm9tICcuL0xpc3QnXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hcmtGaWxsIH0gZnJvbSAnLi9NYXJrRmlsbCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFyayB9IGZyb20gJy4vTWFyaydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWVkaWEgfSBmcm9tICcuL01lZGlhJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNZXNzYWdlRmlsbCB9IGZyb20gJy4vTWVzc2FnZUZpbGwnXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1lc3NhZ2UgfSBmcm9tICcuL01lc3NhZ2UnXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1vbmV5IH0gZnJvbSAnLi9Nb25leSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTW9yZSB9IGZyb20gJy4vTW9yZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTm90aWZpY2F0aW9uRmlsbCB9IGZyb20gJy4vTm90aWZpY2F0aW9uRmlsbCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTm90aWZpY2F0aW9uIH0gZnJvbSAnLi9Ob3RpZmljYXRpb24nXG5leHBvcnQgeyBkZWZhdWx0IGFzIFByb2R1Y3RzRmlsbCB9IGZyb20gJy4vUHJvZHVjdHNGaWxsJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9kdWN0cyB9IGZyb20gJy4vUHJvZHVjdHMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFByb2ZpbGVGaWxsIH0gZnJvbSAnLi9Qcm9maWxlRmlsbCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvZmlsZSB9IGZyb20gJy4vUHJvZmlsZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUXVlc3Rpb24gfSBmcm9tICcuL1F1ZXN0aW9uJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZXR3ZWV0IH0gZnJvbSAnLi9SZXR3ZWV0J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWFyY2ggfSBmcm9tICcuL1NlYXJjaCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2V0dGluZ3NGaWxsIH0gZnJvbSAnLi9TZXR0aW5nc0ZpbGwnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNldHRpbmdzIH0gZnJvbSAnLi9TZXR0aW5ncydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2hhcmUgfSBmcm9tICcuL1NoYXJlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUaW1lbGluZVByb3AgfSBmcm9tICcuL1RpbWVsaW5lUHJvcCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVHdpdHRlciB9IGZyb20gJy4vVHdpdHRlciciLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnxLBjb25Db21tZW50KHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTQuMDQ2IDIuMjQybC00LjE0OC0uMDFoLS4wMDJjLTQuMzc0IDAtNy44IDMuNDI3LTcuOCA3LjgwMiAwIDQuMDk4IDMuMTg2IDcuMjA2IDcuNDY1IDcuMzd2My44MjhhLjg1Ljg1IDAgMDAuMTIuNDAzLjc0NC43NDQgMCAwMDEuMDM0LjIyOWMuMjY0LS4xNjggNi40NzMtNC4xNCA4LjA4OC01LjUwNiAxLjkwMi0xLjYxIDMuMDQtMy45NyAzLjA0My02LjMxMnYtLjAxN2MtLjAwNi00LjM2Ny0zLjQzLTcuNzg3LTcuOC03Ljc4OHYuMDAxem0zLjc4NyAxMi45NzJjLTEuMTM0Ljk2LTQuODYyIDMuNDA1LTYuNzcyIDQuNjQzVjE2LjY3YS43NS43NSAwIDAwLS43NS0uNzVoLS4zOTZjLTMuNjYgMC02LjMxOC0yLjQ3Ni02LjMxOC01Ljg4NiAwLTMuNTM0IDIuNzY4LTYuMzAyIDYuMy02LjMwMmw0LjE0Ny4wMWguMDAyYzMuNTMyIDAgNi4zIDIuNzY2IDYuMzAyIDYuMjk2LS4wMDMgMS45MS0uOTQyIDMuODQ0LTIuNTE0IDUuMTc2aC0uMDAxelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z8SwY29uQ29tbWVudFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2J1dHRvbi5tb2R1bGUuY3NzJ1xyXG5cclxuZnVuY3Rpb24gTGlua0J1dHRvbih7IGhyZWYsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxyXG4gICAgICAgICAgICA8YSB7Li4ucHJvcHN9PntjaGlsZHJlbn08L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBCYXNlQnV0dG9uKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0pIHtcclxuICAgIHJldHVybiA8YnV0dG9uIHsuLi5wcm9wc30+e2NoaWxkcmVufTwvYnV0dG9uPlxyXG59XHJcblxyXG5mdW5jdGlvbiBCdXR0b24oeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSB7XHJcbiAgICBjb25zdCBDb21wID0gcHJvcHMuaHJlZiA/IExpbmtCdXR0b24gOiBCYXNlQnV0dG9uXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb21wIGNsYXNzTmFtZT17Y24oc3R5bGVzLmJ1dHRvbiwgY2xhc3NOYW1lKX0gey4uLnByb3BzfT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQ29tcD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJ1dHRvblwiOiBcImJ1dHRvbl9idXR0b25fXzFoSFpUXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0IHsgSUNPTkJBUiB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pY29uYmFyLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBOYXZpZ2F0aW9uQnV0dG9uIGZyb20gJy4vbmF2aWdhdGlvbi1idXR0b24nXHJcblxyXG5mdW5jdGlvbiBJY29uTmF2KCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uYmFyfT5cclxuICAgICAgICAgICAge0lDT05CQVIubWFwKChtZW51KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHJvdXRlci5wYXRobmFtZSA9PT0gbWVudS5wYXRoXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e21lbnUucGF0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXttZW51LmtleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZCA/IG1lbnUuaWNvblNlbGVjdGVkIDogbWVudS5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2aWdhdGlvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEljb25OYXZcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaWNvbmJhclwiOiBcImljb25iYXJfaWNvbmJhcl9fMXFVYVFcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL25hdmlnYXRpb24tYnV0dG9uLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9idXR0b24nXHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5cclxuZnVuY3Rpb24gTmF2aWdhdGlvbkJ1dHRvbih7IGhyZWYsIHNlbGVjdGVkLCBjaGlsZHJlbiwgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgIHN0eWxlcy5uYXZCdXR0b24sXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZCAmJiBzdHlsZXMubmF2QnV0dG9uU2VsZWN0ZWRcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgaHJlZj17aHJlZn1cclxuICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25CdXR0b25cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibmF2QnV0dG9uXCI6IFwibmF2aWdhdGlvbi1idXR0b25fbmF2QnV0dG9uX18xNENCYVwiLFxuXHRcIm5hdkJ1dHRvblNlbGVjdGVkXCI6IFwibmF2aWdhdGlvbi1idXR0b25fbmF2QnV0dG9uU2VsZWN0ZWRfX0hvdXl0XCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5pbXBvcnQgdXNlV2luZG93U2l6ZSBmcm9tICcuLi8uLi9ob29rcy91c2VXaW5kb3dTaXplJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xheW91dC5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgQ09OU1QgZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi9jb2wvY29sLXNpZGViYXInXHJcbmltcG9ydCBNYWluIGZyb20gJy4uL2NvbC9jb2wtbWFpbidcclxuaW1wb3J0IEV4dHJhIGZyb20gJy4uL2NvbC9jb2wtZXh0cmEnXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vbmF2YmFyL25hdmJhcidcclxuaW1wb3J0IEljb25CYXIgZnJvbSAnLi4vaWNvbmJhci9pY29uYmFyJ1xyXG5pbXBvcnQgTW9iaWxlTmF2IGZyb20gJy4uL21vYmlsZS1uYXZiYXIvc2VhcmNoJ1xyXG5cclxuZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xyXG4gICAgY29uc3Qgc2l6ZSA9IHVzZVdpbmRvd1NpemUoKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7c2l6ZS53aWR0aCA8IENPTlNULk1PQklMRV9TSVpFICYmIDxNb2JpbGVOYXYgLz59XHJcbiAgICAgICAgICAgIHtzaXplLndpZHRoID4gQ09OU1QuTU9CSUxFX1NJWkUgJiYgPE5hdmJhciAvPn1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKFtzdHlsZXMubGF5b3V0XSl9PlxyXG4gICAgICAgICAgICAgICAgPFNpZGViYXI+c2lkZWJhcjwvU2lkZWJhcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8TWFpbj57Y2hpbGRyZW59PC9NYWluPlxyXG5cclxuICAgICAgICAgICAgICAgIHtzaXplLndpZHRoID4gQ09OU1QuVEFCTEVUX1NJWkUgJiYgPEV4dHJhPmV4dHJhPC9FeHRyYT59XHJcbiAgICAgICAgICAgICAgICB7c2l6ZS53aWR0aCA8IENPTlNULk1PQklMRV9TSVpFICYmIDxJY29uQmFyPjwvSWNvbkJhcj59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IExheW91dFxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsYXlvdXRcIjogXCJsYXlvdXRfbGF5b3V0X18yZWRJOVwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuL2NhcmQnXHJcblxyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9tYWluLWNhcmQubW9kdWxlLmNzcydcclxuXHJcbmZ1bmN0aW9uIE1haW5DYXJkKHsgbmFtZSB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5sYXlvdXR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucm93fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb2x1bW59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIG5hbWU9e25hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb2x1bW59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIG5hbWU9e25hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb2x1bW59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIG5hbWU9e25hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb2x1bW59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIG5hbWU9e25hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb2x1bW59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIG5hbWU9e25hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb2x1bW59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIG5hbWU9e25hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb2x1bW59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIG5hbWU9e25hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb2x1bW59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIG5hbWU9e25hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb2x1bW59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIG5hbWU9e25hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb2x1bW59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIG5hbWU9e25hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb2x1bW59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIG5hbWU9e25hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb2x1bW59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIG5hbWU9e25hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb2x1bW59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIG5hbWU9e25hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb2x1bW59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIG5hbWU9e25hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb2x1bW59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIG5hbWU9e25hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb2x1bW59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIG5hbWU9e25hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb2x1bW59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIG5hbWU9e25hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb2x1bW59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIG5hbWU9e25hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkNhcmRcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibGF5b3V0XCI6IFwibWFpbi1jYXJkX2xheW91dF9fVFZpLV9cIixcblx0XCJjb2x1bW5cIjogXCJtYWluLWNhcmRfY29sdW1uX18zMDVtOVwiLFxuXHRcInJvd1wiOiBcIm1haW4tY2FyZF9yb3dfXzNtc2RYXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc2VhcmNoLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBMb2dvIGZyb20gJy4uL25hdmJhci9sb2dvJ1xyXG5cclxuZnVuY3Rpb24gTmF2QmFyKHsgaHJlZiwgY2hpbGRyZW4sIC4uLnByb3BzIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2h9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvZjQvYzIvYmYvZjRjMmJmODkyNThiM2E5NTIzMzg1NGI3MjAxOGE1NjQucG5nXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmJveH0gdHlwZT1cInRleHRcIiBuYW1lPVwic2VhcmNoXCIgLz5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXJcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2VhcmNoXCI6IFwic2VhcmNoX3NlYXJjaF9fMzNjREFcIixcblx0XCJib3hcIjogXCJzZWFyY2hfYm94X19ycF9SN1wiLFxuXHRcImxvZ29cIjogXCJzZWFyY2hfbG9nb19fdUM4X0pcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9sb2dvLm1vZHVsZS5jc3MnXHJcblxyXG5mdW5jdGlvbiBMb2dvKHsgaHJlZiwgY2hpbGRyZW4sIC4uLnByb3BzIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzcz17c3R5bGVzLmltYWdlfT5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvZjQvYzIvYmYvZjRjMmJmODkyNThiM2E5NTIzMzg1NGI3MjAxOGE1NjQucG5nXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9nb1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJpbWFnZVwiOiBcImxvZ29faW1hZ2VfX1dzdEpsXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9uYXZiYXIubW9kdWxlLmNzcydcclxuXHJcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9zZWFyY2gtYm94J1xyXG5pbXBvcnQgTG9nbyBmcm9tICcuL2xvZ28nXHJcblxyXG5mdW5jdGlvbiBOYXZiYXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3M9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxMb2dvIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImdyaWRcIjogXCJuYXZiYXJfZ3JpZF9fMWx3bE5cIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFNlYXJjaCBmcm9tICcuLi9pY29uL1NlYXJjaCdcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zZWFyY2gtYm94Lm1vZHVsZS5jc3MnXHJcblxyXG5mdW5jdGlvbiBTZWFyY2hCb3goeyBocmVmLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5leGFtcGxlfT5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLlwiIG5hbWU9XCJzZWFyY2gyXCIgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoIC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQm94XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImV4YW1wbGVcIjogXCJzZWFyY2gtYm94X2V4YW1wbGVfX0xRREc1XCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9uYXZpZ2F0aW9uLWJ1dHRvbi5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbidcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcblxyXG5mdW5jdGlvbiBOYXZpZ2F0aW9uQnV0dG9uKHsgaHJlZiwgc2VsZWN0ZWQsIGNoaWxkcmVuLCBjbGFzc05hbWUsIC4uLnByb3BzIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgc3R5bGVzLm5hdkJ1dHRvbixcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkICYmIHN0eWxlcy5uYXZCdXR0b25TZWxlY3RlZFxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICBocmVmPXtocmVmfVxyXG4gICAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbkJ1dHRvblxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJuYXZCdXR0b25cIjogXCJuYXZpZ2F0aW9uLWJ1dHRvbl9uYXZCdXR0b25fXzFtQWxFXCIsXG5cdFwibmF2QnV0dG9uU2VsZWN0ZWRcIjogXCJuYXZpZ2F0aW9uLWJ1dHRvbl9uYXZCdXR0b25TZWxlY3RlZF9fMmtJd2ZcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5pbXBvcnQgeyBTSURFTkFWIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbmF2aWdhdGlvbi5tb2R1bGUuY3NzJ1xyXG5cclxuaW1wb3J0IE5hdmlnYXRpb25CdXR0b24gZnJvbSAnLi9uYXZpZ2F0aW9uLWJ1dHRvbidcclxuaW1wb3J0IFRleHRUaXRsZSBmcm9tICcuLi90ZXh0LXRpdGxlJ1xyXG5cclxuZnVuY3Rpb24gTmF2aWdhdGlvbigpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdn0+XHJcbiAgICAgICAgICAgIHtTSURFTkFWLm1hcCgobWVudSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hvd1RpdGxlID0gbWVudS50aXRsZS5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHJvdXRlci5wYXRobmFtZSA9PT0gbWVudS5wYXRoXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e21lbnUua2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3RpZnk9e21lbnUubm90aWZ5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e21lbnUucGF0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmF2QnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkID8gbWVudS5pY29uU2VsZWN0ZWQgOiBtZW51Lmljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93VGl0bGUgJiYgPFRleHRUaXRsZT57bWVudS50aXRsZX08L1RleHRUaXRsZT59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXZpZ2F0aW9uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L25hdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvblxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJuYXZcIjogXCJuYXZpZ2F0aW9uX25hdl9fOG50ei1cIixcblx0XCJuYXZCdXR0b25cIjogXCJuYXZpZ2F0aW9uX25hdkJ1dHRvbl9fM21NM3FcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcGhvdG8ubW9kdWxlLmNzcydcclxuXHJcbmZ1bmN0aW9uIFBob3RvKHtcclxuICAgIHNyYyA9ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzcvNzkvQnVyZ2VyX0tpbmdfbG9nby5zdmcvMTAxMnB4LUJ1cmdlcl9LaW5nX2xvZ28uc3ZnLnBuZycsXHJcbiAgICBhbHQsXHJcbiAgICBzaXplID0gNTUsXHJcbn0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NuKFtzdHlsZXMucGhvdG9dKX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IHNpemUsIGhlaWdodDogc2l6ZSB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pbWd9IHNyYz17c3JjfSBhbHQ9e2FsdH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQaG90b1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwaG90b1wiOiBcInBob3RvX3Bob3RvX19TOWhpNFwiLFxuXHRcImltZ1wiOiBcInBob3RvX2ltZ19fRmJEZm5cIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdGV4dC10aXRsZS5tb2R1bGUuY3NzJ1xyXG5cclxuZnVuY3Rpb24gVGV4dFRpdGxlKHsgYm9sZCA9IHRydWUsIGNoaWxkcmVuIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17Y24oW3N0eWxlcy50aXRsZSwgYm9sZCAmJiBzdHlsZXMuYm9sZF0pfT57Y2hpbGRyZW59PC9oMj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBUZXh0VGl0bGVcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidGl0bGVcIjogXCJ0ZXh0LXRpdGxlX3RpdGxlX18yNEt1b1wiLFxuXHRcImJvbGRcIjogXCJ0ZXh0LXRpdGxlX2JvbGRfXzJZSEJNXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2J1dHRvbidcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi90aGVtZS1idXR0b24ubW9kdWxlLmNzcydcclxuXHJcbmZ1bmN0aW9uIFRoZW1lQnV0dG9uKHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgYmlnID0gZmFsc2UsIC4uLnByb3BzIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NuKHN0eWxlcy5idXR0b24sIGJpZyAmJiBzdHlsZXMuYmlnQnV0dG9uLCBjbGFzc05hbWUpfVxyXG4gICAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRoZW1lQnV0dG9uXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJ1dHRvblwiOiBcInRoZW1lLWJ1dHRvbl9idXR0b25fXzI4MVl4XCIsXG5cdFwiYmlnQnV0dG9uXCI6IFwidGhlbWUtYnV0dG9uX2JpZ0J1dHRvbl9fMUdCUzVcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi91c2VyLm1vZHVsZS5jc3MnXHJcblxyXG5mdW5jdGlvbiBVc2VyKHsgbmFtZSwgYWRyZXNzLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJDYXJkfT5cclxuICAgICAgICAgICAgPGgyPntuYW1lfTwvaDI+XHJcbiAgICAgICAgICAgIDxwPnthZHJlc3N9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInVzZXJDYXJkXCI6IFwidXNlcl91c2VyQ2FyZF9fMVFQQzVcIlxufTtcbiIsImltcG9ydCAqIGFzIEljb24gZnJvbSAnLi4vY29tcG9uZW50cy9pY29uJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBNT0JJTEVfU0laRTogNzAwLFxyXG4gICAgVEFCTEVUX1NJWkU6IDkyNSxcclxufVxyXG5leHBvcnQgY29uc3QgU0lERU5BViA9IFtcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdob21lJyxcclxuICAgICAgICBwYXRoOiAnL21haW4nLFxyXG4gICAgICAgIGljb246IDxJY29uLkhvbWUgLz4sXHJcbiAgICAgICAgaWNvblNlbGVjdGVkOiA8SWNvbi5Ib21lRmlsbCAvPixcclxuICAgICAgICB0aXRsZTogJ0FuYSBTYXlmYScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ2Jhc2tldCcsXHJcbiAgICAgICAgcGF0aDogJy9jYXJ0JyxcclxuICAgICAgICBpY29uOiA8SWNvbi5CYXNrZXQgLz4sXHJcbiAgICAgICAgaWNvblNlbGVjdGVkOiA8SWNvbi5CYXNrZXRGaWxsIC8+LFxyXG4gICAgICAgIHRpdGxlOiAnU2VwZXRpbScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ25vdGlmaWNhdGlvbicsXHJcbiAgICAgICAgcGF0aDogJy9ub3RpZmljYXRpb25zJyxcclxuICAgICAgICBpY29uOiA8SWNvbi5Ob3RpZmljYXRpb24gLz4sXHJcbiAgICAgICAgaWNvblNlbGVjdGVkOiA8SWNvbi5Ob3RpZmljYXRpb25GaWxsIC8+LFxyXG4gICAgICAgIHRpdGxlOiAnQmlsZGlyaW1sZXInLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdwcm9maWxlJyxcclxuICAgICAgICBwYXRoOiAnL3Byb2ZpbGUnLFxyXG4gICAgICAgIGljb246IDxJY29uLlByb2ZpbGUgLz4sXHJcbiAgICAgICAgaWNvblNlbGVjdGVkOiA8SWNvbi5Qcm9maWxlRmlsbCAvPixcclxuICAgICAgICB0aXRsZTogJ1Byb2ZpbCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ3NldHRpbmdzJyxcclxuICAgICAgICBwYXRoOiAnL3NldHRpbmdzJyxcclxuICAgICAgICBpY29uOiA8SWNvbi5TZXR0aW5ncyAvPixcclxuICAgICAgICBpY29uU2VsZWN0ZWQ6IDxJY29uLlNldHRpbmdzRmlsbCAvPixcclxuICAgICAgICB0aXRsZTogJ0F5YXJsYXInLFxyXG4gICAgfSxcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IENPTlRFTlQgPSBbXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAxLFxyXG4gICAgICAgIG5hbWU6ICdCdXJzYSDEsHNrZW5kZXInLFxyXG4gICAgICAgIGNvbnQ6ICdhY8SxbMSxJyxcclxuICAgICAgICBkZWdlcjogMTgsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogMixcclxuICAgICAgICBuYW1lOiAnVGF2dWsgRMO8csO8bScsXHJcbiAgICAgICAgY29udDogJ3R1csWfdSxkb21hdGVzLG1hcnVsJyxcclxuICAgICAgICBkZWdlcjogNixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAzLFxyXG4gICAgICAgIG5hbWU6ICdFdCBEw7xyw7xtJyxcclxuICAgICAgICBjb250OiAndHVyxZ91LGRvbWF0ZXMsbWFydWwnLFxyXG4gICAgICAgIGRlZ2VyOiA4LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6IDQsXHJcbiAgICAgICAgbmFtZTogJ0xhaG1hY3VuJyxcclxuICAgICAgICBjb250OiAneWXFn2lsbGlrIGlsZScsXHJcbiAgICAgICAgZGVnZXI6IDYsXHJcbiAgICB9LFxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgSUNPTkJBUiA9IFtcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdob21lJyxcclxuICAgICAgICBwYXRoOiAnL21haW4nLFxyXG4gICAgICAgIGljb246IDxJY29uLkhvbWUgLz4sXHJcbiAgICAgICAgaWNvblNlbGVjdGVkOiA8SWNvbi5Ib21lRmlsbCBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLWMtdGhlbWUpJyB9fSAvPixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnYmFza2V0JyxcclxuICAgICAgICBwYXRoOiAnL2NhcnQnLFxyXG4gICAgICAgIGljb246IDxJY29uLkJhc2tldCAvPixcclxuICAgICAgICBpY29uU2VsZWN0ZWQ6IDxJY29uLkJhc2tldEZpbGwgc3R5bGU9e3sgY29sb3I6ICd2YXIoLS1jLXRoZW1lKScgfX0gLz4sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ3Byb2ZpbGUnLFxyXG4gICAgICAgIHBhdGg6ICcvcHJvZmlsZScsXHJcbiAgICAgICAgaWNvbjogPEljb24uUHJvZmlsZSAvPixcclxuICAgICAgICBpY29uU2VsZWN0ZWQ6IDxJY29uLlByb2ZpbGVGaWxsIHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tYy10aGVtZSknIH19IC8+LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdzZXR0aW5ncycsXHJcbiAgICAgICAgcGF0aDogJy9zZXR0aW5ncycsXHJcbiAgICAgICAgaWNvbjogPEljb24uU2V0dGluZ3MgLz4sXHJcbiAgICAgICAgaWNvblNlbGVjdGVkOiA8SWNvbi5TZXR0aW5nc0ZpbGwgc3R5bGU9e3sgY29sb3I6ICd2YXIoLS1jLXRoZW1lKScgfX0gLz4sXHJcbiAgICB9LFxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgQURNSU5TSURFQkFSID0gW1xyXG4gICAge1xyXG4gICAgICAgIGtleTogJ2hvbWUnLFxyXG4gICAgICAgIHBhdGg6ICcvYWRtaW5Ib21lJyxcclxuICAgICAgICBpY29uOiA8SWNvbi5Ib21lIC8+LFxyXG4gICAgICAgIGljb25TZWxlY3RlZDogPEljb24uSG9tZUZpbGwgLz4sXHJcbiAgICAgICAgdGl0bGU6ICdBbmEgU2F5ZmEnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdwcm9kdWN0cycsXHJcbiAgICAgICAgcGF0aDogJy9hZG1pblByb2R1Y3QnLFxyXG4gICAgICAgIGljb246IDxJY29uLlByb2R1Y3RzIC8+LFxyXG4gICAgICAgIGljb25TZWxlY3RlZDogPEljb24uUHJvZHVjdHNGaWxsIC8+LFxyXG4gICAgICAgIHRpdGxlOiAnw5xyw7xubGVyJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnYmFza2V0JyxcclxuICAgICAgICBwYXRoOiAnL2FkbWluQ2FydCcsXHJcbiAgICAgICAgaWNvbjogPEljb24uQmFza2V0IC8+LFxyXG4gICAgICAgIGljb25TZWxlY3RlZDogPEljb24uQmFza2V0RmlsbCAvPixcclxuICAgICAgICB0aXRsZTogJ1NpcGFyacWfbGVyJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnbm90aWZpY2F0aW9uJyxcclxuICAgICAgICBwYXRoOiAnL2FkbWluQ29tbWVudCcsXHJcbiAgICAgICAgaWNvbjogPEljb24uTm90aWZpY2F0aW9uIC8+LFxyXG4gICAgICAgIGljb25TZWxlY3RlZDogPEljb24uTm90aWZpY2F0aW9uRmlsbCAvPixcclxuICAgICAgICB0aXRsZTogJ1lvcnVtbGFyJyxcclxuICAgIH0sXHJcbl1cclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5mdW5jdGlvbiB1c2VXaW5kb3dTaXplKCkge1xyXG4gICAgLy8gSW5pdGlhbGl6ZSBzdGF0ZSB3aXRoIHVuZGVmaW5lZCB3aWR0aC9oZWlnaHQgc28gc2VydmVyIGFuZCBjbGllbnQgcmVuZGVycyBtYXRjaFxyXG4gICAgLy8gTGVhcm4gbW9yZSBoZXJlOiBodHRwczovL2pvc2h3Y29tZWF1LmNvbS9yZWFjdC90aGUtcGVyaWxzLW9mLXJlaHlkcmF0aW9uL1xyXG4gICAgY29uc3QgW3dpbmRvd1NpemUsIHNldFdpbmRvd1NpemVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHdpZHRoOiB1bmRlZmluZWQsXHJcbiAgICAgICAgaGVpZ2h0OiB1bmRlZmluZWQsXHJcbiAgICB9KVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8gSGFuZGxlciB0byBjYWxsIG9uIHdpbmRvdyByZXNpemVcclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XHJcbiAgICAgICAgICAgIC8vIFNldCB3aW5kb3cgd2lkdGgvaGVpZ2h0IHRvIHN0YXRlXHJcbiAgICAgICAgICAgIHNldFdpbmRvd1NpemUoe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKVxyXG5cclxuICAgICAgICAvLyBDYWxsIGhhbmRsZXIgcmlnaHQgYXdheSBzbyBzdGF0ZSBnZXRzIHVwZGF0ZWQgd2l0aCBpbml0aWFsIHdpbmRvdyBzaXplXHJcbiAgICAgICAgaGFuZGxlUmVzaXplKClcclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVyIG9uIGNsZWFudXBcclxuICAgICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSlcclxuICAgIH0sIFtdKSAvLyBFbXB0eSBhcnJheSBlbnN1cmVzIHRoYXQgZWZmZWN0IGlzIG9ubHkgcnVuIG9uIG1vdW50XHJcblxyXG4gICAgcmV0dXJuIHdpbmRvd1NpemVcclxufVxyXG5leHBvcnQgZGVmYXVsdCB1c2VXaW5kb3dTaXplXHJcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICBOZXh0Um91dGVyLFxuICBpc0xvY2FsVVJMLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IGV4ZWNPbmNlIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyBhZGRCYXNlUGF0aCwgcmVzb2x2ZUhyZWYgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZilcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKSA6IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChhcylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zdCB3YXJuID0gZXhlY09uY2UoY29uc29sZS5lcnJvcilcblxuICAvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbiAgY29uc3QgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpXG4gIGNvbnN0IGV4YWN0ID0gcmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpXG4gIC8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbiAgTGluay5wcm9wVHlwZXMgPSBleGFjdCh7XG4gICAgaHJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsXG4gICAgYXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBwcmVmZXRjaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVwbGFjZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hhbGxvdzogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGFzc0hyZWY6IFByb3BUeXBlcy5ib29sLFxuICAgIHNjcm9sbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAocHJvcHM6IGFueSwgcHJvcE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BzW3Byb3BOYW1lXVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIGBXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9LFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oe30sIF9yb3V0ZXJbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG4gIGdldExvY2F0aW9uT3JpZ2luLFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7XG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGJhc2VQYXRoICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goYmFzZVBhdGgpXG4gICAgICA6IGJhc2VQYXRoICsgcGF0aFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihjdXJyZW50UGF0aDogc3RyaW5nLCBocmVmOiBVcmwpOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgcmV0dXJuIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgOiBmaW5hbFVybC5ocmVmXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gdXJsQXNTdHJpbmdcbiAgfVxufVxuXG5jb25zdCBQQUdFX0xPQURfRVJST1IgPSBTeW1ib2woJ1BBR0VfTE9BRF9FUlJPUicpXG5leHBvcnQgZnVuY3Rpb24gbWFya0xvYWRpbmdFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgUEFHRV9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmZ1bmN0aW9uIHRyeVBhcnNlUmVsYXRpdmVVcmwoXG4gIHVybDogc3RyaW5nXG4pOiBudWxsIHwgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4ge1xuICB0cnkge1xuICAgIHJldHVybiBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgICAgKVxuICAgICAgfSwgMClcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG50eXBlIENvbXBvbmVudFJlcyA9IHsgcGFnZTogQ29tcG9uZW50VHlwZTsgbW9kOiBhbnkgfVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxudHlwZSBSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IGFueVxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBSb3V0ZUluZm8sIEFwcD86IENvbXBvbmVudFR5cGUpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQ29tcG9uZW50VHlwZVxuICAgICAgd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICB1cGRhdGUocm91dGU6IHN0cmluZywgbW9kOiBhbnkpIHtcbiAgICBjb25zdCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUgPSBtb2QuZGVmYXVsdCB8fCBtb2RcbiAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXBkYXRlIHVuYXZhaWxhYmxlIHJvdXRlOiAke3JvdXRlfWApXG4gICAgfVxuXG4gICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIF9fTl9TU0c6IG1vZC5fX05fU1NHLFxuICAgICAgX19OX1NTUDogbW9kLl9fTl9TU1AsXG4gICAgfSlcbiAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gbmV3RGF0YVxuXG4gICAgLy8gcGFnZXMvX2FwcC5qcyB1cGRhdGVkXG4gICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocm91dGUgPT09IHRoaXMucm91dGUpIHtcbiAgICAgIHRoaXMubm90aWZ5KG5ld0RhdGEpXG4gICAgfVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgY29uc3QgY2xlYW5lZEFzID0gaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXNcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IHBhcnNlZCA9IHRyeVBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgaWYgKCFwYXJzZWQpIHJldHVybiBmYWxzZVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcyB9ID0gcGFyc2VkXG4gICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcylcblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwoY2xlYW5lZEFzKVxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2BcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBSb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyLCBlcnJvcjogZXJyIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKFxuICAgICAgICAgICAgKHJlcykgPT5cbiAgICAgICAgICAgICAgKHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgICAgIH0gYXMgUm91dGVJbmZvKVxuICAgICAgICAgIClcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIF9fTl9TU0dcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8Um91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgcGFyc2VkID0gdHJ5UGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBpZiAoIXBhcnNlZCkgcmV0dXJuXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgYXNQYXRoKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Q29tcG9uZW50UmVzPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBpdGVtKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHZhbHVlKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi4vLi4vbGliL2xvYWQtZW52LWNvbmZpZydcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBhbnlcbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBpbnRlcmZhY2UtbmFtZVxuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZmlsZXM6IHN0cmluZ1tdXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQnXHJcbmltcG9ydCBNYWluQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL21haW4tY2FyZCdcclxuXHJcbmZ1bmN0aW9uIE1haW5QYWdlKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL21lbnVcIj5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNYWluQ2FyZCBuYW1lPVwiQnVyZ2VyIEtpbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5QYWdlXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=