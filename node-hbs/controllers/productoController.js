var mongoose = require('mongoose');
var Producto = require("../models/producto");

var productoController = {};

productoController.list = function(req, res){
    
    Producto.find({}).exec()
    .then(Productos => {
        console.log("The INDEX");
        res.render('../views/producto/index', {productos: Productos,titulo:'INDEX'} );
    })
    .catch(err => {
        console.log('Error: ', err);
    });
    
};

productoController.show = function(req, res){

    Producto.findOne({ _id: req.params.id }).exec()
    .then(producto => {
      res.render('../views/producto/show', { producto: producto });
    })
    .catch(err => {
      console.log('Error: ', err);
    }); 
     
};

productoController.create = function(req, res){
    res.render('../views/producto/create');
};

productoController.save = function(req, res){
    var producto = new Producto( req.body );
    
    producto.save()
    .then(() => {
      console.log("Successfully created a producto. :)");
      res.redirect("/productos/show/" + producto._id);
      //res.redirect("/usuarios");
    })
    .catch(err => {
      console.log('Error: ', err);
    });
  
};

productoController.edit = function(req, res) {
  Producto.findOne({_id: req.params.id}).exec()
  .then(producto => {
    res.render("../views/producto/edit", {producto: producto});
  })
  .catch(err => {
    console.log("Error:", err);
  })
};

productoController.update = function(req, res){
    Producto.findByIdAndUpdate(req.params.id, {
        $set: {
          nombre: req.body.nombre,
          descripcion: req.body.descripcion,
          costo: req.body.costo,
          stock: req.body.stock
        }
    }, { new: true })
    .then(producto => {
        console.log(producto);
        res.redirect('/productos/show/' + producto._id);
    })
    .catch(err => {
        console.log('Error: ', err);
        res.render('../views/productos/edit', { producto: req.body });
    });
};

productoController.delete = function(req, res){
    
    Producto.deleteOne({ _id: req.params.id })
    .then(() => {
      console.log("Producto deleted!");
      res.redirect("/productos");
    })
    .catch(err => {
      console.log('Error: ', err);
    });
    
};

module.exports = productoController;