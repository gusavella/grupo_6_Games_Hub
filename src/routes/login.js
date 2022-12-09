let express = require('express');
let router = express.Router();
const loginController =require('../controllers/loginController');
const validateLoginmiddleware= require('../middlewares/validateLoginMiddleware')
const guestMiddleware = require('../middlewares/guestMiddleware')

router.get('/',guestMiddleware,loginController.login)

router.post('/',validateLoginmiddleware,loginController.loginProcess)

router.get('/logout',loginController.logout)


module.exports = router;
