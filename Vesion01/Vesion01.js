//Cosas que deberiamos de resolver: TIMER, para poder controlar correctamente cuando sale cada uno de los "enemigos", de ambos lados. Arreglar COLISONES. CASA (La clase que nos sirve para terminar el juego). Podriamos sumar niveles de dificulad (Mas alto = Mas tiempo y  mas enemigos)


let objJUEGO;

function setup() {
  createCanvas (640, 480);
  juego = new Juego(5);
}


function draw() {
  background (0);
  juego.verificarColisiones();
  juego.show();
  juego.movimientoPersonaje();
  juego.movimientoEnemigos();
}
