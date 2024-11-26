import React, { useState } from 'react';
import Input from './components/Input';
import Quiz from './components/Quiz';
import Score from './components/Score';

const App = () => {
  const [name, setName] = useState("");
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const startQuiz = () => {
    setQuizStarted(true);
    setQuizFinished(false);
  };

  const finishQuiz = () => {
    setQuizFinished(true);
    setQuizStarted(false);
  };

  const restartQuiz = () => {
    setName("");
    setScore(0);
    setQuizStarted(false);
    setQuizFinished(false);
  };

  return (
    <div className="App">
      {!quizStarted && !quizFinished && <Input setName={setName} startQuiz={startQuiz} />}
      {quizStarted && <Quiz name={name} setScore={setScore} finishQuiz={finishQuiz} />}
      {quizFinished && <Score score={score} restartQuiz={restartQuiz} />}
    </div>
  );
};

export default App;
