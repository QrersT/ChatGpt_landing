import React from "react";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./import.js";

function Blog() {
  return (
    <section className="blog">
      <div className="blog__container _container">
        <h2 className="blog__title _gradient__text">A lot is happening, We are blogging about it.</h2>

        <div className="blog__wrapper">
          <div className="blog__main">
            <div className="blog__main-item">
              <Article img={blog01} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
            </div>
          </div>
          <div className="blog__secondary">
            <div className="blog__secondary-item">
              <Article img={blog02} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
            </div>
            <div className="blog__secondary-item">
              <Article img={blog03} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
            </div>
            <div className="blog__secondary-item">
              <Article img={blog04} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
            </div>
            <div className="blog__secondary-item">
              <Article img={blog05} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
