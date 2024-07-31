import React from "react";

const Weather = (props) => {
  const { classNameLocation, classNameDes, classNameTemp } = props;
  const placeholderData = {
    location: "San Francisco",
    description: "Partly Cloudy",
    temperature: "72°",
    wind: "Wind Chill 60°F",
  };

  return (
    <div>
      <div className={classNameLocation}>{placeholderData.location}</div>
      <div className={classNameDes}>{placeholderData.description}</div>
      <div className={classNameTemp}>{placeholderData.temperature}</div>
      {/* <div className={classNameDes}>{placeholderData.wind}</div> */}
    </div>
  );
};

export default Weather;
