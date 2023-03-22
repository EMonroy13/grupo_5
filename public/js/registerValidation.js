

window.addEventListener("load", ()=>{
    let formulario = document.querySelector(".datos-cliente")
    let ulErrores = document.querySelector(".ul__errores")
    formulario.addEventListener("submit", (event)=>{
        
        formulario.nombre.focus();
        
        let errors = [];
        
        // --------------- nombre ----------------
        if (formulario.nombre.value == ""){
            errors.push("El campo de nombre tiene que estar completo.")
             formulario.nombre.classList.add("is-invalid")
         } else if (formulario.nombre.value.length < 2 ){
             errors.push("El nombre debe tener al menos 2 caracteres");
             formulario.nombre.classList.add("is-invalid")
         } else {
            formulario.nombre.classList.remove("is-invalid");
            formulario.nombre.classList.add("is-valid")
         }
         // --------------- apellido----------------
         if (formulario.apellido.value == ""){
            errors.push("El campo de apellido tiene que estar completo.")
             formulario.apellido.classList.add("is-invalid")
         } else if (formulario.apellido.value.length < 2 ){
             errors.push("El apellido debe tener al menos 2 caracteres");
             formulario.apellido.classList.add("is-invalid")
         } else {
            formulario.apellido.classList.remove("is-invalid");
            formulario.apellido.classList.add("is-valid")
         }
        /*  if (formulario.imagenPerfil.value == ""){
            errors.push("El campo de apellido tiene que estar completo.")
             formulario.imagenPerfil.classList.add("is-invalid")
         } else if (formulario.apellido.value.length < 2 ){
             errors.push("El apellido debe tener al menos 2 caracteres");
             formulario.imagenPerfil.classList.add("is-invalid")
         } else {
            formulario.imagenPerfil.classList.remove("is-invalid");
         } */

         // --------------- correo ----------------
         let regEmail = /\S+@\S+\.\S+/;
         if (!regEmail.test(formulario.correo.value)) {
            errors.push("Debe ingresar un email válido");
            formulario.correo.classList.add("is-invalid");
        } else {
            formulario.correo.classList.remove("is-invalid");
            formulario.correo.classList.add("is-valid")
        };

        // --------------- password ----------------
        if (formulario.password.value == ""){
            errors.push("El campo del password tiene que estar completo.")
             formulario.password.classList.add("is-invalid")
         } else if (formulario.password.value.length < 8){
             errors.push("El password debe tener al menos 8 caracteres");
             formulario.password.classList.add("is-invalid")
         } else {
            formulario.password.classList.remove("is-invalid");
            formulario.password.classList.add("is-valid")
         }
         // --------------- repassword ----------------
         if (formulario.repassword.value == ""){
            errors.push("El campo tiene que estar completo.")
             formulario.repassword.classList.add("is-invalid")
         }else if (formulario.password.value != formulario.repassword.value){
            errors.push("Debe repetir la contraseña.")
             formulario.repassword.classList.add("is-invalid")
         }else {
            formulario.repassword.classList.remove("is-invalid");
            formulario.repassword.classList.add("is-valid")
         }
         
         // --------------- errores ----------------
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