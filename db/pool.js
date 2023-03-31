const Pool = require('pg').Pool;

const pool = new Pool({
  user: "brandongottshall",
  host: "localhost",
  password:'',
  database: "airplanes",
  port: 5432
})       

module.exports = () => pool;