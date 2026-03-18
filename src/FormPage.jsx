import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormPage() {
  const [number, setNumber] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleStart(e) {
    e.preventDefault();

    if (Number(number) <= 0) {
      setMessage("Please enter a valid number");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        `https://opentdb.com/api.php?amount=${number}&difficulty=${difficulty}&type=multiple`
      );
      const data = await res.json();

      // 👉 SEND DATA HERE
      navigate("/quiz", { state: { questions: data.results } });

    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  }

  return (
    <div>
      <h2>Start Quiz</h2>

      <form onSubmit={handleStart}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Number of questions"
        />

        <p>{message}</p>

        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <button type="submit">
          {loading ? "Loading..." : "Start"}
        </button>
      </form>
    </div>
  );
}