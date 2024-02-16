const users = [{ id: 1 }, { id: 2 }];

module.exports.getUsers = (req, res) => {
  res.send(users);
};

module.exports.createUser = (req, res, next) => {
  const newUser = req.user;
  newUser.id = users.length;
  newUser.createdAt = new Date();

  users.push(newUser);
  res.send(newUser);
};