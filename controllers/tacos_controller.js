var express = require('express');
var router = express.Router();

var taco = require('../models/taco.js');

router.post('/', function(req, res) {
	taco.create([
		"taco_name"
	], [
		req.body.taco_name
	], function(result) {
		res.json({ id: result.insertId });
	});
});

router.put('/:id', function(req, res) {
	var condition = "id = " + req.params.id;

	console.log("condition", condition);

	taco.update({
		devoured: true
	}, condition, function(result) {
		if (result.changedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

module.exports = router;