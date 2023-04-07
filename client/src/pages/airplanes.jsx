import { react} from 'react';

import { useState } from 'react';

function App(){

const airplanes = {
    planecod: planecod, 
    name: airplanename, 
    modelcod: modelcod
}
return (
    <div className="App">
        <h1>Airplanes</h1>
        <label>Planecod</label>
        <input type="number" value={planecod} placeholder={'Planecod'} onChange={(e) => setPlanecod(parseInt(e.target.value||0))}></input>

        <div className='planeContainer'>
            {
                planeArray.map((plane, i) => {
                    const {planecod, name, modelcod } = airplanes
                    return (
                        <div key={planecod} className='planeContainer'>
                            <div className=''></div>

                    )
                })
            }
        </div>
    </div>
    

)
}







export default App