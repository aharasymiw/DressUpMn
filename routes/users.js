var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('You\'ve reached the users');
});

module.exports = router;
