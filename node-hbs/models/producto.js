var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductoSchema = new Schema({
    nombre: {type: String, required: true},
    costo: {type: Number, required: true},
    descripcion: {type: String, required: true},
    stock: {type: Number, required: true},
});

module.exports = mongoose.model('productos', ProductoSchema);
