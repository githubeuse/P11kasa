import React from "react";
import { useParams, Navigate } from "react-router-dom";
import logements from "../../datas/logements.json";
import "../../styles/Card/Card.css";

import Toggle from "../../components/Toggle";
import Ratings from "../../components/Ratings";
import Gallery from "../../components/Gallery";
import Error from "../../pages/Error";

function Card() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  if (!logement) {
    // return <div>Logement non trouvé</div>;

    return <Navigate to="/404" element={<Error />} />;
  }

  const [firstName, lastName] = logement.host.name.split(" ");

  return (
    <div>
      <Gallery pictures={logement.pictures} title={logement.title} />

      <div className="houseInfosContainer">
        <h1 className="logementTitle">{logement.title}</h1>
        <p className="logementLocation">{logement.location}</p>
      </div>

      <div className="upContainer">
        <div className="container1">
          <div className="hostInfos">
            <div className="hostName">
              <span>{firstName}</span>
              <span>{lastName}</span>
            </div>
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className="hostPic"
            />
          </div>

          <div className="ratingContainer">
            <Ratings rating={logement.rating} />
          </div>
        </div>
        <div className="tagsContainer">
          <p>
            {logement.tags.map((tag, index) => (
              <button key={index} className="tag">
                {tag}
              </button>
            ))}
          </p>
        </div>
      </div>

      <div className="houseTogglesContainer">
        <Toggle title="Description">
          <p>{logement.description}</p>
        </Toggle>
        <Toggle title="Equipements" className="cardButton">
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
