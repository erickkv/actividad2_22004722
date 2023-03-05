let respuesta = document.getElementById('respuesta');

window.comunicacion.inicioCorrecto(function(event, args) {
    respuesta.innerHTML = args;
})
