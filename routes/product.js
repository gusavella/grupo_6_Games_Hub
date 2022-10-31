let express = require('express');
let router = express.Router();
const productController =require('../controllers/productController');

router.get('/', productController.product)
router.get('/new',productController.newProduct)

module.exports = router;