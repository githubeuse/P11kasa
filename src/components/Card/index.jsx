import React from "react";
import { useParams } from "react-router-dom";
import logements from "../../datas/logements.json";
import "../../styles/Card/Card.css";

import Toggle from "../../components/Toggle";
import Ratings from "../../components/Ratings";

function Card() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  const [firstName, lastName] = logement.host.name.split(" ");

  return (
    <div>
      <img className="cover" src={logement.cover} alt={logement.title} />
      <div className="houseInfosContainer">
        <h1 className="logementTitle">{logement.title}</h1>
        <div className="hostInfos">
          <div className="hostName">
            <span>{firstName}</span>
            <span>{lastName}</span>
          </div>{" "}
          <img
            src={logement.host.picture}
            alt={logement.host.name}
            className="hostPic"
          />
        </div>
        <p className="logementLocation">{logement.location}</p>
        <p></p>
        <p className="tagsContainer">
          {logement.tags.map((tag, index) => (
            <button key={index} className="tag">
              {tag}
            </button>
          ))}
        </p>
        <div className="ratingContainer">
          <Ratings rating={logement.rating} />
        </div>
      </div>
      <div className="houseTogglesContainer">
        <Toggle title="Description">
          <p>{logement.description}</p>
        </Toggle>
        <Toggle title="Equipements">
          <ul className="equipmentsList">
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Toggle>
      </div>
    </div>
  );
}

export default Card;
