const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'manager',
  database: 'todo',
  
});

connection.connect((err) => {
  if (err) {
    console.error('Connection error:', err);
  } else {
    console.log('Connected to MySQL!');
  }
});

module.exports = connection;
