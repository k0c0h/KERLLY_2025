// Cargar componentes comunes
fetch('footer.html')
    .then(res => res.text())
    .then(data => document.getElementById('footer').innerHTML = data);

fetch('topbar.html')
    .then(res => res.text())
    .then(data => document.getElementById('topbar').innerHTML = data);

fetch('sidebar.html')
    .then(res => res.text())
    .then(data => document.getElementById('sidebar').innerHTML = data);


// Función para cargar contenido de página
function cargarPaginas(url_pagina) {
    fetch(`paginas/${url_pagina}.html`)
        .then(res => res.text())
        .then(data => document.getElementById('main').innerHTML = data);
}

// Cargar una página por defecto
window.onload = () => cargarPaginas('index');
