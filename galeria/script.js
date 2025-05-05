const imagenTamaño = document.querySelectorAll(".foto")


imagenTamaño.forEach((imagen) => {
    imagen.addEventListener("click", () => {
        imagen.style.position = "fixed";
        imagen.style.top = "50%";
        imagen.style.left = "50%";
        imagen.style.transform = "translate(-50%, -50%)";
        imagen.style.zIndex = "999";
        imagen.style.width = "45vw";
    })
})
