class Juego {

  constructor (cantidadEnemigos) {
    this.cantEnemigos = cantidadEnemigos;
    this.crearPersonaje ();
    this.crearEnemigos ();
    this.crearCasa();
  }

  actualizar () {
    this.moverPersonaje() ;
    this.movimientoEnemigos();
    this.verificarColisiones();
    this.show ();
  }

  reset () {
    this.crearPersonaje ();
    this.crearEnemigos ();
    this.crearCasa();
  }

  show () {
    this.casa.show();
    this.personaje.show() ;
    for (let i= 0; i < this. cantEnemigos; i++) {
      this.enemigos1[i].show ();
    }
    for (let a= 0; a < this.cantEnemigos; a++) {
      this.enemigos2[a].show ();
    }
  }

  crearEnemigos () {
    this.enemigos1 =[];
    this.enemigos2 =[];
    for (let i= 0; i < this. cantEnemigos; i++) {
      this.enemigos1 [i] = new Enemigo("Derecha");
      this.enemigos1[i].asignarDireccion();
    }
    for (let a= 0; a < this. cantEnemigos; a++) {
      this.enemigos2 [a] = new Enemigo("Izquierda");
      this.enemigos2[a].asignarDireccion();
    }
  }

  crearCasa () {
    this.casa = new Casa();
  }

  crearPersonaje () {
    this.personaje = new Personaje (width/2, height - 20, 20);
  }

  moverPersonaje () {
    if (keyIsDown(LEFT_ARROW)) {
      this.personaje.PosX -= this.personaje.velX;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.personaje.PosX += this.personaje.velX;
    }
    if (keyIsDown(UP_ARROW)) {
      this.personaje.PosY -= this.personaje.velY;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.personaje.PosY += this.personaje.velY;
    }


    if (this.personaje.PosX >= width) {
      this.personaje.PosX = 0;
    } else if (this.personaje.PosX <= 0) {
      this.personaje.PosX = width;
    }
    if (this.personaje.PosY > height - this.personaje.Tam / 2) {
      this.personaje.PosY = height - this.personaje.Tam / 2;
    }
    if (this.personaje.PosY < 50) {
      this.personaje.PosY = 50;
    }
  }



  movimientoEnemigos() {
    for (let i = 0; i < this.enemigos1.length; i++) {
      this.enemigos1[i].mover();
    }

    for (let a= 0; a < this.enemigos2.length; a++) {
      this.enemigos2[a].mover();
    }
  }


  verificarColisiones () {
    for (let i = 0; i < this.enemigos1.length; i++) {
      if (dist(this.personaje.PosX, this.personaje.PosY, this.enemigos1[i].PosX, this.enemigos1[i].PosY)<= (this.personaje.Tam/2) + (this.enemigos1[i].Tam/2)) {
        this.personaje.Vida = 0;
      }
    }
    for (let a= 0; a < this.enemigos2.length; a++) {
      if (dist(this.personaje.PosX, this.personaje.PosY, this.enemigos2[a].PosX, this.enemigos2[a].PosY)<= (this.personaje.Tam/2) + (this.enemigos2[a].Tam/2)) {
        this.personaje.Vida = 0;
      }
    }
    if (dist(this.personaje.PosX, this.personaje.PosY, this.casa.PosX, this.casa.PosY)<= (this.personaje.Tam/2) + (this.casa.Tam/2)) {
      this.personaje.Vida = 2;
    }
  }
}
