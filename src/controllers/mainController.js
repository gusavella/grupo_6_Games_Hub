const { render } = require("ejs");
const path = require("path");
let products = require('../models/product')

const controlador = {
  index: (req, res) => {
    res.render('products/main.ejs', {products:products,tittle:'Games Hub'});
  },
  best: (req,res) => {
    res.render('products/bestSelling.ejs', {products:products,tittle:'Games Hub'})
  },
  recommended: (req,res) => {
    res.render('products/recommended.ejs', {products:products,tittle:'Games Hub'})
  },
  offer: (req,res) => {
    res.render('products/offers.ejs', {products:products,tittle:'Games Hub'})
  }
};

module.exports = controlador;
