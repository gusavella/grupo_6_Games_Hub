let express = require('express');
let router = express.Router();
const multer = require('multer');
const userController =require('../controllers/userController');
const validateLoginmiddleware= require('../middlewares/validateLoginMiddleware')
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

router.get('/detail/:id',userController.detail)
//Login
router.get('/login',guestMiddleware,userController.login)

router.post('/',validateLoginmiddleware,userController.loginProcess)

router.get('/logout',userController.logout)
//Login
//REGISTER
router.get ("/register", guestMiddleware, userController.register);

router.post('/register', upload.single('image'), userController.createUser);
//REGISTER

module.exports = router;
