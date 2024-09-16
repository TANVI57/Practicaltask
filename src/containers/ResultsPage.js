import React from "react";
import { useSelector } from "react-redux";

const ResultsPage = () => {
  const { totalQuestions, correctCount, incorrectCount } = useSelector(
    (state) => state.trivia
  );

  return (
    <div>
      <h1>Results</h1>
      <p>Total Questions Served: {totalQuestions}</p>
      <p>Total Correct Answers: {correctCount}</p>
      <p>Total Incorrect Answers: {incorrectCount}</p>
    </div>
  );
};

export default ResultsPage;
