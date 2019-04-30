const mongoose = require('mongoose')

const usuarioSchema = mongoose.Schema({
    email:{
        type: String
    },
    nombre:{
        type: String
    },
    password:{
        type: String
    },
    token:{
        type: String
    }
})

const Usuario = mongoose.model('Usuario', usuarioSchema, 'usuarios')

module.exports = { Usuario }