'use strict';
var sql = require('./db.js');

var User = function(user) {
	this.email = user.email;
	this.name = user.name;
	this.phone = user.phone;
	this.address = user.address;
	this.notes = user.notes;
	this.joined = user.joined;
	this.role = user.role;
}

User.getAllUser = function(result) {
	sql.query("SELECT * FROM user", function(err, res) {
		if(err) {
			console.log("error: ", err);
			result(null, err);
		} else {
			console.log('Users: ', res);
			result(null, res);
		}
	});
};

module.exports = User;
