import React, { useEffect, useState } from 'react'
import "./Cart.css"
import { TbTruckDelivery } from 'react-icons/tb';
import Cartcard from '../Cartcard/Cartcard';
import secure from "../../images/secure.jpg"
import myntra from "../../images/myntra.png"
import Address from '../Address/Address';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { current } from '@reduxjs/toolkit';


function Cart() {
  const {currentUser}=useSelector(state=>state.user);
  const [Open,setOpen]=useState(false);
  const [cartItems,setCartItems]=useState([]);
  const navigate = useNavigate();


useEffect(()=>{
  setCartItems(currentUser.others.cart)
},[currentUser.others.cart])

let TotalMRP = currentUser.others.totalprice.reduce((acc,curr)=>{
  return (acc=acc+curr.price);
},0) 
console.log(TotalMRP);

console.log(currentUser.others.totalprice);


  return (
    <>
    {
      Open ? <Address setOpen={setOpen}/>
      :
    
    <div className='container cart'>

      <div className='row'>
        <div className='col-lg-12 cart-nav'>
        <img src={myntra} className="cart-myntra" onClick={()=>{navigate('/')}}/>
        <img src={secure} className="cart-secure"/>
        </div>
      </div>

        <div className='row cart-c'>
          <div className='col-lg-8 cart-left'>
            <div className='row'>
              <div className='col-lg-12 cart-address'>
                <div>
                <div>Deliver to :   <span className='cart-addressname'>{currentUser.others.name}</span> </div>
                <div className='cart-addressmain'>{currentUser.others.address}</div>
                </div>
                <div>
                  <button type='submit' className='cart-changeaddress' onClick={()=>{setOpen(true)}}>CHANGE ADDRESS</button>
                </div>
                </div>
                <div className='col-lg-12 cart-noconvenience'>
                <TbTruckDelivery/>Yay! <span className='cart-noconveniencefee'>No Convenience fee</span> on this order
                 </div>
                <div className='col-lg-12 cart-card'>
                
                {
                  cartItems.map((item)=>{
                      return <Cartcard prod={item}/>
                  })
                }
                </div>
              </div>
            </div>


          <div className='col-lg-4 cart-right'>
            <div className='row'>
              <div className='col-lg-12 cart-placeorder'>
                <div className='cart-pricedetail'>PRICE DETAILS</div>
                <div className='cart-mrp'><span>Total MRP </span><span>₹ {TotalMRP}</span></div>
                <div className='cart-mrp'><span>Convenience fee </span><span style={{color:"rgb(34,139,34)"}} >FREE</span></div>
                <hr/>
                <div className='cart-mrp'><b>Total Amount </b><b>₹ {TotalMRP}</b></div>
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