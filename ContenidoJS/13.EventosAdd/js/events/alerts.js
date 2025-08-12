"use strict";


function showSuccess(title = 'Éxito', text = '', timer = 2000) {
    Swal.fire({
        icon: 'success',
        title,
        text,
        showConfirmButton: false,
        timer
    });
}

function showError(title = 'Error', text = '') {
    Swal.fire({
        icon: 'error',
        title,
        text,
        confirmButtonText: 'Ok'
    });
}

function showWarning(title = 'Advertencia', text = '') {
    Swal.fire({
        icon: 'warning',
        title,
        text,
        confirmButtonText: 'Entendido'
    });
}

function showInfo(title = 'Información', text = '') {
    Swal.fire({
        icon: 'info',
        title,
        text
    });
}

function showConfirm(title = '¿Estás seguro?', text = '', confirmText = 'Sí', cancelText = 'No') {
    return Swal.fire({
        title,
        text,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: confirmText,
        cancelButtonText: cancelText
    });
}


async function pedirDatosConSweetAlert(data) {
    const { value: nota } = await Swal.fire({
        title: '¿Cuál es tu nombre?',
        input: 'number',
        inputPlaceholder: 'Escribe '+data,
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        inputValidator: (value) => {
            if (!value) {
                return 'Por favor escribe algo';
            }
        }
    });

    if (nombre) {
        Swal.fire(`Hola, ${nombre}`);
    }
}


export {
    showSuccess as ok,
    showError as error,
    showWarning as warning,
    showInfo as info,
    showConfirm as confirm
};
