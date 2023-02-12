import React, { useState } from "react";
import "./Navbar.css";
import myntra from "../../images/myntra.png";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsHandbag } from "react-icons/bs";
import { AiOutlineFolderAdd } from 'react-icons/ai';
import Addproduct from "../addproduct/Addproduct";

function Navbar() {
  const [Open,setOpen]=useState(false);
  return (
    <>
    {Open ? <Addproduct setOpen={setOpen}/>:
    
    <div className="container">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
        <img src={myntra} className="navbar-myntra-image" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
                
              

              <li className="nav-item">
                <a className="nav-link active" aria-current="pa ge" href="#">
                  MEN
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  WOMEN
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  KIDS
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 navbar-search-input"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="navbar-search" type="submit">
                <BiSearchAlt2 />
              </button>
            </form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-icons-ul">
              <li className="nav-item ">
                <div className="navbar-icons-li">
                <BsPerson size={"1.2em"} />
                <div className="navbar-icon-desc">profile</div>
                </div>
              </li>
              <li className="nav-item navbar-icons-li">
                <BsHeart size={"1.1em"} />
                <div className="navbar-icon-desc">Wishlist</div>
              </li>
              <li className="nav-item navbar-icons-li">
                <BsHandbag size={"1.2em"} />
                <div className="navbar-icon-desc">Bag</div>
              </li>
              <li className="nav-item navbar-icons-li">
                <AiOutlineFolderAdd size={"1.2em"} onClick={()=>{setOpen(true)}}/>
                <div className="navbar-icon-desc">Add product</div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>}
    </>
  );
}

export default Navbar;
