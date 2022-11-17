let express = require("express");
let router = express.Router();

const registerController = require ("../controllers/registerController");

router.get ("/",registerController.register);

router.post('/',registerController.createUser);

module.exports = router;