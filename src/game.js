import Planet from './planet.js';
import Asteroid from './asteroid.js';
import Star from './star';
import Bolt from './bolt.js';
import Earth from './earth.js';
import MurderMoon from './murder_moon';
import Energy from './energy';

const bgGame = new Image();
bgGame.src = "assets/images/backgrounds/game_bg.jpg";
const win = new Image();
win.src = "assets/images/text/win.png"
const lose = new Image();
lose.src = "assets/images/text/lose.png"

class Game {
  constructor(ctx, eBar, endPos) {
    this.ctx = ctx;
    this.eBar = eBar;
    this.stars = [];
    this.planets = [];
    this.asteroids = [];
    this.earth = new Earth(ctx, endPos);
    this.murderMoon = new MurderMoon(ctx, endPos);
    this.bolt = new Bolt(ctx);
    this.energy = new Energy(eBar);
    this.bg_color = "#000000";
    this.dim_x = 1200;
    this.dim_y = 700;
    this.bgGame = bgGame;
    this.gameStatus = "playing";
    this.win = win;
    this.lose = lose;
    this.bar_x = 75;
    this.bar_y = 700;
  }

  // Stars

  addStar() {
    const positions = ["pos1", "pos2"]
    const pos = positions[Math.floor(Math.random() * Math.floor(2))];
    this.stars.push(new Star(this.ctx, pos));
  }

  removeStar() {
    this.stars.shift();
  }

  drawStars() {
    this.stars.forEach(star => {
      star.draw();
    });
  }

  generateStars() {

    const addStar = this.addStar.bind(this);
    const removeStar = this.removeStar.bind(this);
    this.starIntervalId = setInterval(function () {

      addStar();

      setTimeout(function () {
        removeStar();
      }, 15 * 1000)
    }, 2000);
  };

  // Planets

  addPlanet() {
    const planets = [
      "planet1", 
      "planet2", 
      "planet3",
      "planet4",
      "planet5",
      "planet6",
      "planet7",
      "planet8",
      "planet9",
      "planet10",
      "planet11",
      "planet12"
    ];
    const positions = ["pos1", "pos2", "pos3"];
    const planet = planets[Math.floor(Math.random() * Math.floor(12))]
    const pos = positions[Math.floor(Math.random() * Math.floor(3))];
    this.planets.push(new Planet(this.ctx, planet, pos));
  }

  removePlanet() {
    this.planets.shift();
  }

  drawPlanets() {
    this.planets.forEach(planet => {
      planet.draw();
    });
  }

  generatePlanets() {

    const addPlanet = this.addPlanet.bind(this);
    const removePlanet = this.removePlanet.bind(this);
    this.planetIntervalId = setInterval(function () {

      addPlanet();

      setTimeout(function () {
        removePlanet();
      }, 15 * 1000)
    }, 800);
  };

  // Asteroids

  addAsteroid() {
    const asteroids = [
      "asteroid1",
      "asteroid2",
      "asteroid3",
      "asteroid4",
      "asteroid5",
      "asteroid6",
      "asteroid7"
    ];
    const positions = ["pos1", "pos2", "pos3", "pos4"];
    const asteroid = asteroids[Math.floor(Math.random() * Math.floor(7))]
    const pos = positions[Math.floor(Math.random() * Math.floor(4))];
    this.asteroids.push(new Asteroid(this.ctx, asteroid, pos));
  }

  removeAsteroid() {
    this.asteroids.shift();
  }

  drawAsteroids() {
    this.asteroids.forEach(asteroid => {
      asteroid.draw();
    });
  }

  generateAsteroids() {

    const addAsteroid = this.addAsteroid.bind(this);
    const removeAsteroid = this.removeAsteroid.bind(this);
    this.asteroidIntervalId = setInterval(function () { 

      addAsteroid();

      setTimeout(function () {
        removeAsteroid();
      }, 6000)
    }, 250);
  };

  // Bolt

  moveBolt(moveLeft, moveRight) {
    this.bolt.moveLeft = moveLeft;
    this.bolt.moveRight = moveRight;
  }

  loseConditionOne() {
    this.gameStatus = "loseOne";
  }

  loseConditionTwo() {
    this.gameStatus = "loseTwo";
  }

  winCondition() {
    this.gameStatus = "victory";
  }

  // Collisions

  checkStarCollisions() {
    const bolt = this.bolt;
    const stars = this.stars;
    const loseConditionOne = this.loseConditionOne.bind(this);

    for (let i = 0; i < stars.length; i++) {
      const star = stars[i]

      if (bolt.isCollidedWith(star)) {
        star.hit = true;
        bolt.hit = true;
        clearInterval(this.starIntervalId);
        clearInterval(this.planetIntervalId);
        clearInterval(this.asteroidIntervalId);
        this.stars = [star];
        this.planets = [];
        this.asteroids = [];
        setTimeout(function () {
          loseConditionOne();
        }, 3000)
      }
    }
  }

  checkPlanetCollisions() {
    const bolt = this.bolt;
    const planets = this.planets;
    const loseConditionOne = this.loseConditionOne.bind(this);

    for (let i = 0; i < planets.length; i++) {
      const planet = planets[i]

      if (bolt.isCollidedWith(planet)) {
        planet.hit = true;
        bolt.hit = true;
        clearInterval(this.starIntervalId);
        clearInterval(this.planetIntervalId);
        clearInterval(this.asteroidIntervalId);
        this.planets = [planet];
        this.stars = [];
        this.asteroids = [];
        setTimeout(function () {
          loseConditionOne();
        }, 3000)
      }
    }
  }

  checkAsteroidCollisions() {
    const bolt = this.bolt;
    const asteroids = this.asteroids;
    const energy = this.energy;

    for (let i = 0; i < asteroids.length; i++) {
      const asteroid = asteroids[i]

      if (bolt.isCollidedWith(asteroid)) {
        asteroid.hit = true;
        if (energy.energyTop < 675) energy.energyTop += 5;
        if (energy.energyLevel > 0) energy.energyLevel -= 5;
      }
    }
  }

  checkEarthCollision() {
    const bolt = this.bolt;
    const earth = this.earth;
    const loseConditionTwo = this.loseConditionTwo.bind(this);

    if (bolt.isCollidedWith(earth)) {
      earth.hit = true;
      bolt.hit = true;
      setTimeout(function () {
        loseConditionTwo();
      }, 3000)
    }
  }

  checkMurderMoonCollision() {
    const bolt = this.bolt;
    const energy = this.energy;
    const murderMoon = this.murderMoon;
    const winCondition = this.winCondition.bind(this);
    const loseConditionOne = this.loseConditionOne.bind(this);

    if (bolt.isCollidedWith(murderMoon)) {
      bolt.hit = true;
      if (energy.energyLevel > 0) {
        murderMoon.hit = true;
        setTimeout(function () {
          winCondition();
        }, 3000)
      } else {
        setTimeout(function () {
          loseConditionOne();
        }, 3000)
      }
    }
  }

  checkEnergyLevel() {
    const energy = this.energy;
    const loseConditionOne = this.loseConditionOne.bind(this);

    if (energy.energyLevel < 1) {
      this.stopObjects();
      setTimeout(function () {
        loseConditionOne();
      }, 3000)
    }
  }

  // Animation

  stopObjects() {
    clearInterval(this.starIntervalId);
    clearInterval(this.planetIntervalId);
    clearInterval(this.asteroidIntervalId);
  }

  draw(ctx, eBar) {
    ctx.clearRect(0, 0, this.dim_x, this.dim_y);
    ctx.fillStyle = this.bg_color;
    ctx.fillRect(0, 0, this.dim_x, this.dim_y);
    ctx.drawImage(this.bgGame, 0, 0, this.dim_x, this.dim_y);
    eBar.clearRect(0, 0, this.bar_x, this.bar_y);
    eBar.fillStyle = this.bg_color;
    eBar.fillRect(0, 0, this.bar_x, this.bar_y)
    this.energy.draw();
    this.drawStars();
    this.drawPlanets();
    this.drawAsteroids();

    if (this.gameStatus === "playing") {
      this.bolt.draw();
    } else if (this.gameStatus === "ending") {
      this.earth.draw();
      this.murderMoon.draw();
      this.bolt.draw();
    } else if (this.gameStatus === "loseOne") {
      ctx.drawImage(
        this.lose,
        252,
        295.5
      )
    } else if (this.gameStatus === "loseTwo") {
      ctx.drawImage(
        this.lose,
        252,
        295.5
      )
    } else if (this.gameStatus === "victory") {
      ctx.drawImage(
        this.win,
        253.5,
        321
      )
    }
  };

  step() {
    console.log(this.gameStatus)
    this.bolt.move();

    this.asteroids.forEach(asteroid => {
      if (asteroid) {
        asteroid.move();
      }
    });

    this.planets.forEach(planet => {
      if (planet) {
        planet.move();
      }
    });

    this.stars.forEach(star => {
      if (star) {
        star.move();
      }
    });

    this.checkEnergyLevel();
    this.checkStarCollisions();
    this.checkPlanetCollisions();
    this.checkAsteroidCollisions();
    if (this.gameStatus === "ending") {
      this.bolt.move();
      this.murderMoon.move();
      this.earth.move();

      this.checkEarthCollision();
      this.checkMurderMoonCollision();
    }
  }

}

export default Game;