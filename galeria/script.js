document.addEventListener("DOMContentLoaded", () => {
  const imagenTamaño = document.querySelectorAll(".foto");

  imagenTamaño.forEach((imagen) => {
    imagen.addEventListener("click", () => {
      const imagenCentrada = imagen.style.position === "fixed";

      if (imagenCentrada) {
        imagen.style.position = "";
        imagen.style.top = "";
        imagen.style.left = "";
        imagen.style.transform = "";
        imagen.style.zIndex = "";
        imagen.style.width = "";
      } else {
        imagen.style.position = "fixed";
        imagen.style.top = "50%";
        imagen.style.left = "50%";
        imagen.style.transform = "translate(-50%, -50%)";
        imagen.style.zIndex = "999";
        imagen.style.width = "45vw";
      }
    });
  });
});
