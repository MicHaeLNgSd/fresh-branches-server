const express = require('express');
const { validateRegistrationMW } = require('./middlewares/user.mw');
const {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
} = require('./controllers/userController');

const app = express();
const PORT = 3000;
const HOST = 'localhost';

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

const bodyParserMW = express.json();

app.get('/users', getUsers);
app.post('/users', bodyParserMW, validateRegistrationMW, createUser);

app.get('/users/:id', getUser);
app.delete('/users/:id', deleteUser);
app.put('/users/:id', bodyParserMW, updateUser);

app.get('*', (req, res) => {
  res.send('NOT FOUND');
});

/*
  -get data //express.json()
  -check data //yup
  -save data (and to DB)
  -make user session
  -send to client
*/

app.listen(PORT, HOST, () => {
  console.log(`Server started on ${HOST}:${PORT}`);
});
