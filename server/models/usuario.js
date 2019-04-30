const mongoose = require('mongoose')
const  jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const SALT_I = 10

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
usuarioSchema.pre('save', async function (next){
    if(this.isModified('password')){
        try {
            const salt = await bcrypt.genSalt(SALT_I)
            const hash = await bcrypt.hash(this.password, salt)
            this.password = hash;
            next();
        } catch(err){
            return next(err);
        }
    }
})

usuarioSchema.methods.comparePassword = function(candidatePassword, cb){
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
        if(err) return cb(err)
        cb(null, isMatch)
    })

}

usuarioSchema.methods.generateToken = async function(cb){
    const token = await jwt.sign(this._id.toHexString(),process.env.SECRET)
    this.token = token
    this.save((err, usuario) =>{
        if(err) return cb(err)
        cb(null, usuario)
    })
}

usuarioSchema.statics.findByToken = function(token, cb){
    var usuario = this
    
    jwt.verify(token, process.env.SECRET, function(err, decode){
        usuario.findOne({"_id": decode, "token": token}, function(err, usuario){
            if(err) cb(error)
            cb(null, usuario)
        })
    })
}   

const Usuario = mongoose.model('Usuario', usuarioSchema, 'usuarios')

module.exports = { Usuario }