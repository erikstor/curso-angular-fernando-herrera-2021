const {Router} = require('express')
const {check} = require("express-validator");
const router = Router()
const {crearUsuario, renuew, loginUsuario} = require('../controller/auth')
const {validarCampos} = require("../middlewares/validar-campos");
const {validarToken} = require("../middlewares/validar-token");


router.post(
    '/new',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'La contraseña es obligatorio').isLength({min: 6}),
        validarCampos,
    ],
    crearUsuario)

router.post(
    '/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'La contraseña es obligatorio').isLength({min: 6}),
        validarCampos,
    ],
    loginUsuario
)

router.get('/renew', validarToken, renuew)


module.exports = router