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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0fH4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("5mtF");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);




const Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "ThemeButton__Button",
  componentId: "sc-1no5au5-0"
})(["cursor:pointer;.corner{fill:", ";position:absolute;top:0;border:0;right:0;transition:fill 500ms ease;&:hover{filter:opacity(0.8);}}@keyframes zoom{from{transform:scale(0);}to{transform:scale(1);}}.icon{position:absolute;top:0;border:0;right:0;z-index:10;margin:0.75rem 0.75rem 0 0;animation:zoom 500ms ease;}"], ({
  theme
}) => theme.backgroundSecondary);

const ThemeButton = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(Button, {
    href: "https://github.com/01Abhinav/ASCIIndex",
    target: "_blank",
    onClick: props.toggleTheme,
    "aria-label": "Toggle Theme",
    children: [props.theme === "dark" && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaMoon"], {
      className: "icon",
      color: "#F4E34F",
      size: 24
    }), props.theme === "light" && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaSun"], {
      className: "icon",
      color: "#F79B08",
      size: 24
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
      width: "80",
      height: "80",
      "aria-hidden": "true",
      className: "corner",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("polyline", {
        points: "0,0 80,80 80,0 "
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (ThemeButton);

/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themes", function() { return themes; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const LightTheme = {
  backgroundprimary: "#ffffff",
  backgroundSecondary: "#DFDFDD",
  fontPrimary: "#000000",
  fontSecondary: "#5A5A58"
};
const DarkTheme = {
  backgroundPrimary: "#151515",
  backgroundSecondary: "#202022",
  fontPrimary: "#ffffff",
  fontSecondary: "#A5A5A7"
};
const themes = {
  light: LightTheme,
  dark: DarkTheme
};
const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"]`
* {
  box-sizing: border-box;
  transition: background-color 500ms ease;
}

html{
  scroll-behavior: smooth;
}

html,body{
  padding: 0;
  margin: 0;
  font-family: "Poppins", sans-serif;
}

body{
    background-color: ${({
  theme
}) => theme.backgroundPrimary};
    position: relative;
  }
`;

function MyApp({
  Component,
  pageProps
}) {
  // const [theme, setTheme] = useState(
  //   JSON.parse(localStorage.getItem("theme")) || "dark"
  // );
  const {
    0: theme,
    1: setTheme
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("dark");
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    setTheme(localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme:light)").matches ? "light" : "dark"));
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("title", {
        children: "Snehil"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("script", {
        src: "/js/NotAtAllInteresting.js"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("title", {
        children: "Snehil's Portfolio"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        name: "title",
        content: "Snehil's Portfolio"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        name: "description",
        content: "Snehil is a passionate programmer who's on a journey to become a full-stack web developer at a FAANG company. He's an Electronics and Communication undergraduate from SRMIST, India. He also likes playing/making games and watching anime and hates talking about himself in the third person."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        property: "og:type",
        content: "website"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        property: "og:url",
        content: "https://snehil.dev/"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        property: "og:title",
        content: "Snehil's Portfolio"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        property: "og:description",
        content: "Snehil is a passionate programmer who's on a journey to become a full-stack web developer at a FAANG company. He's an Electronics and Communication undergraduate from SRMIST, India. He also likes playing/making games and watching anime and hates talking about himself in the third person."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        property: "og:image",
        content: "/og-image.jpg"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        property: "twitter:card",
        content: "summary"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
        rel: "apple-touch-icon",
        href: "/logo192.png"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap",
        rel: "stylesheet"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(GlobalStyle, {
      theme: themes[theme]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
      theme: themes[theme],
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Component, _objectSpread({
        theme: theme,
        setTheme: setTheme
      }, pageProps))
    })]
  });
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "5mtF":
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "7Y9C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAllSkills; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mw/K");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oyvS");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("uo/4");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const contentDirectory = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(process.cwd(), "content");
function getAllSkills() {
  const file = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(contentDirectory, "skills.md");
  const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFileSync(file, "utf8");
  const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
  return _objectSpread({}, matterResult.data);
}

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "GRL/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAllProjects; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mw/K");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oyvS");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("uo/4");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const contentDirectory = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(process.cwd(), "content");
function getAllProjects() {
  const file = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(contentDirectory, "projects.md");
  const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFileSync(file, "utf8");
  const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
  return _objectSpread({}, matterResult.data);
}

/***/ }),

/***/ "HBnD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAllRoles; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mw/K");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oyvS");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("uo/4");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const contentDirectory = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(process.cwd(), "content");
function getAllRoles() {
  const file = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(contentDirectory, "experience.md");
  const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFileSync(file, "utf8");
  const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
  return _objectSpread({}, matterResult.data);
}

/***/ }),

/***/ "IrP5":
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("iwtP");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("5mtF");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("qEf8");
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_hi__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("kS/G");
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_gi__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("fscR");
/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_fc__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_Styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("gD0v");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("1TCz");
/* harmony import */ var _lib_skills__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("7Y9C");
/* harmony import */ var _lib_experience__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("HBnD");
/* harmony import */ var _components_ThemeButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("0fH4");
/* harmony import */ var react_masonry_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("tq2Q");
/* harmony import */ var react_masonry_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_masonry_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _lib_projects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("GRL/");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("IrP5");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_reveal_Flip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("eNRY");
/* harmony import */ var react_reveal_Flip__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Flip__WEBPACK_IMPORTED_MODULE_15__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















function Home(props) {
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    skills: false,
    experience: false,
    projects: false
  });
  const {
    0: windowHeight,
    1: setWindowHeight
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);

  if (false) {}

  const ToggleTheme = () => {
    if (props.theme === "light") props.setTheme("dark");else props.setTheme("light");
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_styles_Styles__WEBPACK_IMPORTED_MODULE_7__[/* Page */ "e"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_ThemeButton__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
      toggleTheme: ToggleTheme,
      theme: props.theme
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_styles_Styles__WEBPACK_IMPORTED_MODULE_7__[/* Main */ "d"], {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styles_Styles__WEBPACK_IMPORTED_MODULE_7__[/* Left */ "b"], {
        visibility: visible,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("section", {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
            children: "Bienvenue, je suis"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
            children: "\xC9ric CAUJOLLE BERT"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
            className: "bio",
            children: "De formation de base en r\xE9seaux et maintenance informatique, je recherche \xE0 \xE9voluer vers le d\xE9veloppement web, mon expertise en maintenance et assistance utilisateurs est un atout pour int\xE9grer votre \xE9quipe."
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "headings",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
              id: "link-skills",
              href: "#skills",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                children: "01\xA0"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                className: "divider"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                children: "SKILLS"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
              id: "link-experience",
              href: "#experience",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                children: "02"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                className: "divider"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                children: "EXPERIENCE"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
              id: "link-projects",
              href: "#projects",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                children: "03"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                className: "divider"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                children: "PROJECTS"
              })]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "profile",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
              src: "/images/profile.png"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              href: "mailto:eric.caujolle@sfr.fr",
              children: "eric.caujolle@sfr.fr"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "details",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_styles_Styles__WEBPACK_IMPORTED_MODULE_7__[/* Link */ "c"], {
              href: "https://github.com/sneakysensei",
              target: "_blank",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaGithub"], {
                size: 18
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                children: "GitHub"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_hi__WEBPACK_IMPORTED_MODULE_4__["HiOutlineExternalLink"], {
                size: 16
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_styles_Styles__WEBPACK_IMPORTED_MODULE_7__[/* Link */ "c"], {
              href: "https://www.linkedin.com/in/snehilcodes/",
              target: "_blank",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaLinkedin"], {
                size: 18
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                children: "Linkedin"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_hi__WEBPACK_IMPORTED_MODULE_4__["HiOutlineExternalLink"], {
                size: 16
              })]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "details",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_styles_Styles__WEBPACK_IMPORTED_MODULE_7__[/* Link */ "c"], {
              href: "https://twitter.com/snehilcodes",
              target: "_blank",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaTwitter"], {
                size: 18
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                children: "Twitter"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_hi__WEBPACK_IMPORTED_MODULE_4__["HiOutlineExternalLink"], {
                size: 16
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_styles_Styles__WEBPACK_IMPORTED_MODULE_7__[/* Link */ "c"], {
              href: "https://www.youtube.com/channel/UC2S8KvlxBnkwgWZyWDzFggA?view_as=subscriber",
              target: "_blank",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaYoutube"], {
                size: 18
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                children: "YouTube"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_hi__WEBPACK_IMPORTED_MODULE_4__["HiOutlineExternalLink"], {
                size: 16
              })]
            })]
          })]
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_styles_Styles__WEBPACK_IMPORTED_MODULE_7__[/* Right */ "g"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
          id: "skills",
          children: "Skills"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default.a, {
          partialVisibility: true,
          onChange: isVisible => {
            setVisible(visible => {
              return _objectSpread(_objectSpread({}, visible), {}, {
                skills: isVisible
              });
            });
          },
          offset: {
            top: windowHeight / 3,
            bottom: windowHeight / 3
          },
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styles_Styles__WEBPACK_IMPORTED_MODULE_7__[/* Skills */ "h"], {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("canvas", {
              width: "720",
              height: "720",
              id: "myCanvas",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                children: "Anything in here will be replaced on browsers that support the canvas element"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("ul", {
                children: props.skills.map(skill => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                  href: "#",
                  id: skill.name,
                  onClick: e => {
                    e.preventDefault();
                    eval(`TagCanvas.TagToFront("myCanvas", {id: "${skill.name}", active: 1});`);
                  },
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("li", {
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                      width: "80",
                      height: "80",
                      src: `/images/svg/${skill.image}${props.theme === "light" ? "-light" : ""}.svg`
                    }), skill.name]
                  })
                }, skill.name))
              })]
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
          id: "experience",
          children: "Experience"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default.a, {
          partialVisibility: true,
          onChange: isVisible => {
            setVisible(visible => {
              return _objectSpread(_objectSpread({}, visible), {}, {
                experience: isVisible
              });
            });
          },
          offset: {
            top: windowHeight / 3,
            bottom: windowHeight / 3
          },
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("section", {
            children: props.roles.map(role => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_14___default.a, {
              bottom: true,
              fraction: 0.4,
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_styles_Styles__WEBPACK_IMPORTED_MODULE_7__[/* ExperienceCard */ "a"], {
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("header", {
                  children: role.type
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                    src: `/images/experience/${role.image}`
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
                    children: role.name
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("header", {
                  className: "date",
                  children: role.duration
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("ul", {
                  children: role.description.map(sentence => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                    children: sentence
                  }, sentence))
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                  href: role.link,
                  target: "_blank",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_hi__WEBPACK_IMPORTED_MODULE_4__["HiOutlineExternalLink"], {
                    size: 18
                  })
                })]
              })
            }, role.name))
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
          id: "projects",
          children: "Projects"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default.a, {
          partialVisibility: true,
          onChange: isVisible => {
            setVisible(visible => {
              return _objectSpread(_objectSpread({}, visible), {}, {
                projects: isVisible
              });
            });
          },
          offset: {
            top: windowHeight / 3,
            bottom: windowHeight / 3
          },
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_masonry_css__WEBPACK_IMPORTED_MODULE_12___default.a, {
            breakpointCols: {
              default: 2,
              916: 1,
              749: 2,
              529: 1
            },
            className: "my-masonry-grid",
            columnClassName: "my-masonry-grid_column",
            children: props.projects.map(project => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_reveal_Flip__WEBPACK_IMPORTED_MODULE_15___default.a, {
              left: true,
              fraction: 0.4,
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styles_Styles__WEBPACK_IMPORTED_MODULE_7__[/* ProjectCard */ "f"], {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                  className: "container",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("header", {
                    className: "platform",
                    children: [project.platform === "web" && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_fc__WEBPACK_IMPORTED_MODULE_6__["FcGlobe"], {
                      size: 24
                    }), project.platform === "android" && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_fc__WEBPACK_IMPORTED_MODULE_6__["FcAndroidOs"], {
                      size: 26
                    }), project.platform === "mobile" && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_fc__WEBPACK_IMPORTED_MODULE_6__["FcPhoneAndroid"], {
                      size: 24
                    }), project.platform === "game" && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaGhost"], {
                      color: "#FF3100",
                      size: 22
                    })]
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("header", {
                    className: "stack",
                    children: project.stack
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                    children: project.description
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                    className: "spacer"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                    className: "links",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
                      href: project.source,
                      children: ["Source ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_hi__WEBPACK_IMPORTED_MODULE_4__["HiOutlineExternalLink"], {})]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
                      href: project.demo,
                      children: ["Visit ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_hi__WEBPACK_IMPORTED_MODULE_4__["HiOutlineExternalLink"], {})]
                    })]
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                    className: "footer",
                    children: project.name
                  })]
                })
              })
            }, project.name))
          })
        })]
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("footer", {
      children: ["Made with\xA0", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_gi__WEBPACK_IMPORTED_MODULE_5__["GiTechnoHeart"], {
        className: "heart",
        size: 22
      }), "\xA0by Snehil", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("span", {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
          href: "https://github.com/SneakySensei/portfolio-v2",
          target: "_blank",
          children: "View Source"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), "Design Inspired by", " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
          href: "https://sarahdayan.dev/",
          target: "_blank",
          children: "Sarah Dayan"
        })]
      })]
    })]
  });
}
async function getStaticProps() {
  const skills = Object(_lib_skills__WEBPACK_IMPORTED_MODULE_9__[/* getAllSkills */ "a"])();
  const experience = Object(_lib_experience__WEBPACK_IMPORTED_MODULE_10__[/* getAllRoles */ "a"])();
  const projects = Object(_lib_projects__WEBPACK_IMPORTED_MODULE_13__[/* getAllProjects */ "a"])();
  return {
    props: {
      skills: [...skills.skills],
      roles: [...experience.roles],
      projects: [...projects.projects]
    }
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "eNRY":
/***/ (function(module, exports) {

module.exports = require("react-reveal/Flip");

/***/ }),

/***/ "fscR":
/***/ (function(module, exports) {

module.exports = require("react-icons/fc");

/***/ }),

/***/ "gD0v":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ProjectCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExperienceCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return Skills; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Main; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Left; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ProjectCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.article.withConfig({
  displayName: "Styles__ProjectCard",
  componentId: "w5gz4s-0"
})(["overflow:hidden;border-radius:0.5rem;background:", ";margin-bottom:0.5rem;padding:1rem;position:relative;.container{position:absolute;top:0;bottom:0;left:0;right:0;padding:1rem;display:flex;flex-direction:column;justify-content:flex-start;.platform{color:", ";text-transform:uppercase;}.stack{color:", ";}header{font-size:10pt;}p{margin-top:1rem;font-size:12pt;padding-right:3.5rem;display:initial;@media screen and (min-width:529px) and (max-width:749px){display:none;}@media screen and (min-width:916px){display:none;}}.spacer{flex:1;}.footer{font-size:18pt;line-height:18pt;padding-right:2rem;}.links{font-size:10pt;display:flex;flex-direction:row;align-items:center;justify-content:flex-start;position:absolute;transform:rotate(90deg);right:0;bottom:0;transform-origin:95% -50%;a{text-decoration:none;display:flex;flex-direction:row;align-items:center;justify-content:flex-start;color:", ";transition:color 300ms ease,transform 300ms ease;margin-left:1.25rem;svg{margin-left:0.5rem;}&:hover{color:", ";transform:translateX(-8px);}}}}img{width:100%;}&:before{display:block;content:\"\";padding:50%;}"], ({
  theme
}) => theme.backgroundSecondary, ({
  theme
}) => theme.fontPrimary, ({
  theme
}) => theme.fontSecondary, ({
  theme
}) => theme.fontSecondary, ({
  theme
}) => theme.fontPrimary);
const ExperienceCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.article.withConfig({
  displayName: "Styles__ExperienceCard",
  componentId: "w5gz4s-1"
})(["padding:2rem;margin-bottom:0.5rem;position:relative;background-color:", ";border-radius:0.5rem;box-shadow:0 0.125em 0.3125em rgba(0,0,0,0.25),0 0.02125em 0.06125em rgba(0,0,0,0.25);header{text-transform:uppercase;margin-bottom:0.5rem;font-size:10pt;}.date{color:", ";text-transform:initial;}div{margin-bottom:0.5rem;display:flex;flex-direction:row;align-items:flex-start;justify-content:flex-start;img{height:28pt;}}h2{margin:0 0 0 0.5rem;line-height:28pt;font-weight:500;font-size:18pt;}ul{padding-left:1rem;margin:0;font-size:11pt;color:", ";}ul li{margin-bottom:0.5rem;&:last-child{margin-bottom:0;}}a{position:absolute;right:0;top:0;line-height:18px;margin:2rem 2rem 0 0;svg{stroke:", ";}}"], ({
  theme
}) => theme.backgroundSecondary, ({
  theme
}) => theme.fontSecondary, ({
  theme
}) => theme.fontSecondary, ({
  theme
}) => theme.fontSecondary);
const Skills = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "Styles__Skills",
  componentId: "w5gz4s-2"
})(["position:relative;width:100%;&::after{content:\"\";padding-bottom:100%;display:block;}canvas{position:absolute;top:0;left:0;width:100%;height:100%;}"]);
const Right = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Styles__Right",
  componentId: "w5gz4s-3"
})(["flex:1;@media screen and (max-width:749px){flex:initial;}h1{padding:4rem 0 1.5rem 0;font-weight:300;margin:0;font-size:26pt;line-height:26pt;}.my-masonry-grid{display:-webkit-box;display:-ms-flexbox;display:flex;margin-left:-0.5rem;width:auto;}.my-masonry-grid_column{padding-left:0.5rem;background-clip:padding-box;&:nth-of-type(2){margin-top:3rem;}}.react-reveal:last-child{article{margin-bottom:0;}}"]);
const Main = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.main.withConfig({
  displayName: "Styles__Main",
  componentId: "w5gz4s-4"
})(["display:flex;flex-direction:row;max-width:64rem;margin:0 auto 1.5rem auto;min-height:100vh;padding:0 1rem;@media screen and (max-width:749px){flex-direction:column;}"]);
const Page = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Styles__Page",
  componentId: "w5gz4s-5"
})(["color:", ";a{color:", ";text-decoration:underline;}footer{font-size:14pt;color:", ";margin-bottom:1rem;text-align:center;.heart{color:", ";margin-bottom:-0.15rem;}a{font-weight:normal;}span{font-size:11pt;}}"], ({
  theme
}) => theme.fontPrimary, ({
  theme
}) => theme.fontPrimary, ({
  theme
}) => theme.fontSecondary, ({
  theme
}) => theme.fontPrimary);
const Link = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "Styles__Link",
  componentId: "w5gz4s-6"
})(["display:flex;flex-direction:row;justify-content:flex-start;align-items:center;margin-right:2.75rem;margin-bottom:1rem;text-decoration:none !important;span{margin-left:1rem;margin-right:0.5rem;}"]);
const Left = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Styles__Left",
  componentId: "w5gz4s-7"
})(["flex:1;display:flex;flex-direction:column;@media screen and (max-width:749px){flex:initial;}section{margin:0 1rem;position:sticky;top:0rem;overflow-y:auto;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;@media screen and (min-width:749px){height:100vh;}&::-webkit-scrollbar{display:none;}@media screen and (max-width:749px){padding-top:6rem;}}h1{font-size:36pt;margin:0 0 2rem 0;line-height:36pt;}.bio{margin:0 2.5rem 2rem 0;color:", ";font-size:11pt;}.headings{margin-bottom:1rem;font-size:11pt;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;a{display:flex;flex-direction:row;align-items:center;justify-items:flex-start;margin-bottom:1rem;text-decoration:none;.divider{margin:0 1rem;transition:width 300ms ease;border-bottom:1px solid;}}@media screen and (max-width:749px){display:none;}}.profile{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;margin-bottom:2rem;font-size:11pt;img{height:3.75rem;width:3.75rem;object-fit:scale-down;border-radius:50%;margin-right:1.5rem;}a{color:", ";text-decoration:none;transition:color 300ms ease,transform 300ms ease;&:hover{color:", ";transform:translateX(8px);}}}.details{font-weight:300;font-size:11pt;align-self:stretch;display:flex;flex-direction:row;align-items:center;justify-content:flex-start;flex-wrap:wrap;}#link-skills{color:", ";.divider{width:", ";}}#link-experience{color:", ";.divider{width:", ";}}#link-projects{color:", ";.divider{width:", ";}}"], ({
  theme
}) => theme.fontSecondary, ({
  theme
}) => theme.fontSecondary, ({
  theme
}) => theme.fontPrimary, ({
  theme,
  visibility
}) => visibility.skills ? theme.fontPrimary : theme.fontSecondary, ({
  visibility
}) => visibility.skills ? "3.5rem" : "2rem", ({
  theme,
  visibility
}) => visibility.experience ? theme.fontPrimary : theme.fontSecondary, ({
  visibility
}) => visibility.experience ? "3.5rem" : "2rem", ({
  theme,
  visibility
}) => visibility.projects ? theme.fontPrimary : theme.fontSecondary, ({
  visibility
}) => visibility.projects ? "3.5rem" : "2rem");

/***/ }),

/***/ "iwtP":
/***/ (function(module, exports) {

module.exports = require("react-visibility-sensor");

/***/ }),

/***/ "kS/G":
/***/ (function(module, exports) {

module.exports = require("react-icons/gi");

/***/ }),

/***/ "mw/K":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "qEf8":
/***/ (function(module, exports) {

module.exports = require("react-icons/hi");

/***/ }),

/***/ "tq2Q":
/***/ (function(module, exports) {

module.exports = require("react-masonry-css");

/***/ }),

/***/ "uo/4":
/***/ (function(module, exports) {

module.exports = require("gray-matter");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });