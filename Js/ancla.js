// // Para setear la variable desde el inicio
// function actualizarHeaderHeight() {
//     const header = document.querySelector('header');
//     const headerHeight = header ? header.offsetHeight : 0;
//     document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
// }

// window.addEventListener('DOMContentLoaded', actualizarHeaderHeight);
// window.addEventListener('resize', actualizarHeaderHeight);

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const id = link.getAttribute('href');
        const target = document.querySelector(id);
        if (!target) return;

        // Elimina la clase activo de cualquier otra sección
        document.querySelectorAll('.seccion.activo').forEach(sec => {
            sec.classList.remove('activo');
        });

        // Añade la clase activo a la sección seleccionada
        target.classList.add('activo');

        // Calcula la altura del header dinámicamente
        const header = document.querySelector('header'); // ajusta si tu header tiene otra clase o id
        const headerHeight = header ? header.offsetHeight : 0;

        // Scroll suave hasta la posición del elemento menos la altura del header
        const top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top, behavior: 'smooth' });

        // Función que restaura el estado original al hacer scroll
        const restore = () => {
            target.classList.remove('activo');
            window.removeEventListener('scroll', restore);
        };

        // Cuando el usuario haga scroll, restaurar el sticky normal
        window.addEventListener('scroll', restore);

        // Restaurar automáticamente después de 1s (por si no hace scroll)
        setTimeout(restore, 1000);
    });
});
