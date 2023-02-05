const db = require('../database/models');
const sequelize = db.sequelize;
const { validationResult } = require('express-validator')
const controller = {
    all: async (req, res) => {
        try{
            let roles=await db.Role.findAll()
            res.render('role/role.ejs',{tittle:'Roles', roles})
        }catch(e){
            console.log(e)
        }
    },
    create:async(req,res)=>{
        resultValidation = validationResult(req)
        let roles=await db.Role.findAll()
        if (resultValidation.errors.length > 0){
            return res.render('role/role.ejs', {tittle : 'Roles', roles,
                errors: resultValidation.mapped(),
            })
        } else {
            try{
                await db.Role.create({name:req.body.name})
                res.redirect('/roles/all')
             }catch(e){
                // console.log(e)
             //    console.log('Nombre:',e.name)  
             //    console.log('errors:',e.errors) 
              //  console.log('errors length:',e.errors.length)  
                for(error in e.errors){
                 console.log('error:',e.errors[error].validatorKey)  
                }
                res.redirect('/roles/all')//,errors:e.errors
             }
        }
        
       
      },
      update:async(req,res)=>{
        try{
            // console.log('paramsId:',req.params.id)
            // console.log(req.body)
            await db.Role.update({name:req.body.name},
                {where:{
                        id:req.params.id
                        }
                })
            res.redirect('/roles/all')
        }catch(e){
            console.log(e)
        }
      },
      delete:async(req,res)=>{
        try{
           await db.Role.destroy({where:{
            id:req.params.id
           }})
            res.redirect('/roles/all')
        }catch(e){
            console.log(e)
        }
      }
     

}

    module.exports=controller;