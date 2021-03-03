class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
  }

  start() {
    this.game.generatePlanets(this.ctx);
    this.game.generateAsteroids(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  };
  
  animate() {
    this.game.step();
    this.game.draw(this.ctx);
  
    requestAnimationFrame(this.animate.bind(this));
  };
}


export default GameView;