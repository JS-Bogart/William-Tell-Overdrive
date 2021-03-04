import Planet from './planet';
import Asteroid from './asteroid';
import Bolt from './bolt';

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

    let addPlanet = this.addPlanet.bind(this);
    let removePlanet = this.removePlanet.bind(this);
    setInterval(function () {

      addPlanet();

      setTimeout(function () {
        removePlanet();
      }, 4000)
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

    let addAsteroid = this.addAsteroid.bind(this);
    let removeAsteroid = this.removeAsteroid.bind(this);
    setInterval(function () { 

      addAsteroid();

      setTimeout(function () {
        removeAsteroid();
      }, 4000)
    }, 1 * 1000);
  };

  // Animation

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
    this.planets.forEach(planet => {
      if (planet) {
        planet.move();
      }
    });

    this.asteroids.forEach(asteroid => {
      if (asteroid) {
        asteroid.move();
      }
    });
  }

}

export default Game;