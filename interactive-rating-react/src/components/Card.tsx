import React, { useState } from "react";
import star from "../assets/icon-star.svg";
import Button from "./Button";
import "./Card.css";

const Card = ({ setIsActive, setNumber }: any) => {
  const arr = [1, 2, 3, 4, 5];
  const [items, setItems] = useState("");

  return (
    <div className="card">
      <div className="star">
        <img src={star} alt="Star" />
      </div>
      <h2>How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="buttons">
        {arr.map((btn, index) => {
          return <Button key={index} data={btn} setItems={setNumber} />;
        })}
      </div>
      <button
        className="submit"
        type="submit"
        onClick={() => setIsActive(true)}
      >
        SUBMIT
      </button>
    </div>
  );
};

export default Card;
