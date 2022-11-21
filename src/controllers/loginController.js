const fs = require("fs");
const path = require("path");
const bcrypt= require("bcryptjs")
const {	validationResult} = require('express-validator');
const User = require("../models/Users")

 let users = User.findAll();

const controller = {
    login: (req, res) => {
      console.log(req.cookies.test)
      res.render("login/login.ejs",{tittle:'Login'});
    },
    loginProcess: (req,res) => {

      const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render('login/login.ejs', {tittle:'Login',
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}
      let userToLogin = User.findByField('email',req.body.email)

      if(userToLogin){
        let isOkPassword = bcrypt.compareSync(req.body.password,userToLogin.password)
        if(isOkPassword){
          delete userToLogin.password
          req.session.userLogged=userToLogin
          if(req.body.rememberCheck){
            res.cookie('userEmail',`${userToLogin.email}`,{maxAge:1000*60})
          }
         
          console.log(req.session)
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

    },
    logout: (req,res) => {
      res.clearCookie('userEmail')
      req.session.destroy()
      return res.redirect('/')
    }
   };
  
  module.exports = controller;
  