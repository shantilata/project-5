import React from 'react'

const Child2 = (props) => {
    
        console.log("Get data:",props)
        let{Nf,N}=props;
      return (
        <div>
            <h1>{N}</h1>
            <button onClick={Nf}>Click2</button>
        </div>
      )
    }
  

export default React.memo(Child2,(prevProps,nextProps)=>prevProps.N===nextProps.N)