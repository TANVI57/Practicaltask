import React from "react";
import { useSelector } from "react-redux";
import Question from "./components/Question";
import Result from "./components/Result";

const App = () => {
  const isQuizFinished = useSelector((state) => state.isQuizFinished);

  return <div>{!isQuizFinished ? <Question /> : <Result />}</div>;
};

export default App;
