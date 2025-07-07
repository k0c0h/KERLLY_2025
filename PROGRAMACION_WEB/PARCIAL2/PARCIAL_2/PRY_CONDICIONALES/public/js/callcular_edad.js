function calcularEdad(arg){
    //capturar el value de el input con el id = edad
/*     let edad = document.getElementById("edad").value;
    console.log(edad); */
    let edad = arg.value;
    //usar la condicion if para verificar si la edad es mayor o igual a 18
    if(edad >= 18){
        console.log("Eres mayor de edad");
        document.getElementById("mostrar_mensaje").innerHTML= "Eres mayor de edad";
    }else{
        console.log("Eres menor de edad");
        document.getElementById("mostrar_mensaje").innerHTML="Eres menor de edad";
    }
}

function mostrarGenero(arg){
    let genero = arg.value;
    let ingresarEdad =  document.getElementById("mostrar_genero");

    if(genero == 'M'){
        ingresarEdad.innerHTML = "Eres Mujer";
        ingresarEdad.classList.add("text-info");
    }else if(genero == 'H'){
        ingresarEdad.innerHTML = "Eres hombre";
        ingresarEdad.classList.add("text-success");
    }else{
        ingresarEdad.innerHTML = "Genero no válido";
        ingresarEdad.classList.add("");
    }
}

function mostrar_Saludo(arg){
    let hora = arg.value.split(":");
    let ingresarHora = document.getElementById("saludo");

    if(hora > "12"){
        ingresarHora.innerHTML = "Buenas tardes profesor David";
        ingresarHora.classList.add("text-success");
    }else if(hora < "12"){
        ingresarHora.innerHTML = "Buenos dias profesor David";
        ingresarHora.classList.add("text-success");

    }

}