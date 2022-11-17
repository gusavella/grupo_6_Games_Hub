let express = require('express');
let router = express.Router();
let path = require('path');
const multer = require('multer');
const productController =require('../controllers/productController');

//
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, path.join(__dirname,'../../public/images/games'))
    },
    filename: function (req, file, cb) {
    cb(null,   Date.now()+path.extname(file.originalname))
    }
   })
   let upload = multer({ storage: storage })
// Todos los grupos


router.get('/', productController.product)
//vista de cada producto
router.get('/:id', productController.product)
//creacion producto
router.get('/new',productController.newProduct)
router.post('/new', upload.single('new-img'),productController.create)

// Editar un producto
router.get('/:id/edit',productController.showEdit)
//
router.put('/:id/edit',upload.single('new-img'),productController.update)

router.delete('/:id',productController.delete)

module.exports = router;