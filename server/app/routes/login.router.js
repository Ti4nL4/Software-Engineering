module.exports = function(router){
	const loginController = require('../controllers/login.controller')

	router.post('/login', loginController.checkLogin)
};