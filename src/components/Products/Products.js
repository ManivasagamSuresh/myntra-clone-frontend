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
              <option>products-filter</option>
              <option>products-filter</option>
              <option>products-filter</option>
            </select>
            <select className='products-filterselect'>
              <option>products-filter</option>
              <option>products-filter</option>
              <option>products-filter</option>
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