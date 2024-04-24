import React,{useState} from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Add() {
  const[invalidYoutubeURL,setInvalidURL]=useState(false)
  const[videoDetails,setVideoDetails]=useState({caption:"",imageURL:"",youtubeURL:""})
  const [show, setShow] = useState(false);
console.log(videoDetails);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getEmbedURL=(link)=>{
  // <iframe width="560" height="315" src="https://www.youtube.com/embed/tOM-nWPcR4U?si=EDJMWMslnTUyH10Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  // https://www.youtube.com/watch?v=tOM-nWPcR4U
  if(link.includes('v=')){
    let videoId=link.split('v')[1].slice(0,11)
    console.log(videoId);
    setVideoDetails({...videoDetails,youtubeURL:`https://www.youtube.com/embed/${videoId}`})
    setInvalidURL(false)
  }else{
    setVideoDetails({...videoDetails,youtubeURL:""})
    setInvalidURL(true)
  }

  }
  const handleUpload=()=>{
    console.log("inside handle upload fn");
    //const{key,key2...}=object-name
    const {caption,imageURL,youtubeURL}=videoDetails
    if(caption&& imageURL&&youtubeURL){
      console.log('api call');
    }else{
      toast.warning('pls fill the form completely!!!')
    }
  }
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
              <Form.Control onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="Video Caption" />
            </FloatingLabel>
            <FloatingLabel className="mb-3" controlId="floatingInputImage" label="Image URL">
              <Form.Control  onChange={e=>setVideoDetails({...videoDetails,imageURL:e.target.value})} type="text" placeholder="Image URL" />
            </FloatingLabel>
            <FloatingLabel className="mb-3" controlId="floatingInputURL" label="Youtube URL">
              <Form.Control onChange={e=>getEmbedURL(e.target.value)} type="text" placeholder="Youtube URL" />
            </FloatingLabel>
            {
            invalidYoutubeURL&& <div className='text-danger fw-bolder'>Invalid Youtube Link</div>
            }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} className='btn btn-info' >Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={3000}/>
    </>
  )
}

export default Add