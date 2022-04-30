const {response, request} = require('express')
const Usuario = require('../models/Usuario')
const bcrypt = require('bcryptjs')
const {generarJWT} = require('../helpers/jwt')

const crearUsuario = async (req = request, res = response) => {

    try {
        const {email, name, password} = req.body

        // Verificar que el email no exista

        const usuario = await Usuario.findOne({
            email
        })

        if (usuario) {
            return res.status(400).json({ok: false, msg: 'El email ya esta registrado'})
        }

        // Crear usuario con el modelo
        const dbUsuario = new Usuario(req.body)
        // Hashear la contraseña
        const salt = bcrypt.genSaltSync()
        dbUsuario.password = bcrypt.hashSync(password, salt)
        // generar JWT
        const token = await generarJWT(dbUsuario.id, name)
        // guardar usuario en bd
        await dbUsuario.save()
        // generar respuesta
        return res.status(201).json({ok: true, uuid: dbUsuario.id, name, token})
    } catch (e) {

    }

}


const loginUsuario = async (req = request, res = response) => {

    try {
        const {email, password} = req.body

        const dbUser = await Usuario.findOne({email})

        if (!dbUser) {
            return res.status(400).json({ok: false, msg: 'Las credenciales no son validas'})
        }

        // Confirmar si el password hace match
        const validPassword = bcrypt.compareSync(password, dbUser.password)

        if (!validPassword) {
            return res.status(400).json({ok: false, msg: 'Las credenciales no son validas'})
        }

        const token = await generarJWT(dbUser.id, dbUser.name)

        return res.json({
            ok: true,
            uuid: dbUser.id,
            name: dbUser.name,
            token
        })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ok: false, msg: 'Ups, por favor comuniquese con el administrador'})
    }

}

const renuew = async (req = request, res = response) => {
    const {uuid, name} = req
    const token = await generarJWT(uuid, name)
    return res.json({ok: true, uuid, name, token})
}

module.exports = {
    crearUsuario,
    loginUsuario,
    renuew
}