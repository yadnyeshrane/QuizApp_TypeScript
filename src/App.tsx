import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { QuestionCard } from "./Components/QuestionCard";
import { fetchData } from "./Components/Api";

const TOTAL_QUESTION = 10;
const startTrigger = async () => {
  const data = await fetchData(10, "easy");
  console.log("question card", data);
};

const checkAanswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

const nextQuestion = () => {};

function App() {
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setuserAnswer] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  return (
    <div className="App">
      <h1>React Quiz App</h1>
      <button className="start" onClick={startTrigger}>
        Start
      </button>
      <p className="score">Score:</p>
      <p>Loading...spinner</p>
      {/* <QuestionCard
        questionNr={number+1}
        totalQuestion={TOTAL_QUESTION}
        callback={checkAanswer}

        /> */}
      <button className="next" onClick={nextQuestion}>
        Next
      </button>
    </div>
  );
}

export default App;
