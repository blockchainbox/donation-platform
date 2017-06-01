var account = require('../postgres/account.js');

var accountEntity = {
	'account': 'wangpiju0420123sfsdfsdf',
	'password': 'Ab26537110',
	'email': 'wangpiju0420@gamil.com'
};

account.getId(accountEntity.account).then(function(result) {
	var id = 0;
	
	if(result.rows.length > 0)
		id = result.rows[0].id;

	if(id > 0){
		console.log('此帳號已經註冊');
	}
	else{
		account.create(accountEntity).then(function(result) {
			console.log(result);
		}).catch(function(err) {
			console.log(err);
		});
	}
}).catch(function(err) {
	console.log(err);
});



