import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GrEdit } from 'react-icons/gr'
import { TiDeleteOutline } from 'react-icons/ti'

function App() {
  const [flightNum, setFlightNum] = useState(0)

  // {
  //   "flightcod": 1001,
  //   "fromairportcod": 1,
  //   "toairportcod": 2,
  //   "company": "TAP",
  //   "duration": 2,
  //   "planecod": 1
  // }

  const flightArray = [1000, 1111, 1112].map((flightNumber, i) => {
    return { 
      flightcod: flightNumber,
      fromairportcod: 1,
      toairportcod: 2,
      company: "TAP",
      duration: 2,
      planecod: 1 
    }
  })
  console.log(flightArray)


  return (
    <div className="App">
      <h1>Flights</h1>
      <label>Flight Number</label>``
      <input type="number" value={flightNum} placeholder={'FlightNo'} onChange={(e) => setFlightNum(e.target.value)}/>

      <div className="flightContainer">
        {
          flightArray.map((flight, i) => {
            const { flightcod, fromairportcod, toairportcod, company, duration } = flight
            return ( 
              <div key={flightcod} className="flightCard">
                <div className="flightCardTopSection">
                  <div className="flightCardTopSectionFlightContainer">Flight: <h2>{flight.flightcod}</h2></div>
                  <div className="flightCardTopSectionIconContainer">
                    <div className="iconContainer">
                      <GrEdit size={'3rem'} />
                    </div>
                    <div className="iconContainer">
                      <TiDeleteOutline size={'3.5rem'} />
                    </div>
                  </div>
                </div>
                <div className="flightCardBottomSection">
                  <div className="flightCardBottomSectionLeftContainer">
                    <p>From: <strong>{fromairportcod}</strong></p>
                    <p>Company: <strong>{company}</strong></p>
                  </div>
                  <div className="flightCardBottomSectionRightContainer">
                    <p>To: <strong>{toairportcod}</strong></p>
                    <p>Duration: <strong>{duration}</strong></p>
                  </div>
                </div>
              </div>
              )
        })
        }
      </div>
    </div>
  )
}

export default App
