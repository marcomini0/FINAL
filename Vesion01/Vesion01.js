//Cosas que deberiamos de resolver: TIMER, para poder controlar correctamente cuando sale cada uno de los "enemigos", de ambos lados. 

let juego;

function preload (){
//Aca van todas las img y el sonido
}

function setup() {
  createCanvas (640, 480);
  juego = new Juego(5);
}


function draw() {
  background (0);
  juego.actualizar();
}
