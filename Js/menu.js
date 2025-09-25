
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const icon = hamburger.querySelector('i');
const links = mobileMenu.querySelectorAll('a');

// Toggle menú
hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');

    const isOpen = mobileMenu.classList.contains('open');
    icon.classList.toggle('fa-bars', !isOpen);
    icon.classList.toggle('fa-xmark', isOpen);
});

// Cerrar menú al hacer clic en un enlace
links.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
    });
});
