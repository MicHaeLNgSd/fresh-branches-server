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
app.get('/users', getUsers);
app.get('/users/:id', getUser);
app.delete('/users/:id', deleteUser);
app.put('/users/:id', updateUser);
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

app.post('/users', express.json(), validateRegistrationMW, createUser);

app.listen(PORT, HOST, () => {
  console.log(`Server started on ${HOST}:${PORT}`);
});
