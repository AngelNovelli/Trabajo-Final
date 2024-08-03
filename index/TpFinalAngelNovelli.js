
const cartas = [{
    nombre: "Monitor 144Hz",
    precio: 650000,
    img: "../imgs/1585891907_monitor_24_led_viewsonic_vx2458_mhd_144hz.png",
},
{
    nombre: "Microfono Red Dragon",
    precio: 85000,
    img: "../imgs/microfono.png",
},
{
    nombre: "Mouse Logitech g203",
    precio: 34000,
    img: "../imgs/mouse.png",
},
{
    nombre: "Teclado Red Dragon",
    precio: 62000,
    img: "../imgs/teclado.png",
},
{
    nombre: "Silla Gamer AFA",
    precio: 100000,
    img: "../imgs/8855ecbe32d6455eaa309f783840f0e8.webp",
},
{
    nombre: "Auricular Logitech g435",
    precio: 140000,
    img: "../imgs/auricular.png",
},
{
    nombre: "Tiras led 5m",
    precio: 9000,
    img: "../imgs/led.png",
},
{
    nombre: "Joystick ps4",
    precio: 65000,
    img: "../imgs/joystick.png",
},
{
    nombre: "Pad Redragon",
    precio: 10000,
    img: "../imgs/pad.png",
},
{
    nombre: "Camara c922",
    precio: 130000,
    img: "../imgs/camara.png",
}
]

function cards(cartas) {
    for (let i = 0; i < cartas.length; i++) {
        let card = document.getElementById("card");
        card.innerHTML += `<div class="contenedor">
        <div class="card">
        <div class="cuadradoBlanco">
        <img class="imgProducto" src="${cartas[i].img}" alt="${cartas[i].nombre}" >
        </div>
        <div class="texto">
            <p class="NombreProducto"> ${cartas[i].nombre}</p>
            <p class="PrecioProducto">$ ${cartas[i].precio}</p>
        </div>
    </div>
    </div>`

    }
}

cards(cartas);

function descuento(cartas){
        let descuento = document.getElementById("descuento");
        descuento.innerHTML = `<div class="enorme">
        <div class="contenedor">
        <div class="cardDescuento">
        <div class="cuadradoBlancoDescuento">
        <img class="imgProducto" src="${cartas[4].img}" alt="${cartas[4].nombre}" style="object-fit:fill; width: 125%; height: 80%;">
        </div>
        <div class="texto">
            <p class="NombreProducto"> ${cartas[4].nombre}</p>
            <p class="PrecioProducto">$ ${cartas[4].precio}</p>
        </div>
    </div>
    <div class="textoDescuento"> 
    <marquee class="promo" behavior="scroll" direction="left">
    PROMO LOS CAMPEONES DEL MUNDO
        </marquee>
    <p class="dni"> PRESENTANDO DNI ARGENTINO ACCEDES A UN DESCUENTO DEL 30% EN ESTA ASOMBROSA SILLA GAMER AFA</p>
    <marquee class="promo" id="f" behavior="scroll" direction="left">
    PROMO LOS CAMPEONES DEL MUNDO
        </marquee>
     </div>
    </div>
    <div class="contenedor">
        <div class="cardDescuento">
        <div class="cuadradoBlancoDescuento">
        <img class="imgProducto" src="${cartas[4].img}" alt="${cartas[4].nombre}" style="object-fit:fill; width: 125%; height: 80%;">
        </div>
        <div class="texto">
            <p class="NombreProducto"> ${cartas[4].nombre}</p>
            <p class="PrecioProducto">$ ${cartas[4].precio}</p>
        </div>
    </div>
    </div>
    `
}

descuento(cartas);