let respuesta = document.getElementById("respuesta");

let usuario = prompt("¿Cual es tu peso?");
let planeta = prompt("Elige tu planeta.\n1: Marte, 2: Jupiter, 3: Saturno, 4: Venus, 5: Neptuno");
// let peso = parseInt(usuario);

// gravedad en los distintos planetas
const gravedad = {
    Tierra: 9.8,
    Marte: 3.7,
    Jupiter: 24.8,
    Saturno: 10.44,
    Venus: 8.87,
    Neptuno: 11.15
};

// Para calcular el peso de la persona en otro planeta, la formula es:
// El peso del usuario x la gravedad del planeta / la gravedad de la tierra

const planetas = {
    // pesoTotal es el peso de la persona despues de calcular por la gravedar del planeta elegido
    // planetaP es el planeta elegido
    1: {
        pesoTotal: usuario * gravedad.Marte / gravedad.Tierra,
        planetaP: "Marte"
    },
    2: {
        pesoTotal: usuario * gravedad.Jupiter / gravedad.Tierra,
        planetaP: "Jupiter"
    },
    3: {
        pesoTotal: usuario * gravedad.Saturno / gravedad.Tierra,
        planetaP: "Saturno"
    },
    4: {
        pesoTotal: usuario * gravedad.Venus / gravedad.Tierra,
        planetaP: "Venus"
    },
    5: {
        pesoTotal: usuario * gravedad.Neptuno / gravedad.Tierra,
        planetaP: "Neptuno"
    }
};

const Valordefault = {
    pesoTotal: "1123356015000512",
    PlanetaP: "Krypton"
};

let { pesoTotal, planetaP } = planetas[planeta] || Valordefault;
pesoTotal = parseInt(pesoTotal);

let valorRespuesta = `<p>Si pesas <b class='usuario'>${usuario}kg</b>, tu peso en ${planetaP} seria <b class='pesoTotal'>${pesoTotal}kg</b>.</p>`;
respuesta.innerHTML = valorRespuesta;
