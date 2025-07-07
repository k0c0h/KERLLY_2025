function checkNombre(arg) {
  let nombre = arg.value;
  let feedback = document.getElementById('nombreFeedback');
  if (nombre.length < 3) {
    feedback.innerHTML = "Nombre muy corto";
    feedback.classList.add("text-danger");
  } else {
    feedback.innerHTML = "Nombre válido";
    feedback.classList.add("text-success");
  }
}

function focusNombre(arg) {
  arg.style.backgroundColor = '#fff9c4';
}

function blurNombre(arg) {
  arg.style.backgroundColor = '';
  checkNombre(arg);
}

function keydownNombre(arg) {
  if (arg.value.length > 10) {
    document.getElementById('nombreFeedback').innerHTML = "Máximo 10 caracteres";
    document.getElementById('nombreFeedback').classList.add("text-danger");
  }
}

function checkEmail(arg) {
  let email = arg.value;
  let feedback = document.getElementById('emailFeedback');
  if (email.includes('@')) {
    feedback.innerHTML = "Correo válido";
    feedback.classList.add("text-success");
  } else {
    feedback.innerHTML = "Correo no válido";
    feedback.classList.add("text-danger");
  }
}

function checkEdad(arg) {
  let edad = arg.value;
  let feedback = document.getElementById('edadFeedback');
  if (edad >= 18) {
    feedback.innerHTML = "Eres mayor de edad";
    feedback.classList.add("text-success");
  } else {
    feedback.innerHTML = "Eres menor de edad. Debes ser mayor de 18 años";
    feedback.classList.add("text-danger");
  }
}

function checkContrasena(arg) {
  let contrasena = arg.value;
  let feedback = document.getElementById('contrasenaFeedback');
  if (contrasena.length < 6) {
    feedback.innerHTML = "Contraseña corta";
    feedback.classList.add("text-danger");
  } else {
    feedback.innerHTML = "Contraseña segura";
    feedback.classList.add("text-success");
  }
}

function checkTelefono(arg) {
  let telefono = arg.value;
  let feedback = document.getElementById('telefonoFeedback');
  if (telefono.length < 10) {
    feedback.innerHTML = "Teléfono corto";
    feedback.classList.add("text-danger");
  } else {
    feedback.innerHTML = "Teléfono válido";
    feedback.classList.add("text-success");
  }
}

function checkWebsite(arg) {
  let website = arg.value;
  let feedback = document.getElementById('websiteFeedback');
  if (website.includes('.com')) {
    feedback.innerHTML = "URL válida";
    feedback.classList.add("text-success");
  } else {
    feedback.innerHTML = "URL no válida";
    feedback.classList.add("text-danger");
  }
}

function checkIntereses(arg) {
  let checks = document.querySelectorAll('input[type="checkbox"]:checked');
  let feedback = document.getElementById('interesesFeedback');
  if (checks.length > 0) {
    feedback.innerHTML = "Intereses seleccionados: " + checks.length;
    feedback.classList.add("text-success");
  } else {
    feedback.innerHTML = "Selecciona al menos uno";
    feedback.classList.add("text-danger");
  }
}

function checkComentario(arg) {
  let comentario = arg.value;
  let feedback = document.getElementById('comentarioFeedback');
  if (comentario.length > 50) {
    feedback.innerHTML = "Máximo 50 caracteres";
    feedback.classList.add("text-danger");
  } else {
    feedback.innerHTML = "Todo bien";
    feedback.classList.add("text-success");
  }
}

function checkFecha(arg) {
  let fecha = new Date(arg.value);
  let hoy = new Date();
  let feedback = document.getElementById('fechaFeedback');
  if (fecha < hoy) {
    feedback.innerHTML = "Fecha pasada";
    feedback.classList.add("text-danger");
  } else {
    feedback.innerHTML = "Fecha válida";
    feedback.classList.add("text-success");
  }
}

function checkHora(arg) {
  let hora = arg.value;
  let feedback = document.getElementById('horaFeedback');
  if (hora < "09:00") {
    feedback.innerHTML = "Hora mínima 09:00";
    feedback.classList.add("text-danger");
  } else {
    feedback.innerHTML = "Hora válida";
    feedback.classList.add("text-success");
  }
}

function checkArchivo(arg) {
  let feedback = document.getElementById('archivoFeedback');
  if (arg.files.length > 0) {
    feedback.innerHTML = "Archivo subido: " + arg.files[0].name;
    feedback.classList.add("text-success");
  } else {
    feedback.innerHTML = "Sube un archivo";
    feedback.classList.add("text-danger");
  }
}

function checkSatisfaccion(arg) {
  let valor = arg.value;
  let feedback = document.getElementById('satisfaccionValor');
  if (valor < 5) {
    feedback.innerHTML = valor + " (Bajo)";
    feedback.classList.add("text-danger");
  } else {
    feedback.innerHTML = valor + " (Bueno)";
    feedback.classList.add("text-success");
  }
}

function checkColor(arg) {
  document.body.style.backgroundColor = arg.value;
}

function checkEntrada(arg) {
  let feedback = document.getElementById('entradaFeedback');
  if (arg.value === 'vip') {
    feedback.innerHTML = "Entrada VIP";
    feedback.classList.add("text-success");
  } else {
    feedback.innerHTML = "Entrada General";
    feedback.classList.add("text-info");
  }
}

function checkPais(arg) {
  let feedback = document.getElementById('paisFeedback');
  if (arg.value) {
    feedback.innerHTML = "País: " + arg.options[arg.selectedIndex].text;
    feedback.classList.add("text-success");
  } else {
    feedback.innerHTML = "Selecciona un país";
    feedback.classList.add("text-danger");
  }
}

function mostrarFoto(event) {
  const file = event.target.files[0];
  const vista = document.getElementById('vistaFoto');
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      vista.innerHTML = `<img src="${e.target.result}" class="img-thumbnail" width="150">`;
    };
    reader.readAsDataURL(file);
  }
}

function submitForm(event) {
  event.preventDefault();

  const campos = [
    'nombre', 'email', 'edad', 'contrasena', 'telefono', 'website', 'comentario',
    'fecha', 'hora', 'archivo', 'satisfaccion', 'color', 'pais'
  ];
  let faltantes = campos.filter(id => !document.getElementById(id).value);

  let intereses = ['htmlCheck', 'cssCheck', 'jsCheck'].some(id => document.getElementById(id).checked);
  let entrada = document.querySelector('input[name="entrada"]:checked');

  if (faltantes.length === 0 && intereses && entrada) {
    document.getElementById('mensajeFinal').innerHTML = "¡Formulario enviado! ✅";
    document.getElementById('mensajeFinal').className = "text-success";
    document.getElementById('verDatosContainer').style.display = 'block';
  } else {
    document.getElementById('mensajeFinal').innerHTML = "Faltan datos obligatorios";
    document.getElementById('mensajeFinal').className = "text-danger";
  }
}

function mostrarDatosIngresados() {
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const edad = document.getElementById('edad').value;
  const telefono = document.getElementById('telefono').value;
  const comentario = document.getElementById('comentario').value;
  const pais = document.getElementById('pais').options[document.getElementById('pais').selectedIndex].text;

  let intereses = [];
  if (document.getElementById('htmlCheck').checked) intereses.push("Lectura");
  if (document.getElementById('cssCheck').checked) intereses.push("Escritura");
  if (document.getElementById('jsCheck').checked) intereses.push("Talleres");

  const contenedor = document.getElementById('datosIngresados');
  contenedor.innerHTML = `
                <h3>Datos Ingresados</h3>
                <p><strong>Nombre:</strong> ${nombre}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Edad:</strong> ${edad}</p>
                <p><strong>Teléfono:</strong> ${telefono}</p>
                <p><strong>Comentario:</strong> ${comentario}</p>
                <p><strong>Fecha:</strong> ${document.getElementById('fecha').value}</p>
                <p><strong>Hora:</strong> ${document.getElementById('hora').value}</p>
                <p><strong>País:</strong> ${pais}</p>
                <p><strong>Intereses:</strong> ${intereses.join(', ')}</p>
            `;
}

function clickBtnExtra() {
  let mensaje = document.getElementById('mensajeFinal');
  if (confirm('¿Más info?')) {
    mensaje.innerHTML = "Visita www.biblioteca2025.com";
    mensaje.className = "text-success";
  } else {
    mensaje.innerHTML = "Ok, sigue registrándote";
    mensaje.className = "text-info";
  }
}