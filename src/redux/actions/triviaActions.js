export const SUBMIT_ANSWER = "SUBMIT_ANSWER";
export const NEXT_QUESTION = "NEXT_QUESTION";
export const FETCH_QUESTION_REQUEST = "FETCH_QUESTION_REQUEST";
export const FETCH_QUESTION_SUCCESS = "FETCH_QUESTION_SUCCESS";
export const FETCH_QUESTION_FAILURE = "FETCH_QUESTION_FAILURE";
export const FINISH_QUIZ = "FINISH_QUIZ";

export const submitAnswer = (answer) => ({
  type: SUBMIT_ANSWER,
  payload: answer,
});

export const nextQuestion = () => ({
  type: NEXT_QUESTION,
});

export const fetchQuestion = () => ({
  type: FETCH_QUESTION_REQUEST,
});
