///objeto
let persona={
    nombre: "KERLLY",
    apellido: "CHIRIBOGA",
    edad: 21,
    musica_favorita: ["1","2","3","4"],
    saludar: function(){
        console.log("HOLA SOY " + this.nombre)
    }
}

persona.nombre = "ALEXANDRA";
persona.apellido = "CABRERA";
console.log(persona)
