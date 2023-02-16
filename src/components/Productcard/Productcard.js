import React, { useEffect, useState } from "react";
import "./Productcard.css";
import ref from "../../images/ref.jpg";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Config } from "../../Config";
import { useDispatch, useSelector } from "react-redux";
import { BsFillHeartFill } from "react-icons/bs";
import { AddwishlistR } from "../redux/Userslice";

function Productcard({ product, Wish }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [Wishlist, setWishlist] = useState(false);
  const [Wished, setWished] = useState(true);

  let Addwishlist = async () => {
    try {
     
      let { _id, ...oProd } = product;
      let add = { ...oProd, pId: _id, userId: currentUser.others._id };
     
      let wishid = await axios.put(
        `${Config.api}/wishId/${currentUser.others._id}`,
        add,
        { headers: { Authorization: localStorage.getItem("accessToken") } }
      );
      dispatch(AddwishlistR(product._id));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    
    const a = Wish.includes(product._id);
    // console.log(a);
    if (a) {
      setWished(true);
    } else {
      setWished(false);
    }
  }, [Wish]);
  return (
    <div
      className="col-lg-3 productcard"
      onMouseEnter={() => {
        setWishlist(true);
      }}
      onMouseLeave={() => {
        setWishlist(false);
      }}
    >
      {Wishlist ? (
        <div className="productcard-wishlist">
          {Wished ? (
            <button className="productcard-wishlistbutton">
              <BsFillHeartFill style={{ color: "red" }} /> Wishlisted
            </button>
          ) : (
            <button
              type="button"
              className="productcard-wishlistbutton"
              onClick={() => {
                Addwishlist();
              }}
            >
              <CiHeart /> Wishlist
            </button>
          )}
        </div>
      ) : null}
      <img
        src={`${product.img}`}
        className="productcard-img"
        onClick={() => {
          navigate(`/product/${product._id}`);
        }}
      />
      <div className="productcard-details">
        <div className="productcard-brand">{product.brand}</div>
        <div className="productcard-desc">{product.description}</div>
        <div className="productcard-price">Rs.{product.price} </div>
      </div>
    </div>
  );
}

export default Productcard;
