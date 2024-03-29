webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Styles_images_Logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Styles/images/Logo.png */ "./Styles/images/Logo.png");
/* harmony import */ var _Styles_images_Logo_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Styles_images_Logo_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _pages_LoginForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/LoginForm */ "./pages/LoginForm.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\admin\\Desktop\\DecafMap\\front\\components\\AppLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-image: url(", ");\n  z-index:1;\n  width: 100%;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-color: ", ";\n  padding: 5px;\n  font-size: 14px;\n  border-radius: 3px;\n  height: auto;\n  text-align: center;\n  width: 70%;\n  &::placeholder {\n    opacity: 0.8;\n    font-weight: 200;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 33%;\n  text-align: center;\n  verticalAlign: middle;\n  &:first-child {\n    margin-right: auto;\n    text-align: center;\n  }\n\n  \n  &:last-child {\n    margin-left: auto;\n    text-align: center;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 90%;\n  max-width: 100%;\n  display: flex;\n  justify-content: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  border: 0;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: white;\n  border-bottom: ", ";\n  border-radius: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 25px 0px;\n  z-index: 2;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var Header = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].header(_templateObject(), function (props) {
  return props.theme.boxBorder;
});
var HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
var HeaderColumn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3());
var SearchInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(antd__WEBPACK_IMPORTED_MODULE_3__["Input"])(_templateObject4(), function (props) {
  return props.theme.bgColor;
});
var LogoImage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a(_templateObject5(), function (props) {
  return props.image;
});

var AppLayout = function AppLayout(_ref) {
  var children = _ref.children;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    style: {
      width: '100%',
      height: 'auto'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx(Header, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, __jsx(HeaderWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }, __jsx(HeaderColumn, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 27
    }
  }, __jsx(LogoImage, {
    image: _Styles_images_Logo_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 42
    }
  }, "\uB85C\uACE0\uC790\uB9AC"))), __jsx(HeaderColumn, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 25
    }
  }, __jsx("form", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 27
    }
  }, __jsx(SearchInput, {
    placeholder: "\uAC80\uC0C9",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 31
    }
  }))), __jsx(HeaderColumn, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 25
    }
  }, __jsx("span", {
    style: {
      marginRight: "10px",
      borderRight: 'solid 1px #F0F0F3',
      padding: '10px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/LoginForm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 30
    }
  }, __jsx("a", {
    style: {
      color: '#000000'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 54
    }
  }, "\uB85C\uADF8\uC778"))), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/singup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 30
    }
  }, __jsx("a", {
    style: {
      color: '#000000'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 51
    }
  }, "\uD68C\uC6D0\uAC00\uC785")))))), children));
};

/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ })

})
//# sourceMappingURL=_app.js.5d0a1b431529da9d6a36.hot-update.js.map