import React from "react";

import Card from "../Card/Card";
import cardsData from "../../mock/cards.json";
import "./CardList.css";

const CardList = () => {
  return (
    <div className="card-list">
      {cardsData.map((cardData, index) => (
        <Card key={index} cardData={cardData} />
      ))}
    </div>
  );
};

export default CardList;
