let express = require('express');
let router = express.Router();
const consoleController =require('../controllers/consoleController');

   router.get('/all',consoleController.all)

module.exports = router;
