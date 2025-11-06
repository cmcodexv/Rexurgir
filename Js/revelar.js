// REVELAR ELEMENTOS

window.addEventListener('DOMContentLoaded', () => {
  const elementos = document.querySelectorAll('.elemento');

  // Oculta todos al inicio
  elementos.forEach(el => el.classList.add('hidden'));

  const observador = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.target.classList.toggle('hidden', !entry.isIntersecting);
    });
  }, { threshold: 0.1 });

  elementos.forEach(el => observador.observe(el));
});

