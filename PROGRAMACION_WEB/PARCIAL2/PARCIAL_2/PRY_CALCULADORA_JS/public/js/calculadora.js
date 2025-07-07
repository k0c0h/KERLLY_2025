let numero_uno = "";
let numero_dos = "";
let operacion = "";
//capturar numero
function agregarNumero(numero) {

    if (operacion == "") {
        //numero_uno vaya concatenando los numeros que se ingresan
        numero_uno = numero_uno + numero;
        let txt_pantalla = document.getElementById("txt_pantalla")
        txt_pantalla.value = numero_uno;
    } else {
        numero_dos = numero_dos + numero;
        let txt_pantalla = document.getElementById("txt_pantalla")
        txt_pantalla.value = numero_dos;
    }
}

function seleccionarOperacion(op) {
    if (numero_uno != "") {
        operacion = op;
    }
}

function calcular() {
    let n1 = parseInt(numero_uno);
    let n2 = parseInt(numero_dos);
    let resultado = 0;
    if (operacion == "+") {
        resultado = n1 + n2;
    }

    if (operacion == "+") {
        resultado = n1 + n2;
    }

    if (operacion == "-") {
        resultado = n1 - n2;
    }

    if (operacion == "*") {
        resultado = n1 * n2;
    }

    if (operacion == "/") {
        if (n2 == 0) {
            document.getElementById("txt_pantalla").value = "indefinido";
        } else {
            resultado = n1 / n2;
        }
    }

    document.getElementById("txt_pantalla").value = resultado;
    numero_uno = "";
    numero_dos = "";
    operacion = "";

}

function limpiar() {
    numero_uno = "";
    numero_dos = "";
    operacion = "";
    document.getElementById("txt_pantalla").value = "0";
}
