const MongoModels = require('mongo-models');

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
  
    return MongoModels;
  } catch (error) {
    console.error(error)    
  }
};

module.exports = createConnectionDb;
