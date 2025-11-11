class Casa {

  constructor () {
    this.PosX = width/2;
    this.Tam = 90;
    this.PosY = 0;
  }

  show () {
    rectMode (CENTER);
    fill (0, 0, 255);
    noStroke ();
    rect (this.PosX, this.PosY, this.Tam, this.Tam);
  }
}
