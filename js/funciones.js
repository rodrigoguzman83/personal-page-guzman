function validar() {
    const name = document.getElementById("name");
    const mail = document.getElementById("mail");
    const msj = document.getElementById("message");
    //CREO UNA EXPRESION REGULAR PARA VALIDAR EL MAIL
    var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (name.value == "") {
        alert("[ERROR] debe ingresar su nombre");
        name.style.backgroundColor = "red";
        return 0;
    } else if (mail.value == "") {
        name.style.background = "transparent";
        alert("[ERROR] debe ingresar un mail");
        mail.style.backgroundColor = "red";
    } else if (!regex.test(mail.value)) { //METODO TEST QUE LLEVA A CABO LA VALIDACION DEL MAIL CON LA EXPRESION REGULAR
        name.style.background = "transparent";
        alert("[ERROR] debe ingresar un mail valido");
        mail.style.backgroundColor = "red";
    } else if (msj.value == "") {
        name.style.background = "transparent";
        mail.style.background = "transparent";
        alert("[ERROR] debe ingresar un mensaje");
        msj.style.backgroundColor = "red";
    } else {
        alert("Mensaje enviado correctamente");
        name.style.background = "transparent";
        mail.style.background = "transparent";
        msj.style.background = "transparent";
        name.value = "";
        mail.value = "";
        msj.value = "";
    }
}