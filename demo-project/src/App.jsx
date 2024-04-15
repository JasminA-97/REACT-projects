//css file
import './App.css'
import Compny from './Components/Compny'
import Employee from './Components/Compny'
import Car from './Components/Car'
import { useState } from 'react'
import Counter from './Components/Counter'


//component is simply a function
function App() {
  //javascript code

  // `````````````` PREDEFINED HOOK``````````````
  // 1)useState(initial val) 
  
      const[username,setUsername]=useState("")
 
  // `````````````` `````````````` ``````````````
  const empName='Jasmin'
  const h1Style={color:'white',backgroundColor:'black',textAlign:'center',padding:'10px'}

  return (//jsx code
    <>
      <Counter/>

      <h1 style={h1Style}>Demo Project</h1>                                                 {/* inline css */}
      <h4  style={{textAlign:'center',color:'red',margin:'10px'}}>Luminar</h4>              {/* inline css */}
      <h3 className='text-primary text-center'>by {empName}</h3>                             {/*bootsrap */}
      <p id="p1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio cum aspernatur dolorem ex rem quasi sit ducimus quam veritatis error, similique consequuntur minima, corrupti laborum! Ex hic cum autem nostrum.</p>
      <Employee name={empName} status desig={false} check="emp values"/>
      <Compny/>
      <Car/>
      

{/*`````````````` useState()``````````````*/}
    <div className="text-center m-5">
      <h4><u>usage of Hooks----useState(initial val)</u></h4>
        <input onChange={e=>setUsername(e.target.value)} type="text" className="form-control m-5" placeholder='Enter employee name'/>
    </div>
    <h1 style={{height:'150px'}} className="m-5 text-primary bg-warning border text-center p-5">Employee name:{username}</h1>

{/*`````````````` `````````````` `````````*/}

    </>
  )
}

export default App
