import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Signup.css";
import signin from "../../images/login.png";
import { useFormik } from "formik";
import axios from "axios";
import { Config } from "../../Config";
import { useNavigate } from "react-router-dom";
import myntra from "../../images/myntra.png";
import secure from "../../images/secure.jpg";
import "../Cart/Cart.css";

function Signup() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
      address: "",
      phone: "",
    },
    validate: async (values) => {
      let error = {};
      if (!values.name) {
        error.name = "Name can't be empty";
      }
      if (!values.email) {
        error.email = "Email can't be empty";
      }
      if (
        values.email &&
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          values.email
        )
      ) {
        error.email = "please enter a valid Email";
      }
      if (!values.password) {
        error.password = "Please enter the password";
      }
      if (!values.confirmpassword) {
        error.confirmpassword = "Please confirm your password";
      }
      if (values.password != values.confirmpassword) {
        error.confirmpassword = "password and confirm password are incorrect";
      }
      if (!values.address) {
        error.address = "Please enter the Address";
      }
      if (!values.phone) {
        error.phone = "please enter your Phone.No";
      }
      return error;
    },
    onSubmit: async (values) => {
      try {
        let user = await axios.post(`${Config.api}/signup`, values);
        navigate("/signin");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 cart-nav">
            <img src={myntra} className="cart-myntra" />
            <img src={secure} className="cart-secure" />
          </div>
        </div>
      </div>
      <div className="container signup">
        <div className="signup-C">
          <img src={signin} alt="" className="signup-img" />
          <h5 className="signup-heading">Signup </h5>
          <form className="signup-form" onSubmit={formik.handleSubmit}>
            <input
              className={`signup-inputs form-control ${
                formik.touched.name && formik.errors.name ? "error-box" : ""
              }
        ${formik.touched.name && !formik.errors.name ? "success-box" : ""}
        `}
              placeholder="User Name"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
            />
            <br />
            {formik.touched.name && formik.errors.name ? (
              <span className="error-span">{formik.errors.name}</span>
            ) : null}
            <input
              className={`signup-inputs form-control ${
                formik.touched.email && formik.errors.email ? "error-box" : ""
              }
        ${formik.touched.email && !formik.errors.email ? "success-box" : ""}`}
              placeholder="Email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            <br />
            {formik.touched.email && formik.errors.email ? (
              <span className="error-span">{formik.errors.email}</span>
            ) : null}
            <input
              className={`signup-inputs form-control ${
                formik.touched.password && formik.errors.password
                  ? "error-box"
                  : ""
              }
        ${
          formik.touched.password && !formik.errors.password
            ? "success-box"
            : ""
        }`}
              placeholder="Password"
              type={"password"}
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
            />
            <br />
            {formik.touched.password && formik.errors.password ? (
              <span className="error-span">{formik.errors.password}</span>
            ) : null}
            <input
              className={`signup-inputs form-control ${
                formik.touched.confirmpassword && formik.errors.confirmpassword
                  ? "error-box"
                  : ""
              }
        ${
          formik.touched.confirmpassword && !formik.errors.confirmpassword
            ? "success-box"
            : ""
        }`}
              placeholder="Confirm Password"
              type={"password"}
              name="confirmpassword"
              onChange={formik.handleChange}
              value={formik.values.confirmpassword}
              onBlur={formik.handleBlur}
            />
            <br />
            {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
              <span className="error-span">
                {formik.errors.confirmpassword}
              </span>
            ) : null}
            <textarea
              className={`signup-inputs form-control ${
                formik.touched.address && formik.errors.address
                  ? "error-box"
                  : ""
              }
        ${
          formik.touched.address && !formik.errors.address ? "success-box" : ""
        }`}
              placeholder="Address"
              name="address"
              onChange={formik.handleChange}
              value={formik.values.address}
              onBlur={formik.handleBlur}
            ></textarea>
            <br />
            {formik.touched.address && formik.errors.address ? (
              <span className="error-span">{formik.errors.address}</span>
            ) : null}
            <input
              className={`signup-inputs form-control ${
                formik.touched.phone && formik.errors.phone ? "error-box" : ""
              }
        ${formik.touched.phone && !formik.errors.phone ? "success-box" : ""}`}
              placeholder="Phone.No"
              type="number"
              name="phone"
              onChange={formik.handleChange}
              value={formik.values.phone}
              onBlur={formik.handleBlur}
            />{" "}
            <br />
            {formik.touched.phone && formik.errors.phone ? (
              <span className="error-span">{formik.errors.phone}</span>
            ) : null}
            <div className="signup-terms">
              By continuing ,I agree to the
              <span className="signup-terms1">Terms of Use</span> &
              <span className="signup-terms1">Privacy Policy</span>
            </div>
            <button type="submit" className="signup-button">
              CONTINUE
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
