const fs = require('fs');
const path = require('path');

const productsCartFilePath = path.join(__dirname, '../database/productsCart.json');
let productsCart = JSON.parse(fs.readFileSync(productsCartFilePath, 'utf-8'));

const productsFilePath = path.join(__dirname, '../database/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
  cart: (req, res) => {
    let totalCart=0
    productsCart = JSON.parse(fs.readFileSync(productsCartFilePath, 'utf-8'));
     for(const element of productsCart) { 
      totalCart=element.discountValue+totalCart
     }
     totalCart=parseFloat(totalCart).toFixed(2)
    res.render("products/productCart.ejs",{products:productsCart,totalCart:totalCart,tittle:'Product Cart'});

  },
  addToCart:(req,res)=>{
    let product = products.find(product=>product.id==req.params.id)
    if(!product){
      res.redirect(`/`)
    }
    productsCart.push(product)
    fs.writeFileSync(productsCartFilePath,JSON.stringify(productsCart,null," "));
    res.redirect(`/cart`)
  },
  
  delete:(req,res)=>{
   
      const id = req.params.id;
      const finalProductsCart=productsCart.filter(product=>product.id!=id);
      fs.writeFileSync(productsCartFilePath,JSON.stringify(finalProductsCart,null," "));
      res.redirect(`/cart`)
  }

};

module.exports = controller;
