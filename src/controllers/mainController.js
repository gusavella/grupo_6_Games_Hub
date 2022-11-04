const path = require("path");
let products = require('../models/product')

const controlador = {
  index: (req, res) => {
    res.render('main.ejs', {products:products,tittle:'Games Hub'});
  },

};

module.exports = controlador;
