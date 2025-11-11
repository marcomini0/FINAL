function preload () {
  imagen1=loadImage ('data/imagen1.png');
  imagen2=loadImage ('data/imagen3.jpg');
}

function setup() {
  createCanvas (640, 480);
  control = new ControlPantallas ();
}


function draw() {
  background (0);
  control.mostrar ();
}

function mouseClicked() {
  if (control.estado===0) {
    if (control.botones[0].calculoSobreMouse()) {
      control.estado=1;
    }
    if (control.botones[1].calculoSobreMouse()) {
      control.estado=2;
    }
  }
  if (control.estado===2) {
    if (control.botones[3].calculoSobreMouse()) {
      control.estado=0;
    }
  }
  if (control.estado===1) {
    if (control.botones[2].calculoSobreMouse()) {
      control.estado=3;
    }
  }
  if (control.juego.personaje.Vida === 0) {
    if (control.botones[4].calculoSobreMouse()) {
      control.reiniciarJuego ();
      control.estado=0;
    }
  }
  if (control.juego.personaje.Vida === 2) {
    if (control.botones[4].calculoSobreMouse()) {
      control.reiniciarJuego ();
      control.estado=0;
    }
  }
}
