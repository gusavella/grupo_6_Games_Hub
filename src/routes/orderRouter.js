let express = require('express');
let router = express.Router();
let path = require('path');
const roleController =require('../controllers/orderController');

   router.get('/all',roleController.all)
//    router.post('/add',roleController.create)
//    router.put('/:id/edit',roleController.update)
//    router.delete('/:id',roleController.delete)

module.exports = router;
