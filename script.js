const pantalla = document.querySelector(".displayCalculadora")
const botones = document.querySelectorAll(".btn")

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent

        if(boton.id === "botonLimpiar"){
            pantalla.textContent = "0"
            return
        }   

        if(boton.id === "botonEliminar") {
            if(pantalla.textContent.length === 1 || pantalla.textContent === "Match Error") {
                pantalla.textContent = "0"
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1)
            }
            return
        }

        if(boton.id === "btnIgual") {
            try{
                pantalla.textContent = eval(pantalla.textContent)
            } catch {
                pantalla.textContent = "Match Error"
            }
            return
        }

        if((pantalla.textContent === "0") || (pantalla.textContent === "Match Error")) {
            pantalla.textContent = botonApretado
        } else {
            pantalla.textContent += botonApretado
        }

    })
    
});