import React from "react";
import Icofont from "react-icofont";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Apple from "../../assets/Apple.jpg";
import Carrot from "../../assets/Carrot.jpg";
import Dragon from "../../assets/Dragon.jpg";
import Fruit from "../../assets/Fruit2.jpg";
import Masrom from "../../assets/Masrom.jpg";
import MuskMelon from "../../assets/MuskMelon.jpg";
import Onion from "../../assets/Onion.jpg";
import Orange from "../../assets/orange.jpg";
import Tomatoes from "../../assets/Tomatoes.jpg";
import Button from "../../components/Button/Button";
import HeroSection from "../../components/Hero/HeroSection";
import "./Product.scss";

const Product = () => {
  var relatedProduct = {
    dots: false,
    autoplay: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <>
      <HeroSection>Product Details</HeroSection>

      <div className="single-product mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-xs-12 col-lg-6 col-sm-12 ">
              <div className="product-content-img d-flex">
                <div className="product-img-small">
                  <img
                    className="w-100 rounded border border-1"
                    src={Apple}
                    alt=""
                  />
                  <img
                    className="w-100 rounded border border-1"
                    src={MuskMelon}
                    alt=""
                  />
                  <img
                    className="w-100 rounded border border-1"
                    src={Dragon}
                    alt=""
                  />
                </div>
                <div className="product-img-main">
                  <img
                    className="w-100 img-fluid rounded border border-1"
                    src={Fruit}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="col-md-12 col-xs-12 col-lg-6 col-sm-12">
              <div className="product-content-details">
                <h3 className="pb-3">Strawberries: Health Benefits</h3>
                <div className="product-review mb-3">
                  <span className="">
                    <Icofont icon="star product-star" />
                    <Icofont icon="star product-star" />
                    <Icofont icon="star product-star" />
                    <Icofont icon="star product-star" />
                    <Icofont icon="star product-star" />
                  </span>
                  <span className="ms-4 product-star-customer">
                    (3 Customers Review)
                  </span>
                </div>
                <span className="product-price  me-3">$60:00</span>
                <span className="product-price actual-price  ">$70:00</span>
                <p className="mt-3 mb-3">
                  It is a long established fact that a reader will be distracted
                  the readable content off a page when looking at its layout
                  fact that a reader will bee distracted the readable content.
                </p>
                <div className="product-add-cart d-flex ">
                  <div className="add-cart-box">
                    <Icofont icon="minus add-cart-icon icon-minus" />
                    <span className="cart-qty">1</span>
                    <Icofont icon="plus add-cart-icon icon-plus" />
                  </div>
                  <span className="ms-5">
                    <Button>
                      <Link to="/Cart">Add to Cart</Link>
                    </Button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-summary">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-xs-12 col-lg-12 col-sm-12 ">
              <div>
                <nav className="product-summary-list mb-3">
                  <div className="nav nav-tabs " id="nav-tab" role="tablist">
                    <button
                      className="nav-link nv-link active "
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      DESCRIPTION
                    </button>
                    <button
                      className="nav-link nv-link"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      INFORMATION
                    </button>
                    <button
                      className="nav-link nv-link"
                      id="nav-contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-contact"
                      type="button"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                    >
                      REVIEW
                    </button>
                  </div>
                </nav>
                <div
                  className="tab-content tab-description"
                  id="nav-tabContent"
                >
                  <div
                    className="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <p>
                      Fresh strawberries are very high in water, so their total
                      carb content is very low fewer than 8 grams of carbs per
                      3.5 ounces (100 grams). The net digestible carb content is
                      fewer than 6 grams in the same serving size. Most of these
                      berries’ carbs come from simple sugars such as glucose,
                      fructose, and sucrose but they contan a decent amount of
                      fiber. Strawberries have a glycemic index (GI) score of
                      40, which is relatively low (4). This means that
                      strawberries should not lead to big spikes in blood sugar
                      levels and are considered safe for people with diabetes.
                    </p>
                    <p>
                      {" "}
                      Fresh strawberries are very high in water, so their total
                      carb content is very low fewer than 8 grams of carbs per
                      3.5 ounces (100 grams). The net digestible carb content is
                      fewer than 6 grams in the same serving size. Most of these
                      berries’ carbs come from simple sugars such as glucose,
                      fructose, and sucrose but they contan a decent amount of
                      fiber. Strawberries have a glycemic index (GI) score of
                      40, which is relatively low (4). This means that
                      strawberries should not lead to big spikes in blood sugar
                      levels and are considered safe for people with diabetes.
                    </p>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    <p>
                      Fresh strawberries are very high in water, so their total
                      carb content is very low fewer than 8 grams of carbs per
                      3.5 ounces (100 grams). The net digestible carb content is
                      fewer than 6 grams in the same serving size. Most of these
                      berries’ carbs come from simple sugars such as glucose,
                      fructose, and sucrose but they contan a decent amount of
                      fiber. Strawberries have a glycemic index (GI) score of
                      40, which is relatively low (4). This means that
                      strawberries should not lead to big spikes in blood sugar
                      levels and are considered safe for people with diabetes.
                    </p>
                    <p>
                      {" "}
                      Fresh strawberries are very high in water, so their total
                      carb content is very low fewer than 8 grams of carbs per
                      3.5 ounces (100 grams). The net digestible carb content is
                      fewer than 6 grams in the same serving size. Most of these
                      berries’ carbs come from simple sugars such as glucose,
                      fructose, and sucrose but they contan a decent amount of
                      fiber. Strawberries have a glycemic index (GI) score of
                      40, which is relatively low (4). This means that
                      strawberries should not lead to big spikes in blood sugar
                      levels and are considered safe for people with diabetes.
                    </p>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-contact"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab"
                  >
                    <p>
                      Fresh strawberries are very high in water, so their total
                      carb content is very low fewer than 8 grams of carbs per
                      3.5 ounces (100 grams). The net digestible carb content is
                      fewer than 6 grams in the same serving size. Most of these
                      berries’ carbs come from simple sugars such as glucose,
                      fructose, and sucrose but they contan a decent amount of
                      fiber. Strawberries have a glycemic index (GI) score of
                      40, which is relatively low (4). This means that
                      strawberries should not lead to big spikes in blood sugar
                      levels and are considered safe for people with diabetes.
                    </p>
                    <p>
                      {" "}
                      Fresh strawberries are very high in water, so their total
                      carb content is very low fewer than 8 grams of carbs per
                      3.5 ounces (100 grams). The net digestible carb content is
                      fewer than 6 grams in the same serving size. Most of these
                      berries’ carbs come from simple sugars such as glucose,
                      fructose, and sucrose but they contan a decent amount of
                      fiber. Strawberries have a glycemic index (GI) score of
                      40, which is relatively low (4). This means that
                      strawberries should not lead to big spikes in blood sugar
                      levels and are considered safe for people with diabetes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="related-product mb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-left">
              <h3 className="section-title">Related Product</h3>
            </div>
          </div>
          <div className="row mt-5 product-slider position-relative">
            <button className="slick-prev" aria-label="Previous" type="button">
              Previous
            </button>
            <Slider {...relatedProduct}>
              <div
                className="col-xs-12 col-md-12 col-lg-12 col-xl-12 mb-2 position-relative ps-1 pe-1"
                style={{ width: "100%", display: "inline-block" }}
              >
                <div className="product">
                  <div className="product-img">
                    <img className="w-100 " src={Apple} alt="" />
                  </div>
                  <div className="product-bottom">
                    <div className="product-details position-absolute">
                      <h3 className="product-name">Apple</h3>
                      <span className="product-discount-price">$80 KG</span>
                      <span className="product-current-price">$78 KG</span>
                    </div>
                    <div className="product-button">
                      <span className="sold-out position-absolute">
                        Sold Out
                      </span>
                      <span className="add-cart position-absolute">
                        <Button>
                          <Link to="/Cart">Add to Cart</Link>
                        </Button>
                      </span>
                    </div>
                    <div className="product-hover-icons position-absolute">
                      <div className="icon-bg">
                        <Link to="/Product">
                          <Icofont icon="eye main-icon" />
                        </Link>
                      </div>
                      <div className="icon-bg">
                        <Link to="/#">
                          <Icofont icon="heart main-icon" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-xs-12 col-md-12 col-lg-12 col-xl-12 mb-2 position-relative ps-1 pe-1"
                style={{ width: "100%", display: "inline-block" }}
              >
                <div className="product">
                  <div className="product-img">
                    <img className="w-100 " src={Orange} alt="" />
                  </div>
                  <div className="product-bottom">
                    <div className="product-details position-absolute">
                      <h3 className="product-name">Orange</h3>
                      <span className="product-discount-price">$80 KG</span>
                      <span className="product-current-price">$78 KG</span>
                    </div>
                    <div className="product-button">
                      <span className="sold-out position-absolute">
                        Sold Out
                      </span>
                      <span className="add-cart position-absolute">
                        <Button>
                          <Link to="/Cart">Add to Cart</Link>
                        </Button>
                      </span>
                    </div>
                    <div className="product-hover-icons position-absolute">
                      <div className="icon-bg">
                        <Link to="/Product">
                          <Icofont icon="eye main-icon" />
                        </Link>
                      </div>
                      <div className="icon-bg">
                        <Link to="/#">
                          <Icofont icon="heart main-icon" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-xs-12 col-md-12 col-lg-12 col-xl-12 mb-2 position-relative ps-1 pe-1"
                style={{ width: "100%", display: "inline-block" }}
              >
                <div className="product">
                  <div className="product-img">
                    <img className="w-100 " src={Dragon} alt="" />
                  </div>
                  <div className="product-bottom">
                    <div className="product-details position-absolute">
                      <h3 className="product-name">Dragon</h3>
                      <span className="product-discount-price">$80 KG</span>
                      <span className="product-current-price">$78 KG</span>
                    </div>
                    <div className="product-button">
                      <span className="sold-out position-absolute">
                        Sold Out
                      </span>
                      <span className="add-cart position-absolute">
                        <Button>
                          <Link to="/Cart">Add to Cart</Link>
                        </Button>
                      </span>
                    </div>
                    <div className="product-hover-icons position-absolute">
                      <div className="icon-bg">
                        <Link to="/Product">
                          <Icofont icon="eye main-icon" />
                        </Link>
                      </div>
                      <div className="icon-bg">
                        <Link to="/#">
                          <Icofont icon="heart main-icon" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-xs-12 col-md-12 col-lg-12 col-xl-12 mb-2 position-relative ps-1 pe-1"
                style={{ width: "100%", display: "inline-block" }}
              >
                <div className="product">
                  <div className="product-img">
                    <img className="w-100 " src={MuskMelon} alt="" />
                  </div>
                  <div className="product-bottom">
                    <div className="product-details position-absolute">
                      <h3 className="product-name">Musk Melon</h3>
                      <span className="product-discount-price">$80 KG</span>
                      <span className="product-current-price">$78 KG</span>
                    </div>
                    <div className="product-button">
                      <span className="sold-out position-absolute">
                        Sold Out
                      </span>
                      <span className="add-cart position-absolute">
                        <Button>
                          <Link to="/Cart">Add to Cart</Link>
                        </Button>
                      </span>
                    </div>
                    <div className="product-hover-icons position-absolute">
                      <div className="icon-bg">
                        <Link to="/Product">
                          <Icofont icon="eye main-icon" />
                        </Link>
                      </div>
                      <div className="icon-bg">
                        <Link to="/#">
                          <Icofont icon="heart main-icon" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-xs-12 col-md-12 col-lg-12 col-xl-12 mb-2 position-relative ps-1 pe-1"
                style={{ width: "100%", display: "inline-block" }}
              >
                <div className="product">
                  <div className="product-img">
                    <img className="w-100 " src={Onion} alt="" />
                  </div>
                  <div className="product-bottom">
                    <div className="product-details position-absolute">
                      <h3 className="product-name">Onion</h3>
                      <span className="product-discount-price">$80 KG</span>
                      <span className="product-current-price">$78 KG</span>
                    </div>
                    <div className="product-button">
                      <span className="sold-out position-absolute">
                        Sold Out
                      </span>
                      <span className="add-cart position-absolute">
                        <Button>
                          <Link to="/Cart">Add to Cart</Link>
                        </Button>
                      </span>
                    </div>
                    <div className="product-hover-icons position-absolute">
                      <div className="icon-bg">
                        <Link to="/Product">
                          <Icofont icon="eye main-icon" />
                        </Link>
                      </div>
                      <div className="icon-bg">
                        <Link to="/#">
                          <Icofont icon="heart main-icon" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-xs-12 col-md-12 col-lg-12 col-xl-12 mb-2 position-relative ps-1 pe-1"
                style={{ width: "100%", display: "inline-block" }}
              >
                <div className="product">
                  <div className="product-img">
                    <img className="w-100 " src={Masrom} alt="" />
                  </div>
                  <div className="product-bottom">
                    <div className="product-details position-absolute">
                      <h3 className="product-name">Masrom</h3>
                      <span className="product-discount-price">$80 KG</span>
                      <span className="product-current-price">$78 KG</span>
                    </div>
                    <div className="product-button">
                      <span className="sold-out position-absolute">
                        Sold Out
                      </span>
                      <span className="add-cart position-absolute">
                        <Button>
                          <Link to="/Cart">Add to Cart</Link>
                        </Button>
                      </span>
                    </div>
                    <div className="product-hover-icons position-absolute">
                      <div className="icon-bg">
                        <Link to="/Product">
                          <Icofont icon="eye main-icon" />
                        </Link>
                      </div>
                      <div className="icon-bg">
                        <Link to="/#">
                          <Icofont icon="heart main-icon" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-xs-12 col-md-12 col-lg-12 col-xl-12 mb-2 position-relative ps-1 pe-1"
                style={{ width: "100%", display: "inline-block" }}
              >
                <div className="product">
                  <div className="product-img">
                    <img className="w-100 " src={Carrot} alt="" />
                  </div>
                  <div className="product-bottom">
                    <div className="product-details position-absolute">
                      <h3 className="product-name">Carrot</h3>
                      <span className="product-discount-price">$80 KG</span>
                      <span className="product-current-price">$78 KG</span>
                    </div>
                    <div className="product-button">
                      <span className="sold-out position-absolute">
                        Sold Out
                      </span>
                      <span className="add-cart position-absolute">
                        <Button>
                          <Link to="/Cart">Add to Cart</Link>
                        </Button>
                      </span>
                    </div>
                    <div className="product-hover-icons position-absolute">
                      <div className="icon-bg">
                        <Link to="/Product">
                          <Icofont icon="eye main-icon" />
                        </Link>
                      </div>
                      <div className="icon-bg">
                        <Link to="/#">
                          <Icofont icon="heart main-icon" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-xs-12 col-md-12 col-lg-12 col-xl-12 mb-2 position-relative ps-1 pe-1"
                style={{ width: "100%", display: "inline-block" }}
              >
                <div className="product">
                  <div className="product-img">
                    <img className="w-100 " src={Tomatoes} alt="" />
                  </div>
                  <div className="product-bottom">
                    <div className="product-details position-absolute">
                      <h3 className="product-name">Tomatoes</h3>
                      <span className="product-discount-price">$80 KG</span>
                      <span className="product-current-price">$78 KG</span>
                    </div>
                    <div className="product-button">
                      <span className="sold-out position-absolute">
                        Sold Out
                      </span>
                      <span className="add-cart position-absolute">
                        <Button>
                          <Link to="/Cart">Add to Cart</Link>
                        </Button>
                      </span>
                    </div>
                    <div className="product-hover-icons position-absolute">
                      <div className="icon-bg">
                        <Link to="/Product">
                          <Icofont icon="eye main-icon" />
                        </Link>
                      </div>
                      <div className="icon-bg">
                        <Link to="/#">
                          <Icofont icon="heart main-icon" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
            <button className="slick-next" aria-label="Next" type="button">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
