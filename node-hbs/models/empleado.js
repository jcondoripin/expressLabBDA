var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmpleadoSchema = new Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    sueldo: {type: Number, required: true},
    cargo: {type: String, required: true},
    dni: {type: String, required: true},
    telefono: {type: String, required: true},
    
});

module.exports = mongoose.model('empleados', EmpleadoSchema);