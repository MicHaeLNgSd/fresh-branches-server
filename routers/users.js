const express = require('express');
const router = express.Router();
const { validateRegistrationMW } = require('../middlewares/user.mw');
const {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
} = require('../controllers/userController');

/*
  -get data //express.json()
  -check data //yup
  -save data (and to DB)
  -make user session
  -send to client
*/
router.get('/', getUsers);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);
router.post('/', validateRegistrationMW, createUser);

module.exports = router;
