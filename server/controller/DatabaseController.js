var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'talendig_db',
});

connection.connect();

module.exports = connection;