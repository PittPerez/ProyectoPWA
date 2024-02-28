// Obtener el botón desplegable y el menú contenido
const botonDesplegable = document.querySelector('.boton-desplegable');
const menuContenido = document.querySelector('.menu-contenido');

// Agregar un evento click al botón desplegable
botonDesplegable.addEventListener('click', function() {
    console.log("Clic en el botón desplegable"); // Verificar si se activa el evento click
    // Alternar la visibilidad del menú
    if (menuContenido.style.display === 'block') {
        menuContenido.style.display = 'none';
    } else {
        menuContenido.style.display = 'block';
    }
});

// Obtener todos los botones dentro del menú
const botonesMenu = document.querySelectorAll('.menu-contenido button');

// Agregar un evento click a cada botón del menú
botonesMenu.forEach(boton => {
    // Evitar que el clic en el botón cierre el menú
    boton.addEventListener('click', function(event) {
        event.stopPropagation(); // Evitar la propagación del evento
    });
});

// Agregar un evento click al documento para cerrar el menú si se hace clic fuera de él
document.addEventListener('click', function(event) {
    if (!menuContenido.contains(event.target) && event.target !== botonDesplegable) {
        menuContenido.style.display = 'none';
    }
});