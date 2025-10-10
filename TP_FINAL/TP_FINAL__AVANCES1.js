//let suspenso, click;
let imagen=[];
let estado=0;
let frases=[' “La sonrisa” - Ray Bradbury', 'Un niño llamado Tom \nespera en una fila en la madrugada,\nentre ruinas y observando a la gente.', 'De repente, lo intentan echar de\nla fila.', 'Tom abandona el lugar, triste.', 'Un hombre salta a defender\na Tom.', 'Él le explica a Tom que en los festivales,\n los humanos, se organizan para\n destruir obras de arte atiguas.', 'Le menciona ejemplos de\n festivales pasados.', 'No le gusta el acto de odio \n y vuelve a su casa.', 'La multitud se prepara \n para atacar la obra.', 'Frente al retrato, Tom \n se abstiene de escupir.', 'La multitud arrasa la obra, destrozandola.\n Tom rescata una parte del lienzo.', 'La multitud lo ve y lo tratan de ladrón.\n Se lo arrebatan y lo destrozan.', '  Tom corre y llega a su casa. ', 'La comparte con su familia y amigos\n y les enseña a valorarla.', 'Acostado, contempla la\n pequeña pieza de arte.', 'La pieza se convierte en un\n simbolo y la gente comienza a\n rescatar mas fragmentos.', 'Trabajo realizado por:\n Mini Marco (122798/8)\n Macías Ignacio (122768/2 \nImagenes generadas con Gemini (IA)' ];

function preload() {
  for (let NUM=0; NUM<8; NUM++) {
    imagen[NUM]=loadImage('data/a'+NUM+'.png');
  }
  //suspenso = loadSound ("Suspenso.mp3");
  //click = loadSound ('Click.mp3');
}

function setup() {
  createCanvas(640, 480);
  for (let NUM=0; NUM<8; NUM++) {
  }
  textSize(2);
}


function draw() {

  if (estado===0) {
    fondo(imagen[0], frases[0], 48, width/2, height/4, 220, 330, 200, 50, "COMENZAR");
    boton(250, 270, 140, 50, "Créditos");
  }

  if (estado===1) {
    fondo(imagen[1], frases[1], 40, width/2, height/4, 250, 370, 150, 50, "Continuar");
  }
  if (estado===2) {
    fondo(imagen[2], frases[2], 40, width/2, height/4, 120, 370, 150, 50, "Ceder");
    boton(370, 370, 140, 50, "Resistir");
  }

  if (estado===3) {
    fondo(imagen[3], frases[3], 40, width/2, height/4, 250, 330, 150, 50, "Reiniciar" );
  }

  if (estado===4) {
    fondo(imagen[4], frases[4], 40, width/2, height/4, 250, 370, 150, 50, "Continuar" );
  }

  if (estado===5) {
    fondo(imagen[5], frases[5], 40, width/2, height/4, 160, 330, 320, 50, "Seguir escuchando" );
  }

  if (estado===6) {
    fondo(imagen[5], frases[6], 40, width/2, height/4, 70, 370, 250, 50, "Tom se asusta");
    boton( 330, 370, 250, 50, "Tom se interesa");
  }

  if (estado===7) {
    fondo(imagen[6], frases[7], 40, width/2, height/4, 250, 330, 150, 50, "Reiniciar" );
  }

  if (estado===8) {
    fondo(imagen[7], frases[8], 40, width/2, height/4, 250, 370, 150, 50, "Continuar" );
  }

  if (estado===9) {
    fondo(imagen[4], frases[9], 40, width/2, height/4, 250, 330, 150, 50, "Continuar" );
  }

  if (estado===10) {
    fondo(imagen[2], frases[10], 40, width/2, height/4, 330, 370, 270, 50, "Lo mira interesado");
    boton(70, 370, 220, 50, "Lo esconde" );
  }

  if (estado===11) {
    fondo(imagen[4], frases[11], 40, width/2, height/4, 250, 330, 150, 50, "Reiniciar" );
  }


  if (estado===12) {
    fondo(imagen[4], frases[12], 40, width/2, height/4, 290, 330, 340, 50, "Decide mostrar la pieza");
    boton(20, 330, 260, 50, "La guarda para él" );
  }

  if (estado===13) {
    fondo(imagen[4], frases[14], 40, width/2, height/4, 250, 330, 150, 50, "Reiniciar" );
  }

  if (estado===14) {
    fondo(imagen[4], frases[13], 40, width/2, height/4, 250, 330, 150, 50, "Continuar" );
  }

  if (estado===15) {
    fondo(imagen[4], frases[15], 40, width/2, height/4, 250, 370, 150, 50, "Reiniciar" );
  }

  if (estado===16) {
    fondo(imagen[0], frases[16], 40, width/2, height/4, 40, 400, 150, 50, "Volver" );
  }
}


function mouseClicked() {
 

  if (estado===0) {
    if (sobreMouse(250, 330, 200, 50)) {
      estado=1;
    }
  }
  if (estado===1) {
    if (sobreMouse( 250, 370, 140, 50)) {
      estado=2;
    }
  }

  if (estado===2) {
    if (sobreMouse( 120, 370, 140, 50)) {
      estado=3;
    }
    if (sobreMouse( 370, 370, 140, 50)) {
      estado=4
    }
  }

  if (estado===3) {
    if (sobreMouse( 250, 330, 150, 50)) {
      estado=0;
    }
  }

  if (estado===4) {
    if (sobreMouse(  250, 370, 150, 50)) {
      estado=5;
    }
  }

  if (estado===5) {
    if (sobreMouse( 160, 330, 320, 50)) {
      estado=6;
    }
  }

  if (estado===6) {
    if (sobreMouse( 70, 370, 250, 50)) {
      estado=7;
    }
    if (sobreMouse(330, 370, 250, 50)) {
      estado=8;
    }
  }

  if (estado===7) {
    if (sobreMouse( 250, 330, 150, 50)) {
      estado=0;
    }
  }
  if (estado===8) {
    if (sobreMouse(  250, 370, 150, 50)) {
      estado=9;
    }
  }
  if (estado===9) {
    if (sobreMouse(  220, 330, 200, 50)) {
      estado=10;
    }
  }

  if (estado===10) {
    if (sobreMouse( 330, 370, 270, 50)) {
      estado=11;
    }
    if (sobreMouse(70, 370, 220, 50)) {
      estado=12;
    }
  }

  if (estado===11) {
    if (sobreMouse(  220, 330, 200, 50)) {
      estado=0;
    }
  }
  if (estado===12) {
    if (sobreMouse( 290, 330, 340, 50)) {
      estado=14;
    }
    if (sobreMouse(20, 330, 260, 50)) {
      estado=13;
    }
  }

  if (estado===13) {
    if (sobreMouse(  250, 330, 150, 50)) {
      estado=0;
    }
  }

  if (estado===14) {
    if (sobreMouse( 250, 330, 150, 50)) {
      estado=15;
    }
  }

  if (estado===15) {
    if (sobreMouse( 250, 370, 150, 50)) {
      estado=0;
    }
  }
  if (estado===0) {
    if (sobreMouse( 255, 270, 140, 50)) {
      estado=16;
    }
  }
  if (estado===16) {
    if (sobreMouse(40, 400, 150, 50)) {
      estado=0;
    }
  }
}
function boton(posX, posY, tamX, tamY, textoBoton) {
  if (sobreMouse(posX, posY, tamX, tamY)) {
    fill(255, 50, 0);
  } else {
    fill(200, 0, 0, 100);
  }
  noStroke();
  rect(posX, posY, tamX, tamY, 180);
  fill(255);
  textAlign(CENTER, CENTER);
  text(textoBoton, posX+tamX/2, posY+tamY/2);
}



function fondo(imagen, texto, textsize, posX, posY, posXB, posYB, tamXB, tamYB, textoBoton) {
  image(imagen, 0, 0);
  fill(255);
  textAlign(CENTER, TOP);
  text(texto, posX, posY);
  textSize(30);
  boton(posXB, posYB, tamXB, tamYB, textoBoton);
}


function sobreMouse(posX, posY, tamX, tamY) {
  return mouseX>posX && mouseX<posX+tamX && mouseY>posY && mouseY<posY+tamY;
}
