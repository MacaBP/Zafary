const boton = window.document.querySelector('#boton');
boton.addEventListener('click', mostrarDatos); 

function mostrarDatos(){
    const input1= window.document.querySelector('#email');
    const input2 = window.document.querySelector('#contraseña');
    const textoInput = input1.value;
    const textoInput2 = input2.value; 

    input1.value = '';
    input1.focus(); 

    input2.value = '';
    input2.focus(); 

   
    if (textoInput === 'ejemplo@gmail.com' && textoInput2 === '123456'){
        console.log('Iniciando sesión...')    
    } 
    else {
        console.log('Email y/o contraseña incorrectos')
    }

   

}
