import React from 'react';
import Icofont from 'react-icofont';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Apple from '../../assets/Apple.jpg';
import Carrot from '../../assets/Carrot.jpg';
import Dragon from '../../assets/Dragon.jpg';
import Masrom from '../../assets/Masrom.jpg';
import MuskMelon from '../../assets/MuskMelon.jpg';
import News1 from '../../assets/news1.jpg';
import News2 from '../../assets/news2.jpg';
import News3 from '../../assets/news3.jpg';
import Onion from '../../assets/Onion.jpg';
import Orange from '../../assets/orange.jpg';
import Partner from '../../assets/partner.png';
import TestimonialRight from '../../assets/testimonial-1.png';
import Tomatoes from '../../assets/Tomatoes.jpg';
import Button from '../../components/Button/Button';
import './HomePage.scss';
import './Mq.scss';

const HomePage = () => {
  var heroSection = {
    dots: true,
    autoplay: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  var test = {
    dots: false,
    autoplay: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  var features = {
    dots: true,
    autoplay: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1420,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  var partner = {
    dots: false,
    autoplay: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="heroSection">
        <div className="container">
          <div className="row">
            <Slider {...heroSection}>
              <div
                className="col-md-12"
                style={{ width: '100%', display: 'inline-block' }}
              >
                <div className="heroArea">
                  <h1>100% Organic</h1>
                  <h3>Frash & natural farm Nood</h3>
                  <p>
                    The readable content of a page when looking at its layout
                    point of using of letters, as opposed.
                  </p>

                  <Button position="right" iconName="rounded-double-right">
                    All Products
                  </Button>

                  {/* <Button /> */}
                  {/* <p className="round"></p> */}
                </div>
              </div>

              <div
                className="col-md-12"
                style={{ width: '100%', display: 'inline-block' }}
              >
                <div className="heroArea">
                  <h1>90% Organic</h1>
                  <h3>Frash & natural farm Nood</h3>
                  <p>
                    The readable content of a page when looking at its layout
                    point of using of letters, as opposed.
                  </p>

                  <Button position="right" iconName="rounded-double-right">
                    All Products
                  </Button>
                  {/* <p className="round"></p> */}
                </div>
              </div>

              <div
                className="col-md-12"
                style={{ width: '100%', display: 'inline-block' }}
              >
                <div className="heroArea">
                  <h1>80% Organic</h1>
                  <h3>Frash & natural farm Nood</h3>
                  <p>
                    The readable content of a page when looking at its layout
                    point of using of letters, as opposed.
                  </p>

                  <Button position="right" iconName="rounded-double-right">
                    All Products
                  </Button>
                  {/* <p className="round"></p> */}
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="container">
          <div className="row">
            <Slider {...features}>
              <div
                className="col-xs-12 col-md-12 col-lg-12 col-xl-12 mb-4"
                style={{ width: '100%', display: 'inline-block' }}
              >
                <div className="features-card text-center">
                  <div className="features-icon-round">
                    <div className="icon-bg">
                      <Icofont icon="apple main-icon" />
                    </div>
                  </div>
                  <div className="features-title">
                    <h3>Healthy Food</h3>
                  </div>
                </div>
              </div>

              <div
                className="col-xs-12 col-md-12 col-lg-12 col-xl-12 mb-4"
                style={{ width: '100%', display: 'inline-block' }}
              >
                <div className="features-card text-center">
                  <div className="features-icon-round">
                    <div className="icon-bg">
                      <Icofont icon="truck-loaded main-icon" />
                    </div>
                  </div>
                  <div className="features-title">
                    <h3>Free shipping</h3>
                  </div>
                </div>
              </div>

              <div
                className="col-xs-12 col-md-12 col-lg-12 col-xl-12 mb-4"
                style={{ width: '100%', display: 'inline-block' }}
              >
                <div className="features-card text-center">
                  <div className="features-icon-round">
                    <div className="icon-bg">
                      <Icofont icon="ui-chat main-icon" />
                    </div>
                  </div>
                  <div className="features-title">
                    <h3>24/7 support</h3>
                  </div>
                </div>
              </div>

              <div
                className="col-xs-12 col-md-12 col-lg-12 col-xl-12 mb-4"
                style={{ width: '100%', display: 'inline-block' }}
              >
                <div className="features-card text-center">
                  <div className="features-icon-round">
                    <div className="icon-bg">
                      <Icofont icon="apple main-icon" />
                    </div>
                  </div>
                  <div className="features-title">
                    <h3>From Our Farm</h3>
                  </div>
                </div>
              </div>

              <div
                className="col-xs-12 col-md-12 col-lg-12 col-xl-12 mb-4"
                style={{ width: '100%', display: 'inline-block' }}
              >
                <div className="features-card text-center">
                  <div className="features-icon-round">
                    <div className="icon-bg">
                      <Icofont icon="apple main-icon" />
                    </div>
                  </div>
                  <div className="features-title">
                    <h3>Healthy Food</h3>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>

      <div className="aboutus" id="About">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="aboutus-content-title">
                <h3>
                  We Providing Services
                  <br /> Since 1841 With Proud.
                </h3>
                <div className="aboutus-content-details">
                  <p>
                    The readable content off a page when looking layout using
                    Lorem Ipsum is that it has.
                  </p>
                  <p>
                    It is a long established fact that a reader will be
                    distracted the readable content off a page when looking at
                    its layout using Lorem Ipsum is that it has.
                  </p>
                </div>
              </div>
              <div className="aboutus-icon-details align-items-center">
                <div className="aboutus-icon">
                  <Icofont icon="fruits" className="abt-icon" />
                </div>
                <div className="aboutus-icon-text">
                  <h2>Fresh Look And 100% Organic Farm Fresh Produce Right.</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ourProduct" id="OurProduct">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h3 className="section-title"> Our Best Seller Product </h3>
              <p className="section-subtitle">
                The passage experienced a surge in popularity during the 1960s
                when again during the 90s as desktop publishers
              </p>
            </div>

            <div className="row mt-5">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4">
                <div className="product">
                  <div className="product-img">
                    <img className="w-100" src={Apple} alt="" />
                  </div>
                  <div className="product-bottom">
                    <div className="product-details position-absolute">
                      <h3 className="product-name">
                        <Link to="/Product">Apple</Link>
                      </h3>
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
                        <Link to="/">
                          <Icofont icon="heart main-icon" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4">
                <div className="product">
                  <div className="product-img">
                    <img className="w-100" src={Orange} alt="" />
                  </div>
                  <div className="product-bottom">
                    <div className="product-details position-absolute">
                      <h3 className="product-name">
                        <Link to="/Product">Orange</Link>
                      </h3>
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
                        <Link to="/">
                          <Icofont icon="heart main-icon" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4">
                <div className="product">
                  <div className="product-img">
                    <img className="w-100" src={Dragon} alt="" />
                  </div>
                  <div className="product-bottom">
                    <div className="product-details position-absolute">
                      <h3 className="product-name">
                        <Link to="/Product">Dragon</Link>
                      </h3>
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
                        <Link to="/">
                          <Icofont icon="heart main-icon" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4">
                <div className="product">
                  <div className="product-img">
                    <img className="w-100" src={MuskMelon} alt="" />
                  </div>
                  <div className="product-bottom">
                    <div className="product-details position-absolute">
                      <h3 className="product-name">
                        <Link to="/Product">Musk Melon</Link>
                      </h3>
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
                        <Link to="/">
                          <Icofont icon="heart main-icon" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4">
                <div className="product">
                  <div className="product-img">
                    <img className="w-100" src={Onion} alt="" />
                  </div>
                  <div className="product-bottom">
                    <div className="product-details position-absolute">
                      <h3 className="product-name">
                        <Link to="/Product">Onion</Link>
                      </h3>
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
                        <Link to="/">
                          <Icofont icon="heart main-icon" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4">
                <div className="product">
                  <div className="product-img">
                    <img className="w-100" src={Masrom} alt="" />
                  </div>
                  <div className="product-bottom">
                    <div className="product-details position-absolute">
                      <h3 className="product-name">
                        <Link to="/Product">Masrom</Link>
                      </h3>
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
                        <Link to="/">
                          <Icofont icon="heart main-icon" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4">
                <div className="product">
                  <div className="product-img">
                    <img className="w-100" src={Carrot} alt="" />
                  </div>
                  <div className="product-bottom">
                    <div className="product-details position-absolute">
                      <h3 className="product-name">
                        <Link to="/Product">Carrot</Link>
                      </h3>
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
                        <Link to="/">
                          <Icofont icon="heart main-icon" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4">
                <div className="product">
                  <div className="product-img">
                    <img className="w-100" src={Tomatoes} alt="" />
                  </div>
                  <div className="product-bottom">
                    <div className="product-details position-absolute">
                      <h3 className="product-name">
                        <Link to="/Product">Tomatoes</Link>
                      </h3>
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
                        <Link to="/">
                          <Icofont icon="heart main-icon" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="offer">
        <div className="bg-1"></div>
        <div className="bg-2"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="offer-content">
                <h3>Daily Essentials</h3>
                <h2>
                  Sale 68% Off
                  <br />
                  All Fruite Products
                </h2>
                <Button iconName="double-right" position="right">
                  Explore more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="partner">
        <div className="container">
          <div className="row">
            <Slider {...partner}>
              <div
                className="col-md-12"
                style={{ width: '100%', display: 'inline-block' }}
              >
                <div className="partner-img text-center">
                  <img className="w-50 mx-auto" src={Partner} alt="" />
                </div>
              </div>

              <div
                className="col-md-12"
                style={{ width: '100%', display: 'inline-block' }}
              >
                <div className="partner-img text-center">
                  <img className="w-50 mx-auto" src={Partner} alt="" />
                </div>
              </div>

              <div
                className="col-md-12"
                style={{ width: '100%', display: 'inline-block' }}
              >
                <div className="partner-img text-center">
                  <img className="w-50 mx-auto" src={Partner} alt="" />
                </div>
              </div>

              <div
                className="col-md-12"
                style={{ width: '100%', display: 'inline-block' }}
              >
                <div className="partner-img text-center">
                  <img className="w-50 mx-auto" src={Partner} alt="" />
                </div>
              </div>

              <div
                className="col-md-12"
                style={{ width: '100%', display: 'inline-block' }}
              >
                <div className="partner-img text-center">
                  <img className="w-50 mx-auto" src={Partner} alt="" />
                </div>
              </div>

              <div
                className="col-md-12"
                style={{ width: '100%', display: 'inline-block' }}
              >
                <div className="partner-img text-center">
                  <img className="w-50 mx-auto" src={Partner} alt="" />
                </div>
              </div>

              <div
                className="col-md-12"
                style={{ width: '100%', display: 'inline-block' }}
              >
                <div className="partner-img text-center">
                  <img className="w-50 mx-auto" src={Partner} alt="" />
                </div>
              </div>

              <div
                className="col-md-12"
                style={{ width: '100%', display: 'inline-block' }}
              >
                <div className="partner-img text-center">
                  <img className="w-50 mx-auto" src={Partner} alt="" />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>

      <div className="testimonial" id="Testimonial">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h3 className="section-title"> Our Happy Customers </h3>
              <p className="section-subtitle">
                The passage experienced a surge in popularity during the 1960s
                when again during the 90s as desktop publishers
              </p>
            </div>
          </div>

          <div className="row align-items-center d-flex mt-5">
            <div
              className="col-md-4"
              // style={{ width: "100%", display: "inline-block" }}
            >
              <Slider {...test}>
                <div className="testimonial-img text-center">
                  <div className="testimonial-right-img">
                    <img className="w-100" src={TestimonialRight} alt="" />
                  </div>
                </div>

                <div className="testimonial-img text-center">
                  <div className="testimonial-right-img">
                    <img className="w-100" src={TestimonialRight} alt="" />
                  </div>
                </div>

                <div className="testimonial-img text-center">
                  <div className="testimonial-right-img">
                    <img className="w-100" src={TestimonialRight} alt="" />
                  </div>
                </div>
              </Slider>
            </div>

            <div className="col-md-8">
              <Slider {...test}>
                <div className="testimonial-right">
                  <Icofont icon="double-right" />
                  <div className="testimonial-content">
                    <p>
                      “ There are many variati ons passages of but the majority
                      have suffered alteration in some form, injected humour
                      randomised words which don't look even slightly
                      believable. If you are going to use a passage of text all
                      the loss ".
                    </p>
                    <h3>Salvador Stanley</h3>
                    <h4>Happy Customer</h4>
                  </div>
                  <Icofont icon="double-left" />
                </div>

                <div className="testimonial-right">
                  <Icofont icon="double-right" />
                  <div className="testimonial-content">
                    <p>
                      “ There are many variati ons passages of but the majority
                      have suffered alteration in some form, injected humour
                      randomised words which don't look even slightly
                      believable. If you are going to use a passage of text all
                      the loss ".
                    </p>
                    <h3>Salvador Stanley</h3>
                    <h4>Happy Customer</h4>
                  </div>
                  <Icofont icon="double-left" />
                </div>

                <div className="testimonial-right">
                  <Icofont icon="double-right" />
                  <div className="testimonial-content">
                    <p>
                      “ There are many variati ons passages of but the majority
                      have suffered alteration in some form, injected humour
                      randomised words which don't look even slightly
                      believable. If you are going to use a passage of text all
                      the loss ".
                    </p>
                    <h3>Salvador Stanley</h3>
                    <h4>Happy Customer</h4>
                  </div>
                  <Icofont icon="double-left" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>

      <div className="cta" id="Contact">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="cta-detail">
                If you Need Natural And Fresh Organic Fruits!
              </h2>
              <Button iconName="double-right" position="right">
                contact now
              </Button>{' '}
            </div>
          </div>
        </div>
      </div>

      <div className="blog">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h3 className="section-title"> Latest News </h3>
              <p className="section-subtitle">
                The passage experienced a surge in popularity during the 1960s
                when again during the 90s as desktop publishers
              </p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-6">
              <div className="blog-right grid">
                <div className="blog-img">
                  <img className="w-100" src={News1} alt="" />
                </div>

                <div className="blog-content">
                  <div className="blog-activity">
                    <span className="blog-date">16 January’20</span>
                    <span className="blog-icon-detail">
                      <Icofont icon="heart blog-icon" />
                      56
                    </span>
                    <span className="blog-icon-detail">
                      <Icofont icon="speech-comments blog-icon" />
                      78
                    </span>
                  </div>
                  <div className="blog-title">
                    <Link to="/BlogDetails">
                      <h4>
                        The passage experienced a popularity during the used it
                        on their dry-transfer sheets.
                      </h4>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="blog-left d-flex">
                <div className="blog-img">
                  <img className="w-100" src={News2} alt="" />
                </div>
                <div className="blog-content">
                  <div className="blog-activity">
                    <span className="blog-date">16 January’20</span>
                    <span className="blog-icon-detail">
                      <Icofont icon="heart blog-icon" />
                      56
                    </span>
                    <span className="blog-icon-detail">
                      <Icofont icon="speech-comments blog-icon" />
                      78
                    </span>
                  </div>
                  <div className="blog-title">
                    <Link to="/BlogDetails">
                      <h4>The passage popularity dry transfer sheets.</h4>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="blog-left d-flex">
                <div className="blog-img">
                  <img className="w-100" src={News3} alt="" />
                </div>
                <div className="blog-content">
                  <div className="blog-activity">
                    <span className="blog-date">16 January’20</span>
                    <span className="blog-icon-detail">
                      <Icofont icon="heart blog-icon" />
                      56
                    </span>
                    <span className="blog-icon-detail">
                      <Icofont icon="speech-comments blog-icon" />
                      78
                    </span>
                  </div>
                  <div className="blog-title">
                    <Link to="/BlogDetails">
                      <h4>The passage popularity dry transfer sheets.</h4>
                    </Link>
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

export default HomePage;
