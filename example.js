// 1️⃣ Import Express
const express = require('express');
const app = express();

// 2️⃣ Middleware to parse JSON body
app.use(express.json());

// 3️⃣ Example in-memory data
let users = [
  { id: 1, first_name: "Alice", last_name: "Smith" },
  { id: 2, first_name: "Bob", last_name: "Johnson" }
];

// 4️⃣ Route: GET all users
app.get('/users', (req, res) => {
  res.json(users); // send JSON response
});

// 5️⃣ Route: GET single user by id
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
});

// 6️⃣ Route: POST a new user
app.post('/users', (req, res) => {
  const { first_name, last_name } = req.body;
  const newUser = {
    id: users.length + 1,
    first_name,
    last_name
  };
  users.push(newUser);
  res.status(201).json(newUser); // 201 = created
});

// 7️⃣ Route: PUT (update) a user
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: "User not found" });

  const { first_name, last_name } = req.body;
  user.first_name = first_name || user.first_name;
  user.last_name = last_name || user.last_name;

  res.json(user);
});

// 8️⃣ Route: DELETE a user
app.delete('/users/:id', (req, res) => {
  users = users.filter(u => u.id !== parseInt(req.params.id));
  res.json({ message: "User deleted" });
});

// 9️⃣ Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
