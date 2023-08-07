const mysql= require('mysql2');
// CONNECT NODE TO DB
const db = mysql.connectDb({
	host: 'localhost',
	user: 'root',
	password: 'phoebe',
	database: 'company_db'
}, 
console.log('Connected to the database.'));

module.exports = db