class userConnector {
  constructor(db) {
    this.db = db;
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
}

module.exports = userConnector;
