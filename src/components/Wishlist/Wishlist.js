import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Wishlistcard from '../WishlistCard/Wishlistcard'
import "./Wishlist.css"

function Wishlist() {
  return (
    <>
    <Navbar/>
    <div className='container wishlist'>
    <div className='row'>
      <div className='col-lg-12'>
        <div className='wishlist-desc'><spam className="wishlist-count">My Wishlist :</spam> 12</div>
      </div>
    <Wishlistcard/>
    <Wishlistcard/>
    <Wishlistcard/>
    <Wishlistcard/>
    <Wishlistcard/>
    </div>
    </div>
    
    <Footer/>
    </>
  )
}

export default Wishlist