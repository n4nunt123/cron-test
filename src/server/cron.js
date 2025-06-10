const { createBasicJob } = require('../jobs');
const { BasicService } = require('../services');

const cron = async () => {
  const basicService = new BasicService();
  const basicJob = createBasicJob({ basicService });

  if(basicJob) basicJob.start();
};

module.exports = cron;
