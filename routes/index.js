const express = require('express');
const router = express.Router();
const mainController =require('../controllers/mainController');
let id;
router.get('/',mainController.index)
router.get('/about',mainController.about)
 router.get('/carrito',mainController.productCart)
module.exports=router;