//Buscar la forma de  genenrar el segundo  boton  en diapositivas de bifurcacion. Puede ser que funcione agregando una segunda funcion (Boton 2)


let imagen=[];
let estado=0;
let frases=[' “La sonrisa” - Ray Bradbury', 'Tom espera en la cola desde la madrugada, entre bruma y ruinas, observando a la gente y el frío que les roza las manos y la cara.', 'ponganse las pilas', 'queda poco tiempo'];
function preload() {
  for (let i=0; i<4; i++) {
    imagen[i]=loadImage('data/a'+i+'.png');
  }
}

function setup() {
  createCanvas(640, 480);
  for (let i=0; i<4; i++) {
    imagen[i].resize(640, 480);
  }
  textSize(24);
}


function draw() {

  if (estado===0) {
    fondo(imagen[1], frases[0], width/2, height/4, 250, 330, 150, 50, "COMENZAR");
    
  }

  if (estado===1) {
    fondo(imagen[0], frases[1], width/2, height/4, 100, 300, 140, 50, "Estado 1");
  }

  if (estado===2) {
    fondo(imagen[2], frases[2], 50, 200, 400, 400, 100, 50, "Otra cosa" );
  }
}

function mousePressed() {
  if (estado===0) {
    if (overMouse( 250, 330, 150, 50)) {
      estado=1;
    } else if (overMouse( 100, 300, 140, 50 )) {
      estado=2;
    }
  }
}



function boton(posX, posY, tamX, tamY, textoB) {
  if (overMouse(posX, posY, tamX, tamY)) {
    fill(255, 50, 0);
  } else {
    fill(200, 0, 0, 100);
  }
  rect(posX, posY, tamX, tamY);
  fill(255);
  textAlign(CENTER, CENTER);
  text(textoB, posX+tamX/2, posY+tamY/2);
}



function fondo(imagen, texto, posX, posY, posXB, posYB, tamXB, tamYB, textoB) {
  image(imagen, 0, 0);
  fill(255);
  textAlign(CENTER, CENTER);
  text(texto, posX, posY);
  boton(posXB, posYB, tamXB, tamYB, textoB);
  //boton(posXB + 300, posYB , tamXB, tamYB, textoB); - Esto es una idea para poner el segundo boton que no funciona porque genera 2 botones en  todas las  pantallas
}



function overMouse(posX, posY, tamX, tamY) {
  return mouseX>posX && mouseX<posX+tamX && mouseY>posY && mouseY<posY+tamY;
}
