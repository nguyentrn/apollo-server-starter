import knex from 'knex';
import 'dotenv/config';

const db = knex({
  client: 'pg',
  connection: process.env.DATABASE_CONNECTION_STRING,
  pool: {
    max: 50,
    min: 2,
    // acquireTimeout: 60 * 1000,
    // createTimeoutMillis: 30000,
    // acquireTimeoutMillis: 30000,
    // idleTimeoutMillis: 30000,
    // reapIntervalMillis: 1000,
    // createRetryIntervalMillis: 100,
    propagateCreateError: false, // <- default is true, set to false
  },
});
module.exports = db;
