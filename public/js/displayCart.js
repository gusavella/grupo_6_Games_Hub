if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready)
}

else {
    ready()
}


function ready() {
    // console.log((localStorage.getItem("productsInCart"))?localStorage.getItem("productsInCart"):'Nada')
    if(JSON.parse(localStorage.getItem("productsInCart")) == null || JSON.parse(localStorage.getItem("productsInCart")).length == 0) {
        displayEmptyCart()
        updateTotal()
    }
    else {
        displayCart()
        // updateTotal()
    }
    let btnVaciar = document.getElementById("toEmpty")
    btnVaciar.addEventListener("click", vaciarCarrito)
}

function displayCart() {
    let prodsCart = JSON.parse(localStorage.getItem("productsInCart"))
    console.log(localStorage.getItem("productsInCart"))
    let container = document.getElementById("article-container")
    let containerTotal = document.querySelector(".cart-value-description")
    let total = document.querySelector(".total")
    container.innerHTML = ``

    for (let i=0; i<prodsCart.length; i++) {
        container.innerHTML += `
            <article class="cart-article">
          
            <img src="${prodsCart[i].image}" alt='' class="cart-article-image" />
            <div>
              <p>${prodsCart[i].name}</p>
             
              <div class="delete-quantity">
                
                 <button class="delete-basket" type="button" onClick="borrar(${prodsCart[i].id})">
                  <em class="fa-solid fa-trash"></em>
                </button>
               
                <p>Cantidad :</p>
                <p class="article-quantity">${prodsCart[i].quantity}</p>
                <div class="quantity-form">
                  <button class="quantity" onClick="sumar(${prodsCart[i].id})">+</button>
                  <button class="quantity" onClick="restar(${prodsCart[i].id})">-</button>
                </div>
              </div>
              <div class="value-container">
                <p>Valor:</p>
                <p>$${prodsCart[i].price}</p>
              </div>
            </div>
           </article>
      
        `
        containerTotal.innerHTML = ``
        for (let i=0; i<prodsCart.length; i++) {
            containerTotal.innerHTML += `
                 
            <div class="cart-value">
              <p>${prodsCart[i].name}</p>
              <p>$${prodsCart[i].subTotal.toFixed(2) }</p>
            </div>    

            `
        }
        total.innerText='$'+prodsCart.reduce((acum, act) => acum += act.subTotal ,0).toFixed(2) 
        
    }

}

function displayEmptyCart() {
    let container = document.getElementById("article-container")
    container.innerHTML = `
    <div">
        <h2 >No hay elementos en el carrito</h2>
    </div>
    `
}


function sumar(id){
    // console.log('ingresa a suma con id:',id)
    let prodsCart = JSON.parse(localStorage.getItem("productsInCart"))
    let prod = prodsCart.find(row => row.id == id)
    //   console.log('producto antes:',prod)
    prod.quantity +=1
    prod.subTotal = (prod.quantity * prod.price)  
    //   console.log('producto despues:',prod)
    localStorage.setItem("productsInCart", JSON.stringify(prodsCart))
    displayCart()
    updateTotal()
}

function restar(id) {
    // console.log('Ingresando a restar')
    let prodsCart = JSON.parse(localStorage.getItem("productsInCart"))
    let prod = prodsCart.find(row => row.id == id)
    //  console.log('producto antes:',prod)
    prod.quantity -= 1
    prod.subTotal = (prod.quantity * prod.price)
    //  console.log('producto despues:',prod)
    if (prod.quantity <= 0) {
        borrar(id)
        return
    }
    localStorage.setItem("productsInCart", JSON.stringify(prodsCart))
    displayCart()
    // updateTotal()
}

function borrar(id) {
    let prodsCart = JSON.parse(localStorage.getItem("productsInCart"))
    let filtrado = prodsCart.filter(row => row.id != id)
    localStorage.setItem("productsInCart", JSON.stringify(filtrado))
    if (filtrado.length <= 0) {
        displayEmptyCart()
        return
    }
    displayCart()
    // updateTotal()
}

function vaciarCarrito (){
    localStorage.setItem("productsInCart", JSON.stringify([]))
    displayEmptyCart()
    // updateTotal()
}

function updateTotal() {
    let prodsCart = JSON.parse(localStorage.getItem("productsInCart"))
    // let cantTotal = document.getElementById("cantTotal")
    let precioTotal = document.querySelector(".total")
    let total = prodsCart.reduce((acum, act) => acum += act.subTotal ,0)
    // cantTotal.value = prodsCart.length
    precioTotal.value = total
}