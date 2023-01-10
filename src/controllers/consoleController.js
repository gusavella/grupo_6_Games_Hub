const db = require('../database/models');
const sequelize = db.sequelize;
const controller = {
    all: async (req, res) => {
        try{
            let consoles=await db.Console.findAll()
            res.render('consoles/consoles.ejs',{tittle:'Consola',consoles})
        }catch(e){
            console.log(e)
        }
    },
    create:async(req,res)=>{
        try{
           await db.Console.create({name:req.body.name})
            res.redirect('/consoles/all')
        }catch(e){
            console.log(e)
        }
      },
      update:async(req,res)=>{
        try{
            // console.log('paramsId:',req.params.id)
            // console.log(req.body)
            await db.Console.update({name:req.body.name},
                {where:{
                        id:req.params.id
                        }
                })
            res.redirect('/consoles/all')
        }catch(e){
            console.log(e)
        }
      },
      delete:async(req,res)=>{
        try{
           await db.Console.destroy({where:{
            id:req.params.id
           }})
            res.redirect('/consoles/all')
        }catch(e){
            console.log(e)
        }
      }
     

}

    module.exports=controller;