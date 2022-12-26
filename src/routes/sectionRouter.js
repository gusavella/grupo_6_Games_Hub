let express = require('express');
let router = express.Router();
const sectionController =require('../controllers/sectionController');

   router.get('/all',sectionController.all)

module.exports = router;
