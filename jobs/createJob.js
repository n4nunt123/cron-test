const { CronJob } = require('cron');
const {
  name, cronTime, runOnInit, timeZone
} = require('../config');

const createCronJob = () => {
  let cronJob;
  const jobName = name;
  try {
    const onTick = () => console.log('hello world');

    cronJob = new CronJob(
      cronTime,
      onTick,
      runOnInit,
      timeZone
    );

    console.log(`[CRON] ${jobName} is success created`);
  } catch (error) {
    console.log(`[CRON] something when wrong creating job ${jobName}`);
    console.error(error);
  }

  return cronJob;
};

module.exports = createCronJob;
