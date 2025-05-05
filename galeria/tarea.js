const imagen = document.querySelector(".galeriaFotos")
const imagenes = ["images/Spinetta.jpg","images/Goldin.jpg","images/Calamaro.jpg","images/Cerati.jpg","images/Fito.jpg", "images/Mateos.jpg"]

let i = 0;

function previousChange() {
    i--;
    if (i < 0) {
        i = imagenes.length - 1; // vuelve al final
    }
    imagen.setAttribute('src', imagenes[i]);
}

function nextChange() {
    i++;
    if (i >= imagenes.length) {
        i = 0; // vuelve al principio
    }
    imagen.setAttribute('src', imagenes[i]);
}




function cambiarEstilo() {
    const texto = document.querySelector(".cambioDeEstilo")
    texto.style.color = "Red"
    texto.style.fontSize = "50px"
    texto.style.fontFamily = "Arial, sans-serif"
}