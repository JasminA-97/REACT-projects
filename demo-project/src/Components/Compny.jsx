import React from 'react'
import Usr from './Usr'
import myStyles from '../myStyle.module.css'
function Compny() {
  //create Usr component which is child of company, share a data from company to user
  const cName='xyz pvt ltd'
  var place='Kochi'
  let dst='Ernakulam'

  const showcontent=(key)=>{
    alert(key);
  }

  return (

          <>
          <p className={myStyles.group1}>----child of root 'app'----</p>
          <h3 className='fs-3 text-danger'>Company component(child of app)</h3>
          <div className='ms-5 ps-5 m-5'>
            <input onChange={(event)=>showcontent(event.target.value)} type="text" className="form-control w-50" />
          </div>
          <Usr name={'alfiya'} companyName={cName} place={place} district={dst}/>
          </>
     
  )
}
export default Compny