const { render } = require("ejs");
const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../database/products.json");
let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

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
  },
  allProducts: (req,res) => {
    res.render('products/product.ejs', {products:products,tittle:'Games Hub'})
  }
};

module.exports = controlador;