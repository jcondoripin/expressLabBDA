var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('usuario/index', { title: 'Express-usuario' });
  res.render('producto/index', { title: 'Express-producto' });
  res.render('empleado/index', { title: 'Express-producto' });
});

module.exports = router;
