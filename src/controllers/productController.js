const fs = require("fs");
const path = require("path");
const db = require('../database/models');
const sequelize = db.sequelize;
const {validationResult} = require('express-validator');

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
  search: (req,res) => {
    res.render('products/productSearch.ejs', {tittle: 'Games Hub'})
  },
  productDetail: (req, res) => {
    db.Product.findByPk(req.params.id,{include: ["section","category","consoles"]})
    .then(product => {
           res.render("products/productDetail", { tittle: "Product" , product: product});
    })  
  },
  newProduct: async(req, res) => {
    let categories= await db.Category.findAll();
    let sections= await db.Section.findAll();
    let consoles= await db.Console.findAll();
    res.render("products/newProduct", { tittle: "New Product" ,categories,sections,consoles});
  },
  create: async(req, res) => {
    let categories= await db.Category.findAll();
    let sections= await db.Section.findAll();
    let consoles= await db.Console.findAll();
    
    const resultValidationProduct = validationResult(req);
      if (resultValidationProduct.errors.length > 0){
        return res.render('products/newProduct', { tittle: 'New Product',
          categories,sections,consoles,
          errors: resultValidationProduct.mapped(),
          oldData: req.body
        })
      } 
      else {
          try{
            let createdProduct= await db.Product.create(
                    {
                               name : req.body.name ,
                        description : req.body.description,
                              image : req.file?'/images/games/'+ req.file.filename:'/images/defaultImage.png',
                              value : parseFloat(req.body.value),
                           discount : parseFloat(req.body.discount),
                        final_value : (parseFloat(req.body.value*(1-req.body.discount/100))).toFixed(2), // Para que solamente tenga dos digitos
                        category_id : req.body.category,
                         section_id : req.body.section,
                          
                    })


                if(req.body.consoles){
                  let consolesAssigned= req.body.consoles
                  for(let console of consolesAssigned){
                    await db.ProductConsole.create({
                      console_id : console,
                      product_id:createdProduct.id })

                  }

                }
              
                  res.redirect('/products/all')
              
              }
  catch(e){console.log(e)} 
}
  },
  showEdit: async (req, res) => {
    try{
    let categories= await db.Category.findAll();
    let sections= await db.Section.findAll();
    let consoles= await db.Console.findAll();
    let product= await  db.Product.findByPk(req.params.id,{include: ["section","category","consoles"]})
    let productConsoles = await  db.ProductConsole.findAll({where:{product_id:req.params.id}})
    let productConsolesArray=[]
        
    if(productConsoles){
    productConsoles.forEach(productConsole=>{
      productConsolesArray.push(productConsole.console_id)
    })
   }
    res.render("products/editProduct.ejs", { tittle: "Editar Producto" ,product,productConsolesArray,categories,sections,consoles,productConsolesArray});
    }
    catch(e){
      console.log(e)
    }
  },

  update: async(req, res) => {
    
    let productOld = await  db.Product.findByPk(req.params.id)
    let categories= await db.Category.findAll();
    let sections= await db.Section.findAll();
    let consoles= await db.Console.findAll();
    let product= await  db.Product.findByPk(req.params.id,{include: ["section","category","consoles"]})
    let productConsoles = await  db.ProductConsole.findAll({where:{product_id:req.params.id}})
    let productConsolesArray=[]
        
    if(productConsoles){
    productConsoles.forEach(productConsole=>{
      productConsolesArray.push(productConsole.console_id)
    })
   }
    
    const resultValidationProduct = validationResult(req);
      if (resultValidationProduct.errors.length > 0){
        return res.render('products/editProduct', { tittle: 'Editar Producto',
          categories,sections,consoles,productConsolesArray,product,
          errors: resultValidationProduct.mapped(),
          oldData: req.body
        })
      } else {
        try{
        const editedProduct={
          name : req.body.name,
         value : parseFloat(req.body.value),
      discount : parseFloat(req.body.discount),
   final_value : (parseFloat(parseFloat(req.body.price)*(1-parseFloat(req.body.discount)/100))).toFixed(2) ,// Para que solamente tenga dos digitos
    section_id : req.body.section,
         image : req.file?'/images/games/'+req.file.filename:productOld.image,
   category_id : req.body.category,
   description : req.body.description
}

 await db.Product.update(editedProduct, {
   where:{
     id:req.params.id
   }
 });
 await db.ProductConsole.destroy({where:{ 
   product_id:req.params.id
 }})
 if(req.body.consoles){
      let consolesAssigned= req.body.consoles
   for(const element of consolesAssigned){
     await db.ProductConsole.create({
       console_id : element,
       product_id : req.params.id })

   }
 }
}
catch(e){
console.log(e)
}
res.redirect(`/products/${req.params.id}`)
      }
  

    
  },
  delete: async (req,res)=>{
   
    try{
       await  db.Product.destroy({where :{
                                          id:req.params.id
                                        }})   
      res.redirect('/')
    }
    catch(e){
      console.log(e)
  }
},
  
  cart: (req, res) => {
    let totalCart=0
    productsCart = JSON.parse(fs.readFileSync(productsCartFilePath, 'utf-8'));
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
  },
  showList:(req,res)=>{
    db.Product.findAll({include: ["section","category","consoles"]})
    .then(products => {
      res.render('products/productList.ejs', {products:products,tittle:'Lista de productos'})
    })
  }
};

module.exports = controller;
