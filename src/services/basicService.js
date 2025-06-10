const userData = require('../data/example-data.json');

class BasicService {
  constructor(options) {
    Object.assign(this, options);
  }

  async getUserMember() {
    try {
      const memberUsers = userData.users.filter((user) =>user.isMember === true);
      console.log(memberUsers);
      console.log(`Total user with member are ${memberUsers}`)
    } catch (error) {
      console.log('Error when get data user');
      console.error(error);
    }
  }

  async getNonUserMember() {
    try {
      const nonMemberUsers = userData.users.filter((user) =>user.isMember !== true);
      console.log(nonMemberUsers);
      console.log(`Total user with non member are ${nonMemberUsers}`)
    } catch (error) {
      console.log('Error when get data user');
      console.error(error);
    }
  }
}

module.exports = BasicService;
