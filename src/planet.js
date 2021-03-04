const planet1 = new Image();
planet1.src = "assets/images/planets/planet1.png";
const planet2 = new Image();
planet2.src = "assets/images/planets/planet2.png";
const planet3 = new Image();
planet3.src = "assets/images/planets/planet3.png";
const planet4 = new Image();
planet4.src = "assets/images/planets/planet4.png";
const planet5 = new Image();
planet5.src = "assets/images/planets/planet5.png";
const planet6 = new Image();
planet6.src = "assets/images/planets/planet6.png";
const planet7 = new Image();
planet7.src = "assets/images/planets/planet7.png";
const planet8 = new Image();
planet8.src = "assets/images/planets/planet8.png";
const planet9 = new Image();
planet9.src = "assets/images/planets/planet9.png";
const planet10 = new Image();
planet10.src = "assets/images/planets/planet10.png";
const planet11 = new Image();
planet11.src = "assets/images/planets/planet11.png";
const planet12 = new Image();
planet12.src = "assets/images/planets/planet12.png";

class Planet {
  constructor(ctx, type, startPos) {
    this.ctx = ctx;
    this.type = type;
    this.startPos = startPos;
    this.size = 5;
    if (this.type === "planet1") this.planet = planet1;
    if (this.type === "planet2") this.planet = planet2;
    if (this.type === "planet3") this.planet = planet3;
    if (this.type === "planet4") this.planet = planet4;
    if (this.type === "planet5") this.planet = planet5;
    if (this.type === "planet6") this.planet = planet6;
    if (this.type === "planet7") this.planet = planet7;
    if (this.type === "planet8") this.planet = planet8;
    if (this.type === "planet9") this.planet = planet9;
    if (this.type === "planet10") this.planet = planet10;
    if (this.type === "planet11") this.planet = planet11;
    if (this.type === "planet12") this.planet = planet12;

    if (this.startPos === "pos1") this.pos = [390, 50];
    if (this.startPos === "pos2") this.pos = [490, 50];
    if (this.startPos === "pos3") this.pos = [590, 50];
    if (this.startPos === "pos4") this.pos = [690, 50];
    if (this.startPos === "pos5") this.pos = [790, 50];
  }

  draw() {
    const grd = this.ctx.createRadialGradient(
      (this.pos[0] + (this.size / 2)), 
      (this.pos[1] + (this.size / 2)), 
      this.size * 0.5, 
      (this.pos[0] + (this.size / 2)), 
      (this.pos[1] + (this.size / 2)), 
      this.size
    );
    grd.addColorStop(0, "blue");
    grd.addColorStop(1, "transparent");

    this.ctx.beginPath();
    this.ctx.arc(
      (this.pos[0] + (this.size / 2)),
      (this.pos[1] + (this.size / 2)),
      (this.size / 2) * 1.7,
      0,
      2 * Math.PI
    );
    this.ctx.stroke();
    this.ctx.fillStyle = grd;
    this.ctx.fill();


    this.ctx.drawImage(
      this.planet, 
      this.pos[0], 
      this.pos[1], 
      this.size, 
      this.size
    );
  }

  move() {
    this.size += 0.9;
    this.pos[1] += 3;

    if (this.startPos === "pos1") {
      this.pos[0] -= 2.0;
    } else if (this.startPos === "pos2") {
      this.pos[0] -= 1.2;
    } else if (this.startPos === "pos3") {
      this.pos[0] -= 0.45;
    } else if (this.startPos === "pos4") {
      this.pos[0] += 0.3;
    } else if (this.startPos === "pos5") {
      this.pos[0] += 1.2;
    }
  }
}


export default Planet;
