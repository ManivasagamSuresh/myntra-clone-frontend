import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./Editproduct.css"

function Editproduct() {
  const navigate = useNavigate();
  const params = useParams();
  navigate(`/product/${params.id}`)
  return (
    <>
    <div className='container editproduct'>
      <div className='row editproduct-c'>
        <div className='editproduct-remove'><div className='editproduct-removeX' onClick={()=>{navigate(`/product/${params.id}`)}}>X</div></div>
        <div className='col-lg-12'><h5>ADD YOUR PRODUCT</h5></div>
        <div className=' editproduct-inputs'><input className='form-control' placeholder='Brand'/></div>
        <div className=' editproduct-inputs'><input className='form-control' placeholder='Description'/></div>
        <div className=' editproduct-inputs'><input className='form-control' placeholder='Price'/></div>
        <div className=' editproduct-inputs'><input className='form-control' placeholder='image link'/></div>
        <div className=' editproduct-inputs'>
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
        <div className=' editproduct-inputs'>
          <select className='form-control'>
            <option>--Clothing for--</option>
            <option>Men</option>
            <option>Women</option>
            <option>Kids</option>
          </select>
          </div>
        
        <div className='col-lg-12 '><button type='submit' className='editproduct-button'>CONTINUE </button></div>
      </div>
    </div>
    </>
  )
}

export default Editproduct