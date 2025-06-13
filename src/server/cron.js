const config = require('../../config');
const { createBasicJob } = require('../jobs');
const { BasicService } = require('../services');
const { createConnectionDb } = require('../factories');

const cron = async () => {
  const { userConnector } = await createConnectionDb(config);
  const basicService = new BasicService({ userConnector, config });

  const basicJob = createBasicJob({ basicService, config });

  if(basicJob) basicJob.start();
};

module.exports = cron;
