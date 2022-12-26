const db = require('../database/models');
const sequelize = db.sequelize;
const controller = {
    all: (req, res) => {
        db.Game.findAll({include: ["section","category"]})
        .then(games => {
            res.json(games)
        })
}}

    module.exports=controller;