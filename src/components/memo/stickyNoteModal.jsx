import { useState, useRef, useEffect } from "react";
import ReactModal from "react-modal";

function StickyNoteModal({ isOpen, onClose, onAdd }) {
  const [from, setFrom] = useState("");
  const [content, setContent] = useState("");

  const todayDate = new Date().toISOString().split("T")[0];

  const handleTextSubmit = (e) => {
    e.preventDefault();
    if (todayDate && from && content) {
      onAdd(todayDate, from, content);
      resetForm();
      onClose();
    } else {
      alert("Please fill in all fields");
    }
  };

  const resetForm = () => {
    setFrom("");
    setContent("");
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Add Sticky Note"
      ariaHideApp={false}
    >
      <h2>Add New Sticky Note</h2>
      <form onSubmit={handleTextSubmit}>
        <div>
          <label>
            Date:
            <input type="date" value={todayDate} readOnly />
          </label>
        </div>
        <div>
          <label>
            From:
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Content:
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </label>
        </div>

        <button type="submit">Add Note</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </ReactModal>
  );
}

export default StickyNoteModal;
