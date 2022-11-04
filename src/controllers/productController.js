const controller = {
    product: (req, res) => {
      res.render("productDetail",{tittle:'Product'});
    },
    newProduct: (req,res) => {
      res.render("newProduct.ejs",{tittle:'New Product'});
    }
  
  };
  
  module.exports = controller;
  