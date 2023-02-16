import React from "react";
import "./Footer.css";
import google from "../../images/google.png";
import apple from "../../images/apple1.png";
import { ImFacebook2 } from "react-icons/im";
import { IoLogoTwitter } from "react-icons/io";
import { ImYoutube } from "react-icons/im";
import { ImInstagram } from "react-icons/im";

const Footer = () => {
  return (
    <div className="container footer">
      <div className="row">
        <div className="col-lg-4 footer1">
          <div>
            <div className="footer-heading">ONLINE SHOPPING</div>
            <ul style={{ listStyleType: "none" }}>
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
            </ul>
          </div>
          <div>
            <div className="footer-heading">CUSTOMER POLICIES</div>
            <ul style={{ listStyleType: "none" }}>
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>T&C</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 footer2">
          <div>
            <div className="footer-heading">
              EXPERIENCE MYNTRA APP ON MOBILE
            </div>
            <div className="footer2-img">
              <img src={google} className="footer2-img1" />
              <img src={apple} className="footer2-img2" />
            </div>
          </div>
          <div>
            <div className="footer-heading">KEEP IN TOUCH</div>
            <div>
              <ImFacebook2 className="footer2-icons" size={"20px"} />
              <IoLogoTwitter className="footer2-icons" size={"22px"} />
              <ImYoutube className="footer2-icons" size={"22px"} />
              <ImInstagram className="footer2-icons" size={"20px"} />
            </div>
          </div>
        </div>

        <div className="col-lg-4 footer3">
          <div style={{ marginBottom: "18px" }}>
            100% ORIGINAL guarantee for all products at myntra.com
          </div>
          <div>Return within 30days of receiving your order</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
