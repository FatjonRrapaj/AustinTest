// ProgressBar.js
import React, { useEffect, useState } from "react";
import "./ProgressBar.css";

const ProgressBar = ({ raisedAmount, limit }) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Trigger the animation on the first render
    setAnimationComplete(true);
  }, []);

  const calculateProgress = () => {
    return Math.min((raisedAmount / limit) * 100, 100);
  };

  return (
    <div className={`progress-bar ${animationComplete ? "animate" : ""}`}>
      <div className="progress-placeholder" />
      <div
        className="progress-fill"
        style={{ width: `${calculateProgress()}%` }}
      />
      <div className="progress-text">
        {`$${raisedAmount.toLocaleString()} raised of $${limit.toLocaleString()}`}
      </div>
    </div>
  );
};

export default ProgressBar;
