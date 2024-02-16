const express = require('express');
//const yup = require('yup');

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

/*
  -get data
  -check data
  -save data (and to DB)
  -make user session
  -send to client
*/
app.post('/users', express.json(), (req, res, next) => {
  console.log(req.body);
});

app.listen(PORT, HOST, () => {
  console.log(`Server started on ${HOST}:${PORT}`);
});
