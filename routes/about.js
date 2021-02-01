var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { pageTitle: 'About | Ross Keeley Portfolio', template: 'about'});
});

module.exports = router;
