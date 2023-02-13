import React from 'react'
import "./Homecard.css"
import tshirt from "../../images/card-image/tshirt.png"
import chudi from "../../images/card-image/chudi.jpg"
import jeans from "../../images/card-image/jeans.jpg"
import shoe from "../../images/card-image/shoe.jpg"
import sport from "../../images/card-image/sport.jpg"
import top from "../../images/card-image/top.jpg"
import shirt from "../../images/card-image/shirt.jpg"
import kids from "../../images/card-image/kid.jpg"


function Homecard() {
  return (
    <div className=' Homecard'>
        <div className='row'>
    <div className='col-lg-12 Homecard-info'>
        <div className=''>
        <span>❤️❤️</span><span className='Homecard-heading'>SHOP BY CATEGORY</span><span>❤️❤️</span> 
        </div>
        </div>
        </div>
        <div className='row'>
        <div className='col-lg-3 Homecard-card1' style={{backgroundImage:`url(${tshirt})`}}>
           <h4 className='Homecard-carddesc'> T-SHIRTS </h4>
        </div>
        <div className='col-lg-3 Homecard-card1' style={{backgroundImage:`url(${chudi})`}}>
        <h4 className='Homecard-carddesc'> CHUDI </h4>
        </div>
        <div className='col-lg-3 Homecard-card1' style={{backgroundImage:`url(${jeans})`}}>
        <h4 className='Homecard-carddesc'> JEANS </h4>
        </div>
        <div className='col-lg-3 Homecard-card1' style={{backgroundImage:`url(${top})`}}>
        <h4 className='Homecard-carddesc'> TOPS FOR WOMEN </h4>
        </div>
        <div className='col-lg-3 Homecard-card1' style={{backgroundImage:`url(${shirt})`}}>
        <h4 className='Homecard-carddesc'> SHIRTS </h4>
        </div>
        <div className='col-lg-3 Homecard-card1' style={{backgroundImage:`url(${shoe})`}}>
        <h4 className='Homecard-carddesc'> SHOES </h4>
        </div>
        <div className='col-lg-3 Homecard-card1' style={{backgroundImage:`url(${sport})`}}>
        <h4 className='Homecard-carddesc'> SPORTS WEAR </h4>
        </div>
        <div className='col-lg-3 Homecard-card1' style={{backgroundImage:`url(${kids})`}}>
        <h4 className='Homecard-carddesc'> KIDS WEAR </h4>
        </div>
        </div>
     </div>
  )
}

export default Homecard