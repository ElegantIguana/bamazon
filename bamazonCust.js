// Include the dependencies we downloaded 
var inquirer = require('inquirer');
var mysql = require('mysql');

// Connect to MySQL
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306

	// Username
	user: 'root',

	// Password
	password: '',
	database: 'bamazon'

});