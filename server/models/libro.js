// IMPORTACIONES
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

// SCHEMA
const libroSchema = mongoose.Schema({
    IDLibro:{
        type: String
    },
    Titulo:{
        type: String
    },
    Paginas:{
        type: Number
    },
    Descripcion:{
        type: String
    },
    Autor:{
        type: Schema.Types.ObjectId,
        ref: 'Autor'
    }
    
})
// MODELO
const Libro = mongoose.model('Libro', libroSchema, "libro")
// EXPORTACION
module.exports = { Libro }
