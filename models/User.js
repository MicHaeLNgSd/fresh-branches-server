let users = [{ id: 1, email: 'test@test.test', password: '2134sadsa' }];

class User {
  static async create(newData) {
    const newUser = { ...newData };
    newUser.id = users.length;
    newUser.createdAt = new Date();
    //conditions
    users.push(newUser);
    return newUser;
  }

  static async findOne(id) {
    const user = users.find((u) => u.id === id);
    return user;
  }

  static async findAll() {
    return users;
  }

  static async update(id, newData) {
    users = users.map((u) => {
      if (u.id !== id) return u;
      const updatedUser = { ...u, ...newData };
      return updatedUser;
    });
    const updatedUser = await User.findOne(id);
    return updatedUser;
  }

  static async delete(id) {
    const deletedUser = await User.findOne(id);
    users = users.filter((u) => u.id !== id);
    return deletedUser;
  }
}

module.exports = User;
