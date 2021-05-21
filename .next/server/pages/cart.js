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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/cart.js");
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

/***/ "./components/cart/cart-table.js":
/*!***************************************!*\
  !*** ./components/cart/cart-table.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cart_table_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart-table.module.css */ "./components/cart/cart-table.module.css");
/* harmony import */ var _cart_table_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_cart_table_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\cart\\cart-table.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function MyCart(_ref) {
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
    className: _cart_table_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.table,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("tr", {
    className: _cart_table_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tableRow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("th", {
    className: _cart_table_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tableHead,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, tableName)), __jsx("tr", {
    className: _cart_table_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.row,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx("td", {
    className: _cart_table_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tableData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "text",
    className: (_cart_table_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.fname, _cart_table_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.input),
    name: "fname",
    placeholder: "0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }), ' '), __jsx("td", {
    className: _cart_table_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tableData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: _cart_table_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.textHead,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, foodName, " "), ' ', __jsx("small", {
    className: _cart_table_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.small,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, foodContent)), __jsx("td", {
    className: _cart_table_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tableData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, "\u20BA", price)), __jsx("tr", {
    className: _cart_table_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.row,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("td", {
    className: _cart_table_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tableData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "text",
    className: (_cart_table_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.fname, _cart_table_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.input),
    name: "fname",
    placeholder: "0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }), ' '), __jsx("td", {
    className: _cart_table_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tableData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: _cart_table_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.textHead,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, foodName, " "), ' ', __jsx("small", {
    className: _cart_table_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.small,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, foodContent)), __jsx("td", {
    className: _cart_table_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tableData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, "\u20BA", price)), __jsx("tr", {
    className: _cart_table_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.row,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx("td", {
    className: _cart_table_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tableData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "text",
    className: (_cart_table_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.fname, _cart_table_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.input),
    name: "fname",
    placeholder: "0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }), ' '), __jsx("td", {
    className: _cart_table_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tableData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: _cart_table_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.textHead,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, foodName, " "), ' ', __jsx("small", {
    className: _cart_table_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.small,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, foodContent)), __jsx("td", {
    className: _cart_table_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tableData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, "\u20BA", price)), __jsx("tr", {
    className: _cart_table_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.row,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx("td", {
    className: _cart_table_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tableData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "text",
    className: (_cart_table_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.fname, _cart_table_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.input),
    name: "fname",
    placeholder: "0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }), ' '), __jsx("td", {
    className: _cart_table_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tableData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: _cart_table_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.textHead,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 21
    }
  }, foodName, " "), ' ', __jsx("small", {
    className: _cart_table_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.small,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }, foodContent)), __jsx("td", {
    className: _cart_table_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tableData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, "\u20BA", price)));
}

/* harmony default export */ __webpack_exports__["default"] = (MyCart);

/***/ }),

/***/ "./components/cart/cart-table.module.css":
/*!***********************************************!*\
  !*** ./components/cart/cart-table.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"table": "cart-table_table__3psgr",
	"input": "cart-table_input__1-LoG",
	"textHead": "cart-table_textHead__2-z1F",
	"small": "cart-table_small__i31IT",
	"row": "cart-table_row__2i4WW",
	"tableHead": "cart-table_tableHead__3GTn8",
	"tableData": "cart-table_tableData__2FyCl",
	"fname": "cart-table_fname__3xkXv"
};


/***/ }),

/***/ "./components/cart/cart.js":
/*!*********************************!*\
  !*** ./components/cart/cart.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_cool_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-cool-tabs */ "react-cool-tabs");
/* harmony import */ var react_cool_tabs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_cool_tabs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _table_price__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-price */ "./components/cart/table-price.js");
/* harmony import */ var _cart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart-table */ "./components/cart/cart-table.js");
/* harmony import */ var _cart_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart.module.css */ "./components/cart/cart.module.css");
/* harmony import */ var _cart_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_cart_module_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\cart\\cart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







function Cart(_ref) {
  let {
    href,
    children,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["href", "children", "className"]);

  return __jsx("div", {
    className: _cart_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.cartIndex,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(react_cool_tabs__WEBPACK_IMPORTED_MODULE_1___default.a, {
    tabKey: '1',
    style: {
      width: '50%',
      height: 2000,
      background: 'white',
      marginLeft: '2%'
    },
    activeTabStyle: {
      background: '#f5f5f5',
      color: 'black'
    },
    unActiveTabStyle: {
      background: 'white',
      color: 'black'
    },
    activeLeftTabBorderBottomStyle: {
      background: '#dd3333',
      height: 4
    },
    activeRightTabBorderBottomStyle: {
      background: '#dd3333',
      height: 4
    },
    tabsBorderBottomStyle: {
      background: '#dd3333',
      height: 2
    },
    leftTabTitle: 'Sepetim',
    rightTabTitle: 'Siparişlerim',
    contentContainerStyle: {
      width: '185%'
    },
    leftContent: __jsx(_table_price__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 30
      }
    }),
    rightContent: __jsx(_cart_table__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 31
      }
    }),
    contentTransitionStyle: 'transform 0.4s ease-in',
    borderTransitionStyle: 'all 0.4s ease-in',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Cart);

/***/ }),

/***/ "./components/cart/cart.module.css":
/*!*****************************************!*\
  !*** ./components/cart/cart.module.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"cartIndex": "cart_cartIndex__2Er29"
};


/***/ }),

/***/ "./components/cart/table-adress.js":
/*!*****************************************!*\
  !*** ./components/cart/table-adress.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _table_adress_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-adress.module.css */ "./components/cart/table-adress.module.css");
/* harmony import */ var _table_adress_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_table_adress_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icon_More__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon/More */ "./components/icon/More.js");
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\cart\\table-adress.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function TableAdress(_ref) {
  let {
    adressTitle,
    adress,
    phone,
    mail,
    href,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["adressTitle", "adress", "phone", "mail", "href", "children"]);

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("table", {
    className: _table_adress_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.table,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("input", {
    type: "radio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }), __jsx("tr", {
    className: _table_adress_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tableRow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, __jsx("th", {
    className: _table_adress_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tableHead,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, adressTitle), __jsx("th", {
    className: _table_adress_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tableHead,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, __jsx(_icon_More__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      fontSize: 22,
      paddingTop: 5
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }))), __jsx("tr", {
    className: _table_adress_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.row,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx("td", {
    className: _table_adress_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.td,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }, "Adres:"), adress)), __jsx("tr", {
    className: _table_adress_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.row,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  }, "Telefon numaras\u0131:"), phone), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 25
    }
  }, "Mail adresi:"), mail))));
}

/* harmony default export */ __webpack_exports__["default"] = (TableAdress);

/***/ }),

/***/ "./components/cart/table-adress.module.css":
/*!*************************************************!*\
  !*** ./components/cart/table-adress.module.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"table": "table-adress_table__AnKHr",
	"tableRow": "table-adress_tableRow__13P-_",
	"title": "table-adress_title__1DMhr",
	"disp": "table-adress_disp__rYDO8",
	"textHead": "table-adress_textHead__g16gf",
	"adressTableTitle": "table-adress_adressTableTitle__21eHg",
	"add": "table-adress_add__2bA-i",
	"tableHead": "table-adress_tableHead__1lwxB",
	"tableData": "table-adress_tableData__11l-J",
	"row": "table-adress_row__2LnNi",
	"td": "table-adress_td__2t1g4"
};


/***/ }),

/***/ "./components/cart/table-extra.js":
/*!****************************************!*\
  !*** ./components/cart/table-extra.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _table_extra_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-extra.module.css */ "./components/cart/table-extra.module.css");
/* harmony import */ var _table_extra_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_table_extra_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\cart\\table-extra.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function TableExtra() {
  return __jsx("div", {
    className: _table_extra_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.tableExtraLayout,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _table_extra_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.clock,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "radio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }
  }), "\u015Eimdi (45-50dk)"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "radio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }), "\u0130leri Tarih")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("textarea", {
    className: _table_extra_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.note,
    type: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (TableExtra);

/***/ }),

/***/ "./components/cart/table-extra.module.css":
/*!************************************************!*\
  !*** ./components/cart/table-extra.module.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"tableExtraLayout": "table-extra_tableExtraLayout__3AUpq",
	"clock": "table-extra_clock__1d_G0",
	"note": "table-extra_note__220y2"
};


/***/ }),

/***/ "./components/cart/table-price.js":
/*!****************************************!*\
  !*** ./components/cart/table-price.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _table_price_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-price.module.css */ "./components/cart/table-price.module.css");
/* harmony import */ var _table_price_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_table_price_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _table_adress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table-adress */ "./components/cart/table-adress.js");
/* harmony import */ var _table_extra__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table-extra */ "./components/cart/table-extra.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants */ "./constants/index.js");
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\components\\cart\\table-price.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









function TablePrice(_ref) {
  let {
    href,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["href", "children"]);

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("table", {
    className: _table_price_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tablePrice,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, "Yemek"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, "Fiyat"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, "Adet"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, "Tutar")), _constants__WEBPACK_IMPORTED_MODULE_6__["CONTENT"].map(content => {
    const deger = content.deger;
    const {
      0: nums,
      1: setNums
    } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
    const {
      0: price,
      1: setPrice
    } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(deger);
    const {
      0: sum,
      1: setSum
    } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

    const calculate = e => {
      setSum(e * price);
    };

    return __jsx("tr", {
      key: content.key,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 25
      }
    }, __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 29
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 33
      }
    }, content.name), ' ', __jsx("small", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 33
      }
    }, content.cont)), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 29
      }
    }, "\u20BA", deger), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 29
      }
    }, __jsx("input", {
      type: "text",
      name: nums,
      onChange: e => calculate(e.target.value),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 33
      }
    })), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 29
      }
    }, "\u20BA", sum));
  })), __jsx("div", {
    className: _table_price_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.adressTableTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: _table_price_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, "Teslimat Adresi"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: _table_price_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.add,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, "Adres Ekle +")), __jsx(_table_adress__WEBPACK_IMPORTED_MODULE_3__["default"], {
    adressTitle: "Ev",
    adress: "XXXX XXXXXX XXXXXXX XXXX/ \u0130stanbul",
    phone: "01212451356",
    mail: "xxxxxx@gmail.com",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: _table_price_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.adressTableTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: _table_price_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, "G\xF6nderim Zaman\u0131"), __jsx("p", {
    className: _table_price_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, "Sipari\u015F Notu")), __jsx(_table_extra__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TablePrice);

/***/ }),

/***/ "./components/cart/table-price.module.css":
/*!************************************************!*\
  !*** ./components/cart/table-price.module.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"tablePrice": "table-price_tablePrice__reVa8",
	"table": "table-price_table__2Duax",
	"tableRow": "table-price_tableRow__2EsXy",
	"textHead": "table-price_textHead__38_lE",
	"add": "table-price_add__1DqOc",
	"tableHead": "table-price_tableHead__1gzNq",
	"tableData": "table-price_tableData__zBMfZ",
	"row": "table-price_row__1VIh3",
	"td": "table-price_td__2h8DW",
	"adressTableTitle": "table-price_adressTableTitle__34r08",
	"title": "table-price_title__1P9X2"
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

/***/ "./pages/cart.js":
/*!***********************!*\
  !*** ./pages/cart.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/layout */ "./components/layout/layout.js");
/* harmony import */ var _components_cart_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/cart/cart */ "./components/cart/cart.js");
var _jsxFileName = "C:\\Users\\tansu\\Downloads\\Kopya-20210520T200531Z-001\\Kopya\\pages\\cart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function CartPage() {
  return __jsx(_components_layout_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(_components_cart_cart__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CartPage);

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

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-cool-tabs":
/*!**********************************!*\
  !*** external "react-cool-tabs" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-cool-tabs");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2FydC9jYXJ0LXRhYmxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2FydC9jYXJ0LXRhYmxlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJ0L2NhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJ0L2NhcnQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NhcnQvdGFibGUtYWRyZXNzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2FydC90YWJsZS1hZHJlc3MubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NhcnQvdGFibGUtZXh0cmEuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJ0L3RhYmxlLWV4dHJhLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJ0L3RhYmxlLXByaWNlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2FydC90YWJsZS1wcmljZS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29sL2NvbC1leHRyYS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbC9jb2wtZXh0cmEubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbC9jb2wtbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbC9jb2wtbWFpbi5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29sL2NvbC1zaWRlYmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29sL2NvbC1zaWRlYmFyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29uL0FkZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb24vQWRyZXNzQWRkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9BcnJvd0JvdHRvbS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb24vQmFza2V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9CYXNrZXRGaWxsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9DYWxlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb24vQ2xvY2suanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29uL0NvdXJpZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29uL0Vtb2ppLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9FeHBsb3JlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9FeHBsb3JlRmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb24vR2lmLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9Ib21lLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9Ib21lRmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb24vTGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb24vTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb24vTGlzdEZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29uL01hcmsuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29uL01hcmtGaWxsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9NZWRpYS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb24vTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb24vTWVzc2FnZUZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29uL01vbmV5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9Nb3JlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9Ob3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29uL05vdGlmaWNhdGlvbkZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29uL1Byb2R1Y3RzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9Qcm9kdWN0c0ZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29uL1Byb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29uL1Byb2ZpbGVGaWxsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9RdWVzdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb24vUmV0d2VldC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb24vU2VhcmNoLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9TZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb24vU2V0dGluZ3NGaWxsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9TaGFyZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb24vVGltZWxpbmVQcm9wLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9Ud2l0dGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb24vxLBjb25Db21tZW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbmJhci9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29uYmFyL2J1dHRvbi5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbmJhci9pY29uYmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbmJhci9pY29uYmFyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29uYmFyL25hdmlnYXRpb24tYnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbmJhci9uYXZpZ2F0aW9uLWJ1dHRvbi5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vYmlsZS1uYXZiYXIvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9iaWxlLW5hdmJhci9zZWFyY2gubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmJhci9sb2dvLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmF2YmFyL2xvZ28ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZiYXIvc2VhcmNoLWJveC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmJhci9zZWFyY2gtYm94Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24tYnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLWJ1dHRvbi5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90ZXh0LXRpdGxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGV4dC10aXRsZS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGhlbWUtYnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGhlbWUtYnV0dG9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91c2VyL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91c2VyL3VzZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlV2luZG93U2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FydC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtY29vbC10YWJzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiJdLCJuYW1lcyI6WyJMaW5rQnV0dG9uIiwiaHJlZiIsImNoaWxkcmVuIiwicHJvcHMiLCJCYXNlQnV0dG9uIiwiQnV0dG9uIiwiZnVsbCIsImNsYXNzTmFtZSIsIkNvbXAiLCJjbiIsInN0eWxlcyIsImJ1dHRvbiIsImZ1bGxXaWR0aCIsIk15Q2FydCIsInRhYmxlTmFtZSIsImZvb2ROYW1lIiwiZm9vZENvbnRlbnQiLCJwcmljZSIsInRhYmxlIiwidGFibGVSb3ciLCJ0YWJsZUhlYWQiLCJyb3ciLCJ0YWJsZURhdGEiLCJmbmFtZSIsImlucHV0IiwidGV4dEhlYWQiLCJzbWFsbCIsIkNhcnQiLCJjYXJ0SW5kZXgiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmQiLCJtYXJnaW5MZWZ0IiwiY29sb3IiLCJUYWJsZUFkcmVzcyIsImFkcmVzc1RpdGxlIiwiYWRyZXNzIiwicGhvbmUiLCJtYWlsIiwiZm9udFNpemUiLCJwYWRkaW5nVG9wIiwidGQiLCJUYWJsZUV4dHJhIiwidGFibGVFeHRyYUxheW91dCIsImNsb2NrIiwibm90ZSIsIlRhYmxlUHJpY2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ0YWJsZVByaWNlIiwiQ09OVEVOVCIsIm1hcCIsImNvbnRlbnQiLCJkZWdlciIsIm51bXMiLCJzZXROdW1zIiwidXNlU3RhdGUiLCJzZXRQcmljZSIsInN1bSIsInNldFN1bSIsImNhbGN1bGF0ZSIsImUiLCJrZXkiLCJuYW1lIiwiY29udCIsInRhcmdldCIsInZhbHVlIiwiYWRyZXNzVGFibGVUaXRsZSIsInRpdGxlIiwiYWRkIiwiRXh0cmEiLCJsYXlvdXQiLCJNYWluIiwibWFpbiIsIlNpZGViYXIiLCJzaWRlYmFyIiwiU3ZnQWRkIiwiU3ZnQWRyZXNzQWRkIiwiU3ZnQXJyb3dCb3R0b20iLCJTdmdCYXNrZXQiLCJTdmdCYXNrZXRGaWxsIiwiU3ZnQ2FsZW5kZXIiLCJTdmdDbG9jayIsIlN2Z0NvdXJpZXIiLCJTdmdFbW9qaSIsIlN2Z0V4cGxvcmUiLCJTdmdFeHBsb3JlRmlsbCIsIlN2Z0dpZiIsIlN2Z0hvbWUiLCJTdmdIb21lRmlsbCIsIlN2Z0xpa2UiLCJTdmdMaXN0IiwiU3ZnTGlzdEZpbGwiLCJTdmdNYXJrIiwiU3ZnTWFya0ZpbGwiLCJTdmdNZWRpYSIsIlN2Z01lc3NhZ2UiLCJTdmdNZXNzYWdlRmlsbCIsIlN2Z01vbmV5IiwiU3ZnTW9yZSIsIlN2Z05vdGlmaWNhdGlvbiIsIlN2Z05vdGlmaWNhdGlvbkZpbGwiLCJTdmdQcm9kdWN0cyIsIlN2Z1Byb2R1Y3RzRmlsbCIsIlN2Z1Byb2ZpbGUiLCJTdmdQcm9maWxlRmlsbCIsIlN2Z1F1ZXN0aW9uIiwiU3ZnUmV0d2VldCIsIlN2Z1NlYXJjaCIsIlN2Z1NldHRpbmdzIiwiU3ZnU2V0dGluZ3NGaWxsIiwiU3ZnU2hhcmUiLCJTdmdUaW1lbGluZVByb3AiLCJTdmdUd2l0dGVyIiwiU3ZnxLBjb25Db21tZW50IiwiSWNvbk5hdiIsImljb25iYXIiLCJJQ09OQkFSIiwibWVudSIsInNlbGVjdGVkIiwicGF0aG5hbWUiLCJwYXRoIiwiaWNvbiIsImljb25TZWxlY3RlZCIsIk5hdmlnYXRpb25CdXR0b24iLCJuYXZCdXR0b24iLCJuYXZCdXR0b25TZWxlY3RlZCIsIkxheW91dCIsInNpemUiLCJ1c2VXaW5kb3dTaXplIiwiQ09OU1QiLCJNT0JJTEVfU0laRSIsIlRBQkxFVF9TSVpFIiwiTmF2QmFyIiwic2VhcmNoIiwibG9nbyIsImJveCIsIkxvZ28iLCJpbWFnZSIsIk5hdmJhciIsImdyaWQiLCJTZWFyY2hCb3giLCJleGFtcGxlIiwiTmF2aWdhdGlvbiIsIm5hdiIsIlNJREVOQVYiLCJzaG93VGl0bGUiLCJsZW5ndGgiLCJub3RpZnkiLCJUZXh0VGl0bGUiLCJib2xkIiwiVGhlbWVCdXR0b24iLCJiaWciLCJiaWdCdXR0b24iLCJVc2VyIiwidXNlckNhcmQiLCJBRE1JTlNJREVCQVIiLCJ3aW5kb3dTaXplIiwic2V0V2luZG93U2l6ZSIsInVuZGVmaW5lZCIsInVzZUVmZmVjdCIsImhhbmRsZVJlc2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJwcmVmZXRjaGVkIiwiY2FjaGVkT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJvYnNlcnZlciIsImdldE9ic2VydmVyIiwiY29uc29sZSIsImVyciIsImV2ZW50Iiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInAiLCJyZXNvbHZlZEhyZWYiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsInByZWZldGNoIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUHJvcHMiLCJyZWYiLCJlbCIsInNldENoaWxkRWxtIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJ3YXJuIiwiUHJvcFR5cGVzIiwicmVxdWlyZSIsImV4YWN0IiwiTGluayIsInNoYWxsb3ciLCJwYXNzSHJlZiIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJPYmplY3QiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJzZXRUaW1lb3V0IiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJjcmVkZW50aWFscyIsInJlcyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImlzU2VydmVyUmVuZGVyIiwibWFya0xvYWRpbmdFcnJvciIsImNvbnN0cnVjdG9yIiwicm91dGUiLCJxdWVyeSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJzdGF0ZSIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiX19ORVhUX0RBVEFfXyIsInVwZGF0ZSIsIm1vZCIsImRhdGEiLCJuZXdEYXRhIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJvcHRpb25zIiwicHJlcGFyZVVybEFzIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJjbGVhbmVkQXMiLCJkZWxCYXNlUGF0aCIsInBhcnNlZCIsInRyeVBhcnNlUmVsYXRpdmVVcmwiLCJtZXRob2QiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsIm1pc3NpbmdQYXJhbXMiLCJwYXJhbSIsImFzUGF0aG5hbWUiLCJyb3V0ZUluZm8iLCJhcHBDb21wIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwicGFnZSIsImVycm9yIiwiY2FjaGVkUm91dGVJbmZvIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIlByb21pc2UiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJlbmNvZGVVUklDb21wb25lbnQiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwiVEVTVF9ST1VURSIsIkRVTU1ZX0JBU0UiLCJyZXNvbHZlZEJhc2UiLCJvcmlnaW4iLCJzZWFyY2hQYXJhbXMiLCJBcnJheSIsInJlc3VsdCIsIml0ZW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwib3B0aW9uYWwiLCJyZXBlYXQiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJzZWdtZW50IiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwiaXNOYU4iLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiQ2FydFBhZ2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSx3RTs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsVUFBVCxPQUFrRDtBQUFBLE1BQTlCO0FBQUVDLFFBQUY7QUFBUUM7QUFBUixHQUE4QjtBQUFBLE1BQVRDLEtBQVM7O0FBQzlDLFNBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRUYsSUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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QURQO0FBRUksTUFBRSxFQUFFLEtBRlI7QUFHSSxNQUFFLEVBQUUsTUFIUjtBQUlJLE1BQUUsRUFBRSxNQUpSO0FBS0ksTUFBRSxFQUFFLEtBTFI7QUFNSSxpQkFBYSxFQUFDLGdCQU5sQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUk7QUFBTSxhQUFTLEVBQUMsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJKLEVBU0k7QUFBTSxVQUFNLEVBQUUsS0FBZDtBQUFxQixhQUFTLEVBQUMsU0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRKLEVBVUk7QUFBTSxVQUFNLEVBQUUsS0FBZDtBQUFxQixhQUFTLEVBQUMsU0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZKLEVBV0k7QUFBTSxVQUFNLEVBQUUsQ0FBZDtBQUFpQixhQUFTLEVBQUMsU0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhKLENBOUVKLEVBMkZJO0FBQ0ksTUFBRSxFQUFDLDBCQURQO0FBRUksTUFBRSxFQUFFLEVBRlI7QUFHSSxNQUFFLEVBQUUsTUFIUjtBQUlJLE1BQUUsRUFBRSxFQUpSO0FBS0ksTUFBRSxFQUFFLE1BTFI7QUFNSSxpQkFBYSxFQUFDLGdCQU5sQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUk7QUFBTSxhQUFTLEVBQUMsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJKLEVBU0k7QUFBTSxVQUFNLEVBQUUsQ0FBZDtBQUFpQixhQUFTLEVBQUMsU0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRKLENBM0ZKLEVBc0dJO0FBQ0ksTUFBRSxFQUFDLDJCQURQO0FBRUksTUFBRSxFQUFFLEVBRlI7QUFHSSxNQUFFLEVBQUUsS0FIUjtBQUlJLE1BQUUsRUFBRSxFQUpSO0FBS0ksTUFBRSxFQUFF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b0I7QUFDaEIsU0FDSSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKO0FBS0g7O0FBRWNBLHVFQUFmLEU7Ozs7Ozs7Ozs7O0FDWkEsdUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoicGFnZXMvY2FydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvY2FydC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYnV0dG9uLm1vZHVsZS5jc3MnXHJcblxyXG5mdW5jdGlvbiBMaW5rQnV0dG9uKHsgaHJlZiwgY2hpbGRyZW4sIC4uLnByb3BzIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpbmsgaHJlZj17aHJlZn0+XHJcbiAgICAgICAgICAgIDxhIHsuLi5wcm9wc30+e2NoaWxkcmVufTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJhc2VCdXR0b24oeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSkge1xyXG4gICAgcmV0dXJuIDxidXR0b24gey4uLnByb3BzfT57Y2hpbGRyZW59PC9idXR0b24+XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJ1dHRvbih7IGZ1bGwgPSBmYWxzZSwgY2hpbGRyZW4sIGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkge1xyXG4gICAgY29uc3QgQ29tcCA9IHByb3BzLmhyZWYgPyBMaW5rQnV0dG9uIDogQmFzZUJ1dHRvblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29tcFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NuKHN0eWxlcy5idXR0b24sIGZ1bGwgJiYgc3R5bGVzLmZ1bGxXaWR0aCwgY2xhc3NOYW1lKX1cclxuICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQ29tcD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJ1dHRvblwiOiBcImJ1dHRvbl9idXR0b25fXzNwT3NZXCIsXG5cdFwiZnVsbFdpZHRoXCI6IFwiYnV0dG9uX2Z1bGxXaWR0aF9fMXNyWEFcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY2FydC10YWJsZS5tb2R1bGUuY3NzJ1xyXG5cclxuZnVuY3Rpb24gTXlDYXJ0KHtcclxuICAgIHRhYmxlTmFtZSxcclxuICAgIGZvb2ROYW1lLFxyXG4gICAgZm9vZENvbnRlbnQsXHJcbiAgICBwcmljZSxcclxuICAgIGhyZWYsXHJcbiAgICBjaGlsZHJlbixcclxuICAgIC4uLnByb3BzXHJcbn0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlfT5cclxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlUm93fT5cclxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9e3N0eWxlcy50YWJsZUhlYWR9Pnt0YWJsZU5hbWV9PC90aD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMudGFibGVEYXRhfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyhzdHlsZXMuZm5hbWUsIHN0eWxlcy5pbnB1dCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz57JyAnfVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy50YWJsZURhdGF9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHRIZWFkfT57Zm9vZE5hbWV9IDwvcD57JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9e3N0eWxlcy5zbWFsbH0+e2Zvb2RDb250ZW50fTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy50YWJsZURhdGF9PuKCuntwcmljZX08L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG5cclxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMudGFibGVEYXRhfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyhzdHlsZXMuZm5hbWUsIHN0eWxlcy5pbnB1dCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz57JyAnfVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy50YWJsZURhdGF9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHRIZWFkfT57Zm9vZE5hbWV9IDwvcD57JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9e3N0eWxlcy5zbWFsbH0+e2Zvb2RDb250ZW50fTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy50YWJsZURhdGF9PuKCuntwcmljZX08L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG5cclxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMudGFibGVEYXRhfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyhzdHlsZXMuZm5hbWUsIHN0eWxlcy5pbnB1dCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz57JyAnfVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy50YWJsZURhdGF9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHRIZWFkfT57Zm9vZE5hbWV9IDwvcD57JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9e3N0eWxlcy5zbWFsbH0+e2Zvb2RDb250ZW50fTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy50YWJsZURhdGF9PuKCuntwcmljZX08L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG5cclxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMudGFibGVEYXRhfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyhzdHlsZXMuZm5hbWUsIHN0eWxlcy5pbnB1dCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz57JyAnfVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy50YWJsZURhdGF9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHRIZWFkfT57Zm9vZE5hbWV9IDwvcD57JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9e3N0eWxlcy5zbWFsbH0+e2Zvb2RDb250ZW50fTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy50YWJsZURhdGF9PuKCuntwcmljZX08L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15Q2FydFxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0YWJsZVwiOiBcImNhcnQtdGFibGVfdGFibGVfXzNwc2dyXCIsXG5cdFwiaW5wdXRcIjogXCJjYXJ0LXRhYmxlX2lucHV0X18xLUxvR1wiLFxuXHRcInRleHRIZWFkXCI6IFwiY2FydC10YWJsZV90ZXh0SGVhZF9fMi16MUZcIixcblx0XCJzbWFsbFwiOiBcImNhcnQtdGFibGVfc21hbGxfX2kzMUlUXCIsXG5cdFwicm93XCI6IFwiY2FydC10YWJsZV9yb3dfXzJpNFdXXCIsXG5cdFwidGFibGVIZWFkXCI6IFwiY2FydC10YWJsZV90YWJsZUhlYWRfXzNHVG44XCIsXG5cdFwidGFibGVEYXRhXCI6IFwiY2FydC10YWJsZV90YWJsZURhdGFfXzJGeUNsXCIsXG5cdFwiZm5hbWVcIjogXCJjYXJ0LXRhYmxlX2ZuYW1lX18zeGtYdlwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ29vbFRhYnMgZnJvbSAncmVhY3QtY29vbC10YWJzJ1xyXG5pbXBvcnQgQ29udGVudE9uZSBmcm9tICcuL3RhYmxlLXByaWNlJ1xyXG5pbXBvcnQgQ29udGVudFR3byBmcm9tICcuL2NhcnQtdGFibGUnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY2FydC5tb2R1bGUuY3NzJ1xyXG5cclxuZnVuY3Rpb24gQ2FydCh7IGhyZWYsIGNoaWxkcmVuLCBjbGFzc05hbWUsIC4uLnByb3BzIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJ0SW5kZXh9PlxyXG4gICAgICAgICAgICA8Q29vbFRhYnNcclxuICAgICAgICAgICAgICAgIHRhYktleT17JzEnfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzUwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzIlJyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVUYWJTdHlsZT17eyBiYWNrZ3JvdW5kOiAnI2Y1ZjVmNScsIGNvbG9yOiAnYmxhY2snIH19XHJcbiAgICAgICAgICAgICAgICB1bkFjdGl2ZVRhYlN0eWxlPXt7IGJhY2tncm91bmQ6ICd3aGl0ZScsIGNvbG9yOiAnYmxhY2snIH19XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVMZWZ0VGFiQm9yZGVyQm90dG9tU3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2RkMzMzMycsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0LFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGFjdGl2ZVJpZ2h0VGFiQm9yZGVyQm90dG9tU3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2RkMzMzMycsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0LFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHRhYnNCb3JkZXJCb3R0b21TdHlsZT17eyBiYWNrZ3JvdW5kOiAnI2RkMzMzMycsIGhlaWdodDogMiB9fVxyXG4gICAgICAgICAgICAgICAgbGVmdFRhYlRpdGxlPXsnU2VwZXRpbSd9XHJcbiAgICAgICAgICAgICAgICByaWdodFRhYlRpdGxlPXsnU2lwYXJpxZ9sZXJpbSd9XHJcbiAgICAgICAgICAgICAgICBjb250ZW50Q29udGFpbmVyU3R5bGU9e3sgd2lkdGg6ICcxODUlJyB9fVxyXG4gICAgICAgICAgICAgICAgbGVmdENvbnRlbnQ9ezxDb250ZW50T25lIC8+fVxyXG4gICAgICAgICAgICAgICAgcmlnaHRDb250ZW50PXs8Q29udGVudFR3byAvPn1cclxuICAgICAgICAgICAgICAgIGNvbnRlbnRUcmFuc2l0aW9uU3R5bGU9eyd0cmFuc2Zvcm0gMC40cyBlYXNlLWluJ31cclxuICAgICAgICAgICAgICAgIGJvcmRlclRyYW5zaXRpb25TdHlsZT17J2FsbCAwLjRzIGVhc2UtaW4nfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNhcnRJbmRleFwiOiBcImNhcnRfY2FydEluZGV4X18yRXIyOVwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi90YWJsZS1hZHJlc3MubW9kdWxlLmNzcydcclxuXHJcbmltcG9ydCBNb3JlIGZyb20gJy4uL2ljb24vTW9yZSdcclxuXHJcbmZ1bmN0aW9uIFRhYmxlQWRyZXNzKHtcclxuICAgIGFkcmVzc1RpdGxlLFxyXG4gICAgYWRyZXNzLFxyXG4gICAgcGhvbmUsXHJcbiAgICBtYWlsLFxyXG4gICAgaHJlZixcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgLi4ucHJvcHNcclxufSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXtzdHlsZXMudGFibGV9PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPXtzdHlsZXMudGFibGVSb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9e3N0eWxlcy50YWJsZUhlYWR9PnthZHJlc3NUaXRsZX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9e3N0eWxlcy50YWJsZUhlYWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TW9yZSBzdHlsZT17eyBmb250U2l6ZTogMjIsIHBhZGRpbmdUb3A6IDUgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9e3N0eWxlcy5yb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy50ZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFkcmVzOjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2FkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9e3N0eWxlcy5yb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGVsZWZvbiBudW1hcmFzxLE6PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGhvbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPk1haWwgYWRyZXNpOjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYmxlQWRyZXNzXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRhYmxlXCI6IFwidGFibGUtYWRyZXNzX3RhYmxlX19BbktIclwiLFxuXHRcInRhYmxlUm93XCI6IFwidGFibGUtYWRyZXNzX3RhYmxlUm93X18xM1AtX1wiLFxuXHRcInRpdGxlXCI6IFwidGFibGUtYWRyZXNzX3RpdGxlX18xRE1oclwiLFxuXHRcImRpc3BcIjogXCJ0YWJsZS1hZHJlc3NfZGlzcF9fcllETzhcIixcblx0XCJ0ZXh0SGVhZFwiOiBcInRhYmxlLWFkcmVzc190ZXh0SGVhZF9fZzE2Z2ZcIixcblx0XCJhZHJlc3NUYWJsZVRpdGxlXCI6IFwidGFibGUtYWRyZXNzX2FkcmVzc1RhYmxlVGl0bGVfXzIxZUhnXCIsXG5cdFwiYWRkXCI6IFwidGFibGUtYWRyZXNzX2FkZF9fMmJBLWlcIixcblx0XCJ0YWJsZUhlYWRcIjogXCJ0YWJsZS1hZHJlc3NfdGFibGVIZWFkX18xbHd4QlwiLFxuXHRcInRhYmxlRGF0YVwiOiBcInRhYmxlLWFkcmVzc190YWJsZURhdGFfXzExbC1KXCIsXG5cdFwicm93XCI6IFwidGFibGUtYWRyZXNzX3Jvd19fMkxuTmlcIixcblx0XCJ0ZFwiOiBcInRhYmxlLWFkcmVzc190ZF9fMnQxZzRcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3RhYmxlLWV4dHJhLm1vZHVsZS5jc3MnXHJcblxyXG5mdW5jdGlvbiBUYWJsZUV4dHJhKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlRXh0cmFMYXlvdXR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNsb2NrfT5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIMWeaW1kaSAoNDUtNTBkaylcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIMSwbGVyaSBUYXJpaFxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9e3N0eWxlcy5ub3RlfSB0eXBlPVwidGV4dFwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJsZUV4dHJhXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRhYmxlRXh0cmFMYXlvdXRcIjogXCJ0YWJsZS1leHRyYV90YWJsZUV4dHJhTGF5b3V0X18zQVVwcVwiLFxuXHRcImNsb2NrXCI6IFwidGFibGUtZXh0cmFfY2xvY2tfXzFkX0cwXCIsXG5cdFwibm90ZVwiOiBcInRhYmxlLWV4dHJhX25vdGVfXzIyMHkyXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3RhYmxlLXByaWNlLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBUYWJsZUFkcmVzcyBmcm9tICcuL3RhYmxlLWFkcmVzcydcclxuaW1wb3J0IFRhYmxlRXh0cmEgZnJvbSAnLi90YWJsZS1leHRyYSdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IENPTlRFTlQgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXHJcblxyXG5mdW5jdGlvbiBUYWJsZVByaWNlKHsgaHJlZiwgY2hpbGRyZW4sIC4uLnByb3BzIH0pIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXtzdHlsZXMudGFibGVQcmljZX0+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlllbWVrPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+Rml5YXQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5BZGV0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+VHV0YXI8L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIHtDT05URU5ULm1hcCgoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlZ2VyID0gY29udGVudC5kZWdlclxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBbbnVtcywgc2V0TnVtc10gPSB1c2VTdGF0ZSgnJylcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKGRlZ2VyKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFtzdW0sIHNldFN1bV0gPSB1c2VTdGF0ZSgnJylcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxjdWxhdGUgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdW0oZSAqIHByaWNlKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtjb250ZW50LmtleX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+e2NvbnRlbnQubmFtZX08L2I+eycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+e2NvbnRlbnQuY29udH08L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7igrp7ZGVnZXJ9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtudW1zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGNhbGN1bGF0ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+4oK6e3N1bX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZHJlc3NUYWJsZVRpdGxlfT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5UZXNsaW1hdCBBZHJlc2k8L3A+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmFkZH0+QWRyZXMgRWtsZSArPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPFRhYmxlQWRyZXNzXHJcbiAgICAgICAgICAgICAgICBhZHJlc3NUaXRsZT1cIkV2XCJcclxuICAgICAgICAgICAgICAgIGFkcmVzcz1cIlhYWFggWFhYWFhYIFhYWFhYWFggWFhYWC8gxLBzdGFuYnVsXCJcclxuICAgICAgICAgICAgICAgIHBob25lPVwiMDEyMTI0NTEzNTZcIlxyXG4gICAgICAgICAgICAgICAgbWFpbD1cInh4eHh4eEBnbWFpbC5jb21cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkcmVzc1RhYmxlVGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PkfDtm5kZXJpbSBaYW1hbsSxPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlNpcGFyacWfIE5vdHU8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8VGFibGVFeHRyYSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFRhYmxlUHJpY2VcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidGFibGVQcmljZVwiOiBcInRhYmxlLXByaWNlX3RhYmxlUHJpY2VfX3JlVmE4XCIsXG5cdFwidGFibGVcIjogXCJ0YWJsZS1wcmljZV90YWJsZV9fMkR1YXhcIixcblx0XCJ0YWJsZVJvd1wiOiBcInRhYmxlLXByaWNlX3RhYmxlUm93X18yRXNYeVwiLFxuXHRcInRleHRIZWFkXCI6IFwidGFibGUtcHJpY2VfdGV4dEhlYWRfXzM4X2xFXCIsXG5cdFwiYWRkXCI6IFwidGFibGUtcHJpY2VfYWRkX18xRHFPY1wiLFxuXHRcInRhYmxlSGVhZFwiOiBcInRhYmxlLXByaWNlX3RhYmxlSGVhZF9fMWd6TnFcIixcblx0XCJ0YWJsZURhdGFcIjogXCJ0YWJsZS1wcmljZV90YWJsZURhdGFfX3pCTWZaXCIsXG5cdFwicm93XCI6IFwidGFibGUtcHJpY2Vfcm93X18xVkloM1wiLFxuXHRcInRkXCI6IFwidGFibGUtcHJpY2VfdGRfXzJoOERXXCIsXG5cdFwiYWRyZXNzVGFibGVUaXRsZVwiOiBcInRhYmxlLXByaWNlX2FkcmVzc1RhYmxlVGl0bGVfXzM0cjA4XCIsXG5cdFwidGl0bGVcIjogXCJ0YWJsZS1wcmljZV90aXRsZV9fMVA5WDJcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY29sLWV4dHJhLm1vZHVsZS5jc3MnXHJcblxyXG5mdW5jdGlvbiBFeHRyYSh7IGNoaWxkcmVuIH0pIHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y24oW3N0eWxlcy5sYXlvdXRdKX0+e2NoaWxkcmVufTwvZGl2PlxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEV4dHJhXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxheW91dFwiOiBcImNvbC1leHRyYV9sYXlvdXRfXzNQM0VDXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NvbC1tYWluLm1vZHVsZS5jc3MnXHJcblxyXG5mdW5jdGlvbiBNYWluKHsgY2hpbGRyZW4gfSkge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbihbc3R5bGVzLm1haW5dKX0+e2NoaWxkcmVufTwvZGl2PlxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1haW5cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFpblwiOiBcImNvbC1tYWluX21haW5fXzNJZ3UwXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24nXHJcbmltcG9ydCBUaGVtZUJ1dHRvbiBmcm9tICcuLi90aGVtZS1idXR0b24nXHJcbmltcG9ydCBVc2VyIGZyb20gJy4uL3VzZXIvdXNlcidcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jb2wtc2lkZWJhci5tb2R1bGUuY3NzJ1xyXG5cclxuZnVuY3Rpb24gU2lkZWJhcih7IGNoaWxkcmVuIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKFtzdHlsZXMuc2lkZWJhcl0pfT5cclxuICAgICAgICAgICAgPE5hdmlnYXRpb24gLz5cclxuICAgICAgICAgICAgPFRoZW1lQnV0dG9uIGJpZyBmdWxsPlxyXG4gICAgICAgICAgICAgICAgw4fEsWvEscWfIFlhcFxyXG4gICAgICAgICAgICA8L1RoZW1lQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPFVzZXJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJUYW5zdSDDh2FtXCJcclxuICAgICAgICAgICAgICAgIGFkcmVzcz1cIkFrxZ9lbXNldHRpbiBNaCBTdWx0YW5iZXlsaS/EsHN0YW5idWxcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2lkZWJhclwiOiBcImNvbC1zaWRlYmFyX3NpZGViYXJfXzJMcGM5XCJcbn07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnQWRkKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDQ1NS40MzEgNDU1LjQzMVwiIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgey4uLnByb3BzfT5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk00MDUuNDkzIDQxMi43NjRjLTY5LjY4OSA1Ni44ODktMjg3LjI4OSA1Ni44ODktMzU1LjU1NiAwLTY5LjY4OS01Ni44ODktNjIuNTc4LTMwMC4wODkgMC0zNjQuMDg5czI5Mi45NzgtNjQgMzU1LjU1NiAwIDY5LjY4OSAzMDcuMjAxIDAgMzY0LjA4OXpcIlxuICAgICAgICAgICAgICAgIGRhdGEtb3JpZ2luYWw9XCIjOERDNjQwXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZGRfc3ZnX19hY3RpdmUtcGF0aFwiXG4gICAgICAgICAgICAgICAgZGF0YS1vbGRfY29sb3I9XCIjOERDNjQwXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI2MxMjAyMFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTIyOS4xMzggMzEzLjIwOWMtNjIuNTc4IDQ5Ljc3OC0xMzIuMjY3IDc1LjM3OC0xOTcuNjg5IDc2LjgtNDguMzU2LTgyLjQ4OS0zOC40LTI4My4wMjIgMTguNDg5LTM0MS4zMzMgNTEuMi01Mi42MjIgMjExLjkxMS02Mi41NzggMzA0LjM1Ni0yOS44NjcgMjIuNzU1IDkzLjg2Ny0yNC4xNzggMjEzLjMzMy0xMjUuMTU2IDI5NC40elwiXG4gICAgICAgICAgICAgICAgZGF0YS1vcmlnaW5hbD1cIiNGRkZGRkZcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgICAgICAgICAgICBvcGFjaXR5PXswLjJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTM2Mi44MjcgMjI3Ljg3NmEyNS40OTQgMjUuNDk0IDAgMDEtMjUuNiAyNS42aC04NS4zMzN2ODUuMzMzYTI1LjQ5NCAyNS40OTQgMCAwMS0yNS42IDI1LjYgMjUuNDk0IDI1LjQ5NCAwIDAxLTI1LjYtMjUuNnYtODUuMzMzSDExNS4zNmEyNS40OTQgMjUuNDk0IDAgMDEtMjUuNi0yNS42IDI1LjQ5NCAyNS40OTQgMCAwMTI1LjYtMjUuNmg4NS4zMzN2LTg1LjMzM2EyNS40OTQgMjUuNDk0IDAgMDEyNS42LTI1LjYgMjUuNDk0IDI1LjQ5NCAwIDAxMjUuNiAyNS42djg1LjMzM2g4NS4zMzNhMjUuNDkzIDI1LjQ5MyAwIDAxMjUuNjAxIDI1LjZ6XCJcbiAgICAgICAgICAgICAgICBkYXRhLW9yaWdpbmFsPVwiI0ZGRkZGRlwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNmZmZcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdBZGRcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdBZHJlc3NBZGQocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjFlbVwiIHsuLi5wcm9wc30+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTkuMDIgMjFIMi41QTIuNTAzIDIuNTAzIDAgMDEwIDE4LjV2LTE2QzAgMS4xMjEgMS4xMjIgMCAyLjUgMGgxMkMxNS44NzggMCAxNyAxLjEyMSAxNyAyLjV2Ni4wNmEuNS41IDAgMDEtMSAwVjIuNWMwLS44MjctLjY3My0xLjUtMS41LTEuNWgtMTJDMS42NzMgMSAxIDEuNjczIDEgMi41djE2YzAgLjgyNy42NzMgMS41IDEuNSAxLjVoNi41MmEuNS41IDAgMDEwIDF6XCIgLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTMuNSA5aC0xMGEuNS41IDAgMDEwLTFoMTBhLjUuNSAwIDAxMCAxek05LjUgMTNoLTZhLjUuNSAwIDAxMC0xaDZhLjUuNSAwIDAxMCAxek04LjUgNWgtNWEuNS41IDAgMDEwLTFoNWEuNS41IDAgMDEwIDF6TTE3LjUgMjRjLTMuNTg0IDAtNi41LTIuOTE2LTYuNS02LjVzMi45MTYtNi41IDYuNS02LjUgNi41IDIuOTE2IDYuNSA2LjUtMi45MTYgNi41LTYuNSA2LjV6bTAtMTJjLTMuMDMzIDAtNS41IDIuNDY4LTUuNSA1LjVzMi40NjcgNS41IDUuNSA1LjUgNS41LTIuNDY4IDUuNS01LjUtMi40NjctNS41LTUuNS01LjV6XCIgLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTcuNSAyMWEuNS41IDAgMDEtLjUtLjV2LTZhLjUuNSAwIDAxMSAwdjZhLjUuNSAwIDAxLS41LjV6XCIgLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjAuNSAxOGgtNmEuNS41IDAgMDEwLTFoNmEuNS41IDAgMDEwIDF6XCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdBZHJlc3NBZGRcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdBcnJvd0JvdHRvbShwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTIwLjIwNyA4LjE0N2ExIDEgMCAwMC0xLjQxNCAwTDEyIDE0Ljk0IDUuMjA3IDguMTQ3YTEgMSAwIDAwLTEuNDE0IDEuNDE0bDcuNSA3LjVhLjk5Ni45OTYgMCAwMDEuNDE0LjAwMWw3LjUtNy41YTEgMSAwIDAwMC0xLjQxM3YtLjAwMnpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdBcnJvd0JvdHRvbVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z0Jhc2tldChwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCA0MjMuNDE2IDQyMy40MTZcIlxuICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGggZD1cIk00MjAuNjg4IDE0NS4wOTZhOS40MDEgOS40MDEgMCAwMC03LjgzNy0yLjYxMkgzMDAuNTI1VjkyLjg1MWMwLTQ5LjA1Mi0zOS43NjQtODguODE2LTg4LjgxNi04OC44MTZzLTg4LjgxNiAzOS43NjQtODguODE2IDg4LjgxNnY0OS42MzNIMTAuNTY1Yy0zLjEzNSAwLTYuMjY5IDAtNy44MzcgMi42MTJhOC44ODMgOC44ODMgMCAwMC0yLjYxMiA3LjgzN0wzOS4zIDM2Ny4xMzdjNS40NzQgMjkuODgxIDMxLjI3NSA1MS43NDYgNjEuNjQ5IDUyLjI0NWgyMjEuNTE4YzMwLjQ2MS0uNzQ5IDU2LjIwOC0yMi43ODcgNjEuNjQ5LTUyLjc2N0w0MjMuMyAxNTIuOTMzYTguODgzIDguODgzIDAgMDAtMi42MTItNy44Mzd6TTE0My43OSA5Mi44NTFjMC0zNy41MSAzMC40MDgtNjcuOTE4IDY3LjkxOC02Ny45MTggMzcuNTEgMCA2Ny45MTggMzAuNDA4IDY3LjkxOCA2Ny45MTh2NDkuNjMzSDE0My43OVY5Mi44NTF6bTIxOS40MjggMjcxLjE1MWMtMy41MTkgMTkuODAxLTIwLjY0MSAzNC4yODktNDAuNzUxIDM0LjQ4MkgxMDAuOTQ5Yy0yMC4xMS0uMTkzLTM3LjIzMi0xNC42OC00MC43NTEtMzQuNDgybC0zNy4wOTQtMjAwLjYyaDM3Ny4yMDhsLTM3LjA5NCAyMDAuNjJ6XCIgLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjkwLjA3NiAyNjUuMjU5YzUuNzcxIDAgMTAuNDQ5LTQuNjc4IDEwLjQ0OS0xMC40NDl2LTMxLjM0N2MwLTUuNzcxLTQuNjc4LTEwLjQ0OS0xMC40NDktMTAuNDQ5cy0xMC40NDkgNC42NzgtMTAuNDQ5IDEwLjQ0OXYzMS4zNDdjLS4wMDEgNS43NzEgNC42NzggMTAuNDQ5IDEwLjQ0OSAxMC40NDl6TTEzMy4zNDEgMjY1LjI1OWM1Ljc3MSAwIDEwLjQ0OS00LjY3OCAxMC40NDktMTAuNDQ5di0zMS4zNDdjMC01Ljc3MS00LjY3OC0xMC40NDktMTAuNDQ5LTEwLjQ0OXMtMTAuNDQ5IDQuNjc4LTEwLjQ0OSAxMC40NDl2MzEuMzQ3YzAgNS43NzEgNC42NzggMTAuNDQ5IDEwLjQ0OSAxMC40NDl6XCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdCYXNrZXRcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdCYXNrZXRGaWxsKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2ZyB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMzk2LjAxNiAzOTYuMDE2XCIgey4uLnByb3BzfT5cbiAgICAgICAgICAgIDxnIGZpbGw9XCIjZmZmXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNOS40MDQgMTYwLjkxNGwzNy4wOTQgMjAwLjYyYzMuNTE5IDE5LjgwMSAyMC42NDEgMzQuMjg5IDQwLjc1MSAzNC40ODJoMjIxLjUxOGMyMC4xMTEtLjE5MyAzNy4yMzItMTQuNjggNDAuNzUxLTM0LjQ4MmwzNy4wOTQtMjAwLjYySDkuNDA0em0xMjAuNjg2IDg5Ljg2MmMwIDUuNzcxLTQuNjc4IDEwLjQ0OS0xMC40NDkgMTAuNDQ5cy0xMC40NDktNC42NzgtMTAuNDQ5LTEwLjQ0OXYtMzEuMzQ3YzAtNS43NzEgNC42NzgtMTAuNDQ5IDEwLjQ0OS0xMC40NDlzMTAuNDQ5IDQuNjc4IDEwLjQ0OSAxMC40NDl2MzEuMzQ3em0xNTYuNzM1IDBjMCA1Ljc3MS00LjY3OCAxMC40NDktMTAuNDQ5IDEwLjQ0OXMtMTAuNDQ5LTQuNjc4LTEwLjQ0OS0xMC40NDl2LTMxLjM0N2MwLTUuNzcxIDQuNjc4LTEwLjQ0OSAxMC40NDktMTAuNDQ5czEwLjQ0OSA0LjY3OCAxMC40NDkgMTAuNDQ5djMxLjM0N3pNMTMwLjA5IDg4LjgxNmMwLTM3LjUxIDMwLjQwOC02Ny45MTggNjcuOTE4LTY3LjkxOCAzNy41MSAwIDY3LjkxOCAzMC40MDggNjcuOTE4IDY3LjkxOHY2MS42NDloMjAuODk4Vjg4LjgxNkMyODYuODI1IDM5Ljc2NCAyNDcuMDYgMCAxOTguMDA4IDBzLTg4LjgxNiAzOS43NjQtODguODE2IDg4LjgxNnY2MS42NDloMjAuODk4Vjg4LjgxNnpcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLW9yaWdpbmFsPVwiIzAwMDAwMFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdCYXNrZXRGaWxsXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnQ2FsZW5kZXIocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxnIGNsaXBQYXRoPVwidXJsKCNjYWxlbmRlcl9zdmdfX2NsaXAwKVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTS0zNy45IDE4Yy0uMS0uMS0uMS0uMS0uMS0uMi4xIDAgLjEuMS4xLjJ6TTE4IDIuMmgtMS4zdi0uM2MwLS40LS4zLS44LS44LS44LS40IDAtLjguMy0uOC44di4zSDcuN3YtLjNjMC0uNC0uMy0uOC0uOC0uOC0uNCAwLS44LjMtLjguOHYuM0g0LjhjLTEuNCAwLTIuNSAxLjEtMi41IDIuNXYxMy4xYzAgMS40IDEuMSAyLjUgMi41IDIuNWgyLjljLjQgMCAuOC0uMy44LS44IDAtLjQtLjMtLjgtLjgtLjhINC44Yy0uNiAwLTEtLjUtMS0xVjcuOWMwLS4zLjQtLjcgMS0uN0gxOGMuNiAwIDEgLjQgMSAuN3YxLjhjMCAuNC4zLjguOC44LjQgMCAuOC0uMy44LS44di01Yy0uMS0xLjQtMS4yLTIuNS0yLjYtMi41em0xIDMuN2MtLjMtLjEtLjctLjItMS0uMkg0LjhjLS40IDAtLjcuMS0xIC4yVjQuN2MwLS42LjUtMSAxLTFoMS4zdi41YzAgLjQuMy44LjguOC40IDAgLjgtLjMuOC0uOHYtLjVoNy41di41YzAgLjQuMy44LjguOC40IDAgLjgtLjMuOC0uOHYtLjVIMThjLjYgMCAxIC41IDEgMXYxLjJ6XCIgLz5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE1LjUgMTAuNGMtMy40IDAtNi4yIDIuOC02LjIgNi4yIDAgMy40IDIuOCA2LjIgNi4yIDYuMiAzLjQgMCA2LjItMi44IDYuMi02LjIgMC0zLjQtMi44LTYuMi02LjItNi4yem0wIDExYy0yLjYgMC00LjctMi4xLTQuNy00LjdzMi4xLTQuNyA0LjctNC43IDQuNyAyLjEgNC43IDQuN2MwIDIuNS0yLjEgNC43LTQuNyA0Ljd6XCIgLz5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE4LjkgMTguN2MtLjEuMi0uNC40LS42LjQtLjEgMC0uMyAwLS40LS4xbC0zLjEtMnYtM2MwLS40LjMtLjguOC0uOC40IDAgLjguMy44Ljh2Mi4ybDIuNCAxLjVjLjIuMi4zLjYuMSAxelwiIC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgICAgICA8Y2xpcFBhdGggaWQ9XCJjYWxlbmRlcl9zdmdfX2NsaXAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmXCIgZD1cIk0wIDBoMjR2MjRIMHpcIiAvPlxuICAgICAgICAgICAgICAgIDwvY2xpcFBhdGg+XG4gICAgICAgICAgICA8L2RlZnM+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnQ2FsZW5kZXJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdDbG9jayhwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEyIDI0YzYuNjI3IDAgMTItNS4zNzMgMTItMTJTMTguNjI3IDAgMTIgMCAwIDUuMzczIDAgMTJzNS4zNzMgMTIgMTIgMTJ6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNjbG9ja19zdmdfX3BhaW50MF9saW5lYXIpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTIgMjMuNjExYzYuNDEzIDAgMTEuNjEtNS4xOTggMTEuNjEtMTEuNjExUzE4LjQxNC4zODkgMTIgLjM4OUM1LjU4Ny4zODkuMzg5IDUuNTg3LjM4OSAxMnM1LjE5OCAxMS42MTEgMTEuNjEgMTEuNjExelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cInVybCgjY2xvY2tfc3ZnX19wYWludDFfbGluZWFyKVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEyIDIyLjQ3MWM1Ljc4MyAwIDEwLjQ3Mi00LjY4OCAxMC40NzItMTAuNDcxUzE3Ljc4MyAxLjUyOCAxMiAxLjUyOEM2LjIxNyAxLjUyOCAxLjUzIDYuMjE3IDEuNTMgMTJjMCA1Ljc4MyA0LjY4OCAxMC40NzEgMTAuNDcxIDEwLjQ3MXpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI2Nsb2NrX3N2Z19fcGFpbnQyX2xpbmVhcilcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMiAyMi40NzFjNS43ODMgMCAxMC40NzItNC42ODggMTAuNDcyLTEwLjQ3MVMxNy43ODMgMS41MjggMTIgMS41MjhDNi4yMTcgMS41MjggMS41MyA2LjIxNyAxLjUzIDEyYzAgNS43ODMgNC42ODggMTAuNDcxIDEwLjQ3MSAxMC40NzF6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNjbG9ja19zdmdfX3BhaW50M19yYWRpYWwpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMjIuMzUzIDEzLjU4MWwtMy41LTMuNDcxLS45OTMuMjQ0LTUuMDc2LTUuMDMyYS41MS41MSAwIDAwLS4yNDctLjI0Ny41MS41MSAwIDAwLS40NjEtLjI5NWgtLjE1MmEuNTEuNTEgMCAwMC0uNTEuNTF2NS45NGEuOTY1Ljk2NSAwIDAwLS4zNCAxLjA1bC0zLjMgMy4zYS41MS41MSAwIDAwMCAuNzJsNi4wMjUgNi4wMTdhMTAuNDggMTAuNDggMCAwMDguNTU0LTguNzM2elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cInVybCgjY2xvY2tfc3ZnX19wYWludDRfbGluZWFyKVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTIyLjM1MiAxMy41ODFhMTAuNDc5IDEwLjQ3OSAwIDAxLTguNTUzIDguNzM2bC01LjkxLTUuOTAyYS41MS41MSAwIDAwLjcxNC0uMDA3bDMuNDQyLTMuNDQzYS45NjYuOTY2IDAgMDAuOTIyLS45Nmw1Ljk4OC0xLjQ3NGEuMjE3LjIxNyAwIDAwLjE2LS4xNjFsMy4yMzcgMy4yMTF6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNjbG9ja19zdmdfX3BhaW50NV9saW5lYXIpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTIuMDc2IDEyaC0uMTUyYS41MS41MSAwIDAxLS41MS0uNTF2LTYuMmEuNTEuNTEgMCAwMS41MS0uNTFoLjE1MmEuNTEuNTEgMCAwMS41MS41MXY2LjJhLjUxLjUxIDAgMDEtLjUxLjUxelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cInVybCgjY2xvY2tfc3ZnX19wYWludDZfbGluZWFyKVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEyLjA3NiAxMmwuMTA3LjEwN2MuMTk5LjE5OS4xOTkuNTIyIDAgLjcybC0zLjU4IDMuNThhLjUxLjUxIDAgMDEtLjcyMSAwbC0uMTA3LS4xMDZhLjUxLjUxIDAgMDEwLS43MjFsMy41OC0zLjU4YS41MS41MSAwIDAxLjcyIDB6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNjbG9ja19zdmdfX3BhaW50N19saW5lYXIpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTkuMTE0IDEwLjI2OGEuMjE3LjIxNyAwIDAxLS4xNTguMjYybC02Ljg0OCAxLjY4N2EuMjE3LjIxNyAwIDAxLS4xMDMtLjQyMWw2Ljg0Ny0xLjY4NmEuMjE3LjIxNyAwIDAxLjI2Mi4xNTh6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNjbG9ja19zdmdfX3BhaW50OF9saW5lYXIpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTIgMTIuOTY4YS45NjguOTY4IDAgMTAwLTEuOTM2Ljk2OC45NjggMCAwMDAgMS45MzZ6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNjbG9ja19zdmdfX3BhaW50OV9saW5lYXIpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTIuMDM3IDQuMTYzaC0uMDc0YS41NDguNTQ4IDAgMDEtLjU0OC0uNTQ4di0uNjgyYzAtLjMwMy4yNDUtLjU0OC41NDgtLjU0OGguMDc0Yy4zMDMgMCAuNTQ4LjI0NS41NDguNTQ4di42ODJhLjU0OC41NDggMCAwMS0uNTQ4LjU0OHpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI2Nsb2NrX3N2Z19fcGFpbnQxMF9saW5lYXIpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTIuMDM3IDIxLjYxNWgtLjA3NGEuNTQ4LjU0OCAwIDAxLS41NDgtLjU0OHYtLjY4MWMwLS4zMDMuMjQ1LS41NDkuNTQ4LS41NDloLjA3NGMuMzAzIDAgLjU0OC4yNDYuNTQ4LjU0OXYuNjgxYS41NDguNTQ4IDAgMDEtLjU0OC41NDh6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNjbG9ja19zdmdfX3BhaW50MTFfbGluZWFyKVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE5LjgzNyAxMi4wMzd2LS4wNzRjMC0uMzAzLjI0Ni0uNTQ4LjU0OC0uNTQ4aC42ODJjLjMwMyAwIC41NDguMjQ1LjU0OC41NDh2LjA3NGEuNTQ4LjU0OCAwIDAxLS41NDguNTQ4aC0uNjgyYS41NDguNTQ4IDAgMDEtLjU0OC0uNTQ4elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cInVybCgjY2xvY2tfc3ZnX19wYWludDEyX2xpbmVhcilcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0yLjM4NSAxMi4wMzd2LS4wNzRjMC0uMzAzLjI0NS0uNTQ4LjU0OC0uNTQ4aC42ODJjLjMwMiAwIC41NDguMjQ1LjU0OC41NDh2LjA3NGEuNTQ4LjU0OCAwIDAxLS41NDguNTQ4aC0uNjgyYS41NDguNTQ4IDAgMDEtLjU0OC0uNTQ4elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cInVybCgjY2xvY2tfc3ZnX19wYWludDEzX2xpbmVhcilcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkZWZzPlxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgICAgICAgICAgICBpZD1cImNsb2NrX3N2Z19fcGFpbnQwX2xpbmVhclwiXG4gICAgICAgICAgICAgICAgICAgIHgxPXsxMn1cbiAgICAgICAgICAgICAgICAgICAgeTE9ezI5LjI5fVxuICAgICAgICAgICAgICAgICAgICB4Mj17MTJ9XG4gICAgICAgICAgICAgICAgICAgIHkyPXstMS4xMzZ9XG4gICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjZmZmXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PXsxfSBzdG9wQ29sb3I9XCIjRThFRkVFXCIgLz5cbiAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgICAgICAgICAgICBpZD1cImNsb2NrX3N2Z19fcGFpbnQxX2xpbmVhclwiXG4gICAgICAgICAgICAgICAgICAgIHgxPXsxMn1cbiAgICAgICAgICAgICAgICAgICAgeTE9ey00LjczfVxuICAgICAgICAgICAgICAgICAgICB4Mj17MTJ9XG4gICAgICAgICAgICAgICAgICAgIHkyPXsyNC43MDl9XG4gICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjZmZmXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PXsxfSBzdG9wQ29sb3I9XCIjRThFRkVFXCIgLz5cbiAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgICAgICAgICAgICBpZD1cImNsb2NrX3N2Z19fcGFpbnQyX2xpbmVhclwiXG4gICAgICAgICAgICAgICAgICAgIHgxPXs2LjMxM31cbiAgICAgICAgICAgICAgICAgICAgeTE9ezYuMzEyfVxuICAgICAgICAgICAgICAgICAgICB4Mj17MTcuMTM2fVxuICAgICAgICAgICAgICAgICAgICB5Mj17MTcuMTM1fVxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiIzFBQ0VCOFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD17MX0gc3RvcENvbG9yPVwiIzBCQkZCQVwiIC8+XG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjbG9ja19zdmdfX3BhaW50NF9saW5lYXJcIlxuICAgICAgICAgICAgICAgICAgICB4MT17MTMuNTE0fVxuICAgICAgICAgICAgICAgICAgICB5MT17MTMuMzkxfVxuICAgICAgICAgICAgICAgICAgICB4Mj17OC4zNDd9XG4gICAgICAgICAgICAgICAgICAgIHkyPXs4LjIyNH1cbiAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD17MH0gc3RvcENvbG9yPVwiIzFBQ0VCOFwiIHN0b3BPcGFjaXR5PXswfSAvPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezF9IHN0b3BDb2xvcj1cIiMwNDk1OUNcIiAvPlxuICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY2xvY2tfc3ZnX19wYWludDVfbGluZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgeDE9ezE4LjM1Mn1cbiAgICAgICAgICAgICAgICAgICAgeTE9ezE5LjI5OH1cbiAgICAgICAgICAgICAgICAgICAgeDI9ezExLjAyM31cbiAgICAgICAgICAgICAgICAgICAgeTI9ezkuNTQyfVxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PXswfSBzdG9wQ29sb3I9XCIjMUFDRUI4XCIgc3RvcE9wYWNpdHk9ezB9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD17MX0gc3RvcENvbG9yPVwiIzA0OTU5Q1wiIC8+XG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjbG9ja19zdmdfX3BhaW50Nl9saW5lYXJcIlxuICAgICAgICAgICAgICAgICAgICB4MT17MTJ9XG4gICAgICAgICAgICAgICAgICAgIHkxPXsyLjA4MX1cbiAgICAgICAgICAgICAgICAgICAgeDI9ezEyfVxuICAgICAgICAgICAgICAgICAgICB5Mj17MTIuNjE2fVxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI2ZmZlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD17MX0gc3RvcENvbG9yPVwiI0U4RUZFRVwiIC8+XG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjbG9ja19zdmdfX3BhaW50N19saW5lYXJcIlxuICAgICAgICAgICAgICAgICAgICB4MT17MTAuOTg2fVxuICAgICAgICAgICAgICAgICAgICB5MT17MTMuMTk3fVxuICAgICAgICAgICAgICAgICAgICB4Mj17Ny40NzF9XG4gICAgICAgICAgICAgICAgICAgIHkyPXsxNi43MTF9XG4gICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjZmZmXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PXsxfSBzdG9wQ29sb3I9XCIjRThFRkVFXCIgLz5cbiAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgICAgICAgICAgICBpZD1cImNsb2NrX3N2Z19fcGFpbnQ4X2xpbmVhclwiXG4gICAgICAgICAgICAgICAgICAgIHgxPXsxMS44M31cbiAgICAgICAgICAgICAgICAgICAgeTE9ezEyLjAzMX1cbiAgICAgICAgICAgICAgICAgICAgeDI9ezIwLjQyOH1cbiAgICAgICAgICAgICAgICAgICAgeTI9ezkuOTg2fVxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI0Q2MzMwNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD17MC4zNjZ9IHN0b3BDb2xvcj1cIiNDRjMwMDRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezAuODk5fSBzdG9wQ29sb3I9XCIjQkMyNjAyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PXsxfSBzdG9wQ29sb3I9XCIjQjcyNDAxXCIgLz5cbiAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgICAgICAgICAgICBpZD1cImNsb2NrX3N2Z19fcGFpbnQ5X2xpbmVhclwiXG4gICAgICAgICAgICAgICAgICAgIHgxPXsxMn1cbiAgICAgICAgICAgICAgICAgICAgeTE9ezE0LjAxNn1cbiAgICAgICAgICAgICAgICAgICAgeDI9ezEyfVxuICAgICAgICAgICAgICAgICAgICB5Mj17MTAuOTYyfVxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiIzk3QUFBQVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD17MX0gc3RvcENvbG9yPVwiI0U4RUZFRVwiIC8+XG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjbG9ja19zdmdfX3BhaW50MTBfbGluZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgeDE9ezEyfVxuICAgICAgICAgICAgICAgICAgICB5MT17MS43MTl9XG4gICAgICAgICAgICAgICAgICAgIHgyPXsxMn1cbiAgICAgICAgICAgICAgICAgICAgeTI9ezQuMzE0fVxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI2ZmZlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD17MX0gc3RvcENvbG9yPVwiI0U4RUZFRVwiIC8+XG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjbG9ja19zdmdfX3BhaW50MTFfbGluZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgeDE9ezEyfVxuICAgICAgICAgICAgICAgICAgICB5MT17MTkuMTczfVxuICAgICAgICAgICAgICAgICAgICB4Mj17MTJ9XG4gICAgICAgICAgICAgICAgICAgIHkyPXsyMS43Njd9XG4gICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjZmZmXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PXsxfSBzdG9wQ29sb3I9XCIjRThFRkVFXCIgLz5cbiAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgICAgICAgICAgICBpZD1cImNsb2NrX3N2Z19fcGFpbnQxMl9saW5lYXJcIlxuICAgICAgICAgICAgICAgICAgICB4MT17MjIuMjAyfVxuICAgICAgICAgICAgICAgICAgICB5MT17MjkuMjk2fVxuICAgICAgICAgICAgICAgICAgICB4Mj17MTkuNjA3fVxuICAgICAgICAgICAgICAgICAgICB5Mj17LTEuMTN9XG4gICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjZmZmXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PXsxfSBzdG9wQ29sb3I9XCIjRThFRkVFXCIgLz5cbiAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgICAgICAgICAgICBpZD1cImNsb2NrX3N2Z19fcGFpbnQxM19saW5lYXJcIlxuICAgICAgICAgICAgICAgICAgICB4MT17NC43NDh9XG4gICAgICAgICAgICAgICAgICAgIHkxPXsyOS4yOTZ9XG4gICAgICAgICAgICAgICAgICAgIHgyPXsyLjE1NH1cbiAgICAgICAgICAgICAgICAgICAgeTI9ey0xLjEzfVxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI2ZmZlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD17MX0gc3RvcENvbG9yPVwiI0U4RUZFRVwiIC8+XG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICA8cmFkaWFsR3JhZGllbnRcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjbG9ja19zdmdfX3BhaW50M19yYWRpYWxcIlxuICAgICAgICAgICAgICAgICAgICBjeD17MH1cbiAgICAgICAgICAgICAgICAgICAgY3k9ezB9XG4gICAgICAgICAgICAgICAgICAgIHI9ezF9XG4gICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VHJhbnNmb3JtPVwidHJhbnNsYXRlKDEyLjcwNiAxMi45MTYpIHNjYWxlKDExLjMwNTkpXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD17MH0gc3RvcENvbG9yPVwiIzFBQ0VCOFwiIHN0b3BPcGFjaXR5PXswfSAvPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcFxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PXswLjUwNH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BDb2xvcj1cIiMxOUNDQjdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcE9wYWNpdHk9ezAuNTAzfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcFxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PXswLjY4NX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BDb2xvcj1cIiMxN0M1QjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcE9wYWNpdHk9ezAuNjg1fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcFxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PXswLjgxNH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BDb2xvcj1cIiMxMkJBQUVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcE9wYWNpdHk9ezAuODE0fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcFxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PXswLjkxOH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BDb2xvcj1cIiMwQ0E5QTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcE9wYWNpdHk9ezAuOTE4fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezF9IHN0b3BDb2xvcj1cIiMwNDk1OUNcIiAvPlxuICAgICAgICAgICAgICAgIDwvcmFkaWFsR3JhZGllbnQ+XG4gICAgICAgICAgICA8L2RlZnM+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnQ2xvY2tcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdDb3VyaWVyKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2ZyBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDY0IDY0XCIgd2lkdGg9XCIxZW1cIiB7Li4ucHJvcHN9PlxuICAgICAgICAgICAgPHBhdGggZD1cIk01OCA0NC4xNFY2MUgzNlY0NC4xNEw0NyA0MXpcIiBmaWxsPVwiI2ZmNzk1NlwiIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMzYgOGMwIDIuMjEtNCA4LTQgOHMtNC01Ljc5LTQtOGE0IDQgMCAwMTggMHpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjZmZkYTQ0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTQ0IDUxaDZ2MTBoLTZ6XCIgZmlsbD1cIiNjZDJhMDBcIiAvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk02MSA0MXY0bC0xNC00LTE0IDR2LTRsMTQtNHpcIiBmaWxsPVwiI2ZmNTAyM1wiIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMjQgNTRoLTEuNWExMS41IDExLjUgMCAwMTAtMjNINDNhNSA1IDAgMDAwLTEwaC00di0yaDRhNyA3IDAgMDEwIDE0SDIyLjVhOS41IDkuNSAwIDAwMCAxOUgyNHpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjMWE2ZmIwXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTMyIDEwYTIgMiAwIDExMi0yIDIgMiAwIDAxLTIgMnpcIiBmaWxsPVwiI2ZmZlwiIC8+XG4gICAgICAgICAgICA8ZyBmaWxsPVwiIzFhNmZiMFwiPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjYgNTJoMnYyaC0yek0zMCA1MmgydjJoLTJ6TTMxIDE5aDJ2MmgtMnpNMzUgMTloMnYyaC0yelwiIC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTE0IDNoN3YzaC03ek0zIDNoN3YzSDN6XCIgZmlsbD1cIiNmZjk4MTFcIiAvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0zIDZoMTh2MTVIM3pcIiBmaWxsPVwiI2ZmZGE0NFwiIC8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTYgMTVoNHYySDZ6XCIgZmlsbD1cIiNmZmZcIiAvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0zIDZoMTh2MUgzelwiIGZpbGw9XCIjY2M3NDAwXCIgLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTQgNnYybC00IDFWM2g0elwiIGZpbGw9XCIjZDgwMDI3XCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdDb3VyaWVyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnRW1vamkocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMiAyMi43NUM2LjA3MiAyMi43NSAxLjI1IDE3LjkyOCAxLjI1IDEyUzYuMDcyIDEuMjUgMTIgMS4yNSAyMi43NSA2LjA3MiAyMi43NSAxMiAxNy45MjggMjIuNzUgMTIgMjIuNzV6bTAtMjBDNi45IDIuNzUgMi43NSA2LjkgMi43NSAxMlM2LjkgMjEuMjUgMTIgMjEuMjVzOS4yNS00LjE1IDkuMjUtOS4yNVMxNy4xIDIuNzUgMTIgMi43NXpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMiAxNy4xMTVhNS41MDkgNS41MDkgMCAwMS00LjY1Ni0yLjU0NC43NDguNzQ4IDAgMDEuMjI2LTEuMDM1Ljc0Ny43NDcgMCAwMTEuMDM2LjIyNiA0LjAyIDQuMDIgMCAwMDMuMzk1IDEuODU1IDQuMDI0IDQuMDI0IDAgMDAzLjM5Ni0xLjg1NC43NDcuNzQ3IDAgMDExLjAzNi0uMjI1Yy4zNS4yMjQuNDUuNjg4LjIyNiAxLjAzNmE1LjUxNiA1LjUxNiAwIDAxLTQuNjU4IDIuNTQ1TDEyIDE3LjExNXpNMTQuNzM4IDEwLjkzNmExLjQ3OCAxLjQ3OCAwIDEwMC0yLjk1NiAxLjQ3OCAxLjQ3OCAwIDAwMCAyLjk1NnpNOS4yNjIgMTAuOTM2YTEuNDc4IDEuNDc4IDAgMTAwLTIuOTU2IDEuNDc4IDEuNDc4IDAgMDAwIDIuOTU2elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0Vtb2ppXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnRXhwbG9yZShwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE3LjUgNi4xMTRoLTMuMjc1bC4zMS0zLjU2YS42MjYuNjI2IDAgMDAtMS4yNDUtLjEwN2wtLjMyIDMuNjY2SDcuNzA1bC4zMDgtMy41NThhLjYyNS42MjUgMCAxMC0xLjI0NC0uMTA4TDYuNDUgNi4xMTNIMy4xNTJhLjYyNi42MjYgMCAwMDAgMS4yNWgzLjE5bC0uNDU5IDUuMjczSDIuNWEuNjI1LjYyNSAwIDAwMCAxLjI1aDMuMjc1bC0uMzEgMy41NmEuNjI2LjYyNiAwIDAwLjU2OC42NzZsLjA1NS4wMDNjLjMyMSAwIC41OTQtLjI0Ni42MjItLjU3MmwuMzItMy42NjZoNS4yNjZsLS4zMDggMy41NThhLjYyNi42MjYgMCAwMC41NjguNjc3bC4wNTUuMDAzYy4zMiAwIC41OTMtLjI0Ni42MjEtLjU3MmwuMzE5LTMuNjY2aDMuMjk3Yy4zNDUgMCAuNjI1LS4yODEuNjI1LS42MjVhLjYyNi42MjYgMCAwMC0uNjI1LS42MjVoLTMuMTlsLjQ1OS01LjI3M0gxNy41YS42MjUuNjI1IDAgMDAwLTEuMjV6bS01LjA5NiA2LjUyMkg3LjEzOGwuNDU4LTUuMjcyaDUuMjY3bC0uNDU5IDUuMjcyelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0V4cGxvcmVcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdFeHBsb3JlRmlsbChwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE3LjE1NCA3Ljg5Yy41NSAwIDEtLjQ0OCAxLTFzLS40NS0xLTEtMWgtMi42ODNsLjI1OC0yLjk1NmExIDEgMCAwMC0uOTE2LTEuMDgzYy0uNTQxLS4wMy0xLjAyOS4zNi0xLjA3Ny45MWwtLjI3MiAzLjEyOUg4LjI1bC4yNTctMi45NTRhMS4wMDIgMS4wMDIgMCAwMC0uOTE0LTEuMDg1Ljk5Ny45OTcgMCAwMC0xLjA3OC45MWwtLjI3IDMuMTI4SDMuNDY4YTEgMSAwIDAwMCAyaDIuNjAybC0uMzY3IDQuMjJIMi44NDdhMS4wMDIgMS4wMDIgMCAwMDAgMi4wMDJINS41M2wtLjI1OCAyLjk1NmMtLjA0OC41NDguMzYgMS4wMzQuOTA4IDEuMDg0bC4wODguMDA0Yy41MjIgMCAuOTUtLjM5My45OTYtLjkxNWwuMjczLTMuMTI3aDQuMjEzbC0uMjU3IDIuOTUzYy0uMDUuNTQ4LjM1OSAxLjAzNS45MDkgMS4wODVsLjA4OC4wMDRjLjUxNCAwIC45NTItLjQwMi45OTYtLjkxNWwuMjctMy4xMjdoMi43NzZjLjU1IDAgMS0uNDUgMS0xcy0uNDUtMS4wMDItMS0xLjAwMkgxMy45M2wuMzY3LTQuMjJoMi44NThWNy44OXptLTQuODY1IDBsLS4zNjcgNC4yMkg3LjcxMWwuMzY3LTQuMjJoNC4yMTJ6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnRXhwbG9yZUZpbGxcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdHaWYocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xOSAxMC41VjguOGgtNC40djYuNGgxLjd2LTJoMnYtMS43aC0ydi0xSDE5em0tNy4zLTEuN2gxLjd2Ni40aC0xLjdWOC44em0tMy42IDEuNmMuNCAwIC45LjIgMS4yLjVsMS4yLTFDOS45IDkuMiA5IDguOCA4LjEgOC44Yy0xLjggMC0zLjIgMS40LTMuMiAzLjIgMCAxLjggMS40IDMuMiAzLjIgMy4yIDEgMCAxLjgtLjQgMi40LTEuMXYtMi41SDcuN3YxLjJoMS4ydi42Yy0uMi4xLS41LjItLjguMi0uOSAwLTEuNi0uNy0xLjYtMS42IDAtLjguNy0xLjYgMS42LTEuNnpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0yMC41IDIuMDJoLTE3YTIuMjUgMi4yNSAwIDAwLTIuMjUgMi4yNDd2MTUuNTA3QTIuMjUxIDIuMjUxIDAgMDAzLjUgMjIuMDJoMTdjMS4yNCAwIDIuMjUtMS4wMDggMi4yNS0yLjI0NlY0LjI2N0EyLjI1IDIuMjUgMCAwMDIwLjUgMi4wMnptLjc1IDE3Ljc1NGEuNzUuNzUgMCAwMS0uNzUuNzQ2aC0xN2EuNzUuNzUgMCAwMS0uNzUtLjc0NlY0LjI2N2MwLS40MTIuMzM2LS43NDcuNzUtLjc0N2gxN2MuNDE0IDAgLjc1LjMzNS43NS43NDd2MTUuNTA3elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0dpZlxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z0hvbWUocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xOC43MTcgNi4zMDhsLTguNDItNC41NDVhLjYyNi42MjYgMCAwMC0uNTk0IDBMMS4yODYgNi4zMDhhLjYyNi42MjYgMCAwMC41OTQgMS4xbC42OC0uMzY2IDEuMzU3IDkuNTk0Yy4xNzggMS4wMTIgMS4wOSAxLjcxOCAyLjIxNSAxLjcxOGg3LjczNWMxLjEyNiAwIDIuMDM3LS43MDYgMi4yMTktMS43MzlMMTcuNDQgNy4wNGwuNjgxLjM2OGEuNjMuNjMgMCAwMC44NDgtLjI1My42MjYuNjI2IDAgMDAtLjI1My0uODQ3ek0xNC44NTIgMTYuNDJjLS4wOS41MDUtLjU4Ni42ODUtLjk4NC42ODVINi4xMzNjLS40IDAtLjg5NS0uMTgtLjk4MS0uNjY1TDMuNzMzIDYuNDEgMTAgMy4wMjJsNi4yNjggMy4zODQtMS40MTYgMTAuMDEyelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTYuODUgMTAuMTUzYTMuMTUzIDMuMTUzIDAgMDAzLjE1IDMuMTUgMy4xNTMgMy4xNTMgMCAwMDMuMTUtMy4xNUEzLjE1MyAzLjE1MyAwIDAwMTAgNy4wMDNhMy4xNTMgMy4xNTMgMCAwMC0zLjE1IDMuMTV6bTUuMDUgMGExLjkwMSAxLjkwMSAwIDAxLTMuOCAwYzAtMS4wNDguODUyLTEuOSAxLjktMS45czEuOS44NTIgMS45IDEuOXpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdIb21lXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnSG9tZUZpbGwocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xOC44MTcgNi4xMjVsLTguNDIxLTQuNTQ0YS44MzMuODMzIDAgMDAtLjc5MiAwTDEuMTg4IDYuMTI1YS44MzUuODM1IDAgMDAuNzkxIDEuNDY4bC42MTItLjMzIDEuMzI1IDkuMzc1Yy4xOCAxLjAxMSAxLjA5MiAxLjcxOCAyLjIxNyAxLjcxOGg3LjczNGMxLjEyNSAwIDIuMDM3LS43MDcgMi4yMTktMS43NGwxLjMyMy05LjM1NC42MTQuMzMxYS44MzIuODMyIDAgMTAuNzkyLTEuNDY1bC4wMDItLjAwM3pNMTAgMTIuODYzYTIuNzA4IDIuNzA4IDAgMTEwLTUuNDE3IDIuNzA4IDIuNzA4IDAgMDEwIDUuNDE3elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0hvbWVGaWxsXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnTGlrZShwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEyIDIxLjYzOGgtLjAxNEM5LjQwMyAyMS41OSAxLjk1IDE0Ljg1NiAxLjk1IDguNDc4YzAtMy4wNjQgMi41MjUtNS43NTQgNS40MDMtNS43NTQgMi4yOSAwIDMuODMgMS41OCA0LjY0NiAyLjczLjgxNC0xLjE0OCAyLjM1NC0yLjczIDQuNjQ1LTIuNzMgMi44OCAwIDUuNDA0IDIuNjkgNS40MDQgNS43NTUgMCA2LjM3Ni03LjQ1NCAxMy4xMS0xMC4wMzcgMTMuMTU3SDEydi4wMDJ6TTcuMzU0IDQuMjI1Yy0yLjA4IDAtMy45MDMgMS45ODgtMy45MDMgNC4yNTUgMCA1Ljc0IDcuMDM0IDExLjU5NiA4LjU1IDExLjY1OCAxLjUxOC0uMDYyIDguNTUtNS45MTcgOC41NS0xMS42NTggMC0yLjI2Ny0xLjgyMy00LjI1NS0zLjkwMy00LjI1NS0yLjUyOCAwLTMuOTQgMi45MzYtMy45NTIgMi45NjUtLjIzLjU2Mi0xLjE1Ni41NjItMS4zODcgMC0uMDE0LS4wMy0xLjQyNS0yLjk2NS0zLjk1NC0yLjk2NWgtLjAwMXpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdMaWtlXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnTGlzdChwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE2LjQ1OCAxOC4zMzNIMy41NDJhMS44NzggMS44NzggMCAwMS0xLjg3NS0xLjg3NVYzLjU0MmMwLTEuMDM0Ljg0MS0xLjg3NSAxLjg3NS0xLjg3NWgxMi45MTZjMS4wMzQgMCAxLjg3NS44NDEgMS44NzUgMS44NzV2MTIuOTE2YTEuODc4IDEuODc4IDAgMDEtMS44NzUgMS44NzV6TTMuNTQyIDIuOTE3YS42MjYuNjI2IDAgMDAtLjYyNS42MjV2MTIuOTE2YzAgLjM0NS4yOC42MjUuNjI1LjYyNWgxMi45MTZjLjM0NSAwIC42MjUtLjI4LjYyNS0uNjI1VjMuNTQyYS42MjYuNjI2IDAgMDAtLjYyNS0uNjI1SDMuNTQyelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE0LjE2NyA3LjJINS44MzNhLjYyNi42MjYgMCAwMTAtMS4yNWg4LjMzNGEuNjI1LjYyNSAwIDExMCAxLjI1em0wIDMuNDI1SDUuODMzYS42MjUuNjI1IDAgMDEwLTEuMjVoOC4zMzRhLjYyNS42MjUgMCAwMTAgMS4yNXpNMTAgMTQuMDVINS44MzNhLjYyNS42MjUgMCAxMTAtMS4yNUgxMGEuNjI2LjYyNiAwIDAxMCAxLjI1elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0xpc3RcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdMaXN0RmlsbChwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE2LjQ1OCAxLjY2N0gzLjU0MmMtMS4wMzEgMC0xLjg3NS44NDQtMS44NzUgMS44NzV2MTIuOTE2YzAgMS4wMzEuODQ0IDEuODc1IDEuODc1IDEuODc1aDEyLjkxNmMxLjAzMSAwIDEuODc1LS44NDQgMS44NzUtMS44NzVWMy41NDJjMC0xLjAzMS0uODQ0LTEuODc1LTEuODc1LTEuODc1ek05LjE2NyAxMy45NThINS44MzNhLjYyNS42MjUgMCAwMTAtMS4yNWgzLjMzNGEuNjI1LjYyNSAwIDAxMCAxLjI1em01LTMuMzMzSDUuODMzYS42MjUuNjI1IDAgMDEwLTEuMjVoOC4zMzRhLjYyNS42MjUgMCAwMTAgMS4yNXptMC0zLjMzM0g1LjgzM2EuNjI1LjYyNSAwIDAxMC0xLjI1aDguMzM0YS42MjUuNjI1IDAgMDEwIDEuMjV6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnTGlzdEZpbGxcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdNYXJrKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTYuNTgzIDE5LjU4M2EuNjI5LjYyOSAwIDAxLS4zNjgtLjEyTDEwIDE0Ljk0bC02LjIxNSA0LjUyNWEuNjI1LjYyNSAwIDAxLS45OTMtLjUwNlY0LjY2N2MwLTEuMDM0Ljg0MS0xLjg3NSAxLjg3NS0xLjg3NWgxMC42NjVjMS4wMzMgMCAxLjg3NS44NDEgMS44NzUgMS44NzV2MTQuMjkxYS42MjQuNjI0IDAgMDEtLjYyNS42MjVoLjAwMXpNMTAgMTMuNTQyYy4xMyAwIC4yNTguMDQuMzY3LjEybDUuNTkxIDQuMDY5VjQuNjY3YS42MjcuNjI3IDAgMDAtLjYyNS0uNjI1SDQuNjY3YS42MjcuNjI3IDAgMDAtLjYyNS42MjVWMTcuNzNsNS41OTEtNC4wN2EuNjE3LjYxNyAwIDAxLjM2Ny0uMTJ6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnTWFya1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z01hcmtGaWxsKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTYuNTgzIDE5LjU4M2MtLjE2NiAwLS4yNSAwLS4zMzMtLjA4M0wxMCAxNC45MTdsLTYuMjUgNC41Yy0uMTY3LjE2Ni0uNDE3LjE2Ni0uNjY3LjA4My0uMTY2LS4wODMtLjMzMy0uMzMzLS4zMzMtLjU4M1Y0LjY2N2MwLTEgLjgzMy0xLjgzNCAxLjgzMy0xLjgzNEgxNS4yNWMxIDAgMS44MzMuODM0IDEuODMzIDEuODM0djE0LjI1YzAgLjI1LS4xNjYuNDE2LS4zMzMuNTgzIDAgLjA4My0uMDgzLjA4My0uMTY3LjA4M3pcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdNYXJrRmlsbFxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z01lZGlhKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTkuNzUgMkg0LjI1QzMuMDEgMiAyIDMuMDEgMiA0LjI1djE1LjVDMiAyMC45OSAzLjAxIDIyIDQuMjUgMjJoMTUuNWMxLjI0IDAgMi4yNS0xLjAxIDIuMjUtMi4yNVY0LjI1QzIyIDMuMDEgMjAuOTkgMiAxOS43NSAyek00LjI1IDMuNWgxNS41Yy40MTMgMCAuNzUuMzM3Ljc1Ljc1djkuNjc2bC0zLjg1OC0zLjg1OGEuNzUuNzUgMCAwMC0uNTMtLjIyaC0uMDAzYS43NC43NCAwIDAwLS41MzIuMjI0bC00LjMxNyA0LjM4NC0xLjgxMy0xLjgwNmEuNzUuNzUgMCAwMC0uNTMtLjIyYy0uMTkzLS4wMy0uMzk1LjA4LS41MzUuMjI3TDMuNSAxNy42NDJWNC4yNWMwLS40MTMuMzM3LS43NS43NS0uNzV6bS0uNzQ0IDE2LjI4bDUuNDE4LTUuNTM0IDYuMjgyIDYuMjU0SDQuMjVhLjc1Ljc1IDAgMDEtLjc0NC0uNzJ6bTE2LjI0NC43MmgtMi40MmwtNS4wMDctNC45ODcgMy43OTItMy44NSA0LjM4NSA0LjM4NHYzLjcwM2MwIC40MTMtLjMzNy43NS0uNzUuNzV6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNOC44NjggOS44NTFhMS41NDIgMS41NDIgMCAxMDAtMy4wODQgMS41NDIgMS41NDIgMCAwMDAgMy4wODR6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnTWVkaWFcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdNZXNzYWdlKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTYuMDQyIDIuNTE1SDMuOTU4YTIuMjk0IDIuMjk0IDAgMDAtMi4yOTEgMi4yOTN2MTAuNDEzYTIuMjk1IDIuMjk1IDAgMDAyLjI5MSAyLjI5NGgxMi4wODRhMi4yOTUgMi4yOTUgMCAwMDIuMjkxLTIuMjk0VjQuODA4YTIuMjk0IDIuMjk0IDAgMDAtMi4yOTEtMi4yOTN6TTMuOTU4IDMuNzY1aDEyLjA4NGMuNTc1IDAgMS4wNDEuNDY3IDEuMDQxIDEuMDQydi41OTVsLTYuNzA4IDQuNDcyYS42NzUuNjc1IDAgMDEtLjc1LS4wMDJsLTYuNzA4LTQuNDd2LS41OTVjMC0uNTc1LjQ2Ni0xLjA0MiAxLjA0MS0xLjA0MnptMTIuMDg0IDEyLjQ5OEgzLjk1OGExLjA0MiAxLjA0MiAwIDAxLTEuMDQxLTEuMDQxVjYuODY3bDYuMDMzIDQuMDI1YTEuODg4IDEuODg4IDAgMDAyLjEgMGw2LjAzMy00LjAyNHY4LjM1MWMwIC41NzUtLjQ2NiAxLjA0Mi0xLjA0MSAxLjA0MnYuMDAyelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z01lc3NhZ2VcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdNZXNzYWdlRmlsbChwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTkuNjI1IDEwLjA2OGEuNjc1LjY3NSAwIDAwLjc1IDBsNy45NTgtNS4zMDV2LS4xOGExLjg3OCAxLjg3OCAwIDAwLTEuODc1LTEuODc1SDMuNTQyYTEuODc4IDEuODc4IDAgMDAtMS44NzUgMS44NzV2LjE2NGw3Ljk1OCA1LjMyMXpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMS4wNSAxMS4wOGExLjg4OCAxLjg4OCAwIDAxLTIuMS0uMDAyTDEuNjY3IDYuMjF2OS43MjVjMCAxLjAzMy44NDEgMS44NzUgMS44NzUgMS44NzVoMTIuOTE2YTEuODc4IDEuODc4IDAgMDAxLjg3NS0xLjg3NXYtOS43MWwtNy4yODMgNC44NTN2LjAwMXpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdNZXNzYWdlRmlsbFxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z01vbmV5KHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTIgMjRjNi42MjcgMCAxMi01LjM3MyAxMi0xMlMxOC42MjcgMCAxMiAwIDAgNS4zNzMgMCAxMnM1LjM3MyAxMiAxMiAxMnpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjMzM0RDVDXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIG9wYWNpdHk9ezAuMX1cbiAgICAgICAgICAgICAgICBkPVwiTTE0LjIwMyA1Ljk1Mkw1LjEyNSA5LjE0OXYxLjAyMmwuMTMuMTMtLjEzLjA0OHYxLjAyMmwuMTMuMTMtLjEzLjA0OHYxLjAyMmwuMTMuMTMtLjEzLjA0OHYxLjAyMmwuMTMuMTMtLjEzLjA0OHYxLjAyMmw4Ljg2MyA4Ljg2M2M1LjQ2Ny0uOTEyIDkuNjgzLTUuNTE3IDkuOTkzLTExLjE2NkwxOC44NzUgNy41NmwtNC42NzItMS42MDd6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTYuNjU0IDEyLjYxOGwtMi40NS0uODQ1LTQuNzYyIDEuNjc3LTQuMzE3LjQ5OHYxLjAyMmw0LjY3MSAxLjYxIDkuMDc5LTMuMTk3di0xLjAyMmwtMi4yMjEuMjU3elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiMzMTk3OENcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNC4yMDQgMTAuNzUybC05LjA3OSAzLjE5NiA0LjY3MSAxLjYxIDkuMDc5LTMuMTk3LTQuNjcxLTEuNjF6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzNFQTY5QlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTkuMTggMTUuMTE2bC0yLjc3OC0uOTU4Yy4zMzUtLjExOC4zMzItLjMwOC0uMDA3LS40MjRsNy4yMDYtMi41MzdjLjMzOC4xMTYuODg0LjExNSAxLjIyLS4wMDNsMi43NzcuOTU3Yy0uMzM1LjExOC0uMzMyLjMwOC4wMDcuNDI1bC03LjIwNiAyLjUzN2MtLjMzOS0uMTE2LS44ODQtLjExNS0xLjIyLjAwM3pcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjNDRDNEExXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuMjQ1IDEyLjcxNmMuODguMzA0IDEuMDM2Ljc0Ni4zNDguOTg4LS42ODcuMjQyLTEuOTU4LjE5Mi0yLjgzOC0uMTEtLjg4LS4zMDQtMS4wMzYtLjc0Ni0uMzQ4LS45ODguNjg3LS4yNDIgMS45NTgtLjE5MyAyLjgzOC4xMXpNMTUuODA5IDExLjgxNGMuMTU3LjA1NC4xNTguMTQyLjAwMy4xOTctLjE1Ni4wNTUtLjQxLjA1Ni0uNTY3LjAwMS0uMTU3LS4wNTQtLjE1OS0uMTQyLS4wMDMtLjE5Ny4xNTYtLjA1NS40MS0uMDU1LjU2Ni0uMDAxek04Ljc1NSAxNC4yOTdjLjE1Ny4wNTUuMTU5LjE0My4wMDMuMTk4LS4xNTYuMDU1LS40MS4wNTUtLjU2NyAwLS4xNTctLjA1My0uMTU4LS4xNDItLjAwMy0uMTk2LjE1Ni0uMDU1LjQxLS4wNTYuNTY3LS4wMDJ6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzNFQTY5QlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEzLjIxNiAxMy42MmwtLjIyNi0uMDc3YTQuMzg4IDQuMzg4IDAgMDEtMS4wOS4xNDlsLS4wNDctLjE3MmMuMzIyLS4wMDguNTg5LS4wNC44LS4wOTNsLS42MDEtLjIwN2E0LjE2NSA0LjE2NSAwIDAxLS43MjcuMTAyIDEuNTYyIDEuNTYyIDAgMDEtLjU2NS0uMDgyYy0uMTc4LS4wNjItLjI2Mi0uMTM0LS4yNTMtLjIxNi4wMS0uMDgzLjExLS4xNjEuMjk3LS4yMzRsLS4xNTUtLjA1NC4xOTYtLjA2OS4xNTguMDU1Yy4yNDEtLjA3NC41MzEtLjEyMi44Ny0uMTQ0bC4wODUuMTY4YTMuMTkxIDMuMTkxIDAgMDAtLjYxNy4wOTJsLjU4Mi4yLjAwOS0uMDAzYTQuMTYgNC4xNiAwIDAxLjc0My0uMTA0Yy4yMDYtLjAwNi4zOTkuMDIyLjU4LjA4NC4xOC4wNjIuMjY0LjEzNS4yNS4yMTktLjAxMy4wODQtLjExOC4xNjQtLjMxNi4yNGwuMjIzLjA3OC0uMTk2LjA2OXptLTIuMjE0LS42MTJjLS4wMDYuMDM1LjAyNi4wNjQuMDk1LjA4N2EuNjcuNjcgMCAwMC4yMjUuMDM1Yy4wODEgMCAuMTk4LS4wMTQuMzUtLjA0MmwtLjUzNy0uMTg0Yy0uMDgzLjAzNS0uMTI4LjA3LS4xMzMuMTA0em0yLjAwMi4yNGMuMDEtLjAzNS0uMDIyLS4wNjYtLjA5NC0uMDkxYS43LjcgMCAwMC0uMjQtLjAzNiAyLjMyIDIuMzIgMCAwMC0uMzcuMDQ4bC41NTguMTkyYy4wODctLjAzOC4xMzYtLjA3NS4xNDYtLjExMnpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjNDRDNEExXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTYuNjU0IDExLjQxOGwtMi40NS0uODQ1LTQuNzYyIDEuNjc3LTQuMzE3LjQ5OHYxLjAyMmw0LjY3MSAxLjYxIDkuMDc5LTMuMTk3VjExLjE2bC0yLjIyMS4yNTd6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzMxOTc4Q1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE0LjIwNCA5LjU1MmwtOS4wNzkgMy4xOTYgNC42NzEgMS42MSA5LjA3OS0zLjE5Ny00LjY3MS0xLjYxelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiMzRUE2OUJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk05LjE4IDEzLjkxNWwtMi43NzgtLjk1N2MuMzM1LS4xMTguMzMyLS4zMDgtLjAwNy0uNDI0bDcuMjA2LTIuNTM4Yy4zMzguMTE3Ljg4NC4xMTYgMS4yMi0uMDAybDIuNzc3Ljk1N2MtLjMzNS4xMTgtLjMzMi4zMDguMDA3LjQyNWwtNy4yMDYgMi41MzdjLS4zMzktLjExNy0uODg0LS4xMTYtMS4yMi4wMDJ6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzQ0QzRBMVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEzLjI0NSAxMS41MTZjLjg4LjMwNCAxLjAzNi43NDYuMzQ4Ljk4OC0uNjg3LjI0Mi0xLjk1OC4xOTMtMi44MzgtLjExLS44OC0uMzA0LTEuMDM2LS43NDYtLjM0OC0uOTg4LjY4Ny0uMjQyIDEuOTU4LS4xOTMgMi44MzguMTF6TTE1LjgwOSAxMC42MTRjLjE1Ny4wNTQuMTU4LjE0Mi4wMDMuMTk3LS4xNTYuMDU1LS40MS4wNTUtLjU2Ny4wMDEtLjE1Ny0uMDU0LS4xNTktLjE0Mi0uMDAzLS4xOTcuMTU2LS4wNTUuNDEtLjA1NS41NjYtLjAwMXpNOC43NTUgMTMuMDk3Yy4xNTcuMDU1LjE1OS4xNDMuMDAzLjE5OC0uMTU2LjA1NS0uNDEuMDU1LS41NjcgMC0uMTU3LS4wNTMtLjE1OC0uMTQyLS4wMDMtLjE5Ny4xNTYtLjA1NC40MS0uMDU1LjU2NyAwelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiMzRUE2OUJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMy4yMTYgMTIuNDJsLS4yMjYtLjA3N2E0LjM4OCA0LjM4OCAwIDAxLTEuMDkuMTQ5bC0uMDQ3LS4xNzJjLjMyMi0uMDA4LjU4OS0uMDQuOC0uMDk0bC0uNjAxLS4yMDdhNC4xNjUgNC4xNjUgMCAwMS0uNzI3LjEwMyAxLjU2MiAxLjU2MiAwIDAxLS41NjUtLjA4MmMtLjE3OC0uMDYyLS4yNjItLjEzNC0uMjUzLS4yMTYuMDEtLjA4My4xMS0uMTYxLjI5Ny0uMjM0bC0uMTU1LS4wNTQuMTk2LS4wNjkuMTU4LjA1NWMuMjQxLS4wNzQuNTMxLS4xMjIuODctLjE0NWwuMDg1LjE2OWEzLjE5MSAzLjE5MSAwIDAwLS42MTcuMDkybC41ODIuMi4wMDktLjAwM2E0LjE2IDQuMTYgMCAwMS43NDMtLjEwNGMuMjA2LS4wMDYuMzk5LjAyMi41OC4wODQuMTguMDYyLjI2NC4xMzUuMjUuMjE5LS4wMTMuMDg0LS4xMTguMTY0LS4zMTYuMjRsLjIyMy4wNzgtLjE5Ni4wNjl6bS0yLjIxNC0uNjEyYy0uMDA2LjAzNC4wMjYuMDYzLjA5NS4wODdhLjY3LjY3IDAgMDAuMjI1LjAzNWMuMDgxIDAgLjE5OC0uMDE0LjM1LS4wNDJsLS41MzctLjE4NGMtLjA4My4wMzUtLjEyOC4wNy0uMTMzLjEwNHptMi4wMDIuMjRjLjAxLS4wMzYtLjAyMi0uMDY2LS4wOTQtLjA5MWEuNzAyLjcwMiAwIDAwLS4yNC0uMDM2IDIuMzIgMi4zMiAwIDAwLS4zNy4wNDhsLjU1OC4xOTJjLjA4Ny0uMDM4LjEzNi0uMDc2LjE0Ni0uMTEyelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM0NEM0QTFcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNi42NTQgMTAuMjE3bC0yLjQ1LS44NDQtNC43NjIgMS42NzctNC4zMTcuNDk4djEuMDIybDQuNjcxIDEuNjEgOS4wNzktMy4xOTdWOS45NmwtMi4yMjEuMjU2elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiMzMTk3OENcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNC4yMDQgOC4zNTJsLTkuMDc5IDMuMTk2IDQuNjcxIDEuNjEgOS4wNzktMy4xOTctNC42NzEtMS42MXpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjM0VBNjlCXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNOS4xOCAxMi43MTVsLTIuNzc4LS45NTdjLjMzNS0uMTE4LjMzMi0uMzA4LS4wMDctLjQyNGw3LjIwNi0yLjUzOGMuMzM4LjExNy44ODQuMTE2IDEuMjItLjAwMmwyLjc3Ny45NTdjLS4zMzUuMTE4LS4zMzIuMzA4LjAwNy40MjVsLTcuMjA2IDIuNTM3Yy0uMzM5LS4xMTctLjg4NC0uMTE2LTEuMjIuMDAyelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM0NEM0QTFcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMy4yNDUgMTAuMzE2Yy44OC4zMDMgMS4wMzYuNzQ1LjM0OC45ODgtLjY4Ny4yNDItMS45NTguMTkyLTIuODM4LS4xMS0uODgtLjMwNC0xLjAzNi0uNzQ2LS4zNDgtLjk4OC42ODctLjI0MiAxLjk1OC0uMTkzIDIuODM4LjExek0xNS44MDkgOS40MTRjLjE1Ny4wNTQuMTU4LjE0Mi4wMDMuMTk3LS4xNTYuMDU1LS40MS4wNTUtLjU2Ny4wMDEtLjE1Ny0uMDU0LS4xNTktLjE0Mi0uMDAzLS4xOTcuMTU2LS4wNTUuNDEtLjA1NS41NjYtLjAwMXpNOC43NTUgMTEuODk3Yy4xNTcuMDU0LjE1OS4xNDMuMDAzLjE5OC0uMTU2LjA1NC0uNDEuMDU1LS41NjcgMC0uMTU3LS4wNTQtLjE1OC0uMTQyLS4wMDMtLjE5Ny4xNTYtLjA1NC40MS0uMDU1LjU2NyAwelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiMzRUE2OUJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMy4yMTYgMTEuMjJsLS4yMjYtLjA3N2E0LjM4MyA0LjM4MyAwIDAxLTEuMDkuMTQ5bC0uMDQ3LS4xNzJjLjMyMi0uMDA4LjU4OS0uMDQuOC0uMDk0bC0uNjAxLS4yMDdhNC4xNzYgNC4xNzYgMCAwMS0uNzI3LjEwMyAxLjU2MiAxLjU2MiAwIDAxLS41NjUtLjA4M2MtLjE3OC0uMDYxLS4yNjItLjEzMy0uMjUzLS4yMTYuMDEtLjA4Mi4xMS0uMTYuMjk3LS4yMzNsLS4xNTUtLjA1NC4xOTYtLjA2OS4xNTguMDU1Yy4yNDEtLjA3NC41MzEtLjEyMi44Ny0uMTQ1bC4wODUuMTY5YTMuMTkxIDMuMTkxIDAgMDAtLjYxNy4wOTJsLjU4Mi4yLjAwOS0uMDAzYTQuMTYgNC4xNiAwIDAxLjc0My0uMTA0Yy4yMDYtLjAwNi4zOTkuMDIyLjU4LjA4NC4xOC4wNjIuMjY0LjEzNS4yNS4yMTktLjAxMy4wODQtLjExOC4xNjQtLjMxNi4yNGwuMjIzLjA3OC0uMTk2LjA2OXptLTIuMjE0LS42MTJjLS4wMDYuMDM0LjAyNi4wNjMuMDk1LjA4Ny4wNjkuMDI0LjE0NC4wMzYuMjI1LjAzNS4wODEgMCAuMTk4LS4wMTQuMzUtLjA0MmwtLjUzNy0uMTg0Yy0uMDgzLjAzNS0uMTI4LjA3LS4xMzMuMTA0em0yLjAwMi4yNGMuMDEtLjAzNi0uMDIyLS4wNjYtLjA5NC0uMDkxYS43MDIuNzAyIDAgMDAtLjI0LS4wMzZjLS4wODcuMDAyLS4yMS4wMTctLjM3LjA0OGwuNTU4LjE5MmMuMDg3LS4wMzguMTM2LS4wNzYuMTQ2LS4xMTJ6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzQ0QzRBMVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE2LjY1NCA5LjAxN2wtMi40NS0uODQ0TDkuNDQyIDkuODVsLTQuMzE3LjQ5OHYxLjAyMmw0LjY3MSAxLjYxIDkuMDc5LTMuMTk3VjguNzZsLTIuMjIxLjI1NnpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjMzE5NzhDXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTQuMjA0IDcuMTUybC05LjA3OSAzLjE5NiA0LjY3MSAxLjYxIDkuMDc5LTMuMTk3LTQuNjcxLTEuNjF6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzNFQTY5QlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTkuMTggMTEuNTE1bC0yLjc3OC0uOTU3Yy4zMzUtLjExOC4zMzItLjMwOC0uMDA3LS40MjVsNy4yMDYtMi41MzdjLjMzOC4xMTcuODg0LjExNiAxLjIyLS4wMDJsMi43NzcuOTU3Yy0uMzM1LjExOC0uMzMyLjMwOC4wMDcuNDI1bC03LjIwNiAyLjUzN2MtLjMzOS0uMTE3LS44ODQtLjExNi0xLjIyLjAwMnpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjNDRDNEExXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuMjQ1IDkuMTE2Yy44OC4zMDMgMS4wMzYuNzQ1LjM0OC45ODgtLjY4Ny4yNDItMS45NTguMTkyLTIuODM4LS4xMTEtLjg4LS4zMDMtMS4wMzYtLjc0NS0uMzQ4LS45ODcuNjg3LS4yNDMgMS45NTgtLjE5MyAyLjgzOC4xMXpNMTUuODA5IDguMjE0Yy4xNTcuMDU0LjE1OC4xNDIuMDAzLjE5Ny0uMTU2LjA1NS0uNDEuMDU1LS41NjcuMDAxLS4xNTctLjA1NC0uMTU5LS4xNDMtLjAwMy0uMTk3LjE1Ni0uMDU1LjQxLS4wNTYuNTY2LS4wMDF6TTguNzU1IDEwLjY5N2MuMTU3LjA1NC4xNTkuMTQzLjAwMy4xOTgtLjE1Ni4wNTQtLjQxLjA1NS0uNTY3IDAtLjE1Ny0uMDU0LS4xNTgtLjE0Mi0uMDAzLS4xOTcuMTU2LS4wNTUuNDEtLjA1NS41NjcgMHpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjM0VBNjlCXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuMjE2IDEwLjAybC0uMjI2LS4wNzdhNC4zODggNC4zODggMCAwMS0xLjA5LjE0OWwtLjA0Ny0uMTcyYy4zMjItLjAwOC41ODktLjA0LjgtLjA5NGwtLjYwMS0uMjA3YTQuMTc0IDQuMTc0IDAgMDEtLjcyNy4xMDMgMS41NjMgMS41NjMgMCAwMS0uNTY1LS4wODNjLS4xNzgtLjA2MS0uMjYyLS4xMzMtLjI1My0uMjE2LjAxLS4wODIuMTEtLjE2LjI5Ny0uMjM0bC0uMTU1LS4wNTMuMTk2LS4wNjkuMTU4LjA1NGMuMjQxLS4wNzMuNTMxLS4xMjEuODctLjE0NGwuMDg1LjE2OGEzLjE4OCAzLjE4OCAwIDAwLS42MTcuMDkzbC41ODIuMi4wMDktLjAwM2MuMjktLjA2My41MzgtLjA5OC43NDMtLjEwNC4yMDYtLjAwNi4zOTkuMDIyLjU4LjA4NC4xOC4wNjIuMjY0LjEzNS4yNS4yMTktLjAxMy4wODMtLjExOC4xNjQtLjMxNi4yNGwuMjIzLjA3Ny0uMTk2LjA3em0tMi4yMTQtLjYxMmMtLjAwNi4wMzQuMDI2LjA2My4wOTUuMDg3LjA2OS4wMjQuMTQ0LjAzNi4yMjUuMDM1LjA4MSAwIC4xOTgtLjAxNC4zNS0uMDQybC0uNTM3LS4xODRjLS4wODMuMDM1LS4xMjguMDctLjEzMy4xMDR6bTIuMDAyLjI0Yy4wMS0uMDM2LS4wMjItLjA2Ni0uMDk0LS4wOTFhLjcuNyAwIDAwLS4yNC0uMDM2IDIuMzIgMi4zMiAwIDAwLS4zNy4wNDhsLjU1OC4xOTJjLjA4Ny0uMDM5LjEzNi0uMDc2LjE0Ni0uMTEyelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM0NEM0QTFcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNi42NTQgNy44MTdsLTIuNDUtLjg0NEw5LjQ0MiA4LjY1bC00LjMxNy40OTh2MS4wMjJsNC42NzEgMS42MSA5LjA3OS0zLjE5N1Y3LjU2bC0yLjIyMS4yNTZ6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzMxOTc4Q1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE0LjIwNCA1Ljk1MUw1LjEyNSA5LjE0OGw0LjY3MSAxLjYxIDkuMDc5LTMuMTk3LTQuNjcxLTEuNjF6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzNFQTY5QlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTkuMTggMTAuMzE1bC0yLjc3OC0uOTU3Yy4zMzUtLjExOC4zMzItLjMwOC0uMDA3LS40MjVsNy4yMDYtMi41MzdjLjMzOC4xMTcuODg0LjExNiAxLjIyLS4wMDJsMi43NzcuOTU3Yy0uMzM1LjExOC0uMzMyLjMwOC4wMDcuNDI1bC03LjIwNiAyLjUzN2MtLjMzOS0uMTE3LS44ODQtLjExNi0xLjIyLjAwMnpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjNDRDNEExXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuMjQ1IDcuOTE2Yy44OC4zMDMgMS4wMzYuNzQ1LjM0OC45ODctLjY4Ny4yNDMtMS45NTguMTkzLTIuODM4LS4xMS0uODgtLjMwMy0xLjAzNi0uNzQ1LS4zNDgtLjk4OC42ODctLjI0MiAxLjk1OC0uMTkyIDIuODM4LjExMXpNMTUuODA5IDcuMDE0Yy4xNTcuMDU0LjE1OC4xNDIuMDAzLjE5Ny0uMTU2LjA1NS0uNDEuMDU1LS41NjcgMC0uMTU3LS4wNTMtLjE1OS0uMTQyLS4wMDMtLjE5Ni4xNTYtLjA1NS40MS0uMDU2LjU2Ni0uMDAxek04Ljc1NSA5LjQ5N2MuMTU3LjA1NC4xNTkuMTQzLjAwMy4xOTctLjE1Ni4wNTUtLjQxLjA1Ni0uNTY3LjAwMS0uMTU3LS4wNTQtLjE1OC0uMTQyLS4wMDMtLjE5Ny4xNTYtLjA1NS40MS0uMDU1LjU2NyAwelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiMzRUE2OUJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMy4yMTYgOC44MmwtLjIyNi0uMDc4YTQuMzg2IDQuMzg2IDAgMDEtMS4wOS4xNWwtLjA0Ny0uMTcyYy4zMjItLjAwOC41ODktLjA0LjgtLjA5NGwtLjYwMS0uMjA3YTQuMTc0IDQuMTc0IDAgMDEtLjcyNy4xMDMgMS41NjMgMS41NjMgMCAwMS0uNTY1LS4wODNjLS4xNzgtLjA2MS0uMjYyLS4xMzMtLjI1My0uMjE2LjAxLS4wODIuMTEtLjE2LjI5Ny0uMjM0bC0uMTU1LS4wNTMuMTk2LS4wNjkuMTU4LjA1NGMuMjQxLS4wNzMuNTMxLS4xMjEuODctLjE0NGwuMDg1LjE2OGEzLjE4NyAzLjE4NyAwIDAwLS42MTcuMDkzbC41ODIuMi4wMDktLjAwM2MuMjktLjA2My41MzgtLjA5OC43NDMtLjEwNC4yMDYtLjAwNi4zOTkuMDIyLjU4LjA4NC4xOC4wNjIuMjY0LjEzNS4yNS4yMTktLjAxMy4wODMtLjExOC4xNjQtLjMxNi4yNGwuMjIzLjA3Ny0uMTk2LjA3em0tMi4yMTQtLjYxMmMtLjAwNi4wMzQuMDI2LjA2My4wOTUuMDg3LjA2OS4wMjQuMTQ0LjAzNi4yMjUuMDM1LjA4MSAwIC4xOTgtLjAxNC4zNS0uMDQybC0uNTM3LS4xODRjLS4wODMuMDM1LS4xMjguMDctLjEzMy4xMDR6bTIuMDAyLjI0Yy4wMS0uMDM2LS4wMjItLjA2Ny0uMDk0LS4wOTFhLjcuNyAwIDAwLS4yNC0uMDM2IDIuMzIgMi4zMiAwIDAwLS4zNy4wNDdsLjU1OC4xOTJjLjA4Ny0uMDM4LjEzNi0uMDc1LjE0Ni0uMTExelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM0NEM0QTFcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMy4yNyA5LjUzNHY1LjgyNGwyLjA4OC0uNzM1VjguNzk5bC0yLjA4OC43MzV6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI2ZmZlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEzLjUyIDkuNDQ3djUuODIzbC4yMTUtLjA3NlY5LjM3MWwtLjIxNi4wNzZ6TTE0Ljg5NCA4Ljk2M3Y1LjgyM2wuMjE1LS4wNzVWOC44ODZsLS4yMTUuMDc2elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNGQ0Q0NjJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNS4xMyAxNy4zMDJjMCAuNDEyLS43OTYuNzQ3LTEuNzc3Ljc0Ny0uOTggMC0xLjc3Ni0uMzM1LTEuNzc2LS43NDd2LS42MTFoMy41NTJ2LjYxelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNGNkMzNThcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMy4zNTIgMTcuNDM4Yy45ODIgMCAxLjc3Ny0uMzM1IDEuNzc3LS43NDdzLS43OTUtLjc0Ny0xLjc3Ny0uNzQ3Yy0uOTggMC0xLjc3Ni4zMzUtMS43NzYuNzQ3cy43OTUuNzQ3IDEuNzc2Ljc0N3pcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjRkNENDYyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuMzUzIDE2LjA5Yy0uODU2IDAtMS41NS4yNjktMS41NS42IDAgLjMzMy42OTQuNjAyIDEuNTUuNjAyLjg1NiAwIDEuNTUtLjI3IDEuNTUtLjYwMSAwLS4zMzItLjY5NC0uNjAxLTEuNTUtLjYwMXptMCAxLjEzNWMtLjc2IDAtMS4zNzgtLjI0LTEuMzc4LS41MzQgMC0uMjk1LjYxNy0uNTM0IDEuMzc4LS41MzQuNzYxIDAgMS4zNzguMjM5IDEuMzc4LjUzNCAwIC4yOTUtLjYxNy41MzQtMS4zNzguNTM0elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNEQzg3NDRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMy4yOTYgMTcuMTA2di0uMDczYTIuMjYgMi4yNiAwIDAxLS42MzUtLjExbC4xODgtLjA4NmMuMTQ1LjA0OC4yOTQuMDc3LjQ0Ny4wODd2LS4xOTVhMi4xNDggMi4xNDggMCAwMS0uNDI3LS4wN2MtLjA5LS4wMy0uMTM2LS4wNzQtLjEzNi0uMTMxIDAtLjA1OC4wNTItLjEwNS4xNTYtLjE0Mi4xMDQtLjAzNy4yNC0uMDU3LjQwNy0uMDZ2LS4wNWguMTY1di4wNWMuMTkuMDA2LjM2OS4wMzEuNTM4LjA3NmwtLjE2OC4wOTJhMS43NDUgMS43NDUgMCAwMC0uMzctLjA1OHYuMTg4aC4wMDhjLjE5OC4wMTguMzQ0LjA0My40MzcuMDczLjA5My4wMzEuMTQuMDc2LjE0LjEzNCAwIC4wNTktLjA1NC4xMDYtLjE2LjE0M2ExLjQxOCAxLjQxOCAwIDAxLS40MjUuMDZ2LjA3MmgtLjE2NXptLS4xODItLjY0N2MtLjA0NC4wMTUtLjA2Ni4wMzQtLjA2Ni4wNTYgMCAuMDIzLjAxNy4wNC4wNTIuMDU0LjAzNC4wMTMuMS4wMjUuMTk2LjAzN3YtLjE3M2EuNjU4LjY1OCAwIDAwLS4xODIuMDI2em0uNTQ0LjQ0Yy4wNDgtLjAxNi4wNzItLjAzNS4wNzItLjA1OSAwLS4wMjMtLjAxOS0uMDQxLS4wNTctLjA1NWExLjExIDEuMTEgMCAwMC0uMjEyLS4wMzl2LjE4YS43NjYuNzY2IDAgMDAuMTk3LS4wMjd6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0RDODc0NFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE1LjEzIDE2LjU2YzAgLjQxMi0uNzk2Ljc0Ny0xLjc3Ny43NDctLjk4IDAtMS43NzYtLjMzNS0xLjc3Ni0uNzQ3di0uNjExaDMuNTUydi42MXpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjRjZDMzU4XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuMzUyIDE2LjY5NWMuOTgyIDAgMS43NzctLjMzNCAxLjc3Ny0uNzQ2IDAtLjQxMy0uNzk1LS43NDctMS43NzctLjc0Ny0uOTggMC0xLjc3Ni4zMzQtMS43NzYuNzQ3IDAgLjQxMi43OTUuNzQ2IDEuNzc2Ljc0NnpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjRkNENDYyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuMzUzIDE1LjM0OGMtLjg1NiAwLTEuNTUuMjY5LTEuNTUuNiAwIC4zMzMuNjk0LjYwMiAxLjU1LjYwMi44NTYgMCAxLjU1LS4yNyAxLjU1LS42MDEgMC0uMzMyLS42OTQtLjYwMS0xLjU1LS42MDF6bTAgMS4xMzVjLS43NiAwLTEuMzc4LS4yNC0xLjM3OC0uNTM0IDAtLjI5NS42MTctLjUzNCAxLjM3OC0uNTM0Ljc2MSAwIDEuMzc4LjIzOSAxLjM3OC41MzQgMCAuMjk1LS42MTcuNTM0LTEuMzc4LjUzNHpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjREM4NzQ0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuMjk2IDE2LjM2NHYtLjA3M2EyLjI2IDIuMjYgMCAwMS0uNjM1LS4xMWwuMTg4LS4wODZjLjE0NS4wNDguMjk0LjA3Ny40NDcuMDg3di0uMTk0YTIuMTQ4IDIuMTQ4IDAgMDEtLjQyNy0uMDcyYy0uMDktLjAyOS0uMTM2LS4wNzItLjEzNi0uMTMgMC0uMDU4LjA1Mi0uMTA1LjE1Ni0uMTQyYTEuMzMgMS4zMyAwIDAxLjQwNy0uMDZ2LS4wNWguMTY1di4wNWMuMTkuMDA2LjM2OS4wMzEuNTM4LjA3NmwtLjE2OC4wOTJhMS43NDUgMS43NDUgMCAwMC0uMzctLjA1OHYuMTg4aC4wMDhjLjE5OC4wMTguMzQ0LjA0My40MzcuMDczLjA5My4wMzEuMTQuMDc2LjE0LjEzNCAwIC4wNTktLjA1NC4xMDYtLjE2LjE0M2ExLjQyMSAxLjQyMSAwIDAxLS40MjUuMDZ2LjA3MmgtLjE2NXptLS4xODItLjY0NmMtLjA0NC4wMTQtLjA2Ni4wMzMtLjA2Ni4wNTYgMCAuMDIyLjAxNy4wNC4wNTIuMDUzLjAzNC4wMTMuMS4wMjUuMTk2LjAzN3YtLjE3M2EuNjUzLjY1MyAwIDAwLS4xODIuMDI3em0uNTQ0LjQzOWMuMDQ4LS4wMTYuMDcyLS4wMzUuMDcyLS4wNTggMC0uMDI0LS4wMTktLjA0Mi0uMDU3LS4wNTZhMS4xMSAxLjExIDAgMDAtLjIxMi0uMDM4di4xOGEuNzY2Ljc2NiAwIDAwLjE5Ny0uMDI4elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNEQzg3NDRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNS4xMyAxNS44MThjMCAuNDEyLS43OTYuNzQ3LTEuNzc3Ljc0Ny0uOTggMC0xLjc3Ni0uMzM1LTEuNzc2LS43NDd2LS42MTFoMy41NTJ2LjYxelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNGNkMzNThcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMy4zNTIgMTUuOTU0Yy45ODIgMCAxLjc3Ny0uMzM1IDEuNzc3LS43NDdzLS43OTUtLjc0Ny0xLjc3Ny0uNzQ3Yy0uOTggMC0xLjc3Ni4zMzUtMS43NzYuNzQ3cy43OTUuNzQ3IDEuNzc2Ljc0N3pcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjRkNENDYyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuMzUzIDE0LjYwNmMtLjg1NiAwLTEuNTUuMjctMS41NS42MDEgMCAuMzMyLjY5NC42IDEuNTUuNi44NTYgMCAxLjU1LS4yNjggMS41NS0uNiAwLS4zMzItLjY5NC0uNjAxLTEuNTUtLjYwMXptMCAxLjEzNWMtLjc2IDAtMS4zNzgtLjIzOS0xLjM3OC0uNTM0IDAtLjI5NS42MTctLjUzNCAxLjM3OC0uNTM0Ljc2MSAwIDEuMzc4LjIzOSAxLjM3OC41MzQgMCAuMjk1LS42MTcuNTM0LTEuMzc4LjUzNHpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjREM4NzQ0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuMjk2IDE1LjYyMnYtLjA3M2EyLjI2IDIuMjYgMCAwMS0uNjM1LS4xMWwuMTg4LS4wODZjLjE0NS4wNDkuMjk0LjA3OC40NDcuMDg3di0uMTk0YTIuMTYzIDIuMTYzIDAgMDEtLjQyNy0uMDcyYy0uMDktLjAyOS0uMTM2LS4wNzItLjEzNi0uMTMgMC0uMDU4LjA1Mi0uMTA1LjE1Ni0uMTQyLjEwNC0uMDM3LjI0LS4wNTcuNDA3LS4wNnYtLjA1aC4xNjV2LjA1Yy4xOS4wMDYuMzY5LjAzMS41MzguMDc2bC0uMTY4LjA5MmExLjc1MiAxLjc1MiAwIDAwLS4zNy0uMDU4di4xODhoLjAwOGMuMTk4LjAxOC4zNDQuMDQzLjQzNy4wNzMuMDkzLjAzMS4xNC4wNzYuMTQuMTM0IDAgLjA1OS0uMDU0LjEwNi0uMTYuMTQzYTEuNDE1IDEuNDE1IDAgMDEtLjQyNS4wNnYuMDcyaC0uMTY1em0tLjE4Mi0uNjQ2Yy0uMDQ0LjAxNS0uMDY2LjAzMy0uMDY2LjA1NiAwIC4wMjIuMDE3LjA0LjA1Mi4wNTMuMDM0LjAxMy4xLjAyNS4xOTYuMDM3di0uMTczYS42NTcuNjU3IDAgMDAtLjE4Mi4wMjd6bS41NDQuNDM5Yy4wNDgtLjAxNi4wNzItLjAzNS4wNzItLjA1OCAwLS4wMjQtLjAxOS0uMDQyLS4wNTctLjA1NmExLjExIDEuMTEgMCAwMC0uMjEyLS4wMzl2LjE4YS43Ny43NyAwIDAwLjE5Ny0uMDI3elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNEQzg3NDRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNS4xMyAxNS4wNzZjMCAuNDEyLS43OTYuNzQ3LTEuNzc3Ljc0Ny0uOTggMC0xLjc3Ni0uMzM1LTEuNzc2LS43NDd2LS42MTFoMy41NTJ2LjYxelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNGNkMzNThcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMy4zNTIgMTUuMjExYy45ODIgMCAxLjc3Ny0uMzM0IDEuNzc3LS43NDYgMC0uNDEzLS43OTUtLjc0Ny0xLjc3Ny0uNzQ3LS45OCAwLTEuNzc2LjMzNC0xLjc3Ni43NDcgMCAuNDEyLjc5NS43NDYgMS43NzYuNzQ2elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNGQ0Q0NjJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMy4zNTMgMTMuODY0Yy0uODU2IDAtMS41NS4yNy0xLjU1LjYwMSAwIC4zMzIuNjk0LjYgMS41NS42Ljg1NiAwIDEuNTUtLjI2OCAxLjU1LS42IDAtLjMzMi0uNjk0LS42MDEtMS41NS0uNjAxem0wIDEuMTM1Yy0uNzYgMC0xLjM3OC0uMjM5LTEuMzc4LS41MzQgMC0uMjk1LjYxNy0uNTM0IDEuMzc4LS41MzQuNzYxIDAgMS4zNzguMjM5IDEuMzc4LjUzNCAwIC4yOTUtLjYxNy41MzQtMS4zNzguNTM0elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNEQzg3NDRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMy4yOTYgMTQuODh2LS4wNzNhMi4yNiAyLjI2IDAgMDEtLjYzNS0uMTFsLjE4OC0uMDg2Yy4xNDUuMDQ4LjI5NC4wNzcuNDQ3LjA4N3YtLjE5NGEyLjE1NyAyLjE1NyAwIDAxLS40MjctLjA3MmMtLjA5LS4wMjktLjEzNi0uMDcyLS4xMzYtLjEzIDAtLjA1OC4wNTItLjEwNS4xNTYtLjE0Mi4xMDQtLjAzNy4yNC0uMDU3LjQwNy0uMDZ2LS4wNWguMTY1di4wNWMuMTkuMDA2LjM2OS4wMzEuNTM4LjA3NmwtLjE2OC4wOTJhMS43NTIgMS43NTIgMCAwMC0uMzctLjA1OHYuMTg4aC4wMDhjLjE5OC4wMTguMzQ0LjA0My40MzcuMDc0LjA5My4wMy4xNC4wNzUuMTQuMTMzIDAgLjA1OS0uMDU0LjEwNi0uMTYuMTQzYTEuNDE4IDEuNDE4IDAgMDEtLjQyNS4wNnYuMDcyaC0uMTY1em0tLjE4Mi0uNjQ2Yy0uMDQ0LjAxNS0uMDY2LjAzMy0uMDY2LjA1NiAwIC4wMjIuMDE3LjA0LjA1Mi4wNTMuMDM0LjAxMy4xLjAyNS4xOTYuMDM3di0uMTczYS42NTQuNjU0IDAgMDAtLjE4Mi4wMjd6bS41NDQuNDM5Yy4wNDgtLjAxNi4wNzItLjAzNS4wNzItLjA1OCAwLS4wMjQtLjAxOS0uMDQyLS4wNTctLjA1NmExLjExIDEuMTEgMCAwMC0uMjEyLS4wMzh2LjE4YS43Ny43NyAwIDAwLjE5Ny0uMDI4elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNEQzg3NDRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNS4xMyAxNC4zMzRjMCAuNDEyLS43OTYuNzQ3LTEuNzc3Ljc0Ny0uOTggMC0xLjc3Ni0uMzM1LTEuNzc2LS43NDd2LS42MWgzLjU1MnYuNjF6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0Y2QzM1OFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEzLjM1MiAxNC40N2MuOTgyIDAgMS43NzctLjMzNCAxLjc3Ny0uNzQ3IDAtLjQxMi0uNzk1LS43NDctMS43NzctLjc0Ny0uOTggMC0xLjc3Ni4zMzUtMS43NzYuNzQ3IDAgLjQxMy43OTUuNzQ3IDEuNzc2Ljc0N3pcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjRkNENDYyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuMzUzIDEzLjEyMmMtLjg1NiAwLTEuNTUuMjctMS41NS42MDEgMCAuMzMyLjY5NC42MDEgMS41NS42MDEuODU2IDAgMS41NS0uMjY5IDEuNTUtLjYgMC0uMzMzLS42OTQtLjYwMi0xLjU1LS42MDJ6bTAgMS4xMzVjLS43NiAwLTEuMzc4LS4yMzktMS4zNzgtLjUzNCAwLS4yOTUuNjE3LS41MzQgMS4zNzgtLjUzNC43NjEgMCAxLjM3OC4yNCAxLjM3OC41MzQgMCAuMjk1LS42MTcuNTM0LTEuMzc4LjUzNHpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjREM4NzQ0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuMjk2IDE0LjEzOHYtLjA3M2EyLjI1NyAyLjI1NyAwIDAxLS42MzUtLjExbC4xODgtLjA4NmMuMTQ1LjA0OS4yOTQuMDc4LjQ0Ny4wODd2LS4xOTRhMi4xNjMgMi4xNjMgMCAwMS0uNDI3LS4wNzFjLS4wOS0uMDMtLjEzNi0uMDczLS4xMzYtLjEzMSAwLS4wNTguMDUyLS4xMDUuMTU2LS4xNDJhMS4zMyAxLjMzIDAgMDEuNDA3LS4wNnYtLjA1aC4xNjV2LjA1MWMuMTkuMDA1LjM2OS4wMy41MzguMDc1bC0uMTY4LjA5MmExLjc1MiAxLjc1MiAwIDAwLS4zNy0uMDU4di4xODhoLjAwOGMuMTk4LjAxOS4zNDQuMDQzLjQzNy4wNzQuMDkzLjAzLjE0LjA3NS4xNC4xMzMgMCAuMDU5LS4wNTQuMTA2LS4xNi4xNDNhMS40MTUgMS40MTUgMCAwMS0uNDI1LjA2di4wNzJoLS4xNjV6bS0uMTgyLS42NDZjLS4wNDQuMDE1LS4wNjYuMDMzLS4wNjYuMDU2IDAgLjAyMi4wMTcuMDQuMDUyLjA1My4wMzQuMDEzLjEuMDI1LjE5Ni4wMzd2LS4xNzNhLjY1OC42NTggMCAwMC0uMTgyLjAyN3ptLjU0NC40MzljLjA0OC0uMDE1LjA3Mi0uMDM1LjA3Mi0uMDU4cy0uMDE5LS4wNDItLjA1Ny0uMDU2YTEuMTEyIDEuMTEyIDAgMDAtLjIxMi0uMDM4di4xOGEuNzc1Ljc3NSAwIDAwLjE5Ny0uMDI4elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNEQzg3NDRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNS4xMyAxMy41OTJjMCAuNDEyLS43OTYuNzQ3LTEuNzc3Ljc0Ny0uOTggMC0xLjc3Ni0uMzM1LTEuNzc2LS43NDd2LS42MWgzLjU1MnYuNjF6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0Y2QzM1OFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEzLjM1MiAxMy43MjhjLjk4MiAwIDEuNzc3LS4zMzUgMS43NzctLjc0N3MtLjc5NS0uNzQ3LTEuNzc3LS43NDdjLS45OCAwLTEuNzc2LjMzNS0xLjc3Ni43NDdzLjc5NS43NDcgMS43NzYuNzQ3elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNGQ0Q0NjJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMy4zNTMgMTIuMzhjLS44NTYgMC0xLjU1LjI3LTEuNTUuNjAxIDAgLjMzMi42OTQuNjAxIDEuNTUuNjAxLjg1NiAwIDEuNTUtLjI2OSAxLjU1LS42IDAtLjMzMy0uNjk0LS42MDItMS41NS0uNjAyem0wIDEuMTM1Yy0uNzYgMC0xLjM3OC0uMjM5LTEuMzc4LS41MzQgMC0uMjk1LjYxNy0uNTM0IDEuMzc4LS41MzQuNzYxIDAgMS4zNzguMjQgMS4zNzguNTM0IDAgLjI5NS0uNjE3LjUzNC0xLjM3OC41MzR6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0RDODc0NFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEzLjI5NiAxMy4zOTZ2LS4wNzNhMi4yNiAyLjI2IDAgMDEtLjYzNS0uMTA5bC4xODgtLjA4N2MuMTQ1LjA0OS4yOTQuMDc4LjQ0Ny4wODd2LS4xOTRhMi4xNDggMi4xNDggMCAwMS0uNDI3LS4wNzFjLS4wOS0uMDMtLjEzNi0uMDczLS4xMzYtLjEzMSAwLS4wNTguMDUyLS4xMDUuMTU2LS4xNDIuMTA0LS4wMzcuMjQtLjA1Ny40MDctLjA2di0uMDVoLjE2NXYuMDUxYy4xOS4wMDUuMzY5LjAzLjUzOC4wNzVsLS4xNjguMDkyYTEuNzQ1IDEuNzQ1IDAgMDAtLjM3LS4wNTh2LjE4OGguMDA4Yy4xOTguMDE5LjM0NC4wNDMuNDM3LjA3NC4wOTMuMDMuMTQuMDc1LjE0LjEzMyAwIC4wNTktLjA1NC4xMDYtLjE2LjE0M2ExLjQyMSAxLjQyMSAwIDAxLS40MjUuMDZ2LjA3MmgtLjE2NXptLS4xODItLjY0NmMtLjA0NC4wMTUtLjA2Ni4wMzQtLjA2Ni4wNTZzLjAxNy4wNC4wNTIuMDUzYy4wMzQuMDEzLjEuMDI1LjE5Ni4wMzd2LS4xNzNhLjY1Ny42NTcgMCAwMC0uMTgyLjAyN3ptLjU0NC40MzljLjA0OC0uMDE1LjA3Mi0uMDM1LjA3Mi0uMDU4IDAtLjAyNC0uMDE5LS4wNDItLjA1Ny0uMDU2YTEuMTEgMS4xMSAwIDAwLS4yMTItLjAzOHYuMThhLjc2Ni43NjYgMCAwMC4xOTctLjAyOHpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjREM4NzQ0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTUuMTMgMTIuODVjMCAuNDEzLS43OTYuNzQ3LTEuNzc3Ljc0Ny0uOTggMC0xLjc3Ni0uMzM1LTEuNzc2LS43NDd2LS42MWgzLjU1MnYuNjF6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0Y2QzM1OFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEzLjM1MiAxMi45ODZjLjk4MiAwIDEuNzc3LS4zMzQgMS43NzctLjc0NyAwLS40MTItLjc5NS0uNzQ3LTEuNzc3LS43NDctLjk4IDAtMS43NzYuMzM1LTEuNzc2Ljc0NyAwIC40MTMuNzk1Ljc0NyAxLjc3Ni43NDd6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0ZDRDQ2MlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEzLjM1MyAxMS42MzhjLS44NTYgMC0xLjU1LjI3LTEuNTUuNjAxIDAgLjMzMi42OTQuNjAxIDEuNTUuNjAxLjg1NiAwIDEuNTUtLjI2OSAxLjU1LS42IDAtLjMzMy0uNjk0LS42MDItMS41NS0uNjAyem0wIDEuMTM1Yy0uNzYgMC0xLjM3OC0uMjM5LTEuMzc4LS41MzQgMC0uMjk1LjYxNy0uNTM0IDEuMzc4LS41MzQuNzYxIDAgMS4zNzguMjQgMS4zNzguNTM0IDAgLjI5NS0uNjE3LjUzNC0xLjM3OC41MzR6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0RDODc0NFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEzLjI5NiAxMi42NTR2LS4wNzNhMi4yNiAyLjI2IDAgMDEtLjYzNS0uMTA5bC4xODgtLjA4N2MuMTQ1LjA0OS4yOTQuMDc4LjQ0Ny4wODd2LS4xOTRhMi4xNDggMi4xNDggMCAwMS0uNDI3LS4wNzFjLS4wOS0uMDMtLjEzNi0uMDczLS4xMzYtLjEzMSAwLS4wNTguMDUyLS4xMDUuMTU2LS4xNDJhMS4zMyAxLjMzIDAgMDEuNDA3LS4wNnYtLjA1aC4xNjV2LjA1MWMuMTkuMDA1LjM2OS4wMy41MzguMDc1bC0uMTY4LjA5MmExLjc1MiAxLjc1MiAwIDAwLS4zNy0uMDU4di4xODloLjAwOGMuMTk4LjAxOC4zNDQuMDQyLjQzNy4wNzMuMDkzLjAzLjE0LjA3NS4xNC4xMzMgMCAuMDU5LS4wNTQuMTA3LS4xNi4xNDNhMS40MTUgMS40MTUgMCAwMS0uNDI1LjA2di4wNzJoLS4xNjV6bS0uMTgyLS42NDZjLS4wNDQuMDE1LS4wNjYuMDM0LS4wNjYuMDU2cy4wMTcuMDQuMDUyLjA1M2MuMDM0LjAxMy4xLjAyNS4xOTYuMDM4di0uMTc0YS42NTMuNjUzIDAgMDAtLjE4Mi4wMjd6bS41NDQuNDM5Yy4wNDgtLjAxNS4wNzItLjAzNS4wNzItLjA1OHMtLjAxOS0uMDQyLS4wNTctLjA1NmExLjExIDEuMTEgMCAwMC0uMjEyLS4wMzh2LjE4YS43NzUuNzc1IDAgMDAuMTk3LS4wMjh6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0RDODc0NFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE1LjEzIDEyLjEwOGMwIC40MTMtLjc5Ni43NDctMS43NzcuNzQ3LS45OCAwLTEuNzc2LS4zMzQtMS43NzYtLjc0N3YtLjYxaDMuNTUydi42MXpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjRjZDMzU4XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuMzUyIDEyLjI0NGMuOTgyIDAgMS43NzctLjMzNSAxLjc3Ny0uNzQ3cy0uNzk1LS43NDctMS43NzctLjc0N2MtLjk4IDAtMS43NzYuMzM1LTEuNzc2Ljc0N3MuNzk1Ljc0NyAxLjc3Ni43NDd6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0ZDRDQ2MlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEzLjM1MyAxMC44OTZjLS44NTYgMC0xLjU1LjI3LTEuNTUuNjAxIDAgLjMzMi42OTQuNjAxIDEuNTUuNjAxLjg1NiAwIDEuNTUtLjI2OSAxLjU1LS42IDAtLjMzMy0uNjk0LS42MDItMS41NS0uNjAyem0wIDEuMTM1Yy0uNzYgMC0xLjM3OC0uMjM5LTEuMzc4LS41MzQgMC0uMjk1LjYxNy0uNTM0IDEuMzc4LS41MzQuNzYxIDAgMS4zNzguMjQgMS4zNzguNTM0IDAgLjI5NS0uNjE3LjUzNC0xLjM3OC41MzR6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0RDODc0NFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEzLjI5NiAxMS45MTJ2LS4wNzNhMi4yNiAyLjI2IDAgMDEtLjYzNS0uMTA5bC4xODgtLjA4N2MuMTQ1LjA0OS4yOTQuMDc4LjQ0Ny4wODd2LS4xOTRhMi4xNjMgMi4xNjMgMCAwMS0uNDI3LS4wNzFjLS4wOS0uMDMtLjEzNi0uMDczLS4xMzYtLjEzIDAtLjA1OS4wNTItLjEwNi4xNTYtLjE0M2ExLjMzIDEuMzMgMCAwMS40MDctLjA2di0uMDVoLjE2NXYuMDUxYy4xOS4wMDYuMzY5LjAzLjUzOC4wNzVsLS4xNjguMDkyYTEuNzUyIDEuNzUyIDAgMDAtLjM3LS4wNTh2LjE4OWguMDA4Yy4xOTguMDE4LjM0NC4wNDIuNDM3LjA3My4wOTMuMDMuMTQuMDc1LjE0LjEzMyAwIC4wNTktLjA1NC4xMDYtLjE2LjE0M2ExLjQxNSAxLjQxNSAwIDAxLS40MjUuMDZ2LjA3MmgtLjE2NXptLS4xODItLjY0NmMtLjA0NC4wMTUtLjA2Ni4wMzQtLjA2Ni4wNTZzLjAxNy4wNC4wNTIuMDUzYy4wMzQuMDEzLjEuMDI2LjE5Ni4wMzh2LS4xNzRhLjY1OC42NTggMCAwMC0uMTgyLjAyN3ptLjU0NC40NGMuMDQ4LS4wMTYuMDcyLS4wMzYuMDcyLS4wNTlzLS4wMTktLjA0Mi0uMDU3LS4wNTZhMS4xMSAxLjExIDAgMDAtLjIxMi0uMDM4di4xOGEuNzc1Ljc3NSAwIDAwLjE5Ny0uMDI4elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNEQzg3NDRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xOC44NzUgMTcuMzAyYzAgLjQxMi0uNzk1Ljc0Ny0xLjc3Ni43NDdzLTEuNzc2LS4zMzUtMS43NzYtLjc0N3YtLjYxMWgzLjU1MnYuNjF6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0Y2QzM1OFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE3LjEgMTcuNDM4Yy45ODEgMCAxLjc3Ni0uMzM1IDEuNzc2LS43NDdzLS43OTUtLjc0Ny0xLjc3Ni0uNzQ3LTEuNzc2LjMzNS0xLjc3Ni43NDcuNzk1Ljc0NyAxLjc3Ni43NDd6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0ZDRDQ2MlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE3LjA5OSAxNi4wOWMtLjg1NiAwLTEuNTUuMjY5LTEuNTUuNiAwIC4zMzMuNjk0LjYwMiAxLjU1LjYwMi44NTYgMCAxLjU1LS4yNyAxLjU1LS42MDEgMC0uMzMyLS42OTQtLjYwMS0xLjU1LS42MDF6bTAgMS4xMzVjLS43NjEgMC0xLjM3OC0uMjQtMS4zNzgtLjUzNCAwLS4yOTUuNjE3LS41MzQgMS4zNzgtLjUzNC43NiAwIDEuMzc4LjIzOSAxLjM3OC41MzQgMCAuMjk1LS42MTcuNTM0LTEuMzc4LjUzNHpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjREM4NzQ0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTcuMDQyIDE3LjEwNnYtLjA3M2EyLjI2IDIuMjYgMCAwMS0uNjM2LS4xMWwuMTg5LS4wODZjLjE0NS4wNDguMjk0LjA3Ny40NDcuMDg3di0uMTk1YTIuMTQ4IDIuMTQ4IDAgMDEtLjQyOC0uMDdjLS4wOS0uMDMtLjEzNS0uMDc0LS4xMzUtLjEzMSAwLS4wNTguMDUyLS4xMDUuMTU2LS4xNDIuMTA0LS4wMzcuMjQtLjA1Ny40MDctLjA2di0uMDVoLjE2NXYuMDVjLjE5LjAwNi4zNjkuMDMxLjUzOC4wNzZsLS4xNjguMDkyYTEuNzQ1IDEuNzQ1IDAgMDAtLjM3LS4wNTh2LjE4OGguMDA4Yy4xOTguMDE4LjM0My4wNDMuNDM2LjA3My4wOTQuMDMxLjE0LjA3Ni4xNC4xMzQgMCAuMDU5LS4wNTMuMTA2LS4xNi4xNDNhMS40MTcgMS40MTcgMCAwMS0uNDI0LjA2di4wNzJoLS4xNjV6bS0uMTgyLS42NDdjLS4wNDQuMDE1LS4wNjYuMDM0LS4wNjYuMDU2IDAgLjAyMy4wMTcuMDQuMDUyLjA1NC4wMzQuMDEzLjEuMDI1LjE5Ni4wMzd2LS4xNzNhLjY1Ni42NTYgMCAwMC0uMTgyLjAyNnptLjU0NC40NGMuMDQ4LS4wMTYuMDcyLS4wMzUuMDcyLS4wNTkgMC0uMDIzLS4wMTktLjA0MS0uMDU3LS4wNTVhMS4xMTMgMS4xMTMgMCAwMC0uMjEyLS4wMzl2LjE4YS43NjguNzY4IDAgMDAuMTk3LS4wMjd6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0RDODc0NFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE4Ljg3NSAxNi41NmMwIC40MTItLjc5NS43NDctMS43NzYuNzQ3cy0xLjc3Ni0uMzM1LTEuNzc2LS43NDd2LS42MTFoMy41NTJ2LjYxelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNGNkMzNThcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNy4xIDE2LjY5NWMuOTgxIDAgMS43NzYtLjMzNCAxLjc3Ni0uNzQ2IDAtLjQxMy0uNzk1LS43NDctMS43NzYtLjc0N3MtMS43NzYuMzM0LTEuNzc2Ljc0N2MwIC40MTIuNzk1Ljc0NiAxLjc3Ni43NDZ6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0ZDRDQ2MlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE3LjA5OSAxNS4zNDhjLS44NTYgMC0xLjU1LjI2OS0xLjU1LjYgMCAuMzMzLjY5NC42MDIgMS41NS42MDIuODU2IDAgMS41NS0uMjcgMS41NS0uNjAxIDAtLjMzMi0uNjk0LS42MDEtMS41NS0uNjAxem0wIDEuMTM1Yy0uNzYxIDAtMS4zNzgtLjI0LTEuMzc4LS41MzQgMC0uMjk1LjYxNy0uNTM0IDEuMzc4LS41MzQuNzYgMCAxLjM3OC4yMzkgMS4zNzguNTM0IDAgLjI5NS0uNjE3LjUzNC0xLjM3OC41MzR6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0RDODc0NFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE3LjA0MiAxNi4zNjR2LS4wNzNhMi4yNiAyLjI2IDAgMDEtLjYzNi0uMTFsLjE4OS0uMDg2Yy4xNDUuMDQ4LjI5NC4wNzcuNDQ3LjA4N3YtLjE5NGEyLjE0OCAyLjE0OCAwIDAxLS40MjgtLjA3MmMtLjA5LS4wMjktLjEzNS0uMDcyLS4xMzUtLjEzIDAtLjA1OC4wNTItLjEwNS4xNTYtLjE0MmExLjMzIDEuMzMgMCAwMS40MDctLjA2di0uMDVoLjE2NXYuMDVjLjE5LjAwNi4zNjkuMDMxLjUzOC4wNzZsLS4xNjguMDkyYTEuNzQ1IDEuNzQ1IDAgMDAtLjM3LS4wNTh2LjE4OGguMDA4Yy4xOTguMDE4LjM0My4wNDMuNDM2LjA3My4wOTQuMDMxLjE0LjA3Ni4xNC4xMzQgMCAuMDU5LS4wNTMuMTA2LS4xNi4xNDNhMS40MiAxLjQyIDAgMDEtLjQyNC4wNnYuMDcyaC0uMTY1em0tLjE4Mi0uNjQ2Yy0uMDQ0LjAxNC0uMDY2LjAzMy0uMDY2LjA1NiAwIC4wMjIuMDE3LjA0LjA1Mi4wNTMuMDM0LjAxMy4xLjAyNS4xOTYuMDM3di0uMTczYS42NTIuNjUyIDAgMDAtLjE4Mi4wMjd6bS41NDQuNDM5Yy4wNDgtLjAxNi4wNzItLjAzNS4wNzItLjA1OCAwLS4wMjQtLjAxOS0uMDQyLS4wNTctLjA1NmExLjExMyAxLjExMyAwIDAwLS4yMTItLjAzOHYuMThhLjc2OC43NjggMCAwMC4xOTctLjAyOHpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjREM4NzQ0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTguODc1IDE1LjgxOGMwIC40MTItLjc5NS43NDctMS43NzYuNzQ3cy0xLjc3Ni0uMzM1LTEuNzc2LS43NDd2LS42MTFoMy41NTJ2LjYxelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNGNkMzNThcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNy4xIDE1Ljk1NGMuOTgxIDAgMS43NzYtLjMzNSAxLjc3Ni0uNzQ3cy0uNzk1LS43NDctMS43NzYtLjc0Ny0xLjc3Ni4zMzUtMS43NzYuNzQ3Ljc5NS43NDcgMS43NzYuNzQ3elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNGQ0Q0NjJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNy4wOTkgMTQuNjA2Yy0uODU2IDAtMS41NS4yNy0xLjU1LjYwMSAwIC4zMzIuNjk0LjYgMS41NS42Ljg1NiAwIDEuNTUtLjI2OCAxLjU1LS42IDAtLjMzMi0uNjk0LS42MDEtMS41NS0uNjAxem0wIDEuMTM1Yy0uNzYxIDAtMS4zNzgtLjIzOS0xLjM3OC0uNTM0IDAtLjI5NS42MTctLjUzNCAxLjM3OC0uNTM0Ljc2IDAgMS4zNzguMjM5IDEuMzc4LjUzNCAwIC4yOTUtLjYxNy41MzQtMS4zNzguNTM0elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNEQzg3NDRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNy4wNDIgMTUuNjIydi0uMDczYTIuMjYgMi4yNiAwIDAxLS42MzYtLjExbC4xODktLjA4NmMuMTQ1LjA0OS4yOTQuMDc4LjQ0Ny4wODd2LS4xOTRhMi4xNjMgMi4xNjMgMCAwMS0uNDI4LS4wNzJjLS4wOS0uMDI5LS4xMzUtLjA3Mi0uMTM1LS4xMyAwLS4wNTguMDUyLS4xMDUuMTU2LS4xNDIuMTA0LS4wMzcuMjQtLjA1Ny40MDctLjA2di0uMDVoLjE2NXYuMDVjLjE5LjAwNi4zNjkuMDMxLjUzOC4wNzZsLS4xNjguMDkyYTEuNzUyIDEuNzUyIDAgMDAtLjM3LS4wNTh2LjE4OGguMDA4Yy4xOTguMDE4LjM0My4wNDMuNDM2LjA3My4wOTQuMDMxLjE0LjA3Ni4xNC4xMzQgMCAuMDU5LS4wNTMuMTA2LS4xNi4xNDNhMS40MTQgMS40MTQgMCAwMS0uNDI0LjA2di4wNzJoLS4xNjV6bS0uMTgyLS42NDZjLS4wNDQuMDE1LS4wNjYuMDMzLS4wNjYuMDU2IDAgLjAyMi4wMTcuMDQuMDUyLjA1My4wMzQuMDEzLjEuMDI1LjE5Ni4wMzd2LS4xNzNhLjY1Ni42NTYgMCAwMC0uMTgyLjAyN3ptLjU0NC40MzljLjA0OC0uMDE2LjA3Mi0uMDM1LjA3Mi0uMDU4IDAtLjAyNC0uMDE5LS4wNDItLjA1Ny0uMDU2YTEuMTEzIDEuMTEzIDAgMDAtLjIxMi0uMDM5di4xOGEuNzcyLjc3MiAwIDAwLjE5Ny0uMDI3elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNEQzg3NDRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xOC44NzUgMTUuMDc2YzAgLjQxMi0uNzk1Ljc0Ny0xLjc3Ni43NDdzLTEuNzc2LS4zMzUtMS43NzYtLjc0N3YtLjYxMWgzLjU1MnYuNjF6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0Y2QzM1OFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE3LjEgMTUuMjExYy45ODEgMCAxLjc3Ni0uMzM0IDEuNzc2LS43NDYgMC0uNDEzLS43OTUtLjc0Ny0xLjc3Ni0uNzQ3cy0xLjc3Ni4zMzQtMS43NzYuNzQ3YzAgLjQxMi43OTUuNzQ2IDEuNzc2Ljc0NnpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjRkNENDYyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTcuMDk5IDEzLjg2NGMtLjg1NiAwLTEuNTUuMjctMS41NS42MDEgMCAuMzMyLjY5NC42IDEuNTUuNi44NTYgMCAxLjU1LS4yNjggMS41NS0uNiAwLS4zMzItLjY5NC0uNjAxLTEuNTUtLjYwMXptMCAxLjEzNWMtLjc2MSAwLTEuMzc4LS4yMzktMS4zNzgtLjUzNCAwLS4yOTUuNjE3LS41MzQgMS4zNzgtLjUzNC43NiAwIDEuMzc4LjIzOSAxLjM3OC41MzQgMCAuMjk1LS42MTcuNTM0LTEuMzc4LjUzNHpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjREM4NzQ0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTcuMDQyIDE0Ljg4di0uMDczYTIuMjYgMi4yNiAwIDAxLS42MzYtLjExbC4xODktLjA4NmMuMTQ1LjA0OC4yOTQuMDc3LjQ0Ny4wODd2LS4xOTRhMi4xNTcgMi4xNTcgMCAwMS0uNDI4LS4wNzJjLS4wOS0uMDI5LS4xMzUtLjA3Mi0uMTM1LS4xMyAwLS4wNTguMDUyLS4xMDUuMTU2LS4xNDIuMTA0LS4wMzcuMjQtLjA1Ny40MDctLjA2di0uMDVoLjE2NXYuMDVjLjE5LjAwNi4zNjkuMDMxLjUzOC4wNzZsLS4xNjguMDkyYTEuNzUyIDEuNzUyIDAgMDAtLjM3LS4wNTh2LjE4OGguMDA4Yy4xOTguMDE4LjM0My4wNDMuNDM2LjA3NC4wOTQuMDMuMTQuMDc1LjE0LjEzMyAwIC4wNTktLjA1My4xMDYtLjE2LjE0M2ExLjQxNyAxLjQxNyAwIDAxLS40MjQuMDZ2LjA3MmgtLjE2NXptLS4xODItLjY0NmMtLjA0NC4wMTUtLjA2Ni4wMzMtLjA2Ni4wNTYgMCAuMDIyLjAxNy4wNC4wNTIuMDUzLjAzNC4wMTMuMS4wMjUuMTk2LjAzN3YtLjE3M2EuNjUyLjY1MiAwIDAwLS4xODIuMDI3em0uNTQ0LjQzOWMuMDQ4LS4wMTYuMDcyLS4wMzUuMDcyLS4wNTggMC0uMDI0LS4wMTktLjA0Mi0uMDU3LS4wNTZhMS4xMTMgMS4xMTMgMCAwMC0uMjEyLS4wMzh2LjE4YS43NzIuNzcyIDAgMDAuMTk3LS4wMjh6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0RDODc0NFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE4Ljg3NSAxNC4zMzRjMCAuNDEyLS43OTUuNzQ3LTEuNzc2Ljc0N3MtMS43NzYtLjMzNS0xLjc3Ni0uNzQ3di0uNjFoMy41NTJ2LjYxelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNGNkMzNThcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNy4xIDE0LjQ3Yy45ODEgMCAxLjc3Ni0uMzM0IDEuNzc2LS43NDcgMC0uNDEyLS43OTUtLjc0Ny0xLjc3Ni0uNzQ3cy0xLjc3Ni4zMzUtMS43NzYuNzQ3YzAgLjQxMy43OTUuNzQ3IDEuNzc2Ljc0N3pcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjRkNENDYyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTcuMDk5IDEzLjEyMmMtLjg1NiAwLTEuNTUuMjctMS41NS42MDEgMCAuMzMyLjY5NC42MDEgMS41NS42MDEuODU2IDAgMS41NS0uMjY5IDEuNTUtLjYgMC0uMzMzLS42OTQtLjYwMi0xLjU1LS42MDJ6bTAgMS4xMzVjLS43NjEgMC0xLjM3OC0uMjM5LTEuMzc4LS41MzQgMC0uMjk1LjYxNy0uNTM0IDEuMzc4LS41MzQuNzYgMCAxLjM3OC4yNCAxLjM3OC41MzQgMCAuMjk1LS42MTcuNTM0LTEuMzc4LjUzNHpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjREM4NzQ0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTcuMDQyIDE0LjEzOHYtLjA3M2EyLjI1NyAyLjI1NyAwIDAxLS42MzYtLjExbC4xODktLjA4NmMuMTQ1LjA0OS4yOTQuMDc4LjQ0Ny4wODd2LS4xOTRhMi4xNjMgMi4xNjMgMCAwMS0uNDI4LS4wNzFjLS4wOS0uMDMtLjEzNS0uMDczLS4xMzUtLjEzMSAwLS4wNTguMDUyLS4xMDUuMTU2LS4xNDJhMS4zMyAxLjMzIDAgMDEuNDA3LS4wNnYtLjA1aC4xNjV2LjA1MWMuMTkuMDA1LjM2OS4wMy41MzguMDc1bC0uMTY4LjA5MmExLjc1MiAxLjc1MiAwIDAwLS4zNy0uMDU4di4xODhoLjAwOGMuMTk4LjAxOS4zNDMuMDQzLjQzNi4wNzQuMDk0LjAzLjE0LjA3NS4xNC4xMzMgMCAuMDU5LS4wNTMuMTA2LS4xNi4xNDNhMS40MTQgMS40MTQgMCAwMS0uNDI0LjA2di4wNzJoLS4xNjV6bS0uMTgyLS42NDZjLS4wNDQuMDE1LS4wNjYuMDMzLS4wNjYuMDU2IDAgLjAyMi4wMTcuMDQuMDUyLjA1My4wMzQuMDEzLjEuMDI1LjE5Ni4wMzd2LS4xNzNhLjY1Ni42NTYgMCAwMC0uMTgyLjAyN3ptLjU0NC40MzljLjA0OC0uMDE1LjA3Mi0uMDM1LjA3Mi0uMDU4cy0uMDE5LS4wNDItLjA1Ny0uMDU2YTEuMTE1IDEuMTE1IDAgMDAtLjIxMi0uMDM4di4xOGEuNzc3Ljc3NyAwIDAwLjE5Ny0uMDI4elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNEQzg3NDRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMy45NTMgMTguMDQ3YTEuOTU1IDEuOTU1IDAgMTAwLTMuOTEgMS45NTUgMS45NTUgMCAwMDAgMy45MXpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjRkNENDYyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuOTUzIDE0LjM4N2ExLjcwNiAxLjcwNiAwIDEwMCAzLjQxMyAxLjcwNiAxLjcwNiAwIDAwMC0zLjQxM3ptMCAzLjIyM2ExLjUxNyAxLjUxNyAwIDExMC0zLjAzMyAxLjUxNyAxLjUxNyAwIDAxMCAzLjAzM3pcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjREM4NzQ0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuODkgMTcuMjcydi0uMjA3YTEuMjM1IDEuMjM1IDAgMDEtLjctLjMxbC4yMDktLjI0OGMuMTU5LjEzOC4zMjMuMjIxLjQ5Mi4yNDh2LS41NTJjLS4yMTUtLjA1MS0uMzcyLS4xMTktLjQ3MS0uMjAyLS4xLS4wODQtLjE1LS4yMDctLjE1LS4zNzFhLjUyLjUyIDAgMDEuMTczLS40MDMuNjk2LjY5NiAwIDAxLjQ0Ny0uMTd2LS4xNDNoLjE4MnYuMTQ2Yy4yMDkuMDE1LjQwNi4wODYuNTkyLjIxM2wtLjE4NS4yNjFhLjkxNy45MTcgMCAwMC0uNDA3LS4xNjV2LjUzNWguMDA5Yy4yMTguMDUxLjM3OC4xMi40OC4yMDguMTAzLjA4Ny4xNTQuMjE0LjE1NC4zOGEuNTE3LjUxNyAwIDAxLS4xNzYuNDA1LjczNC43MzQgMCAwMS0uNDY3LjE3di4yMDVoLS4xODF6bS0uMi0xLjgzNmEuMjAzLjIwMyAwIDAwLS4wNzMuMTYuMi4yIDAgMDAuMDU3LjE1Yy4wMzguMDM3LjExLjA3My4yMTYuMTA3di0uNDkyYS4zNC4zNCAwIDAwLS4yLjA3NXptLjU5OSAxLjI0N2EuMjA1LjIwNSAwIDAwLjA4LS4xNjUuMjA1LjIwNSAwIDAwLS4wNjMtLjE1Ny42Mi42MiAwIDAwLS4yMzQtLjExdi41MTJhLjM5Ny4zOTcgMCAwMC4yMTctLjA4elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNEQzg3NDRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdNb25leVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z01vcmUocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMy43NSA4LjU0MmMtLjgwNCAwLTEuNDU4LjY1NS0xLjQ1OCAxLjQ1OGExLjQ2IDEuNDYgMCAwMDEuNDU4IDEuNDU4Yy44MDMgMCAxLjQ1OC0uNjU1IDEuNDU4LTEuNDU4IDAtLjgwMy0uNjU1LTEuNDU4LTEuNDU4LTEuNDU4em0wIDIuMDgzYS42MjUuNjI1IDAgMTEwLTEuMjUuNjI1LjYyNSAwIDAxMCAxLjI1ek0xMCA4LjU0MkExLjQ2IDEuNDYgMCAwMDguNTQyIDEwYzAgLjgwMy42NTQgMS40NTggMS40NTggMS40NThBMS40NiAxLjQ2IDAgMDAxMS40NTggMTAgMS40NiAxLjQ2IDAgMDAxMCA4LjU0MnptMCAyLjA4M2EuNjI1LjYyNSAwIDExMC0xLjI1LjYyNS42MjUgMCAwMTAgMS4yNXpNNi4yNSA4LjU0MmMtLjgwNCAwLTEuNDU4LjY1NS0xLjQ1OCAxLjQ1OCAwIC44MDMuNjU0IDEuNDU4IDEuNDU4IDEuNDU4LjgwMyAwIDEuNDU4LS42NTUgMS40NTgtMS40NTggMC0uODAzLS42NTUtMS40NTgtMS40NTgtMS40NTh6bTAgMi4wODNhLjYyNS42MjUgMCAxMTAtMS4yNS42MjUuNjI1IDAgMDEwIDEuMjV6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTAgMTguOTU4Yy00Ljk0IDAtOC45NTgtNC4wMTgtOC45NTgtOC45NThTNS4wNiAxLjA0MiAxMCAxLjA0MiAxOC45NTggNS4wNiAxOC45NTggMTAgMTQuOTQgMTguOTU4IDEwIDE4Ljk1OHptMC0xNi42NjZDNS43NSAyLjI5MiAyLjI5MiA1Ljc1IDIuMjkyIDEwUzUuNzUgMTcuNzA4IDEwIDE3LjcwOCAxNy43MDggMTQuMjUgMTcuNzA4IDEwIDE0LjI1IDIuMjkyIDEwIDIuMjkyelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z01vcmVcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdOb3RpZmljYXRpb24ocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xOC4wOCAxMy43MjNjLS4wMTYtLjAxMy0xLjc4Mi0xLjM2Ni0xLjc1Mi01LjAyNS4wMTctMi4xMS0uNjc2LTMuOTg1LTEuOTU1LTUuMjc5LTEuMTQ2LTEuMTYtMi42OTgtMS44MDItNC4zNjktMS44MWgtLjAxYy0xLjY3LjAwOC0zLjIyMi42NS00LjM2OSAxLjgxMUM0LjM0NyA0LjcxNCAzLjY1MiA2LjU4OCAzLjY3IDguNjk4Yy4wMyAzLjYwOS0xLjY4MyA0Ljk3My0xLjc1MiA1LjAyNWEuNjI2LjYyNiAwIDAwLjM3MyAxLjEyOGg0LjFhMy42MiAzLjYyIDAgMDAzLjYwOCAzLjQ2NmMxLjk0NCAwIDMuNTIyLTEuNTQxIDMuNjA2LTMuNDY2aDQuMTAyYS42MjEuNjIxIDAgMDAuNTkxLS40MjkuNjIzLjYyMyAwIDAwLS4yMTktLjY5OGguMDAyek0xMCAxNy4wNjVhMi4zNjcgMi4zNjcgMCAwMS0yLjM1Ny0yLjIxNWg0LjcxNEEyLjM3IDIuMzcgMCAwMTEwIDE3LjA2N3YtLjAwMnpNMy42NSAxMy42Yy42MTctLjk0MyAxLjI5LTIuNTIzIDEuMjctNC45MTMtLjAxNS0xLjguNTM3LTMuMzE5IDEuNTk0LTQuMzkuOTExLS45MjIgMi4xNS0xLjQzMyAzLjQ4Ni0xLjQzOSAxLjMzNi4wMDcgMi41NzIuNTE3IDMuNDgzIDEuNDQgMS4wNTkgMS4wNzEgMS42MTEgMi41ODkgMS41OTYgNC4zOS0uMDIgMi4zOS42NTQgMy45NyAxLjI3MSA0LjkxM0gzLjY1VjEzLjZ6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnTm90aWZpY2F0aW9uXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnTm90aWZpY2F0aW9uRmlsbChwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE4LjA4IDEzLjcyM2MtLjAxNi0uMDEzLTEuNzgyLTEuMzY2LTEuNzUyLTUuMDI1LjAxNy0yLjExLS42NzYtMy45ODUtMS45NTUtNS4yNzgtMS4xNDYtMS4xNi0yLjY5OC0xLjgwMy00LjM2OS0xLjgxaC0uMDFjLTEuNjcuMDA3LTMuMjIyLjY1LTQuMzY5IDEuODFDNC4zNDcgNC43MTQgMy42NTIgNi41ODggMy42NyA4LjY5N2MuMDMgMy42MS0xLjY4MyA0Ljk3My0xLjc1MiA1LjAyNmEuNjI2LjYyNiAwIDAwLjM3NCAxLjEyN2gzLjc0NUM2LjEyIDE2Ljk3IDcuODYgMTguNjcyIDEwIDE4LjY3MnMzLjg4LTEuNzAyIDMuOTYzLTMuODIyaDMuNzQ1YS42MjUuNjI1IDAgMDAuMzczLTEuMTI3ek0xMCAxNy4wMDdhMi4zMSAyLjMxIDAgMDEtMi4yOTctMi4xNTdoNC41OTRBMi4zMSAyLjMxIDAgMDExMCAxNy4wMDZ6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnTm90aWZpY2F0aW9uRmlsbFxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z1Byb2R1Y3RzKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgZGF0YS1uYW1lPVwiTGF5ZXIgMVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIlxuICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTQ3Mi45MTYgMjI0aC0yNC45MDlhMjQuNTM0IDI0LjUzNCAwIDAwLTIzLjQxNy0xOEgzOTh2LTY1LjAyNGE2Ljg2IDYuODYgMCAwMC0zLjM0Ni02LjA2MkwyMDcuMDc3IDI2LjU3MmE2LjkyNyA2LjkyNyAwIDAwLTYuOTYyIDBMMTIuNDggMTM0LjkxNEE2Ljk4MSA2Ljk4MSAwIDAwOSAxNDAuOTc2djIxNi42ODVhNyA3IDAgMDAzLjUgNi4wNjJsMTg3LjY1NCAxMDguMzQyYTcgNyAwIDAwMy41LjkzOCA3LjM2MSA3LjM2MSAwIDAwMy42LS45MzhMMzA2IDQxNS4xMDh2NDEuMTc0QTI5LjY0MiAyOS42NDIgMCAwMDMzNS44OTEgNDg2aDEzNy4wMjVBMjkuODA3IDI5LjgwNyAwIDAwNTAzIDQ1Ni4yODJ2LTIwMi4xQTMwLjIgMzAuMiAwIDAwNDcyLjkxNiAyMjR6bS00OC4wNzctNEExMC4xNjEgMTAuMTYxIDAgMDE0MzUgMjMwLjE2MXYuNjc4QTEwLjE2MSAxMC4xNjEgMCAwMTQyNC44MzkgMjQxaC00MC42NzhBMTAuMTYxIDEwLjE2MSAwIDAxMzc0IDIzMC44Mzl2LS42NzhBMTAuMTYxIDEwLjE2MSAwIDAxMzg0LjE2MSAyMjB6TTIwMy42NTQgNDAuNzE3bDc3Ljk3NCA0NS4wMTgtMTczLjY0MiAxMDAuMjUyLTc3Ljk3My00NS4wMTh6TTE5NyA0NTMuODc4TDIzIDM1My42MTlWMTUzLjA4NWwxNzQgMTAwLjI1OXptNi42NTQtMjEyLjY1OGwtODEuNjY4LTQ3LjE1MUwyOTUuNjI4IDkzLjgxOGw4MS42NzIgNDcuMTUxek0zMDYgMjU0LjE4MnYxNDQuNzYxbC05NSA1NC45MzVWMjUzLjM0NGwxNzMtMTAwLjI1OVYyMDZoLjIxN2EyNC41MzMgMjQuNTMzIDAgMDAtMjMuNDE3IDE4aC0yNC45MDlBMzAuMDM3IDMwLjAzNyAwIDAwMzA2IDI1NC4xODJ6bTE4MyAyMDIuMUExNS43OTMgMTUuNzkzIDAgMDE0NzIuOTE2IDQ3MkgzMzUuODkxQTE1LjYyOCAxNS42MjggMCAwMTMyMCA0NTYuMjgydi0yMDIuMUExNi4wMjIgMTYuMDIyIDAgMDEzMzUuODkxIDIzOGgyNS4xODJhMjMuOTQ0IDIzLjk0NCAwIDAwMjMuMTQ0IDE3aDQwLjM3M2EyMy45NDIgMjMuOTQyIDAgMDAyMy4xNDMtMTdoMjUuMTgzQTE2LjE4NiAxNi4xODYgMCAwMTQ4OSAyNTQuMTgyelwiIC8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTM0My45NDkgMzI1aDcuMzI3YTcgNyAwIDEwMC0xNEgzNTF2LTE5aDE5LjMwN2E2LjczOSA2LjczOSAwIDAwNi42NTUgNC43MjcgNy4wMTkgNy4wMTkgMCAwMDcuMDM4LTYuOTg0di00LjcxYTcuMDkzIDcuMDkzIDAgMDAtNy4wNzYtNy4wMzNoLTMyLjk3NWE2Ljk4NSA2Ljk4NSAwIDAwLTYuOTQ5IDcuMDMzdjMyLjk3NWE2Ljk1IDYuOTUgMCAwMDYuOTQ5IDYuOTkyek0zNDQgMzg5aDMzYTcgNyAwIDAwNy03di0zM2E3IDcgMCAwMC03LTdoLTMzYTcgNyAwIDAwLTcgN3YzM2E3IDcgMCAwMDcgN3ptNy0zM2gxOXYxOWgtMTl6TTM1MS4yNzcgNDM5SDM1MXYtMTloMTguOTI5YTcuMDM3IDcuMDM3IDAgMDAxNC4wNzEuMDE0di02Ljc0NWE3LjMgNy4zIDAgMDAtNy4wNzYtNy4yNjloLTMyLjk3NWE3LjE5MSA3LjE5MSAwIDAwLTYuOTQ5IDcuMjY5djMyLjk3NWE2Ljc1MiA2Ljc1MiAwIDAwNi45NDkgNi43NTZoNy4zMjhhNyA3IDAgMTAwLTE0elwiIC8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTM5My4wNDEgMjg2LjU5MmwtMjAuNSAyMC41LTYuMjM2LTYuMjM3YTcgNyAwIDEwLTkuOSA5LjlsMTEuMTg3IDExLjE4NmE3IDcgMCAwMDkuOSAwbDI1LjQ1Mi0yNS40NTJhNyA3IDAgMDAtOS45LTkuOXpNMzkzLjA0MSA0MTUuODQxbC0yMC41IDIwLjUtNi4yMzYtNi4yMzdhNyA3IDAgMTAtOS45IDkuOWwxMS4xODcgMTEuMTg2YTcgNyAwIDAwOS45IDBsMjUuNDUyLTI1LjQ1MmE3IDcgMCAwMC05LjktOS45ek00NjQuODU3IDI5NWgtNDMuOTY2YTcgNyAwIDAwMCAxNGg0My45NjZhNyA3IDAgMDAwLTE0ek00NjQuODU3IDM1OWgtNDMuOTY2YTcgNyAwIDAwMCAxNGg0My45NjZhNyA3IDAgMDAwLTE0ek00NjQuODU3IDQyM2gtNDMuOTY2YTcgNyAwIDAwMCAxNGg0My45NjZhNyA3IDAgMDAwLTE0elwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnUHJvZHVjdHNcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdQcm9kdWN0c0ZpbGwocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgey4uLnByb3BzfT5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNmZmZcIlxuICAgICAgICAgICAgICAgIGRhdGEtb3JpZ2luYWw9XCIjMDAwMDAwXCJcbiAgICAgICAgICAgICAgICBkPVwiTTIwMy42NTQgMjQxLjIybDE3My42NDItMTAwLjI1MS04MS42NjgtNDcuMTUxLTE3My42NDIgMTAwLjI1MSA4MS42NjggNDcuMTUxek0xOTcgMjUzLjM0NEwyMyAxNTMuMDg1djIwMC41MzRsMTc0IDEwMC4yNTlWMjUzLjM0NHpNMzUxIDM1NmgxOXYxOWgtMTl6TTIxMSAyNTMuMzQ0djIwMC41MzRsOTUtNTQuOTM1VjI1NC4xODJBMzAuMDM3IDMwLjAzNyAwIDAxMzM1Ljg5MSAyMjRIMzYwLjhhMjQuNTMzIDI0LjUzMyAwIDAxMjMuNDE3LTE4SDM4NHYtNTIuOTE1elwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICB4PXszNzR9XG4gICAgICAgICAgICAgICAgeT17MjIwfVxuICAgICAgICAgICAgICAgIHdpZHRoPXs2MX1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezIxfVxuICAgICAgICAgICAgICAgIHJ4PXsxMC4xNjF9XG4gICAgICAgICAgICAgICAgZmlsbD1cIiNmZmZcIlxuICAgICAgICAgICAgICAgIGRhdGEtb3JpZ2luYWw9XCIjMDAwMDAwXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgICAgICAgICAgICBkYXRhLW9yaWdpbmFsPVwiIzAwMDAwMFwiXG4gICAgICAgICAgICAgICAgZD1cIk0yODEuNjI4IDg1LjczNWwtNzcuOTc0LTQ1LjAxOEwzMC4wMTMgMTQwLjk2OWw3Ny45NzMgNDUuMDE4TDI4MS42MjggODUuNzM1ek00NzIuOTE2IDIzOGgtMjUuMTgzYTIzLjk0MiAyMy45NDIgMCAwMS0yMy4xNDMgMTdoLTQwLjM3M2EyMy45NDQgMjMuOTQ0IDAgMDEtMjMuMTQ0LTE3aC0yNS4xODJBMTYuMDIyIDE2LjAyMiAwIDAwMzIwIDI1NC4xODJ2MjAyLjFBMTUuNjI4IDE1LjYyOCAwIDAwMzM1Ljg5MSA0NzJoMTM3LjAyNUExNS43OTMgMTUuNzkzIDAgMDA0ODkgNDU2LjI4MnYtMjAyLjFBMTYuMTg2IDE2LjE4NiAwIDAwNDcyLjkxNiAyMzh6TTMzNyAyODUuMDMzYTYuOTg1IDYuOTg1IDAgMDE2Ljk0OS03LjAzM2gzMi45NzVhNy4wOTMgNy4wOTMgMCAwMTcuMDc2IDcuMDMzdjQuNzFhNy4wMTkgNy4wMTkgMCAwMS03LjAzOCA2Ljk4NCA2LjczOSA2LjczOSAwIDAxLTYuNjU1LTQuNzI3SDM1MXYxOWguMjc2YTcgNyAwIDExMCAxNGgtNy4zMjdhNi45NSA2Ljk1IDAgMDEtNi45NDktNi45OTJ6TTMzNyAzNDlhNyA3IDAgMDE3LTdoMzNhNyA3IDAgMDE3IDd2MzNhNyA3IDAgMDEtNyA3aC0zM2E3IDcgMCAwMS03LTd6bTE0LjI3NyAxMDRoLTcuMzI4YTYuNzUyIDYuNzUyIDAgMDEtNi45NDktNi43NTZ2LTMyLjk3NWE3LjE5MSA3LjE5MSAwIDAxNi45NDktNy4yNjloMzIuOTc1YTcuMyA3LjMgMCAwMTcuMDc2IDcuMjY5djYuNzQ1YTcuMDM3IDcuMDM3IDAgMDEtMTQuMDcxLS4wMTRIMzUxdjE5aC4yNzdhNyA3IDAgMTEwIDE0em01MS42NjQtMjcuMjU5bC0yNS40NTIgMjUuNDUyYTcgNyAwIDAxLTkuOSAwTDM1Ni40IDQ0MC4wMDdhNyA3IDAgMTE5LjktOS45bDYuMjM2IDYuMjM3IDIwLjUtMjAuNWE3IDcgMCAwMTkuOSA5Ljl6bTAtMTI5LjI0OWwtMjUuNDUyIDI1LjQ1MmE3IDcgMCAwMS05LjkgMEwzNTYuNCAzMTAuNzU4YTcgNyAwIDExOS45LTkuOWw2LjIzNiA2LjIzNyAyMC41LTIwLjVhNyA3IDAgMDE5LjkgOS45ek00NjQuODU3IDQzN2gtNDMuOTY2YTcgNyAwIDAxMC0xNGg0My45NjZhNyA3IDAgMDEwIDE0em0wLTY0aC00My45NjZhNyA3IDAgMDEwLTE0aDQzLjk2NmE3IDcgMCAwMTAgMTR6bTAtNjRoLTQzLjk2NmE3IDcgMCAwMTAtMTRoNDMuOTY2YTcgNyAwIDAxMCAxNHpcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdQcm9kdWN0c0ZpbGxcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdQcm9maWxlKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTAgOS44NDdjMS4xMyAwIDIuMzkzLS4xMjUgMy4yLTEuMDQ3LjY3OC0uNzc1Ljg5OC0xLjk3My42NzItMy42Ni0uMzE3LTIuMzU0LTEuNzY0LTMuNzYtMy44NzItMy43Ni0yLjEwOCAwLTMuNTU1IDEuNDA2LTMuODcyIDMuNzYyLS4yMjYgMS42ODUtLjAwNiAyLjg4My42NzIgMy42NTguODA3LjkyMiAyLjA3IDEuMDQ3IDMuMiAxLjA0N3ptLTIuNjMzLTQuNTRjLjEzNS0xIC42NTUtMi42NzcgMi42MzMtMi42NzcgMS45NzcgMCAyLjQ5OCAxLjY3OCAyLjYzMyAyLjY3Ny4xNzMgMS4yOTEuMDQ4IDIuMTg5LS4zNzUgMi42Ny0uMzc5LjQzNC0xLjA1NS42Mi0yLjI1OC42MnMtMS44OC0uMTg2LTIuMjU4LS42MmMtLjQyMy0uNDgxLS41NDgtMS4zOC0uMzc1LTIuNjd6TTE2LjkgMTYuMDNjLS43My0yLjkzOC0zLjU2OC00Ljk5Mi02LjktNC45OTItMy4zMzIgMC02LjE3IDIuMDU0LTYuOSA0Ljk5MmExLjg3IDEuODcgMCAwMC4zMyAxLjYxN2MuMzQuNDMzLjg2Ni42ODMgMS40NDMuNjgzaDEwLjI1NGMuNTc3IDAgMS4xMDQtLjI1IDEuNDQ0LS42ODMuMzUzLS40NS40NzItMS4wNC4zMjgtMS42MTdoLjAwMXptLTEuMzEzLjg0N2EuNTYuNTYgMCAwMS0uNDYuMjA1SDQuODczYS41Ni41NiAwIDAxLS40Ni0uMjA1LjYyOC42MjggMCAwMS0uMS0uNTQ1Yy41OTItMi4zOCAyLjkzMS00LjA0MiA1LjY4Ny00LjA0MiAyLjc1NiAwIDUuMDk1IDEuNjYyIDUuNjg3IDQuMDQyLjA1LjIwMS4wMTQuNC0uMS41NDV6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnUHJvZmlsZVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z1Byb2ZpbGVGaWxsKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTAuMTg4IDEwLjEzN2MtMS4xMyAwLTIuMzk0LS4xMjUtMy4yLTEuMDQ2LS42NzktLjc3NS0uODk4LTEuOTczLS42NzEtMy42Ni4zMTYtMi4zNTUgMS43NjMtMy43NjEgMy44NzEtMy43NjEgMi4xMDkgMCAzLjU1NiAxLjQwNiAzLjg3MiAzLjc2LjIyNyAxLjY4OC4wMDcgMi44ODQtLjY3MiAzLjY2LS44MDguOTIyLTIuMDcgMS4wNDctMy4yIDEuMDQ3em00Ljg3NCA4LjIwOUg1LjMxM2ExLjcxNyAxLjcxNyAwIDAxLTEuMzc1LS42NTUgMS45MzggMS45MzggMCAwMS0uMzQxLTEuNjRjLjY5NS0yLjk0MiAzLjQwNS00Ljk5OCA2LjU5LTQuOTk4czUuODk1IDIuMDU1IDYuNTkxIDQuOTk4Yy4xMzcuNTgyLjAwOSAxLjE5NS0uMzQzIDEuNjM5LS4zMzMuNDItLjgyLjY1NC0xLjM3My42NTR2LjAwMnpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdQcm9maWxlRmlsbFxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z1F1ZXN0aW9uKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMjAuMjIyIDkuMTZoLTEuMzM0Yy4wMTUtLjA5LjAyOC0uMTgyLjAyOC0uMjc3VjYuNTdjMC0uOTgtLjc5Ny0xLjc3Ny0xLjc3OC0xLjc3N0gzLjVWMy4zNThhLjc1Ljc1IDAgMDAtMS41IDBWMjAuODNhLjc1Ljc1IDAgMTAxLjUgMHYtMS40MzRoMTAuNTU2YTEuNzggMS43OCAwIDAwMS43NzgtMS43Nzd2LTIuMzEzYzAtLjA5NS0uMDE0LS4xODctLjAyOC0uMjc4aDQuNDE3YTEuNzggMS43OCAwIDAwMS43NzgtMS43Nzh2LTIuMzFhMS43OCAxLjc4IDAgMDAtMS43NzgtMS43OGgtLjAwMXpNMTcuMTQgNi4yOTNjLjE1MiAwIC4yNzcuMTI0LjI3Ny4yNzd2Mi4zMWEuMjguMjggMCAwMS0uMjc4LjI4SDMuNVY2LjI5aDEzLjY0di4wMDN6bS0yLjgwNyA5LjAxNHYyLjMxMmEuMjc4LjI3OCAwIDAxLS4yNzguMjc3SDMuNXYtMi44NjhoMTAuNTU2Yy4xNTMgMCAuMjc3LjEyNi4yNzcuMjh2LS4wMDF6TTIwLjUgMTMuMjVhLjI3OC4yNzggMCAwMS0uMjc4LjI3N0gzLjVWMTAuNjZoMTYuNzIyYy4xNTMgMCAuMjc4LjEyNC4yNzguMjc3djIuMzEzelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1F1ZXN0aW9uXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnUmV0d2VldChwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTIzLjc3IDE1LjY3YS43NDkuNzQ5IDAgMDAtMS4wNiAwbC0yLjIyIDIuMjJWNy42NWEzLjc1NSAzLjc1NSAwIDAwLTMuNzUtMy43NWgtNS44NWEuNzUuNzUgMCAwMDAgMS41aDUuODVjMS4yNCAwIDIuMjUgMS4wMSAyLjI1IDIuMjV2MTAuMjRsLTIuMjItMi4yMmEuNzQ5Ljc0OSAwIDEwLTEuMDYgMS4wNmwzLjUgMy41YS43NC43NCAwIDAwLjUzLjIyLjc0Ljc0IDAgMDAuNTMtLjIybDMuNS0zLjVhLjc0Ny43NDcgMCAwMDAtMS4wNnptLTEwLjY2IDMuMjhINy4yNmMtMS4yNCAwLTIuMjUtMS4wMS0yLjI1LTIuMjVWNi40NmwyLjIyIDIuMjJhLjc1Mi43NTIgMCAwMDEuMDYyIDAgLjc0OS43NDkgMCAwMDAtMS4wNmwtMy41LTMuNWEuNzQ3Ljc0NyAwIDAwLTEuMDYgMGwtMy41IDMuNWEuNzQ5Ljc0OSAwIDEwMS4wNiAxLjA2bDIuMjItMi4yMlYxNi43YTMuNzU1IDMuNzU1IDAgMDAzLjc1IDMuNzVoNS44NWEuNzUuNzUgMCAwMDAtMS41aC0uMDAyelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1JldHdlZXRcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdTZWFyY2gocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0yMS41MyAyMC40N2wtMy42Ni0zLjY2QTguOTggOC45OCAwIDAwMjAgMTFhOSA5IDAgMTAtOSA5YzIuMjE1IDAgNC4yNC0uODA0IDUuODA4LTIuMTNsMy42NiAzLjY2YS43NDYuNzQ2IDAgMDAxLjA2IDAgLjc0Ny43NDcgMCAwMC4wMDItMS4wNnpNMy41IDExYzAtNC4xMzUgMy4zNjUtNy41IDcuNS03LjVzNy41IDMuMzY1IDcuNSA3LjUtMy4zNjUgNy41LTcuNSA3LjUtNy41LTMuMzY1LTcuNS03LjV6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnU2VhcmNoXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnU2V0dGluZ3MocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMzY4IDM2OFwiIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgey4uLnByb3BzfT5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzQ0IDE0NGgtMjkuOTUyYy0yLjUxMi04LjItNS44LTE2LjEyLTkuNzkyLTIzLjY2NGwyMS4xNi0yMS4xNmM0LjUyOC00LjUyOCA3LjAyNC0xMC41NiA3LjAyNC0xNi45ODQgMC02LjQxNi0yLjQ5Ni0xMi40NDgtNy4wMjQtMTYuOTc2bC0yMi42NC0yMi42NGMtOS4wNDgtOS4wNDgtMjQuODg4LTkuMDcyLTMzLjk1MiAwbC0yMS4xNiAyMS4xNkExMzUuNzUzIDEzNS43NTMgMCAwMDIyNCA1My45NDRWMjRjMC0xMy4yMzItMTAuNzY4LTI0LTI0LTI0aC0zMmMtMTMuMjMyIDAtMjQgMTAuNzY4LTI0IDI0djI5Ljk1MmMtOC4yIDIuNTItMTYuMTIgNS44LTIzLjY2NCA5Ljc5MmwtMjEuMTY4LTIxLjE2Yy05LjM2LTkuMzYtMjQuNTkyLTkuMzYtMzMuOTUyIDBsLTIyLjY0OCAyMi42NGMtOS4zNTIgOS4zNi05LjM1MiAyNC41OTIgMCAzMy45NTJsMjEuMTYgMjEuMTY4YTEzNS43NTMgMTM1Ljc1MyAwIDAwLTkuNzkyIDIzLjY2NEgyNGMtMTMuMjMyIDAtMjQgMTAuNzY4LTI0IDI0djMyQzAgMjEzLjIzMiAxMC43NjggMjI0IDI0IDIyNGgyOS45NTJjMi41MiA4LjIgNS44IDE2LjEyIDkuNzkyIDIzLjY2NGwtMjEuMTYgMjEuMTY4Yy05LjM2IDkuMzYtOS4zNiAyNC41OTIgMCAzMy45NTJsMjIuNjQgMjIuNjQ4YzkuMzYgOS4zNTIgMjQuNTkyIDkuMzUyIDMzLjk1MiAwbDIxLjE2OC0yMS4xNmExMzUuNzUzIDEzNS43NTMgMCAwMDIzLjY2NCA5Ljc5MlYzNDRjMCAxMy4yMzIgMTAuNzY4IDI0IDI0IDI0aDMyYzEzLjIzMiAwIDI0LTEwLjc2OCAyNC0yNHYtMjkuOTUyYzguMi0yLjUyIDE2LjEyOC01LjggMjMuNjY0LTkuNzkybDIxLjE2IDIxLjE2OGM5LjA3MiA5LjA2NCAyNC45MTIgOS4wNDggMzMuOTUyIDBsMjIuNjQtMjIuNjRjNC41MjgtNC41MjggNy4wMjQtMTAuNTYgNy4wMjQtMTYuOTc2IDAtNi40MjQtMi40OTYtMTIuNDQ4LTcuMDI0LTE2Ljk3NmwtMjEuMTYtMjEuMTY4QTEzNS43NTMgMTM1Ljc1MyAwIDAwMzE0LjA1NiAyMjRIMzQ0YzEzLjIzMiAwIDI0LTEwLjc2OCAyNC0yNHYtMzJjMC0xMy4yMzItMTAuNzY4LTI0LTI0LTI0em04IDU2YzAgNC40MDgtMy41ODQgOC04IDhoLTM2YTguMDAyIDguMDAyIDAgMDAtNy43NDQgNmMtMi44MzIgMTAuOTItNy4xNDQgMjEuMzQ0LTEyLjgzMiAzMC45NzZhOC4wMSA4LjAxIDAgMDAxLjIzMiA5LjcybDI1LjQ0IDI1LjQ0OGE3Ljk0OCA3Ljk0OCAwIDAxMi4zMzYgNS42NjRjMCAyLjE1Mi0uODMyIDQuMTYtMi4zMzYgNS42NjRsLTIyLjY0IDIyLjY0Yy0zLjAwOCAzLjAwOC04LjMxMiAzLjAwOC0xMS4zMjggMGwtMjUuNDQtMjUuNDRjLTIuNTc2LTIuNTg0LTYuNTc2LTMuMDgtOS43MjgtMS4yMzItOS42MTYgNS42OC0yMC4wNCAxMC0zMC45NjggMTIuODI0QTcuOTg4IDcuOTg4IDAgMDAyMDggMzA4djM2YzAgNC40MDgtMy41ODQgOC04IDhoLTMyYy00LjQwOCAwLTgtMy41OTItOC04di0zNmE4LjAwMiA4LjAwMiAwIDAwLTYtNy43NDQgMTE5Ljk0OCAxMTkuOTQ4IDAgMDEtMzAuOTc2LTEyLjgyNCA3LjkxNSA3LjkxNSAwIDAwLTQuMDY0LTEuMTEyYy0yLjA3MiAwLTQuMTIuOC01LjY2NCAyLjM0NGwtMjUuNDQgMjUuNDRhOC4wMjUgOC4wMjUgMCAwMS0xMS4zMjggMGwtMjIuNjQtMjIuNjRjLTMuMTI4LTMuMTI4LTMuMTI4LTguMjA4IDAtMTEuMzI4bDI1LjQ0LTI1LjQ0YTcuOTkgNy45OSAwIDAwMS4yMzItOS43MmMtNS42OC05LjYzMi0xMC0yMC4wNDgtMTIuODI0LTMwLjk3NkE3Ljk4NiA3Ljk4NiAwIDAwNjAgMjA4SDI0Yy00LjQwOCAwLTgtMy41OTItOC04di0zMmMwLTQuNDA4IDMuNTkyLTggOC04aDM2YTguMDAyIDguMDAyIDAgMDA3Ljc0NC02IDExOS45NDggMTE5Ljk0OCAwIDAxMTIuODI0LTMwLjk3NiA3Ljk4OCA3Ljk4OCAwIDAwLTEuMjMyLTkuNzJsLTI1LjQ0LTI1LjQ0Yy0zLjEyLTMuMTItMy4xMi04LjIgMC0xMS4zMjhsMjIuNjQtMjIuNjRjMy4xMjgtMy4xMjggOC4yLTMuMTIgMTEuMzI4IDBsMjUuNDQgMjUuNDRhNy45NzggNy45NzggMCAwMDkuNzIgMS4yMzJjOS42MzItNS42OCAyMC4wNDgtMTAgMzAuOTc2LTEyLjgyNEE4LjAwMiA4LjAwMiAwIDAwMTYwIDYwVjI0YzAtNC40MDggMy41OTItOCA4LThoMzJjNC40MTYgMCA4IDMuNTkyIDggOHYzNmE4LjAwMiA4LjAwMiAwIDAwNiA3Ljc0NCAxMTkuODI3IDExOS44MjcgMCAwMTMwLjk2OCAxMi44MjRjMy4xNTIgMS44NTYgNy4xNTIgMS4zNiA5LjcyOC0xLjIzMmwyNS40NC0yNS40NGMzLjAxNi0zLjAyNCA4LjMyLTMuMDE2IDExLjMyOCAwbDIyLjY0IDIyLjY0YzEuNTA0IDEuNTA0IDIuMzM2IDMuNTIgMi4zMzYgNS42NjRzLS44MzIgNC4xNi0yLjMzNiA1LjY2NGwtMjUuNDQgMjUuNDRhOC4wMDIgOC4wMDIgMCAwMC0xLjIzMiA5LjcyYzUuNjg4IDkuNjMyIDEwIDIwLjA0OCAxMi44MzIgMzAuOTc2YTcuOTg2IDcuOTg2IDAgMDA3LjczNiA2aDM2YzQuNDE2IDAgOCAzLjU5MiA4IDh2MzJ6XCIgLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTg0IDExMmMtMzkuNjk2IDAtNzIgMzIuMzA0LTcyIDcyczMyLjMwNCA3MiA3MiA3MmMzOS43MDQgMCA3Mi0zMi4zMDQgNzItNzJzLTMyLjI5Ni03Mi03Mi03MnptMCAxMjhjLTMwLjg4IDAtNTYtMjUuMTItNTYtNTZzMjUuMTItNTYgNTYtNTZjMzAuODcyIDAgNTYgMjUuMTIgNTYgNTZzLTI1LjEyOCA1Ni01NiA1NnpcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1NldHRpbmdzXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnU2V0dGluZ3NGaWxsKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHsuLi5wcm9wc30+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNNTAwLjYgMjEyLjZsLTU5LjktMTQuN2MtMy4zLTEwLjUtNy41LTIwLjctMTIuNi0zMC42bDMwLjYtNTFjMy42LTYgMi43LTEzLjUtMi4xLTE4LjNMNDE0IDU1LjRjLTQuOC00LjgtMTIuMy01LjctMTguMy0yLjFsLTUxIDMwLjZjLTkuOS01LjEtMjAuMS05LjMtMzAuNi0xMi42bC0xNC40LTU5LjlDMjk3LjkgNC44IDI5MS45IDAgMjg1IDBoLTYwYy02LjkgMC0xMi45IDQuOC0xNC43IDExLjRsLTE0LjQgNTkuOWMtMTAuNSAzLjMtMjAuNyA3LjUtMzAuNiAxMi42bC01MS0zMC42Yy02LTMuNi0xMy41LTIuNy0xOC4zIDIuMUw1My40IDk4Yy00LjggNC44LTUuNyAxMi4zLTIuMSAxOC4zbDMwLjYgNTFjLTUuMSA5LjktOS4zIDIwLjEtMTIuNiAzMC42bC01Ny45IDE0LjdDNC44IDIxNC4xIDAgMjIwLjEgMCAyMjd2NjBjMCA2LjkgNC44IDEyLjkgMTEuNCAxNC40bDU3LjkgMTQuN2MzLjMgMTAuNSA3LjUgMjAuNyAxMi42IDMwLjZsLTMwLjYgNTFjLTMuNiA2LTIuNyAxMy41IDIuMSAxOC4zTDk2IDQ1OC42YzQuOCA0LjggMTIuMyA1LjcgMTguMyAyLjFsNTEtMzAuNmM5LjkgNS4xIDIwLjEgOS4zIDMwLjYgMTIuNmwxNC40IDU3LjljMS44IDYuNiA3LjggMTEuNCAxNC43IDExLjRoNjBjNi45IDAgMTIuOS00LjggMTQuNy0xMS40bDE0LjQtNTcuOWMxMC41LTMuMyAyMC43LTcuNSAzMC42LTEyLjZsNTEgMzAuNmM2IDMuNiAxMy41IDIuNyAxOC4zLTIuMWw0Mi42LTQyLjZjNC44LTQuOCA1LjctMTIuMyAyLjEtMTguM2wtMzAuNi01MWM1LjEtOS45IDkuMy0yMC4xIDEyLjYtMzAuNmw1OS45LTE0LjdjNi42LTEuNSAxMS40LTcuNSAxMS40LTE0LjR2LTYwYzAtNi45LTQuOC0xMi45LTExLjQtMTQuNHpNMjU1IDMzMmMtNDEuNCAwLTc1LTMzLjYtNzUtNzVzMzMuNi03NSA3NS03NSA3NSAzMy42IDc1IDc1LTMzLjYgNzUtNzUgNzV6XCJcbiAgICAgICAgICAgICAgICBkYXRhLW9yaWdpbmFsPVwiIzAwMDAwMFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2V0dGluZ3MtZmlsbF9zdmdfX2FjdGl2ZS1wYXRoXCJcbiAgICAgICAgICAgICAgICBkYXRhLW9sZF9jb2xvcj1cIiMwMDAwMDBcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdTZXR0aW5nc0ZpbGxcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdTaGFyZShwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE3LjUzIDcuNDdsLTUtNWEuNzQ5Ljc0OSAwIDAwLTEuMDYgMGwtNSA1YS43NDkuNzQ5IDAgMTAxLjA2IDEuMDZsMy43Mi0zLjcyVjE1YS43NS43NSAwIDAwMS41IDBWNC44MWwzLjcyIDMuNzJjLjE0Ni4xNDcuMzM4LjIyLjUzLjIyYS43NDkuNzQ5IDAgMDAuNTMtMS4yOHpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xOS43MDggMjEuOTQ0SDQuMjkyQTIuMjk0IDIuMjk0IDAgMDEyIDE5LjY1MlYxNGEuNzUuNzUgMCAwMTEuNSAwdjUuNjUyYzAgLjQzNy4zNTUuNzkyLjc5Mi43OTJoMTUuNDE2YS43OTMuNzkzIDAgMDAuNzkyLS43OTJWMTRhLjc1Ljc1IDAgMDExLjUgMHY1LjY1MmEyLjI5NCAyLjI5NCAwIDAxLTIuMjkyIDIuMjkyelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1NoYXJlXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnVGltZWxpbmVQcm9wKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMjIuNzcyIDEwLjUwNmwtNS42MTgtMi4xOTItMi4xNi02LjVhLjc1MS43NTEgMCAwMC0xLjQyNC0uMDAxbC0yLjE2IDYuNS01LjYyIDIuMTkyYS43NTEuNzUxIDAgMDAuMDAxIDEuMzk4bDUuNjIgMi4xOTIgMi4xNiA2LjVhLjc1Mi43NTIgMCAwMDEuNDI0IDBsMi4xNi02LjUgNS42Mi0yLjE5MmEuNzUxLjc1MSAwIDAwLS4wMDEtMS4zOTdoLS4wMDJ6bS02LjQ5IDIuMzJhLjc0OC43NDggMCAwMC0uNDQuNDZsLTEuNTYgNC42OTUtMS41Ni00LjY5M2EuNzUzLjc1MyAwIDAwLS40MzgtLjQ2MmwtNC4xNTUtMS42MiA0LjE1NC0xLjYyMmMuMjA4LS4wOC4zNy0uMjUuNDQtLjQ2MmwxLjU2LTQuNjkzIDEuNTYgNC42OTRjLjA3LjIxMi4yMy4zODIuNDM4LjQ2M2w0LjE1NSAxLjYyLTQuMTU1IDEuNjIyLjAwMS0uMDAyek02LjY2MyAzLjgxMmgtMS44OFYyLjA1YS43NS43NSAwIDAwLTEuNSAwdjEuNzYySDEuNWEuNzUuNzUgMCAwMDAgMS41aDEuNzgydjEuNzYyYS43NS43NSAwIDAwMS41IDBWNS4zMTJoMS44OGEuNzUuNzUgMCAxMDAtMS41aC4wMDF6bTIuNTM1IDE1LjYyMmgtMS4xdi0xLjAxNmEuNzUuNzUgMCAxMC0xLjUgMHYxLjAxNkg1LjU3YS43NS43NSAwIDAwMCAxLjVINi42djEuMDE2YS43NS43NSAwIDEwMS41IDB2LTEuMDE2aDEuMDk4YS43NS43NSAwIDAwMC0xLjV6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnVGltZWxpbmVQcm9wXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnVHdpdHRlcihwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE5LjcwMyA0LjExNGE3Ljc3MyA3Ljc3MyAwIDAxLTIuMjMuNjExIDMuODkyIDMuODkyIDAgMDAxLjcwNy0yLjE0OCA3Ljc1IDcuNzUgMCAwMS0yLjQ2NS45NDFBMy44ODMgMy44ODMgMCAwMDEwLjEgNy4wNmExMS4wMjQgMTEuMDI0IDAgMDEtOC4wMDItNC4wNTdBMy44ODMgMy44ODMgMCAwMDMuMyA4LjE4NmEzLjg3MyAzLjg3MyAwIDAxLTEuNzU4LS40ODV2LjA1YzAgMS44OCAxLjMzNyAzLjQ1IDMuMTE0IDMuODA2YTMuOTEyIDMuOTEyIDAgMDEtMS43NTQuMDY3QTMuODg0IDMuODg0IDAgMDA2LjUzIDE0LjMyYTcuNzkgNy43OSAwIDAxLTUuNzQ4IDEuNjA4IDEwLjk3OSAxMC45NzkgMCAwMDUuOTUgMS43NDVjNy4xNDIgMCAxMS4wNDYtNS45MTUgMTEuMDQ2LTExLjA0NSAwLS4xNjctLjAwNS0uMzM1LS4wMTItLjUwMmE3Ljg5MSA3Ljg5MSAwIDAwMS45MzYtMi4wMDhsLjAwMi0uMDAzelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1R3aXR0ZXJcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQWRkIH0gZnJvbSAnLi9BZGQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEFkcmVzc0FkZCB9IGZyb20gJy4vQWRyZXNzQWRkJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBcnJvd0JvdHRvbSB9IGZyb20gJy4vQXJyb3dCb3R0b20nXG5leHBvcnQgeyBkZWZhdWx0IGFzIEJhc2tldEZpbGwgfSBmcm9tICcuL0Jhc2tldEZpbGwnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEJhc2tldCB9IGZyb20gJy4vQmFza2V0J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYWxlbmRlciB9IGZyb20gJy4vQ2FsZW5kZXInXG5leHBvcnQgeyBkZWZhdWx0IGFzIENsb2NrIH0gZnJvbSAnLi9DbG9jaydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ291cmllciB9IGZyb20gJy4vQ291cmllcidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRW1vamkgfSBmcm9tICcuL0Vtb2ppJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFeHBsb3JlRmlsbCB9IGZyb20gJy4vRXhwbG9yZUZpbGwnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEV4cGxvcmUgfSBmcm9tICcuL0V4cGxvcmUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEdpZiB9IGZyb20gJy4vR2lmJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBIb21lRmlsbCB9IGZyb20gJy4vSG9tZUZpbGwnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEhvbWUgfSBmcm9tICcuL0hvbWUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIMSwY29uQ29tbWVudCB9IGZyb20gJy4vxLBjb25Db21tZW50J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMaWtlIH0gZnJvbSAnLi9MaWtlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMaXN0RmlsbCB9IGZyb20gJy4vTGlzdEZpbGwnXG5leHBvcnQgeyBkZWZhdWx0IGFzIExpc3QgfSBmcm9tICcuL0xpc3QnXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hcmtGaWxsIH0gZnJvbSAnLi9NYXJrRmlsbCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFyayB9IGZyb20gJy4vTWFyaydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWVkaWEgfSBmcm9tICcuL01lZGlhJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNZXNzYWdlRmlsbCB9IGZyb20gJy4vTWVzc2FnZUZpbGwnXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1lc3NhZ2UgfSBmcm9tICcuL01lc3NhZ2UnXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1vbmV5IH0gZnJvbSAnLi9Nb25leSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTW9yZSB9IGZyb20gJy4vTW9yZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTm90aWZpY2F0aW9uRmlsbCB9IGZyb20gJy4vTm90aWZpY2F0aW9uRmlsbCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTm90aWZpY2F0aW9uIH0gZnJvbSAnLi9Ob3RpZmljYXRpb24nXG5leHBvcnQgeyBkZWZhdWx0IGFzIFByb2R1Y3RzRmlsbCB9IGZyb20gJy4vUHJvZHVjdHNGaWxsJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9kdWN0cyB9IGZyb20gJy4vUHJvZHVjdHMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFByb2ZpbGVGaWxsIH0gZnJvbSAnLi9Qcm9maWxlRmlsbCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvZmlsZSB9IGZyb20gJy4vUHJvZmlsZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUXVlc3Rpb24gfSBmcm9tICcuL1F1ZXN0aW9uJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZXR3ZWV0IH0gZnJvbSAnLi9SZXR3ZWV0J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWFyY2ggfSBmcm9tICcuL1NlYXJjaCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2V0dGluZ3NGaWxsIH0gZnJvbSAnLi9TZXR0aW5nc0ZpbGwnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNldHRpbmdzIH0gZnJvbSAnLi9TZXR0aW5ncydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2hhcmUgfSBmcm9tICcuL1NoYXJlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUaW1lbGluZVByb3AgfSBmcm9tICcuL1RpbWVsaW5lUHJvcCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVHdpdHRlciB9IGZyb20gJy4vVHdpdHRlciciLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnxLBjb25Db21tZW50KHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTQuMDQ2IDIuMjQybC00LjE0OC0uMDFoLS4wMDJjLTQuMzc0IDAtNy44IDMuNDI3LTcuOCA3LjgwMiAwIDQuMDk4IDMuMTg2IDcuMjA2IDcuNDY1IDcuMzd2My44MjhhLjg1Ljg1IDAgMDAuMTIuNDAzLjc0NC43NDQgMCAwMDEuMDM0LjIyOWMuMjY0LS4xNjggNi40NzMtNC4xNCA4LjA4OC01LjUwNiAxLjkwMi0xLjYxIDMuMDQtMy45NyAzLjA0My02LjMxMnYtLjAxN2MtLjAwNi00LjM2Ny0zLjQzLTcuNzg3LTcuOC03Ljc4OHYuMDAxem0zLjc4NyAxMi45NzJjLTEuMTM0Ljk2LTQuODYyIDMuNDA1LTYuNzcyIDQuNjQzVjE2LjY3YS43NS43NSAwIDAwLS43NS0uNzVoLS4zOTZjLTMuNjYgMC02LjMxOC0yLjQ3Ni02LjMxOC01Ljg4NiAwLTMuNTM0IDIuNzY4LTYuMzAyIDYuMy02LjMwMmw0LjE0Ny4wMWguMDAyYzMuNTMyIDAgNi4zIDIuNzY2IDYuMzAyIDYuMjk2LS4wMDMgMS45MS0uOTQyIDMuODQ0LTIuNTE0IDUuMTc2aC0uMDAxelwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z8SwY29uQ29tbWVudFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2J1dHRvbi5tb2R1bGUuY3NzJ1xyXG5cclxuZnVuY3Rpb24gTGlua0J1dHRvbih7IGhyZWYsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxyXG4gICAgICAgICAgICA8YSB7Li4ucHJvcHN9PntjaGlsZHJlbn08L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBCYXNlQnV0dG9uKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0pIHtcclxuICAgIHJldHVybiA8YnV0dG9uIHsuLi5wcm9wc30+e2NoaWxkcmVufTwvYnV0dG9uPlxyXG59XHJcblxyXG5mdW5jdGlvbiBCdXR0b24oeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSB7XHJcbiAgICBjb25zdCBDb21wID0gcHJvcHMuaHJlZiA/IExpbmtCdXR0b24gOiBCYXNlQnV0dG9uXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb21wIGNsYXNzTmFtZT17Y24oc3R5bGVzLmJ1dHRvbiwgY2xhc3NOYW1lKX0gey4uLnByb3BzfT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQ29tcD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJ1dHRvblwiOiBcImJ1dHRvbl9idXR0b25fXzFoSFpUXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0IHsgSUNPTkJBUiB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pY29uYmFyLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBOYXZpZ2F0aW9uQnV0dG9uIGZyb20gJy4vbmF2aWdhdGlvbi1idXR0b24nXHJcblxyXG5mdW5jdGlvbiBJY29uTmF2KCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uYmFyfT5cclxuICAgICAgICAgICAge0lDT05CQVIubWFwKChtZW51KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHJvdXRlci5wYXRobmFtZSA9PT0gbWVudS5wYXRoXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e21lbnUucGF0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXttZW51LmtleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZCA/IG1lbnUuaWNvblNlbGVjdGVkIDogbWVudS5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2aWdhdGlvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEljb25OYXZcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaWNvbmJhclwiOiBcImljb25iYXJfaWNvbmJhcl9fMXFVYVFcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL25hdmlnYXRpb24tYnV0dG9uLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9idXR0b24nXHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5cclxuZnVuY3Rpb24gTmF2aWdhdGlvbkJ1dHRvbih7IGhyZWYsIHNlbGVjdGVkLCBjaGlsZHJlbiwgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgIHN0eWxlcy5uYXZCdXR0b24sXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZCAmJiBzdHlsZXMubmF2QnV0dG9uU2VsZWN0ZWRcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgaHJlZj17aHJlZn1cclxuICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25CdXR0b25cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibmF2QnV0dG9uXCI6IFwibmF2aWdhdGlvbi1idXR0b25fbmF2QnV0dG9uX18xNENCYVwiLFxuXHRcIm5hdkJ1dHRvblNlbGVjdGVkXCI6IFwibmF2aWdhdGlvbi1idXR0b25fbmF2QnV0dG9uU2VsZWN0ZWRfX0hvdXl0XCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5pbXBvcnQgdXNlV2luZG93U2l6ZSBmcm9tICcuLi8uLi9ob29rcy91c2VXaW5kb3dTaXplJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xheW91dC5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgQ09OU1QgZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi9jb2wvY29sLXNpZGViYXInXHJcbmltcG9ydCBNYWluIGZyb20gJy4uL2NvbC9jb2wtbWFpbidcclxuaW1wb3J0IEV4dHJhIGZyb20gJy4uL2NvbC9jb2wtZXh0cmEnXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vbmF2YmFyL25hdmJhcidcclxuaW1wb3J0IEljb25CYXIgZnJvbSAnLi4vaWNvbmJhci9pY29uYmFyJ1xyXG5pbXBvcnQgTW9iaWxlTmF2IGZyb20gJy4uL21vYmlsZS1uYXZiYXIvc2VhcmNoJ1xyXG5cclxuZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xyXG4gICAgY29uc3Qgc2l6ZSA9IHVzZVdpbmRvd1NpemUoKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7c2l6ZS53aWR0aCA8IENPTlNULk1PQklMRV9TSVpFICYmIDxNb2JpbGVOYXYgLz59XHJcbiAgICAgICAgICAgIHtzaXplLndpZHRoID4gQ09OU1QuTU9CSUxFX1NJWkUgJiYgPE5hdmJhciAvPn1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKFtzdHlsZXMubGF5b3V0XSl9PlxyXG4gICAgICAgICAgICAgICAgPFNpZGViYXI+c2lkZWJhcjwvU2lkZWJhcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8TWFpbj57Y2hpbGRyZW59PC9NYWluPlxyXG5cclxuICAgICAgICAgICAgICAgIHtzaXplLndpZHRoID4gQ09OU1QuVEFCTEVUX1NJWkUgJiYgPEV4dHJhPmV4dHJhPC9FeHRyYT59XHJcbiAgICAgICAgICAgICAgICB7c2l6ZS53aWR0aCA8IENPTlNULk1PQklMRV9TSVpFICYmIDxJY29uQmFyPjwvSWNvbkJhcj59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IExheW91dFxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsYXlvdXRcIjogXCJsYXlvdXRfbGF5b3V0X18yZWRJOVwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3NlYXJjaC5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgTG9nbyBmcm9tICcuLi9uYXZiYXIvbG9nbydcclxuXHJcbmZ1bmN0aW9uIE5hdkJhcih7IGhyZWYsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNofT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pLnBpbmltZy5jb20vb3JpZ2luYWxzL2Y0L2MyL2JmL2Y0YzJiZjg5MjU4YjNhOTUyMzM4NTRiNzIwMThhNTY0LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5ib3h9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInNlYXJjaFwiIC8+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNlYXJjaFwiOiBcInNlYXJjaF9zZWFyY2hfXzMzY0RBXCIsXG5cdFwiYm94XCI6IFwic2VhcmNoX2JveF9fcnBfUjdcIixcblx0XCJsb2dvXCI6IFwic2VhcmNoX2xvZ29fX3VDOF9KXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbG9nby5tb2R1bGUuY3NzJ1xyXG5cclxuZnVuY3Rpb24gTG9nbyh7IGhyZWYsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3M9e3N0eWxlcy5pbWFnZX0+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pLnBpbmltZy5jb20vb3JpZ2luYWxzL2Y0L2MyL2JmL2Y0YzJiZjg5MjU4YjNhOTUyMzM4NTRiNzIwMThhNTY0LnBuZ1wiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ29cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaW1hZ2VcIjogXCJsb2dvX2ltYWdlX19Xc3RKbFwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbmF2YmFyLm1vZHVsZS5jc3MnXHJcblxyXG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vc2VhcmNoLWJveCdcclxuaW1wb3J0IExvZ28gZnJvbSAnLi9sb2dvJ1xyXG5cclxuZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzPXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8TG9nbyAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxTZWFyY2ggLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhclxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJncmlkXCI6IFwibmF2YmFyX2dyaWRfXzFsd2xOXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi4vaWNvbi9TZWFyY2gnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc2VhcmNoLWJveC5tb2R1bGUuY3NzJ1xyXG5cclxuZnVuY3Rpb24gU2VhcmNoQm94KHsgaHJlZiwgY2hpbGRyZW4sIC4uLnByb3BzIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuZXhhbXBsZX0+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi5cIiBuYW1lPVwic2VhcmNoMlwiIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaCAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJveFxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJleGFtcGxlXCI6IFwic2VhcmNoLWJveF9leGFtcGxlX19MUURHNVwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbmF2aWdhdGlvbi1idXR0b24ubW9kdWxlLmNzcydcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24nXHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5cclxuZnVuY3Rpb24gTmF2aWdhdGlvbkJ1dHRvbih7IGhyZWYsIHNlbGVjdGVkLCBjaGlsZHJlbiwgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgIHN0eWxlcy5uYXZCdXR0b24sXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZCAmJiBzdHlsZXMubmF2QnV0dG9uU2VsZWN0ZWRcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgaHJlZj17aHJlZn1cclxuICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25CdXR0b25cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibmF2QnV0dG9uXCI6IFwibmF2aWdhdGlvbi1idXR0b25fbmF2QnV0dG9uX18xbUFsRVwiLFxuXHRcIm5hdkJ1dHRvblNlbGVjdGVkXCI6IFwibmF2aWdhdGlvbi1idXR0b25fbmF2QnV0dG9uU2VsZWN0ZWRfXzJrSXdmXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0IHsgU0lERU5BViB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL25hdmlnYXRpb24ubW9kdWxlLmNzcydcclxuXHJcbmltcG9ydCBOYXZpZ2F0aW9uQnV0dG9uIGZyb20gJy4vbmF2aWdhdGlvbi1idXR0b24nXHJcbmltcG9ydCBUZXh0VGl0bGUgZnJvbSAnLi4vdGV4dC10aXRsZSdcclxuXHJcbmZ1bmN0aW9uIE5hdmlnYXRpb24oKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZ9PlxyXG4gICAgICAgICAgICB7U0lERU5BVi5tYXAoKG1lbnUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNob3dUaXRsZSA9IG1lbnUudGl0bGUubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSByb3V0ZXIucGF0aG5hbWUgPT09IG1lbnUucGF0aFxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdmlnYXRpb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXttZW51LmtleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZ5PXttZW51Lm5vdGlmeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXttZW51LnBhdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5hdkJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZCA/IG1lbnUuaWNvblNlbGVjdGVkIDogbWVudS5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2hvd1RpdGxlICYmIDxUZXh0VGl0bGU+e21lbnUudGl0bGV9PC9UZXh0VGl0bGU+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2aWdhdGlvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibmF2XCI6IFwibmF2aWdhdGlvbl9uYXZfXzhudHotXCIsXG5cdFwibmF2QnV0dG9uXCI6IFwibmF2aWdhdGlvbl9uYXZCdXR0b25fXzNtTTNxXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3RleHQtdGl0bGUubW9kdWxlLmNzcydcclxuXHJcbmZ1bmN0aW9uIFRleHRUaXRsZSh7IGJvbGQgPSB0cnVlLCBjaGlsZHJlbiB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e2NuKFtzdHlsZXMudGl0bGUsIGJvbGQgJiYgc3R5bGVzLmJvbGRdKX0+e2NoaWxkcmVufTwvaDI+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVGV4dFRpdGxlXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRpdGxlXCI6IFwidGV4dC10aXRsZV90aXRsZV9fMjRLdW9cIixcblx0XCJib2xkXCI6IFwidGV4dC10aXRsZV9ib2xkX18yWUhCTVwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9idXR0b24nXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdGhlbWUtYnV0dG9uLm1vZHVsZS5jc3MnXHJcblxyXG5mdW5jdGlvbiBUaGVtZUJ1dHRvbih7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIGJpZyA9IGZhbHNlLCAuLi5wcm9wcyB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihzdHlsZXMuYnV0dG9uLCBiaWcgJiYgc3R5bGVzLmJpZ0J1dHRvbiwgY2xhc3NOYW1lKX1cclxuICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJ1dHRvblxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJidXR0b25cIjogXCJ0aGVtZS1idXR0b25fYnV0dG9uX18yODFZeFwiLFxuXHRcImJpZ0J1dHRvblwiOiBcInRoZW1lLWJ1dHRvbl9iaWdCdXR0b25fXzFHQlM1XCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdXNlci5tb2R1bGUuY3NzJ1xyXG5cclxuZnVuY3Rpb24gVXNlcih7IG5hbWUsIGFkcmVzcywgY2hpbGRyZW4sIC4uLnByb3BzIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyQ2FyZH0+XHJcbiAgICAgICAgICAgIDxoMj57bmFtZX08L2gyPlxyXG4gICAgICAgICAgICA8cD57YWRyZXNzfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlclxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ1c2VyQ2FyZFwiOiBcInVzZXJfdXNlckNhcmRfXzFRUEM1XCJcbn07XG4iLCJpbXBvcnQgKiBhcyBJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvaWNvbidcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgTU9CSUxFX1NJWkU6IDcwMCxcclxuICAgIFRBQkxFVF9TSVpFOiA5MjUsXHJcbn1cclxuZXhwb3J0IGNvbnN0IFNJREVOQVYgPSBbXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnaG9tZScsXHJcbiAgICAgICAgcGF0aDogJy9tYWluJyxcclxuICAgICAgICBpY29uOiA8SWNvbi5Ib21lIC8+LFxyXG4gICAgICAgIGljb25TZWxlY3RlZDogPEljb24uSG9tZUZpbGwgLz4sXHJcbiAgICAgICAgdGl0bGU6ICdBbmEgU2F5ZmEnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdiYXNrZXQnLFxyXG4gICAgICAgIHBhdGg6ICcvY2FydCcsXHJcbiAgICAgICAgaWNvbjogPEljb24uQmFza2V0IC8+LFxyXG4gICAgICAgIGljb25TZWxlY3RlZDogPEljb24uQmFza2V0RmlsbCAvPixcclxuICAgICAgICB0aXRsZTogJ1NlcGV0aW0nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdub3RpZmljYXRpb24nLFxyXG4gICAgICAgIHBhdGg6ICcvbm90aWZpY2F0aW9ucycsXHJcbiAgICAgICAgaWNvbjogPEljb24uTm90aWZpY2F0aW9uIC8+LFxyXG4gICAgICAgIGljb25TZWxlY3RlZDogPEljb24uTm90aWZpY2F0aW9uRmlsbCAvPixcclxuICAgICAgICB0aXRsZTogJ0JpbGRpcmltbGVyJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAncHJvZmlsZScsXHJcbiAgICAgICAgcGF0aDogJy9wcm9maWxlJyxcclxuICAgICAgICBpY29uOiA8SWNvbi5Qcm9maWxlIC8+LFxyXG4gICAgICAgIGljb25TZWxlY3RlZDogPEljb24uUHJvZmlsZUZpbGwgLz4sXHJcbiAgICAgICAgdGl0bGU6ICdQcm9maWwnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdzZXR0aW5ncycsXHJcbiAgICAgICAgcGF0aDogJy9zZXR0aW5ncycsXHJcbiAgICAgICAgaWNvbjogPEljb24uU2V0dGluZ3MgLz4sXHJcbiAgICAgICAgaWNvblNlbGVjdGVkOiA8SWNvbi5TZXR0aW5nc0ZpbGwgLz4sXHJcbiAgICAgICAgdGl0bGU6ICdBeWFybGFyJyxcclxuICAgIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBDT05URU5UID0gW1xyXG4gICAge1xyXG4gICAgICAgIGtleTogMSxcclxuICAgICAgICBuYW1lOiAnQnVyc2EgxLBza2VuZGVyJyxcclxuICAgICAgICBjb250OiAnYWPEsWzEsScsXHJcbiAgICAgICAgZGVnZXI6IDE4LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6IDIsXHJcbiAgICAgICAgbmFtZTogJ1RhdnVrIETDvHLDvG0nLFxyXG4gICAgICAgIGNvbnQ6ICd0dXLFn3UsZG9tYXRlcyxtYXJ1bCcsXHJcbiAgICAgICAgZGVnZXI6IDYsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogMyxcclxuICAgICAgICBuYW1lOiAnRXQgRMO8csO8bScsXHJcbiAgICAgICAgY29udDogJ3R1csWfdSxkb21hdGVzLG1hcnVsJyxcclxuICAgICAgICBkZWdlcjogOCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiA0LFxyXG4gICAgICAgIG5hbWU6ICdMYWhtYWN1bicsXHJcbiAgICAgICAgY29udDogJ3llxZ9pbGxpayBpbGUnLFxyXG4gICAgICAgIGRlZ2VyOiA2LFxyXG4gICAgfSxcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IElDT05CQVIgPSBbXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnaG9tZScsXHJcbiAgICAgICAgcGF0aDogJy9tYWluJyxcclxuICAgICAgICBpY29uOiA8SWNvbi5Ib21lIC8+LFxyXG4gICAgICAgIGljb25TZWxlY3RlZDogPEljb24uSG9tZUZpbGwgc3R5bGU9e3sgY29sb3I6ICd2YXIoLS1jLXRoZW1lKScgfX0gLz4sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ2Jhc2tldCcsXHJcbiAgICAgICAgcGF0aDogJy9jYXJ0JyxcclxuICAgICAgICBpY29uOiA8SWNvbi5CYXNrZXQgLz4sXHJcbiAgICAgICAgaWNvblNlbGVjdGVkOiA8SWNvbi5CYXNrZXRGaWxsIHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tYy10aGVtZSknIH19IC8+LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdwcm9maWxlJyxcclxuICAgICAgICBwYXRoOiAnL3Byb2ZpbGUnLFxyXG4gICAgICAgIGljb246IDxJY29uLlByb2ZpbGUgLz4sXHJcbiAgICAgICAgaWNvblNlbGVjdGVkOiA8SWNvbi5Qcm9maWxlRmlsbCBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLWMtdGhlbWUpJyB9fSAvPixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnc2V0dGluZ3MnLFxyXG4gICAgICAgIHBhdGg6ICcvc2V0dGluZ3MnLFxyXG4gICAgICAgIGljb246IDxJY29uLlNldHRpbmdzIC8+LFxyXG4gICAgICAgIGljb25TZWxlY3RlZDogPEljb24uU2V0dGluZ3NGaWxsIHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tYy10aGVtZSknIH19IC8+LFxyXG4gICAgfSxcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IEFETUlOU0lERUJBUiA9IFtcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdob21lJyxcclxuICAgICAgICBwYXRoOiAnL2FkbWluSG9tZScsXHJcbiAgICAgICAgaWNvbjogPEljb24uSG9tZSAvPixcclxuICAgICAgICBpY29uU2VsZWN0ZWQ6IDxJY29uLkhvbWVGaWxsIC8+LFxyXG4gICAgICAgIHRpdGxlOiAnQW5hIFNheWZhJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAncHJvZHVjdHMnLFxyXG4gICAgICAgIHBhdGg6ICcvYWRtaW5Qcm9kdWN0JyxcclxuICAgICAgICBpY29uOiA8SWNvbi5Qcm9kdWN0cyAvPixcclxuICAgICAgICBpY29uU2VsZWN0ZWQ6IDxJY29uLlByb2R1Y3RzRmlsbCAvPixcclxuICAgICAgICB0aXRsZTogJ8OccsO8bmxlcicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ2Jhc2tldCcsXHJcbiAgICAgICAgcGF0aDogJy9hZG1pbkNhcnQnLFxyXG4gICAgICAgIGljb246IDxJY29uLkJhc2tldCAvPixcclxuICAgICAgICBpY29uU2VsZWN0ZWQ6IDxJY29uLkJhc2tldEZpbGwgLz4sXHJcbiAgICAgICAgdGl0bGU6ICdTaXBhcmnFn2xlcicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ25vdGlmaWNhdGlvbicsXHJcbiAgICAgICAgcGF0aDogJy9hZG1pbkNvbW1lbnQnLFxyXG4gICAgICAgIGljb246IDxJY29uLk5vdGlmaWNhdGlvbiAvPixcclxuICAgICAgICBpY29uU2VsZWN0ZWQ6IDxJY29uLk5vdGlmaWNhdGlvbkZpbGwgLz4sXHJcbiAgICAgICAgdGl0bGU6ICdZb3J1bWxhcicsXHJcbiAgICB9LFxyXG5dXHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuZnVuY3Rpb24gdXNlV2luZG93U2l6ZSgpIHtcclxuICAgIC8vIEluaXRpYWxpemUgc3RhdGUgd2l0aCB1bmRlZmluZWQgd2lkdGgvaGVpZ2h0IHNvIHNlcnZlciBhbmQgY2xpZW50IHJlbmRlcnMgbWF0Y2hcclxuICAgIC8vIExlYXJuIG1vcmUgaGVyZTogaHR0cHM6Ly9qb3Nod2NvbWVhdS5jb20vcmVhY3QvdGhlLXBlcmlscy1vZi1yZWh5ZHJhdGlvbi9cclxuICAgIGNvbnN0IFt3aW5kb3dTaXplLCBzZXRXaW5kb3dTaXplXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB3aWR0aDogdW5kZWZpbmVkLFxyXG4gICAgICAgIGhlaWdodDogdW5kZWZpbmVkLFxyXG4gICAgfSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIEhhbmRsZXIgdG8gY2FsbCBvbiB3aW5kb3cgcmVzaXplXHJcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlUmVzaXplKCkge1xyXG4gICAgICAgICAgICAvLyBTZXQgd2luZG93IHdpZHRoL2hlaWdodCB0byBzdGF0ZVxyXG4gICAgICAgICAgICBzZXRXaW5kb3dTaXplKHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSlcclxuXHJcbiAgICAgICAgLy8gQ2FsbCBoYW5kbGVyIHJpZ2h0IGF3YXkgc28gc3RhdGUgZ2V0cyB1cGRhdGVkIHdpdGggaW5pdGlhbCB3aW5kb3cgc2l6ZVxyXG4gICAgICAgIGhhbmRsZVJlc2l6ZSgpXHJcblxyXG4gICAgICAgIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lciBvbiBjbGVhbnVwXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpXHJcbiAgICB9LCBbXSkgLy8gRW1wdHkgYXJyYXkgZW5zdXJlcyB0aGF0IGVmZmVjdCBpcyBvbmx5IHJ1biBvbiBtb3VudFxyXG5cclxuICAgIHJldHVybiB3aW5kb3dTaXplXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgdXNlV2luZG93U2l6ZVxyXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIFByZWZldGNoT3B0aW9ucyxcbiAgTmV4dFJvdXRlcixcbiAgaXNMb2NhbFVSTCxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBleGVjT25jZSB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgYWRkQmFzZVBhdGgsIHJlc29sdmVIcmVmIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hcyA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcykgOiByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoYXMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgY29uc3Qgd2FybiA9IGV4ZWNPbmNlKGNvbnNvbGUuZXJyb3IpXG5cbiAgLy8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG4gIGNvbnN0IFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKVxuICBjb25zdCBleGFjdCA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKVxuICAvLyBAdHMtaWdub3JlIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQsIHdoZW4gZGVjbGFyaW5nIGl0IG9uIHRoZSBjbGFzcyBpdCBvdXRwdXRzIGFuIGV4dHJhIGJpdCBvZiBjb2RlIHdoaWNoIGlzIG5vdCBuZWVkZWQuXG4gIExpbmsucHJvcFR5cGVzID0gZXhhY3Qoe1xuICAgIGhyZWY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLFxuICAgIGFzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgcHJlZmV0Y2g6IFByb3BUeXBlcy5ib29sLFxuICAgIHJlcGxhY2U6IFByb3BUeXBlcy5ib29sLFxuICAgIHNoYWxsb3c6IFByb3BUeXBlcy5ib29sLFxuICAgIHBhc3NIcmVmOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzY3JvbGw6IFByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgKHByb3BzOiBhbnksIHByb3BOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wc1twcm9wTmFtZV1cblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICBgV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPmBcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfSxcbiAgICBdKS5pc1JlcXVpcmVkLFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQge1xuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBiYXNlUGF0aCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGJhc2VQYXRoKVxuICAgICAgOiBiYXNlUGF0aCArIHBhdGhcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoY3VycmVudFBhdGg6IHN0cmluZywgaHJlZjogVXJsKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIHJldHVybiBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgIDogZmluYWxVcmwuaHJlZlxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIHVybEFzU3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5mdW5jdGlvbiB0cnlQYXJzZVJlbGF0aXZlVXJsKFxuICB1cmw6IHN0cmluZ1xuKTogbnVsbCB8IFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgIClcbiAgICAgIH0sIDApXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxudHlwZSBDb21wb25lbnRSZXMgPSB7IHBhZ2U6IENvbXBvbmVudFR5cGU7IG1vZDogYW55IH1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbnR5cGUgUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBhbnlcbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUm91dGVJbmZvLCBBcHA/OiBDb21wb25lbnRUeXBlKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cblxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtMb2FkaW5nRXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IENvbXBvbmVudFR5cGVcbiAgICAgIHdyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgdXBkYXRlKHJvdXRlOiBzdHJpbmcsIG1vZDogYW55KSB7XG4gICAgY29uc3QgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlID0gbW9kLmRlZmF1bHQgfHwgbW9kXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBDb21wb25lbnQsXG4gICAgICBfX05fU1NHOiBtb2QuX19OX1NTRyxcbiAgICAgIF9fTl9TU1A6IG1vZC5fX05fU1NQLFxuICAgIH0pXG4gICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGFcblxuICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBwYXJzZWQgPSB0cnlQYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGlmICghcGFyc2VkKSByZXR1cm4gZmFsc2VcblxuICAgIGxldCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMgfSA9IHBhcnNlZFxuICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpXG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKGNsZWFuZWRBcylcbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgY29uc3QgeyBlcnJvciB9ID0gcm91dGVJbmZvXG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKChvcHRpb25zIGFzIGFueSkuX05fWCwgKG9wdGlvbnMgYXMgYW55KS5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciwgZXJyb3I6IGVyciB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgIGVycixcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSBhcyBhbnkpXG4gICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8Um91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihcbiAgICAgICAgICAgIChyZXMpID0+XG4gICAgICAgICAgICAgICh7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgICAgICB9IGFzIFJvdXRlSW5mbylcbiAgICAgICAgICApXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHBhcnNlZCA9IHRyeVBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgaWYgKCFwYXJzZWQpIHJldHVyblxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGFzUGF0aCksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPENvbXBvbmVudFJlcz4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgaXRlbSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCB2YWx1ZSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4uLy4uL2xpYi9sb2FkLWVudi1jb25maWcnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogYW55XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgaW50ZXJmYWNlLW5hbWVcbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGZpbGVzOiBzdHJpbmdbXVxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dCdcclxuaW1wb3J0IENhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9jYXJ0L2NhcnQnXHJcblxyXG5mdW5jdGlvbiBDYXJ0UGFnZSgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPENhcnQgLz5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydFBhZ2VcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXMtZXhhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvb2wtdGFic1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9