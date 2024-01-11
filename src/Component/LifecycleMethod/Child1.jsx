import React from 'react'

const Child1 = (props) => {
    console.log("Get data:",props)
    let{Pf,P}=props;
  return (
    <div>
        <h1>{P}</h1>
        <button onClick={Pf}>Click1</button>
    </div>
  )
}

export default React.memo(Child1,(prevProps,nextProps)=>prevProps.P===nextProps.P)