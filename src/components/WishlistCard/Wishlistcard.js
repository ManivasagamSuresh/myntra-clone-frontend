import React, { useEffect, useState } from "react";
import "./Wishlistcard.css";
import ref from "../../images/ref.jpg";
import { CiHeart } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import { Config } from "../../Config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddcartR, RemovewishlistR } from "../redux/Userslice";

function Wishlistcard({ prod }) {
  // console.log(prod);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  const [Cart, setCart] = useState(false);

  useEffect(() => {
    let Produts = async () => {
      let data = await axios.get(`${Config.api}/product/${prod}`, {
        headers: { Authorization: localStorage.getItem("accessToken") },
      });
      setProduct(data.data);
      // console.log(data.data);
      if (currentUser.others.cart.includes(data.data._id)) {
        setCart(true);
      }
    };
    Produts();
  }, [prod]);

  // useEffect(() => {
  //   if (currentUser.others.cart.includes(product._id)) {
  //     setCart(true);
  //   }
  // },[prod]);

  let Removewish = async () => {
    try {
      console.log(prod);
      // let remove = await axios.delete(`${Config.api}/wishlistdelete/${product._id}`,
      // {headers:{"Authorization":localStorage.getItem("accessToken")}});
      let removeId = await axios.put(
        `${Config.api}/wishIdRemove/${currentUser.others._id}`,
        { pId: prod },
        { headers: { Authorization: localStorage.getItem("accessToken") } }
      );
      console.log(removeId.data);
      dispatch(RemovewishlistR(prod));

      // window.location.reload()
    } catch (error) {
      console.log(error);
    }
  };

  let Addcart = async () => {
    try {
      console.log(product);
      // console.log(currentUser.others);
      let { _id, ...prod } = product;
      // let cart = await axios.post(`${Config.api}/addcart`,prod,
      // {headers:{"Authorization":localStorage.getItem("accessToken")}})
      let cartId = await axios.put(
        `${Config.api}/cartId/${currentUser.others._id}`,
        { pId: _id },
        { headers: { Authorization: localStorage.getItem("accessToken") } }
      );
      Removewish();
      dispatch(AddcartR(product._id));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="col-lg-3 Wishlistcard">
      <div
        className="wishlistcard-remove"
        onClick={() => {
          Removewish();
        }}
      >
        <span className="wishlistcard-removeX">x</span>
      </div>
      <img src={product.img} className="Wishlistcard-img" />
      <div className="Wishlistcard-details">
        <span className="Wishlistcard-brand">{product.brand}</span>
        <span className="Wishlistcard-desc">{product.description}</span>
        <div className="Wishlistcard-price">Rs. {product.price}</div>
        <div className="Wishlistcard-Cart">
          {Cart ? (
            <button
              className="Wishlistcard-cartbutton"
              onClick={() => {
                navigate("/cart");
              }}
            >
              In Cart
            </button>
          ) : (
            <button
              type="button"
              className="Wishlistcard-cartbutton"
              onClick={() => {
                Addcart();
              }}
            >
              Move to Bag
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Wishlistcard;
