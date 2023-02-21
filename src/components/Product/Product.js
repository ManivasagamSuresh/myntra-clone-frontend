import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Product.css";
import ref from "../../images/ref.jpg";
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { BsHandbag } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Config } from "../../Config";
import { useDispatch, useSelector } from "react-redux";
import { AddcartR, AddwishlistR } from "../redux/Userslice";
import loader from "../../images/preloader1.gif";

function Product() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [Wish, setWish] = useState(false);
  const [Admin, setAdmin] = useState(false);
  const [Product, setProduct] = useState([]);
  const [Cart, setCart] = useState(false);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setloading(true);
    let item = async () => {
      let prod = await axios.get(`${Config.api}/product/${params.id}`, {
        headers: { Authorization: localStorage.getItem("accessToken") },
      });
      setProduct(prod.data);
    };
    item();
    setloading(false);
  }, []);

  useEffect(() => {
    if (currentUser.others.admin == 1) {
      setAdmin(true);
    }
    if (currentUser.others.wishlist.includes(params.id)) {
      setWish(true);
    }
    if (currentUser.others.cart.includes(params.id)) {
      setCart(true);
    }
  }, [currentUser.others.wishlist, currentUser.others.cart]);

  let Addwish = async () => {
    let wishid = await axios.put(
      `${Config.api}/wishId/${currentUser.others._id}`,
      { pId: params.id },
      { headers: { Authorization: localStorage.getItem("accessToken") } }
    );
    dispatch(AddwishlistR(params.id));
  };

  let deleteProd = async () => {
    let deleteProduct = await axios.delete(
      `${Config.api}/deleteproduct/${params.id}`,
      { headers: { Authorization: localStorage.getItem("accessToken") } }
    );
    alert("Product deleted");
    navigate("/products");
  };

  let Addcart = async () => {
    let cartId = await axios.put(
      `${Config.api}/cartId/${currentUser.others._id}`,
      { pId: Product._id },
      { headers: { Authorization: localStorage.getItem("accessToken") } }
    );

    dispatch(AddcartR(Product._id));
  };

  return (
    
    
    <>
      <Navbar />

    { loading ?   
      <div className="container loader">
        <img src={loader} alt="" height={"80px"} />
      </div>  
      :  
      
        <div className="container">
          <div className="row product">
            <div className="col-lg-6 product-i">
              <img
                src={`${Product.img}`}
                alt=""
                height={"90%"}
                width="100%"
                className="product-img"
              />
            </div>
            <div className="col-lg-6 product-details">
              <div className="product-brand">{Product.brand}</div>
              <div className="product-desc">{Product.description}</div>
              <hr className="product-hr" />
              <div className="product-price">{`MRP ₹ ${Product.price}`}</div>
              <div className="product-buttons">
                {Admin ? (
                  <>
                    <button
                      type="button"
                      className="product-button3"
                      onClick={() => {
                        navigate(`/editproduct/${params.id}`);
                      }}
                    >
                      {" "}
                      EDIT PRODUCT
                    </button>
                    <button
                      type="button"
                      className="product-button4"
                      onClick={() => {
                        deleteProd();
                      }}
                    >
                      DELETE PRODUCT
                    </button>
                  </>
                ) : (
                  <>
                    <button type="button" className="product-button1">
                      {Cart ? (
                        <div
                          onClick={() => {
                            navigate("/cart");
                          }}
                        >
                          <BsHandbag /> In Bag{" "}
                        </div>
                      ) : (
                        <div onClick={Addcart}>
                          <BsHandbag /> Add to Bag
                        </div>
                      )}
                    </button>
                    <button type="button" className="product-button2">
                      {Wish ? (
                        <>
                          <BsHeartFill className="product-heartfill" />{" "}
                          WISHLISTED
                        </>
                      ) : (
                        <div
                          onClick={() => {
                            Addwish();
                          }}
                        >
                          <BsHeart /> WISHLIST{" "}
                        </div>
                      )}
                    </button>
                  </>
                )}
              </div>
              <hr />

              <div className="product-otherinfo">
                <div className="product-otherinfoH">OTHER INFO</div>
                <div>100% Original Products</div>
                <div>Pay on delivery might be available</div>
                <div>Easy 30 days returns and exchanges</div>
                <div>Try & Buy might be available</div>
              </div>
            </div>
          </div>
        </div>
} 
      <Footer />
    </>
  );
}

export default Product;
