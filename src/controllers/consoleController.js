const db = require('../database/models');
const sequelize = db.sequelize;
const controller = {
    all: (req, res) => {
        db.Console.findAll()
        .then(consoles => {
            res.json(consoles)
        })
}}

    module.exports=controller;