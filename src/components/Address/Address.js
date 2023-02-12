import React from 'react'
import "./Address.css"

function Address({setOpen}) {
    
  return (
    <div className='container Address-C'>
        <div className='addressform'>
        <div className='address-remove' onClick={()=>{setOpen(false)}}><span className='address-removeX'>X</span></div><h6>Provide the deliver Address</h6>
            <form>
                <textarea rows="" cols="" className='form-control' placeholder='Delivery Address'></textarea>
                <button type='submit' className='address-button'>Change Delivery Address</button>
            </form>
        </div>
    </div>
  )
}

export default Address