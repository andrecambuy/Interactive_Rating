import React, { useState } from "react";
import "./Button.css";

const Button = ({ data, setItems }: any) => {
  const handleClick = () => {
    setItems(data);
  };

  return (
    <div className="contain-btn" onClick={handleClick}>
      <p>{data}</p>
    </div>
  );
};

export default Button;
