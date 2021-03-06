// import orm.js intp taco.js
var orm = require('../config/orm.js');

var taco = {
	 all: function(cb) {
	 	orm.all("tacos", function(res) {
	 		cb(res);
	 	});
	 },
	 create: function(cols, vals, cb) {
	 	orm.create("tacos", cols, vals, function(res) {
	 		cb(res);
	 	});
	 },
	 update: function(objColVals, condition, cb) {
	 	orm.update("tacos", objColVals, condition, function(res) {
	 		cb(res);
	 	});
	 }
};

// Export
module.exports = taco;