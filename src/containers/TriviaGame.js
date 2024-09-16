import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestion, submitAnswer } from "../redux/actions/triviaActions";
import Question from "../components/Question";
import AnswerOptions from "../components/AnswerOptions";

const TriviaGame = () => {
  const dispatch = useDispatch();
  const {
    question,
    answers,
    correctAnswer,
    explanation,
    currentQuestion,
    totalQuestions,
    correctCount,
    incorrectCount,
  } = useSelector((state) => state.trivia);

  useEffect(() => {
    dispatch(fetchQuestion());
  }, [dispatch]);

  const handleAnswer = (answer) => {
    dispatch(submitAnswer(answer));
  };

  const handleNext = () => {
    dispatch(fetchQuestion());
  };

  if (!question) return <p>Loading...</p>;

  return (
    <div>
      <Question text={question} />
      <AnswerOptions options={answers} onAnswer={handleAnswer} />
      {correctAnswer !== null && (
        <div>
          <p>{correctAnswer ? "Correct!" : "Wrong!"}</p>
          {!correctAnswer && <p>Correct answer: {explanation}</p>}
          <button onClick={handleNext}>Next</button>
        </div>
      )}
    </div>
  );
};

export default TriviaGame;
