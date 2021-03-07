import Planet from './planet.js';
import Asteroid from './asteroid.js';
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
  constructor(ctx, eBar) {
    this.ctx = ctx;
    this.eBar = eBar;
    this.planets = [];
    this.asteroids = [];
    this.earth = new Earth(ctx);
    this.murderMoon = new MurderMoon(ctx);
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
    const positions = ["pos1", "pos2", "pos3", "pos4", "pos5"];
    const planet = planets[Math.floor(Math.random() * Math.floor(12))]
    const pos = positions[Math.floor(Math.random() * Math.floor(5))];
    this.planets.push(new Planet(this.ctx, planet, pos));
    console.log(this.planets);
  }

  removePlanet() {
    this.planets.shift();
    console.log(this.planets);
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
      }, 10 * 1000)
    }, 2 * 1000);
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
    console.log(this.asteroids);
  }

  removeAsteroid() {
    this.asteroids.shift();
    console.log(this.asteroids);
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
    }, 1 * 1000);
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

  checkPlanetCollisions() {
    const bolt = this.bolt;
    const planets = this.planets;
    const loseConditionOne = this.loseConditionOne.bind(this);

    for (let i = 0; i < planets.length; i++) {
      const planet = planets[i]

      if (bolt.isCollidedWith(planet)) {
        console.log("COLLISION!!!!");
        planet.hit = true;
        bolt.hit = true;
        clearInterval(this.planetIntervalId);
        clearInterval(this.asteroidIntervalId);
        this.planets = [planet];
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
        console.log("COLLISION!!!!");
        asteroid.hit = true;
        if (energy.energyTop < 675) energy.energyTop += 1;
        if (energy.energyLevel > 0) energy.energyLevel -= 1;
      }
    }
  }

  checkEarthCollision() {
    const bolt = this.bolt;
    const earth = this.earth;
    const loseConditionTwo = this.loseConditionTwo.bind(this);

    if (bolt.isCollidedWith(earth)) {
      console.log("COLLISION!!!!");
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

    if (bolt.isCollidedWith(murderMoon)) {
      console.log("COLLISION!!!!");
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

  // Animation

  stopObjects() {
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

    if (this.gameStatus === "playing") {
      this.drawPlanets();
      this.drawAsteroids();
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
    if (this.gameStatus === "playing") {
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
  
      this.checkPlanetCollisions();
      this.checkAsteroidCollisions();
    } else if (this.gameStatus === "ending") {
      this.bolt.move();
      this.murderMoon.move();
      this.earth.move();

      this.checkEarthCollision();
      this.checkMurderMoonCollision();
    }
  }

}

export default Game;