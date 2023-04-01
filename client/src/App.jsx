import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GrEdit } from 'react-icons/gr'
import { TiDeleteOutline } from 'react-icons/ti'
import FlightCreationBlock from './components/FlightCreationBlock'

function App() {
  const [flightNum, setFlightNum] = useState("")
  const [flightArray, setFlightArray] = useState([1000, 1111, 1112].map((flightNumber, i) => {
    return { 
      flightcod: flightNumber,
      fromairportcod: 1,
      toairportcod: 2,
      company: "TAP",
      duration: 2,
      planecod: 1 
    }
  }))
  const [showCreationBlock, setShowCreationBlock] = useState(false)

  const toggleCreationBlock = () => setShowCreationBlock(!showCreationBlock)
  
  const fetchFlights = async () => {
    const response = await fetch('http://localhost:3001/flights')
    const data = await response.json()
    setFlightArray(data)
  }

  useEffect(() => {
    fetchFlights()
  }, [])

  useEffect(() => {
    if (flightNum && flightNum.toString().length === 4) {
      let filteredFlightArray = flightArray.filter((flight) => {
        return flight.flightcod === flightNum
      })
      console.log(filteredFlightArray)
      setFlightArray(filteredFlightArray)
    } else if (flightNum.toString().length > 1 && flightArray.length === 1) {
      fetchFlights()
    }
  }, [flightNum])

  // {
  //   "flightcod": 1001,
  //   "fromairportcod": 1,
  //   "toairportcod": 2,
  //   "company": "TAP",
  //   "duration": 2,
  //   "planecod": 1
  // }


  return (
    <div className="App">
      <h1>Flights</h1>
      <label>Flight Number</label>``
      <input type="number" value={flightNum} placeholder={'FlightNo'} onChange={(e) => setFlightNum(parseInt(e.target.value || 0))}/>

      <button onClick={toggleCreationBlock} className='createFlightButton'>Create Flight</button>
      {showCreationBlock && <FlightCreationBlock fetchFlights={fetchFlights} />}  
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
