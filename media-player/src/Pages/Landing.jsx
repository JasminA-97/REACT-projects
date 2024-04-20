import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/music-beat.gif'
import music1 from '../assets/music1.png'
import music2 from '../assets/music2.webp'
import music3 from '../assets/music3.webp'
import { Card } from 'react-bootstrap'



function Landing() {
  return (
    <>
   <div className="landing-section container">
    <div className="row align-items-center my-5">
      <div className="col-lg-5">
        <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
        <p className="mt-3" style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae et nobis nemo, at autem quaerat dolorem unde accusamus fugiat dolore neque similique tenetur sed est nihil debitis, odit repudiandae quo.
        explicabo accusamus harum!
        Ipsa, alias quod? Omnis rem rerum accusantium non sit ad, quidem exercitationem ipsa ducimus voluptas numquam deserunt nobis dolorum suscipit amet atque quam et consequuntur asperiores ea saepe quibusdam architecto.</p>
        <Link to={'/home'} className='btn btn-info mt-3'>Get started</Link>
      </div>
      <div className="col-lg-5">
        <img src={landingImg} alt="" className='ms-5'/>
      </div>

    </div>

    {/* features */}
    <div className="Features my-5">
      <h3 className='text-center'>Features</h3>
      <div className="row mt-5">
      <div className="col-lg-4">
         <Card className='p-2' style={{ width: '20rem' ,height:'400px'}}>
      <Card.Img variant="top" style={{height:'250px'}}className='img-fluid' src={music1} />
      <Card.Body>
        <Card.Title>Managing Vedios</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
      </div>
      <div className="col-lg-4">
      <Card className='p-2' style={{ width: '20rem' ,height:'400px'}}>
      <Card.Img variant="top" style={{height:'250px'}}className='img-fluid' src={music2} />
      <Card.Body>
        <Card.Title>Catogories Videos </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
      </div>
      <div className="col-lg-4">
      <Card className='p-2' style={{ width: '20rem' ,height:'400px'}}>
      <Card.Img variant="top" style={{height:'250px'}}className='img-fluid' src={music3} />
      <Card.Body>
        <Card.Title>Managing Vedios</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
      </div>
    </div>
    </div>

{/* last content */}
<div className="row my-5 border rounded p-5">
  <div className="col-lg-5">
    <h3 className="text-warning">Simple Fast and Poweful</h3>
    <p style={{textAlign:'justify'}}>
      <span className="fs-5">Play Everything </span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum inventore facilis commodi? Deleniti labore vitae mollitia molestiae aliquid rerum quam tempore, itaque eius autem esse! Sequi dicta quia eaque ratione!
    </p>
    <p style={{textAlign:'justify'}}>
      <span className="fs-5">Play Everything </span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum inventore facilis commodi? Deleniti labore vitae mollitia molestiae aliquid rerum quam tempore, itaque eius autem esse! Sequi dicta quia eaque ratione!
    </p>
    <p style={{textAlign:'justify'}}>
      <span className="fs-5">Play Everything </span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum inventore facilis commodi? Deleniti labore vitae mollitia molestiae aliquid rerum quam tempore, itaque eius autem esse! Sequi dicta quia eaque ratione!
    </p>
  </div>
  <div className="col"></div>
  <div className="col-lg-6">
    {/* width='100%' height='360' */}
  </div>
</div>
   
   </div>
    </>
   
  )
}

export default Landing