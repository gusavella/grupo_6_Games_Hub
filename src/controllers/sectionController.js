const db = require('../database/models');
const sequelize = db.sequelize;
const controller = {
    all: (req, res) => {
        db.Section.findAll()
        .then(sections => {
            res.json(sections)
        })
}}

    module.exports=controller;