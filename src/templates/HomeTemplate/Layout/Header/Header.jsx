import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header id="header">
        <nav className="navbar">
          <div className="container">
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
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>
            <div>
              <a className="navbar-brand navbar__logo" href="#">
                WATCH
              </a>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-danger btn-sm font_weight_btn"
              >
                ĐĂNG NHẬP
              </button>
              <span>|</span>
              <button
                type="button"
                className="btn btn-danger btn-sm font_weight_btn"
              >
                GIỎ HÀNG/0 SẢN PHẨM
              </button>
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
                <div className="dropdown">
                  <Link to={"/news"}>
                    <button
                      className="btn "
                      type="button"
                      id="dropdownMenuButton1"
                    >
                      TIN TỨC
                    </button>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
