
const productos2 = [{
    nombre: "Monitor 144Hz",
    precio: 650000,
    stock: 100,
},
{
    nombre: "Microfono Red Dragon",
    precio: 85000,
    stock: 50,
},
{
    nombre: "Mouse Logitech g203",
    precio: 34000,
    stock: 75,
},
{
    nombre: "Teclado Red Dragon",
    precio: 62000,
    stock: 34,
},
{
    nombre: "Silla Gamer AFA",
    precio: 100000,
    stock: 25,
},
{
    nombre: "Auricular Logitech g435",
    precio: 140000,
    stock: 50,
},
{
    nombre: "Tiras led 5m",
    precio: 9000,
    stock: 30,
},
{
    nombre: "Joystick ps4",
    precio: 65000,
    stock: 23,
},
{
    nombre: "Pad Redragon",
    precio: 10000,
    stock: 14,
},
{
    nombre: "Camara c922",
    precio: 130000,
    stock: 89,
}
]

function pintarProductos2(productos2) {
    for (let i = 0; i < productos2.length; i++) {
        let lista = document.getElementById("lista"); //selecciona un elemento del documento por medio del valor del atributo id que se le haya asignado.
        let sumaTotal = document.getElementById("sumaTotal");
        lista.innerHTML += `<li class="tamaño">
            Producto: ${productos2[i].nombre} - Precio: $${productos2[i].precio} (<span id="stock${i}">${productos2[i].stock}</span>)
            <input class="comprar" type="number" id="entrada${i}" placeholder="Ingrese cantidad" min="0">
            <button class="comprar" id="btn${i}" type="button"> Comprar </button>
            Total: <p id="total${i}">  </p>
</li>`
        sumaTotal.innerHTML = `<div id="sumaTotal">
Total: $ 
</div>`
    }
}

pintarProductos2(productos2);

function comprar(i,productos2) {
    const stockHTML = document.getElementById(`stock${i}`);
    const entradaHTML = document.getElementById(`entrada${i}`);
    const stock = parseInt(stockHTML.textContent); //Convierte (parsea) un argumento de tipo cadena y devuelve un entero de la base especificada.
    const cantidad = parseInt(entradaHTML.value);

    if (cantidad > 0 && cantidad <= stock) {
        stockHTML.textContent = stock - cantidad;
        entradaHTML.value = "";

        alert(`Comprado exitosamente`);
    } else {
        alert(`No hay stock suficiente, ingrese una cantidad valida`);
    }

    if (!isNaN(cantidad) && cantidad > 0 && cantidad <= stock) {
        const multiplicacion = cantidad * productos2[i].precio;
        const totalHTML = document.getElementById(`total${i}`);
        const totalAnterior = parseFloat(totalHTML.textContent.replace('$', '')) || 0; //La función parseFloat() analiza un argumento (si es necesario, lo convierte en una cadena) y devuelve un número de coma flotante
        const nuevoTotal = totalAnterior + multiplicacion;
        totalHTML.textContent = ` $${nuevoTotal.toFixed(2)}`;
        let totalGeneral = 0;
        for (let j = 0; j < productos2.length; j++) {
            const subtotal = parseFloat(document.getElementById(`total${j}`).textContent.replace('$', '')) || 0;
            totalGeneral += subtotal;
        }
        document.getElementById("sumaTotal").textContent = ` Total: $${totalGeneral.toFixed(2)}`;
        console.log(totalGeneral);
    } else {
        alert('Ingrese una cantidad válida mayor que cero.');
    }
}

for (let i = 0; i < productos2.length; i++) {
    document.getElementById(`btn${i}`).addEventListener(`click`, () => {
        comprar(i,productos2);
    });
}

const cartas = [{
    nombre: "Monitor 144Hz",
    precio: 650000,
    img: "./imgs/1585891907_monitor_24_led_viewsonic_vx2458_mhd_144hz.png",
},
{
    nombre: "Microfono Red Dragon",
    precio: 85000,
    img: "./imgs/microfono.png",
},
{
    nombre: "Mouse Logitech g203",
    precio: 34000,
    img: "./imgs/mouse.png",
},
{
    nombre: "Teclado Red Dragon",
    precio: 62000,
    img: "./imgs/teclado.png",
},
{
    nombre: "Silla Gamer AFA",
    precio: 100000,
    img: "./imgs/8855ecbe32d6455eaa309f783840f0e8.webp",
},
{
    nombre: "Auricular Logitech g435",
    precio: 140000,
    img: "./imgs/auricular.png",
},
{
    nombre: "Tiras led 5m",
    precio: 9000,
    img: "./imgs/led.png",
},
{
    nombre: "Joystick ps4",
    precio: 65000,
    img: "./imgs/joystick.png",
},
{
    nombre: "Pad Redragon",
    precio: 10000,
    img: "./imgs/pad.png",
},
{
    nombre: "Camara c922",
    precio: 130000,
    img: "./imgs/camara.png",
}
]

function cards(cartas) {
    for (let i = 0; i < 5; i++) {
        let card = document.getElementById("card");
        card.innerHTML += `<div class="card">
        <div class="cuadradoBlanco">
        <img class="imgProducto" src="${cartas[i].img}" alt="${cartas[i].nombre}" >
        </div>
    </div>`

    }
}

cards(cartas);

function cards2(cartas) {
    for (let i = 5; i < 10; i++) {
        let card2 = document.getElementById("card2");
        card2.innerHTML += `<div class="card">
        <div class="cuadradoBlanco">
        <img class="imgProducto" src="${cartas[i].img}" alt="${cartas[i].nombre}" >
        </div>
    </div>`

    }
}

cards2(cartas);

/*function comprar(cantidad) {
    document.getElementById("total${i}").innerHTML = cantidad * productos2[i].precio;
    console.log(cantidad * productos2[i].precio);
}

document.querySelector("div button").addEventListener("click", () => {
    let cant = document.querySelector("div input").value;
    cant = Number(cant)
    if (cant > 0 && productos[0].stock - cant > 0) {
        comprar(cant);
    }
}
) */

/*let nombre = document.querySelector("p[name=nombre]")
let precio = document.querySelector("p[name=precio]")
let stock = document.querySelector("p[name=stock]")

nombre.innerHTML = productos[0].nombre;
precio.innerHTML = productos[0].precio;
stock.innerHTML = productos[0].stock;

function comprar(cant) {
    document.getElementById("total").innerHTML = cant * productos[0].precio;
    console.log(cant * productos[0].precio);
}

document.querySelector("div button").addEventListener("click", () => {
    let cant = document.querySelector("div input").value;
    cant = Number(cant)
    if (cant > 0 && productos[0].stock - cant > 0) {
        comprar(cant);
    }
}
)
*/

/*
let productos=["Monitor 144Hz", "Microfono Red Dragon","Mouse Logitech g203","Teclado Red Dragon","Silla Gamer AFA","Auricular Logitech g435","Tiras led 5m","Joystick ps4","Pad Redragon","Camara c922"];
let precios = [650000 , 85000, 34000, 62000, 100000, 140000, 9000, 65000, 10000, 130000];
let stock   = [100  , 50 , 75, 34, 25, 50, 30, 23, 14, 89]

function pintarProductos2(productos,precios,stock) {
    for (let i = 0; i < productos.length; i++) {
        let lista = document.getElementById("lista");
        lista.innerHTML += `<li class="tamaño">
            Producto: ${productos[i]} - Precio: $${precios[i]} (${stock[i]})
            <input type="number" id="entrada${i}" placeholder="Ingrese cantidad" min="0">
            <button id="btn${i} type="button"> Comprar </button>
</li>`
    }

}
pintarProductos2(productos, precios, stock);
*/