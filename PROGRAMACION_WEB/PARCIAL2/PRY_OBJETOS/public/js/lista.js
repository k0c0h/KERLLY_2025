let estudiantes = [
    {
        nombre: "ALISON",
        apellido: "AYO",
        edad: 20,
        saludar: function(){
            console.log("HOLA SOY " + this.nombre + this.apellido)
        }
    },
    {
        nombre: "JOSUE",
        apellido: "SOLANO",
        edad: 20,
        saludar: function(){
            console.log("HOLA SOY " + this.nombre + this.apellido)
        }
    },
    {
        nombre: "ALEXANDER",
        apellido: "TOAPANTA",
        edad: 20,
        saludar: function(){
            console.log("HOLA SOY" +this.nombre+ " " +this.apellido)
        }
    }
];

console.log(estudiantes[0].saludar())

//programa para gestionar administracion de estudiantes, ingreso de tres notas y se saca el promedio