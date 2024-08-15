import React from "react";
import "../../styles/Ratings/Ratings.css";

function Ratings({ rating }) {
  const tab = [];

  for (let i = 0; i < rating; i++) {
    tab.push(
      <span key={i} className="orangeStars">
        ★
      </span>
    );
  }
  for (let i = rating; i < 5; i++) {
    tab.push(
      <span key={i} className="greyStars">
        ★
      </span>
    );
  }
  return <div className="ratings">{tab}</div>;
}

export default Ratings;
