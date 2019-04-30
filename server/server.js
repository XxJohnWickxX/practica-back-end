// IMPORTACIONES
const express = require('express');
const mongoose = require('mongoose');

const app = express()

mongoose.connect("mongodb://localhost:27017/library", {useNewUrlParser: true})
// MIDDLEWARES

app.use(express.json())


// MODELOS
const { Libro } = require('./models/libro')
const { Autor } = require('./models/autor')
const { Usuario } = require('./models/usuario')

// RUTAS

// RUTAS DE LIBROS
app.get('/api/libro', (req, res) => {
    Libro.find({}).then(dato => {
        res.send(dato)
    })
})

app.post('/api/libro/nuevo', (req, res) => {
    const libro = new Libro (req.body)
    libro.save((err, doc) => {
        if(err) return res.json({success: false, err})
        res.status(200).json({
            success: true,
        })
    })
})

app.get('/api/libro/:IDLibro', (req, res) => {
    const libroABuscar = req.params.IDLibro
    Libro.find({IDLibro: libroABuscar}).then(datos => {
     res.send(datos)
    })
})

// RUTAS AUTORES
app.get('/api/autor', (req, res ) => {
    Autor.find({}).then(datoautor => {
        res.send(datoautor)
    })
})
app.post('/api/autor/nuevo', (req, res) => {
    const autor = new Autor (req.body)
    autor.save((err, doc) => {
        if(err)  return res.json({success: false, err})
        res.status(200).json({
            success:true
        })
    })
})
app.get('/api/autor/IDAutor', (req, res) => {
    const autorABuscar = req.params.IDAutor
    Autor.find({IDAutor: autorABuscar}).then(datosautor =>{
        res.send(datosautor)

    })
})

// RUTAS USUARIOS
app.get('/api/usuarios', (req, res) =>{
    Usuario.find({}).then(datousuario =>{
        res.send(datousuario)
    })
})

app.post('/api/usuarios/nuevo', (req, res) => {
    const usuario = new Usuario(req.body)
    usuario.save((err, doc) => {
        if(err) return res.json({success: false, err})
        res.status(200).json({
            success: true
        })
    })
})
app.get('/api/usuarios/:id', (req, res) => {
    const usuarioABuscar = req.params.IDAutor
    Autor.find({id: usuarioABuscar}).then(datosusuario =>{
        res.send(datousuario)

    })
})






// LISTENERS
app.listen(3002, ()=>{
    console.log('Servidor corriendo en el puerto 3002');
    
})
