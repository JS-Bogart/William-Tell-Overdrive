import Game from "./game";
import GameView from "./game_view";

document.addEventListener("DOMContentLoaded", function () {
  const gameCanvas = document.getElementsByClassName("game-canvas")[0];
  gameCanvas.width = 1200;
  gameCanvas.height = 700;
  // gameCanvas.width = Game.DIM_X;
  // gameCanvas.height = Game.DIM_Y;

  const ctx = gameCanvas.getContext("2d");

  const game = new Game(ctx);
  game.addPlanet();
  game.draw(ctx);
  // game.generatePlanets(ctx);

  // new GameView(game, ctx).start();
});

