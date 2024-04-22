import React from 'react'
import { Link } from 'react-router-dom'
function History() {
  return (
    <div className='container my-5'>
      <div className="d-flex justify-content-between">
        <h3>Watch history</h3>
        <Link to={'/home'}>Back Home</Link>
      </div>
      <table className='table my-5'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Vedio Link</th>
            <th>Time stamp</th>
            <th><i className="fa-solid fa-ellipsis-vertical"></i></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Avesham Trailer</td>
            <td><a href="" target='_blank'>https://www.youtube.com/embed/L0yEM18PXnw</a></td>
            <td>22/4/2024 10:45Am</td>
            <td><button className='btn'><i className="fa-solid fa-trash text-danger"></i></button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default History