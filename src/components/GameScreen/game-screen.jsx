import React, {PureComponent} from "react";
import {Redirect} from "react-router-dom";
import PropTypes from "prop-types";
import {GameType} from "../../const";
import QuestionGenreScreen from "../QuestionGenreScreen/question-genre-screen";
import QuestionArtistScreen from "../QuestionArtistScreen/question-artist-screen";

class GameScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
    };
  }

  render() {
    const {questions} = this.props;
    console.log("questions in gameScreen: ", questions);
    const {step} = this.state;
    const question = questions[step];

    if (step >= questions.length || !question) {
      return (
        <Redirect to="/" />
      );
    }
    console.log("question: ", question);

    switch (question.type) {
      case GameType.ARTIST:
        return (
          <QuestionArtistScreen
            question={question}
            onAnswer={() => {
              this.setState((prevState) => ({
                step: prevState.step + 1,
              }));
            }}
          />
        );
      case GameType.GENRE:
        return (
          <QuestionGenreScreen
            question={question}
            onAnswer={() => {
              this.setState((prevState) => ({
                step: prevState.step + 1,
              }));
            }}
          />
        );
    }

    return <Redirect to="/" />;
  }
}

GameScreen.propTypes = {
  questions: PropTypes.array.isRequired
};

export default GameScreen;
