class userConnector {
  constructor(options) {
    this.db = options.db;
  }

  async getAllUsers() {
    try {
      const users = await this.db.find();
      return users;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }

  async getUserById(userId) {
    try {
      const user = await this.db.findOne({ id: userId });
      return user;
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  }

  async createUser(userData) {
    try {
      const result = await this.db.insertOne(userData);
      return result.ops[0];
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }
}

module.exports = userConnector;
