const config = require('../../config');
const { createBasicJob } = require('../jobs');
const { BasicService } = require('../services');
const { createConnectionDb } = require('../factories');

const cron = async () => {
  const { userConnector, userArchiveConnector } = await createConnectionDb(config);
  const basicService = new BasicService({ userConnector, userArchiveConnector, config });

  const basicJob = createBasicJob({ basicService, config });

  if(basicJob) basicJob.start();
};

module.exports = cron;
