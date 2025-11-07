
document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".grid-discos");
     grid.scrollLeft = 0;
    const btnNext = document.querySelector(".btn-next");
    const btnPrev = document.querySelector(".btn-prev");

    // Solo activamos el scroll si existe (evita errores en desktop)
    if (grid && btnNext && btnPrev) {
        const scrollAmount = 300; // píxeles por clic

        btnNext.addEventListener("click", () => {
            grid.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });

        btnPrev.addEventListener("click", () => {
            grid.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        });
    }
});
