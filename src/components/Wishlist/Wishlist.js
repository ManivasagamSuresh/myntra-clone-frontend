import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Config } from "../../Config";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Wishlistcard from "../WishlistCard/Wishlistcard";
import "./Wishlist.css";

function Wishlist() {
  const params = useParams();
  const [Product, setProduct] = useState([]);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    console.log(currentUser.others.wishlist);
    setProduct(currentUser.others.wishlist);
    // window.location.reload();
  },[currentUser.others.wishlist]);

  return (
    <>
      <Navbar />
      <div className="container wishlist">
        <div className="row">
          <div className="col-lg-12">
            <div className="wishlist-desc">
              <span className="wishlist-count">My Wishlist: </span>
              <span style={{ color: "gray" }}>{Product.length}</span>
            </div>
          </div>

          {Product.map((item) => {
            return <Wishlistcard prod={item} />;
          })}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Wishlist;
