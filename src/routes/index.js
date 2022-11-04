const express = require('express');
const router = express.Router();
const mainController =require('../controllers/mainController');
let id;
router.get('/',mainController.index)
module.exports=router;