let express = require('express');
let router = express.Router();
const multer = require('multer');
let path = require('path');
const userController =require('../controllers/userController');
const validateLoginMiddleware= require('../middlewares/validateLoginMiddleware')
const validateRegisterMiddleware = require('../middlewares/validateRegisterMiddleware')
const guestMiddleware = require('../middlewares/guestMiddleware')

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, path.join(__dirname,'../../public/images/users'))
    },
    filename: function (req, file, cb) {
    cb(null,   Date.now()+path.extname(file.originalname))
    }
   })
   let upload = multer({ storage: storage })


   router.get('/all',userController.all)   

router.get('/detail/:id',userController.detail)
//Login
router.get('/login',guestMiddleware,userController.login)

router.post('/login',validateLoginMiddleware,userController.loginProcess)

router.get('/logout',userController.logout)
//Login



//REGISTER
router.get ("/register", guestMiddleware, userController.register);

router.post('/register', upload.single('image'), validateRegisterMiddleware ,userController.processRegister);
//REGISTER

module.exports = router;
