/* Validation Consoles */
const d = document;

/* Consoles */

const nombre = d.getElementById("new-input-console");
const form = d.getElementById("console-form");
const parrafo = d.getElementById("warning");
const roles = d.querySelectorAll(".role-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let errors = [];

  if(nombre.value == ''){
    errors.push('error')
  } else {
    for( let i = 0 ; i < roles.length ; i++){
        if(nombre.value.toLowerCase() == roles[i].value.toLowerCase()){
            errors.push('error')
        }
    }
  }
  if(errors.length > 0){
    parrafo.innerText = 'Debe ingresar una consola válida y no repetida.';
  } else {
    parrafo.innerText = 'Enviado';
    form.submit();
  }

});