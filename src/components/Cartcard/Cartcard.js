import React, { useEffect, useState } from "react";
import "./Cartcard.css";
import ref from "../../images/ref.jpg";
import { GrReturn } from "react-icons/gr";
import { Config } from "../../Config";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  ChangePrice,
  RemovecartR,
  RemoveTotalPrice,
  TotalPrice,
} from "../redux/Userslice";

function Cartcard({ prod }) {
  // console.log(prod);
  const [Product, setProduct] = useState([]);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [Qty, setQty] = useState(1);
  const [total, settotal] = useState();

  useEffect(() => {
    let prods = async () => {
      let data = await axios.get(`${Config.api}/product/${prod}`, {
        headers: { Authorization: localStorage.getItem("accessToken") },
      });
      setProduct(data.data);
      let p = { id: data.data._id, price: data.data.price };
      // console.log(p);
      // settotal(data.data.price)
      // console.log(data);
      dispatch(TotalPrice(p));
    };
    prods();
  }, [prod]);

  useEffect(() => {
    // const Total = Number(Qty)*Number(Product.price);
    // console.log(Total);

    // settotal(Total);
    // console.log(total);
    // console.log({ id: Product._id, price: Product.price * Qty });
    dispatch(ChangePrice({ id: Product._id, price: Product.price * Qty }));
    // console.log(currentUser.others.totalprice);
  }, [Qty]);

  let RemoveCart = async () => {
    try {
      let remove = await axios.put(
        `${Config.api}/cartIdRemove/${currentUser.others._id}`,
        { pId: prod },
        { headers: { Authorization: localStorage.getItem("accessToken") } }
      );
      // console.log(remove.data);
      dispatch(RemovecartR(prod));
      dispatch(RemoveTotalPrice({ id: Product._id, price: Product.price }));
    } catch (error) {
      console.log(error);
    }
  };

  //   let Change=()=>{
  //     dispatch(ChangePrice({id:Product._id,price:total}));
  // }

  return (
    <div className="card mb-3 cart-card" style={{ maxWidth: "100%" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={Product.img} className="img-fluid cart-cardimg" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div
              className="cartcard-remove"
              onClick={() => {
                RemoveCart();
              }}
            >
              X
            </div>
            <h5 className="cartcard-title">{Product.brand}</h5>
            <p className="cartcard-text">{Product.description}</p>
            <div className="cartcard-qty">
              Qty :
              <select
                className="cartcard-qtyvalue"
                value={Qty}
                onChange={(e) => {
                  setQty(e.target.value);
                }}
              >
                <option> 1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <p className="cartcard-price">₹ {Product.price * Qty}</p>
            <div className="cartcard-return">
              <GrReturn /> <span className="cartcard-return1">30 Days</span>{" "}
              Return Available
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cartcard;
