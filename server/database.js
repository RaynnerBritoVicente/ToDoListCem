const {Pool} = require("pg");

const pool = new Pool({
    user: "postgres",
    password: "ROOTuSER",
    host: "localhost",
    port: 5432,
    database: "todolistcem"
})

module.exports = pool;