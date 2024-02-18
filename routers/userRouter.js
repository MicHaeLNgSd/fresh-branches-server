const express = require('express');
const { validateRegistrationMW } = require('../middlewares/user.mw');
const {
  getUsers,
  deleteUser,
  updateUser,
  createUser,
  getUser,
} = require('../controllers/userController');

const userRouter = express.Router();
/*
  -get data //express.json()
  -check data //yup
  -save data (and to DB)
  -make user session
  -send to client
*/

userRouter.get('/', getUsers);
userRouter.get('/:userId', getUser);
userRouter.delete('/:userId', deleteUser);
userRouter.put('/:userId', updateUser);
userRouter.post('/', validateRegistrationMW, createUser);

module.exports = userRouter;
