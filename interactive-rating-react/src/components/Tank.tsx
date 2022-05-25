import React from "react";
import tanks from "../assets/illustration-thank-you.svg";
import "./Card.css";

const Tank = ({ number }: any) => {
  return (
    <div className="card center">
      <img src={tanks} alt="Thank You" />
      <div className="selected">
        <p>You selected {number} out of 5</p>
      </div>

      <h2 className="">Thank you!</h2>
      <p className="">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default Tank;
