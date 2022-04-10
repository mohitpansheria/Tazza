import React from "react";
import Icofont from "react-icofont";
import Apple from "../../assets/Apple.jpg";
import Carrot from "../../assets/Carrot.jpg";
import Dragon from "../../assets/Dragon.jpg";
import CartTotal from "../../components/CartTotal/CartTotal";
import HeroSection from "../../components/Hero/HeroSection";
import "./Cart.scss";
const Cart = () => {
  return (
    <>
      <HeroSection>Cart Overview</HeroSection>

      <div className="cart-overview mt-3">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 table-responsive">
              <table className="table">
                <thead>
                  <tr className="cart-overview-title">
                    <th>Images</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="align-middle">
                      <div className="product-img">
                        <img className="img-fluid" src={Apple} alt="" />
                      </div>
                    </th>
                    <td className="align-middle">
                      <b>Apple</b>
                    </td>
                    <td className="align-middle">$590</td>
                    <td className="align-middle">
                      <div className="cart-items d-flex">
                        <div className="add-cart-box">
                          <Icofont icon="minus add-cart-icon icon-minus" />
                          <span className="cart-qty">1</span>
                          <Icofont icon="plus add-cart-icon icon-plus" />
                        </div>
                      </div>
                    </td>
                    <td className="align-middle">$5680 </td>
                    <td className="align-middle">
                      <Icofont icon="close text-danger remove-item" />
                    </td>
                  </tr>

                  <tr>
                    <th scope="row" className="align-middle">
                      <div className="product-img">
                        <img className="img-fluid" src={Carrot} alt="" />
                      </div>
                    </th>
                    <td className="align-middle">
                      <b>Carrot</b>
                    </td>
                    <td className="align-middle">$590</td>
                    <td className="align-middle">
                      <div className="cart-items d-flex">
                        <div className="add-cart-box">
                          <Icofont icon="minus add-cart-icon icon-minus" />
                          <span className="cart-qty">1</span>
                          <Icofont icon="plus add-cart-icon icon-plus" />
                        </div>
                      </div>
                    </td>
                    <td className="align-middle">$5680 </td>
                    <td className="align-middle">
                      <Icofont icon="close text-danger remove-item" />
                    </td>
                  </tr>

                  <tr>
                    <th scope="row" className="align-middle">
                      <div className="product-img">
                        <img className="img-fluid" src={Dragon} alt="" />
                      </div>
                    </th>
                    <td className="align-middle">
                      <b>Dragon</b>
                    </td>
                    <td className="align-middle">$590</td>
                    <td className="align-middle">
                      <div className="cart-items d-flex">
                        <div className="add-cart-box">
                          <Icofont icon="minus add-cart-icon icon-minus " />
                          <span className="cart-qty">1</span>
                          <Icofont icon="plus add-cart-icon icon-plus " />
                        </div>
                      </div>
                    </td>
                    <td className="align-middle">$5680 </td>
                    <td className="align-middle">
                      <Icofont icon="close text-danger remove-item" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="coupon-section mt-5">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 mb-5">
              <div className="coupon-section">
                <form action="">
                  <div className="coupon-area position-relative">
                    <input
                      type="text"
                      className="form-control coupon-button pe-5"
                      // value
                      placeholder="Coupon Code"
                      id="coupon-code"
                      name="coupon-code"
                    />
                    <div className="coupon-btn">
                      <a href="/#" className=" rounded">
                        Apply Coupon
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3">
              <CartTotal></CartTotal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
