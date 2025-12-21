const form = document.getElementById("form-contacto");
const estado = document.getElementById("estado-formulario");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = new FormData(form);

    fetch("/", {
        method: "POST",
        body: data,
        headers: { "Accept": "application/json" }
    })
        .then(response => {
            if (response.ok) {
                estado.textContent = "¡Mensaje enviado correctamente!";
                form.reset();
            } else {
                estado.textContent = "¡Error al enviar el mensaje!";
            }
        })
        .catch(() => {
            estado.textContent = "¡Error de conexión!";
        });
});
