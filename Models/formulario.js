const { Schema, model } = require('mongoose');

const FormularioSchema = new Schema({
    carnet: {
        type: String,
        required: true,
        unique: true,
    },
    nombres: {
        type: String,
        required: true,
    },
    direccion: {
        type: String,
        required: true,
    },
    genero: {
        type: String,
        enum: ['Masculino', 'Femenino'],
        required: true,
    },
    telefono: {
        type: String,
        required: true,
    },
    fecha_nacimiento: {
        type: Date,
        required: true,
    },
    carrera: {
        type: String,
        required: true,
    },
    genero_poesia: {
        type: String,
        enum: ['Lírica', 'Épica', 'Dramática'],
        required: true,
    },
    fecha_creacion: {
        type: Date,
        default: Date.now,
    },
    fecha_declamacion: {
        type: Date,
        required: true,
    }
});

const FormularioModel = model('Formulario', FormularioSchema);

module.exports = FormularioModel;







