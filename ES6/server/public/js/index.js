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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: D:/file/chenshisong/ES6-Lottery-project/ES6/app/js/class/lesson11.js: Unexpected token, expected ; (78:18)\n\n\u001b[0m \u001b[90m 76 | \u001b[39m{\n \u001b[90m 77 | \u001b[39m\t\u001b[36mfunction\u001b[39m validator(target\u001b[33m,\u001b[39mvalidator){\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 78 | \u001b[39m\t\t\u001b[36mreturn\u001b[39m \u001b[36mnew\u001b[39m \u001b[33mProxy\u001b[39m{target\u001b[33m,\u001b[39m{\n \u001b[90m    | \u001b[39m\t\t                \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 79 | \u001b[39m\t\t\t_validator\u001b[33m:\u001b[39mvalidator\u001b[33m,\u001b[39m\n \u001b[90m 80 | \u001b[39m\t\t\tset(target\u001b[33m,\u001b[39mkey\u001b[33m,\u001b[39mvalue\u001b[33m,\u001b[39mproxy){\n \u001b[90m 81 | \u001b[39m\t\t\t\t\u001b[36mif\u001b[39m (target\u001b[33m.\u001b[39mhas()) {}\u001b[0m\n");

/***/ })
/******/ ]);