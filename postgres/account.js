var pool = require(__dirname + '/dbConnectionPool.js');
var sha3_224 = require('js-sha3').sha3_224;

function Account() {}

Account.prototype.readAll = function() {
    return pool.query('SELECT * FROM account');
};

Account.prototype.getId = function(account) {
    return pool.query('SELECT id FROM account WHERE account = $1', [account]);
};

Account.prototype.getAccount = function(account) {
    return pool.query('SELECT * FROM account WHERE account = $1', [account]);
};

Account.prototype.create = function(entity) {
	return pool.query("SELECT nextval(pg_get_serial_sequence('account', 'id')) as id;").then(function(result) {
        var id = result.rows[0].id;
	    return pool.query("INSERT INTO Account (id, account, passphrase, email, createTimestamp) VALUES ($1, $2, $3, $4, now())",
	        [id, entity.account, sha3_224(entity.password), entity.email])
	    .then(function(){
	        return id;
	    }).catch(function (err) {
            console.log(err.message, err.stack);
        });
	}).catch(function (err) {
        console.log(err.message, err.stack);
	});
};

exports = module.exports = new Account();
