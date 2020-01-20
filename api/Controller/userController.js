'use strict';

var User = require('../Model/userModel.js');

exports.list_all_users = function(req, res) {
	User.getAllUser(function(err, user) {
		console.log('User Controller');

		if (err)
			res.send(err);

		console.log('res: ', user);
		res.send(user);
	});
};
