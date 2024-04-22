import React,{useState} from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'

function Add() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className="d-flex align-items-center">
        <h5>Upload New Video</h5>
        <button  onClick={handleShow} className='btn btn-warning ms-3 fw-bolder fs-5 rounded-circle'>+</button>
    </div>
    {/* modal */}
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details!!!</p>
          <div className="border rounded p-3">
            <FloatingLabel className="mb-3" controlId="floatingInputCaption" label="Video Caption">
              <Form.Control type="text" placeholder="Video Caption" />
            </FloatingLabel>
            <FloatingLabel className="mb-3" controlId="floatingInputImage" label="Image URL">
              <Form.Control type="text" placeholder="Image URL" />
            </FloatingLabel>
            <FloatingLabel className="mb-3" controlId="floatingInputURL" label="Youtube URL">
              <Form.Control type="text" placeholder="Youtube URL" />
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add