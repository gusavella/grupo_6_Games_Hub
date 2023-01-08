let express = require('express');
let router = express.Router();
let path = require('path');
const sectionController =require('../controllers/sectionController');

   router.get('/all',sectionController.all)
   router.post('/add',sectionController.create)
   router.put('/:id/edit',sectionController.update)
   router.delete('/:id',sectionController.delete)

module.exports = router;