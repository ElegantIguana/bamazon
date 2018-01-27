// Include the dependencies we downloaded 
var inquirer = require('inquirer');
var mysql = require('mysql');

// Connect to MySQL
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,

	// Username
	user: 'root',

	// Password
	password: '',
	database: 'bamazonDB'

});

// a function to make sure the user inputs a positive integer

// a function to ask the user for the item
// and quantity of the item they would like to buy
	//inquirer prompts

	//query to database

	//throw error if user picks an invalid item id

	//if product/quantity is in stock, make a query to update database

	//'order' product for user

	//end connection

	//console log a message to user if not enough product



function displayInventory() {

	// Form the query string
	queryStr = 'SELECT * FROM products';

	// Make the query to the database
	connection.query(queryStr, function(err, res) {

		//if (err) throw err;

		console.log('Existing Inventory: ');
		console.log('...................\n');

		var strOut = '';
		for (var i = 0; i < res.length; i++) {
			strOut = '';
			strOut += 'Item ID: ' + res[i].item_id + ' // ';
			strOut += 'Product Name: ' + res[i].product_name + ' // ';
			strOut += 'Department: ' + res[i].department_name + ' // ';
			strOut += 'Price: $' + res[i].price + '\n';

			console.log(strOut);
		}

		console.log("---------------------------------------------------\n");
	})
}


// Execute the main logic of the program
function runBamazon() {

	// Display the store's inventory
	displayInventory();

}
// Run!
runBamazon();