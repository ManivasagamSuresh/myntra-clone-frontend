import React from "react";
import "./Homecard.css";
import tshirt from "../../images/card-image/tshirt.png";
import chudi from "../../images/card-image/chudi.jpg";
import jeans from "../../images/card-image/jeans.jpg";
import shoe from "../../images/card-image/shoe.jpg";
import sport from "../../images/card-image/sport.jpg";
import top from "../../images/card-image/top.jpg";
import shirt from "../../images/card-image/shirt.jpg";
import kids from "../../images/card-image/kid.jpg";
import { useNavigate } from "react-router-dom";

function Homecard() {
  const navigate = useNavigate();
  return (
    <div className=" Homecard">
      <div className="row">
        <div className="col-lg-12 Homecard-info">
          <div className="">
            <span>❤️❤️</span>
            <span className="Homecard-heading">SHOP BY CATEGORY</span>
            <span>❤️❤️</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="col-lg-3 Homecard-card1"
          style={{ backgroundImage: `url(${tshirt})` }}
          onClick={() => {
            navigate("/filter/categories/T-Shirts");
          }}
        >
          <h4 className="Homecard-carddesc"> T-SHIRTS </h4>
        </div>
        <div
          className="col-lg-3 Homecard-card1"
          style={{ backgroundImage: `url(${chudi})` }}
          onClick={() => {
            navigate("/filter/categories/Chudi");
          }}
        >
          <h4 className="Homecard-carddesc"> CHUDI </h4>
        </div>
        <div
          className="col-lg-3 Homecard-card1"
          style={{ backgroundImage: `url(${jeans})` }}
          onClick={() => {
            navigate("/filter/categories/Jeans");
          }}
        >
          <h4 className="Homecard-carddesc"> JEANS </h4>
        </div>
        <div
          className="col-lg-3 Homecard-card1"
          style={{ backgroundImage: `url(${top})` }}
          onClick={() => {
            navigate("/filter/categories/Tops");
          }}
        >
          <h4 className="Homecard-carddesc"> TOPS FOR WOMEN </h4>
        </div>
        <div
          className="col-lg-3 Homecard-card1"
          style={{ backgroundImage: `url(${shirt})` }}
          onClick={() => {
            navigate("/filter/categories/Shirts");
          }}
        >
          <h4 className="Homecard-carddesc"> SHIRTS </h4>
        </div>
        <div
          className="col-lg-3 Homecard-card1"
          style={{ backgroundImage: `url(${shoe})` }}
          onClick={() => {
            navigate("/filter/categories/Shoes");
          }}
        >
          <h4 className="Homecard-carddesc"> SHOES </h4>
        </div>
        <div
          className="col-lg-3 Homecard-card1"
          style={{ backgroundImage: `url(${sport})` }}
          onClick={() => {
            navigate("/filter/categories/Sports");
          }}
        >
          <h4 className="Homecard-carddesc"> SPORTS WEAR </h4>
        </div>
        <div
          className="col-lg-3 Homecard-card1"
          style={{ backgroundImage: `url(${kids})` }}
          onClick={() => {
            navigate("/filter/categories/Kids");
          }}
        >
          <h4 className="Homecard-carddesc"> KIDS WEAR </h4>
        </div>
      </div>
    </div>
  );
}

export default Homecard;
