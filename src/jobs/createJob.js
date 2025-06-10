const { CronJob } = require('cron');
const {
  name, cronTime, runOnInit, timeZone
} = require('../../config');

const createCronJob = (services) => {
  const { basicService } = services;
  let cronJob;
  const jobName = name;

  try {
    const onTick = async () => {
      await basicService.getUserMember();
      await basicService.getNonUserMember();
    }

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
