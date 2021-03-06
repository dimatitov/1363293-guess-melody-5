import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import {GameType} from "../../const";

class QuestionGenreScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      answers: [false, false, false, false],
    };
  }

  handleClickChoiceAnswer(event) {
    const {question, onAnswer} = this.props;
    event.preventDefault();
    onAnswer(question, this.state.answers);
  }

  render() {
    const {question} = this.props;
    const {answers: userAnswers} = this.state;
    return (
      <section className="game game--artist">
        <header className="game__header">
          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="/img/melody-logo-ginger.png" alt="Угадай мелодию"/>
          </a>
          <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
            <circle className="timer__line" cx="390" cy="390" r="370" style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}}/>
          </svg>
          <div className="game__mistakes">
            <div className="wrong"/>
            <div className="wrong"/>
            <div className="wrong"/>
          </div>
        </header>
        <section className="game__screen">
          <h2 className="game__title">Выберите {question.genre} треки</h2>
          <form className="game__tracks" onSubmit={this.handleClickChoiceAnswer}>
            {question.answers.map((answer, i) => (
              <div className="track" key={`${i}-${answer.src}`}>
                <button className="track__button track__button--play" type="button"/>
                <div className="track__status">
                  <audio src={answer.src}/>
                </div>
                <div className="game__answer">
                  <input
                    className="game__input visually-hidden"
                    type="checkbox" name="answer"
                    value="answer-1"
                    id={`answer-${i}`}
                    checked={userAnswers[i]}
                    onChange={(event) => {
                      const value = event.target.checked;
                      this.setState({
                        answers: [...userAnswers.slice(0, i), value, ...userAnswers.slice(i + 1)],
                      });
                    }}
                  />
                  <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
                </div>
              </div>
            ))}
            <button className="game__submit button" type="submit">Ответить</button>
          </form>
        </section>
      </section>
    );
  }
}

QuestionGenreScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
    })),
    genre: PropTypes.string.isRequired,
    type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
  })
};

export default QuestionGenreScreen;
