require('dotenv').config();

const package = require('../package.json')

const config = {
  name: process.env['CRON_NAME'] || package.name,
  cronTime: process.env['CRON_TIME'],
  runOnInit: process.env['CRON_ON_START'],
  timeZone: process.env['TIMEZONE']
};

module.exports = config;