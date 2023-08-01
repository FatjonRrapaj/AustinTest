import React from "react";

import ProgressBar from "../../atoms/ProgressBar/ProgressBar";
import "./Card.css";

const Card = ({ cardData }) => {
  const {
    largeImage,
    profileImage,
    title,
    description,
    type,
    daysLeft,
    currentProgress,
    totalFunding,
  } = cardData;

  return (
    <div className="card">
      <div
        className="cover-image"
        style={{ backgroundImage: `url(${largeImage})` }}
      />
      <div className="profile-image-container">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <p className="company-name">{title}</p>
      </div>
      <div className="content">
        <p className="description">{description}</p>
        <div className="status">Status</div>
        <div className="days-left">Days Left: {daysLeft}</div>
        <button className="add-to-favorites">Add to Favorites</button>
      </div>
      <ProgressBar raisedAmount={currentProgress} limit={totalFunding} />
    </div>
  );
};

export default Card;
