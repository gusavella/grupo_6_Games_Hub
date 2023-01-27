let express = require('express');
let router = express.Router();
const multer = require('multer');
let path = require('path');
const userController =require('../controllers/userController');
const validateLoginMiddleware= require('../middlewares/validateLoginMiddleware')
const validateRegisterMiddleware = require('../middlewares/validateRegisterMiddleware')
const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')

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

router.get('/detail/:id',authMiddleware,userController.detail)
//Login
router.get('/login',guestMiddleware,userController.login)

router.post('/login',validateLoginMiddleware,userController.loginProcess)

router.get('/logout',userController.logout)
//Login



//REGISTER
router.get ("/register", guestMiddleware, userController.register);

router.post('/register', upload.single('image'), validateRegisterMiddleware ,userController.processRegister);

// DELETE
router.delete("/:id",userController.delete)

//EDITAR
router.get("/edit/:id",authMiddleware,userController.edit)

router.put("/:id/edit",upload.single('image'),userController.update)

//PANEL
 router.get ("/adminPanel", authMiddleware,  userController.panel);  

module.exports = router;
