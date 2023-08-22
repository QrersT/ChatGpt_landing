import React from "react";
import peopleImg from "../../assets/people.png";
import aiImg from "../../assets/ai.png";

function Header() {
  return (
    <section className="header">
      <div className="header__container _container">
        <div className="header__wrapper">
          <h1 className="header__title _gradient__text">Let’s Build Something amazing with GPT-3 OpenAI</h1>
          <p className="header__text">
            Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order
            allow asked of.
          </p>
          <div className="header__mail mail-header">
            <input className="mail-header__input" type="email" name="" placeholder="Your Email Address" />
            <button className="mail-header__btn _main__btn" type="submit">
              Get Started
            </button>
          </div>
          <div className="header__users">
            <img src={peopleImg} alt="people" className="header__users-img " />
            <p className="header__usert-text">
              <span>1,600</span> people requested access a visit in last 24 hours
            </p>
          </div>
        </div>
        <img src={aiImg} alt="aiImg" className="header__img _scale10 " />
      </div>
    </section>
  );
}

export default Header;
