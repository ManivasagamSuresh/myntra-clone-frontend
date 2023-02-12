import React, { useState } from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import "./Product.css"
import ref from "../../images/ref.jpg"
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { BsHandbag } from "react-icons/bs";



function Product() {
    const [Wish,setWish] = useState(true)
    const[Admin,setAdmin]=useState(true);
  return (
    <>
    <Navbar/>
    <div className='container'>
    <div className='row product'>
        <div className='col-lg-6 product-i'>
        <img src={ref} alt="" height={"350px"} width="290px" className='product-img'/>
        </div>
        <div className='col-lg-6 product-details'>
            <div className='product-brand'>Brand</div>
            <div className='product-desc'>Description</div>
            <hr className='product-hr'/>
            <div className='product-price'>{`MRP ₹ ${21}`}</div>
            <div className='product-buttons'>
                {Admin ? <>
                  <button type='button' className='product-button3'> UPDATE PRODUCT</button>
                <button type='button' className='product-button4'>DELETE PRODUCT</button>
                </>
                :<>
                <button type='button' className='product-button1'><BsHandbag/> Add to Bag</button>
                <button type='button' className='product-button2'>{Wish ? <><BsHeartFill className='product-heartfill'/> WISHLISTED</> :<><BsHeart/> WISHLIST </>}</button>
                </>}
                
            </div>
            <hr/>
            
            <div className='product-otherinfo'>
                <div className='product-otherinfoH'>OTHER INFO</div>
           <div>100% Original Products</div>
           <div>Pay on delivery might be available</div>
           <div>Easy 30 days returns and exchanges</div> 
            <div>Try & Buy might be available</div>
            </div>
        </div>
    </div>
    </div>
    <Footer/>
    </>
    
  )
}

export default Product