
const cartas = [{
    nombre: "Monitor 144Hz",
    precio: 650000,
    img: "./imgs/1585891907_monitor_24_led_viewsonic_vx2458_mhd_144hz.png",
},
{
    nombre: "Microfono Red Dragon",
    precio: 85000,
    img: "./imgs/BLAZAR.png",
},
{
    nombre: "Mouse Logitech g203",
    precio: 34000,
    img: "./imgs/mouse-logitech-g203-lilac-11-73197d4e168e0bac6a16902199592772-480-0.png",
},
{
    nombre: "Teclado Red Dragon",
    precio: 62000,
    img: "./imgs/756891_picture_1528472153.png",
},
{
    nombre: "Silla Gamer AFA",
    precio: 100000,
    img: "./imgs/8855ecbe32d6455eaa309f783840f0e8.webp",
},
{
    nombre: "Auricular Logitech g435",
    precio: 140000,
    img: "./imgs/69fb0ffa01a445bb9a1c9c0a698fd531.webp",
},
{
    nombre: "Tiras led 5m",
    precio: 9000,
    img: "./imgs/tira-led-rgb-5050-x5mt-autoadhesiva-interior-1649858212-0-0-removebg-preview1-2720a63eaba702fdf016920230442833-640-0.png",
},
{
    nombre: "Joystick ps4",
    precio: 65000,
    img: "./imgs/dualshock-controller-product-thumbnail-01-en-14sep21.webp",
},
{
    nombre: "Pad Redragon",
    precio: 10000,
    img: "./imgs/2-4-1.png",
},
{
    nombre: "Camara c922",
    precio: 130000,
    img: "./imgs/51_21-10-2022-04-10-47-0000000000410738000214287c9222.png",
}
]

function cards(cartas) {
    for (let i = 0; i < cartas.length; i++) {
        let card = document.getElementById("card");
        card.innerHTML += `<div class="contenedor">
        <div class="card">
        <div class="cuadradoBlanco">
        <img class="imgProducto" src="${cartas[i].img}" alt="${cartas[i].nombre}" style="object-fit:fill; width: 125%; height: 80%;">
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
        descuento.innerHTML = `<div class="contenedor">
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
    <p> PRESENTANDO DNI ARGENTINO ACCEDES A UN DESCUENTO DEL 30% EN ESTA ASOMBROSA SILLA GAMER AFA</p>
    <marquee class="promo" id="f" behavior="scroll" direction="left">
    PROMO LOS CAMPEONES DEL MUNDO
        </marquee>
     </div>
    </div>`
}

descuento(cartas);