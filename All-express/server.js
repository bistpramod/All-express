const http = require('http');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
 return res.send('Hello, World!');
});
 app.get('/about', (req, res) => {  return res.send('About Page'); });

app.post("/post", (req, res) => {
 return res.send('POST request received');
});

const myServer = http.createServer(app);
 myServer.listen(3000, () => {
 console.log('Server is running on port 3000');
 });




 