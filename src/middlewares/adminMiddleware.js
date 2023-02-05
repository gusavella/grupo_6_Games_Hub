const { body } = require('express-validator')
module.exports = [
    body('name').notEmpty().withMessage('El campo no puede estar vacio'),
]   