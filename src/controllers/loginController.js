const controller = {
    login: (req, res) => {
      res.render("login/login.ejs",{tittle:'Login'});
    },
   };
  
  module.exports = controller;
  