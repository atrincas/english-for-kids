import { combineReducers } from "redux";
import { createStore } from "redux";

import quizPage from "../reducers/quizPage";
import landingPage from "../reducers/landingPage";

var combinedReducers = combineReducers({
  quizPage,
  landingPage
});

const store = createStore(
  combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
