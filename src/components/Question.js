import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  submitAnswer,
  nextQuestion,
  fetchQuestion,
} from "../redux/actions/triviaActions";
import {
  Button,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Paper,
} from "@mui/material";
import "./Question.css";

const Question = () => {
  const dispatch = useDispatch();
  const { currentQuestion, isQuizFinished } = useSelector((state) => state);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  useEffect(() => {
    if (!currentQuestion) {
      dispatch(fetchQuestion());
    }
  }, [dispatch, currentQuestion]);

  const handleSubmit = () => {
    if (!selectedAnswer) {
      alert("Please select an answer");
      return;
    }
    dispatch(submitAnswer(selectedAnswer));
  };

  const handleNext = () => {
    setSelectedAnswer("");
    dispatch(nextQuestion());
    dispatch(fetchQuestion());
  };

  if (isQuizFinished) return <div>Quiz Finished!</div>;

  return currentQuestion ? (
    <div className="container">
      <Paper className="paper">
        <Typography className="question" variant="h5">
          {currentQuestion.question}
        </Typography>
        <RadioGroup
          onChange={(e) => setSelectedAnswer(e.target.value)}
          value={selectedAnswer}
          className="radioGroup"
        >
          {currentQuestion.incorrect_answers
            .concat(currentQuestion.correct_answer)
            .map((answer, index) => (
              <FormControlLabel
                key={index}
                value={answer}
                control={<Radio />}
                label={answer}
              />
            ))}
        </RadioGroup>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          className="button"
        >
          Submit
        </Button>
        {selectedAnswer && (
          <div>
            {selectedAnswer !== currentQuestion.correct_answer && (
              <Typography color="error" className="resultText">
                Correct Answer: {currentQuestion.correct_answer}
              </Typography>
            )}
            <Button
              variant="outlined"
              onClick={handleNext}
              className="submitbutton"
            >
              Next
            </Button>
          </div>
        )}
      </Paper>
    </div>
  ) : null;
};

export default Question;
