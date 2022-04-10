import React from "react";
import Icofont from "react-icofont";
import BlogDetailsImg from "../../assets/BlogDetailsImg.svg";
import BlogImg from "../../assets/BlogImg.svg";
import CustomerBg from "../../assets/CustomerBg.svg";
import BlogCategory from "../../components/BlogCategory/BlogCategory";
import BlogRecentPost from "../../components/BlogRecentPost/BlogRecentPost";
import BlogTags from "../../components/BlogTags/BlogTags";
import Button from "../../components/Button/Button";
import FormInput from "../../components/FormInput/FormInput";
import HeroSection from "../../components/Hero/HeroSection";
import SearchBar from "../../components/SearchBar/SearchBar";
import TeaxtArea from "../../components/TextArea/TeaxtArea";
import "./BlogDetails.scss";

const BlogDetails = () => {
  return (
    <>
      <HeroSection>Blog Details</HeroSection>

      <div className="blog-section">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
              <div className="row">
                <div className="blog-left-sidebar">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="left-content">
                      <SearchBar></SearchBar>
                    </div>
                  </div>
                  <BlogCategory />
                  <BlogRecentPost />
                  <BlogTags />
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8 col-xl-8">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 mb-5 ">
                  <div className="blog-right">
                    <div className="blog-img">
                      <img className="w-100 img-fluid" src={BlogImg} alt="" />
                    </div>
                    <div className="blog-publish-detail d-flex justify-content-between pt-4">
                      <div className="blog-publish-date">
                        <span>
                          <Icofont icon="ui-calendar blog-date-icon" />
                          20 April 2020
                        </span>
                      </div>

                      <div className="blog-publish-activity">
                        <span>
                          <Icofont icon="ui-love blog-activity-icon" />
                          568
                        </span>
                        <span>
                          <Icofont icon="speech-comments blog-activity-icon" />
                          986
                        </span>
                      </div>
                    </div>
                    <div className="blog-title">
                      <h4>
                        <a href="/#">
                          Strawberries are low-growing herbaceous plants with a
                          fibrous root system and a crown from which arise basal
                          leaves.
                        </a>
                      </h4>
                    </div>

                    <div className="blog-details">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmoed tempor encididunt ut labore et dolorem
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullameco laboris nisi ut aliquip ex ea
                        commod consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur excepteur sint occaecat cupidatat non proident.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmeod tempor encididunt ut labore et dolorem
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullaemco laboris nisi ut aliquip ex ea
                        commod consequat. Duis aute irure dolor in
                        reprehenderit.
                      </p>
                      <div className="blog-highlited-details">
                        <p>
                          Eute irure dolor in reprehenderit in voluptate velit
                          esse cillum dolore fugiat nulla pariatur cepteur sint
                          occaecat cudatat non proident sunt ulpa officia
                          deserunt mollit anim id esrum.
                        </p>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmoed tempor encididunt ut labore et dolorem
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullameco laboris nisi ut aliquip ex ea
                        commod consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur excepteur sint occaecat cupidatat non proident.
                      </p>

                      <strong>
                        Strawberries are low-growing herbaceous plants with a
                        fibrous root system and a crown from which arise basal
                        leaves.
                      </strong>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmoed tempor encididunt ut labore et dolorem
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullameco laboris nisi ut aliquip ex ea
                        commod consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur excepteur sint occaecat cupidatat non proident.
                      </p>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmeod tempor encididunt ut labore et dolorem
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullaemco laboris nisi ut aliquip ex ea
                        commod consequat. Duis aute irure dolor in
                        reprehenderit.
                      </p>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmoed tempor encididunt ut labore et dolorem
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullameco laboris nisi ut aliquip ex ea
                        commod consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur excepteur sint occaecat cupidatat non proident.
                      </p>

                      <div className="blog-details-img mt-3 mb-3">
                        <div className="row">
                          <div className="col-xs-4 col-sm-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                            <img src={BlogDetailsImg} alt="" />
                          </div>
                          <div className="col-xs-4 col-sm-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                            <img src={BlogDetailsImg} alt="" />
                          </div>
                          <div className="col-xs-4 col-sm-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                            <img src={BlogDetailsImg} alt="" />
                          </div>
                        </div>
                      </div>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmeod tempor encididunt ut labore et dolorem
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullaemco laboris nisi ut aliquip ex ea
                        commod consequat. Duis aute irure dolor in
                        reprehenderit.
                      </p>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmoed tempor encididunt ut labore et dolorem
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullameco laboris nisi ut aliquip ex ea
                        commod consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur excepteur sint occaecat cupidatat non proident.
                      </p>

                      <div className="tags">
                        <div className="row align-items-center">
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 text-left ">
                            <span>Tags:</span>
                            <span>
                              <a href="/#">Organic,</a>
                            </span>
                            <span>
                              <a href="/#">Farmers,</a>
                            </span>
                            <span>
                              <a href="/#">Food</a>
                            </span>
                          </div>

                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 text-end ">
                            <ul className="list-unstyled d-flex social-icons ">
                              <li className="icon-list">
                                <a href="#/" className="icon-round">
                                  <Icofont icon="skype" />
                                </a>
                              </li>
                              <li className="icon-list">
                                <a href="#/" className="icon-round">
                                  <Icofont icon="twitter" />
                                </a>
                              </li>
                              <li className="icon-list">
                                <a href="#/" className="icon-round">
                                  <Icofont icon="facebook" />
                                </a>
                              </li>
                              <li className="icon-list">
                                <a href="#/" className="icon-round">
                                  <Icofont icon="instagram" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="blog-comments mt-4">
                        <strong>Comments</strong>
                        <hr />

                        <div className="customer-comments d-flex mt-3">
                          <div className="customer-image mt-2">
                            <img
                              src={CustomerBg}
                              className="w-100 img-fluid"
                              alt=""
                            />
                          </div>

                          <div className="customer-info ms-3">
                            <strong>Jennifer Lofez</strong> <br />
                            <span>25 April, 2020</span>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed doem eiusmoed tempor encidi dunt ut
                              labore et dolorem magna aliqua. Ut enim ad minim
                              veniam, quis nostru exercitation
                            </p>
                          </div>

                          <div className="reply">
                            <Icofont icon="reply pe-2" />
                            {"Reply "}
                          </div>
                        </div>

                        <div className="customer-comments d-flex mt-3">
                          <div className="customer-image mt-2">
                            <img
                              src={CustomerBg}
                              className="w-100 img-fluid"
                              alt=""
                            />
                          </div>

                          <div className="customer-info ms-3">
                            <strong>Jennifer Lofez</strong> <br />
                            <span>25 April, 2020</span>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed doem eiusmoed tempor encidi dunt ut
                              labore et dolorem magna aliqua. Ut enim ad minim
                              veniam, quis nostru exercitation
                            </p>
                          </div>

                          <div className="reply ">
                            <Icofont icon="reply pe-2" />
                            {"Reply "}
                          </div>
                        </div>
                      </div>

                      <div className="blog-form mt-5 p-5">
                        <strong>Leave A Comments Here </strong>
                        <form action="">
                          <div className="row ">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                              <FormInput
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                              />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                              <FormInput
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Email"
                              />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                              <FormInput
                                type="text"
                                id="phone"
                                name="phone"
                                placeholder="Phone"
                              />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                              <FormInput
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Subject"
                              />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-3">
                              <TeaxtArea
                                name="message"
                                id="message"
                                placeholder="Message"
                                rows="4"
                                // cols="20"
                              ></TeaxtArea>
                            </div>
                            <div>
                              <Button round>Submit Comment</Button>
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
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
