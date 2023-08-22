import React from "react";

const Feature = ({ text, mainClass }) => {
  return <div className={`${mainClass}__feature _feature`}>{text}</div>;
};

export default Feature;
