window.addEventListener("load", ()=>{
    let botonBurger = document.querySelector(".menu-burger")
    let nabInferior = document.querySelector(".header__nav-inferior")
    botonBurger.addEventListener("click",()=>{
     nabInferior.classList.toggle("nav-inferior-show")
     })   
 })