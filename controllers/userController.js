const User = require('../models/User');

module.exports.getUsers = async (req, res) => {
  const users = await User.findAll();
  res.send(users);
};

module.exports.createUser = async (req, res, next) => {
  const newUser = await User.create(req.user);
  console.log(req.user);
  res.send(newUser);
};

module.exports.getUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne(Number(id));
  res.send(user);
};

module.exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  const deletedUser = await User.delete(Number(id));
  res.send(deletedUser);
};

module.exports.updateUser = async (req, res, next) => {
  const {
    params: { id },
    body,
  } = req;
  const updatedUser = await User.update(Number(id), body);
  res.send(updatedUser);
};
