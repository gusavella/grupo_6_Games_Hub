const db = require('../database/models');
const sequelize = db.sequelize;
const controller = {
    all: (req, res) => {
        db.Product.findAll({include: ["section","category","consoles"]})
        .then(products => {
            res.json(products)
        })
    },
    pc: async (req, res) => {
       await db.ProductConsole.findAll()
        .then(ProductConsoles => {
            res.json(ProductConsoles)
        })
    },
    pcDetail:async (req, res) => {
        await db.ProductConsole.findAll({where:{Product_id:req.params.id}})
         .then(ProductConsoles => {
             res.json(ProductConsoles)
         })
    }

}

    module.exports=controller;