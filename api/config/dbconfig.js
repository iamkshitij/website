const mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'iamkshitij',
    database: 'website'
});


module.exports = connection;