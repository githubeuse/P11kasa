import React from "react";
import { useParams } from "react-router-dom";
import logements from "../../datas/logements.json";
import "../../styles/Card/Card.css";

function Card() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div>
      <h1>{logement.title}</h1>
      <img className="cover" src={logement.cover} alt={logement.title} />
      <p>{logement.location}</p>
      <p>{logement.host.name}</p>
      <p>{logement.rating}</p>
      <p>{logement.description}</p>
      <p>{logement.equipments.join(", ")}</p>
      <p>{logement.tags.join(", ")}</p>
    </div>
  );
}

export default Card;
