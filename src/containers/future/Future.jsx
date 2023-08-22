import React from "react";
import { Feature } from "../../components";

function Future() {
  return (
    <section className="future">
      <div className="future__container _container">
        <div className="future__box">
          <h2 className="future__title _gradient__text">The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h2>
          <p className="future__subtitle">Request Early Access to Get Started</p>
        </div>
        <div className="future__box">
          <div className="future__column">
            <Feature text="Improving end distrusts instantly " mainClass="future" />
            <p className="future__text">From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.</p>
          </div>
          <div className="future__column">
            <Feature text="Become the tended active" mainClass="future" />
            <p className="future__text">Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.</p>
          </div>
          <div className="future__column">
            <Feature text="Message or am nothing" mainClass="future" />
            <p className="future__text">Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.</p>
          </div>
          <div className="future__column">
            <Feature text="Really boy law county" mainClass="future" />
            <p className="future__text">Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Future;
