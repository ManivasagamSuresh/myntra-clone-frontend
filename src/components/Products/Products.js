import React, { useEffect, useState } from "react";
import "./Products.css";
import Productcard from "../Productcard/Productcard";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Config } from "../../Config";
import { useSelector } from "react-redux";
import loader from "../../images/preloader1.gif";

function Products({ type }) {
  const params = useParams();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [Wish, setWish] = useState([]);
  const [Products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setloading(true);
    const product = async () => {
      var allProducts = await axios.get(`${Config.api}/${type}`, {
        headers: { Authorization: localStorage.getItem("accessToken") },
      });
      setProducts(allProducts.data);
    };
    product();
    setTimeout(()=>{
      setloading(false);
    },2000) 
  }, []);

  useEffect(() => {
    let prod = currentUser?.others.wishlist;
    setWish(prod);
  }, [currentUser?.others.wishlist]);

  return (
    <>
      <Navbar />
      {loading ? 
        <div className="container loader">
          <img src={loader} alt="" height={"80px"} />
        </div>
       : 
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="products-filter">
                <div>{filter}</div>
                <select
                  className="products-filterselect"
                  onChange={(e) => {
                    navigate(`/filter/categories/${e.target.value}`);
                  }}
                >
                  <option>--Category--</option>
                  <option>T-Shirts</option>
                  <option>Shirts</option>
                  <option>Chudi</option>
                  <option>Tops</option>
                  <option>Shoes</option>
                  <option>Sports</option>
                  <option>Jeans</option>

                  <option>Kids</option>
                </select>
                <select
                  className="products-filterselect"
                  onChange={(e) => {
                    if (e.target.value == "Price: Low to High") {
                      let sort = Products.sort((a, b) =>
                        a.price > b.price ? 1 : a.price < b.price ? -1 : 0
                      );
                      console.log(sort);
                      setProducts(sort);
                      setFilter("asc");
                    } else if (e.target.value == "Price: high to Low") {
                      let sort = Products.sort((a, b) =>
                        a.price < b.price ? 1 : a.price > b.price ? -1 : 0
                      );
                      console.log(sort);
                      setProducts(sort);
                      setFilter("desc");
                    }
                  }}
                >
                  <option>--Sort--</option>
                  <option>Price: Low to High</option>
                  <option>Price: high to Low</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row products">
            {Products.map((item) => {
              return <Productcard product={item} Wish={Wish} />;
            })}
          </div>
        </div>
      }
      <Footer />
    </>
  );
}

export default Products;
