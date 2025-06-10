const MongoModels = require('mongo-models');

const { BasicService } = require('../services');

const servers = () => {
  const basicService = new BasicService();

  return { basicService };
};

module.exports = servers;
