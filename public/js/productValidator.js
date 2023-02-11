if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready)
}

else {
    ready()
}


function ready() {
let addProductButton = document.getElementById('add-product-button')
let form = document.getElementById('form')
let body=document.querySelector('body')
let mainBox=document.getElementById('main')
let name=document.getElementById('name')
let description=document.getElementById('description')
let category=document.getElementById('category')
let price = document.getElementById('value')
let discount= document.getElementById('discount')
let consoles= document.querySelectorAll('#consoles')
let section= document.getElementById('section')
let errorsBox= document.getElementById('errors')
errorsBox.style.visibility='hidden'
let isCheckedConsole=false

form.addEventListener('submit',(e)=>{
    let errors =[];
    console.log('Hola ')
    e.preventDefault()
 console.log('name:',name.value)
    if (name.value==""){
        errors.push('Debes ingresar un nombre')
        }
    else if (name.value.length>1 && name.value.length < 3 ){
        errors.push('Nombre debe ser mayor o igual a 3 caracteres')
        }
   
    if (description.value.length<=0){
        errors.push('Debes ingresar una descripcion del producto')
        }
    if (category.value.length<=0){
        errors.push('Debes ingresar una categoria')
        }
    if (price.value<=0){
        errors.push('Debes ingresar un valor de producto mayor a cero')
       }
    if (discount.value<0){
        errors.push('Debes ingresar un valor de descuento mayor o igual a cero')
       }
    if ( section.value<=0 ||section.value==undefined || section.value==null){
        errors.push('Selecciona una seccion')
       } 
   
     if(consoles){
        for(let console of consoles){ 
            if(console.checked){
                isCheckedConsole=true; 
            }
        }
     }
     else{
        isCheckedConsole=false; 
     }
     
    if ( !isCheckedConsole){
        errors.push('Debes escoger al menos una consola')
       }
  console.log('errores:',errors.length)
    if (errors.length>0 ){
          
        let errorsList= document.getElementById('errors-list')
        errorsList.innerHTML=``
        errorsBox.style.visibility='visible'
        for(let error in errors){   
            errorsList.innerHTML+=`<li class="error">${errors[error]}</li>`  
        }   

         Swal.fire(
            'Cuidado!',
            'Verifica los errores',
            'error'
        )
      }
   else{
    console.log('errores:',errors.length)
    console.log('enviando info')
    form.submit()
   }

})

function drawErrors(errors){
    mainBox.innerHTML+='' 
   
    errorsBox.innerHTML+='' 
   
        
}

function drawValues(){
 console.log('nombre:',name)
  
}


// })

}