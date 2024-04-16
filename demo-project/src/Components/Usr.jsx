import React from 'react'
import myownstyle from '../myStyle.module.css'
function Usr({name,companyName,place,district}) {
    const handlealert=()=>{
        alert('button clicked. No need of arguments while declaration; bcz of that no need of giving paranthesis while function calling');
    }
  return (
   <ol>
        <div className='text-warning' >
         <p id={myownstyle.group3}>child of company</p>   
        <h5>Usr details (child of company)</h5>
        <ul>
            {/* conditional Rendering: for 'if-else' statement, use ternary operator ?: */}
            { name ?
                <h6>user name: {name}</h6>
             :
              <p className="text-danger">Nothing to display</p>
            }
            <h6>companyName: {companyName}</h6>
            <h6>place: {place}</h6>
            <h6>district: {district}</h6>
        </ul>
        <div style={{textAlign:'center'}}><button onClick={handlealert} className="btn btn-primary">Btn inside Usr</button></div>
        </div>
   </ol>
  )
}
 export default Usr

//we can also do this by using object props 
// import React from 'react'
// function Usr(props) {
//   return (
//    <ol>
//         <div className='text-warning' >
//         <h5>Usr details (child of company)</h5>
//         <ul>
//             <h6>user name: {props.name}</h6>
//             <h6>companyName: {props.companyName}</h6>
//             <h6>place: {props.place}</h6>
//             <h6>district: {props.district}</h6>
//         </ul>
//         </div>
//    </ol>
//   )
// }
// export default Usr