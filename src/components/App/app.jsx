import React from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from "../WelcomeScreen/welcome-screen";

const App = ({errorCounter}) => {
  return (
    <WelcomeScreen errorCounter={errorCounter}/>
  );
};

App.propTypes = {
  errorCounter: PropTypes.number.isRequired
};

export default App;
