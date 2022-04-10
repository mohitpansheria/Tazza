import React from "react";
import Icofont from "react-icofont";
import BlogImg from "../../assets/BlogImg.svg";
import BlogCategory from "../../components/BlogCategory/BlogCategory";
import BlogRecentPost from "../../components/BlogRecentPost/BlogRecentPost";
import BlogTags from "../../components/BlogTags/BlogTags";
import HeroSection from "../../components/Hero/HeroSection";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Blog.scss";
const Blog = () => {
  return (
    <>
      <HeroSection>Blog Page</HeroSection>

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
                      <a className="pt-2" href="/#">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>

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
                      <a className="pt-2" href="/#">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>

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
                      <a className="pt-2" href="/#">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row text-center">
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <div className="page-number">
                    <ul>
                      <li className="list-group-num">
                        <a className="number" href="/#">
                          1
                        </a>
                      </li>
                      <li className="list-group-num">
                        <a className="number" href="/#">
                          2
                        </a>
                      </li>
                      <li className="list-group-num">
                        <a className="number" href="/#">
                          3
                        </a>
                      </li>
                      <li className="list-group-num">
                        <a className="number" href="/#">
                          <Icofont icon="arrow-right" />
                        </a>
                      </li>
                    </ul>
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

export default Blog;
