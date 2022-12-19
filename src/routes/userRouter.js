let express = require('express');
let router = express.Router();
const userController =require('../controllers/userController');

router.get('/detail/:id',userController.detail)


module.exports = router;
