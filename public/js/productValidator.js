window.addEventListener('load',function(){
  
let addButton = document.getElementById('add-product-button')
let form = document.querySelector('form')

addButton.addEventListener('click',(e)=>{
    e.preventDefault
    let errors =[];
    let body=document.querySelector('body')
    let mainBox=document.getElementById('main')
    let name=document.getElementById('name')
    let description=document.getElementById('description')
    let category=document.getElementById('category')
    let price = document.getElementById('value')
    let discount= document.getElementById('discount')
    let consoles= document.querySelectorAll('#consoles')
    let section= document.getElementById('section')
   

    if (name.value.length<=0){
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

     console.log('consolas:',consoles)  
     if(consoles){
        for(let i of consoles){ 
            console.log(consoles[i])
         
        }
     }
     

    if ( !consoles){
        errors.push('Debes escoger al menos una consola')
       }
 
    if (errors.length>0 ){
        drawErrors(errors)
      }
   else{
    form.submit()
   }
      function drawErrors(errors){
        mainBox.innerHTML+='<div id="errors" class="errors-box"></div>' 
        let errorsBox= document.getElementById('errors')
        errorsBox.innerHTML+='<ul class="errors-list" id="errors-list"></ul>' 
        let errorsList= document.getElementById('errors-list')
            for(error in errors){   
                errorsList.innerHTML+=`<li class="error">${errors[error]}</li>`  
            }    
        }
  
   
})



})