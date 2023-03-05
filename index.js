let formulario = document.getElementById('form-login');

let nombre = document.getElementById('nombre-login');
let correo = document.getElementById('correo-login');
let pass = document.getElementById('pass-login');
let fechaNac = document.getElementById('fechaNac-login');
let adv1 = document.getElementById("adv1");
let adv2 = document.getElementById("adv2");
let adv3 = document.getElementById("adv3");
let adv4 = document.getElementById("adv4");

let expCorreo = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let expPass = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

formulario.addEventListener('submit', function(evento) {
    adv1.innerHTML = "";
    adv2.innerHTML = "";
    adv3.innerHTML = "";
    adv4.innerHTML = "";
    evento.preventDefault();
    let error = 0;
    if (nombre.value === "") {
        adv1.innerHTML ='debe introducir nombre';
        error = 1;
    }
    if (correo.value === "") {
        adv2.innerHTML = 'debe introducir un correo';
        error = 1;
    } else if (!correo.value.match(expCorreo)){
        adv2.innerHTML = 'el correo no es válido';
        error = 1;
    }
    if (pass.value === "") {
        adv3.innerHTML = 'debe introducir una contraseña'
        error = 1;
    } else if (!pass.value.match(expPass)) {
        adv3.innerHTML = 'contraseña debe tener mínimo 8 caracteres, incluir al menos 1 dígito, 1 mayúscula, 1 minúscula y 1 cáracter especial'
        error = 1;
    }
    if (fechaNac.value === "") {
        adv4.innerHTML = 'debe introducir fecha de nacimiento'
        error = 1;
    } else {
        let fechaIngresada = new Date(fechaNac.value)
        let fechaActual = new Date();
        if (fechaIngresada > fechaActual){
            adv4.innerHTML = 'La fecha no puede ser mayor a la fecha actual';
            error = 1;
        }
    }
    if (error === 0) {
        window.comunicacion.registroValido(nombre.value);
        window.comunicacion.usuarioRepetido(function(event, test) {
            if (test === false) {
                adv1.innerHTML = 'el nombre ya está en uso, por favor modifiquelo o elija otro';
            }
        });

    }
})
