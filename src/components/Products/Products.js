import React, { useEffect, useState } from 'react'
import "./Products.css"
import Productcard from "../Productcard/Productcard"
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Config } from '../../Config'
import { useSelector } from 'react-redux'

function Products({type}) {
  const params = useParams()
  const navigate=useNavigate();
  const {currentUser}=useSelector(state=>state.user)
  const [ Wish,setWish]=useState([])
  const [Products,setProducts]=useState([]);
  const [filter,setFilter]=useState([]);
  
  
  useEffect(()=>{
    const product= async()=>{
      var allProducts = await axios.get(`${Config.api}/${type}`,
      {headers:{"Authorization":localStorage.getItem("accessToken")}}) ;
      // if (filter.length != 0 )
      setProducts(allProducts.data);
      // else{
      //   setProducts(filter);
      // }

    }
    product();
  },[])

  useEffect(()=>{
    // let wish =async()=>{
    //   let prod= await axios.get(`${Config.api}/user/${currentUser.others._id}`,
    //   {headers:{"Authorization":localStorage.getItem("accessToken")}});
      // console.log(prod.data);
      let prod = currentUser?.others.wishlist;
      setWish(prod);
      // setProducts(filter);

      // console.log(currentUser.others.wishlist);
    // }
    // wish();
  },[currentUser?.others.wishlist]);


  // let Filter=(e)=>{
  //   console.log(e);
  //   setFilter(e.target.value);
  //   console.log(filter);
  //   navigate(`/filter/categories/${filter}`)
  // }
  
  return (
    <>
    <Navbar/>
    <div className='container'>
      <div className='row'>
      <div className='col-lg-12'>
          <div className='products-filter'>
            <div>{filter}</div>
            <select className='products-filterselect'  onChange={(e)=>{
              
              navigate(`/filter/categories/${e.target.value}`);} }
              // let filtered = Products.filter(ele=>ele.category == e.target.value);
              // console.log(filtered);
              // setProducts(filtered);
                >
            <option>--Category--</option>
              <option >T-Shirts</option>
              <option >Shirts</option>
              <option>Chudi</option>
              <option>Tops</option>
              <option>Shoes</option>
              <option>Sports</option>
              <option>Jeans</option>
              
              <option>Kids</option>
            </select>
            <select className='products-filterselect'  onChange={(e)=>{
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