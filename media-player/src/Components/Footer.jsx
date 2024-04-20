import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{height:'300px'}} className='container mt-5 w-100'>
      <div className="d-flex justify-content-between">
        <div style={{width:'400px'}} className="intro">
          <h5> <i className="fa-solid fa-music me-2"></i>Media Player</h5>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum eius! Officiis a voluptate totam eius nam similique ullam repellendus, fugiat vitae eos alias. Atque unde deserunt odio fuga vero.</p>
          <p>Lore maiores recusandae soluta?</p>
          <p> sit aipisicing </p>
        </div>
        <div className="links d-flex flex-column">
          <h5>Links</h5>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
          <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
          <Link to={'/history'} style={{textDecoration:'none',color:'white'}}>History Page</Link>
        </div>
        <div className="guides d-flex flex-column">
          <h5>Guides</h5>
          <a href="https://react.dev/" style={{textDecoration:'none',color:'white'}} target='_blank'>React</a>
          <a href="https://react-bootstrap.github.io/" style={{textDecoration:'none',color:'white'}} target='_blank'>React Bootstrap</a>
          <a href="https://reactrouter.com/en/main" style={{textDecoration:'none',color:'white'}} target='_blank'>React Router</a>
        </div>
        <div className="contact d-flex flex-column">
          <h5>Contact Us</h5>
          <div className="d-flex">
            <input className='form-control' placeholder='Enter ur email here' type="text" />
            <button className="btn btn-info ms-2"><i class="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className="icons d-flex justify-content-between mt-3">
            <a href="" style={{textDecoration:'none',color:'white'}} target='_blank' ><i class="fa-brands fa-twitter"></i></a>
            <a href="" style={{textDecoration:'none',color:'white'}} target='_blank' ><i class="fa-brands fa-instagram"></i></a>
            <a href="" style={{textDecoration:'none',color:'white'}} target='_blank' ><i class="fa-brands fa-facebook"></i></a>
            <a href="" style={{textDecoration:'none',color:'white'}} target='_blank' ><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="" style={{textDecoration:'none',color:'white'}} target='_blank' ><i class="fa-brands fa-github"></i></a>
            <a href="" style={{textDecoration:'none',color:'white'}} target='_blank' ><i class="fa-solid fa-phone"></i></a>
          </div>
        </div>
      </div>
      <p className="text-center mt-5">Copyright <i class="fa-regular fa-copyright"></i> Jan Batch 2024 Media Player. Build with React</p>
    </div>
  )
}

export default Footer