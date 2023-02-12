import React, { useState } from 'react'
import "./Wishlistcard.css"
import ref from "../../images/ref.jpg"
import { CiHeart } from 'react-icons/ci';
import { BsHandbag } from "react-icons/bs";

function Wishlistcard() {
//   const [Cart,setCart]=useState(false);
  return (
    <div className='col-lg-3 Wishlistcard' >
      <div className='wishlistcard-remove'><span className='wishlistcard-removeX'>x</span></div>
      <img src={ref} className="Wishlistcard-img" />
      <div className='Wishlistcard-details'>
        <span className='Wishlistcard-brand'>Brand</span>
        <span className='Wishlistcard-desc'>Description</span>
        <div className='Wishlistcard-price'>Rs.2106 </div>
        <div className='Wishlistcard-Cart'><button type='button' className='Wishlistcard-cartbutton'>Move to Bag</button></div> 
        </div>
    </div>
  )
}

export default Wishlistcard