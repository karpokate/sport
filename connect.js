const Pool = require("pg").Pool;
const pool = new Pool({
  user: "ekaterinakarpo",
  host: "localhost",
  database: "application",
  password: "ekaterinakarpo",
  port: 5432
});

module.exports = pool;
