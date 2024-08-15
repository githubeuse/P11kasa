import React from "react";
import footerLogo from "../../assets/footer_logo.png";
import "../../styles/Footer/Footer.css";

function Footer() {
  return (
    <footer>
      <img src={footerLogo} alt="Logo Ksa" className="footerLogo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
