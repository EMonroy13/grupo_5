window.addEventListener("load" ,()=> {


    const formulario = document.getElementById("formulario")
    const inputs = document.querySelectorAll("#formulario input")

const expresiones = {
    nombre: /^[a-zA-ZÁ-ÿ\s]{3,20}$/, // el nombre debe contener Letras, tambien pueden llevar acentos y espacios 5 a 20 caracteres
    apellido: /^[a-zA-ZÁ-ÿ\s]{3,20}$/, // Letras y espacios, tambien pueden llevar acentos 5 a 40 caracteres
    correo: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/, // email valido
    password: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/ ,  //"El password debe contener almenos una mayuscula, un numero,y debe tener de 8 a 16 caracteres."
    password2: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/ // de 8 a 16 digitos 
}
const campos = {
    nombre: false,
    apellido: false,
    correo: false, 
    password: false
}

 const mensajeError = {
    nombre: "El nombre no puede contener caracteres especiales o numeros,y debe tener de 3 a 20 letras.",
    apellido: "El apellido no puede contener caracteres especiales o numeros,y debe tener de 3 a 20 letras.",
    correo: "Debe ingresar un email válido.",
    password: "El password debe contener almenos una mayuscula, un numero,y debe tener de 8 a 16 caracteres.",
    repassword: "Debe repetir la contraseña."
 }

const validarFormulario = (event) => {
    // console.log(event.target.name);

switch(event.target.name){
    case "nombre": 
    validarCampo(expresiones.nombre, event.target, "nombre", "error1", mensajeError.nombre,"nombre")
    break;
    case "apellido": 
    validarCampo(expresiones.apellido, event.target, "apellido", "error2", mensajeError.apellido, "apellido")
    case "imagenPerfil": 
    
    
    break;
    case "correo": 
    validarCampo(expresiones.correo, event.target, "correo", "error4", mensajeError.correo, "correo")

    break;
    case "password": 
    validarCampo(expresiones.password, event.target, "password", "error5", mensajeError.password, "password")
    validarPassword2();
    break;
    case "password2": 
    validarCampo(expresiones.password2, event.target, "password2", "error6", mensajeError.repassword, "repassword")
    validarPassword2();
    break; 
}
}
// validacion de campos 
const validarCampo = (expresion, input, campo, error, mensajeError,simboloCheck) =>{
    if (expresion.test(input.value)){ 
        document.getElementById(`grupo__${campo}`).classList.remove('is-invalid')
        document.getElementById(`grupo__${campo}`).classList.add('is-valid')
        document.querySelector(`.formulario__input-${error}`).style.display = "none"
        document.querySelector(`.check-error_${simboloCheck}`).style.display = "none"
        document.querySelector(`.check-ok_${simboloCheck}`).style.display = "block"
        campos[`${campo}`] = true;  
    }
    else {
        document.getElementById(`grupo__${campo}`).classList.add('is-invalid')
        document.getElementById(`grupo__${campo}`).classList.remove('is-valid')
        document.querySelector(`.formulario__input-${error}`).style.display = "block"
        document.querySelector(`.formulario__input-${error}`).innerHTML = mensajeError
        document.querySelector(`.check-error_${simboloCheck}`).style.display = "block"
        document.querySelector(`.check-ok_${simboloCheck}`).style.display = "none"
        campos[`${campo}`] = false; 
    }
}

// validacion de repassword 



const validarPassword2 = () => {
    const  inputPassword1 = document.getElementById("grupo__password")
    const  inputPassword2 = document.getElementById("grupo__password2")

    if (inputPassword1.value !== inputPassword2.value){
        document.getElementById(`grupo__password2`).classList.add('is-invalid')
        document.getElementById(`grupo__password2`).classList.remove('is-valid')
        document.querySelector(`.formulario__input-${error}`).style.display = "block"
        document.querySelector(`.formulario__input-${error}`).innerHTML = mensajeError
        document.querySelector(`.check-error_${simboloCheck}`).style.display = "none"
        document.querySelector(`.check-ok_${simboloCheck}`).style.display = "block"
        campos.password = false; 
    } else {
        document.getElementById(`grupo__password2`).classList.remove('is-invalid')
        document.getElementById(`grupo__password2`).classList.add('is-valid')
        document.querySelector(`.formulario__input-${error}`).style.display = "none"
        document.querySelector(`.check-error_${simboloCheck}`).style.display = "none"
        document.querySelector(`.check-ok_${simboloCheck}`).style.display = "block"
        campos.password = true; 
    }
}


inputs.forEach(input => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", (e)=>{
e.preventDefault();
if(campos.nombre && campos.apellido && campos.correo && campos.password && campos.password2 == true){
formulario.submit()
// console.log("el formulario se envio")
} else {
    
}

})






















//                   


    // let ulErrores = document.querySelector(".ul__errores")
    // formulario.addEventListener("submit", (event)=>{
        
    //     formulario.nombre.focus();
        
    //     let errors = [];
        
    //     // --------------- nombre ----------------
    //     if (formulario.nombre.value == ""){
    //         errors.push("El campo de nombre tiene que estar completo.")
    //          formulario.nombre.classList.add("is-invalid")
    //      } else if (formulario.nombre.value.length < 2 ){
    //          errors.push("El nombre debe tener al menos 2 caracteres");
    //          formulario.nombre.classList.add("is-invalid")
    //      } else {
    //         formulario.nombre.classList.remove("is-invalid");
    //         formulario.nombre.classList.add("is-valid")
    //      }
    //      // --------------- apellido----------------
    //      if (formulario.apellido.value == ""){
    //         errors.push("El campo de apellido tiene que estar completo.")
    //          formulario.apellido.classList.add("is-invalid")
    //      } else if (formulario.apellido.value.length < 2 ){
    //          errors.push("El apellido debe tener al menos 2 caracteres");
    //          formulario.apellido.classList.add("is-invalid")
    //      } else {
    //         formulario.apellido.classList.remove("is-invalid");
    //         formulario.apellido.classList.add("is-valid")
    //      }
    //     /*  if (formulario.imagenPerfil.value == ""){
    //         errors.push("El campo de apellido tiene que estar completo.")
    //          formulario.imagenPerfil.classList.add("is-invalid")
    //      } else if (formulario.apellido.value.length < 2 ){
    //          errors.push("El apellido debe tener al menos 2 caracteres");
    //          formulario.imagenPerfil.classList.add("is-invalid")
    //      } else {
    //         formulario.imagenPerfil.classList.remove("is-invalid");
    //      } */

    //      // --------------- correo ----------------
    //      let regEmail = /\S+@\S+\.\S+/;
    //      if (!regEmail.test(formulario.correo.value)) {
    //         errors.push("Debe ingresar un email válido");
    //         formulario.correo.classList.add("is-invalid");
    //     } else {
    //         formulario.correo.classList.remove("is-invalid");
    //         formulario.correo.classList.add("is-valid")
    //     };

    //     // --------------- password ----------------
    //     if (formulario.password.value == ""){
    //         errors.push("El campo del password tiene que estar completo.")
    //          formulario.password.classList.add("is-invalid")
    //      } else if (formulario.password.value.length < 8){
    //          errors.push("El password debe tener al menos 8 caracteres");
    //          formulario.password.classList.add("is-invalid")
    //      } else {
    //         formulario.password.classList.remove("is-invalid");
    //         formulario.password.classList.add("is-valid")
    //      }
    //      // --------------- repassword ----------------
    //      if (formulario.repassword.value == ""){
    //         errors.push("El campo tiene que estar completo.")
    //          formulario.repassword.classList.add("is-invalid")
    //      }else if (formulario.password.value != formulario.repassword.value){
    //         errors.push("Debe repetir la contraseña.")
    //          formulario.repassword.classList.add("is-invalid")
    //      }else {
    //         formulario.repassword.classList.remove("is-invalid");
    //         formulario.repassword.classList.add("is-valid")
    //      }
         
    //      // --------------- errores ----------------
    //      if (errors.length > 0) {

    //         event.preventDefault();
    //     ulErrores.innerHTML = "";
    //         errors.forEach(error => {
    //             ulErrores.innerHTML += "<li style='color: #f00;'>" + error + "</li>"
    //         });
    //     } else {
    //         ulErrores.innerHTML = "";
    //         formulario.submit();
    //     }
    // })
})
