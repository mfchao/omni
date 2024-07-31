import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import Weather from "./weather/Weather";
import DateTime from "./homePage/DateTime";

const Cover = ({ onTransition }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    onTransition();
    setTimeout(() => {
      navigate("/home");
    }, 300);
  };

  return (
    <div className="cover-page" onClick={handleClick}>
      <DateTime classNameDate="cover-date" classNameTime="cover-time" />
      <Weather
        classNameLocation="cover-weather-location"
        classNameDes="cover-weather-des"
        classNameTemp="cover-weather-temp"
      />
    </div>
  );
};

export default Cover;
