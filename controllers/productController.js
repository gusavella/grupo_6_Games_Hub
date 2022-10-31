const controller = {
    product: (req, res) => {
      res.render("productDetail");
    },
    newProduct: (req,res) => {
      res.render("newProduct");
    }
  
  };
  
  module.exports = controller;
  