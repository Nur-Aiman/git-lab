// In-memory data store (in production, this would be a database)
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
];

let nextId = 4;

class User {
  static getAll() {
    return users;
  }

  static getById(id) {
    return users.find(user => user.id === parseInt(id));
  }

  static create(data) {
    const newUser = {
      id: nextId++,
      name: data.name,
      email: data.email
    };
    users.push(newUser);
    return newUser;
  }

  static update(id, data) {
    const user = users.find(user => user.id === parseInt(id));
    if (user) {
      if (data.name) user.name = data.name;
      if (data.email) user.email = data.email;
    }
    return user;
  }

  static delete(id) {
    const index = users.findIndex(user => user.id === parseInt(id));
    if (index !== -1) {
      const deletedUser = users[index];
      users.splice(index, 1);
      return deletedUser;
    }
    return null;
  }
}

module.exports = User;
