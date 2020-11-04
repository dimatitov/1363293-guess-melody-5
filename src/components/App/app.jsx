import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import WelcomeScreen from "../WelcomeScreen/welcome-screen";
import LoginScreen from "../LoginScreen/login-screen";
import QuestionArtistScreen from "../QuestionArtistScreen/question-artist-screen";
import QuestionGenreScreen from "../QuestionGenreScreen/question-genre-screen";
import ResultSuccessScreen from "../ResultSuccessScreen/result-success-screen";
import FailTriesScreen from "../FailTriesScreen/fail-tries-screen";
import GameScreen from "../GameScreen/game-screen";


const App = ({errorCounter, questions}) => {
  const [firstQuestion, secondQuestion] = questions;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact
          path={`/`}
          render={({history}) => (
            <WelcomeScreen
              errorCounter={errorCounter}
              onPlayButtonScreen={() => history.push(`/game`)}
            />
          )}
        />
        <Route exact path={`/login`}>
          <LoginScreen />
        </Route>
        <Route exact path={`/dev-artist`}>
          <QuestionArtistScreen
            question={secondQuestion}
            onAnswer={() => {}}
          />
        </Route>
        <Route exact path={`/dev-genre`}>
          <QuestionGenreScreen
            onAnswer={() => {}}
            question={firstQuestion}
          />
        </Route>
        <Route exact path={`/result`}>
          <ResultSuccessScreen />
        </Route>
        <Route exact path={`/lose`}>
          <FailTriesScreen />
        </Route>
        <Route exact path={`/game`}>
          <GameScreen
            questions={questions}
            errorsCount={errorCounter}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorCounter: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired
};

export default App;
