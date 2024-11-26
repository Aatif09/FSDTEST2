import React, { useState } from 'react';
import "../components/Input.css"

const Input = ({ setName, startQuiz }) => {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = () => {
    if (input.trim()) {
      setName(input);
      startQuiz();
    } else {
      setIsValid(false);
    }
  };
  const handleChange = (e) => {
    setInput(e.target.value);
    if (!isValid) {
      setIsValid(true);
    }
  };
  return (
    <div className="container">
      <h1>ABES Quiz Platform</h1>
      <label>Contestant Name:</label>
      <input
        type="text"
        placeholder="Zaroori hai :Please enter your name "
        value={input}
        onChange={handleChange}
        className={isValid ? "input" : "input error"}
      />
      {!isValid && <p className="error">Name is required</p>}
      <button onClick={handleSubmit}>Start Quiz</button>
    </div>
  );
};

export default Input;
