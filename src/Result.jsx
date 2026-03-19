import React, { useState } from "react";
import "./App.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function Result() {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { scoreP = 0, scoreN = 0, total = 0 } = location.state || {};

  return (
    <div className={`result-container ${darkMode ? "dark" : ""}`}>
      <div className="result-card">

        <div className="result-title">QUIZ quiz</div>

        <div className="score-box">
          <h2>🎉 Congratulations 🎉</h2>
          <p>SCORE FINAL</p>

          <div className="score-value">{scoreP}/{total}</div>
        </div>

        <div className="row">
          <span className="label">Right Questions</span>
          <span className="value green">{scoreP}</span>
        </div>

        <div className="row">
          <span className="label">False Questions</span>
          <span className="value red">{scoreN}</span>
        </div>

        <div className="button-row">
          <button className="btn" onClick={() => navigate("/")}>
            Back To Home
          </button>

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