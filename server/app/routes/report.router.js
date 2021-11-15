module.exports = function(router){
	var ReportController = require('../controllers/report.controller')

	router.get('/reports', ReportController.search);
	router.get('/reports/list', ReportController.get_list);
};