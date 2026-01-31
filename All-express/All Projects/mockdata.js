const express = require('express')
const cors = require('cors')
const users = require('./MOCK_DATA.json')

const app = express()
const PORT = 5000
app.use(cors())

app.get('/users', (req, res) => {
  res.json(users)
})

app.get('/users/:id', (req, res) => {
  const id = Number(req.params.id)
  if (Number.isNaN(id)) return res.status(400).json({ error: 'Invalid id' })
  const user = users.find((u) => u.id === id)
  if (!user) return res.status(404).json({ error: 'User not found' })
  res.json(user)
})

app.get('/user', (req, res) => {
  const id = Number(req.query.id)
  if (!req.query.id) return res.status(400).json({ error: 'Missing id query parameter' })
  if (Number.isNaN(id)) return res.status(400).json({ error: 'Invalid id' })
  const user = users.find((u) => u.id === id)
  if (!user) return res.status(404).json({ error: 'User not found' })
  res.json(user)
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
