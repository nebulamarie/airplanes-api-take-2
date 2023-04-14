const Pool = require('pg').Pool;

const pool = new Pool({
  user: "postgres",
  host: "containers-us-west-14.railway.app",
  password:'jGPigBa34l001BxNaqhK',
  database: "railway",
  port: 3001
})       

module.exports = () => pool;