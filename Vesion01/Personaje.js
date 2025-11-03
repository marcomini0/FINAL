class Personaje {

  constructor (PX, PY, TAM) {
    this.PosY = PY;
    this.PosX = PX;
    this.Tam = TAM;
    this.estaVivo = true;
    this.velY = 5;
    this.velX = 5;
    this.Vida = 1;
  }

  show () {
    if (this.Vida === 1) {
      rectMode (CENTER);
      fill (0, 255, 0);
      rect (this.PosX, this. PosY, this.Tam, this.Tam);
    }
  }

  mover () {
    if (keyIsDown(LEFT_ARROW)) {
      this.PosX -= this.velX;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.PosX += this.velX;
    }
    if (keyIsDown(UP_ARROW)) {
      this.PosY -= this.velY;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.PosY += this.velY;
    }
    this.limitesMovimiento ();
  }

  limitesMovimiento () {
    if (this.PosX >= width) {
      this.PosX = 0;
    } else if (this.PosX <= 0) {
      this.PosX = width;
    }
    if (this.PosY > height - this.Tam / 2) {
      this.PosY = height - this.Tam / 2;
    }
    if (this.PosY <50) {
      this.PosY = 50;
    }
  }


}
