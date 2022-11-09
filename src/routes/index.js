const express = require('express');
const router = express.Router();
const mainController =require('../controllers/mainController');

router.get('/', mainController.index);
router.get('/best-selling', mainController.best);
router.get('/offers', mainController.offer);
router.get('/recommended', mainController.recommended);


module.exports=router;