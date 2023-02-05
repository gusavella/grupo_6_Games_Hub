let express = require('express');
let router = express.Router();
const adminMiddleware = require('../middlewares/adminMiddleware')
const categoryController =require('../controllers/categoryController');

   router.get('/all',categoryController.all);
   router.post('/add', adminMiddleware, categoryController.create);
   router.put('/:id/edit',categoryController.update);
   router.delete('/:id',categoryController.delete);

module.exports = router;
