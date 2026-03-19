import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormPage from "./FormPage";
import QuizPage from "./QuizPage";
import "./App.css";
import Result from "./Result";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/results" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}