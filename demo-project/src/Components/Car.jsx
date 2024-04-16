import React, { Component } from 'react'

export default class Car extends Component {
 constructor(){
    super()
    this.state={carname:'polo'}
 }
 updatecar=(car)=>{
    this.setState({carname:car})
 }
  render() {
    return (
      <>
          <h1 className='text-center text-danger fw-bolder'>Car component</h1>
          <div className="m-5 d-flex">
            <input onChange={(e)=>this.updatecar(e.target.value)} type="text" className="form-control" placeholder='Enter a car name...' />
            {/* <button className="btn btn-success ms-3">Update</button> */}
          </div>
          <p className="p-5 m-5 bg-warning text-primary text-center fs-2 fw-bold">car is :{this.state.carname} </p>
      </>
    )
  }
}
