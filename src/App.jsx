import "./App.css";
import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [difficulty, setDifuclty]=useState("easy")
const [question, setquestion]=useState([])
const [loading, setloading]=useState(false)


async function handleStart(e) {
  e.preventDefault(); // bach form mabghach treload page

  if (Number(number) <= 0) {
    setMessage("Please enter a number greater than 0");
    return;
  }

  setloading(true);
  try {
    const res = await fetch(`https://opentdb.com/api.php?amount=${number}&difficulty=${difficulty}&type=multiple`);
    const data = await res.json();
    setquestion(data.results);
  } catch (err) {
    console.error(err);
  }
  setloading(false);
}




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
        <form onSubmit={handleStart}>
          <label>Number of Questions</label>
          <input
            value={number}
            onChange={handleChange}
            type="number"
            placeholder="Enter a number"
          />
          <p className="message">{message}</p>

          <label>Difficulty</label>
          <select value={difficulty} onChange={(e)=> difficulty(e.target.value)}>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>

          <button type="submit">Start Quiz</button>
        </form>
        {loading && <div ><p>loading data ....</p><div className="spinner"></div></div>}

{question.length > 0 && (
  <ul>
    {question.map((q, i) => (
      <li key={i}>{q.question}</li>
    ))}
  </ul>
  )
  }
  </div>
</>)
}
// default function App()
