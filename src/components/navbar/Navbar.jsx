import React from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import logo from "../../assets/logo.svg";

const Menu = () => {
  return (
    <ul className="navbar-links__list">
      <li className="navbar-links__item">
        <a href="#" className="navbar-links-link">
          Home
        </a>
      </li>

      <li className="navbar-links__item">
        <a href="#" className="navbar-links-link">
          What is GPT?
        </a>
      </li>

      <li className="navbar-links__item">
        <a href="#" className="navbar-links-link">
          Open AI
        </a>
      </li>

      <li className="navbar-links__item">
        <a href="#" className="navbar-links-link">
          Case Studies
        </a>
      </li>

      <li className="navbar-links__item">
        <a href="#" className="navbar-links-link">
          Library
        </a>
      </li>
    </ul>
  );
};

const Login = () => {
  return (
    <div className="navbar__login">
      <button className="navbar__login-button  _login-button__signIn">Sign in</button>
      <button className="navbar__login-button _main__btn _login-button__signUp">Sign up</button>
    </div>
  );
};

function isMobile() {
  if (window.innerWidth < 1050) {
    return true;
  }
}

const Navbar = () => {
  /* function clickBtn() {
    setState((prevState) => !prevState);
  } */
  /* const btn = document.querySelector("._login-button__signUp"); */
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <section className=" navbar ">
      <div className="navbar__container _container">
        <a href="" className="navbar__logo">
          <img src={logo} alt="" />
        </a>

        <div className="navbar__links navbar-links">
          <Menu isMobile={toggleMenu} />
        </div>

        <Login />

        <div className="navbar__menu">
          {toggleMenu ? <RiCloseLine onClick={() => setToggleMenu(false)} color="#fff" size={27} /> : <RiMenu3Line onClick={() => setToggleMenu(true)} color="#fff" size={27} />}
          {toggleMenu && (
            <>
              <div className="navbar-links__wrapper scale-up-center">
                <Menu /> <Login />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
