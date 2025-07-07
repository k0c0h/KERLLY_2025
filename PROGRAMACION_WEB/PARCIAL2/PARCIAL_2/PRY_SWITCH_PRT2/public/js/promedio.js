function calcular() {
    const resultado = document.getElementById("txt_respuesta");
    const nota1 = parseFloat(document.getElementById("nota1").value) || 0;
    const nota2 = parseFloat(document.getElementById("nota2").value) || 0;
    const nota3 = parseFloat(document.getElementById("nota3").value) || 0;

    const promedio = (nota1 + nota2 + nota3) / 3;

    let mensaje = "";

    switch (true) {
        case (promedio >= 18 && promedio <= 20):
            resultado.innerHTML = "EXCELENTE";
            break;
        case (promedio >= 15):
            resultado.innerHTML = "APROBADO";
            break;
        case (promedio >= 14):
            resultado.innerHTML = "SUPLETORIO";
            break;
        case (promedio < 14):
            resultado.innerHTML = "REPROBADO";
            break;
        default:
            resultado.innerHTML = "NOTA INVÁLIDA";
    }

    const mensajeTernario = (promedio >= 18 && promedio <= 20) ? "EXCELENTE" : (promedio >= 15) ? "APROBADO" : (promedio >= 14) ? "SUPLETORIO" : (promedio < 14) ? "REPROBADO" : "NOTA INVÁLIDA";

    //resultado.innerHTML = `PROMEDIO: ${promedio.toFixed(2)} - ${mensajeTernario}`;
}
