//Buscar la forma de  hacer que los botones de la pantalla dos te lleven a nuevas otras. Hacer  que se lea el texto de la pantalla dos en adelante (Es tan largo que excede el tamaño de la pantalla, pero esta bien el tamaño de la fuente)


let imagen=[];
let estado=0;
let frases=[' “La sonrisa” - Ray Bradbury', 'Tom espera en la cola desde la madrugadaentre ruinas, observando a la gente.', 'ponganse las pilas', 'queda poco tiempo'];
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
    fondo(imagen[0], frases[0], 48, width/2, height/4, 250, 330, 150, 50, "COMENZAR");
  }

  if (estado===1) {
    fondo(imagen[1], frases[1], 40, width/2, height/4, 100, 300, 140, 50, "Decisión");
    boton(350, 300, 140, 50, "Decisión");
  }

  if (estado===2) {
    fondo(imagen[2], frases[2], 50, 200, 400, 400, 100, 50, "Otra cosa" );
  }
}

function mouseClicked() {
  if (estado===0) {
    if (overMouse( 250, 330, 150, 50)) {
      estado=1;
    }
  }
  if (estado === 1) {
    if (overMouse( 250, 330, 140, 50)) {
      estado=1;
    } else if (overMouse( 350, 300, 140, 50)) {
      estado=1;
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



function fondo(imagen, texto, textsize, posX, posY, posXB, posYB, tamXB, tamYB, textoB) {
  image(imagen, 0, 0);
  fill(255);
  textAlign(CENTER, CENTER);
  textFont('CastlePressNo2');
  textSize(textsize);
  text(texto, posX, posY);
  textSize(36);
  boton(posXB, posYB, tamXB, tamYB, textoB);
}



function overMouse(posX, posY, tamX, tamY) {
  return mouseX>posX && mouseX<posX+tamX && mouseY>posY && mouseY<posY+tamY;
}
