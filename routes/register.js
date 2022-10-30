let express = require("express");
let router = express.Router;

const registerController = require ("../controllers/registerController");

router.get ("/",registerController.register);

module.exports = router;