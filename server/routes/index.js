var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res) {
  var file = req.params[0] || '../public/views/index.html';
  res.sendFile(path.join(__dirname, '../', file));
});

router.get('/*', function(req, res) {
 //'Path is: ', path.join(__dirname, '../', file);
  res.sendFile(path.join(__dirname, '../../public/views/index.html'));
});

module.exports = router;
