window.addEventListener("load", ()=>{
    let botonBurger = document.querySelector(".menu-burger")
    let nabInferior = document.querySelector(".header__nav-inferior")
    let botonPerfil = document.querySelector(".boton-perfil");
    let infoPerfil = document.querySelector(".datos-contenedor")
    botonBurger.addEventListener("click",()=>{
     nabInferior.classList.toggle("nav-inferior-show")
     })   

     botonPerfil.addEventListener("click",()=>{
    infoPerfil.classList.toggle("show__perfil-contenedor")
    })   
})
