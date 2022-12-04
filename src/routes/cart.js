let express = require('express');
let router = express.Router();
const cartController =require('../controllers/cartController');

router.get('/',cartController.cart)

router.post('/add/:id',cartController.addToCart)

module.exports = router;
