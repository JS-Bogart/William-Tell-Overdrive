import Planet from './planet';

class Game {
  constructor(ctx) {
    this.planets = [];
    this.ctx = ctx;

    Game.BG_COLOR = "#000000";
    Game.DIM_X = 1200;
    Game.DIM_Y = 700;
  }


  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
    
    this.drawPlanets();
  };

  addPlanet() {
    // const planets = ["planet1"];
    const positions = ["pos1", "pos2", "pos3", "pos4", "pos5"];
    // const planet = planets[Math.floor(Math.random() * Math.floor(1))]
    const pos = positions[Math.floor(Math.random() * Math.floor(5))];
    this.planets.push(new Planet(this.ctx, "planet1", pos));
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
    }, 1 * 1000);
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