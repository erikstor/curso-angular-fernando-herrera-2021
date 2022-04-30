const jwt = require('jsonwebtoken')

const validarToken = (req, res, next) => {

    const token = req.header('x-token')

    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'Error en el token'
        })
    }

    try {

        const {uuid, name} = jwt.verify(token, process.env.SECRET_JWT_SEED)

        req.uuid = uuid
        req.name = name

    } catch (e) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no valido'
        })
    }

    next()
}

module.exports = {
    validarToken
}