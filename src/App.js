import React from "react";
import "./style.scss";

import { Blog, Footer, Features, Header, Future, Possibility, WhatGPT } from "./containers";
import { Article, Brand, CTA, Feature, Navbar } from "./components";
const App = () => {
  return (
    <div className="App">
      <div className="gradient-bg">
        <Navbar />
        <Header />
        <Brand />
        <WhatGPT />
        <Future />
        <Possibility />
        <Blog />
        <Footer />
      </div>
      {/* 
      <Features />
      
      <CTA />
      
      */}
    </div>
  );
};

export default App;
