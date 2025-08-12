"use strict";


function mostrarExitoso(title = 'Éxito', text = '', timer = 2000) {
    Swal.fire({
        icon: 'success',
        title,
        text,
        showConfirmButton: false,
        timer
    });
}

function mostrarError(title = 'Error', text = '') {
    Swal.fire({
        icon: 'error',
        title,
        text,
        confirmButtonText: 'exitoso'
    });
}

function mostrarAdvertencia(title = 'Advertencia', text = '') {
    Swal.fire({
        icon: 'warning',
        title,
        text,
        confirmButtonText: 'Entendido'
    });
}

function mostrarInfo(title = 'Información', text = '') {
    Swal.fire({
        icon: 'info',
        title,
        text
    });
}

function mostrarConfirmar(title = '¿Estás seguro?', text = '', confirmText = 'Sí', cancelText = 'No') {
    return Swal.fire({
        title,
        text,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: confirmText,
        cancelButtonText: cancelText
    });
}



export {
    mostrarExitoso as exitoso,
    mostrarError as error,
    mostrarAdvertencia as advertencia,
    mostrarInfo as Información,
    mostrarConfirmar as confirmacion,
};
