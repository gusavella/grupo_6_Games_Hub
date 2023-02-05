let express = require('express');
let router = express.Router();
let path = require('path');
const adminMiddleware = require('../middlewares/adminMiddleware')
const roleController =require('../controllers/roleController');

   router.get('/all',roleController.all)
   router.post('/add', adminMiddleware, roleController.create)
   router.put('/:id/edit', roleController.update)
   router.delete('/:id',roleController.delete)

module.exports = router;
