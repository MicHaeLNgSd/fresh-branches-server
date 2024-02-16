const users = [{ id: 1 }, { id: 2 }];

class User {
  static async create(newData) {
    const newUser = { ...newData };
    newUser.id = users.length;
    newUser.createdAt = new Date();
    //conditions
    users.push(newUser);
    return newUser;
  }
  static async findOne() {}
  static async findAll() {
    return users;
  }
  static async update() {}
  static async delete() {}
}

module.exports = User;
