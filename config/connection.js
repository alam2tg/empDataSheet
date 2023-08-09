const mysql= require('mysql2');
// CONNECT NODE TO DB
const db = mysql.createConnection({
	host: 'localhost',
	user: 'password',
	password: 'password',
	database: 'company_db'
}, 
console.log('Connected to the database.'));

module.exports = db;