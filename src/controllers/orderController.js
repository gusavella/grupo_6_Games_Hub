const db = require('../database/models');
const sequelize = db.sequelize;
const controller = {
    all: async (req, res) => {
        try{
            let orders=await db.Order.findAll({include:["user","order_product"]})
            res.json(orders)
        }catch(e){
            console.log(e)
        }
    },
    create:async(req,res)=>{
        try{
            // console.log('productos:',req.body.products )
           let createdOrder=await db.Order.create({
                                 total:req.body.total,
                                 user_id:req.session.userLogged.id    // para grabar el id del usuario que esta en la sesion (logueado)         
                                })
            // console.log('orden creada:',createdOrder)    
            let products=    req.body.products            
            for(let product in products){
                    await db.OrderProduct.create({
                        quantity : products[product].quantity,
                           value : products[product].price,
                        subTotal : products[product].subTotal,
                        order_id : createdOrder.id,
                      product_id : products[product].id

                    })
            }                       
           res.json({
                information:{
                    status:200,
                }                      
           })
        }catch(e){
           // console.log(e)
        //    console.log('Nombre:',e.name)  
        //    console.log('errors:',e.errors) 
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
      },
      searchByUser: async (req,res)=>{
        try{
            let orders=await db.Order.findAll({include:["order_product"]})
            let products=await db.Product.findAll()
            let filteredOrders=orders.filter(order=>order.user_id==req.params.id)

            //   res.json(filteredOrders)
            res.render('orders/byUser.ejs',{tittle:'Ordenes del usuario',orders:filteredOrders,products})
         }catch(e){
             console.log(e)
         }
      }
     

}

    module.exports=controller;