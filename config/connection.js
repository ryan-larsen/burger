// Pull in required dependencies
const mysql = require('mysql')

// Create the MySQL connection object
let connection

if (process.env.JAWSDB_URL) {
  // DB is JawsDB on Heroku
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  // DB is local on localhost
  connection = mysql.createConnection({
    port: 3000,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'burgers_db'
  })
};

// Make the connection to MySQL
connection.connect(function (err) {
  if (err) {
    console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n')
    return
  }
  console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n')
})

// Export connection for ORM use
module.exports = connection
