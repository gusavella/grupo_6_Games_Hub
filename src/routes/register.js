let express = require("express");
let router = express.Router();
const guestMiddleware = require('../middlewares/guestMiddleware')

const registerController = require ("../controllers/registerController");

router.get ("/",guestMiddleware,registerController.register);

router.post('/',registerController.createUser);

module.exports = router;