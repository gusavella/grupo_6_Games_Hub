const fs = require("fs");
const path = require("path");
const User = require("../models/Users")

const productsFilePath = path.join(__dirname, "../database/products.json");
let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));


const controller = {
    detail: (req, res) => {
          let user=User.findByPk(req.params.id)
          console.log(user)
        res.render("users/userDetail.ejs", { tittle: "User Detail",user:user });
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
            res.cookie('userEmail',`${userToLogin.email}`,{maxAge:1000*60})
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
      res.render ("users/register.ejs",{tittle:'Register'});
    },
    createUser: (req, res) => {
        let newUser = req.body
        newUser.image = '/images/users/' + req.file.filename;
        User.create(newUser)
        res.redirect('/')
    }
};

module.exports = controller;
