import React, { useState, useEffect } from "react";

export default function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let intervalID;

    if (isRunning) {
      intervalID = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalID);
    }

    return () => clearInterval(intervalID); // Cleanup the interval on unmount
  }, [isRunning]);

  const startStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const reset = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignitems: "center",
  }
  const buttonStyle = {
    display: "flex",
    justifyContent: "center",
    alignitems: "center",

  }
  return (
    <div>
      <h1 style={containerStyle}>Stopwatch</h1>
      <p style={containerStyle}>Time: {formatTime(elapsedTime)}</p>
      <div style={buttonStyle}>
        <button  onClick={startStop}>{isRunning ? "Stop" : "Start"}</button>
        <button  onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
