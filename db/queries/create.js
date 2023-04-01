const Pool = require('../pool');

// Post flight
const flight = (req, res) => {
  // Collect data from request body
  const { flightcod, fromairportcod, toairportcod, company, duration, planecod } = req.body;
  // Query database using data from request body utilizing $1, $2, $3, $4, $5
  Pool().query( 'INSERT INTO FLIGHT (flightcod, toairportcod, fromairportcod, company, duration, planecod) VALUES ($1, $2, $3, $4, $5, $6)', [flightcod, toairportcod, fromairportcod, company, duration, planecod], (error, results) => {
    if (error) {
      res.status(500)
      throw error
    }
    res.status(201).send(`Flight added with flightcod: ${flightcod}`)
  })
};


// Plane Column Names
// planecod, name, modelcod

// Post plane
const plane = (req, res) => {
  // 1. Get data from request body
  const { planecod, name, modelcod } = req.body;

  // 2. Query database using data from request body utilizing $1, $2, $3
  Pool().query( 'INSERT INTO PLANE (planecod, name, modelcod) VALUES ($1, $2, $3)', [planecod, name, modelcod], 

  // 3. Handle Errors / Send Success response
  (error, results) => {
    if (error) {
      res.status(500)
      throw error
    }
    res.status(201).send(`Plane added with planecod: ${planecod}`)
  }
  );
};

module.exports = {
  flight,
  plane
};