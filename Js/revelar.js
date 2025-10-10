window.addEventListener('load', () => {
  const elementos = document.querySelectorAll('#historia .elemento');

  requestAnimationFrame(() => {
    elementos.forEach(el => el.classList.add('hidden'));
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('hidden');
      } else {
        entry.target.classList.add('hidden');
      }
    });
  }, { threshold: 0.1 });

  elementos.forEach(el => observer.observe(el));
});
