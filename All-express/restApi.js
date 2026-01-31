import express from 'express';

const app = express();
const PORT = 3000;

/* =========================
   MIDDLEWARE
========================= */
app.use(express.json());

/* =========================
   IN-MEMORY DATABASE
========================= */
let users = [
  { id: 1, name: 'Alex', email: 'alex@example.com' },
  { id: 2, name: 'Sam', email: 'sam@example.com' }
];

/* =========================
   ROUTES (REST API)
========================= */

/* GET → Read all users */
app.get('/users', (req, res) => {
  res.status(200).json(users);
});

/* GET → Read single user */
app.get('/users/:id', (req, res) => {
  const id = Number(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json(user);
});

/* POST → Create user */
app.post('/users', (req, res) => {
  const { name, email } = req.body;

  const newUser = {
    id: users.length + 1,
    name,
    email
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

/* PUT → Update user */
app.put('/users/:id', (req, res) => {
  const id = Number(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  user.name = req.body.name;
  user.email = req.body.email;

  res.json(user);
});

/* DELETE → Remove user */
app.delete('/users/:id', (req, res) => {
  const id = Number(req.params.id);
  users = users.filter(u => u.id !== id);

  res.json({ message: 'User deleted successfully' });
});

/* =========================
   SERVER START
========================= */
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
