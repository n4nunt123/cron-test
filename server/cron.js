const { createBasicJob } = require('../jobs');

const cron = async () => {
  const basicJob = createBasicJob();

  if(basicJob) basicJob.start();
};

module.exports = cron;
