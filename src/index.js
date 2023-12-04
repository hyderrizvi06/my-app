import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Test from './test.js';
import App from './App';
import reportWebVitals from './reportWebVitals';

//var element = React.createElement('div', { className: 'greeting' }, React.createElement('h1', { className: 'header' }, 'Header'), React.createElement('body', { className: 'body' }, 'Testing\n\nTesting'));
ReactDOM.render(<Test/>, document.getElementById('root'));

reportWebVitals();