const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, "../models/users.json");
let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const controller = {
    login: (req, res) => {
      res.render("login/login.ejs",{tittle:'Login'});
    },
    checkLogin: (req,res) => {
      let userLoged = req.body
      users.forEach((user) => {
        if(user.email == userLoged.email){
          
        } else {
          
        }
      })
    }
   };
  
  module.exports = controller;
  