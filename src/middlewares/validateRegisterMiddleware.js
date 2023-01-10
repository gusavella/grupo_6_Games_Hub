const { body } = require('express-validator');
module.exports = [
    body('names').notEmpty().withMessage('Debes escribir un nombre'),
    body('surnames').notEmpty().withMessage('Debes escribir un apellido'),
    body('password').notEmpty().withMessage('Debes escribir una contraseña'),
    body('phone').notEmpty().withMessage('Debes escribir un número de teléfono'),
    body('email')
        .notEmpty().withMessage('Debes escribir un email válido').bail()
        .isEmail().withMessage('Debes escribir un formato de correo válido'),
    body('adress').notEmpty().withMessage('Debes añadir tú dirección'),
]