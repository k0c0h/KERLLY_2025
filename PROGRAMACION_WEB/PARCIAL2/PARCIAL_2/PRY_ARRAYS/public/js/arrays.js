let notasArray = [];

function leerNotas() {
    let texto = document.getElementById("notas").value;
    notasArray = texto.split(",").map(n => Number(n.trim()));
    mostrarLista();
    mostrarPromedio();
}

function agregarNota20() {
    notasArray.push(20);
    document.getElementById("notas").value = notasArray;
    mostrarLista();
    mostrarPromedio();
}

function mostrarLista() {
    let lista = document.getElementById("lista-notas");
    lista.innerHTML = "";

    for (let i = 0; i < notasArray.length; i++) {
        let li = document.createElement("li");
        li.textContent = "Nota: " + notasArray[i];
        li.className = "list-group-item";
        lista.appendChild(li);
    }
}

function mostrarPromedio() {
    let suma = 0;
    for (let i = 0; i < notasArray.length; i++) {
        suma += notasArray[i];
    }
    let promedio = notasArray.length > 0 ? (suma / notasArray.length).toFixed(2) : 0;
    document.getElementById("promedio").textContent = "Promedio: " + promedio;
}

