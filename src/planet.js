class Planet {

  draw(ctx) {
    const planet1 = new Image();
    planet1.src = "assets/images/planet1.png";
    planet1.onload = () => {
      ctx.drawImage(planet1, 500, 500, 200, 200)
    }
  }
}


export default Planet;
