import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Config } from "../../Config";
import { changeAddress } from "../redux/Userslice";
import "./Address.css";

function Address({ setOpen }) {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      address: "",
    },
    onSubmit: async (values) => {
      try {
        console.log(values);
        let address = await axios.put(
          `${Config.api}/address/${currentUser.others._id}`,
          values,
          { headers: { Authorization: localStorage.getItem("accessToken") } }
        );
        //alert("Delivery address changed")
        dispatch(changeAddress(values.address));
        setOpen(false);
      } catch (error) {}
    },
  });
  return (
    <div className="container Address-C">
      <div className="addressform">
        <div
          className="address-remove"
          onClick={() => {
            setOpen(false);
          }}
        >
          <span className="address-removeX">X</span>
        </div>
        <h6>Provide the deliver Address</h6>
        <form onSubmit={formik.handleSubmit}>
          <textarea
            rows=""
            cols=""
            className="form-control"
            placeholder="Delivery Address"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
          ></textarea>
          <button type="submit" className="address-button">
            Change Delivery Address
          </button>
        </form>
      </div>
    </div>
  );
}

export default Address;
