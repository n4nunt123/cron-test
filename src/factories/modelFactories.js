const MongoModels = require('mongo-models');

class User extends MongoModels { }
User.collectionName = 'users';

class ArchivedUser extends MongoModels { }
ArchivedUser.collectionName = 'archivedUser';

module.exports = {
  User, ArchivedUser
};
