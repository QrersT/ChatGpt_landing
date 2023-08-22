import React from "react";
import logo from "../../assets/logo.svg";

function Footer() {
  return (
    <section className="footer">
      <div className="footer__container _container">
        <h3 className="footer__title _gradient__text">Do you want to step in to the future before others</h3>
        <button className="footer__btn">Request Early Access</button>
        <div className="footer-wrapper ">
          <div className="footer-wrapper__logo">
            <img src={logo} alt="logo" />
            <p className="footer__text">Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>
          <div className="footer-wrapper__content">
            <ul className="footer-wrapper__list">
              <div className="footer-wrapper__title">
                <a href="#">Links</a>
              </div>
              <li className="footer-wrapper__item">
                <a href="#">Overons</a>
              </li>
              <li className="footer-wrapper__item">
                <a href="#">Social Media</a>
              </li>
              <li className="footer-wrapper__item">
                <a href="#">Counters</a>
              </li>
              <li className="footer-wrapper__item">
                <a href="#">Contact</a>
              </li>
            </ul>
            <ul className="footer-wrapper__list">
              <div className="footer-wrapper__title">
                <a href="#">Company</a>
              </div>
              <li className="footer-wrapper__item">
                <a href="#">Terms & Conditions</a>
              </li>
              <li className="footer-wrapper__item">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="footer-wrapper__item">
                <a href="#">Contact</a>
              </li>
            </ul>
            <ul className="footer-wrapper__list">
              <div className="footer-wrapper__title">
                <a href="#">Get in touch</a>
              </div>
              <li className="footer-wrapper__item">
                <a href="#">Crechterwoord K12 182 DK Alknjkcb</a>
              </li>
              <li className="footer-wrapper__item">
                <a href="#">085-132567</a>
              </li>
              <li className="footer-wrapper__item">
                <a href="#">info@payme.net</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="footer__rights">© 2021 GPT-3. All rights reserved.</p>
      </div>
    </section>
  );
}

export default Footer;
