/**
 * User Connector
 * options: {
 *   db: Database instance for user operations
 * }
 */
class userConnector {
  constructor(options) {
    Object.assign(this, options);
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
      await this.db.insertOne(userData);
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }
}

module.exports = userConnector;
