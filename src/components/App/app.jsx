import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import WelcomeScreen from "../WelcomeScreen/welcome-screen";
import LoginScreen from "../LoginScreen/login-screen";
import QuestionArtistScreen from "../QuestionArtistScreen/question-artist-screen";
import QuestionGenreScreen from "../QuestionGenreScreen/question-genre-screen";
import ResultSuccessScreen from "../ResultSuccessScreen/result-success-screen";
import FailTriesScreen from "../FailTriesScreen/fail-tries-screen";

const App = ({errorCounter}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`/`}>
          <WelcomeScreen errorCounter={errorCounter}/>
        </Route>
        <Route exact path={`/login`}>
          <LoginScreen />
        </Route>
        <Route exact path={`/dev-artist`}>
          <QuestionArtistScreen />
        </Route>
        <Route exact path={`/dev-genre`}>
          <QuestionGenreScreen />
        </Route>
        <Route exact path={`/result`}>
          <ResultSuccessScreen />
        </Route>
        <Route exact path={`/lose`}>
          <FailTriesScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorCounter: PropTypes.number.isRequired
};

export default App;
