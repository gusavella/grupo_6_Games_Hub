const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/productsCart.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
  cart: (req, res) => {
    let totalCart=0
     for(let i = 0; i<products.length ; i++) { 
      totalCart=products[i].value+totalCart
     }
  
    res.render("products/productCart.ejs",{products:products,totalCart:totalCart,tittle:'Product Cart'});

  },

};

module.exports = controller;
