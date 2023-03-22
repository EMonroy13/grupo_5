window.addEventListener("load", ()=>{
   let formulario = document.querySelector(".datos-login");
   let ulErrores = document.querySelector(".ul_errors");

   formulario.addEventListener("submit",(event)=>{

formulario.email.focus();
let errors =[];

// --------------- email ----------------
let regEmail = /\S+@\S+\.\S+/;
if (!regEmail.test(formulario.email.value)) {
    errors.push("Debe ingresar un email válido");
    formulario.email.classList.add("is-invalid");
} else {
    formulario.email.classList.remove("is-invalid")
    formulario.email.classList.add("is-valid")
   }

// --------------- contraseña ----------------
   
   if (formulario.password.value ==""){
    errors.push("El campo de contraseña es obligatorio")
    formulario.password.classList.add("is-invalid");
   } else {
    formulario.password.classList.remove("is.invalid")
    formulario.password.classList.add("is-valid")
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