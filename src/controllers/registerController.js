const fs = require("fs");
const path = require("path");
const User = require("../models/Users")

 let users = User.findAll();

const controller = {
    register : (req, res) => {
        res.render ("register/register.ejs",{tittle:'Register'});
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