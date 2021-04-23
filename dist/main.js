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

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst asteroid1 = new Image();\nasteroid1.src = \"assets/images/asteroids/asteroid1.png\";\nconst asteroid2 = new Image();\nasteroid2.src = \"assets/images/asteroids/asteroid2.png\";\nconst asteroid3 = new Image();\nasteroid3.src = \"assets/images/asteroids/asteroid3.png\";\nconst asteroid4 = new Image();\nasteroid4.src = \"assets/images/asteroids/asteroid4.png\";\nconst asteroid5 = new Image();\nasteroid5.src = \"assets/images/asteroids/asteroid5.png\";\nconst asteroid6 = new Image();\nasteroid6.src = \"assets/images/asteroids/asteroid6.png\";\nconst asteroid7 = new Image();\nasteroid7.src = \"assets/images/asteroids/asteroid7.png\";\nconst explosion = new Image();\nexplosion.src = \"assets/images/explosions/asteroid_explosion.png\";\n\nclass Asteroid {\n  constructor(ctx, type, startPos) {\n    this.ctx = ctx;\n    this.type = type;\n    this.startPos = startPos;\n    this.size = 5;\n    this.angle = 0;\n    this.hit = false;\n    this.explosion = explosion;\n    this.explosionSize = 50;\n    if (this.type === \"asteroid1\") this.asteroid = asteroid1;\n    if (this.type === \"asteroid2\") this.asteroid = asteroid2;\n    if (this.type === \"asteroid3\") this.asteroid = asteroid3;\n    if (this.type === \"asteroid4\") this.asteroid = asteroid4;\n    if (this.type === \"asteroid5\") this.asteroid = asteroid5;\n    if (this.type === \"asteroid6\") this.asteroid = asteroid6;\n    if (this.type === \"asteroid7\") this.asteroid = asteroid7;\n\n    if (this.startPos === \"pos1\") this.pos = [440, 50];\n    if (this.startPos === \"pos2\") this.pos = [540, 50];\n    if (this.startPos === \"pos3\") this.pos = [640, 50];\n    if (this.startPos === \"pos4\") this.pos = [740, 50];\n\n    this.centerPos = [\n      (this.pos[0] + (this.size / 2)),\n      (this.pos[1] + (this.size / 2))\n    ];\n  }\n\n  draw() {\n    if (this.hit) {\n      this.ctx.save();\n      this.ctx.translate(this.pos[0], this.pos[1]);\n      this.ctx.rotate(Math.PI / 180 * (this.angle += 1));\n      this.ctx.drawImage(\n        this.explosion,\n        -(this.explosionSize / 2),\n        -(this.explosionSize / 2),\n        this.explosionSize,\n        this.explosionSize\n      )\n      this.ctx.translate(-this.pos[0], -this.pos[1]);\n      this.ctx.restore();\n    } else {\n      const grd = this.ctx.createRadialGradient(\n        (this.pos[0]),\n        (this.pos[1]),\n        this.size * 0.3,\n        (this.pos[0]),\n        (this.pos[1]),\n        this.size\n      );\n      grd.addColorStop(0, \"red\");\n      grd.addColorStop(1, \"transparent\");\n  \n      this.ctx.beginPath();\n      this.ctx.arc(\n        (this.pos[0]),\n        (this.pos[1]),\n        (this.size / 2) * 1.5,\n        0,\n        2 * Math.PI\n      );\n      this.ctx.strokeStyle = \"transparent\";\n      this.ctx.stroke();\n      this.ctx.fillStyle = grd;\n      this.ctx.fill();\n  \n  \n      this.ctx.save();\n      this.ctx.translate(this.pos[0], this.pos[1]);\n      this.ctx.rotate(Math.PI / 180 * (this.angle += 3));\n      this.ctx.drawImage(\n        this.asteroid,\n        -(this.size / 2),\n        -(this.size / 2),\n        this.size,\n        this.size\n      )\n      this.ctx.translate(-this.pos[0], -this.pos[1]);\n      this.ctx.restore();\n    }\n\n  }\n\n  move() {\n    if (this.hit) {\n      this.explosionSize += 6;\n      this.pos[1] += 7;\n\n      if (this.startPos === \"pos1\") {\n        this.pos[0] -= 1.0;\n      } else if (this.startPos === \"pos2\") {\n        this.pos[0] -= 0.3;\n      } else if (this.startPos === \"pos3\") {\n        this.pos[0] += 0.3;\n      } else if (this.startPos === \"pos4\") {\n        this.pos[0] += 1.0;\n      }\n    } else {\n      this.size += 0.7;\n      this.pos[1] += 7;\n  \n      if (this.startPos === \"pos1\") {\n        this.pos[0] -= 2.4;\n      } else if (this.startPos === \"pos2\") {\n        this.pos[0] -= 0.6;\n      } else if (this.startPos === \"pos3\") {\n        this.pos[0] += 0.8;\n      } else if (this.startPos === \"pos4\") {\n        this.pos[0] += 2.4;\n      }\n  \n      this.centerPos = [\n        (this.pos[0] - (this.size / 3)),\n        (this.pos[1] - (this.size / 3))\n      ];\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Asteroid);\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/bolt.js":
/*!*********************!*\
  !*** ./src/bolt.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst bolt = new Image();\nbolt.src = \"assets/images/bolt/bolt.png\";\nconst crossbow = new Image();\ncrossbow.src = \"assets/images/crossbow/cosmic_crossbow.png\";\n\nclass Bolt {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.pos = [550, 540];\n    this.bolt = bolt;\n    this.dim_x = 100;\n    this.dim_y = 499;\n    this.speed = 5;\n    this.moveLeft = false;\n    this.moveRight = false;\n    this.radius = 5;\n    this.centerPos = [573.5, 580];\n    this.crossbow = crossbow;\n    this.crossbowStatus = \"loaded\";\n    this.cbPos = [350, 550];\n    this.cbDims = [500, 500];\n    this.hit = false;\n  }\n\n  draw() {\n    if (this.crossbowStatus !== \"fired\") {\n      this.ctx.drawImage(\n        this.crossbow,\n        this.cbPos[0],\n        this.cbPos[1],\n        this.cbDims[0],\n        this.cbDims[1]\n      );\n    }\n    if (!this.hit) {\n      this.ctx.drawImage(\n        this.bolt,\n        this.pos[0],\n        this.pos[1],\n        this.dim_x,\n        this.dim_y\n      );\n    }\n  }\n\n  move() {\n    if (this.moveLeft && this.pos[0] > -35) {\n      this.pos[0] -= this.speed;\n      this.centerPos[0] -= this.speed;\n      this.cbPos[0] -= this.speed;\n    } else if (this.moveRight && this.pos[0] < 1140) {\n      this.pos[0] += this.speed;\n      this.centerPos[0] += this.speed;\n      this.cbPos[0] += this.speed;\n    }\n    if (this.crossbowStatus === \"shooting\") {\n      this.cbPos[1] += 5;\n    }\n  }\n\n  dist(pos1, pos2) {\n    return Math.sqrt(\n      Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)\n    );\n  }\n\n  isCollidedWith(otherObject) {\n    const centerDist = this.dist(this.centerPos, (otherObject.centerPos));\n    return centerDist < (this.radius + (otherObject.size/2*0.8));\n  };\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bolt);\n\n//# sourceURL=webpack:///./src/bolt.js?");

/***/ }),

/***/ "./src/earth.js":
/*!**********************!*\
  !*** ./src/earth.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst earth = new Image();\nearth.src = \"assets/images/earth/earth.png\";\nconst explosion = new Image();\nexplosion.src = \"assets/images/explosions/planet_explosion.png\";\n\nclass Earth {\n  constructor(ctx){\n    this.ctx = ctx;\n    this.pos = [490, 50];\n    this.size = 5;\n    this.hit = false;\n    this.explosion = explosion;\n    this.explosionSize = 100;\n    this.earth = earth;\n  }\n\n  draw() {\n    if (this.hit) {\n      this.ctx.drawImage(\n        this.explosion,\n        this.pos[0] + 50,\n        this.pos[1] + 30,\n        this.explosionSize,\n        this.explosionSize\n      );\n    } else {\n      this.ctx.drawImage(\n        this.earth,\n        this.pos[0],\n        this.pos[1],\n        this.size,\n        this.size\n      );\n    }\n  }\n\n  move() {\n    if (this.hit) {\n      this.explosionSize += 10;\n      this.pos[0] -= 5;\n      this.pos[1] -= 5;\n    } else {\n      this.size += 1.0;\n      this.pos[1] += 2;\n      this.pos[0] -= 1.2;\n\n      this.centerPos = [\n        (this.pos[0] + (this.size / 3)),\n        (this.pos[1] + (this.size / 3))\n      ];\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Earth);\n\n//# sourceURL=webpack:///./src/earth.js?");

/***/ }),

/***/ "./src/energy.js":
/*!***********************!*\
  !*** ./src/energy.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Energy {\n  constructor(eBar){\n    this.eBar = eBar;\n    this.energyTop = 25;\n    this.energyLevel = 650;\n  }\n\n  // Green\n  // draw() {\n  //   this.eBar.beginPath();\n  //   this.eBar.rect(25, this.energyTop, 25, this.energyLevel);\n  //   this.eBar.fillStyle = '#A0FEC4';\n  //   this.eBar.strokeStyle = '#68F96D';\n  //   this.eBar.lineWidth = 2;\n  //   this.eBar.shadowColor = '#40F23B';\n  //   this.eBar.shadowBlur = 50;\n  //   this.eBar.shadowOffsetX = 0;\n  //   this.eBar.shadowOffsetY = 0;\n  //   this.eBar.stroke();\n  //   this.eBar.fill();\n  // }\n\n  // Orange\n  draw() {\n    this.eBar.beginPath();\n    this.eBar.rect(25, this.energyTop, 25, this.energyLevel);\n    this.eBar.fillStyle = '#FBFED1';\n    this.eBar.strokeStyle = '#FCD390';\n    this.eBar.lineWidth = 2;\n    this.eBar.shadowColor = '#F08240';\n    this.eBar.shadowBlur = 50;\n    this.eBar.shadowOffsetX = 0;\n    this.eBar.shadowOffsetY = 0;\n    this.eBar.stroke();\n    this.eBar.fill();\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Energy);\n\n//# sourceURL=webpack:///./src/energy.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _planet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./planet.js */ \"./src/planet.js\");\n/* harmony import */ var _asteroid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\n/* harmony import */ var _star__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./star */ \"./src/star.js\");\n/* harmony import */ var _bolt_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bolt.js */ \"./src/bolt.js\");\n/* harmony import */ var _earth_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./earth.js */ \"./src/earth.js\");\n/* harmony import */ var _murder_moon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./murder_moon */ \"./src/murder_moon.js\");\n/* harmony import */ var _energy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./energy */ \"./src/energy.js\");\n\n\n\n\n\n\n\n\nconst bgGame = new Image();\nbgGame.src = \"assets/images/backgrounds/game_bg.jpg\";\nconst win = new Image();\nwin.src = \"assets/images/text/win.png\"\nconst lose = new Image();\nlose.src = \"assets/images/text/lose.png\"\n\nclass Game {\n  constructor(ctx, eBar) {\n    this.ctx = ctx;\n    this.eBar = eBar;\n    this.stars = [];\n    this.planets = [];\n    this.asteroids = [];\n    this.earth = new _earth_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](ctx);\n    this.murderMoon = new _murder_moon__WEBPACK_IMPORTED_MODULE_5__[\"default\"](ctx);\n    this.bolt = new _bolt_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](ctx);\n    this.energy = new _energy__WEBPACK_IMPORTED_MODULE_6__[\"default\"](eBar);\n    this.bg_color = \"#000000\";\n    this.dim_x = 1200;\n    this.dim_y = 700;\n    this.bgGame = bgGame;\n    this.gameStatus = \"playing\";\n    this.win = win;\n    this.lose = lose;\n    this.bar_x = 75;\n    this.bar_y = 700;\n  }\n\n  // Stars\n\n  addStar() {\n    const positions = [\"pos1\", \"pos2\"]\n    const pos = positions[Math.floor(Math.random() * Math.floor(2))];\n    this.stars.push(new _star__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.ctx, pos));\n  }\n\n  removeStar() {\n    this.stars.shift();\n  }\n\n  drawStars() {\n    this.stars.forEach(star => {\n      star.draw();\n    });\n  }\n\n  generateStars() {\n\n    const addStar = this.addStar.bind(this);\n    const removeStar = this.removeStar.bind(this);\n    this.starIntervalId = setInterval(function () {\n\n      addStar();\n\n      setTimeout(function () {\n        removeStar();\n      }, 15 * 1000)\n    }, 2000);\n  };\n\n  // Planets\n\n  addPlanet() {\n    const planets = [\n      \"planet1\", \n      \"planet2\", \n      \"planet3\",\n      \"planet4\",\n      \"planet5\",\n      \"planet6\",\n      \"planet7\",\n      \"planet8\",\n      \"planet9\",\n      \"planet10\",\n      \"planet11\",\n      \"planet12\"\n    ];\n    const positions = [\"pos1\", \"pos2\", \"pos3\"];\n    const planet = planets[Math.floor(Math.random() * Math.floor(12))]\n    const pos = positions[Math.floor(Math.random() * Math.floor(3))];\n    this.planets.push(new _planet_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, planet, pos));\n  }\n\n  removePlanet() {\n    this.planets.shift();\n  }\n\n  drawPlanets() {\n    this.planets.forEach(planet => {\n      planet.draw();\n    });\n  }\n\n  generatePlanets() {\n\n    const addPlanet = this.addPlanet.bind(this);\n    const removePlanet = this.removePlanet.bind(this);\n    this.planetIntervalId = setInterval(function () {\n\n      addPlanet();\n\n      setTimeout(function () {\n        removePlanet();\n      }, 15 * 1000)\n    }, 800);\n  };\n\n  // Asteroids\n\n  addAsteroid() {\n    const asteroids = [\n      \"asteroid1\",\n      \"asteroid2\",\n      \"asteroid3\",\n      \"asteroid4\",\n      \"asteroid5\",\n      \"asteroid6\",\n      \"asteroid7\"\n    ];\n    const positions = [\"pos1\", \"pos2\", \"pos3\", \"pos4\"];\n    const asteroid = asteroids[Math.floor(Math.random() * Math.floor(7))]\n    const pos = positions[Math.floor(Math.random() * Math.floor(4))];\n    this.asteroids.push(new _asteroid_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.ctx, asteroid, pos));\n  }\n\n  removeAsteroid() {\n    this.asteroids.shift();\n  }\n\n  drawAsteroids() {\n    this.asteroids.forEach(asteroid => {\n      asteroid.draw();\n    });\n  }\n\n  generateAsteroids() {\n\n    const addAsteroid = this.addAsteroid.bind(this);\n    const removeAsteroid = this.removeAsteroid.bind(this);\n    this.asteroidIntervalId = setInterval(function () { \n\n      addAsteroid();\n\n      setTimeout(function () {\n        removeAsteroid();\n      }, 6000)\n    }, 250);\n  };\n\n  // Bolt\n\n  moveBolt(moveLeft, moveRight) {\n    this.bolt.moveLeft = moveLeft;\n    this.bolt.moveRight = moveRight;\n  }\n\n  loseConditionOne() {\n    this.gameStatus = \"loseOne\";\n  }\n\n  loseConditionTwo() {\n    this.gameStatus = \"loseTwo\";\n  }\n\n  winCondition() {\n    this.gameStatus = \"victory\";\n  }\n\n  // Collisions\n\n  checkStarCollisions() {\n    const bolt = this.bolt;\n    const stars = this.stars;\n    const loseConditionOne = this.loseConditionOne.bind(this);\n\n    for (let i = 0; i < stars.length; i++) {\n      const star = stars[i]\n\n      if (bolt.isCollidedWith(star)) {\n        star.hit = true;\n        bolt.hit = true;\n        clearInterval(this.starIntervalId);\n        clearInterval(this.planetIntervalId);\n        clearInterval(this.asteroidIntervalId);\n        this.stars = [star];\n        this.planets = [];\n        this.asteroids = [];\n        setTimeout(function () {\n          loseConditionOne();\n        }, 3000)\n      }\n    }\n  }\n\n  checkPlanetCollisions() {\n    const bolt = this.bolt;\n    const planets = this.planets;\n    const loseConditionOne = this.loseConditionOne.bind(this);\n\n    for (let i = 0; i < planets.length; i++) {\n      const planet = planets[i]\n\n      if (bolt.isCollidedWith(planet)) {\n        planet.hit = true;\n        bolt.hit = true;\n        clearInterval(this.starIntervalId);\n        clearInterval(this.planetIntervalId);\n        clearInterval(this.asteroidIntervalId);\n        this.planets = [planet];\n        this.stars = [];\n        this.asteroids = [];\n        setTimeout(function () {\n          loseConditionOne();\n        }, 3000)\n      }\n    }\n  }\n\n  checkAsteroidCollisions() {\n    const bolt = this.bolt;\n    const asteroids = this.asteroids;\n    const energy = this.energy;\n\n    for (let i = 0; i < asteroids.length; i++) {\n      const asteroid = asteroids[i]\n\n      if (bolt.isCollidedWith(asteroid)) {\n        asteroid.hit = true;\n        if (energy.energyTop < 675) energy.energyTop += 5;\n        if (energy.energyLevel > 0) energy.energyLevel -= 5;\n      }\n    }\n  }\n\n  checkEarthCollision() {\n    const bolt = this.bolt;\n    const earth = this.earth;\n    const loseConditionTwo = this.loseConditionTwo.bind(this);\n\n    if (bolt.isCollidedWith(earth)) {\n      earth.hit = true;\n      bolt.hit = true;\n      setTimeout(function () {\n        loseConditionTwo();\n      }, 3000)\n    }\n  }\n\n  checkMurderMoonCollision() {\n    const bolt = this.bolt;\n    const energy = this.energy;\n    const murderMoon = this.murderMoon;\n    const winCondition = this.winCondition.bind(this);\n    const loseConditionOne = this.loseConditionOne.bind(this);\n\n    if (bolt.isCollidedWith(murderMoon)) {\n      bolt.hit = true;\n      if (energy.energyLevel > 0) {\n        murderMoon.hit = true;\n        setTimeout(function () {\n          winCondition();\n        }, 3000)\n      } else {\n        setTimeout(function () {\n          loseConditionOne();\n        }, 3000)\n      }\n    }\n  }\n\n  checkEnergyLevel() {\n    const energy = this.energy;\n    const loseConditionOne = this.loseConditionOne.bind(this);\n\n    if (energy.energyLevel < 1) {\n      this.stopObjects();\n      setTimeout(function () {\n        loseConditionOne();\n      }, 3000)\n    }\n  }\n\n  // Animation\n\n  stopObjects() {\n    clearInterval(this.starIntervalId);\n    clearInterval(this.planetIntervalId);\n    clearInterval(this.asteroidIntervalId);\n  }\n\n  draw(ctx, eBar) {\n    ctx.clearRect(0, 0, this.dim_x, this.dim_y);\n    ctx.fillStyle = this.bg_color;\n    ctx.fillRect(0, 0, this.dim_x, this.dim_y);\n    ctx.drawImage(this.bgGame, 0, 0, this.dim_x, this.dim_y);\n    eBar.clearRect(0, 0, this.bar_x, this.bar_y);\n    eBar.fillStyle = this.bg_color;\n    eBar.fillRect(0, 0, this.bar_x, this.bar_y)\n    this.energy.draw();\n    this.drawStars();\n    this.drawPlanets();\n    this.drawAsteroids();\n\n    if (this.gameStatus === \"playing\") {\n      this.bolt.draw();\n    } else if (this.gameStatus === \"ending\") {\n      this.earth.draw();\n      this.murderMoon.draw();\n      this.bolt.draw();\n    } else if (this.gameStatus === \"loseOne\") {\n      ctx.drawImage(\n        this.lose,\n        252,\n        295.5\n      )\n    } else if (this.gameStatus === \"loseTwo\") {\n      ctx.drawImage(\n        this.lose,\n        252,\n        295.5\n      )\n    } else if (this.gameStatus === \"victory\") {\n      ctx.drawImage(\n        this.win,\n        253.5,\n        321\n      )\n    }\n  };\n\n  step() {\n    this.bolt.move();\n\n    this.asteroids.forEach(asteroid => {\n      if (asteroid) {\n        asteroid.move();\n      }\n    });\n\n    this.planets.forEach(planet => {\n      if (planet) {\n        planet.move();\n      }\n    });\n\n    this.stars.forEach(star => {\n      if (star) {\n        star.move();\n      }\n    });\n\n    this.checkEnergyLevel();\n    this.checkStarCollisions();\n    this.checkPlanetCollisions();\n    this.checkAsteroidCollisions();\n    if (this.gameStatus === \"ending\") {\n      this.bolt.move();\n      this.murderMoon.move();\n      this.earth.move();\n\n      this.checkEarthCollision();\n      this.checkMurderMoonCollision();\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass GameView {\n  constructor(game, ctx, eBar) {\n    this.ctx = ctx;\n    this.game = game;\n    this.eBar = eBar;\n  }\n\n  generateObjects() {\n    this.game.generateStars(this.ctx);\n    this.game.generatePlanets(this.ctx);\n    this.game.generateAsteroids(this.ctx);\n  }\n\n  fireCrossbow() {\n    this.game.bolt.crossbowStatus = \"shooting\";\n  }\n\n  removeCrossbow() {\n    this.game.bolt.crossbowStatus = \"fired\";\n  }\n\n  finalPhase() {\n    this.game.stopObjects();\n    this.game.gameStatus = \"ending\";\n  }\n\n  checkMiss() {\n    if (this.game.gameStatus === \"ending\") {\n      this.game.gameStatus = \"loseOne\";\n    }\n  }\n\n  start() {\n    const generateObjects = this.generateObjects.bind(this);\n    const finalPhase = this.finalPhase.bind(this);\n    const fireCrossbow = this.fireCrossbow.bind(this);\n    const removeCrossbow = this.removeCrossbow.bind(this);\n    const checkMiss = this.checkMiss.bind(this);\n    setTimeout(function () {\n      generateObjects();\n      fireCrossbow();\n    }, 14 * 1000);\n    setTimeout(function () {\n      removeCrossbow();\n    }, 16 * 1000);\n    setTimeout(function () {\n      finalPhase();\n    }, 93 * 1000);\n    setTimeout(function () {\n      checkMiss();\n    }, 100 * 1000);\n    requestAnimationFrame(this.animate.bind(this));\n  };\n  \n  animate() {\n    this.game.step();\n    this.game.draw(this.ctx, this.eBar);\n  \n    requestAnimationFrame(this.animate.bind(this));\n  };\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n/* harmony import */ var _game_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  \n  const gameCanvas = document.getElementsByClassName(\"game-canvas\")[0];\n  gameCanvas.width = 1200;\n  gameCanvas.height = 700;\n  const ctx = gameCanvas.getContext(\"2d\");\n  const energyBar = document.getElementsByClassName(\"energy-bar\")[0];\n  energyBar.width = 75;\n  energyBar.height = 700;\n  const eBar = energyBar.getContext(\"2d\");\n  const wto = new Audio(\"assets/music/wto.mp3\")\n\n  const directions = document.getElementById(\"directions-modal\");\n  const directionsBtn = document.getElementById(\"directions-btn\");\n  const close = document.getElementById(\"close-modal\");\n  const mute = document.getElementById(\"mute-symbol\");\n\n\n  directionsBtn.addEventListener(\"click\", () => {\n    directions.style.display = \"block\";\n  });\n\n  close.addEventListener(\"click\", () => {\n    directions.style.display = \"none\";\n  });\n\n  document.getElementById(\"audio-btn\").addEventListener(\"click\", () => {\n    if (wto.muted) {\n      wto.muted = false;\n      mute.innerHTML = \"&#x1f50a;\"\n    } else {\n      wto.muted = true;\n      mute.innerHTML = \"&#x1f507;\"\n    }\n  });\n  \n  document.getElementById(\"play-btn\").addEventListener(\"click\", () => {\n    \n    const game = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, eBar);\n    new _game_view_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](game, ctx, eBar).start();\n\n    wto.currentTime = 0;\n    wto.play();\n\n    let moveLeft = false;\n    let moveRight = false;\n\n    document.addEventListener(\"keydown\", event => {\n      if (event.code === \"ArrowLeft\") {\n        moveLeft = true;\n        game.moveBolt(moveLeft, moveRight);\n      } else if (event.code === \"ArrowRight\") {\n        moveRight = true;\n        game.moveBolt(moveLeft, moveRight);\n      }\n    });\n  \n    document.addEventListener(\"keyup\", event => {\n      if (event.code === \"ArrowLeft\") {\n        moveLeft = false;\n        game.moveBolt(moveLeft, moveRight);\n      } else if (event.code === \"ArrowRight\") {\n        moveRight = false;\n        game.moveBolt(moveLeft, moveRight);\n      }\n    });\n  });\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/murder_moon.js":
/*!****************************!*\
  !*** ./src/murder_moon.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst murderMoon = new Image();\nmurderMoon.src = \"assets/images/murder_moon/murder_moon.png\";\nconst explosion = new Image();\nexplosion.src = \"assets/images/explosions/mm_explosion.png\";\n\nclass MurderMoon {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.pos = [690, 50];\n    this.size = 5;\n    this.hit = false;\n    this.explosion = explosion;\n    this.explosionSize = 100;\n    this.murderMoon = murderMoon;\n  }\n\n  draw() {\n    if (this.hit) {\n      this.ctx.drawImage(\n        this.explosion,\n        this.pos[0] + 50,\n        this.pos[1] + 30,\n        this.explosionSize,\n        this.explosionSize\n      );\n    } else {\n      this.ctx.drawImage(\n        this.murderMoon,\n        this.pos[0],\n        this.pos[1],\n        this.size,\n        this.size\n      );\n    }\n  }\n\n  move() {\n    if (this.hit) {\n      this.explosionSize += 10;\n      this.pos[0] -= 5;\n      this.pos[1] -= 5;\n    } else {\n      this.size += 1.0;\n      this.pos[1] += 2;\n      this.pos[0] += 0.3;\n\n      this.centerPos = [\n        (this.pos[0] + (this.size / 3)),\n        (this.pos[1] + (this.size / 3))\n      ];\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MurderMoon);\n\n//# sourceURL=webpack:///./src/murder_moon.js?");

/***/ }),

/***/ "./src/planet.js":
/*!***********************!*\
  !*** ./src/planet.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst planet1 = new Image();\nplanet1.src = \"assets/images/planets/planet1.png\";\nconst planet2 = new Image();\nplanet2.src = \"assets/images/planets/planet2.png\";\nconst planet3 = new Image();\nplanet3.src = \"assets/images/planets/planet3.png\";\nconst planet4 = new Image();\nplanet4.src = \"assets/images/planets/planet4.png\";\nconst planet5 = new Image();\nplanet5.src = \"assets/images/planets/planet5.png\";\nconst planet6 = new Image();\nplanet6.src = \"assets/images/planets/planet6.png\";\nconst planet7 = new Image();\nplanet7.src = \"assets/images/planets/planet7.png\";\nconst planet8 = new Image();\nplanet8.src = \"assets/images/planets/planet8.png\";\nconst planet9 = new Image();\nplanet9.src = \"assets/images/planets/planet9.png\";\nconst planet10 = new Image();\nplanet10.src = \"assets/images/planets/planet10.png\";\nconst planet11 = new Image();\nplanet11.src = \"assets/images/planets/planet11.png\";\nconst planet12 = new Image();\nplanet12.src = \"assets/images/planets/planet12.png\";\nconst explosion = new Image();\nexplosion.src = \"assets/images/explosions/planet_explosion.png\";\n\nclass Planet {\n  constructor(ctx, type, startPos) {\n    this.ctx = ctx;\n    this.type = type;\n    this.startPos = startPos;\n    this.size = 5;\n    this.hit = false;\n    this.explosion = explosion;\n    this.explosionSize = 100;\n    if (this.type === \"planet1\") this.planet = planet1;\n    if (this.type === \"planet2\") this.planet = planet2;\n    if (this.type === \"planet3\") this.planet = planet3;\n    if (this.type === \"planet4\") this.planet = planet4;\n    if (this.type === \"planet5\") this.planet = planet5;\n    if (this.type === \"planet6\") this.planet = planet6;\n    if (this.type === \"planet7\") this.planet = planet7;\n    if (this.type === \"planet8\") this.planet = planet8;\n    if (this.type === \"planet9\") this.planet = planet9;\n    if (this.type === \"planet10\") this.planet = planet10;\n    if (this.type === \"planet11\") this.planet = planet11;\n    if (this.type === \"planet12\") this.planet = planet12;\n\n    if (this.startPos === \"pos1\") this.pos = [490, 50];\n    if (this.startPos === \"pos2\") this.pos = [590, 50];\n    if (this.startPos === \"pos3\") this.pos = [690, 50];\n\n    this.centerPos = [\n      (this.pos[0] + (this.size / 2)), \n      (this.pos[1] + (this.size / 2))\n    ];\n  }\n\n  draw() {\n    if (this.hit) {\n      this.ctx.drawImage(\n        this.explosion,\n        this.pos[0] + 10,\n        this.pos[1] + 30,\n        this.explosionSize,\n        this.explosionSize\n      );\n    } else {\n      const grd = this.ctx.createRadialGradient(\n        (this.pos[0] + (this.size / 2)), \n        (this.pos[1] + (this.size / 2)), \n        this.size * 0.3, \n        (this.pos[0] + (this.size / 2)), \n        (this.pos[1] + (this.size / 2)), \n        this.size * 1.0\n      );\n      grd.addColorStop(0, \"blue\");\n      grd.addColorStop(1, \"transparent\");\n  \n      this.ctx.beginPath();\n      this.ctx.arc(\n        (this.pos[0] + (this.size / 2)),\n        (this.pos[1] + (this.size / 2)),\n        (this.size / 2) * 1.3,\n        0,\n        2 * Math.PI\n      );\n      this.ctx.strokeStyle = \"transparent\";\n      this.ctx.stroke();\n      this.ctx.fillStyle = grd;\n      this.ctx.fill();\n  \n  \n      this.ctx.drawImage(\n        this.planet, \n        this.pos[0], \n        this.pos[1], \n        this.size, \n        this.size\n      );\n    }\n  }\n\n  move() {\n    if (this.hit) {\n      this.explosionSize += 10;\n      this.pos[0] -= 5;\n      this.pos[1] -= 5;\n    } else {\n      this.size += 1.2;\n      this.pos[1] += 4.5;\n  \n      if (this.startPos === \"pos1\") {\n        this.pos[0] -= 1.7;\n      } else if (this.startPos === \"pos2\") {\n        this.pos[0] -= 0.55;\n      } else if (this.startPos === \"pos3\") {\n        this.pos[0] += 0.4;\n      }\n  \n      this.centerPos = [\n        (this.pos[0] + (this.size / 3)),\n        (this.pos[1] + (this.size / 3))\n      ];\n    }\n  }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Planet);\n\n\n//# sourceURL=webpack:///./src/planet.js?");

/***/ }),

/***/ "./src/star.js":
/*!*********************!*\
  !*** ./src/star.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst star = new Image();\nstar.src = \"assets/images/stars/star.png\"\nconst explosion = new Image();\nexplosion.src = \"assets/images/explosions/mm_explosion.png\";\n\nclass Star {\n  constructor(ctx, startPos) {\n    this.ctx = ctx;\n    this.startPos = startPos;\n    this.size = 10;\n    this.hit = false;\n    this.explosion = explosion;\n    this.explosionSize = 100;\n    this.star = star;\n\n    if (this.startPos === \"pos1\") this.pos = [390, 50];\n    if (this.startPos === \"pos2\") this.pos = [790, 50];\n\n    this.centerPos = [\n      (this.pos[0] + (this.size / 2)),\n      (this.pos[1] + (this.size / 2))\n    ];\n  }\n\n  draw() {\n    if (this.hit) {\n      this.ctx.drawImage(\n        this.explosion,\n        this.pos[0] + 90,\n        this.pos[1] + 120,\n        this.explosionSize,\n        this.explosionSize\n      );\n    } else {\n      const grd = this.ctx.createRadialGradient(\n        (this.pos[0] + (this.size / 2)),\n        (this.pos[1] + (this.size / 2)),\n        this.size * 0.3,\n        (this.pos[0] + (this.size / 2)),\n        (this.pos[1] + (this.size / 2)),\n        this.size * 1.0\n      );\n      grd.addColorStop(0, \"orange\");\n      grd.addColorStop(1, \"transparent\");\n\n      this.ctx.beginPath();\n      this.ctx.arc(\n        (this.pos[0] + (this.size / 2)),\n        (this.pos[1] + (this.size / 2)),\n        (this.size / 2) * 1.0,\n        0,\n        2 * Math.PI\n      );\n      this.ctx.strokeStyle = \"transparent\";\n      this.ctx.stroke();\n      this.ctx.fillStyle = grd;\n      this.ctx.fill();\n\n\n      this.ctx.drawImage(\n        this.star,\n        this.pos[0],\n        this.pos[1],\n        this.size,\n        this.size\n      );\n    }\n  }\n\n  move() {\n    if (this.hit) {\n      this.explosionSize += 10;\n      this.pos[0] -= 5;\n      this.pos[1] -= 5;\n    } else {\n      this.size += 3;\n      this.pos[1] += 3;\n\n      if (this.startPos === \"pos1\") {\n        this.pos[0] -= 3.6;\n      } else if (this.startPos === \"pos2\") {\n        this.pos[0] += 0.8;\n      }\n\n      this.centerPos = [\n        (this.pos[0] + (this.size / 3)),\n        (this.pos[1] + (this.size / 3))\n      ];\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Star);\n\n//# sourceURL=webpack:///./src/star.js?");

/***/ })

/******/ });