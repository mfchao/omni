import { useState, useEffect } from "react";
import "./Timer.css";

const Timer = ({ initialTime, title, onDelete }) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      setIntervalId(id);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  useEffect(() => {
    if (time <= 0) {
      setIsRunning(false);
      setTime(0);
      clearInterval(intervalId);
    }
  }, [time]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (time / initialTime) * circumference;

  const handlePlayPause = () => {
    setIsRunning((prev) => !prev);
  };

  const handleDelete = () => {
    onDelete(title);
  };

  return (
    <div className="timer">
      <div className="timer-circle">
        <svg width="200" height="200">
          <circle
            cx="100"
            cy="100"
            r={83}
            stroke="#4A4A4A"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="100"
            cy="100"
            r={90}
            stroke="#151515"
            strokeWidth="9"
            fill="none"
          />
          <circle
            cx="100"
            cy="100"
            r={97}
            stroke="#4A4A4A"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="100"
            cy="100"
            r={radius}
            stroke="#FF5454"
            fill="none"
            strokeWidth="15"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{ transition: "stroke-dasharray 1s linear" }}
            transform="rotate(-90 100 100)"
          />
        </svg>
        <div className="timer-content">
          <div className="timer-time-top">{`${Math.floor(initialTime / 60)} mins`}</div>
          <div className="timer-time">{formatTime(time)}</div>
          <div className="timer-title">{title}</div>
        </div>
      </div>
      <div className="timer-controls">
        <img
          src={isRunning ? "/nav-icons/pause.svg" : "/nav-icons/play.png"}
          alt="play"
          onClick={handlePlayPause}
          className="play-pause"
        />
        <img
          src="/nav-icons/x.png"
          alt="x"
          onClick={handleDelete}
          className="x"
        />
      </div>
    </div>
  );
};

export default Timer;
