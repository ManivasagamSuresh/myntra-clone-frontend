import React from 'react'
import "./Products.css"
import Productcard from "../Productcard/Productcard"
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function Products() {
  return (
    <>
    <Navbar/>
    <div className='container'>
      <div className='row'>
      <div className='col-lg-12'>
          <div className='products-filter'>
            <select className='products-filterselect'>
            <option>--Category--</option>
              <option>T-Shirts</option>
              <option>Shirts</option>
              <option>Chudi</option>
              <option>Tops</option>
              <option>Shoes</option>
              <option>Sports</option>
              <option>Jeans</option>
              
              <option>Kids</option>
            </select>
            <select className='products-filterselect'>
              <option>--Sort--</option>
              <option>Price: Low to High</option>
              <option>Price: high to Low</option>
              <option>What's New</option>
            </select>
          </div>
        </div>
        </div>
        <div className='row products'>
        <Productcard/>
        <Productcard/>
        <Productcard/>
        <Productcard/>
        <Productcard/>
        <Productcard/>
        <Productcard/>
        <Productcard/>
        </div>
        
      
    </div>
    <Footer/>
    </>
  )
}

export default Products