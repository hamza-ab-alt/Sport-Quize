import "./App.css";

export default function App() {
  return (
    <>
    <div className="container">
      <h2>Pick Your Questions and Go!</h2>
      <form>
          <label>Number of Questions</label>
    <input type="number" />

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
