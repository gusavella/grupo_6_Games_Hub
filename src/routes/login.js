let express = require('express');
let router = express.Router();
const loginController =require('../controllers/loginController');
const validateLoginmiddleware= require('../middlewares/validateLoginMiddleware')
router.get('/',loginController.login)

router.post('/',validateLoginmiddleware,loginController.loginProcess)

router.get('/logout',loginController.logout)

module.exports = router;
