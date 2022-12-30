let express = require('express');
let router = express.Router();
const gameController =require('../controllers/gameController');

   router.get('/all',gameController.all)

module.exports = router;
