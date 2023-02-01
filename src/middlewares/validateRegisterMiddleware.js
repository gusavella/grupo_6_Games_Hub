const { body } = require('express-validator');
module.exports = [
    body('names').notEmpty().withMessage('Debes ingresar un nombre'),
    body('surnames').notEmpty().withMessage('Debes ingresar un apellido'),
    body('password').notEmpty().withMessage('Debes ingresar una contraseña'),
    body('phone').notEmpty().withMessage('Debes ingresar un número de teléfono'),
    body('email')
        .notEmpty().withMessage('Debes ingresar un email').bail()
        .isEmail().withMessage('Debes ingresar un formato de correo válido'),
    body('address').notEmpty().withMessage('Debes ingresar tú dirección'),
]