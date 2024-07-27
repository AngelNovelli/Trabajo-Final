let arrProducto=["Monitor 144Hz", "Microfono Red Dragon","Mouse Logitech g203","Teclado Red Dragon","Silla Gamer AFA","Auricular Logitech g435","Tiras led 5m","Joystick ps4","Pad Redragon","Camara c922"];
let arrPrecio = [650000 , 85000, 34000, 62000, 100000, 140000, 9000, 65000, 10000, 130000];
let arrCant   = [100  , 50 , 75, 34, 25, 50, 30, 23, 14, 89]

document.querySelector("div button").addEventListener("click",()=>{
    let cant = document.querySelector("div input").value;
    cant=Number(cant)
   if(cant > 0 && arrCant[0] - cant > 0){
    comprar(cant);
   }
})

function comprar(cant){
document.getElementById("total").innerHTML= cant*arrPrecio[0];
}

