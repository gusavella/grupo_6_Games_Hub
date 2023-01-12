const db = require('../database/models');
const sequelize = db.sequelize;
const controller = {
    all: async (req, res) => {
        try{
            let sections = await db.Section.findAll()
            // console.log(sections)
            res.render('sections/sections.ejs',{tittle:'Secciones', sections})
        }catch(e){
            console.log(e)
        }
    },
    create:async(req,res)=>{
        try{
           await db.Section.create({name:req.body.name})
            res.redirect('/sections/all')
        }catch(e){
            console.log(e)
        }
      },
      update:async(req,res)=>{
        try{
            console.log('paramsId:',req.params.id)
            console.log(req.body)
           let updated= await db.Section.update({name:req.body.name},
                {where:{
                        id:req.params.id
                        }
                })

                console.log(updated)
            res.redirect('/sections/all')
        }catch(e){
            console.log(e)
        }
      },
      delete:async(req,res)=>{
        try{
           await db.Section.destroy({where:{
            id:req.params.id
           }})
            res.redirect('/Sections/all')
        }catch(e){
            console.log(e)
        }
      }
     

}

    module.exports=controller;