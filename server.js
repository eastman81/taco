var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require("body-parser");

// Import routes and give the server access to them.
var tacos_controller = require('./controllers/tacos_controller.js');

// Import the model (taco.js) to use its database functions.
var taco = require('./models/taco.js');

var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));

// set handlebars
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
	taco.all(function(data) {
		var hbsObject = {
			tacos: data
		};
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

app.use('/api/tacos', tacos_controller);

// Listen
app.listen(PORT, function() {
	console.log('The Tacos are listening to you on PORT: ' + PORT);
});
