const MongoModels = require('mongo-models');

const { User, ArchivedUser } = require('./modelFactories');
const { UserConnector }  = require('../connectors');

const createConnectionDb = async (config) => {
  const {
    username, password, instance, name: databaseName
  } = config;
  let uri = `mongodb://${instance}/${databaseName}`;

  if (username && password) {
    uri = `mongodb://${username}:${password}@${instance}/${databaseName}`;
  }

  try {
    console.log(`[CRON] Connecting to database ${uri}`);
    await MongoModels.connect({ uri, db: databaseName }, { useUnifiedTopology: true });
    console.log('[CRON] Connection to database is success');

    const userConnector = new UserConnector({ db: User });

    return {
      userConnector
    };
  } catch (error) {
    console.log('Something when error when creating connection to database');
    console.error(error);
    throw error;
  }
};

module.exports = createConnectionDb;
