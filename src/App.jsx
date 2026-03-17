import "./App.css";
import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  function handleChange(e) {
    const value = e.target.value;
    setNumber(value);

    if (value === "") {
      setMessage(""); 
    } else if (Number(value) > 0) {
      setMessage(" Number is valid");
    } else {
      setMessage("Please enter a number greater than 0");
    }
  }

  return (
    <>
      <div className="container">
        <h2>Pick Your Questions and Go!</h2>
        <form>
          <label>Number of Questions</label>
          <input
            value={number}
            onChange={handleChange}
            type="number"
            placeholder="Enter a number"
          />
          <p className="message">{message}</p>

          <label>Difficulty</label>
          <select>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>

          <button>Start Quiz</button>
        </form>
      </div>
    </>
  );
}
// default function App()
