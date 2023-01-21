const { body } = require('express-validator')
const path = require('path')
module.exports = [
    body('name')
        .notEmpty().withMessage('Debes escribir un nombre para el producto').bail()
        .isLength({min:5}).withMessage('El nombre debe tener al menos 5 caracteres'),
    body('description')
        .notEmpty().withMessage('Debes ingresar una descripción').bail()
        .isLength({min:20}).withMessage('La descripción debe tener al menos 20 caracteres'),
    body('new-img')
        .custom((value,{req}) =>{
            let file = req.file
            let acceptedExtensions = ['.jpg','.png','.jpeg']

            if(!file){
                throw new Error('El producto debe tener una imagen')
            }else{
                let fileExtension = path.extname(file.originalname)
                if(!acceptedExtensions.includes(fileExtension)) {
                    throw new Error (`Las extensiones permitidas son ${acceptedExtensions.join(', ')}`)
                }
            }
            return true
        }),
    body('')
        .notEmpty().withMessage('').bail()
    body('')
        .notEmpty().withMessage('').bail()
    body('')
        .notEmpty().withMessage('').bail()
    body('')
        .notEmpty().withMessage('').bail()
]