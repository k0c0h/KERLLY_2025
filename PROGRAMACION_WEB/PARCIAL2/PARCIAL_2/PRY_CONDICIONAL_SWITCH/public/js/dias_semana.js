function seleccionarDia(arg){
    let dia_semana = arg.value;
    let respuesta = document.getElementById("txt_respuesta");

    switch (dia_semana) {
        case "lunes":
            respuesta.innerHTML = "Ha seleccionado el día " + dia_semana;
            respuesta.classList.add("text-success");
            break;
        case "martes":
            respuesta.innerHTML = "Ha seleccionado el día " + dia_semana;
            respuesta.classList.add("text-danger");
            break;
        case "miercoles":
            respuesta.innerHTML = "Ha seleccionado el día " + dia_semana;
            respuesta.classList.add("text-primary");
            break;
        case "jueves":
            respuesta.innerHTML = "Ha seleccionado el día " + dia_semana;
            respuesta.classList.add("text-secondary");
            break;
        case "viernes":
            respuesta.innerHTML = "Ha seleccionado el día " + dia_semana;
            respuesta.classList.add("text-warning");
            break;
        case "sabado":
            respuesta.innerHTML = "Ha seleccionado el día " + dia_semana;
            respuesta.classList.add("text-info");
            break;
        case "domingo":
            respuesta.innerHTML = "Ha seleccionado el día " + dia_semana;
            respuesta.classList.add("text-success");
            break;    
        default:
            respuesta.innerHTML = "";
            break;
    }

}