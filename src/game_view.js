class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
  }

  generateObjects() {
    this.game.generatePlanets(this.ctx);
    this.game.generateAsteroids(this.ctx);
  }

  finalPhase() {
    this.game.stopObjects();
  }

  start() {
    const generateObjects = this.generateObjects.bind(this);
    const finalPhase = this.finalPhase.bind(this);
    setTimeout(function () {
      generateObjects();
    }, 14 * 1000);
    setTimeout(function () {
      finalPhase();
    }, 93 * 1000);
    requestAnimationFrame(this.animate.bind(this));
  };
  
  animate() {
    this.game.step();
    this.game.draw(this.ctx);
  
    requestAnimationFrame(this.animate.bind(this));
  };
}


export default GameView;