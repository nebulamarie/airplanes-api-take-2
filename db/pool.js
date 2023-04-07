const Pool = require('pg').Pool;

const pool = new Pool({
  user: "postgres",
  host: "airplanes-db.canbtrnxqnnu.us-east-1.rds.amazonaws.com",
  password:'testpass1',
  database: "airplanes",
  port: 5432
})       

module.exports = () => pool;