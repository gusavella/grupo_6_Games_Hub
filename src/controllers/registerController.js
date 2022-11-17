const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, "../models/users.json");
let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const controller = {
    register : (req, res) => {
        res.render ("register/register.ejs",{tittle:'Register'});
    },
    createUser: (req, res) => {
        let newUser = req.body
        let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
        if(users.length != 0) {
            newUser.id = users[users.length - 1].id+1
        } else {
            newUser.id = 1
        }        
        users.push(newUser)
        fs.writeFileSync(usersFilePath,JSON.stringify(users,null," "));
        res.redirect('/')
        
    }
};

module.exports = controller;