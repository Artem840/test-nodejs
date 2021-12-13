const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: "312312",
    host: "localhost",
    port: 5432,
    database: "salo_test"
})

module.exports = pool