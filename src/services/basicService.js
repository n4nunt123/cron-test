const userData = require('../data/example-data.json');

/**
 * BasicService class
 * @property {UserConnector} userConnector - Connector for user operations
 * @property {UserArchiveConnector} userArchiveConnector - Connector for user archive operations
 */
class BasicService {
  constructor(options) {
    Object.assign(this, options);
  }

  async _getUserMember() {
    try {
      const users = await this.userConnector.getAllUsers();
      const memberUsers = users.filter((user) =>user.isMember === true);
      console.log(memberUsers);
      console.log(`Total user with member are ${memberUsers}`)
    } catch (error) {
      console.log('Error when get data user');
      console.error(error);
    }
  }

  async _getNonUserMember() {
    try {
      const users = await this.userConnector.getAllUsers();
      const nonMemberUsers = users.filter((user) =>user.isMember !== true);
      console.log(nonMemberUsers);
      console.log(`Total user with non member are ${nonMemberUsers}`)
    } catch (error) {
      console.log('Error when get data user');
      console.error(error);
    }
  }

  async processUsers() {
    try {
      
    } catch (error) {
      
    }
  }
}

module.exports = BasicService;
