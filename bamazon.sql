-- If the database already exists, delete it and start over. --
DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

-- Go into this database to make changes. --
USE bamazonDB;

-- This creates a table with 5 columns, and we signify that the primary column is the first one, the item id. --
CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(35) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
);

-- Here we insert mock values into our table. --
INSERT INTO products (product_name, department_name, price, stock_quantity)
	VALUES("iFone Charging Cable", "Computers", 14.99, 99),
	("32GB USB Drive", "Computers", 9.99, 99),
    ("Bytes© by Cray Studio Headphones", "Audio", 89.99, 30),
    ("10 Hour Phone Powerbank", "Cell Phones", 19.99, 42),
    ("HDMI Cable", "Home Theater", 15.00, 50),
    ("BlueCow Energy Drink", "General", 2.99, 99),
    ("Fony a6000 Mirrorless Camera", "Photography", 299.99, 25),
    ("128GB SD Memory Card", "Photography", 12.99, 45),
    ("LZ Smart TV", "Home Theater", 399.99, 15),
    ("iFone 9.5 Plus", "Cell Phones", 199.99, 5);