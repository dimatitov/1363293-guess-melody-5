import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import WelcomeScreen from "../WelcomeScreen/welcome-screen";
import Login from "../Login/login";
import QuestionArtist from "../QuestionArtist/question-artist";
import QuestionGenre from "../QuestionGenre/question-genre";
import ResultSuccess from "../ResultSuccess/result-success";
import FailTries from "../FailTries/fail-tries";

const App = ({errorCounter}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`/`}>
          <WelcomeScreen errorCounter={errorCounter}/>
        </Route>
        <Route exact path={`/login`}>
          <Login />
        </Route>
        <Route exact path={`/dev-artist`}>
          <QuestionArtist />
        </Route>
        <Route exact path={`/dev-genre`}>
          <QuestionGenre />
        </Route>
        <Route exact path={`/result`}>
          <ResultSuccess />
        </Route>
        <Route exact path={`/lose`}>
          <FailTries />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorCounter: PropTypes.number.isRequired
};

export default App;
