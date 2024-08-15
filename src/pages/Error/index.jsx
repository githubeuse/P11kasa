import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "../../styles/Error/Error.css";

function Error() {
  return (
    <div>
      <Header />
      <div className="errorContainer">
        <h1 className="h1error">404</h1>
        <h2 className="h2error">
          Oups! La page que vous demandez n'existe pas.
        </h2>
        <div className="errorP">
          <Link to="/">
            <p>Retourner sur la page d'accueil</p>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Error;
