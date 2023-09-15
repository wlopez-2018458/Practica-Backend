const { Schema, model } = require('mongoose');

const UsuarioSchema = new Schema({
    user: {
        type: String,
        unique: true,
    },
    password: String,
    rol: String,
});

const UsuarioModel = model('Usuario', UsuarioSchema);

module.exports = UsuarioModel;

