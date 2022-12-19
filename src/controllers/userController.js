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
};

module.exports = controller;
