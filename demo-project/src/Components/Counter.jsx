import React, { useState } from 'react'
import { useEffect } from 'react'

function Counter() {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        setTimeout(() => {
            setCount(count=>count+1)
        }, 1000);
        // remove strict mode from main.jsx
    })
  return (
    <div style={{height:'300px',fontSize:'30px'}} className='d-flex justify-content-center align-items-center flex-column fw-bold'>Counter App
        <div style={{fontSize:'80px'}} className="text-danger p-5">{count}</div>
    </div>
  )
}

export default Counter