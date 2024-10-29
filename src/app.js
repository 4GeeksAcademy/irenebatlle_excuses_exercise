window.onload = function() {
  let primero = "Un ";
  let nombre = [
    "perro ",
    "caníbal ",
    "cura ",
    "gato, ",
    "lobo ",
    "extraterrestre ",
    "payaso ",
    "bebé ",
    "exorcista ",
    "fantasma ",
    "zombie ",
    "vampiro ",
    "gusano ",
    "gorila "
  ];
  let adj = [
    "gamberro ",
    "maleducado ",
    "salvaje ",
    "enfadado ",
    "primitivo ",
    "sucio ",
    "agresivo ",
    "sonámbulo ",
    "decrépito ",
    "borracho "
  ];
  let accion = [
    "se ha comido ",
    "ha mordido ",
    "se ha meado en ",
    "ha arañado ",
    "ha escupido en ",
    "ha vomitado en ",
    "ha robado "
  ];
  let objeto = [
    "mi pierna ",
    "mis deberes ",
    "mi trabajo ",
    "mis llaves ",
    "mi mòvil ",
    "mi dedo ",
    "mi mano ",
    "mi lengua ",
    "mi pie ",
    "mi bolso ",
    "mi mochila "
  ];
  let lugar = [
    "en la calle!",
    "en mi propia casa!",
    "en el bus!",
    "en el parking!",
    "delante de la escuela!",
    "en el bosque!",
    "en el hospital!",
    "en el coche!",
    "en el zoo!",
    "en el súper!"
  ];

  let rdm1 = Math.floor(Math.random() * nombre.length);
  let rdm2 = Math.floor(Math.random() * adj.length);
  let rdm3 = Math.floor(Math.random() * accion.length);
  let rdm4 = Math.floor(Math.random() * objeto.length);
  let rdm5 = Math.floor(Math.random() * lugar.length);

  document.querySelector("#excusa").innerHTML =
    primero +
    nombre[rdm1] +
    adj[rdm2] +
    accion[rdm3] +
    objeto[rdm4] +
    lugar[rdm5];
};
