import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App/app";

ReactDOM.render(
    <App errorCounter={3}/>,
    document.getElementById(`root`)
);
