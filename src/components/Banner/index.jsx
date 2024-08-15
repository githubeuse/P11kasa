import React from "react";
import { useLocation } from "react-router-dom";
import "../../styles/Banner/Banner.css";
import homeBanner from "../../assets/home_banner.png";
import aboutBanner from "../../assets/about_banner.png";

function Banner() {
  const location = useLocation();
  const banner = location.pathname === "/about" ? aboutBanner : homeBanner;

  const bannerText =
    location.pathname === "/about" ? "" : "Chez vous, partout et ailleurs";
  return (
    <div className="bannerContainer">
      <img src={banner} alt="Bannière" className="banner" />
      {bannerText && <div className="bannerText">{bannerText}</div>}
    </div>
  );
}

export default Banner;
