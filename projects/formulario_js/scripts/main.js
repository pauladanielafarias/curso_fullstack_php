var form = document.getElementById('form');
var user = document.getElementById('user');
var password = document.getElementById('password');

//la funcion valida los valores usuario y password ingresados en el form 
function validar(){

    if(user.value == "" && password.value == ""){
        alert('Por favor escribí tu nombre de usuario y contraseña.')

    }else if(password.value == ""){
        alert('Por favor escribí tu contraseña.')

    }else if(user.value == ""){
        alert('Por favor escribí tu nombre de usuario.')

    }else if(user.value.match('@') == null){
        alert('Tu usuario debería tener un arroba (@).')
    }

    else{
        form.submit();
    }

}

//al hacer click en el botón ingresar del form, se ejecuta la funcion validar()
var ingresar = document.getElementById('ingresar');
ingresar.addEventListener("click", validar);




