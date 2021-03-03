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
    
    this.drawPlanets(ctx);
    // const planet1 = new Image();
    // planet1.src = "assets/images/planet1.png";
    // planet1.onload = () => {
    //   ctx.drawImage(planet1, 500, 500, 200, 200)
    // }
  };

  addPlanet() {
    this.planets.push(new Planet);
    console.log(this.planets);
  }

  removePlanet() {
    this.planets.shift();
    console.log(this.planets);
  }
  drawPlanets(ctx) {
    this.planets.forEach(function(planet) {
      planet.draw(ctx);
    });
  }

  generatePlanets(ctx) {
    // const planet1 = new Image();
    // planet1.src = "assets/images/planet1.png";
    // planet1.onload = () => {
    //   ctx.drawImage(planet1, 500, 500, 200, 200)
    // }

    let addPlanet = this.addPlanet.bind(this);
    let removePlanet = this.removePlanet.bind(this);
    setInterval(function () { 

      addPlanet();

      setTimeout(function () {
        removePlanet();
      }, 1000)
    }, 2 * 1000);
  };

}

export default Game;