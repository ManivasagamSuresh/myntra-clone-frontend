import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Signin.css";
import signin from "../../images/login.png";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { Config } from "../../Config";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../redux/Userslice";
import myntra from "../../images/myntra.png";
import secure from "../../images/secure.jpg";
import "../Cart/Cart.css";
import loader from "../../images/preloader1.gif";

function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signing, setSigning] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: async (values) => {
      let error = {};
      if (!values.email) {
        error.email = "Please enter your Email";
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
      return error;
    },
    onSubmit: async (values) => {
      try {
        setSigning(true);
        dispatch(loginStart());
        const user = await axios.post(`${Config.api}/signin`, values);

        if (user.data.message === "success") {
          dispatch(loginSuccess(user.data));
          localStorage.setItem("accessToken", user.data.token);
          console.log(user.data.message);

          setSigning(false);
          navigate("/home");
        }
      } catch (error) {
        console.log(error);
        dispatch(loginFailure());
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
      <div className="container signin">
        <div className="signin-C">
          <img src={signin} alt="" className="signin-img" />
          <h5 className="signin-heading">Login with Email to continue..</h5>
          <form className="signin-form" onSubmit={formik.handleSubmit}>
            <input
              className={`signin-inputs form-control ${
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
              className={`signin-inputs form-control ${
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
            <div className="signin-terms">
              By continuing ,I agree to the{" "}
              <span className="signin-terms1">Terms of Use</span> &{" "}
              <span className="signin-terms1">Privacy Policy</span>
            </div>
            {signing ? (
              <button type="button" className="signin-button">
                Signing In{" "}
                <img
                  src={loader}
                  alt=""
                  height={"25px"}
                  style={{ marginLeft: "10px" }}
                />{" "}
              </button>
            ) : (
              <button type="submit" className="signin-button">
                CONTINUE
              </button>
            )}
          </form>
          <div className="newuserC">
            <div className="newuser">New User ? </div>
            <button
              className="signin-button"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
