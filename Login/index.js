const btnLogin = window.document.querySelector('#btn-login');
const msgError = document.querySelector('.error')
btnLogin.addEventListener('click', mostrarDatos); 

function mostrarDatos(){
    const inpUsarname = window.document.querySelector('#inp-usarname');
    const inpPassword = window.document.querySelector('#inp-password');
    const textoInput = inpUsarname.value;
    const textoInput2 = inpPassword.value; 
    

    if (!inpUsarname.value || !inpPassword.value)  return;

    inpUsarname.value = '';
    inpUsarname.focus(); 

    inpPassword.value = '';
    inpPassword.focus();

    if (textoInput === 'ejemplo@gmail.com' && textoInput2 === '123456'){
        console.log('Iniciando sesión...')    
        
        document.location.assign('../Layout/index.html');
    } 
    else {
        msgError.classList.remove('hide');
        msgError.classList.add('visible');
    }


}