import { useState } from 'react'
import './App.css'

function App() {
  const [value,setValue]=useState("")

  return (
    <div className="container w-100 d-flex align-items-center justify-content-center" style={{height:'100vh'}}>
      <div className="calculator p-5 border rounded bg-light">
        <form>
          <div className='d-flex justify-content-end mt-1 me-0 mb-4 ms-0'>
            <input type="text" className='inputbox bg-dark' value={value}/>
          </div>
          <div>
            <input type="button" value="AC" onClick={e=>setValue("")}/>
            <input type="button" value="DE" onClick={e=>setValue(value.slice(0,-1))}/>
            <input type="button" value="%" onClick={e=>setValue(value + e.target.value)}/>
            <input type="button" value="/" onClick={e=>setValue(value + e.target.value)}/>
          </div>
          <div>
            <input type="button" value="7" onClick={e=>setValue(value + e.target.value)}/>
            <input type="button" value="8" onClick={e=>setValue(value + e.target.value)}/>
            <input type="button" value="9" onClick={e=>setValue(value + e.target.value)}/>
            <input type="button" value="*" onClick={e=>setValue(value + e.target.value)}/>
          </div>
          <div>
            <input type="button" value="4" onClick={e=>setValue(value + e.target.value)}/>
            <input type="button" value="5" onClick={e=>setValue(value + e.target.value)}/>
            <input type="button" value="6" onClick={e=>setValue(value + e.target.value)}/>
            <input type="button" value="+" onClick={e=>setValue(value + e.target.value)}/>
          </div>
          <div>
            <input type="button" value="1" onClick={e=>setValue(value + e.target.value)}/>
            <input type="button" value="2" onClick={e=>setValue(value + e.target.value)}/>
            <input type="button" value="3" onClick={e=>setValue(value + e.target.value)}/>
            <input type="button" value="-" onClick={e=>setValue(value + e.target.value)}/>
          </div>
          <div>
            <input type="button" value="0" onClick={e=>setValue(value + e.target.value)}/>
            <input type="button" value="." onClick={e=>setValue(value + e.target.value)}/>
            <input type="button" value="=" className='equal'style={{width:'123px'}} onClick={e=>setValue(eval(value))}/>
           
          </div>
        </form>
      </div>
    </div>
 
  )
}

export default App
