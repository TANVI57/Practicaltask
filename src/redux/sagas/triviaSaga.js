import { call, put, takeEvery, select } from "redux-saga/effects";
import {
  FETCH_QUESTION_REQUEST,
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_FAILURE,
  NEXT_QUESTION,
  FINISH_QUIZ,
} from "../actions/triviaActions";

function* fetchQuestionSaga() {
  try {
    const response = yield call(() =>
      fetch("https://opentdb.com/api.php?amount=1").then((res) => res.json())
    );
    yield put({ type: FETCH_QUESTION_SUCCESS, payload: response.results[0] });
  } catch (error) {
    yield put({ type: FETCH_QUESTION_FAILURE, payload: error.message });
  }
}

function* nextQuestionSaga() {
  const state = yield select();

  if (state.currentIndex >= state.totalQuestions - 1) {
    yield put({ type: FINISH_QUIZ });
  } else {
    yield put({ type: FETCH_QUESTION_REQUEST });
  }
}

export default function* triviaSaga() {
  yield takeEvery(FETCH_QUESTION_REQUEST, fetchQuestionSaga);
  yield takeEvery(NEXT_QUESTION, nextQuestionSaga);
}
