import { useState, useEffect } from "react";
import Timer from "./timer";
import TimerModal from "./timerModal";
import "./Timer.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition/lib/SpeechRecognition";

const TimerDashboard = () => {
  const [timers, setTimers] = useState([
    { id: 1, intialTime: 180, title: "Roast" },
    // { id: 2, intialTime: 1200, title: "Vegetables" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { transcript, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    SpeechRecognition.startListening({ continuous: true });

    return () => {
      SpeechRecognition.stopListening();
    };
  }, []);

  const addTimer = (name, duration) => {
    setTimers([
      ...timers,
      { id: Date.now(), intialTime: duration, title: name },
    ]);
  };

  useEffect(() => {
    // set timer with voice
    if (transcript.toLowerCase().includes("set an oven timer for 30 seconds")) {
      addTimer("oven", 30);
      resetTranscript();
    }
  }, [transcript, resetTranscript]);

  const deleteTimer = (title) => {
    setTimers((prevTimers) =>
      prevTimers.filter((timer) => timer.title !== title)
    );
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="timer-dashboard">
      <div className="timer-dashboard-header">
        <img
          src="/nav-icons/add.svg"
          alt="add"
          onClick={openModal}
          className="add-timer-btn"
        />
      </div>
      <div className="timer-dashboard-content">
        {timers.map((timer) => (
          <Timer
            key={timer.id}
            initialTime={timer.intialTime}
            title={timer.title}
            onDelete={deleteTimer}
          />
        ))}
      </div>
      <TimerModal isOpen={isModalOpen} onClose={closeModal} onAdd={addTimer} />
    </div>
  );
};

export default TimerDashboard;
