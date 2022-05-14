const BtnEnviar = document.querySelector('#enviar');


//variables
function eventListenners(){
    document.addEventListener('DOMContentLoaded', iniciarApp);
}

function iniciarApp(){
    BtnEnviar.disabled = true;
    BtnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
};
