const db = require('../database/models');
const sequelize = db.sequelize;
const controller = {
    all: (req, res) => {
        db.Category.findAll()
        .then(categories => {
            res.json(categories)
        })
}}

    module.exports=controller;