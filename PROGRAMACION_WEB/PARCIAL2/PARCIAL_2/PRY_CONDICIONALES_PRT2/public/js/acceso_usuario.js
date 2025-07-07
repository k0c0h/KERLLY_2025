let nombre_usuario = "";
let estado_usuario = false;
const respuestaCorrecta = "azul"; 


function seleccionarUsuario(arg) {
    //capturar el valor seleccionado
    nombre_usuario = arg.value;
    let rad_activo = document.getElementById("radio_activo");
    let rad_inactivo = document.getElementById("radio_inactivo");

    //if para verificar que radio esta en checked
    if (rad_activo.checked) {
        estado_usuario = true;
    } else if (rad_inactivo.checked) {
        estado_usuario = false;
    } else {
        estado_usuario = false;
    }
    accesoSistema();
}

function seleccionarEstado(arg) {
    arg.value;
    console.log(arg.value)

    if(arg.value == "1"){
        estado_usuario = true;
    }else{
        estado_usuario=false;
    }
    console.log(estado_usuario);

    let usuario = document.getElementById("select_usuario");
    nombre_usuario = usuario.value;
    accesoSistema();
}

function accesoSistema(){

    let ingresar = document.getElementById("txt_resultado");
        //validacion para el acceso
    if (nombre_usuario == "admin") {
        if (estado_usuario == true) {
           ingresar.innerHTML = "ACCESO CONCEDIDO";
           ingresar.classList.add("text-success");
        } else {
            ingresar.innerHTML = "Hey, usuario admin, su estado es inactivo, porfavor cambie a activo";
            ingresar.classList.add("text-warning");
        }
    } else {
        ingresar.innerHTML = "ACCESO DENEGADO";
        ingresar.classList.add("text-danger");
    }
}

