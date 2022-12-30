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


 router.get('/', productController.index);
 router.get('/best-selling', productController.best);
 router.get('/offers', productController.offer);
 router.get('/recommended',productController.recommended);
 router.get('/products', productController.allProducts);
 const authMiddleware = require('../middlewares/authMiddleware')
 


 router.get('/all', productController.allProducts)

//creacion producto
router.get('/new',productController.newProduct)
router.post('/new', upload.single('new-img'),productController.create)
//vista de cada producto
router.get('/:id', productController.productDetail)


// Editar un producto
router.get('/:id/edit',productController.showEdit)
//
router.put('/:id/edit',upload.single('new-img'),productController.update)

router.delete('/:id',productController.delete)

/*
Carrito de compras
*/ 
router.get('/cart/all',authMiddleware,productController.cart)

router.post('/cart/add/:id',authMiddleware,productController.addToCart)

router.delete('/cart/:id',authMiddleware,productController.cartDelete)

module.exports = router;