let express = require('express');
let router = express.Router();
const consoleController =require('../controllers/consoleController');

   router.get('/all',consoleController.all)
   router.post('/add',consoleController.create)
   router.put('/:id/edit',consoleController.update)
   router.delete('/:id',consoleController.delete)


module.exports = router;
