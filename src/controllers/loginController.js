const controller = {
    login: (req, res) => {
      res.render("login.ejs",{tittle:'Login'});
    },
   };
  
  module.exports = controller;
  