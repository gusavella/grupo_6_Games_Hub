let express = require('express');
let router = express.Router();
const loginController =require('../controllers/loginController');

router.get('/',loginController.login)

router.post('/',loginController.loginProcess)

router.get('/logout',loginController.logout)

module.exports = router;
