//Variables
const BtnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');
const BtnBorrar = document.querySelector('#resetBtn');

//Variables de campos

const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const er = 	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

eventListeners();

function eventListeners (){
    document.addEventListener('DOMContentLoaded', iniciarApp);

    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    //enviar formulario
    formulario.addEventListener('submit', enviarEmail);

}

//Funciones

//Deshabilitar boton de envio.

function iniciarApp(){
    BtnEnviar.disabled = true;
}

// Valida que el formulario este completo
function validarFormulario (e){
    if(e.target.value.length >0){

        //Elimina los mensajes de error
        const error= document.querySelector('p.error');
        if(error){
            error.remove();
        }
        
        e.target.classList.add('text-info');
    }
else{
    e.target.classList.add('bg-secondary');
    mostrarError('todos los campos son obligatorios');
    
    }

    if(e.target.type ==='email'){
    
     if(er.test(e.target.value)){
         const error= document.querySelector('p.error');
        if(error){
            error.remove();
        }

       e.target.classList.add('bg-secondary');
    
         }
     else{
       e.target.classList.add('bg-secondary');
    mostrarError('Email no valido');
    }
  }

  if(er.test(email.value) && asunto.value !=='' && mensaje.value !==''){
     BtnEnviar.disabled = false;
  }
  
}

function mostrarError(mensaje){
    const mensajeError= document.createElement('p');
    mensajeError.textContent= mensaje;
    mensajeError.classList.add('p-3', 'text-danger','text-center','error');
    formulario.appendChild(mensajeError);

    const errores= document.querySelectorAll('.error');
    if(errores.length === 0){
        formulario.appendChild(mensajeError);
    }
};

function enviarEmail(e){
    e.preventDefault();
   const spinner = document.querySelector('#spinner');
   spinner.style.display = 'flex';

// despues de 3 segundos se oculta spinner y mensaje
   setTimeout( ()=>{
   spinner.style.display= 'none';
   const mensajeEnviado = document.createElement('p');

   //mensaje de enviado correctamente
   mensajeEnviado.textContent = 'Su Consulta ha sido enviada satisfactoriamente!';
   mensajeEnviado.classList.add('text-info','p-3','text-center','bg-secondary');

   // se inserta el mensaje antes del spinner
   formulario.insertBefore(mensajeEnviado, spinner);

   setTimeout(() =>{
       mensajeEnviado.remove();
   resetearFormulario();
   }, 5000);

    }, 3000);
};

function resetearFormulario() {
    formulario.reset();
    iniciarApp();
};