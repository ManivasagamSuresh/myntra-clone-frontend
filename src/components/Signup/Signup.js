import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Signup.css"
import signin from "../../images/login.png"


function Signup() {
  return (
    <>
    <Navbar/>
    <div className='container signup'>
    <div className='signup-C'>
        <img src={signin} alt="" className='signup-img'/>
        <h5 className='signup-heading'>Signup </h5>
        <form className='signup-form'>
          
          <input className='signup-inputs form-control' placeholder='Email'></input><br/>
          <input className='signup-inputs form-control' placeholder='Password' type={"password"}></input><br/>
          <input className='signup-inputs form-control' placeholder='Confirm Password' type={"password"}></input><br/>
          <textarea className='signup-inputs form-control' placeholder='Address'></textarea><br/>
          <input className='signup-inputs form-control' placeholder='Phone.No' type="number"></input><br/>
          <div className='signup-terms'>By continuing ,I agree to the <span className='signup-terms1'>Terms of Use</span> & <span className='signup-terms1'>Privacy Policy</span></div>
          <button type='submit' className='signup-button'>CONTINUE</button>
        </form>
    </div>
    </div>
    
    </>
  )
}

export default Signup