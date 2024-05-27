const { param, body, validationResult } = require('express-validator')

const updateValidator = [
    param('id').notEmpty().withMessage('Debes pasar un ID').isInt().withMessage('Debe ser un entero'),
    (req, res, next) => {

        const errors = validationResult(req).mapped()
        console.log(Object.keys(errors))
        if (Object.keys(errors).length) {
            res.send(errors)
        } else {
            next()
        }

    }
]

const addValidator = [

    body('titulo').notEmpty().withMessage('Debes indicar un titulo'),

    body('img').notEmpty().withMessage('Agregar la URL de la imagen'),
    
    body('descripcion').notEmpty().withMessage('Agregar la descripción'),

    (req, res, next) => {

        const errors = validationResult(req).mapped()

        if (Object.keys(errors).length) {
            res.status(400).send(errors)
        } else {
            next()
        }

    }
]


const postValidatorCollection = {
    updateValidator,
    addValidator
}


module.exports = {
    postValidatorCollection
}