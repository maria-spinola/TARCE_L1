var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('bd', {title:'Base de Datos'});
});

module.exports = router;
