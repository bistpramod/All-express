// Import the Express framework for building the web server
const express = require('express')

// Load mock user data from a JSON file
const users = require('./MOCK_DATA.json')

// Create an Express application instance
const app = express()

// Define the port number for the server to listen on
// IMPROVEMENT: Changed port from 4000 to 5000 as per requirements
const PORT = 5000

// Middleware to enable CORS (Cross-Origin Resource Sharing)
// This allows the API to be accessed from web browsers on different domains
// IMPROVEMENT: Added comprehensive CORS headers to handle cross-origin requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

// Define a GET route for '/users' that returns the list of users as JSON
// IMPROVEMENT: Already returns MOCK_DATA.json from the require at the top
// This endpoint serves all user data from the mock database when accessed at /users
app.get('/users', (req, res) => {
  // Send the users data as a JSON response
  res.json(users)
})

// Define a GET route for '/users/:id' that returns a single user by numeric id
// IMPROVEMENT: Added route to fetch a single user by path param, e.g. /users/1
app.get('/users/:id', (req, res) => {
  const id = Number(req.params.id)
  if (Number.isNaN(id)) return res.status(400).json({ error: 'Invalid id' })
  const user = users.find(u => u.id === id)
  if (!user) return res.status(404).json({ error: 'User not found' })
  res.json(user)
})

// Define a GET route for '/user' that accepts ?id=1 as a convenience
// IMPROVEMENT: Alternate query-based access: /user?id=1
app.get('/user', (req, res) => {a
  const id = Number(req.query.id)
  if (!req.query.id) return res.status(400).json({ error: 'Missing id query parameter' })
  if (Number.isNaN(id)) return res.status(400).json({ error: 'Invalid id' })
  const user = users.find(u => u.id === id)
  if (!user) return res.status(404).json({ error: 'User not found' })
  res.json(user)
})

// Start the server and listen on the specified port
app.listen(PORT, () => {
  // Log a message to the console when the server starts
  console.log(`Example app listening on port ${PORT}`)
})



