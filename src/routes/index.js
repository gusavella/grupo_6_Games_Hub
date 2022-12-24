const express = require('express');
const router = express.Router();
const mainController =require('../controllers/mainController');
const productController =require('../controllers/productController');

router.get('/', productController.index);
// router.get('/best-selling', mainController.best);
// router.get('/offers', mainController.offer);
// router.get('/recommended', mainController.recommended);
// router.get('/products', mainController.allProducts);


module.exports=router;