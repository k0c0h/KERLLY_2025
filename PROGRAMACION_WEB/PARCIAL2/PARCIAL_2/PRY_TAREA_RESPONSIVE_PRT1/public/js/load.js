fetch('header.html')
    .then(res => res.text())
    .then(data => document.getElementById('header').innerHTML = data)

fetch('footer.html')
    .then(res => res.text())
    .then(data => document.getElementById('footer').innerHTML = data)


function cargarPaginas(url_pagina) {
    fetch(`paginas/${url_pagina}.html`)
        .then(res => res.text())
        .then(data => {
            document.getElementById('main').innerHTML = data;

            // 👇 Ejecuta inicializarCarrusel solo si es la página "materias"
            if (url_pagina === 'materias') {
                setTimeout(() => {
                    inicializarCarrusel();
                }, 0);
            }
        });
}


window.onload = () => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
        cargarPaginas(hash);
    } else {
        cargarPaginas('index');
    }
};
