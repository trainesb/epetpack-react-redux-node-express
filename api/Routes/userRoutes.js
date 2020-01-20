'use strict';

module.exports = function(app) {
	var userController = require('../Controller/userController');

	app.route('/users')
		.get(userController.list_all_users);
};
