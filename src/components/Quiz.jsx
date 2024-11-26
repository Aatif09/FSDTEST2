import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "../components/Quiz.css"

const Quiz = ({ name, setScore, finishQuiz }) => {
  const questions = [
    { question: "Which of the following is the correct name of React.js?", options: ["React", "React.js", "ReactJS", "All of the above"], correct: 3 },
    { question: "What is JSX?", options: ["JavaScript XML", "JSON", "JavaScript Extension", "None of the above"], correct: 0 },
    { question: "What is the default port where the webpack-server runs?", options: ["3000", "8080", "4200", "3030"], correct: 1 },
    { question: "React is a ___?", options: ["Library", "Framework", "Language", "None of the above"], correct: 0 },
    { question: "React.js is written in?", options: ["C", "C++", "JavaScript", "Python"], correct: 2 },
    { question: "What is the default method to render elements in React?", options: ["ReactDOM.create()", "ReactDOM.write()", "ReactDOM.render()", "None"], correct: 2 },
    { question: "Which is used to create components in React?", options: ["Classes", "Functions", "Both", "None"], correct: 2 },
    { question: "Props in React are?", options: ["Immutable", "Mutable", "Both", "None"], correct: 0 },
    { question: "What is used to pass data to components?", options: ["Props", "State", "Both", "None"], correct: 0 },
    { question: "State in React is?", options: ["Immutable", "Mutable", "Both", "None"], correct: 1 },
  ];

  const [current, setCurrent] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    if (timeLeft === 0) {
      nextQuestion();
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswer = (index) => {
    if (index === questions[current].correct) {
      setCorrect(correct + 1);
    }
    if (current === questions.length - 1) {

    } else {
      nextQuestion();
    }
  };

  const nextQuestion = () => {
    const nextQuestion = current + 1;
    if (nextQuestion < questions.length) {
      setCurrent(nextQuestion);
      setTimeLeft(15);
    }
  };

  const finishQuizs = () => {
    setScore(correct * 5);
    finishQuiz();
  };

  return (
    <div className="aa">
      <h2>Contestant: <span style={{ color: "orange" }}>{name}</span></h2>
      <div className="bb">
        <div style={{ width: 50, height: 50 }}>
          <CircularProgressbar
            value={(timeLeft / 15) * 100}
            text={`${timeLeft}`}
            styles={buildStyles({
              textSize: "24px",
              textColor: "orange",
              pathColor: "orange",
              trailColor: "#d6d6d6",
            })}
          />
        </div>
        <div className="cc">
          <p><b>{correct}</b>/10</p>
        </div>
        <p>{current + 1}/{questions.length}</p>
      </div>
      <div className="dd">
        <p className="ee">{questions[current].question}</p>
        <ul className="ff">
          {questions[current].options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleAnswer(index)}
              className="option"
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
      {current === questions.length - 1 ? (
        <button className="gg" onClick={finishQuizs}>Show Result</button>
      ) : (
        <button className="hh" onClick={nextQuestion}>Next Question</button>
      )}
    </div>
  );
};

export default Quiz;
