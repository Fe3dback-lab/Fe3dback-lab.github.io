document.getElementById('formulario').addEventListener('submit', function(event){
    event.preventDefault();
    const nombre=document.getElementById('primer-nombre').value;
    const snombre=document.getElementById('segundo-nombre').value;
    const apellido=document.getElementById('apellidos').value;
    const sapellido=document.getElementById('segundo-apellido').value;
    const fecha=document.getElementById('fecha').value;
    const dni=document.getElementById('dni').value;
    const primerNombre=nombre +' '+snombre+' '+apellido+' '+sapellido;
    const ultimoDigitoDNI=dni.slice(-1);
    const edad = calcularEdad(fecha);
    document.getElementById('result').innerHTML=`
        <p>Nombre completo:</p>
        <br>
        <div class="cuadro">${primerNombre}</div>
        <p>Último dígito del DNI:</p>
        <br>
        <div class="cuadro">${ultimoDigitoDNI}</div>
        <p>Edad:</p>
        <br>
        <div class="cuadro">${edad} años</div>
    `;
});
function calcularEdad(fechaNacimiento){
    const hoy=new Date();
    const nacimiento=new Date(fechaNacimiento);
    let edad=hoy.getFullYear()-nacimiento.getFullYear();
    const mes=hoy.getMonth()-nacimiento.getMonth();
    return edad;
}