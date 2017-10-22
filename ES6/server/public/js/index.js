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


// Promise
// 什么是异步
// Promise的作用
// Promise的基本用法

{
	var ajax = function ajax(cb) {
		console.log('do');
		setTimeout(function () {
			cb && cb();
		}, 1000);
	};
	ajax(function () {
		console.log('asyn', 1);
	});
}

{
	var _ajax = function _ajax() {
		console.log('do2');
		// res：执行下一步操作，rej：中断当前操作
		return new Promise(function (res, rej) {
			setTimeout(function () {
				res();
			}, 1000);
		});
	};

	_ajax().then(function () {
		console.log('promise', 2);
	});
}

{
	var _ajax2 = function _ajax2() {
		console.log('do3');
		// res：执行下一步操作，rej：中断当前操作
		return new Promise(function (res, rej) {
			setTimeout(function () {
				res();
			}, 1000);
		});
	};

	_ajax2().then(function () {
		return new Promise(function (res, rej) {
			setTimeout(function () {
				res();
			}, 2000);
		});
	}).then(function () {
		console.log('3');
	});
}

{
	var _ajax3 = function _ajax3(num) {
		console.log('do4');
		return new Promise(function (res, rej) {
			if (num > 5) {
				res();
			} else {
				throw Error('wrong');
			}
		});
	};

	_ajax3(6).then(function () {
		console.log('log', 6);
	}).catch(function (err) {
		console.log('catch', err);
	});
	// ajax(3)
	// 	.then(function(){
	// 		console.log('log',3)
	// 	}).catch(function(err){
	// 		console.log('catch',err)
	// 	})
}

{
	// Promise.all
	//所有图片加载完在添加到页面
	var loadImg = function loadImg(src) {
		return new Promise(function (res, rej) {
			var img = document.createElement('img');
			img.src = src;
			img.onload = function () {
				res(img);
			};
			img.onerror = function function_name(err) {
				rej(err);
			};
		});
	};

	var showImgs = function showImgs(imgs) {
		imgs.forEach(function (img) {
			document.body.appendChild(img);
		});
	};
	// 把多个Promise实例当一个Promise实例
	// all下面的数组都完成后才触发下面的方法


	Promise.all([loadImg('http://pic64.nipic.com/file/20150420/6215159_143018660000_2.jpg'), loadImg('http://img.taopic.com/uploads/allimg/120901/219077-120Z122341668.jpg'), loadImg('http://imgsrc.baidu.com/imgad/pic/item/03087bf40ad162d9d2fbac011bdfa9ec8a13cd92.jpg')]).then(showImgs);
}

{
	// Promise.race
	// 有一个图片加载，其余的就不加载了
	var _loadImg = function _loadImg(src) {
		return new Promise(function (res, rej) {
			var img = document.createElement('img');
			img.src = src;
			img.onload = function () {
				res(img);
			};
			img.onerror = function function_name(err) {
				rej(err);
			};
		});
	};

	var _showImgs = function _showImgs(img) {
		var div = document.createElement('div');
		div.appendChild(img);
		document.body.appendChild(div);
	};
	// 谁先到显示谁


	Promise.race([_loadImg('http://pic64.nipic.com/file/20150420/6215159_143018660000_2.jpg'), _loadImg('http://img.taopic.com/uploads/allimg/120901/219077-120Z122341668.jpg'), _loadImg('http://imgsrc.baidu.com/imgad/pic/item/03087bf40ad162d9d2fbac011bdfa9ec8a13cd92.jpg')]).then(_showImgs);
}

/***/ })
/******/ ]);