import React, { useEffect, useState } from 'react'
import "./Genderprice.css"
import Productcard from "../Productcard/Productcard"
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Config } from '../../Config'
import { useSelector } from 'react-redux'

function Genderprice({type}) {
  const params = useParams()
  const [Products,setProducts]=useState([]);
  const {currentUser}=useSelector(state=>state.user)
  const [ Wish,setWish]=useState([]);
  const [filter,setFilter]=useState('');
  const navigate=useNavigate();


  useEffect(()=>{
    const product= async()=>{
        // console.log(params.clothing);
      var allProducts = await axios.get(`${Config.api}/filter/genderprice/${params.clothing}`,
      {headers:{"Authorization":localStorage.getItem("accessToken")}}) ;
      console.log(allProducts.data);
      setProducts(allProducts.data);

    }
    product();
  },[params.clothing])

  useEffect(()=>{
    // let wish =async()=>{
    //   let prod= await axios.get(`${Config.api}/wishlist/${currentUser.others._id}`,
    //   {headers:{"Authorization":localStorage.getItem("accessToken")}});
    //   console.log(prod.data);
    //   setWish(prod.data);
    // }
    // wish();
    let prod = currentUser.others.wishlist;
      setWish(prod);
  },[currentUser.others.wishlist])

  return (
    <>
    <Navbar/>
    <div className='container'>
      <div className='row'>
      <div className='col-lg-12'>
          <div className='Genderprice-filter'>
            <select className='Genderprice-filterselect'   onChange={(e)=>{
              navigate(`/filter/categories/${e.target.value}`);} }>
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
            <select className='Genderprice-filterselect' onChange={(e)=>{
              if(e.target.value == "Price: Low to High"){
              let sort = Products.sort((a,b)=>(a.price>b.price)?1:(a.price<b.price)?-1:0 );
            console.log(sort);
          setProducts(sort);
          setFilter("asc");
          // console.log(filter);
        }
              else if(e.target.value == "Price: high to Low"){
                let sort = Products.sort((a,b)=>(a.price<b.price)?1:(a.price>b.price)?-1:0 );
            console.log(sort);
            setProducts(sort);
                setFilter("desc")
            // console.log(filter);
          }
            }}> 
              <option>--Sort--</option>
              <option>Price: Low to High</option>
              <option>Price: high to Low</option>
              
            </select>
          </div>
        </div>
        </div>
        <div className='row Genderprice'>
        
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

export default Genderprice