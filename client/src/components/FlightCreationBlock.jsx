import { useState } from "react";

const FlightCreationBlock = ({fetchFlights}) => {

  const [flightNumber, setFlightNumber] = useState(-1)
  const [fromAirport, setFromAirport] = useState(-1)
  const [toAirport, setToAirport] = useState(-1)
  const [company, setCompany] = useState("")
  const [duration, setDuration] = useState(-1)
  const [plane, setPlane] = useState(-1)
  
  const createFlight = async (flightData) => {
    const { flightNumber, fromAirport, toAirport, company, duration, plane } = flightData
    let response = await fetch('http://localhost:3001/flight', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        flightcod: flightNumber,
        fromairportcod: fromAirport,
        toairportcod: toAirport,
        company: company,
        duration: duration,
        planecod: plane
      })
    })
    let data = await response
    fetchFlights()
  }

  return (
    <div className="flightCreationBlock">
      <div className="flightCreationBlock_flightNumber">
        <label>Flight Number</label>
        <input type="number" value={flightNumber} placeholder={'FlightNo'} onChange={(e) => setFlightNumber(parseInt(e.target.value))}/>
      </div>
      <div className="flightCreationBlock_fromAirport">
        <label>From Airport</label>
        <input type="number" value={fromAirport} placeholder={'From Airport'} onChange={(e) => setFromAirport(parseInt(e.target.value))}/>
      </div>
      <div className="flightCreationBlock_toAirport">
        <label>To Airport</label>
        <input type="number" value={toAirport} placeholder={'To Airport'} onChange={(e) => setToAirport(parseInt(e.target.value))}/>
      </div>
      <div className="flightCreationBlock_company">
        <label>Company</label>
        <input type="text" value={company} placeholder={'Company'} onChange={(e) => setCompany(e.target.value)}/>
      </div>
      <div className="flightCreationBlock_duration">
        <label>Duration</label>
        <input type="number" value={duration} placeholder={'Duration'} onChange={(e) => setDuration(parseInt(e.target.value))}/>
      </div>
      <div className="flightCreationBlock_plane">
        <label>Plane</label>
        <input type="number" value={plane} placeholder={'Plane'} onChange={(e) => setPlane(parseInt(e.target.value))}/>
      </div>
      <div className="flightCreationBlock_buttonContainer">
        <button onClick={() => createFlight({
          flightNumber,
          fromAirport,
          toAirport,
          company,
          duration,
          plane
        })} className='flightCreationBlock__createButton'>Create Flight</button>
        <button className='flightCreationBlock__cancelButton'>Cancel</button>
      </div>
    </div>
  )
}

export default FlightCreationBlock