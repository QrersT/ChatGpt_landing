import React from "react";
import Feature from "../../components/feature/Feature";

function WhatGPT() {
  return (
    <section className="whatgpt">
      <div className="whatgpt__container _container">
        <div className="whatgpt__box box-whatgpt">
          <div className="box-whatgpt__column">
            <Feature text={"What is GPT-3"} mainClass={"whatgpt"} />{" "}
            <p className="box-whatgpt__text">
              We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous.
              At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.
            </p>
          </div>
          <div className="box-whatgpt__column">
            <h3 className="box-whatgpt__title _gradient__text">The possibilities are beyond your imagination</h3>
            <p className="box-whatgpt__text  _orange-color">Explore The Library</p>
          </div>
          <div className="box-whatgpt__column">
            <div>
              <Feature text={"Chatbots"} mainClass={"whatgpt"} />
              <p className="box-whatgpt__text">We so opinion friends me message as delight. Whole front do of plate heard oh ought. </p>
            </div>
            <div>
              <Feature text={"Knowledgebase"} mainClass={"whatgpt"} />
              <p className="box-whatgpt__text">At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</p>
            </div>
            <div>
              <Feature text={"Education"} mainClass={"whatgpt"} />
              <p className="box-whatgpt__text">At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatGPT;
