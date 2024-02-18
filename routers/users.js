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

const bodyParserMW = express.json();
router.get('/', getUsers);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
router.put('/:id', bodyParserMW, updateUser);
router.post('/', bodyParserMW, validateRegistrationMW, createUser);

module.exports = router;
