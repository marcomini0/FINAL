class Enemigo {

  constructor (Direccion) {
    this.direccion = Direccion;
    this.PosX = 0;
    this.Tam = 30;
    this.Vida = true;
    this.PosY = random (70, height-this.Tam);
    this. vel = 5;
  }

  show () {
    if (this.Vida) {
      fill (255, 0, 0);
      ellipse (this.PosX, this. PosY, this.Tam, this.Tam);
    }
    if (this.PosX <= 0) {
      this.Vida = false;
    }
    if (this.PosX  >= width + 1) {
      this.Vida = false;
    }
  }

  asignarDireccion () {
    if (this.direccion === "Derecha") {
      this.PosX = width;
    }
    if (this.direccion === "Izquierda") {
      this.PosX = 1;
    }
  }


  mover () {
    if  (this.direccion === "Derecha") {
      this.PosX = this.PosX - this. vel;
    }
    if  (this.direccion === "Izquierda") {
      this.PosX = this.PosX + this. vel;
    }
  }
}
