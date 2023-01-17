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
    let container = document.getElementById("cart-section-container")
    let containerTotal = document.querySelector(".cart-value-description")
    let total = document.querySelector(".total")
    container.innerHTML = ``

    for (let i=0; i<prodsCart.length; i++) {
        container.innerHTML += `
        <section>
        <div class="cart-tittle" id="cart-section-container">
          <p>Carrito de compras</p>
          <hr class="section-top-line" />
        </div>
        <article class="cart-article">
          
            <img src="${prodsCart[i].image}" alt='' class="cart-article-image" />
            <div>
              <p>${prodsCart[i].name}</p>
             
              <div class="delete-quantity">
                <form action="/products/cart/<%=products[i].id%>?_method=DELETE" method="post">
                 <button class="delete-basket" type="submit">
                  <em class="fa-solid fa-trash"></em>
                </button>
                </form>
                <p>Cantidad :</p>
                <p class="article-quantity">1</p>
                <form class="quantity-form">
                  <button class="quantity">+</button>
                  <button class="quantity">-</button>
                </form>
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
              <p>$${prodsCart[i].price}</p>
            </div>    

            `
        }
        total.innerText='$'+prodsCart.reduce((acum, act) => acum += act.subTotal ,0)    
        
    }

}

function displayEmptyCart() {
    let container = document.getElementById("cart-section-container")
    container.innerHTML += `
    <div">
        <h2 >No hay elementos en el carrito</h2>
    </div>
    `
}


function sumar(id){
    let prodsCart = JSON.parse(localStorage.getItem("productsInCart"))
    let prod = prodsCart.find(row => row.id == id)
    prod.cantidad += 1
    prod.subTotal = prod.cantidad * prod.price
    localStorage.setItem("productosEnCarrito", JSON.stringify(prodsCart))
    displayCart()
    updateTotal()
}

function restar(id) {
    let prodsCart = JSON.parse(localStorage.getItem("productsInCart"))
    let prod = prodsCart.find(row => row.id == id)
    prod.cantidad -= 1
    prod.subTotal = prod.cantidad * prod.price
    if (prod.cantidad <= 0) {
        borrar(id)
        return
    }
    localStorage.setItem("productsInCart", JSON.stringify(prodsCart))
    displayCart()
    updateTotal()
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
    updateTotal()
}

function vaciarCarrito (){
    localStorage.setItem("productsInCart", JSON.stringify([]))
    displayEmptyCart()
    updateTotal()
}

function updateTotal() {
    let prodsCart = JSON.parse(localStorage.getItem("productsInCart"))
    // let cantTotal = document.getElementById("cantTotal")
    let precioTotal = document.getElementById(".total")
    let total = prodsCart.reduce((acum, act) => acum += act.subTotal ,0)
    cantTotal.value = prodsCart.length
    // precioTotal.value = total
}