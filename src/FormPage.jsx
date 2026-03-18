import { useEffect, useState } from "react";
import QuizQestion from "./QuizQestion";
import "./form.css"
function FormPage() {
    const quizData = [
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Film",
    question: "In Mulan (1998), who is the leader of the Huns?",
    correct_answer: "Shan Yu",
    incorrect_answers: ["Chien-Po", "Li Shang", "Fa Zhou"]
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Art",
    question: "What nationality was the famous artist Van Gogh?",
    correct_answer: "Dutch",
    incorrect_answers: ["French", "Russian", "Polish"]
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Art",
    question: "Paul Gauguin moved to which country in 1895?",
    correct_answer: "Tahiti",
    incorrect_answers: ["France", "Atuona", "Lithuania"]
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "What kind of memory is used on memory cache?",
    correct_answer: "SRAM",
    incorrect_answers: ["DRAM", "ROM", "Flash"]
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Japanese Anime & Manga",
    question: "Which character in Touhou is able to control dolls?",
    correct_answer: "Alice Margatroid",
    incorrect_answers: ["Marisa Kirisame", "Clownpiece", "Flandre Scarlet"]
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Entertainment: Video Games",
    question: "In the game \"Until Dawn\" Emily is the only playable character who can be killed by another playable character directly.",
    correct_answer: "True",
    incorrect_answers: ["False"]
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Entertainment: Video Games",
    question: "In Monster Hunter Generations, which of these hunter arts are exclusive to the Longsword?",
    correct_answer: "Unhinged Spirit",
    incorrect_answers: ["Shoryugeki", "Provoke", "Demon Riot"]
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Entertainment: Video Games",
    question: "Which Super Mario video game when they introduce Bowser Jr. for the first time?",
    correct_answer: "Super Mario Sunshine",
    incorrect_answers: ["Mario Party series", "Super Mario Galaxy", "Mario & Luigi: Bowser's Inside Story + Bowser Jr.'s Journey"]
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What was the name of the first Bulgarian personal computer?",
    correct_answer: "IMKO-1",
    incorrect_answers: ["Pravetz 82", "Pravetz 8D", "IZOT 1030"]
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Music",
    question: "Which British band did Keith Moon play in until his death in 1978?",
    correct_answer: "The Who",
    incorrect_answers: ["The Kinks", "The Yardbirds", "The Small Faces"]
  }
];
  const [QuizValues,setQuizValues]=useState({
    timer:6,
    indice:0,
    scoreP:0,
    scoreN:0,
    qestionN:1,
    reponseP:[],
    reponseN:[],
  })
useEffect(() => {
  const interval = setInterval(() => {
    setQuizValues(prev => {
      if (prev.timer <= 0) {
        return {
          ...prev,
          indice: prev.indice + 1,
          timer: 6,
          qestionN:prev.qestionN+1,
        };
      }
      if(prev.indice==9){
        if(prev.timer==1){
          clearInterval(interval)
        }
      }

      return {
        ...prev,
        timer: prev.timer - 1,
      };
    });
  }, 1000);

  return () => clearInterval(interval);
}, []);
    return(
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
         <QuizQestion qes={quizData[QuizValues.indice]} setqes={setQuizValues}  />
        </>
    )
}
export default  FormPage;