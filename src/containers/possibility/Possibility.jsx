import React from "react";
import possibilitiesImg from "../../assets/possibility.png";

function Possibility() {
  return (
    <section className="possibility">
      <div className="possibility__container _container">
        <div className="possibility__top top-possibility">
          <img className="top-possibility__img" src={possibilitiesImg} alt="possibilitiesImg" />
          <div className="top-possibility__content">
            <p className="top-possibility__early-access _possibilities__blue">Request Early Access to Get Started</p>
            <h3 className="top-possibility__title _gradient__text">The possibilities are beyond your imagination</h3>
            <p className="top-possibility__text">
              Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to
              order allow asked of.
            </p>
            <p className="top-possibility__early-access _possibilities__orange">Request Early Access to Get Started</p>
          </div>
        </div>
        <div className="possibility__bottom bottom-possibility">
          <div className="bottom-possibility__content">
            <div className="bottom-possibility__subtitle">Request Early Access to Get Started</div>
            <div className="bottom-possibility__title">Register today & start exploring the endless possiblities.</div>
          </div>
          <button className="bottom-possibility__btn">Get Started</button>
        </div>
      </div>
    </section>
  );
}

export default Possibility;
