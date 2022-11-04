
let products = require('../models/productCart')
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
