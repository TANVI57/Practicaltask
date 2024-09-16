import {
  FETCH_QUESTION_SUCCESS,
  SUBMIT_ANSWER,
  NEXT_QUESTION,
  FINISH_QUIZ,
} from "../actions/triviaActions";

const initialState = {
  currentQuestion: null,
  nextQuestion: null,
  currentIndex: 0,
  totalQuestions: 10,
  correctAnswers: 0,
  incorrectAnswers: 0,
  isQuizFinished: false,
};

const triviaReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTION_SUCCESS:
      if (state.currentQuestion === null) {
        return {
          ...state,
          currentQuestion: action.payload,
        };
      } else {
        return {
          ...state,
          nextQuestion: action.payload,
        };
      }
    case SUBMIT_ANSWER:
      const isCorrect = action.payload === state.currentQuestion.correct_answer;
      return {
        ...state,
        correctAnswers: isCorrect
          ? state.correctAnswers + 1
          : state.correctAnswers,
        incorrectAnswers: !isCorrect
          ? state.incorrectAnswers + 1
          : state.incorrectAnswers,
      };
    case NEXT_QUESTION:
      return {
        ...state,
        currentQuestion: state.nextQuestion,
        nextQuestion: null,
        currentIndex: state.currentIndex + 1,
      };
    case FINISH_QUIZ:
      return {
        ...state,
        isQuizFinished: true,
      };
    default:
      return state;
  }
};

export default triviaReducer;
