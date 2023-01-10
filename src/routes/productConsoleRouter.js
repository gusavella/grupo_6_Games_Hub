let express = require('express');
let router = express.Router();
const gameController =require('../controllers/gameController');

   router.get('/all',gameController.pc)
   router.get('/:id',gameController.pcDetail)

module.exports = router;
