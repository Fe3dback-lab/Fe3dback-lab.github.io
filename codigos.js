document.getElementById('formulario-contacto').addEventListener('submit', function(event){
    event.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var apellidos = document.getElementById('apellidos').value;
    var correo = document.getElementById('correo').value;
    var mensaje = document.getElementById('mensaje').value;

    if (!nombre){
        alert('Por favor, ingresa tus nombres.');
        return;
    }
    if (!apellidos){
        alert('Por favor, ingresa tus apellidos.');
        return;
    }
    if (!correo){
        alert('Por favor, ingresa tu correo.');
        return;
    }
    if (!mensaje){
        alert('Por favor, ingresa tu mensaje.');
        return;
    }
    alert('Formulario enviado con éxito.');
});