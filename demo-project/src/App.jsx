//css file
import './App.css'
import Compny from './Components/Compny'
import Employee from './Components/Employee'


//component is simply a function
function App() {
  //javascript code
  const empName='Jasmin'
  const h1Style={color:'white',backgroundColor:'black',textAlign:'center',padding:'10px'}

  return (//jsx code
    <>
      <h1 style={h1Style}>Demo Project</h1>                                                 {/* inline css */}
      <h4  style={{textAlign:'center',color:'red',margin:'10px'}}>Luminar</h4>              {/* inline css */}
      <h3 className='text-primary text-center'>by {empName}</h3>                             {/*bootsrap */}
      <p id="p1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio cum aspernatur dolorem ex rem quasi sit ducimus quam veritatis error, similique consequuntur minima, corrupti laborum! Ex hic cum autem nostrum.</p>
      <Employee name={empName} status desig={false} check="emp values"/>
      <Compny/>
    </>
  )
}

export default App
