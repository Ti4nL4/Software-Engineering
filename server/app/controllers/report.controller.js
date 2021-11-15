var Bill = require('../models/report.model')
exports.get_list = function(req, res){
	Bill.get_all((function(data){
		res.send({result: data});
	}))
}
exports.search = function(req, res){
	if(req.query.start==='' || req.query.end===''){
		Bill.get_all((function(data){
			res.send({result: data});
		}));
	}
	else{
	Bill.search([req.query.start,req.query.end],(function(data){
		res.send({result: data});
	}));
	}
}