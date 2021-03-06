import Planet from './planet.js';
import Asteroid from './asteroid.js';
import Bolt from './bolt.js';

const bgGame = new Image();
bgGame.src = "assets/images/backgrounds/game_bg.jpg";

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.planets = [];
    this.asteroids = [];
    this.bolt = new Bolt(ctx);

    this.bg_color = "#000000";
    this.dim_x = 1200;
    this.dim_y = 700;

    this.bgGame = bgGame;
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

  // Collisions

  checkPlanetCollisions() {
    const bolt = this.bolt;
    const planets = this.planets;
    for (let i = 0; i < planets.length; i++) {
      const planet = planets[i]

      if (bolt.isCollidedWith(planet)) {
        console.log("COLLISION!!!!");
        planet.hit = true;
        clearInterval(this.planetIntervalId);
        clearInterval(this.asteroidIntervalId);
        this.planets = [planet];
        this.asteroids = [];
      }
    }
  }

  checkAsteroidCollisions() {
    const bolt = this.bolt;
    const asteroids = this.asteroids;
    for (let i = 0; i < asteroids.length; i++) {
      const asteroid = asteroids[i]

      if (bolt.isCollidedWith(asteroid)) {
        console.log("COLLISION!!!!");
        asteroid.hit = true;
      }
    }
  }

  // Animation

  stopObjects() {
    clearInterval(this.planetIntervalId);
    clearInterval(this.asteroidIntervalId);
  }

  draw(ctx) {
    ctx.clearRect(0, 0, this.dim_x, this.dim_y);
    ctx.fillStyle = this.bg_color;
    ctx.fillRect(0, 0, this.dim_x, this.dim_y);
    ctx.drawImage(this.bgGame, 0, 0, this.dim_x, this.dim_y);

    this.drawPlanets();
    this.drawAsteroids();
    this.bolt.draw();
  };

  step() {
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

  }

}

export default Game;