import React from "react";

const Score = ({ score, restartQuiz }) => {
  const isLowScore = score < 10;
  const bgColor = isLowScore ? "red" : "green";
  const message = isLowScore ? "Oops!" : "Awesome!";

  return (
    <div
      className="aa"
      style={{ backgroundColor: bgColor, display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}
    >
      <div className="bb" style={{ color: "white", textAlign: "center", padding: "20px 40px", borderRadius: "8px" }}>
        <h1>{message}</h1>
        <p>Your score is {score} out of 50</p>
        <button
          style={{
            backgroundColor: "white",
            color: bgColor,
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={restartQuiz}
        >
          Start Over
        </button>
      </div>
    </div>
  );
};

export default Score;
