import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Config } from "../../Config";
import "./Addproduct.css";

function Addproduct({ setOpen }) {
  const formik = useFormik({
    initialValues: {
      brand: "",
      description: "",
      price: "",
      img: "",
      category: "",
      clothing: "",
    },
    validate: async (values) => {
      let error = {};
      if (!values.brand) {
        error.brand = "please fill the box";
      }
      if (!values.description) {
        error.description = "please fill the box";
      }
      if (!values.price) {
        error.price = "please fill the box";
      }
      if (!values.img) {
        error.img = "please fill the box";
      }

      return error;
    },

    onSubmit: async (values) => {
      console.log(values);
      let product = await axios.post(`${Config.api}/addproduct`, values, {
        headers: { Authorization: localStorage.getItem("accessToken") },
      });
      if (product.data == "added") {
        alert("Product Added");
        setOpen(false);
        formik.resetForm();
      }
    },
  });
  return (
    <>
      <div className="container addproduct">
        <div className="row addproduct-c">
          <div className="addproduct-remove">
            <div
              className="addproduct-removeX"
              onClick={() => {
                setOpen(false);
              }}
            >
              X
            </div>
          </div>
          <div className="col-lg-12">
            <h5>ADD YOUR PRODUCT</h5>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <input
              className={`form-control addproduct-inputs ${
                formik.touched.brand && formik.errors.brand ? "error-box" : ""
              }
        ${formik.touched.brand && !formik.errors.brand ? "success-box" : ""}`}
              placeholder="Brand"
              name="brand"
              onChange={formik.handleChange}
              value={formik.values.brand}
              onBlur={formik.handleBlur}
            />

            <input
              className={`form-control addproduct-inputs ${
                formik.touched.description && formik.errors.description
                  ? "error-box"
                  : ""
              }
        ${
          formik.touched.description && !formik.errors.description
            ? "success-box"
            : ""
        }`}
              placeholder="Description"
              name="description"
              onChange={formik.handleChange}
              value={formik.values.description}
              onBlur={formik.handleBlur}
            />
            <input
              className={`form-control addproduct-inputs ${
                formik.touched.price && formik.errors.price ? "error-box" : ""
              }
        ${formik.touched.price && !formik.errors.price ? "success-box" : ""}`}
              placeholder="Price"
              name="price"
              type={"number"}
              onChange={formik.handleChange}
              value={formik.values.price}
              onBlur={formik.handleBlur}
            />
            <input
              className={`form-control addproduct-inputs ${
                formik.touched.img && formik.errors.img ? "error-box" : ""
              }
        ${formik.touched.img && !formik.errors.img ? "success-box" : ""}`}
              placeholder="image link"
              name="img"
              onChange={formik.handleChange}
              value={formik.values.img}
              onBlur={formik.handleBlur}
            />

            <select
              className="form-control addproduct-inputs"
              name="category"
              onChange={formik.handleChange}
              value={formik.values.category}
              onBlur={formik.handleBlur}
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
              className="form-control addproduct-inputs"
              name="clothing"
              onChange={formik.handleChange}
              value={formik.values.clothing}
              onBlur={formik.handleBlur}
            >
              <option>--Clothing for--</option>
              <option>Men</option>
              <option>Women</option>
              <option>Kids</option>
            </select>

            <div className="col-lg-12 ">
              <button type="submit" className="addproduct-button">
                CONTINUE{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Addproduct;
