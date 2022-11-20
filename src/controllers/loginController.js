const fs = require("fs");
const path = require("path");
const bcrypt= require("bcryptjs")
const User = require("../models/Users")

 let users = User.findAll();

const controller = {
    login: (req, res) => {
      console.log(req.session)
      res.render("login/login.ejs",{tittle:'Login'});
    },
    loginProcess: (req,res) => {
    
      let userToLogin = User.findByField('email',req.body.email)

      if(userToLogin){
        let isOkPassword = bcrypt.compareSync(req.body.password,userToLogin.password)
        if(isOkPassword){
          delete userToLogin.password
          req.session.userLogged=userToLogin
            return res.redirect('/')
        }
        return res.render('login/login.ejs',{ tittle:'Login',
                                  errors:{
                                    password:{
                                      msg:'Credenciales invalidas - password'
                                    }
                                  }
                  })
      }

      return res.render('login/login.ejs',{ tittle:'Login',
                                  errors:{
                                    email:{
                                      msg:'Credenciales invalidas - email '
                                    }
                                  }
                  })

    }
   };
  
  module.exports = controller;
  