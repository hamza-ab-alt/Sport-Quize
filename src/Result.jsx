import React, { useState } from "react";
import "./App.css";

export default function Result({ score = 8, total = 20, correct = 15, wrong = 5 }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`result-container ${darkMode ? "dark" : ""}`}>
      <div className="result-card">

        <div className="result-title">QUIZ quiz</div>

        <div className="score-box">
          <h2>🎉 Congratulations 🎉</h2>
          <p>SCORE FINAL</p>
          <div className="score-value">{score}/{total}</div>
        </div>

        <div className="row">
          <span className="label">Right Questions</span>
          <span className="value green">{correct}</span>
        </div>

        <div className="row">
          <span className="label">False Questions</span>
          <span className="value red">{wrong}</span>
        </div>

        {/* زر Back و زر Dark Mode جنب بعضهم */}
        <div className="button-row">
          <button className="btn">Back To Home</button>
          <button 
            className="btn theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

      </div>
    </div>
  );
}