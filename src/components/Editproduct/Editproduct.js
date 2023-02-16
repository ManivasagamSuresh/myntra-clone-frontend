import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Config } from "../../Config";
import "./Editproduct.css";

function Editproduct() {
  const navigate = useNavigate();
  const params = useParams();
  // navigate(`/product/${params.id}`)

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
      try {
        const { _id, ...others } = values;
        console.log(others);
        let product = await axios.put(
          `${Config.api}/updateproduct/${params.id}`,
          others,
          { headers: { Authorization: localStorage.getItem("accessToken") } }
        );

        alert("Product Updated");

        navigate(`/product/${params.id}`);
      } catch (error) {}
    },
  });
  useEffect(() => {
    let data = async () => {
      let form = await axios.get(`${Config.api}/product/${params.id}`, {
        headers: { Authorization: localStorage.getItem("accessToken") },
      });
      formik.setValues(form.data);
    };
    data();
  }, []);
  return (
    <>
      <div className="container editproduct">
        <div className="row editproduct-c">
          <div className="editproduct-remove">
            <div
              className="editproduct-removeX"
              onClick={() => {
                navigate(`/product/${params.id}`);
              }}
            >
              X
            </div>
          </div>
          <div className="col-lg-12">
            <h5>UPDATE YOUR PRODUCT</h5>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <input
              className={`form-control editproduct-inputs ${
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
              className={`form-control editproduct-inputs ${
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
              className={`form-control editproduct-inputs ${
                formik.touched.price && formik.errors.price ? "error-box" : ""
              }
        ${formik.touched.price && !formik.errors.price ? "success-box" : ""}`}
              placeholder="Price"
              name="price"
              onChange={formik.handleChange}
              value={formik.values.price}
              onBlur={formik.handleBlur}
            />
            <input
              className={`form-control editproduct-inputs ${
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
              className="form-control editproduct-inputs"
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
              className="form-control editproduct-inputs"
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
              <button type="submit" className="editproduct-button">
                CONTINUE{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Editproduct;
