let express = require('express');
let router = express.Router();
let path = require('path');
const orderController =require('../controllers/orderController');

   router.get('/all',orderController.all)
   router.post('/add',orderController.create)

   router.get('/user/:id',orderController.searchByUser)
//    router.put('/:id/edit',roleController.update)
//    router.delete('/:id',roleController.delete)

module.exports = router;
