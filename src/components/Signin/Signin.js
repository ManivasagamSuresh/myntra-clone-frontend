import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Signin.css"
import signin from "../../images/login.png"


function Signin() {
  return (
    <>
    <Navbar/>
    <div className='container signin'>
    <div className='signin-C'>
        <img src={signin} alt="" className='signin-img'/>
        <h5 className='signin-heading'>Login with Email</h5>
        <form className='signin-form'>
          
          <input className='signin-inputs form-control' placeholder='Email'></input><br/>
          <input className='signin-inputs form-control' placeholder='Password' type={"password"}></input><br/>
          <div className='signin-terms'>By continuing ,I agree to the <span className='signin-terms1'>Terms of Use</span> & <span className='signin-terms1'>Privacy Policy</span></div>
          <button type='submit' className='signin-button'>CONTINUE</button>
        </form>
    </div>
    </div>
    
    </>
  )
}

export default Signin