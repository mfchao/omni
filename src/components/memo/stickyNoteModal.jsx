import { useState, useRef, useEffect, useCallback } from "react";
import ReactModal from "react-modal";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition/lib/SpeechRecognition";
import {
  BrowserRouter as Router,
  Route,
  useLocation,
  Routes,
  useNavigate,
  HashRouter,
  Navigate,
} from "react-router-dom";
import { clearTranscript } from "react-speech-recognition/lib/actions";

const useCustomSpeechRecognition = () => {
  const [isListening, setisListening] = useState(false);

  const {
    transcript,
    resetTranscript,
    listening,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const startListening = useCallback(() => {
    if (browserSupportsSpeechRecognition) {
      setisListening(true);
      SpeechRecognition.startListening({ continuous: true });
    }
  }, [browserSupportsSpeechRecognition]);

  const stopListening = useCallback(() => {
    setisListening(false);
    SpeechRecognition.stopListening();
    resetTranscript();
  }, [resetTranscript]);

  return {
    transcript,
    startListening,
    stopListening,
    isListening,
    listening,
  };
};

function StickyNoteModal({ isOpen, onClose, onAdd }) {
  const [content, setContent] = useState("");
  const todayDate = new Date().toISOString().split("T")[0];
  const placeholderName = "John Doe";
  const { resetTranscript } = useSpeechRecognition();

  const { transcript, startListening, stopListening, isListening, listening } =
    useCustomSpeechRecognition();

  const handleTextSubmit = (e) => {
    if (transcript) {
      handleMicrophoneClick();
      onAdd(todayDate, placeholderName, transcript);
      setContent("");
      resetTranscript();
      onClose();
    } else {
      alert("Please enter some text");
    }
  };

  const handleMicrophoneClick = () => {
    if (isListening) {
      stopListening();
      setContent(transcript);
      resetTranscript();
    } else {
      startListening();
    }
  };

  // console.log(transcript);

  useEffect(() => {
    SpeechRecognition.startListening({ continuous: true });

    return () => {
      SpeechRecognition.stopListening();
    };
  }, []);

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
            placeholder={`${transcript ? transcript : "Say Something..."}`}
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
