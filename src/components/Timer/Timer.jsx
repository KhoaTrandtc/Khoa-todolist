// Timer.js
import React, { useState, useEffect } from "react";
import "./Timer.css";
import "bootstrap-icons/font/bootstrap-icons.css" 



const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(0); // Initial time in seconds (5 minutes)
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timerInterval;

    if (running && timeLeft > 0) {
      timerInterval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft <= 0) {
      setRunning(false);
    }

    return () => clearInterval(timerInterval);
  }, [running, timeLeft]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  const toggleTimer = () => {
    if (timeLeft > 0) {
      setRunning((prevTime) => !prevTime);
    }
  };

  const pauseTimer = () => {
    setRunning(false);
  };

  const resetTimer = () => {
    setRunning(false);
    setTimeLeft(0);
  };

  return (
    <div className="timer-container container bg-light card mt-5 rounded-3 shadow-lg text-center">
      <p class="card-h fw-semibold card-border fs-5 ">
      ⌛ Timer for work
      </p>
      <div className="card-body text-primary p-3 mt-3 mb-3">
        {/* row col */}
        <div>
          <div className="row">
            <div className="col input-group">
              <input
                className="form-control"
                type="number"
                value={Math.floor(timeLeft / 60)}
                onChange={(e) =>
                  setTimeLeft(
                    (parseInt(e.target.value) || 0) * 60 + (timeLeft % 60)
                  )
                }
                min="0"
              />
              <label for="minutes" class="input-group-text">
                minutes
              </label>
            </div>
            <div className="col input-group">
              <input
                className="form-control"
                type="number"
                value={timeLeft % 60}
                onChange={(e) =>
                  setTimeLeft(
                    Math.floor(timeLeft / 60) * 60 +
                      (parseInt(e.target.value) || 0)
                  )
                }
                min="0"
                max="59"
              />

              <label for="seconds" class="input-group-text">
                seconds
              </label>
            </div>
          </div>
        </div>

        <div className="timer-value display-3 mt-3 mb-3 fw-normal">
          {formatTime(timeLeft)}
        </div>
        <div class="btn-group" role="group" aria-label="Basic outlined example">
          <button
            type="button"
            class="btn btn-outline-primary btn-pausestart"
            onClick={toggleTimer}
          >
            {running ? 'Pause' : 'Start'}
          </button>
          
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={resetTimer}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
