// IMPORTACIONES
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')

const app = express()

mongoose.connect("mongodb://localhost:27017/library", {useNewUrlParser: true})
// MIDDLEWARES

app.use(express.json())
app.use(cookieParser())


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
app.get('/api/autor/:IDAutor', (req, res) => {
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
app.get('/api/usuarios/:_id', (req, res) => {
    const usuarioABuscar = req.params.IDAutor
    Autor.find({_id: usuarioABuscar}).then(datosusuario =>{
        res.send(datousuario)
    })
}) 

// RUTAS DE AUTENTICACION
app.post('/api/usuarios/login', (req, res) => {
    // 1.-ENCUENTRA EL CORREO
    Usuario.findOne({'email': req.body.email}, (err, usuario) => {
        if(!usuario) return res.json({loginSuccess:  false, message: 'E-mail incorrecto'})
        
        // 2.- Opten el pasword y compruebalo
    usuario.comparePassword(req.body.password, (err, isMatch) => {
        if(!isMatch) return res.json({loginSuccess: false, message:"Password erroneo"})
    })
        // 3.- Si todo es correcto genera un token}
    usuario.generateToken((err, usuario) =>{
        if(err) return res.status(400).send(err)
        // AQUI SE GUARDA EL TOKEN COMO UN COOKIE
        res.cookie('library_auth', usuario.token).status(200).json({loginSuccess: true})

    })    
    
})
})





// LISTENERS
app.listen(3002, ()=>{
    console.log('Servidor corriendo en el puerto 3002');
    
})
