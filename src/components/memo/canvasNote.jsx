import { useState, useRef } from "react";

function CanvasNote({ onAdd, onClose }) {
  const [from, setFrom] = useState("");
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const placeholderName = "John Doe";

  const getCanvasCoordinates = (event) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX || event.touches[0].clientX;
    const y = event.clientY || event.touches[0].clientY;

    return {
      x: x - rect.left,
      y: y - rect.top,
    };
  };

  const startDrawing = (event) => {
    setIsDrawing(true);
    const { x, y } = getCanvasCoordinates(event);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.moveTo(x, y);
      ctx.beginPath();
    }
  };

  const draw = (event) => {
    if (!isDrawing) return;
    const { x, y } = getCanvasCoordinates(event);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  };

  const stopDrawing = (event) => {
    event.preventDefault();
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (canvas && ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const handleAddDrawing = () => {
    if (placeholderName) {
      const canvas = canvasRef.current;
      const content = canvas ? canvas.toDataURL() : "";
      onAdd(new Date().toISOString().split("T")[0], placeholderName, content);
      onClose();
    } else {
      alert("Please fill in the from field");
    }
  };

  return (
    <div className="text-modal-overlay">
      <div className="text-modal-content">
        <canvas
          ref={canvasRef}
          width={window.innerWidth}
          height={window.innerHeight - 900} // Adjust for height
          className="canvas"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
        />
        <div className="mic-container">
          <img
            src="/nav-icons/pencil.svg"
            alt="Mic Icon"
            className="mic-icon"
          />
          <span className="say">Draw something</span>
        </div>
        <button onClick={() => handleAddDrawing()}>Add Note</button>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default CanvasNote;
