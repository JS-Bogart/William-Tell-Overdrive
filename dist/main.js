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

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");

/***/ }),

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst asteroid1 = new Image();\nasteroid1.src = \"assets/images/asteroids/asteroid1.png\";\nconst asteroid2 = new Image();\nasteroid2.src = \"assets/images/asteroids/asteroid2.png\";\nconst asteroid3 = new Image();\nasteroid3.src = \"assets/images/asteroids/asteroid3.png\";\nconst asteroid4 = new Image();\nasteroid4.src = \"assets/images/asteroids/asteroid4.png\";\nconst asteroid5 = new Image();\nasteroid5.src = \"assets/images/asteroids/asteroid5.png\";\nconst asteroid6 = new Image();\nasteroid6.src = \"assets/images/asteroids/asteroid6.png\";\nconst asteroid7 = new Image();\nasteroid7.src = \"assets/images/asteroids/asteroid7.png\";\nconst explosion = new Image();\nexplosion.src = \"assets/images/explosions/asteroid_explosion.png\";\n\nclass Asteroid {\n  constructor(ctx, type, startPos) {\n    this.ctx = ctx;\n    this.type = type;\n    this.startPos = startPos;\n    this.size = 5;\n    this.angle = 0;\n    this.hit = false;\n    this.explosion = explosion;\n    this.explosionSize = 50;\n    if (this.type === \"asteroid1\") this.asteroid = asteroid1;\n    if (this.type === \"asteroid2\") this.asteroid = asteroid2;\n    if (this.type === \"asteroid3\") this.asteroid = asteroid3;\n    if (this.type === \"asteroid4\") this.asteroid = asteroid4;\n    if (this.type === \"asteroid5\") this.asteroid = asteroid5;\n    if (this.type === \"asteroid6\") this.asteroid = asteroid6;\n    if (this.type === \"asteroid7\") this.asteroid = asteroid7;\n\n    if (this.startPos === \"pos1\") this.pos = [440, 50];\n    if (this.startPos === \"pos2\") this.pos = [540, 50];\n    if (this.startPos === \"pos3\") this.pos = [640, 50];\n    if (this.startPos === \"pos4\") this.pos = [740, 50];\n\n    this.centerPos = [\n      (this.pos[0] + (this.size / 2)),\n      (this.pos[1] + (this.size / 2))\n    ];\n  }\n\n  draw() {\n    if (this.hit) {\n      this.ctx.save();\n      this.ctx.translate(this.pos[0], this.pos[1]);\n      this.ctx.rotate(Math.PI / 180 * (this.angle += 1));\n      this.ctx.drawImage(\n        this.explosion,\n        -(this.explosionSize / 2),\n        -(this.explosionSize / 2),\n        this.explosionSize,\n        this.explosionSize\n      )\n      this.ctx.translate(-this.pos[0], -this.pos[1]);\n      this.ctx.restore();\n    } else {\n      const grd = this.ctx.createRadialGradient(\n        (this.pos[0]),\n        (this.pos[1]),\n        this.size * 0.3,\n        (this.pos[0]),\n        (this.pos[1]),\n        this.size\n      );\n      grd.addColorStop(0, \"red\");\n      grd.addColorStop(1, \"transparent\");\n  \n      this.ctx.beginPath();\n      this.ctx.arc(\n        (this.pos[0]),\n        (this.pos[1]),\n        (this.size / 2) * 1.5,\n        0,\n        2 * Math.PI\n      );\n      this.ctx.strokeStyle = \"transparent\";\n      this.ctx.stroke();\n      this.ctx.fillStyle = grd;\n      this.ctx.fill();\n  \n  \n      this.ctx.save();\n      this.ctx.translate(this.pos[0], this.pos[1]);\n      this.ctx.rotate(Math.PI / 180 * (this.angle += 3));\n      this.ctx.drawImage(\n        this.asteroid,\n        -(this.size / 2),\n        -(this.size / 2),\n        this.size,\n        this.size\n      )\n      this.ctx.translate(-this.pos[0], -this.pos[1]);\n      this.ctx.restore();\n    }\n\n  }\n\n  move() {\n    if (this.hit) {\n      this.explosionSize += 4;\n      this.pos[1] += 3;\n\n      if (this.startPos === \"pos1\") {\n        this.pos[0] -= 1.0;\n      } else if (this.startPos === \"pos2\") {\n        this.pos[0] -= 0.3;\n      } else if (this.startPos === \"pos3\") {\n        this.pos[0] += 0.3;\n      } else if (this.startPos === \"pos4\") {\n        this.pos[0] += 1.0;\n      }\n    } else {\n      this.size += 0.3;\n      this.pos[1] += 3;\n  \n      if (this.startPos === \"pos1\") {\n        this.pos[0] -= 1.0;\n      } else if (this.startPos === \"pos2\") {\n        this.pos[0] -= 0.3;\n      } else if (this.startPos === \"pos3\") {\n        this.pos[0] += 0.3;\n      } else if (this.startPos === \"pos4\") {\n        this.pos[0] += 1.0;\n      }\n  \n      this.centerPos = [\n        (this.pos[0] - (this.size / 3)),\n        (this.pos[1] - (this.size / 3))\n      ];\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Asteroid);\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/bolt.js":
/*!*********************!*\
  !*** ./src/bolt.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst bolt = new Image();\nbolt.src = \"assets/images/bolt/bolt.png\"\n\nclass Bolt {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.pos = [550, 540];\n    this.bolt = bolt;\n    this.dim_x = 100;\n    this.dim_y = 499;\n    this.speed = 5;\n    this.moveLeft = false;\n    this.moveRight = false;\n    // this.radius = 23.5;\n    this.radius = 10;\n    // this.centerPos = [573.5, 622.5]\n    this.centerPos = [573.5, 580]\n  }\n\n  draw() {\n    this.ctx.drawImage(\n      this.bolt,\n      this.pos[0],\n      this.pos[1],\n      this.dim_x,\n      this.dim_y\n    );\n  }\n\n  move() {\n    if (this.moveLeft && this.pos[0] > -35) {\n      this.pos[0] -= this.speed;\n      this.centerPos[0] -= this.speed;\n    } else if (this.moveRight && this.pos[0] < 1140) {\n      this.pos[0] += this.speed;\n      this.centerPos[0] += this.speed;\n    }\n  }\n\n  dist(pos1, pos2) {\n    return Math.sqrt(\n      Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)\n    );\n  }\n\n  isCollidedWith(otherObject) {\n    const centerDist = this.dist(this.centerPos, (otherObject.centerPos));\n    return centerDist < (this.radius + (otherObject.size/2*0.9));\n  };\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bolt);\n\n//# sourceURL=webpack:///./src/bolt.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _planet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./planet */ \"./src/planet.js\");\n/* harmony import */ var _asteroid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n/* harmony import */ var _bolt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bolt */ \"./src/bolt.js\");\n\n\n\n\nconst bgGame = new Image();\nbgGame.src = \"assets/images/backgrounds/game_bg.jpg\";\n\nclass Game {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.planets = [];\n    this.asteroids = [];\n    this.bolt = new _bolt__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ctx);\n\n    this.bg_color = \"#000000\";\n    this.dim_x = 1200;\n    this.dim_y = 700;\n\n    this.bgGame = bgGame;\n  }\n\n  // Planets\n\n  addPlanet() {\n    const planets = [\n      \"planet1\", \n      \"planet2\", \n      \"planet3\",\n      \"planet4\",\n      \"planet5\",\n      \"planet6\",\n      \"planet7\",\n      \"planet8\",\n      \"planet9\",\n      \"planet10\",\n      \"planet11\",\n      \"planet12\"\n    ];\n    const positions = [\"pos1\", \"pos2\", \"pos3\", \"pos4\", \"pos5\"];\n    const planet = planets[Math.floor(Math.random() * Math.floor(12))]\n    const pos = positions[Math.floor(Math.random() * Math.floor(5))];\n    this.planets.push(new _planet__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, planet, pos));\n    console.log(this.planets);\n  }\n\n  removePlanet() {\n    this.planets.shift();\n    console.log(this.planets);\n  }\n\n  drawPlanets() {\n    this.planets.forEach(planet => {\n      planet.draw();\n    });\n  }\n\n  generatePlanets() {\n\n    let addPlanet = this.addPlanet.bind(this);\n    let removePlanet = this.removePlanet.bind(this);\n    this.planetIntervalId = setInterval(function () {\n\n      addPlanet();\n\n      setTimeout(function () {\n        removePlanet();\n      }, 10 * 1000)\n    }, 2 * 1000);\n  };\n\n  // Asteroids\n\n  addAsteroid() {\n    const asteroids = [\n      \"asteroid1\",\n      \"asteroid2\",\n      \"asteroid3\",\n      \"asteroid4\",\n      \"asteroid5\",\n      \"asteroid6\",\n      \"asteroid7\"\n    ];\n    const positions = [\"pos1\", \"pos2\", \"pos3\", \"pos4\"];\n    const asteroid = asteroids[Math.floor(Math.random() * Math.floor(7))]\n    const pos = positions[Math.floor(Math.random() * Math.floor(4))];\n    this.asteroids.push(new _asteroid__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.ctx, asteroid, pos));\n    console.log(this.asteroids);\n  }\n\n  removeAsteroid() {\n    this.asteroids.shift();\n    console.log(this.asteroids);\n  }\n\n  drawAsteroids() {\n    this.asteroids.forEach(asteroid => {\n      asteroid.draw();\n    });\n  }\n\n  generateAsteroids() {\n\n    let addAsteroid = this.addAsteroid.bind(this);\n    let removeAsteroid = this.removeAsteroid.bind(this);\n    this.asteroidIntervalId = setInterval(function () { \n\n      addAsteroid();\n\n      setTimeout(function () {\n        removeAsteroid();\n      }, 6000)\n    }, 1 * 1000);\n  };\n\n  // Bolt\n\n  moveBolt(moveLeft, moveRight) {\n    this.bolt.moveLeft = moveLeft;\n    this.bolt.moveRight = moveRight;\n  }\n\n  // Collisions\n\n  checkPlanetCollisions() {\n    const bolt = this.bolt;\n    const planets = this.planets;\n    for (let i = 0; i < planets.length; i++) {\n      const planet = planets[i]\n\n      if (bolt.isCollidedWith(planet)) {\n        console.log(\"COLLISION!!!!\");\n        planet.hit = true;\n        clearInterval(this.planetIntervalId);\n        clearInterval(this.asteroidIntervalId);\n        this.planets = [planet];\n        this.asteroids = [];\n      }\n    }\n  }\n\n  checkAsteroidCollisions() {\n    const bolt = this.bolt;\n    const asteroids = this.asteroids;\n    for (let i = 0; i < asteroids.length; i++) {\n      const asteroid = asteroids[i]\n\n      if (bolt.isCollidedWith(asteroid)) {\n        console.log(\"COLLISION!!!!\");\n        asteroid.hit = true;\n      }\n    }\n  }\n\n  // Animation\n\n  draw(ctx) {\n    ctx.clearRect(0, 0, this.dim_x, this.dim_y);\n    ctx.fillStyle = this.bg_color;\n    ctx.fillRect(0, 0, this.dim_x, this.dim_y);\n    ctx.drawImage(this.bgGame, 0, 0, this.dim_x, this.dim_y);\n\n    this.drawPlanets();\n    this.drawAsteroids();\n    this.bolt.draw();\n  };\n\n  step() {\n    this.bolt.move();\n\n    this.asteroids.forEach(asteroid => {\n      if (asteroid) {\n        asteroid.move();\n      }\n    });\n\n    this.planets.forEach(planet => {\n      if (planet) {\n        planet.move();\n      }\n    });\n\n    this.checkPlanetCollisions();\n    this.checkAsteroidCollisions();\n\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass GameView {\n  constructor(game, ctx) {\n    this.ctx = ctx;\n    this.game = game;\n  }\n\n  start() {\n    this.game.generatePlanets(this.ctx);\n    this.game.generateAsteroids(this.ctx);\n    requestAnimationFrame(this.animate.bind(this));\n  };\n  \n  animate() {\n    this.game.step();\n    this.game.draw(this.ctx);\n  \n    requestAnimationFrame(this.animate.bind(this));\n  };\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const gameCanvas = document.getElementsByClassName(\"game-canvas\")[0];\n  gameCanvas.width = 1200;\n  gameCanvas.height = 700;\n\n  const ctx = gameCanvas.getContext(\"2d\");\n\n  const game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n  new _game_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"](game, ctx).start();\n\n  let moveLeft = false;\n  let moveRight = false;\n\n  // Keypress events\n\n  document.addEventListener(\"keydown\", event => {\n    if (event.code === \"ArrowLeft\") {\n      moveLeft = true;\n      game.moveBolt(moveLeft, moveRight);\n    } else if (event.code === \"ArrowRight\") {\n      moveRight = true;\n      game.moveBolt(moveLeft, moveRight);\n    }\n  });\n\n  document.addEventListener(\"keyup\", event => {\n    if (event.code === \"ArrowLeft\") {\n      moveLeft = false;\n      game.moveBolt(moveLeft, moveRight);\n    } else if (event.code === \"ArrowRight\") {\n      moveRight = false;\n      game.moveBolt(moveLeft, moveRight);\n    }\n  });\n\n});\n\nconst PORT = process.env.PORT || 3000;\napp.listen(PORT, () => {\n  console.log(`Our app is running on port ${PORT}`);\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/planet.js":
/*!***********************!*\
  !*** ./src/planet.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst planet1 = new Image();\nplanet1.src = \"assets/images/planets/planet1.png\";\nconst planet2 = new Image();\nplanet2.src = \"assets/images/planets/planet2.png\";\nconst planet3 = new Image();\nplanet3.src = \"assets/images/planets/planet3.png\";\nconst planet4 = new Image();\nplanet4.src = \"assets/images/planets/planet4.png\";\nconst planet5 = new Image();\nplanet5.src = \"assets/images/planets/planet5.png\";\nconst planet6 = new Image();\nplanet6.src = \"assets/images/planets/planet6.png\";\nconst planet7 = new Image();\nplanet7.src = \"assets/images/planets/planet7.png\";\nconst planet8 = new Image();\nplanet8.src = \"assets/images/planets/planet8.png\";\nconst planet9 = new Image();\nplanet9.src = \"assets/images/planets/planet9.png\";\nconst planet10 = new Image();\nplanet10.src = \"assets/images/planets/planet10.png\";\nconst planet11 = new Image();\nplanet11.src = \"assets/images/planets/planet11.png\";\nconst planet12 = new Image();\nplanet12.src = \"assets/images/planets/planet12.png\";\nconst explosion = new Image();\nexplosion.src = \"assets/images/explosions/planet_explosion.png\";\n\nclass Planet {\n  constructor(ctx, type, startPos) {\n    this.ctx = ctx;\n    this.type = type;\n    this.startPos = startPos;\n    this.size = 5;\n    this.hit = false;\n    this.explosion = explosion;\n    this.explosionSize = 100;\n    if (this.type === \"planet1\") this.planet = planet1;\n    if (this.type === \"planet2\") this.planet = planet2;\n    if (this.type === \"planet3\") this.planet = planet3;\n    if (this.type === \"planet4\") this.planet = planet4;\n    if (this.type === \"planet5\") this.planet = planet5;\n    if (this.type === \"planet6\") this.planet = planet6;\n    if (this.type === \"planet7\") this.planet = planet7;\n    if (this.type === \"planet8\") this.planet = planet8;\n    if (this.type === \"planet9\") this.planet = planet9;\n    if (this.type === \"planet10\") this.planet = planet10;\n    if (this.type === \"planet11\") this.planet = planet11;\n    if (this.type === \"planet12\") this.planet = planet12;\n\n    if (this.startPos === \"pos1\") this.pos = [390, 50];\n    if (this.startPos === \"pos2\") this.pos = [490, 50];\n    if (this.startPos === \"pos3\") this.pos = [590, 50];\n    if (this.startPos === \"pos4\") this.pos = [690, 50];\n    if (this.startPos === \"pos5\") this.pos = [790, 50];\n\n    this.centerPos = [\n      (this.pos[0] + (this.size / 2)), \n      (this.pos[1] + (this.size / 2))\n    ];\n  }\n\n  draw() {\n    if (this.hit) {\n      this.ctx.drawImage(\n        this.explosion,\n        this.pos[0] + 10,\n        this.pos[1] + 30,\n        this.explosionSize,\n        this.explosionSize\n      );\n    } else {\n      const grd = this.ctx.createRadialGradient(\n        (this.pos[0] + (this.size / 2)), \n        (this.pos[1] + (this.size / 2)), \n        this.size * 0.5, \n        (this.pos[0] + (this.size / 2)), \n        (this.pos[1] + (this.size / 2)), \n        this.size\n      );\n      grd.addColorStop(0, \"blue\");\n      grd.addColorStop(1, \"transparent\");\n  \n      this.ctx.beginPath();\n      this.ctx.arc(\n        (this.pos[0] + (this.size / 2)),\n        (this.pos[1] + (this.size / 2)),\n        (this.size / 2) * 1.7,\n        0,\n        2 * Math.PI\n      );\n      this.ctx.strokeStyle = \"transparent\";\n      this.ctx.stroke();\n      this.ctx.fillStyle = grd;\n      this.ctx.fill();\n  \n  \n      this.ctx.drawImage(\n        this.planet, \n        this.pos[0], \n        this.pos[1], \n        this.size, \n        this.size\n      );\n    }\n  }\n\n  move() {\n    if (this.hit) {\n      this.explosionSize += 10;\n      this.pos[0] -= 5;\n      this.pos[1] -= 5;\n    } else {\n      this.size += 0.9;\n      this.pos[1] += 3;\n  \n      if (this.startPos === \"pos1\") {\n        this.pos[0] -= 2.0;\n      } else if (this.startPos === \"pos2\") {\n        this.pos[0] -= 1.2;\n      } else if (this.startPos === \"pos3\") {\n        this.pos[0] -= 0.45;\n      } else if (this.startPos === \"pos4\") {\n        this.pos[0] += 0.3;\n      } else if (this.startPos === \"pos5\") {\n        this.pos[0] += 1.2;\n      }\n  \n      this.centerPos = [\n        (this.pos[0] + (this.size / 3)),\n        (this.pos[1] + (this.size / 3))\n      ];\n    }\n  }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Planet);\n\n\n//# sourceURL=webpack:///./src/planet.js?");

/***/ })

/******/ });