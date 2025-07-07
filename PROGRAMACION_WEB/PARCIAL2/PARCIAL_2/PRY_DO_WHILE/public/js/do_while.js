let n_inicio = 0;
let n_final = 0;
let num_tabla = 0;

function Capturar(arg) {
    num_tabla = parseInt(arg.value);
    mostrar_resultado(n_inicio, n_final, num_tabla);
}

function pasarNumero(arg) {
    let id_elemento = arg.id;
    if (id_elemento === "txt_numero_inicio") {
        n_inicio = parseInt(arg.value);
    } else {
        n_final = parseInt(arg.value);
    }

    mostrar_resultado(n_inicio, n_final, num_tabla);
}

$(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 100,
    from: 1,
    to: 20,
    grid: true,

    onStart: function (data) {
        n_inicio = data.from;
        n_final = data.to;
        mostrar_resultado(n_inicio, n_final, num_tabla);
    },

    onChange: function (data) {
        n_inicio = data.from;
        n_final = data.to;
        mostrar_resultado(n_inicio, n_final, num_tabla);
    }
});

function mostrar_resultado(vi, vf, num_tabla) {
    if (isNaN(num_tabla) || isNaN(vi) || isNaN(vf)) return;

    let ul_rango = document.getElementById("ul_rango");
    ul_rango.innerHTML = "";

    if (vi > vf) return; 

    do {
        let li = document.createElement("li");
        li.textContent = `${vi} x ${num_tabla} = ${vi * num_tabla}`;
        li.className = "list-group-item bg-secondary text-white";
        ul_rango.appendChild(li);
        vi++;
    } while (vi <= vf);
}
