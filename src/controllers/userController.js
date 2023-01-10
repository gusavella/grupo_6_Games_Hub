const fs = require("fs");
const path = require("path");
const bcrypt= require("bcryptjs")
const {	validationResult} = require('express-validator');

const db = require('../database/models');
const sequelize = db.sequelize;


const productsFilePath = path.join(__dirname, "../database/products.json");
let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));


const controller = {
    all: async (req, res) => {
      try{
        let users= await db.User.findAll({include:["role"]})
        res.json(users);
      }
      catch(e){
        console.log(e)
      }
      
    },
    detail: (req, res) => {
          db.User.findByPk(req.params.id)
          .then(function(user){
        res.render("users/userDetail.ejs", { tittle: "User Detail",user:user });
          })
        
    },
    login: (req, res) => {
      console.log('cookies:',req.cookies)
      res.render("users/login.ejs",{tittle:'Login'});
    },
    loginProcess: (req,res) => {
      console.log(req.body)
      const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render('users/login.ejs', {tittle:'Login',
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
            res.cookie('userEmail',`${userToLogin.email}`,{maxAge:1000*60*10})
          }
         
          console.log(req.session)
            return res.redirect(`/users/detail/${userToLogin.id}`)
        }
        return res.render('users/login.ejs',{ tittle:'Login',
                                  errors:{
                                    password:{
                                      msg:'Credenciales invalidas - password'
                                    }
                                  }
                  })
      }

      return res.render('users/login.ejs',{ tittle:'Login',
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
    },
    register : (req, res) => {
      res.render ("register/register.ejs",{tittle:'Register'});
    },
    processRegister : (req, res) => {
      const resultValidationRegister = validationResult(req);
      if (resultValidationRegister.errors.length > 0){
        return res.render('register/register.ejs', { tittle: 'Registro',
          errors: resultValidationRegister.mapped(),
          oldData: req.body
        })
      } else {
          db.User.create({
            names: req.body.names,
            surnames: req.body.surnames,
            email:req.body.email,
            password: bcrypt.hashSync(req.body.password,10),
            address:req.body.address,
            phone:req.body.phone,
            image: req.file?'/images/games/'+ req.file.filename:'/images/defaultImage.png',
            role_id:2
          })
          .then(function(user){
            res.render("users/userDetail.ejs", { tittle: "User Detail",user:user });
          })
        }
    },
    createUser: (req, res) => {
      let newUser = req.body
      newUser.image = '/images/users/' + req.file.filename;
      User.create(newUser)
      res.redirect('/')
    },
    profile: (req, res) => {
      res.render('users/userDetail', {tittle:'Games Hub'})
    }
};

module.exports = controller;
