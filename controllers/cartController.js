
let products = require('../models/productCart')
const controller = {
  cart: (req, res) => {
    let totalCart=0
     for(let i = 0; i<products.length ; i++) { 
      totalCart=products[i].value+totalCart
     }
  
    res.render("productCart",{products:products,totalCart:totalCart});

  },

};

module.exports = controller;
