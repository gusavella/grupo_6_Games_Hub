let express = require('express');
let router = express.Router();
const categoryController =require('../controllers/categoryController');

   router.get('/all',categoryController.all)

module.exports = router;
