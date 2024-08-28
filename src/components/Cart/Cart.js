import React, { useEffect, useState } from "react";
import "./Cart.css";
import { TbTruckDelivery } from "react-icons/tb";
import Cartcard from "../Cartcard/Cartcard";
import secure from "../../images/secure.jpg";
import myntra from "../../images/myntra.png";
import Address from "../Address/Address";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Emptycart, EmptyTotalprice, RemoveTotalPrice } from "../redux/Userslice";
import { Config } from "../../Config";

function Cart() {
  const { currentUser } = useSelector((state) => state.user);
  const [Open, setOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch();
  const [TotalMRP,setTotalMRP]=useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    setCartItems(currentUser.others.cart);
    let MRP = currentUser.others.totalprice.reduce((acc, curr) => {
      return (acc = acc + curr.price);
    }, 0);
    setTotalMRP(MRP);

  }, [currentUser.others.cart]);

  
  useEffect(() => {
    
    let MRP = currentUser.others.totalprice.reduce((acc, curr) => {
      return (acc = acc + curr.price);
    }, 0);
    setTotalMRP(MRP);
  }, [currentUser.others.cart,currentUser.others.totalprice]);
  
  const EmptycartArray =async()=>{
    try {
      let empty = await axios.put(`${Config.api}/emptycart/${currentUser.others._id}`);
      console.log(empty.data);
    } catch (error) {
      console.log(error)
    }
  }

  const finalOrder = (e) => {
    e.preventDefault();
    if (TotalMRP == "") {
      alert("please add items to cart");
    } else {
      var options = {
        key: "rzp_test_diMdipPKrcdCOl",
        key_secret: "IuOU70fjnwEzITn5aQNMBvsp",
        amount: TotalMRP * 100,
        currency: "INR",
        name: "Myntra",
        description: "testing purpose",
        handler: function (response) {
          alert("Order Placed");
          dispatch(Emptycart());
          dispatch(EmptyTotalprice());
          EmptycartArray();
          navigate("/home");
        },
        prefill: {
          name: "manivasagam",
          email: "s.kishore123.64@gmail.com",
          contact: "9566991210",
        },
        notes: {
          address: "Razor Corporate office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  };

  return (
    <>
      {Open ? (
        <Address setOpen={setOpen} />
      ) : (
        <div className="container cart">
          <div className="row">
            <div className="col-lg-12 cart-nav">
              <img
                src={myntra}
                className="cart-myntra"
                onClick={() => {
                  navigate("/home");
                }}
              />
              <img src={secure} className="cart-secure" />
            </div>
          </div>

          <div className="row cart-c">
            <div className="col-lg-8 cart-left">
              <div className="row">
                <div className="col-lg-12 cart-address">
                  <div>
                    <div>
                      Deliver to :{" "}
                      <span className="cart-addressname">
                        {currentUser.others.name}
                      </span>{" "}
                    </div>
                    <div className="cart-addressmain">
                      {currentUser.others.address}
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="cart-changeaddress"
                      onClick={() => {
                        setOpen(true);
                      }}
                    >
                      CHANGE ADDRESS
                    </button>
                  </div>
                </div>
                <div className="col-lg-12 cart-noconvenience">
                  <TbTruckDelivery />
                  Yay!{" "}
                  <span className="cart-noconveniencefee">
                    No Convenience fee
                  </span>{" "}
                  on this order
                </div>
                <div className="col-lg-12 cart-card">
                  {cartItems.length == 0 ?<div>Oops ! No products in your Cart .<span className="nocart" onClick={()=>{navigate("/products")}}>View products</span></div>
                  :<>{cartItems.map((item) => {
                    return <Cartcard prod={item} />;
                  })}
                  </>}
                </div>
              </div>
            </div>

            <div className="col-lg-4 cart-right">
              <div className="row">
                <div className="col-lg-12 cart-placeorder">
                  <div className="cart-pricedetail">PRICE DETAILS</div>
                  <div className="cart-mrp">
                    <span>Total MRP </span>
                    <span>₹ {TotalMRP}</span>
                  </div>
                  <div className="cart-mrp">
                    <span>Convenience fee </span>
                    <span style={{ color: "rgb(34,139,34)" }}>FREE</span>
                  </div>
                  <hr />
                  <div className="cart-mrp">
                    <b>Total Amount </b>
                    <b>₹ {TotalMRP}</b>
                  </div>
                  <button
                    type="button"
                    className="cart-button"
                    onClick={finalOrder}
                  >
                    PLACE THE ORDER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
