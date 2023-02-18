import React, { useEffect, useState } from "react";
import "./Navbar.css";
import myntra from "../../images/myntra.png";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsHandbag } from "react-icons/bs";
import { AiOutlineFolderAdd } from "react-icons/ai";
import Addproduct from "../addproduct/Addproduct";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/Userslice";

function Navbar() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [cart,setCartlength]=useState(0);
  
  const navigate = useNavigate();
  const [OpenV, setOpenV] = useState(false);
  const [OpenP, setOpenP] = useState(false);
  const [Admin, setAdmin] = useState(false);
  const [Search, setSearch] = useState("");

  const signout = async () => {
    dispatch(logout());
    localStorage.clear("accessToken");
    navigate("/");
  };
  useEffect(() => {
    // console.log(currentUser)
    if (currentUser?.others.admin == 1) {
      setAdmin(true);
    }
    
  }, []);

  useEffect(()=>{
    setCartlength(currentUser.others.cart);
  },[currentUser.others.cart])
  return (
    <>
      {OpenV ? (
        <Addproduct setOpen={setOpenV} />
      ) : (
        <div className="container">
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <img
                src={myntra}
                className="navbar-myntra-image "
                onClick={() => {
                  navigate("/home");
                }}
              />
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      onClick={() => {
                        navigate(`/filter/clothing/Men`);
                      }}
                    >
                      MEN
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      onClick={() => {
                        navigate(`/filter/clothing/Women`);
                      }}
                    >
                      WOMEN
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      onClick={() => {
                        navigate(`/filter/clothing/Kids`);
                      }}
                    >
                      KIDS
                    </a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2 navbar-search-input"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={(e) => {
                      setSearch(e.target.value);
                      // navigate(`/Searchproducts?q=${Search}`)
                    }}
                  />
                  <button
                    className="navbar-search"
                    type="submit"
                    onClick={() => {
                      navigate(`/Searchproducts?q=${Search}`);
                    }}
                  >
                    <BiSearchAlt2 />
                  </button>
                </form>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-icons-ul">
                  <li className="nav-item ">
                    <div className="navbar-icons-li">
                      <BsPerson
                        size={"1.2em"}
                        onClick={() => {
                          OpenP ? setOpenP(false) : setOpenP(true);
                        }}
                      />
                      <div
                        className="navbar-icon-desc"
                        onClick={() => {
                          OpenP ? setOpenP(false) : setOpenP(true);
                        }}
                      >
                        {currentUser ? `${currentUser.others.name}` : "profile"}
                      </div>
                      {OpenP ? (
                        <div className="navbar-profile">
                          {currentUser && (
                            <div
                              onClick={() => {
                                signout();
                              }}
                            >
                              Logout
                            </div>
                          )}
                        </div>
                      ) : null}
                    </div>
                  </li>
                  {Admin ? (
                    <li className="nav-item navbar-icons-li">
                      <AiOutlineFolderAdd
                        size={"1.2em"}
                        onClick={() => {
                          setOpenV(true);
                        }}
                      />
                      <div className="navbar-icon-desc">Add product</div>
                    </li>
                  ) : (
                    <>
                      <li
                        className="nav-item navbar-icons-li"
                        onClick={() => {
                          navigate(`/wishlist/${currentUser.others._id}`);
                        }}
                      >
                        <BsHeart size={"1.1em"} />
                        <div className="navbar-icon-desc">Wishlist</div>
                      </li>
                      <li
                        className="nav-item navbar-icons-li"
                        onClick={() => {
                          navigate("/cart");
                        }}
                      >
                        <BsHandbag size={"1.2em"} />
                        {cart.length == 0?null: <div className="navbar-cartcount">{cart.length}</div>}
                        <div className="navbar-icon-desc">Bag</div>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

export default Navbar;
