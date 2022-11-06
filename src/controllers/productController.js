const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../models/products.json");
let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  product: (req, res) => {
    res.render("products/productDetail", { tittle: "Product" });
  },
  newProduct: (req, res) => {
    res.render("products/newProduct.ejs", { tittle: "New Product" });
  },
  create: (req, res) => {
    let game = req.body;
    game.image = req.file.filename;
    res.send(game);
  },
  showEdit: (req, res) => {
    let id = req.params.id;
    let product = products.find(product=>product.id==id)
    console.log(product)
    res.render("products/editProduct.ejs", { tittle: "Editar Producto" ,product});
  },

  edit: (req, res) => {},
};

module.exports = controller;
