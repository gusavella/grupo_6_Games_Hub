const express = require('express');
const router = express.Router();
const mainController =require('../controllers/mainController');
const productController =require('../controllers/productController');

router.get('/', productController.index);

module.exports=router;