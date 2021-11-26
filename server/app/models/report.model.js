const db = require('../common/connect')

const Report = function(report){
	this.Buy_Time =report.Buy_Time;
	this.User_Id = report.User_Id;
	this.Bill_Id = report.Bill_Id;
	this.Product_Id = report.Product_Id;
	this.Quantity = report.Quantity;
	this.Product_Name = report.Product_Name;
	this.Price = report.Price;
	this.Fund = report.Fund;
}
Report.get_all = function(result){
	db.query("select b.Buy_Time,b.User_Id,c.Bill_Id, c.Product_Id,c.Quantity,p.Product_Name,p.Price,p.Fund from Bill b, Cart c, Product p where b.Id = c.Bill_Id and c.Product_Id = p.Id", function(err,report){
		if(err) {
			result(null);
		}
		else result(report);
	});
}
Report.search = function([start,end],result){
	db.query("select b.Buy_Time,b.User_Id,c.Bill_Id, c.Product_Id,c.Quantity,p.Product_Name,p.Price,p.Fund from Bill b, Cart c, Product p where b.Id = c.Bill_Id and c.Product_Id = p.Id and b.Buy_Time >=? and b.Buy_Time <=?",[start,end], function(err,report){
		if(err) {
			result(null);
		}
		else result(report);
	});
}

module.exports = Report;
