import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App/app";
import questions from "./mocks/questions";

ReactDOM.render(
    <App errorCounter={3} questions={questions}/>,
    document.getElementById(`root`)
);
