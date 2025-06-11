require('dotenv').config();

const package = require('../package.json')

const config = {
  name: process.env['CRON_NAME'] || package.name,
  cronTime: process.env['CRON_TIME'],
  runOnInit: process.env['CRON_ON_START'],
  timeZone: process.env['TIMEZONE'],
  database: {
    user: {
      instance: process.env['DATABASE_INSTANCE'],
      name: process.env['DATABASE_NAME'],
      username: process.env['DATABASE_USERNAME'],
      password: process.env['DATABASE_PASSWORD']
    }
  }
};

module.exports = config;
