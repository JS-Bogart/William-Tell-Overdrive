import Planet from './planet';

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.planets = [];
    this.asteroids = [];

    this.bg_color = "#000000";
    this.dim_x = 1200;
    this.dim_y = 700;
  }


  draw(ctx) {
    ctx.clearRect(0, 0, this.dim_x, this.dim_y);
    ctx.fillStyle = this.bg_color;
    ctx.fillRect(0, 0, this.dim_x, this.dim_y);
    
    this.drawPlanets();
  };

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

  step() {
    this.planets.forEach(planet => {
      if (planet) {
        planet.move();
      }
    });
  }

}

export default Game;