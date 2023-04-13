import { useState } from "react";

const FlightCreationBlock = ({fetchFlights, toggleCreationBlock, planeDictionary}) => {

  planeDictionary && console.log(Object.values(planeDictionary))

  const [flightNumber, setFlightNumber] = useState(-1)
  const [fromAirport, setFromAirport] = useState(-1)
  const [toAirport, setToAirport] = useState(-1)
  const [company, setCompany] = useState("")
  const [duration, setDuration] = useState(-1)
  const [plane, setPlane] = useState(-1)
  
  const createFlight = async (flightData) => {
    const { flightNumber, fromAirport, toAirport, company, duration, plane } = flightData
    let response = await fetch('http://ec2-52-91-253-141.compute-1.amazonaws.com/3001/flight', {
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
        <select onChange={(e) => setPlane(parseInt(e.target.value))}>
          <option value={-1}>Select Plane</option>
          {
          planeDictionary && 
            Object.values(planeDictionary).map((planeName, index) => {
              return <option key={index} value={index}>{planeName}</option>
            })
          }
        </select>
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
        <button onClick={toggleCreationBlock} className='flightCreationBlock__cancelButton'>Cancel</button>
      </div>
    </div>
  )
}

export default FlightCreationBlock