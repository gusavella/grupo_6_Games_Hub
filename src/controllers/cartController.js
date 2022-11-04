const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../models/productsCart.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  cart: (req, res) => {
    let totalCart=0
     for(let i = 0; i<products.length ; i++) { 
      totalCart=products[i].value+totalCart
     }
  
    res.render("productCart.ejs",{products:products,totalCart:totalCart,tittle:'Product Cart'});

  },

};

module.exports = controller;
