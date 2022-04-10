import React from 'react';
import Icofont from 'react-icofont';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <>
      <div className={styles.footerBg}>
        <div className="container">
          <div className="row ">
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-5">
              <h2 className={styles['footer-main-title']}>Contact Us!</h2>

              <div className="row">
                <span className={styles['footer-contact-title']}>Phone </span>
                <p className={styles['footer-contact-detial']}>
                  +000 369 876 468
                </p>
              </div>

              <div className="row">
                <span className={styles['footer-contact-title']}>E-mail </span>
                <a
                  href="javascript:void(0)"
                  className={styles['footer-contact-detial']}
                >
                  support@gmail.com
                </a>
              </div>

              <div className="row">
                <span className={styles['footer-contact-title']}>Address </span>
                <p className={styles['footer-contact-detial']}>
                  King Street, Avenue,
                </p>
              </div>

              <ul
                className={`list-unstylesd d-flex ${styles['social-icons']} my-4 mb-0`}
              >
                <li className={styles['icon-list']}>
                  <a href="javascript:void(0)" className={styles['icon-round']}>
                    <Icofont icon="skype" />
                  </a>
                </li>
                <li className={styles['icon-list']}>
                  <a href="javascript:void(0)" className={styles['icon-round']}>
                    <Icofont icon="twitter" />
                  </a>
                </li>
                <li className={styles['icon-list']}>
                  <a href="javascript:void(0)" className={styles['icon-round']}>
                    <Icofont icon="facebook" />
                  </a>
                </li>
                <li className={styles['icon-list']}>
                  <a href="javascript:void(0)" className={styles['icon-round']}>
                    <Icofont icon="instagram" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-5">
              <h2 className={styles['footer-main-title']}>Customer Support</h2>

              <ul className="list-unstylesd mb-0">
                <li>
                  <Icofont icon={`double-right ${styles['icon-right']}`} />
                  <a
                    href="javascript:void(0)"
                    className={styles['footer-detial']}
                  >
                    About us
                  </a>
                </li>
                <li>
                  <Icofont icon={`double-right ${styles['icon-right']}`} />
                  <a
                    href="javascript:void(0)"
                    className={styles['footer-detial']}
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <Icofont icon={`double-right ${styles['icon-right']}`} />
                  <a
                    href="javascript:void(0)"
                    className={styles['footer-detial']}
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <Icofont icon={`double-right ${styles['icon-right']}`} />
                  <a
                    href="javascript:void(0)"
                    className={styles['footer-detial']}
                  >
                    Product Return
                  </a>
                </li>
                <li>
                  <Icofont icon={`double-right ${styles['icon-right']}`} />
                  <a
                    href="javascript:void(0)"
                    className={styles['footer-detial']}
                  >
                    Wholesale Policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-5">
              <h2 className={styles['footer-main-title']}>Quick Links</h2>

              <ul className="list-unstylesd mb-0">
                <li>
                  <Icofont icon={`double-right ${styles['icon-right']}`} />
                  <a
                    href="javascript:void(0)"
                    className={styles['footer-detial']}
                  >
                    Pagination
                  </a>
                </li>
                <li>
                  <Icofont icon={`double-right ${styles['icon-right']}`} />
                  <a
                    href="javascript:void(0)"
                    className={styles['footer-detial']}
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <Icofont icon={`double-right ${styles['icon-right']}`} />
                  <a
                    href="javascript:void(0)"
                    className={styles['footer-detial']}
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <Icofont icon={`double-right ${styles['icon-right']}`} />
                  <a
                    href="javascript:void(0)"
                    className={styles['footer-detial']}
                  >
                    Accessories
                  </a>
                </li>
                <li>
                  <Icofont icon={`double-right ${styles['icon-right']}`} />
                  <a
                    href="javascript:void(0)"
                    className={styles['footer-detial']}
                  >
                    Term of use
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles['footer-copyright']}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-12">
              <div className={`text-center ${styles['footer-section']}`}>
                <p className={styles['footer-txt']}>
                  Copyright 2020
                  <span className={styles['footer-main-name']}> TazZa. </span>
                  All Right Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
