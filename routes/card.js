var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.status(200).end();
  io.emit('card', 'ok');
});

module.exports = router;