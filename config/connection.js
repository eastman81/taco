// setup the code to connect Node to MySQL
var mysql = require('mysql');

var connection; 

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
	connection = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'tacos_db'
	});
}

connection.connect(function(error) {
	if (error) {
		console.log('Error connecting: ' + error.stack);
		return;
	}
	console.log('Connected as id ' + connection.threadId);
});

// Export the connection
module.exports = connection;