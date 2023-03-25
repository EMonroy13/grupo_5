window.addEventListener("load", ()=>{
   let botonIzq = document.querySelector(".boton-izq-UA");
   let botonDer = document.querySelector(".boton-der-UA");
   let carrusel = document.querySelector(".ultimos-ingresos__contenedor")
   
   botonDer.addEventListener("click",()=>{
        carrusel.classList.add("ultimos-ingresos__carrusel")
        botonDer.style.display = "none"
        botonIzq.style.display = "block"
        botonIzq.addEventListener("click",()=>{
            carrusel.classList.remove("ultimos-ingresos__carrusel")
            botonIzq.style.display = "none"
            botonDer.style.display = "block"
        })
   })
   
})