import { Button, Stack, TextField } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {
 const[principle,setPrinciple]=useState(0)
 const[rate,setRate]=useState(0)
 const[year,setYear]=useState(0)
 console.log(principle);

 const handleCalculate=(e)=>{
    e.preventDefault()
    // console.log('button click');
  }
  const handleInputValidation=(tag)=>{
    // console.log(tag);
    const{name,value}=tag   //Destructuring. use {} bcz target which is passes as arg(tag) is an object.
    // console.log(name,value);
    // console.log(typeof value); //string
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/)); //regular exp corresponds to decimal pattern//+ min one number required;//if given proper input we get array as result, otherwise 'null'; here we want boolen value, so convert it by adding '!!'


  }

  return (
    <div style={{width:'100%', minHeight:'100vh'}} className="bg-dark  d-flex justify-content-center align-items-center">
      <div style={{width:'600px'}} className="bg-light rounded p-5">
        <h3>Simple Interest calculator</h3>
        <p>Calculate simple interest easily</p>
        <div className="bg-warning d-flex justify-content-center align-items-center flex-column p-3 rounded shadow text-light"><h1>Rs 1000</h1><p className='fw-bolder'>Total simple interest</p>
        </div>
        {/* https://mui.com/material-ui/ */}
        {/* npm install @mui/material @emotion/react @emotion/styled */}
        <form className='mt-5'>
          <div className="mb-3">
          <TextField name='principle' onChange={(e)=>{handleInputValidation(e.target)}} id="principle" label="Principle Amount" variant="outlined" className='w-100'/>
          </div>
          <div className="mb-3">
          <TextField name='rate' onChange={(e)=>{handleInputValidation(e.target)}} id="rate" label="Rate of interest (p.a) %" variant="outlined" className='w-100'/>
          </div>
          <div className="mb-3">
          <TextField name='year' onChange={(e)=>{handleInputValidation(e.target)}} id="year" label="Time Period (Yr)" variant="outlined" className='w-100'/>
          </div>
          {/* import stack */}
          <Stack direction="row" spacing={2}>
             <Button type='submit' onClick={handleCalculate} style={{width:'50%', height:'70px'}} variant="contained">Calculate</Button>
             <Button style={{width:'50%',height:'70px'}} variant="outlined">Reset</Button>
          </Stack>
        </form>
      </div>
    </div>
      
   
  )
}

export default App
