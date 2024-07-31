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

  const radius = 70;
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
        <svg width="150" height="150">
          <circle
            cx="75"
            cy="75"
            r={radius}
            stroke="gray"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="75"
            cy="75"
            r={radius}
            stroke="red"
            fill="none"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{ transition: "stroke-dasharray 1s linear" }}
            transform="rotate(-90 75 75)"
          />
        </svg>
        <div className="timer-content">
          <div className="timer-time-top">{`${Math.floor(initialTime / 60)} mins`}</div>
          <div className="timer-time">{formatTime(time)}</div>
          <div className="timer-title">{title}</div>
        </div>
      </div>
      <div className="timer-controls">
        <button onClick={handlePlayPause}>
          {isRunning ? "Pause" : "Play"}
        </button>
        <button onClick={handleDelete}>X</button>
      </div>
    </div>
  );
};

export default Timer;
