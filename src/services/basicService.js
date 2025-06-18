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

  async _archiveUser() {
    try {
      
    } catch (error) {
      console.log('Error when archiving user');
      console.error(error);
    }
  }

  async processUsers() {
    try {
      const today = new Date();
      const todayUTC = Date.UTC(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
      );
      const users = await this.userConnector.getAllUsers();

      await users.reduce(async (_, user) => {
        const { expiredAt, isMember, id } = user;
        const expiredDate = new Date(user);
        const expiredDateUTC = Date.UTC(
          expiredDate.getFullYear(),
          expiredDate.getMonth(),
          expiredDate.getDate()
        );
        const diffInMs = todayUTC - expiredDateUTC;
        const isExpired = diffInMs > 0;

        if (isExpired && isMember) {
          const archivedUser = await this.userArchiveConnector.getUserById(id);
        }
      })
    } catch (error) {
      
    }
  }
}

module.exports = BasicService;
