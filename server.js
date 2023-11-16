const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
var cors = require('cors')

// Middleware


const app = express();
app.use(cors())

app.use(bodyParser.json());

const port = 5000; // You can choose any port you prefer

// Create a connection to your MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rishabh@5678',
  database: 'shop',
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Define an API endpoint to fetch data
app.get('/', (req, res) => {

  const query = 'SELECT product_id, product_name, product_brand, product_price, product_ram, product_storage,product_camera FROM product;';

  connection.query(query, (err, data) => {
    if (err) {
      console.error('Error executing the query:', err);
      return res.status(500).json({ error: 'An error occurred while fetching data' });
    }
console.log(data)
    // Send the data as JSON response
    res.json(data);
  
  });
});

app.get('/list', (req, res) => {

  const query = 'SELECT product_id, product_name, product_brand, product_price, product_ram, product_storage,product_camera FROM product;';

  connection.query(query, (err, data) => {
    if (err) {
      console.error('Error executing the query:', err);
      return res.status(500).json({ error: 'An error occurred while fetching data' });
    }
console.log(data)
    // Send the data as JSON response
    res.json(data);
  
  });
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});