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
    res.render("products/editProduct.ejs", { tittle: "Editar Producto" ,product});
  },

  update: (req, res) => {
    let productOld = products.find(product=>product.id==req.params.id)
    const editedGame={
      id:req.params.id,
      name:req.body.name,
      value:req.body.price,
      consoleType:req.body.console,
      discount:req.body.discount,
      imageUri:req.file?'/images/games/'+req.file.filename:productOld.imageUri,
      category:req.body.category,
      description:req.body.description
  }
  products.forEach((product,index)=>{
    if(product.id==req.params.id){
      products[index]=editedGame;
    }
});
fs.writeFileSync(productsFilePath,JSON.stringify(products,null," "));
res.redirect('/product/17/edit')
 
  },
};

module.exports = controller;
