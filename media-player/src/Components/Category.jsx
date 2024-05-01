// import React, { useState } from 'react'
// import { toast } from 'react-toastify';
// import { addCategoryAPI } from '../../Services/allAPI';

// function Category() {
//   const [categoryName,setCategoryName]=useState("")
//   const[show,setShow]=useState(false);
//   const handleClose =()=>setShow(false) ;
//   const handleShow = ()=>setShow(true);
//   const handleAddcategory=async()=>{
//     if(categoryName){
//       //apicall
//       try{
//        await addCategoryAPI({categoryName,allVideos:[]})
//        handleClose()
//        toast.success("category added")

//       }catch(err){
//         console.log(err);
//       }
//     }else{
//       toast.warning("pls fill form")
//     }
//   }
//   return (
//    <>
//    <div className="d-flex justify-content-around">
//     <h3>All Catogories</h3>
//     <button onClick={handleShow} style={{width:'50px',height:'50px'}} className='btn btn-info rounded-circle'></button>
//     </div>
//   </>
//   )
// }

// export default Category

// // formcontrol onchange={e=>setCategoryName(e.target.value)} type="text"