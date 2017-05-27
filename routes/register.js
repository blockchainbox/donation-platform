var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: '捐政 - 註冊' });
});

module.exports = router;
