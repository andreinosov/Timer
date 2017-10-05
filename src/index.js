import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let index = true ? null : true;

ReactDOM.render(
  <App start={Date.now()} />,
  document.getElementById('root')
);
