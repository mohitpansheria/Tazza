import React, { useState } from "react";
import Icofont from "react-icofont";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import Logo from "../../assets/Logo.svg";
import styles from "./Header.module.scss";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <header>
        <div className={`${styles.header} ${styles.sticky}`}>
          <div className="container">
            <nav
              className={`navbar ${styles.navBg} navbar-expand-lg navbar-light ${styles["navbar-lights"]}`}
            >
              <a className={styles["navbar-brand"]} href="/">
                <img src={Logo} alt="tazza" />
              </a>

              <button
                className={`navbar-toggler ${styles["navbar-toggler-item"]}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => setShow(!show)}
              >
                <span
                  className={`navbar-toggler-icon ${styles["toggle-icon"]}`}
                ></span>
              </button>
              <div
                className={`collapse navbar-collapse ${show ? "show" : ""} `}
              >
                <ul className={`navbar-nav mx-auto ${styles["nav-list"]} `}>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${styles["header-link"]}`}
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <NavHashLink
                      className={`nav-link ${styles["header-link"]}`}
                      to="/#About"
                    >
                      About
                    </NavHashLink>
                  </li>
                  <li className="nav-item">
                    <NavHashLink
                      className={`nav-link ${styles["header-link"]}`}
                      to="/#OurProduct"
                    >
                      Product
                    </NavHashLink>
                  </li>
                  <li className="nav-item">
                    <NavHashLink
                      className={`nav-link ${styles["header-link"]}`}
                      to="/#Testimonial"
                    >
                      Testimonial
                    </NavHashLink>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className={`nav-link ${styles["header-link"]} dropdown-toggle`}
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      to="/"
                    >
                      Pages
                    </Link>
                    <ul
                      className={`dropdown-menu  ${styles["dropdown-menus"]}`}
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link
                          className={`dropdown-item ${styles["dropdown-items"]}`}
                          to="/Product"
                        >
                          Product Details
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`dropdown-item ${styles["dropdown-items"]}`}
                          to="/Blog"
                        >
                          Blog
                        </Link>
                      </li>
                      <li></li>
                      <li>
                        <Link
                          className={`dropdown-item ${styles["dropdown-items"]}`}
                          to="/BlogDetails"
                        >
                          Blog Details
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`dropdown-item ${styles["dropdown-items"]}`}
                          to="/Error"
                        >
                          404 Error
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`dropdown-item ${styles["dropdown-items"]}`}
                          to="/Cart"
                        >
                          Cart Overview
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`dropdown-item ${styles["dropdown-items"]}`}
                          to="/CheckOut"
                        >
                          Checkout
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavHashLink
                      className={`nav-link ${styles["header-link"]}`}
                      to="/#Contact"
                    >
                      Contact
                    </NavHashLink>
                  </li>
                </ul>

                <div className={styles["header-content"]}>
                  <div className={`${styles["contact-details"]} text-end`}>
                    <span className={styles["call-us"]}>Call Us!</span>
                    <span className={styles["contact-no"]}>
                      +00 569 846 348
                    </span>
                  </div>
                  <div className={styles["cart-icon"]}>
                    <Link to="/Cart">
                      <Icofont icon="cart" className={styles["cart__icon"]} />
                      <span className={styles["cart-round"]}> 05 </span>
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
