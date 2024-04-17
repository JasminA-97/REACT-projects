import { Button, Stack, TextField } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {
 const[principle,setPrinciple]=useState(0)
 const[rate,setRate]=useState(0)
 const[year,setYear]=useState(0)                                    //  console.log(principle);
 const [isPrincipleInvalid,setPrincipleInvalid]=useState(false)
 const [isRateInvalid,setRateInvalid]=useState(false)
 const [isYearInvalid,setYearInvalid]=useState(false)
 const [interest,setInterest]=useState(0)


  const handleInputValidation=(tag)=>{                              // console.log(tag);
    const{name,value}=tag                                           //Destructuring. use {} bcz target which is passes as arg(tag) is an object.
    // console.log(name,value);
    // console.log(typeof value); //string
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));                 //regular exp corresponds to decimal pattern//+ min one number required;//if given proper input we get array as result, otherwise 'null'; here we want boolen value, so convert it by adding '!!'
    if(!!value.match(/^\d*\.?\d+$/)){
      //valid
      if(name=='principle'){
        setPrinciple(value)
        setPrincipleInvalid(false)
      }else if(name=='rate'){
        setRate(value)
        setRateInvalid(false)
      }else{
        setYear(value)
        setYearInvalid(false)
      }
    }else{
        //invalid
        if(name=='principle'){
          setPrinciple(value)
          setPrincipleInvalid(true)
        }else if(name=='rate'){
          setRate(value)
          setRateInvalid(true)
        }else{
          setYear(value)
          setYearInvalid(true)
        }
    }

  }

  const handleCalculate=(e)=>{
    e.preventDefault()
    // console.log('button click');
    if(principle && rate && year){
      setInterest(principle*rate*year/100)
    }
    else{
      alert("pls fill the form completely")
    }
  }

  const handleReset=()=>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setPrincipleInvalid(false)
    setRateInvalid(false)
    setYearInvalid(false)
  }

  return (
    <div style={{width:'100%', minHeight:'100vh'}} className="bg-dark  d-flex justify-content-center align-items-center">
      <div style={{width:'600px'}} className="bg-light rounded p-5">
        <h3>Simple Interest calculator</h3>
        <p>Calculate simple interest easily</p>
        <div className="bg-warning d-flex justify-content-center align-items-center flex-column p-3 rounded shadow text-light"><h1>₹ {interest}</h1><p className='fw-bolder'>Total simple interest</p>
        </div>
        {/* https://mui.com/material-ui/ */}
        {/* npm install @mui/material @emotion/react @emotion/styled */}
        <form className='mt-5'>
          <div className="mb-3">
          <TextField value={principle || ""} name='principle' onChange={(e)=>{handleInputValidation(e.target)}} id="principle" label="Principle Amount" variant="outlined" className='w-100'/>
          </div>
          {
            isPrincipleInvalid &&
            <div className="mb-3 text-danger fw-bolder">Invalid principle Amount!!!</div>

          }

          <div className="mb-3">
          <TextField value={rate || ""} name='rate' onChange={(e)=>{handleInputValidation(e.target)}} id="rate" label="Rate of interest (p.a) %" variant="outlined" className='w-100'/>
          </div>
          {
            isRateInvalid &&
            <div className="mb-3 text-danger fw-bolder">Invalid Rate!!!</div>
          }
          <div className="mb-3">
          <TextField value={year || ""} name='year' onChange={(e)=>{handleInputValidation(e.target)}} id="year" label="Time Period (Yr)" variant="outlined" className='w-100'/>
          </div>
          {
            isYearInvalid &&
            <div className="mb-3 text-danger fw-bolder">Invalid Year!!!</div>
          }
          {/* import stack */}
          <Stack direction="row" spacing={2}>
             <Button disabled={isPrincipleInvalid||isRateInvalid||isYearInvalid} type='submit' onClick={handleCalculate} style={{width:'50%', height:'70px'}} variant="contained">Calculate</Button>
             <Button onClick={handleReset} style={{width:'50%',height:'70px'}} variant="outlined">Reset</Button>
          </Stack>
        </form>
      </div>
    </div>
      
   
  )
}

export default App
