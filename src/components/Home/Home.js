import React from "react";
import "./Home.css";
import myntrahome from "../../images/myntra-home.jpg";
import men from "../../images/kholi-myntra.jpg";
import women from "../../images/anushka-myntra.jpg";
import Homecard from "../Homecard/Homecard";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="container home">
        <div className="row">
          <div className="col-lg-12">
            <img
              src={myntrahome}
              className="myntrahomeimg"
              onClick={() => {
                navigate("/products");
              }}
            />
          </div>
        </div>
        <div className="row">
          <Homecard />
        </div>
        <div className="row">
          <div className="col-lg-12 home-budgetinfo">
            <h1 className="home-budgetinfo1">🎊 BUDGET BUY 🎊</h1>
            <h3 className="home-budgetinfo2">WOW TRENDS AT WOW PRICE</h3>
            <div className="home-budgetinfo3">(PRICE BELOW 1000)</div>
          </div>
          <div
            className="col-lg-6  home-shop"
            onClick={() => {
              navigate("/filter/genderprice/Men");
            }}
          >
            <img src={men} className="home-budgetimg" />
            <div style={{ marginTop: "20px" }}>SHOP MEN</div>
          </div>
          <div
            className="col-lg-6 home-shop"
            onClick={() => {
              navigate("/filter/genderprice/Women");
            }}
          >
            <img src={women} className="home-budgetimg" />
            <div style={{ marginTop: "20px" }}>SHOP WOMEN</div>
          </div>
          <hr className="home-budgethr" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
