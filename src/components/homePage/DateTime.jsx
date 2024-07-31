import React, { useState, useEffect } from "react";

const DateTime = (props) => {
  const { classNameDate, classNameTime } = props;
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentTime.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  const formattedTime = currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <div>
      <div className={classNameDate}>{formattedDate}</div>
      <div className={classNameTime}>{formattedTime}</div>
    </div>
  );
};

export default DateTime;
