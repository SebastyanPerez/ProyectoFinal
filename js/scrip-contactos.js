function validateForm() {
    // Limpiar mensajes de error previos
    let errorMessages = [];
    
    // Obtener los valores de los campos del formulario
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validación de Nombre
    if (name === '') {
        errorMessages.push('El campo "Nombre" es obligatorio.');
    }
    
    // Validación de Correo Electrónico
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === '') {
        errorMessages.push('El campo "Correo electrónico" es obligatorio.');
    } else if (!emailPattern.test(email)) {
        errorMessages.push('Por favor ingrese un correo electrónico válido.');
    }
    
    // Validación de Asunto
    if (subject === '') {
        errorMessages.push('El campo "Asunto" es obligatorio.');
    }
    
    // Validación de Mensaje
    if (message === '') {
        errorMessages.push('El campo "Mensaje" es obligatorio.');
    }
    
    // Mostrar los mensajes de error si hay alguno
    if (errorMessages.length > 0) {
        alert(errorMessages.join('\n'));  // Muestra los errores en un alert
        return false;  // Previene el envío del formulario
    }
    
    // Si la validación es exitosa, mostrar el modal de éxito
    const successModal = new bootstrap.Modal(document.getElementById('successModal'));
    successModal.show();
    
    // Limpiar los campos del formulario
    document.getElementById('contactForm').reset();
    
    return false;  // Evita el envío real para que se vea el modal (en un caso real, deberías usar return true)
}
