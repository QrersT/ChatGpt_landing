import React from "react";

const Article = ({ img, date, title }) => {
  return (
    <>
      <img className="blog__img" src={img} alt="img" />
      <div className="blog__content">
        <p className="blog__content-date">{date}</p>
        <h2 className="blog__content-title">{title}</h2>
        <div>
          <a href="#" className="blog__content-link _color__circle">
            Read Full Article
          </a>
        </div>
      </div>
    </>
  );
};

export default Article;
