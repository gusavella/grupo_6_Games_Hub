let express = require('express');
let router = express.Router();
const loginController =require('../controllers/loginController');

router.get('/',loginController.login)

module.exports = router;
