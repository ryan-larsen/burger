//  Set up connection for ORM
const connection = require('./connection.js')

const orm = {
  selectAll: function (table) {
    const queryString = 'SELECT * FROM ??'
    connection.query(queryString,
      [table],
      (err, res) => {
        if (err) { throw err }
        console.log(res)
      })
  },
  insertOne: function (table, column, value) {
    const queryString = 'INSERT INTO ?? ?? VALUES ?'
    connection.query(queryString,
      [table, column, value],
      (err, res) => {
        if (err) { throw err }
        console.log(res)
      })
  },
  updateOne: function (table, column, value) {
    const queryString = 'UPDATE ?? SET ?? WHERE ?? = ?'
    connection.query(queryString,
      [table, column, value],
      (err, res) => {
        if (err) { throw err }
        console.log(res)
      })
  },
  selectWhere: function (tableInput, colToSearch, valOfCol) {
    const queryString = 'SELECT * FROM ?? WHERE ?? = ?'
    connection.query(queryString,
      [tableInput, colToSearch, valOfCol],
      (err, res) => {
        if (err) { throw err }
        console.log(res)
      })
  },
  selectAndOrder: function (whatToSelect, table, orderCol) {
    const queryString = 'SELECT ?? FROM ?? ORDER BY ?? DESC'
    console.log(queryString)
    connection.query(queryString,
      [whatToSelect, table, orderCol],
      (err, res) => {
        if (err) { throw err }
        console.log(res)
      })
  },
  findWhoHasMost: function (tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
    const queryString =
            'SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1'
    connection.query(queryString,
      [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
      (err, res) => {
        if (err) { throw err }
        console.log(res)
      }
    )
  }
}

// Export ORM for server.js to use
module.exports = orm
