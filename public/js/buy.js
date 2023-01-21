if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready)
}

else {
    ready()
}

function  ready(){
    let buyButton = document.getElementById("buyButton")

    buyButton.addEventListener('click',async (e)=>{

     console.log('entra a comprar')

    // console.log(localStorage.getItem("productsInCart"))

     let prodsCart = JSON.parse(localStorage.getItem("productsInCart"))
     console.log('carrito',prodsCart)
     let body = {
                    total:200,
                    user_id:1
                }
    const respuesta = await fetchCreate(body)
   

    })
    async function fetchCreate(model) { 
        const res = await fetch('/orders/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(model)
        })
        let info = await res.json()
        return info
    }   
   
}