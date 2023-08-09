const mysql= require('mysql2');
// CONNECT NODE TO DB
const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'company_db'
}, 
console.log('Connected to the database.'));

db.query ('SELECT * FROM department WHERE names',
	function(err, results, fields) {
	  console.log(results); // results contains rows returned by server
	  console.log(fields); // fields contains extra meta data about results, if available
	});

module.exports = db