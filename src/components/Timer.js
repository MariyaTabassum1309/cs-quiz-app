import React, { useEffect, useState } from 'react';
import './Timer.css';

const Timer = ({ initialTime = 180, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, onTimeUp]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="timer">
      <div className="timer-label">Time Left</div>
      <div className="timer-display">
        {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
      </div>
      <div className="timer-progress">
        <div 
          className="timer-progress-bar"
          style={{ width: `${(timeLeft / initialTime) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Timer;