const express = require('express');
const app = express();

const PORT = 3000;
const HOST = 'localhost';

const users = [{ id: 1 }, { id: 2 }];

app.get(
  '/',
  (req, res, next) => {
    console.log('home');
    req.test = 'magic';
    //res.send('Error'); //- can stop req,res cycle
    next();
  },
  (req, res) => {
    console.log(req.test);
    res.send('HOME');
  }
);
app.get('/users', (req, res) => {
  res.send(users);
});
app.get('*', (req, res) => {
  res.send('NOT FOUND');
});

app.listen(PORT, HOST, () => {
  console.log(`Server started on ${HOST}:${PORT}`);
});
