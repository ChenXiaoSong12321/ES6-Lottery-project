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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Proxy和Reflect

{
	var obj = {
		time: '2017-10-19',
		name: 'net',
		_r: 123
		// 映射obj,对读写进行干涉
	};var monitor = new Proxy(obj, {
		// 拦截对象属性的读取
		get: function get(target, key) {
			return target[key].replace('2017', '2018');
		},

		// 拦截对象设置属性
		set: function set(target, key, val) {
			if (key === 'name') {
				return target[key] = val;
			} else {
				return target[key];
			}
		},
		//只允许修改name
		//拦截key in obj操作
		has: function has(target, key) {
			if (key === 'name') {
				return target[key];
			} else {
				return false;
			}
		},

		// 拦截删除
		deleteProperty: function deleteProperty(target, key) {
			if (key.indexOf('_') > -1) {
				delete target[key];
				return true;
			} else {
				return target[key];
			}
		},

		// 拦截Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNmaes
		ownKeys: function ownKeys(target) {
			return Object.keys(target).filter(function (item) {
				return item != 'time';
			});
		}
	});

	console.log(monitor.time); //2018-10-19
	monitor.time = '2018';
	console.log(monitor.time); //2018-10-19
	monitor.name = 'www';
	console.log(monitor.name); //www

	console.log('has', 'name' in monitor, 'time' in monitor);

	// delete monitor.time;
	// console.log('delete',monitor)

	// delete monitor._r;
	// console.log('delete',monitor)

	console.log('ownKeys', Object.keys(monitor));
}

{
	var _obj = {
		time: '2017-10-19',
		name: 'net',
		_r: 123
	};

	console.log('Reflect', Reflect.get(_obj, 'time'));
	Reflect.set(_obj, 'name', 'hhh');
	console.log('set', _obj);
	console.log('has', Reflect.has(_obj, 'name'));
}

// {
// 	function validator(target,validator){
// 		return new Proxy{target,{
// 			_validator:validator,
// 			set(target,key,value,proxy){
// 				if (target.has()) {}
// 			}
// 		}}
// 	}
// }

/***/ })
/******/ ]);