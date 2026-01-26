const express = require('express')
const cors = require('cors')
const users = require('./MOCK_DATA.json')

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())

app.get('/users', (_, res) => {
  res.json(users)
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
