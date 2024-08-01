import { useState } from "react";
import ReactModal from "react-modal";
import Timer from "./timer";
import "./Timer.css";

function TimerModal({ isOpen, onClose, onAdd }) {
  const [title, setTitle] = useState("");
  const [initialTime, setInitialTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const durationNumber = parseInt(initialTime, 10);
    if (!isNaN(durationNumber)) {
      onAdd(title, durationNumber);
      setTitle("");
      setInitialTime("");
      onClose();
    } else {
      alert("Please enter a valid number");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="timer-modal-overlay">
      <div className="timer-modal-content">
        <h2>Add A New Timer</h2>
        <form onSubmit={handleSubmit}>
          <div className="timer-form">
            <label>
              Timer Name:
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </label>

            <div>
              <label>
                Duration (seconds):
                <input
                  type="number"
                  value={initialTime}
                  onChange={(e) => setInitialTime(e.target.value)}
                  required
                />
              </label>
            </div>
          </div>

          <button type="submit"> Add Timer</button>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
}

export default TimerModal;
