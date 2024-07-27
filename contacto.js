let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let tel = document.getElementById("tel");
let btnEnviar = document.getElementById("enviar");
let informacion = [];

btnEnviar.addEventListener("click", (e) => {
    e.preventDefault(); // previene la accion del form de actualizar la pagina
    informacion[0] = nombre.value;
    informacion[1] = apellido.value;
    informacion[2] = email.value;
    informacion[3] = tel.value;
    

    console.log(`Su nombre es ${informacion[0]} y su apellido es ${informacion[1]}, ${informacion[2]}, ${informacion[4]}`);

    let blob = new Blob([informacion], {type: "text/plain;charset=utf-8"}); // navegador

    //Libreria FileSaver.js
       saveAs(blob, "contact.txt");

       console.log(blob)
})
