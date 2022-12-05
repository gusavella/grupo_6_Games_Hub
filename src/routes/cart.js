let express = require('express');
let router = express.Router();
const cartController =require('../controllers/cartController');

router.get('/',cartController.cart)

router.post('/add/:id',cartController.addToCart)

router.delete('/:id',cartController.delete)

module.exports = router;
