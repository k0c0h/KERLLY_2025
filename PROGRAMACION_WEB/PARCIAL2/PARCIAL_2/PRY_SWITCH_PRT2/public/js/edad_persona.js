function calcularEdad(arg){
    let edad = arg.value;
/*     if(edad>=18){
        console.log("mayor edad");
    }else{
        console.log("menor edad");
    } */
   let m_edad = (edad>=18)? "MAYOR DE EDAD" : "MENOR DE EDAD";
   console.log(m_edad);
   
}