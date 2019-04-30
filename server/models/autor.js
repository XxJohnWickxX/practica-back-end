const mongoose = require('mongoose')

const autorSchema = mongoose.Schema({
    IDAutor:{
        type: String
    },
    Nombre:{
        type: String
    }
})
const Autor = mongoose.model('Autor', autorSchema, "autor")

module.exports = { Autor }