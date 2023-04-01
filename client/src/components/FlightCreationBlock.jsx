import { react } from "react";

const FlightCreationBlock = () => {

  return (
    <div className="flightCreationBlock">
      <div className="flightCreationBlock__flightNumber">
        <label>Flight Number</label>
        <input type="number" value={''} placeholder={'FlightNo'} onChange={()=>{}}/>
      </div>
      <div className="flightCreationBlock__fromAirport">
        <label>From Airport</label>
        <input type="number" value={''} placeholder={'FlightNo'} onChange={()=>{}}/>
      </div>
      <div className="flightCreationBlock__toAirport">
        <label>To Airport</label>
        <input type="number" value={''} placeholder={'FlightNo'} onChange={()=>{}}/>
      </div>
      <div className="flightCreationBlock__company">
        <label>Company</label>
        <input type="text" value={''} placeholder={'FlightNo'} onChange={()=>{}}/>
      </div>
      <div className="flightCreationBlock__duration">
        <label>Duration</label>
        <input type="number" value={''} placeholder={'FlightNo'} onChange={()=>{}}/>
      </div>
      <div className="flightCreationBlock__plane">
        <label>Plane</label>
        <input type="number" value={''} placeholder={'FlightNo'} onChange={()=>{}}/>
      </div>
      <button className='flightCreationBlock__createButton'>Create Flight</button>
      <button className='flightCreationBlock__cancelButton'>Cancel</button>
    </div>
  )
}

export default FlightCreationBlock