import React, { useEffect, useState } from 'react'
import "./Products.css"
import Productcard from "../Productcard/Productcard"
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Config } from '../../Config'
import { useSelector } from 'react-redux'

function Products({type}) {
  const params = useParams()
  const {currentUser}=useSelector(state=>state.user)
  const [ Wish,setWish]=useState([])
  const [Products,setProducts]=useState([]);
  
  useEffect(()=>{
    const product= async()=>{
      var allProducts = await axios.get(`${Config.api}/${type}`,
      {headers:{"Authorization":localStorage.getItem("accessToken")}}) ;
      setProducts(allProducts.data);

    }
    product();
  },[])

  useEffect(()=>{
    // let wish =async()=>{
    //   let prod= await axios.get(`${Config.api}/user/${currentUser.others._id}`,
    //   {headers:{"Authorization":localStorage.getItem("accessToken")}});
      // console.log(prod.data);
      let prod = currentUser.others.wishlist;
      // console.log(prod);
      setWish(prod);
      // console.log(currentUser.others.wishlist);
    // }
    // wish();
  },[currentUser.others.wishlist])
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
        
        {
          Products.map((item)=>{
              return <Productcard product={item} Wish={Wish}/>
          })
        }
        </div>
        
      
    </div>
    <Footer/>
    </>
  )
}

export default Products