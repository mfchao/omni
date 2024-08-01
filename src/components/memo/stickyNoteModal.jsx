import { useState, useRef, useEffect } from "react";
import ReactModal from "react-modal";

function StickyNoteModal({ isOpen, onClose, onAdd }) {
  const [content, setContent] = useState("");
  const todayDate = new Date().toISOString().split("T")[0];
  const placeholderName = "John Doe";

  const handleTextSubmit = (e) => {
    if (content) {
      onAdd(todayDate, placeholderName, content);
      setContent("");
      onClose();
    } else {
      alert("Please enter some text");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="text-modal-overlay">
      <div className="text-modal-content">
        {/* <label>Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          placeholder="Write your note here..."
        /> */}

        <div className="mic-container">
          <img src="/nav-icons/mic.svg" alt="Mic Icon" className="mic-icon" />
          {/* <span className="say" >
            Say something
          </span> */}
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            placeholder="Say Something..."
          />
        </div>
        <button onClick={() => handleTextSubmit()}>Add Note</button>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default StickyNoteModal;
