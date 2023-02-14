import React, { useEffect, useState } from 'react'
import "./Cartcard.css"
import ref from "../../images/ref.jpg"
import { GrReturn } from 'react-icons/gr';
import { Config } from '../../Config';
import axios from 'axios';
import { useSelector } from 'react-redux';


function Cartcard({prod}) {
  console.log(prod)
  const [Product,setProduct]=useState([]);
  const {currentUser}=useSelector(state=>state.user);
  

  useEffect(()=>{
    let prods = async()=>{
      let data = await axios.get(`${Config.api}/product/${prod}`,
      {headers:{"Authorization":localStorage.getItem("accessToken")}});
      setProduct(data.data);
      console.log(data.data);
    } 
    prods();
  },[currentUser.others.cart]);

let RemoveCart = async()=>{
  try {
    
  } catch (error) {
    
  }
}

  return (
    <div className="card mb-3 cart-card" style={{maxWidth: "100%"}}>
    <div className="row g-0">
      <div className="col-md-4">
        <img src={Product.img} className="img-fluid cart-cardimg" alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <div className='cartcard-remove' onClick={()=>{RemoveCart()}}>X</div>
          <h5 className="cartcard-title">{Product.brand}</h5>
          <p className="cartcard-text">{Product.description}</p>
          <div className='cartcard-qty'>Qty :
            <select className='cartcard-qtyvalue'>
            <option > 1</option>
            <option className='cartcard-qtyvalue1'>2</option>
            <option>3</option>
            <option>4</option>
          </select>
          </div>
          <p className="cartcard-price">₹ {Product.price}</p>
          <div className='cartcard-return'><GrReturn/> <span className='cartcard-return1'>30 Days</span> Return Available</div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Cartcard