import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { removeVideoAPI, saveHistoryAPI } from '../../Services/allAPI';


function VideoCard({displayData,setDeleteResponse}) {
  const[show,setShow]=useState(false);

  const handleClose=()=>setShow(false);
  const handleShow=async()=>{
    setShow(true);
    const{caption,youtubeURL}=displayData
    const systemTime=newDate()
    const formatteDate = systemTime.toLocalString('en-US', {timeZoneName: 'short'});
    console.log(formatteDate);
    const videoHistory = {caption,youtubeURL,timeStamp:formatteDate}
    try{
      await saveHistoryAPI(videoHistory)
    }catch(err){
      console.log(err);
    }
  }
  const handleRemoveVideo=async(videoId)=>{
    try{
      const result=await removeVideoAPI(videoId)
      setDeleteResponse(result.data)
    }catch(err){
      console.log(err);
    }
  }

  return (
    <>
       <Card>
      <Card.Img onClick={handleShow} height={'180px'} variant="top" src={displayData?.imageURL} />
      <Card.Body>
        <Card.Title className='d-flex justift-content-between'>
          <p>{displayData?.caption}</p>
          <button onClick={()=>handleRemoveVideo(displayData?.id)} className='btn'>
            <i className='fa-solid fa-trash text-danger'></i>
          </button>
        </Card.Title>
      </Card.Body>
    </Card>

    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={`${displayData?.youtubeURL}?autoplay=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>


        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard