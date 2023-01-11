const db = require('../database/models');
const sequelize = db.sequelize;
const controller = {
    all: async (req, res) => {
        try{
            let orders=await db.Order.findAll({include:["user"]})
            res.json(orders)
        }catch(e){
            console.log(e)
        }
    },
    create:async(req,res)=>{
        try{
           await db.Order.create({name:req.body.name})
           res.redirect('/orders/all')
        }catch(e){
           // console.log(e)
           console.log('Nombre:',e.name)  
           console.log('errors:',e.errors) 
         //  console.log('errors length:',e.errors.length)  
           for(error in e.errors){
            console.log('error:',e.errors[error].validatorKey)  
           }
           res.redirect('/orders/all')//,errors:e.errors
        }
       
      },
      update:async(req,res)=>{
        try{
            // console.log('paramsId:',req.params.id)
            // console.log(req.body)
            await db.Order.update({name:req.body.name},
                {where:{
                        id:req.params.id
                        }
                })
            res.redirect('/orders/all')
        }catch(e){
            console.log(e)
        }
      },
      delete:async(req,res)=>{
        try{
           await db.Order.destroy({where:{
            id:req.params.id
           }})
            res.redirect('/orders/all')
        }catch(e){
            console.log(e)
        }
      }
     

}

    module.exports=controller;