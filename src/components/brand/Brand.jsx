import React from "react";
import { google, slack, atlassian, dropbox, shopify } from "./imports";

const Brand = () => {
  return (
    <section className="brand">
      <div className="brand__container _container">
        <img src={google} alt="brand" className="brand__item" />
        <img src={slack} alt="brand" className="brand__item" />
        <img src={atlassian} alt="brand" className="brand__item" />
        <img src={dropbox} alt="brand" className="brand__item" />
        <img src={shopify} alt="brand" className="brand__item" />
      </div>
    </section>
  );
};

export default Brand;
