import React, { useState } from 'react';
import { GrEdit } from 'react-icons/gr';
import { TiDeleteOutline } from 'react-icons/ti';
import {AiOutlineCheckCircle} from 'react-icons/ai'

function FlightCard({flightcod, deleteFlight, fetchFlights, fromairportcod, company, toairportcod, duration}) {
  const [showEditBlock, setShowEditBlock] = useState(false)
  // state for the input fields and flightcod
  const [fromAirportCod, setFromAirportCod] = useState(fromairportcod)
  const [toAirportCod, setToAirportCod] = useState(toairportcod)
  const [companyName, setCompanyName] = useState(company)
  const [flightDuration, setFlightDuration] = useState(duration)
  const [flightcodNum, setFlightcodNum] = useState(flightcod)


  const toggleEditBlock = () => setShowEditBlock(!showEditBlock)

  const updateFlight = async () => {
    const response = await fetch(`http://localhost:3001/flight/${flightcod}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        flightcod: flightcodNum,
        fromairportcod: fromAirportCod,
        toairportcod: toAirportCod,
        company: companyName,
        duration: flightDuration
      })
    })
    const data = await response
    toggleEditBlock()
    fetchFlights()
    if (flightcodNum !== flightcod) {
      deleteFlight(flightcod)
    }
  }

  return (
  <div key={flightcod} className="flightCard">
    <div className="flightCardTopSection">
      <div className="flightCardTopSectionFlightContainer">Flight:&nbsp;
        {!showEditBlock && <h2>{flightcod}</h2>}
        {showEditBlock &&
          <input type="number" value={flightcodNum} placeholder={'Flight Number'} onChange={(e) => setFlightcodNum(parseInt(e.target.value || 0))} />
        }
      </div>
      <div className="flightCardTopSectionIconContainer">
        <div className="iconContainer" onClick={toggleEditBlock}>
          {!showEditBlock &&
            <GrEdit size={'3rem'} />
          }
          {showEditBlock &&
            <TiDeleteOutline size={'4rem'} />
          }
        </div>
          {!showEditBlock &&
          <div data-flightcod={flightcod} onClick={deleteFlight} className="iconContainer">
            <TiDeleteOutline size={'3.5rem'} />
          </div>
          }
          {showEditBlock &&
          <div data-flightcod={flightcod} onClick={updateFlight} className="iconContainer">
            <AiOutlineCheckCircle size={'3.5rem'} /> 
          </div>
          }
      </div>
    </div>
    <div className="flightCardBottomSection">
      <div className="flightCardBottomSectionLeftContainer">
        <p>From:&nbsp;  
          {!showEditBlock && <strong>{fromairportcod}</strong>}
          {showEditBlock && 
            <input type="number" value={fromAirportCod} placeholder={'From'} onChange={(e) => setFromAirportCod(parseInt(e.target.value || 0))} />
          }
        </p>
        <p>Company:&nbsp;
          { !showEditBlock && <strong>{company}</strong>} 
          { showEditBlock &&
            <input type="text" value={companyName} placeholder={'Company'} onChange={(e) => setCompanyName(e.target.value)} />
          }
        </p>
      </div>
      <div className="flightCardBottomSectionRightContainer">
        <p>
          To:&nbsp;
          {!showEditBlock && <strong>{toairportcod}</strong>}
          {showEditBlock &&
            <input type="number" value={toAirportCod} placeholder={'To'} onChange={(e) => setToAirportCod(parseInt(e.target.value || 0))} />
          }
        </p>
        <p>Duration:&nbsp; 
          {!showEditBlock && <strong>{duration}</strong>}
          {showEditBlock &&
            <input type="number" value={flightDuration} placeholder={'Duration'} onChange={(e) => setFlightDuration(parseInt(e.target.value || 0))} />
          }
        </p>
      </div>
    </div>
  </div>
)}

export default FlightCard;