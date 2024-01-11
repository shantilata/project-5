import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

const ParentCountF = () => {
    let [Inc, setInc] = useState({ positive: 0})
    let[Dec,setDec]=useState({negetive:0})

    let Incf=()=> {
        setInc({ positive: Inc.positive + 1})
    }
    let Decf=()=>{
        setDec({negetive: Dec.negetive - 1 })
    }
  return (
    <div>
        <Child1 P={Inc.positive} Pf={Incf}/>
        <Child2 N={Dec.negetive} Nf={Decf}/>
    </div>
  )
}

export default ParentCountF