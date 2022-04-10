import React from "react";
import ErrorImg from "../../assets/error.png";
import Button from "../../components/Button/Button";
import HeroSection from "../../components/Hero/HeroSection";
import "./Error.scss";

const Error = () => {
  return (
    <>
      <HeroSection>404_Error</HeroSection>

      <div className="error">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="error-message">
                <h4 className="pb-2">Opps......This page is not found.</h4>
                <p className="pb-2">
                  Botanically, the strawberry fruit is considered an “accessory
                  fruit” and is not a true berry. The flesh consists of the
                  greatly nlarged flower receptacle.
                </p>
                <Button
                  position="left"
                  iconName="rounded-double-left"
                  className="rounded"
                >
                  Back To Home
                </Button>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="error-img">
                <img className="w-100 img-fluid" src={ErrorImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
