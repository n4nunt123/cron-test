const MongoModels = require('mongo-models');

const { User, ArchivedUser } = require('./modelFactories');

const createConnectionDb = async (config) => {
  const {
    username, password, instance, name: databaseName
  } = config;
  let uri = `mongodb://${instance}/${databaseName}`;

  if (username && password) {
    uri = `mongodb://${username}:${password}@${instance}/${databaseName}`;
  }

  try {
    await MongoModels.connect({ uri, db: databaseName }, { useUnifiedTopology: true });

    const models = [User, ArchivedUser];

    return { models, databaseClient: MongoModels };
  } catch (error) {
    console.log('Something when error when creating connection to database');
    console.error(error);   
  }
};

module.exports = createConnectionDb;
