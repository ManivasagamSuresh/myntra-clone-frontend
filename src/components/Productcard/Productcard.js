import React, { useState } from 'react'
import "./Productcard.css"
import ref from "../../images/ref.jpg"
import { CiHeart } from 'react-icons/ci';

function Productcard() {
  const [Wishlist,setWishlist]=useState(false);
  return (
    <div className='col-lg-3 productcard' onMouseEnter={()=>{setWishlist(true)}} onMouseLeave={()=>{setWishlist(false)}}>
      {Wishlist ? <div className='productcard-wishlist'><button className='productcard-wishlistbutton'><CiHeart/> Wishlist</button></div> : null}
      <img src={ref} className="productcard-img"/>
      <div className='productcard-details'>
        <div className='productcard-brand'>Brand</div>
        <div className='productcard-desc'>Description</div>
        <div className='productcard-price'>Rs. </div>
        </div>
    </div>
  )
}

export default Productcard