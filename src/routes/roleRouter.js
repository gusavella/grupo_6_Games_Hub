let express = require('express');
let router = express.Router();
let path = require('path');
const roleController =require('../controllers/roleController');

   router.get('/all',roleController.all)

module.exports = router;
