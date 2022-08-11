const mongoose = require('mongoose');

const { Schema } = mongoose;

const CancionSchema = new Schema({
    titulo: {
        type: String,
        required:true
    },
    grupo: {
        type: String,
        required:true
    },
    anio: {
        type: Number,
        required:true
    },
    genero: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Canciones', CancionSchema);