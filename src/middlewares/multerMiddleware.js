
let path = require('path');
const multer = require('multer');


function multerMiddleware(req,res,next) {
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, path.join(__dirname,'../../public/images/games'))
    },
    filename: function (req, file, cb) {
    cb(null,   Date.now()+path.extname(file.originalname))
    }
   })
   let upload = multer({ storage: storage })
   upload.single(req.image)
   next()
}

module.exports=multerMiddleware