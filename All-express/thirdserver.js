const http = require('http');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  return res.send('Hello from Third Server!');
});

app.get('/about', (req, res) => {
  return res.send('About Page from Third Server');
});

app.post('/post', (req, res) => {
  return res.send('POST request received on Third Server');
});

const myServer = http.createServer(app);
myServer.listen(3002, () => {
  console.log('Third Server is running on port 3002');
});
