const Pool = require("pg").Pool;
const connectDB = async () => {
  const pool = await new Pool({
    user: "ekaterinakarpo",
    host: "localhost",
    database: "application",
    password: "ekaterinakarpo",
    port: 5432
  });
  console.log("Postgres Connected");
};

class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = connectDB();
    }
  }
  getInstance() {
    return Singleton.instance;
  }
}

module.exports = Singleton;
