const path = require("path");
let products = require('../models/product')

const controlador = {
  index: (req, res) => {
    res.render('main.ejs', {products:products});
  },
  about: (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/about.html"));
  },
  register:(req, res) => {
    res.render("register");
},
};

module.exports = controlador;
