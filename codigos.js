document.querySelectorAll('img').forEach(img => {
    img.style.transition = 'transform 0.3s';
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.1)';
    });
    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
    });
});

document.querySelectorAll('li').forEach(button => {
    button.style.transition = 'background-color 0.3s, transform 0.3s';
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = 'blue';
        button.style.transform = 'scale(1.1)';
    });
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '';
        button.style.transform = 'scale(1)';
    });
});

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
    const confirmacion = `¿Son correctos estos datos?\n\nNombre Completo: ${nombre} ${apellidos}\nCorreo: ${correo}`;
                if (confirm(confirmacion)){
                    alert("Formulario enviado correctamente.");
                    formulario.submit();
                } 
                else{
                    alert("Por favor, revisa tus datos y corrige cualquier error.");
                }
    alert('Formulario enviado con éxito.');
});
