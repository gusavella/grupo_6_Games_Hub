let express = require("express");
let router = express.Router();
let path = require('path');
const multer = require('multer');
const guestMiddleware = require('../middlewares/guestMiddleware')

const registerController = require ("../controllers/registerController");

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, path.join(__dirname,'../../public/images/users'))
    },
    filename: function (req, file, cb) {
    cb(null,   Date.now()+path.extname(file.originalname))
    }
   })
   let upload = multer({ storage: storage })

router.get ("/", guestMiddleware, registerController.register);

router.post('/', upload.single('image'), registerController.createUser);

router.get('/profile', registerController.profile)

module.exports = router;