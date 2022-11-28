var express = require('express');
var router = express.Router();
var cool = require('cool-ascii-faces')

router.get('/mejoras', function(request,response){
  response.send(cool());
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('mejoras');
});

module.exports = router;
