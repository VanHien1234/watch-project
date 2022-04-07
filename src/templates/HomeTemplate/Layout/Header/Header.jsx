import React,{useState,useEffect} from "react";
import "./Header.scss";
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import Checkout from "./Checkout";
import Popup from "reactjs-popup";

export default function Header() {

  const [number, setNumber] = useState(0)

  /* const callbackFunction = (childData) => {
    setNumber(childData)
  } */
  let totalQuantity = []
  const { arrCheckout } = useSelector(state => state.CheckoutReducer)

  useEffect(() => {
    arrCheckout?.map((e)=>{
      {totalQuantity.push(e.quantity)}
    })
    let t = totalQuantity.reduce((a, b) => a + b, 0)
    setNumber(t)
  }, arrCheckout.quantity);





  return (
    <>
      <header id="header">
        <nav className="navbar">
          <div className="container-fluid">
            <div>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Tìm kiếm..."
                  aria-label="Search"
                ></input>
                <button
                  className="btn btn-danger btn-sm font_weight_btn"
                  type="submit"
                >
                  <i className="fas fa-search"></i>
                </button>
              </form>
            </div>
            <div>
              <Link to="" className="navbar-brand navbar__logo" href="#">
                WATCH
              </Link>
            </div>
            <div className="sign-in">
              <button
                type="button"
                className="btn btn-danger btn-sm font_weight_btn"
              >
                ĐĂNG NHẬP
              </button>
              <span>|</span>
              <Popup modal trigger={<button
                type="button"
                className="btn btn-danger btn-sm font_weight_btn">
                GIỎ HÀNG/ {number} SẢN PHẨM
              </button>}>
                {close => <Checkout /* parentCallback={callbackFunction}  */close={close} />}
              </Popup>




            </div>
          </div>
        </nav>



        <div className="nav-bg">
          <div className="container">
            <ul className="nav nav-pills nav-fill">
              <li className="nav-item">
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                  >
                    THƯƠNG HIỆU
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        CASIO
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        ORIENT
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        CITIZEN
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        SEIKO
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        SUNRISE
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                  >
                    ĐỒNG HỒ NAM
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        CASIO
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        ORIENT
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        CITIZEN
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        SEIKO
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        SUNRISE
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                  >
                    ĐỒNG HỒ NỮ
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        CASIO
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        ORIENT
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        CITIZEN
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        SEIKO
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        SUNRISE
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <Link to={"/news"}>
                  <button className="btn " type="button" id="dropdownMenuButton1">TIN TỨC</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
