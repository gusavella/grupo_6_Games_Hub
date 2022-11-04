const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../models/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const controller = {
    product: (req, res) => {
      res.render("productDetail",{tittle:'Product'});
    },
    newProduct: (req,res) => {
      res.render("newProduct.ejs",{tittle:'New Product'});
    }
  ,
  create: (req,res) => {
    let game = req.body;
        game.image=req.file.filename;
   res.send(game)
  }
  };
  
  module.exports = controller;
  