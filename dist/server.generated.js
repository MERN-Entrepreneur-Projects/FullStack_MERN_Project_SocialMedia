module.exports =
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst config = {\n  env: \"development\" || false,\n  port: process.env.PORT || 3000,\n  jwtSecret: process.env.JWT_SECRET || \"YOUR_secret_key\",\n  mongoUri: process.env.MONGODB_URI || process.env.MONGO_HOST || 'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGO_PORT || '27017') + '/mernproject'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);\n\n//# sourceURL=webpack:///./config/config.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/server/express.js: Support for the experimental syntax 'jsx' isn't currently enabled (55:9):\\n\\n\\u001b[0m \\u001b[90m 53 |\\u001b[39m   \\u001b[36mconst\\u001b[39m markup \\u001b[33m=\\u001b[39m \\u001b[33mReactDOMServer\\u001b[39m\\u001b[33m.\\u001b[39mrenderToString(\\u001b[0m\\n\\u001b[0m \\u001b[90m 54 |\\u001b[39m       sheets\\u001b[33m.\\u001b[39mcollect(\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 55 |\\u001b[39m         \\u001b[33m<\\u001b[39m\\u001b[33mStaticRouter\\u001b[39m location\\u001b[33m=\\u001b[39m{req\\u001b[33m.\\u001b[39murl} context\\u001b[33m=\\u001b[39m{context}\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    |\\u001b[39m         \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 56 |\\u001b[39m           \\u001b[33m<\\u001b[39m\\u001b[33mThemeProvider\\u001b[39m theme\\u001b[33m=\\u001b[39m{theme}\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 57 |\\u001b[39m             \\u001b[33m<\\u001b[39m\\u001b[33mMainRouter\\u001b[39m \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 58 |\\u001b[39m           \\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mThemeProvider\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\nAdd @babel/preset-react (https://github.com/babel/babel/tree/main/packages/babel-preset-react) to the 'presets' section of your Babel config to enable transformation.\\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-jsx) to the 'plugins' section to enable parsing.\\n    at instantiate (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:67:32)\\n    at constructor (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:364:12)\\n    at Parser.raise (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:3363:19)\\n    at Parser.expectOnePlugin (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:3412:18)\\n    at Parser.parseExprAtom (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:11540:18)\\n    at Parser.parseExprSubscripts (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:11182:23)\\n    at Parser.parseUpdate (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:11164:21)\\n    at Parser.parseMaybeUnary (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:11138:23)\\n    at Parser.parseMaybeUnaryOrPrivate (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:10967:61)\\n    at Parser.parseExprOps (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:10973:23)\\n    at Parser.parseMaybeConditional (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:10948:23)\\n    at Parser.parseMaybeAssign (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:10906:21)\\n    at /Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:10874:39\\n    at Parser.allowInAnd (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:12651:12)\\n    at Parser.parseMaybeAssignAllowIn (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:10874:17)\\n    at Parser.parseExprListItem (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:12391:18)\\n    at Parser.parseCallExpressionArguments (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:11378:22)\\n    at Parser.parseCoverCallAndAsyncArrowHead (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:11290:29)\\n    at Parser.parseSubscript (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:11221:19)\\n    at Parser.parseSubscripts (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:11195:19)\\n    at Parser.parseExprSubscripts (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:11186:17)\\n    at Parser.parseUpdate (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:11164:21)\\n    at Parser.parseMaybeUnary (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:11138:23)\\n    at Parser.parseMaybeUnaryOrPrivate (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:10967:61)\\n    at Parser.parseExprOps (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:10973:23)\\n    at Parser.parseMaybeConditional (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:10948:23)\\n    at Parser.parseMaybeAssign (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:10906:21)\\n    at /Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:10874:39\\n    at Parser.allowInAnd (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:12651:12)\\n    at Parser.parseMaybeAssignAllowIn (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:10874:17)\\n    at Parser.parseExprListItem (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:12391:18)\\n    at Parser.parseCallExpressionArguments (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:11378:22)\\n    at Parser.parseCoverCallAndAsyncArrowHead (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:11290:29)\\n    at Parser.parseSubscript (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:11221:19)\\n    at Parser.parseSubscripts (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:11195:19)\\n    at Parser.parseExprSubscripts (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:11186:17)\\n    at Parser.parseUpdate (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:11164:21)\\n    at Parser.parseMaybeUnary (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:11138:23)\\n    at Parser.parseMaybeUnaryOrPrivate (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:10967:61)\\n    at Parser.parseExprOps (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:10973:23)\\n    at Parser.parseMaybeConditional (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:10948:23)\\n    at Parser.parseMaybeAssign (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:10906:21)\\n    at /Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:10874:39\\n    at Parser.allowInAnd (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:12646:16)\\n    at Parser.parseMaybeAssignAllowIn (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:10874:17)\\n    at Parser.parseVar (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:13650:91)\\n    at Parser.parseVarStatement (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:13469:10)\\n    at Parser.parseStatementContent (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:13050:23)\\n    at Parser.parseStatementLike (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:12963:17)\\n    at Parser.parseStatementListItem (/Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/node_modules/@babel/parser/lib/index.js:12948:17)\");\n\n//# sourceURL=webpack:///./server/express.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./express */ \"./server/express.js\");\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n// Connection URL\nmongoose__WEBPACK_IMPORTED_MODULE_2___default.a.Promise = global.Promise;\nmongoose__WEBPACK_IMPORTED_MODULE_2___default.a.connect(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mongoUri, {\n  useNewUrlParser: true,\n  useCreateIndex: true,\n  useUnifiedTopology: true,\n  useFindAndModify: false\n});\nmongoose__WEBPACK_IMPORTED_MODULE_2___default.a.connection.on('error', () => {\n  throw new Error(`unable to connect to database: ${_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mongoUri}`);\n});\n_express__WEBPACK_IMPORTED_MODULE_1___default.a.listen(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port, err => {\n  if (err) {\n    console.log(err);\n  }\n  console.info('Server started on port %s.', _config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port);\n});\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./server/server.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/walter/Code/02 Work/02 MERNprojects/FullStack_MERN_Project_SocialMedia/server/server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_./server/server.js?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ })

/******/ });