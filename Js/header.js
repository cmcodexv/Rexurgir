// HEADER
const header = document.getElementById('header');

function actualizarHeader() {
    const primeraSeccion = document.querySelector('section:first-of-type');

    // Solo hacemos transparente si estamos al inicio de la primera sección
    if (primeraSeccion && window.scrollY === 0) {
        header.classList.add('transparent');
    } else {
        header.classList.remove('transparent');
    }
}

// Inicial al cargar la página
document.addEventListener('DOMContentLoaded', actualizarHeader);

// Al hacer scroll
let tomar = false;
window.addEventListener('scroll', () => {
    if (!tomar) {
        window.requestAnimationFrame(() => {
            actualizarHeader();
            tomar = false;
        });
        tomar = true;
    }
});
