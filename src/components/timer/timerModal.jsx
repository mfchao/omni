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

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Add Timer"
      ariaHideApp={false}
    >
      <h2>Add A New Timer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Timer Name:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
        </div>
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
        <button type="submit"> Add Timer</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </ReactModal>
  );
}

export default TimerModal;
