import React, {Fragment} from 'react';
import PropTypes from "prop-types";
import {GameType} from "../../const";


const QuestionArtistScreen = ({question, onAnswer}) => {
  return (
    <Fragment>
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
          <h2 className="game__title">Кто исполняет эту песню?</h2>
          <div className="game__track">
            <div className="track">
              <button className="track__button track__button--play" type="button"/>
              <div className="track__status">
                <audio
                  src={question.song.src}
                />
              </div>
            </div>
          </div>
          <form className="game__artist">
            {question.answers.map((answer, i) => (
              <div className="artist" key={`${answer.artist}`}>
                <input
                  className="artist__input visually-hidden"
                  type="radio"
                  name="answer"
                  value={`answer-${i}`}
                  id={`answer-${i}`}
                  onChange={(event) => {
                    event.preventDefault();
                    onAnswer(question, answer);
                  }}
                />
                <label className="artist__name" htmlFor={`answer-${i}`}>
                  <img className="artist__picture" src={answer.picture} alt={answer.artist}/>
                  {answer.artist}
                </label>
              </div>
            ))};
          </form>
        </section>
      </section>
    </Fragment>
  );
};

QuestionArtistScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    song: PropTypes.shape({
      src: PropTypes.string.isRequired
    }),
    answers: PropTypes.arrayOf(PropTypes.shape({
      picture: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired
    })),
    type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
  })
};

export default QuestionArtistScreen;
