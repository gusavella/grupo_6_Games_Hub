/* Validation Categories */
const d = document;

/* ROLES */

const nombre = d.getElementById("new-input-category");
const form = d.getElementById("categories-form");
const parrafo = d.getElementById("warning");
const roles = d.querySelectorAll(".role-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let errors = [];

  if(nombre.value == '' || hasNumber(nombre.value)){
    errors.push('error')
  } else {
    for( let i = 0 ; i < roles.length ; i++){
        if(nombre.value.toLowerCase() == roles[i].value.toLowerCase()){
            errors.push('error')
        }
    }
  }
  if(errors.length > 0){
    parrafo.innerText = 'Debe ingresar una sección válida y no repetida.';
  } else {
    parrafo.innerText = 'Enviado';
    form.submit();
  }

});

const hasNumber = (str) => str.toString().search(/[\d]/) >= 0;