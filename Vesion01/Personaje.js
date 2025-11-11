class Personaje {

  constructor (PX, PY, TAM) {
    this.PosY = PY;
    this.PosX = PX;
    this.Tam = TAM;
    this.estaVivo = true;
    this.velY = 3;
    this.velX = 3;
    this.Vida = 1;
  }

  show () {
    if (this.Vida === 1) {

      fill (0, 255, 0);
      ellipse (this.PosX, this. PosY, this.Tam, this.Tam);
    }
  }
}
