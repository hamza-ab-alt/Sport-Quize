import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import QuizQestion from "./QuizQestion";
import "./quiz.css";

function QuizPage() {
  const location = useLocation();
  const quizData = location.state?.questions || [];
  const navigate = useNavigate();

  const [QuizValues, setQuizValues] = useState({
    timer: 6,
    indice: 0,
    scoreP: 0,
    scoreN: 0,
    qestionN: 1,
    reponseP: [],
    reponseN: [],
  });

 useEffect(() => {
  const interval = setInterval(() => {
    setQuizValues((prev) => {

      
      if (prev.indice >= quizData.length - 1 && prev.timer <= 1) {
        clearInterval(interval);

        
        navigate("/results", {
          state: {
            scoreP: prev.scoreP,
            scoreN: prev.scoreN,
            total: quizData.length,
          },
        });

        return prev;
      }

      if (prev.timer <= 0) {
        return {
          ...prev,
          indice: prev.indice + 1,
          timer: 6,
          qestionN: prev.qestionN + 1,
        };
      }

      return {
        ...prev,
        timer: prev.timer - 1,
      };
    });
  }, 1000);

  return () => clearInterval(interval);
}, [quizData.length, navigate]);

  if (!quizData.length) {
    return <h2>No questions found. Go back and start quiz again.</h2>;
  }

  return (
    <>
      <div className="UPFP">
        <div>
          <div className="Timer">{QuizValues.timer}</div>
          <div className="QestionP">{QuizValues.qestionN}</div>

          <div className="Scores">
            <div>
              <p>{QuizValues.scoreP}</p>
              <div className="scoreP"></div>
            </div>
            <div>
              <p>{QuizValues.scoreN}</p>
              <div className="scoreN"></div>
            </div>
          </div>
        </div>
      </div>

      <QuizQestion
        qes={quizData[QuizValues.indice]}
        setqes={setQuizValues}
      />
    </>
  );
}

export default QuizPage;