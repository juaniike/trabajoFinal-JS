document.addEventListener("DOMContentLoaded", () => {
  const imagenTamaño = document.querySelectorAll(".foto");
  const overlay = document.getElementById("overlay");

  imagenTamaño.forEach((imagen) => {
    imagen.addEventListener("click", () => {
      const imagenCentrada = imagen.classList.contains("imagenCentrada");

      if (imagenCentrada) {
        imagen.classList.remove("imagenCentrada");
        overlay.classList.add("overlayGaleria");
      } else {
        document.querySelectorAll(".foto.imagenCentrada").forEach((imagen) => {
          imagen.classList.remove("imagenCentrada");
        });
        imagen.classList.add("imagenCentrada");
        overlay.classList.remove("overlayGaleria");
      }
    });
  });

  overlay.addEventListener("click", (e) => {
    if (
      !e.target.closest(".fotoContenedor") &&
      !e.target.closest(".btnIzq") &&
      !e.target.closest(".btnDer")
    ) {
      document
        .querySelector(".foto.imagenCentrada")
        ?.classList.remove("imagenCentrada");
      overlay.classList.add("overlayGaleria");
    }
  });

  ////////////////////////////////////////////////////////////////

  const imagen = document.querySelector(".galeriaFotos");
  const imagenes = [
    "images/Spinetta.jpg",
    "images/Goldin.jpg",
    "images/Calamaro.jpg",
    "images/Cerati.jpg",
    "images/Fito.jpg",
    "images/Mateos.jpg",
  ];

  let i = 0;

  function previousChange() {
    i--;
    if (i < 0) {
      i = imagenes.length - 1; // vuelve al final
    }
    imagen.setAttribute("src", imagenes[i]);
  }

  function nextChange() {
    i++;
    if (i >= imagenes.length) {
      i = 0; // vuelve al principio
    }
    imagen.setAttribute("src", imagenes[i]);
  }

  const botones = document.querySelectorAll("button");

  botones.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      if (btn.classList.contains("btnIzq")) {
        previousChange();
      } else {
        nextChange();
      }
    });
  });
});
