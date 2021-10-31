
let usuario = prompt("¿Cual es tu peso?");

let planeta = prompt("Elige tu planeta.\n1: Marte, 2: Jupiter, 3: Saturno, 4: Venus, 5: Neptuno");


let peso = parseInt(usuario);



// gravedad en los distintos planetas
let gTierra = 9.8;
let gMarte = 3.7;
let gJupiter = 24.8;
let gSaturno = 10.44;
let gVenus = 8.87;
let gNeptuno = 11.15;


// pesoTotal es el peso de la persona despues de calcular por la gravedar del planeta elegido
let pesoTotal;

// planetaP es el planeta elegido
let planetaP;


// Para calcular el peso de la persona en otro planeta, la formula es:
// El peso del usuario x la gravedad del planeta / la gravedad de la tierra

if (planeta == 1) {
    pesoTotal = usuario * gMarte / gTierra;
    planetaP = "Marte";
}
else if (planeta == 2) {
    pesoTotal = usuario * gJupiter / gTierra;
    planetaP = "Jupiter";
}
else if (planeta == 3) {
    pesoTotal = usuario * gSaturno / gTierra;
    planetaP = "Saturno";
}
else if (planeta == 4) {
    pesoTotal = usuario * gVenus / gTierra;
    planetaP = "Venus";
}
else if (planeta == 5) {
    pesoTotal = usuario * gNeptuno / gTierra;
    planetaP = "Neptuno";
}
else {
    pesoTotal = "1123356015000512";
    planetaP = "Krypton";
}

pesoTotal = parseInt(pesoTotal);

document.write(`Si pesas <b class='usuario'>${usuario}kg</b>, tu peso en ${planetaP} seria <b class='pesoTotal'>${pesoTotal}kg</b>.`);
