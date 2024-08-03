let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let tel = document.getElementById("tel");
let mensaje = document.getElementById("mensaje");
let btnEnviar = document.getElementById("enviar");
let informacion = [];

btnEnviar.addEventListener("click", (e) => {
    e.preventDefault(); // previene la accion del form de actualizar la pagina
    informacion[0] = nombre.value;
    informacion[1] = apellido.value;
    informacion[2] = email.value;
    informacion[3] = tel.value;
    informacion[4] = mensaje.value;

    if (nombre.value.trim() === "" || apellido.value.trim() === "" || email.value.trim() === "" || tel.value.trim() === "") {
        alert("Por favor, completa todos los campos.");
        return; // Detiene el envío del formulario
    }

    console.log(`Su nombre es ${informacion[0]} y su apellido es ${informacion[1]}, ${informacion[2]},${informacion[3]}, ${informacion[4]}`);

    let blob = new Blob([informacion], {type: "text/plain;charset=utf-8"}); // navegador

    //Libreria FileSaver.js
       saveAs(blob, "contact.txt");

       console.log(blob)
})
