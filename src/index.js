import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './assets/styles/parent.scss';

document.addEventListener('DOMContentLoaded', () => {

  ReactDOM.render(<App />, document.getElementById('root'));
})