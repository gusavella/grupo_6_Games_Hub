const db = require('../database/models');
const sequelize = db.sequelize;
const { validationResult } = require('express-validator')
const controller = {
    all: async (req, res) => {
        try{
            let categories=await db.Category.findAll()
            res.render('categories/categories.ejs',{tittle:'Categorías',categories})
        }catch(e){
            console.log(e)
        }
    },
    create:async(req,res)=>{
        resultValidation = validationResult(req)
        let categories=await db.Category.findAll()
        if (resultValidation.errors.length > 0){
            return res.render('categories/categories.ejs', {tittle : 'Roles', categories,
                errors: resultValidation.mapped(),
            })
        } else {
            try{
                await db.Category.create({name:req.body.name})
                 res.redirect('/categories/all')
             }catch(e){
                 console.log(e)
             }
        }
        
      },
      update:async(req,res)=>{
        try{
            // console.log('paramsId:',req.params.id)
            // console.log(req.body)
            await db.Category.update({name:req.body.name},
                {where:{
                        id:req.params.id
                        }
                })
            res.redirect('/categories/all')
        }catch(e){
            console.log(e)
        }
      },
      delete:async(req,res)=>{
        try{
           await db.Category.destroy({where:{
            id:req.params.id
           }})
            res.redirect('/categories/all')
        }catch(e){
            console.log(e)
        }
      }
     

}

    module.exports=controller;