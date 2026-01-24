const express = require('express')
const users = require('./MOCK_DATA.json')

const app = express()
const PORT = 4000

app.get('/users', (req, res) => {
  res.json(users)
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})