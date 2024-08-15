// src/pages/House.jsx
import React from "react";
// import styled from "styled-components";
// import { useState } from 'react';
import logements from "../../datas/logements.json";

function Logements() {
  return (
    <div>
      <h1>House</h1>
      {logements.map((logement, index) => {
        return (
          <div key={index}>
            <h2>{logement.title}</h2>
            <img src={logement.cover} alt={logement.title} />

            <p>{logement.location}</p>
            <p>{logement.host.name}</p>
            <p>{logement.rating}</p>
            <p>{logement.description}</p>
            <p>{logement.equipments.join(", ")}</p>
            <p>{logement.tags.join(", ")}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Logements;
