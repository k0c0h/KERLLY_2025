let n_inicio = 0;
let n_final = 0;
let num_tabla=0;

function Capturar(arg){
    num_tabla=parseInt(arg.value);
    mostar_resultado(n_inicio,n_final,num_tabla); 
}

function pasarNumero(arg) {
    let id_elemento = arg.id;
    if (id_elemento == "txt_numero_inicio") {
        n_inicio = parseInt(arg.value);
    } else {
        n_final = parseInt(arg.value);
    }

    mostar_resultado(n_inicio, n_final, num_tabla);
}


$(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 100,
    from: 1,
    to: 20,
    grid: true,

    onStart: function (data) {
        mostar_resultado(data.from,data.to,num_tabla);
    },

    onChange: function (data) {
        mostar_resultado(data.from,data.to,num_tabla);
    }
});

function mostar_resultado(vi,vf,num_tabla){
    let ul_rango = document.getElementById("ul_rango");
        ul_rango.innerHTML ="";
        for (vi; vi <= vf; vi++) {
            let lista = document.createElement("li");
            lista.innerHTML = vi + "X" + num_tabla + "=" + (vi*num_tabla);
            ul_rango.appendChild(lista)
        }
}




