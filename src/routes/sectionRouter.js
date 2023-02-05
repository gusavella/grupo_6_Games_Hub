let express = require('express');
let router = express.Router();
let path = require('path');
const adminMiddleware = require('../middlewares/adminMiddleware')
const sectionController =require('../controllers/sectionController');

   router.get('/all',sectionController.all)
   router.post('/add', adminMiddleware, sectionController.create)
   router.put('/:id/edit',sectionController.update)
   router.delete('/:id',sectionController.delete)

module.exports = router;