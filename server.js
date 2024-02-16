const express = require('express');
const yup = require('yup');

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
  -get data //express.json()
  -check data //yup
  -save data (and to DB)
  -make user session
  -send to client
*/

const REGISTRATION_SCHEMA = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(16).required(),
  gender: yup.string(),
});

app.post(
  '/users',
  express.json(),
  (req, res, next) => {
    console.log(req.body);
    // validate coz async
    REGISTRATION_SCHEMA.validate(req.body)
      .then((validatedUser) => {
        res.user = validatedUser;
        next();
      })
      .catch((err) => {
        res.send(err.message);
      });
  },
  (req, res, next) => {
    const newUser = req.user;
    newUser.id = users.length;
    newUser.createdAt = new Date();

    users.push(newUser);
    res.send(newUser);
  }
);

app.listen(PORT, HOST, () => {
  console.log(`Server started on ${HOST}:${PORT}`);
});
