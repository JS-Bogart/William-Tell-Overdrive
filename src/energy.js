class Energy {
  constructor(eBar){
    this.eBar = eBar;
    this.energyTop = 25;
    this.energyLevel = 650;
  }

  // Green
  // draw() {
  //   this.eBar.beginPath();
  //   this.eBar.rect(25, this.energyTop, 25, this.energyLevel);
  //   this.eBar.fillStyle = '#A0FEC4';
  //   this.eBar.strokeStyle = '#68F96D';
  //   this.eBar.lineWidth = 2;
  //   this.eBar.shadowColor = '#40F23B';
  //   this.eBar.shadowBlur = 50;
  //   this.eBar.shadowOffsetX = 0;
  //   this.eBar.shadowOffsetY = 0;
  //   this.eBar.stroke();
  //   this.eBar.fill();
  // }

  // Orange
  draw() {
    this.eBar.beginPath();
    this.eBar.rect(25, this.energyTop, 25, this.energyLevel);
    this.eBar.fillStyle = '#FBFED1';
    this.eBar.strokeStyle = '#FCD390';
    this.eBar.lineWidth = 2;
    this.eBar.shadowColor = '#F08240';
    this.eBar.shadowBlur = 50;
    this.eBar.shadowOffsetX = 0;
    this.eBar.shadowOffsetY = 0;
    this.eBar.stroke();
    this.eBar.fill();
  }

}

export default Energy;