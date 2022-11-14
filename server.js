const express = require('express');
const app = express();

const path = require('path');

// serve public file
app.use(express.static('public'))

// serve uploaded file
app.use(express.static('files'))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/pages/index.html'));
});

app.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname, '/pages/login.html'));
});

app.get('/tables', function (req, res) {
  res.sendFile(path.join(__dirname, '/pages/tables.html'));
});
app.get('/example', function (req, res) {
  res.sendFile(path.join(__dirname, '/pages/blank.html'));
});

app.post('/submit-data', function (req, res) {
  res.send('POST Request');
});

app.put('/update-data', function (req, res) {
  res.send('PUT Request');
});

app.delete('/delete-data', function (req, res) {
  res.send('DELETE Request');
});

// Handling non matching request from the client
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, '/pages/404.html'));
})

var server = app.listen(5000, function () {
  console.log('Node server is running..');
});