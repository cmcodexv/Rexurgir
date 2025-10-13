// HEADER
const header = document.getElementById('header');

console.log('JS cargado correctamente');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
