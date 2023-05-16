var mongoose = require('mongoose');
var Empleado = require("../models/empleado");

var empleadoController = {};

empleadoController.list = function(req, res){
    
    Empleado.find({}).exec()
    .then(Empleados => {
        console.log("The INDEX");
        res.render('../views/empleado/index', {empleados: Empleados,titulo:'INDEX'} );
    })
    .catch(err => {
        console.log('Error: ', err);
    });
    
};

empleadoController.show = function(req, res){

    Empleado.findOne({ _id: req.params.id }).exec()
    .then(empleado => {
      res.render('../views/empleado/show', { empleado: empleado });
    })
    .catch(err => {
      console.log('Error: ', err);
    }); 
     
};

empleadoController.create = function(req, res){
    res.render('../views/empleado/create');
};

empleadoController.save = function(req, res){
    var empleado = new Empleado( req.body );
    
    empleado.save()
    .then(() => {
      console.log("Successfully created a empleado. :)");
      res.redirect("/empleados/show/" + empleado._id);
      //res.redirect("/usuarios");
    })
    .catch(err => {
      console.log('Error: ', err);
    });
  
};

empleadoController.edit = function(req, res) {
  Empleado.findOne({_id: req.params.id}).exec()
  .then(empleado => {
    res.render("../views/empleado/edit", {empleado: empleado});
  })
  .catch(err => {
    console.log("Error:", err);
  })
};

empleadoController.update = function(req, res){
    Empleado.findByIdAndUpdate(req.params.id, {
        $set: {
          nombre: req.body.nombre,
          apellido: req.body.apellido,
          dni: req.body.dni,
          cargo: req.body.cargo,
          sueldo: req.body.sueldo,
          telefono: req.body.telefono
        }
    }, { new: true })
    .then(empleado => {
        console.log(empleado);
        res.redirect('/empleados/show/' + empleado._id);
    })
    .catch(err => {
        console.log('Error: ', err);
        res.render('../views/empleado/edit', { empleado: req.body });
    });
};

empleadoController.delete = function(req, res){
    
    Empleado.deleteOne({ _id: req.params.id })
    .then(() => {
      console.log("Empleado deleted!");
      res.redirect("/empleados");
    })
    .catch(err => {
      console.log('Error: ', err);
    });
    
};

module.exports = empleadoController;