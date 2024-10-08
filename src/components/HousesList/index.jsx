import React from "react";
import { Link } from "react-router-dom";
import logements from "../../datas/logements.json";
import "../../styles/HousesList/HousesList.css";

function HousesList() {
  return (
    <div className="housesList">
      <div className="housesListContainer">
        {logements.map((logement) => (
          <div key={logement.id} className="houseCard">
            <Link to={`/fiche_logement/${logement.id}`}>
              <img
                src={logement.cover}
                alt={logement.title}
                className="coverCard"
              />
              <div className="titleCard">{logement.title}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HousesList;
