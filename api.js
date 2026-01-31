const express = require('express')
const users = require('./MOCK_DATA.json')
const { useLayoutEffect } = require('react')

const app = express()
const PORT = 8080

app.get('/api/users', (req, res) => {
  res.json(users)
})

// app.get('/api/users', (req, res) => {
//   const html =`
//    <ul>
// ${users.map(user => `<li>${user.first_name} ${user.last_name}</li>`).join('')}
   
// </ul>
  
//   `
  
// })
app.listen(PORT, () => {
  console.log(`API Server running on http://localhost:${PORT}`)
})