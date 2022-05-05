const express = require('express')
const cors = require('cors')
const path = require('path')
const {dbConnection} = require("./db/config");
require('dotenv').config()

const app = express()
// BD
dbConnection();
// Directorio Publico
app.use(express.static('public'))
//cors
app.use(cors())
//lectura y parseo del body
app.use(express.json())
//rutas
app.use('/api/auth', require('./routes/auth'))

// Manejar demas rutas
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'))
})


app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en ${process.env.PORT}`)
})