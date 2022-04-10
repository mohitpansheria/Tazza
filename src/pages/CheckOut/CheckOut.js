import React from "react";
import CreditCard from "../../assets/CreditCard.svg";
import PayPal from "../../assets/PayPal.svg";
import Button from "../../components/Button/Button";
import CartTotal from "../../components/CartTotal/CartTotal";
import FormInput from "../../components/FormInput/FormInput";
import HeroSection from "../../components/Hero/HeroSection";
import TextArea from "../../components/TextArea/TeaxtArea";
import "./CheckOut.scss";

const CheckOut = () => {
  return (
    <>
      <HeroSection>CheckOut</HeroSection>

      <div className="checkOut mt-3 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <div className="order-content">
                <div className="order-details">
                  <h2>Your Order</h2>
                  <p>
                    We all know how hard it can be make sure ead lookis like
                    demo tom make your start intoe the world of easy ase
                    possible have encluded the demom.
                  </p>
                </div>

                <div className="cart-total-section pt-5">
                  <CartTotal></CartTotal>
                </div>

                <div className="payment-method pt-5">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          colSpan="2"
                          className="text-center text-uppercase"
                        >
                          PAYMENT METHOD
                        </th>
                      </tr>
                    </thead>
                    <tbody className="cart-total">
                      <tr>
                        <th className="w-50">
                          <div className="form-check">
                            <input
                              type="radio"
                              className="form-check-input"
                              name="payment"
                              id="credit-card"
                              readOnly
                            />
                            <label
                              htmlFor="credit-card"
                              className="form-check-lable ml-13"
                            >
                              Credit Card
                            </label>
                          </div>
                        </th>
                        <td className="w-50 text-end">
                          <img src={CreditCard} alt="" />
                        </td>
                      </tr>
                      <tr>
                        <th className="w-50">
                          <div className="form-check">
                            <input
                              type="radio"
                              className="form-check-input"
                              name="payment"
                              id="paypal"
                              value
                            />
                            <label
                              htmlFor="paypal"
                              className="form-check-lable ml-13"
                            >
                              Paypal
                            </label>
                          </div>
                        </th>
                        <td className="w-50 text-end">
                          <img src={PayPal} alt="" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 ps-5 pe-3">
              <div className="billing-details">
                <div className="billing-head text-uppercase">
                  <h2>Billing Details</h2>
                  <div className="billing-form">
                    <form action="">
                      <div className="row ">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                          <FormInput
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name*"
                          />
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                          <FormInput
                            type="text"
                            id="nick-name"
                            name="nick-name"
                            placeholder="Nick Name*"
                          />
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                          <FormInput
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Email*"
                          />
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                          <FormInput
                            type="text"
                            id="phone-no"
                            name="phone-no"
                            placeholder="Phone No*"
                          />
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                          <FormInput
                            type="text"
                            id="country"
                            name="country"
                            placeholder="Country"
                          />
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                          <FormInput
                            type="text"
                            id="state-district"
                            name="state-district"
                            placeholder="State/Disctrict"
                          />
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                          <FormInput
                            type="text"
                            id="address"
                            name="address"
                            placeholder="Address"
                          />
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                          <FormInput
                            type="text"
                            id="zip-code"
                            name="zip-code"
                            placeholder="Zip/Postal Code"
                          />
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-3">
                          <TextArea
                            name="message"
                            id="message"
                            placeholder="Note of order"
                            rows="12"
                            // cols="20"
                          ></TextArea>
                        </div>
                        <div className="text-end">
                          <Button round>Submit</Button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
