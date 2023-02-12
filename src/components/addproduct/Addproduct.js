import React from 'react'
import "./Addproduct.css"

function Addproduct({setOpen}) {
  return (
    <>
    <div className='container addproduct'>
      <div className='row addproduct-c'>
        <div className='addproduct-remove'><div className='addproduct-removeX' onClick={()=>{setOpen(false)}}>X</div></div>
        <div className='col-lg-12'><h5>ADD YOUR PRODUCT</h5></div>
        <div className=' addproduct-inputs'><input className='form-control' placeholder='Brand'/></div>
        <div className=' addproduct-inputs'><input className='form-control' placeholder='Description'/></div>
        <div className=' addproduct-inputs'><input className='form-control' placeholder='Price'/></div>
        <div className=' addproduct-inputs'><input className='form-control' placeholder='image link'/></div>
        <div className=' addproduct-inputs'>
          <select className='form-control'>
          <option>--Category--</option>
              <option>T-Shirts</option>
              <option>Shirts</option>
              <option>Chudi</option>
              <option>Tops</option>
              <option>Shoes</option>
              <option>Sports</option>
              <option>Jeans</option>
              <option>Pants</option>
              <option>Kids</option>
          </select>
          </div>
        <div className=' addproduct-inputs'>
          <select className='form-control'>
            <option>--Clothing for--</option>
            <option>Men</option>
            <option>Women</option>
            <option>Kids</option>
          </select>
          </div>
        
        <div className='col-lg-12 '><button type='submit' className='addproduct-button'>CONTINUE </button></div>
      </div>
    </div>
    </>
  )
}

export default Addproduct