let express = require('express');
let router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware')
const cartController =require('../controllers/cartController');

router.get('/',authMiddleware,cartController.cart)

router.post('/add/:id',authMiddleware,cartController.addToCart)

router.delete('/:id',authMiddleware,cartController.delete)

module.exports = router;
