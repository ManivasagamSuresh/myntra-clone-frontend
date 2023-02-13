import React from 'react'
import "./Cartcard.css"
import ref from "../../images/ref.jpg"
import { GrReturn } from 'react-icons/gr';


function Cartcard() {
  return (
    <div className="card mb-3 cart-card" style={{maxWidth: "100%"}}>
    <div className="row g-0">
      <div className="col-md-4">
        <img src={ref} className="img-fluid cart-cardimg" alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <div className='cartcard-remove'>X</div>
          <h5 className="cartcard-title">Card title</h5>
          <p className="cartcard-text">This is a wider card with supporting text below as a natural</p>
          <div className='cartcard-qty'>Qty :
            <select className='cartcard-qtyvalue'>
            <option > 1</option>
            <option className='cartcard-qtyvalue1'>2</option>
            <option>3</option>
            <option>4</option>
          </select>
          </div>
          <p className="cartcard-price">₹ 800</p>
          <div className='cartcard-return'><GrReturn/> <span className='cartcard-return1'>30 Days</span> Return Available</div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Cartcard