import React from "react";
import { Link } from "react-router-dom";
// import Leaf from "../../assets/leaf.png";
import Button from "../../components/Button/Button";
import styles from "./HeroSection.module.scss";
const HeroSection = (props) => {
  return (
    <>
      <div className={styles["hero_section"]}>
        {/* <div className={styles["png_img"]}>
          <img className="img-fluid" src={Leaf} alt="" />
        </div> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className={styles["herosection_content"]}>
                <h2 className={styles["hero-title"]}>{props.children}</h2>
                <Button round>
                  <Link to="/HomePage">Back To Home</Link>
                </Button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
