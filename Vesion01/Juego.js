class Juego {

  constructor (cantidadEnemigos) {
    this. cantEnemigos = cantidadEnemigos;
    this. crearPersonaje ();
    this. crearEnemigos ();
  }


  show () {
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

  crearPersonaje () {
    this.personaje = new Personaje (width/2, height/2, 50);
  }

  movimientoEnemigos() {
    for (let i = 0; i < this.enemigos1.length; i++) {
      this.enemigos1[i].mover();
    }

    for (let a= 0; a < this.enemigos2.length; a++) {
      this.enemigos2[a].mover();
    }
  }
  movimientoPersonaje() {
    this.personaje.mover() ;
  }

  verificarColisiones (Personaje) {
    for (let i = 0; i < this.enemigos1.length; i++) {
      if (dist(this.personaje.PosX, this.personaje.PosY, this.enemigos1[i].PosX, this.enemigos1[i].PosY)<= 15) {
        Personaje.Vida = 0;
      }
    }
    for (let a= 0; a < this.enemigos2.length; a++) {
      if (dist(this.personaje.PosX, this.personaje.PosY, this.enemigos2[a].PosX, this.enemigos2[a].PosY)<= 5) {
        Personaje.Vida = 0;
      }
    }
  }
}
