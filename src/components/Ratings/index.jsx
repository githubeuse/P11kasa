import React from "react";
import "../../styles/Ratings/Ratings.css";
import orangeStar from "../../assets/orange_star.png";
import greyStar from "../../assets/grey_star.png";
function Ratings({ rating }) {
  const tab = [];

  for (let i = 0; i < rating; i++) {
    tab.push(
      <span key={i}>
        <img src={orangeStar} alt="orange star" />
      </span>
    );
  }
  for (let i = rating; i < 5; i++) {
    tab.push(
      <span key={i}>
        <img src={greyStar} alt="grey star" />
      </span>
    );
  }
  return <div className="ratings">{tab}</div>;
}

export default Ratings;
