fetch("data/data.json")
    .then(response => response.json())
    .then(data => {
        cargarHero(data.hero);
        cargarHistoria(data.historia);
        cargarDiscos(data.musica.discos);
        cargarContacto(data.contacto);
        cargarRedes(data.redes);
    })
    .catch(error => console.error("Error cargando JSON:", error));

function cargarHero(hero) {
    const video = document.getElementById("video-portada");
    const source = document.getElementById("video-source");

    if (video && source) {
        source.src = hero.video;
        video.load();
        video.play().catch(() => { });
    }
    const logo = document.getElementById("hero-imagen");
    if (logo) {
        logo.src = hero.imagen;
    }
}

function cargarHistoria(historia) {
    document.getElementById("historia-texto").innerHTML =
        historia.texto.replace(/\n/g, "<br>");
    document.getElementById("historia-imagen").src = historia.imagen;
}

function cargarDiscos(discos) {
    const grid = document.getElementById("grid-discos");

    discos.forEach(disco => {
        const div = document.createElement("div");
        div.classList.add("disco");

        div.innerHTML = `
      <a href="${disco.link}" target="_blank">
        <img src="${disco.imagen}" alt="${disco.titulo}">
        <p>${disco.titulo}</p>
      </a>
    `;

        grid.appendChild(div);
    });
}

function cargarContacto(contacto) {
    const logo = document.getElementById("logo-contacto");
    if (logo) {
        logo.src = contacto.logo;
    }
}

function cargarRedes(redes) {
    document.querySelectorAll(".social-link").forEach(link => {
        const red = link.dataset.red;
        if (redes[red]) {
            link.href = redes[red];
        }
    });
}



