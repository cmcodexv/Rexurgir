const section = document.querySelector('.musica');

function ajustarAltura() {
    const vh = window.innerHeight; // altura real del viewport

    const minHeight = 1285; // altura mínima de la sección
    const maxHeight = 5000; // altura máxima de la sección

    // factor de escala: por ejemplo 1.5 para que sea 150% del viewport
    let nuevaAltura = vh * 1.5;

    // limitar dentro de min y max
    nuevaAltura = Math.max(minHeight, Math.min(maxHeight, nuevaAltura));

    section.style.height = `${nuevaAltura}px`;
}

// Ejecutar al cargar y al redimensionar
ajustarAltura();
window.addEventListener('resize', ajustarAltura);

