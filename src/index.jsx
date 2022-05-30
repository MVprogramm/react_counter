import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import Counter from './Counter.jsx';

const rootElem = document.querySelector('#root');

ReactDOM.render(
  <Counter 
    start={17}
    interval={1000}
  />,
  rootElem
);