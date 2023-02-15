if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready)
}
else {
    ready()
}

async function fetchApi(url, config){
    try {
        const res = await fetch(url, config)
        const data = await res.json()
        return data
    }
    catch {
        return {error: "Ha ocurrido un error"}
    }
}

async function ready(){
     let otherSearchBar = document.querySelector('.search-form_input')
    otherSearchBar.addEventListener('keyup', (e) => {
        var inputText = e.target.value   
        sessionStorage.setItem('searchText', inputText)
    })
    otherSearchBar.addEventListener('change', (e) => {
        if(window.location.pathname != '/products/search'){
            location.href = 'http://localhost:3030/products/search'           
        }
    })

    const response = await fetch('/api/products')
    const products = await response.json()
    displayProducts(products.products)

    let searchBar = document.querySelector('.search-form_input')
    searchBar.value = sessionStorage.getItem('searchText')
    var event = new Event('change')
    searchBar.dispatchEvent(event)
    searchBar.addEventListener('change', (e) => {
      
        filter(products.products, e.target.value)       
    })
}

function displayProducts(products){

    let container = document.querySelector('.product-search')
    // if(container){
        container.innerHTML = ``
        for (let i = 0; i < products.length; i++){
        
            container.innerHTML += `
                <div class="card">
                    <div class="face front">
                        <img src="${products[i].image}" alt="imagen-game">
                        <h3>${products[i].name }</h3>
                    </div>
                    <div class="face back">
                        <h4>${products[i].name}</h4>
                        <p>Categoría: ${products[i].asociations[0]}</p>
                        <div class="link-buy">
                            <a href="/products/${products[i].id}">${products[i].final_value } - COMPRAR</a>
                        </div>
                    </div>
                </div>
            `
        }
    // }
 }
function filter(products, search) {
    if (search == "") displayProducts(products)
    else {
        let productsFiltered = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()) || product.description.toLowerCase().includes(search.toLowerCase()))
        displayProducts(productsFiltered)
        }
    }