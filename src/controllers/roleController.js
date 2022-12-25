const db = require('../database/models');
const sequelize = db.sequelize;
const controller = {
    all: (req, res) => {
        db.Role.findAll()
        .then(roles => {
            res.json(roles)
        })
}}

    module.exports=controller;