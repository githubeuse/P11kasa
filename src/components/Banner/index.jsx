import React from "react";

import "../../styles/Banner/Banner.css";

function Banner({ image, text }) {
  const bannerText = text;
  const banner = image;

  return (
    <div className="bannerContainer">
      <img src={banner} alt="Bannière" className="banner" />
      {bannerText && <div className="bannerText">{bannerText}</div>}
    </div>
  );
}

export default Banner;
