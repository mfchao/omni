import { useState, useRef } from "react";

function CanvasNote({ onAdd, onClose }) {
  const [from, setFrom] = useState("");
  const canvasRef = useRef(null);
  let isDrawing = false;

  let isDrawingNow = false;
  const startDrawing = (e) => {
    isDrawingNow = true;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const draw = (e) => {
    if (!isDrawingNow) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    isDrawingNow = false;
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (canvas && ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const handleAddDrawing = () => {
    if (from) {
      const canvas = canvasRef.current;
      const content = canvas ? canvas.toDataURL() : "";
      onAdd(new Date().toISOString().split("T")[0], from, content);
      onClose();
    } else {
      alert("Please fill in the from field");
    }
  };

  return (
    <div>
      <h2>Draw your note</h2>
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
      <canvas
        ref={canvasRef}
        width={400}
        height={300}
        style={{ border: "1px solid black" }}
        onMouseDown={(e) => startDrawing(e)}
        onMouseMove={(e) => draw(e)}
        onMouseUp={() => stopDrawing()}
      />
      <button type="button" onClick={() => clearCanvas}>
        Clear
      </button>
      <button type="button" onClick={handleAddDrawing}>
        Add Drawing Note
      </button>
      <button type="button" onClick={() => onClose}>
        Cancel
      </button>
    </div>
  );
}

export default CanvasNote;
