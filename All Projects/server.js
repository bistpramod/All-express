// Import the Express framework for building the web server
const express = require('express')

// Load mock user data from a JSON file
const users = require('./MOCK_DATA.json')

// Create an Express application instance
const app = express()

// Define the port number for the server to listen on
const PORT = 4000

// Define a GET route for '/users' that returns the list of users as JSON
app.get('/users', (req, res) => {
  // Send the users data as a JSON response
  res.json(users)
})

// Start the server and listen on the specified port
app.listen(PORT, () => {
  // Log a message to the console when the server starts
  console.log(`Example app listening on port ${PORT}`)
})