import React from "react";
import footerLogo from "../../assets/footer_logo.png";
import "../../styles/Footer/Footer.css";

function Footer() {
  return (
    <footer>
      <img src={footerLogo} alt="Logo Ksa" className="footerLogo" />
      <div className="footerParagraphs">
        <p>© 2020 Kasa. </p>
        <p>All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
