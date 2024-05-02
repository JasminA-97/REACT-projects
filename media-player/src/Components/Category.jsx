import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategoryAPI, getCategoryAPI, removeCategoryAPI } from '../../Services/allAPI';
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';


function Category() {
  const [allCategories, setAllCategories] = useState([]) 
  const [categoryName,setCategoryName]=useState("")
  const [show, setShow] = useState(false);
  console.log(allCategories);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  useEffect(()=>{
    getAllCategory()
  },[])

  const getAllCategory = async()=>{
    try{
        const result = await getCategoryAPI()
        setAllCategories(result.data)
    }catch(err){
        console.log(err);
    }
  }
  const handleAddCategory=async()=>{
    if(categoryName){
      //apicall
        try{
        await addCategoryAPI({categoryName,allVideos:[]})
        handleClose()
        getAllCategory()

        }catch(err){
          console.log(err);
        }
      }else{
        toast.warning("pls fill form completely!!!")
      }
   }
   const handleRemoveCategory=async(categoryId)=>{
    try{
      await removeCategoryAPI(categoryId)
      getAllCategory()
    }catch(err){
      console.log(err);
    }
   }
  return (
   <>
   <div className="d-flex justify-content-around">
    <h3>All Catogories</h3>
    <button onClick={handleShow} style={{width:'50px',height:'50px'}} className='btn btn-info ms-3 rounded-circle fw-bolder fs-5'>+</button>
    </div>

    <div className="container-fluid mt-3">
      {
        allCategories.length>0?
        allCategories?.map(item=>(
          <div key={item?.id} className="border rounded p-3 mb-2">
            <div className="d-flex justify-content-between">
              <h5>{item?.categoryName}</h5>
              <button onClick={()=>handleRemoveCategory(item?.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
            </div>
          </div>
        ))
        :
        <div className="text-danger fw-bolder">
          No Categories are added yet!!!
        </div>
      }
    </div>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingInput"
        label="Category Name"
       
      >
        <Form.Control onChange={e=>setCategoryName(e.target.value)} type="text" placeholder="Category Name" />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} className='btn btn-info'>Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={3000}/>
  </>
  )
}

export default Category

