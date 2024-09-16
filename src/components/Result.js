import React from "react";
import { useSelector } from "react-redux";
import { Typography, Button } from "@mui/material";
import "./Result.css";

const Result = () => {
  const { correctAnswers, incorrectAnswers } = useSelector((state) => state);

  return (
    <div className="result-container">
      <Typography variant="h4" className="title">
        Quiz Results
      </Typography>
      <Typography className="result-text">
        Total Correct Answers: {correctAnswers}
      </Typography>
      <Typography className="result-text">
        Total Incorrect Answers: {incorrectAnswers}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        className="play-again-button"
        onClick={() => window.location.reload()}
      >
        Play Again
      </Button>
    </div>
  );
};

export default Result;
