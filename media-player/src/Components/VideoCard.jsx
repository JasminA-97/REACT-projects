import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'


function VideoCard() {
  const[show,setShow]=useState(false);
  const handleClose=()=>setShow(false);
  const handleShow=()=>setShow(true);

  return (
    <>
       <Card>
      <Card.Img onClick={handleShow} height={'180px'} variant="top" src="https://m.media-amazon.com/images/M/MV5BZjM5ODBkYTUtNjAwMy00MmY5LWEyZjEtMDg0Y2NlZjQyMzQ1XkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_FMjpg_UX1000_.jpg" />
      <Card.Body>
        <Card.Title className='d-flex justift-content-between align-items-center'><p>Caption</p>
          <button className='btn'>
            <i className='fa-solid fa-trash text-danger'></i>
          </button>
        </Card.Title>
      </Card.Body>
    </Card>

    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>


        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard