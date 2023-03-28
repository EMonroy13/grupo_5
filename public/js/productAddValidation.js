window.addEventListener("load", ()=>{
    
let formulario = document.querySelector(".form__upDate")
let ulErrores = document.querySelector(".ul_errores");

formulario.addEventListener("submit", (event)=>{

    formulario.productName.focus();
    let errors = [];
// ------------ nombre ----------
    if(formulario.productName.value == ""){
        errors.push("El campo de nombre es obligatorio")
        formulario.productName.classList.add("is-invalid")
    }
    else if (formulario.productName.value.length < 5){
errors.push("El nombre debe contener almenos 5 caracteres")
formulario.productName.classList.add("is-invalid")
    } else {
        formulario.productName.classList.remove("is-invalid")
        formulario.productName.classList.add("is-valid")
    }
//------------imagen -----------------

 if(!(formulario.image.file)){
        errors.push("Debe agregar una imagen")
        formulario.image.classList.add("is-invalid")
}

//------------ descripcion -----------------
if(formulario.description.value == ""){
    errors.push("El campo de descripcion es obligatorio")
    formulario.description.style.border = "1px solid #f00;"
}
else if (formulario.description.value.length < 20){
errors.push("La descripcion debe contener almenos 20 caracteres");
formulario.description.style.border = "1px solid #f00;"
} else {
    formulario.description.classList.add("is-valid")
    formulario.description.style.border = "1px solid #0f0;"
}
//-----------------categoria---------------
if(formulario.category.value == "0"){
    errors.push("Debe seleccionar una categoria")
    formulario.category.classList.add("is-invalid")
}else {
    formulario.category.classList.remove("is-invalid")
    formulario.category.classList.add("is-valid")
}

// ------------- precio -------------
if(formulario.price.value == ""){
    errors.push("Debe escribir el precio del producto")
    formulario.price.classList.add("is-invalid")
}
else if (formulario.price.value.length < 1){
errors.push("El precio debe contener almenos 1 cifra")
formulario.price.classList.add("is-invalid")
} else {
    formulario.price.classList.remove("is-invalid")
    formulario.price.classList.add("is-valid")
}

if (errors.length > 0) {

    event.preventDefault();
    
ulErrores.innerHTML = "";
    errors.forEach(error => {
        ulErrores.innerHTML += "<li style='color: #f00;'>" + error + "</li>"
    });
} else {
    ulErrores.innerHTML = "";
    formulario.submit();
}


})


})