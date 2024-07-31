import React from "react";
import { useNavigate } from "react-router-dom";

const AppCard = ({ icon, name, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <div className="app-card" onClick={handleClick}>
      <img src={icon} alt={name} className="app-icon" />
      <div className="app-name">{name}</div>
    </div>
  );
};

export default AppCard;
