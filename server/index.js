const cron = require('./cron');

const start = async () => {
  try {
    console.log('[CRON] Starting cron')
    await cron();
  } catch (error) {
    console.log('Something error');
    console.error(error);
  }
};

start();
