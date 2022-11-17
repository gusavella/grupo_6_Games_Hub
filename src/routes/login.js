let express = require('express');
let router = express.Router();
const loginController =require('../controllers/loginController');

router.get('/',loginController.login)

router.post('/',loginController.checkLogin)

module.exports = router;
