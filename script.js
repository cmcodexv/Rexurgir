const musica = document.querySelector('#musica');
const sticky = musica.querySelector('.sticky-content');

function updateSticky() {
    const rect = musica.getBoundingClientRect();

    // dentro del área donde debe ser sticky
    if (rect.top <= 0 && rect.bottom > window.innerHeight) {
        sticky.style.position = 'fixed';
        sticky.style.top = '0';
    }
    // cuando la sección está saliendo por abajo
    else if (rect.bottom <= window.innerHeight) {
        sticky.style.position = 'absolute';
        sticky.style.top = (musica.offsetHeight - sticky.offsetHeight) + 'px';
    }
    // cuando está entrando
    else {
        sticky.style.position = 'relative';
        sticky.style.top = '0';
    }
}

window.addEventListener('scroll', updateSticky);
updateSticky();
