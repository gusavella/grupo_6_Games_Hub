const fs = require("fs");
const path = require("path");

const db = require('../database/models');
const sequelize = db.sequelize;

const productsFilePath = path.join(__dirname, "../database/products.json");
let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const productsCartFilePath = path.join(__dirname, '../database/productsCart.json');
let productsCart = JSON.parse(fs.readFileSync(productsCartFilePath, 'utf-8'));

const controller = {
  index: (req, res) => {
    db.Product.findAll({include: ["section","category","consoles"]})
    .then(products => {
        res.render('products/main.ejs', {products:products,tittle:'Games Hub'});
    })
  },
  best: (req,res) => {
    db.Product.findAll({include: ["section","category","consoles"]})
    .then(products => {
      res.render('products/bestSelling.ejs', {products:products,tittle:'Games Hub'})
    })
 
  },
  recommended: (req,res) => {

    db.Product.findAll({include: ["section","category","consoles"]})
    .then(products => {
      res.render('products/recommended.ejs', {products:products,tittle:'Games Hub'})
    })
 
  },
  offer: (req,res) => {
    db.Product.findAll({include: ["section","category","consoles"]})
    .then(products => {
      res.render('products/offers.ejs', {products:products,tittle:'Games Hub'})
    })
    
  },
  allProducts: (req,res) => {
    db.Product.findAll({include: ["section","category","consoles"]})
    .then(products => {
      res.render('products/product.ejs', {products:products,tittle:'Games Hub'})
    })
    
  },
  product: (req, res) => {
    const id = req.params.id;
    const product = products.find(product => product.id == id);
    res.render("products/productDetail", { tittle: "Product" , product: product});
  },
  newProduct: (req, res) => {
    res.render("products/newProduct", { tittle: "New Product" });
  },
  create: (req, res) => {
    let game = req.body; 
  
    let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    game.value=parseFloat(req.body.value)
    game.discount=parseFloat(req.body.discount)
    game.discountValue=(game.value*(1-game.discount/100)).toFixed(2) // Para que solamente tenga dos digitos
    game.discountValue=parseFloat(game.discountValue)
    game.imageUri = '/images/games/'+ req.file.filename;
    game.id = products[products.length - 1].id+1;
    products.push (game);
    fs.writeFileSync(productsFilePath,JSON.stringify(products,null," "));
    res.redirect('/')
  },
  showEdit: (req, res) => {
    let id = req.params.id;
    let product = products.find(product=>product.id==id)
    res.render("products/editProduct.ejs", { tittle: "Editar Producto" ,product});
  },

  update: (req, res) => {
    let productOld = products.find(product=>product.id==req.params.id)
    let consoleTypeArray=[];
    
    if(req.body.console){
        let consoleTypeArray2=[];
        let isArray=Array.isArray(req.body.console)
        consoleTypeArray2.push(req.body.console)
        consoleTypeArray=(isArray)?req.body.console:consoleTypeArray2
        console.log(consoleTypeArray)
    }

    const editedGame={
      id:parseInt(req.params.id),
      name:req.body.name,
      consoleType:consoleTypeArray,
      value:parseFloat(req.body.price),
      discount:parseFloat(req.body.discount),
      discountValue:(parseFloat(req.body.price)*(1-parseFloat(req.body.discount/100))).toFixed(2) ,// Para que solamente tenga dos digitos
      section:req.body.section,
      imageUri:req.file?'/images/games/'+req.file.filename:productOld.imageUri,
      category:req.body.category,
      description:req.body.description
  }
  editedGame.discountValue=parseFloat(editedGame.discountValue)
  products.forEach((product,index)=>{
    if(product.id==req.params.id){
      products[index]=editedGame;
    }
  });
  fs.writeFileSync(productsFilePath,JSON.stringify(products,null," "));
  res.redirect(`/product/${req.params.id}/edit`)
 
  },
  delete:(req,res)=>{
   
      const id = req.params.id;
      const finalProducts=products.filter(product=>product.id!=id);
      fs.writeFileSync(productsFilePath,JSON.stringify(finalProducts,null," "));
      res.redirect('/')

  },
  
  cart: (req, res) => {
    let totalCart=0
    productsCart = JSON.parse(fs.readFileSync(productsCartFilePath, 'utf-8'));
    // console.log(productsCart)
     for(const element of productsCart) { 
      totalCart=element.discountValue+totalCart
     }
     totalCart=parseFloat(totalCart).toFixed(2)
    res.render("products/productCart.ejs",{products:productsCart,totalCart:totalCart,tittle:'Product Cart'});

  },
  addToCart:(req,res)=>{
    let product = products.find(product=>product.id==req.params.id)
    if(!product){
      res.redirect(`/`)
    }
    productsCart.push(product)
    fs.writeFileSync(productsCartFilePath,JSON.stringify(productsCart,null," "));
    res.redirect(`/products/cart/all`)
  },
  
  cartDelete:(req,res)=>{
   
      const id = req.params.id;
      const finalProductsCart=productsCart.filter(product=>product.id!=id);
      fs.writeFileSync(productsCartFilePath,JSON.stringify(finalProductsCart,null," "));
      res.redirect(`/products/cart/all`)
  }
};

module.exports = controller;
