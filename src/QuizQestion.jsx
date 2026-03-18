import { useEffect, useMemo, useState } from "react";

export default function QuizQestion({ qes, setqes }) {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setSelected(null);
  }, [qes.question]);

  const answers = useMemo(() => {
    const random = Math.floor(Math.random() * (qes.incorrect_answers.length + 1));
    let arr = [...qes.incorrect_answers];
    arr.splice(random, 0, qes.correct_answer);
    return arr;
  }, [qes.question]);

  function handleAnswer(answer) {
    setSelected(answer);

    setqes(prev => {
      if(answer === qes.correct_answer) {
        return {
          ...prev,
          scoreP: prev.scoreP + 1,
          reponseP: [...prev.reponseP, answer],
          reponseN: [...prev.reponseN, null], 
        };
      } else {
        return {
          ...prev,
          scoreN: prev.scoreN + 1,
          reponseN: [...prev.reponseN, answer],
          reponseP: [...prev.reponseP, null],
        };
      }
    });
  }

  return (
    <div className="bodyQ">
      <div className="qesP">
        <p>{qes.question}</p>
      </div>
      <ul className="choixQ">
        {answers.map((it) => {
          let bg = "";
          if (selected) {
            if (it === qes.correct_answer) bg = "green";
            else if (it === selected) bg = "red";
          }

          return (
            <li key={it}>
              <button
                disabled={!!selected}
                style={{ background: bg }}
                onClick={() => handleAnswer(it)}
              >
                {it}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}