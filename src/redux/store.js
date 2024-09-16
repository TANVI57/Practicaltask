import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import triviaReducer from "./reducers/triviaReducer";
import triviaSaga from "./sagas/triviaSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(triviaReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(triviaSaga);

export default store;
