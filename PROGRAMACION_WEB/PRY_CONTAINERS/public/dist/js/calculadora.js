let n1 = 0;
let n2 = 0;
let operador = null;
let esperandoSegundaEntrada = false;
let resultado = 0;

function operar(n1, n2, operador) {
    switch(operador) {
        case "+": return n1 + n2;
        case "-": return n1 - n2;
        case "*": return n1 * n2;
        case "/": return n2 !== 0 ? n1 / n2 : "No se pueden realizar divisiones por cero";
        default: return 0;
    }
}

function capturar(arg){
    var numero = arg.dataset.valor;
    var caja_texto_resultado=document.getElementById("txt_caja_resultado")
    if(numero === "+" || numero === "-" || numero === "*" || numero === "/"){
        if (caja_texto_resultado.value !== ""){
            n1 = parseFloat(caja_texto_resultado.value);
            operador = numero;
            esperandoSegundaEntrada = true;
            caja_texto_resultado.value = "";
        }
    }else if(numero === "="){
        if(caja_texto_resultado.value !== "" && operador !== null){
            n2 = parseFloat(caja_texto_resultado.value);
            resultado = operar(n1, n2, operador);
            caja_texto_resultado.value = resultado;
            n1 = resultado; 
            n2 = 0;
            operador = null;
            esperandoSegundaEntrada = false;
        }
    }else{
        if(esperandoSegundaEntrada){
            caja_texto_resultado.value = ""; 
            esperandoSegundaEntrada = false;
        }
        caja_texto_resultado.value += numero;
    }
}
