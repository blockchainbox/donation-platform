var express = require('express');
var router = express.Router();
var account = require('../postgres/account.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: '捐政 - 註冊' });
});

//register account
router.post('/putAccount', function(req, res, next) {
   // console.log(req);
   if (req.body.account !== undefined && req.body.account !== null && req.body.account !== '' &&
		req.body.password !== undefined && req.body.password !== null && req.body.password !== '') {
	   account.getId(req.body.account).then(function(result) {
			var id = 0;
	
			if(result.rows.length > 0)
				id = result.rows[0].id;

			if(id > 0){
				res.json({'message':'此帳號已經註冊'});
			}
			else{
				account.create(accountEntity).then(function(result) {
					console.log(result);
				}).catch(function(err) {
					console.log(err);
				});
			}
		}).catch(function(err) {
			res.json({'error': err});
		});
	}
	else {
	    res.json({'error': {'message': 'must give account and password'}});
	}
});

module.exports = router;
