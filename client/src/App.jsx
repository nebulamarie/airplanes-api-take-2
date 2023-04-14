import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FlightCreationBlock from './components/FlightCreationBlock'
import FlightCard from './components/FlightCard'

function App() {
  const [flightNum, setFlightNum] = useState("")
  const [planeDictionary, setPlaneDictionary] = useState({})
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

  const fetchPlanes = async () => {
    const response = await fetch('https://d2bnur2tilajzw.cloudfront.net/planes')
    const data = await response.json()
    return data
  }

  
  const fetchFlights = async () => {
    const response = await fetch('https://d2bnur2tilajzw.cloudfront.net/flights')
    const data = await response.json()
    setFlightArray(data)
  }
  
  const deleteFlight = async (flightcod) => {
    const response = await fetch(`https://d2bnur2tilajzw.cloudfront.net/flight/${flightcod}`, { method: 'DELETE' })
    const data = await response
  }

  useEffect(() => {
    fetchFlights()
    fetchPlanes().then((data) => {
      data.forEach((plane) => planeDictionary[plane.planecod] = plane.name)
  })
  }, [])

  useEffect(() => {
    if (flightNum && flightNum.toString().length === 4) {
      let filteredFlightArray = flightArray.filter((flight) => {
        return flight.flightcod === flightNum
      })
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
      <label>Flight Number</label>
      <input type="number" value={flightNum} placeholder={'FlightNo'} onChange={(e) => setFlightNum(parseInt(e.target.value || 0))} />

      { // Render the button if showCreationBlock is false
        !showCreationBlock && <button onClick={toggleCreationBlock} className='createFlightButton'>Create Flight</button>
      }
      { // Render the FlightCreationBlock if showCreationBlock is true
        showCreationBlock && planeDictionary && <FlightCreationBlock planeDictionary={planeDictionary} fetchFlights={fetchFlights} toggleCreationBlock={toggleCreationBlock} />
      }
      <div className="flightContainer">
        {
          flightArray.map((flight, i) => {
            const { flightcod, fromairportcod, toairportcod, company, duration } = flight
            return (
              <FlightCard {...{
                flightcod,
                fromairportcod,
                toairportcod,
                company,
                duration,
                deleteFlight,
                fetchFlights

              }} 
              key={flightcod}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default App
