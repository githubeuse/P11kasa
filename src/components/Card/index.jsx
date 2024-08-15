import React from "react";
import { useParams } from "react-router-dom";
import logements from "../../datas/logements.json";
import "../../styles/Card/Card.css";

import Toggle from "../../components/Toggle";

function Card() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div>
      <img className="cover" src={logement.cover} alt={logement.title} />
      <h1>{logement.title}</h1>
      <p>{logement.location}</p>
      <p>{logement.host.name}</p>
      <p>{logement.rating}</p>
      <p>{logement.tags.join(", ")}</p>
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
