import React from 'react';
import ReactDOM from 'react-dom';
import DataRender from './components/data_render';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<DataRender />, root);
});
