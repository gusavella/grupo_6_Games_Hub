
window.addEventListener('load',function(){

  
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
let isCheckedConsole=false
let errors =[];


form.name.focus()

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log('nombre:',name)

    if (name.value==""){
        errors.push('Debes ingresar un nombre')
        }
    else if (name.value.length>1 && name.value.length < 3 ){
        errors.push('Nombre debe ser mayor a 3 caracteres')
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
    if (discount.value<=0){
        errors.push('Debes ingresar un valor de descuento mayor o igual a cero')
       }
    if ( section.value<=0 ||section.value==undefined || section.value==null){
        errors.push('Selecciona una seccion')
       } 
   
     if(consoles){
        for(let i of consoles){ 
            if(i.checked){
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
 
    if (errors.length>0 ){
        drawErrors(errors)
        drawValues()
        Swal.fire(
            'Cuidado!',
            'Verifica los errores',
            'error'
        )
      }
   else{
    console.log('enviando info')
    form.submit()
   }

})

function drawErrors(errors){
    mainBox.innerHTML+='<div id="errors" class="errors-box"></div>' 
    let errorsBox= document.getElementById('errors')
    errorsBox.innerHTML+='<ul class="errors-list" id="errors-list"></ul>' 
    let errorsList= document.getElementById('errors-list')
        for(error in errors){   
            errorsList.innerHTML+=`<li class="error">${errors[error]}</li>`  
        }   
  return  
}

function drawValues(){
 console.log('nombre',name)
    // let name=document.getElementById('name')
    // let description=document.getElementById('description')
    // let category=document.getElementById('category')
    // let price = document.getElementById('value')
    // let discount= document.getElementById('discount')
    // let consoles= document.querySelectorAll('#consoles')
    // let section= document.getElementById('section')
  
    // name.value=nameValue
    // description.value=descriptionValue
    // category.value=categoryValue
    // price.value = priceValue
    // discount.value= discountValue
    // // let consoles= document.querySelectorAll('#consoles')
    // section.value=sectionValue


}


})