const { Pool } = require('pg');

const pool = new Pool({
    user: 'buencom',
    host: 'localhost',
    password: 'root',
    database: 'buencom',
    port: '5432'
});

module.exports = pool;