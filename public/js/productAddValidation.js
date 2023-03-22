window.addEventListener("load", ()=>{
    
let formulario = document.querySelector(".form__upDate")
let ulErrores = document.querySelector(".ul_errors");

formulario.addEventListener("submit", (event)=>{

    formulario.productName.focus();
    let errors = [];
// ------------ nombre ----------
    if(formulario.productName.value == ""){
        errors.push("El campo de nombre es obligatorio")
        formulario.productName.classList.add("is-invalid")
    }
    else if (formulario.productName.value < 5){
errors.push("El nombre debe contener almenos 5 caracteres")
formulario.productName.classList.add("is-invalid")
    } else {
        formulario.productName.classList.remove("is-invalid")
        formulario.productName.classList.add("is-Valid")
    }
//------------ descripcion -----------------
if(formulario.description.value == ""){
    errors.push("El campo de descripcion es obligatorio")
    formulario.description.classList.add("is-invalid")
}
else if (formulario.description.value < 20){
errors.push("El nombre debe contener almenos 20 caracteres")
formulario.description.classList.add("is-invalid")
} else {
    formulario.description.classList.remove("is-invalid")
    formulario.description.classList.add("is-Valid")
}
// ------------- precio -------------
if(formulario.price.value == ""){
    errors.push("El campo de descripcion es obligatorio")
    formulario.price.classList.add("is-invalid")
}
else if (formulario.price.value < 1){
errors.push("El nombre debe contener almenos 1 cifra")
formulario.price.classList.add("is-invalid")
} else {
    formulario.price.classList.remove("is-invalid")
    formulario.price.classList.add("is-Valid")
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