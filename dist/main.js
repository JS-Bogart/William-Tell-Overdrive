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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _planet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./planet */ \"./src/planet.js\");\n\n\nclass Game {\n  constructor(ctx) {\n    this.planets = [];\n    this.ctx = ctx;\n\n    Game.BG_COLOR = \"#000000\";\n    Game.DIM_X = 1200;\n    Game.DIM_Y = 700;\n  }\n\n\n  draw(ctx) {\n    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    ctx.fillStyle = Game.BG_COLOR;\n    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    \n    this.drawPlanets();\n  };\n\n  addPlanet() {\n    this.planets.push(new _planet__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx));\n    console.log(this.planets);\n  }\n\n  removePlanet() {\n    this.planets.shift();\n    console.log(this.planets);\n  }\n\n  drawPlanets() {\n    this.planets.forEach(function(planet) {\n      planet.draw();\n    });\n  }\n\n  generatePlanets() {\n\n    let addPlanet = this.addPlanet.bind(this);\n    let removePlanet = this.removePlanet.bind(this);\n    setInterval(function () { \n\n      addPlanet();\n\n      setTimeout(function () {\n        removePlanet();\n      }, 4000)\n    }, 5 * 1000);\n  };\n\n  step() {\n    \n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass GameView {\n  constructor(game, ctx) {\n    this.ctx = ctx;\n    this.game = game;\n  }\n\n  start() {\n    this.game.generatePlanets(this.ctx);\n    requestAnimationFrame(this.animate.bind(this));\n  };\n  \n  animate() {\n    this.game.draw(this.ctx);\n  \n    requestAnimationFrame(this.animate.bind(this));\n  };\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const gameCanvas = document.getElementsByClassName(\"game-canvas\")[0];\n  gameCanvas.width = 1200;\n  gameCanvas.height = 700;\n\n  const ctx = gameCanvas.getContext(\"2d\");\n\n  const game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n  game.draw(ctx);\n\n  new _game_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"](game, ctx).start();\n});\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/planet.js":
/*!***********************!*\
  !*** ./src/planet.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst planet1 = new Image();\nplanet1.src = \"assets/images/planet1.png\";\n\nclass Planet {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.planet1 = planet1;\n    this.pos = [500, 50];\n  }\n\n  draw() {\n    this.ctx.drawImage(this.planet1, 500, 50, 200, 200)\n  }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Planet);\n\n\n//# sourceURL=webpack:///./src/planet.js?");

/***/ })

/******/ });