const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'emergency_waitlist',
    password: 'Postgres123!',
    port: 5432,
});

module.exports = pool;