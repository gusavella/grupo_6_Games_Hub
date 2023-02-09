if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready)
}

else {
    ready()
}


function ready() {
    let form = document.getElementById('form')
    let names = document.querySelector('#names')
    let surnames = document.querySelector('#surnames')
    let password = document.querySelector('#password')
    let phone = document.querySelector('#phone')
    let email = document.querySelector('#email')
    let address = document.querySelector('#address')
    let errorsBox = document.getElementById('errors')
    errorsBox.style.visibility='hidden'

    form.addEventListener('submit', (e) => {
        let errors = []

        e.preventDefault()

        if (names.value == ""){
            errors.push('Debes ingresar tu nombre')
        } else if (names.value.length < 3){
            errors.push('El nombre debe ser mayor a 3 letras')
        }

        if (surnames.value == ""){
            errors.push('Debes ingresar tu apellido')
        } else if (surnames.value.length < 3){
            errors.push('El apellido debe ser mayor a 3 letras')
        }

        if (password.value == ""){
            errors.push('Debes ingresar una contraseña')
        } else if (password.value.length <= 3){
            errors.push('La contraseña debe ser mayor a 4 caracteres')
        }
        
        if (phone.value == ""){
            errors.push('Debes ingresar un número de teléfono')
        } else if (phone.value.length < 10) {
            errors.push('Debes ingresar un número de teléfono válido mayor a 10 digitos')
        }

        if (email.value == ""){
            errors.push('Debes ingresar un email')
        } else if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
            errors.push('Debes ingresar un formato de email válido')
        }

        if (address.value == ""){
            errors.push('Debes ingresar una dirección')
        }

        if (errors.length > 0){
            let errorsList = document.getElementById('errors-list')
            errorsList.innerHTML = ``
            errorsBox.style.visibility = 'visible'
            for(let error in errors){   
                errorsList.innerHTML += `<li class="error">${errors[error]}</li>`  
            }
        } else {
            form.submit()
        }
    })
}