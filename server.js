// Import Express for application
const express = require('express')

// Set up port for app, process.env.PORT lets port be set by Heroku
const PORT = process.env.PORT || 3000
const app = express()

// Serve static content for app from "public" directory in app directory
app.use(express.static('public'))

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Set up Express Handlebars
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Import routes, give server access to them
const routes = require('./controllers/burger_controller.js')
app.use(routes)

// Start server to listen to client requests
app.listen(PORT, () => {
  // Log server has started
  console.log('Server listening on: http://localhost:' + PORT)
})
