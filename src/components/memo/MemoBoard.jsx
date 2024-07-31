import { useState } from "react";
import StickyNote from "./stickyNote";
import StickyNoteModal from "./stickyNoteModal";
import CanvasNote from "./canvasNote";

function MemoBoard() {
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [noteType, setNoteType] = useState("");
  const [isCanvasVisible, setIsCanvasVisible] = useState(false);

  const addNote = (date, from, content, isDrawing) => {
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        date,
        from,
        content,
        isDrawing,
        timeAgo: calculateTimeAgo(date),
      },
    ]);
  };

  const handleAddNote = () => {
    setIsModalOpen(true);
  };

  const handleNoteTypeSelection = (type) => {
    setNoteType(type);
    setIsModalOpen(false);
    if (type === "drawing") {
      setIsCanvasVisible(true);
    } else {
      setIsCanvasVisible(false);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNoteType("");
  };

  const handleAddTextNote = (date, from, content) => {
    setNotes([{ date, from, content, isDrawing: false }, ...notes]);
    handleCloseModal();
  };

  const handleAddDrawingNote = (date, from, content) => {
    setNotes([{ date, from, content, isDrawing: true }, ...notes]);
    handleCloseModal();
  };

  const calculateTimeAgo = (date) => {
    const now = new Date();
    const noteDate = new Date(date);
    const diff = Math.floor((now - noteDate) / (1000 * 60));

    if (diff < 60) return `${diff} minutes ago`;
    const hours = Math.floor(diff / 60);
    if (hours < 24) return `${hours} hours ago`;
    const days = Math.floor(hours / 24);
    return `${days} days ago`;
  };

  return (
    <div className="memo">
      <h1>Memos</h1>
      <button onClick={() => setIsModalOpen(true)}>+</button>
      {isModalOpen && (
        <div>
          <button onClick={() => handleNoteTypeSelection("text")}>Text</button>
          <button onClick={() => handleNoteTypeSelection("drawing")}>
            Drawing
          </button>
        </div>
      )}
      {isCanvasVisible && (
        <CanvasNote
          onAdd={handleAddDrawingNote}
          onClose={() => setIsCanvasVisible(false)}
        />
      )}
      <StickyNoteModal
        isOpen={!isCanvasVisible && noteType === "text"}
        onClose={handleCloseModal}
        onAdd={handleAddTextNote}
      />
      <div className="sticky-posts-container">
        {notes.map((note, index) => (
          <StickyNote
            key={index}
            date={note.date}
            from={note.from}
            content={note.content}
            timeAgo={note.timeAgo}
            isDrawing={note.isDrawing}
          />
        ))}
      </div>
    </div>
  );
}

export default MemoBoard;
