import React from 'react';
import ReactDOM from 'react-dom';
import Graph from './components/graph.jsx';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Graph />, root);
});
