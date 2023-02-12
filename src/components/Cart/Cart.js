import React, { useState } from 'react'
import "./Cart.css"
import { TbTruckDelivery } from 'react-icons/tb';
import Cartcard from '../Cartcard/Cartcard';
import secure from "../../images/secure.jpg"
import myntra from "../../images/myntra.png"
import Address from '../Address/Address';


function Cart() {
  const [Open,setOpen]=useState(false);
  return (
    <>
    {
      Open ? <Address setOpen={setOpen}/>
      :
    
    <div className='container cart'>

      <div className='row'>
        <div className='col-lg-12 cart-nav'>
        <img src={myntra} className="cart-myntra"/>
        <img src={secure} className="cart-secure"/>
        </div>
      </div>

        <div className='row cart-c'>
          <div className='col-lg-8 cart-left'>
            <div className='row'>
              <div className='col-lg-12 cart-address'>
                <div>
                <div>Deliver to :   <span className='cart-addressname'>Bakya PM</span> </div>
                <div className='cart-addressmain'>10/5, rajiv gandhi nagar,thiruparankundram</div>
                </div>
                <div>
                  <button type='submit' className='cart-changeaddress' onClick={()=>{setOpen(true)}}>CHANGE ADDRESS</button>
                </div>
                </div>
                <div className='col-lg-12 cart-noconvenience'>
                <TbTruckDelivery/>Yay! <span className='cart-noconveniencefee'>No Convenience fee</span> on this order
                 </div>
                <div className='col-lg-12 cart-card'>
                <Cartcard/>
                </div>
              </div>
            </div>


          <div className='col-lg-4 cart-right'>
            <div className='row'>
              <div className='col-lg-12 cart-placeorder'>
                <div className='cart-pricedetail'>PRICE DETAILS</div>
                <div className='cart-mrp'><span>Total MRP </span><span>₹ 2106</span></div>
                <div className='cart-mrp'><span>Convenience fee </span><span style={{color:"rgb(34,139,34)"}} >FREE</span></div>
                <hr/>
                <div className='cart-mrp'><b>Total Amount </b><b>₹ 2106</b></div>
                 <button type='button' className='cart-button'>PLACE THE ORDER</button>
              </div>
            </div>
          </div>

        </div>
      
    </div>
    }
    </>
  )
}

export default Cart