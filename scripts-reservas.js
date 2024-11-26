document.addEventListener("DOMContentLoaded", () => {
    const formContacto = document.getElementById("form-reservas");
    const confirmacionContacto = document.getElementById("confirmacion-reservas");

    formContacto.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita el envío del formulario

        // Añade la clase para mostrar el mensaje con animación
        confirmacionContacto.style.display = "block";

        // Limpia los campos del formulario
        formContacto.reset();

        // Oculta el mensaje al finalizar la animación (4s)
        setTimeout(() => {
            confirmacionContacto.style.display = "none";
        }, 4000);
    });
});