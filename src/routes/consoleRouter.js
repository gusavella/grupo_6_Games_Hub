let express = require('express');
let router = express.Router();
const adminMiddleware = require('../middlewares/adminMiddleware')
const consoleController =require('../controllers/consoleController');

   router.get('/all',consoleController.all)
   router.post('/add', adminMiddleware, consoleController.create)
   router.put('/:id/edit',consoleController.update)
   router.delete('/:id',consoleController.delete)


module.exports = router;
