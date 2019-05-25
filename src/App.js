import React from "react";
import LandingPage from "./components/LandingPage";
import Quiz from "./components/Quiz";
import { Provider } from "react-redux";
import store from "./state/store/index";
import { Route, BrowserRouter as Router } from "react-router-dom";

import "./styles/app.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/quiz" component={Quiz} />
      </Router>
    </Provider>
  );
}

export default App;
