document.addEventListener("DOMContentLoaded", () => {
  const imagenTamaño = document.querySelectorAll(".foto");
  const overlay = document.getElementById("overlay");
  const imagenOverlay = document.querySelector(".galeriaFotos");

  const imagenes = [
    "images/Spinetta.jpg",
    "images/Goldin.jpg",
    "images/Calamaro.jpg",
    "images/Cerati.jpg",
    "images/Fito.jpg",
    "images/Mateos.jpg",
  ];

  let i = 0;

  // ==============================
  // EVENTO: CLICK EN MINIATURA
  // ==============================
  imagenTamaño.forEach((imagen) => {
    imagen.addEventListener("click", () => {
      // Cuando se hace clic en una imagen, se muestra en el overlay.
      const imagenSrc = imagen.getAttribute("src"); // Obtén la URL de la imagen clickeada

      // Cambia la imagen en el overlay.
      imagenOverlay.setAttribute("src", imagenSrc);

      // Muestra el overlay
      overlay.style.display = "grid"; // Muestra el overlay

      // Actualiza el índice de la imagen
      i = imagenes.indexOf(imagenSrc);
    });
  });

  // ==============================
  // EVENTO: CERRAR EL OVERLAY
  // ==============================
  overlay.addEventListener("click", (e) => {
    if (
      !e.target.closest(".galeriaFotos") && // Si el clic no fue sobre la imagen
      !e.target.closest(".btnIzq") &&       // Si el clic no fue sobre el botón izquierdo
      !e.target.closest(".btnDer")          // Si el clic no fue sobre el botón derecho
    ) {
      overlay.style.display = "none"; // Cierra el overlay
    }
  });

  // ==============================
  // FUNCIONES DE NAVEGACIÓN DE IMÁGENES
  // ==============================
  function previousChange() {
    i--;
    if (i < 0) {
      i = imagenes.length - 1; // Vuelve al final si pasa el inicio
    }
    imagenOverlay.setAttribute("src", imagenes[i]);
  }

  function nextChange() {
    i++;
    if (i >= imagenes.length) {
      i = 0; // Vuelve al inicio si pasa el final
    }
    imagenOverlay.setAttribute("src", imagenes[i]);
  }

  // ==============================
  // EVENTOS: BOTONES DE NAVEGACIÓN
  // ==============================
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
