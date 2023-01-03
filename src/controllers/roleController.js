const db = require('../database/models');
const sequelize = db.sequelize;
const controller = {
    all: async (req, res) => {
        try{
            let roles=await db.Role.findAll()
            res.render('role/role.ejs',{tittle:'Roles',roles})
        }catch(e){
            console.log(e)
        }
    },
    create:async(req,res)=>{
        try{
           await db.Role.create({name:req.body.name})
            res.redirect('/roles/all')
        }catch(e){
            console.log(e)
        }
      },
      update:async(req,res)=>{
        try{
            console.log('paramsId:',req.params.id)
            console.log(req.body)
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