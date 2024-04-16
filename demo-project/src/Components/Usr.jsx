import React from 'react'
import myownstyle from '../myStyle.module.css'
import useFetch from '../Hooks/useFetch';

function Usr({name,companyName,place,district}) {
    const handlealert=()=>{
        alert('button clicked. No need of arguments while declaration; bcz of that no need of giving paranthesis while function calling');
    }


//custom hook
const data=useFetch('https://jsonplaceholder.typicode.com/users')
console.log(data);
// data.map(item=>console.log(item))

  return (
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
        
   

    {/* custom hook
    url     https://jsonplaceholder.typicode.com/users */}
    <table className='m-5 table shadow'>
      <thead>
        <tr>
          <th>Uname</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Website</th>
          <th>Company</th>
        </tr>
      </thead>
      <tbody>
        {
          
          data?.map(item=>(
            <tr key={item}>
            <td>{item?.name}</td>
            <td>{item?.email}</td>
            <td>{item?.address.street},{item?.address.city}</td>
            <td>{item?.phone}</td>
            <td>{item?.website}</td>
            <td>{item?.company.name}</td></tr>
          ))
        }
      </tbody>
    </table>
    </div>
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