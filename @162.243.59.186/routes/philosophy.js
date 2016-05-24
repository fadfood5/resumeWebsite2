var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('philosophy', { title: 'Fadi Bitar - Philosophy' });
});

module.exports = router;
