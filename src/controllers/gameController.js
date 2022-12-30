const db = require('../database/models');
const sequelize = db.sequelize;
const controller = {
    all: (req, res) => {
        db.Product.findAll({include: ["section","category","consoles"]})
        .then(products => {
            res.json(products)
        })
}}

    module.exports=controller;